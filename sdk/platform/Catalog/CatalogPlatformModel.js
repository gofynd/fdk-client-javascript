const Joi = require("joi");

class CatalogModel {
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      result: Joi.any(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

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
      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),
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
      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
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
      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: Joi.any(),

      params: Joi.any(),

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

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      quantity: Joi.number(),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      identifier: Joi.any(),

      price: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      max_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number(),

      price: CatalogModel.Price(),

      min_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.GetProducts()),

      logo: Joi.string().allow(""),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      company_id: Joi.number(),

      id: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      brand_id: Joi.number(),

      image: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      guide: CatalogModel.Guide(),

      modified_by: Joi.any(),

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
      company_id: Joi.number(),

      id: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      guide: Joi.any(),

      modified_by: Joi.any(),

      tag: Joi.string().allow(""),
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

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_gift: Joi.boolean(),

      seo: CatalogModel.SEOData(),

      is_cod: Joi.boolean(),

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

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
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
      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_active: Joi.boolean().required(),

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
      current: Joi.number().required(),

      total_count: Joi.number().required(),

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

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      similar: Joi.any(),

      compare: Joi.any(),

      variant: Joi.any(),

      detail: Joi.any(),
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

  static MetaDataListingResponse() {
    return Joi.object({
      filter: CatalogModel.MetaDataListingFilterResponse().required(),

      sort: CatalogModel.MetaDataListingSortResponse().required(),
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

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize(),

      subtitle: Joi.string().allow(""),

      priority: Joi.number().required(),

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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

  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),

      variant: CatalogModel.ConfigurationProductVariant().required(),
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

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      key: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),
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

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),
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

  static AppConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      modified_by: Joi.any(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      id: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      modified_by: Joi.any(),
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
      id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

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
      value: Joi.any().required(),

      selected_max: Joi.number(),

      currency_code: Joi.string().allow(""),

      selected_min: Joi.number(),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      max: Joi.number(),

      count: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),
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

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
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

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      created_by: CatalogModel.UserInfo(),

      badge: CatalogModel.CollectionBadge(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      published: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      _schedule: CatalogModel.CollectionSchedule(),

      logo: CatalogModel.CollectionImage().required(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      type: Joi.string().allow("").required(),

      seo: CatalogModel.SeoDetail(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      banners: CatalogModel.CollectionBanner().required(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),
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

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      logo: CatalogModel.BannerImage(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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
      badge: Joi.any(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: CatalogModel.Action(),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),
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

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      published: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      _schedule: CatalogModel.CollectionSchedule(),

      logo: CatalogModel.CollectionImage(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      _locale_language: Joi.any(),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      type: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      name: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),
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

  static Price1() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),

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
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      rating: Joi.number(),

      promo_meta: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      teaser_tag: Joi.any(),

      sellable: Joi.boolean(),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),
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
      enabled: Joi.boolean(),

      company_id: Joi.number(),

      platform: Joi.string().allow(""),

      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      company_id: Joi.number().required(),

      enabled: Joi.boolean().required(),

      created_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      modified_on: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      store_ids: Joi.array().items(Joi.number()).required(),
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
      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      brand_id: Joi.number(),

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

      display_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      documents: Joi.array().items(Joi.any()),

      additional_contacts: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      timing: Joi.any(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.any(),
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
      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),
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

  static GenderDetail() {
    return Joi.object({
      is_nested: Joi.boolean(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      meta: CatalogModel.AttributeMasterMeta(),

      enabled_for_end_consumer: Joi.boolean(),

      name: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      details: CatalogModel.AttributeMasterDetails(),

      filters: CatalogModel.AttributeMasterFilter(),
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
      errors: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      platforms: Joi.any(),

      _cls: Joi.string().allow(""),
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

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_no: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      search: Joi.string().allow(""),

      page_size: Joi.number(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),
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

      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      slug: Joi.any(),

      _id: Joi.any(),

      priority_order: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.any()),

      name: Joi.any().required(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail(),

      _cls: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),
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
      no_of_boxes: Joi.any(),

      currency: Joi.any(),

      media: Joi.any(),

      is_dependent: Joi.any(),

      highlights: Joi.any(),

      sizes: Joi.any(),

      teaser_tag: Joi.any(),

      item_code: Joi.any(),

      country_of_origin: Joi.any(),

      slug: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.any(),

      hsn_code: Joi.any(),

      custom_order: Joi.any(),

      size_guide: Joi.any(),

      name: Joi.any(),

      trader_type: Joi.any(),

      brand_uid: Joi.any(),

      product_group_tag: Joi.any(),

      item_type: Joi.any(),

      description: Joi.any(),

      product_publish: Joi.any(),

      tags: Joi.any(),

      category_slug: Joi.any(),

      return_config: Joi.any(),

      command: Joi.any(),

      multi_size: Joi.any(),

      is_active: Joi.any(),

      trader: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),
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

      slug: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),
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

      template_tags: Joi.any(),

      id: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      seller_id: Joi.number(),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

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

      department: Joi.number().required(),

      l1: Joi.number().required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      marketplaces: CatalogModel.CategoryMapping(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),
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

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Category()),

      page: CatalogModel.Page(),
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

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

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

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),
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
      is_image_less_product: Joi.boolean(),

      no_of_boxes: Joi.number(),

      currency: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      is_dependent: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      sizes: Joi.array().items(Joi.any()).required(),

      attributes: Joi.any(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      teaser_tag: CatalogModel.TeaserTag(),

      item_code: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      change_request_id: Joi.any(),

      company_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      variants: Joi.any(),

      variant_media: Joi.any(),

      short_description: Joi.string().allow(""),

      uid: Joi.number().allow(null),

      action: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      requester: Joi.string().allow(""),

      template_tag: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      item_type: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      description: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      tags: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      net_quantity: CatalogModel.NetQuantity(),

      category_slug: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      multi_size: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig().required(),

      is_active: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
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

  static Product() {
    return Joi.object({
      is_image_less_product: Joi.boolean(),

      no_of_boxes: Joi.number(),

      currency: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      created_by: Joi.any(),

      is_dependent: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      is_expirable: Joi.boolean(),

      attributes: Joi.any(),

      pending: Joi.string().allow(""),

      modified_by: Joi.any(),

      tax_identifier: Joi.any(),

      teaser_tag: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      images: Joi.array().items(CatalogModel.Image()),

      slug: Joi.string().allow(""),

      variants: Joi.any(),

      company_id: Joi.number(),

      all_company_ids: Joi.array().items(Joi.number()),

      variant_media: Joi.any(),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      custom_order: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.Brand(),

      template_tag: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      brand_uid: Joi.number(),

      moq: Joi.any(),

      color: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      item_type: Joi.string().allow(""),

      variant_group: Joi.any(),

      description: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      tags: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_set: Joi.boolean(),

      category_slug: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      return_config: CatalogModel.ReturnConfigResponse(),

      category: Joi.any(),

      modified_on: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      category_uid: Joi.number(),

      is_active: Joi.boolean(),

      trader: Joi.array().items(Joi.any()),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      category_uid: Joi.number(),
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

      created_by: Joi.any(),

      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      suggestion: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      synonyms: Joi.any(),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      raw_key: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      enabled_for_end_consumer: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      unit: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      variant: Joi.boolean(),
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

      item_length: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_height: Joi.number().required(),

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

  static UserInfo1() {
    return Joi.object({
      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      total: Joi.number(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      company_id: Joi.number().required(),

      stage: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      tracking_url: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      succeed: Joi.number(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      failed: Joi.number(),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      custom_template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),
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

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      succeed: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      failed: Joi.number(),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail1(),
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
      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
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
      username: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      total: Joi.number(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      retry: Joi.number(),

      failed: Joi.number(),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserCommon(),
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
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

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
      quantity: Joi.number(),

      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),
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
      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      store_code: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      size: Joi.any().required(),

      quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      price_effective: Joi.number().required(),

      is_set: Joi.boolean(),

      item_length: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_width: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_height: Joi.number().allow(null),

      price: Joi.number(),

      item_weight: Joi.number().allow(null),
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
      inventory_updated_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price_transfer: Joi.number(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      identifiers: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price: Joi.number(),

      store: Joi.any(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),
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

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),
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

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

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
      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      item_id: Joi.number().required(),

      created_by: CatalogModel.UserSerializer(),

      set: CatalogModel.InventorySet(),

      identifier: Joi.any().required(),

      meta: Joi.any().allow(null),

      price: CatalogModel.PriceMeta().required(),

      modified_by: CatalogModel.UserSerializer(),

      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      weight: CatalogModel.WeightResponse().required(),

      brand: CatalogModel.BrandMeta().required(),

      fynd_meta: Joi.any(),

      fynd_article_code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().required(),

      raw_meta: Joi.any(),

      fynd_item_code: Joi.string().allow("").required(),

      dimension: CatalogModel.DimensionResponse().required(),

      store: CatalogModel.StoreMeta().required(),

      expiration_date: Joi.string().allow(""),

      _custom_json: Joi.any(),

      company: CatalogModel.CompanyMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig1(),

      fragile: Joi.boolean().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      added_on_store: Joi.string().allow(""),

      is_active: Joi.boolean(),

      quantities: CatalogModel.Quantities(),

      trader: Joi.array().items(CatalogModel.Trader1()),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),
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

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      width: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),
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

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
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
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

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
      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
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
      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      price: CatalogModel.PriceArticle(),

      modified_by: CatalogModel.UserSerializer(),

      tax_identifier: Joi.any(),

      platforms: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      weight: CatalogModel.WeightResponse1(),

      brand: CatalogModel.BrandMeta1(),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number(),

      dimension: CatalogModel.DimensionResponse1(),

      store: CatalogModel.ArticleStoreResponse(),

      expiration_date: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig2(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      identifier: Joi.any(),

      quantities: CatalogModel.QuantitiesArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),
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

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      created_by: Joi.any(),

      succeed: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      failed: Joi.number(),

      cancelled: Joi.number(),

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
      item_weight_unit_of_measure: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      quantity: Joi.number(),

      total_quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow("").allow(null),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_marked: Joi.number(),

      price: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),
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
      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
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
      expiration_date: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().allow(null),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),
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
      threshold1: Joi.number().required(),

      tax2: Joi.number(),

      company_id: Joi.number().required(),

      uid: Joi.number(),

      threshold2: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      is_active: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax1: Joi.number().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      threshold1: Joi.number(),

      tax2: Joi.number(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      threshold2: Joi.number(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),

      tax1: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.HsnCodesObject()),

      page: CatalogModel.PageResponse(),
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

      rate: Joi.number().required(),

      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      reporting_hsn: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      country_code: Joi.string().allow("").required(),
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
      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

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
      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

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
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

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

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      rating: Joi.number(),

      promo_meta: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      teaser_tag: Joi.any(),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),
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
      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow("").required(),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      group_id: Joi.string().allow(""),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      channel_identifier: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),
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
      group_id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      company_id: Joi.number(),

      price_marked: Joi.number(),

      size: Joi.string().allow("").required(),

      _id: Joi.string().allow(""),

      item_id: Joi.number().required(),

      status: Joi.boolean().required(),

      quantity: Joi.number().required(),

      store_pincode: Joi.number(),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      meta: Joi.any(),

      index: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      store_id: Joi.number(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),
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
      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),
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
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      name: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),
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
      display_name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer1(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      modified_by: CatalogModel.UserSerializer1(),

      manager: CatalogModel.LocationManagerSerializer(),

      warnings: Joi.any(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      store_type: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      _custom_json: Joi.any(),

      code: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      modified_on: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      verified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),
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

      _custom_json: Joi.any(),

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

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
