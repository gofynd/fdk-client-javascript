const Joi = require("joi");

class CatalogModel {
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

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

      result: Joi.any(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      query: Joi.any().required(),

      sort_on: Joi.string().allow("").required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
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

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

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
      params: Joi.any(),

      query: Joi.any(),

      url: Joi.string().allow(""),

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
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),
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
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      uid: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      identifier: Joi.any(),

      item_code: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),
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
      min_marked: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      max_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_details: CatalogModel.LimitedProductData(),

      min_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number(),

      max_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      price: CatalogModel.Price(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      company_id: Joi.number(),

      tag: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      title: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      active: Joi.boolean(),

      guide: CatalogModel.Guide(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      title: Joi.string().allow(""),

      id: Joi.string().allow(""),

      active: Joi.boolean(),

      guide: Joi.any(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

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
      key: Joi.any().required(),

      value: Joi.any().required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      alt_text: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_cod: Joi.boolean(),

      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
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

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),
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

      total_count: Joi.number().required(),

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
      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      default_key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      similar: Joi.any(),

      compare: Joi.any(),

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

  static ConfigurationBucketPoints() {
    return Joi.object({
      start: Joi.number(),

      end: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map_values: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      value_config: CatalogModel.ConfigurationListingFilterValue(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),

      config: Joi.array().items(CatalogModel.ConfigurationListingSortConfig()),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      filter: CatalogModel.ConfigurationListingFilter().required(),

      sort: CatalogModel.ConfigurationListingSort().required(),
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

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),
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

      product: CatalogModel.ConfigurationProduct(),

      type: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),
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
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      id: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      selected_max: Joi.number(),

      max: Joi.number(),

      display: Joi.string().allow("").required(),

      currency_symbol: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      is_selected: Joi.boolean().required(),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

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
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

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

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      priority: Joi.number(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      uid: Joi.string().allow(""),

      cron: Joi.any(),

      action: CatalogModel.Action(),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      logo: CatalogModel.Media1(),
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

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

  static CollectionBanner() {
    return Joi.object({
      landscape: CatalogModel.CollectionImage().required(),

      portrait: CatalogModel.CollectionImage().required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      is_visible: Joi.boolean(),

      priority: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow("").required(),

      published: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      badge: CatalogModel.CollectionBadge(),

      created_by: CatalogModel.UserInfo(),

      _locale_language: Joi.any(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner().required(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      logo: CatalogModel.CollectionImage().required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      priority: Joi.number(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      logo: CatalogModel.BannerImage(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      cron: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      badge: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_facets: Joi.boolean(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      is_visible: Joi.boolean(),

      priority: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow(""),

      published: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),

      is_active: Joi.boolean(),

      description: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      logo: CatalogModel.CollectionImage(),
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

  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      min: Joi.number(),
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
      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      promo_meta: Joi.any(),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      discount: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
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

      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),

      type: Joi.string().allow(""),
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
      total_sizes: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      article_freshness: Joi.number(),

      available_articles: Joi.number(),

      total_articles: Joi.number(),
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
      company_id: Joi.number(),

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      company_id: Joi.number().required(),

      modified_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),
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

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      company_id: Joi.number(),

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
      store: Joi.number(),

      company: Joi.string().allow(""),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      uid: Joi.number(),

      documents: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      address: Joi.any(),

      timing: Joi.any(),

      manager: Joi.any(),

      store_code: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),
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
      range: CatalogModel.AttributeSchemaRange(),

      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),

      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),
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

  static GenderDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),

      enabled_for_end_consumer: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      is_nested: Joi.boolean(),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      page_size: Joi.number(),

      page_no: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),

      search: Joi.string().allow(""),

      priority_order: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
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
      code: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      uid: Joi.number(),

      _cls: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
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
      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      name: Joi.any().required(),

      _cls: Joi.any(),

      slug: Joi.any(),

      is_active: Joi.boolean(),

      verified_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      _id: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

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

  static Properties() {
    return Joi.object({
      brand_uid: Joi.any(),

      item_code: Joi.any(),

      media: Joi.any(),

      tags: Joi.any(),

      product_group_tag: Joi.any(),

      return_config: Joi.any(),

      no_of_boxes: Joi.any(),

      multi_size: Joi.any(),

      variants: Joi.any(),

      highlights: Joi.any(),

      teaser_tag: Joi.any(),

      size_guide: Joi.any(),

      trader_type: Joi.any(),

      hsn_code: Joi.any(),

      short_description: Joi.any(),

      currency: Joi.any(),

      product_publish: Joi.any(),

      category_slug: Joi.any(),

      is_dependent: Joi.any(),

      description: Joi.any(),

      country_of_origin: Joi.any(),

      is_active: Joi.any(),

      sizes: Joi.any(),

      trader: Joi.any(),

      name: Joi.any(),

      slug: Joi.any(),

      command: Joi.any(),

      custom_order: Joi.any(),

      item_type: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),
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

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      description: Joi.string().allow(""),
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
      data: CatalogModel.ProductDownloadItemsData(),

      seller_id: Joi.number(),

      url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      template_tags: Joi.any(),

      created_by: CatalogModel.VerifiedBy(),

      status: Joi.string().allow(""),
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

  static Media2() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
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

  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),

      l1: Joi.number().required(),

      l2: Joi.number().required(),
    });
  }

  static Category() {
    return Joi.object({
      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),

      media: CatalogModel.Media2(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      created_on: Joi.string().allow(""),

      level: Joi.number().required(),

      is_active: Joi.boolean().required(),
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

      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),

      media: CatalogModel.Media2(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      is_active: Joi.boolean().required(),
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

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      is_image_less_product: Joi.boolean(),

      attributes: Joi.any(),

      brand_uid: Joi.number(),

      departments: Joi.array().items(Joi.number()),

      item_code: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      media: Joi.array().items(CatalogModel.Media1()),

      tags: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfigResponse(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      moq: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      no_of_boxes: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      variants: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      created_by: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      tax_identifier: Joi.any(),

      teaser_tag: Joi.any(),

      size_guide: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      category_uid: Joi.number(),

      _custom_json: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      hsn_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      company_id: Joi.number(),

      currency: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      modified_by: Joi.any(),

      category_slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      trader: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      category: Joi.any(),

      variant_group: Joi.any(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      custom_order: Joi.any(),

      variant_media: Joi.any(),

      item_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
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
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),

      type: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      is_image_less_product: Joi.boolean(),

      attributes: Joi.any().required(),

      brand_uid: Joi.number().required(),

      departments: Joi.array().items(Joi.number()).required(),

      item_code: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      tags: Joi.array().items(Joi.string().allow("")),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfig().required(),

      no_of_boxes: Joi.number(),

      multi_size: Joi.boolean(),

      variants: Joi.any(),

      net_quantity: CatalogModel.NetQuantity(),

      requester: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      uid: Joi.number().allow(null),

      action: Joi.string().allow(""),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      teaser_tag: CatalogModel.TeaserTag(),

      size_guide: Joi.string().allow(""),

      _custom_json: Joi.any(),

      short_description: Joi.string().allow(""),

      company_id: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      product_publish: CatalogModel.ProductPublish(),

      category_slug: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      country_of_origin: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      bulk_job_id: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      is_set: Joi.boolean(),

      name: Joi.string().allow("").required(),

      sizes: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      change_request_id: Joi.any(),

      slug: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      custom_order: CatalogModel.CustomOrder(),

      item_type: Joi.string().allow("").required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

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
      raw_key: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      suggestion: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      synonyms: Joi.any(),

      variant: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      unit: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      modified_by: Joi.any(),

      is_nested: Joi.boolean(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      item_width: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_length: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_height: Joi.number().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      size: Joi.any().required(),
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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      full_name: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),
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

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company_id: Joi.number().required(),

      custom_template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserInfo1(),

      tracking_url: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserInfo1(),

      failed: Joi.number(),

      cancelled: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),

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

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      retry: Joi.number(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      tracking_url: Joi.string().allow(""),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      id: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),
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
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      price_transfer: Joi.number(),

      sellable_quantity: Joi.number(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      price_effective: Joi.number(),

      price: Joi.number(),

      store: Joi.any(),
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
      name: Joi.string().allow(""),

      size_distribution: CatalogModel.SizeDistribution().required(),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      quantity: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      size: Joi.any().required(),

      price_effective: Joi.number().required(),

      price: Joi.number(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      brand_uid: Joi.number(),

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

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

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
      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
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
      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      effective: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig1(),

      seller_identifier: Joi.string().allow("").required(),

      weight: CatalogModel.WeightResponse().required(),

      trace_id: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow("").required(),

      tax_identifier: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      _custom_json: Joi.any(),

      size: Joi.string().allow("").required(),

      quantities: CatalogModel.Quantities(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      fynd_meta: Joi.any(),

      raw_meta: Joi.any(),

      item_id: Joi.number().required(),

      modified_by: CatalogModel.UserSerializer(),

      track_inventory: Joi.boolean(),

      fynd_article_code: Joi.string().allow("").required(),

      company: CatalogModel.CompanyMeta().required(),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      is_set: Joi.boolean(),

      fynd_item_code: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      total_quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      fragile: Joi.boolean().required(),

      meta: Joi.any().allow(null),

      price: CatalogModel.PriceMeta().required(),

      stage: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),
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

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
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

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      not_available: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
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
      height: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),

      width: Joi.number(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      transfer: Joi.number(),

      tp_notes: Joi.any(),

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

  static GetInventories() {
    return Joi.object({
      date_meta: CatalogModel.DateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      platforms: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      trace_id: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      brand: CatalogModel.BrandMeta1(),

      size: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      dimension: CatalogModel.DimensionResponse1(),

      item_id: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      track_inventory: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      country_of_origin: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      is_set: Joi.boolean(),

      identifier: Joi.any(),

      total_quantity: Joi.number(),

      id: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      stage: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),
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
      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      modified_by: Joi.any(),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),
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
      tags: Joi.array().items(Joi.string().allow("")),

      item_weight_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      quantity: Joi.number(),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_marked: Joi.number(),

      store_code: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow("").allow(null),

      price_effective: Joi.number(),

      price: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      user: Joi.any(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      url: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),
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

      total_quantity: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),
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

  static PageResponse() {
    return Joi.object({
      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      company_id: Joi.number(),

      tax1: Joi.number(),

      modified_on: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),

      id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),

      tax2: Joi.number(),
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
      uid: Joi.number(),

      company_id: Joi.number().required(),

      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      threshold2: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      is_active: Joi.boolean(),

      tax2: Joi.number(),
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

      hsn_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      page: CatalogModel.PageResponse(),

      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),
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
      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      article_assignment: CatalogModel.ArticleAssignment(),

      meta: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      company_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_identifier: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      company_id: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      group_id: Joi.string().allow(""),

      store_pincode: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      store_id: Joi.number(),

      meta: Joi.any(),

      _id: Joi.string().allow(""),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      index: Joi.number(),

      price_effective: Joi.number(),

      quantity: Joi.number().required(),

      s_city: Joi.string().allow(""),

      status: Joi.boolean().required(),
    });
  }

  static BrandItem() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),
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

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      logo: CatalogModel.Media(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static Child() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow(""),

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

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      attributes: Joi.any(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      promo_meta: Joi.any(),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      teaser_tag: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      short_description: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      has_variant: Joi.boolean(),

      rating_count: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      item_total: Joi.number().required(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
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

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
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
      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      pincode: Joi.number(),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),
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
      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      verified_by: CatalogModel.UserSerializer2(),

      modified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      integration_type: CatalogModel.LocationIntegrationType(),

      warnings: Joi.any(),

      phone_number: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      _custom_json: Joi.any(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      code: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      manager: CatalogModel.LocationManagerSerializer(),

      modified_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      verified_by: CatalogModel.UserSerializer1(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),
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

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
