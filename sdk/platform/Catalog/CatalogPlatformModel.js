const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      result: Joi.any(),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
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

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),
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

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
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
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),
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
      url: Joi.string().allow(""),

      query: Joi.any(),

      type: Joi.string().allow(""),

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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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
      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

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
      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

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

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      short_description: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),

      quantity: Joi.number(),

      price: Joi.any(),

      identifier: Joi.any(),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      company_id: Joi.number(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_active: Joi.boolean().required(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

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
      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      image: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      active: Joi.boolean(),

      title: Joi.string().allow("").required(),

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
      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      guide: Joi.any(),

      name: Joi.string().allow(""),

      created_by: Joi.any(),

      active: Joi.boolean(),

      title: Joi.string().allow(""),

      company_id: Joi.number(),
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
      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      alt_text: Joi.any(),

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
      _custom_json: Joi.any(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),
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

      next: Joi.number().required(),

      has_next: Joi.boolean().required(),

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

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

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

      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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
      variant: Joi.any(),

      similar: Joi.any(),

      detail: Joi.any(),

      compare: Joi.any(),
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

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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
      start: Joi.number(),

      end: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      map: Joi.any(),

      sort: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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
      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      is_active: Joi.boolean().required(),

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
      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      title: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      is_active: Joi.boolean().required(),

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
      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),
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
      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),
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

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),
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
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      count: Joi.number(),

      selected_min: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

      display_format: Joi.string().allow(""),

      min: Joi.number(),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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

  static Media1() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      action: CatalogModel.Action(),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),
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

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
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

  static CreateCollection() {
    return Joi.object({
      _schedule: CatalogModel.CollectionSchedule(),

      modified_by: CatalogModel.UserInfo(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner().required(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      app_id: Joi.string().allow("").required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _custom_json: Joi.any(),

      meta: Joi.any(),

      published: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      _schedule: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      cron: Joi.any(),

      uid: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      _schedule: CatalogModel.CollectionSchedule(),

      modified_by: CatalogModel.UserInfo(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      allow_sort: Joi.boolean(),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _custom_json: Joi.any(),

      meta: Joi.any(),

      published: Joi.boolean(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),
    });
  }

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

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

  static ProductDetailAttribute() {
    return Joi.object({
      value: Joi.string().allow(""),

      key: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      brand: CatalogModel.ProductBrand(),

      item_type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating_count: Joi.number(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      sellable: Joi.boolean(),

      rating: Joi.number(),

      uid: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      product_online_date: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),
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
      item_id: Joi.number(),

      action: Joi.string().allow(""),
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
      items_not_updated: Joi.array().items(Joi.number()),

      message: Joi.string().allow(""),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_articles: Joi.number(),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      name: Joi.string().allow(""),
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
      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      created_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      company_id: Joi.number().required(),
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

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

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
      address: Joi.any(),

      modified_on: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      manager: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.number(),

      timing: Joi.any(),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      mandatory: Joi.boolean(),

      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      meta: CatalogModel.AttributeMasterMeta(),

      description: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static ProductTemplateCategory() {
    return Joi.object({
      template_slug: Joi.string().allow(""),

      uid: Joi.number(),

      slug_key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateCategory()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      errors: Joi.any(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      page_size: Joi.number(),

      page_no: Joi.number(),

      modified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      priority_order: Joi.number(),

      search: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

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
      errors: Joi.any(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      is_active: Joi.boolean(),

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

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      verified_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      _id: Joi.any(),

      slug: Joi.any(),

      name: Joi.any().required(),

      created_by: CatalogModel.UserDetail(),

      _cls: Joi.any(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      is_active: Joi.boolean(),

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
      departments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      item_type: Joi.any(),

      command: Joi.any(),

      name: Joi.any(),

      tags: Joi.any(),

      teaser_tag: Joi.any(),

      custom_order: Joi.any(),

      currency: Joi.any(),

      multi_size: Joi.any(),

      country_of_origin: Joi.any(),

      trader_type: Joi.any(),

      is_dependent: Joi.any(),

      media: Joi.any(),

      is_active: Joi.any(),

      hsn_code: Joi.any(),

      highlights: Joi.any(),

      description: Joi.any(),

      brand_uid: Joi.any(),

      size_guide: Joi.any(),

      product_publish: Joi.any(),

      short_description: Joi.any(),

      sizes: Joi.any(),

      no_of_boxes: Joi.any(),

      category_slug: Joi.any(),

      return_config: Joi.any(),

      product_group_tag: Joi.any(),

      trader: Joi.any(),

      item_code: Joi.any(),

      variants: Joi.any(),

      slug: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      definitions: Joi.any(),

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

  static ProductDownloadItemsData() {
    return Joi.object({
      templates: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

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
      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      task_id: Joi.string().allow(""),

      template_tags: Joi.any(),

      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),
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
      l1: Joi.number().required(),

      department: Joi.number().required(),

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
      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      uid: Joi.number(),

      level: Joi.number().required(),

      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

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
      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      level: Joi.number().required(),

      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

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

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Logo(),
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
      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      pending: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      item_type: Joi.string().allow(""),

      modified_by: Joi.any(),

      verified_on: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      image_nature: Joi.string().allow(""),

      is_set: Joi.boolean(),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      moq: Joi.any(),

      variant_group: Joi.any(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      custom_order: Joi.any(),

      currency: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      created_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      uid: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      is_expirable: Joi.boolean(),

      is_physical: Joi.boolean(),

      category: Joi.any(),

      is_dependent: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      is_active: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      hsn_code: Joi.string().allow(""),

      category_uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      brand_uid: Joi.number(),

      attributes: Joi.any(),

      size_guide: Joi.string().allow(""),

      company_id: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      product_publish: CatalogModel.ProductPublished(),

      verified_by: CatalogModel.VerifiedBy(),

      short_description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      tax_identifier: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      no_of_boxes: Joi.number(),

      category_slug: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      _custom_json: Joi.any(),

      variant_media: Joi.any(),

      primary_color: Joi.string().allow(""),

      trader: Joi.array().items(Joi.any()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      variants: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
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

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      item_type: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      is_set: Joi.boolean(),

      name: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_image_less_product: Joi.boolean(),

      teaser_tag: CatalogModel.TeaserTag(),

      currency: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      multi_size: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      change_request_id: Joi.any(),

      is_dependent: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      is_active: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      template_tag: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      attributes: Joi.any(),

      size_guide: Joi.string().allow(""),

      company_id: Joi.number().required(),

      product_publish: CatalogModel.ProductPublish(),

      short_description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      no_of_boxes: Joi.number(),

      category_slug: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      _custom_json: Joi.any(),

      variant_media: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      item_code: Joi.string().allow("").required(),

      variants: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      action: Joi.string().allow(""),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

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

      modified_by: Joi.any(),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      name: Joi.string().allow(""),

      created_by: Joi.any(),

      unit: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      variant: Joi.boolean(),

      description: Joi.string().allow(""),

      synonyms: Joi.any(),

      details: CatalogModel.AttributeMasterDetails().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      enabled_for_end_consumer: Joi.boolean(),

      schema: CatalogModel.AttributeMaster().required(),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
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
      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      item_height: Joi.number().required(),

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

  static UserDetail1() {
    return Joi.object({
      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      total: Joi.number(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),
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
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      succeed: Joi.number(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      failed: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      cancelled_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserInfo1(),

      total: Joi.number(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),
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
      username: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      retry: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      total: Joi.number(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),
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

      item_id: Joi.number(),

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
      seller_identifier: Joi.string().allow(""),

      price_transfer: Joi.number(),

      identifiers: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      store: Joi.any(),

      uid: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      quantity: Joi.number(),

      price: Joi.number(),

      item_id: Joi.number(),

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
      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      primary: Joi.boolean(),

      gtin_value: Joi.any().required(),

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

      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price_transfer: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_width: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_length: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_height: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      quantity: Joi.number().required(),

      price: Joi.number(),

      set: CatalogModel.InventorySet(),

      size: Joi.any().required(),

      store_code: Joi.string().allow("").required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
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

  static QuantityBase() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static Quantities() {
    return Joi.object({
      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
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

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),

      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),
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

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      weight: CatalogModel.WeightResponse().required(),

      brand: CatalogModel.BrandMeta().required(),

      added_on_store: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),

      track_inventory: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.Quantities(),

      tags: Joi.array().items(Joi.string().allow("")),

      raw_meta: Joi.any(),

      dimension: CatalogModel.DimensionResponse().required(),

      country_of_origin: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      is_active: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      fynd_item_code: Joi.string().allow("").required(),

      total_quantity: Joi.number().required(),

      store: CatalogModel.StoreMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      trace_id: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      fynd_meta: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      fragile: Joi.boolean().required(),

      tax_identifier: Joi.any(),

      return_config: CatalogModel.ReturnConfig1(),

      _custom_json: Joi.any(),

      meta: Joi.any().allow(null),

      trader: Joi.array().items(CatalogModel.Trader1()),

      item_id: Joi.number().required(),

      set: CatalogModel.InventorySet(),
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
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
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

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
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

  static DateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      effective: Joi.number(),

      tp_notes: Joi.any(),

      transfer: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      weight: CatalogModel.WeightResponse1(),

      brand: CatalogModel.BrandMeta1(),

      modified_by: CatalogModel.UserSerializer(),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      id: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      track_inventory: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      tags: Joi.array().items(Joi.string().allow("")),

      dimension: CatalogModel.DimensionResponse1(),

      date_meta: CatalogModel.DateMeta(),

      country_of_origin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      seller_identifier: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      total_quantity: Joi.number(),

      store: CatalogModel.ArticleStoreResponse(),

      identifier: Joi.any(),

      trace_id: Joi.string().allow(""),

      platforms: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      size: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      tax_identifier: Joi.any(),

      return_config: CatalogModel.ReturnConfig2(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      item_id: Joi.number(),
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
      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed: Joi.number(),

      modified_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      total: Joi.number(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),
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

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      quantity: Joi.number(),

      price: Joi.number(),

      store_code: Joi.string().allow("").required(),
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
      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      request_params: Joi.any(),
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
      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      status: Joi.string().allow(""),

      request_params: Joi.any(),
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

      price_effective: Joi.number(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),

      expiration_date: Joi.string().allow(""),
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

      threshold2: Joi.number(),

      tax1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      current: Joi.string().allow(""),
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
      hsn_code: Joi.string().allow("").required(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      tax1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      uid: Joi.number(),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),
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

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      description: Joi.string().allow("").required(),

      created_by: Joi.any(),

      type: Joi.string().allow("").required(),
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
      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
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

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      brand: CatalogModel.ProductBrand(),

      item_type: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating_count: Joi.number(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      uid: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      product_online_date: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),

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

  static ArticleQuery() {
    return Joi.object({
      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

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
      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_identifier: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

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
      store_pincode: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      price_effective: Joi.number(),

      index: Joi.number(),

      quantity: Joi.number().required(),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      price_marked: Joi.number(),

      _id: Joi.string().allow(""),

      status: Joi.boolean().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      store_id: Joi.number(),

      s_city: Joi.string().allow(""),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),
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

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      longitude: Joi.number(),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

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
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      verified_by: CatalogModel.UserSerializer2(),

      business_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

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

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),
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

  static GetLocationSerializer() {
    return Joi.object({
      manager: CatalogModel.LocationManagerSerializer(),

      modified_by: CatalogModel.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      name: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      created_by: CatalogModel.UserSerializer1(),

      warnings: Joi.any(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      integration_type: CatalogModel.LocationIntegrationType(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      documents: Joi.array().items(CatalogModel.Document()),

      _custom_json: Joi.any(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

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
      app_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      uid: Joi.number().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

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
