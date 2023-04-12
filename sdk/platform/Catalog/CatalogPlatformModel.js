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

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      result: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

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
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      params: Joi.any(),

      query: Joi.any(),

      url: Joi.string().allow(""),
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

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      display: Joi.string().allow(""),

      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),
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
      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

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
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      choice: Joi.string().allow("").required(),
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

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_by: Joi.any(),

      choice: Joi.string().allow("").required(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      choice: Joi.string().allow("").required(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      quantity: Joi.number(),

      is_available: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any(),

      price: Joi.any(),

      quantity: Joi.number(),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      currency: Joi.string().allow(""),

      max_effective: Joi.number(),

      min_marked: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      product_uid: Joi.number(),

      product_details: CatalogModel.LimitedProductData(),

      max_quantity: Joi.number(),

      price: CatalogModel.Price(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_id: Joi.number(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      products: Joi.array().items(CatalogModel.GetProducts()),

      same_store_assignment: Joi.boolean(),

      choice: Joi.string().allow(""),
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

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      active: Joi.boolean(),

      title: Joi.string().allow("").required(),

      brand_id: Joi.number(),

      image: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      active: Joi.boolean(),

      title: Joi.string().allow(""),

      brand_id: Joi.number(),

      guide: Joi.any(),
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
      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),
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
      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),

      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),
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
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      priority: Joi.number().required(),

      display_type: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_default: Joi.boolean().required(),
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

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      default_key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_default: Joi.boolean().required(),
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
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

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

      detail: Joi.any(),

      similar: Joi.any(),
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
      display: Joi.string().allow(""),

      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map_values: Joi.array().items(Joi.any()),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      value: Joi.string().allow(""),

      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

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

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

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
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),

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
      subtitle: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      priority: Joi.number().required(),

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
      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

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

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

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

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),
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
      count: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      selected_min: Joi.number(),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      value: Joi.any().required(),

      query_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

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
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

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

  static CollectionListingFilterType() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),
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

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      meta: Joi.any(),

      url: Joi.string().allow("").required(),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      value: Joi.array().items(Joi.any()).required(),

      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),
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

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      action: CatalogModel.Action(),

      allow_facets: Joi.boolean(),

      app_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      priority: Joi.number(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),

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
      landscape: CatalogModel.CollectionImage().required(),

      portrait: CatalogModel.CollectionImage().required(),
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
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
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

  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static CreateCollection() {
    return Joi.object({
      banners: CatalogModel.CollectionBanner().required(),

      slug: Joi.string().allow("").required(),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      name: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow("").required(),

      allow_sort: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      allow_facets: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      _schedule: CatalogModel.CollectionSchedule(),

      _locale_language: Joi.any(),

      is_visible: Joi.boolean(),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo(),

      priority: Joi.number(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      logo: CatalogModel.BannerImage(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      is_active: Joi.boolean(),

      allow_facets: Joi.boolean(),

      app_id: Joi.string().allow(""),

      _schedule: Joi.any(),

      meta: Joi.any(),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      badge: Joi.any(),

      logo: CatalogModel.Media1(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _schedule: Joi.any(),

      type: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      cron: Joi.any(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      app_id: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      banners: CatalogModel.CollectionBanner(),

      slug: Joi.string().allow(""),

      published: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      badge: CatalogModel.CollectionBadge(),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      allow_facets: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      _locale_language: Joi.any(),

      is_visible: Joi.boolean(),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      description: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      priority: Joi.number(),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      uid: Joi.number(),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      has_variant: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      price: CatalogModel.ProductListingPrice(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      promo_meta: Joi.any(),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      item_code: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
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

      query: Joi.array().items(CatalogModel.CollectionQuery()),

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
      total_articles: Joi.number(),

      name: Joi.string().allow(""),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      available_sizes: Joi.number(),

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

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      company_id: Joi.number().required(),

      enabled: Joi.boolean().required(),

      modified_on: Joi.number().required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow("").required(),

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
      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      company_id: Joi.number(),

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
      company: Joi.string().allow(""),

      brand: Joi.number(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_id: Joi.number(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      additional_contacts: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      timing: Joi.any(),

      created_on: Joi.string().allow(""),

      manager: Joi.any(),

      store_code: Joi.string().allow(""),

      address: Joi.any(),

      store_type: Joi.string().allow(""),
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
      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
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

  static AttributeSchemaRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      range: CatalogModel.AttributeSchemaRange(),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      details: CatalogModel.AttributeMasterDetails(),

      meta: CatalogModel.AttributeMasterMeta(),

      is_nested: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),

      enabled_for_end_consumer: Joi.boolean(),

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
      errors: Joi.any(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      created_on: Joi.string().allow(""),

      page_no: Joi.number(),

      search: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      priority_order: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      page_size: Joi.number(),
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

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      platforms: Joi.any(),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      _cls: Joi.string().allow(""),

      priority_order: Joi.number().required(),
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
      name: Joi.any().required(),

      _id: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      slug: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      created_by: CatalogModel.UserDetail(),

      verified_by: CatalogModel.UserDetail(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      name: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      logo: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      attributes: Joi.array().items(Joi.string().allow("")),
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
      slug: Joi.any(),

      currency: Joi.any(),

      trader_type: Joi.any(),

      is_dependent: Joi.any(),

      item_type: Joi.any(),

      country_of_origin: Joi.any(),

      name: Joi.any(),

      return_config: Joi.any(),

      media: Joi.any(),

      product_publish: Joi.any(),

      sizes: Joi.any(),

      brand_uid: Joi.any(),

      multi_size: Joi.any(),

      custom_order: Joi.any(),

      short_description: Joi.any(),

      is_active: Joi.any(),

      tags: Joi.any(),

      product_group_tag: Joi.any(),

      teaser_tag: Joi.any(),

      no_of_boxes: Joi.any(),

      category_slug: Joi.any(),

      hsn_code: Joi.any(),

      highlights: Joi.any(),

      command: Joi.any(),

      variants: Joi.any(),

      trader: Joi.any(),

      description: Joi.any(),

      size_guide: Joi.any(),

      item_code: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      description: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      description: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),
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

  static ProductDownloadItemsData() {
    return Joi.object({
      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),
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
      trigger_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      template_tags: Joi.any(),

      seller_id: Joi.number(),

      data: CatalogModel.ProductDownloadItemsData(),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      completed_on: Joi.string().allow(""),
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
      multivalue: Joi.boolean(),

      data: Joi.array().items(Joi.any()),
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
      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      departments: Joi.array().items(Joi.number()).required(),

      media: CatalogModel.Media2(),

      created_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      priority: Joi.number(),

      modified_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),
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

      synonyms: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      departments: Joi.array().items(Joi.number()).required(),

      media: CatalogModel.Media2(),

      priority: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),
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
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Logo(),
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
      slug: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      variant_media: Joi.any(),

      is_dependent: Joi.boolean(),

      moq: Joi.any(),

      item_type: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      all_sizes: Joi.array().items(Joi.any()),

      is_physical: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      modified_by: Joi.any(),

      is_image_less_product: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      images: Joi.array().items(CatalogModel.Image()),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      tax_identifier: Joi.any(),

      variant_group: Joi.any(),

      brand: CatalogModel.Brand(),

      is_set: Joi.boolean(),

      is_expirable: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      product_publish: CatalogModel.ProductPublished(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      company_id: Joi.number(),

      multi_size: Joi.boolean(),

      custom_order: Joi.any(),

      short_description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      attributes: Joi.any(),

      pending: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      stage: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      category_uid: Joi.number(),

      hsn_code: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      _custom_json: Joi.any(),

      variants: Joi.any(),

      primary_color: Joi.string().allow(""),

      trader: Joi.array().items(Joi.any()),

      description: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      created_by: Joi.any(),

      item_code: Joi.string().allow(""),
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

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      is_dependent: Joi.boolean(),

      item_type: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      name: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      template_tag: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      media: Joi.array().items(CatalogModel.Media1()),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      variant_group: Joi.any(),

      is_set: Joi.boolean(),

      requester: Joi.string().allow(""),

      bulk_job_id: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      sizes: Joi.array().items(Joi.any()).required(),

      company_id: Joi.number().required(),

      brand_uid: Joi.number().required(),

      multi_size: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      short_description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      action: Joi.string().allow(""),

      teaser_tag: CatalogModel.TeaserTag(),

      attributes: Joi.any().required(),

      no_of_boxes: Joi.number(),

      uid: Joi.number().allow(null),

      category_slug: Joi.string().allow("").required(),

      change_request_id: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      departments: Joi.array().items(Joi.number()).required(),

      _custom_json: Joi.any(),

      variants: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      description: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      item_code: Joi.string().allow("").required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      name: Joi.string().allow(""),

      brand_uid: Joi.number(),

      uid: Joi.number(),

      category_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),
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
      synonyms: Joi.any(),

      slug: Joi.string().allow("").required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      suggestion: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: Joi.any(),

      schema: CatalogModel.AttributeMaster().required(),

      raw_key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.AttributeMasterFilter().required(),

      is_nested: Joi.boolean(),

      variant: Joi.boolean(),

      unit: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      created_by: Joi.any(),
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
      item_length: Joi.number().required(),

      item_width: Joi.number().required(),

      item_height: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.any().required(),

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
      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      template: CatalogModel.ProductTemplate(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail1(),

      failed: Joi.number(),
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
      email: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      company_id: Joi.number().required(),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      total: Joi.number(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      failed: Joi.number(),

      custom_template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),
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
      company_id: Joi.number(),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      stage: Joi.string().allow(""),

      retry: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      failed: Joi.number(),
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

      user: Joi.any().required(),

      url: Joi.string().allow("").required(),
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
      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      identifiers: Joi.any(),

      price_effective: Joi.number(),

      store: Joi.any(),

      price_transfer: Joi.number(),

      sellable_quantity: Joi.number(),

      price: Joi.number(),

      quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      size: Joi.string().allow(""),
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

  static InvSize() {
    return Joi.object({
      item_length: Joi.number().allow(null),

      item_width: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price_effective: Joi.number().required(),

      item_weight: Joi.number().allow(null),

      price_transfer: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      is_set: Joi.boolean(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price: Joi.number(),

      store_code: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      size: Joi.any().required(),
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
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),
    });
  }

  static StoreMeta() {
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

  static CompanyMeta() {
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

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      effective: Joi.number().required(),

      marked: Joi.number().required(),

      tp_notes: Joi.any(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
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

      sellable: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      width: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      fynd_article_code: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      store: CatalogModel.StoreMeta().required(),

      country_of_origin: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      return_config: CatalogModel.ReturnConfig1(),

      company: CatalogModel.CompanyMeta().required(),

      fynd_meta: Joi.any(),

      tax_identifier: Joi.any(),

      weight: CatalogModel.WeightResponse().required(),

      brand: CatalogModel.BrandMeta().required(),

      added_on_store: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      is_set: Joi.boolean(),

      fragile: Joi.boolean().required(),

      item_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      track_inventory: Joi.boolean(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      fynd_item_code: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      total_quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      quantities: CatalogModel.Quantities(),

      stage: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      expiration_date: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse().required(),

      meta: Joi.any().allow(null),

      _custom_json: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      created_by: CatalogModel.UserSerializer(),

      size: Joi.string().allow("").required(),
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
      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
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

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      tp_notes: Joi.any(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default: Joi.boolean(),
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

      sellable: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
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

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetInventories() {
    return Joi.object({
      date_meta: CatalogModel.DateMeta(),

      trace_id: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      id: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      return_config: CatalogModel.ReturnConfig2(),

      company: CatalogModel.CompanyMeta1(),

      tax_identifier: Joi.any(),

      weight: CatalogModel.WeightResponse1(),

      brand: CatalogModel.BrandMeta1(),

      price: CatalogModel.PriceArticle(),

      is_set: Joi.boolean(),

      inventory_updated_on: Joi.string().allow(""),

      item_id: Joi.number(),

      platforms: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      track_inventory: Joi.boolean(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      identifier: Joi.any(),

      total_quantity: Joi.number(),

      quantities: CatalogModel.QuantitiesArticle(),

      stage: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      created_by: CatalogModel.UserSerializer(),

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
      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      total: Joi.number(),

      cancelled: Joi.number(),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: Joi.any(),

      failed: Joi.number(),
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

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      total_quantity: Joi.number(),

      store_code: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),
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
      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

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
      trigger_on: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      task_id: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      request_params: Joi.any(),
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
      multivalues: Joi.boolean(),

      data: Joi.array().items(CatalogModel.FilerList()),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      store_id: Joi.number().required(),

      price_marked: Joi.number(),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),

      meta: Joi.any(),

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
      item_total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      id: Joi.string().allow(""),

      company_id: Joi.number(),

      tax1: Joi.number(),

      hs2_code: Joi.string().allow(""),

      threshold2: Joi.number(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      threshold1: Joi.number(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),
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
      company_id: Joi.number().required(),

      uid: Joi.number(),

      tax1: Joi.number().required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold2: Joi.number(),

      is_active: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      threshold1: Joi.number().required(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),
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
      effective_date: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      threshold: Joi.number().required(),

      cess: Joi.number(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      description: Joi.string().allow("").required(),

      created_by: Joi.any(),
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
      ignored_stores: Joi.array().items(Joi.number()),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),
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
      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment(),

      quantity: Joi.number(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_identifier: Joi.string().allow(""),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      pincode: Joi.string().allow("").required(),

      channel_type: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),
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
      company_id: Joi.number(),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      quantity: Joi.number().required(),

      price_effective: Joi.number(),

      meta: Joi.any(),

      status: Joi.boolean().required(),

      group_id: Joi.string().allow(""),

      s_city: Joi.string().allow(""),

      store_id: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      price_marked: Joi.number(),

      store_pincode: Joi.number(),

      index: Joi.number(),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static BrandItem() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      discount: Joi.string().allow(""),
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

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number(),
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

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      action: CatalogModel.Action(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

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

  static CategoryListingResponse() {
    return Joi.object({
      departments: Joi.array().items(CatalogModel.DepartmentIdentifier()),

      data: Joi.array().items(CatalogModel.DepartmentCategoryTree()),
    });
  }

  static ApplicationProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      rating_count: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      has_variant: Joi.boolean(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating: Joi.number(),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      color: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.any(),

      promo_meta: Joi.any(),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
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
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
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

      closing: CatalogModel.LocationTimingSerializer(),

      opening: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      latitude: Joi.number(),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),
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
      business_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      verified_by: CatalogModel.UserSerializer2(),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),
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
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      phone_number: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      modified_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      warnings: Joi.any(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      verified_by: CatalogModel.UserSerializer1(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      display_name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      integration_type: CatalogModel.LocationIntegrationType(),

      stage: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserSerializer1(),

      code: Joi.string().allow("").required(),

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
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      uid: Joi.number().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

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
