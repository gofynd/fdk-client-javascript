const Joi = require("joi");

class CatalogModel {
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      meta: Joi.any(),
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

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      result: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),
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
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),

      query: Joi.any(),

      url: Joi.string().allow(""),

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

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
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
      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),
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

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any(),

      price: Joi.any(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      quantity: Joi.number(),

      uid: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      min_marked: Joi.number(),

      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.LimitedProductData(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.Price(),

      max_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      meta: Joi.any(),
    });
  }

  static Meta() {
    return Joi.object({
      values: Joi.array().items(Joi.any()),

      unit: Joi.string().allow(""),

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

      brand_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      active: Joi.boolean(),

      company_id: Joi.number(),

      tag: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),
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

      brand_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      id: Joi.string().allow(""),

      active: Joi.boolean(),

      company_id: Joi.number(),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      name: Joi.string().allow(""),

      guide: Joi.any(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      description: Joi.any(),

      title: Joi.any(),
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
      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),
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
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

      is_cod: Joi.boolean(),
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
      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      priority: Joi.number().required(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      priority: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

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
      total_count: Joi.number().required(),

      next: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

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
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      filter_types: Joi.array().items(Joi.string().allow("")),

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
      variant: Joi.any(),

      similar: Joi.any(),

      detail: Joi.any(),

      compare: Joi.any(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: CatalogModel.MetaDataListingResponse(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
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
      default_key: Joi.string().allow("").required(),

      config: Joi.array().items(CatalogModel.ConfigurationListingSortConfig()),
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

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),
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

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

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
      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      subtitle: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      title: Joi.string().allow(""),
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
      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),
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
      sort: Joi.any(),

      filter: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
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

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      selected_min: Joi.number(),

      is_selected: Joi.boolean().required(),

      value: Joi.any().required(),

      selected_max: Joi.number(),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),
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

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
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
      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),
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
      _custom_json: Joi.any(),

      modified_by: CatalogModel.UserInfo(),

      allow_sort: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      seo: CatalogModel.SeoDetail(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.CollectionImage().required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      description: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo(),

      _locale_language: Joi.any(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner().required(),

      published: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

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
      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.BannerImage(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      meta: Joi.any(),
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

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      action: CatalogModel.Action(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      meta: Joi.any(),
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
      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      _custom_json: Joi.any(),

      modified_by: CatalogModel.UserInfo(),

      allow_sort: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      seo: CatalogModel.SeoDetail(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.CollectionImage(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner(),

      published: Joi.boolean(),

      name: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CollectionItem() {
    return Joi.object({
      priority: Joi.number(),

      item_id: Joi.number().required(),

      action: Joi.string().allow("").required(),
    });
  }

  static CollectionItemUpdate() {
    return Joi.object({
      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      items: Joi.array().items(CatalogModel.CollectionItem()),

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
      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),
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

  static ProductListingDetail() {
    return Joi.object({
      sellable: Joi.boolean(),

      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      price: CatalogModel.ProductListingPrice(),

      description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating: Joi.number(),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      similars: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),
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
      available_articles: Joi.number(),

      total_articles: Joi.number(),

      article_freshness: Joi.number(),

      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_sizes: Joi.number(),
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

      platform: Joi.string().allow(""),

      company_id: Joi.number(),

      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      created_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      modified_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      modified_on: Joi.number().required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

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

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      company_id: Joi.number(),

      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

      total_article: Joi.number(),
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
      documents: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      company_id: Joi.number(),

      manager: Joi.any(),

      timing: Joi.any(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      address: Joi.any(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
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
      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),
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

      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      meta: CatalogModel.AttributeMasterMeta(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),
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

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      priority_order: Joi.number(),

      search: Joi.string().allow(""),

      page_size: Joi.number(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),
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
      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      _id: Joi.any(),

      slug: Joi.any().required(),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      name: Joi.any().required(),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      uid: Joi.number().required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      logo: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      logo: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      id: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Properties() {
    return Joi.object({
      trader_type: Joi.any(),

      multi_size: Joi.any(),

      media: Joi.any(),

      is_dependent: Joi.any(),

      item_type: Joi.any(),

      size_guide: Joi.any(),

      category_slug: Joi.any(),

      brand_uid: Joi.any(),

      currency: Joi.any(),

      return_config: Joi.any(),

      slug: Joi.any(),

      is_active: Joi.any(),

      command: Joi.any(),

      description: Joi.any(),

      no_of_boxes: Joi.any(),

      item_code: Joi.any(),

      sizes: Joi.any(),

      hsn_code: Joi.any(),

      short_description: Joi.any(),

      teaser_tag: Joi.any(),

      product_publish: Joi.any(),

      tags: Joi.any(),

      country_of_origin: Joi.any(),

      variants: Joi.any(),

      product_group_tag: Joi.any(),

      trader: Joi.any(),

      name: Joi.any(),

      custom_order: Joi.any(),

      highlights: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),
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
      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: Joi.any(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      from_date: Joi.string().allow(""),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),

      type: Joi.string().allow("").allow(null),
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
      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),

      l2: Joi.number().required(),

      l1: Joi.number().required(),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      marketplaces: CatalogModel.CategoryMapping(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

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
      marketplaces: CatalogModel.CategoryMapping(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),
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

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
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

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),

      type: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      requester: Joi.string().allow(""),

      _custom_json: Joi.any(),

      multi_size: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      is_dependent: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      action: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),

      change_request_id: Joi.any(),

      brand_uid: Joi.number().required(),

      net_quantity: CatalogModel.NetQuantity(),

      variant_group: Joi.any(),

      currency: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      item_code: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      sizes: Joi.array().items(Joi.any()).required(),

      short_description: Joi.string().allow(""),

      teaser_tag: CatalogModel.TeaserTag(),

      product_publish: CatalogModel.ProductPublish(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      is_set: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      variants: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      variant_media: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      name: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

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
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      l3_mapping: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      modified_by: Joi.any(),

      multi_size: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      is_dependent: Joi.boolean(),

      item_type: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      brand_uid: Joi.number(),

      category: Joi.any(),

      created_on: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      currency: Joi.string().allow(""),

      variant_group: Joi.any(),

      id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      moq: Joi.any(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      brand: CatalogModel.Brand(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      no_of_boxes: Joi.number(),

      item_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      all_company_ids: Joi.array().items(Joi.number()),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      is_expirable: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      short_description: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish1(),

      primary_color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      is_set: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      variants: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      stage: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      color: Joi.string().allow(""),

      variant_media: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      name: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      custom_order: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      uid: Joi.number(),
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
      modified_by: Joi.any(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      is_nested: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      variant: Joi.boolean(),

      synonyms: Joi.any(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      raw_key: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      unit: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      name: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),
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
      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static AllSizes() {
    return Joi.object({
      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),

      item_height: Joi.number().required(),
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
      l3_mapping: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      modified_by: Joi.any(),

      multi_size: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      is_dependent: Joi.boolean(),

      item_type: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      brand_uid: Joi.number(),

      category: Joi.any(),

      created_on: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      currency: Joi.string().allow(""),

      variant_group: Joi.any(),

      id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      moq: Joi.any(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      brand: CatalogModel.Brand(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      no_of_boxes: Joi.number(),

      item_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      all_company_ids: Joi.array().items(Joi.number()),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      is_expirable: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      short_description: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      primary_color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      is_set: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      variants: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      stage: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      color: Joi.string().allow(""),

      variant_media: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      name: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      custom_order: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
    });
  }

  static BulkJob() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.any()),

      company_id: Joi.number().required(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      failed: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),
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
      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),
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

      template_tag: Joi.string().allow("").required(),

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
      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      retry: Joi.number(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),
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

      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),
    });
  }

  static InvSize() {
    return Joi.object({
      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      item_height: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      item_length: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      quantity: Joi.number().required(),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      expiration_date: Joi.string().allow(""),

      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      price_transfer: Joi.number().allow(null),
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
      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      price: Joi.number(),

      identifiers: Joi.any(),

      sellable_quantity: Joi.number(),

      store: Joi.any(),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      price_transfer: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
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

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      effective: Joi.number().required(),

      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

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

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      track_inventory: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      fynd_item_code: Joi.string().allow("").required(),

      weight: CatalogModel.WeightResponse().required(),

      trace_id: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),

      total_quantity: Joi.number().required(),

      return_config: CatalogModel.ReturnConfig1(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      is_active: Joi.boolean(),

      brand: CatalogModel.BrandMeta().required(),

      price: CatalogModel.PriceMeta().required(),

      created_by: CatalogModel.UserSerializer(),

      dimension: CatalogModel.DimensionResponse().required(),

      uid: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      set: CatalogModel.InventorySet(),

      item_id: Joi.number().required(),

      raw_meta: Joi.any(),

      is_set: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      fynd_article_code: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      company: CatalogModel.CompanyMeta().required(),

      identifier: Joi.any().required(),

      fynd_meta: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      fragile: Joi.boolean().required(),

      meta: Joi.any().allow(null),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      transfer: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      width: Joi.number(),
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

  static DateMeta() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      size: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse1(),

      trace_id: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      inventory_updated_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      total_quantity: Joi.number(),

      return_config: CatalogModel.ReturnConfig2(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      platforms: Joi.any(),

      brand: CatalogModel.BrandMeta1(),

      price: CatalogModel.PriceArticle(),

      created_by: CatalogModel.UserSerializer(),

      dimension: CatalogModel.DimensionResponse1(),

      expiration_date: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      item_id: Joi.number(),

      is_set: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      tax_identifier: Joi.any(),

      company: CatalogModel.CompanyMeta1(),

      identifier: Joi.any(),

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
      file_path: Joi.string().allow(""),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      succeed: Joi.number(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),
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
      seller_identifier: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_marked: Joi.number(),

      price: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),
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
      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: Joi.any(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      operators: Joi.string().allow("").required(),

      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      to_date: Joi.string().allow("").allow(null),

      from_date: Joi.string().allow("").allow(null),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()).required(),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),

      type: Joi.string().allow("").allow(null),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),

      stores: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      from_date: Joi.string().allow(""),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      status: Joi.any(),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryJobFilters().required(),

      url: Joi.string().allow("").required(),

      type: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").required(),

      cancelled_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      task_id: Joi.string().allow("").required(),

      cancelled_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
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
      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number().allow(null),

      store_id: Joi.number().required(),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

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
      tax1: Joi.number().required(),

      uid: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      hsn_code: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      threshold1: Joi.number().required(),

      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),

      threshold2: Joi.number(),

      modified_on: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

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

  static TaxSlab() {
    return Joi.object({
      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      threshold: Joi.number().required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_on: Joi.string().allow(""),
    });
  }

  static PageResponse() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

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
      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
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

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
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

      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating: Joi.number(),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      similars: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

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
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
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
      meta: Joi.any(),

      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),

      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_identifier: Joi.string().allow(""),

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
      strategy_wise_listing: Joi.array().items(Joi.any()),

      status: Joi.boolean().required(),

      size: Joi.string().allow("").required(),

      store_pincode: Joi.number(),

      group_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      store_id: Joi.number(),

      item_id: Joi.number().required(),

      quantity: Joi.number().required(),

      company_id: Joi.number(),

      price_marked: Joi.number(),

      s_city: Joi.string().allow(""),

      index: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      meta: Joi.any(),

      price_effective: Joi.number(),

      uid: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
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
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),
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
      business_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      name: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      modified_by: CatalogModel.UserSerializer1(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      verified_by: CatalogModel.UserSerializer1(),

      warnings: Joi.any(),

      created_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      store_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.GetAddressSerializer().required(),

      uid: Joi.number(),

      manager: CatalogModel.LocationManagerSerializer(),

      integration_type: CatalogModel.LocationIntegrationType(),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      company: CatalogModel.GetCompanySerializer(),

      name: Joi.string().allow("").required(),
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

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      uid: Joi.number().required(),
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
