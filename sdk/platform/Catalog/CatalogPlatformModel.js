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
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

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
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),
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
      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),
    });
  }

  static Price() {
    return Joi.object({
      min_marked: Joi.number(),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      slug: Joi.string().allow(""),

      identifier: Joi.any(),

      attributes: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      price: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      quantity: Joi.number(),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      price: CatalogModel.Price(),

      product_details: CatalogModel.LimitedProductData(),

      sizes: Joi.array().items(CatalogModel.Size()),

      max_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      page: Joi.any(),

      items: Joi.array().items(Joi.any()),
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
      created_by: Joi.any(),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      description: Joi.string().allow(""),

      title: Joi.string().allow("").required(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      created_by: Joi.any(),

      guide: Joi.any(),

      brand_id: Joi.number(),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

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
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      alt_text: Joi.any(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      next: Joi.number().required(),

      has_next: Joi.boolean().required(),

      total_count: Joi.number().required(),

      current: Joi.number().required(),
    });
  }

  static GetConfigResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      page: CatalogModel.PageResponseType().required(),
    });
  }

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      slug: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_active: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),
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

      is_active: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),
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
      compare: Joi.any(),

      variant: Joi.any(),

      similar: Joi.any(),

      detail: Joi.any(),
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
      display: Joi.string().allow(""),

      start: Joi.number(),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      map: Joi.any(),

      value: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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
      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),
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
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),
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
      size: CatalogModel.ProductSize(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      key: Joi.string().allow("").required(),
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

  static AppCatalogConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.AppCatalogConfiguration(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),
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
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      selected_min: Joi.number(),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      count: Joi.number(),

      value: Joi.any().required(),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
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

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),
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

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      meta: Joi.any(),
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

      priority: Joi.number(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      logo: CatalogModel.Media1(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      action: CatalogModel.Action(),

      description: Joi.string().allow(""),
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

  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
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
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      sort_on: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      allow_facets: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      logo: CatalogModel.CollectionImage().required(),

      type: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      sort_on: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      logo: CatalogModel.BannerImage(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      logo: CatalogModel.Media1(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      sort_on: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      allow_facets: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      logo: CatalogModel.CollectionImage(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      rating_count: Joi.number(),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      discount: Joi.string().allow(""),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      price: CatalogModel.ProductListingPrice(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      rating: Joi.number(),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      has_variant: Joi.boolean(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      available_articles: Joi.number(),

      total_articles: Joi.number(),
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
      data: CatalogModel.CrossSellingData(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      created_by: Joi.any(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),

      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      modified_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),
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
      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      address: Joi.any(),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      manager: Joi.any(),

      created_on: Joi.string().allow(""),

      timing: Joi.any(),

      documents: Joi.array().items(Joi.any()),
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
      priority: Joi.number(),

      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),
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
      range: CatalogModel.AttributeSchemaRange(),

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      name: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

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
      errors: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      is_active: Joi.boolean(),

      item_type: Joi.string().allow(""),

      priority_order: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      page_size: Joi.number(),

      search: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      errors: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      platforms: Joi.any(),

      _cls: Joi.string().allow(""),
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

  static UserDetail() {
    return Joi.object({
      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      slug: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      name: Joi.any().required(),

      uid: Joi.number(),

      _id: Joi.any(),

      logo: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      _cls: Joi.any(),

      verified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      modified_by: Joi.any(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      is_physical: Joi.boolean().required(),
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
      trader: Joi.any(),

      item_type: Joi.any(),

      name: Joi.any(),

      no_of_boxes: Joi.any(),

      category_slug: Joi.any(),

      country_of_origin: Joi.any(),

      custom_order: Joi.any(),

      tags: Joi.any(),

      highlights: Joi.any(),

      command: Joi.any(),

      item_code: Joi.any(),

      slug: Joi.any(),

      media: Joi.any(),

      size_guide: Joi.any(),

      variants: Joi.any(),

      multi_size: Joi.any(),

      is_active: Joi.any(),

      hsn_code: Joi.any(),

      trader_type: Joi.any(),

      currency: Joi.any(),

      is_dependent: Joi.any(),

      product_publish: Joi.any(),

      brand_uid: Joi.any(),

      sizes: Joi.any(),

      teaser_tag: Joi.any(),

      short_description: Joi.any(),

      return_config: Joi.any(),

      product_group_tag: Joi.any(),

      description: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

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

      attributes: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      is_physical: Joi.boolean().required(),
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
      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      created_by: CatalogModel.VerifiedBy(),

      seller_id: Joi.number(),

      template_tags: Joi.any(),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      status: Joi.string().allow(""),
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

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
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

  static Category() {
    return Joi.object({
      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      priority: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Category()),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string().allow(""),
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

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static Product() {
    return Joi.object({
      category: Joi.any(),

      attributes: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      all_company_ids: Joi.array().items(Joi.number()),

      trader: Joi.array().items(Joi.any()),

      item_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      category_slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      moq: Joi.any(),

      slug: Joi.string().allow(""),

      is_set: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      variants: Joi.any(),

      multi_size: Joi.boolean(),

      is_active: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      created_by: Joi.any(),

      brand: CatalogModel.Brand(),

      images: Joi.array().items(CatalogModel.Image()),

      hsn_code: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      id: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      product_publish: CatalogModel.ProductPublished(),

      is_expirable: Joi.boolean(),

      is_physical: Joi.boolean(),

      tax_identifier: Joi.any(),

      variant_media: Joi.any(),

      template_tag: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      brand_uid: Joi.number(),

      color: Joi.string().allow(""),

      company_id: Joi.number(),

      sizes: Joi.array().items(Joi.any()),

      primary_color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      variant_group: Joi.any(),

      is_image_less_product: Joi.boolean(),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      category_uid: Joi.number(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

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

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
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
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      attributes: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      item_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      no_of_boxes: Joi.number(),

      category_slug: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      uid: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      item_code: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      variants: Joi.any(),

      is_active: Joi.boolean(),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      currency: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      product_publish: CatalogModel.ProductPublish(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      variant_media: Joi.any(),

      template_tag: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      is_image_less_product: Joi.boolean(),

      variant_group: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      teaser_tag: CatalogModel.TeaserTag(),

      short_description: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      net_quantity: CatalogModel.NetQuantity(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      change_request_id: Joi.any(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      media: Joi.array().items(CatalogModel.Media1()),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      category_uid: Joi.number(),
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
      filters: CatalogModel.AttributeMasterFilter().required(),

      variant: Joi.boolean(),

      name: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      created_on: Joi.string().allow(""),

      synonyms: Joi.any(),

      modified_on: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      details: CatalogModel.AttributeMasterDetails().required(),

      modified_by: Joi.any(),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      unit: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      logo: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

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
      size: Joi.any().required(),

      item_length: Joi.number().required(),

      item_width: Joi.number().required(),

      item_height: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_weight: Joi.number().required(),

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

  static UserDetail1() {
    return Joi.object({
      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductBulkRequest(),
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
      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      company_id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      tracking_url: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      failed_records: Joi.array().items(Joi.any()),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

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

  static UserCommon() {
    return Joi.object({
      company_id: Joi.number(),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      tracking_url: Joi.string().allow(""),

      retry: Joi.number(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Items()),
    });
  }

  static ProductBulkAssets() {
    return Joi.object({
      company_id: Joi.number(),

      user: Joi.any().required(),

      url: Joi.string().allow("").required(),
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

  static InventoryResponse() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      price_transfer: Joi.number(),

      price: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      price_effective: Joi.number(),

      item_id: Joi.number(),

      sellable_quantity: Joi.number(),

      uid: Joi.string().allow(""),

      store: Joi.any(),

      quantity: Joi.number(),

      currency: Joi.string().allow(""),

      identifiers: Joi.any(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
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
      is_set: Joi.boolean(),

      size: Joi.any().required(),

      price_transfer: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      price: Joi.number(),

      item_length: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      quantity: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      expiration_date: Joi.string().allow(""),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),
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

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
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

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),
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

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      width: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      trader: Joi.array().items(CatalogModel.Trader1()),

      _custom_json: Joi.any(),

      item_id: Joi.number().required(),

      fynd_item_code: Joi.string().allow("").required(),

      company: CatalogModel.CompanyMeta().required(),

      total_quantity: Joi.number().required(),

      fynd_meta: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      fynd_article_code: Joi.string().allow("").required(),

      added_on_store: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),

      raw_meta: Joi.any(),

      track_inventory: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.Quantities(),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      brand: CatalogModel.BrandMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      size: Joi.string().allow("").required(),

      price: CatalogModel.PriceMeta().required(),

      fragile: Joi.boolean().required(),

      weight: CatalogModel.WeightResponse().required(),

      return_config: CatalogModel.ReturnConfig1(),

      dimension: CatalogModel.DimensionResponse().required(),

      expiration_date: Joi.string().allow(""),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
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

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

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

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      effective: Joi.number(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
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

  static DimensionResponse1() {
    return Joi.object({
      height: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),

      width: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      trader: Joi.array().items(CatalogModel.Trader2()),

      item_id: Joi.number(),

      company: CatalogModel.CompanyMeta1(),

      platforms: Joi.any(),

      total_quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      tags: Joi.array().items(Joi.string().allow("")),

      track_inventory: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.QuantitiesArticle(),

      is_set: Joi.boolean(),

      identifier: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      brand: CatalogModel.BrandMeta1(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      id: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      trace_id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      size: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      weight: CatalogModel.WeightResponse1(),

      return_config: CatalogModel.ReturnConfig2(),

      dimension: CatalogModel.DimensionResponse1(),

      expiration_date: Joi.string().allow(""),
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
      file_path: Joi.string().allow(""),

      created_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),
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
      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      price: Joi.number(),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number(),
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

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      request_params: Joi.any(),

      status: Joi.string().allow(""),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),

      store: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),
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
      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),
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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_previous: Joi.boolean(),

      size: Joi.number(),

      current: Joi.string().allow(""),

      item_total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax_on_esp: Joi.boolean(),

      threshold2: Joi.number(),

      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tax1: Joi.number(),

      threshold1: Joi.number(),

      tax2: Joi.number(),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      page: CatalogModel.PageResponse(),

      items: Joi.array().items(CatalogModel.HsnCodesObject()),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax_on_esp: Joi.boolean(),

      threshold2: Joi.number(),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_mrp: Joi.boolean().required(),

      uid: Joi.number(),

      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

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

      cess: Joi.number(),

      threshold: Joi.number().required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      description: Joi.string().allow("").required(),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      page: CatalogModel.PageResponse(),

      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),
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
      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignment(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      company_id: Joi.number(),

      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_identifier: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),
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
      size: Joi.string().allow("").required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      price_marked: Joi.number(),

      company_id: Joi.number(),

      store_id: Joi.number(),

      price_effective: Joi.number(),

      item_id: Joi.number().required(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      quantity: Joi.number().required(),

      index: Joi.number(),

      s_city: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      status: Joi.boolean().required(),

      store_pincode: Joi.number(),
    });
  }

  static BrandItem() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),
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
      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),
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

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.Child()),
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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      rating_count: Joi.number(),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      rating: Joi.number(),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      has_variant: Joi.boolean(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
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

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer1(),

      company_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
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

      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      phone_number: Joi.string().allow("").required(),

      documents: Joi.array().items(CatalogModel.Document()),

      integration_type: CatalogModel.LocationIntegrationType(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer2(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      created_by: CatalogModel.UserSerializer2(),

      store_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      verified_by: CatalogModel.UserSerializer2(),

      address: CatalogModel.GetAddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      manager: CatalogModel.LocationManagerSerializer(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),
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
      is_active: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number().required(),

      logo: Joi.string().allow(""),
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
