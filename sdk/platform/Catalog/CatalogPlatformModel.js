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
      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      result: CatalogModel.SearchKeywordResult().required(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      result: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      meta: Joi.any(),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: Joi.any(),

      url: Joi.string().allow(""),

      params: Joi.any(),
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

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

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

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),
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

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      identifier: Joi.any(),

      price: Joi.any(),

      quantity: Joi.number(),

      uid: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),
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

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_details: CatalogModel.LimitedProductData(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      logo: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      unit: Joi.string().allow(""),

      values: Joi.array().items(Joi.any()),

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
      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
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
      created_by: Joi.any(),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: Joi.any(),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.any().required(),

      value: Joi.any().required(),
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
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_cod: Joi.boolean(),
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
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static MOQData() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

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
      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),
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

      has_next: Joi.boolean().required(),

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
      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

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

      compare: Joi.any(),

      detail: Joi.any(),

      variant: Joi.any(),
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
      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      sort: Joi.string().allow(""),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow(""),

      priority: Joi.number().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      key: Joi.string().allow("").required(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
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

  static ConfigurationProductConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      subtitle: Joi.string().allow(""),

      priority: Joi.number().required(),

      title: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
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

  static AppConfiguration() {
    return Joi.object({
      type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),
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

      id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      min: Joi.number(),

      count: Joi.number(),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

      selected_min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),
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

  static CollectionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
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

  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      banners: CatalogModel.CollectionBanner().required(),

      _locale_language: Joi.any(),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      created_by: CatalogModel.UserInfo(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow("").required(),

      published: Joi.boolean(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),
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
      portrait: CatalogModel.BannerImage(),

      landscape: CatalogModel.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.BannerImage(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media1(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      action: CatalogModel.Action(),

      uid: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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
      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media1(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      uid: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      banners: CatalogModel.CollectionBanner(),

      _locale_language: Joi.any(),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      name: Joi.string().allow(""),

      published: Joi.boolean(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),
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

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      logo: CatalogModel.Media1(),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      attributes: Joi.any(),

      sellable: Joi.boolean(),

      uid: Joi.number(),
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
      sellable_count: Joi.number(),

      count: Joi.number(),

      out_of_stock_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),

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
      brand_distribution: CatalogModel.CatalogInsightBrand(),

      data: CatalogModel.CrossSellingData(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      company_id: Joi.number(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      created_by: Joi.any(),

      company_id: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      created_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      platform: Joi.string().allow("").required(),
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

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

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
      store: Joi.number(),

      company: Joi.string().allow(""),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_id: Joi.number(),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      timing: Joi.any(),

      manager: Joi.any(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      additional_contacts: Joi.array().items(Joi.any()),

      address: Joi.any(),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),
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
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
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
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      schema: CatalogModel.AttributeMaster(),

      description: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      logo: Joi.string().allow(""),
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
      status: Joi.number(),

      meta: Joi.any(),

      errors: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      platforms: Joi.any(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),
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

      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_size: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      item_type: Joi.string().allow(""),

      priority_order: Joi.number(),

      modified_on: Joi.string().allow(""),

      search: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      uid: Joi.number(),

      logo: Joi.string().allow(""),
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

      meta: Joi.any(),

      errors: Joi.any(),

      message: Joi.string().allow(""),

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
      created_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      name: Joi.any().required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      _id: Joi.any(),

      _custom_json: Joi.any(),

      _cls: Joi.any(),

      priority_order: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_by: Joi.any(),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      attributes: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      logo: Joi.string().allow(""),
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
      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      logo: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      slug: Joi.any(),

      country_of_origin: Joi.any(),

      highlights: Joi.any(),

      multi_size: Joi.any(),

      media: Joi.any(),

      sizes: Joi.any(),

      currency: Joi.any(),

      return_config: Joi.any(),

      product_group_tag: Joi.any(),

      command: Joi.any(),

      item_type: Joi.any(),

      tags: Joi.any(),

      size_guide: Joi.any(),

      item_code: Joi.any(),

      category_slug: Joi.any(),

      brand_uid: Joi.any(),

      no_of_boxes: Joi.any(),

      variants: Joi.any(),

      custom_order: Joi.any(),

      description: Joi.any(),

      name: Joi.any(),

      trader: Joi.any(),

      teaser_tag: Joi.any(),

      hsn_code: Joi.any(),

      is_active: Joi.any(),

      product_publish: Joi.any(),

      is_dependent: Joi.any(),

      trader_type: Joi.any(),

      short_description: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      definitions: Joi.any(),
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

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      url: Joi.string().allow(""),

      template_tags: Joi.any(),

      data: CatalogModel.ProductDownloadItemsData(),
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

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      l2: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      priority: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

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
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      media: CatalogModel.Media2(),

      priority: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      level: Joi.number().required(),

      modified_by: Joi.any(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogModel.Category(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),
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
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
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
      slug: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      _custom_json: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      country_of_origin: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      multi_size: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      sizes: Joi.array().items(Joi.any()).required(),

      currency: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      uid: Joi.number().allow(null),

      variant_group: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      is_set: Joi.boolean(),

      requester: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      bulk_job_id: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      item_code: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      no_of_boxes: Joi.number(),

      variants: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      template_tag: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      name: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      change_request_id: Joi.any(),

      teaser_tag: CatalogModel.TeaserTag(),

      is_active: Joi.boolean(),

      action: Joi.string().allow(""),

      attributes: Joi.any(),

      variant_media: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      is_dependent: Joi.boolean(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      short_description: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Logo(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
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
      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      primary_color: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      all_company_ids: Joi.array().items(Joi.number()),

      multi_size: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      company_id: Joi.number(),

      is_image_less_product: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      currency: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      return_config: CatalogModel.ReturnConfigResponse(),

      variant_group: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      created_by: Joi.any(),

      category: Joi.any(),

      image_nature: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      short_description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      is_set: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      pending: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      brand_uid: Joi.number(),

      no_of_boxes: Joi.number(),

      created_on: Joi.string().allow(""),

      variants: Joi.any(),

      category_uid: Joi.number(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      template_tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      custom_order: Joi.any(),

      is_expirable: Joi.boolean(),

      stage: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      trader: Joi.array().items(Joi.any()),

      hsn_code: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      attributes: Joi.any(),

      moq: Joi.any(),

      variant_media: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      is_dependent: Joi.boolean(),

      tax_identifier: Joi.any(),

      modified_by: Joi.any(),

      uid: Joi.number(),
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

      brand_uid: Joi.number(),

      category_uid: Joi.number(),

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
      slug: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_by: Joi.any(),

      synonyms: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      is_nested: Joi.boolean(),

      variant: Joi.boolean(),

      raw_key: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      enabled_for_end_consumer: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

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

  static SingleProductResponse() {
    return Joi.object({
      data: CatalogModel.Product(),
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
      item_weight: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_height: Joi.number().required(),

      item_length: Joi.number().required(),

      size: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),
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

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow("").required(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

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
      created_by: CatalogModel.UserDetail1(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),
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
      created_by: CatalogModel.UserCommon(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      succeed: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      retry: Joi.number(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),
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
      size: Joi.string().allow(""),

      company_id: Joi.number(),

      item_id: Joi.number(),
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

      brand_uid: Joi.number(),

      uid: Joi.number(),
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

      size_distribution: CatalogModel.SizeDistribution().required(),

      quantity: Joi.number(),
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
      item_weight: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_height: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      price: Joi.number(),

      size: Joi.any().required(),

      is_set: Joi.boolean(),

      currency: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price_transfer: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      quantity: Joi.number().required(),

      item_width: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),
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
      item_id: Joi.number(),

      sellable_quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      price: Joi.number(),

      size: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      identifiers: Joi.any(),

      price_transfer: Joi.number(),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      store: Joi.any(),

      uid: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      marked: Joi.number().required(),

      tp_notes: Joi.any(),

      updated_at: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),
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
      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

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
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      fynd_item_code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      brand: CatalogModel.BrandMeta().required(),

      return_config: CatalogModel.ReturnConfig1(),

      fragile: Joi.boolean().required(),

      store: CatalogModel.StoreMeta().required(),

      created_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse().required(),

      price: CatalogModel.PriceMeta().required(),

      track_inventory: Joi.boolean(),

      is_set: Joi.boolean(),

      fynd_meta: Joi.any(),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      tags: Joi.array().items(Joi.string().allow("")),

      raw_meta: Joi.any(),

      stage: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      fynd_article_code: Joi.string().allow("").required(),

      company: CatalogModel.CompanyMeta().required(),

      is_active: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      item_id: Joi.number().required(),

      identifier: Joi.any().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      marked: Joi.number(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      effective: Joi.number(),
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

      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

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
      unit: Joi.string().allow(""),

      height: Joi.number(),

      width: Joi.number(),

      length: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      country_of_origin: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      brand: CatalogModel.BrandMeta1(),

      return_config: CatalogModel.ReturnConfig2(),

      store: CatalogModel.ArticleStoreResponse(),

      platforms: Joi.any(),

      date_meta: CatalogModel.DateMeta(),

      created_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse1(),

      id: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      track_inventory: Joi.boolean(),

      is_set: Joi.boolean(),

      inventory_updated_on: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      company: CatalogModel.CompanyMeta1(),

      item_id: Joi.number(),

      identifier: Joi.any(),

      dimension: CatalogModel.DimensionResponse1(),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow(""),
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
      created_by: Joi.any(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: Joi.any(),
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

      tags: Joi.array().items(Joi.string().allow("")),

      item_weight_unit_of_measure: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),
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

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      request_params: Joi.any(),
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

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      store_id: Joi.number().required(),

      expiration_date: Joi.string().allow(""),
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
      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_esp: Joi.boolean(),

      is_active: Joi.boolean(),

      tax1: Joi.number().required(),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      tax2: Joi.number(),

      uid: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      tax1: Joi.number(),

      id: Joi.string().allow(""),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

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

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),
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

      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      country_code: Joi.string().allow("").required(),
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

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

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

      priority_order: Joi.number(),

      uid: Joi.number(),

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

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

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
      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      color: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      attributes: Joi.any(),

      uid: Joi.number(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: CatalogModel.InventoryPage().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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
      pincode: Joi.number(),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),
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

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),
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
      created_by: CatalogModel.UserSerializer2(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),
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
      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer1(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_by: CatalogModel.UserSerializer1(),

      address: CatalogModel.GetAddressSerializer().required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      display_name: Joi.string().allow("").required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      company: CatalogModel.GetCompanySerializer(),

      phone_number: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      manager: CatalogModel.LocationManagerSerializer(),

      warnings: Joi.any(),

      integration_type: CatalogModel.LocationIntegrationType(),

      modified_by: CatalogModel.UserSerializer1(),

      code: Joi.string().allow("").required(),
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

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

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
}
module.exports = CatalogModel;
