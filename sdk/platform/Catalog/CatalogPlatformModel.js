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
      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      result: Joi.any(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
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
      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),
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

      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
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

  static GetAutocompleteWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

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

  static Media() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: Joi.any(),

      params: Joi.any(),
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

      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
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
      product_uid: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),
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
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      min_effective: Joi.number(),

      max_effective: Joi.number(),
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
      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      attributes: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      product_uid: Joi.number(),

      price: CatalogModel.Price(),

      sizes: Joi.array().items(CatalogModel.Size()),

      allow_remove: Joi.boolean(),

      min_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      max_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.GetProducts()),

      choice: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      meta: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      modified_on: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      company_id: Joi.number(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      meta: Joi.any(),

      slug: Joi.string().allow("").required(),
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
      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      brand_id: Joi.number(),

      guide: CatalogModel.Guide(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      image: Joi.string().allow(""),

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

      tag: Joi.string().allow(""),

      brand_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      active: Joi.boolean(),

      created_on: Joi.string().allow(""),

      guide: Joi.any(),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      name: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      title: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
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
      moq: CatalogModel.ApplicationItemMOQ(),

      is_gift: Joi.boolean(),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
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
      increment_unit: Joi.number(),

      minimum: Joi.number(),

      maximum: Joi.number(),
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
      is_gift: Joi.boolean(),

      moq: CatalogModel.MOQData(),

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

      next: Joi.number().required(),

      total_count: Joi.number().required(),

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
      display_type: Joi.string().allow("").required(),

      unit: Joi.string().allow(""),

      key: Joi.string().allow(""),

      priority: Joi.number().required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      template_slugs: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      app_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

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
      default_key: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

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
      units: Joi.array().items(Joi.any()),

      filter_types: Joi.array().items(Joi.string().allow("")),

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
      detail: Joi.any(),

      similar: Joi.any(),

      compare: Joi.any(),

      variant: Joi.any(),
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
      map: Joi.any(),

      condition: Joi.string().allow(""),

      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      value: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      value_config: CatalogModel.ConfigurationListingFilterValue(),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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
      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

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
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize(),

      title: Joi.string().allow(""),
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

      key: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

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
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      config_type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

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
      id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      is_default: Joi.boolean(),

      data: CatalogModel.EntityConfiguration(),
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
      display: Joi.string().allow("").required(),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      display: Joi.string().allow("").required(),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      max: Joi.number(),

      count: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      selected_min: Joi.number(),

      currency_code: Joi.string().allow(""),

      value: Joi.any().required(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),
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

  static BannerImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
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

      cron: Joi.any(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      type: Joi.string().allow(""),

      action: CatalogModel.Action(),

      allow_facets: Joi.boolean(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      _schedule: Joi.any(),
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
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
    });
  }

  static CreateCollection() {
    return Joi.object({
      banners: CatalogModel.CollectionBanner().required(),

      published: Joi.boolean(),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      seo: CatalogModel.SeoDetail(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      sort_on: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage().required(),

      modified_by: CatalogModel.UserInfo(),

      created_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      allow_facets: Joi.boolean(),

      app_id: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      _schedule: CatalogModel.CollectionSchedule(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tag: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.BannerImage(),

      type: Joi.string().allow(""),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      allow_sort: Joi.boolean(),

      badge: Joi.any(),

      _schedule: Joi.any(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      tag: Joi.array().items(Joi.string().allow("")),

      cron: Joi.any(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      is_active: Joi.boolean(),

      logo: CatalogModel.Media1(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      badge: Joi.any(),

      meta: Joi.any(),

      allow_facets: Joi.boolean(),

      app_id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      banners: CatalogModel.CollectionBanner(),

      published: Joi.boolean(),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      seo: CatalogModel.SeoDetail(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      allow_facets: Joi.boolean(),

      slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      _locale_language: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: CatalogModel.CollectionSchedule(),
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

  static Price1() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      sellable: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating: Joi.number(),

      item_type: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow("").required(),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      tryouts: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      price: CatalogModel.ProductListingPrice(),

      has_variant: Joi.boolean(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

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
      out_of_stock_count: Joi.number(),

      sellable_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      article_freshness: Joi.number(),

      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      total_sizes: Joi.number(),

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
      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      modified_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      company_id: Joi.number().required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      opt_level: Joi.string().allow("").required(),

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
      total_article: Joi.number(),

      company_id: Joi.number(),

      brand_id: Joi.number(),

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
      documents: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      timing: Joi.any(),

      modified_on: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      additional_contacts: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

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

  static AttributeMasterFilter() {
    return Joi.object({
      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
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
      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),
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
      is_nested: Joi.boolean(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      departments: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      enabled_for_end_consumer: Joi.boolean(),

      logo: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      slug: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      errors: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      page_no: Joi.number(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      search: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      page_size: Joi.number(),

      priority_order: Joi.number(),

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
      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      platforms: Joi.any(),

      name: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

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
      user_id: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      name: Joi.any().required(),

      _cls: Joi.any(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserDetail(),

      verified_on: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      slug: Joi.any(),

      _id: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      is_expirable: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),
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

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Properties() {
    return Joi.object({
      item_code: Joi.any(),

      variants: Joi.any(),

      short_description: Joi.any(),

      hsn_code: Joi.any(),

      highlights: Joi.any(),

      sizes: Joi.any(),

      name: Joi.any(),

      brand_uid: Joi.any(),

      media: Joi.any(),

      category_slug: Joi.any(),

      product_group_tag: Joi.any(),

      trader_type: Joi.any(),

      currency: Joi.any(),

      trader: Joi.any(),

      tags: Joi.any(),

      product_publish: Joi.any(),

      country_of_origin: Joi.any(),

      return_config: Joi.any(),

      item_type: Joi.any(),

      slug: Joi.any(),

      size_guide: Joi.any(),

      description: Joi.any(),

      command: Joi.any(),

      is_dependent: Joi.any(),

      teaser_tag: Joi.any(),

      no_of_boxes: Joi.any(),

      multi_size: Joi.any(),

      custom_order: Joi.any(),

      is_active: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      description: Joi.string().allow(""),

      definitions: Joi.any(),

      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      title: Joi.string().allow(""),
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
      seller_id: Joi.number(),

      id: Joi.string().allow(""),

      template_tags: Joi.any(),

      status: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      created_by: CatalogModel.VerifiedBy(),

      task_id: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
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
      l2: Joi.number().required(),

      department: Joi.number().required(),

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
      logo: Joi.string().allow("").required(),

      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      level: Joi.number().required(),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      marketplaces: CatalogModel.CategoryMapping(),

      media: CatalogModel.Media2(),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow(""),
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

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      level: Joi.number().required(),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      marketplaces: CatalogModel.CategoryMapping(),

      media: CatalogModel.Media2(),

      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow(""),
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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static Image() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      moq: Joi.any(),

      primary_color: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      tax_identifier: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      is_set: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      category_slug: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      variant_media: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      all_company_ids: Joi.array().items(Joi.number()),

      modified_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      company_id: Joi.number(),

      color: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      trader: Joi.array().items(Joi.any()),

      product_publish: CatalogModel.ProductPublished(),

      brand: CatalogModel.Brand(),

      country_of_origin: Joi.string().allow(""),

      created_by: Joi.any(),

      _custom_json: Joi.any(),

      modified_by: Joi.any(),

      verified_by: CatalogModel.VerifiedBy(),

      return_config: CatalogModel.ReturnConfigResponse(),

      pending: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      size_guide: Joi.string().allow(""),

      attributes: Joi.any(),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      is_dependent: Joi.boolean(),

      teaser_tag: Joi.any(),

      category: Joi.any(),

      no_of_boxes: Joi.number(),

      stage: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      is_physical: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      category_uid: Joi.number(),

      id: Joi.string().allow(""),

      variant_group: Joi.any(),

      created_on: Joi.string().allow(""),

      multi_size: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      custom_order: Joi.any(),

      is_active: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      is_expirable: Joi.boolean(),

      images: Joi.array().items(CatalogModel.Image()),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.any().required(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),

      url: Joi.string().allow("").allow(null),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
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

      variants: Joi.any(),

      short_description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      change_request_id: Joi.any(),

      name: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      sizes: Joi.array().items(Joi.any()).required(),

      brand_uid: Joi.number().required(),

      media: Joi.array().items(CatalogModel.Media1()),

      category_slug: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      currency: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      product_publish: CatalogModel.ProductPublish(),

      country_of_origin: Joi.string().allow("").required(),

      action: Joi.string().allow(""),

      _custom_json: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig().required(),

      item_type: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      size_guide: Joi.string().allow(""),

      attributes: Joi.any().required(),

      uid: Joi.number().allow(null),

      description: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      teaser_tag: CatalogModel.TeaserTag(),

      no_of_boxes: Joi.number(),

      departments: Joi.array().items(Joi.number()).required(),

      is_image_less_product: Joi.boolean(),

      variant_group: Joi.any(),

      multi_size: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      is_active: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      requester: Joi.string().allow(""),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      synonyms: Joi.any(),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      is_nested: Joi.boolean(),

      description: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      raw_key: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      created_on: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      variant: Joi.boolean(),

      details: CatalogModel.AttributeMasterDetails().required(),

      suggestion: Joi.string().allow(""),
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
      item_height: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_weight: Joi.number().required(),

      item_width: Joi.number().required(),

      item_length: Joi.number().required(),

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
      user_id: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      total: Joi.number(),

      company_id: Joi.number(),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      modified_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),
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
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      succeed: Joi.number(),

      file_path: Joi.string().allow(""),

      company_id: Joi.number().required(),

      template_tag: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),

      custom_template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      total: Joi.number(),

      stage: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      created_by: CatalogModel.UserInfo1(),
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
      user_id: Joi.string().allow(""),

      company_id: Joi.number(),

      username: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      failed: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      retry: Joi.number(),

      total: Joi.number(),

      company_id: Joi.number(),

      tracking_url: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      created_by: CatalogModel.UserCommon(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      sellable_quantity: Joi.number(),

      store: Joi.any(),

      price_transfer: Joi.number(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),
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

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),
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
      size_distribution: CatalogModel.SizeDistribution().required(),

      quantity: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static InvSize() {
    return Joi.object({
      item_height: Joi.number().allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      price: Joi.number(),

      expiration_date: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      currency: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      item_weight: Joi.number().allow(null),

      store_code: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),

      price_transfer: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      quantity: Joi.number().required(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InvSize()).required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),
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

      sellable: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      transfer: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      marked: Joi.number().required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      height: Joi.number().required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      weight: CatalogModel.WeightResponse().required(),

      set: CatalogModel.InventorySet(),

      tax_identifier: Joi.any(),

      is_set: Joi.boolean(),

      total_quantity: Joi.number().required(),

      fynd_article_code: Joi.string().allow("").required(),

      track_inventory: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      quantities: CatalogModel.Quantities(),

      store: CatalogModel.StoreMeta().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      tags: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number().required(),

      brand: CatalogModel.BrandMeta().required(),

      size: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      return_config: CatalogModel.ReturnConfig1(),

      trace_id: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      fragile: Joi.boolean().required(),

      meta: Joi.any().allow(null),

      stage: Joi.string().allow(""),

      fynd_meta: Joi.any(),

      raw_meta: Joi.any(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      price: CatalogModel.PriceMeta().required(),

      fynd_item_code: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse().required(),

      added_on_store: Joi.string().allow(""),

      identifier: Joi.any().required(),

      company: CatalogModel.CompanyMeta().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),
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

      sellable: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
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

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static DateMeta() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      effective: Joi.number(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),

      marked: Joi.number(),
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

  static GetInventories() {
    return Joi.object({
      weight: CatalogModel.WeightResponse1(),

      tax_identifier: Joi.any(),

      is_set: Joi.boolean(),

      total_quantity: Joi.number(),

      track_inventory: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      platforms: Joi.any(),

      store: CatalogModel.ArticleStoreResponse(),

      tags: Joi.array().items(Joi.string().allow("")),

      trader: Joi.array().items(CatalogModel.Trader2()),

      item_id: Joi.number(),

      brand: CatalogModel.BrandMeta1(),

      size: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      country_of_origin: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      trace_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      stage: Joi.string().allow(""),

      id: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      price: CatalogModel.PriceArticle(),

      dimension: CatalogModel.DimensionResponse1(),

      inventory_updated_on: Joi.string().allow(""),

      identifier: Joi.any(),

      company: CatalogModel.CompanyMeta1(),
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

      failed_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      total: Joi.number(),

      company_id: Joi.number(),

      is_active: Joi.boolean(),

      cancelled: Joi.number(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow(""),
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
      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number(),

      item_weight_unit_of_measure: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      user: Joi.any(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
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

      request_params: Joi.any(),

      status: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      trigger_on: Joi.string().allow(""),
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
      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().allow(null),

      store_id: Joi.number().required(),

      trace_id: Joi.string().allow(""),

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

  static PageResponse() {
    return Joi.object({
      size: Joi.number(),

      current: Joi.string().allow(""),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      tax1: Joi.number(),

      id: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hs2_code: Joi.string().allow(""),

      company_id: Joi.number(),

      threshold1: Joi.number(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      threshold2: Joi.number(),
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
      tax1: Joi.number().required(),

      uid: Joi.number(),

      tax_on_esp: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      company_id: Joi.number().required(),

      threshold1: Joi.number().required(),

      is_active: Joi.boolean(),

      tax2: Joi.number(),

      tax_on_mrp: Joi.boolean().required(),

      threshold2: Joi.number(),
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
      rate: Joi.number().required(),

      cess: Joi.number(),

      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      hsn_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      country_code: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      reporting_hsn: Joi.string().allow("").required(),
    });
  }

  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      page: CatalogModel.PageResponse(),

      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),
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

      meta: Joi.any(),

      quantity: Joi.number(),

      query: CatalogModel.ArticleQuery(),
    });
  }

  static AssignStore() {
    return Joi.object({
      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_type: Joi.string().allow(""),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      channel_identifier: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
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
      index: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      uid: Joi.string().allow(""),

      price_marked: Joi.number(),

      status: Joi.boolean().required(),

      store_pincode: Joi.number(),

      company_id: Joi.number(),

      price_effective: Joi.number(),

      group_id: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      meta: Joi.any(),

      s_city: Joi.string().allow(""),

      quantity: Joi.number().required(),

      _id: Joi.string().allow(""),

      store_id: Joi.number(),
    });
  }

  static BrandItem() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.Action(),

      discount: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

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
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

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

      uid: Joi.number(),

      childs: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.Child()),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),

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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
    });
  }

  static ProductDetail() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      medias: Joi.array().items(CatalogModel.Media1()),

      color: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating: Joi.number(),

      item_type: Joi.string().allow(""),

      attributes: Joi.any(),

      slug: Joi.string().allow("").required(),

      image_nature: Joi.string().allow(""),

      uid: Joi.number(),

      description: Joi.string().allow(""),

      product_online_date: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      rating_count: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      tryouts: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      has_variant: Joi.boolean(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
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
      enabled: Joi.boolean(),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_invoice: CatalogModel.InvoiceCredSerializer(),

      e_waybill: CatalogModel.InvoiceCredSerializer(),
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

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),
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
      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      closing: CatalogModel.LocationTimingSerializer(),

      opening: CatalogModel.LocationTimingSerializer(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string().allow(""),

      inventory: Joi.string().allow(""),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static UserSerializer2() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      uid: Joi.number(),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer2(),

      created_by: CatalogModel.UserSerializer2(),

      reject_reason: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      warnings: Joi.any(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      code: Joi.string().allow("").required(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer1(),

      created_by: CatalogModel.UserSerializer1(),

      _custom_json: Joi.any(),

      verified_by: CatalogModel.UserSerializer1(),

      address: CatalogModel.GetAddressSerializer().required(),

      uid: Joi.number(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      store_type: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      integration_type: CatalogModel.LocationIntegrationType(),

      phone_number: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      company: CatalogModel.GetCompanySerializer(),
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

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

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
