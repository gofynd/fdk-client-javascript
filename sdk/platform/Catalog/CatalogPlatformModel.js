const Joi = require("joi");

class CatalogModel {
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

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: Joi.any(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number().required(),

      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      meta: Joi.any(),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
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
      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      meta: Joi.any(),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      choice: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      value: Joi.string().allow(""),

      is_available: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      attributes: Joi.any(),

      name: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      price: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      identifier: Joi.any(),

      uid: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_uid: Joi.number(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      price: CatalogModel.Price(),

      product_details: CatalogModel.LimitedProductData(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),
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
      company_id: Joi.number(),

      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      guide: CatalogModel.Guide(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      image: Joi.string().allow(""),

      id: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

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
      company_id: Joi.number(),

      title: Joi.string().allow(""),

      modified_by: Joi.any(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      created_by: Joi.any(),

      name: Joi.string().allow(""),

      guide: Joi.any(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),
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

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEOData(),

      moq: CatalogModel.MOQData(),

      alt_text: Joi.any(),

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

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
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
      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

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
      data: Joi.array().items(Joi.any()).required(),

      condition: Joi.array().items(Joi.any()),

      values: Joi.array().items(Joi.any()),
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

      key: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

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
      app_id: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

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

      compare: Joi.any(),

      variant: Joi.any(),

      detail: Joi.any(),
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

      display: Joi.string().allow(""),

      filter_types: Joi.array().items(Joi.string().allow("")),
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

  static ProductSize() {
    return Joi.object({
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

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
      key: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize().required(),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),
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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),
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
      end: Joi.number(),

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      logo: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

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

  static AppCatalogConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),
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
      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_by: Joi.any(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

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
      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),
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

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      selected_min: Joi.number(),

      currency_code: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      value: Joi.any().required(),

      is_selected: Joi.boolean().required(),

      display: Joi.string().allow("").required(),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),
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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),
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
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
    });
  }

  static Media1() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

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
      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      action: CatalogModel.Action(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

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

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

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

  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CreateCollection() {
    return Joi.object({
      meta: Joi.any(),

      created_by: CatalogModel.UserInfo(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      type: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      _schedule: CatalogModel.CollectionSchedule(),

      is_visible: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      _schedule: Joi.any(),

      sort_on: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      type: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      _schedule: Joi.any(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      meta: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      priority: Joi.number(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      badge: CatalogModel.CollectionBadge(),

      _locale_language: Joi.any(),

      type: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      _schedule: CatalogModel.CollectionSchedule(),

      is_visible: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      _custom_json: Joi.any(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      slug: Joi.string().allow("").required(),

      discount: Joi.string().allow(""),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      has_variant: Joi.boolean(),

      uid: Joi.number(),

      promo_meta: Joi.any(),

      sellable: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),
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
      message: Joi.string().allow(""),

      items_not_updated: Joi.array().items(Joi.number()),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_articles: Joi.number(),

      article_freshness: Joi.number(),

      name: Joi.string().allow(""),

      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),
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
      data: CatalogModel.CrossSellingData(),

      brand_distribution: CatalogModel.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      company_id: Joi.number(),

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      company_id: Joi.number().required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean().required(),

      modified_on: Joi.number().required(),
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
      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      business_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      company_id: Joi.number(),

      brand_id: Joi.number(),

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
      store: Joi.number(),

      brand: Joi.number(),

      company: Joi.string().allow(""),
    });
  }

  static StoreDetail() {
    return Joi.object({
      documents: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.any(),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      timing: Joi.any(),

      display_name: Joi.string().allow(""),

      manager: Joi.any(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),
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
      format: Joi.string().allow(""),

      mandatory: Joi.boolean(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      details: CatalogModel.AttributeMasterDetails(),

      description: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      is_nested: Joi.boolean(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      id: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      schema: CatalogModel.AttributeMaster(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),

      slug: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      page_no: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      priority_order: Joi.number(),

      search: Joi.string().allow(""),

      page_size: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      name: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      uid: Joi.number(),
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

      user_id: Joi.string().allow("").required(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.any()),

      slug: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      name: Joi.any().required(),

      _id: Joi.any(),

      _cls: Joi.any(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),
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

      command: Joi.any(),

      highlights: Joi.any(),

      country_of_origin: Joi.any(),

      name: Joi.any(),

      currency: Joi.any(),

      is_active: Joi.any(),

      teaser_tag: Joi.any(),

      slug: Joi.any(),

      product_publish: Joi.any(),

      product_group_tag: Joi.any(),

      trader_type: Joi.any(),

      size_guide: Joi.any(),

      description: Joi.any(),

      media: Joi.any(),

      multi_size: Joi.any(),

      hsn_code: Joi.any(),

      custom_order: Joi.any(),

      is_dependent: Joi.any(),

      category_slug: Joi.any(),

      variants: Joi.any(),

      trader: Joi.any(),

      return_config: Joi.any(),

      no_of_boxes: Joi.any(),

      item_type: Joi.any(),

      tags: Joi.any(),

      sizes: Joi.any(),

      short_description: Joi.any(),

      brand_uid: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TemplateValidationData() {
    return Joi.object({
      global_validation: CatalogModel.GlobalValidation(),

      template_validation: Joi.any(),
    });
  }

  static TemplateDetails() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),
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

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      template_tags: Joi.any(),

      task_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      seller_id: Joi.number(),

      data: CatalogModel.ProductDownloadItemsData(),

      trigger_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static Media2() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      l2: Joi.number().required(),

      department: Joi.number().required(),
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

      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      media: CatalogModel.Media2(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      uid: Joi.number(),

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
      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      departments: Joi.array().items(Joi.number()).required(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

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

  static Image() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
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
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Trader() {
    return Joi.object({
      name: Joi.any().required(),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
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

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      is_image_less_product: Joi.boolean(),

      created_by: Joi.any(),

      attributes: Joi.any(),

      created_on: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      category_uid: Joi.number(),

      verified_by: CatalogModel.VerifiedBy(),

      highlights: Joi.array().items(Joi.string().allow("")),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      country_of_origin: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      variant_group: Joi.any(),

      name: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      is_active: Joi.boolean(),

      color: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      verified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      modified_on: Joi.string().allow(""),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_by: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      media: Joi.array().items(CatalogModel.Media1()),

      multi_size: Joi.boolean(),

      moq: Joi.any(),

      stage: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      custom_order: Joi.any(),

      hsn_code: Joi.string().allow(""),

      variant_media: Joi.any(),

      is_dependent: Joi.boolean(),

      uid: Joi.number(),

      category_slug: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      is_set: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean(),

      _custom_json: Joi.any(),

      variants: Joi.any(),

      category: Joi.any(),

      pending: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      trader: Joi.array().items(CatalogModel.Trader()),

      no_of_boxes: Joi.number(),

      item_type: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      brand_uid: Joi.number(),

      brand: CatalogModel.Brand(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
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

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      item_code: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      is_image_less_product: Joi.boolean(),

      attributes: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      change_request_id: Joi.any(),

      country_of_origin: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      variant_group: Joi.any(),

      name: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      teaser_tag: CatalogModel.TeaserTag(),

      product_publish: CatalogModel.ProductPublish(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      description: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      multi_size: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      departments: Joi.array().items(Joi.number()).required(),

      variant_media: Joi.any(),

      is_dependent: Joi.boolean(),

      uid: Joi.number().allow(null),

      category_slug: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      variants: Joi.any(),

      _custom_json: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      return_config: CatalogModel.ReturnConfig().required(),

      no_of_boxes: Joi.number(),

      action: Joi.string().allow(""),

      requester: Joi.string().allow(""),

      item_type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.any()).required(),

      short_description: Joi.string().allow(""),

      brand_uid: Joi.number().required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      uid: Joi.number(),
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
      synonyms: Joi.any(),

      unit: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      enabled_for_end_consumer: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      modified_on: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      suggestion: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      description: Joi.string().allow(""),

      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      variant: Joi.boolean(),

      raw_key: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),
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
      item_weight_unit_of_measure: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_height: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_length: Joi.number().required(),

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
      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      is_active: Joi.boolean(),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),
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

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      company_id: Joi.number().required(),

      template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      tracking_url: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      total: Joi.number(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),

      template_tag: Joi.string().allow("").required(),

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
      company_id: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      cancelled: Joi.number(),

      retry: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      tracking_url: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),

      succeed: Joi.number(),

      id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),
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
      company_id: Joi.number(),

      url: Joi.string().allow("").required(),

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
      quantity: Joi.number(),

      identifiers: Joi.any(),

      store: Joi.any(),

      sellable_quantity: Joi.number(),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      price: Joi.number(),

      size: Joi.string().allow(""),

      price_transfer: Joi.number(),

      item_id: Joi.number(),

      uid: Joi.string().allow(""),
    });
  }

  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),

      page: CatalogModel.Page(),
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
      quantity: Joi.number(),

      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),
    });
  }

  static InvSize() {
    return Joi.object({
      is_set: Joi.boolean(),

      quantity: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      set: CatalogModel.InventorySet(),

      item_width: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price_effective: Joi.number().required(),

      item_height: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      price: Joi.number(),

      size: Joi.any().required(),

      item_length: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      price_transfer: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),
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
      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      item: CatalogModel.ItemQuery().required(),
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
      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),

      height: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      updated_at: Joi.string().allow(""),

      effective: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),
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
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Trader1() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      total_quantity: Joi.number().required(),

      company: CatalogModel.CompanyMeta().required(),

      tax_identifier: Joi.any(),

      meta: Joi.any().allow(null),

      track_inventory: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.Quantities(),

      identifier: Joi.any().required(),

      country_of_origin: Joi.string().allow("").required(),

      fynd_meta: Joi.any(),

      trace_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse().required(),

      price: CatalogModel.PriceMeta().required(),

      size: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number().required(),

      fynd_article_code: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      store: CatalogModel.StoreMeta().required(),

      seller_identifier: Joi.string().allow("").required(),

      added_on_store: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse().required(),

      stage: Joi.string().allow(""),

      fynd_item_code: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      is_set: Joi.boolean(),

      _custom_json: Joi.any(),

      set: CatalogModel.InventorySet(),

      return_config: CatalogModel.ReturnConfig1(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta().required(),

      raw_meta: Joi.any(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
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
      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      width: Joi.number(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      transfer: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static DateMeta() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      total_quantity: Joi.number(),

      tax_identifier: Joi.any(),

      company: CatalogModel.CompanyMeta1(),

      track_inventory: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.QuantitiesArticle(),

      identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      price: CatalogModel.PriceArticle(),

      size: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      item_id: Joi.number(),

      id: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      store: CatalogModel.ArticleStoreResponse(),

      seller_identifier: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      stage: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      platforms: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      uid: Joi.string().allow(""),

      is_set: Joi.boolean(),

      return_config: CatalogModel.ReturnConfig2(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta1(),
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
      company_id: Joi.number(),

      modified_by: Joi.any(),

      cancelled: Joi.number(),

      created_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      is_active: Joi.boolean(),

      stage: Joi.string().allow(""),

      succeed: Joi.number(),

      id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),
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
      quantity: Joi.number(),

      total_quantity: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      currency: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      price: Joi.number(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

      status: Joi.string().allow(""),

      request_params: Joi.any(),

      seller_id: Joi.number().required(),

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
      multivalues: Joi.boolean(),

      data: Joi.array().items(CatalogModel.FilerList()),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      store_id: Joi.number().required(),

      total_quantity: Joi.number().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      trace_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),

      payload: Joi.array().items(CatalogModel.InventoryPayload()),

      meta: Joi.any(),
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

  static HsnUpsert() {
    return Joi.object({
      tax_on_mrp: Joi.boolean().required(),

      company_id: Joi.number().required(),

      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      uid: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax_on_mrp: Joi.boolean(),

      company_id: Joi.number(),

      tax1: Joi.number(),

      threshold1: Joi.number(),

      threshold2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax2: Joi.number(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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

      rate: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      hsn_code_id: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media(),

      departments: Joi.array().items(Joi.string().allow("")),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      discount: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),
    });
  }

  static DepartmentCategoryTree() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CategoryItems()),

      department: Joi.string().allow(""),
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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      rating: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      highlights: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      type: Joi.string().allow(""),

      rating_count: Joi.number(),

      has_variant: Joi.boolean(),

      uid: Joi.number(),

      promo_meta: Joi.any(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),
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
      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      company_id: Joi.number(),

      app_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

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
      quantity: Joi.number().required(),

      company_id: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      store_id: Joi.number(),

      status: Joi.boolean().required(),

      meta: Joi.any(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      group_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      size: Joi.string().allow("").required(),

      index: Joi.number(),

      store_pincode: Joi.number(),

      price_marked: Joi.number(),

      item_id: Joi.number().required(),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_by: CatalogModel.UserSerializer1(),

      business_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      name: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

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
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      weekday: Joi.string().allow("").required(),

      closing: CatalogModel.LocationTimingSerializer(),

      opening: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
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
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      company: CatalogModel.GetCompanySerializer(),

      created_by: CatalogModel.UserSerializer2(),

      address: CatalogModel.GetAddressSerializer().required(),

      created_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      manager: CatalogModel.LocationManagerSerializer(),

      name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      verified_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      modified_by: CatalogModel.UserSerializer2(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      stage: Joi.string().allow(""),

      phone_number: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      code: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      integration_type: CatalogModel.LocationIntegrationType(),
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

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      uid: Joi.number().required(),
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
