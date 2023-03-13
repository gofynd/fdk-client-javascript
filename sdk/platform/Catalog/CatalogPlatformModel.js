const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: Joi.any(),

      _custom_json: Joi.any(),
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
      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),
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
      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

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
      params: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: Joi.any(),
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

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),
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
      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      price: Joi.any(),

      identifier: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      item_code: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      min_effective: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),

      max_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_uid: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.LimitedProductData(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.Price(),

      max_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.GetProducts()),

      company_id: Joi.number(),

      logo: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),
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
      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      tag: Joi.string().allow(""),

      image: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      guide: CatalogModel.Guide(),
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

      active: Joi.boolean(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      guide: Joi.any(),
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

  static ApplicationItemMeta() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      is_gift: Joi.boolean(),
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

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),
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
      priority: Joi.number().required(),

      unit: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

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
      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

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

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      filter_types: Joi.array().items(Joi.string().allow("")),

      units: Joi.array().items(Joi.any()),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.MetaDataListingFilterMetaResponse()),
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

  static MetaDataListingResponse() {
    return Joi.object({
      filter: CatalogModel.MetaDataListingFilterResponse().required(),

      sort: CatalogModel.MetaDataListingSortResponse().required(),
    });
  }

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      variant: Joi.any(),

      compare: Joi.any(),

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

  static ConfigurationBucketPoints() {
    return Joi.object({
      end: Joi.number(),

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map: Joi.any(),

      value: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
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
      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),
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
      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

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

  static ConfigurationProductConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      title: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

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
      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      type: Joi.string().allow(""),
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

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      type: Joi.string().allow(""),
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
      data: CatalogModel.EntityConfiguration(),

      is_default: Joi.boolean(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_min: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      value: Joi.any().required(),

      is_selected: Joi.boolean().required(),

      count: Joi.number(),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),
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

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),
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
      portrait: CatalogModel.BannerImage(),

      landscape: CatalogModel.BannerImage(),
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
      meta: Joi.any(),

      uid: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      action: CatalogModel.Action(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),
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

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

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

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),
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
      meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      logo: CatalogModel.CollectionImage().required(),

      _locale_language: Joi.any(),

      banners: CatalogModel.CollectionBanner().required(),

      created_by: CatalogModel.UserInfo(),

      _schedule: CatalogModel.CollectionSchedule(),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      sort_on: Joi.string().allow(""),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.BannerImage(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),

      sort_on: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      uid: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      cron: Joi.any(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      logo: CatalogModel.CollectionImage(),

      _locale_language: Joi.any(),

      banners: CatalogModel.CollectionBanner(),

      _schedule: CatalogModel.CollectionSchedule(),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo(),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      sort_on: Joi.string().allow(""),
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

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

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
      type: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductDetailGroupedAttribute() {
    return Joi.object({
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      uid: Joi.number(),

      promo_meta: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      rating: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      sellable: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      description: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      image_nature: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page(),

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

  static CatalogInsightBrand() {
    return Joi.object({
      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      available_articles: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      count: Joi.number(),

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
      platform: Joi.string().allow(""),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      platform: Joi.string().allow("").required(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      created_by: Joi.any(),

      company_id: Joi.number().required(),

      modified_by: Joi.any(),

      created_on: Joi.number().required(),

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

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      brand_name: Joi.string().allow(""),

      company_id: Joi.number(),

      total_article: Joi.number(),
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
      address: Joi.any(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      timing: Joi.any(),

      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      manager: Joi.any(),

      created_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
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
      mandatory: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),

      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),

      allowed_values: Joi.array().items(Joi.string().allow("")),
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

      meta: CatalogModel.AttributeMasterMeta(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),

      id: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
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

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      page_size: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      search: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_no: Joi.number(),

      item_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

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

      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      _cls: Joi.string().allow(""),

      platforms: Joi.any(),

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

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      slug: Joi.any(),

      priority_order: Joi.number().required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      _id: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      _cls: Joi.any(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_expirable: Joi.boolean().required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      logo: Joi.string().allow(""),

      modified_by: Joi.any(),
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
      tags: Joi.any(),

      country_of_origin: Joi.any(),

      trader_type: Joi.any(),

      multi_size: Joi.any(),

      size_guide: Joi.any(),

      product_group_tag: Joi.any(),

      command: Joi.any(),

      currency: Joi.any(),

      no_of_boxes: Joi.any(),

      highlights: Joi.any(),

      custom_order: Joi.any(),

      category_slug: Joi.any(),

      item_code: Joi.any(),

      name: Joi.any(),

      slug: Joi.any(),

      short_description: Joi.any(),

      is_active: Joi.any(),

      item_type: Joi.any(),

      media: Joi.any(),

      brand_uid: Joi.any(),

      variants: Joi.any(),

      return_config: Joi.any(),

      description: Joi.any(),

      trader: Joi.any(),

      is_dependent: Joi.any(),

      teaser_tag: Joi.any(),

      product_publish: Joi.any(),

      hsn_code: Joi.any(),

      sizes: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

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

  static TemplateDetails() {
    return Joi.object({
      is_expirable: Joi.boolean().required(),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      logo: Joi.string().allow(""),
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

  static UserInfo1() {
    return Joi.object({
      email: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: Joi.any(),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      type: Joi.string().allow(""),
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

      brands: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      to_date: Joi.string().allow(""),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),
    });
  }

  static ProductPartialExportRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.any(),
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
      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      priority: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      level: Joi.number().required(),
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
      priority: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),
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
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
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
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

      type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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
      tax_identifier: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      tags: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_image_less_product: Joi.boolean(),

      currency: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      no_of_boxes: Joi.number(),

      color: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      variant_group: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      highlights: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      variant_media: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      pending: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      company_id: Joi.number(),

      category_slug: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      created_by: Joi.any(),

      item_code: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      moq: Joi.any(),

      category: Joi.any(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      category_uid: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      modified_by: Joi.any(),

      primary_color: Joi.string().allow(""),

      brand_uid: Joi.number(),

      variants: Joi.any(),

      return_config: CatalogModel.ReturnConfigResponse(),

      is_expirable: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      description: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_dependent: Joi.boolean(),

      departments: Joi.array().items(Joi.number()),

      teaser_tag: Joi.any(),

      product_publish: CatalogModel.ProductPublish(),

      image_nature: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      hsn_code: Joi.string().allow(""),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
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
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      tax_identifier: CatalogModel.TaxIdentifier().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      bulk_job_id: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_image_less_product: Joi.boolean(),

      currency: Joi.string().allow("").required(),

      no_of_boxes: Joi.number(),

      variant_group: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      variant_media: Joi.any(),

      custom_order: CatalogModel.CustomOrder(),

      company_id: Joi.number().required(),

      is_set: Joi.boolean(),

      category_slug: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      item_code: Joi.string().allow("").required(),

      attributes: Joi.any(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      brand_uid: Joi.number().required(),

      variants: Joi.any(),

      return_config: CatalogModel.ReturnConfig().required(),

      template_tag: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      is_dependent: Joi.boolean(),

      departments: Joi.array().items(Joi.number()).required(),

      teaser_tag: CatalogModel.TeaserTag(),

      product_publish: CatalogModel.ProductPublish1(),

      requester: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()).required(),

      change_request_id: Joi.any(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

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
      unit: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      raw_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      synonyms: Joi.any(),

      schema: CatalogModel.AttributeMaster().required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      variant: Joi.boolean(),

      modified_by: Joi.any(),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),
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
      item_weight_unit_of_measure: Joi.any().required(),

      item_height: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_length: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_width: Joi.number().required(),

      size: Joi.any().required(),

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
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      tax_identifier: Joi.any(),

      images: Joi.array().items(CatalogModel.Image()),

      tags: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      multi_size: Joi.boolean(),

      size_guide: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_image_less_product: Joi.boolean(),

      currency: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      no_of_boxes: Joi.number(),

      color: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      variant_group: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      highlights: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      variant_media: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      pending: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      company_id: Joi.number(),

      category_slug: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      created_by: Joi.any(),

      item_code: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      moq: Joi.any(),

      category: Joi.any(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      category_uid: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      modified_by: Joi.any(),

      primary_color: Joi.string().allow(""),

      brand_uid: Joi.number(),

      variants: Joi.any(),

      return_config: CatalogModel.ReturnConfigResponse(),

      is_expirable: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      template_tag: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      description: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_dependent: Joi.boolean(),

      departments: Joi.array().items(Joi.number()),

      teaser_tag: Joi.any(),

      product_publish: CatalogModel.ProductPublished(),

      image_nature: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      hsn_code: Joi.string().allow(""),
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
      cancelled: Joi.number(),

      failed: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      company_id: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserDetail1(),
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
      cancelled: Joi.number(),

      custom_template_tag: Joi.string().allow(""),

      total: Joi.number(),

      failed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tracking_url: Joi.string().allow(""),

      company_id: Joi.number().required(),

      modified_by: CatalogModel.UserInfo1(),

      failed_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      file_path: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      data: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),
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
      cancelled: Joi.number(),

      failed: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tracking_url: Joi.string().allow(""),

      retry: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      company_id: Joi.number(),

      id: Joi.string().allow(""),
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

      company_id: Joi.number(),

      url: Joi.string().allow("").required(),
    });
  }

  static ProductSizeDeleteDataResponse() {
    return Joi.object({
      size: Joi.string().allow(""),

      item_id: Joi.number(),

      company_id: Joi.number(),
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

      price_effective: Joi.number(),

      identifiers: Joi.any(),

      price: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      price_transfer: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      store: Joi.any(),

      sellable_quantity: Joi.number(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      currency: Joi.string().allow(""),

      size: Joi.string().allow(""),
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
      set: CatalogModel.InventorySet(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      quantity: Joi.number().required(),

      price_effective: Joi.number().required(),

      item_height: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price: Joi.number(),

      price_transfer: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),

      size: Joi.any().required(),

      currency: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      item_weight: Joi.number().allow(null),
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
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
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

      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
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
      damaged: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      tax_identifier: Joi.any(),

      meta: Joi.any().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      weight: CatalogModel.WeightResponse().required(),

      uid: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      fynd_article_code: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      total_quantity: Joi.number().required(),

      added_on_store: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      identifier: Joi.any().required(),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      fynd_meta: Joi.any(),

      fynd_item_code: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),

      is_active: Joi.boolean(),

      track_inventory: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      dimension: CatalogModel.DimensionResponse().required(),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number().required(),

      return_config: CatalogModel.ReturnConfig1(),

      set: CatalogModel.InventorySet(),

      company: CatalogModel.CompanyMeta().required(),

      stage: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader1()),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      raw_meta: Joi.any(),

      quantities: CatalogModel.Quantities(),

      fragile: Joi.boolean().required(),

      size: Joi.string().allow("").required(),
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

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      marked: Joi.number(),

      tp_notes: Joi.any(),

      effective: Joi.number(),

      transfer: Joi.number(),

      currency: Joi.string().allow(""),
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

  static DimensionResponse1() {
    return Joi.object({
      width: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      length: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
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

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

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
      damaged: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
    });
  }

  static GetInventories() {
    return Joi.object({
      tax_identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      weight: CatalogModel.WeightResponse1(),

      country_of_origin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      platforms: Joi.any(),

      brand: CatalogModel.BrandMeta1(),

      total_quantity: Joi.number(),

      price: CatalogModel.PriceArticle(),

      identifier: Joi.any(),

      id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      store: CatalogModel.ArticleStoreResponse(),

      inventory_updated_on: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      dimension: CatalogModel.DimensionResponse1(),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number(),

      return_config: CatalogModel.ReturnConfig2(),

      company: CatalogModel.CompanyMeta1(),

      stage: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      date_meta: CatalogModel.DateMeta(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      quantities: CatalogModel.QuantitiesArticle(),

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
      cancelled: Joi.number(),

      failed: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      file_path: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),
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
      tags: Joi.array().items(Joi.string().allow("")),

      item_weight_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      price_effective: Joi.number(),

      total_quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      price: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      user: Joi.any(),

      company_id: Joi.number().required(),

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
      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),

      to_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      url: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      brand: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),

      store: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      filters: Joi.any(),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),

      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      stores: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      cancelled_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.any(),

      filters: CatalogModel.InventoryJobFilters().required(),

      url: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()).required(),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),

      filters: CatalogModel.InventoryExportFilter().required(),
    });
  }

  static InventoryPartialExportRequest() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.any(),
    });
  }

  static InventoryExportCreateFilters() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),
    });
  }

  static InventoryExportCreateResponse() {
    return Joi.object({
      cancelled_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      status: Joi.any(),

      filters: CatalogModel.InventoryExportCreateFilters().required(),

      url: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      type: Joi.string().allow("").allow(null),
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
      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      total_quantity: Joi.number().allow(null),

      store_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      payload: Joi.array().items(CatalogModel.InventoryPayload()),

      meta: Joi.any(),

      company_id: Joi.number().required(),
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
      tax1: Joi.number(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),

      modified_on: Joi.string().allow(""),

      threshold1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

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
      tax1: Joi.number().required(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      threshold2: Joi.number(),

      uid: Joi.number(),

      threshold1: Joi.number().required(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

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

  static TaxSlab() {
    return Joi.object({
      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),

      rate: Joi.number().required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      type: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      item_total: Joi.number(),

      has_previous: Joi.boolean(),

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
      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

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
      name: Joi.string().allow(""),

      uid: Joi.number(),

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

  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),
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
      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      uid: Joi.number(),

      promo_meta: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.ProductBrand(),

      color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      rating: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      description: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      image_nature: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

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
      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

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
      s_city: Joi.string().allow(""),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      index: Joi.number(),

      uid: Joi.string().allow(""),

      quantity: Joi.number().required(),

      price_effective: Joi.number(),

      status: Joi.boolean().required(),

      store_id: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      store_pincode: Joi.number(),

      price_marked: Joi.number(),

      _id: Joi.string().allow(""),

      company_id: Joi.number(),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),
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

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),

      opening: CatalogModel.LocationTimingSerializer(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.number(),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),
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
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      business_type: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),
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
      uid: Joi.number(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      warnings: Joi.any(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      integration_type: CatalogModel.LocationIntegrationType(),

      _custom_json: Joi.any(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      phone_number: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer1(),

      display_name: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      company: CatalogModel.GetCompanySerializer(),

      verified_by: CatalogModel.UserSerializer1(),

      stage: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),
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

      uid: Joi.number().required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

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
