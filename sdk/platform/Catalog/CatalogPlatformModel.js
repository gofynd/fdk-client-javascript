const Joi = require("joi");

class CatalogModel {
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      error: Joi.string().allow(""),
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

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      result: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
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

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetSearchWordsData()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),
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
      params: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.any(),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      page: CatalogModel.AutocompletePageAction(),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
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
      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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
      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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

  static LimitedProductData() {
    return Joi.object({
      identifier: Joi.any(),

      uid: Joi.number(),

      short_description: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      price: Joi.any(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      quantity: Joi.number(),

      item_code: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      min_effective: Joi.number(),

      max_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_uid: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      price: CatalogModel.Price(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.GetProducts()),

      name: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      choice: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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
      guide: CatalogModel.Guide(),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      active: Joi.boolean(),

      created_by: Joi.any(),

      company_id: Joi.number(),

      modified_by: Joi.any(),
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
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      moq: CatalogModel.MOQData(),

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_gift: Joi.boolean(),
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

      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      total_count: Joi.number().required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

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

      display_type: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      key: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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
      units: Joi.array().items(Joi.any()),

      key: Joi.string().allow(""),

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

      similar: Joi.any(),

      variant: Joi.any(),

      detail: Joi.any(),
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
      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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
      display: Joi.string().allow(""),

      start: Joi.number(),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      value: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

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

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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

  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),

      variant: CatalogModel.ConfigurationProductVariant().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      listing: CatalogModel.ConfigurationListing(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      modified_by: Joi.any(),
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
      listing: CatalogModel.ConfigurationListing(),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      modified_by: Joi.any(),
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
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

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
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),

      selected_max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selected_min: Joi.number(),

      count: Joi.number(),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      value: Joi.any().required(),

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

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
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
      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

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

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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
      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),
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
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.SeoDetail(),

      modified_by: CatalogModel.UserInfo(),

      is_visible: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_facets: Joi.boolean(),

      _locale_language: Joi.any(),

      banners: CatalogModel.CollectionBanner().required(),

      type: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      logo: CatalogModel.CollectionImage().required(),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      published: Joi.boolean(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      allow_facets: Joi.boolean(),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.SeoDetail(),

      modified_by: CatalogModel.UserInfo(),

      is_visible: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      allow_facets: Joi.boolean(),

      _locale_language: Joi.any(),

      banners: CatalogModel.CollectionBanner(),

      type: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      description: Joi.string().allow(""),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      published: Joi.boolean(),
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

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),
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
      key: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      discount: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      promo_meta: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      name: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),

      sellable: Joi.boolean(),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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
      out_of_stock_count: Joi.number(),

      sellable_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      article_freshness: Joi.number(),

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
      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      opt_level: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      created_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      company_id: Joi.number().required(),

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

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      total_article: Joi.number(),

      company_id: Joi.number(),

      brand_name: Joi.string().allow(""),
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
      store: Joi.number(),

      company: Joi.string().allow(""),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      uid: Joi.number(),

      address: Joi.any(),

      manager: Joi.any(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      timing: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.StoreDetail()),
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

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      range: CatalogModel.AttributeSchemaRange(),

      mandatory: Joi.boolean(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      enabled_for_end_consumer: Joi.boolean(),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      slug: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),
    });
  }

  static ProductTemplateCategory() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateCategory()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      page_no: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      search: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_size: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      logo: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),
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
      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      slug: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      logo: Joi.string().allow("").required(),

      platforms: Joi.any(),
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
      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      _id: Joi.any(),

      uid: Joi.number(),

      verified_by: CatalogModel.UserDetail(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      _cls: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_physical: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      attributes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_by: Joi.any(),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductTemplate(),
    });
  }

  static TemplateDetails() {
    return Joi.object({
      is_physical: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      trader: Joi.any(),

      custom_order: Joi.any(),

      no_of_boxes: Joi.any(),

      country_of_origin: Joi.any(),

      tags: Joi.any(),

      highlights: Joi.any(),

      media: Joi.any(),

      command: Joi.any(),

      multi_size: Joi.any(),

      return_config: Joi.any(),

      category_slug: Joi.any(),

      item_code: Joi.any(),

      variants: Joi.any(),

      hsn_code: Joi.any(),

      is_dependent: Joi.any(),

      product_group_tag: Joi.any(),

      currency: Joi.any(),

      size_guide: Joi.any(),

      description: Joi.any(),

      short_description: Joi.any(),

      sizes: Joi.any(),

      name: Joi.any(),

      trader_type: Joi.any(),

      brand_uid: Joi.any(),

      slug: Joi.any(),

      teaser_tag: Joi.any(),

      is_active: Joi.any(),

      item_type: Joi.any(),

      product_publish: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

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

  static UserInfo1() {
    return Joi.object({
      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      filters: Joi.any(),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      templates: Joi.array().items(Joi.string().allow("")).required(),

      brands: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),
    });
  }

  static ProductPartialExportRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      department: Joi.number().required(),

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
      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      created_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),

      modified_by: Joi.any(),
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
      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      slug: Joi.string().allow(""),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      priority: Joi.number(),
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

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

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

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      uid: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_image_less_product: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      custom_order: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      primary_color: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      all_company_ids: Joi.array().items(Joi.number()),

      image_nature: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      pending: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      is_set: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      created_on: Joi.string().allow(""),

      variant_media: Joi.any(),

      multi_size: Joi.boolean(),

      attributes: Joi.any(),

      moq: Joi.any(),

      color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      brand: CatalogModel.Brand(),

      category_slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      variants: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      hsn_code: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      tax_identifier: Joi.any(),

      category_uid: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      slug: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      is_active: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_physical: Joi.boolean(),

      item_type: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductSchemaV2()),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      trader: Joi.array().items(CatalogModel.Trader()).required(),

      uid: Joi.number().allow(null),

      is_image_less_product: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      no_of_boxes: Joi.number(),

      country_of_origin: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      bulk_job_id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      media: Joi.array().items(CatalogModel.Media1()),

      variant_media: Joi.any(),

      multi_size: Joi.boolean(),

      attributes: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      category_slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow("").required(),

      variants: Joi.any(),

      requester: Joi.string().allow(""),

      template_tag: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      description: Joi.string().allow(""),

      company_id: Joi.number().required(),

      short_description: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()).required(),

      name: Joi.string().allow("").required(),

      change_request_id: Joi.any(),

      brand_uid: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      teaser_tag: CatalogModel.TeaserTag(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      item_type: Joi.string().allow("").required(),

      product_publish: CatalogModel.ProductPublish1(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      brand_uid: Joi.number(),

      category_uid: Joi.number(),

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
      filters: CatalogModel.AttributeMasterFilter().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      raw_key: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster().required(),

      modified_by: Joi.any(),

      enabled_for_end_consumer: Joi.boolean(),

      created_on: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      unit: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      created_by: Joi.any(),

      logo: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

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
      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_height: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      item_width: Joi.number().required(),

      item_weight: Joi.number().required(),
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
      uid: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_image_less_product: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      custom_order: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      primary_color: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      all_company_ids: Joi.array().items(Joi.number()),

      image_nature: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      pending: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      is_set: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      created_on: Joi.string().allow(""),

      variant_media: Joi.any(),

      multi_size: Joi.boolean(),

      attributes: Joi.any(),

      moq: Joi.any(),

      color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      brand: CatalogModel.Brand(),

      category_slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      variants: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      hsn_code: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      tax_identifier: Joi.any(),

      category_uid: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      slug: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      is_active: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_physical: Joi.boolean(),

      item_type: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
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
      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      created_by: CatalogModel.UserDetail1(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserDetail1(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.ProductBulkRequest(),
    });
  }

  static BulkJob() {
    return Joi.object({
      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      template_tag: Joi.string().allow(""),

      total: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      tracking_url: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      succeed: Joi.number(),

      company_id: Joi.number().required(),

      failed_records: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

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
      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      retry: Joi.number(),

      cancelled: Joi.number(),

      tracking_url: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserCommon(),
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
      user: Joi.any().required(),

      company_id: Joi.number(),

      url: Joi.string().allow("").required(),
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
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      store: Joi.any(),

      sellable_quantity: Joi.number(),

      price_effective: Joi.number(),

      price_transfer: Joi.number(),

      size: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      quantity: Joi.number(),

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
      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
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
      quantity: Joi.number(),

      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_height: Joi.number().allow(null),

      is_set: Joi.boolean(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      set: CatalogModel.InventorySet(),

      price_transfer: Joi.number().allow(null),

      size: Joi.string().allow("").required(),

      store_code: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      price: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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
      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),
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

      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      uid: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      country_of_origin: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any().required(),

      modified_by: CatalogModel.UserSerializer(),

      fynd_item_code: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      weight: CatalogModel.WeightResponse().required(),

      set: CatalogModel.InventorySet(),

      company: CatalogModel.CompanyMeta().required(),

      size: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      raw_meta: Joi.any(),

      return_config: CatalogModel.ReturnConfig1(),

      trace_id: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta().required(),

      price: CatalogModel.PriceMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),

      fynd_meta: Joi.any(),

      fragile: Joi.boolean().required(),

      tax_identifier: Joi.any(),

      added_on_store: Joi.string().allow(""),

      item_id: Joi.number().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      created_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),

      total_quantity: Joi.number().required(),

      meta: Joi.any().allow(null),

      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      dimension: CatalogModel.DimensionResponse().required(),

      quantities: CatalogModel.Quantities(),
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
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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
      marked: Joi.number(),

      transfer: Joi.number(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
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

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),
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

  static GetInventories() {
    return Joi.object({
      trader: Joi.array().items(CatalogModel.Trader2()),

      uid: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      is_set: Joi.boolean(),

      weight: CatalogModel.WeightResponse1(),

      company: CatalogModel.CompanyMeta1(),

      size: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig2(),

      trace_id: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      price: CatalogModel.PriceArticle(),

      store: CatalogModel.ArticleStoreResponse(),

      id: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      tax_identifier: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      created_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),

      total_quantity: Joi.number(),

      expiration_date: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      platforms: Joi.any(),

      quantities: CatalogModel.QuantitiesArticle(),
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
      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      created_by: Joi.any(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),
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
      item_dimensions_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      price: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      operators: Joi.string().allow("").required(),

      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      to_date: Joi.string().allow("").allow(null),

      store_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),

      brand_ids: Joi.array().items(Joi.number()),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      filters: Joi.any(),

      type: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      stores: Joi.array().items(Joi.string().allow("")),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      filters: CatalogModel.InventoryJobFilters().required(),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),

      cancelled_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      cancelled_by: CatalogModel.UserDetail(),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()).required(),

      from_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),
    });
  }

  static InventoryPartialExportRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportCreateFilters() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportCreateResponse() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      filters: CatalogModel.InventoryExportCreateFilters().required(),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),

      cancelled_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      cancelled_by: CatalogModel.UserDetail(),

      task_id: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
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
      total_quantity: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      meta: Joi.any(),

      payload: Joi.array().items(CatalogModel.InventoryPayload()),

      company_id: Joi.number().required(),
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
      tax_on_mrp: Joi.boolean(),

      id: Joi.string().allow(""),

      threshold1: Joi.number(),

      modified_on: Joi.string().allow(""),

      threshold2: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax1: Joi.number(),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      company_id: Joi.number(),

      tax_on_esp: Joi.boolean(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      tax_on_mrp: Joi.boolean().required(),

      uid: Joi.number(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      tax1: Joi.number().required(),

      tax2: Joi.number(),

      is_active: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      company_id: Joi.number().required(),

      tax_on_esp: Joi.boolean(),
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

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      size: Joi.number(),

      current: Joi.string().allow(""),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),
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
      country_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      description: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      modified_by: Joi.any(),
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

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

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
      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),
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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      image_nature: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      has_variant: Joi.boolean(),

      item_code: Joi.string().allow(""),

      promo_meta: Joi.any(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      name: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
    });
  }

  static ArticleQuery() {
    return Joi.object({
      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),

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
      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      company_id: Joi.number(),
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
      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.boolean().required(),

      price_effective: Joi.number(),

      group_id: Joi.string().allow(""),

      store_id: Joi.number(),

      size: Joi.string().allow("").required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      item_id: Joi.number().required(),

      price_marked: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      index: Joi.number(),

      quantity: Joi.number().required(),

      company_id: Joi.number(),

      s_city: Joi.string().allow(""),

      store_pincode: Joi.number(),
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

      pincode: Joi.number(),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
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
      stage: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      verified_by: CatalogModel.UserSerializer2(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      modified_by: CatalogModel.UserSerializer2(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
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

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),
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

  static GetLocationSerializer() {
    return Joi.object({
      uid: Joi.number(),

      verified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      company: CatalogModel.GetCompanySerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      store_type: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      modified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      warnings: Joi.any(),

      created_by: CatalogModel.UserSerializer1(),

      integration_type: CatalogModel.LocationIntegrationType(),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      manager: CatalogModel.LocationManagerSerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      _custom_json: Joi.any(),

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
      uid: Joi.number().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

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
