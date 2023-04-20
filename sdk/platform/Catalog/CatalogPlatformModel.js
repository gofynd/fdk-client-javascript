const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: Joi.any(),

      _custom_json: Joi.any(),
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
      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),
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

      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),
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

  static GetAutocompleteWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),
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
      page: CatalogModel.AutocompletePageAction(),

      type: Joi.string().allow(""),
    });
  }

  static Media() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      _custom_json: Joi.any(),
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
      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),
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
      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      attributes: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      identifier: Joi.any(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      max_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.GetProducts()),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),
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
      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      active: Joi.boolean(),

      guide: CatalogModel.Guide(),

      brand_id: Joi.number(),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      image: Joi.string().allow(""),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_by: Joi.any(),

      brand_id: Joi.number(),

      guide: Joi.any(),

      created_by: Joi.any(),

      company_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_cod: Joi.boolean(),

      seo: CatalogModel.SEOData(),

      alt_text: Joi.any(),

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

  static MetaFields() {
    return Joi.object({
      value: Joi.any().required(),

      key: Joi.any().required(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static GetConfigMetadataResponse() {
    return Joi.object({
      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static PageResponseType() {
    return Joi.object({
      next: Joi.number().required(),

      total_count: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),
    });
  }

  static GetConfigResponse() {
    return Joi.object({
      page: CatalogModel.PageResponseType().required(),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      priority: Joi.number().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
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

  static MetaDataListingResponse() {
    return Joi.object({
      sort: CatalogModel.MetaDataListingSortResponse().required(),

      filter: CatalogModel.MetaDataListingFilterResponse().required(),
    });
  }

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      similar: Joi.any(),

      detail: Joi.any(),

      variant: Joi.any(),

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

  static ConfigurationProductConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      size: CatalogModel.ProductSize(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

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
      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

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
      end: Joi.number(),

      start: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map: Joi.any(),

      value: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow(""),
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

  static AppCatalogConfiguration() {
    return Joi.object({
      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),
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
      modified_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),
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

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      data: CatalogModel.EntityConfiguration(),

      is_default: Joi.boolean(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display_format: Joi.string().allow(""),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      selected_max: Joi.number(),

      min: Joi.number(),

      query_format: Joi.string().allow(""),

      value: Joi.any().required(),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      selected_min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),
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
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
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
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
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

      meta: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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

      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),
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
      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
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
      landscape: CatalogModel.CollectionImage().required(),

      portrait: CatalogModel.CollectionImage().required(),
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

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      published: Joi.boolean(),

      name: Joi.string().allow("").required(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow("").required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.CollectionBanner().required(),

      meta: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _custom_json: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      priority: Joi.number(),

      app_id: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      modified_by: CatalogModel.UserInfo(),

      created_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      published: Joi.boolean(),

      name: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      banners: CatalogModel.CollectionBanner(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _custom_json: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      priority: Joi.number(),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      modified_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static Price1() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: CatalogModel.Price1(),

      effective: CatalogModel.Price1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      promo_meta: Joi.any(),

      has_variant: Joi.boolean(),

      rating: Joi.number(),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      sellable: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static CollectionItem() {
    return Joi.object({
      priority: Joi.number(),

      action: Joi.string().allow("").required(),

      item_id: Joi.number().required(),
    });
  }

  static CollectionItemUpdate() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CollectionItem()),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),
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
      article_freshness: Joi.number(),

      name: Joi.string().allow(""),

      available_articles: Joi.number(),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      total_sizes: Joi.number(),
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
      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      company_id: Joi.number(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      company_id: Joi.number().required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),
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
      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      company_id: Joi.number(),

      total_article: Joi.number(),

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
      brand: Joi.number(),

      company: Joi.string().allow(""),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      address: Joi.any(),

      company_id: Joi.number(),

      display_name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      manager: Joi.any(),

      timing: Joi.any(),
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
      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      mandatory: Joi.boolean(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails(),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      meta: CatalogModel.AttributeMasterMeta(),

      schema: CatalogModel.AttributeMaster(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      template_slug: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      errors: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      search: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),

      priority_order: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      page_size: Joi.number(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),

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
      errors: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      priority_order: Joi.number().required(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      slug: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      _custom_json: Joi.any(),
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
      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      synonyms: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      modified_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      slug: Joi.any().required(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      modified_by: Joi.any(),

      is_active: Joi.boolean(),

      created_by: Joi.any(),

      is_expirable: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),
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
      attributes: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Properties() {
    return Joi.object({
      sizes: Joi.any(),

      name: Joi.any(),

      size_guide: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.any(),

      trader_type: Joi.any(),

      currency: Joi.any(),

      product_publish: Joi.any(),

      media: Joi.any(),

      trader: Joi.any(),

      item_type: Joi.any(),

      brand_uid: Joi.any(),

      is_active: Joi.any(),

      highlights: Joi.any(),

      country_of_origin: Joi.any(),

      is_dependent: Joi.any(),

      description: Joi.any(),

      custom_order: Joi.any(),

      tags: Joi.any(),

      teaser_tag: Joi.any(),

      return_config: Joi.any(),

      hsn_code: Joi.any(),

      multi_size: Joi.any(),

      category_slug: Joi.any(),

      item_code: Joi.any(),

      product_group_tag: Joi.any(),

      command: Joi.any(),

      slug: Joi.any(),

      no_of_boxes: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),
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
      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      type: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: Joi.any(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      to_date: Joi.string().allow(""),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),

      type: Joi.string().allow("").allow(null),
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
      google: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      l2: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static Category() {
    return Joi.object({
      level: Joi.number().required(),

      priority: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      media: CatalogModel.Media2(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: Joi.any(),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),
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
      level: Joi.number().required(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string().allow(""),
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

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.any().required(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      sizes: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      moq: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      primary_color: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      template_tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      is_set: Joi.boolean(),

      attributes: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      category_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader()),

      pending: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      is_active: Joi.boolean(),

      category: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      _custom_json: Joi.any(),

      tax_identifier: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      images: Joi.array().items(CatalogModel.Image()),

      modified_by: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      custom_order: Joi.any(),

      created_by: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      variant_media: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      variant_group: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      company_id: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      no_of_boxes: Joi.number(),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
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
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
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

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      sizes: Joi.array().items(Joi.any()).required(),

      name: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      template_tag: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      attributes: Joi.any(),

      currency: Joi.string().allow("").required(),

      product_publish: CatalogModel.ProductPublish1(),

      is_set: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      uid: Joi.number().allow(null),

      brand_uid: Joi.number().required(),

      item_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      _custom_json: Joi.any(),

      change_request_id: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      country_of_origin: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      action: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      variant_media: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      teaser_tag: CatalogModel.TeaserTag(),

      return_config: CatalogModel.ReturnConfig().required(),

      variant_group: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      multi_size: Joi.boolean(),

      category_slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      company_id: Joi.number().required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      no_of_boxes: Joi.number(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),
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
      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      suggestion: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      synonyms: Joi.any(),

      raw_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_nested: Joi.boolean(),

      created_by: Joi.any(),

      variant: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
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

      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_height: Joi.number().required(),

      item_width: Joi.number().required(),

      item_weight: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_length: Joi.number().required(),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      sizes: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      moq: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      primary_color: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      template_tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      is_set: Joi.boolean(),

      attributes: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      category_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader()),

      pending: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      is_active: Joi.boolean(),

      category: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      _custom_json: Joi.any(),

      tax_identifier: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      images: Joi.array().items(CatalogModel.Image()),

      modified_by: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      custom_order: Joi.any(),

      created_by: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      variant_media: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      variant_group: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      company_id: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      no_of_boxes: Joi.number(),
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
      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      file_path: Joi.string().allow(""),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      template_tag: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),
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
      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      tracking_url: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      total: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserInfo1(),

      company_id: Joi.number().required(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),
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

  static ProductTagsViewResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UserCommon() {
    return Joi.object({
      username: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      stage: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      retry: Joi.number(),

      total: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      cancelled: Joi.number(),
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
      url: Joi.string().allow("").required(),

      company_id: Joi.number(),

      user: Joi.any().required(),
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

  static InventoryResponse() {
    return Joi.object({
      currency: Joi.string().allow(""),

      identifiers: Joi.any(),

      price: Joi.number(),

      price_effective: Joi.number(),

      sellable_quantity: Joi.number(),

      uid: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      store: Joi.any(),

      item_id: Joi.number(),

      price_transfer: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
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
      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_height: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_weight: Joi.number().allow(null),

      price: Joi.number(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price_effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price_transfer: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      size: Joi.any().required(),

      quantity: Joi.number().required(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),

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

      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
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
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      tp_notes: Joi.any(),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      effective: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      total_quantity: Joi.number().required(),

      store: CatalogModel.StoreMeta().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      added_on_store: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      fynd_article_code: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      quantities: CatalogModel.Quantities(),

      uid: Joi.string().allow("").required(),

      fynd_meta: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      is_active: Joi.boolean(),

      fragile: Joi.boolean().required(),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      _custom_json: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      raw_meta: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfig1(),

      size: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      track_inventory: Joi.boolean(),

      item_id: Joi.number().required(),

      identifier: Joi.any().required(),

      expiration_date: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse().required(),

      company: CatalogModel.CompanyMeta().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static DateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),
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

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

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
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      tp_notes: Joi.any(),

      transfer: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      date_meta: CatalogModel.DateMeta(),

      total_quantity: Joi.number(),

      store: CatalogModel.ArticleStoreResponse(),

      inventory_updated_on: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      quantities: CatalogModel.QuantitiesArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      uid: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      platforms: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      created_by: CatalogModel.UserSerializer(),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfig2(),

      size: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      track_inventory: Joi.boolean(),

      item_id: Joi.number(),

      identifier: Joi.any(),

      expiration_date: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      company: CatalogModel.CompanyMeta1(),
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
      stage: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: Joi.any(),

      file_path: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      failed: Joi.number(),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

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
      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      total_quantity: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow("").allow(null),

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

      from_date: Joi.string().allow("").allow(null),

      brand_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      type: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      url: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportAdvanceOption(),
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
      task_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      type: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: Joi.any(),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      stores: Joi.array().items(Joi.string().allow("")),

      brands: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      cancelled_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      cancelled_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),

      created_by: CatalogModel.UserDetail(),

      completed_on: Joi.string().allow(""),

      status: Joi.any(),

      url: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryJobFilters().required(),
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

      from_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),

      data: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),
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
      store_id: Joi.number().required(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      total_quantity: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),

      tax1: Joi.number(),

      company_id: Joi.number(),

      tax2: Joi.number(),

      threshold1: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      uid: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax1: Joi.number().required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      tax2: Joi.number(),

      threshold1: Joi.number().required(),
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
      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      description: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

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

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      priority_order: Joi.number(),

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
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.Child()),

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
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      rating_count: Joi.number(),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      promo_meta: Joi.any(),

      has_variant: Joi.boolean(),

      rating: Joi.number(),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      has_previous: Joi.boolean(),
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
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static ArticleQuery() {
    return Joi.object({
      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignment(),

      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      app_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),
    });
  }

  static ArticleAssignment1() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static StoreAssignResponse() {
    return Joi.object({
      store_id: Joi.number(),

      _id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      uid: Joi.string().allow(""),

      store_pincode: Joi.number(),

      group_id: Joi.string().allow(""),

      item_id: Joi.number().required(),

      company_id: Joi.number(),

      index: Joi.number(),

      status: Joi.boolean().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      s_city: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      meta: Joi.any(),

      quantity: Joi.number().required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer1(),

      verified_by: CatalogModel.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      company_type: Joi.string().allow(""),
    });
  }

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
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

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      enabled: Joi.boolean(),
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
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CatalogModel.Document()),

      company: CatalogModel.GetCompanySerializer(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      store_type: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      modified_by: CatalogModel.UserSerializer2(),

      verified_by: CatalogModel.UserSerializer2(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      created_by: CatalogModel.UserSerializer2(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      integration_type: CatalogModel.LocationIntegrationType(),

      manager: CatalogModel.LocationManagerSerializer(),
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
      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      uid: Joi.number().required(),

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
