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
      result: Joi.any(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

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
      code: Joi.string().allow(""),

      error: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

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
      query: Joi.any().required(),

      sort_on: Joi.string().allow("").required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      params: Joi.any(),

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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
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
      min_quantity: Joi.number().required(),

      product_uid: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),
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

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      identifier: Joi.any(),

      name: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      price: Joi.any(),

      slug: Joi.string().allow(""),

      attributes: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      product_uid: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),

      sizes: Joi.array().items(CatalogModel.Size()),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      choice: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),
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
      values: Joi.array().items(Joi.any()),

      unit: Joi.string().allow(""),

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

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      image: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      guide: CatalogModel.Guide(),

      tag: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_by: Joi.any(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      title: Joi.string().allow(""),

      guide: Joi.any(),
    });
  }

  static MOQData() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
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
      moq: CatalogModel.MOQData(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      seo: CatalogModel.SEOData(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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
      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

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
      has_next: Joi.boolean().required(),

      next: Joi.number().required(),

      current: Joi.number().required(),

      total_count: Joi.number().required(),
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

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

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
      default_key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      similar: Joi.any(),

      detail: Joi.any(),

      compare: Joi.any(),

      variant: Joi.any(),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),
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
      end: Joi.number(),

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      sort: Joi.string().allow(""),

      map: Joi.any(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      display_name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationListingSortConfig()),

      default_key: Joi.string().allow("").required(),
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
      is_active: Joi.boolean().required(),

      subtitle: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

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
      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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
      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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
      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

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

  static ProductFiltersKey() {
    return Joi.object({
      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      value: Joi.any().required(),

      query_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      max: Joi.number(),

      count: Joi.number(),

      selected_max: Joi.number(),

      selected_min: Joi.number(),

      display_format: Joi.string().allow(""),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static Media1() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      meta: Joi.any(),

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
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      meta: Joi.any(),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      badge: Joi.any(),

      action: CatalogModel.Action(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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

  static CollectionImage() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      aspect_ratio: Joi.string().allow("").required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
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
      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),

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

      logo: CatalogModel.CollectionImage().required(),

      app_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      _locale_language: Joi.any(),

      created_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      priority: Joi.number(),

      banners: CatalogModel.CollectionBanner().required(),

      _schedule: CatalogModel.CollectionSchedule(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow("").required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      meta: Joi.any(),

      logo: CatalogModel.BannerImage(),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      cron: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      _schedule: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      meta: Joi.any(),

      logo: CatalogModel.CollectionImage(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_visible: Joi.boolean(),

      _locale_language: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      priority: Joi.number(),

      banners: CatalogModel.CollectionBanner(),

      _schedule: CatalogModel.CollectionSchedule(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      sort_on: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
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
      effective: CatalogModel.Price1(),

      marked: CatalogModel.Price1(),
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
      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      rating_count: Joi.number(),

      teaser_tag: Joi.any(),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      attributes: Joi.any(),

      discount: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),
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
      total_articles: Joi.number(),

      article_freshness: Joi.number(),

      available_articles: Joi.number(),

      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_sizes: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      sellable_count: Joi.number(),

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
      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),

      enabled: Joi.boolean(),

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      created_by: Joi.any(),

      created_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      platform: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      brand_ids: Joi.array().items(Joi.number()).required(),
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
      company_id: Joi.number(),

      brand_name: Joi.string().allow(""),

      total_article: Joi.number(),

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
      timing: Joi.any(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      company_id: Joi.number(),

      uid: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      manager: Joi.any(),

      address: Joi.any(),
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
      format: Joi.string().allow(""),

      range: CatalogModel.AttributeSchemaRange(),

      mandatory: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      enabled_for_end_consumer: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.AttributeMasterFilter(),

      schema: CatalogModel.AttributeMaster(),

      logo: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      template_slug: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      code: Joi.string().allow(""),

      meta: Joi.any(),

      errors: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      page_no: Joi.number(),

      item_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      search: Joi.string().allow(""),

      priority_order: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      page_size: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),
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

      errors: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      _custom_json: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _cls: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      platforms: Joi.any(),

      slug: Joi.string().allow(""),
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

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      _cls: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _id: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      uid: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      slug: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      is_physical: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

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
      id: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      multi_size: Joi.any(),

      item_code: Joi.any(),

      size_guide: Joi.any(),

      is_dependent: Joi.any(),

      slug: Joi.any(),

      description: Joi.any(),

      variants: Joi.any(),

      trader: Joi.any(),

      teaser_tag: Joi.any(),

      name: Joi.any(),

      media: Joi.any(),

      hsn_code: Joi.any(),

      category_slug: Joi.any(),

      brand_uid: Joi.any(),

      no_of_boxes: Joi.any(),

      currency: Joi.any(),

      is_active: Joi.any(),

      short_description: Joi.any(),

      item_type: Joi.any(),

      tags: Joi.any(),

      custom_order: Joi.any(),

      product_group_tag: Joi.any(),

      sizes: Joi.any(),

      product_publish: Joi.any(),

      return_config: Joi.any(),

      highlights: Joi.any(),

      command: Joi.any(),

      country_of_origin: Joi.any(),

      trader_type: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      definitions: Joi.any(),

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
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      filters: Joi.any(),

      status: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      url: Joi.string().allow(""),

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
      brands: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      to_date: Joi.string().allow(""),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      from_date: Joi.string().allow(""),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),
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
      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
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
      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      media: CatalogModel.Media2(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      uid: Joi.number(),

      level: Joi.number().required(),

      priority: Joi.number(),

      created_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      modified_by: Joi.any(),

      slug: Joi.string().allow(""),

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
      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      departments: Joi.array().items(Joi.number()).required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      level: Joi.number().required(),

      priority: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
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

      logo: CatalogModel.Logo(),

      name: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),
    });
  }

  static Image() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
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

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      multi_size: Joi.boolean(),

      moq: Joi.any(),

      category_uid: Joi.number(),

      color: Joi.string().allow(""),

      variant_group: Joi.any(),

      brand: CatalogModel.Brand(),

      company_id: Joi.number(),

      item_code: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      id: Joi.string().allow(""),

      variants: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      verified_on: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      media: Joi.array().items(CatalogModel.Media1()),

      hsn_code: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      created_by: Joi.any(),

      is_physical: Joi.boolean(),

      tax_identifier: Joi.any(),

      is_image_less_product: Joi.boolean(),

      is_expirable: Joi.boolean(),

      brand_uid: Joi.number(),

      no_of_boxes: Joi.number(),

      attributes: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      category: Joi.any(),

      currency: Joi.string().allow(""),

      is_active: Joi.boolean(),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      pending: Joi.string().allow(""),

      uid: Joi.number(),

      is_set: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      created_on: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      custom_order: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      all_company_ids: Joi.array().items(Joi.number()),

      product_publish: CatalogModel.ProductPublish(),

      variant_media: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      return_config: CatalogModel.ReturnConfigResponse(),

      country_of_origin: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),
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

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
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
      multi_size: Joi.boolean(),

      change_request_id: Joi.any(),

      variant_group: Joi.any(),

      company_id: Joi.number().required(),

      item_code: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      variants: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      teaser_tag: CatalogModel.TeaserTag(),

      name: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      departments: Joi.array().items(Joi.number()).required(),

      category_slug: Joi.string().allow("").required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      is_image_less_product: Joi.boolean(),

      brand_uid: Joi.number().required(),

      no_of_boxes: Joi.number(),

      attributes: Joi.any(),

      currency: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      requester: Joi.string().allow(""),

      uid: Joi.number().allow(null),

      is_set: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      template_tag: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.any()).required(),

      product_publish: CatalogModel.ProductPublish1(),

      action: Joi.string().allow(""),

      variant_media: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      country_of_origin: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),
    });
  }

  static ProductVariants() {
    return Joi.object({
      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

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
      variant: Joi.boolean(),

      raw_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      enabled_for_end_consumer: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      is_nested: Joi.boolean(),

      unit: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      details: CatalogModel.AttributeMasterDetails().required(),

      synonyms: Joi.any(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      schema: CatalogModel.AttributeMaster().required(),
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
      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      size: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow("").required(),

      item_height: Joi.number().required(),

      item_width: Joi.number().required(),

      item_weight: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),
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
      multi_size: Joi.boolean(),

      moq: Joi.any(),

      category_uid: Joi.number(),

      color: Joi.string().allow(""),

      variant_group: Joi.any(),

      brand: CatalogModel.Brand(),

      company_id: Joi.number(),

      item_code: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      description: Joi.string().allow(""),

      _custom_json: Joi.any(),

      id: Joi.string().allow(""),

      variants: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      verified_on: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      media: Joi.array().items(CatalogModel.Media1()),

      hsn_code: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      created_by: Joi.any(),

      is_physical: Joi.boolean(),

      tax_identifier: Joi.any(),

      is_image_less_product: Joi.boolean(),

      is_expirable: Joi.boolean(),

      brand_uid: Joi.number(),

      no_of_boxes: Joi.number(),

      attributes: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      category: Joi.any(),

      currency: Joi.string().allow(""),

      is_active: Joi.boolean(),

      short_description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      pending: Joi.string().allow(""),

      uid: Joi.number(),

      is_set: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      created_on: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),

      custom_order: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      modified_by: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      all_company_ids: Joi.array().items(Joi.number()),

      product_publish: CatalogModel.ProductPublished(),

      variant_media: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      return_config: CatalogModel.ReturnConfigResponse(),

      country_of_origin: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),
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

      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),
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

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      company_id: Joi.number().required(),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      cancelled_records: Joi.array().items(Joi.any()),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

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
      failed: Joi.number(),

      retry: Joi.number(),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),
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

      company_id: Joi.number(),

      user: Joi.any().required(),
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
      store: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      size: Joi.string().allow(""),

      price_transfer: Joi.number(),

      price: Joi.number(),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      sellable_quantity: Joi.number(),

      identifiers: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),
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
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),
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

      quantity: Joi.number(),

      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.string().allow("").required(),

      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static InvSize() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      item_length: Joi.number().allow(null),

      size: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),

      price_transfer: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      is_set: Joi.boolean(),

      price_effective: Joi.number().required(),

      quantity: Joi.number().required(),

      item_width: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),
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
      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      tp_notes: Joi.any(),

      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

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

      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static CompanyMeta() {
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
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      meta: Joi.any().allow(null),

      set: CatalogModel.InventorySet(),

      expiration_date: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta().required(),

      stage: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      item_id: Joi.number().required(),

      raw_meta: Joi.any(),

      _custom_json: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      total_quantity: Joi.number().required(),

      added_on_store: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      fynd_meta: Joi.any(),

      fynd_article_code: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      fynd_item_code: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),

      identifier: Joi.any().required(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      fragile: Joi.boolean().required(),

      uid: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      seller_identifier: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      weight: CatalogModel.WeightResponse().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      quantities: CatalogModel.Quantities(),

      company: CatalogModel.CompanyMeta().required(),

      size: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig1(),

      dimension: CatalogModel.DimensionResponse().required(),

      country_of_origin: Joi.string().allow("").required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
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
      effective: Joi.number(),

      currency: Joi.string().allow(""),

      tp_notes: Joi.any(),

      transfer: Joi.number(),

      marked: Joi.number(),
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

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
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

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_default: Joi.boolean(),

      address: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
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
      unit: Joi.string().allow(""),

      length: Joi.number(),

      height: Joi.number(),

      width: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      stage: Joi.string().allow(""),

      item_id: Joi.number(),

      price: CatalogModel.PriceArticle(),

      date_meta: CatalogModel.DateMeta(),

      id: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      total_quantity: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      store: CatalogModel.ArticleStoreResponse(),

      identifier: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      is_set: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      seller_identifier: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      weight: CatalogModel.WeightResponse1(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      track_inventory: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      size: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      dimension: CatalogModel.DimensionResponse1(),

      country_of_origin: Joi.string().allow(""),

      platforms: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      cancelled: Joi.number(),

      stage: Joi.string().allow(""),

      company_id: Joi.number(),

      created_by: Joi.any(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),
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

      total_quantity: Joi.number(),

      currency: Joi.string().allow(""),

      price_marked: Joi.number(),

      store_code: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      item_weight_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow("").allow(null),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),
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

      to_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
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
      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      filters: Joi.any(),

      status: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      type: Joi.string().allow(""),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),

      stores: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      from_date: Joi.string().allow(""),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow("").required(),

      cancelled_by: CatalogModel.UserDetail(),

      modified_on: Joi.string().allow(""),

      filters: CatalogModel.InventoryJobFilters().required(),

      status: Joi.string().allow(""),

      cancelled_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      task_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      url: Joi.string().allow("").required(),

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

      to_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      brand_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),
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

      total_quantity: Joi.number().allow(null),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_id: Joi.number().required(),
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

  static HsnCodesObject() {
    return Joi.object({
      tax_on_mrp: Joi.boolean(),

      id: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      threshold2: Joi.number(),
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

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold1: Joi.number().required(),

      tax1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      uid: Joi.number(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      threshold2: Joi.number(),
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
      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),
    });
  }

  static TaxSlab() {
    return Joi.object({
      rate: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      reporting_hsn: Joi.string().allow("").required(),

      created_by: Joi.any(),

      hsn_code_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      description: Joi.string().allow("").required(),
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
      banners: CatalogModel.ImageUrls(),

      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),
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
      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

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

  static CategoryListingResponse() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.DepartmentIdentifier()),

      data: Joi.array().items(CatalogModel.DepartmentCategoryTree()),
    });
  }

  static ApplicationProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page().required(),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      color: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      teaser_tag: Joi.any(),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      attributes: Joi.any(),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),
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
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
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
      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_identifier: Joi.string().allow(""),

      company_id: Joi.number(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      app_id: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),
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
      strategy_wise_listing: Joi.array().items(Joi.any()),

      group_id: Joi.string().allow(""),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      _id: Joi.string().allow(""),

      price_marked: Joi.number(),

      size: Joi.string().allow("").required(),

      status: Joi.boolean().required(),

      store_pincode: Joi.number(),

      company_id: Joi.number(),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_id: Joi.number(),

      quantity: Joi.number().required(),

      index: Joi.number(),

      item_id: Joi.number().required(),

      s_city: Joi.string().allow(""),
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

      weekday: Joi.string().allow("").required(),

      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
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

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean(),
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

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

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
      verified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      business_type: Joi.string().allow(""),
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
      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      stage: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      verified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      documents: Joi.array().items(CatalogModel.Document()),

      store_type: Joi.string().allow(""),

      integration_type: CatalogModel.LocationIntegrationType(),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      warnings: Joi.any(),

      modified_by: CatalogModel.UserSerializer1(),

      address: CatalogModel.GetAddressSerializer().required(),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      company: CatalogModel.GetCompanySerializer(),

      verified_by: CatalogModel.UserSerializer1(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),
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
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      uid: Joi.number().required(),

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
