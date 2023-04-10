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
      words: Joi.array().items(Joi.string().allow("")),

      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      result: Joi.any(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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

  static GetSearchWordsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetSearchWordsData()),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),

      query: Joi.any(),

      type: Joi.string().allow(""),

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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      max_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
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
      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
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
      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      price: Joi.any(),

      identifier: Joi.any(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      company_id: Joi.number(),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),
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
      id: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      created_by: Joi.any(),

      guide: CatalogModel.Guide(),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      image: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      created_by: Joi.any(),

      title: Joi.string().allow(""),

      guide: Joi.any(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),
    });
  }

  static MetaFields() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static SEOData() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),
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
      current: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

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
      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

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
      filter_types: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),
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

      variant: Joi.any(),

      similar: Joi.any(),

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
      display: Joi.string().allow(""),

      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      value: Joi.string().allow(""),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      priority: Joi.number().required(),
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

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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
      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

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
      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),
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
      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_id: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),
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

      config_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),
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
      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      count: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),

      selected_min: Joi.number(),

      min: Joi.number(),

      value: Joi.any().required(),

      display_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      action: CatalogModel.Action(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),
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

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      _schedule: CatalogModel.CollectionSchedule(),

      created_by: CatalogModel.UserInfo(),

      _locale_language: Joi.any(),

      sort_on: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner().required(),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage().required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.SeoDetail(),

      badge: CatalogModel.CollectionBadge(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      app_id: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      published: Joi.boolean(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      sort_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      _schedule: CatalogModel.CollectionSchedule(),

      _locale_language: Joi.any(),

      banners: CatalogModel.CollectionBanner(),

      sort_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      seo: CatalogModel.SeoDetail(),

      badge: CatalogModel.CollectionBadge(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      description: Joi.string().allow(""),

      published: Joi.boolean(),
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

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      rating: Joi.number(),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      sellable: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      discount: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      rating_count: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

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
      out_of_stock_count: Joi.number(),

      sellable_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      article_freshness: Joi.number(),

      name: Joi.string().allow(""),

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
      data: CatalogModel.CrossSellingData(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      enabled: Joi.boolean(),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      created_by: Joi.any(),

      modified_on: Joi.number().required(),

      company_id: Joi.number().required(),

      created_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      modified_by: Joi.any(),

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
      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.CompanyBrandDetail()),
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
      additional_contacts: Joi.array().items(Joi.any()),

      address: Joi.any(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      timing: Joi.any(),

      display_name: Joi.string().allow(""),

      manager: Joi.any(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      documents: Joi.array().items(Joi.any()),
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
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      mandatory: Joi.boolean(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      priority: Joi.number(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),
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

  static GenderDetail() {
    return Joi.object({
      schema: CatalogModel.AttributeMaster(),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      template_slug: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.CategoriesResponse()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      errors: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      priority_order: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      page_size: Joi.number(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      uid: Joi.number(),

      search: Joi.string().allow(""),
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

      errors: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      platforms: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      _cls: Joi.string().allow(""),
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
      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      modified_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      _id: Joi.any(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number().required(),

      _cls: Joi.string().allow(""),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      categories: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      logo: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      is_physical: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),
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
      categories: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      item_code: Joi.any(),

      item_type: Joi.any(),

      highlights: Joi.any(),

      trader_type: Joi.any(),

      country_of_origin: Joi.any(),

      no_of_boxes: Joi.any(),

      sizes: Joi.any(),

      slug: Joi.any(),

      is_dependent: Joi.any(),

      brand_uid: Joi.any(),

      trader: Joi.any(),

      size_guide: Joi.any(),

      category_slug: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.any(),

      currency: Joi.any(),

      media: Joi.any(),

      hsn_code: Joi.any(),

      command: Joi.any(),

      name: Joi.any(),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.any(),

      multi_size: Joi.any(),

      tags: Joi.any(),

      is_active: Joi.any(),

      return_config: Joi.any(),

      custom_order: Joi.any(),

      description: Joi.any(),

      product_publish: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      type: Joi.string().allow(""),

      definitions: Joi.any(),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      type: Joi.string().allow(""),

      filters: Joi.any(),

      created_by: CatalogModel.UserInfo1(),

      task_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      templates: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),

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
      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
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
      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      media: CatalogModel.Media2(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      uid: Joi.number(),

      priority: Joi.number(),
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
      media: CatalogModel.Media2(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      level: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),
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
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

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

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      is_image_less_product: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      net_quantity: CatalogModel.NetQuantityResponse(),

      highlights: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_physical: Joi.boolean(),

      created_on: Joi.string().allow(""),

      category_uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      sizes: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader()),

      custom_order: Joi.any(),

      size_guide: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      verified_on: Joi.string().allow(""),

      moq: Joi.any(),

      variant_group: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      created_by: Joi.any(),

      pending: Joi.string().allow(""),

      company_id: Joi.number(),

      category: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      stage: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      primary_color: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(CatalogModel.Image()),

      image_nature: Joi.string().allow(""),

      variant_media: Joi.any(),

      template_tag: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.Brand(),

      color: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      return_config: CatalogModel.ReturnConfigResponse(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductSchemaV2()),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

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

  static ProductPublish1() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
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
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      item_code: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      is_image_less_product: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      _custom_json: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      no_of_boxes: Joi.number(),

      sizes: Joi.array().items(Joi.any()).required(),

      slug: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      brand_uid: Joi.number().required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      custom_order: CatalogModel.CustomOrder(),

      size_guide: Joi.string().allow(""),

      variant_group: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      company_id: Joi.number().required(),

      product_publish: CatalogModel.ProductPublish1(),

      departments: Joi.array().items(Joi.number()).required(),

      attributes: Joi.any(),

      name: Joi.string().allow("").required(),

      teaser_tag: CatalogModel.TeaserTag(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      is_set: Joi.boolean(),

      change_request_id: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      variant_media: Joi.any(),

      template_tag: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig().required(),

      uid: Joi.number().allow(null),

      requester: Joi.string().allow(""),

      description: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      category_uid: Joi.number(),
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

      unit: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      variant: Joi.boolean(),

      raw_key: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      suggestion: Joi.string().allow(""),

      created_by: Joi.any(),

      details: CatalogModel.AttributeMasterDetails().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow(""),

      synonyms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      modified_by: Joi.any(),

      description: Joi.string().allow(""),
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
      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_height: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").required(),

      item_width: Joi.number().required(),

      size: Joi.string().allow("").required(),

      item_weight: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

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
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      is_image_less_product: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      net_quantity: CatalogModel.NetQuantityResponse(),

      highlights: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_physical: Joi.boolean(),

      created_on: Joi.string().allow(""),

      category_uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      sizes: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      all_sizes: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      trader: Joi.array().items(CatalogModel.Trader()),

      custom_order: Joi.any(),

      size_guide: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      verified_on: Joi.string().allow(""),

      moq: Joi.any(),

      variant_group: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      created_by: Joi.any(),

      pending: Joi.string().allow(""),

      company_id: Joi.number(),

      category: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      stage: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      primary_color: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(CatalogModel.Image()),

      image_nature: Joi.string().allow(""),

      variant_media: Joi.any(),

      template_tag: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.Brand(),

      color: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      return_config: CatalogModel.ReturnConfigResponse(),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),
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
      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      failed: Joi.number(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail1(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),
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
      cancelled_records: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserInfo1(),

      custom_template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number().required(),

      failed: Joi.number(),

      succeed: Joi.number(),

      created_on: Joi.string().allow("").required(),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

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

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      cancelled_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      modified_on: Joi.string().allow(""),

      failed: Joi.number(),

      company_id: Joi.number(),

      succeed: Joi.number(),

      retry: Joi.number(),

      total: Joi.number(),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),
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

      url: Joi.string().allow("").required(),

      user: Joi.any().required(),
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
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      price: Joi.number(),

      sellable_quantity: Joi.number(),

      size: Joi.string().allow(""),

      identifiers: Joi.any(),

      price_transfer: Joi.number(),

      item_id: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      store: Joi.any(),

      seller_identifier: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventoryResponse()),
    });
  }

  static GTIN() {
    return Joi.object({
      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),

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
      quantity: Joi.number().required(),

      is_set: Joi.boolean(),

      item_height: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      item_width: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price: Joi.number(),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),

      price_transfer: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      set: CatalogModel.InventorySet(),

      item_length: Joi.number().allow(null),
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
      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
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
      updated_at: Joi.string().allow(""),

      count: Joi.number(),
    });
  }

  static Quantities() {
    return Joi.object({
      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),

      updated_at: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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

      width: Joi.number().required(),

      height: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      weight: CatalogModel.WeightResponse().required(),

      tax_identifier: Joi.any(),

      expiration_date: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      _custom_json: Joi.any(),

      added_on_store: Joi.string().allow(""),

      country_of_origin: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      trader: Joi.array().items(CatalogModel.Trader1()),

      fragile: Joi.boolean().required(),

      track_inventory: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      raw_meta: Joi.any(),

      company: CatalogModel.CompanyMeta().required(),

      created_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      fynd_meta: Joi.any(),

      total_quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      item_id: Joi.number().required(),

      store: CatalogModel.StoreMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      brand: CatalogModel.BrandMeta().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      return_config: CatalogModel.ReturnConfig1(),

      uid: Joi.string().allow("").required(),

      fynd_article_code: Joi.string().allow("").required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
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

      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      transfer: Joi.number(),

      effective: Joi.number(),

      tp_notes: Joi.any(),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
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

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      width: Joi.number(),

      height: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static GetInventories() {
    return Joi.object({
      weight: CatalogModel.WeightResponse1(),

      tax_identifier: Joi.any(),

      expiration_date: Joi.string().allow(""),

      size: Joi.string().allow(""),

      identifier: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      track_inventory: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      uid: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      created_by: CatalogModel.UserSerializer(),

      price: CatalogModel.PriceArticle(),

      total_quantity: Joi.number(),

      platforms: Joi.any(),

      item_id: Joi.number(),

      date_meta: CatalogModel.DateMeta(),

      store: CatalogModel.ArticleStoreResponse(),

      is_set: Joi.boolean(),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      brand: CatalogModel.BrandMeta1(),

      dimension: CatalogModel.DimensionResponse1(),

      modified_by: CatalogModel.UserSerializer(),

      return_config: CatalogModel.ReturnConfig2(),

      stage: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),
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
      cancelled_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      failed: Joi.number(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      succeed: Joi.number(),

      total: Joi.number(),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),
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
      quantity: Joi.number(),

      currency: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      store_code: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      total_quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      operators: Joi.string().allow("").required(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow("").allow(null),

      from_date: Joi.string().allow("").allow(null),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      type: Joi.string().allow(""),

      filters: Joi.any(),

      created_by: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      created_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      stores: Joi.array().items(Joi.string().allow("")),

      brands: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      cancelled_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.InventoryJobFilters().required(),

      created_by: CatalogModel.UserDetail(),

      id: Joi.string().allow("").required(),

      task_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      completed_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      url: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

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
      tags: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number().required(),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
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

  static HsnUpsert() {
    return Joi.object({
      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

      tax2: Joi.number(),

      company_id: Joi.number().required(),

      threshold2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_mrp: Joi.boolean().required(),

      is_active: Joi.boolean(),

      uid: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax1: Joi.number(),

      id: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax2: Joi.number(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      threshold2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),
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

  static PageResponse() {
    return Joi.object({
      has_previous: Joi.boolean(),

      size: Joi.number(),

      current: Joi.string().allow(""),

      item_total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      threshold: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      description: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),
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
      action: CatalogModel.Action(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      uid: Joi.number(),
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

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

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

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      rating: Joi.number(),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      similars: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      image_nature: Joi.string().allow(""),

      rating_count: Joi.number(),

      brand: CatalogModel.ProductBrand(),

      color: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean(),

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
      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

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
      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      channel_identifier: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow("").required(),
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
      s_city: Joi.string().allow(""),

      quantity: Joi.number().required(),

      store_pincode: Joi.number(),

      uid: Joi.string().allow(""),

      index: Joi.number(),

      store_id: Joi.number(),

      company_id: Joi.number(),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      size: Joi.string().allow("").required(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      _id: Joi.string().allow(""),

      item_id: Joi.number().required(),

      status: Joi.boolean().required(),
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
      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
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

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),
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
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      warnings: Joi.any(),

      phone_number: Joi.string().allow("").required(),

      manager: CatalogModel.LocationManagerSerializer(),

      verified_by: CatalogModel.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      integration_type: CatalogModel.LocationIntegrationType(),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      code: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      modified_by: CatalogModel.UserSerializer1(),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),
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
