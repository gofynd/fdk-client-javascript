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
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

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
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      query: Joi.any(),

      params: Joi.any(),

      type: Joi.string().allow(""),
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

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

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
      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      quantity: Joi.number(),

      identifier: Joi.any(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      auto_select: Joi.boolean(),

      product_uid: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      min_quantity: Joi.number(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.GetProducts()),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),
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
      tag: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      image: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

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
      tag: Joi.string().allow(""),

      guide: Joi.any(),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      value: Joi.any().required(),

      key: Joi.any().required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static MOQData() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
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

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.SEOData(),
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
      total_count: Joi.number().required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      unit: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),
    });
  }

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),
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

      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),
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
      variant: Joi.any(),

      compare: Joi.any(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

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
      end: Joi.number(),

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      value_config: CatalogModel.ConfigurationListingFilterValue(),

      logo: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      priority: Joi.number().required(),
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
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize().required(),

      name: Joi.string().allow("").required(),

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

  static ConfigurationProductConfig() {
    return Joi.object({
      logo: Joi.string().allow(""),

      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      subtitle: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      priority: Joi.number().required(),
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
      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

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
      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
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

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      value: Joi.any().required(),

      count: Joi.number(),

      display_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
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

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

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

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
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

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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
      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),
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

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      _locale_language: Joi.any(),

      type: Joi.string().allow("").required(),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      app_id: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      published: Joi.boolean(),

      name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      is_visible: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      badge: CatalogModel.CollectionBadge(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _schedule: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      _locale_language: Joi.any(),

      type: Joi.string().allow(""),

      meta: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      sort_on: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      published: Joi.boolean(),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      is_visible: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      badge: CatalogModel.CollectionBadge(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string().allow(""),

      key: Joi.string().allow(""),

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
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),
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
      action: CatalogModel.Action(),

      uid: Joi.number(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      rating: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      name: Joi.string().allow(""),

      sellable: Joi.boolean(),

      promo_meta: Joi.any(),

      teaser_tag: Joi.any(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),
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
      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

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
      data: CatalogModel.CrossSellingData(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),

      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      platform: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      enabled: Joi.boolean().required(),

      modified_on: Joi.number().required(),
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
      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
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

      store: Joi.number(),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      manager: Joi.any(),

      store_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      documents: Joi.array().items(Joi.any()),

      additional_contacts: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      address: Joi.any(),

      display_name: Joi.string().allow(""),

      timing: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.StoreDetail()),
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
      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      range: CatalogModel.AttributeSchemaRange(),

      mandatory: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),
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
      is_nested: Joi.boolean(),

      id: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      meta: CatalogModel.AttributeMasterMeta(),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      description: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),
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

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      search: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_no: Joi.number(),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      uid: Joi.number(),

      page_size: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      platforms: Joi.any(),

      uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),
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

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      _id: Joi.any(),

      slug: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      modified_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
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
      brand_uid: Joi.any(),

      item_type: Joi.any(),

      tags: Joi.any(),

      multi_size: Joi.any(),

      hsn_code: Joi.any(),

      sizes: Joi.any(),

      size_guide: Joi.any(),

      trader_type: Joi.any(),

      product_group_tag: Joi.any(),

      currency: Joi.any(),

      name: Joi.any(),

      custom_order: Joi.any(),

      product_publish: Joi.any(),

      country_of_origin: Joi.any(),

      media: Joi.any(),

      teaser_tag: Joi.any(),

      is_active: Joi.any(),

      return_config: Joi.any(),

      item_code: Joi.any(),

      no_of_boxes: Joi.any(),

      description: Joi.any(),

      is_dependent: Joi.any(),

      command: Joi.any(),

      short_description: Joi.any(),

      trader: Joi.any(),

      slug: Joi.any(),

      category_slug: Joi.any(),

      highlights: Joi.any(),

      variants: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      definitions: Joi.any(),

      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),
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
      tag: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),
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
      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
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
      task_id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      url: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      created_by: CatalogModel.VerifiedBy(),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

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
      catalog_id: Joi.number(),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      ajio: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),

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

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      l1: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static Category() {
    return Joi.object({
      tryouts: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      level: Joi.number().required(),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),

      id: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
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
      tryouts: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      uid: Joi.number(),
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

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
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
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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
      uid: Joi.number(),

      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),
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

  static Product() {
    return Joi.object({
      moq: Joi.any(),

      pending: Joi.string().allow(""),

      category: Joi.any(),

      brand_uid: Joi.number(),

      item_type: Joi.string().allow(""),

      variant_media: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      category_uid: Joi.number(),

      size_guide: Joi.string().allow(""),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      created_by: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      custom_order: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      verified_on: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      product_publish: CatalogModel.ProductPublished(),

      country_of_origin: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      all_company_ids: Joi.array().items(Joi.number()),

      media: Joi.array().items(CatalogModel.Media1()),

      teaser_tag: Joi.any(),

      is_active: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      stage: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      departments: Joi.array().items(Joi.number()),

      description: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      short_description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      trader: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      category_slug: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      is_set: Joi.boolean(),

      is_physical: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      variant_group: Joi.any(),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      variants: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      id: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
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
      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),

      returnable: Joi.boolean().required(),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      brand_uid: Joi.number().required(),

      item_type: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      bulk_job_id: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      action: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      product_publish: CatalogModel.ProductPublish(),

      country_of_origin: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      teaser_tag: CatalogModel.TeaserTag(),

      is_active: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig().required(),

      item_code: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      no_of_boxes: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      description: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      short_description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      attributes: Joi.any(),

      slug: Joi.string().allow("").required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      category_slug: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      variant_group: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      requester: Joi.string().allow(""),

      variants: Joi.any(),

      change_request_id: Joi.any(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

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
      unit: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      is_nested: Joi.boolean(),

      created_by: Joi.any(),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      variant: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails().required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      synonyms: Joi.any(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

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
      data: CatalogModel.Product(),
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
      item_weight_unit_of_measure: Joi.any().required(),

      item_width: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      item_length: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.any().required(),

      item_height: Joi.number().required(),
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
      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      cancelled: Joi.number(),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      total: Joi.number(),

      modified_on: Joi.string().allow(""),

      failed: Joi.number(),
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
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      tracking_url: Joi.string().allow(""),

      cancelled: Joi.number(),

      company_id: Joi.number().required(),

      failed_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      total: Joi.number(),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      custom_template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      failed: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),
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
      tracking_url: Joi.string().allow(""),

      cancelled: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      failed: Joi.number(),
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
      price_effective: Joi.number(),

      price_transfer: Joi.number(),

      identifiers: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      store: Joi.any(),

      size: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      uid: Joi.string().allow(""),

      price: Joi.number(),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      gtin_type: Joi.string().allow("").required(),

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
      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      price_effective: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price_transfer: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      store_code: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      item_length: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      quantity: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      size: Joi.any().required(),

      item_height: Joi.number().allow(null),

      price: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
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
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),
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
      updated_at: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static Quantities() {
    return Joi.object({
      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      marked: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
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

      trace_id: Joi.string().allow(""),

      item_id: Joi.number().required(),

      identifier: Joi.any().required(),

      raw_meta: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      meta: Joi.any().allow(null),

      track_inventory: Joi.boolean(),

      size: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      weight: CatalogModel.WeightResponse().required(),

      added_on_store: Joi.string().allow(""),

      fynd_meta: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      fragile: Joi.boolean().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      country_of_origin: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      fynd_item_code: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig1(),

      store: CatalogModel.StoreMeta().required(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      price: CatalogModel.PriceMeta().required(),

      _custom_json: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      tax_identifier: Joi.any(),

      expiration_date: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      fynd_article_code: Joi.string().allow("").required(),

      company: CatalogModel.CompanyMeta().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

      name: Joi.string().allow(""),
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

      unit: Joi.string().allow(""),

      width: Joi.number(),

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
      order_committed: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      total_quantity: Joi.number(),

      date_meta: CatalogModel.DateMeta(),

      trace_id: Joi.string().allow(""),

      item_id: Joi.number(),

      identifier: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      track_inventory: Joi.boolean(),

      size: Joi.string().allow(""),

      platforms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      weight: CatalogModel.WeightResponse1(),

      inventory_updated_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      dimension: CatalogModel.DimensionResponse1(),

      country_of_origin: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      store: CatalogModel.ArticleStoreResponse(),

      return_config: CatalogModel.ReturnConfig2(),

      uid: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      tax_identifier: Joi.any(),

      expiration_date: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      seller_identifier: Joi.string().allow(""),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      id: Joi.string().allow(""),
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
      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),
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
      price_effective: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      total_quantity: Joi.number(),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      seller_identifier: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      currency: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      request_params: Joi.any(),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      brand: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

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
      multivalues: Joi.boolean(),

      data: Joi.array().items(CatalogModel.FilerList()),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      price_effective: Joi.number(),

      total_quantity: Joi.number().allow(null),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),
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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      company_id: Joi.number(),

      tax1: Joi.number(),

      threshold2: Joi.number(),

      id: Joi.string().allow(""),

      tax2: Joi.number(),

      hsn_code: Joi.string().allow(""),
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

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      tax1: Joi.number().required(),

      threshold2: Joi.number(),

      tax2: Joi.number(),

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
      cess: Joi.number(),

      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      type: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      reporting_hsn: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      description: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      page: CatalogModel.PageResponse(),

      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),
    });
  }

  static BrandItem() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),
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
      priority_order: Joi.number(),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),
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

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      similars: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      name: Joi.string().allow(""),

      promo_meta: Joi.any(),

      teaser_tag: Joi.any(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow("").required(),

      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
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
      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_type: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      company_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

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
      price_effective: Joi.number(),

      _id: Joi.string().allow(""),

      store_pincode: Joi.number(),

      company_id: Joi.number(),

      price_marked: Joi.number(),

      s_city: Joi.string().allow(""),

      item_id: Joi.number().required(),

      quantity: Joi.number().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      index: Joi.number(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      uid: Joi.string().allow(""),

      store_id: Joi.number(),

      status: Joi.boolean().required(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
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

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
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

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),
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
      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer2(),

      company_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      modified_on: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      integration_type: CatalogModel.LocationIntegrationType(),

      phone_number: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      created_by: CatalogModel.UserSerializer1(),

      documents: Joi.array().items(CatalogModel.Document()),

      name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      verified_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      warnings: Joi.any(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      manager: CatalogModel.LocationManagerSerializer(),

      _custom_json: Joi.any(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      display_name: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),
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
      app_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      uid: Joi.number().required(),
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
