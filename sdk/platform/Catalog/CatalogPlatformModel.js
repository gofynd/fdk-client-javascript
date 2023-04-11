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
      _custom_json: Joi.any(),

      result: Joi.any(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),
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

      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),
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

      result: CatalogModel.SearchKeywordResult().required(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),
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

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),
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

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),
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
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      slug: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any(),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      uid: Joi.number(),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),
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
      created_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      active: Joi.boolean(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      subtitle: Joi.string().allow(""),

      image: Joi.string().allow(""),

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
      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      guide: Joi.any(),

      subtitle: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),
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
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),
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
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      _custom_json: Joi.any(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

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
      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static PageResponseType() {
    return Joi.object({
      total_count: Joi.number().required(),

      next: Joi.number().required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),
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
      is_default: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

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
      compare: Joi.any(),

      detail: Joi.any(),

      variant: Joi.any(),

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
      start: Joi.number(),

      display: Joi.string().allow(""),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),

      value: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),
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
      name: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

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

      size: CatalogModel.ProductSize(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      subtitle: Joi.string().allow(""),

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

  static AppConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),
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
      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
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
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      max: Joi.number(),

      is_selected: Joi.boolean().required(),

      min: Joi.number(),

      selected_min: Joi.number(),

      selected_max: Joi.number(),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      value: Joi.any().required(),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),
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

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),
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

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
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
      sort_on: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      created_by: CatalogModel.UserInfo(),

      published: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      app_id: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      is_active: Joi.boolean(),

      type: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow("").required(),

      banners: CatalogModel.CollectionBanner().required(),

      name: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      is_visible: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),
    });
  }

  static BannerImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      sort_on: Joi.string().allow(""),

      badge: Joi.any(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      meta: Joi.any(),
    });
  }

  static Media1() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

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
      badge: Joi.any(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      priority: Joi.number(),

      meta: Joi.any(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      badge: Joi.any(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      priority: Joi.number(),

      meta: Joi.any(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      sort_on: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      published: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      logo: CatalogModel.CollectionImage(),

      is_active: Joi.boolean(),

      type: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      name: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      is_visible: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),
    });
  }

  static CollectionItem() {
    return Joi.object({
      item_id: Joi.number().required(),

      action: Joi.string().allow("").required(),

      priority: Joi.number(),
    });
  }

  static CollectionItemUpdate() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      items: Joi.array().items(CatalogModel.CollectionItem()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
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
      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),
    });
  }

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

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
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      rating: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      teaser_tag: Joi.any(),

      promo_meta: Joi.any(),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      type: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      sellable: Joi.boolean(),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating_count: Joi.number(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      total_sizes: Joi.number(),

      available_sizes: Joi.number(),

      available_articles: Joi.number(),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      out_of_stock_count: Joi.number(),

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

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),

      company_id: Joi.number(),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      created_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      enabled: Joi.boolean().required(),

      modified_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      created_by: Joi.any(),

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

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      company_id: Joi.number(),

      brand_id: Joi.number(),

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
      store: Joi.number(),

      brand: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.any(),

      company_id: Joi.number(),

      manager: Joi.any(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      timing: Joi.any(),

      store_code: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),
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

  static AttributeSchemaRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),
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
      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),

      priority: Joi.number(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      slug: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      description: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      is_nested: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      template_slug: Joi.string().allow(""),
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

      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      platforms: Joi.any(),

      _cls: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
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

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      page_size: Joi.number(),

      priority_order: Joi.number(),

      search: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      page_no: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

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

      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      slug: Joi.any().required(),

      name: Joi.any().required(),

      _custom_json: Joi.any(),

      _id: Joi.any(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      uid: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserDetail(),

      _cls: Joi.any(),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_physical: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      is_expirable: Joi.boolean().required(),
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
      is_physical: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),
    });
  }

  static Properties() {
    return Joi.object({
      return_config: Joi.any(),

      item_type: Joi.any(),

      media: Joi.any(),

      short_description: Joi.any(),

      size_guide: Joi.any(),

      sizes: Joi.any(),

      command: Joi.any(),

      brand_uid: Joi.any(),

      teaser_tag: Joi.any(),

      product_publish: Joi.any(),

      is_dependent: Joi.any(),

      highlights: Joi.any(),

      trader_type: Joi.any(),

      no_of_boxes: Joi.any(),

      is_active: Joi.any(),

      variants: Joi.any(),

      country_of_origin: Joi.any(),

      slug: Joi.any(),

      name: Joi.any(),

      trader: Joi.any(),

      multi_size: Joi.any(),

      product_group_tag: Joi.any(),

      hsn_code: Joi.any(),

      description: Joi.any(),

      tags: Joi.any(),

      category_slug: Joi.any(),

      currency: Joi.any(),

      item_code: Joi.any(),

      custom_order: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

  static UserInfo1() {
    return Joi.object({
      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      type: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      filters: Joi.any(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      brands: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),
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
      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),

      l2: Joi.number().required(),

      l1: Joi.number().required(),
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
      google: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),
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
      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      level: Joi.number().required(),
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

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
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
      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
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
      return_config: CatalogModel.ReturnConfig().required(),

      item_type: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      net_quantity: CatalogModel.NetQuantity(),

      short_description: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      teaser_tag: CatalogModel.TeaserTag(),

      product_publish: CatalogModel.ProductPublish(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      no_of_boxes: Joi.number(),

      is_active: Joi.boolean(),

      variants: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      country_of_origin: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      multi_size: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      description: Joi.string().allow(""),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      change_request_id: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      variant_group: Joi.any(),

      _custom_json: Joi.any(),

      company_id: Joi.number().required(),

      requester: Joi.string().allow(""),

      uid: Joi.number().allow(null),

      bulk_job_id: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      item_code: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
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

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      return_config: CatalogModel.ReturnConfigResponse(),

      created_on: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      item_type: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      net_quantity: CatalogModel.NetQuantityResponse(),

      primary_color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      created_by: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      image_nature: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      brand_uid: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      brand: CatalogModel.Brand(),

      product_publish: CatalogModel.ProductPublish1(),

      category: Joi.any(),

      teaser_tag: Joi.any(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      no_of_boxes: Joi.number(),

      is_active: Joi.boolean(),

      variants: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      departments: Joi.array().items(Joi.number()),

      country_of_origin: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      moq: Joi.any(),

      is_physical: Joi.boolean(),

      slug: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      multi_size: Joi.boolean(),

      category_uid: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      variant_group: Joi.any(),

      _custom_json: Joi.any(),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      variant_media: Joi.any(),

      item_code: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      id: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      custom_order: Joi.any(),
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
      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      category_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      synonyms: Joi.any(),

      created_by: Joi.any(),

      variant: Joi.boolean(),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      enabled_for_end_consumer: Joi.boolean(),

      name: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      schema: CatalogModel.AttributeMaster().required(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter().required(),
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

      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.any().required(),

      item_width: Joi.number().required(),

      item_height: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_length: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight_unit_of_measure: Joi.any().required(),
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
      return_config: CatalogModel.ReturnConfigResponse(),

      created_on: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      item_type: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      net_quantity: CatalogModel.NetQuantityResponse(),

      primary_color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      created_by: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      image_nature: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      brand_uid: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      brand: CatalogModel.Brand(),

      product_publish: CatalogModel.ProductPublished(),

      category: Joi.any(),

      teaser_tag: Joi.any(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      no_of_boxes: Joi.number(),

      is_active: Joi.boolean(),

      variants: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      departments: Joi.array().items(Joi.number()),

      country_of_origin: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      moq: Joi.any(),

      is_physical: Joi.boolean(),

      slug: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      multi_size: Joi.boolean(),

      category_uid: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      variant_group: Joi.any(),

      _custom_json: Joi.any(),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      variant_media: Joi.any(),

      item_code: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      id: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      custom_order: Joi.any(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static BulkJob() {
    return Joi.object({
      failed_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      template_tag: Joi.string().allow(""),

      total: Joi.number(),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      custom_template_tag: Joi.string().allow(""),

      company_id: Joi.number().required(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserInfo1(),

      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),
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
      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserDetail1(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

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

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

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
      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      retry: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      total: Joi.number(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserCommon(),

      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

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

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static InvSize() {
    return Joi.object({
      set: CatalogModel.InventorySet(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      size: Joi.any().required(),

      price_transfer: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      price: Joi.number(),

      is_set: Joi.boolean(),

      quantity: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price_effective: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

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
      inventory_updated_on: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price_transfer: Joi.number(),

      item_id: Joi.number(),

      price: Joi.number(),

      uid: Joi.string().allow(""),

      store: Joi.any(),

      currency: Joi.string().allow(""),

      identifiers: Joi.any(),

      price_effective: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
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

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      height: Joi.number().required(),
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

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      set: CatalogModel.InventorySet(),

      return_config: CatalogModel.ReturnConfig1(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      created_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta().required(),

      store: CatalogModel.StoreMeta().required(),

      brand: CatalogModel.BrandMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      total_quantity: Joi.number().required(),

      price: CatalogModel.PriceMeta().required(),

      fragile: Joi.boolean().required(),

      is_active: Joi.boolean(),

      raw_meta: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      weight: CatalogModel.WeightResponse().required(),

      modified_by: CatalogModel.UserSerializer(),

      size: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      added_on_store: Joi.string().allow(""),

      item_id: Joi.number().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      is_set: Joi.boolean(),

      expiration_date: Joi.string().allow(""),

      fynd_item_code: Joi.string().allow("").required(),

      quantities: CatalogModel.Quantities(),

      fynd_article_code: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any().required(),

      _custom_json: Joi.any(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      fynd_meta: Joi.any(),

      meta: Joi.any().allow(null),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),
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
      transfer: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      tp_notes: Joi.any(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      height: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      length: Joi.number(),
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

      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static GetInventories() {
    return Joi.object({
      date_meta: CatalogModel.DateMeta(),

      return_config: CatalogModel.ReturnConfig2(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      created_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta1(),

      store: CatalogModel.ArticleStoreResponse(),

      brand: CatalogModel.BrandMeta1(),

      seller_identifier: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      total_quantity: Joi.number(),

      price: CatalogModel.PriceArticle(),

      platforms: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      modified_by: CatalogModel.UserSerializer(),

      size: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      item_id: Joi.number(),

      dimension: CatalogModel.DimensionResponse1(),

      is_set: Joi.boolean(),

      expiration_date: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      inventory_updated_on: Joi.string().allow(""),

      identifier: Joi.any(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      total: Joi.number(),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      created_by: Joi.any(),

      file_path: Joi.string().allow(""),

      id: Joi.string().allow(""),

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
      item_dimensions_unit_of_measure: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      total_quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price_effective: Joi.number(),

      price: Joi.number(),

      quantity: Joi.number(),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      created_by: Joi.string().allow(""),

      type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      filters: Joi.any(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      operators: Joi.string().allow("").required(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),

      to_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      filters: CatalogModel.InventoryExportAdvanceOption(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()).required(),

      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.InventoryExportFilter().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      stores: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      id: Joi.string().allow("").required(),

      cancelled_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      status: Joi.any(),

      task_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      type: Joi.string().allow("").allow(null),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      filters: CatalogModel.InventoryJobFilters().required(),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
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
      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      total_quantity: Joi.number().allow(null),

      trace_id: Joi.string().allow(""),

      store_id: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      threshold1: Joi.number(),

      threshold2: Joi.number(),

      tax1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      tax2: Joi.number(),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      tax1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number().required(),

      uid: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      tax2: Joi.number(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      hs2_code: Joi.string().allow("").allow(null).required(),
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

      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.string().allow(""),
    });
  }

  static TaxSlab() {
    return Joi.object({
      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      country_code: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      created_by: Joi.any(),

      type: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),
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

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      discount: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),

      action: CatalogModel.Action(),
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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      rating: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      teaser_tag: Joi.any(),

      promo_meta: Joi.any(),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating_count: Joi.number(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
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
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

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
      s_city: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      item_id: Joi.number().required(),

      _id: Joi.string().allow(""),

      company_id: Joi.number(),

      store_id: Joi.number(),

      uid: Joi.string().allow(""),

      index: Joi.number(),

      price_effective: Joi.number(),

      group_id: Joi.string().allow(""),

      status: Joi.boolean().required(),

      store_pincode: Joi.number(),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      quantity: Joi.number().required(),
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
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      company_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      modified_by: CatalogModel.UserSerializer2(),
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
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
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

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      company: CatalogModel.GetCompanySerializer(),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow("").required(),

      manager: CatalogModel.LocationManagerSerializer(),

      modified_on: Joi.string().allow(""),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      warnings: Joi.any(),

      phone_number: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),
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

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
