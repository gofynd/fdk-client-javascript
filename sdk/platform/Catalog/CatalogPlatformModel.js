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

      words: Joi.array().items(Joi.string().allow("")),

      result: Joi.any(),

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
      meta: Joi.any(),

      code: Joi.string().allow(""),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      result: CatalogModel.SearchKeywordResult().required(),

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
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

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

      query: Joi.any(),

      params: Joi.any(),

      url: Joi.string().allow(""),
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

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),
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

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      min_quantity: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),
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

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      identifier: Joi.any(),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      quantity: Joi.number(),

      item_code: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      price: CatalogModel.Price(),

      product_uid: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_select: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      choice: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),
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
      subtitle: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      brand_id: Joi.number(),

      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      image: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      id: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

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
      page: Joi.any(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      guide: Joi.any(),

      id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),
    });
  }

  static MetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static SEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static MOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),

      seo: CatalogModel.SEO(),

      moq: CatalogModel.MOQ(),
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

      name: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      unit: Joi.string().allow(""),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),
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

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

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

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      display: Joi.string().allow(""),
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

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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
      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      logo: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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

  static ConfigurationBucketPoints() {
    return Joi.object({
      end: Joi.number(),

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),

      map: Joi.any(),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      priority: Joi.number().required(),
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

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),
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

  static AppConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_id: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      value: Joi.any().required(),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      count: Joi.number(),

      selected_max: Joi.number(),

      max: Joi.number(),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      min: Joi.number(),

      display: Joi.string().allow("").required(),
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

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
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
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      seo: CatalogModel.SeoDetail(),

      is_visible: Joi.boolean(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      meta: Joi.any(),

      created_by: CatalogModel.UserInfo(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner().required(),

      _locale_language: Joi.any(),

      type: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage().required(),

      allow_facets: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      priority: Joi.number(),
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
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.BannerImage(),

      allow_facets: Joi.boolean(),

      priority: Joi.number(),
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
      type: Joi.string().allow(""),

      meta: Joi.any(),

      url: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      name: Joi.string().allow(""),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      priority: Joi.number(),
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
      name: Joi.string().allow(""),

      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      allow_facets: Joi.boolean(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      priority: Joi.number(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      name: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      seo: CatalogModel.SeoDetail(),

      is_visible: Joi.boolean(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      meta: Joi.any(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      _locale_language: Joi.any(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage(),

      allow_facets: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      priority: Joi.number(),
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

  static Price1() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

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

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      attributes: Joi.any(),

      sellable: Joi.boolean(),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      item_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      product_online_date: Joi.string().allow(""),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      discount: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      teaser_tag: Joi.any(),
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

  static CatalogInsightItem() {
    return Joi.object({
      sellable_count: Joi.number(),

      count: Joi.number(),

      out_of_stock_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      available_sizes: Joi.number(),

      available_articles: Joi.number(),

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
      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      created_by: Joi.any(),

      store_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      opt_level: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      modified_by: Joi.any(),

      brand_ids: Joi.array().items(Joi.number()).required(),

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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      company_id: Joi.number(),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      timing: Joi.any(),

      address: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      manager: Joi.any(),

      store_code: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),
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
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      range: CatalogModel.AttributeSchemaRange(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),

      multi: Joi.boolean(),
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

  static GenderDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      schema: CatalogModel.AttributeMaster(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      enabled_for_end_consumer: Joi.boolean(),

      id: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      description: Joi.string().allow(""),
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

      code: Joi.string().allow(""),

      errors: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      platforms: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.number(),
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

      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      search: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      page_no: Joi.number(),

      priority_order: Joi.number(),

      page_size: Joi.number(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),
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

      code: Joi.string().allow(""),

      errors: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      name: Joi.any().required(),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      slug: Joi.any(),

      created_on: Joi.string().allow("").required(),

      _cls: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      created_by: Joi.any(),

      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductTemplate(),
    });
  }

  static Properties() {
    return Joi.object({
      name: Joi.any(),

      slug: Joi.any(),

      multi_size: Joi.any(),

      no_of_boxes: Joi.any(),

      custom_order: Joi.any(),

      is_active: Joi.any(),

      command: Joi.any(),

      hsn_code: Joi.any(),

      description: Joi.any(),

      trader_type: Joi.any(),

      trader: Joi.any(),

      brand_uid: Joi.any(),

      item_code: Joi.any(),

      size_guide: Joi.any(),

      item_type: Joi.any(),

      return_config: Joi.any(),

      short_description: Joi.any(),

      product_group_tag: Joi.any(),

      is_dependent: Joi.any(),

      country_of_origin: Joi.any(),

      media: Joi.any(),

      highlights: Joi.any(),

      category_slug: Joi.any(),

      variants: Joi.any(),

      sizes: Joi.any(),

      currency: Joi.any(),

      tags: Joi.any(),

      product_publish: Joi.any(),

      teaser_tag: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),

      definitions: Joi.any(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),
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
      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),
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

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      created_by: CatalogModel.VerifiedBy(),

      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      completed_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),
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

  static Media2() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
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
      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

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

  static CategoryRequestBody() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
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
      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      media: CatalogModel.Media2(),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      level: Joi.number().required(),

      id: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      is_active: Joi.boolean().required(),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
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

  static ProductCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      no_of_boxes: Joi.number(),

      is_image_less_product: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      template_tag: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      variant_media: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      _custom_json: Joi.any(),

      change_request_id: Joi.any(),

      brand_uid: Joi.number().required(),

      item_code: Joi.any().required(),

      size_guide: Joi.string().allow(""),

      is_set: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      short_description: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      requester: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      action: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      country_of_origin: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      media: Joi.array().items(CatalogModel.Media1()),

      category_slug: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      net_quantity: CatalogModel.NetQuantity(),

      variants: Joi.any(),

      currency: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      product_publish: CatalogModel.ProductPublish(),

      teaser_tag: CatalogModel.TeaserTag(),
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
      name: Joi.string().allow(""),

      logo: CatalogModel.Logo(),

      uid: Joi.number(),
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
      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      slug: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      custom_order: Joi.any(),

      is_expirable: Joi.boolean(),

      category_uid: Joi.number(),

      is_active: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      is_set: Joi.boolean(),

      item_type: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      short_description: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      primary_color: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      is_dependent: Joi.boolean(),

      id: Joi.string().allow(""),

      color: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      media: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      variants: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      currency: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static AttributeMasterSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      slug: Joi.string().allow("").required(),

      synonyms: Joi.any(),

      enabled_for_end_consumer: Joi.boolean(),

      variant: Joi.boolean(),

      description: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      schema: CatalogModel.AttributeMaster().required(),

      created_on: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      modified_by: Joi.any(),
    });
  }

  static ProductAttributesResponse() {
    return Joi.object({
      items: Joi.array()
        .items(CatalogModel.AttributeMasterSerializer())
        .required(),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      cancelled: Joi.number(),

      tracking_url: Joi.string().allow(""),

      total: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      failed: Joi.number(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      file_path: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      company_id: Joi.number().required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),
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
      created_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      stage: Joi.string().allow(""),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserDetail1(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),
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
      batch_id: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),
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
      company_id: Joi.number(),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      created_by: CatalogModel.UserCommon(),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      retry: Joi.number(),

      tracking_url: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      total: Joi.number(),

      modified_on: Joi.string().allow(""),
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

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.string().allow("").required(),

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
      quantity: Joi.number(),

      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      price: Joi.number(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price_effective: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_weight: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      quantity: Joi.number().required(),

      item_height: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_width: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      is_set: Joi.boolean(),
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
      size: Joi.string().allow(""),

      price: Joi.number(),

      identifiers: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      price_effective: Joi.number(),

      sellable_quantity: Joi.number(),

      currency: Joi.string().allow(""),

      price_transfer: Joi.number(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      item_id: Joi.number(),

      store: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),
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

      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
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

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      identifier: Joi.any().required(),

      fynd_item_code: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      _custom_json: Joi.any(),

      fragile: Joi.boolean().required(),

      meta: Joi.any().allow(null),

      created_by: CatalogModel.UserSerializer(),

      price: CatalogModel.PriceMeta().required(),

      stage: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),

      modified_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.Quantities(),

      weight: CatalogModel.WeightResponse().required(),

      track_inventory: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      is_set: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig1(),

      added_on_store: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta().required(),

      tax_identifier: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      country_of_origin: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      size: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().required(),

      item_id: Joi.number().required(),

      store: CatalogModel.StoreMeta().required(),

      fynd_meta: Joi.any(),

      fynd_article_code: Joi.string().allow("").required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static BulkInventoryGetItems() {
    return Joi.object({
      cancelled: Joi.number(),

      created_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),
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
      price: Joi.number(),

      price_effective: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      seller_identifier: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      price_marked: Joi.number(),
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

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

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
      multivalues: Joi.boolean(),

      data: Joi.array().items(CatalogModel.FilerList()),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      price_effective: Joi.number(),

      store_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

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
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax_on_esp: Joi.boolean(),

      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      uid: Joi.number(),

      threshold2: Joi.number(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax_on_esp: Joi.boolean(),

      tax1: Joi.number(),

      threshold1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      threshold2: Joi.number(),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static PageResponse() {
    return Joi.object({
      size: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),

      item_total: Joi.number(),
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
      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),

      threshold: Joi.number().required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_by: Joi.any(),

      type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

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
      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media(),

      uid: Joi.number(),
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

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

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

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

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
      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      item_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      product_online_date: Joi.string().allow(""),

      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      teaser_tag: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),
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
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
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
      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),
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
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserSerializer1(),

      display_name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      manager: CatalogModel.LocationManagerSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      created_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      address: CatalogModel.GetAddressSerializer().required(),

      phone_number: Joi.string().allow("").required(),

      integration_type: CatalogModel.LocationIntegrationType(),

      code: Joi.string().allow("").required(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      modified_by: CatalogModel.UserSerializer1(),
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
