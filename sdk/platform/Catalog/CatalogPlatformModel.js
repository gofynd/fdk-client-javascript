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

      meta: Joi.any(),

      error: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),
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
      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: Joi.any(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

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
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),

      url: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),
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
      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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
      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow("").required(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      quantity: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),

      identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_uid: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      price: CatalogModel.Price(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_select: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      meta: Joi.any(),

      choice: Joi.string().allow(""),

      logo: Joi.string().allow(""),

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
      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      image: Joi.string().allow(""),

      created_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      id: Joi.string().allow(""),

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
      items: Joi.array().items(Joi.any()),

      page: Joi.any(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      guide: Joi.any(),

      created_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),
    });
  }

  static MetaFields() {
    return Joi.object({
      value: Joi.any().required(),

      key: Joi.any().required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

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

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

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
      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

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

      next: Joi.number().required(),

      has_next: Joi.boolean().required(),
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

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
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
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      variant: Joi.any(),

      compare: Joi.any(),

      similar: Joi.any(),

      detail: Joi.any(),
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
      display: Joi.string().allow(""),

      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      map: Joi.any(),

      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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
      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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
      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize(),
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
      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

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
      filter: Joi.any(),

      sort: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
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
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      value: Joi.any().required(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      count: Joi.number(),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),
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
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
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

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      landscape: CatalogModel.CollectionImage().required(),

      portrait: CatalogModel.CollectionImage().required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _locale_language: Joi.any(),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_sort: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      created_by: CatalogModel.UserInfo(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      type: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),

      published: Joi.boolean(),

      name: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage().required(),
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
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),
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
      slug: Joi.string().allow(""),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),
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

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      slug: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _locale_language: Joi.any(),

      priority: Joi.number(),

      _schedule: CatalogModel.CollectionSchedule(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      published: Joi.boolean(),

      name: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),
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
      currency_code: Joi.string().allow(""),

      max: Joi.number(),

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
      value: Joi.string().allow(""),

      key: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media1()),

      product_online_date: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      image_nature: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      rating_count: Joi.number(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),

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
      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),

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
      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),

      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      modified_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      created_by: Joi.any(),

      enabled: Joi.boolean().required(),
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

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      company_id: Joi.number(),

      total_article: Joi.number(),

      brand_id: Joi.number(),

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
      brand: Joi.number(),

      store: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      manager: Joi.any(),

      timing: Joi.any(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      display_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),
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
      mandatory: Joi.boolean(),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.AttributeMasterFilter(),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      schema: CatalogModel.AttributeMaster(),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

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

      meta: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

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
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      search: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      priority_order: Joi.number(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_no: Joi.number(),

      page_size: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      meta: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      slug: Joi.any(),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      modified_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      name: Joi.any().required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_physical: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      categories: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
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
      is_physical: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      slug: Joi.any(),

      trader_type: Joi.any(),

      item_type: Joi.any(),

      variants: Joi.any(),

      trader: Joi.any(),

      description: Joi.any(),

      product_publish: Joi.any(),

      command: Joi.any(),

      sizes: Joi.any(),

      brand_uid: Joi.any(),

      size_guide: Joi.any(),

      hsn_code: Joi.any(),

      is_active: Joi.any(),

      media: Joi.any(),

      item_code: Joi.any(),

      category_slug: Joi.any(),

      custom_order: Joi.any(),

      multi_size: Joi.any(),

      teaser_tag: Joi.any(),

      currency: Joi.any(),

      country_of_origin: Joi.any(),

      name: Joi.any(),

      short_description: Joi.any(),

      tags: Joi.any(),

      product_group_tag: Joi.any(),

      highlights: Joi.any(),

      is_dependent: Joi.any(),

      no_of_boxes: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),
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
      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      template_tags: Joi.any(),

      task_id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      url: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      data: CatalogModel.ProductDownloadItemsData(),

      status: Joi.string().allow(""),

      seller_id: Joi.number(),

      trigger_on: Joi.string().allow(""),
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
      multivalue: Joi.boolean(),

      data: Joi.array().items(Joi.any()),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      department: Joi.number().required(),

      l2: Joi.number().required(),
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

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),
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
      uid: Joi.number(),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
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
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
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

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      variants: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      change_request_id: Joi.any(),

      description: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      size_guide: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      departments: Joi.array().items(Joi.number()).required(),

      is_active: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      requester: Joi.string().allow(""),

      variant_media: Joi.any(),

      item_code: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      custom_order: CatalogModel.CustomOrder(),

      variant_group: Joi.any(),

      is_image_less_product: Joi.boolean(),

      multi_size: Joi.boolean(),

      _custom_json: Joi.any(),

      teaser_tag: CatalogModel.TeaserTag(),

      currency: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      attributes: Joi.any(),

      name: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      company_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      template_tag: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      is_dependent: Joi.boolean(),

      action: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      return_config: CatalogModel.ReturnConfig().required(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
    });
  }

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
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

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      is_physical: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      slug: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      variants: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      trader: Joi.array().items(CatalogModel.Trader()),

      category_uid: Joi.number(),

      description: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      all_sizes: Joi.array().items(Joi.any()),

      pending: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      size_guide: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      verified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      category: Joi.any(),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      created_by: Joi.any(),

      primary_color: Joi.string().allow(""),

      moq: Joi.any(),

      id: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      variant_media: Joi.any(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      category_slug: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      custom_order: Joi.any(),

      variant_group: Joi.any(),

      multi_size: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      _custom_json: Joi.any(),

      teaser_tag: Joi.any(),

      modified_by: Joi.any(),

      brand: CatalogModel.Brand(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      company_id: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      is_set: Joi.boolean(),

      is_dependent: Joi.boolean(),

      no_of_boxes: Joi.number(),

      return_config: CatalogModel.ReturnConfigResponse(),
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

      uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      category_uid: Joi.number(),

      brand_uid: Joi.number(),

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
      slug: Joi.string().allow("").required(),

      suggestion: Joi.string().allow(""),

      description: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      created_by: Joi.any(),

      variant: Joi.boolean(),

      unit: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      modified_by: Joi.any(),

      enabled_for_end_consumer: Joi.boolean(),

      is_nested: Joi.boolean(),

      name: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

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
      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      item_height: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_width: Joi.number().required(),

      size: Joi.any().required(),
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

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number().required(),

      failed_records: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      stage: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),
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
      created_on: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),
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

      batch_id: Joi.string().allow("").required(),

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
      company_id: Joi.number(),

      url: Joi.string().allow("").required(),

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
      created_on: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      id: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      retry: Joi.number(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),
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
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),
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

      quantity: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static InvSize() {
    return Joi.object({
      price_transfer: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      quantity: Joi.number().required(),

      item_weight: Joi.number().allow(null),

      price: Joi.number(),

      item_height: Joi.number().allow(null),

      is_set: Joi.boolean(),

      set: CatalogModel.InventorySet(),

      price_effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      item_width: Joi.number().allow(null),

      size: Joi.any().required(),
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

      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      quantity: Joi.number(),

      sellable_quantity: Joi.number(),

      price: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      store: Joi.any(),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      effective: Joi.number().required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
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

  static DimensionResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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
      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      fynd_item_code: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      set: CatalogModel.InventorySet(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      added_on_store: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      is_active: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      price: CatalogModel.PriceMeta().required(),

      total_quantity: Joi.number().required(),

      stage: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse().required(),

      trace_id: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      identifier: Joi.any().required(),

      fynd_meta: Joi.any(),

      meta: Joi.any().allow(null),

      fynd_article_code: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      uid: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      tax_identifier: Joi.any(),

      track_inventory: Joi.boolean(),

      _custom_json: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      brand: CatalogModel.BrandMeta().required(),

      store: CatalogModel.StoreMeta().required(),

      item_id: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      company: CatalogModel.CompanyMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse().required(),

      return_config: CatalogModel.ReturnConfig1(),

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

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
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

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),
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
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

      not_available: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
    });
  }

  static GetInventories() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      date_meta: CatalogModel.DateMeta(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      expiration_date: Joi.string().allow(""),

      platforms: Joi.any(),

      price: CatalogModel.PriceArticle(),

      total_quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      trace_id: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      identifier: Joi.any(),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      track_inventory: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      brand: CatalogModel.BrandMeta1(),

      store: CatalogModel.ArticleStoreResponse(),

      item_id: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse1(),

      return_config: CatalogModel.ReturnConfig2(),

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
      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: Joi.any(),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      created_by: Joi.any(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),
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
      item_dimensions_unit_of_measure: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price_marked: Joi.number(),

      quantity: Joi.number(),

      total_quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),
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
      brand: Joi.array().items(Joi.number()),

      store: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      request_params: Joi.any(),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

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
      multivalues: Joi.boolean(),

      data: Joi.array().items(CatalogModel.FilerList()),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price_marked: Joi.number(),

      total_quantity: Joi.number().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_id: Joi.number().required(),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),

      payload: Joi.array().items(CatalogModel.InventoryPayload()),

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
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold2: Joi.number(),

      uid: Joi.number(),

      company_id: Joi.number().required(),

      tax2: Joi.number(),

      is_active: Joi.boolean(),

      threshold1: Joi.number().required(),

      tax1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      tax_on_mrp: Joi.boolean().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      hs2_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      threshold2: Joi.number(),

      company_id: Joi.number(),

      tax2: Joi.number(),

      modified_on: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      id: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),
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

  static TaxSlab() {
    return Joi.object({
      rate: Joi.number().required(),

      threshold: Joi.number().required(),

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      description: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      created_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      size: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      action: CatalogModel.Action(),

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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: CatalogModel.Media(),

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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      rating_count: Joi.number(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

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

  static ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static ArticleQuery() {
    return Joi.object({
      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow("").required(),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignment(),

      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),

      meta: Joi.any(),
    });
  }

  static AssignStore() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

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
      uid: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      group_id: Joi.string().allow(""),

      company_id: Joi.number(),

      index: Joi.number(),

      price_marked: Joi.number(),

      quantity: Joi.number().required(),

      store_pincode: Joi.number(),

      _id: Joi.string().allow(""),

      meta: Joi.any(),

      price_effective: Joi.number(),

      item_id: Joi.number().required(),

      store_id: Joi.number(),

      s_city: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      status: Joi.boolean().required(),

      size: Joi.string().allow("").required(),
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

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      created_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

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
      opening: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      integration_type: CatalogModel.LocationIntegrationType(),

      code: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      address: CatalogModel.GetAddressSerializer().required(),

      created_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      warnings: Joi.any(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      _custom_json: Joi.any(),

      display_name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      documents: Joi.array().items(CatalogModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      uid: Joi.number().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
