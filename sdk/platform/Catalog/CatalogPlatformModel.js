const Joi = require("joi");

class CatalogModel {
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

  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      result: Joi.any(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),
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
      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      words: Joi.array().items(Joi.string().allow("")),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: Joi.any(),

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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      meta: Joi.any(),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      meta: Joi.any(),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),
    });
  }

  static Price() {
    return Joi.object({
      min_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),

      max_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      name: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      price: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      identifier: Joi.any(),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      product_uid: Joi.number(),

      price: CatalogModel.Price(),

      allow_remove: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      is_active: Joi.boolean().required(),

      meta: Joi.any(),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),
    });
  }

  static Meta() {
    return Joi.object({
      values: Joi.array().items(Joi.any()),

      headers: Joi.any(),

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
      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      guide: CatalogModel.Guide(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      guide: Joi.any(),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static MOQData() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static SEOData() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      seo: CatalogModel.SEOData(),
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

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      alt_text: Joi.any(),

      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),
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

      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      unit: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

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
      next: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      name: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

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
      compare: Joi.any(),

      similar: Joi.any(),

      detail: Joi.any(),

      variant: Joi.any(),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      units: Joi.array().items(Joi.any()),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
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
      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map: Joi.any(),

      value: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

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
      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

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

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      priority: Joi.number().required(),

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
      name: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize().required(),

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

  static AppConfiguration() {
    return Joi.object({
      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
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
      filter: Joi.any(),

      sort: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
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

      currency_symbol: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      count: Joi.number(),

      display: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      max: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
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
      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),
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

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
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
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      created_by: CatalogModel.UserInfo(),

      priority: Joi.number(),

      type: Joi.string().allow("").required(),

      banners: CatalogModel.CollectionBanner().required(),

      name: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      published: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      seo: CatalogModel.SeoDetail(),
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
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      meta: Joi.any(),
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
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

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
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      published: Joi.boolean(),

      _locale_language: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      seo: CatalogModel.SeoDetail(),
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
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),
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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      has_variant: Joi.boolean(),

      discount: Joi.string().allow(""),

      promo_meta: Joi.any(),

      rating: Joi.number(),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),
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
      products: Joi.number(),

      articles: Joi.number(),
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
      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      platform: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      store_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      platform: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      modified_on: Joi.number().required(),

      created_on: Joi.number().required(),
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
      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

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
      brand: Joi.number(),

      company: Joi.string().allow(""),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      address: Joi.any(),

      timing: Joi.any(),

      modified_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      manager: Joi.any(),

      uid: Joi.number(),
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

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),
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

  static GenderDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.AttributeMasterFilter(),

      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),

      enabled_for_end_consumer: Joi.boolean(),

      is_nested: Joi.boolean(),

      logo: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),

      uid: Joi.number(),

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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      platforms: Joi.any(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      created_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

      page_no: Joi.number(),

      modified_on: Joi.string().allow(""),

      priority_order: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_size: Joi.number(),

      search: Joi.string().allow(""),

      uid: Joi.number(),

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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),
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
      name: Joi.any().required(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      _id: Joi.any(),

      logo: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      uid: Joi.number(),

      slug: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      is_active: Joi.boolean(),

      is_archived: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      is_active: Joi.boolean(),

      is_archived: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
    });
  }

  static Properties() {
    return Joi.object({
      item_code: Joi.any(),

      is_dependent: Joi.any(),

      no_of_boxes: Joi.any(),

      product_group_tag: Joi.any(),

      teaser_tag: Joi.any(),

      highlights: Joi.any(),

      sizes: Joi.any(),

      name: Joi.any(),

      brand_uid: Joi.any(),

      country_of_origin: Joi.any(),

      trader: Joi.any(),

      command: Joi.any(),

      description: Joi.any(),

      item_type: Joi.any(),

      multi_size: Joi.any(),

      variants: Joi.any(),

      hsn_code: Joi.any(),

      category_slug: Joi.any(),

      trader_type: Joi.any(),

      slug: Joi.any(),

      short_description: Joi.any(),

      tags: Joi.any(),

      size_guide: Joi.any(),

      currency: Joi.any(),

      custom_order: Joi.any(),

      is_active: Joi.any(),

      return_config: Joi.any(),

      media: Joi.any(),

      product_publish: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      title: Joi.string().allow(""),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),
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
      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      seller_id: Joi.number(),

      task_id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

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
      google: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

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
      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

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
      name: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      created_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      uid: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Category()),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogModel.Category(),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
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
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      attributes: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      item_code: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      no_of_boxes: Joi.number(),

      is_set: Joi.boolean(),

      teaser_tag: CatalogModel.TeaserTag(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      uid: Joi.number().allow(null),

      is_image_less_product: Joi.boolean(),

      name: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      sizes: Joi.array().items(Joi.any()).required(),

      _custom_json: Joi.any(),

      requester: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      item_type: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      action: Joi.string().allow(""),

      variants: Joi.any(),

      category_slug: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      variant_group: Joi.any(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      change_request_id: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      is_active: Joi.boolean(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      return_config: CatalogModel.ReturnConfig().required(),

      media: Joi.array().items(CatalogModel.Media1()),

      product_publish: CatalogModel.ProductPublish(),
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

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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
      attributes: Joi.any(),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      no_of_boxes: Joi.number(),

      is_set: Joi.boolean(),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(CatalogModel.Image()),

      moq: Joi.any(),

      uid: Joi.number(),

      sizes: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      category: Joi.any(),

      is_image_less_product: Joi.boolean(),

      _custom_json: Joi.any(),

      is_physical: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()),

      verified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      primary_color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      modified_by: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      variants: Joi.any(),

      category_slug: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      variant_group: Joi.any(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      variant_media: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      all_company_ids: Joi.array().items(Joi.number()),

      brand: CatalogModel.Brand(),

      is_expirable: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      currency: Joi.string().allow(""),

      custom_order: Joi.any(),

      is_active: Joi.boolean(),

      tax_identifier: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      media: Joi.array().items(CatalogModel.Media1()),

      product_publish: CatalogModel.ProductPublished(),
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
      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),
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
      schema: CatalogModel.AttributeMaster().required(),

      is_nested: Joi.boolean(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      variant: Joi.boolean(),

      created_on: Joi.string().allow(""),

      synonyms: Joi.any(),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      logo: Joi.string().allow(""),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      suggestion: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.AttributeMasterFilter().required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      enabled_for_end_consumer: Joi.boolean(),
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

      gtin_value: Joi.string().allow("").required(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_weight: Joi.number().required(),

      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_height: Joi.number().required(),

      size: Joi.any().required(),

      item_length: Joi.number().required(),

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
      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      total: Joi.number(),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      tracking_url: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),
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
      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      succeed: Joi.number(),

      failed: Joi.number(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail1(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),
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

      data: Joi.array().items(Joi.any()).required(),

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

      company_id: Joi.number(),

      user: Joi.any().required(),
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
      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      created_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      retry: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      total: Joi.number(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),
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

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      primary: Joi.boolean(),

      gtin_value: Joi.any().required(),

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
      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_weight: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      item_width: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      is_set: Joi.boolean(),

      item_height: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      quantity: Joi.number().required(),

      store_code: Joi.string().allow("").required(),

      size: Joi.any().required(),

      currency: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      set: CatalogModel.InventorySet(),
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
      item_id: Joi.number(),

      price_effective: Joi.number(),

      price: Joi.number(),

      quantity: Joi.number(),

      store: Joi.any(),

      currency: Joi.string().allow(""),

      size: Joi.string().allow(""),

      price_transfer: Joi.number(),

      identifiers: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),
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
      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      marked: Joi.number().required(),

      transfer: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
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

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      track_inventory: Joi.boolean(),

      item_id: Joi.number().required(),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.Quantities(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      stage: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta().required(),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      expiration_date: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      trace_id: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      fynd_article_code: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      fragile: Joi.boolean().required(),

      weight: CatalogModel.WeightResponse().required(),

      modified_by: CatalogModel.UserSerializer(),

      added_on_store: Joi.string().allow(""),

      total_quantity: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta().required(),

      store: CatalogModel.StoreMeta().required(),

      size: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      is_active: Joi.boolean(),

      tax_identifier: Joi.any(),

      return_config: CatalogModel.ReturnConfig1(),

      raw_meta: Joi.any(),

      dimension: CatalogModel.DimensionResponse().required(),

      fynd_meta: Joi.any(),
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
      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_default: Joi.boolean(),

      address: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      transfer: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
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
      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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

  static GetInventories() {
    return Joi.object({
      track_inventory: Joi.boolean(),

      item_id: Joi.number(),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.QuantitiesArticle(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      stage: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      trace_id: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      modified_by: CatalogModel.UserSerializer(),

      total_quantity: Joi.number(),

      id: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta1(),

      store: CatalogModel.ArticleStoreResponse(),

      size: Joi.string().allow(""),

      identifier: Joi.any(),

      tax_identifier: Joi.any(),

      platforms: Joi.any(),

      return_config: CatalogModel.ReturnConfig2(),

      dimension: CatalogModel.DimensionResponse1(),
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
      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      succeed: Joi.number(),

      failed: Joi.number(),

      total: Joi.number(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      price_marked: Joi.number(),

      total_quantity: Joi.number(),

      currency: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),
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

      brand: Joi.array().items(Joi.number()),

      store: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      status: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      status: Joi.string().allow(""),

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
      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      store_id: Joi.number().required(),

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

  static HsnCodesObject() {
    return Joi.object({
      tax_on_mrp: Joi.boolean(),

      tax1: Joi.number(),

      threshold1: Joi.number(),

      hs2_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      tax_on_esp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      threshold2: Joi.number(),

      tax2: Joi.number(),

      id: Joi.string().allow(""),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax_on_mrp: Joi.boolean().required(),

      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      threshold2: Joi.number(),

      tax2: Joi.number(),

      uid: Joi.number(),
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

      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),
    });
  }

  static TaxSlab() {
    return Joi.object({
      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      cess: Joi.number(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

      uid: Joi.number(),

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
      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
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

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      promo_meta: Joi.any(),

      rating: Joi.number(),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

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
      size: Joi.string().allow("").required(),

      ignored_stores: Joi.array().items(Joi.number()),

      item_id: Joi.number().required(),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_identifier: Joi.string().allow(""),

      company_id: Joi.number(),

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
      index: Joi.number(),

      item_id: Joi.number().required(),

      price_effective: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      _id: Joi.string().allow(""),

      quantity: Joi.number().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      price_marked: Joi.number(),

      size: Joi.string().allow("").required(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      store_pincode: Joi.number(),

      company_id: Joi.number(),

      store_id: Joi.number(),

      status: Joi.boolean().required(),

      s_city: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      country_code: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      created_by: CatalogModel.UserSerializer2(),

      company_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),
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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
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

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),
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

      phone_number: Joi.string().allow("").required(),

      integration_type: CatalogModel.LocationIntegrationType(),

      created_by: CatalogModel.UserSerializer1(),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),

      company: CatalogModel.GetCompanySerializer(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      _custom_json: Joi.any(),

      address: CatalogModel.GetAddressSerializer().required(),

      verified_on: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      code: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      modified_by: CatalogModel.UserSerializer1(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      manager: CatalogModel.LocationManagerSerializer(),

      verified_by: CatalogModel.UserSerializer1(),
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
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number().required(),
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
