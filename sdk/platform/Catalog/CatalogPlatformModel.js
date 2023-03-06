const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: Joi.any(),

      is_active: Joi.boolean(),
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
      query: Joi.any().required(),

      sort_on: Joi.string().allow("").required(),
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

  static GetSearchWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetSearchWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),
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

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),
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
      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.any(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),

      page: CatalogModel.Page(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      quantity: Joi.number(),

      short_description: Joi.string().allow(""),

      identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      price: Joi.any(),
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

      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_details: CatalogModel.LimitedProductData(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number(),

      min_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      price: CatalogModel.Price(),

      max_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      meta: Joi.any(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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
      title: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      image: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static GetMultiSizeGuide() {
    return Joi.object({
      title: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      guide: Joi.any(),

      _id: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      image: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetMultiSizeGuide()),

      page: Joi.any(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      title: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      guide: Joi.any(),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

      alt_text: Joi.any(),
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

      minimum: Joi.number(),

      increment_unit: Joi.number(),
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
      is_cod: Joi.boolean(),

      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),
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
      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

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
      total_count: Joi.number().required(),

      next: Joi.number().required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),
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
      is_default: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),
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

      detail: Joi.any(),

      variant: Joi.any(),
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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
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
      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      subtitle: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),
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

      size: CatalogModel.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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

  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),

      variant: CatalogModel.ConfigurationProductVariant().required(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

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

  static ConfigurationBucketPoints() {
    return Joi.object({
      start: Joi.number(),

      end: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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

  static ConfigurationListing() {
    return Joi.object({
      sort: CatalogModel.ConfigurationListingSort().required(),

      filter: CatalogModel.ConfigurationListingFilter().required(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_by: Joi.any(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_by: Joi.any(),
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
      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string().allow(""),

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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_max: Joi.number(),

      min: Joi.number(),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      selected_min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      count: Joi.number(),

      display_format: Joi.string().allow(""),

      value: Joi.any().required(),

      max: Joi.number(),
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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
    });
  }

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
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
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
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

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),
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
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      published: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.CollectionImage().required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      sort_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      app_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserInfo(),

      _locale_language: Joi.any(),

      is_visible: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner().required(),

      badge: CatalogModel.CollectionBadge(),

      allow_facets: Joi.boolean(),
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
      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      logo: CatalogModel.BannerImage(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),
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
      meta: Joi.any().allow(null),

      url: Joi.string().allow("").required(),

      type: Joi.string().allow("").allow(null),
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
      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),

      action: CatalogModel.Action(),
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
      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      badge: Joi.any(),

      allow_facets: Joi.boolean(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      published: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.CollectionImage(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      sort_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      is_visible: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner(),

      badge: CatalogModel.CollectionBadge(),

      allow_facets: Joi.boolean(),
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

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      uid: Joi.number(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),

      title: Joi.string().allow(""),
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

  static ProductListingDetail() {
    return Joi.object({
      discount: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      promo_meta: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      uid: Joi.number(),

      has_variant: Joi.boolean(),

      short_description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      sellable: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_sizes: Joi.number(),

      article_freshness: Joi.number(),

      available_articles: Joi.number(),

      total_articles: Joi.number(),

      total_sizes: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      sellable_count: Joi.number(),

      count: Joi.number(),

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
      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      opt_level: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      created_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      company_id: Joi.number().required(),

      modified_by: Joi.any(),
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

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      company_id: Joi.number(),

      brand_id: Joi.number(),

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
      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      address: Joi.any(),

      store_code: Joi.string().allow(""),

      timing: Joi.any(),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      manager: Joi.any(),
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
      allowed_values: Joi.array().items(Joi.string().allow("")),

      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      uid: Joi.number(),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),
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

      errors: Joi.any(),

      meta: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),
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
      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      search: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer(),

      page_size: Joi.number(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      modified_on: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_no: Joi.number(),
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
      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      slug: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserDetail(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      logo: Joi.any().required(),

      name: Joi.any().required(),

      modified_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      is_active: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      is_expirable: Joi.boolean(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      attributes_schema: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),
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

      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      is_expirable: Joi.boolean(),

      tag: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      attributes_schema: Joi.array().items(Joi.any()),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      trader_type: Joi.any(),

      no_of_boxes: Joi.any(),

      return_config: Joi.any(),

      item_code: Joi.any(),

      name: Joi.any(),

      teaser_tag: Joi.any(),

      sizes: Joi.any(),

      is_active: Joi.any(),

      description: Joi.any(),

      slug: Joi.any(),

      trader: Joi.any(),

      country_of_origin: Joi.any(),

      size_guide: Joi.any(),

      highlights: Joi.any(),

      item_type: Joi.any(),

      multi_size: Joi.any(),

      tags: Joi.any(),

      command: Joi.any(),

      product_group_tag: Joi.any(),

      custom_order: Joi.any(),

      short_description: Joi.any(),

      variants: Joi.any(),

      category_slug: Joi.any(),

      currency: Joi.any(),

      brand_uid: Joi.any(),

      product_publish: Joi.any(),

      is_dependent: Joi.any(),

      hsn_code: Joi.any(),

      media: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      definitions: Joi.any(),

      required: Joi.array().items(Joi.string().allow("")),

      properties: CatalogModel.Properties(),

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
      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      data: CatalogModel.ProductDownloadItemsData(),

      seller_id: Joi.number(),

      task_id: Joi.string().allow(""),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
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

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      l2: Joi.number().required(),

      department: Joi.number().required(),
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

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      slug: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      level: Joi.number().required(),

      media: CatalogModel.Media2(),
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
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      level: Joi.number().required(),

      media: CatalogModel.Media2(),

      modified_by: Joi.any(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
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

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      tax_identifier: CatalogModel.TaxIdentifier().required(),

      is_set: Joi.boolean(),

      no_of_boxes: Joi.number(),

      change_request_id: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      item_code: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      teaser_tag: CatalogModel.TeaserTag(),

      sizes: Joi.array().items(Joi.any()).required(),

      net_quantity: CatalogModel.NetQuantity(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      template_tag: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      _custom_json: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      item_type: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      attributes: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number().allow(null),

      departments: Joi.array().items(Joi.number()).required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      custom_order: CatalogModel.CustomOrder(),

      variant_media: Joi.any(),

      short_description: Joi.string().allow(""),

      variants: Joi.any(),

      category_slug: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      company_id: Joi.number().required(),

      requester: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      action: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),
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

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      tax_identifier: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      is_set: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      no_of_boxes: Joi.number(),

      brand: CatalogModel.Brand(),

      return_config: CatalogModel.ReturnConfigResponse(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      category: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      net_quantity: CatalogModel.NetQuantityResponse(),

      category_uid: Joi.number(),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      moq: Joi.any(),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      _custom_json: Joi.any(),

      created_by: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      attributes: Joi.any(),

      verified_on: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.number()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      is_expirable: Joi.boolean(),

      short_description: Joi.string().allow(""),

      variant_media: Joi.any(),

      pending: Joi.string().allow(""),

      variants: Joi.any(),

      category_slug: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      brand_uid: Joi.number(),

      primary_color: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      is_dependent: Joi.boolean(),

      created_on: Joi.string().allow(""),

      variant_group: Joi.any(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      images: Joi.array().items(CatalogModel.Image()),

      media: Joi.array().items(CatalogModel.Media1()),
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
      uid: Joi.number(),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),
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
      is_nested: Joi.boolean(),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      suggestion: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      raw_key: Joi.string().allow(""),

      variant: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails().required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      created_on: Joi.string().allow(""),

      synonyms: Joi.any(),

      modified_on: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

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

  static ProductCreateUpdate() {
    return Joi.object({
      tax_identifier: CatalogModel.TaxIdentifier().required(),

      is_set: Joi.boolean(),

      no_of_boxes: Joi.number(),

      change_request_id: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      item_code: Joi.any().required(),

      name: Joi.any().required(),

      teaser_tag: CatalogModel.TeaserTag(),

      net_quantity: CatalogModel.NetQuantity(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      template_tag: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      _custom_json: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      item_type: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number().allow(null),

      departments: Joi.array().items(Joi.number()).required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      custom_order: CatalogModel.CustomOrder(),

      variant_media: Joi.any(),

      short_description: Joi.string().allow(""),

      variants: Joi.any(),

      category_slug: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      company_id: Joi.number().required(),

      requester: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      action: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),
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
      item_width: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),

      size: Joi.any().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_height: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),
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

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      tracking_url: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      failed: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow("").required(),

      custom_template_tag: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed_records: Joi.array().items(Joi.any()),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      company_id: Joi.number().required(),

      modified_by: CatalogModel.UserInfo1(),

      stage: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),
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
      template: CatalogModel.ProductTemplate(),

      template_tag: Joi.string().allow(""),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      stage: Joi.string().allow(""),
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
      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

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

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      retry: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

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
      company_id: Joi.number(),

      size: Joi.string().allow(""),

      item_id: Joi.number(),
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
      primary: Joi.boolean(),

      gtin_value: Joi.any().required(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static InvSize() {
    return Joi.object({
      price_transfer: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      item_width: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      is_set: Joi.boolean(),

      set: CatalogModel.InventorySet(),

      size: Joi.any().required(),

      item_length: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      quantity: Joi.number().required(),

      store_code: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      price: Joi.number(),

      price_effective: Joi.number().required(),

      item_height: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),
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
      price_transfer: Joi.number(),

      uid: Joi.string().allow(""),

      store: Joi.any(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      currency: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      item_id: Joi.number(),

      price: Joi.number(),

      price_effective: Joi.number(),

      identifiers: Joi.any(),
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
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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
      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
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

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      height: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      tax_identifier: Joi.any(),

      weight: CatalogModel.WeightResponse().required(),

      company: CatalogModel.CompanyMeta().required(),

      track_inventory: Joi.boolean(),

      is_set: Joi.boolean(),

      fragile: Joi.boolean().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      brand: CatalogModel.BrandMeta().required(),

      meta: Joi.any().allow(null),

      return_config: CatalogModel.ReturnConfig1(),

      is_active: Joi.boolean(),

      fynd_article_code: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.Quantities(),

      store: CatalogModel.StoreMeta().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      identifier: Joi.any().required(),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      country_of_origin: Joi.string().allow("").required(),

      total_quantity: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      price: CatalogModel.PriceMeta().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      fynd_meta: Joi.any(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static BulkInventoryGetItems() {
    return Joi.object({
      failed: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      stage: Joi.string().allow(""),
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
      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      total_quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      price: Joi.number(),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      user: Joi.any(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      min: Joi.number(),

      operators: Joi.string().allow("").required(),

      max: Joi.number(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      from_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),

      type: Joi.string().allow("").allow(null),

      data: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      request_params: Joi.any(),

      created_on: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      to_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      from_date: Joi.string().allow("").allow(null),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      notification: Joi.boolean(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      task_id: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      sellable: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      width: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      tax_identifier: Joi.any(),

      weight: CatalogModel.WeightResponse1(),

      company: CatalogModel.CompanyMeta1(),

      track_inventory: Joi.boolean(),

      is_set: Joi.boolean(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      brand: CatalogModel.BrandMeta1(),

      return_config: CatalogModel.ReturnConfig2(),

      id: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      modified_by: CatalogModel.UserSerializer(),

      store: CatalogModel.ArticleStoreResponse(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      identifier: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      inventory_updated_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      total_quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      dimension: CatalogModel.DimensionResponse1(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      stage: Joi.string().allow(""),

      platforms: Joi.any(),

      expiration_date: Joi.string().allow(""),

      size: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static GetInventoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetInventories()),

      page: CatalogModel.Page(),
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
      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

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

  static HsnCodesObject() {
    return Joi.object({
      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number(),

      threshold1: Joi.number(),

      threshold2: Joi.number(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax2: Joi.number(),

      uid: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),
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
      rate: Joi.number().required(),

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      reporting_hsn: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      hsn_code_id: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      description: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),

      has_previous: Joi.boolean(),

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

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),
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

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),
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
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
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

      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      promo_meta: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      attributes: Joi.any(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      has_variant: Joi.boolean(),

      short_description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: CatalogModel.InventoryPage().required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      uid: Joi.number(),

      verified_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      created_by: CatalogModel.UserSerializer2(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),
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
      open: Joi.boolean().required(),

      closing: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),
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

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      warnings: Joi.any(),

      modified_by: CatalogModel.UserSerializer1(),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserSerializer1(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      display_name: Joi.string().allow("").required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      verified_on: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      uid: Joi.number(),

      integration_type: CatalogModel.LocationIntegrationType(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      phone_number: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      stage: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

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
