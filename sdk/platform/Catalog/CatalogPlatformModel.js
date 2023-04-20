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

      message: Joi.string().allow(""),

      meta: Joi.any(),

      error: Joi.string().allow(""),

      status: Joi.number(),
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

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      result: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

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

      url: Joi.string().allow(""),

      params: Joi.any(),

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
      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

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

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      modified_by: Joi.any(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      modified_by: Joi.any(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),
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
      modified_by: Joi.any(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      identifier: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      name: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      company_id: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      unit: Joi.string().allow(""),

      values: Joi.array().items(Joi.any()),

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
      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      brand_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

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
      items: Joi.array().items(Joi.any()),

      page: Joi.any(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      title: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      id: Joi.string().allow(""),

      guide: Joi.any(),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),
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
      value: Joi.any().required(),

      key: Joi.any().required(),
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
      seo: CatalogModel.ApplicationItemSEO(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),
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
      title: Joi.any(),

      description: Joi.any(),
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
      seo: CatalogModel.SEOData(),

      alt_text: Joi.any(),

      moq: CatalogModel.MOQData(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),
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

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

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
      default_key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

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
      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      display: Joi.string().allow(""),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),
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

      end: Joi.number(),

      display: Joi.string().allow(""),
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
      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      priority: Joi.number().required(),
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
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

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

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize(),

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
      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),
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
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.EntityConfiguration(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_min: Joi.number(),

      min: Joi.number(),

      count: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      max: Joi.number(),

      is_selected: Joi.boolean().required(),

      value: Joi.any().required(),

      selected_max: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),
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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

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

  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

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

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

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
      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo(),

      published: Joi.boolean(),

      is_visible: Joi.boolean(),

      allow_facets: Joi.boolean(),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      banners: CatalogModel.CollectionBanner().required(),

      allow_sort: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _custom_json: Joi.any(),

      meta: Joi.any(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      logo: CatalogModel.CollectionImage().required(),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserInfo(),
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
      portrait: CatalogModel.BannerImage(),

      landscape: CatalogModel.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      cron: Joi.any(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      logo: CatalogModel.BannerImage(),

      app_id: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
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
      cron: Joi.any(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      priority: Joi.number(),

      action: CatalogModel.Action(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),

      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      cron: Joi.any(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo(),

      published: Joi.boolean(),

      is_visible: Joi.boolean(),

      allow_facets: Joi.boolean(),

      _locale_language: Joi.any(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      banners: CatalogModel.CollectionBanner(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      meta: Joi.any(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      logo: CatalogModel.CollectionImage(),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),
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

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
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

  static ProductListingDetail() {
    return Joi.object({
      has_variant: Joi.boolean(),

      item_type: Joi.string().allow(""),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      attributes: Joi.any(),

      discount: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      sellable: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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
      total_articles: Joi.number(),

      name: Joi.string().allow(""),

      available_articles: Joi.number(),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      available_sizes: Joi.number(),
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
      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_by: Joi.any(),

      enabled: Joi.boolean().required(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      created_on: Joi.number().required(),

      company_id: Joi.number().required(),

      platform: Joi.string().allow("").required(),

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
      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      company_id: Joi.number(),

      total_article: Joi.number(),

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

      name: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      timing: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      address: Joi.any(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),

      priority: Joi.number(),
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

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      is_nested: Joi.boolean(),

      name: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      id: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),
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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      _cls: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      platforms: Joi.any(),

      priority_order: Joi.number().required(),
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

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      search: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      name: Joi.string().allow(""),

      page_no: Joi.number(),

      item_type: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      page_size: Joi.number(),

      modified_on: Joi.string().allow(""),

      priority_order: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),
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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      modified_by: CatalogModel.UserDetail(),

      _cls: Joi.any(),

      verified_on: Joi.string().allow(""),

      name: Joi.any().required(),

      verified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      uid: Joi.number(),

      _id: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      description: Joi.string().allow(""),
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
      currency: Joi.any(),

      trader: Joi.any(),

      brand_uid: Joi.any(),

      item_type: Joi.any(),

      product_group_tag: Joi.any(),

      multi_size: Joi.any(),

      media: Joi.any(),

      description: Joi.any(),

      is_dependent: Joi.any(),

      category_slug: Joi.any(),

      teaser_tag: Joi.any(),

      hsn_code: Joi.any(),

      variants: Joi.any(),

      highlights: Joi.any(),

      sizes: Joi.any(),

      short_description: Joi.any(),

      size_guide: Joi.any(),

      name: Joi.any(),

      item_code: Joi.any(),

      trader_type: Joi.any(),

      no_of_boxes: Joi.any(),

      country_of_origin: Joi.any(),

      product_publish: Joi.any(),

      return_config: Joi.any(),

      custom_order: Joi.any(),

      is_active: Joi.any(),

      command: Joi.any(),

      slug: Joi.any(),

      tags: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      properties: CatalogModel.Properties(),

      definitions: Joi.any(),

      description: Joi.string().allow(""),
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
      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      description: Joi.string().allow(""),
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

      task_id: Joi.string().allow(""),

      template_tags: Joi.any(),

      id: Joi.string().allow(""),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      status: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),
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
      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),

      l1: Joi.number().required(),

      l2: Joi.number().required(),
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

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      priority: Joi.number(),
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
      modified_by: Joi.any(),

      created_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      created_on: Joi.string().allow(""),

      priority: Joi.number(),
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

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      brand_uid: Joi.number().required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      item_type: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_image_less_product: Joi.boolean(),

      multi_size: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_media: Joi.any(),

      description: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      category_slug: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      attributes: Joi.any(),

      change_request_id: Joi.any(),

      teaser_tag: CatalogModel.TeaserTag(),

      net_quantity: CatalogModel.NetQuantity(),

      bulk_job_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_set: Joi.boolean(),

      variants: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      sizes: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

      short_description: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      item_code: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      no_of_boxes: Joi.number(),

      country_of_origin: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      product_publish: CatalogModel.ProductPublish(),

      return_config: CatalogModel.ReturnConfig().required(),

      action: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      tags: Joi.array().items(Joi.string().allow("")),
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

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
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

      logo: CatalogModel.Logo(),

      uid: Joi.number(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
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
      modified_by: Joi.any(),

      currency: Joi.string().allow(""),

      trader: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      item_type: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_media: Joi.any(),

      description: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      variant_group: Joi.any(),

      attributes: Joi.any(),

      teaser_tag: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      _custom_json: Joi.any(),

      brand: CatalogModel.Brand(),

      is_physical: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      variants: Joi.any(),

      hsn_code: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      is_expirable: Joi.boolean(),

      short_description: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      category: Joi.any(),

      pending: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      no_of_boxes: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      return_config: CatalogModel.ReturnConfigResponse(),

      moq: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      verified_by: CatalogModel.VerifiedBy(),

      custom_order: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      category_uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),
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
      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      category_uid: Joi.number(),

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
      modified_by: Joi.any(),

      details: CatalogModel.AttributeMasterDetails().required(),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      raw_key: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      synonyms: Joi.any(),

      variant: Joi.boolean(),

      schema: CatalogModel.AttributeMaster().required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      unit: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),
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
      item_height: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_length: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      size: Joi.any().required(),

      item_width: Joi.number().required(),

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
      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      custom_template_tag: Joi.string().allow(""),

      failed: Joi.number(),

      template_tag: Joi.string().allow(""),

      total: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      tracking_url: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static UserDetail1() {
    return Joi.object({
      full_name: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      modified_by: CatalogModel.UserDetail1(),

      created_by: CatalogModel.UserDetail1(),

      failed: Joi.number(),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      cancelled: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      file_path: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),
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
      batch_id: Joi.string().allow("").required(),

      data: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

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
      user: Joi.any().required(),

      url: Joi.string().allow("").required(),

      company_id: Joi.number(),
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
      modified_by: CatalogModel.UserCommon(),

      retry: Joi.number(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: CatalogModel.UserCommon(),
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
      size: Joi.string().allow(""),

      item_id: Joi.number(),

      company_id: Joi.number(),
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
      set: CatalogModel.InventorySet(),

      quantity: Joi.number().required(),

      item_height: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      price_transfer: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      size: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      expiration_date: Joi.string().allow(""),

      item_width: Joi.number().allow(null),

      price: Joi.number(),

      item_weight: Joi.number().allow(null),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      uid: Joi.number(),
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
      quantity: Joi.number(),

      item_id: Joi.number(),

      currency: Joi.string().allow(""),

      store: Joi.any(),

      price_effective: Joi.number(),

      price_transfer: Joi.number(),

      identifiers: Joi.any(),

      size: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      price: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
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
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),
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
      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      effective: Joi.number().required(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserSerializer(),

      item_id: Joi.number().required(),

      company: CatalogModel.CompanyMeta().required(),

      store: CatalogModel.StoreMeta().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      tax_identifier: Joi.any(),

      total_quantity: Joi.number().required(),

      weight: CatalogModel.WeightResponse().required(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),

      _custom_json: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      stage: Joi.string().allow(""),

      is_set: Joi.boolean(),

      meta: Joi.any().allow(null),

      size: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      fragile: Joi.boolean().required(),

      set: CatalogModel.InventorySet(),

      uid: Joi.string().allow("").required(),

      quantities: CatalogModel.Quantities(),

      price: CatalogModel.PriceMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      added_on_store: Joi.string().allow(""),

      fynd_item_code: Joi.string().allow("").required(),

      fynd_meta: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      return_config: CatalogModel.ReturnConfig1(),

      fynd_article_code: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      raw_meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any().required(),

      created_by: CatalogModel.UserSerializer(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),
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
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
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

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),
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
      not_available: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      effective: Joi.number(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_default: Joi.boolean(),

      address: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      modified_by: CatalogModel.UserSerializer(),

      item_id: Joi.number(),

      company: CatalogModel.CompanyMeta1(),

      store: CatalogModel.ArticleStoreResponse(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      tax_identifier: Joi.any(),

      total_quantity: Joi.number(),

      weight: CatalogModel.WeightResponse1(),

      date_meta: CatalogModel.DateMeta(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      dimension: CatalogModel.DimensionResponse1(),

      brand: CatalogModel.BrandMeta1(),

      stage: Joi.string().allow(""),

      is_set: Joi.boolean(),

      size: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      platforms: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      country_of_origin: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      return_config: CatalogModel.ReturnConfig2(),

      tags: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),
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
      modified_by: Joi.any(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),
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
      quantity: Joi.number(),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      price: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      trace_id: Joi.string().allow("").allow(null),

      total_quantity: Joi.number(),

      price_marked: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

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
      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),
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

      trace_id: Joi.string().allow(""),

      store_id: Joi.number().required(),

      total_quantity: Joi.number().allow(null),

      price_marked: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

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
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax2: Joi.number(),

      threshold1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_mrp: Joi.boolean().required(),

      is_active: Joi.boolean(),

      tax1: Joi.number().required(),

      uid: Joi.number(),

      threshold2: Joi.number(),

      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax2: Joi.number(),

      threshold1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      tax1: Joi.number(),

      threshold2: Joi.number(),

      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),
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

      item_total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),

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

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_by: Joi.any(),

      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      hsn_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
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
      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
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

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

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
      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
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

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      has_variant: Joi.boolean(),

      item_type: Joi.string().allow(""),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      attributes: Joi.any(),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating: Joi.number(),

      slug: Joi.string().allow("").required(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: CatalogModel.InventoryPage().required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),
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

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      open: Joi.boolean().required(),

      closing: CatalogModel.LocationTimingSerializer(),

      opening: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      modified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      store_type: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      address: CatalogModel.GetAddressSerializer().required(),

      manager: CatalogModel.LocationManagerSerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      _custom_json: Joi.any(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      display_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),
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
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),
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
