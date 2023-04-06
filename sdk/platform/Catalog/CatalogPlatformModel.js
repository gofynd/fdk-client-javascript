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

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      result: CatalogModel.SearchKeywordResult().required(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      uid: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      result: Joi.any(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),
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
      page: CatalogModel.Page(),

      items: CatalogModel.GetSearchWordsData(),
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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      display: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      action: CatalogModel.AutocompleteAction(),

      _custom_json: Joi.any(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

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
      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),

      words: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number().required(),

      max_quantity: Joi.number().required(),

      allow_remove: Joi.boolean(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      created_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      created_by: Joi.any(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow("").allow(null),

      modified_by: Joi.any(),

      choice: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      identifier: Joi.any(),

      attributes: Joi.any(),

      price: Joi.any(),

      short_description: Joi.string().allow(""),

      uid: Joi.number(),

      quantity: Joi.number(),

      item_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      min_marked: Joi.number(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static GetProducts() {
    return Joi.object({
      min_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.LimitedProductData(),

      max_quantity: Joi.number(),

      allow_remove: Joi.boolean(),

      price: CatalogModel.Price(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      products: Joi.array().items(CatalogModel.GetProducts()),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      choice: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      guide: CatalogModel.Guide(),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      id: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      modified_by: Joi.any(),

      image: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      brand_id: Joi.number(),

      name: Joi.string().allow("").required(),

      active: Joi.boolean(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      guide: Joi.any(),

      created_by: Joi.any(),

      tag: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      modified_by: Joi.any(),

      active: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_id: Joi.number(),
    });
  }

  static ApplicationItemMOQ() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static MetaFields() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      is_cod: Joi.boolean(),

      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_json: Joi.any(),

      seo: CatalogModel.ApplicationItemSEO(),

      is_gift: Joi.boolean(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      alt_text: Joi.any(),
    });
  }

  static SuccessResponse1() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static MOQData() {
    return Joi.object({
      minimum: Joi.number(),

      maximum: Joi.number(),

      increment_unit: Joi.number(),
    });
  }

  static SEOData() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static OwnerAppItemResponse() {
    return Joi.object({
      is_cod: Joi.boolean(),

      moq: CatalogModel.MOQData(),

      seo: CatalogModel.SEOData(),

      is_gift: Joi.boolean(),

      alt_text: Joi.any(),
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
      key: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
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

      default_key: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      priority: Joi.number().required(),

      name: Joi.string().allow(""),
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

      filter_types: Joi.array().items(Joi.string().allow("")),

      units: Joi.array().items(Joi.any()),
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
      similar: Joi.any(),

      detail: Joi.any(),

      variant: Joi.any(),

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
      display: Joi.string().allow(""),

      end: Joi.number(),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      map_values: Joi.array().items(Joi.any()),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),

      map: Joi.any(),

      condition: Joi.string().allow(""),

      value: Joi.string().allow(""),

      sort: Joi.string().allow(""),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      type: Joi.string().allow("").required(),

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

  static ConfigurationListingSortConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

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
      min: Joi.number().required(),

      max: Joi.number().required(),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      size: CatalogModel.ProductSize(),

      key: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

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
      size: CatalogModel.ProductSize().required(),

      key: Joi.string().allow("").required(),

      display_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

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
      created_by: Joi.any(),

      id: Joi.string().allow(""),

      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

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
      created_by: Joi.any(),

      listing: CatalogModel.ConfigurationListing(),

      created_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      modified_on: Joi.string().allow(""),

      config_type: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      app_id: Joi.string().allow("").required(),

      config_id: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.string().allow(""),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      operators: Joi.array().items(Joi.string().allow("")),

      kind: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

      is_selected: Joi.boolean().required(),

      count: Joi.number(),

      selected_min: Joi.number(),

      display: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      value: Joi.any().required(),

      display_format: Joi.string().allow(""),

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
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

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

  static BannerImage() {
    return Joi.object({
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

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

  static Media1() {
    return Joi.object({
      meta: Joi.any(),

      type: Joi.string().allow(""),

      url: Joi.string().allow("").required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.string().allow(""),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      _schedule: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),

      filters: CatalogModel.CollectionListingFilter(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string().allow(""),

      color: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
    });
  }

  static CreateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      created_by: CatalogModel.UserInfo(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      modified_by: CatalogModel.UserInfo(),

      app_id: Joi.string().allow("").required(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      name: Joi.string().allow("").required(),

      banners: CatalogModel.CollectionBanner().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage().required(),

      _locale_language: Joi.any(),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      logo: CatalogModel.BannerImage(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      _schedule: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      badge: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      cron: Joi.any(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      meta: Joi.any(),

      app_id: Joi.string().allow(""),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      banners: CatalogModel.ImageUrls(),

      uid: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      allow_facets: Joi.boolean(),

      description: Joi.string().allow(""),

      _schedule: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      badge: CatalogModel.CollectionBadge(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      allow_sort: Joi.boolean(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      meta: Joi.any(),

      modified_by: CatalogModel.UserInfo(),

      priority: Joi.number(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      banners: CatalogModel.CollectionBanner(),

      tags: Joi.array().items(Joi.string().allow("")),

      logo: CatalogModel.CollectionImage(),

      _locale_language: Joi.any(),

      allow_facets: Joi.boolean(),

      is_visible: Joi.boolean(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      published: Joi.boolean(),

      _schedule: CatalogModel.CollectionSchedule(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

      currency_symbol: Joi.string().allow(""),

      min: Joi.number(),

      max: Joi.number(),
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
      highlights: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      discount: Joi.string().allow(""),

      similars: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      image_nature: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      product_online_date: Joi.string().allow(""),

      color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      price: CatalogModel.ProductListingPrice(),

      rating_count: Joi.number(),

      sellable: Joi.boolean(),

      medias: Joi.array().items(CatalogModel.Media1()),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

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
      available_sizes: Joi.number(),

      total_sizes: Joi.number(),

      article_freshness: Joi.number(),

      available_articles: Joi.number(),

      total_articles: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      out_of_stock_count: Joi.number(),

      sellable_count: Joi.number(),

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
      brand_distribution: CatalogModel.CatalogInsightBrand(),

      data: CatalogModel.CrossSellingData(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().allow("").required(),

      company_id: Joi.number(),

      store_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),

      platform: Joi.string().allow(""),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      created_by: Joi.any(),

      created_on: Joi.number().required(),

      modified_on: Joi.number().required(),

      company_id: Joi.number().required(),

      modified_by: Joi.any(),

      store_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),

      platform: Joi.string().allow("").required(),
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

      business_type: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      brand_id: Joi.number(),

      total_article: Joi.number(),

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
      company: Joi.string().allow(""),

      brand: Joi.number(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      timing: Joi.any(),

      store_code: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      company_id: Joi.number(),

      uid: Joi.number(),

      manager: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      documents: Joi.array().items(Joi.any()),

      store_type: Joi.string().allow(""),

      address: Joi.any(),

      name: Joi.string().allow(""),
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
      depends_on: Joi.array().items(Joi.string().allow("")),

      indexing: Joi.boolean().required(),

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
      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      range: CatalogModel.AttributeSchemaRange(),

      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),

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
      mandatory_details: CatalogModel.AttributeMasterMandatoryDetails().required(),

      enriched: Joi.boolean(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter(),

      schema: CatalogModel.AttributeMaster(),

      meta: CatalogModel.AttributeMasterMeta(),

      details: CatalogModel.AttributeMasterDetails(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      uid: Joi.number(),

      slug_key: Joi.string().allow(""),

      slug: Joi.string().allow(""),

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
      meta: Joi.any(),

      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static UserSerializer() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      synonyms: Joi.array().items(Joi.string().allow("")),

      page_no: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      item_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      page_size: Joi.number(),

      logo: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      slug: Joi.string().allow(""),

      search: Joi.string().allow(""),

      priority_order: Joi.number(),

      name: Joi.string().allow(""),
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

      message: Joi.string().allow(""),

      errors: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      _cls: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      priority_order: Joi.number().required(),

      name: Joi.string().allow("").required(),
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
      verified_on: Joi.string().allow(""),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      verified_by: CatalogModel.UserDetail(),

      uid: Joi.number().required(),

      modified_by: CatalogModel.UserDetail(),

      is_active: Joi.boolean(),

      _id: Joi.any(),

      logo: Joi.string().allow("").required(),

      _cls: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      priority_order: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),

      attributes: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      is_archived: Joi.boolean(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),
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

      attributes: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      is_expirable: Joi.boolean().required(),
    });
  }

  static Properties() {
    return Joi.object({
      highlights: Joi.any(),

      size_guide: Joi.any(),

      is_active: Joi.any(),

      country_of_origin: Joi.any(),

      teaser_tag: Joi.any(),

      short_description: Joi.any(),

      command: Joi.any(),

      name: Joi.any(),

      tags: Joi.any(),

      multi_size: Joi.any(),

      brand_uid: Joi.any(),

      product_group_tag: Joi.any(),

      no_of_boxes: Joi.any(),

      item_type: Joi.any(),

      category_slug: Joi.any(),

      item_code: Joi.any(),

      sizes: Joi.any(),

      trader_type: Joi.any(),

      variants: Joi.any(),

      trader: Joi.any(),

      hsn_code: Joi.any(),

      currency: Joi.any(),

      media: Joi.any(),

      is_dependent: Joi.any(),

      return_config: Joi.any(),

      custom_order: Joi.any(),

      description: Joi.any(),

      product_publish: Joi.any(),

      slug: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      required: Joi.array().items(Joi.string().allow("")),

      definitions: Joi.any(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      properties: CatalogModel.Properties(),

      type: Joi.string().allow(""),
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

  static UserInfo1() {
    return Joi.object({
      uid: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserInfo1(),

      url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      filters: Joi.any(),

      type: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      from_date: Joi.string().allow(""),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      brands: Joi.array().items(Joi.string().allow("")),
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
      multivalue: Joi.boolean(),

      data: Joi.array().items(Joi.any()),
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

      google: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l2: Joi.number().required(),

      l1: Joi.number().required(),

      department: Joi.number().required(),
    });
  }

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),

      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      uid: Joi.number(),

      is_active: Joi.boolean().required(),

      modified_by: Joi.any(),

      priority: Joi.number(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),
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

      marketplaces: CatalogModel.CategoryMapping(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      tryouts: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean().required(),

      priority: Joi.number(),

      level: Joi.number().required(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      media: CatalogModel.Media2(),
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

  static Trader() {
    return Joi.object({
      type: Joi.string().allow(""),

      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),
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
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      size_guide: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      image_nature: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      is_expirable: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      moq: Joi.any(),

      stage: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      variant_group: Joi.any(),

      modified_by: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      category_uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      attributes: Joi.any(),

      tax_identifier: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      is_set: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      variant_media: Joi.any(),

      variants: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      is_dependent: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      custom_order: Joi.any(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      product_publish: CatalogModel.ProductPublish(),

      verified_by: CatalogModel.VerifiedBy(),

      pending: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      category: Joi.any(),

      template_tag: Joi.string().allow(""),
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
      reporting_hsn: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),

      time: Joi.number().required(),
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

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      departments: Joi.array().items(Joi.number()).required(),

      size_guide: Joi.string().allow(""),

      change_request_id: Joi.any(),

      bulk_job_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      country_of_origin: Joi.string().allow("").required(),

      is_image_less_product: Joi.boolean(),

      teaser_tag: CatalogModel.TeaserTag(),

      short_description: Joi.string().allow(""),

      variant_group: Joi.any(),

      name: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      attributes: Joi.any(),

      tax_identifier: CatalogModel.TaxIdentifier().required(),

      brand_uid: Joi.number().required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      no_of_boxes: Joi.number(),

      category_slug: Joi.string().allow("").required(),

      item_type: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      uid: Joi.number().allow(null),

      action: Joi.string().allow(""),

      item_code: Joi.string().allow("").required(),

      variant_media: Joi.any(),

      requester: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()).required(),

      variants: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      currency: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      is_dependent: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantity(),

      return_config: CatalogModel.ReturnConfig().required(),

      company_id: Joi.number().required(),

      description: Joi.string().allow(""),

      custom_order: CatalogModel.CustomOrder(),

      product_publish: CatalogModel.ProductPublish1(),

      slug: Joi.string().allow("").required(),

      template_tag: Joi.string().allow("").required(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      category_uid: Joi.number(),

      brand_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),
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
      departments: Joi.array().items(Joi.string().allow("")).required(),

      created_by: Joi.any(),

      filters: CatalogModel.AttributeMasterFilter().required(),

      schema: CatalogModel.AttributeMaster().required(),

      enabled_for_end_consumer: Joi.boolean(),

      modified_by: Joi.any(),

      name: Joi.string().allow(""),

      raw_key: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      suggestion: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      synonyms: Joi.any(),

      variant: Joi.boolean(),

      unit: Joi.string().allow(""),

      description: Joi.string().allow(""),

      details: CatalogModel.AttributeMasterDetails().required(),

      slug: Joi.string().allow("").required(),
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
      item_height: Joi.number().required(),

      size: Joi.string().allow("").required(),

      item_weight: Joi.number().required(),

      item_dimensions_unit_of_measure: Joi.string().allow("").required(),

      item_width: Joi.number().required(),

      item_weight_unit_of_measure: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      item_length: Joi.number().required(),
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
      highlights: Joi.array().items(Joi.string().allow("")),

      departments: Joi.array().items(Joi.number()),

      size_guide: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      created_by: Joi.any(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),

      all_company_ids: Joi.array().items(Joi.number()),

      image_nature: Joi.string().allow(""),

      country_of_origin: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      is_expirable: Joi.boolean(),

      is_image_less_product: Joi.boolean(),

      primary_color: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      moq: Joi.any(),

      stage: Joi.string().allow(""),

      is_physical: Joi.boolean(),

      variant_group: Joi.any(),

      modified_by: Joi.any(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      brand: CatalogModel.Brand(),

      category_uid: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      multi_size: Joi.boolean(),

      attributes: Joi.any(),

      tax_identifier: Joi.any(),

      all_sizes: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      is_set: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      uid: Joi.number(),

      item_code: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      variant_media: Joi.any(),

      variants: Joi.any(),

      trader: Joi.array().items(CatalogModel.Trader()),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      hsn_code: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      is_dependent: Joi.boolean(),

      net_quantity: CatalogModel.NetQuantityResponse(),

      id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfigResponse(),

      custom_order: Joi.any(),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      product_publish: CatalogModel.ProductPublished(),

      verified_by: CatalogModel.VerifiedBy(),

      pending: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      category: Joi.any(),

      template_tag: Joi.string().allow(""),
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
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      full_name: Joi.string().allow(""),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      stage: Joi.string().allow(""),

      failed: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      template: CatalogModel.ProductTemplate(),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserDetail1(),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      total: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      template_tag: Joi.string().allow(""),
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
      created_by: CatalogModel.UserInfo1(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed_records: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      file_path: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      succeed: Joi.number(),

      total: Joi.number(),

      cancelled: Joi.number(),

      template_tag: Joi.string().allow(""),
    });
  }

  static BulkResponse() {
    return Joi.object({
      created_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserInfo1(),

      batch_id: Joi.string().allow("").required(),
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

  static ProductTagsViewResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UserCommon() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      created_by: CatalogModel.UserCommon(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: CatalogModel.UserCommon(),

      file_path: Joi.string().allow(""),

      retry: Joi.number(),

      succeed: Joi.number(),

      cancelled: Joi.number(),

      total: Joi.number(),

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
      user: Joi.any().required(),

      url: Joi.string().allow("").required(),

      company_id: Joi.number(),
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
      success: Joi.boolean(),

      data: CatalogModel.ProductSizeDeleteDataResponse(),
    });
  }

  static InventoryResponse() {
    return Joi.object({
      inventory_updated_on: Joi.string().allow(""),

      size: Joi.string().allow(""),

      sellable_quantity: Joi.number(),

      store: Joi.any(),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      item_id: Joi.number(),

      price: Joi.number(),

      price_transfer: Joi.number(),

      identifiers: Joi.any(),

      currency: Joi.string().allow(""),
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

      gtin_value: Joi.string().allow("").required(),
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
      quantity: Joi.number(),

      size_distribution: CatalogModel.SizeDistribution().required(),

      name: Joi.string().allow(""),
    });
  }

  static InvSize() {
    return Joi.object({
      item_height: Joi.number().allow(null),

      expiration_date: Joi.string().allow(""),

      store_code: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      is_set: Joi.boolean(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      price_effective: Joi.number().required(),

      item_width: Joi.number().allow(null),

      quantity: Joi.number().required(),

      currency: Joi.string().allow("").required(),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      price: Joi.number(),

      price_transfer: Joi.number().allow(null),

      item_weight: Joi.number().allow(null),

      set: CatalogModel.InventorySet(),

      item_length: Joi.number().allow(null),
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

      company_id: Joi.number().required(),

      item: CatalogModel.ItemQuery().required(),
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

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),

      name: Joi.string().allow("").required(),
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

      sellable: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      order_committed: CatalogModel.QuantityBase(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      effective: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      tp_notes: Joi.any(),

      marked: Joi.number().required(),

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

  static DimensionResponse() {
    return Joi.object({
      width: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      length: Joi.number().required(),

      is_default: Joi.boolean().required(),

      height: Joi.number().required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      identifier: Joi.any().required(),

      created_by: CatalogModel.UserSerializer(),

      size: Joi.string().allow("").required(),

      weight: CatalogModel.WeightResponse().required(),

      _custom_json: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      fynd_item_code: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      country_of_origin: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      stage: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      fynd_article_code: Joi.string().allow("").required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),

      meta: Joi.any().allow(null),

      modified_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta().required(),

      track_inventory: Joi.boolean(),

      brand: CatalogModel.BrandMeta().required(),

      quantities: CatalogModel.Quantities(),

      tags: Joi.array().items(Joi.string().allow("")),

      tax_identifier: Joi.any(),

      fynd_meta: Joi.any(),

      raw_meta: Joi.any(),

      is_set: Joi.boolean(),

      store: CatalogModel.StoreMeta().required(),

      uid: Joi.string().allow("").required(),

      price: CatalogModel.PriceMeta().required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      dimension: CatalogModel.DimensionResponse().required(),

      return_config: CatalogModel.ReturnConfig1(),

      added_on_store: Joi.string().allow(""),

      fragile: Joi.boolean().required(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().required(),
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

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      added_on_store: Joi.string().allow(""),
    });
  }

  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),

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
      not_available: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      order_committed: CatalogModel.Quantity(),
    });
  }

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      store_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      effective: Joi.number(),

      tp_notes: Joi.any(),

      marked: Joi.number(),

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

  static DimensionResponse1() {
    return Joi.object({
      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),

      length: Joi.number(),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static GetInventories() {
    return Joi.object({
      identifier: Joi.any(),

      created_by: CatalogModel.UserSerializer(),

      size: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      seller_identifier: Joi.string().allow(""),

      item_id: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      expiration_date: Joi.string().allow(""),

      manufacturer: CatalogModel.ManufacturerResponse1(),

      modified_by: CatalogModel.UserSerializer(),

      company: CatalogModel.CompanyMeta1(),

      date_meta: CatalogModel.DateMeta(),

      track_inventory: Joi.boolean(),

      brand: CatalogModel.BrandMeta1(),

      quantities: CatalogModel.QuantitiesArticle(),

      tags: Joi.array().items(Joi.string().allow("")),

      tax_identifier: Joi.any(),

      platforms: Joi.any(),

      store: CatalogModel.ArticleStoreResponse(),

      is_set: Joi.boolean(),

      uid: Joi.string().allow(""),

      price: CatalogModel.PriceArticle(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      dimension: CatalogModel.DimensionResponse1(),

      id: Joi.string().allow(""),

      return_config: CatalogModel.ReturnConfig2(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number(),
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
      created_by: Joi.any(),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      modified_by: Joi.any(),

      file_path: Joi.string().allow(""),

      succeed: Joi.number(),

      total: Joi.number(),

      cancelled: Joi.number(),
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
      tags: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow("").required(),

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      trace_id: Joi.string().allow("").allow(null),

      item_weight_unit_of_measure: Joi.string().allow(""),

      price: Joi.number(),

      total_quantity: Joi.number(),

      currency: Joi.string().allow(""),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),

      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),

      operators: Joi.string().allow("").required(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow("").allow(null),

      from_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      completed_on: Joi.string().allow(""),

      url: Joi.string().allow(""),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      task_id: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),
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
      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      filters: Joi.any(),

      task_id: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      stores: Joi.array().items(Joi.string().allow("")),

      brands: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail(),

      id: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      url: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      filters: CatalogModel.InventoryJobFilters().required(),

      type: Joi.string().allow("").allow(null),

      task_id: Joi.string().allow("").required(),

      cancelled_by: CatalogModel.UserDetail(),

      completed_on: Joi.string().allow(""),

      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      cancelled_on: Joi.string().allow(""),
    });
  }

  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }

  static InventoryExportFilter() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      data: Joi.array().items(Joi.string().allow("")),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),
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

      expiration_date: Joi.string().allow(""),

      price_marked: Joi.number(),

      store_id: Joi.number().required(),

      price_effective: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),

      total_quantity: Joi.number().allow(null),
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
      message: Joi.string().allow("").required(),

      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      threshold2: Joi.number(),

      tax1: Joi.number().required(),

      company_id: Joi.number().required(),

      uid: Joi.number(),

      is_active: Joi.boolean(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_mrp: Joi.boolean().required(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      threshold1: Joi.number().required(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      threshold2: Joi.number(),

      tax1: Joi.number(),

      id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax_on_mrp: Joi.boolean(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      threshold1: Joi.number(),
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

  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),
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
      reporting_hsn: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow(""),

      created_by: Joi.any(),

      country_code: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      type: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),
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

      discount: Joi.string().allow(""),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

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
      uid: Joi.number(),

      logo: CatalogModel.Media(),

      slug: Joi.string().allow(""),

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
      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(Joi.any()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      childs: Joi.array().items(CatalogModel.Child()),

      slug: Joi.string().allow(""),

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
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      page: CatalogModel.Page().required(),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      operators: Joi.any(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      highlights: Joi.array().items(Joi.string().allow("")),

      has_variant: Joi.boolean(),

      similars: Joi.array().items(Joi.string().allow("")),

      rating: Joi.number(),

      image_nature: Joi.string().allow(""),

      teaser_tag: Joi.any(),

      product_online_date: Joi.string().allow(""),

      color: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      promo_meta: Joi.any(),

      name: Joi.string().allow(""),

      brand: CatalogModel.ProductBrand(),

      attributes: Joi.any(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      uid: Joi.number(),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      item_code: Joi.string().allow(""),

      rating_count: Joi.number(),

      medias: Joi.array().items(CatalogModel.Media1()),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
    });
  }

  static InventoryPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      next_id: Joi.string().allow(""),

      item_total: Joi.number().required(),

      has_next: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static InventoryStockResponse() {
    return Joi.object({
      page: CatalogModel.InventoryPage().required(),

      items: Joi.array().items(Joi.any()),
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
      group_id: Joi.string().allow(""),

      query: CatalogModel.ArticleQuery(),

      meta: Joi.any(),

      quantity: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      company_id: Joi.number(),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      app_id: Joi.string().allow("").required(),

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
      group_id: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number(),

      store_id: Joi.number(),

      company_id: Joi.number(),

      price_effective: Joi.number(),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      quantity: Joi.number().required(),

      _id: Joi.string().allow(""),

      index: Joi.number(),

      store_pincode: Joi.number(),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      item_id: Joi.number().required(),

      status: Joi.boolean().required(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      s_city: Joi.string().allow(""),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      weekday: Joi.string().allow("").required(),

      open: Joi.boolean().required(),

      opening: CatalogModel.LocationTimingSerializer(),

      closing: CatalogModel.LocationTimingSerializer(),
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
      user_id: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      state: Joi.string().allow(""),

      pincode: Joi.number(),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      created_by: CatalogModel.UserSerializer2(),

      stage: Joi.string().allow(""),

      company_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      verified_by: CatalogModel.UserSerializer2(),

      uid: Joi.number(),

      modified_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      reject_reason: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserSerializer1(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      _custom_json: Joi.any(),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      store_type: Joi.string().allow(""),

      code: Joi.string().allow("").required(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      integration_type: CatalogModel.LocationIntegrationType(),

      stage: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      warnings: Joi.any(),

      modified_by: CatalogModel.UserSerializer1(),

      company: CatalogModel.GetCompanySerializer(),

      documents: Joi.array().items(CatalogModel.Document()),

      address: CatalogModel.GetAddressSerializer().required(),

      name: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      manager: CatalogModel.LocationManagerSerializer(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      verified_by: CatalogModel.UserSerializer1(),

      phone_number: Joi.string().allow("").required(),
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

      uid: Joi.number().required(),

      is_active: Joi.boolean(),

      logo: Joi.string().allow(""),

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
