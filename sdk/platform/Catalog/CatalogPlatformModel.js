const Joi = require("joi");

class CatalogModel {
  static Page() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      current: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      result: Joi.any(),
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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
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
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

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

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),
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

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      page: CatalogModel.AutocompletePageAction(),
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

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
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

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
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

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      min_effective: Joi.number(),

      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      short_description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      quantity: Joi.number(),

      price: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      uid: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      choice: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.GetProducts()),
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
      subtitle: Joi.string().allow(""),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      guide: CatalogModel.Guide(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
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
      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      guide: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      active: Joi.boolean(),

      company_id: Joi.number(),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
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
      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_gift: Joi.boolean(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static MOQData() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

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
      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      moq: CatalogModel.MOQData(),

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      default_key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

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
      display: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      key: Joi.string().allow(""),

      filter_types: Joi.array().items(Joi.string().allow("")),
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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      detail: Joi.any(),

      variant: Joi.any(),

      compare: Joi.any(),

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

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      map: Joi.any(),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

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

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize().required(),

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
      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize(),

      logo: Joi.string().allow(""),

      title: Joi.string().allow(""),

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

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

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
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
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
      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      display_format: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),

      value: Joi.any().required(),

      selected_min: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      selected_max: Joi.number(),

      count: Joi.number(),
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

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
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

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
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
      is_active: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      type: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      created_by: CatalogModel.UserInfo(),

      logo: CatalogModel.CollectionImage().required(),

      _schedule: CatalogModel.CollectionSchedule(),

      sort_on: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      app_id: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      published: Joi.boolean(),
    });
  }

  static BannerImage() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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
      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      badge: Joi.any(),

      logo: CatalogModel.BannerImage(),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),

      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),
    });
  }

  static ActionPage() {
    return Joi.object({
      query: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static Action() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: CatalogModel.ActionPage(),
    });
  }

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      action: CatalogModel.Action(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      badge: Joi.any(),

      logo: CatalogModel.Media1(),

      _schedule: Joi.any(),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),
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
      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      meta: Joi.any(),

      badge: Joi.any(),

      logo: CatalogModel.Media1(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _schedule: Joi.any(),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      is_active: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      logo: CatalogModel.CollectionImage(),

      _schedule: CatalogModel.CollectionSchedule(),

      sort_on: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      _locale_language: Joi.any(),

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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
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
      item_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      sellable: Joi.boolean(),

      rating_count: Joi.number(),

      promo_meta: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      similars: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      uid: Joi.number(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_articles: Joi.number(),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      count: Joi.number(),

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

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      enabled: Joi.boolean().required(),

      company_id: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

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
      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
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
      address: Joi.any(),

      display_name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      timing: Joi.any(),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      uid: Joi.number(),

      manager: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      additional_contacts: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      mandatory: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      multi: Joi.boolean(),
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
      is_nested: Joi.boolean(),

      slug: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),

      logo: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      errors: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      platforms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

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
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      priority_order: Joi.number(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      search: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      page_size: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      created_by: CatalogModel.UserSerializer(),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      page_no: Joi.number(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      errors: Joi.any(),

      status: Joi.number(),
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
      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      created_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      name: Joi.any().required(),

      _cls: Joi.any(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),
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
      is_active: Joi.any(),

      item_type: Joi.any(),

      trader: Joi.any(),

      custom_order: Joi.any(),

      media: Joi.any(),

      category_slug: Joi.any(),

      currency: Joi.any(),

      name: Joi.any(),

      sizes: Joi.any(),

      hsn_code: Joi.any(),

      tags: Joi.any(),

      item_code: Joi.any(),

      no_of_boxes: Joi.any(),

      description: Joi.any(),

      size_guide: Joi.any(),

      product_publish: Joi.any(),

      trader_type: Joi.any(),

      brand_uid: Joi.any(),

      product_group_tag: Joi.any(),

      command: Joi.any(),

      teaser_tag: Joi.any(),

      short_description: Joi.any(),

      slug: Joi.any(),

      highlights: Joi.any(),

      multi_size: Joi.any(),

      is_dependent: Joi.any(),

      variants: Joi.any(),

      country_of_origin: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      type: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),
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
      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
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
      hsn_code: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.array().items(Joi.string().allow("")),
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
      template_tags: Joi.any(),

      data: CatalogModel.ProductDownloadItemsData(),

      url: Joi.string().allow(""),

      seller_id: Joi.number(),

      completed_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow(""),
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

      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
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
      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),
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
      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      id: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.string().allow(""),
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

      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),
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

      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),
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
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      is_set: Joi.boolean(),

      is_active: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      custom_order: CatalogModel.CustomOrder(),

      variant_group: Joi.any(),

      template_tag: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      category_slug: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      name: Joi.any().required(),

      net_quantity: CatalogModel.NetQuantity(),

      return_config: CatalogModel.ReturnConfig().required(),

      is_image_less_product: Joi.boolean(),

      action: Joi.string().allow(""),

      company_id: Joi.number().required(),

      requester: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      bulk_job_id: Joi.string().allow(""),

      item_code: Joi.any().required(),

      description: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      size_guide: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      brand_uid: Joi.number().required(),

      change_request_id: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      teaser_tag: CatalogModel.TeaserTag(),

      _custom_json: Joi.any(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      uid: Joi.number().allow(null),

      multi_size: Joi.boolean(),

      is_dependent: Joi.boolean(),

      variants: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      is_set: Joi.boolean(),

      is_active: Joi.boolean(),

      item_type: Joi.string().allow(""),

      custom_order: Joi.any(),

      variant_group: Joi.any(),

      template_tag: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      category_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      size_guide: Joi.string().allow(""),

      color: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      is_physical: Joi.boolean(),

      brand_uid: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      category_uid: Joi.number(),

      tax_identifier: Joi.any(),

      _custom_json: Joi.any(),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      uid: Joi.number(),

      multi_size: Joi.boolean(),

      is_dependent: Joi.boolean(),

      images: Joi.array().items(CatalogModel.Image()),

      variants: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),
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

      uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      details: CatalogModel.AttributeMasterDetails().required(),

      unit: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      name: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      variant: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      synonyms: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      is_nested: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      schema: CatalogModel.AttributeMaster().required(),

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
      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      is_active: Joi.boolean(),

      custom_template_tag: Joi.string().allow(""),

      failed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      failed_records: Joi.array().items(Joi.any()),

      company_id: Joi.number().required(),

      file_path: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      total: Joi.number(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static UserDetail1() {
    return Joi.object({
      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      is_active: Joi.boolean(),

      template: CatalogModel.ProductTemplate(),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      created_by: CatalogModel.UserDetail1(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      cancelled: Joi.number(),

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
      user: Joi.any().required(),

      company_id: Joi.number(),

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
      retry: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      created_by: CatalogModel.UserCommon(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      file_path: Joi.string().allow(""),

      id: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      cancelled: Joi.number(),

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

      item_id: Joi.number(),

      company_id: Joi.number(),
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

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),
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

      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),
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
      is_set: Joi.boolean(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      price_transfer: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      price: Joi.number(),

      quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      store_code: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      size: Joi.any().required(),

      price_effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),
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
      seller_identifier: Joi.string().allow(""),

      store: Joi.any(),

      price_transfer: Joi.number(),

      price: Joi.number(),

      quantity: Joi.number(),

      sellable_quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      size: Joi.string().allow(""),

      price_effective: Joi.number(),

      item_id: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static StoreMeta() {
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

  static QuantityBase() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static Quantities() {
    return Joi.object({
      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
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

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),

      length: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),
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
      is_set: Joi.boolean(),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      identifier: Joi.any().required(),

      fynd_article_code: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      track_inventory: Joi.boolean(),

      store: CatalogModel.StoreMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      set: CatalogModel.InventorySet(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantities: CatalogModel.Quantities(),

      brand: CatalogModel.BrandMeta().required(),

      company: CatalogModel.CompanyMeta().required(),

      weight: CatalogModel.WeightResponse().required(),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      fragile: Joi.boolean().required(),

      fynd_item_code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      raw_meta: Joi.any(),

      price: CatalogModel.PriceMeta().required(),

      meta: Joi.any().allow(null),

      added_on_store: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      fynd_meta: Joi.any(),

      return_config: CatalogModel.ReturnConfig1(),

      item_id: Joi.number().required(),
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
      is_active: Joi.boolean(),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      file_path: Joi.string().allow(""),

      id: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      cancelled: Joi.number(),

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
      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      price: Joi.number(),

      quantity: Joi.number(),

      store_code: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

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
      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      request_params: Joi.any(),

      url: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

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

      total_quantity: Joi.number().allow(null),

      store_id: Joi.number().required(),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),
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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax2: Joi.number(),

      is_active: Joi.boolean(),

      threshold1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number().required(),

      tax1: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      uid: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      hsn_code: Joi.string().allow("").required(),

      threshold2: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax2: Joi.number(),

      threshold1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number(),

      tax1: Joi.number(),

      hs2_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      threshold2: Joi.number(),

      modified_on: Joi.string().allow(""),
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

      item_total: Joi.number(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),
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

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      reporting_hsn: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_on: Joi.string().allow(""),
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

      slug: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      priority_order: Joi.number(),
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

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.Child()),

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
      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      item_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),

      promo_meta: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      similars: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),
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
      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      meta: Joi.any(),

      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),

      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow("").required(),
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

      meta: Joi.any(),

      quantity: Joi.number().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      store_pincode: Joi.number(),

      store_id: Joi.number(),

      status: Joi.boolean().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      uid: Joi.string().allow(""),

      company_id: Joi.number(),

      price_marked: Joi.number(),

      index: Joi.number(),

      s_city: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      item_id: Joi.number().required(),

      _id: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
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
      verified_by: CatalogModel.UserSerializer2(),

      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      created_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      verified_by: CatalogModel.UserSerializer1(),

      stage: Joi.string().allow(""),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      verified_on: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      manager: CatalogModel.LocationManagerSerializer(),

      store_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CatalogModel.GetAddressSerializer().required(),

      code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      company: CatalogModel.GetCompanySerializer(),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      created_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      _custom_json: Joi.any(),

      integration_type: CatalogModel.LocationIntegrationType(),

      uid: Joi.number(),

      warnings: Joi.any(),
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
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

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
}
module.exports = CatalogModel;
