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
      result: CatalogModel.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      result: Joi.any(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      page: CatalogModel.AutocompletePageAction(),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
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

      results: Joi.array().items(Joi.any()),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

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
      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      created_by: Joi.any(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      logo: Joi.string().allow("").allow(null),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      is_active: Joi.boolean().required(),

      choice: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      name: Joi.string().allow("").required(),

      same_store_assignment: Joi.boolean(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
    });
  }

  static Price() {
    return Joi.object({
      max_marked: Joi.number(),

      min_effective: Joi.number(),

      min_marked: Joi.number(),

      max_effective: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      price: Joi.any(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      item_code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      country_of_origin: Joi.string().allow(""),

      quantity: Joi.number(),

      name: Joi.string().allow(""),

      identifier: Joi.any(),
    });
  }

  static GetProducts() {
    return Joi.object({
      price: CatalogModel.Price(),

      min_quantity: Joi.number(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.LimitedProductData(),

      auto_add_to_cart: Joi.boolean(),

      auto_select: Joi.boolean(),

      allow_remove: Joi.boolean(),

      product_uid: Joi.number(),

      max_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      slug: Joi.string().allow(""),

      company_id: Joi.number(),

      logo: Joi.string().allow(""),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      choice: Joi.string().allow(""),

      name: Joi.string().allow(""),

      same_store_assignment: Joi.boolean(),

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
      values: Joi.array().items(Joi.any()),

      headers: Joi.any(),

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
      title: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      image: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: CatalogModel.Guide(),

      brand_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      title: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: Joi.any(),

      brand_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      active: Joi.boolean(),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      maximum: Joi.number(),

      increment_unit: Joi.number(),

      minimum: Joi.number(),
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

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

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

      increment_unit: Joi.number(),

      minimum: Joi.number(),
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

      is_gift: Joi.boolean(),

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
      current: Joi.number().required(),

      total_count: Joi.number().required(),

      has_next: Joi.boolean().required(),

      next: Joi.number().required(),
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

      priority: Joi.number().required(),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_default: Joi.boolean().required(),

      priority: Joi.number().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

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
      is_default: Joi.boolean().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),

      default_key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),
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
      display: Joi.string().allow(""),

      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),
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

      similar: Joi.any(),

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

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      title: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      size: CatalogModel.ProductSize(),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

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
      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

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

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      value: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      name: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

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
      type: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),
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
      config_type: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      id: Joi.string().allow(""),

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      selected_max: Joi.number(),

      count: Joi.number(),

      currency_code: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      query_format: Joi.string().allow(""),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      max: Joi.number(),

      value: Joi.any().required(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow("").required(),

      kind: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
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
      op: Joi.string().allow("").required(),

      attribute: Joi.string().allow("").required(),

      value: Joi.array().items(Joi.any()).required(),
    });
  }

  static Media1() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      priority: Joi.number(),

      action: CatalogModel.Action(),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

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
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),
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

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
    });
  }

  static CreateCollection() {
    return Joi.object({
      priority: Joi.number(),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      banners: CatalogModel.CollectionBanner().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _locale_language: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      published: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      created_by: CatalogModel.UserInfo(),

      modified_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      type: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage().required(),

      allow_sort: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      priority: Joi.number(),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.BannerImage(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      priority: Joi.number(),

      meta: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      tag: Joi.array().items(Joi.string().allow("")),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media1(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      cron: Joi.any(),

      app_id: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      priority: Joi.number(),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      _locale_language: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      description: Joi.string().allow(""),

      published: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      modified_by: CatalogModel.UserInfo(),

      is_active: Joi.boolean(),

      sort_on: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      seo: CatalogModel.SeoDetail(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      is_visible: Joi.boolean(),

      logo: CatalogModel.CollectionImage(),

      allow_sort: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),
    });
  }

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),
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
      price: CatalogModel.ProductListingPrice(),

      discount: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating: Joi.number(),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      sellable: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),
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

      available_sizes: Joi.number(),

      name: Joi.string().allow(""),

      article_freshness: Joi.number(),

      total_sizes: Joi.number(),

      available_articles: Joi.number(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),

      count: Joi.number(),
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
      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),

      platform: Joi.string().allow(""),

      enabled: Joi.boolean(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      modified_on: Joi.number().required(),

      company_id: Joi.number().required(),

      created_by: Joi.any(),

      platform: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      enabled: Joi.boolean().required(),

      opt_level: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      created_on: Joi.number().required(),
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

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      company_id: Joi.number(),

      total_article: Joi.number(),

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
      timing: Joi.any(),

      display_name: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      additional_contacts: Joi.array().items(Joi.any()),

      address: Joi.any(),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      manager: Joi.any(),

      documents: Joi.array().items(Joi.any()),

      name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      enriched: Joi.boolean(),

      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),
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

      allowed_values: Joi.array().items(Joi.string().allow("")),

      multi: Joi.boolean(),

      range: CatalogModel.AttributeSchemaRange(),

      format: Joi.string().allow(""),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      priority: Joi.number(),

      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GenderDetail() {
    return Joi.object({
      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      logo: Joi.string().allow(""),

      id: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster(),

      details: CatalogModel.AttributeMasterDetails(),

      filters: CatalogModel.AttributeMasterFilter(),

      enabled_for_end_consumer: Joi.boolean(),
    });
  }

  static ProductTemplateCategory() {
    return Joi.object({
      slug: Joi.string().allow(""),

      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateCategory()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      page_no: Joi.number(),

      logo: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

      page_size: Joi.number(),

      modified_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number(),

      search: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      platforms: Joi.any(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      _cls: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      priority_order: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),
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
      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      super_user: Joi.boolean(),

      username: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      slug: Joi.any(),

      uid: Joi.number(),

      modified_on: Joi.string().allow("").required(),

      _cls: Joi.any(),

      logo: Joi.string().allow("").required(),

      created_by: CatalogModel.UserDetail(),

      modified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),

      name: Joi.any().required(),

      verified_by: CatalogModel.UserDetail(),

      synonyms: Joi.array().items(Joi.any()),

      _id: Joi.any(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      created_by: Joi.any(),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      custom_order: Joi.any(),

      sizes: Joi.any(),

      short_description: Joi.any(),

      trader: Joi.any(),

      command: Joi.any(),

      multi_size: Joi.any(),

      item_code: Joi.any(),

      brand_uid: Joi.any(),

      item_type: Joi.any(),

      name: Joi.any(),

      product_publish: Joi.any(),

      tags: Joi.any(),

      variants: Joi.any(),

      trader_type: Joi.any(),

      size_guide: Joi.any(),

      category_slug: Joi.any(),

      description: Joi.any(),

      no_of_boxes: Joi.any(),

      media: Joi.any(),

      is_dependent: Joi.any(),

      highlights: Joi.any(),

      is_active: Joi.any(),

      country_of_origin: Joi.any(),

      hsn_code: Joi.any(),

      currency: Joi.any(),

      slug: Joi.any(),

      return_config: Joi.any(),

      product_group_tag: Joi.any(),

      teaser_tag: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      type: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      title: Joi.string().allow(""),

      definitions: Joi.any(),

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
      slug: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      is_physical: Joi.boolean().required(),

      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      brand: Joi.array().items(Joi.string().allow("")),

      templates: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      template_tags: Joi.any(),

      task_id: Joi.string().allow(""),

      seller_id: Joi.number(),

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

      l1: Joi.number().required(),

      l2: Joi.number().required(),
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
      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

      google: CatalogModel.CategoryMappingValues(),
    });
  }

  static Category() {
    return Joi.object({
      media: CatalogModel.Media2(),

      slug: Joi.string().allow(""),

      level: Joi.number().required(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      priority: Joi.number(),

      id: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      created_by: Joi.any(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),
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
      media: CatalogModel.Media2(),

      slug: Joi.string().allow(""),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      priority: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      is_active: Joi.boolean().required(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.number()).required(),

      synonyms: Joi.array().items(Joi.string().allow("")),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
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

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),

      product_online_date: Joi.number(),
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

  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Product() {
    return Joi.object({
      template_tag: Joi.string().allow(""),

      custom_order: Joi.any(),

      sizes: Joi.array().items(Joi.any()),

      short_description: Joi.string().allow(""),

      trader: Joi.array().items(Joi.any()),

      attributes: Joi.any(),

      is_expirable: Joi.boolean(),

      company_id: Joi.number(),

      multi_size: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      images: Joi.array().items(CatalogModel.Image()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      tags: Joi.array().items(Joi.string().allow("")),

      moq: Joi.any(),

      brand: CatalogModel.Brand(),

      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      all_sizes: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      variants: Joi.any(),

      category_uid: Joi.number(),

      size_guide: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      color: Joi.string().allow(""),

      description: Joi.string().allow(""),

      variant_media: Joi.any(),

      no_of_boxes: Joi.number(),

      stage: Joi.string().allow(""),

      all_company_ids: Joi.array().items(Joi.number()),

      verified_by: CatalogModel.VerifiedBy(),

      media: Joi.array().items(CatalogModel.Media1()),

      pending: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow(""),

      modified_by: Joi.any(),

      hsn_code: Joi.string().allow(""),

      net_quantity: CatalogModel.NetQuantityResponse(),

      tax_identifier: Joi.any(),

      currency: Joi.string().allow(""),

      variant_group: Joi.any(),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      category: Joi.any(),

      is_physical: Joi.boolean(),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      id: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      teaser_tag: Joi.any(),

      created_on: Joi.string().allow(""),
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
      manufacturing_time_unit: Joi.string().allow(""),

      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),
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
      is_set: Joi.boolean(),

      product_online_date: Joi.string().allow(""),
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

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      custom_order: CatalogModel.CustomOrder(),

      sizes: Joi.array().items(Joi.any()).required(),

      short_description: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      company_id: Joi.number().required(),

      is_image_less_product: Joi.boolean(),

      attributes: Joi.any(),

      multi_size: Joi.boolean(),

      action: Joi.string().allow(""),

      item_code: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      item_type: Joi.string().allow("").required(),

      product_publish: CatalogModel.ProductPublish(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number().allow(null),

      is_set: Joi.boolean(),

      variants: Joi.any(),

      change_request_id: Joi.any(),

      size_guide: Joi.string().allow(""),

      category_slug: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      description: Joi.string().allow(""),

      requester: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      bulk_job_id: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      is_dependent: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      currency: Joi.string().allow("").required(),

      variant_group: Joi.any(),

      slug: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      departments: Joi.array().items(Joi.number()).required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      teaser_tag: CatalogModel.TeaserTag(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      media: Joi.array().items(CatalogModel.Media1()),

      uid: Joi.number(),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),

      name: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      variant: Joi.boolean(),

      enabled_for_end_consumer: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      suggestion: Joi.string().allow(""),

      description: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      schema: CatalogModel.AttributeMaster().required(),

      modified_on: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      is_nested: Joi.boolean(),

      logo: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      synonyms: Joi.any(),

      created_on: Joi.string().allow(""),
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
      gtin_value: Joi.string().allow("").required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_width: Joi.number().required(),

      item_length: Joi.number().required(),

      item_weight: Joi.number().required(),

      item_height: Joi.number().required(),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.any().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),
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
      user_id: Joi.string().allow(""),

      full_name: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      total: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail1(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),
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

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      template_tag: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number().required(),

      total: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      custom_template_tag: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.any()),

      succeed: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

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
      failed_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      total: Joi.number(),

      retry: Joi.number(),

      id: Joi.string().allow(""),

      created_by: CatalogModel.UserCommon(),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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

      user: Joi.any().required(),

      url: Joi.string().allow("").required(),
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
      seller_identifier: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price: Joi.number(),

      store: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      price_effective: Joi.number(),

      item_id: Joi.number(),

      price_transfer: Joi.number(),

      quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      size: Joi.string().allow(""),

      currency: Joi.string().allow(""),
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

  static GTIN() {
    return Joi.object({
      gtin_value: Joi.any().required(),

      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),
    });
  }

  static InvSize() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      price: Joi.number(),

      set: CatalogModel.InventorySet(),

      item_width: Joi.number().allow(null),

      price_effective: Joi.number().required(),

      is_set: Joi.boolean(),

      item_length: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      price_transfer: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      quantity: Joi.number().required(),

      size: Joi.any().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),
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

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      effective: Joi.number().required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

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

  static QuantityBase() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string().allow(""),
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

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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

  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      store: CatalogModel.StoreMeta().required(),

      company: CatalogModel.CompanyMeta().required(),

      price: CatalogModel.PriceMeta().required(),

      total_quantity: Joi.number().required(),

      fragile: Joi.boolean().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      quantities: CatalogModel.Quantities(),

      expiration_date: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      fynd_item_code: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta().required(),

      uid: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      fynd_meta: Joi.any(),

      fynd_article_code: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      item_id: Joi.number().required(),

      weight: CatalogModel.WeightResponse().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      stage: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserSerializer(),

      raw_meta: Joi.any(),

      size: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      tax_identifier: Joi.any(),

      dimension: CatalogModel.DimensionResponse().required(),

      added_on_store: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig1(),

      identifier: Joi.any().required(),
    });
  }

  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),

      page: CatalogModel.Page(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency: Joi.string().allow(""),

      transfer: Joi.number(),
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
      not_available: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
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

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      is_default: Joi.boolean(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static DimensionResponse1() {
    return Joi.object({
      length: Joi.number(),

      width: Joi.number(),

      height: Joi.number(),

      unit: Joi.string().allow(""),
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
      added_on_store: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      store: CatalogModel.ArticleStoreResponse(),

      price: CatalogModel.PriceArticle(),

      total_quantity: Joi.number(),

      company: CatalogModel.CompanyMeta1(),

      quantities: CatalogModel.QuantitiesArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      expiration_date: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: CatalogModel.BrandMeta1(),

      platforms: Joi.any(),

      uid: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      is_set: Joi.boolean(),

      item_id: Joi.number(),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      stage: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      created_by: CatalogModel.UserSerializer(),

      modified_by: CatalogModel.UserSerializer(),

      country_of_origin: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      size: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      tax_identifier: Joi.any(),

      return_config: CatalogModel.ReturnConfig2(),

      id: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      identifier: Joi.any(),
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
      failed_records: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      total: Joi.number(),

      id: Joi.string().allow(""),

      created_by: Joi.any(),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      succeed: Joi.number(),

      stage: Joi.string().allow(""),

      cancelled: Joi.number(),

      created_on: Joi.string().allow(""),
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
      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number(),

      price: Joi.number(),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      item_weight_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      item_dimensions_unit_of_measure: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

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
      trigger_on: Joi.string().allow(""),

      request_params: Joi.any(),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

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

      total_quantity: Joi.number().allow(null),

      price_effective: Joi.number(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),

      trace_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
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
      hs2_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      threshold1: Joi.number(),

      threshold2: Joi.number(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      tax_on_esp: Joi.boolean(),

      id: Joi.string().allow(""),

      tax1: Joi.number(),

      hsn_code: Joi.string().allow(""),

      tax2: Joi.number(),
    });
  }

  static PageResponse() {
    return Joi.object({
      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.HsnCodesObject()),

      page: CatalogModel.PageResponse(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_mrp: Joi.boolean().required(),

      uid: Joi.number(),

      threshold1: Joi.number().required(),

      threshold2: Joi.number(),

      company_id: Joi.number().required(),

      tax_on_esp: Joi.boolean(),

      is_active: Joi.boolean(),

      tax1: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

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
      effective_date: Joi.string().allow("").required(),

      threshold: Joi.number().required(),

      cess: Joi.number(),

      rate: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      departments: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.Media(),

      action: CatalogModel.Action(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),
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

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      name: Joi.string().allow(""),

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
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
    });
  }

  static Child() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      _custom_json: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
    });
  }

  static CategoryItems() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),
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
      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      short_description: Joi.string().allow(""),

      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media1()),

      item_code: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      rating: Joi.number(),

      uid: Joi.number(),

      product_online_date: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      promo_meta: Joi.any(),

      description: Joi.string().allow(""),

      rating_count: Joi.number(),

      similars: Joi.array().items(Joi.string().allow("")),

      highlights: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      image_nature: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      teaser_tag: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),

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

  static ArticleQuery() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      ignored_stores: Joi.array().items(Joi.number()),
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

      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      channel_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      channel_identifier: Joi.string().allow(""),

      store_ids: Joi.array().items(Joi.number()),

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
      uid: Joi.string().allow(""),

      index: Joi.number(),

      company_id: Joi.number(),

      item_id: Joi.number().required(),

      _id: Joi.string().allow(""),

      price_effective: Joi.number(),

      s_city: Joi.string().allow(""),

      meta: Joi.any(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      group_id: Joi.string().allow(""),

      price_marked: Joi.number(),

      store_id: Joi.number(),

      quantity: Joi.number().required(),

      size: Joi.string().allow("").required(),

      store_pincode: Joi.number(),

      status: Joi.boolean().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),
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
      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      latitude: Joi.number(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer1(),

      modified_by: CatalogModel.UserSerializer1(),

      business_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer1(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      created_on: Joi.string().allow(""),
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

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      legal_name: Joi.string().allow(""),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),
    });
  }

  static UserSerializer2() {
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
      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),

      number: Joi.string().allow("").required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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

  static GetLocationSerializer() {
    return Joi.object({
      company: CatalogModel.GetCompanySerializer(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      _custom_json: Joi.any(),

      name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      verified_on: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      uid: Joi.number(),

      phone_number: Joi.string().allow("").required(),

      documents: Joi.array().items(CatalogModel.Document()),

      stage: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      modified_on: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      created_by: CatalogModel.UserSerializer2(),

      modified_by: CatalogModel.UserSerializer2(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      store_type: Joi.string().allow(""),

      manager: CatalogModel.LocationManagerSerializer(),

      integration_type: CatalogModel.LocationIntegrationType(),

      code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),
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
      uid: Joi.number().required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),
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
