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
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      sort_on: Joi.string().allow("").required(),

      query: Joi.any().required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

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
      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),
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

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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
      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_marked: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      price: Joi.any(),

      slug: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      identifier: Joi.any(),

      short_description: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.Price(),

      max_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.LimitedProductData(),

      min_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      choice: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
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
      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      image: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

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
      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),

      guide: Joi.any(),

      name: Joi.string().allow(""),

      title: Joi.string().allow(""),
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

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_cod: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
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
      increment_unit: Joi.number(),

      maximum: Joi.number(),

      minimum: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_gift: Joi.boolean(),

      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

      is_cod: Joi.boolean(),

      moq: CatalogModel.MOQData(),
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

      has_next: Joi.boolean().required(),

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

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),
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

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

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
      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
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

      size: CatalogModel.ProductSize().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

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
      key: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize(),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      title: Joi.string().allow(""),
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

  static ConfigurationBucketPoints() {
    return Joi.object({
      display: Joi.string().allow(""),

      start: Joi.number(),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),
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

  static AppCatalogConfiguration() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

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
      config_type: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),
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
      config_type: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),

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

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      selected_max: Joi.number(),

      currency_code: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      selected_min: Joi.number(),

      query_format: Joi.string().allow(""),

      value: Joi.any().required(),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),
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
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),

      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),
    });
  }

  static BannerImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),
    });
  }

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
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
      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      _schedule: Joi.any(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      badge: Joi.any(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
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
      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

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
      banners: CatalogModel.CollectionBanner().required(),

      allow_sort: Joi.boolean(),

      created_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      type: Joi.string().allow("").required(),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      modified_by: CatalogModel.UserInfo(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      _schedule: CatalogModel.CollectionSchedule(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage().required(),

      slug: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      published: Joi.boolean(),

      is_active: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      is_visible: Joi.boolean(),

      name: Joi.string().allow("").required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      badge: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      allow_sort: Joi.boolean(),

      type: Joi.string().allow(""),

      cron: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      _schedule: Joi.any(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      slug: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      badge: Joi.any(),

      name: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      banners: CatalogModel.CollectionBanner(),

      allow_sort: Joi.boolean(),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      modified_by: CatalogModel.UserInfo(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      _schedule: CatalogModel.CollectionSchedule(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      published: Joi.boolean(),

      is_active: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      is_visible: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static ProductBrand() {
    return Joi.object({
      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      uid: Joi.number(),
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

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

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
      medias: Joi.array().items(CatalogModel.Media1()),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      short_description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      promo_meta: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      sellable: Joi.boolean(),

      discount: Joi.string().allow(""),

      name: Joi.string().allow(""),

      attributes: Joi.any(),
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
      item_id: Joi.number(),

      action: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      available_sizes: Joi.number(),

      available_articles: Joi.number(),

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
      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow("").required(),

      created_by: Joi.any(),

      enabled: Joi.boolean().required(),

      modified_on: Joi.number().required(),

      created_on: Joi.number().required(),

      modified_by: Joi.any(),

      company_id: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

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
      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      total_article: Joi.number(),

      company_id: Joi.number(),

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

      brand: Joi.number(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      documents: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      address: Joi.any(),

      company_id: Joi.number(),

      manager: Joi.any(),

      timing: Joi.any(),

      name: Joi.string().allow(""),
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
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
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

      indexing: Joi.boolean().required(),

      priority: Joi.number(),
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

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      range: CatalogModel.AttributeSchemaRange(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      enabled_for_end_consumer: Joi.boolean(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      id: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      filters: CatalogModel.AttributeMasterFilter(),

      schema: CatalogModel.AttributeMaster(),

      name: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      template_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      page_no: Joi.number(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      page_size: Joi.number(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      search: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      errors: Joi.any(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      platforms: Joi.any(),

      slug: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

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
      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      slug: Joi.any(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      priority_order: Joi.number().required(),

      _cls: Joi.any(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.any().required(),

      synonyms: Joi.array().items(Joi.any()),

      verified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      is_physical: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

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
      multi_size: Joi.any(),

      media: Joi.any(),

      short_description: Joi.any(),

      variants: Joi.any(),

      no_of_boxes: Joi.any(),

      trader: Joi.any(),

      is_dependent: Joi.any(),

      brand_uid: Joi.any(),

      highlights: Joi.any(),

      trader_type: Joi.any(),

      item_code: Joi.any(),

      size_guide: Joi.any(),

      item_type: Joi.any(),

      return_config: Joi.any(),

      sizes: Joi.any(),

      teaser_tag: Joi.any(),

      hsn_code: Joi.any(),

      country_of_origin: Joi.any(),

      description: Joi.any(),

      product_publish: Joi.any(),

      slug: Joi.any(),

      currency: Joi.any(),

      tags: Joi.any(),

      category_slug: Joi.any(),

      is_active: Joi.any(),

      custom_order: Joi.any(),

      product_group_tag: Joi.any(),

      command: Joi.any(),

      name: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),

      definitions: Joi.any(),

      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

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
      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_archived: Joi.boolean(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

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

  static ProductDownloadItemsData() {
    return Joi.object({
      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
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

      created_by: CatalogModel.VerifiedBy(),

      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      id: Joi.string().allow(""),

      template_tags: Joi.any(),

      task_id: Joi.string().allow(""),

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
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
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

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      department: Joi.number().required(),

      l2: Joi.number().required(),
    });
  }

  static Category() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      created_by: Joi.any(),

      media: CatalogModel.Media2(),

      marketplaces: CatalogModel.CategoryMapping(),

      uid: Joi.number(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      departments: Joi.array().items(Joi.number()).required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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

      created_by: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      pending: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      short_description: Joi.string().allow(""),

      variants: Joi.any(),

      no_of_boxes: Joi.number(),

      is_set: Joi.boolean(),

      moq: Joi.any(),

      departments: Joi.array().items(Joi.number()),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()),

      brand_uid: Joi.number(),

      company_id: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      uid: Joi.number(),

      tax_identifier: Joi.any(),

      variant_media: Joi.any(),

      verified_on: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      stage: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      sizes: Joi.array().items(Joi.any()),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      hsn_code: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      description: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      product_publish: CatalogModel.ProductPublished(),

      slug: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      variant_group: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      custom_order: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      all_company_ids: Joi.array().items(Joi.number()),

      category_uid: Joi.number(),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      is_expirable: Joi.boolean(),

      primary_color: Joi.string().allow(""),
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
      unit: Joi.any(),

      value: Joi.number(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),

      returnable: Joi.boolean().required(),
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

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      multi_size: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      _custom_json: Joi.any(),

      is_image_less_product: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      short_description: Joi.string().allow(""),

      variants: Joi.any(),

      change_request_id: Joi.any(),

      is_set: Joi.boolean(),

      no_of_boxes: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      bulk_job_id: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      is_dependent: Joi.boolean(),

      brand_uid: Joi.number().required(),

      company_id: Joi.number().required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      requester: Joi.string().allow(""),

      item_code: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      item_type: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      sizes: Joi.array().items(Joi.any()).required(),

      teaser_tag: CatalogModel.TeaserTag(),

      country_of_origin: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      slug: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      action: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      attributes: Joi.any(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      category_uid: Joi.number(),

      name: Joi.string().allow(""),
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
      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      enabled_for_end_consumer: Joi.boolean(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      raw_key: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      variant: Joi.boolean(),

      description: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      synonyms: Joi.any(),
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
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),

      size: Joi.any().required(),

      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

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

  static UserDetail1() {
    return Joi.object({
      full_name: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),

      template_tag: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      company_id: Joi.number(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      total: Joi.number(),
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
      failed_records: Joi.array().items(Joi.any()),

      cancelled_records: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserInfo1(),

      template_tag: Joi.string().allow(""),

      failed: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      company_id: Joi.number().required(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      failed_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserCommon(),

      failed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      id: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

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
      user: Joi.any().required(),

      company_id: Joi.number(),

      url: Joi.string().allow("").required(),
    });
  }

  static ProductSizeDeleteDataResponse() {
    return Joi.object({
      item_id: Joi.number(),

      size: Joi.string().allow(""),

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
      item_id: Joi.number(),

      size: Joi.string().allow(""),

      price_effective: Joi.number(),

      price: Joi.number(),

      price_transfer: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      store: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      sellable_quantity: Joi.number(),

      quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),
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
      gtin_type: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_value: Joi.any().required(),
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
      size_distribution: CatalogModel.SizeDistribution().required(),

      quantity: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static InvSize() {
    return Joi.object({
      item_length: Joi.number().allow(null),

      is_set: Joi.boolean(),

      item_weight: Joi.number().allow(null),

      size: Joi.any().required(),

      price_effective: Joi.number().required(),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      price_transfer: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_height: Joi.number().allow(null),

      quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),
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

      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
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
      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),
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
      not_available: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      item_id: Joi.number().required(),

      fynd_meta: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      expiration_date: Joi.string().allow(""),

      _custom_json: Joi.any(),

      brand: CatalogModel.BrandMeta().required(),

      is_set: Joi.boolean(),

      fragile: Joi.boolean().required(),

      weight: CatalogModel.WeightResponse().required(),

      meta: Joi.any().allow(null),

      modified_by: CatalogModel.UserSerializer(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      fynd_item_code: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      price: CatalogModel.PriceMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      uid: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),

      company: CatalogModel.CompanyMeta().required(),

      tax_identifier: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      stage: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig1(),

      identifier: Joi.any().required(),

      country_of_origin: Joi.string().allow("").required(),

      dimension: CatalogModel.DimensionResponse().required(),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantities: CatalogModel.Quantities(),

      is_active: Joi.boolean(),
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
      name: Joi.string().allow(""),

      id: Joi.number(),
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
      tp_notes: Joi.any(),

      transfer: Joi.number(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      not_available: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
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

  static GetInventories() {
    return Joi.object({
      item_id: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      expiration_date: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      is_set: Joi.boolean(),

      weight: CatalogModel.WeightResponse1(),

      modified_by: CatalogModel.UserSerializer(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      track_inventory: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      platforms: Joi.any(),

      store: CatalogModel.ArticleStoreResponse(),

      tax_identifier: Joi.any(),

      company: CatalogModel.CompanyMeta1(),

      uid: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      stage: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      identifier: Joi.any(),

      inventory_updated_on: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      country_of_origin: Joi.string().allow(""),

      size: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      total_quantity: Joi.number(),

      quantities: CatalogModel.QuantitiesArticle(),

      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),
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
      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      failed: Joi.number(),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company_id: Joi.number(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

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
      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      price: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      total_quantity: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      item_weight_unit_of_measure: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),
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
      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      request_params: Joi.any(),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),
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
      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

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
      price_effective: Joi.number(),

      store_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      total_quantity: Joi.number().allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),
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
      hs2_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number(),

      threshold1: Joi.number(),

      threshold2: Joi.number(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_esp: Joi.boolean(),

      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      hsn_code: Joi.string().allow("").required(),
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

      current: Joi.string().allow(""),

      size: Joi.number(),

      item_total: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static TaxSlab() {
    return Joi.object({
      threshold: Joi.number().required(),

      rate: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      hsn_code: Joi.string().allow("").required(),

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

  static BrandItem() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      discount: Joi.string().allow(""),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),
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
      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow(""),
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
      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      medias: Joi.array().items(CatalogModel.Media1()),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      short_description: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      promo_meta: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      description: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      rating: Joi.number(),

      product_online_date: Joi.string().allow(""),

      name: Joi.string().allow(""),

      attributes: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      item_total: Joi.number().required(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),
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
      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      ignored_stores: Joi.array().items(Joi.number()),
    });
  }

  static AssignStoreArticle() {
    return Joi.object({
      article_assignment: CatalogModel.ArticleAssignment(),

      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),
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

      size: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      store_id: Joi.number(),

      _id: Joi.string().allow(""),

      meta: Joi.any(),

      price_marked: Joi.number(),

      index: Joi.number(),

      uid: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      status: Joi.boolean().required(),

      s_city: Joi.string().allow(""),

      group_id: Joi.string().allow(""),

      quantity: Joi.number().required(),

      store_pincode: Joi.number(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      email: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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

      created_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      business_type: Joi.string().allow(""),
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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      display_name: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      modified_by: CatalogModel.UserSerializer1(),

      created_on: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      manager: CatalogModel.LocationManagerSerializer(),

      warnings: Joi.any(),

      documents: Joi.array().items(CatalogModel.Document()),

      phone_number: Joi.string().allow("").required(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      integration_type: CatalogModel.LocationIntegrationType(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      name: Joi.string().allow("").required(),
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

      app_id: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),
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
