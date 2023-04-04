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
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      result: CatalogModel.SearchKeywordResult().required(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      result: Joi.any(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

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

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
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

  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      params: Joi.any(),

      query: Joi.any(),

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
      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

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

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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
      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      min_marked: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      identifier: Joi.any(),

      short_description: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),

      attributes: Joi.any(),

      uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      product_details: CatalogModel.LimitedProductData(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      company_id: Joi.number(),
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
      modified_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      active: Joi.boolean(),

      guide: CatalogModel.Guide(),

      id: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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

      title: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      active: Joi.boolean(),

      guide: Joi.any(),

      id: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_cod: Joi.boolean(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_gift: Joi.boolean(),
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
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),
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
      is_active: Joi.boolean().required(),

      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      key: Joi.string().allow(""),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

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
      has_next: Joi.boolean().required(),

      total_count: Joi.number().required(),

      current: Joi.number().required(),

      next: Joi.number().required(),
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
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

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

      key: Joi.string().allow(""),

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

      variant: Joi.any(),

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

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize().required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

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
      is_active: Joi.boolean().required(),

      title: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

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
      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

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
      display: Joi.string().allow(""),

      start: Joi.number(),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

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
      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),
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
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      max: Joi.number(),

      is_selected: Joi.boolean().required(),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      value: Joi.any().required(),

      currency_code: Joi.string().allow(""),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),
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

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
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

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
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

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),
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

  static CreateCollection() {
    return Joi.object({
      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo(),

      allow_sort: Joi.boolean(),

      _locale_language: Joi.any(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      modified_by: CatalogModel.UserInfo(),

      badge: CatalogModel.CollectionBadge(),

      allow_facets: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow("").required(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      description: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner().required(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),
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
      sort_on: Joi.string().allow(""),

      cron: Joi.any(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      cron: Joi.any(),

      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

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
      cron: Joi.any(),

      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _locale_language: Joi.any(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      modified_by: CatalogModel.UserInfo(),

      badge: CatalogModel.CollectionBadge(),

      allow_facets: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      description: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      promo_meta: Joi.any(),

      teaser_tag: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      rating_count: Joi.number(),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      sellable: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      image_nature: Joi.string().allow(""),
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

  static CatalogInsightItem() {
    return Joi.object({
      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),

      available_articles: Joi.number(),

      article_freshness: Joi.number(),

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
      brand_distribution: CatalogModel.CatalogInsightBrand(),

      data: CatalogModel.CrossSellingData(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      opt_level: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      company_id: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

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
      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
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
      company: Joi.string().allow(""),

      store: Joi.number(),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      manager: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      documents: Joi.array().items(Joi.any()),

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

  static AttributeMasterFilter() {
    return Joi.object({
      indexing: Joi.boolean().required(),

      priority: Joi.number(),

      depends_on: Joi.array().items(Joi.string().allow("")),
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
      range: CatalogModel.AttributeSchemaRange(),

      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      format: Joi.string().allow(""),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      is_nested: Joi.boolean(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      meta: CatalogModel.AttributeMasterMeta(),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      schema: CatalogModel.AttributeMaster(),

      name: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      slug_key: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      errors: Joi.any(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),
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
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      page_size: Joi.number(),

      modified_on: Joi.string().allow(""),

      page_no: Joi.number(),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      search: Joi.string().allow(""),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),
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

      meta: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      _id: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      created_by: Joi.any(),

      is_expirable: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),
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
      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      id: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Properties() {
    return Joi.object({
      item_code: Joi.any(),

      highlights: Joi.any(),

      command: Joi.any(),

      product_publish: Joi.any(),

      category_slug: Joi.any(),

      item_type: Joi.any(),

      is_active: Joi.any(),

      size_guide: Joi.any(),

      short_description: Joi.any(),

      brand_uid: Joi.any(),

      country_of_origin: Joi.any(),

      media: Joi.any(),

      custom_order: Joi.any(),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.any(),

      trader_type: Joi.any(),

      sizes: Joi.any(),

      multi_size: Joi.any(),

      currency: Joi.any(),

      tags: Joi.any(),

      is_dependent: Joi.any(),

      name: Joi.any(),

      hsn_code: Joi.any(),

      slug: Joi.any(),

      trader: Joi.any(),

      no_of_boxes: Joi.any(),

      description: Joi.any(),

      variants: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),

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
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      url: Joi.string().allow(""),

      seller_id: Joi.number(),

      completed_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      created_by: CatalogModel.VerifiedBy(),

      task_id: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),
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
      multivalue: Joi.boolean(),

      data: Joi.array().items(Joi.any()),
    });
  }

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
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

      department: Joi.number().required(),

      l2: Joi.number().required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),

      media: CatalogModel.Media2(),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
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
      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      priority: Joi.number(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      media: CatalogModel.Media2(),

      created_by: Joi.any(),

      level: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      modified_by: Joi.any(),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),
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
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      item_code: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      product_publish: CatalogModel.ProductPublish(),

      template_tag: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      category_slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      brand_uid: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      custom_order: CatalogModel.CustomOrder(),

      teaser_tag: CatalogModel.TeaserTag(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      bulk_job_id: Joi.string().allow(""),

      company_id: Joi.number().required(),

      net_quantity: CatalogModel.NetQuantity(),

      sizes: Joi.array().items(Joi.any()).required(),

      requester: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      is_image_less_product: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      no_of_boxes: Joi.number(),

      description: Joi.string().allow(""),

      is_set: Joi.boolean(),

      change_request_id: Joi.any(),

      _custom_json: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      action: Joi.string().allow(""),

      variants: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      variant_media: Joi.any(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
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
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      category_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublish1(),

      template_tag: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      category_slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      is_active: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      brand_uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      custom_order: Joi.any(),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      sizes: Joi.array().items(Joi.any()),

      category: Joi.any(),

      multi_size: Joi.boolean(),

      currency: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      hsn_code: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      trader: Joi.array().items(CatalogModel.Trader()),

      all_sizes: Joi.array().items(Joi.any()),

      no_of_boxes: Joi.number(),

      primary_color: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_set: Joi.boolean(),

      departments: Joi.array().items(Joi.number()),

      _custom_json: Joi.any(),

      moq: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      variants: Joi.any(),

      return_config: CatalogModel.ReturnConfigResponse(),

      variant_media: Joi.any(),

      is_physical: Joi.boolean(),

      tax_identifier: Joi.any(),

      image_nature: Joi.string().allow(""),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductSchemaV2()),
    });
  }

  static ProductVariants() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

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
      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      created_by: Joi.any(),

      synonyms: Joi.any(),

      suggestion: Joi.string().allow(""),

      variant: Joi.boolean(),

      raw_key: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      schema: CatalogModel.AttributeMaster().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

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
      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_height: Joi.number().required(),

      size: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").required(),
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
      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      category_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublished(),

      template_tag: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      category_slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      is_active: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      brand_uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      custom_order: Joi.any(),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      sizes: Joi.array().items(Joi.any()),

      category: Joi.any(),

      multi_size: Joi.boolean(),

      currency: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      hsn_code: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      trader: Joi.array().items(CatalogModel.Trader()),

      all_sizes: Joi.array().items(Joi.any()),

      no_of_boxes: Joi.number(),

      primary_color: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_set: Joi.boolean(),

      departments: Joi.array().items(Joi.number()),

      _custom_json: Joi.any(),

      moq: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      variants: Joi.any(),

      return_config: CatalogModel.ReturnConfigResponse(),

      variant_media: Joi.any(),

      is_physical: Joi.boolean(),

      tax_identifier: Joi.any(),

      image_nature: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
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
      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      cancelled_records: Joi.array().items(Joi.any()),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      template_tag: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      succeed: Joi.number(),

      failed: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number().required(),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static UserDetail1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      succeed: Joi.number(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),
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
      template_tag: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),
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

      username: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      failed: Joi.number(),

      retry: Joi.number(),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number(),

      modified_by: CatalogModel.UserCommon(),
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
      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      quantity: Joi.number().required(),

      price_effective: Joi.number().required(),

      item_height: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      size: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      price: Joi.number(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      quantity: Joi.number(),

      item_id: Joi.number(),

      price_effective: Joi.number(),

      store: Joi.any(),

      size: Joi.string().allow(""),

      price: Joi.number(),

      sellable_quantity: Joi.number(),

      identifiers: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price_transfer: Joi.number(),

      seller_identifier: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
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

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
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

  static QuantityBase() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static Quantities() {
    return Joi.object({
      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      item_id: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      raw_meta: Joi.any(),

      fragile: Joi.boolean().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      uid: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer(),

      expiration_date: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),

      is_active: Joi.boolean(),

      identifier: Joi.any().required(),

      total_quantity: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      trace_id: Joi.string().allow(""),

      fynd_meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      weight: CatalogModel.WeightResponse().required(),

      modified_by: CatalogModel.UserSerializer(),

      store: CatalogModel.StoreMeta().required(),

      company: CatalogModel.CompanyMeta().required(),

      added_on_store: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      fynd_item_code: Joi.string().allow("").required(),

      price: CatalogModel.PriceMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      tax_identifier: Joi.any(),

      track_inventory: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      is_set: Joi.boolean(),

      _custom_json: Joi.any(),

      return_config: CatalogModel.ReturnConfig1(),

      brand: CatalogModel.BrandMeta().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

      name: Joi.string().allow(""),
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

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
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

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
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
      not_available: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      item_id: Joi.number(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      inventory_updated_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      expiration_date: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      platforms: Joi.any(),

      identifier: Joi.any(),

      total_quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      date_meta: CatalogModel.DateMeta(),

      modified_by: CatalogModel.UserSerializer(),

      store: CatalogModel.ArticleStoreResponse(),

      company: CatalogModel.CompanyMeta1(),

      stage: Joi.string().allow(""),

      size: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      price: CatalogModel.PriceArticle(),

      tags: Joi.array().items(Joi.string().allow("")),

      tax_identifier: Joi.any(),

      track_inventory: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      is_set: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig2(),

      brand: CatalogModel.BrandMeta1(),
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
      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      succeed: Joi.number(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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
      item_weight_unit_of_measure: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      price: Joi.number(),

      price_marked: Joi.number(),

      store_code: Joi.string().allow("").required(),

      total_quantity: Joi.number(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      user: Joi.any(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      brand: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      url: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      price_effective: Joi.number(),

      store_id: Joi.number().required(),

      price_marked: Joi.number(),

      total_quantity: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),
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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      is_active: Joi.boolean(),

      threshold2: Joi.number(),

      tax2: Joi.number(),

      tax1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      uid: Joi.number(),

      threshold1: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      threshold2: Joi.number(),

      modified_on: Joi.string().allow(""),

      tax2: Joi.number(),

      id: Joi.string().allow(""),

      tax1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      threshold1: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number(),

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
      size: Joi.number(),

      current: Joi.string().allow(""),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      rate: Joi.number().required(),

      cess: Joi.number(),

      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      modified_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

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
      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),

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
      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
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

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      promo_meta: Joi.any(),

      teaser_tag: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      name: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      image_nature: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

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
      quantity: Joi.number(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment(),

      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),
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

      item_id: Joi.number().required(),

      price_effective: Joi.number(),

      group_id: Joi.string().allow(""),

      store_id: Joi.number(),

      size: Joi.string().allow("").required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      s_city: Joi.string().allow(""),

      price_marked: Joi.number(),

      uid: Joi.string().allow(""),

      meta: Joi.any(),

      index: Joi.number(),

      store_pincode: Joi.number(),

      company_id: Joi.number(),

      status: Joi.boolean().required(),

      _id: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      address_type: Joi.string().allow(""),

      latitude: Joi.number(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),
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

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
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

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      warnings: Joi.any(),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer1(),

      verified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      modified_on: Joi.string().allow(""),

      company: CatalogModel.GetCompanySerializer(),

      stage: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      documents: Joi.array().items(CatalogModel.Document()),

      display_name: Joi.string().allow("").required(),

      integration_type: CatalogModel.LocationIntegrationType(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      manager: CatalogModel.LocationManagerSerializer(),

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
      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

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
