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
      is_active: Joi.boolean(),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      is_active: Joi.boolean(),

      result: Joi.any(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      meta: Joi.any(),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      current: Joi.number(),

      next_id: Joi.string().allow(""),

      size: Joi.number(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
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

  static Media() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      page: CatalogModel.AutocompletePageAction(),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow(""),

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

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      product_uid: Joi.number().required(),

      auto_select: Joi.boolean(),

      min_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      meta: Joi.any(),

      id: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),
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
      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow("").allow(null),

      choice: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      same_store_assignment: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),
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

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      attributes: Joi.any(),

      price: Joi.any(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      identifier: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),

      min_marked: Joi.number(),

      max_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.Size()),

      product_uid: Joi.number(),

      auto_select: Joi.boolean(),

      product_details: CatalogModel.LimitedProductData(),

      price: CatalogModel.Price(),

      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      max_quantity: Joi.number(),

      allow_remove: Joi.boolean(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      meta: Joi.any(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      is_active: Joi.boolean(),

      same_store_assignment: Joi.boolean(),

      name: Joi.string().allow(""),

      company_id: Joi.number(),
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
      tag: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      active: Joi.boolean(),

      image: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      company_id: Joi.number(),

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
      tag: Joi.string().allow(""),

      active: Joi.boolean(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_id: Joi.number(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      guide: Joi.any(),
    });
  }

  static SEOData() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
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

      moq: CatalogModel.MOQData(),

      is_gift: Joi.boolean(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),

      title: Joi.any(),
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

  static ApplicationItemMeta() {
    return Joi.object({
      seo: CatalogModel.ApplicationItemSEO(),

      alt_text: Joi.any(),

      is_cod: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_gift: Joi.boolean(),
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

      data: Joi.array().items(Joi.any()).required(),

      values: Joi.array().items(Joi.any()),
    });
  }

  static PageResponseType() {
    return Joi.object({
      next: Joi.number().required(),

      current: Joi.number().required(),

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
      key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      unit: Joi.string().allow(""),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

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

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

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

      similar: Joi.any(),

      variant: Joi.any(),

      compare: Joi.any(),
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
      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      units: Joi.array().items(Joi.any()),

      display: Joi.string().allow(""),
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

  static ConfigurationBucketPoints() {
    return Joi.object({
      start: Joi.number(),

      end: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map_values: Joi.array().items(Joi.any()),

      sort: Joi.string().allow(""),

      map: Joi.any(),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      value: Joi.string().allow(""),

      condition: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      logo: Joi.string().allow(""),

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

  static ConfigurationListing() {
    return Joi.object({
      sort: CatalogModel.ConfigurationListingSort().required(),

      filter: CatalogModel.ConfigurationListingFilter().required(),
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
      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      logo: Joi.string().allow(""),

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

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      display_type: Joi.string().allow("").required(),

      size: CatalogModel.ProductSize().required(),

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

  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),

      variant: CatalogModel.ConfigurationProductVariant().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),
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
      created_by: Joi.any(),

      modified_by: Joi.any(),

      modified_on: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),
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

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
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

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      operators: Joi.array().items(Joi.string().allow("")),

      logo: Joi.string().allow(""),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      query_format: Joi.string().allow(""),

      value: Joi.any().required(),

      is_selected: Joi.boolean().required(),

      display_format: Joi.string().allow(""),

      selected_min: Joi.number(),

      display: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      min: Joi.number(),

      selected_max: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      count: Joi.number(),

      max: Joi.number(),
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
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),

      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),
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
      type: Joi.string().allow(""),

      query: Joi.any(),
    });
  }

  static Action() {
    return Joi.object({
      type: Joi.string().allow(""),

      page: CatalogModel.ActionPage(),
    });
  }

  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ImageUrls() {
    return Joi.object({
      landscape: CatalogModel.BannerImage(),

      portrait: CatalogModel.BannerImage(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      cron: Joi.any(),

      logo: CatalogModel.Media1(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      badge: Joi.any(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      uid: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      filters: CatalogModel.CollectionListingFilter(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

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

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),

      url: Joi.string().allow("").required(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
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
      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      start: Joi.string().allow(""),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: CatalogModel.CollectionImage().required(),

      landscape: CatalogModel.CollectionImage().required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),

      logo: CatalogModel.CollectionImage().required(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      _custom_json: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      created_by: CatalogModel.UserInfo(),

      slug: Joi.string().allow("").required(),

      allow_facets: Joi.boolean(),

      published: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      banners: CatalogModel.CollectionBanner().required(),

      app_id: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      _locale_language: Joi.any(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      cron: Joi.any(),

      logo: CatalogModel.BannerImage(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      meta: Joi.any(),

      cron: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      badge: Joi.any(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      logo: CatalogModel.Media1(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      allow_sort: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      _schedule: Joi.any(),

      banners: CatalogModel.ImageUrls(),

      app_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      priority: Joi.number(),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      modified_by: CatalogModel.UserInfo(),

      seo: CatalogModel.SeoDetail(),

      logo: CatalogModel.CollectionImage(),

      is_visible: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      name: Joi.string().allow(""),

      priority: Joi.number(),

      _custom_json: Joi.any(),

      badge: CatalogModel.CollectionBadge(),

      sort_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      meta: Joi.any(),

      slug: Joi.string().allow(""),

      allow_facets: Joi.boolean(),

      published: Joi.boolean(),

      allow_sort: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      banners: CatalogModel.CollectionBanner(),

      type: Joi.string().allow(""),

      _locale_language: Joi.any(),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      logo: CatalogModel.Media1(),

      name: Joi.string().allow(""),

      action: CatalogModel.Action(),
    });
  }

  static Price1() {
    return Joi.object({
      min: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      max: Joi.number(),
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
      promo_meta: Joi.any(),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      image_nature: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      teaser_tag: Joi.any(),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      sellable: Joi.boolean(),

      product_online_date: Joi.string().allow(""),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      rating: Joi.number(),

      short_description: Joi.string().allow(""),

      description: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      uid: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),
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

  static CatalogInsightItem() {
    return Joi.object({
      sellable_count: Joi.number(),

      count: Joi.number(),

      out_of_stock_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      article_freshness: Joi.number(),

      name: Joi.string().allow(""),

      total_articles: Joi.number(),

      total_sizes: Joi.number(),

      available_sizes: Joi.number(),

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
      store_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      enabled: Joi.boolean(),

      platform: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),

      company_id: Joi.number(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      modified_on: Joi.number().required(),

      enabled: Joi.boolean().required(),

      created_on: Joi.number().required(),

      platform: Joi.string().allow("").required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),
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

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      total_article: Joi.number(),

      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

      company_id: Joi.number(),
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

      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      documents: Joi.array().items(Joi.any()),

      address: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      manager: Joi.any(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      display_name: Joi.string().allow(""),
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

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      indexing: Joi.boolean().required(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
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
      allowed_values: Joi.array().items(Joi.string().allow("")),

      format: Joi.string().allow(""),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      type: Joi.string().allow("").required(),

      range: CatalogModel.AttributeSchemaRange(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      meta: CatalogModel.AttributeMasterMeta(),

      is_nested: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      id: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      logo: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      meta: Joi.any(),

      code: Joi.string().allow(""),

      errors: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),

      page_size: Joi.number(),

      uid: Joi.number(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      search: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      priority_order: Joi.number(),

      item_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      page_no: Joi.number(),
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

      code: Joi.string().allow(""),

      errors: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      _cls: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      name: Joi.string().allow("").required(),

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

      super_user: Joi.boolean(),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      _cls: Joi.any(),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserDetail(),

      slug: Joi.any(),

      modified_by: CatalogModel.UserDetail(),

      uid: Joi.number(),

      logo: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      name: Joi.any().required(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.any()),

      priority_order: Joi.number().required(),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow("").required(),

      _id: Joi.any(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      categories: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      departments: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      is_physical: Joi.boolean().required(),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Properties() {
    return Joi.object({
      size_guide: Joi.any(),

      hsn_code: Joi.any(),

      currency: Joi.any(),

      brand_uid: Joi.any(),

      variants: Joi.any(),

      trader: Joi.any(),

      product_publish: Joi.any(),

      name: Joi.any(),

      no_of_boxes: Joi.any(),

      trader_type: Joi.any(),

      product_group_tag: Joi.any(),

      item_code: Joi.any(),

      command: Joi.any(),

      teaser_tag: Joi.any(),

      item_type: Joi.any(),

      media: Joi.any(),

      category_slug: Joi.any(),

      sizes: Joi.any(),

      is_active: Joi.any(),

      tags: Joi.any(),

      custom_order: Joi.any(),

      country_of_origin: Joi.any(),

      description: Joi.any(),

      short_description: Joi.any(),

      highlights: Joi.any(),

      multi_size: Joi.any(),

      return_config: Joi.any(),

      slug: Joi.any(),

      is_dependent: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

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

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ProductDownloadItemsData() {
    return Joi.object({
      type: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")),

      brand: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductDownloadsItems() {
    return Joi.object({
      completed_on: Joi.string().allow(""),

      created_by: CatalogModel.VerifiedBy(),

      id: Joi.string().allow(""),

      task_id: Joi.string().allow(""),

      data: CatalogModel.ProductDownloadItemsData(),

      seller_id: Joi.number(),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),

      template_tags: Joi.any(),
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

  static CategoryMappingValues() {
    return Joi.object({
      catalog_id: Joi.number(),

      name: Joi.string().allow("").required(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      google: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),
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
      l2: Joi.number().required(),

      l1: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static Category() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),

      created_by: Joi.any(),

      slug: Joi.string().allow(""),

      modified_by: Joi.any(),

      uid: Joi.number(),

      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      media: CatalogModel.Media2(),

      created_on: Joi.string().allow(""),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

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
      departments: Joi.array().items(Joi.number()).required(),

      slug: Joi.string().allow(""),

      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      media: CatalogModel.Media2(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      level: Joi.number().required(),

      name: Joi.string().allow("").required(),

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

  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      size_guide: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      currency: Joi.string().allow(""),

      brand_uid: Joi.number(),

      brand: CatalogModel.Brand(),

      is_physical: Joi.boolean(),

      variants: Joi.any(),

      image_nature: Joi.string().allow(""),

      product_publish: CatalogModel.ProductPublished(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      item_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      media: Joi.array().items(CatalogModel.Media1()),

      tax_identifier: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      category_slug: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      is_set: Joi.boolean(),

      variant_group: Joi.any(),

      is_active: Joi.boolean(),

      color: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      custom_order: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      description: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      category_uid: Joi.number(),

      highlights: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      multi_size: Joi.boolean(),

      slug: Joi.string().allow(""),

      is_dependent: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.Product()),
    });
  }

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.any().required(),

      address: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
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
      reporting_hsn: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),
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
      is_custom_order: Joi.boolean(),

      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),

      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      size_guide: Joi.string().allow(""),

      currency: Joi.string().allow("").required(),

      brand_uid: Joi.number().required(),

      variants: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      product_publish: CatalogModel.ProductPublish(),

      name: Joi.any().required(),

      no_of_boxes: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.any().required(),

      action: Joi.string().allow(""),

      change_request_id: Joi.any(),

      template_tag: Joi.string().allow("").required(),

      teaser_tag: CatalogModel.TeaserTag(),

      item_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      is_image_less_product: Joi.boolean(),

      media: Joi.array().items(CatalogModel.Media1()),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      requester: Joi.string().allow(""),

      company_id: Joi.number().required(),

      category_slug: Joi.string().allow("").required(),

      net_quantity: CatalogModel.NetQuantity(),

      is_set: Joi.boolean(),

      variant_group: Joi.any(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      custom_order: CatalogModel.CustomOrder(),

      country_of_origin: Joi.string().allow("").required(),

      short_description: Joi.string().allow(""),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      multi_size: Joi.boolean(),

      departments: Joi.array().items(Joi.number()).required(),

      return_config: CatalogModel.ReturnConfig().required(),

      slug: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      uid: Joi.number().allow(null),

      is_dependent: Joi.boolean(),

      bulk_job_id: Joi.string().allow(""),
    });
  }

  static ProductVariants() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      brand_uid: Joi.number(),

      media: Joi.array().items(CatalogModel.Media1()),

      name: Joi.string().allow(""),

      category_uid: Joi.number(),
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
      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      variant: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      details: CatalogModel.AttributeMasterDetails().required(),

      schema: CatalogModel.AttributeMaster().required(),

      enabled_for_end_consumer: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      description: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      is_nested: Joi.boolean(),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      synonyms: Joi.any(),

      modified_on: Joi.string().allow(""),

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
      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      succeed: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserDetail1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      template: CatalogModel.ProductTemplate(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      file_path: Joi.string().allow(""),
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
      username: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static BulkJob() {
    return Joi.object({
      cancelled: Joi.number(),

      succeed: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.any()),

      created_by: CatalogModel.UserInfo1(),

      custom_template_tag: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo1(),

      template_tag: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.any()),

      tracking_url: Joi.string().allow(""),

      failed: Joi.number(),

      created_on: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      file_path: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      data: Joi.array().items(Joi.any()).required(),

      batch_id: Joi.string().allow("").required(),
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
      username: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),
    });
  }

  static Items() {
    return Joi.object({
      cancelled: Joi.number(),

      succeed: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      retry: Joi.number(),

      total: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      id: Joi.string().allow(""),

      modified_by: CatalogModel.UserCommon(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      tracking_url: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

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
      identifiers: Joi.any(),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      store: Joi.any(),

      price_transfer: Joi.number(),
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
      gtin_value: Joi.any().required(),

      gtin_type: Joi.string().allow("").required(),

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
      size_distribution: CatalogModel.SizeDistribution().required(),

      quantity: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static InvSize() {
    return Joi.object({
      item_width: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      is_set: Joi.boolean(),

      price: Joi.number(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      currency: Joi.string().allow("").required(),

      item_height: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      set: CatalogModel.InventorySet(),

      size: Joi.any().required(),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      quantity: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price_transfer: Joi.number().allow(null),
    });
  }

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      brand_uid: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),

      item: CatalogModel.ItemQuery().required(),

      company_id: Joi.number().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static Trader1() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      tp_notes: Joi.any(),

      currency: Joi.string().allow("").required(),

      effective: Joi.number().required(),

      transfer: Joi.number().required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),
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

      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      is_default: Joi.boolean().required(),

      unit: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
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
      modified_by: CatalogModel.UserSerializer(),

      fynd_article_code: Joi.string().allow("").required(),

      brand: CatalogModel.BrandMeta().required(),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      fynd_item_code: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      fragile: Joi.boolean().required(),

      trace_id: Joi.string().allow(""),

      raw_meta: Joi.any(),

      dimension: CatalogModel.DimensionResponse().required(),

      expiration_date: Joi.string().allow(""),

      price: CatalogModel.PriceMeta().required(),

      quantities: CatalogModel.Quantities(),

      _custom_json: Joi.any(),

      identifier: Joi.any().required(),

      tax_identifier: Joi.any(),

      track_inventory: Joi.boolean(),

      store: CatalogModel.StoreMeta().required(),

      weight: CatalogModel.WeightResponse().required(),

      is_set: Joi.boolean(),

      added_on_store: Joi.string().allow(""),

      is_active: Joi.boolean(),

      company: CatalogModel.CompanyMeta().required(),

      fynd_meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      set: CatalogModel.InventorySet(),

      total_quantity: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      return_config: CatalogModel.ReturnConfig1(),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),
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

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      is_default: Joi.boolean(),

      name: Joi.string().allow(""),
    });
  }

  static Trader2() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),
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

  static PriceArticle() {
    return Joi.object({
      tp_notes: Joi.any(),

      currency: Joi.string().allow(""),

      effective: Joi.number(),

      transfer: Joi.number(),

      marked: Joi.number(),
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

      order_committed: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      store_type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

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
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static GetInventories() {
    return Joi.object({
      id: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      brand: CatalogModel.BrandMeta1(),

      item_id: Joi.number(),

      size: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      trace_id: Joi.string().allow(""),

      dimension: CatalogModel.DimensionResponse1(),

      expiration_date: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      quantities: CatalogModel.QuantitiesArticle(),

      inventory_updated_on: Joi.string().allow(""),

      identifier: Joi.any(),

      tax_identifier: Joi.any(),

      track_inventory: Joi.boolean(),

      store: CatalogModel.ArticleStoreResponse(),

      date_meta: CatalogModel.DateMeta(),

      weight: CatalogModel.WeightResponse1(),

      is_set: Joi.boolean(),

      company: CatalogModel.CompanyMeta1(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      platforms: Joi.any(),

      return_config: CatalogModel.ReturnConfig2(),

      created_by: CatalogModel.UserSerializer(),

      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      stage: Joi.string().allow(""),
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
      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      succeed: Joi.number(),

      total: Joi.number(),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      modified_by: Joi.any(),

      is_active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      file_path: Joi.string().allow(""),
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
      expiration_date: Joi.string().allow(""),

      price: Joi.number(),

      currency: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      total_quantity: Joi.number(),

      store_code: Joi.string().allow("").required(),

      price_effective: Joi.number(),

      quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      item_weight_unit_of_measure: Joi.string().allow(""),
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

  static InventoryExportJob() {
    return Joi.object({
      completed_on: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      trigger_on: Joi.string().allow(""),
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
      task_id: Joi.string().allow("").required(),

      seller_id: Joi.number().required(),

      request_params: Joi.any(),

      status: Joi.string().allow(""),

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
      data: Joi.array().items(CatalogModel.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static InventoryPayload() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),

      store_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      price_marked: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number().allow(null),

      price_effective: Joi.number(),

      trace_id: Joi.string().allow(""),
    });
  }

  static InventoryRequestSchemaV2() {
    return Joi.object({
      meta: Joi.any(),

      company_id: Joi.number().required(),

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
      item_total: Joi.number(),

      current: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      hs2_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      threshold2: Joi.number(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      tax1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      threshold1: Joi.number(),

      company_id: Joi.number(),

      tax2: Joi.number(),
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
      hs2_code: Joi.string().allow("").allow(null).required(),

      hsn_code: Joi.string().allow("").required(),

      threshold2: Joi.number(),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      tax1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      threshold1: Joi.number().required(),

      company_id: Joi.number().required(),

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

      cess: Joi.number(),

      rate: Joi.number().required(),

      threshold: Joi.number().required(),
    });
  }

  static HSNDataInsertV2() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      created_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

      modified_by: Joi.any(),

      type: Joi.string().allow("").required(),

      reporting_hsn: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),
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
      departments: Joi.array().items(Joi.string().allow("")),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

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
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      logo: CatalogModel.Media(),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),
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
      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(Joi.any()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      _custom_json: Joi.any(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      childs: Joi.array().items(CatalogModel.Child()),

      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),
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
      operators: Joi.any(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      promo_meta: Joi.any(),

      attributes: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      image_nature: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      item_type: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      product_online_date: Joi.string().allow(""),

      color: Joi.string().allow(""),

      rating_count: Joi.number(),

      rating: Joi.number(),

      short_description: Joi.string().allow(""),

      description: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow("").required(),

      uid: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      has_variant: Joi.boolean(),

      type: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryPage() {
    return Joi.object({
      item_total: Joi.number().required(),

      next_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

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

  static UserSerializer1() {
    return Joi.object({
      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

  static GetAddressSerializer() {
    return Joi.object({
      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),

      order: Joi.string().allow(""),
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

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),
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
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      verified_on: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      modified_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      reject_reason: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      name: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
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
      e_waybill: CatalogModel.InvoiceCredSerializer(),

      e_invoice: CatalogModel.InvoiceCredSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      warnings: Joi.any(),

      modified_by: CatalogModel.UserSerializer1(),

      store_type: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: Joi.array().items(CatalogModel.Document()),

      code: Joi.string().allow("").required(),

      address: CatalogModel.GetAddressSerializer().required(),

      manager: CatalogModel.LocationManagerSerializer(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      verified_by: CatalogModel.UserSerializer1(),

      integration_type: CatalogModel.LocationIntegrationType(),

      _custom_json: Joi.any(),

      display_name: Joi.string().allow("").required(),

      verified_on: Joi.string().allow(""),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      phone_number: Joi.string().allow("").required(),

      company: CatalogModel.GetCompanySerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      created_by: CatalogModel.UserSerializer1(),

      uid: Joi.number(),

      modified_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),
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

      logo: Joi.string().allow(""),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      app_id: Joi.string().allow("").required(),

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
}
module.exports = CatalogModel;
