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
      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      result: Joi.any(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),
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
      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),
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

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),
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
      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      created_by: Joi.any(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      modified_by: Joi.any(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      quantity: Joi.number(),

      uid: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      price: Joi.any(),

      slug: Joi.string().allow(""),

      identifier: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      allow_remove: Joi.boolean(),

      price: CatalogModel.Price(),

      min_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      product_uid: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      logo: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      choice: Joi.string().allow(""),
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
      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      title: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      company_id: Joi.number(),

      guide: Joi.any(),

      title: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: Joi.any(),
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

      increment_unit: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.any().required(),

      value: Joi.any().required(),
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
      minimum: Joi.number(),

      increment_unit: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      moq: CatalogModel.ApplicationItemMOQ(),
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
      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

      priority: Joi.number().required(),

      unit: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),
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

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
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

      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),

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
      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),
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
      sort: Joi.string().allow(""),

      value: Joi.string().allow(""),

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
      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      priority: Joi.number().required(),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),
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
      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      priority: Joi.number().required(),

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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
      created_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),
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

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),
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

      id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.EntityConfiguration(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      value: Joi.any().required(),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      min: Joi.number(),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      selected_min: Joi.number(),

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

      value: Joi.string().allow(""),

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

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
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
      _schedule: Joi.any(),

      cron: Joi.any(),

      priority: Joi.number(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),
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
      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

  static CreateCollection() {
    return Joi.object({
      _schedule: CatalogModel.CollectionSchedule(),

      published: Joi.boolean(),

      priority: Joi.number(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      seo: CatalogModel.SeoDetail(),

      sort_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo(),

      banners: CatalogModel.CollectionBanner().required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      _schedule: Joi.any(),

      cron: Joi.any(),

      priority: Joi.number(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.BannerImage(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      _schedule: Joi.any(),

      cron: Joi.any(),

      priority: Joi.number(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      description: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      _schedule: CatalogModel.CollectionSchedule(),

      published: Joi.boolean(),

      priority: Joi.number(),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      seo: CatalogModel.SeoDetail(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow(""),

      _locale_language: Joi.any(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      uid: Joi.number(),

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

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

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

  static ProductListingDetail() {
    return Joi.object({
      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      sellable: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      promo_meta: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      color: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),
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
      out_of_stock_count: Joi.number(),

      count: Joi.number(),

      sellable_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      available_sizes: Joi.number(),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),

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
      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_on: Joi.number().required(),

      created_on: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      store_ids: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),

      enabled: Joi.boolean().required(),

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

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      company_id: Joi.number(),

      brand_name: Joi.string().allow(""),

      total_article: Joi.number(),

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

      modified_on: Joi.string().allow(""),

      timing: Joi.any(),

      manager: Joi.any(),

      uid: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      address: Joi.any(),

      store_code: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      company_id: Joi.number(),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static AttributeSchemaRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
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
      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),

      is_nested: Joi.boolean(),

      id: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      name: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      template_slug: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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

      status: Joi.number(),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      errors: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      page_no: Joi.number(),

      search: Joi.string().allow(""),

      priority_order: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_size: Joi.number(),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),
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

      status: Joi.number(),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      platforms: Joi.any(),

      uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

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

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      modified_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      is_active: Joi.boolean(),

      name: Joi.any().required(),

      _cls: Joi.any(),

      created_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      created_by: Joi.any(),
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
      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      is_dependent: Joi.any(),

      no_of_boxes: Joi.any(),

      teaser_tag: Joi.any(),

      short_description: Joi.any(),

      variants: Joi.any(),

      product_group_tag: Joi.any(),

      hsn_code: Joi.any(),

      media: Joi.any(),

      highlights: Joi.any(),

      size_guide: Joi.any(),

      brand_uid: Joi.any(),

      is_active: Joi.any(),

      trader_type: Joi.any(),

      name: Joi.any(),

      custom_order: Joi.any(),

      tags: Joi.any(),

      currency: Joi.any(),

      category_slug: Joi.any(),

      country_of_origin: Joi.any(),

      item_type: Joi.any(),

      item_code: Joi.any(),

      return_config: Joi.any(),

      description: Joi.any(),

      trader: Joi.any(),

      multi_size: Joi.any(),

      sizes: Joi.any(),

      command: Joi.any(),

      slug: Joi.any(),

      product_publish: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      title: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      filters: Joi.any(),

      task_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPartialExportRequest() {
    return Joi.object({
      status: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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

      l2: Joi.number().required(),

      l1: Joi.number().required(),
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

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      uid: Joi.number(),

      id: Joi.string().allow(""),

      priority: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),
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

      priority: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

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

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

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

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      is_dependent: Joi.boolean(),

      category: Joi.any(),

      brand: CatalogModel.Brand(),

      no_of_boxes: Joi.number(),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      variants: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      moq: Joi.any(),

      hsn_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      created_by: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      primary_color: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      variant_media: Joi.any(),

      brand_uid: Joi.number(),

      variant_group: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_active: Joi.boolean(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      custom_order: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      category_slug: Joi.string().allow(""),

      color: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      item_type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      return_config: CatalogModel.ReturnConfigResponse(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      multi_size: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      all_sizes: Joi.array().items(Joi.any()),

      modified_by: Joi.any(),

      pending: Joi.string().allow(""),

      company_id: Joi.number(),

      departments: Joi.array().items(Joi.number()),

      tax_identifier: Joi.any(),

      slug: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      is_expirable: Joi.boolean(),
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

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      is_dependent: Joi.boolean(),

      no_of_boxes: Joi.number(),

      teaser_tag: CatalogModel.TeaserTag(),

      short_description: Joi.string().allow(""),

      variants: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      change_request_id: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      uid: Joi.number().allow(null),

      action: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      variant_media: Joi.any(),

      brand_uid: Joi.number().required(),

      variant_group: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      is_active: Joi.boolean(),

      attributes: Joi.any(),

      name: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      category_slug: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      item_type: Joi.string().allow("").required(),

      item_code: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      _custom_json: Joi.any(),

      requester: Joi.string().allow(""),

      description: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      multi_size: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      slug: Joi.string().allow("").required(),

      product_publish: CatalogModel.ProductPublish1(),

      bulk_job_id: Joi.string().allow(""),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),
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
      variant: Joi.boolean(),

      raw_key: Joi.string().allow(""),

      created_by: Joi.any(),

      details: CatalogModel.AttributeMasterDetails().required(),

      is_nested: Joi.boolean(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      schema: CatalogModel.AttributeMaster().required(),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_by: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      slug: Joi.string().allow("").required(),

      filters: CatalogModel.AttributeMasterFilter().required(),
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

      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static AllSizes() {
    return Joi.object({
      size: Joi.any().required(),

      item_weight: Joi.number().required(),

      item_height: Joi.number().required(),

      item_length: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),

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
      is_dependent: Joi.boolean(),

      category: Joi.any(),

      brand: CatalogModel.Brand(),

      no_of_boxes: Joi.number(),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      variants: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_set: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      moq: Joi.any(),

      hsn_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      created_by: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      primary_color: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      variant_media: Joi.any(),

      brand_uid: Joi.number(),

      variant_group: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_active: Joi.boolean(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      custom_order: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      category_slug: Joi.string().allow(""),

      color: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      item_type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      return_config: CatalogModel.ReturnConfigResponse(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      multi_size: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      all_sizes: Joi.array().items(Joi.any()),

      modified_by: Joi.any(),

      pending: Joi.string().allow(""),

      company_id: Joi.number(),

      departments: Joi.array().items(Joi.number()),

      tax_identifier: Joi.any(),

      slug: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      is_expirable: Joi.boolean(),
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
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      created_by: CatalogModel.UserDetail1(),
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
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      cancelled: Joi.number(),

      company_id: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed_records: Joi.array().items(Joi.any()),

      total: Joi.number(),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),
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
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      succeed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      failed: Joi.number(),

      retry: Joi.number(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

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
      quantity: Joi.number(),

      size: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      item_id: Joi.number(),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      price: Joi.number(),

      store: Joi.any(),

      sellable_quantity: Joi.number(),

      identifiers: Joi.any(),

      price_transfer: Joi.number(),
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

      quantity: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static InvSize() {
    return Joi.object({
      quantity: Joi.number().required(),

      size: Joi.any().required(),

      item_width: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      item_weight: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      item_length: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price: Joi.number(),

      expiration_date: Joi.string().allow(""),

      is_set: Joi.boolean(),

      price_transfer: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),
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

  static QuantityBase() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static Quantities() {
    return Joi.object({
      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      meta: Joi.any().allow(null),

      quantities: CatalogModel.Quantities(),

      fynd_meta: Joi.any(),

      expiration_date: Joi.string().allow(""),

      is_set: Joi.boolean(),

      track_inventory: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      added_on_store: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      is_active: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number().required(),

      price: CatalogModel.PriceMeta().required(),

      store: CatalogModel.StoreMeta().required(),

      fragile: Joi.boolean().required(),

      identifier: Joi.any().required(),

      country_of_origin: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig1(),

      seller_identifier: Joi.string().allow("").required(),

      dimension: CatalogModel.DimensionResponse().required(),

      _custom_json: Joi.any(),

      set: CatalogModel.InventorySet(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      weight: CatalogModel.WeightResponse().required(),

      total_quantity: Joi.number().required(),

      fynd_item_code: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      tax_identifier: Joi.any(),

      stage: Joi.string().allow(""),

      fynd_article_code: Joi.string().allow("").required(),
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

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      order_committed: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      marked: Joi.number(),

      transfer: Joi.number(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

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

  static DimensionResponse1() {
    return Joi.object({
      width: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),

      height: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      platforms: Joi.any(),

      size: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      quantities: CatalogModel.QuantitiesArticle(),

      expiration_date: Joi.string().allow(""),

      is_set: Joi.boolean(),

      track_inventory: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      store: CatalogModel.ArticleStoreResponse(),

      identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      seller_identifier: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      weight: CatalogModel.WeightResponse1(),

      total_quantity: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      date_meta: CatalogModel.DateMeta(),

      tax_identifier: Joi.any(),

      stage: Joi.string().allow(""),
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

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: Joi.any(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      failed: Joi.number(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

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
      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow("").allow(null),

      price_effective: Joi.number(),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      total_quantity: Joi.number(),

      price_marked: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price: Joi.number(),

      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      user: Joi.any(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      operators: Joi.string().allow("").required(),

      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow("").allow(null),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      status: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      task_id: Joi.string().allow("").required(),
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
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      seller_id: Joi.number().required(),

      filters: Joi.any(),

      task_id: Joi.string().allow("").required(),

      created_by: Joi.string().allow(""),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),

      stores: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      status: Joi.any(),

      type: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      cancelled_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      filters: CatalogModel.InventoryJobFilters().required(),

      task_id: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.InventoryExportFilter().required(),

      data: Joi.array().items(Joi.string().allow("")),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPartialExportRequest() {
    return Joi.object({
      status: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportCreateFilters() {
    return Joi.object({
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportCreateResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      status: Joi.any(),

      type: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      cancelled_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      filters: CatalogModel.InventoryExportCreateFilters().required(),

      task_id: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),
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
      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_id: Joi.number().required(),

      total_quantity: Joi.number().allow(null),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),
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
      hs2_code: Joi.string().allow("").allow(null).required(),

      tax1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      uid: Joi.number(),

      threshold1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      tax2: Joi.number(),

      threshold2: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      tax1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      threshold1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      company_id: Joi.number(),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax2: Joi.number(),

      threshold2: Joi.number(),
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

      threshold: Joi.number().required(),

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      created_by: Joi.any(),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      has_next: Joi.boolean(),

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
      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

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
      logo: CatalogModel.Media(),

      uid: Joi.number(),

      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      product_online_date: Joi.string().allow(""),

      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),

      type: Joi.string().allow("").required(),
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

      quantity: Joi.number(),

      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStore() {
    return Joi.object({
      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),
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

      quantity: Joi.number().required(),

      size: Joi.string().allow("").required(),

      uid: Joi.string().allow(""),

      item_id: Joi.number().required(),

      status: Joi.boolean().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      price_effective: Joi.number(),

      store_id: Joi.number(),

      store_pincode: Joi.number(),

      meta: Joi.any(),

      price_marked: Joi.number(),

      index: Joi.number(),

      _id: Joi.string().allow(""),

      company_id: Joi.number(),

      group_id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
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

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
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
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_by: CatalogModel.UserSerializer2(),

      verified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),
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
      manager: CatalogModel.LocationManagerSerializer(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      documents: Joi.array().items(CatalogModel.Document()),

      verified_by: CatalogModel.UserSerializer1(),

      integration_type: CatalogModel.LocationIntegrationType(),

      created_by: CatalogModel.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      display_name: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      phone_number: Joi.string().allow("").required(),

      store_type: Joi.string().allow(""),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      address: CatalogModel.GetAddressSerializer().required(),

      modified_by: CatalogModel.UserSerializer1(),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),
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

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),
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
