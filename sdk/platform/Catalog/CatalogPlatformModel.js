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
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      result: Joi.any(),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      items: CatalogModel.GetSearchWordsData(),

      page: CatalogModel.Page(),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetSearchWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static Media() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      params: Joi.any(),

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

  static AutocompleteResult() {
    return Joi.object({
      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
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
      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      modified_on: Joi.string().allow(""),
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
      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      company_id: Joi.number(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      slug: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),

      modified_on: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      quantity: Joi.number(),

      short_description: Joi.string().allow(""),

      price: Joi.any(),

      identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      attributes: Joi.any(),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      currency: Joi.string().allow(""),
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

  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      auto_select: Joi.boolean(),

      price: CatalogModel.Price(),

      product_uid: Joi.number(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      choice: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      same_store_assignment: Joi.boolean(),

      meta: Joi.any(),
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
      tag: Joi.string().allow(""),

      modified_by: Joi.any(),

      guide: CatalogModel.Guide(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      image: Joi.string().allow(""),
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

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      guide: Joi.any(),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      brand_id: Joi.number(),

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

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      seo: CatalogModel.SEOData(),

      alt_text: Joi.any(),

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
      maximum: Joi.number(),

      minimum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      seo: CatalogModel.ApplicationItemSEO(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      is_gift: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),
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
      condition: Joi.array().items(Joi.any()),

      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      current: Joi.number().required(),

      next: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      display_type: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      key: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

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
      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      default_key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

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

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

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
      detail: Joi.any(),

      variant: Joi.any(),

      similar: Joi.any(),

      compare: Joi.any(),
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
      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map: Joi.any(),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

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
      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),
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
      size: CatalogModel.ProductSize(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      priority: Joi.number().required(),

      subtitle: Joi.string().allow(""),
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

      priority: Joi.number().required(),

      size: CatalogModel.ProductSize().required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
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

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
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

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.ConfigurationProduct(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      config_id: Joi.string().allow(""),

      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
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

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
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
      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      display_format: Joi.string().allow(""),

      selected_max: Joi.number(),

      is_selected: Joi.boolean().required(),

      selected_min: Joi.number(),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

      query_format: Joi.string().allow(""),

      count: Joi.number(),
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

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      meta: Joi.any(),

      url: Joi.string().allow("").required(),
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

  static GetCollectionDetailNest() {
    return Joi.object({
      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      action: CatalogModel.Action(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      _schedule: Joi.any(),

      priority: Joi.number(),
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

      filters: CatalogModel.CollectionListingFilter(),

      page: CatalogModel.Page(),
    });
  }

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

  static CreateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage().required(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      created_by: CatalogModel.UserInfo(),

      banners: CatalogModel.CollectionBanner().required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_visible: Joi.boolean(),

      published: Joi.boolean(),

      _custom_json: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      _schedule: CatalogModel.CollectionSchedule(),

      priority: Joi.number(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      logo: CatalogModel.BannerImage(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      sort_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      _schedule: Joi.any(),

      priority: Joi.number(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      logo: CatalogModel.Media1(),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      _schedule: Joi.any(),

      priority: Joi.number(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      allow_sort: Joi.boolean(),

      slug: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      badge: CatalogModel.CollectionBadge(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_visible: Joi.boolean(),

      published: Joi.boolean(),

      _custom_json: Joi.any(),

      seo: CatalogModel.SeoDetail(),

      _schedule: CatalogModel.CollectionSchedule(),

      priority: Joi.number(),
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

  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),

      uid: Joi.number(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      uid: Joi.number(),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      teaser_tag: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating: Joi.number(),

      color: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page(),

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

      available_articles: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      name: Joi.string().allow(""),
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
      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      opt_level: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      created_by: Joi.any(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

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
      business_type: Joi.string().allow(""),

      uid: Joi.number(),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      total_article: Joi.number(),

      brand_id: Joi.number(),

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
      company: Joi.string().allow(""),

      store: Joi.number(),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      timing: Joi.any(),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      address: Joi.any(),

      manager: Joi.any(),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),

      page: CatalogModel.Page(),
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

      mandatory: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

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

  static GenderDetail() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      schema: CatalogModel.AttributeMaster(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      filters: CatalogModel.AttributeMasterFilter(),

      meta: CatalogModel.AttributeMasterMeta(),

      id: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      uid: Joi.number(),

      template_slug: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      errors: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      modified_by: CatalogModel.UserSerializer(),

      logo: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      search: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      page_size: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      priority_order: Joi.number(),

      item_type: Joi.string().allow(""),

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

      errors: Joi.any(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      platforms: Joi.any(),
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
      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      verified_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      verified_on: Joi.string().allow(""),

      slug: Joi.any(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.any(),

      synonyms: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      name: Joi.any().required(),

      priority_order: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      items: CatalogModel.ProductTemplate(),

      page: CatalogModel.Page(),
    });
  }

  static TemplateDetails() {
    return Joi.object({
      is_archived: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      tag: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      attributes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      product_group_tag: Joi.any(),

      tags: Joi.any(),

      trader_type: Joi.any(),

      trader: Joi.any(),

      is_active: Joi.any(),

      name: Joi.any(),

      variants: Joi.any(),

      slug: Joi.any(),

      short_description: Joi.any(),

      custom_order: Joi.any(),

      teaser_tag: Joi.any(),

      description: Joi.any(),

      highlights: Joi.any(),

      item_type: Joi.any(),

      return_config: Joi.any(),

      brand_uid: Joi.any(),

      size_guide: Joi.any(),

      item_code: Joi.any(),

      media: Joi.any(),

      multi_size: Joi.any(),

      no_of_boxes: Joi.any(),

      currency: Joi.any(),

      category_slug: Joi.any(),

      is_dependent: Joi.any(),

      country_of_origin: Joi.any(),

      hsn_code: Joi.any(),

      product_publish: Joi.any(),

      command: Joi.any(),

      sizes: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),
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
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      seller_id: Joi.number(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      template_tags: Joi.any(),

      data: CatalogModel.ProductDownloadItemsData(),

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

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),
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

      priority: Joi.number(),

      media: CatalogModel.Media2(),

      modified_by: Joi.any(),

      level: Joi.number().required(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),
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
      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
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

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.any().required(),
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
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
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
      logo: CatalogModel.Logo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      template_tag: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      verified_by: CatalogModel.VerifiedBy(),

      is_physical: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      all_company_ids: Joi.array().items(Joi.number()),

      verified_on: Joi.string().allow(""),

      moq: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      category: Joi.any(),

      modified_on: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      modified_by: Joi.any(),

      variants: Joi.any(),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      custom_order: Joi.any(),

      primary_color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      brand_uid: Joi.number(),

      tax_identifier: Joi.any(),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_sizes: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      category_uid: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      multi_size: Joi.boolean(),

      stage: Joi.string().allow(""),

      variant_media: Joi.any(),

      no_of_boxes: Joi.number(),

      brand: CatalogModel.Brand(),

      currency: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      variant_group: Joi.any(),

      attributes: Joi.any(),

      _custom_json: Joi.any(),

      is_dependent: Joi.boolean(),

      is_set: Joi.boolean(),

      company_id: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      color: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublish(),

      sizes: Joi.array().items(Joi.any()),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),

      page: CatalogModel.Page(),
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
      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
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

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
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
      template_tag: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      is_image_less_product: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number().allow(null),

      action: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      variants: Joi.any(),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      teaser_tag: CatalogModel.TeaserTag(),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      item_type: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      departments: Joi.array().items(Joi.number()).required(),

      item_code: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      requester: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      variant_media: Joi.any(),

      no_of_boxes: Joi.number(),

      attributes: Joi.any(),

      currency: Joi.string().allow("").required(),

      category_slug: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      sizes: Joi.array().items(Joi.any()).required(),

      _custom_json: Joi.any(),

      is_dependent: Joi.boolean(),

      is_set: Joi.boolean(),

      company_id: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      product_publish: CatalogModel.ProductPublish1(),

      change_request_id: Joi.any(),

      bulk_job_id: Joi.string().allow(""),
    });
  }

  static ProductVariants() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      category_uid: Joi.number(),

      name: Joi.string().allow(""),

      brand_uid: Joi.number(),
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
      variant: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      synonyms: Joi.any(),

      name: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      raw_key: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      schema: CatalogModel.AttributeMaster().required(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      suggestion: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

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
      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_width: Joi.number().required(),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),

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
      template_tag: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      verified_by: CatalogModel.VerifiedBy(),

      is_physical: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      all_company_ids: Joi.array().items(Joi.number()),

      verified_on: Joi.string().allow(""),

      moq: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      category: Joi.any(),

      modified_on: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      modified_by: Joi.any(),

      variants: Joi.any(),

      slug: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      custom_order: Joi.any(),

      primary_color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      brand_uid: Joi.number(),

      tax_identifier: Joi.any(),

      size_guide: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      all_sizes: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      item_code: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      category_uid: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      multi_size: Joi.boolean(),

      stage: Joi.string().allow(""),

      variant_media: Joi.any(),

      no_of_boxes: Joi.number(),

      brand: CatalogModel.Brand(),

      currency: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      variant_group: Joi.any(),

      attributes: Joi.any(),

      _custom_json: Joi.any(),

      is_dependent: Joi.boolean(),

      is_set: Joi.boolean(),

      company_id: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      color: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      sizes: Joi.array().items(Joi.any()),
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
      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      template_tag: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      created_on: Joi.string().allow(""),

      failed: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),

      cancelled: Joi.number(),

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
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      succeed: Joi.number(),

      failed: Joi.number(),

      company_id: Joi.number().required(),

      failed_records: Joi.array().items(Joi.any()),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      custom_template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      cancelled: Joi.number(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),
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
      username: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      file_path: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      failed: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      cancelled: Joi.number(),

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
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      item_id: Joi.number(),

      identifiers: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      price_transfer: Joi.number(),

      price: Joi.number(),

      quantity: Joi.number(),

      sellable_quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      store: Joi.any(),

      currency: Joi.string().allow(""),
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
      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),
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

      quantity: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static InvSize() {
    return Joi.object({
      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_width: Joi.number().allow(null),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price_effective: Joi.number().required(),

      is_set: Joi.boolean(),

      price: Joi.number(),

      price_transfer: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      quantity: Joi.number().required(),

      set: CatalogModel.InventorySet(),

      item_height: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      store_code: Joi.string().allow("").required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      company_id: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      transfer: Joi.number().required(),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),

      currency: Joi.string().allow("").required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      length: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      width: Joi.number().required(),

      height: Joi.number().required(),
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

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      item_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      is_active: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),

      store: CatalogModel.StoreMeta().required(),

      fragile: Joi.boolean().required(),

      raw_meta: Joi.any(),

      track_inventory: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      fynd_meta: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      price: CatalogModel.PriceMeta().required(),

      set: CatalogModel.InventorySet(),

      weight: CatalogModel.WeightResponse().required(),

      return_config: CatalogModel.ReturnConfig1(),

      added_on_store: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      meta: Joi.any().allow(null),

      size: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),

      total_quantity: Joi.number().required(),

      fynd_article_code: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      quantities: CatalogModel.Quantities(),

      _custom_json: Joi.any(),

      identifier: Joi.any().required(),

      trace_id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      effective: Joi.number(),

      transfer: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
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
      height: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),
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

  static BrandMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      item_id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader2()),

      company: CatalogModel.CompanyMeta1(),

      inventory_updated_on: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      track_inventory: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      price: CatalogModel.PriceArticle(),

      weight: CatalogModel.WeightResponse1(),

      return_config: CatalogModel.ReturnConfig2(),

      tax_identifier: Joi.any(),

      id: Joi.string().allow(""),

      size: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      stage: Joi.string().allow(""),

      total_quantity: Joi.number(),

      dimension: CatalogModel.DimensionResponse1(),

      quantities: CatalogModel.QuantitiesArticle(),

      brand: CatalogModel.BrandMeta1(),

      platforms: Joi.any(),

      date_meta: CatalogModel.DateMeta(),

      identifier: Joi.any(),

      trace_id: Joi.string().allow(""),

      is_set: Joi.boolean(),

      country_of_origin: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),
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
      file_path: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      failed: Joi.number(),

      succeed: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      total: Joi.number(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      id: Joi.string().allow(""),
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
      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      price: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      expiration_date: Joi.string().allow(""),

      total_quantity: Joi.number(),

      currency: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      url: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

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
      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),
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
      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      trace_id: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_id: Joi.number().required(),

      total_quantity: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),

      message: Joi.string().allow("").required(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      threshold2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      uid: Joi.number(),

      company_id: Joi.number().required(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      hsn_code: Joi.string().allow("").required(),

      tax1: Joi.number().required(),

      is_active: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      threshold1: Joi.number().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      threshold2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      company_id: Joi.number(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tax1: Joi.number(),

      tax_on_esp: Joi.boolean(),

      threshold1: Joi.number(),

      id: Joi.string().allow(""),
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
      reporting_hsn: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      created_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

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
      departments: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

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
      logo: CatalogModel.Media(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
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
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      uid: Joi.number(),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      slug: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      highlights: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      has_variant: Joi.boolean(),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      similars: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      medias: Joi.array().items(CatalogModel.Media1()),

      rating: Joi.number(),

      color: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),

      next_id: Joi.string().allow(""),

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

  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
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

      group_id: Joi.string().allow(""),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),
    });
  }

  static AssignStore() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      company_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      channel_identifier: Joi.string().allow(""),

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
      item_id: Joi.number().required(),

      store_pincode: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      price_marked: Joi.number(),

      group_id: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      price_effective: Joi.number(),

      company_id: Joi.number(),

      store_id: Joi.number(),

      quantity: Joi.number().required(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      s_city: Joi.string().allow(""),

      index: Joi.number(),

      meta: Joi.any(),

      status: Joi.boolean().required(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      longitude: Joi.number(),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      country_code: Joi.string().allow(""),
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

  static UserSerializer2() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      business_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      modified_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      name: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_on: Joi.string().allow(""),
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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      opening: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      closing: CatalogModel.LocationTimingSerializer(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      verified: Joi.boolean(),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
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
      verified_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      manager: CatalogModel.LocationManagerSerializer(),

      name: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      phone_number: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      warnings: Joi.any(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      stage: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      documents: Joi.array().items(CatalogModel.Document()),

      _custom_json: Joi.any(),

      integration_type: CatalogModel.LocationIntegrationType(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      display_name: Joi.string().allow("").required(),
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

      uid: Joi.number().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),
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
