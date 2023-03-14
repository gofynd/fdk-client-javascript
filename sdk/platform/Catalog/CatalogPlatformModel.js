const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      result: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

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
      code: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      meta: Joi.any(),
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
      result: CatalogModel.SearchKeywordResult().required(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

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
      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: Joi.any(),

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

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      _custom_json: Joi.any(),
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
      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

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
      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      price: Joi.any(),

      attributes: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      uid: Joi.number(),

      identifier: Joi.any(),

      slug: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      product_uid: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      max_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

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
      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      title: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_by: Joi.any(),

      active: Joi.boolean(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: Joi.any(),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      title: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_by: Joi.any(),

      active: Joi.boolean(),
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
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      moq: CatalogModel.MOQData(),

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

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
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static MetaFields() {
    return Joi.object({
      value: Joi.any().required(),

      key: Joi.any().required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      _custom_json: Joi.any(),

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
      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
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
      name: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      slug: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

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
      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

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
      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

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
      compare: Joi.any(),

      variant: Joi.any(),

      detail: Joi.any(),

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
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize().required(),

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
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize(),

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

  static ConfigurationBucketPoints() {
    return Joi.object({
      end: Joi.number(),

      start: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      priority: Joi.number().required(),

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
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),
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

  static AppCatalogConfiguration() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),
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
      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),
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

      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),
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

  static ProductFiltersValue() {
    return Joi.object({
      selected_min: Joi.number(),

      display_format: Joi.string().allow(""),

      value: Joi.any().required(),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      selected_max: Joi.number(),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      min: Joi.number(),

      query_format: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

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
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      meta: Joi.any(),
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

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      priority: Joi.number(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      meta: Joi.any(),

      action: CatalogModel.Action(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),
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

      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionImage() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      aspect_ratio: Joi.string().allow("").required(),
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

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      priority: Joi.number(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage().required(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner().required(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _locale_language: Joi.any(),

      name: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      published: Joi.boolean(),

      created_by: CatalogModel.UserInfo(),

      app_id: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      priority: Joi.number(),

      slug: Joi.string().allow(""),

      cron: Joi.any(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.BannerImage(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      logo: CatalogModel.Media1(),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      meta: Joi.any(),

      cron: Joi.any(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      priority: Joi.number(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage(),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _locale_language: Joi.any(),

      name: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      published: Joi.boolean(),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),
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

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),
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

      value: Joi.string().allow(""),

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
      rating_count: Joi.number(),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media1()),

      description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      name: Joi.string().allow(""),

      promo_meta: Joi.any(),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      sellable: Joi.boolean(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page(),

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

  static CatalogInsightBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),

      article_freshness: Joi.number(),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      out_of_stock_count: Joi.number(),

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
      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      modified_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

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
      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      brand_name: Joi.string().allow(""),

      company_id: Joi.number(),

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
      brand: Joi.number(),

      store: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      documents: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      address: Joi.any(),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      timing: Joi.any(),

      uid: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      manager: Joi.any(),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),

      priority: Joi.number(),
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
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
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
      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      range: CatalogModel.AttributeSchemaRange(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      is_nested: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      schema: CatalogModel.AttributeMaster(),
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

      status: Joi.number(),

      message: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      search: Joi.string().allow(""),

      name: Joi.string().allow(""),

      page_no: Joi.number(),

      page_size: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      priority_order: Joi.number(),

      modified_on: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

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

      errors: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      platforms: Joi.any(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

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

  static UserDetail() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.any()),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      slug: Joi.any(),

      name: Joi.any().required(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      modified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      is_active: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      is_active: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),
    });
  }

  static Properties() {
    return Joi.object({
      teaser_tag: Joi.any(),

      size_guide: Joi.any(),

      hsn_code: Joi.any(),

      no_of_boxes: Joi.any(),

      item_type: Joi.any(),

      product_publish: Joi.any(),

      slug: Joi.any(),

      variants: Joi.any(),

      description: Joi.any(),

      currency: Joi.any(),

      item_code: Joi.any(),

      short_description: Joi.any(),

      custom_order: Joi.any(),

      tags: Joi.any(),

      is_dependent: Joi.any(),

      country_of_origin: Joi.any(),

      return_config: Joi.any(),

      command: Joi.any(),

      is_active: Joi.any(),

      name: Joi.any(),

      sizes: Joi.any(),

      brand_uid: Joi.any(),

      category_slug: Joi.any(),

      trader: Joi.any(),

      trader_type: Joi.any(),

      highlights: Joi.any(),

      media: Joi.any(),

      multi_size: Joi.any(),

      product_group_tag: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      description: Joi.string().allow(""),

      definitions: Joi.any(),

      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),
    });
  }

  static TemplateValidationData() {
    return Joi.object({
      template_validation: Joi.any(),

      global_validation: CatalogModel.GlobalValidation(),
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

  static ProductDownloadItemsData() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),
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
      data: CatalogModel.ProductDownloadItemsData(),

      created_by: CatalogModel.VerifiedBy(),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      seller_id: Joi.number(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      template_tags: Joi.any(),

      task_id: Joi.string().allow(""),

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
      department: Joi.number().required(),

      l1: Joi.number().required(),

      l2: Joi.number().required(),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
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

      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      created_by: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      uid: Joi.number(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),
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
      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

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

  static Image() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      teaser_tag: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      images: Joi.array().items(CatalogModel.Image()),

      all_sizes: Joi.array().items(Joi.any()),

      size_guide: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      departments: Joi.array().items(Joi.number()),

      item_type: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      color: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      _custom_json: Joi.any(),

      category_uid: Joi.number(),

      pending: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      variants: Joi.any(),

      description: Joi.string().allow(""),

      moq: Joi.any(),

      is_set: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      company_id: Joi.number(),

      currency: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      custom_order: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      variant_group: Joi.any(),

      is_expirable: Joi.boolean(),

      variant_media: Joi.any(),

      is_active: Joi.boolean(),

      category: Joi.any(),

      name: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      created_by: Joi.any(),

      brand_uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      trader: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      multi_size: Joi.boolean(),

      uid: Joi.number(),

      modified_by: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
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
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),

      returnable: Joi.boolean().required(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      teaser_tag: CatalogModel.TeaserTag(),

      size_guide: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      no_of_boxes: Joi.number(),

      item_type: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      template_tag: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow("").required(),

      variants: Joi.any(),

      company_id: Joi.number().required(),

      description: Joi.string().allow(""),

      is_set: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      currency: Joi.string().allow("").required(),

      item_code: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      action: Joi.string().allow(""),

      variant_group: Joi.any(),

      variant_media: Joi.any(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      brand_uid: Joi.number().required(),

      category_slug: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      attributes: Joi.any().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      media: Joi.array().items(CatalogModel.Media1()),

      multi_size: Joi.boolean(),

      change_request_id: Joi.any(),

      uid: Joi.number().allow(null),

      product_group_tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductVariants() {
    return Joi.object({
      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

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
      departments: Joi.array().items(Joi.string().allow("")).required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      logo: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      created_on: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      variant: Joi.boolean(),

      synonyms: Joi.any(),

      name: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      created_by: Joi.any(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

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

      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.any().required(),

      item_length: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.any().required(),

      item_height: Joi.number().required(),

      item_width: Joi.number().required(),
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

  static UserDetail1() {
    return Joi.object({
      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      modified_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      succeed: Joi.number(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      items: CatalogModel.ProductBulkRequest(),

      page: CatalogModel.Page(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      tracking_url: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      cancelled_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      succeed: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

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

  static UserCommon() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      retry: Joi.number(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      tracking_url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),
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

      url: Joi.string().allow("").required(),

      company_id: Joi.number(),
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
      seller_identifier: Joi.string().allow(""),

      identifiers: Joi.any(),

      currency: Joi.string().allow(""),

      store: Joi.any(),

      sellable_quantity: Joi.number(),

      item_id: Joi.number(),

      price: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      price_transfer: Joi.number(),

      quantity: Joi.number(),
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

      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),
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
      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      is_set: Joi.boolean(),

      item_length: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      price: Joi.number(),

      item_weight: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_width: Joi.number().allow(null),

      price_transfer: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      item_height: Joi.number().allow(null),

      size: Joi.any().required(),

      quantity: Joi.number().required(),
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
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),
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
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),
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
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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
      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      fynd_meta: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      raw_meta: Joi.any(),

      price: CatalogModel.PriceMeta().required(),

      fragile: Joi.boolean().required(),

      weight: CatalogModel.WeightResponse().required(),

      _custom_json: Joi.any(),

      expiration_date: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      is_set: Joi.boolean(),

      track_inventory: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().required(),

      stage: Joi.string().allow(""),

      country_of_origin: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig1(),

      identifier: Joi.any().required(),

      size: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),

      is_active: Joi.boolean(),

      quantities: CatalogModel.Quantities(),

      fynd_article_code: Joi.string().allow("").required(),

      dimension: CatalogModel.DimensionResponse().required(),

      tax_identifier: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      item_id: Joi.number().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      fynd_item_code: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      company: CatalogModel.CompanyMeta().required(),

      uid: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),
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

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      currency: Joi.string().allow(""),

      tp_notes: Joi.any(),

      effective: Joi.number(),

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
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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

  static DateMeta() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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

      not_available: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),
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

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      brand: CatalogModel.BrandMeta1(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      id: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      weight: CatalogModel.WeightResponse1(),

      expiration_date: Joi.string().allow(""),

      is_set: Joi.boolean(),

      track_inventory: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      inventory_updated_on: Joi.string().allow(""),

      total_quantity: Joi.number(),

      stage: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      identifier: Joi.any(),

      size: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      date_meta: CatalogModel.DateMeta(),

      quantities: CatalogModel.QuantitiesArticle(),

      dimension: CatalogModel.DimensionResponse1(),

      tax_identifier: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      item_id: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      platforms: Joi.any(),

      trace_id: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      uid: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),
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

      company_id: Joi.number(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      modified_by: Joi.any(),

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
      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price: Joi.number(),

      price_marked: Joi.number(),

      total_quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),
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
      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),
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
      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number().required(),

      price_marked: Joi.number(),

      total_quantity: Joi.number().allow(null),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),
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
      company_id: Joi.number(),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tax2: Joi.number(),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax1: Joi.number(),

      hs2_code: Joi.string().allow(""),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.HsnCodesObject()),

      page: CatalogModel.PageResponse(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      company_id: Joi.number().required(),

      threshold1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      threshold2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      tax1: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),
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

      rate: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      modified_by: Joi.any(),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),

      page: CatalogModel.PageResponse(),
    });
  }

  static ArticleQuery() {
    return Joi.object({
      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),
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
      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      article_assignment: CatalogModel.ArticleAssignment(),

      meta: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),
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
      article_assignment: CatalogModel.ArticleAssignment1().required(),

      company_id: Joi.number(),

      group_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      status: Joi.boolean().required(),

      index: Joi.number(),

      store_pincode: Joi.number(),

      item_id: Joi.number().required(),

      store_id: Joi.number(),

      price_marked: Joi.number(),

      s_city: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      size: Joi.string().allow("").required(),

      meta: Joi.any(),

      quantity: Joi.number().required(),
    });
  }

  static BrandItem() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      discount: Joi.string().allow(""),
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

      logo: CatalogModel.Media(),

      uid: Joi.number(),

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
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),

      banners: CatalogModel.ImageUrls(),
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
      operators: Joi.any(),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      rating_count: Joi.number(),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      medias: Joi.array().items(CatalogModel.Media1()),

      description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      has_variant: Joi.boolean(),

      name: Joi.string().allow(""),

      promo_meta: Joi.any(),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      has_next: Joi.boolean(),

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

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      latitude: Joi.number(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
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

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),
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

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

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
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
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
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      verified_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      warnings: Joi.any(),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      created_on: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      code: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer1(),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      integration_type: CatalogModel.LocationIntegrationType(),

      company: CatalogModel.GetCompanySerializer(),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer1(),
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

      logo: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.number().required(),
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
