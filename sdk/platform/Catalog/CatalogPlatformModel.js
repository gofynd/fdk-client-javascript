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

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),
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

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      result: Joi.any(),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
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
      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),
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
      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),
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

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      params: Joi.any(),

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
      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      id: Joi.string().allow(""),
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
      max_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      price: Joi.any(),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      attributes: Joi.any(),

      quantity: Joi.number(),

      name: Joi.string().allow(""),
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

  static GetProducts() {
    return Joi.object({
      price: CatalogModel.Price(),

      product_details: CatalogModel.LimitedProductData(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),
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
      tag: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      guide: CatalogModel.Guide(),

      id: Joi.string().allow(""),

      image: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

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
      page: Joi.any(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      created_by: Joi.any(),

      guide: Joi.any(),

      subtitle: Joi.string().allow(""),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_id: Joi.number(),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.any().required(),

      value: Joi.any().required(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
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
      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

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

      minimum: Joi.number(),

      maximum: Joi.number(),
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
      moq: CatalogModel.MOQData(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

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
      key: Joi.string().allow(""),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

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
      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      next: Joi.number().required(),

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

      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

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

      filter_types: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

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
      variant: Joi.any(),

      detail: Joi.any(),

      similar: Joi.any(),

      compare: Joi.any(),
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
      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      value: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

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
      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

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

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

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
      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

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

  static ConfigurationProduct() {
    return Joi.object({
      variant: CatalogModel.ConfigurationProductVariant().required(),

      similar: CatalogModel.ConfigurationProductSimilar().required(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      created_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      created_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

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
      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      id: Joi.string().allow(""),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.EntityConfiguration(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display_format: Joi.string().allow(""),

      value: Joi.any().required(),

      max: Joi.number(),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selected_min: Joi.number(),

      selected_max: Joi.number(),

      query_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),
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
      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
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
      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      cron: Joi.string().allow("").allow(null),
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

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),

      slug: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      app_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      description: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner().required(),

      is_visible: Joi.boolean(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage().required(),

      published: Joi.boolean(),

      type: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),
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
      portrait: CatalogModel.BannerImage(),

      landscape: CatalogModel.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      sort_on: Joi.string().allow(""),

      cron: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.BannerImage(),

      type: Joi.string().allow(""),

      badge: Joi.any(),
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
      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      slug: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      action: CatalogModel.Action(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.string().allow(""),

      cron: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      type: Joi.string().allow(""),

      badge: Joi.any(),
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
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.SeoDetail(),

      slug: Joi.string().allow(""),

      _locale_language: Joi.any(),

      priority: Joi.number(),

      modified_by: CatalogModel.UserInfo(),

      allow_facets: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      is_visible: Joi.boolean(),

      _custom_json: Joi.any(),

      sort_on: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage(),

      published: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),
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
      items_not_updated: Joi.array().items(Joi.number()),

      message: Joi.string().allow(""),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),
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
      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media1()),

      discount: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      image_nature: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      item_type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      uid: Joi.number(),

      rating: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      brand: CatalogModel.ProductBrand(),
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

  static CatalogInsightBrand() {
    return Joi.object({
      available_articles: Joi.number(),

      total_articles: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      available_sizes: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),

      count: Joi.number(),
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

      enabled: Joi.boolean(),

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      modified_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      created_by: Joi.any(),

      company_id: Joi.number().required(),

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
      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      total_article: Joi.number(),

      brand_id: Joi.number(),

      company_id: Joi.number(),
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

      brand: Joi.number(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      timing: Joi.any(),

      address: Joi.any(),

      uid: Joi.number(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      manager: Joi.any(),

      name: Joi.string().allow(""),

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
      priority: Joi.number(),

      indexing: Joi.boolean().required(),

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
      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      mandatory: Joi.boolean(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      name: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),
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
      status: Joi.number(),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      is_active: Joi.boolean(),

      platforms: Joi.any(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      name: Joi.string().allow("").required(),
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

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      item_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      search: Joi.string().allow(""),

      uid: Joi.number(),

      page_no: Joi.number(),

      slug: Joi.string().allow(""),

      page_size: Joi.number(),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),
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
      status: Joi.number(),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      name: Joi.any().required(),

      created_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      priority_order: Joi.number().required(),

      slug: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      tag: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),
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
      tag: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      item_code: Joi.any(),

      product_publish: Joi.any(),

      tags: Joi.any(),

      size_guide: Joi.any(),

      no_of_boxes: Joi.any(),

      slug: Joi.any(),

      product_group_tag: Joi.any(),

      return_config: Joi.any(),

      teaser_tag: Joi.any(),

      category_slug: Joi.any(),

      media: Joi.any(),

      trader: Joi.any(),

      is_dependent: Joi.any(),

      trader_type: Joi.any(),

      currency: Joi.any(),

      name: Joi.any(),

      short_description: Joi.any(),

      country_of_origin: Joi.any(),

      command: Joi.any(),

      is_active: Joi.any(),

      hsn_code: Joi.any(),

      item_type: Joi.any(),

      description: Joi.any(),

      brand_uid: Joi.any(),

      custom_order: Joi.any(),

      variants: Joi.any(),

      highlights: Joi.any(),

      multi_size: Joi.any(),

      sizes: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      definitions: Joi.any(),

      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),
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
      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      url: Joi.string().allow(""),

      seller_id: Joi.number(),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

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

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      l2: Joi.number().required(),

      department: Joi.number().required(),
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
      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      is_active: Joi.boolean().required(),

      departments: Joi.array().items(Joi.number()).required(),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),
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
      created_on: Joi.string().allow(""),

      priority: Joi.number(),

      modified_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      is_active: Joi.boolean().required(),

      departments: Joi.array().items(Joi.number()).required(),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
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
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),

      type: Joi.string().allow(""),
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

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      item_code: Joi.string().allow("").required(),

      product_publish: CatalogModel.ProductPublish(),

      tags: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      is_set: Joi.boolean(),

      template_tag: Joi.string().allow("").required(),

      no_of_boxes: Joi.number(),

      slug: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      teaser_tag: CatalogModel.TeaserTag(),

      category_slug: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      media: Joi.array().items(CatalogModel.Media1()),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      requester: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      attributes: Joi.any().required(),

      currency: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      variant_media: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      change_request_id: Joi.any(),

      is_active: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      _custom_json: Joi.any(),

      uid: Joi.number().allow(null),

      sizes: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

      brand_uid: Joi.number().required(),

      variant_group: Joi.any(),

      variants: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      custom_order: CatalogModel.CustomOrder(),

      multi_size: Joi.boolean(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      is_image_less_product: Joi.boolean(),
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

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),
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
      logo: CatalogModel.Logo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      size_guide: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      all_company_ids: Joi.array().items(Joi.number()),

      template_tag: Joi.string().allow(""),

      created_by: Joi.any(),

      no_of_boxes: Joi.number(),

      slug: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      pending: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      departments: Joi.array().items(Joi.number()),

      return_config: CatalogModel.ReturnConfigResponse(),

      category_slug: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      trader: Joi.array().items(Joi.any()),

      primary_color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      category_uid: Joi.number(),

      name: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      variant_media: Joi.any(),

      is_active: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      moq: Joi.any(),

      stage: Joi.string().allow(""),

      color: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      company_id: Joi.number(),

      is_physical: Joi.boolean(),

      brand_uid: Joi.number(),

      custom_order: Joi.any(),

      variants: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      variant_group: Joi.any(),

      created_on: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      tax_identifier: Joi.any(),

      category: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      sizes: Joi.array().items(Joi.any()),

      brand: CatalogModel.Brand(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      id: Joi.string().allow(""),
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
      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      category_uid: Joi.number(),

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

      details: CatalogModel.AttributeMasterDetails().required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      suggestion: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      variant: Joi.boolean(),

      unit: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      is_nested: Joi.boolean(),

      synonyms: Joi.any(),

      schema: CatalogModel.AttributeMaster().required(),
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
      item_weight: Joi.number().required(),

      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_height: Joi.number().required(),

      item_length: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

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

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      cancelled: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      failed_records: Joi.array().items(Joi.any()),

      company_id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      file_path: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),
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
      url: Joi.string().allow("").required(),

      user: Joi.any().required(),

      company_id: Joi.number(),
    });
  }

  static UserCommon() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      failed: Joi.number(),

      retry: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

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
      item_id: Joi.number(),

      size: Joi.string().allow(""),

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

      item_weight: Joi.number().allow(null),

      quantity: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      item_width: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      is_set: Joi.boolean(),

      price_transfer: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      item_length: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      size: Joi.any().required(),
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

      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      identifiers: Joi.any(),

      item_id: Joi.number(),

      price_transfer: Joi.number(),

      store: Joi.any(),

      price_effective: Joi.number(),

      sellable_quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      quantity: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
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
      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),
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
      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      set: CatalogModel.InventorySet(),

      tags: Joi.array().items(Joi.string().allow("")),

      company: CatalogModel.CompanyMeta().required(),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      identifier: Joi.any().required(),

      expiration_date: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      weight: CatalogModel.WeightResponse().required(),

      modified_by: CatalogModel.UserSerializer(),

      item_id: Joi.number().required(),

      return_config: CatalogModel.ReturnConfig1(),

      fynd_article_code: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      raw_meta: Joi.any(),

      store: CatalogModel.StoreMeta().required(),

      meta: Joi.any().allow(null),

      total_quantity: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      track_inventory: Joi.boolean(),

      fragile: Joi.boolean().required(),

      seller_identifier: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      trace_id: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      fynd_meta: Joi.any(),

      price: CatalogModel.PriceMeta().required(),

      brand: CatalogModel.BrandMeta().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
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

      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
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

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

      name: Joi.string().allow(""),
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

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      company: CatalogModel.CompanyMeta1(),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      identifier: Joi.any(),

      expiration_date: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      weight: CatalogModel.WeightResponse1(),

      modified_by: CatalogModel.UserSerializer(),

      item_id: Joi.number(),

      return_config: CatalogModel.ReturnConfig2(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      store: CatalogModel.ArticleStoreResponse(),

      total_quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      track_inventory: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      size: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      trace_id: Joi.string().allow(""),

      platforms: Joi.any(),

      date_meta: CatalogModel.DateMeta(),

      price: CatalogModel.PriceArticle(),

      brand: CatalogModel.BrandMeta1(),

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
      created_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      modified_by: Joi.any(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      created_by: Joi.any(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

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
      total_quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      quantity: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),

      company_id: Joi.number().required(),
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
      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      url: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),
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
      data: Joi.array().items(CatalogModel.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      total_quantity: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      store_id: Joi.number().required(),
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
      hs2_code: Joi.string().allow("").allow(null).required(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      tax1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      tax_on_mrp: Joi.boolean().required(),

      threshold2: Joi.number(),

      tax2: Joi.number(),

      threshold1: Joi.number().required(),

      uid: Joi.number(),

      company_id: Joi.number().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      hs2_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      tax1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),

      tax2: Joi.number(),

      threshold1: Joi.number(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      has_previous: Joi.boolean(),
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
      cess: Joi.number(),

      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      created_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      page: CatalogModel.PageResponse(),

      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),
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
      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),

      meta: Joi.any(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number(),

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
      strategy_wise_listing: Joi.array().items(Joi.any()),

      item_id: Joi.number().required(),

      index: Joi.number(),

      store_pincode: Joi.number(),

      status: Joi.boolean().required(),

      price_effective: Joi.number(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      price_marked: Joi.number(),

      s_city: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      uid: Joi.string().allow(""),

      company_id: Joi.number(),

      store_id: Joi.number(),

      _id: Joi.string().allow(""),

      quantity: Joi.number().required(),

      meta: Joi.any(),
    });
  }

  static BrandItem() {
    return Joi.object({
      logo: CatalogModel.Media(),

      action: CatalogModel.Action(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),
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
      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media1()),

      teaser_tag: Joi.any(),

      image_nature: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      item_type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      uid: Joi.number(),

      rating: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      address_type: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      verified_by: CatalogModel.UserSerializer1(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      name: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
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

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
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

      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
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
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
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

      company: CatalogModel.GetCompanySerializer(),

      created_by: CatalogModel.UserSerializer2(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      modified_by: CatalogModel.UserSerializer2(),

      display_name: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserSerializer2(),

      address: CatalogModel.GetAddressSerializer().required(),

      warnings: Joi.any(),

      code: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      stage: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      manager: CatalogModel.LocationManagerSerializer(),

      created_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      integration_type: CatalogModel.LocationIntegrationType(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
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
      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.number().required(),

      name: Joi.string().allow(""),
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
