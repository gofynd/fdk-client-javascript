const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      result: Joi.any(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
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
      error: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

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
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      app_id: Joi.string().allow(""),
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

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
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

      query: Joi.any(),

      params: Joi.any(),

      url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),
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
      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),
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
      slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      uid: Joi.number(),

      price: Joi.any(),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number(),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      company_id: Joi.number(),

      meta: Joi.any(),

      logo: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),
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
      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      guide: CatalogModel.Guide(),

      company_id: Joi.number(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      guide: Joi.any(),

      created_by: Joi.any(),

      company_id: Joi.number(),
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

      alt_text: Joi.any(),

      moq: CatalogModel.MOQData(),

      is_cod: Joi.boolean(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
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
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      is_gift: Joi.boolean(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

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

  static GetConfigMetadataResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      total_count: Joi.number().required(),

      next: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),
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

      name: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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
      compare: Joi.any(),

      detail: Joi.any(),

      variant: Joi.any(),

      similar: Joi.any(),
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

      units: Joi.array().items(Joi.any()),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),
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

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),

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

  static ConfigurationProductConfig() {
    return Joi.object({
      size: CatalogModel.ProductSize(),

      is_active: Joi.boolean().required(),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

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
      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

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
      sort: Joi.string().allow(""),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      priority: Joi.number().required(),

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

  static ConfigurationListing() {
    return Joi.object({
      sort: CatalogModel.ConfigurationListingSort().required(),

      filter: CatalogModel.ConfigurationListingFilter().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      app_id: Joi.string().allow("").required(),
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
      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      app_id: Joi.string().allow("").required(),
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

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string().allow(""),

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

  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      display_format: Joi.string().allow(""),

      max: Joi.number(),

      value: Joi.any().required(),

      query_format: Joi.string().allow(""),

      min: Joi.number(),

      selected_max: Joi.number(),

      selected_min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      operators: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      description: Joi.string().allow(""),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),
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

      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),
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
      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
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

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      description: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage().required(),

      modified_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      published: Joi.boolean(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner().required(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      _schedule: CatalogModel.CollectionSchedule(),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      _locale_language: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      description: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      description: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      modified_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      published: Joi.boolean(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      is_active: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      _schedule: CatalogModel.CollectionSchedule(),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      _locale_language: Joi.any(),

      badge: CatalogModel.CollectionBadge(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      sellable: Joi.boolean(),

      description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating: Joi.number(),

      item_code: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      attributes: Joi.any(),

      product_online_date: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CollectionItem() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      priority: Joi.number(),
    });
  }

  static CollectionItemUpdate() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      items: Joi.array().items(CatalogModel.CollectionItem()),

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

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      sellable_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      available_articles: Joi.number(),
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
      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      company_id: Joi.number(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_by: Joi.any(),

      created_on: Joi.number().required(),

      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),
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

      brand_id: Joi.number(),

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
      company: Joi.string().allow(""),

      store: Joi.number(),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      manager: Joi.any(),

      timing: Joi.any(),

      modified_on: Joi.string().allow(""),

      address: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      company_id: Joi.number(),

      documents: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),
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
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      mandatory: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),
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

  static GenderDetail() {
    return Joi.object({
      slug: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      details: CatalogModel.AttributeMasterDetails(),

      filters: CatalogModel.AttributeMasterFilter(),

      description: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      logo: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

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
      status: Joi.number(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      errors: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      slug: Joi.string().allow(""),

      search: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      page_size: Joi.number(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer(),

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

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      _cls: Joi.string().allow(""),

      uid: Joi.number(),

      platforms: Joi.any(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

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

  static UserDetail() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      slug: Joi.any().required(),

      modified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      _cls: Joi.any(),

      uid: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      name: Joi.any().required(),

      _id: Joi.any(),

      synonyms: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      created_by: Joi.any(),

      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

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

  static Properties() {
    return Joi.object({
      description: Joi.any(),

      short_description: Joi.any(),

      product_publish: Joi.any(),

      brand_uid: Joi.any(),

      custom_order: Joi.any(),

      trader: Joi.any(),

      trader_type: Joi.any(),

      item_code: Joi.any(),

      tags: Joi.any(),

      teaser_tag: Joi.any(),

      is_dependent: Joi.any(),

      item_type: Joi.any(),

      name: Joi.any(),

      no_of_boxes: Joi.any(),

      variants: Joi.any(),

      size_guide: Joi.any(),

      multi_size: Joi.any(),

      country_of_origin: Joi.any(),

      slug: Joi.any(),

      category_slug: Joi.any(),

      is_active: Joi.any(),

      product_group_tag: Joi.any(),

      currency: Joi.any(),

      return_config: Joi.any(),

      highlights: Joi.any(),

      sizes: Joi.any(),

      hsn_code: Joi.any(),

      media: Joi.any(),

      command: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      type: Joi.string().allow(""),

      definitions: Joi.any(),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

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
      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

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

  static ProductDownloadItemsData() {
    return Joi.object({
      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),

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
      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      seller_id: Joi.number(),

      data: CatalogModel.ProductDownloadItemsData(),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      trigger_on: Joi.string().allow(""),
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

  static CategoryMappingValues() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      catalog_id: Joi.number(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      ajio: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),

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

  static Category() {
    return Joi.object({
      slug: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      modified_on: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      uid: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      priority: Joi.number(),
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
      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      media: CatalogModel.Media2(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
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

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),
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

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      is_image_less_product: Joi.boolean(),

      description: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      created_by: Joi.any(),

      is_set: Joi.boolean(),

      brand_uid: Joi.number(),

      id: Joi.string().allow(""),

      custom_order: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      modified_by: Joi.any(),

      item_code: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      verified_by: CatalogModel.VerifiedBy(),

      teaser_tag: Joi.any(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      stage: Joi.string().allow(""),

      category_uid: Joi.number(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      variants: Joi.any(),

      is_physical: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      size_guide: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      variant_group: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      category_slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      primary_color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      is_expirable: Joi.boolean(),

      moq: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      variant_media: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),
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

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      change_request_id: Joi.any(),

      is_image_less_product: Joi.boolean(),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish1(),

      action: Joi.string().allow(""),

      is_set: Joi.boolean(),

      brand_uid: Joi.number().required(),

      custom_order: CatalogModel.CustomOrder(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      item_code: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      teaser_tag: CatalogModel.TeaserTag(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      item_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      no_of_boxes: Joi.number(),

      variants: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      size_guide: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      category_slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      bulk_job_id: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      departments: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number().allow(null),

      variant_media: Joi.any(),
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
      page: CatalogModel.Page(),

      variants: Joi.array().items(CatalogModel.ProductVariants()),
    });
  }

  static AttributeMasterSerializer() {
    return Joi.object({
      filters: CatalogModel.AttributeMasterFilter().required(),

      description: Joi.string().allow(""),

      variant: Joi.boolean(),

      synonyms: Joi.any(),

      logo: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      modified_by: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      name: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      schema: CatalogModel.AttributeMaster().required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      is_nested: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      suggestion: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

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

      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static AllSizes() {
    return Joi.object({
      size: Joi.any().required(),

      item_height: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_weight: Joi.number().required(),

      item_length: Joi.number().required(),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      is_image_less_product: Joi.boolean(),

      description: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      created_by: Joi.any(),

      is_set: Joi.boolean(),

      brand_uid: Joi.number(),

      id: Joi.string().allow(""),

      custom_order: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      modified_by: Joi.any(),

      item_code: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      verified_by: CatalogModel.VerifiedBy(),

      teaser_tag: Joi.any(),

      is_dependent: Joi.boolean(),

      attributes: Joi.any(),

      stage: Joi.string().allow(""),

      category_uid: Joi.number(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      variants: Joi.any(),

      is_physical: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      size_guide: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      variant_group: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      category_slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      primary_color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      is_expirable: Joi.boolean(),

      moq: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      variant_media: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),
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
      modified_by: CatalogModel.UserDetail1(),

      created_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      total: Joi.number(),
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
      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      company_id: Joi.number().required(),

      total: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),
    });
  }

  static ProductTagsViewResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
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
      modified_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      retry: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      id: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      company_id: Joi.number(),

      total: Joi.number(),
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
      company_id: Joi.number(),

      url: Joi.string().allow("").required(),

      user: Joi.any().required(),
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

  static InventoryResponse() {
    return Joi.object({
      item_id: Joi.number(),

      size: Joi.string().allow(""),

      store: Joi.any(),

      quantity: Joi.number(),

      identifiers: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      price_transfer: Joi.number(),

      sellable_quantity: Joi.number(),

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

      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),
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

  static InvSize() {
    return Joi.object({
      store_code: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      size: Joi.any().required(),

      quantity: Joi.number().required(),

      item_height: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_width: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_weight: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      is_set: Joi.boolean(),

      price_transfer: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      price: Joi.number(),

      item_length: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),
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

      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),
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

      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

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

  static InventorySellerResponse() {
    return Joi.object({
      item_id: Joi.number().required(),

      store: CatalogModel.StoreMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      is_set: Joi.boolean(),

      price: CatalogModel.PriceMeta().required(),

      company: CatalogModel.CompanyMeta().required(),

      identifier: Joi.any().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      quantities: CatalogModel.Quantities(),

      fynd_article_code: Joi.string().allow("").required(),

      weight: CatalogModel.WeightResponse().required(),

      size: Joi.string().allow("").required(),

      dimension: CatalogModel.DimensionResponse().required(),

      modified_by: CatalogModel.UserSerializer(),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().required(),

      stage: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      fynd_item_code: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      created_by: CatalogModel.UserSerializer(),

      meta: Joi.any().allow(null),

      country_of_origin: Joi.string().allow("").required(),

      fynd_meta: Joi.any(),

      expiration_date: Joi.string().allow(""),

      is_active: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig1(),

      raw_meta: Joi.any(),

      fragile: Joi.boolean().required(),

      added_on_store: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),
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
      sellable: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      height: Joi.number(),

      length: Joi.number(),

      width: Joi.number(),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static DateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

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

  static GetInventories() {
    return Joi.object({
      store: CatalogModel.ArticleStoreResponse(),

      item_id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      is_set: Joi.boolean(),

      price: CatalogModel.PriceArticle(),

      company: CatalogModel.CompanyMeta1(),

      id: Joi.string().allow(""),

      identifier: Joi.any(),

      quantities: CatalogModel.QuantitiesArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      dimension: CatalogModel.DimensionResponse1(),

      weight: CatalogModel.WeightResponse1(),

      size: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      date_meta: CatalogModel.DateMeta(),

      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number(),

      stage: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      platforms: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      country_of_origin: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      track_inventory: Joi.boolean(),

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
      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      created_by: Joi.any(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      total: Joi.number(),
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

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      total_quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      user: Joi.any(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
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
      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

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
      data: Joi.array().items(CatalogModel.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      store_id: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().allow(null),

      price_effective: Joi.number(),

      trace_id: Joi.string().allow(""),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),

      meta: Joi.any(),

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

  static HsnCodesObject() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      threshold1: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),

      tax2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      id: Joi.string().allow(""),

      tax1: Joi.number(),

      company_id: Joi.number(),
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

      is_active: Joi.boolean(),

      threshold1: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_mrp: Joi.boolean().required(),

      uid: Joi.number(),

      threshold2: Joi.number(),

      tax2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number().required(),

      company_id: Joi.number().required(),
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
      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      country_code: Joi.string().allow("").required(),

      created_by: Joi.any(),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),

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

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

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

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),

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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating: Joi.number(),

      item_code: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      attributes: Joi.any(),

      product_online_date: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      type: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      uid: Joi.number(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),
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
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer1(),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
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
      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

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

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      password: Joi.string().allow(""),

      enabled: Joi.boolean(),

      username: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
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

      open: Joi.boolean().required(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      phone_number: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      modified_by: CatalogModel.UserSerializer2(),

      manager: CatalogModel.LocationManagerSerializer(),

      verified_by: CatalogModel.UserSerializer2(),

      integration_type: CatalogModel.LocationIntegrationType(),

      stage: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer2(),

      code: Joi.string().allow("").required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      address: CatalogModel.GetAddressSerializer().required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      uid: Joi.number(),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
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
      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.number().required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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
