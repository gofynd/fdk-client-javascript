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

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: Joi.any(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      status: Joi.number(),

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
      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

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

      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      company_id: Joi.number(),

      meta: Joi.any(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      company_id: Joi.number(),

      meta: Joi.any(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      id: Joi.string().allow(""),
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
      company_id: Joi.number(),

      meta: Joi.any(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
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

  static Price() {
    return Joi.object({
      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.string().allow(""),

      max_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      identifier: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      max_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      price: CatalogModel.Price(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      company_id: Joi.number(),

      meta: Joi.any(),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),
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
      title: Joi.string().allow("").required(),

      company_id: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      guide: CatalogModel.Guide(),

      active: Joi.boolean(),

      image: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      brand_id: Joi.number(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

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
      title: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      guide: Joi.any(),

      active: Joi.boolean(),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
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

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

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
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
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
      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      slug: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

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
      key: Joi.string().allow("").required(),

      default_key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

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

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      display: Joi.string().allow(""),

      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),
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
      end: Joi.number(),

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      value: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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
      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

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
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

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

  static ConfigurationProductConfig() {
    return Joi.object({
      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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
      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

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

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),

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
      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      query_format: Joi.string().allow(""),

      max: Joi.number(),

      count: Joi.number(),

      selected_min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      value: Joi.any().required(),

      selected_max: Joi.number(),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),
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

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
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
      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),
    });
  }

  static CreateCollection() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      created_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      seo: CatalogModel.SeoDetail(),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      published: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      banners: CatalogModel.CollectionBanner().required(),

      modified_by: CatalogModel.UserInfo(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      name: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      is_visible: Joi.boolean(),
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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.BannerImage(),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),
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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      published: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      banners: CatalogModel.CollectionBanner(),

      modified_by: CatalogModel.UserInfo(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      name: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      is_visible: Joi.boolean(),
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

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      medias: Joi.array().items(CatalogModel.Media1()),

      type: Joi.string().allow(""),

      promo_meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      rating: Joi.number(),

      rating_count: Joi.number(),

      item_type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_articles: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

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
      company_id: Joi.number(),

      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      company_id: Joi.number().required(),

      enabled: Joi.boolean().required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),
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
      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      address: Joi.any(),

      uid: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      documents: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      timing: Joi.any(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      manager: Joi.any(),
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

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
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

      description: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      meta: Joi.any(),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      _cls: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      platforms: Joi.any(),

      priority_order: Joi.number().required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
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
      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      page_size: Joi.number(),

      item_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      page_no: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      logo: Joi.string().allow(""),

      search: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      meta: Joi.any(),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),
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
      synonyms: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      uid: Joi.number(),

      _cls: Joi.any(),

      slug: Joi.any(),

      priority_order: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      is_active: Joi.boolean(),

      verified_on: Joi.string().allow(""),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_expirable: Joi.boolean().required(),

      is_physical: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      is_archived: Joi.boolean(),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      is_expirable: Joi.boolean().required(),

      is_physical: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      tags: Joi.any(),

      description: Joi.any(),

      command: Joi.any(),

      slug: Joi.any(),

      is_dependent: Joi.any(),

      variants: Joi.any(),

      multi_size: Joi.any(),

      item_code: Joi.any(),

      short_description: Joi.any(),

      hsn_code: Joi.any(),

      custom_order: Joi.any(),

      brand_uid: Joi.any(),

      product_publish: Joi.any(),

      is_active: Joi.any(),

      item_type: Joi.any(),

      teaser_tag: Joi.any(),

      media: Joi.any(),

      size_guide: Joi.any(),

      product_group_tag: Joi.any(),

      category_slug: Joi.any(),

      return_config: Joi.any(),

      trader: Joi.any(),

      sizes: Joi.any(),

      no_of_boxes: Joi.any(),

      trader_type: Joi.any(),

      highlights: Joi.any(),

      currency: Joi.any(),

      name: Joi.any(),

      country_of_origin: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      properties: CatalogModel.Properties(),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

  static UserInfo1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      url: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

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

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      to_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),
    });
  }

  static ProductPartialExportRequest() {
    return Joi.object({
      status: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductConfigurationDownloads() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      multivalue: Joi.boolean(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      l2: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
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

      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      media: CatalogModel.Media2(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      level: Joi.number().required(),

      marketplaces: CatalogModel.CategoryMapping(),
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

      departments: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      uid: Joi.number(),

      media: CatalogModel.Media2(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      level: Joi.number().required(),

      id: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),
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

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
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

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
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
      returnable: Joi.boolean().required(),

      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      template_tag: Joi.string().allow("").required(),

      variants: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      is_image_less_product: Joi.boolean(),

      multi_size: Joi.boolean(),

      item_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      custom_order: CatalogModel.CustomOrder(),

      brand_uid: Joi.number().required(),

      product_publish: CatalogModel.ProductPublish(),

      is_active: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      variant_group: Joi.any(),

      teaser_tag: CatalogModel.TeaserTag(),

      departments: Joi.array().items(Joi.number()).required(),

      _custom_json: Joi.any(),

      uid: Joi.number().allow(null),

      action: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      size_guide: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      change_request_id: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      sizes: Joi.array().items(Joi.any()).required(),

      no_of_boxes: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      currency: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      name: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      country_of_origin: Joi.string().allow("").required(),

      is_set: Joi.boolean(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

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

  static ProductSchemaV2() {
    return Joi.object({
      is_expirable: Joi.boolean(),

      is_physical: Joi.boolean(),

      created_by: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      tags: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      category_uid: Joi.number(),

      variants: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_image_less_product: Joi.boolean(),

      multi_size: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      company_id: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      short_description: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      attributes: Joi.any(),

      moq: Joi.any(),

      custom_order: Joi.any(),

      brand_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublish1(),

      item_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      variant_group: Joi.any(),

      teaser_tag: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      size_guide: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      images: Joi.array().items(CatalogModel.Image()),

      trader: Joi.array().items(CatalogModel.Trader()),

      sizes: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      no_of_boxes: Joi.number(),

      brand: CatalogModel.Brand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      variant_media: Joi.any(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),
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

      uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),
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
      created_by: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      schema: CatalogModel.AttributeMaster().required(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      enabled_for_end_consumer: Joi.boolean(),

      synonyms: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      logo: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      raw_key: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

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

      item_length: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_height: Joi.number().required(),

      item_width: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      is_expirable: Joi.boolean(),

      is_physical: Joi.boolean(),

      created_by: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      tags: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      category_uid: Joi.number(),

      variants: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_image_less_product: Joi.boolean(),

      multi_size: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      company_id: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      short_description: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      attributes: Joi.any(),

      moq: Joi.any(),

      custom_order: Joi.any(),

      brand_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublished(),

      item_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      variant_group: Joi.any(),

      teaser_tag: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      size_guide: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      images: Joi.array().items(CatalogModel.Image()),

      trader: Joi.array().items(CatalogModel.Trader()),

      sizes: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      no_of_boxes: Joi.number(),

      brand: CatalogModel.Brand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      variant_media: Joi.any(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),
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
      total: Joi.number(),

      company_id: Joi.number().required(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      custom_template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),
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
      total: Joi.number(),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      stage: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),
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

      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

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
      total: Joi.number(),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      succeed: Joi.number(),

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

      item_id: Joi.number(),

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
      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_length: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      quantity: Joi.number().required(),

      item_height: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      item_width: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price_effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      is_set: Joi.boolean(),

      expiration_date: Joi.string().allow(""),

      size: Joi.any().required(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

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
      sellable_quantity: Joi.number(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      store: Joi.any(),

      price: Joi.number(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      item_id: Joi.number(),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      size: Joi.string().allow(""),

      price_transfer: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),
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

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer(),

      store: CatalogModel.StoreMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      set: CatalogModel.InventorySet(),

      fragile: Joi.boolean().required(),

      fynd_meta: Joi.any(),

      added_on_store: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      raw_meta: Joi.any(),

      total_quantity: Joi.number().required(),

      quantities: CatalogModel.Quantities(),

      fynd_article_code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      is_active: Joi.boolean(),

      size: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      fynd_item_code: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      weight: CatalogModel.WeightResponse().required(),

      uid: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      return_config: CatalogModel.ReturnConfig1(),

      expiration_date: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader1()),

      identifier: Joi.any().required(),

      modified_by: CatalogModel.UserSerializer(),

      brand: CatalogModel.BrandMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      country_of_origin: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),
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
      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

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

      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      effective: Joi.number(),
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

  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      date_meta: CatalogModel.DateMeta(),

      created_by: CatalogModel.UserSerializer(),

      store: CatalogModel.ArticleStoreResponse(),

      tags: Joi.array().items(Joi.string().allow("")),

      inventory_updated_on: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      total_quantity: Joi.number(),

      quantities: CatalogModel.QuantitiesArticle(),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      dimension: CatalogModel.DimensionResponse1(),

      id: Joi.string().allow(""),

      size: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      return_config: CatalogModel.ReturnConfig2(),

      expiration_date: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      identifier: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      brand: CatalogModel.BrandMeta1(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      platforms: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),
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
      total: Joi.number(),

      company_id: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      cancelled: Joi.number(),
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
      total_quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      store_code: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),
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
      type: Joi.string().allow("").allow(null),

      brand: Joi.array().items(Joi.number()),

      store: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      created_by: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

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
      from_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow("").allow(null),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      url: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryExportAdvanceOption(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      data: Joi.array().items(Joi.string().allow("")),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      stores: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      cancelled_by: CatalogModel.UserDetail(),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").required(),

      cancelled_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      status: Joi.any(),

      task_id: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryJobFilters().required(),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryPartialExportRequest() {
    return Joi.object({
      status: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportCreateFilters() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportCreateResponse() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      cancelled_by: CatalogModel.UserDetail(),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").required(),

      cancelled_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      status: Joi.any(),

      task_id: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryExportCreateFilters().required(),
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
      total_quantity: Joi.number().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),

      trace_id: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),

      meta: Joi.any(),

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

  static HsnUpsert() {
    return Joi.object({
      company_id: Joi.number().required(),

      tax2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number().required(),

      uid: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_mrp: Joi.boolean().required(),

      threshold1: Joi.number().required(),

      is_active: Joi.boolean(),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      company_id: Joi.number(),

      tax2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      threshold1: Joi.number(),

      threshold2: Joi.number(),

      id: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),
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

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),

      rate: Joi.number().required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

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
      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

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

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.Action(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),
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

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      medias: Joi.array().items(CatalogModel.Media1()),

      type: Joi.string().allow(""),

      promo_meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      rating: Joi.number(),

      rating_count: Joi.number(),

      item_type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

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
      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),

      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStore() {
    return Joi.object({
      company_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_identifier: Joi.string().allow(""),
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

      company_id: Joi.number(),

      store_id: Joi.number(),

      quantity: Joi.number().required(),

      _id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      store_pincode: Joi.number(),

      index: Joi.number(),

      item_id: Joi.number().required(),

      price_effective: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      price_marked: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      status: Joi.boolean().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
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
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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
      closing: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
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
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      business_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      modified_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      display_name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      uid: Joi.number(),

      documents: Joi.array().items(CatalogModel.Document()),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      integration_type: CatalogModel.LocationIntegrationType(),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      warnings: Joi.any(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),
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

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

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
