const Joi = require("joi");

class CatalogModel {
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

  static GetSearchWordsData() {
    return Joi.object({
      result: Joi.any(),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      meta: Joi.any(),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

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

  static AutocompletePageAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      params: Joi.any(),

      query: Joi.any(),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

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
      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

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
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      price: Joi.any(),

      slug: Joi.string().allow(""),

      identifier: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number(),

      price: CatalogModel.Price(),

      min_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.GetProducts()),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
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
      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      name: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),
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

      tag: Joi.string().allow(""),

      title: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      guide: Joi.any(),

      name: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
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
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),
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

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
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
      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),
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
      key: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_default: Joi.boolean().required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

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
      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      default_key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

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
      compare: Joi.any(),

      detail: Joi.any(),

      variant: Joi.any(),

      similar: Joi.any(),
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
      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

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
      display: Joi.string().allow(""),

      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      map: Joi.any(),

      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
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

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize().required(),

      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

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
      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize(),

      priority: Joi.number().required(),

      subtitle: Joi.string().allow(""),

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

  static AppCatalogConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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

      config_id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),
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

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      id: Joi.string().allow(""),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.EntityConfiguration(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      max: Joi.number(),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      value: Joi.any().required(),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      currency_code: Joi.string().allow(""),

      selected_max: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

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

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
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
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
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
      is_active: Joi.boolean(),

      cron: Joi.any(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      action: CatalogModel.Action(),

      badge: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),
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

      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
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
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.SeoDetail(),

      modified_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      created_by: CatalogModel.UserInfo(),

      banners: CatalogModel.CollectionBanner().required(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: CatalogModel.CollectionImage().required(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow("").required(),

      published: Joi.boolean(),

      is_visible: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      cron: Joi.any(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      is_active: Joi.boolean(),

      cron: Joi.any(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      badge: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.SeoDetail(),

      modified_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.CollectionBanner(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      logo: CatalogModel.CollectionImage(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      published: Joi.boolean(),

      is_visible: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),
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

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      highlights: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      sellable: Joi.boolean(),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      promo_meta: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      items_not_updated: Joi.array().items(Joi.number()),

      message: Joi.string().allow(""),
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
      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string().allow(""),
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

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      created_by: Joi.any(),

      store_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.number().required(),

      created_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

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
      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),
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
      store_code: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      manager: Joi.any(),

      timing: Joi.any(),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      indexing: Joi.boolean().required(),

      priority: Joi.number(),

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
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      format: Joi.string().allow(""),
    });
  }

  static GenderDetail() {
    return Joi.object({
      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),

      name: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

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
      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      search: Joi.string().allow(""),

      priority_order: Joi.number(),

      item_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),

      page_size: Joi.number(),

      modified_on: Joi.string().allow(""),

      page_no: Joi.number(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      _cls: Joi.string().allow(""),

      is_active: Joi.boolean(),

      platforms: Joi.any(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

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

  static UserDetail() {
    return Joi.object({
      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      created_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      priority_order: Joi.number().required(),

      verified_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      slug: Joi.any(),

      _cls: Joi.any(),

      created_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.any().required(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_physical: Joi.boolean().required(),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_archived: Joi.boolean(),

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
      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      logo: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      product_publish: Joi.any(),

      tags: Joi.any(),

      media: Joi.any(),

      is_active: Joi.any(),

      highlights: Joi.any(),

      hsn_code: Joi.any(),

      return_config: Joi.any(),

      sizes: Joi.any(),

      no_of_boxes: Joi.any(),

      item_type: Joi.any(),

      custom_order: Joi.any(),

      country_of_origin: Joi.any(),

      trader_type: Joi.any(),

      product_group_tag: Joi.any(),

      command: Joi.any(),

      variants: Joi.any(),

      is_dependent: Joi.any(),

      description: Joi.any(),

      teaser_tag: Joi.any(),

      currency: Joi.any(),

      item_code: Joi.any(),

      slug: Joi.any(),

      size_guide: Joi.any(),

      multi_size: Joi.any(),

      brand_uid: Joi.any(),

      trader: Joi.any(),

      short_description: Joi.any(),

      category_slug: Joi.any(),

      name: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),
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
      created_by: CatalogModel.VerifiedBy(),

      trigger_on: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      seller_id: Joi.number(),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),
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
      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
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
      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      created_by: Joi.any(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      slug: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      level: Joi.number().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      uid: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),
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

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow(""),

      level: Joi.number().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Brand() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Logo(),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      product_publish: CatalogModel.ProductPublish(),

      tags: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      is_active: Joi.boolean(),

      is_expirable: Joi.boolean(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_set: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      company_id: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      category_uid: Joi.number(),

      variant_media: Joi.any(),

      image_nature: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      item_type: Joi.string().allow(""),

      custom_order: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      attributes: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      variants: Joi.any(),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      _custom_json: Joi.any(),

      pending: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      brand: CatalogModel.Brand(),

      teaser_tag: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantityResponse(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_sizes: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      category: Joi.any(),

      primary_color: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      moq: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      slug: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      variant_group: Joi.any(),

      brand_uid: Joi.number(),

      multi_size: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()),

      short_description: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),
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
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
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

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      product_publish: CatalogModel.ProductPublish1(),

      tags: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      is_active: Joi.boolean(),

      is_set: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      company_id: Joi.number().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      return_config: CatalogModel.ReturnConfig().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      uid: Joi.number().allow(null),

      no_of_boxes: Joi.number(),

      variant_media: Joi.any(),

      item_type: Joi.string().allow("").required(),

      attributes: Joi.any(),

      custom_order: CatalogModel.CustomOrder(),

      requester: Joi.string().allow(""),

      country_of_origin: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      variants: Joi.any(),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      _custom_json: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      teaser_tag: CatalogModel.TeaserTag(),

      net_quantity: CatalogModel.NetQuantity(),

      currency: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      item_code: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      variant_group: Joi.any(),

      change_request_id: Joi.any(),

      brand_uid: Joi.number().required(),

      multi_size: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      short_description: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

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
      tags: Joi.array().items(Joi.string().allow("")),

      details: CatalogModel.AttributeMasterDetails().required(),

      modified_by: Joi.any(),

      raw_key: Joi.string().allow(""),

      variant: Joi.boolean(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      synonyms: Joi.any(),

      description: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      schema: CatalogModel.AttributeMaster().required(),

      slug: Joi.string().allow("").required(),

      is_nested: Joi.boolean(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      item_weight_unit_of_measure: Joi.any().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_width: Joi.number().required(),

      item_height: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      size: Joi.any().required(),

      item_weight: Joi.number().required(),

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
      product_publish: CatalogModel.ProductPublished(),

      tags: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      is_active: Joi.boolean(),

      is_expirable: Joi.boolean(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_set: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      company_id: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      category_uid: Joi.number(),

      variant_media: Joi.any(),

      image_nature: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      item_type: Joi.string().allow(""),

      custom_order: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      attributes: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      variants: Joi.any(),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      _custom_json: Joi.any(),

      pending: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      brand: CatalogModel.Brand(),

      teaser_tag: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantityResponse(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_sizes: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      category: Joi.any(),

      primary_color: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      moq: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      slug: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      variant_group: Joi.any(),

      brand_uid: Joi.number(),

      multi_size: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()),

      short_description: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),
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

      user_id: Joi.string().allow(""),

      full_name: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      created_by: CatalogModel.UserDetail1(),

      total: Joi.number(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail1(),

      modified_on: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),
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

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      failed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number().required(),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      file_path: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      data: Joi.array().items(Joi.any()).required(),

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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      created_by: CatalogModel.UserCommon(),

      total: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      retry: Joi.number(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number(),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),
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

  static InventoryResponse() {
    return Joi.object({
      sellable_quantity: Joi.number(),

      price_transfer: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      store: Joi.any(),

      item_id: Joi.number(),

      identifiers: Joi.any(),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),

      quantity: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.any().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      price_transfer: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      price: Joi.number(),

      set: CatalogModel.InventorySet(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      item_width: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      is_set: Joi.boolean(),

      item_height: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      size: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_weight: Joi.number().allow(null),

      item_length: Joi.number().allow(null),
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

      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      length: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      effective: Joi.number().required(),

      transfer: Joi.number().required(),
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

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      weight: CatalogModel.WeightResponse().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      company: CatalogModel.CompanyMeta().required(),

      is_active: Joi.boolean(),

      set: CatalogModel.InventorySet(),

      modified_by: CatalogModel.UserSerializer(),

      fynd_item_code: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig1(),

      uid: Joi.string().allow("").required(),

      dimension: CatalogModel.DimensionResponse().required(),

      created_by: CatalogModel.UserSerializer(),

      country_of_origin: Joi.string().allow("").required(),

      price: CatalogModel.PriceMeta().required(),

      trace_id: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number().required(),

      tax_identifier: Joi.any(),

      item_id: Joi.number().required(),

      _custom_json: Joi.any(),

      quantities: CatalogModel.Quantities(),

      brand: CatalogModel.BrandMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      identifier: Joi.any().required(),

      fynd_meta: Joi.any(),

      added_on_store: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      fragile: Joi.boolean().required(),

      track_inventory: Joi.boolean(),

      meta: Joi.any().allow(null),

      trader: Joi.array().items(CatalogModel.Trader1()),

      size: Joi.string().allow("").required(),

      raw_meta: Joi.any(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
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

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      effective: Joi.number(),

      transfer: Joi.number(),
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

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
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

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetInventories() {
    return Joi.object({
      weight: CatalogModel.WeightResponse1(),

      tags: Joi.array().items(Joi.string().allow("")),

      company: CatalogModel.CompanyMeta1(),

      modified_by: CatalogModel.UserSerializer(),

      id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig2(),

      uid: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      created_by: CatalogModel.UserSerializer(),

      country_of_origin: Joi.string().allow(""),

      platforms: Joi.any(),

      price: CatalogModel.PriceArticle(),

      trace_id: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      seller_identifier: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      total_quantity: Joi.number(),

      item_id: Joi.number(),

      quantities: CatalogModel.QuantitiesArticle(),

      brand: CatalogModel.BrandMeta1(),

      inventory_updated_on: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      identifier: Joi.any(),

      expiration_date: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      track_inventory: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      size: Joi.string().allow(""),
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

      total: Joi.number(),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

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
      item_weight_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number(),

      expiration_date: Joi.string().allow(""),

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
      trigger_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),
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
      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

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
      store_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number().allow(null),

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

  static HsnUpsert() {
    return Joi.object({
      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      tax1: Joi.number().required(),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      company_id: Joi.number().required(),

      threshold1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_mrp: Joi.boolean().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax1: Joi.number(),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      company_id: Joi.number(),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),
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

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      size: Joi.number(),

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
      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

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
      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

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

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow(""),

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
      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      highlights: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      uid: Joi.number(),

      item_type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      product_online_date: Joi.string().allow(""),

      rating: Joi.number(),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      rating_count: Joi.number(),

      type: Joi.string().allow(""),

      color: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      promo_meta: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),

      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),
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

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignment(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),
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

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      quantity: Joi.number().required(),

      index: Joi.number(),

      price_marked: Joi.number(),

      group_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      meta: Joi.any(),

      item_id: Joi.number().required(),

      _id: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      company_id: Joi.number(),

      s_city: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      status: Joi.boolean().required(),

      store_pincode: Joi.number(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer1(),

      verified_by: CatalogModel.UserSerializer1(),

      modified_by: CatalogModel.UserSerializer1(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      enabled: Joi.boolean(),

      password: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
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

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      integration_type: CatalogModel.LocationIntegrationType(),

      company: CatalogModel.GetCompanySerializer(),

      modified_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer2(),

      manager: CatalogModel.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.GetAddressSerializer().required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      documents: Joi.array().items(CatalogModel.Document()),

      warnings: Joi.any(),

      code: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      verified_by: CatalogModel.UserSerializer2(),

      phone_number: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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

      app_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

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
