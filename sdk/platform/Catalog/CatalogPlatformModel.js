const Joi = require("joi");

class CatalogModel {
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
      items: CatalogModel.GetSearchWordsData(),

      page: CatalogModel.Page(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),
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

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      params: Joi.any(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      page: CatalogModel.AutocompletePageAction(),

      type: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),
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
      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),

      page: CatalogModel.Page(),
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
      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      slug: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),

      quantity: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_uid: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      allow_remove: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      meta: Joi.any(),

      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),
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
      modified_by: Joi.any(),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      created_by: Joi.any(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      brand_id: Joi.number(),
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

      id: Joi.string().allow(""),

      guide: Joi.any(),

      title: Joi.string().allow(""),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      brand_id: Joi.number(),
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
      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),
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

  static MetaFields() {
    return Joi.object({
      key: Joi.any().required(),

      value: Joi.any().required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),

      _custom_json: Joi.any(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),
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

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),
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
      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

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
      start: Joi.number(),

      end: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),

      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      value_config: CatalogModel.ConfigurationListingFilterValue(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),
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

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize().required(),

      name: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

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
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      app_id: Joi.string().allow("").required(),
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

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),
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
      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      currency_code: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      value: Joi.any().required(),

      display_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
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
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_sort: Joi.boolean(),

      published: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      app_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      banners: CatalogModel.CollectionBanner().required(),

      name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      _locale_language: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      priority: Joi.number(),

      slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),
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
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),
    });
  }

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      url: Joi.string().allow("").required(),

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
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_sort: Joi.boolean(),

      published: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      modified_by: CatalogModel.UserInfo(),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      banners: CatalogModel.CollectionBanner(),

      name: Joi.string().allow(""),

      _locale_language: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),
    });
  }

  static CollectionItem() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      priority: Joi.number(),
    });
  }

  static CollectionItemUpdate() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CollectionItem()),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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
      action: CatalogModel.Action(),

      uid: Joi.number(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),
    });
  }

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price1(),

      effective: CatalogModel.Price1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      rating: Joi.number(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      name: Joi.string().allow(""),

      rating_count: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      attributes: Joi.any(),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      type: Joi.string().allow(""),

      sellable: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      promo_meta: Joi.any(),
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
      sellable_count: Joi.number(),

      count: Joi.number(),

      out_of_stock_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      article_freshness: Joi.number(),

      available_articles: Joi.number(),

      total_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),

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
      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_by: Joi.any(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      opt_level: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      company_id: Joi.number().required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      enabled: Joi.boolean().required(),

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

      uid: Joi.number(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
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
      manager: Joi.any(),

      timing: Joi.any(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      address: Joi.any(),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),
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
      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      format: Joi.string().allow(""),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),
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
      slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      filters: CatalogModel.AttributeMasterFilter(),

      schema: CatalogModel.AttributeMaster(),

      is_nested: Joi.boolean(),

      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

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

      uid: Joi.number(),

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
      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      platforms: Joi.any(),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

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

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      slug: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      priority_order: Joi.number(),

      page_no: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      search: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      page_size: Joi.number(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),
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
      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      modified_by: CatalogModel.UserDetail(),

      slug: Joi.any().required(),

      _cls: Joi.any(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").required(),

      _id: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      verified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      is_physical: Joi.boolean().required(),

      created_by: Joi.any(),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),
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
      tags: Joi.any(),

      no_of_boxes: Joi.any(),

      sizes: Joi.any(),

      multi_size: Joi.any(),

      item_code: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.any(),

      highlights: Joi.any(),

      currency: Joi.any(),

      category_slug: Joi.any(),

      size_guide: Joi.any(),

      name: Joi.any(),

      command: Joi.any(),

      media: Joi.any(),

      product_group_tag: Joi.any(),

      brand_uid: Joi.any(),

      custom_order: Joi.any(),

      hsn_code: Joi.any(),

      slug: Joi.any(),

      trader_type: Joi.any(),

      is_dependent: Joi.any(),

      item_type: Joi.any(),

      teaser_tag: Joi.any(),

      description: Joi.any(),

      trader: Joi.any(),

      return_config: Joi.any(),

      is_active: Joi.any(),

      product_publish: Joi.any(),

      country_of_origin: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      definitions: Joi.any(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      slug: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),
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

  static UserInfo1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      seller_id: Joi.number().required(),

      filters: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      from_date: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      to_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),
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
      department: Joi.number().required(),

      l1: Joi.number().required(),

      l2: Joi.number().required(),
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

      google: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
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
      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

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
      slug: Joi.string().allow(""),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      priority: Joi.number(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Category()),

      page: CatalogModel.Page(),
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

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
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
      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),

      returnable: Joi.boolean().required(),
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

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),

      type: Joi.string().allow(""),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      is_image_less_product: Joi.boolean(),

      no_of_boxes: Joi.number(),

      bulk_job_id: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()).required(),

      requester: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      is_set: Joi.boolean(),

      item_code: Joi.string().allow("").required(),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      template_tag: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      currency: Joi.string().allow("").required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      net_quantity: CatalogModel.NetQuantity(),

      category_slug: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      name: Joi.string().allow("").required(),

      attributes: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      action: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      variant_media: Joi.any(),

      company_id: Joi.number().required(),

      custom_order: CatalogModel.CustomOrder(),

      variant_group: Joi.any(),

      slug: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      teaser_tag: CatalogModel.TeaserTag(),

      _custom_json: Joi.any(),

      uid: Joi.number().allow(null),

      description: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      change_request_id: Joi.any(),

      is_active: Joi.boolean(),

      product_publish: CatalogModel.ProductPublish(),

      country_of_origin: Joi.string().allow("").required(),
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
      unit: Joi.string().allow(""),

      time: Joi.number(),

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
      uid: Joi.number(),

      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),
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

  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      no_of_boxes: Joi.number(),

      is_image_less_product: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      multi_size: Joi.boolean(),

      is_set: Joi.boolean(),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      variants: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      pending: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      all_sizes: Joi.array().items(Joi.any()),

      modified_by: Joi.any(),

      currency: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      stage: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      name: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      attributes: Joi.any(),

      created_by: Joi.any(),

      verified_on: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      brand_uid: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(CatalogModel.Image()),

      is_expirable: Joi.boolean(),

      variant_media: Joi.any(),

      company_id: Joi.number(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      variant_group: Joi.any(),

      slug: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      is_dependent: Joi.boolean(),

      category_uid: Joi.number(),

      moq: Joi.any(),

      item_type: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      color: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_active: Joi.boolean(),

      product_publish: CatalogModel.ProductPublish1(),

      country_of_origin: Joi.string().allow(""),
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
      brand_uid: Joi.number(),

      category_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),
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
      tags: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.AttributeMasterFilter().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: Joi.any(),

      synonyms: Joi.any(),

      variant: Joi.boolean(),

      is_nested: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      schema: CatalogModel.AttributeMaster().required(),

      modified_on: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_width: Joi.number().required(),

      size: Joi.any().required(),

      item_height: Joi.number().required(),

      item_length: Joi.number().required(),

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

  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      no_of_boxes: Joi.number(),

      is_image_less_product: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      multi_size: Joi.boolean(),

      is_set: Joi.boolean(),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      variants: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      pending: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      all_sizes: Joi.array().items(Joi.any()),

      modified_by: Joi.any(),

      currency: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      stage: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      name: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      attributes: Joi.any(),

      created_by: Joi.any(),

      verified_on: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      brand_uid: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(CatalogModel.Image()),

      is_expirable: Joi.boolean(),

      variant_media: Joi.any(),

      company_id: Joi.number(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      variant_group: Joi.any(),

      slug: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      is_dependent: Joi.boolean(),

      category_uid: Joi.number(),

      moq: Joi.any(),

      item_type: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      color: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_active: Joi.boolean(),

      product_publish: CatalogModel.ProductPublished(),

      country_of_origin: Joi.string().allow(""),
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
      modified_by: CatalogModel.UserInfo1(),

      failed: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),
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
      modified_by: CatalogModel.UserDetail1(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),
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

      company_id: Joi.number().required(),

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
      user_id: Joi.string().allow(""),

      company_id: Joi.number(),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      modified_by: CatalogModel.UserCommon(),

      failed: Joi.number(),

      retry: Joi.number(),

      id: Joi.string().allow(""),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

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
      company_id: Joi.number(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static ProductSizeDeleteResponse() {
    return Joi.object({
      data: CatalogModel.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),
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
      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      price: Joi.number(),

      set: CatalogModel.InventorySet(),

      price_effective: Joi.number().required(),

      size: Joi.any().required(),

      item_height: Joi.number().allow(null),

      quantity: Joi.number().required(),

      is_set: Joi.boolean(),

      expiration_date: Joi.string().allow(""),

      item_length: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),
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
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      identifiers: Joi.any(),

      currency: Joi.string().allow(""),

      price_transfer: Joi.number(),

      sellable_quantity: Joi.number(),

      price: Joi.number(),

      quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      price_effective: Joi.number(),

      size: Joi.string().allow(""),

      store: Joi.any(),

      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
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
      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      effective: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
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

      sellable: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
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
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      added_on_store: Joi.string().allow(""),

      fragile: Joi.boolean().required(),

      modified_by: CatalogModel.UserSerializer(),

      tax_identifier: Joi.any(),

      weight: CatalogModel.WeightResponse().required(),

      fynd_item_code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      fynd_meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      created_by: CatalogModel.UserSerializer(),

      identifier: Joi.any().required(),

      track_inventory: Joi.boolean(),

      raw_meta: Joi.any(),

      price: CatalogModel.PriceMeta().required(),

      store: CatalogModel.StoreMeta().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      expiration_date: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta().required(),

      item_id: Joi.number().required(),

      fynd_article_code: Joi.string().allow("").required(),

      total_quantity: Joi.number().required(),

      quantities: CatalogModel.Quantities(),

      size: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      return_config: CatalogModel.ReturnConfig1(),

      meta: Joi.any().allow(null),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static PriceArticle() {
    return Joi.object({
      marked: Joi.number(),

      transfer: Joi.number(),

      currency: Joi.string().allow(""),

      tp_notes: Joi.any(),

      effective: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      height: Joi.number(),

      width: Joi.number(),

      length: Joi.number(),
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

      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static DateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
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
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static GetInventories() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      is_set: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      platforms: Joi.any(),

      tax_identifier: Joi.any(),

      weight: CatalogModel.WeightResponse1(),

      stage: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      created_by: CatalogModel.UserSerializer(),

      identifier: Joi.any(),

      track_inventory: Joi.boolean(),

      price: CatalogModel.PriceArticle(),

      store: CatalogModel.ArticleStoreResponse(),

      dimension: CatalogModel.DimensionResponse1(),

      expiration_date: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      item_id: Joi.number(),

      total_quantity: Joi.number(),

      quantities: CatalogModel.QuantitiesArticle(),

      size: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      uid: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      return_config: CatalogModel.ReturnConfig2(),

      country_of_origin: Joi.string().allow(""),
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
      failed: Joi.number(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),
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
      total_quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      item_weight_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price: Joi.number(),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      user: Joi.any(),
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
      seller_id: Joi.number().required(),

      filters: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: Joi.string().allow(""),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      max: Joi.number(),

      operators: Joi.string().allow("").required(),

      min: Joi.number(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow("").allow(null),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.InventoryExportFilter().required(),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      stores: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      cancelled_on: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      filters: CatalogModel.InventoryJobFilters().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      url: Joi.string().allow("").required(),

      type: Joi.string().allow("").allow(null),

      task_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      status: Joi.any(),

      completed_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),
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
      data: Joi.array().items(CatalogModel.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      total_quantity: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),
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

  static HsnCodesObject() {
    return Joi.object({
      threshold2: Joi.number(),

      tax2: Joi.number(),

      id: Joi.string().allow(""),

      threshold1: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax1: Joi.number(),

      modified_on: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      threshold2: Joi.number(),

      tax2: Joi.number(),

      threshold1: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number().required(),

      uid: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      tax_on_mrp: Joi.boolean().required(),
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
      threshold: Joi.number().required(),

      rate: Joi.number().required(),

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_by: Joi.any(),

      type: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      created_by: Joi.any(),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),
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
      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
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
      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

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

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      rating: Joi.number(),

      image_nature: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      name: Joi.string().allow(""),

      rating_count: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      attributes: Joi.any(),

      type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      promo_meta: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),
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
      ignored_stores: Joi.array().items(Joi.number()),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      pincode: Joi.string().allow("").required(),

      channel_identifier: Joi.string().allow(""),

      company_id: Joi.number(),

      channel_type: Joi.string().allow(""),

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

      price_marked: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      quantity: Joi.number().required(),

      index: Joi.number(),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      _id: Joi.string().allow(""),

      store_pincode: Joi.number(),

      uid: Joi.string().allow(""),

      status: Joi.boolean().required(),

      company_id: Joi.number(),

      s_city: Joi.string().allow(""),

      meta: Joi.any(),

      store_id: Joi.number(),

      item_id: Joi.number().required(),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
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

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
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
      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

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
      modified_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      created_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      business_type: Joi.string().allow(""),
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

  static GetLocationSerializer() {
    return Joi.object({
      documents: Joi.array().items(CatalogModel.Document()),

      integration_type: CatalogModel.LocationIntegrationType(),

      store_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      warnings: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.GetAddressSerializer().required(),

      company: CatalogModel.GetCompanySerializer(),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      display_name: Joi.string().allow("").required(),
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

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

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
