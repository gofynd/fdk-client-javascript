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

  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.any().required(),

      sort_on: Joi.string().allow("").required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      result: CatalogModel.SearchKeywordResult().required(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      result: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
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

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: Joi.any(),

      url: Joi.string().allow(""),

      params: Joi.any(),
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
      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
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

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
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

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      identifier: Joi.any(),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      price: Joi.any(),

      uid: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      quantity: Joi.number(),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      product_uid: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      company_id: Joi.number(),

      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow(""),

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
      guide: CatalogModel.Guide(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      title: Joi.string().allow("").required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      image: Joi.string().allow(""),
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

      company_id: Joi.number(),

      guide: Joi.any(),

      title: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      modified_by: Joi.any(),
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
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      is_gift: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),
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
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static SEOData() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      moq: CatalogModel.MOQData(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.SEOData(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),
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
      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      priority: Joi.number().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      app_id: Joi.string().allow("").required(),

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

      total_count: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      logo: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      detail: Joi.any(),

      similar: Joi.any(),

      compare: Joi.any(),

      variant: Joi.any(),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      units: Joi.array().items(Joi.any()),

      display: Joi.string().allow(""),

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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
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

      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

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

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize(),

      subtitle: Joi.string().allow(""),
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

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),
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

  static AppConfiguration() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

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
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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
      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      max: Joi.number(),

      selected_min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selected_max: Joi.number(),

      display: Joi.string().allow("").required(),

      display_format: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      value: Joi.any().required(),

      min: Joi.number(),

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
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

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

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

      cron: Joi.string().allow("").allow(null),

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
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
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
      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage().required(),

      modified_by: CatalogModel.UserInfo(),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      sort_on: Joi.string().allow(""),
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
      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      badge: Joi.any(),

      sort_on: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      badge: Joi.any(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),

      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      _schedule: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      badge: Joi.any(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      modified_by: CatalogModel.UserInfo(),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      tags: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      sort_on: Joi.string().allow(""),
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
      uid: Joi.number(),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
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

  static ProductListingDetail() {
    return Joi.object({
      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      uid: Joi.number(),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      has_variant: Joi.boolean(),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      highlights: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      sellable: Joi.boolean(),

      attributes: Joi.any(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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
      total_articles: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      name: Joi.string().allow(""),

      available_articles: Joi.number(),

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
      brand_distribution: CatalogModel.CatalogInsightBrand(),

      data: CatalogModel.CrossSellingData(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      created_by: Joi.any(),

      created_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

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
      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      company_id: Joi.number(),

      brand_id: Joi.number(),

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
      brand: Joi.number(),

      store: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      address: Joi.any(),

      manager: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      timing: Joi.any(),

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
      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),
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

      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),
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
      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      schema: CatalogModel.AttributeMaster(),

      departments: Joi.array().items(Joi.string().allow("")),

      details: CatalogModel.AttributeMasterDetails(),

      id: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      name: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

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

      _cls: Joi.string().allow(""),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

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

      logo: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      search: Joi.string().allow(""),

      priority_order: Joi.number(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      page_no: Joi.number(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_size: Joi.number(),

      slug: Joi.string().allow(""),

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

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      uid: Joi.number().required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      _id: Joi.any(),

      slug: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      is_archived: Joi.boolean(),
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
      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),
    });
  }

  static Properties() {
    return Joi.object({
      teaser_tag: Joi.any(),

      short_description: Joi.any(),

      item_type: Joi.any(),

      variants: Joi.any(),

      hsn_code: Joi.any(),

      command: Joi.any(),

      size_guide: Joi.any(),

      description: Joi.any(),

      category_slug: Joi.any(),

      brand_uid: Joi.any(),

      is_dependent: Joi.any(),

      sizes: Joi.any(),

      trader_type: Joi.any(),

      trader: Joi.any(),

      highlights: Joi.any(),

      no_of_boxes: Joi.any(),

      return_config: Joi.any(),

      slug: Joi.any(),

      media: Joi.any(),

      multi_size: Joi.any(),

      country_of_origin: Joi.any(),

      item_code: Joi.any(),

      name: Joi.any(),

      product_publish: Joi.any(),

      product_group_tag: Joi.any(),

      currency: Joi.any(),

      custom_order: Joi.any(),

      tags: Joi.any(),

      is_active: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      definitions: Joi.any(),
    });
  }

  static TemplateValidationData() {
    return Joi.object({
      global_validation: CatalogModel.GlobalValidation(),

      template_validation: Joi.any(),
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

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      seller_id: Joi.number(),

      url: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      data: CatalogModel.ProductDownloadItemsData(),

      id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      task_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

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
      media: CatalogModel.Media2(),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

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

      departments: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      priority: Joi.number(),

      uid: Joi.number(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogModel.Category(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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

      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),

      teaser_tag: CatalogModel.TeaserTag(),

      is_image_less_product: Joi.boolean(),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      variants: Joi.any(),

      requester: Joi.string().allow(""),

      uid: Joi.number().allow(null),

      size_guide: Joi.string().allow(""),

      description: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      is_dependent: Joi.boolean(),

      change_request_id: Joi.any(),

      sizes: Joi.array().items(Joi.any()).required(),

      variant_group: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      no_of_boxes: Joi.number(),

      return_config: CatalogModel.ReturnConfig().required(),

      slug: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      template_tag: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      country_of_origin: Joi.string().allow("").required(),

      item_code: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      currency: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      variant_media: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      attributes: Joi.any(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      teaser_tag: Joi.any(),

      category_uid: Joi.number(),

      category: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      is_image_less_product: Joi.boolean(),

      short_description: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      variants: Joi.any(),

      brand: CatalogModel.Brand(),

      uid: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      hsn_code: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      description: Joi.string().allow(""),

      variant_media: Joi.any(),

      category_slug: Joi.string().allow(""),

      brand_uid: Joi.number(),

      departments: Joi.array().items(Joi.number()),

      is_dependent: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      pending: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      variant_group: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      highlights: Joi.array().items(Joi.string().allow("")),

      no_of_boxes: Joi.number(),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      media: Joi.array().items(CatalogModel.Media1()),

      template_tag: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      is_physical: Joi.boolean(),

      multi_size: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      created_by: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      created_on: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      moq: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      currency: Joi.string().allow(""),

      color: Joi.string().allow(""),

      custom_order: Joi.any(),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      primary_color: Joi.string().allow(""),

      attributes: Joi.any(),

      modified_by: Joi.any(),
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
      media: Joi.array().items(CatalogModel.Media1()),

      category_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),
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
      modified_on: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      description: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      schema: CatalogModel.AttributeMaster().required(),

      synonyms: Joi.any(),

      slug: Joi.string().allow("").required(),

      raw_key: Joi.string().allow(""),

      created_by: Joi.any(),

      is_nested: Joi.boolean(),

      created_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      variant: Joi.boolean(),

      modified_by: Joi.any(),
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
      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_height: Joi.number().required(),

      item_length: Joi.number().required(),

      size: Joi.string().allow("").required(),

      item_weight: Joi.number().required(),

      item_width: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),
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

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number().required(),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      total: Joi.number(),

      created_on: Joi.string().allow("").required(),

      custom_template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      succeed: Joi.number(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),
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

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      template: CatalogModel.ProductTemplate(),

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
      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),
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
      company_id: Joi.number(),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      tracking_url: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      retry: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

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

      gtin_value: Joi.string().allow("").required(),
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

  static InvSize() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      price_transfer: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price_effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      price: Joi.number(),

      size: Joi.string().allow("").required(),

      item_height: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      quantity: Joi.number().required(),

      item_weight: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      item_width: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      is_set: Joi.boolean(),

      set: CatalogModel.InventorySet(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      item_code: Joi.string().allow(""),

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
      inventory_updated_on: Joi.string().allow(""),

      identifiers: Joi.any(),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      store: Joi.any(),

      price: Joi.number(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price_transfer: Joi.number(),

      item_id: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
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
      currency: Joi.string().allow("").required(),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),
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
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      stage: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),

      _custom_json: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      uid: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      size: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      item_id: Joi.number().required(),

      fynd_article_code: Joi.string().allow("").required(),

      price: CatalogModel.PriceMeta().required(),

      raw_meta: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number().required(),

      return_config: CatalogModel.ReturnConfig1(),

      meta: Joi.any().allow(null),

      fynd_item_code: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      created_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse().required(),

      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      identifier: Joi.any().required(),

      track_inventory: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      added_on_store: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),

      fynd_meta: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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
      currency: Joi.string().allow(""),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      transfer: Joi.number(),

      effective: Joi.number(),
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
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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

      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
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
      modified_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
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

  static GetInventories() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      brand: CatalogModel.BrandMeta1(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      price: CatalogModel.PriceArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      total_quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      expiration_date: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      created_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse1(),

      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      platforms: Joi.any(),

      date_meta: CatalogModel.DateMeta(),

      identifier: Joi.any(),

      track_inventory: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      id: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      tags: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.DimensionResponse1(),

      modified_by: CatalogModel.UserSerializer(),
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

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

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
      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price: Joi.number(),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      total_quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      user: Joi.any(),

      batch_id: Joi.string().allow("").required(),
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
      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

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
      multivalues: Joi.boolean(),

      data: Joi.array().items(CatalogModel.FilerList()),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      seller_identifier: Joi.string().allow("").required(),
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

  static HsnUpsert() {
    return Joi.object({
      company_id: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      tax_on_mrp: Joi.boolean().required(),

      threshold2: Joi.number(),

      tax1: Joi.number().required(),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      threshold1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax2: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      tax_on_esp: Joi.boolean(),

      id: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),

      tax1: Joi.number(),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      tax2: Joi.number(),
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

      item_total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),
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

      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

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
      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

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
      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
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
      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      uid: Joi.number(),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      has_variant: Joi.boolean(),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      attributes: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),

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
      article_assignment: CatalogModel.ArticleAssignment(),

      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      quantity: Joi.number(),

      meta: Joi.any(),
    });
  }

  static AssignStore() {
    return Joi.object({
      company_id: Joi.number(),

      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

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
      company_id: Joi.number(),

      store_id: Joi.number(),

      price_effective: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      store_pincode: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      group_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price_marked: Joi.number(),

      size: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      s_city: Joi.string().allow(""),

      meta: Joi.any(),

      _id: Joi.string().allow(""),

      status: Joi.boolean().required(),

      index: Joi.number(),

      item_id: Joi.number().required(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      closing: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
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
      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),
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

  static GetLocationSerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      display_name: Joi.string().allow("").required(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      documents: Joi.array().items(CatalogModel.Document()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.GetAddressSerializer().required(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      manager: CatalogModel.LocationManagerSerializer(),

      created_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      integration_type: CatalogModel.LocationIntegrationType(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      warnings: Joi.any(),

      store_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),
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

      _custom_json: Joi.any(),

      uid: Joi.number().required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

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
