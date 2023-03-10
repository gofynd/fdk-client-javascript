const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      result: Joi.any(),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
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

      meta: Joi.any(),

      status: Joi.number(),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),
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

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
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

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
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

      params: Joi.any(),

      query: Joi.any(),

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
      display: Joi.string().allow(""),

      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
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
      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),
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

  static LimitedProductData() {
    return Joi.object({
      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      attributes: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      price: Joi.any(),

      quantity: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetProducts() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      price: CatalogModel.Price(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.LimitedProductData(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      company_id: Joi.number(),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),
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
      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

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
      guide: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),
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
      description: Joi.any(),

      title: Joi.any(),
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

  static MetaFields() {
    return Joi.object({
      value: Joi.any().required(),

      key: Joi.any().required(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),
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
      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      next: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

      total_count: Joi.number().required(),
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
      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

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
      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

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

      filter_types: Joi.array().items(Joi.string().allow("")),

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

      compare: Joi.any(),

      variant: Joi.any(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: CatalogModel.MetaDataListingResponse(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),
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

      start: Joi.number(),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

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

  static ConfigurationListing() {
    return Joi.object({
      sort: CatalogModel.ConfigurationListingSort().required(),

      filter: CatalogModel.ConfigurationListingFilter().required(),
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

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      subtitle: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      key: Joi.string().allow("").required(),
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

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

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

  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),

      variant: CatalogModel.ConfigurationProductVariant().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),
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
      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),
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

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
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
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_max: Joi.number(),

      count: Joi.number(),

      value: Joi.any().required(),

      is_selected: Joi.boolean().required(),

      query_format: Joi.string().allow(""),

      min: Joi.number(),

      selected_min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),
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

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
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

      url: Joi.string().allow("").required(),

      meta: Joi.any(),
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

  static GetCollectionDetailNest() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      _schedule: Joi.any(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page(),
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
      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_visible: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      slug: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserInfo(),

      app_id: Joi.string().allow("").required(),

      _locale_language: Joi.any(),

      logo: CatalogModel.CollectionImage().required(),

      badge: CatalogModel.CollectionBadge(),

      banners: CatalogModel.CollectionBanner().required(),

      sort_on: Joi.string().allow(""),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      sort_on: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      _schedule: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      badge: Joi.any(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_visible: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      logo: CatalogModel.CollectionImage(),

      badge: CatalogModel.CollectionBadge(),

      banners: CatalogModel.CollectionBanner(),

      sort_on: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),
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
      tryouts: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      teaser_tag: Joi.any(),

      sellable: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
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
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_articles: Joi.number(),

      article_freshness: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),

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

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      modified_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      company_id: Joi.number().required(),

      modified_on: Joi.number().required(),

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
      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      total_article: Joi.number(),

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
      store: Joi.number(),

      brand: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      timing: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      manager: Joi.any(),

      modified_on: Joi.string().allow(""),

      address: Joi.any(),
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
      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
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

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),
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

  static GenderDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      schema: CatalogModel.AttributeMaster(),

      name: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      id: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug_key: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      priority_order: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      page_size: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      logo: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      page_no: Joi.number(),

      search: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      _cls: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      platforms: Joi.any(),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
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
      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      slug: Joi.any(),

      _cls: Joi.any(),

      priority_order: Joi.number().required(),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      name: Joi.any().required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").required(),

      _id: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      created_by: Joi.any(),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

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
      size_guide: Joi.any(),

      multi_size: Joi.any(),

      product_group_tag: Joi.any(),

      hsn_code: Joi.any(),

      is_dependent: Joi.any(),

      tags: Joi.any(),

      media: Joi.any(),

      description: Joi.any(),

      category_slug: Joi.any(),

      short_description: Joi.any(),

      name: Joi.any(),

      currency: Joi.any(),

      teaser_tag: Joi.any(),

      product_publish: Joi.any(),

      slug: Joi.any(),

      trader: Joi.any(),

      command: Joi.any(),

      brand_uid: Joi.any(),

      sizes: Joi.any(),

      is_active: Joi.any(),

      return_config: Joi.any(),

      item_type: Joi.any(),

      country_of_origin: Joi.any(),

      custom_order: Joi.any(),

      trader_type: Joi.any(),

      variants: Joi.any(),

      item_code: Joi.any(),

      no_of_boxes: Joi.any(),

      highlights: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      definitions: Joi.any(),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),
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
      description: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

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

      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      template_tags: Joi.any(),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      status: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      trigger_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

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
      data: Joi.array().items(Joi.any()),

      multivalue: Joi.boolean(),
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

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      priority: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      media: CatalogModel.Media2(),
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
      priority: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      media: CatalogModel.Media2(),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

  static ProductSchemaV2() {
    return Joi.object({
      size_guide: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      is_expirable: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.Brand(),

      departments: Joi.array().items(Joi.number()),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_group: Joi.any(),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      currency: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_image_less_product: Joi.boolean(),

      pending: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      category_uid: Joi.number(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      brand_uid: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      all_company_ids: Joi.array().items(Joi.number()),

      verified_by: CatalogModel.VerifiedBy(),

      category: Joi.any(),

      created_on: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      return_config: CatalogModel.ReturnConfigResponse(),

      item_type: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      custom_order: Joi.any(),

      attributes: Joi.any(),

      moq: Joi.any(),

      _custom_json: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      modified_on: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      created_by: Joi.any(),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      variants: Joi.any(),

      variant_media: Joi.any(),

      item_code: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      is_physical: Joi.boolean(),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
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
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),
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
      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      size_guide: Joi.string().allow(""),

      change_request_id: Joi.any(),

      multi_size: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()).required(),

      media: Joi.array().items(CatalogModel.Media1()),

      description: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      action: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      teaser_tag: CatalogModel.TeaserTag(),

      product_publish: CatalogModel.ProductPublish1(),

      is_set: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      brand_uid: Joi.number().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      is_active: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig().required(),

      item_type: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      attributes: Joi.any(),

      company_id: Joi.number().required(),

      _custom_json: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      template_tag: Joi.string().allow("").required(),

      variants: Joi.any(),

      variant_media: Joi.any(),

      item_code: Joi.string().allow("").required(),

      no_of_boxes: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      tax_identifier: CatalogModel.TaxIdentifier().required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

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
      raw_key: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      synonyms: Joi.any(),

      is_nested: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      description: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      suggestion: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

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
      data: CatalogModel.ProductSchemaV2(),
    });
  }

  static ValidateIdentifier() {
    return Joi.object({
      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_height: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_width: Joi.number().required(),

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
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      size_guide: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      is_expirable: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.Brand(),

      departments: Joi.array().items(Joi.number()),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_group: Joi.any(),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      currency: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_image_less_product: Joi.boolean(),

      pending: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      category_uid: Joi.number(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      brand_uid: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      all_company_ids: Joi.array().items(Joi.number()),

      verified_by: CatalogModel.VerifiedBy(),

      category: Joi.any(),

      created_on: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      return_config: CatalogModel.ReturnConfigResponse(),

      item_type: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      custom_order: Joi.any(),

      attributes: Joi.any(),

      moq: Joi.any(),

      _custom_json: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      modified_on: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      created_by: Joi.any(),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      variants: Joi.any(),

      variant_media: Joi.any(),

      item_code: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      is_physical: Joi.boolean(),
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
      full_name: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      succeed: Joi.number(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      total: Joi.number(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

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

  static UserInfo1() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      succeed: Joi.number(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      company_id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      custom_template_tag: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),
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

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      succeed: Joi.number(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      retry: Joi.number(),

      total: Joi.number(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),
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
      data: CatalogModel.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      price_effective: Joi.number(),

      store: Joi.any(),

      item_id: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      identifiers: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price: Joi.number(),

      price_transfer: Joi.number(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),
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

      uid: Joi.number(),

      brand_uid: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
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
      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price_effective: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_height: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_length: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      item_weight: Joi.number().allow(null),

      price: Joi.number(),

      price_transfer: Joi.number().allow(null),

      quantity: Joi.number().required(),

      size: Joi.any().required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

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

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      effective: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      fynd_item_code: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta().required(),

      fragile: Joi.boolean().required(),

      store: CatalogModel.StoreMeta().required(),

      item_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      modified_by: CatalogModel.UserSerializer(),

      total_quantity: Joi.number().required(),

      quantities: CatalogModel.Quantities(),

      is_set: Joi.boolean(),

      fynd_article_code: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      trace_id: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig1(),

      fynd_meta: Joi.any(),

      set: CatalogModel.InventorySet(),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      weight: CatalogModel.WeightResponse().required(),

      size: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta().required(),

      stage: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      identifier: Joi.any().required(),

      price: CatalogModel.PriceMeta().required(),

      added_on_store: Joi.string().allow(""),

      tax_identifier: Joi.any(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      width: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      length: Joi.number(),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default: Joi.boolean(),
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
      transfer: Joi.number(),

      currency: Joi.string().allow(""),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta1(),

      store: CatalogModel.ArticleStoreResponse(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      total_quantity: Joi.number(),

      quantities: CatalogModel.QuantitiesArticle(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      trace_id: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig2(),

      country_of_origin: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      size: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta1(),

      stage: Joi.string().allow(""),

      platforms: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      identifier: Joi.any(),

      date_meta: CatalogModel.DateMeta(),

      price: CatalogModel.PriceArticle(),

      tax_identifier: Joi.any(),
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
      succeed: Joi.number(),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      total: Joi.number(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),
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
      trace_id: Joi.string().allow("").allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      currency: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number(),

      store_code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      price: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      completed_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      request_params: Joi.any(),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
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
      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      request_params: Joi.any(),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),
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
      data: Joi.array().items(CatalogModel.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

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
      message: Joi.string().allow("").required(),

      errors: Joi.string().allow(""),
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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      threshold2: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax1: Joi.number(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),
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

      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      uid: Joi.number(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      tax1: Joi.number().required(),

      company_id: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),
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

      threshold: Joi.number().required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      item_total: Joi.number(),
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

      name: Joi.string().allow(""),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

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
      priority_order: Joi.number(),

      name: Joi.string().allow(""),

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

  static ThirdLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.Action(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.Action(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      teaser_tag: Joi.any(),

      slug: Joi.string().allow("").required(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      item_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),
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

      ignored_stores: Joi.array().items(Joi.number()),

      item_id: Joi.number().required(),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      query: CatalogModel.ArticleQuery(),

      article_assignment: CatalogModel.ArticleAssignment(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_identifier: Joi.string().allow(""),

      company_id: Joi.number(),
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
      price_effective: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      item_id: Joi.number().required(),

      price_marked: Joi.number(),

      uid: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      meta: Joi.any(),

      status: Joi.boolean().required(),

      index: Joi.number(),

      group_id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      company_id: Joi.number(),

      _id: Joi.string().allow(""),

      quantity: Joi.number().required(),

      size: Joi.string().allow("").required(),

      store_pincode: Joi.number(),

      store_id: Joi.number(),
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
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

  static GetAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      verified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),
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
      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      warnings: Joi.any(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      verified_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      manager: CatalogModel.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      address: CatalogModel.GetAddressSerializer().required(),

      code: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      stage: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      store_type: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),
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

      uid: Joi.number().required(),

      is_active: Joi.boolean(),

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
