const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      result: Joi.any(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

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
      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),

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
      query: Joi.any().required(),

      sort_on: Joi.string().allow("").required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

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
      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

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

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      type: Joi.string().allow(""),

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

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
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
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      slug: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      max_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      price: CatalogModel.Price(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      company_id: Joi.number(),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
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
      unit: Joi.string().allow(""),

      headers: Joi.any(),

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
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      guide: CatalogModel.Guide(),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      brand_id: Joi.number(),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      guide: Joi.any(),
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
      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_gift: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),

      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),
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

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      moq: CatalogModel.MOQData(),
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

  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AttributeDetailsGroup() {
    return Joi.object({
      unit: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

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
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

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
      detail: Joi.any(),

      variant: Joi.any(),

      compare: Joi.any(),

      similar: Joi.any(),
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

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

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
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      subtitle: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),
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
      start: Joi.number(),

      end: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      value_config: CatalogModel.ConfigurationListingFilterValue(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

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
      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      created_on: Joi.string().allow(""),

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

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),
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
      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

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

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      is_selected: Joi.boolean().required(),

      value: Joi.any().required(),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      selected_max: Joi.number(),

      selected_min: Joi.number(),

      display_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      query_format: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
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

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      is_active: Joi.boolean(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      action: CatalogModel.Action(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
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

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      landscape: CatalogModel.CollectionImage().required(),

      portrait: CatalogModel.CollectionImage().required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      created_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: CatalogModel.CollectionSchedule(),

      badge: CatalogModel.CollectionBadge(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      _locale_language: Joi.any(),

      type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_visible: Joi.boolean(),

      published: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      modified_by: CatalogModel.UserInfo(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      badge: Joi.any(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      is_active: Joi.boolean(),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      is_active: Joi.boolean(),

      priority: Joi.number(),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: CatalogModel.CollectionSchedule(),

      badge: CatalogModel.CollectionBadge(),

      allow_sort: Joi.boolean(),

      meta: Joi.any(),

      _locale_language: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_visible: Joi.boolean(),

      type: Joi.string().allow(""),

      published: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      modified_by: CatalogModel.UserInfo(),
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

  static ProductBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      uid: Joi.number(),
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
      effective: CatalogModel.Price1(),

      marked: CatalogModel.Price1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      name: Joi.string().allow(""),

      sellable: Joi.boolean(),

      rating: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      teaser_tag: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),
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
      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      out_of_stock_count: Joi.number(),

      sellable_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_articles: Joi.number(),

      name: Joi.string().allow(""),

      article_freshness: Joi.number(),

      available_articles: Joi.number(),

      total_sizes: Joi.number(),

      available_sizes: Joi.number(),
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
      company_id: Joi.number(),

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      company_id: Joi.number().required(),

      modified_on: Joi.number().required(),

      created_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      modified_by: Joi.any(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),
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

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      company_id: Joi.number(),

      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

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
      brand: Joi.number(),

      company: Joi.string().allow(""),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      timing: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      address: Joi.any(),

      manager: Joi.any(),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      mandatory: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
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

      indexing: Joi.boolean().required(),

      priority: Joi.number(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      schema: CatalogModel.AttributeMaster(),

      departments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      name: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      filters: CatalogModel.AttributeMasterFilter(),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),

      errors: Joi.any(),

      meta: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      search: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_no: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      page_size: Joi.number(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      item_type: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),

      errors: Joi.any(),

      meta: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      platforms: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

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
      modified_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail(),

      _cls: Joi.any(),

      name: Joi.any().required(),

      priority_order: Joi.number().required(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.any(),

      logo: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      _custom_json: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),
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
      brand_uid: Joi.any(),

      item_code: Joi.any(),

      multi_size: Joi.any(),

      is_active: Joi.any(),

      name: Joi.any(),

      country_of_origin: Joi.any(),

      is_dependent: Joi.any(),

      variants: Joi.any(),

      currency: Joi.any(),

      highlights: Joi.any(),

      sizes: Joi.any(),

      command: Joi.any(),

      hsn_code: Joi.any(),

      teaser_tag: Joi.any(),

      no_of_boxes: Joi.any(),

      media: Joi.any(),

      custom_order: Joi.any(),

      return_config: Joi.any(),

      trader_type: Joi.any(),

      slug: Joi.any(),

      tags: Joi.any(),

      description: Joi.any(),

      product_publish: Joi.any(),

      product_group_tag: Joi.any(),

      short_description: Joi.any(),

      trader: Joi.any(),

      size_guide: Joi.any(),

      category_slug: Joi.any(),

      item_type: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

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
      departments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),
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
      hsn_code: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.array().items(Joi.string().allow("")),
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
      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      seller_id: Joi.number(),

      status: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      completed_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      id: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static Media2() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),

      l1: Joi.number().required(),

      l2: Joi.number().required(),
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
      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      priority: Joi.number(),

      is_active: Joi.boolean().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      uid: Joi.number(),
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

  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

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

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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

  static Product() {
    return Joi.object({
      brand_uid: Joi.number(),

      verified_by: CatalogModel.VerifiedBy(),

      created_by: Joi.any(),

      item_code: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      is_active: Joi.boolean(),

      variant_group: Joi.any(),

      tax_identifier: Joi.any(),

      brand: CatalogModel.Brand(),

      name: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      id: Joi.string().allow(""),

      variants: Joi.any(),

      is_set: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      all_sizes: Joi.array().items(Joi.any()),

      sizes: Joi.array().items(Joi.any()),

      variant_media: Joi.any(),

      hsn_code: Joi.string().allow(""),

      moq: Joi.any(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      teaser_tag: Joi.any(),

      no_of_boxes: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      return_config: CatalogModel.ReturnConfigResponse(),

      image_nature: Joi.string().allow(""),

      category: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      departments: Joi.array().items(Joi.number()),

      product_publish: CatalogModel.ProductPublished(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      modified_by: Joi.any(),

      pending: Joi.string().allow(""),

      trader: Joi.array().items(Joi.any()),

      size_guide: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      uid: Joi.number(),

      category_slug: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      item_type: Joi.string().allow(""),

      category_uid: Joi.number(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
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

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
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

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      brand_uid: Joi.number().required(),

      item_code: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      is_active: Joi.boolean(),

      multi_size: Joi.boolean(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      name: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      variants: Joi.any(),

      is_set: Joi.boolean(),

      requester: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      change_request_id: Joi.any(),

      sizes: Joi.array().items(Joi.any()).required(),

      variant_media: Joi.any(),

      company_id: Joi.number().required(),

      teaser_tag: CatalogModel.TeaserTag(),

      no_of_boxes: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      action: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      return_config: CatalogModel.ReturnConfig().required(),

      slug: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      template_tag: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      product_publish: CatalogModel.ProductPublish(),

      net_quantity: CatalogModel.NetQuantity(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any().required(),

      short_description: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      size_guide: Joi.string().allow(""),

      uid: Joi.number().allow(null),

      category_slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow("").required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

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
      created_by: Joi.any(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      unit: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      modified_by: Joi.any(),

      details: CatalogModel.AttributeMasterDetails().required(),

      variant: Joi.boolean(),
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

      item_weight_unit_of_measure: Joi.any().required(),

      item_weight: Joi.number().required(),

      item_height: Joi.number().required(),

      size: Joi.any().required(),

      item_width: Joi.number().required(),

      item_length: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),
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

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),

      template_tag: Joi.string().allow(""),

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
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number().required(),

      created_by: CatalogModel.UserInfo1(),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      failed: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      cancelled: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      total: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

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

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      failed: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      cancelled: Joi.number(),

      tracking_url: Joi.string().allow(""),

      retry: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

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

      user: Joi.any().required(),

      url: Joi.string().allow("").required(),
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

  static InventoryResponse() {
    return Joi.object({
      currency: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      identifiers: Joi.any(),

      price: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      price_transfer: Joi.number(),

      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      price_effective: Joi.number(),

      store: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      uid: Joi.number(),
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
      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      item_length: Joi.number().allow(null),

      price: Joi.number(),

      item_height: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      size: Joi.any().required(),

      price_transfer: Joi.number().allow(null),

      quantity: Joi.number().required(),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      item_width: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),
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

  static DimensionResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),

      updated_at: Joi.string().allow(""),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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

  static QuantityBase() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static Quantities() {
    return Joi.object({
      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      manufacturer: CatalogModel.ManufacturerResponse().required(),

      created_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

      fynd_meta: Joi.any(),

      tax_identifier: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      size: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      added_on_store: Joi.string().allow(""),

      is_set: Joi.boolean(),

      fragile: Joi.boolean().required(),

      total_quantity: Joi.number().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      meta: Joi.any().allow(null),

      fynd_article_code: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig1(),

      item_id: Joi.number().required(),

      weight: CatalogModel.WeightResponse().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      company: CatalogModel.CompanyMeta().required(),

      _custom_json: Joi.any(),

      track_inventory: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      expiration_date: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      set: CatalogModel.InventorySet(),

      raw_meta: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),
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

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      length: Joi.number(),

      height: Joi.number(),

      width: Joi.number(),
    });
  }

  static DateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),

      tp_notes: Joi.any(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

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

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      manufacturer: CatalogModel.ManufacturerResponse1(),

      created_by: CatalogModel.UserSerializer(),

      tax_identifier: Joi.any(),

      brand: CatalogModel.BrandMeta1(),

      size: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      total_quantity: Joi.number(),

      dimension: CatalogModel.DimensionResponse1(),

      date_meta: CatalogModel.DateMeta(),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      return_config: CatalogModel.ReturnConfig2(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      weight: CatalogModel.WeightResponse1(),

      tags: Joi.array().items(Joi.string().allow("")),

      company: CatalogModel.CompanyMeta1(),

      track_inventory: Joi.boolean(),

      platforms: Joi.any(),

      trace_id: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      expiration_date: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),
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
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      failed: Joi.number(),

      succeed: Joi.number(),

      modified_by: Joi.any(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

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
      total_quantity: Joi.number(),

      currency: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      store_code: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
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
      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),
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
      total_quantity: Joi.number().allow(null),

      trace_id: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),
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
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number(),

      tax2: Joi.number(),

      threshold1: Joi.number(),

      id: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),

      item_total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),

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

      tax_on_mrp: Joi.boolean().required(),

      is_active: Joi.boolean(),

      threshold2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number().required(),

      tax2: Joi.number(),

      uid: Joi.number(),

      threshold1: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      hsn_code: Joi.string().allow("").required(),
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

      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      type: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),
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

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),
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
      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment(),

      meta: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      company_id: Joi.number(),

      channel_type: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),
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
      company_id: Joi.number(),

      store_pincode: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      status: Joi.boolean().required(),

      price_effective: Joi.number(),

      group_id: Joi.string().allow(""),

      item_id: Joi.number().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      meta: Joi.any(),

      size: Joi.string().allow("").required(),

      uid: Joi.string().allow(""),

      price_marked: Joi.number(),

      store_id: Joi.number(),

      index: Joi.number(),

      quantity: Joi.number().required(),

      _id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),
    });
  }

  static BrandItem() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

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

      priority_order: Joi.number(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

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
      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(Joi.any()),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),

      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      teaser_tag: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      similars: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
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

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
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
      open: Joi.boolean().required(),

      closing: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),
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
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),
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
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),
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

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_by: CatalogModel.UserSerializer1(),

      created_by: CatalogModel.UserSerializer1(),

      warnings: Joi.any(),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      stage: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      phone_number: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      address: CatalogModel.GetAddressSerializer().required(),

      documents: Joi.array().items(CatalogModel.Document()),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      company: CatalogModel.GetCompanySerializer(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      manager: CatalogModel.LocationManagerSerializer(),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
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

      name: Joi.string().allow(""),

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

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
