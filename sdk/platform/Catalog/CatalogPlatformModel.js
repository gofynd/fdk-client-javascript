const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      result: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),
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
      code: Joi.string().allow(""),

      error: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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

      result: CatalogModel.SearchKeywordResult().required(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),
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

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static AutocompleteResult() {
    return Joi.object({
      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      created_by: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      created_by: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      id: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),

      page: CatalogModel.Page(),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      price: Joi.any(),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      quantity: Joi.number(),

      identifier: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      quantity: Joi.number(),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),
    });
  }

  static GetProducts() {
    return Joi.object({
      price: CatalogModel.Price(),

      max_quantity: Joi.number(),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      min_quantity: Joi.number(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
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
      tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      active: Joi.boolean(),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

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
      items: Joi.array().items(Joi.any()),

      page: Joi.any(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      guide: Joi.any(),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
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

  static ApplicationItemMeta() {
    return Joi.object({
      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),
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
      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.SEOData(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),
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

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

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
      similar: Joi.any(),

      compare: Joi.any(),

      variant: Joi.any(),

      detail: Joi.any(),
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
      display: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
    });
  }

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

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
      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationListingSortConfig()),

      default_key: Joi.string().allow("").required(),
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
      map: Joi.any(),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),
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

  static ConfigurationListing() {
    return Joi.object({
      sort: CatalogModel.ConfigurationListingSort().required(),

      filter: CatalogModel.ConfigurationListingFilter().required(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

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
      sort: Joi.any(),

      filter: Joi.any(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      is_selected: Joi.boolean().required(),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      value: Joi.any().required(),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      selected_max: Joi.number(),

      query_format: Joi.string().allow(""),

      min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

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
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
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

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      landscape: CatalogModel.CollectionImage().required(),

      portrait: CatalogModel.CollectionImage().required(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
    });
  }

  static CreateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow("").required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner().required(),

      created_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      priority: Joi.number(),

      badge: CatalogModel.CollectionBadge(),

      is_visible: Joi.boolean(),

      name: Joi.string().allow("").required(),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      app_id: Joi.string().allow("").required(),

      _locale_language: Joi.any(),
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
      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      logo: CatalogModel.BannerImage(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),
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

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      allow_facets: Joi.boolean(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),
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

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      tag: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      allow_facets: Joi.boolean(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      _custom_json: Joi.any(),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      badge: CatalogModel.CollectionBadge(),

      is_visible: Joi.boolean(),

      name: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      _locale_language: Joi.any(),
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
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

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

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),
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
      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      sellable: Joi.boolean(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      slug: Joi.string().allow("").required(),

      promo_meta: Joi.any(),

      product_online_date: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating: Joi.number(),

      name: Joi.string().allow(""),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      discount: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),
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
      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_sizes: Joi.number(),

      available_articles: Joi.number(),

      total_articles: Joi.number(),

      article_freshness: Joi.number(),

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
      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      platform: Joi.string().allow(""),

      company_id: Joi.number(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      company_id: Joi.number().required(),

      modified_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),
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

      total_article: Joi.number(),

      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),
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
      created_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      manager: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      timing: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
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
      type: Joi.string().allow("").required(),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),
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
      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      indexing: Joi.boolean().required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      is_nested: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails(),

      meta: CatalogModel.AttributeMasterMeta(),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),
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
      code: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      platforms: Joi.any(),

      _custom_json: Joi.any(),
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
      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      page_size: Joi.number(),

      search: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

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
      code: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      name: Joi.any().required(),

      modified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      _cls: Joi.any(),

      verified_on: Joi.string().allow(""),

      slug: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      is_physical: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),
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
      multi_size: Joi.any(),

      tags: Joi.any(),

      brand_uid: Joi.any(),

      category_slug: Joi.any(),

      no_of_boxes: Joi.any(),

      command: Joi.any(),

      currency: Joi.any(),

      hsn_code: Joi.any(),

      variants: Joi.any(),

      sizes: Joi.any(),

      is_active: Joi.any(),

      product_publish: Joi.any(),

      size_guide: Joi.any(),

      media: Joi.any(),

      item_type: Joi.any(),

      item_code: Joi.any(),

      trader_type: Joi.any(),

      description: Joi.any(),

      trader: Joi.any(),

      short_description: Joi.any(),

      highlights: Joi.any(),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.any(),

      slug: Joi.any(),

      custom_order: Joi.any(),

      name: Joi.any(),

      is_dependent: Joi.any(),

      return_config: Joi.any(),

      country_of_origin: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

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

  static TemplateDetails() {
    return Joi.object({
      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      is_physical: Joi.boolean().required(),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),
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

  static ProductDownloadItemsData() {
    return Joi.object({
      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),

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
      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      task_id: Joi.string().allow(""),

      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      created_by: CatalogModel.VerifiedBy(),

      id: Joi.string().allow(""),
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

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      l1: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
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
      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      priority: Joi.number(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.any().required(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),
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
      brand_uid: Joi.number().required(),

      multi_size: Joi.boolean(),

      category_slug: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      no_of_boxes: Joi.number(),

      variants: Joi.any(),

      currency: Joi.string().allow("").required(),

      sizes: Joi.array().items(Joi.any()).required(),

      is_active: Joi.boolean(),

      bulk_job_id: Joi.string().allow(""),

      requester: Joi.string().allow(""),

      attributes: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      template_tag: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      net_quantity: CatalogModel.NetQuantity(),

      item_code: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      variant_media: Joi.any(),

      _custom_json: Joi.any(),

      change_request_id: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      is_set: Joi.boolean(),

      short_description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      teaser_tag: CatalogModel.TeaserTag(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      variant_group: Joi.any(),

      is_dependent: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig().required(),

      country_of_origin: Joi.string().allow("").required(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      all_sizes: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      multi_size: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      no_of_boxes: Joi.number(),

      is_image_less_product: Joi.boolean(),

      currency: Joi.string().allow(""),

      variants: Joi.any(),

      hsn_code: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      attributes: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      all_company_ids: Joi.array().items(Joi.number()),

      template_tag: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      item_code: Joi.string().allow(""),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      variant_media: Joi.any(),

      trader: Joi.array().items(Joi.any()),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      short_description: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      modified_on: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      slug: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      custom_order: Joi.any(),

      name: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      color: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      variant_group: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      category_uid: Joi.number(),

      moq: Joi.any(),

      company_id: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      stage: Joi.string().allow(""),
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
      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      category_uid: Joi.number(),
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

      raw_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      schema: CatalogModel.AttributeMaster().required(),

      modified_on: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      slug: Joi.string().allow("").required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      suggestion: Joi.string().allow(""),

      variant: Joi.boolean(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow(""),

      synonyms: Joi.any(),

      enabled_for_end_consumer: Joi.boolean(),
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

      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_width: Joi.number().required(),

      item_height: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

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
      template_tag: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      failed: Joi.number(),

      company_id: Joi.number().required(),

      modified_by: CatalogModel.UserInfo1(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed_records: Joi.array().items(Joi.any()),

      succeed: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

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
      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      company_id: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),
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

      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

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
      user: Joi.any().required(),

      company_id: Joi.number(),

      url: Joi.string().allow("").required(),
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
      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      retry: Joi.number(),

      failed: Joi.number(),

      company_id: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      id: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),
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
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),
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
      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.any().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_length: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_weight: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      set: CatalogModel.InventorySet(),

      currency: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price_effective: Joi.number().required(),

      size: Joi.any().required(),

      quantity: Joi.number().required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      item_id: Joi.number(),

      price_transfer: Joi.number(),

      uid: Joi.string().allow(""),

      store: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price: Joi.number(),

      identifiers: Joi.any(),

      price_effective: Joi.number(),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),
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
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),

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

  static PriceMeta() {
    return Joi.object({
      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),
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

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

  static DimensionResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      is_active: Joi.boolean(),

      tax_identifier: Joi.any(),

      uid: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),

      fynd_item_code: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),

      created_by: CatalogModel.UserSerializer(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      _custom_json: Joi.any(),

      is_set: Joi.boolean(),

      fragile: Joi.boolean().required(),

      weight: CatalogModel.WeightResponse().required(),

      fynd_meta: Joi.any(),

      fynd_article_code: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      price: CatalogModel.PriceMeta().required(),

      track_inventory: Joi.boolean(),

      size: Joi.string().allow("").required(),

      company: CatalogModel.CompanyMeta().required(),

      brand: CatalogModel.BrandMeta().required(),

      item_id: Joi.number().required(),

      added_on_store: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig1(),

      quantities: CatalogModel.Quantities(),

      country_of_origin: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      expiration_date: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),

      raw_meta: Joi.any(),

      identifier: Joi.any().required(),
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
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
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

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      marked: Joi.number(),

      transfer: Joi.number(),

      tp_notes: Joi.any(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

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
      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      platforms: Joi.any(),

      tax_identifier: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      created_by: CatalogModel.UserSerializer(),

      id: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      is_set: Joi.boolean(),

      weight: CatalogModel.WeightResponse1(),

      date_meta: CatalogModel.DateMeta(),

      seller_identifier: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      track_inventory: Joi.boolean(),

      size: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      brand: CatalogModel.BrandMeta1(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      quantities: CatalogModel.QuantitiesArticle(),

      return_config: CatalogModel.ReturnConfig2(),

      country_of_origin: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

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
      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),
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

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      total_quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      price_effective: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),
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
      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().allow(null),

      trace_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

      price_effective: Joi.number(),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),

      payload: Joi.array().items(CatalogModel.InventoryPayload()),

      meta: Joi.any(),
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
      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      uid: Joi.number(),

      tax2: Joi.number(),

      threshold1: Joi.number().required(),

      tax1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      threshold2: Joi.number(),

      is_active: Joi.boolean(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      hs2_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax2: Joi.number(),

      threshold1: Joi.number(),

      modified_on: Joi.string().allow(""),

      tax1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      threshold2: Joi.number(),

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
      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.string().allow(""),
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
      threshold: Joi.number().required(),

      rate: Joi.number().required(),

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      type: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      created_by: Joi.any(),
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

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

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
      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

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
      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      tryouts: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      promo_meta: Joi.any(),

      product_online_date: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating: Joi.number(),

      name: Joi.string().allow(""),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),
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
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),
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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),
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
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),
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
      manager: CatalogModel.LocationManagerSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      phone_number: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer1(),

      created_by: CatalogModel.UserSerializer1(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      address: CatalogModel.GetAddressSerializer().required(),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),
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

      name: Joi.string().allow(""),

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),
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
