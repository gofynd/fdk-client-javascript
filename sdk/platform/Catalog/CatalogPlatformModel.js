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

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      result: Joi.any(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),
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
      url: Joi.string().allow(""),

      query: Joi.any(),

      params: Joi.any(),

      type: Joi.string().allow(""),
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
      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

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

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      country_of_origin: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      identifier: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      max_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      product_uid: Joi.number(),

      min_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      price: CatalogModel.Price(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      name: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),

      page: Joi.any(),
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
      title: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      image: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      created_by: Joi.any(),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      description: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      title: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      guide: Joi.any(),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static MOQData() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static SEOData() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      moq: CatalogModel.MOQData(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.SEOData(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

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

  static GetConfigMetadataResponse() {
    return Joi.object({
      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      has_next: Joi.boolean().required(),

      total_count: Joi.number().required(),

      next: Joi.number().required(),

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
      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
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

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      detail: Joi.any(),

      compare: Joi.any(),

      similar: Joi.any(),

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
      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      subtitle: Joi.string().allow(""),

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize(),

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
      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize().required(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

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

      start: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map: Joi.any(),

      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
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

  static AppCatalogConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

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

  static AppConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      max: Joi.number(),

      value: Joi.any().required(),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      is_selected: Joi.boolean().required(),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),
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

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
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
      meta: Joi.any(),

      action: CatalogModel.Action(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
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

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
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

      email: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      meta: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      name: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      published: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      is_visible: Joi.boolean(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      app_id: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      slug: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow("").required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      _locale_language: Joi.any(),

      created_by: CatalogModel.UserInfo(),

      logo: CatalogModel.CollectionImage().required(),

      description: Joi.string().allow(""),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      logo: CatalogModel.BannerImage(),

      slug: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      meta: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      published: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      is_visible: Joi.boolean(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      sort_on: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      slug: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      _locale_language: Joi.any(),

      logo: CatalogModel.CollectionImage(),

      description: Joi.string().allow(""),
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

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
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

  static ProductListingDetail() {
    return Joi.object({
      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      price: CatalogModel.ProductListingPrice(),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      item_type: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      sellable: Joi.boolean(),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_articles: Joi.number(),

      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),

      article_freshness: Joi.number(),
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
      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      enabled: Joi.boolean(),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      company_id: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      modified_on: Joi.number().required(),
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

      brand: Joi.number(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      address: Joi.any(),

      store_code: Joi.string().allow(""),

      manager: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      timing: Joi.any(),

      display_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      type: Joi.string().allow("").required(),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
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
      meta: CatalogModel.AttributeMasterMeta(),

      description: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      details: CatalogModel.AttributeMasterDetails(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      id: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      slug: Joi.string().allow(""),
    });
  }

  static ProductTemplateCategory() {
    return Joi.object({
      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateCategory()),
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

  static UserSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      page_size: Joi.number(),

      created_on: Joi.string().allow(""),

      search: Joi.string().allow(""),

      name: Joi.string().allow(""),

      page_no: Joi.number(),

      is_active: Joi.boolean(),

      priority_order: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),
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
      meta: Joi.any(),

      code: Joi.string().allow(""),

      errors: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      platforms: Joi.any(),

      _custom_json: Joi.any(),

      _cls: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
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
      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      currency: Joi.any(),

      item_code: Joi.any(),

      product_group_tag: Joi.any(),

      name: Joi.any(),

      custom_order: Joi.any(),

      media: Joi.any(),

      is_dependent: Joi.any(),

      country_of_origin: Joi.any(),

      variants: Joi.any(),

      product_publish: Joi.any(),

      tags: Joi.any(),

      no_of_boxes: Joi.any(),

      short_description: Joi.any(),

      size_guide: Joi.any(),

      multi_size: Joi.any(),

      item_type: Joi.any(),

      return_config: Joi.any(),

      teaser_tag: Joi.any(),

      trader_type: Joi.any(),

      hsn_code: Joi.any(),

      slug: Joi.any(),

      highlights: Joi.any(),

      command: Joi.any(),

      category_slug: Joi.any(),

      sizes: Joi.any(),

      trader: Joi.any(),

      brand_uid: Joi.any(),

      is_active: Joi.any(),

      description: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),

      definitions: Joi.any(),

      description: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),
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
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserInfo1(),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      url: Joi.string().allow(""),

      filters: Joi.any(),

      status: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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

      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      filters: CatalogModel.ProductTemplateExportFilterRequest(),

      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPartialExportRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
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
      l2: Joi.number().required(),

      l1: Joi.number().required(),

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
      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      priority: Joi.number(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Category()),

      page: CatalogModel.Page(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogModel.Category(),
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
      uid: Joi.number(),

      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
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
      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      all_company_ids: Joi.array().items(Joi.number()),

      currency: Joi.string().allow(""),

      category_uid: Joi.number(),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      custom_order: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      tax_identifier: Joi.any(),

      id: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      template_tag: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      created_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      _custom_json: Joi.any(),

      variants: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      image_nature: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      pending: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      short_description: Joi.string().allow(""),

      company_id: Joi.number(),

      is_image_less_product: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      category: Joi.any(),

      size_guide: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      multi_size: Joi.boolean(),

      item_type: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      verified_on: Joi.string().allow(""),

      attributes: Joi.any(),

      hsn_code: Joi.string().allow(""),

      variant_media: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      modified_by: Joi.any(),

      moq: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantityResponse(),

      category_slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      departments: Joi.array().items(Joi.number()),

      sizes: Joi.array().items(Joi.any()),

      verified_by: CatalogModel.VerifiedBy(),

      trader: Joi.array().items(CatalogModel.Trader()),

      brand_uid: Joi.number(),

      is_active: Joi.boolean(),

      is_set: Joi.boolean(),

      created_by: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      variant_group: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),

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

  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

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
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      item_code: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      media: Joi.array().items(CatalogModel.Media1()),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      template_tag: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      variants: Joi.any(),

      _custom_json: Joi.any(),

      product_publish: CatalogModel.ProductPublish1(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_image_less_product: Joi.boolean(),

      company_id: Joi.number().required(),

      short_description: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      size_guide: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      teaser_tag: CatalogModel.TeaserTag(),

      attributes: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      variant_media: Joi.any(),

      slug: Joi.string().allow("").required(),

      change_request_id: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      net_quantity: CatalogModel.NetQuantity(),

      category_slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      sizes: Joi.array().items(Joi.any()).required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      brand_uid: Joi.number().required(),

      is_active: Joi.boolean(),

      requester: Joi.string().allow(""),

      is_set: Joi.boolean(),

      uid: Joi.number().allow(null),

      description: Joi.string().allow(""),

      variant_group: Joi.any(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),
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
      variant: Joi.boolean(),

      schema: CatalogModel.AttributeMaster().required(),

      name: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      suggestion: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      raw_key: Joi.string().allow(""),

      modified_by: Joi.any(),

      synonyms: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      created_by: Joi.any(),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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

      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      item_height: Joi.number().required(),

      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      item_length: Joi.number().required(),
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
      all_company_ids: Joi.array().items(Joi.number()),

      currency: Joi.string().allow(""),

      category_uid: Joi.number(),

      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      custom_order: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      tax_identifier: Joi.any(),

      id: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      template_tag: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      created_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      _custom_json: Joi.any(),

      variants: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      image_nature: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      pending: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      short_description: Joi.string().allow(""),

      company_id: Joi.number(),

      is_image_less_product: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      category: Joi.any(),

      size_guide: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      multi_size: Joi.boolean(),

      item_type: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      verified_on: Joi.string().allow(""),

      attributes: Joi.any(),

      hsn_code: Joi.string().allow(""),

      variant_media: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      modified_by: Joi.any(),

      moq: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantityResponse(),

      category_slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      departments: Joi.array().items(Joi.number()),

      sizes: Joi.array().items(Joi.any()),

      verified_by: CatalogModel.VerifiedBy(),

      trader: Joi.array().items(CatalogModel.Trader()),

      brand_uid: Joi.number(),

      is_active: Joi.boolean(),

      is_set: Joi.boolean(),

      created_by: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      variant_group: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
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
      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      cancelled: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      modified_on: Joi.string().allow(""),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      items: CatalogModel.ProductBulkRequest(),

      page: CatalogModel.Page(),
    });
  }

  static BulkJob() {
    return Joi.object({
      cancelled_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      total: Joi.number(),

      company_id: Joi.number().required(),

      failed_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      custom_template_tag: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static ProductTagsViewResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
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
      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      retry: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Items()),

      page: CatalogModel.Page(),
    });
  }

  static ProductBulkAssets() {
    return Joi.object({
      user: Joi.any().required(),

      company_id: Joi.number(),

      url: Joi.string().allow("").required(),
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
      data: CatalogModel.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      currency: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      identifiers: Joi.any(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      sellable_quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      price_transfer: Joi.number(),

      store: Joi.any(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      price: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),
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

  static InvSize() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_weight: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      expiration_date: Joi.string().allow(""),

      quantity: Joi.number().required(),

      price_effective: Joi.number().required(),

      item_width: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      price_transfer: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      price: Joi.number(),
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

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
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
      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
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

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
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

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      width: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      meta: Joi.any().allow(null),

      fynd_item_code: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      price: CatalogModel.PriceMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      fynd_meta: Joi.any(),

      tax_identifier: Joi.any(),

      size: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      quantities: CatalogModel.Quantities(),

      country_of_origin: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig1(),

      total_quantity: Joi.number().required(),

      item_id: Joi.number().required(),

      stage: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      identifier: Joi.any().required(),

      raw_meta: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      company: CatalogModel.CompanyMeta().required(),

      weight: CatalogModel.WeightResponse().required(),

      is_active: Joi.boolean(),

      fragile: Joi.boolean().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      is_set: Joi.boolean(),

      track_inventory: Joi.boolean(),

      store: CatalogModel.StoreMeta().required(),

      uid: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),
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

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
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
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static DateMeta() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),
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

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      manufacturer: CatalogModel.ManufacturerResponse1(),

      tax_identifier: Joi.any(),

      id: Joi.string().allow(""),

      size: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      brand: CatalogModel.BrandMeta1(),

      country_of_origin: Joi.string().allow(""),

      platforms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      inventory_updated_on: Joi.string().allow(""),

      total_quantity: Joi.number(),

      item_id: Joi.number(),

      stage: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      identifier: Joi.any(),

      date_meta: CatalogModel.DateMeta(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      company: CatalogModel.CompanyMeta1(),

      weight: CatalogModel.WeightResponse1(),

      track_inventory: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse1(),

      trace_id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      store: CatalogModel.ArticleStoreResponse(),

      uid: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),
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
      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
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
      item_weight_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price_marked: Joi.number(),

      price: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number(),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      store_code: Joi.string().allow("").required(),

      trace_id: Joi.string().allow("").allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

      operators: Joi.string().allow("").required(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow("").allow(null),

      from_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      url: Joi.string().allow(""),

      filters: CatalogModel.InventoryExportAdvanceOption(),

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
      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      filters: Joi.any(),

      status: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      brands: Joi.array().items(Joi.string().allow("")),

      stores: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      cancelled_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      cancelled_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      task_id: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      url: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryJobFilters().required(),

      status: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.InventoryExportFilter().required(),

      data: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPartialExportRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
    });
  }

  static InventoryExportCreateFilters() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportCreateResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      cancelled_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      cancelled_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      task_id: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      url: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryExportCreateFilters().required(),

      status: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      store_id: Joi.number().required(),

      price_marked: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      price_effective: Joi.number(),

      trace_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
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
      tax_on_mrp: Joi.boolean().required(),

      tax1: Joi.number().required(),

      tax2: Joi.number(),

      company_id: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      threshold1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax_on_mrp: Joi.boolean(),

      tax1: Joi.number(),

      tax2: Joi.number(),

      company_id: Joi.number(),

      hsn_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      id: Joi.string().allow(""),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      rate: Joi.number().required(),

      cess: Joi.number(),

      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      size: Joi.number(),
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
      action: CatalogModel.Action(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),
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

      priority_order: Joi.number(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static DepartmentIdentifier() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
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
      page: CatalogModel.Page().required(),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      item_type: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      rating_count: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      next_id: Joi.string().allow(""),

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

  static ArticleQuery() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),
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
      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_identifier: Joi.string().allow(""),

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
      meta: Joi.any(),

      store_id: Joi.number(),

      price_marked: Joi.number(),

      group_id: Joi.string().allow(""),

      company_id: Joi.number(),

      item_id: Joi.number().required(),

      quantity: Joi.number().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      price_effective: Joi.number(),

      s_city: Joi.string().allow(""),

      store_pincode: Joi.number(),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      index: Joi.number(),

      status: Joi.boolean().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      country_code: Joi.string().allow(""),
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
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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
      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      verified_by: CatalogModel.UserSerializer2(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      modified_on: Joi.string().allow(""),
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
      address: CatalogModel.GetAddressSerializer().required(),

      name: Joi.string().allow("").required(),

      manager: CatalogModel.LocationManagerSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      created_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      warnings: Joi.any(),

      store_type: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      phone_number: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      verified_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      created_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

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

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

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
