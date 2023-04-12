const Joi = require("joi");

class CatalogModel {
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
      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      result: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      result: CatalogModel.SearchKeywordResult().required(),

      words: Joi.array().items(Joi.string().allow("")),
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

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

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
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

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
      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),
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

      max_marked: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      price: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      identifier: Joi.any(),
    });
  }

  static GetProducts() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      logo: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),
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
      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      created_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      id: Joi.string().allow(""),

      image: Joi.string().allow(""),

      active: Joi.boolean(),

      title: Joi.string().allow("").required(),

      modified_by: Joi.any(),

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
      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: Joi.any(),

      created_by: Joi.any(),

      brand_id: Joi.number(),

      id: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_by: Joi.any(),

      title: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.any(),

      description: Joi.any(),
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
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      moq: CatalogModel.ApplicationItemMOQ(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),
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
      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static PageResponseType() {
    return Joi.object({
      current: Joi.number().required(),

      next: Joi.number().required(),

      total_count: Joi.number().required(),

      has_next: Joi.boolean().required(),
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
      slug: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationsSort() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      detail: Joi.any(),

      variant: Joi.any(),

      similar: Joi.any(),

      compare: Joi.any(),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),
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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
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
      sort: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      value_config: CatalogModel.ConfigurationListingFilterValue(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),
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

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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

  static ConfigurationProductConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),
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

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

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
      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),
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

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),
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
      operators: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      max: Joi.number(),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      selected_max: Joi.number(),

      count: Joi.number(),

      query_format: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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
      url: Joi.string().allow("").required(),

      meta: Joi.any(),

      type: Joi.string().allow(""),
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

  static GetCollectionDetailNest() {
    return Joi.object({
      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      action: CatalogModel.Action(),

      allow_sort: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),

      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),
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

  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),
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
      name: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo(),

      modified_by: CatalogModel.UserInfo(),

      allow_facets: Joi.boolean(),

      _locale_language: Joi.any(),

      published: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.CollectionImage().required(),

      slug: Joi.string().allow("").required(),

      seo: CatalogModel.SeoDetail(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      _schedule: CatalogModel.CollectionSchedule(),

      type: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_visible: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      app_id: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.BannerImage(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      allow_facets: Joi.boolean(),

      _locale_language: Joi.any(),

      published: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      logo: CatalogModel.CollectionImage(),

      slug: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      description: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: CatalogModel.CollectionSchedule(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_visible: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      allow_sort: Joi.boolean(),
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

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),
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

  static ProductListingDetail() {
    return Joi.object({
      teaser_tag: Joi.any(),

      name: Joi.string().allow(""),

      sellable: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      has_variant: Joi.boolean(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      image_nature: Joi.string().allow(""),

      attributes: Joi.any(),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      uid: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      discount: Joi.string().allow(""),

      short_description: Joi.string().allow(""),
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

  static CollectionItem() {
    return Joi.object({
      item_id: Joi.number().required(),

      action: Joi.string().allow("").required(),

      priority: Joi.number(),
    });
  }

  static CollectionItemUpdate() {
    return Joi.object({
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      items: Joi.array().items(CatalogModel.CollectionItem()),

      allow_sort: Joi.boolean(),
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
      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),

      article_freshness: Joi.number(),

      available_articles: Joi.number(),
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
      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      company_id: Joi.number().required(),

      created_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

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
      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      brand_id: Joi.number(),

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

      brand: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      uid: Joi.number(),

      timing: Joi.any(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      address: Joi.any(),

      manager: Joi.any(),

      display_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),
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
      format: Joi.string().allow(""),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),
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
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
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
      slug: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      name: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      details: CatalogModel.AttributeMasterDetails(),

      meta: CatalogModel.AttributeMasterMeta(),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),
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
      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      page_no: Joi.number(),

      logo: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      priority_order: Joi.number(),

      item_type: Joi.string().allow(""),

      search: Joi.string().allow(""),

      page_size: Joi.number(),

      modified_on: Joi.string().allow(""),
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
      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      logo: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

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

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      uid: Joi.number().required(),

      slug: Joi.any().required(),

      verified_on: Joi.string().allow(""),

      name: Joi.any().required(),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      _cls: Joi.any(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_physical: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      created_by: Joi.any(),

      description: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      is_expirable: Joi.boolean().required(),

      tag: Joi.string().allow(""),

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

  static TemplateDetails() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_physical: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      categories: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      description: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),
    });
  }

  static Properties() {
    return Joi.object({
      teaser_tag: Joi.any(),

      name: Joi.any(),

      media: Joi.any(),

      trader: Joi.any(),

      no_of_boxes: Joi.any(),

      multi_size: Joi.any(),

      size_guide: Joi.any(),

      currency: Joi.any(),

      is_dependent: Joi.any(),

      custom_order: Joi.any(),

      is_active: Joi.any(),

      category_slug: Joi.any(),

      item_code: Joi.any(),

      command: Joi.any(),

      item_type: Joi.any(),

      slug: Joi.any(),

      product_group_tag: Joi.any(),

      tags: Joi.any(),

      description: Joi.any(),

      highlights: Joi.any(),

      return_config: Joi.any(),

      hsn_code: Joi.any(),

      brand_uid: Joi.any(),

      sizes: Joi.any(),

      country_of_origin: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.any(),

      trader_type: Joi.any(),

      product_publish: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

  static UserInfo1() {
    return Joi.object({
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      filters: Joi.any(),

      type: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      to_date: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      brands: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),

      type: Joi.string().allow("").allow(null),
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
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
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

  static Category() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      priority: Joi.number(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      level: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),
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
      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      priority: Joi.number(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),
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

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),

      type: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
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
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      teaser_tag: Joi.any(),

      name: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      verified_by: CatalogModel.VerifiedBy(),

      trader: Joi.array().items(CatalogModel.Trader()),

      created_by: Joi.any(),

      no_of_boxes: Joi.number(),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      currency: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      variant_media: Joi.any(),

      variant_group: Joi.any(),

      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      custom_order: Joi.any(),

      _custom_json: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      is_expirable: Joi.boolean(),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfigResponse(),

      brand: CatalogModel.Brand(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      all_company_ids: Joi.array().items(Joi.number()),

      hsn_code: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      is_physical: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      is_set: Joi.boolean(),

      variants: Joi.any(),

      category_uid: Joi.number(),

      id: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      moq: Joi.any(),

      pending: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductSchemaV2()),
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
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
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
      value: Joi.number(),

      unit: Joi.any(),
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
      teaser_tag: CatalogModel.TeaserTag(),

      name: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      no_of_boxes: Joi.number(),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      template_tag: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      is_dependent: Joi.boolean(),

      variant_group: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      departments: Joi.array().items(Joi.number()).required(),

      _custom_json: Joi.any(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      requester: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),

      item_code: Joi.string().allow("").required(),

      item_type: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      return_config: CatalogModel.ReturnConfig().required(),

      net_quantity: CatalogModel.NetQuantity(),

      uid: Joi.number().allow(null),

      brand_uid: Joi.number().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      country_of_origin: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      change_request_id: Joi.any(),

      action: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish1(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      uid: Joi.number(),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),
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
      is_nested: Joi.boolean(),

      name: Joi.string().allow(""),

      created_by: Joi.any(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      unit: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      variant: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),
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
      item_length: Joi.number().required(),

      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.any().required(),

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
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
    });
  }

  static Product() {
    return Joi.object({
      teaser_tag: Joi.any(),

      name: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      verified_by: CatalogModel.VerifiedBy(),

      trader: Joi.array().items(CatalogModel.Trader()),

      created_by: Joi.any(),

      no_of_boxes: Joi.number(),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      currency: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      variant_media: Joi.any(),

      variant_group: Joi.any(),

      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      custom_order: Joi.any(),

      _custom_json: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      is_expirable: Joi.boolean(),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      description: Joi.string().allow(""),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfigResponse(),

      brand: CatalogModel.Brand(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      all_company_ids: Joi.array().items(Joi.number()),

      hsn_code: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      is_physical: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      is_set: Joi.boolean(),

      variants: Joi.any(),

      category_uid: Joi.number(),

      id: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      moq: Joi.any(),

      pending: Joi.string().allow(""),

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
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      failed: Joi.number(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),
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
      failed: Joi.number(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      modified_by: CatalogModel.UserInfo1(),

      template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      total: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      modified_on: Joi.string().allow(""),
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
      user_id: Joi.string().allow(""),

      company_id: Joi.number(),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      failed: Joi.number(),

      retry: Joi.number(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      cancelled: Joi.number(),

      id: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserCommon(),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),
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
      url: Joi.string().allow("").required(),

      user: Joi.any().required(),

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
      data: CatalogModel.ProductSizeDeleteDataResponse(),

      success: Joi.boolean(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price: Joi.number(),

      quantity: Joi.number(),

      store: Joi.any(),

      item_id: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      price_transfer: Joi.number(),

      identifiers: Joi.any(),

      currency: Joi.string().allow(""),

      size: Joi.string().allow(""),

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

      brand_uid: Joi.number(),

      item_code: Joi.string().allow(""),
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
      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      quantity: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      item_length: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price_transfer: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      currency: Joi.string().allow("").required(),

      size: Joi.any().required(),

      set: CatalogModel.InventorySet(),

      price_effective: Joi.number().required(),

      item_height: Joi.number().allow(null),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),
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
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),
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

      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      total_quantity: Joi.number().required(),

      store: CatalogModel.StoreMeta().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      created_by: CatalogModel.UserSerializer(),

      fragile: Joi.boolean().required(),

      modified_by: CatalogModel.UserSerializer(),

      identifier: Joi.any().required(),

      weight: CatalogModel.WeightResponse().required(),

      set: CatalogModel.InventorySet(),

      trace_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      tax_identifier: Joi.any(),

      meta: Joi.any().allow(null),

      fynd_meta: Joi.any(),

      dimension: CatalogModel.DimensionResponse().required(),

      fynd_article_code: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      company: CatalogModel.CompanyMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      track_inventory: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig1(),

      size: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      uid: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      stage: Joi.string().allow(""),

      item_id: Joi.number().required(),

      is_set: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      quantities: CatalogModel.Quantities(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
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

  static DimensionResponse1() {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      length: Joi.number(),

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
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      effective: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      transfer: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),
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

      order_committed: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),
    });
  }

  static GetInventories() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      total_quantity: Joi.number(),

      store: CatalogModel.ArticleStoreResponse(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      created_by: CatalogModel.UserSerializer(),

      inventory_updated_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      identifier: Joi.any(),

      weight: CatalogModel.WeightResponse1(),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      platforms: Joi.any(),

      dimension: CatalogModel.DimensionResponse1(),

      company: CatalogModel.CompanyMeta1(),

      tags: Joi.array().items(Joi.string().allow("")),

      track_inventory: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig2(),

      size: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      uid: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      stage: Joi.string().allow(""),

      item_id: Joi.number(),

      is_set: Joi.boolean(),

      country_of_origin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

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
      failed: Joi.number(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      created_by: Joi.any(),

      cancelled: Joi.number(),

      id: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),
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
      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      store_code: Joi.string().allow("").required(),

      total_quantity: Joi.number(),

      quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),
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
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      store_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow("").allow(null),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      type: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
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

      created_on: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      filters: Joi.any(),

      type: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      stores: Joi.array().items(Joi.string().allow("")),

      brands: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      cancelled_by: CatalogModel.UserDetail(),

      created_by: CatalogModel.UserDetail(),

      id: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryJobFilters().required(),

      type: Joi.string().allow("").allow(null),

      seller_id: Joi.number().required(),

      cancelled_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.any(),

      modified_on: Joi.string().allow(""),
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

      store_ids: Joi.array().items(Joi.number()).required(),

      to_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),

      type: Joi.string().allow("").allow(null),

      data: Joi.array().items(Joi.string().allow("")),
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
      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      store_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

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

  static HsnCodesObject() {
    return Joi.object({
      tax2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      company_id: Joi.number(),

      threshold1: Joi.number(),

      id: Joi.string().allow(""),

      threshold2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

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
      uid: Joi.number(),

      tax2: Joi.number(),

      is_active: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      company_id: Joi.number().required(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

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

  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_by: Joi.any(),

      type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

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

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

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
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),

      action: CatalogModel.Action(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      action: CatalogModel.Action(),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      action: CatalogModel.Action(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      action: CatalogModel.Action(),
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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      teaser_tag: Joi.any(),

      name: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      rating_count: Joi.number(),

      has_variant: Joi.boolean(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      image_nature: Joi.string().allow(""),

      attributes: Joi.any(),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      uid: Joi.number(),

      rating: Joi.number(),

      promo_meta: Joi.any(),

      short_description: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      next_id: Joi.string().allow("").allow(null),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean(),
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
      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow("").required(),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      quantity: Joi.number(),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),

      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),
    });
  }

  static AssignStore() {
    return Joi.object({
      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      app_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

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
      uid: Joi.string().allow(""),

      store_pincode: Joi.number(),

      _id: Joi.string().allow(""),

      company_id: Joi.number(),

      quantity: Joi.number().required(),

      meta: Joi.any(),

      item_id: Joi.number().required(),

      store_id: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      price_effective: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      group_id: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      index: Joi.number(),

      status: Joi.boolean().required(),

      price_marked: Joi.number(),

      s_city: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static UserSerializer1() {
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

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      created_by: CatalogModel.UserSerializer2(),

      modified_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      company_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),
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

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      name: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserSerializer1(),

      warnings: Joi.any(),

      created_by: CatalogModel.UserSerializer1(),

      modified_by: CatalogModel.UserSerializer1(),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      manager: CatalogModel.LocationManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      store_type: Joi.string().allow(""),

      company: CatalogModel.GetCompanySerializer(),

      code: Joi.string().allow("").required(),

      uid: Joi.number(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      stage: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      integration_type: CatalogModel.LocationIntegrationType(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CatalogModel.Document()),
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

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

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
