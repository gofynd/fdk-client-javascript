const Joi = require("joi");

class CatalogModel {
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),
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

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      result: Joi.any(),

      is_active: Joi.boolean(),
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

  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: Joi.any(),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      display: Joi.string().allow(""),

      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
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
      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      modified_by: Joi.any(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      modified_by: Joi.any(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

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
      modified_by: Joi.any(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
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
      min_effective: Joi.number(),

      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      quantity: Joi.number(),

      price: Joi.any(),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      price: CatalogModel.Price(),

      max_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      choice: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      image: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      title: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      brand_id: Joi.number(),

      name: Joi.string().allow("").required(),

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
      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: Joi.any(),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      id: Joi.string().allow(""),
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
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      alt_text: Joi.any(),
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
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static MOQData() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEOData(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      alt_text: Joi.any(),
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
      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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

      total_count: Joi.number().required(),

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
      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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

      variant: Joi.any(),

      similar: Joi.any(),

      detail: Joi.any(),
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
      display: Joi.string().allow(""),

      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      value_config: CatalogModel.ConfigurationListingFilterValue(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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

  static ConfigurationProductConfig() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize(),

      is_active: Joi.boolean().required(),
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

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      id: Joi.string().allow(""),
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
      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      value: Joi.any().required(),

      currency_code: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      count: Joi.number(),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),
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
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
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
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      published: Joi.boolean(),

      created_by: CatalogModel.UserInfo(),

      banners: CatalogModel.CollectionBanner().required(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      sort_on: Joi.string().allow(""),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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

      badge: Joi.any(),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.BannerImage(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      url: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      published: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      sort_on: Joi.string().allow(""),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),
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
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      logo: CatalogModel.Media1(),
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
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      similars: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      brand: CatalogModel.ProductBrand(),

      medias: Joi.array().items(CatalogModel.Media1()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      name: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      sellable: Joi.boolean(),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      rating: Joi.number(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      item_code: Joi.string().allow(""),

      attributes: Joi.any(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),

      total_articles: Joi.number(),

      name: Joi.string().allow(""),

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
      company_id: Joi.number(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_by: Joi.any(),

      company_id: Joi.number().required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),
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

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
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
      timing: Joi.any(),

      company_id: Joi.number(),

      manager: Joi.any(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      additional_contacts: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
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

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      range: CatalogModel.AttributeSchemaRange(),

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),
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

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),

      enabled_for_end_consumer: Joi.boolean(),

      meta: CatalogModel.AttributeMasterMeta(),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      errors: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      priority_order: Joi.number().required(),

      platforms: Joi.any(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

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
      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      modified_by: CatalogModel.UserSerializer(),

      priority_order: Joi.number(),

      uid: Joi.number(),

      page_no: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      search: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      page_size: Joi.number(),

      is_active: Joi.boolean(),

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
      meta: Joi.any(),

      errors: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      modified_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      created_on: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      verified_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      name: Joi.any().required(),

      slug: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      is_physical: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

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
      attributes: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      multi_size: Joi.any(),

      sizes: Joi.any(),

      no_of_boxes: Joi.any(),

      tags: Joi.any(),

      variants: Joi.any(),

      name: Joi.any(),

      slug: Joi.any(),

      currency: Joi.any(),

      product_publish: Joi.any(),

      category_slug: Joi.any(),

      return_config: Joi.any(),

      media: Joi.any(),

      trader: Joi.any(),

      is_active: Joi.any(),

      custom_order: Joi.any(),

      product_group_tag: Joi.any(),

      description: Joi.any(),

      brand_uid: Joi.any(),

      hsn_code: Joi.any(),

      item_type: Joi.any(),

      highlights: Joi.any(),

      short_description: Joi.any(),

      country_of_origin: Joi.any(),

      teaser_tag: Joi.any(),

      trader_type: Joi.any(),

      item_code: Joi.any(),

      size_guide: Joi.any(),

      is_dependent: Joi.any(),

      command: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      templates: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      created_by: CatalogModel.VerifiedBy(),

      seller_id: Joi.number(),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

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
      catalog_id: Joi.number(),

      name: Joi.string().allow("").required(),
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

  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),

      l1: Joi.number().required(),

      l2: Joi.number().required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      media: CatalogModel.Media2(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

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
      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      uid: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      media: CatalogModel.Media2(),

      modified_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      id: Joi.string().allow(""),
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

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
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

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
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
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      multi_size: Joi.boolean(),

      company_id: Joi.number().required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      _custom_json: Joi.any(),

      no_of_boxes: Joi.number(),

      bulk_job_id: Joi.string().allow(""),

      change_request_id: Joi.any(),

      variants: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      currency: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      action: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      category_slug: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      media: Joi.array().items(CatalogModel.Media1()),

      net_quantity: CatalogModel.NetQuantity(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      is_active: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      departments: Joi.array().items(Joi.number()).required(),

      uid: Joi.number().allow(null),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      variant_media: Joi.any(),

      is_image_less_product: Joi.boolean(),

      description: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      item_type: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      template_tag: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow("").required(),

      teaser_tag: CatalogModel.TeaserTag(),

      item_code: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Logo(),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),
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

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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
      multi_size: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      tax_identifier: Joi.any(),

      company_id: Joi.number(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      brand: CatalogModel.Brand(),

      no_of_boxes: Joi.number(),

      all_company_ids: Joi.array().items(Joi.number()),

      verified_by: CatalogModel.VerifiedBy(),

      tags: Joi.array().items(Joi.string().allow("")),

      variants: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      currency: Joi.string().allow(""),

      variant_group: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      created_by: Joi.any(),

      category_uid: Joi.number(),

      category_slug: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      media: Joi.array().items(CatalogModel.Media1()),

      modified_on: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      trader: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      custom_order: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      uid: Joi.number(),

      is_physical: Joi.boolean(),

      created_on: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      variant_media: Joi.any(),

      is_image_less_product: Joi.boolean(),

      description: Joi.string().allow(""),

      brand_uid: Joi.number(),

      hsn_code: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      moq: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      template_tag: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      category: Joi.any(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      pending: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      size_guide: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),
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
      uid: Joi.number(),

      category_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

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
      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      schema: CatalogModel.AttributeMaster().required(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      modified_by: Joi.any(),

      variant: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      synonyms: Joi.any(),

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
      item_length: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_width: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_height: Joi.number().required(),

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

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      company_id: Joi.number().required(),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      failed_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
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

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      modified_on: Joi.string().allow(""),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
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
      data: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

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

      company_id: Joi.number(),

      url: Joi.string().allow("").required(),
    });
  }

  static UserCommon() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      modified_by: CatalogModel.UserCommon(),

      file_path: Joi.string().allow(""),

      company_id: Joi.number(),

      total: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      retry: Joi.number(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

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
      data: CatalogModel.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
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
      quantity: Joi.number(),

      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      price_transfer: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_width: Joi.number().allow(null),

      quantity: Joi.number().required(),

      price: Joi.number(),

      price_effective: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      set: CatalogModel.InventorySet(),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_height: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      is_set: Joi.boolean(),

      store_code: Joi.string().allow("").required(),
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
      sellable_quantity: Joi.number(),

      price_transfer: Joi.number(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      price: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      identifiers: Joi.any(),

      price_effective: Joi.number(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),

      store: Joi.any(),

      currency: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),
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

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      width: Joi.number().required(),
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

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      tax_identifier: Joi.any(),

      _custom_json: Joi.any(),

      price: CatalogModel.PriceMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      set: CatalogModel.InventorySet(),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      store: CatalogModel.StoreMeta().required(),

      raw_meta: Joi.any(),

      is_set: Joi.boolean(),

      quantities: CatalogModel.Quantities(),

      created_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta().required(),

      return_config: CatalogModel.ReturnConfig1(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      track_inventory: Joi.boolean(),

      size: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse().required(),

      uid: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      added_on_store: Joi.string().allow(""),

      fynd_item_code: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      identifier: Joi.any().required(),

      weight: CatalogModel.WeightResponse().required(),

      modified_by: CatalogModel.UserSerializer(),

      fynd_article_code: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      fynd_meta: Joi.any(),

      fragile: Joi.boolean().required(),

      total_quantity: Joi.number().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      transfer: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
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
      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),
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

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
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

  static GetInventories() {
    return Joi.object({
      tax_identifier: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      seller_identifier: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      store: CatalogModel.ArticleStoreResponse(),

      is_set: Joi.boolean(),

      quantities: CatalogModel.QuantitiesArticle(),

      created_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta1(),

      return_config: CatalogModel.ReturnConfig2(),

      track_inventory: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      size: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      weight: CatalogModel.WeightResponse1(),

      identifier: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      platforms: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      total_quantity: Joi.number(),
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
      modified_by: Joi.any(),

      company_id: Joi.number(),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

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
      item_dimensions_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      price: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      price_marked: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow("").required(),

      total_quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),

      user: Joi.any(),

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
      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      request_params: Joi.any(),

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
      data: Joi.array().items(CatalogModel.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().allow(null),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      payload: Joi.array().items(CatalogModel.InventoryPayload()),

      company_id: Joi.number().required(),

      meta: Joi.any(),
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
      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      uid: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_esp: Joi.boolean(),

      threshold1: Joi.number().required(),

      tax1: Joi.number().required(),

      is_active: Joi.boolean(),

      threshold2: Joi.number(),

      tax2: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      id: Joi.string().allow(""),

      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      threshold1: Joi.number(),

      tax1: Joi.number(),

      threshold2: Joi.number(),

      tax2: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      page: CatalogModel.PageResponse(),

      items: Joi.array().items(CatalogModel.HsnCodesObject()),
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

      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

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
      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

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
      priority_order: Joi.number(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      similars: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      medias: Joi.array().items(CatalogModel.Media1()),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      name: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      rating: Joi.number(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      item_code: Joi.string().allow(""),

      attributes: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
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
      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      latitude: Joi.number(),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      created_by: CatalogModel.UserSerializer1(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      company: CatalogModel.GetCompanySerializer(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      code: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      integration_type: CatalogModel.LocationIntegrationType(),
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
      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
}
module.exports = CatalogModel;
