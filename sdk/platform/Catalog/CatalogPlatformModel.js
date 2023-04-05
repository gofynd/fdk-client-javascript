const Joi = require("joi");

class CatalogModel {
  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      result: Joi.any(),
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
      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      result: CatalogModel.SearchKeywordResult().required(),
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

  static GetAutocompleteWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetAutocompleteWordsData()),

      page: CatalogModel.Page(),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      params: Joi.any(),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: CatalogModel.AutocompletePageAction(),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      logo: CatalogModel.Media(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      action: CatalogModel.AutocompleteAction(),
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

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

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
      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      company_id: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),
    });
  }

  static Size() {
    return Joi.object({
      is_available: Joi.boolean(),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      price: Joi.any(),

      quantity: Joi.number(),

      slug: Joi.string().allow(""),

      identifier: Joi.any(),

      name: Joi.string().allow(""),

      attributes: Joi.any(),

      images: Joi.array().items(Joi.string().allow("")),

      sizes: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      short_description: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      price: CatalogModel.Price(),

      auto_select: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number(),

      allow_remove: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      meta: Joi.any(),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      company_id: Joi.number(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      meta: Joi.any(),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

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
      company_id: Joi.number(),

      id: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      image: Joi.string().allow(""),

      description: Joi.string().allow(""),

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

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

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

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      seo: CatalogModel.ApplicationItemSEO(),
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

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      seo: CatalogModel.SEOData(),
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
      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      unit: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      priority: Joi.number().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      template_slugs: Joi.array().items(Joi.string().allow("")),

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
      is_default: Joi.boolean().required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

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

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

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
      subtitle: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      title: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

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
      start: Joi.number(),

      end: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      type: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

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

  static ConfigurationListing() {
    return Joi.object({
      sort: CatalogModel.ConfigurationListingSort().required(),

      filter: CatalogModel.ConfigurationListingFilter().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),
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
      product: CatalogModel.ConfigurationProduct(),

      created_on: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      app_id: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),
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
      max: Joi.number(),

      selected_min: Joi.number(),

      selected_max: Joi.number(),

      min: Joi.number(),

      display: Joi.string().allow("").required(),

      value: Joi.any().required(),

      currency_code: Joi.string().allow(""),

      count: Joi.number(),

      display_format: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),
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

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      meta: Joi.any(),
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
      portrait: CatalogModel.BannerImage(),

      landscape: CatalogModel.BannerImage(),
    });
  }

  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),

      op: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      action: CatalogModel.Action(),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      uid: Joi.string().allow(""),

      priority: Joi.number(),
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

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
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
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CollectionSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
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

      app_id: Joi.string().allow("").required(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage().required(),

      modified_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      banners: CatalogModel.CollectionBanner().required(),

      _locale_language: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      slug: Joi.string().allow("").required(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: CatalogModel.CollectionSchedule(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      priority: Joi.number(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.BannerImage(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      priority: Joi.number(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      banners: CatalogModel.ImageUrls(),

      badge: Joi.any(),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      _schedule: Joi.any(),

      description: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cron: Joi.any(),

      uid: Joi.string().allow(""),

      priority: Joi.number(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      meta: Joi.any(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage(),

      modified_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      banners: CatalogModel.CollectionBanner(),

      _locale_language: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      slug: Joi.string().allow(""),

      is_visible: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      name: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      priority: Joi.number(),
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

  static ProductBrand() {
    return Joi.object({
      logo: CatalogModel.Media1(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

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

  static ProductListingDetail() {
    return Joi.object({
      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      price: CatalogModel.ProductListingPrice(),

      sellable: Joi.boolean(),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      item_type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      short_description: Joi.string().allow(""),

      rating_count: Joi.number(),

      rating: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

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
      query: Joi.array().items(CatalogModel.CollectionQuery()),

      type: Joi.string().allow(""),

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
      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      total_articles: Joi.number(),

      available_articles: Joi.number(),
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
      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      created_by: Joi.any(),

      enabled: Joi.boolean().required(),

      modified_by: Joi.any(),

      modified_on: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

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

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      total_article: Joi.number(),

      brand_name: Joi.string().allow(""),

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
      store: Joi.number(),

      company: Joi.string().allow(""),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      address: Joi.any(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      timing: Joi.any(),

      store_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      documents: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      company_id: Joi.number(),

      manager: Joi.any(),
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
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
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
      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),

      format: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      id: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails(),

      name: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      slug: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      logo: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      template_slug: Joi.string().allow(""),
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
      meta: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      search: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      page_size: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserSerializer(),

      modified_on: Joi.string().allow(""),

      priority_order: Joi.number(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      page_no: Joi.number(),
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
      meta: Joi.any(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _cls: Joi.string().allow(""),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

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
      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      slug: Joi.any(),

      created_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      verified_by: CatalogModel.UserDetail(),

      logo: Joi.string().allow("").required(),

      _id: Joi.any(),

      created_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      _cls: Joi.any(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      priority_order: Joi.number().required(),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.any()),

      verified_on: Joi.string().allow(""),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      created_by: Joi.any(),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      is_dependent: Joi.any(),

      custom_order: Joi.any(),

      size_guide: Joi.any(),

      tags: Joi.any(),

      teaser_tag: Joi.any(),

      item_code: Joi.any(),

      return_config: Joi.any(),

      currency: Joi.any(),

      brand_uid: Joi.any(),

      trader: Joi.any(),

      hsn_code: Joi.any(),

      sizes: Joi.any(),

      category_slug: Joi.any(),

      variants: Joi.any(),

      item_type: Joi.any(),

      no_of_boxes: Joi.any(),

      country_of_origin: Joi.any(),

      slug: Joi.any(),

      multi_size: Joi.any(),

      trader_type: Joi.any(),

      highlights: Joi.any(),

      media: Joi.any(),

      short_description: Joi.any(),

      description: Joi.any(),

      product_group_tag: Joi.any(),

      name: Joi.any(),

      is_active: Joi.any(),

      command: Joi.any(),

      product_publish: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      is_active: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      tag: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

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

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      id: Joi.string().allow(""),

      seller_id: Joi.number(),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      template_tags: Joi.any(),

      completed_on: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      status: Joi.string().allow(""),
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

  static Media2() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
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
      id: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

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
      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      level: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      departments: Joi.array().items(Joi.number()).required(),

      priority: Joi.number(),
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

  static ReturnConfigResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static Logo() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
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

      name: Joi.any().required(),
    });
  }

  static Image() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      is_dependent: Joi.boolean(),

      custom_order: Joi.any(),

      size_guide: Joi.string().allow(""),

      color: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      image_nature: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      return_config: CatalogModel.ReturnConfigResponse(),

      item_code: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      currency: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      primary_color: Joi.string().allow(""),

      brand_uid: Joi.number(),

      is_expirable: Joi.boolean(),

      is_physical: Joi.boolean(),

      attributes: Joi.any(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      hsn_code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      trader: Joi.array().items(CatalogModel.Trader()),

      variant_media: Joi.any(),

      modified_by: Joi.any(),

      category_slug: Joi.string().allow(""),

      variants: Joi.any(),

      item_type: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      country_of_origin: Joi.string().allow(""),

      pending: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      media: Joi.array().items(CatalogModel.Media1()),

      is_image_less_product: Joi.boolean(),

      short_description: Joi.string().allow(""),

      is_set: Joi.boolean(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      verified_on: Joi.string().allow(""),

      category_uid: Joi.number(),

      id: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      category: Joi.any(),

      moq: Joi.any(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.VerifiedBy(),

      created_by: Joi.any(),

      is_active: Joi.boolean(),

      images: Joi.array().items(CatalogModel.Image()),

      product_publish: CatalogModel.ProductPublished(),

      uid: Joi.number(),

      tax_identifier: Joi.any(),

      variant_group: Joi.any(),

      departments: Joi.array().items(Joi.number()),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),

      page: CatalogModel.Page(),
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

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      time: Joi.number().required(),

      returnable: Joi.boolean().required(),
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

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      is_dependent: Joi.boolean(),

      action: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      size_guide: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      teaser_tag: CatalogModel.TeaserTag(),

      item_code: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      currency: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      attributes: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      net_quantity: CatalogModel.NetQuantity(),

      _custom_json: Joi.any(),

      sizes: Joi.array().items(Joi.any()).required(),

      variant_media: Joi.any(),

      category_slug: Joi.string().allow("").required(),

      variants: Joi.any(),

      item_type: Joi.string().allow("").required(),

      no_of_boxes: Joi.number(),

      country_of_origin: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),

      multi_size: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      media: Joi.array().items(CatalogModel.Media1()),

      is_image_less_product: Joi.boolean(),

      short_description: Joi.string().allow(""),

      is_set: Joi.boolean(),

      description: Joi.string().allow(""),

      company_id: Joi.number().required(),

      change_request_id: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      requester: Joi.string().allow(""),

      is_active: Joi.boolean(),

      variant_group: Joi.any(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      uid: Joi.number().allow(null),

      product_publish: CatalogModel.ProductPublish(),

      departments: Joi.array().items(Joi.number()).required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

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
      enabled_for_end_consumer: Joi.boolean(),

      variant: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.any(),

      details: CatalogModel.AttributeMasterDetails().required(),

      raw_key: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      logo: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_nested: Joi.boolean(),

      slug: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      created_by: Joi.any(),

      suggestion: Joi.string().allow(""),

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
      data: CatalogModel.Product(),
    });
  }

  static ValidateIdentifier() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_height: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight_unit_of_measure: Joi.any().required(),

      item_length: Joi.number().required(),

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

  static UserDetail1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      full_name: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      failed: Joi.number(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail1(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),

      cancelled: Joi.number(),

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
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      failed: Joi.number(),

      succeed: Joi.number(),

      total: Joi.number(),

      stage: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      file_path: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      cancelled: Joi.number(),

      company_id: Joi.number().required(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),
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
      failed: Joi.number(),

      id: Joi.string().allow(""),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      file_path: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      company_id: Joi.number(),
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
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      price: Joi.number(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      item_id: Joi.number(),

      identifiers: Joi.any(),

      store: Joi.any(),

      price_effective: Joi.number(),

      uid: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      currency: Joi.string().allow(""),

      size: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      price_transfer: Joi.number(),
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

      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),
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
      price: Joi.number(),

      quantity: Joi.number().required(),

      item_height: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      store_code: Joi.string().allow("").required(),

      item_weight: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number().required(),

      item_length: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),

      size: Joi.any().required(),

      price_transfer: Joi.number().allow(null),
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

  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      width: Joi.number().required(),
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
      sellable: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      weight: CatalogModel.WeightResponse().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      meta: Joi.any().allow(null),

      added_on_store: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig1(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta().required(),

      fynd_meta: Joi.any(),

      raw_meta: Joi.any(),

      price: CatalogModel.PriceMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().required(),

      item_id: Joi.number().required(),

      modified_by: CatalogModel.UserSerializer(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      _custom_json: Joi.any(),

      company: CatalogModel.CompanyMeta().required(),

      expiration_date: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      dimension: CatalogModel.DimensionResponse().required(),

      is_set: Joi.boolean(),

      stage: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

      quantities: CatalogModel.Quantities(),

      store: CatalogModel.StoreMeta().required(),

      fynd_item_code: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      uid: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      tax_identifier: Joi.any(),
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

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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

      marked: Joi.number(),

      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static DateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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

      not_available: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      weight: CatalogModel.WeightResponse1(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      return_config: CatalogModel.ReturnConfig2(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta1(),

      price: CatalogModel.PriceArticle(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number(),

      item_id: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      company: CatalogModel.CompanyMeta1(),

      expiration_date: Joi.string().allow(""),

      size: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      identifier: Joi.any(),

      dimension: CatalogModel.DimensionResponse1(),

      date_meta: CatalogModel.DateMeta(),

      is_set: Joi.boolean(),

      inventory_updated_on: Joi.string().allow(""),

      platforms: Joi.any(),

      id: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      quantities: CatalogModel.QuantitiesArticle(),

      store: CatalogModel.ArticleStoreResponse(),

      track_inventory: Joi.boolean(),

      tax_identifier: Joi.any(),

      uid: Joi.string().allow(""),
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
      failed: Joi.number(),

      id: Joi.string().allow(""),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      total: Joi.number(),

      created_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      file_path: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

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
      price: Joi.number(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      total_quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      item_weight_unit_of_measure: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow(""),

      price_marked: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),

      user: Joi.any(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),
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
      seller_id: Joi.number().required(),

      trigger_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),
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

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),

      store_id: Joi.number().required(),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      price_marked: Joi.number(),
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
      id: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow(""),

      threshold2: Joi.number(),

      threshold1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tax2: Joi.number(),

      tax1: Joi.number(),

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
      tax_on_esp: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      threshold2: Joi.number(),

      threshold1: Joi.number().required(),

      is_active: Joi.boolean(),

      tax_on_mrp: Joi.boolean().required(),

      hsn_code: Joi.string().allow("").required(),

      uid: Joi.number(),

      tax2: Joi.number(),

      tax1: Joi.number().required(),

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
      cess: Joi.number(),

      threshold: Joi.number().required(),

      rate: Joi.number().required(),

      effective_date: Joi.string().allow("").required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      reporting_hsn: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      type: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      item_total: Joi.number(),
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
      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      discount: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.string().allow("")),
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
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

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
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),
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
      filters: Joi.array().items(CatalogModel.ProductFilters()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      operators: Joi.any(),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      promo_meta: Joi.any(),

      color: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      item_code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      item_type: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      highlights: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      short_description: Joi.string().allow(""),

      rating_count: Joi.number(),

      rating: Joi.number(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),
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
      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),

      size: Joi.string().allow("").required(),
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

      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

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
      company_id: Joi.number(),

      quantity: Joi.number().required(),

      meta: Joi.any(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      item_id: Joi.number().required(),

      _id: Joi.string().allow(""),

      store_id: Joi.number(),

      s_city: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      index: Joi.number(),

      price_effective: Joi.number(),

      uid: Joi.string().allow(""),

      store_pincode: Joi.number(),

      group_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      size: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      verified: Joi.boolean(),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
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
      stage: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      business_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      modified_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      verified_on: Joi.string().allow(""),
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

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

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
      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),

      open: Joi.boolean().required(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      address: CatalogModel.GetAddressSerializer().required(),

      modified_by: CatalogModel.UserSerializer1(),

      integration_type: CatalogModel.LocationIntegrationType(),

      _custom_json: Joi.any(),

      company: CatalogModel.GetCompanySerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      manager: CatalogModel.LocationManagerSerializer(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      phone_number: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      stage: Joi.string().allow(""),

      warnings: Joi.any(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      created_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),
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

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

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
