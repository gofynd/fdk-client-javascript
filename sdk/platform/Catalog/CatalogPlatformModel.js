const Joi = require("joi");

class CatalogModel {
  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.any().required(),

      sort_on: Joi.string().allow("").required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      result: Joi.any(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      error: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      type: Joi.string().allow(""),

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
      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
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

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      name: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

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
      meta: Joi.any(),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      name: Joi.string().allow("").required(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      attributes: Joi.any(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      price: Joi.any(),

      identifier: Joi.any(),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      meta: Joi.any(),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),
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
      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      guide: CatalogModel.Guide(),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

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
      items: Joi.array().items(Joi.any()),

      page: Joi.any(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      guide: Joi.any(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static MOQData() {
    return Joi.object({
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
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
      moq: CatalogModel.MOQData(),

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
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
      value: Joi.any().required(),

      key: Joi.any().required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_gift: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

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

  static GetConfigMetadataResponse() {
    return Joi.object({
      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      unit: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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
      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

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
      filter_types: Joi.array().items(Joi.string().allow("")),

      units: Joi.array().items(Joi.any()),

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
      similar: Joi.any(),

      detail: Joi.any(),

      compare: Joi.any(),

      variant: Joi.any(),
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
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize(),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

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

  static ConfigurationBucketPoints() {
    return Joi.object({
      start: Joi.number(),

      display: Joi.string().allow(""),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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

  static AppConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

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
      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

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
      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),

      selected_min: Joi.number(),

      display: Joi.string().allow("").required(),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      display_format: Joi.string().allow(""),

      count: Joi.number(),

      min: Joi.number(),

      value: Joi.any().required(),

      selected_max: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      seo: CatalogModel.SeoDetail(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      banners: CatalogModel.CollectionBanner().required(),

      logo: CatalogModel.CollectionImage().required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      is_visible: Joi.boolean(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      published: Joi.boolean(),

      _locale_language: Joi.any(),

      sort_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),
    });
  }

  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.BannerImage(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media1(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      action: CatalogModel.Action(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

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
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      seo: CatalogModel.SeoDetail(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      logo: CatalogModel.CollectionImage(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      is_visible: Joi.boolean(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      published: Joi.boolean(),

      _locale_language: Joi.any(),

      sort_on: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),
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
      marked: CatalogModel.Price1(),

      effective: CatalogModel.Price1(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      rating_count: Joi.number(),

      promo_meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      sellable: Joi.boolean(),

      teaser_tag: Joi.any(),

      uid: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      image_nature: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_sizes: Joi.number(),

      available_articles: Joi.number(),

      total_sizes: Joi.number(),

      total_articles: Joi.number(),

      article_freshness: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),
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
      data: CatalogModel.CrossSellingData(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      enabled: Joi.boolean().required(),

      created_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),

      created_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),
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
      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      company_id: Joi.number(),

      brand_name: Joi.string().allow(""),

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
      created_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      manager: Joi.any(),

      timing: Joi.any(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
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
      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),
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

  static GenderDetail() {
    return Joi.object({
      meta: CatalogModel.AttributeMasterMeta(),

      schema: CatalogModel.AttributeMaster(),

      logo: Joi.string().allow(""),

      id: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      details: CatalogModel.AttributeMasterDetails(),

      slug: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
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
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      platforms: Joi.any(),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),
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

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      page_size: Joi.number(),

      search: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      page_no: Joi.number(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      priority_order: Joi.number(),
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

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      errors: Joi.any(),
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
      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.any()),

      verified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      _id: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.any().required(),

      verified_on: Joi.string().allow(""),

      priority_order: Joi.number().required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      is_archived: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
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
      item_type: Joi.any(),

      tags: Joi.any(),

      category_slug: Joi.any(),

      variants: Joi.any(),

      slug: Joi.any(),

      is_active: Joi.any(),

      name: Joi.any(),

      sizes: Joi.any(),

      short_description: Joi.any(),

      size_guide: Joi.any(),

      custom_order: Joi.any(),

      media: Joi.any(),

      item_code: Joi.any(),

      command: Joi.any(),

      highlights: Joi.any(),

      no_of_boxes: Joi.any(),

      country_of_origin: Joi.any(),

      currency: Joi.any(),

      trader: Joi.any(),

      trader_type: Joi.any(),

      is_dependent: Joi.any(),

      product_publish: Joi.any(),

      multi_size: Joi.any(),

      teaser_tag: Joi.any(),

      brand_uid: Joi.any(),

      product_group_tag: Joi.any(),

      return_config: Joi.any(),

      hsn_code: Joi.any(),

      description: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),
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
      is_expirable: Joi.boolean().required(),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

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
      templates: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      data: CatalogModel.ProductDownloadItemsData(),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      id: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      url: Joi.string().allow(""),

      seller_id: Joi.number(),

      trigger_on: Joi.string().allow(""),
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
      marketplaces: CatalogModel.CategoryMapping(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),

      media: CatalogModel.Media2(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),
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
      marketplaces: CatalogModel.CategoryMapping(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      level: Joi.number().required(),

      media: CatalogModel.Media2(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),
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

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

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

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
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
      variant_group: Joi.any(),

      item_type: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow("").required(),

      variants: Joi.any(),

      slug: Joi.string().allow("").required(),

      attributes: Joi.any().required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      template_tag: Joi.string().allow("").required(),

      sizes: Joi.array().items(Joi.any()).required(),

      short_description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      custom_order: CatalogModel.CustomOrder(),

      size_guide: Joi.string().allow(""),

      change_request_id: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      is_image_less_product: Joi.boolean(),

      item_code: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      net_quantity: CatalogModel.NetQuantity(),

      no_of_boxes: Joi.number(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      country_of_origin: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      is_dependent: Joi.boolean(),

      product_publish: CatalogModel.ProductPublish(),

      multi_size: Joi.boolean(),

      is_set: Joi.boolean(),

      uid: Joi.number().allow(null),

      teaser_tag: CatalogModel.TeaserTag(),

      brand_uid: Joi.number().required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      variant_media: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      requester: Joi.string().allow(""),

      description: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),
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

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
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
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      variant_group: Joi.any(),

      stage: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      category: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      variants: Joi.any(),

      slug: Joi.string().allow(""),

      attributes: Joi.any(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      modified_on: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      template_tag: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      short_description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_physical: Joi.boolean(),

      custom_order: Joi.any(),

      size_guide: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      is_image_less_product: Joi.boolean(),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantityResponse(),

      moq: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      no_of_boxes: Joi.number(),

      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      product_publish: CatalogModel.ProductPublished(),

      is_dependent: Joi.boolean(),

      multi_size: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      is_set: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      trader: Joi.array().items(Joi.any()),

      teaser_tag: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      variant_media: Joi.any(),

      return_config: CatalogModel.ReturnConfigResponse(),

      hsn_code: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),

      brand: CatalogModel.Brand(),
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
      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

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
      created_on: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      suggestion: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      description: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      variant: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      schema: CatalogModel.AttributeMaster().required(),

      created_by: Joi.any(),

      synonyms: Joi.any(),

      details: CatalogModel.AttributeMasterDetails().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

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
      data: CatalogModel.Product(),
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
      item_height: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_length: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.any().required(),
    });
  }

  static ListALLSizes() {
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
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserInfo1(),

      total: Joi.number(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),
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

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),
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

      data: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),
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
      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserCommon(),

      total: Joi.number(),

      retry: Joi.number(),

      cancelled: Joi.number(),

      id: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),
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
      data: CatalogModel.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),

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

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_height: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      quantity: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      item_width: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      item_length: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price: Joi.number(),

      price_effective: Joi.number().required(),

      size: Joi.any().required(),
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
      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      identifiers: Joi.any(),

      item_id: Joi.number(),

      store: Joi.any(),

      currency: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price_transfer: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price: Joi.number(),

      price_effective: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
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

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),

      tp_notes: Joi.any(),
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
      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      fynd_item_code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      raw_meta: Joi.any(),

      fynd_article_code: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      brand: CatalogModel.BrandMeta().required(),

      added_on_store: Joi.string().allow(""),

      _custom_json: Joi.any(),

      set: CatalogModel.InventorySet(),

      dimension: CatalogModel.DimensionResponse().required(),

      size: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      item_id: Joi.number().required(),

      weight: CatalogModel.WeightResponse().required(),

      store: CatalogModel.StoreMeta().required(),

      fynd_meta: Joi.any(),

      company: CatalogModel.CompanyMeta().required(),

      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      is_set: Joi.boolean(),

      uid: Joi.string().allow("").required(),

      total_quantity: Joi.number().required(),

      price: CatalogModel.PriceMeta().required(),

      track_inventory: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      return_config: CatalogModel.ReturnConfig1(),

      quantities: CatalogModel.Quantities(),

      modified_by: CatalogModel.UserSerializer(),

      identifier: Joi.any().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      width: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default: Joi.boolean(),
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
      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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

  static PriceArticle() {
    return Joi.object({
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      marked: Joi.number(),

      tp_notes: Joi.any(),
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

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static GetInventories() {
    return Joi.object({
      stage: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta1(),

      date_meta: CatalogModel.DateMeta(),

      dimension: CatalogModel.DimensionResponse1(),

      inventory_updated_on: Joi.string().allow(""),

      size: Joi.string().allow(""),

      platforms: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      item_id: Joi.number(),

      weight: CatalogModel.WeightResponse1(),

      store: CatalogModel.ArticleStoreResponse(),

      tax_identifier: Joi.any(),

      company: CatalogModel.CompanyMeta1(),

      country_of_origin: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      is_set: Joi.boolean(),

      uid: Joi.string().allow(""),

      total_quantity: Joi.number(),

      price: CatalogModel.PriceArticle(),

      track_inventory: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.QuantitiesArticle(),

      return_config: CatalogModel.ReturnConfig2(),

      modified_by: CatalogModel.UserSerializer(),

      identifier: Joi.any(),
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

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      cancelled: Joi.number(),

      id: Joi.string().allow(""),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),
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
      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      store_code: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      price_effective: Joi.number(),

      price_marked: Joi.number(),
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
      store: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),
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

      trace_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number().required(),

      total_quantity: Joi.number().allow(null),

      price_effective: Joi.number(),

      price_marked: Joi.number(),
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

      company_id: Joi.number().required(),

      threshold1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_mrp: Joi.boolean().required(),

      uid: Joi.number(),

      tax2: Joi.number(),

      tax1: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      threshold2: Joi.number(),

      company_id: Joi.number(),

      threshold1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      tax2: Joi.number(),

      tax1: Joi.number(),

      modified_on: Joi.string().allow(""),

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

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      size: Joi.number(),
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

      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      hsn_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      description: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),

      page: CatalogModel.PageResponse(),
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

      size: Joi.string().allow("").required(),

      ignored_stores: Joi.array().items(Joi.number()),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      meta: Joi.any(),

      quantity: Joi.number(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      app_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),
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
      meta: Joi.any(),

      quantity: Joi.number().required(),

      status: Joi.boolean().required(),

      item_id: Joi.number().required(),

      company_id: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      group_id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      store_pincode: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      price_marked: Joi.number(),

      store_id: Joi.number(),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      size: Joi.string().allow("").required(),

      index: Joi.number(),
    });
  }

  static BrandItem() {
    return Joi.object({
      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),
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

      uid: Joi.number(),

      name: Joi.string().allow(""),

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

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      rating_count: Joi.number(),

      promo_meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      teaser_tag: Joi.any(),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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
      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      created_by: CatalogModel.UserSerializer1(),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      store_type: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      integration_type: CatalogModel.LocationIntegrationType(),

      documents: Joi.array().items(CatalogModel.Document()),

      company: CatalogModel.GetCompanySerializer(),

      uid: Joi.number(),

      verified_by: CatalogModel.UserSerializer2(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer2(),

      address: CatalogModel.GetAddressSerializer().required(),

      modified_by: CatalogModel.UserSerializer2(),

      modified_on: Joi.string().allow(""),
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

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

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
