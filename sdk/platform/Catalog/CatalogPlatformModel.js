const Joi = require("joi");

class CatalogModel {
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      meta: Joi.any(),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

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

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: Joi.any(),
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
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),
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
      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      params: Joi.any(),

      url: Joi.string().allow(""),

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
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),
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
      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),
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
      max_marked: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      attributes: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      price: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      name: Joi.string().allow(""),

      identifier: Joi.any(),
    });
  }

  static GetProducts() {
    return Joi.object({
      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      max_quantity: Joi.number(),

      product_uid: Joi.number(),

      price: CatalogModel.Price(),

      product_details: CatalogModel.LimitedProductData(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),
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
      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      image: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      description: Joi.string().allow(""),

      brand_id: Joi.number(),

      guide: CatalogModel.Guide(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),
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

      modified_by: Joi.any(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      guide: Joi.any(),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
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

  static ApplicationItemMeta() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
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
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      moq: CatalogModel.MOQData(),

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),
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
      current: Joi.number().required(),

      total_count: Joi.number().required(),

      next: Joi.number().required(),

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
      unit: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      priority: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

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
      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      similar: Joi.any(),

      variant: Joi.any(),

      compare: Joi.any(),

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
      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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
      start: Joi.number(),

      end: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map: Joi.any(),

      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),
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
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize(),

      logo: Joi.string().allow(""),

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

      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

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

  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),

      variant: CatalogModel.ConfigurationProductVariant().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),
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
      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

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
      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),
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
      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      count: Joi.number(),

      value: Joi.any().required(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      selected_min: Joi.number(),

      min: Joi.number(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),

      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),
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

  static CollectionQuery() {
    return Joi.object({
      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      attribute: Joi.string().allow("").required(),
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
      type: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      priority: Joi.number(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      action: CatalogModel.Action(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
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
      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),
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

  static CreateCollection() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      _schedule: CatalogModel.CollectionSchedule(),

      app_id: Joi.string().allow("").required(),

      banners: CatalogModel.CollectionBanner().required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),

      badge: CatalogModel.CollectionBadge(),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserInfo(),

      published: Joi.boolean(),

      _locale_language: Joi.any(),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      seo: CatalogModel.SeoDetail(),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      app_id: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      priority: Joi.number(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      _schedule: CatalogModel.CollectionSchedule(),

      banners: CatalogModel.CollectionBanner(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserInfo(),

      badge: CatalogModel.CollectionBadge(),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      published: Joi.boolean(),

      _locale_language: Joi.any(),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      seo: CatalogModel.SeoDetail(),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),
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

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      color: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      price: CatalogModel.ProductListingPrice(),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      sellable: Joi.boolean(),

      promo_meta: Joi.any(),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      discount: Joi.string().allow(""),

      rating: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

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

      available_sizes: Joi.number(),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      sellable_count: Joi.number(),

      count: Joi.number(),

      out_of_stock_count: Joi.number(),
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
      data: CatalogModel.CrossSellingData(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      enabled: Joi.boolean().required(),
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

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      total_article: Joi.number(),
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
      timing: Joi.any(),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      manager: Joi.any(),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.StoreDetail()),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      indexing: Joi.boolean().required(),
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
      type: Joi.string().allow("").required(),

      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),
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

  static GenderDetail() {
    return Joi.object({
      enabled_for_end_consumer: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      schema: CatalogModel.AttributeMaster(),

      meta: CatalogModel.AttributeMasterMeta(),

      is_nested: Joi.boolean(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      details: CatalogModel.AttributeMasterDetails(),

      id: Joi.string().allow(""),
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

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      created_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      page_size: Joi.number(),

      search: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      page_no: Joi.number(),

      priority_order: Joi.number(),
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

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      platforms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

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
      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      modified_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      verified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.any().required(),

      synonyms: Joi.array().items(Joi.any()),

      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      _cls: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      is_physical: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),
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
      no_of_boxes: Joi.any(),

      tags: Joi.any(),

      sizes: Joi.any(),

      highlights: Joi.any(),

      size_guide: Joi.any(),

      is_dependent: Joi.any(),

      custom_order: Joi.any(),

      item_type: Joi.any(),

      variants: Joi.any(),

      trader_type: Joi.any(),

      multi_size: Joi.any(),

      country_of_origin: Joi.any(),

      is_active: Joi.any(),

      product_group_tag: Joi.any(),

      item_code: Joi.any(),

      short_description: Joi.any(),

      slug: Joi.any(),

      description: Joi.any(),

      teaser_tag: Joi.any(),

      category_slug: Joi.any(),

      command: Joi.any(),

      media: Joi.any(),

      name: Joi.any(),

      product_publish: Joi.any(),

      brand_uid: Joi.any(),

      trader: Joi.any(),

      return_config: Joi.any(),

      hsn_code: Joi.any(),

      currency: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      type: Joi.string().allow(""),

      definitions: Joi.any(),

      required: Joi.array().items(Joi.string().allow("")),

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

  static TemplateDetails() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      is_archived: Joi.boolean(),
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

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      data: CatalogModel.ProductDownloadItemsData(),

      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      template_tags: Joi.any(),

      task_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),
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

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
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

      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      created_by: Joi.any(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      departments: Joi.array().items(Joi.number()).required(),

      id: Joi.string().allow(""),
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
      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      marketplaces: CatalogModel.CategoryMapping(),

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

  static Image() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),
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

      returnable: Joi.boolean(),

      time: Joi.number(),
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

      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      color: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      _custom_json: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      size_guide: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      verified_on: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      custom_order: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      attributes: Joi.any(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      moq: Joi.any(),

      item_type: Joi.string().allow(""),

      variants: Joi.any(),

      uid: Joi.number(),

      variant_media: Joi.any(),

      pending: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      country_of_origin: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_physical: Joi.boolean(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      is_image_less_product: Joi.boolean(),

      stage: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      created_by: Joi.any(),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      teaser_tag: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      product_publish: CatalogModel.ProductPublished(),

      id: Joi.string().allow(""),

      variant_group: Joi.any(),

      trader: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      return_config: CatalogModel.ReturnConfigResponse(),

      brand: CatalogModel.Brand(),

      all_sizes: Joi.array().items(Joi.any()),

      all_company_ids: Joi.array().items(Joi.number()),

      category: Joi.any(),

      hsn_code: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      currency: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.any(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.any().required(),
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
      no_of_boxes: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      size_guide: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantity(),

      is_dependent: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      change_request_id: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      attributes: Joi.any(),

      item_type: Joi.string().allow("").required(),

      variants: Joi.any(),

      variant_media: Joi.any(),

      uid: Joi.number().allow(null),

      multi_size: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      is_image_less_product: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      teaser_tag: CatalogModel.TeaserTag(),

      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      variant_group: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      is_set: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig().required(),

      action: Joi.string().allow(""),

      requester: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),
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

      raw_key: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      enabled_for_end_consumer: Joi.boolean(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      created_on: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      created_by: Joi.any(),

      is_nested: Joi.boolean(),

      variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      suggestion: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      synonyms: Joi.any(),

      logo: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),
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

      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight_unit_of_measure: Joi.any().required(),

      item_weight: Joi.number().required(),

      item_width: Joi.number().required(),

      size: Joi.any().required(),

      item_length: Joi.number().required(),

      item_height: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),
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
      user_id: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      template_tag: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      failed_records: Joi.array().items(Joi.any()),

      tracking_url: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      company_id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),
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

      company_id: Joi.number(),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      tracking_url: Joi.string().allow(""),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      data: CatalogModel.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      sellable_quantity: Joi.number(),

      identifiers: Joi.any(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      store: Joi.any(),

      price: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      price_transfer: Joi.number(),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),
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

  static GTIN() {
    return Joi.object({
      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.any().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      item_length: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      quantity: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),

      price: Joi.number(),

      size: Joi.any().required(),

      item_width: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),
    });
  }

  static CompanyMeta() {
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
      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().required(),

      company: CatalogModel.CompanyMeta().required(),

      quantities: CatalogModel.Quantities(),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any().allow(null),

      fynd_meta: Joi.any(),

      _custom_json: Joi.any(),

      fynd_item_code: Joi.string().allow("").required(),

      price: CatalogModel.PriceMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      added_on_store: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      dimension: CatalogModel.DimensionResponse().required(),

      identifier: Joi.any().required(),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse().required(),

      expiration_date: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),

      tax_identifier: Joi.any(),

      raw_meta: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      brand: CatalogModel.BrandMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig1(),

      track_inventory: Joi.boolean(),

      size: Joi.string().allow("").required(),

      fynd_article_code: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),
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
      modified_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),
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
      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

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

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      date_meta: CatalogModel.DateMeta(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number(),

      company: CatalogModel.CompanyMeta1(),

      quantities: CatalogModel.QuantitiesArticle(),

      tags: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      price: CatalogModel.PriceArticle(),

      inventory_updated_on: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      modified_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      dimension: CatalogModel.DimensionResponse1(),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      weight: CatalogModel.WeightResponse1(),

      expiration_date: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      tax_identifier: Joi.any(),

      id: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      is_set: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      return_config: CatalogModel.ReturnConfig2(),

      track_inventory: Joi.boolean(),

      size: Joi.string().allow(""),
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
      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      created_by: Joi.any(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      trace_id: Joi.string().allow("").allow(null),

      total_quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      price_marked: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      request_params: Joi.any(),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),
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
      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

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
      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

      price_effective: Joi.number(),

      price_marked: Joi.number(),
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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),

      tax1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax2: Joi.number(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),
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
      tax_on_mrp: Joi.boolean().required(),

      threshold2: Joi.number(),

      uid: Joi.number(),

      tax1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold1: Joi.number().required(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      tax2: Joi.number(),

      company_id: Joi.number().required(),
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

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      description: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),
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

      action: CatalogModel.Action(),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.Media(),

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
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      color: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      promo_meta: Joi.any(),

      item_code: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      image_nature: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),

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

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      created_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      verified_by: CatalogModel.UserSerializer1(),

      reject_reason: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

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

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      closing: CatalogModel.LocationTimingSerializer(),

      opening: CatalogModel.LocationTimingSerializer(),

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

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      enabled: Joi.boolean(),

      password: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
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
      company: CatalogModel.GetCompanySerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      warnings: Joi.any(),

      created_by: CatalogModel.UserSerializer2(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      integration_type: CatalogModel.LocationIntegrationType(),

      display_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      address: CatalogModel.GetAddressSerializer().required(),
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

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

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
