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
      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      is_active: Joi.boolean(),

      result: Joi.any(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),
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

  static Media() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

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
      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

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
      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      same_store_assignment: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      meta: Joi.any(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      same_store_assignment: Joi.boolean(),
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
      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      meta: Joi.any(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      same_store_assignment: Joi.boolean(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      price: Joi.any(),

      item_code: Joi.string().allow(""),

      quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      short_description: Joi.string().allow(""),

      identifier: Joi.any(),
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

      max_quantity: Joi.number(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      price: CatalogModel.Price(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.GetProducts()),

      logo: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),
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
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      title: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      company_id: Joi.number(),
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

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      title: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      guide: Joi.any(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      company_id: Joi.number(),
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

      seo: CatalogModel.SEOData(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),
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
      alt_text: Joi.any(),

      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
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

      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      priority: Joi.number().required(),

      unit: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

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
      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      total_count: Joi.number().required(),

      next: Joi.number().required(),
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
      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
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
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MetaDataListingSortResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.MetaDataListingSortMetaResponse()),
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

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),
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

      size: CatalogModel.ProductSize(),

      priority: Joi.number().required(),

      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),
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
      map_values: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      display_name: Joi.string().allow(""),

      priority: Joi.number().required(),

      type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),
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

  static AppConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),
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
      sort: Joi.any(),

      filter: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),
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
      currency_symbol: Joi.string().allow(""),

      selected_min: Joi.number(),

      selected_max: Joi.number(),

      value: Joi.any().required(),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      count: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),
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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
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

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),
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
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

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
      landscape: CatalogModel.CollectionImage().required(),

      portrait: CatalogModel.CollectionImage().required(),
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
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      _schedule: CatalogModel.CollectionSchedule(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow("").required(),

      priority: Joi.number(),

      published: Joi.boolean(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      name: Joi.string().allow("").required(),

      banners: CatalogModel.CollectionBanner().required(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      created_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),

      allow_sort: Joi.boolean(),

      sort_on: Joi.string().allow(""),
    });
  }

  static BannerImage() {
    return Joi.object({
      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      allow_sort: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      cron: Joi.any(),
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

      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),
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

      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      _schedule: CatalogModel.CollectionSchedule(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      published: Joi.boolean(),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      name: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      seo: CatalogModel.SeoDetail(),

      allow_sort: Joi.boolean(),

      sort_on: Joi.string().allow(""),
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

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),
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
      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      attributes: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      name: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      sellable: Joi.boolean(),

      has_variant: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      rating: Joi.number(),
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

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      sellable_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_articles: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),
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
      platform: Joi.string().allow(""),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      platform: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      modified_by: Joi.any(),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
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

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      timing: Joi.any(),

      store_type: Joi.string().allow(""),

      manager: Joi.any(),

      display_name: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      address: Joi.any(),

      company_id: Joi.number(),

      documents: Joi.array().items(Joi.any()),

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
      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      range: CatalogModel.AttributeSchemaRange(),
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

  static AttributeMasterFilter() {
    return Joi.object({
      priority: Joi.number(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

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
      code: Joi.string().allow(""),

      status: Joi.number(),

      errors: Joi.any(),

      meta: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      platforms: Joi.any(),

      _custom_json: Joi.any(),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      priority_order: Joi.number().required(),

      logo: Joi.string().allow("").required(),

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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      search: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      page_size: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      priority_order: Joi.number(),

      logo: Joi.string().allow(""),

      page_no: Joi.number(),

      slug: Joi.string().allow(""),
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
      code: Joi.string().allow(""),

      status: Joi.number(),

      errors: Joi.any(),

      meta: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      _cls: Joi.any(),

      synonyms: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").required(),

      slug: Joi.any().required(),

      uid: Joi.number().required(),

      priority_order: Joi.number().required(),

      verified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      is_archived: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
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
      command: Joi.any(),

      trader_type: Joi.any(),

      is_active: Joi.any(),

      category_slug: Joi.any(),

      variants: Joi.any(),

      name: Joi.any(),

      currency: Joi.any(),

      brand_uid: Joi.any(),

      custom_order: Joi.any(),

      multi_size: Joi.any(),

      is_dependent: Joi.any(),

      hsn_code: Joi.any(),

      trader: Joi.any(),

      description: Joi.any(),

      item_code: Joi.any(),

      media: Joi.any(),

      tags: Joi.any(),

      item_type: Joi.any(),

      sizes: Joi.any(),

      no_of_boxes: Joi.any(),

      product_publish: Joi.any(),

      size_guide: Joi.any(),

      slug: Joi.any(),

      short_description: Joi.any(),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.any(),

      return_config: Joi.any(),

      country_of_origin: Joi.any(),

      highlights: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),
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
      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
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

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      template_tags: Joi.any(),
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
      data: Joi.array().items(Joi.any()),

      multivalue: Joi.boolean(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      l1: Joi.number().required(),

      department: Joi.number().required(),
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

  static Media2() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      slug: Joi.string().allow(""),

      level: Joi.number().required(),
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
      created_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),

      modified_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      level: Joi.number().required(),
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

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
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
      type: Joi.string().allow(""),

      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
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

      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      requester: Joi.string().allow(""),

      attributes: Joi.any(),

      is_active: Joi.boolean(),

      category_slug: Joi.string().allow("").required(),

      variants: Joi.any(),

      name: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      multi_size: Joi.boolean(),

      is_dependent: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      variant_group: Joi.any(),

      variant_media: Joi.any(),

      _custom_json: Joi.any(),

      item_code: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      template_tag: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      company_id: Joi.number().required(),

      uid: Joi.number().allow(null),

      country_of_origin: Joi.string().allow("").required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow("").required(),

      sizes: Joi.array().items(Joi.any()).required(),

      no_of_boxes: Joi.number(),

      bulk_job_id: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      product_publish: CatalogModel.ProductPublish(),

      size_guide: Joi.string().allow(""),

      change_request_id: Joi.any(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      teaser_tag: CatalogModel.TeaserTag(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfig().required(),

      brand_uid: Joi.number().required(),

      is_set: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),
    });
  }

  static Image() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Brand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Logo(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
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

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      primary_color: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      brand: CatalogModel.Brand(),

      attributes: Joi.any(),

      pending: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      modified_by: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      is_active: Joi.boolean(),

      category_slug: Joi.string().allow(""),

      variants: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      name: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      custom_order: Joi.any(),

      multi_size: Joi.boolean(),

      is_dependent: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      hsn_code: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      variant_group: Joi.any(),

      variant_media: Joi.any(),

      _custom_json: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      category_uid: Joi.number(),

      template_tag: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      company_id: Joi.number(),

      uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      no_of_boxes: Joi.number(),

      category: Joi.any(),

      image_nature: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      size_guide: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      moq: Joi.any(),

      teaser_tag: Joi.any(),

      created_on: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      color: Joi.string().allow(""),

      brand_uid: Joi.number(),

      is_set: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),
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
      name: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      brand_uid: Joi.number(),

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
      modified_by: Joi.any(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      synonyms: Joi.any(),

      variant: Joi.boolean(),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      suggestion: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      raw_key: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      schema: CatalogModel.AttributeMaster().required(),

      unit: Joi.string().allow(""),
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

      item_length: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.any().required(),

      item_height: Joi.number().required(),

      item_width: Joi.number().required(),

      item_weight: Joi.number().required(),

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

  static UserInfo1() {
    return Joi.object({
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      cancelled_records: Joi.array().items(Joi.any()),

      succeed: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      tracking_url: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      custom_template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      cancelled: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),
    });
  }

  static UserDetail1() {
    return Joi.object({
      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      total: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),
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

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),
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

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.any().required(),
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

  static InvSize() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      item_width: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      currency: Joi.string().allow("").required(),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      size: Joi.any().required(),

      price_transfer: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      price_effective: Joi.number().required(),

      quantity: Joi.number().required(),

      is_set: Joi.boolean(),

      item_height: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),
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
      item_id: Joi.number(),

      identifiers: Joi.any(),

      currency: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price: Joi.number(),

      store: Joi.any(),

      size: Joi.string().allow(""),

      price_transfer: Joi.number(),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
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
      height: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),

      transfer: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

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

  static QuantityBase() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static Quantities() {
    return Joi.object({
      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      fragile: Joi.boolean().required(),

      item_id: Joi.number().required(),

      brand: CatalogModel.BrandMeta().required(),

      added_on_store: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),

      size: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      modified_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta().required(),

      is_active: Joi.boolean(),

      identifier: Joi.any().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      price: CatalogModel.PriceMeta().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      trace_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      total_quantity: Joi.number().required(),

      uid: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      fynd_meta: Joi.any(),

      track_inventory: Joi.boolean(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      meta: Joi.any().allow(null),

      weight: CatalogModel.WeightResponse().required(),

      expiration_date: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      return_config: CatalogModel.ReturnConfig1(),

      seller_identifier: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      fynd_article_code: Joi.string().allow("").required(),

      quantities: CatalogModel.Quantities(),

      country_of_origin: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      raw_meta: Joi.any(),
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
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
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

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      tp_notes: Joi.any(),

      transfer: Joi.number(),

      marked: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
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

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
    });
  }

  static GetInventories() {
    return Joi.object({
      item_id: Joi.number(),

      brand: CatalogModel.BrandMeta1(),

      store: CatalogModel.ArticleStoreResponse(),

      size: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta1(),

      platforms: Joi.any(),

      identifier: Joi.any(),

      dimension: CatalogModel.DimensionResponse1(),

      price: CatalogModel.PriceArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number(),

      date_meta: CatalogModel.DateMeta(),

      uid: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      track_inventory: Joi.boolean(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      inventory_updated_on: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      expiration_date: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      seller_identifier: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      country_of_origin: Joi.string().allow(""),

      is_set: Joi.boolean(),
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

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      created_by: Joi.any(),

      failed: Joi.number(),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: Joi.any(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),
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
      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      total_quantity: Joi.number(),

      store_code: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      user: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      store: Joi.array().items(Joi.number()),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),
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
      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      total_quantity: Joi.number().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

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
      is_active: Joi.boolean(),

      threshold1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_mrp: Joi.boolean().required(),

      tax2: Joi.number(),

      threshold2: Joi.number(),

      company_id: Joi.number().required(),

      uid: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      id: Joi.string().allow(""),

      tax2: Joi.number(),

      threshold2: Joi.number(),

      company_id: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number(),
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
      threshold: Joi.number().required(),

      cess: Joi.number(),

      rate: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      created_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      description: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      has_next: Joi.boolean(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),
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

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),
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
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      priority_order: Joi.number(),

      logo: CatalogModel.Media(),
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
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
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
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      attributes: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      name: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      has_variant: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      rating: Joi.number(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),
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

      article_assignment: CatalogModel.ArticleAssignment(),

      meta: Joi.any(),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow("").required(),

      company_id: Joi.number(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

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
      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      item_id: Joi.number().required(),

      index: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      status: Joi.boolean().required(),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      store_id: Joi.number(),

      store_pincode: Joi.number(),

      meta: Joi.any(),

      price_effective: Joi.number(),

      _id: Joi.string().allow(""),

      quantity: Joi.number().required(),

      s_city: Joi.string().allow(""),

      company_id: Joi.number(),

      uid: Joi.string().allow(""),
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
      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      business_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      verified_by: CatalogModel.UserSerializer2(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
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

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      phone_number: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      modified_by: CatalogModel.UserSerializer1(),

      warnings: Joi.any(),

      company: CatalogModel.GetCompanySerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      verified_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      manager: CatalogModel.LocationManagerSerializer(),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      integration_type: CatalogModel.LocationIntegrationType(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

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
      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      logo: Joi.string().allow(""),
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
