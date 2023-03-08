const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      result: Joi.any(),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

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

      code: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
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

      _custom_json: Joi.any(),

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

  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),

      type: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      display: Joi.string().allow(""),

      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),
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

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      attributes: Joi.any(),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      identifier: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      price: Joi.any(),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      product_uid: Joi.number(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      price: CatalogModel.Price(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      company_id: Joi.number(),
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
      name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      guide: CatalogModel.Guide(),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_by: Joi.any(),

      brand_id: Joi.number(),

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
      name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      guide: Joi.any(),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_by: Joi.any(),

      brand_id: Joi.number(),

      company_id: Joi.number(),
    });
  }

  static MOQData() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

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
      alt_text: Joi.any(),

      moq: CatalogModel.MOQData(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.SEOData(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
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
      description: Joi.any(),

      title: Joi.any(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),

      _custom_json: Joi.any(),

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

  static GetConfigMetadataResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),
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

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_default: Joi.boolean().required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

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
      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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

      similar: Joi.any(),

      variant: Joi.any(),

      compare: Joi.any(),
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

      filter_types: Joi.array().items(Joi.string().allow("")),

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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
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
      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      display_name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
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
      title: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      subtitle: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize(),
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

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize().required(),
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

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

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

      app_id: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

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

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display_format: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      value: Joi.any().required(),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      count: Joi.number(),

      selected_min: Joi.number(),
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

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      url: Joi.string().allow("").required(),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
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

  static GetCollectionDetailNest() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

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

  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CollectionImage() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      aspect_ratio: Joi.string().allow("").required(),
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

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      name: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      _schedule: CatalogModel.CollectionSchedule(),

      logo: CatalogModel.CollectionImage().required(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      is_active: Joi.boolean(),

      _locale_language: Joi.any(),

      slug: Joi.string().allow("").required(),

      published: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner().required(),

      priority: Joi.number(),

      created_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      logo: CatalogModel.BannerImage(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      _schedule: Joi.any(),

      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      priority: Joi.number(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo(),

      name: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      logo: CatalogModel.CollectionImage(),

      sort_on: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      published: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.CollectionBanner(),

      priority: Joi.number(),

      seo: CatalogModel.SeoDetail(),
    });
  }

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price1(),

      marked: CatalogModel.Price1(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media1(),
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

  static ProductListingDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      name: Joi.string().allow(""),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      sellable: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      slug: Joi.string().allow("").required(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      promo_meta: Joi.any(),

      rating: Joi.number(),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_sizes: Joi.number(),

      total_articles: Joi.number(),

      available_articles: Joi.number(),

      article_freshness: Joi.number(),
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

      platform: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      enabled: Joi.boolean().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      modified_by: Joi.any(),

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
      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

      total_article: Joi.number(),

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
      brand: Joi.number(),

      store: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      timing: Joi.any(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      manager: Joi.any(),

      company_id: Joi.number(),
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
      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),
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
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      description: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      id: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      meta: CatalogModel.AttributeMasterMeta(),

      is_nested: Joi.boolean(),

      slug: Joi.string().allow(""),
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
      errors: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      name: Joi.string().allow(""),

      page_size: Joi.number(),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      search: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      priority_order: Joi.number(),

      created_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      is_active: Joi.boolean(),

      item_type: Joi.string().allow(""),

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
      errors: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      platforms: Joi.any(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

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
      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      name: Joi.any().required(),

      _cls: Joi.any(),

      logo: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      slug: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      is_physical: Joi.boolean().required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),
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
      item_code: Joi.any(),

      trader: Joi.any(),

      custom_order: Joi.any(),

      trader_type: Joi.any(),

      item_type: Joi.any(),

      multi_size: Joi.any(),

      name: Joi.any(),

      product_group_tag: Joi.any(),

      description: Joi.any(),

      brand_uid: Joi.any(),

      product_publish: Joi.any(),

      variants: Joi.any(),

      media: Joi.any(),

      country_of_origin: Joi.any(),

      tags: Joi.any(),

      return_config: Joi.any(),

      highlights: Joi.any(),

      no_of_boxes: Joi.any(),

      hsn_code: Joi.any(),

      command: Joi.any(),

      size_guide: Joi.any(),

      is_active: Joi.any(),

      currency: Joi.any(),

      slug: Joi.any(),

      short_description: Joi.any(),

      teaser_tag: Joi.any(),

      sizes: Joi.any(),

      category_slug: Joi.any(),

      is_dependent: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      definitions: Joi.any(),

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
      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      is_physical: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),
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
      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),

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
      completed_on: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      seller_id: Joi.number(),

      created_by: CatalogModel.VerifiedBy(),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow(""),
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

      l2: Joi.number().required(),

      l1: Joi.number().required(),
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

      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      priority: Joi.number(),

      id: Joi.string().allow(""),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      modified_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      created_by: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      priority: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
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

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
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

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      category: Joi.any(),

      id: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      departments: Joi.array().items(Joi.number()),

      verified_on: Joi.string().allow(""),

      custom_order: Joi.any(),

      modified_by: Joi.any(),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      color: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      moq: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      brand_uid: Joi.number(),

      _custom_json: Joi.any(),

      brand: CatalogModel.Brand(),

      product_publish: CatalogModel.ProductPublish(),

      created_on: Joi.string().allow(""),

      variants: Joi.any(),

      primary_color: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      country_of_origin: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      no_of_boxes: Joi.number(),

      variant_media: Joi.any(),

      hsn_code: Joi.string().allow(""),

      uid: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      size_guide: Joi.string().allow(""),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      is_image_less_product: Joi.boolean(),

      short_description: Joi.string().allow(""),

      category_uid: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      stage: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      teaser_tag: Joi.any(),

      is_expirable: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      is_physical: Joi.boolean(),

      is_set: Joi.boolean(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      variant_group: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      category_slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      item_code: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      departments: Joi.array().items(Joi.number()).required(),

      custom_order: CatalogModel.CustomOrder(),

      requester: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      company_id: Joi.number().required(),

      bulk_job_id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      _custom_json: Joi.any(),

      product_publish: CatalogModel.ProductPublish1(),

      variants: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      country_of_origin: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfig().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      no_of_boxes: Joi.number(),

      variant_media: Joi.any(),

      uid: Joi.number().allow(null),

      size_guide: Joi.string().allow(""),

      change_request_id: Joi.any(),

      is_active: Joi.boolean(),

      currency: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      action: Joi.string().allow(""),

      teaser_tag: CatalogModel.TeaserTag(),

      sizes: Joi.array().items(Joi.any()).required(),

      is_set: Joi.boolean(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      variant_group: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      category_slug: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),
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
      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      modified_by: Joi.any(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      suggestion: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      raw_key: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      variant: Joi.boolean(),

      is_nested: Joi.boolean(),
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
      item_weight: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_width: Joi.number().required(),

      item_length: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      category: Joi.any(),

      id: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      departments: Joi.array().items(Joi.number()),

      verified_on: Joi.string().allow(""),

      custom_order: Joi.any(),

      modified_by: Joi.any(),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      color: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      moq: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      brand_uid: Joi.number(),

      _custom_json: Joi.any(),

      brand: CatalogModel.Brand(),

      product_publish: CatalogModel.ProductPublished(),

      created_on: Joi.string().allow(""),

      variants: Joi.any(),

      primary_color: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      country_of_origin: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      no_of_boxes: Joi.number(),

      variant_media: Joi.any(),

      hsn_code: Joi.string().allow(""),

      uid: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      size_guide: Joi.string().allow(""),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      is_image_less_product: Joi.boolean(),

      short_description: Joi.string().allow(""),

      category_uid: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      stage: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      teaser_tag: Joi.any(),

      is_expirable: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      is_physical: Joi.boolean(),

      is_set: Joi.boolean(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      variant_group: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      category_slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),
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

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      total: Joi.number(),

      failed: Joi.number(),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      created_on: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),
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
      total: Joi.number(),

      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.any()),

      company_id: Joi.number().required(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

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

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      id: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

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
      item_id: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      price_transfer: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      store: Joi.any(),

      sellable_quantity: Joi.number(),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      identifiers: Joi.any(),

      currency: Joi.string().allow(""),

      price: Joi.number(),
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
      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      price_transfer: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_width: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      quantity: Joi.number().required(),

      is_set: Joi.boolean(),

      size: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_height: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      currency: Joi.string().allow("").required(),

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

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

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
      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      width: Joi.number().required(),
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
      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      weight: CatalogModel.WeightResponse().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      fynd_article_code: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      modified_by: CatalogModel.UserSerializer(),

      price: CatalogModel.PriceMeta().required(),

      size: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),

      _custom_json: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      country_of_origin: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig1(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().required(),

      fynd_meta: Joi.any(),

      dimension: CatalogModel.DimensionResponse().required(),

      uid: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      fynd_item_code: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      expiration_date: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      is_active: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),

      item_id: Joi.number().required(),

      raw_meta: Joi.any(),

      added_on_store: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      trace_id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      tax_identifier: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      set: CatalogModel.InventorySet(),

      seller_identifier: Joi.string().allow("").required(),
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

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      marked: Joi.number(),

      transfer: Joi.number(),

      effective: Joi.number(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

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

  static DateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
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

      damaged: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static GetInventories() {
    return Joi.object({
      weight: CatalogModel.WeightResponse1(),

      id: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      platforms: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      price: CatalogModel.PriceArticle(),

      size: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      brand: CatalogModel.BrandMeta1(),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfig2(),

      country_of_origin: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      total_quantity: Joi.number(),

      date_meta: CatalogModel.DateMeta(),

      dimension: CatalogModel.DimensionResponse1(),

      uid: Joi.string().allow(""),

      identifier: Joi.any(),

      track_inventory: Joi.boolean(),

      expiration_date: Joi.string().allow(""),

      company: CatalogModel.CompanyMeta1(),

      item_id: Joi.number(),

      stage: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      trace_id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      tax_identifier: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      seller_identifier: Joi.string().allow(""),
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
      total: Joi.number(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: Joi.any(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),
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

      item_weight_unit_of_measure: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
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
      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),

      store: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),

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
      total_quantity: Joi.number().allow(null),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow("").required(),
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
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      threshold2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tax2: Joi.number(),

      modified_on: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      threshold1: Joi.number(),

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
      threshold2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax1: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      uid: Joi.number(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      is_active: Joi.boolean(),

      threshold1: Joi.number().required(),

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

      reporting_hsn: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_next: Joi.boolean(),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),

      size: Joi.number(),
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
      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      priority_order: Joi.number(),

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
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

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
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      image_nature: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      color: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      slug: Joi.string().allow("").required(),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      promo_meta: Joi.any(),

      rating: Joi.number(),

      has_variant: Joi.boolean(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),
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
      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow("").required(),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignment(),

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

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
      item_id: Joi.number().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      store_pincode: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      index: Joi.number(),

      group_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      company_id: Joi.number(),

      price_effective: Joi.number(),

      s_city: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      price_marked: Joi.number(),

      status: Joi.boolean().required(),

      store_id: Joi.number(),

      quantity: Joi.number().required(),

      meta: Joi.any(),

      size: Joi.string().allow("").required(),
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

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      latitude: Joi.number(),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      business_type: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

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

  static GetLocationSerializer() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      manager: CatalogModel.LocationManagerSerializer(),

      modified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      store_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      _custom_json: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      address: CatalogModel.GetAddressSerializer().required(),

      uid: Joi.number(),

      warnings: Joi.any(),

      company: CatalogModel.GetCompanySerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      stage: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      display_name: Joi.string().allow("").required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),
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
      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
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
