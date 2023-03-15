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

      words: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      result: Joi.any(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
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
      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      code: Joi.string().allow(""),
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

      words: Joi.array().items(Joi.string().allow("")),

      result: CatalogModel.SearchKeywordResult().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
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

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),
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

      params: Joi.any(),

      type: Joi.string().allow(""),

      query: Joi.any(),
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
      _custom_json: Joi.any(),

      action: CatalogModel.AutocompleteAction(),

      logo: CatalogModel.Media(),

      display: Joi.string().allow(""),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      words: Joi.array().items(Joi.string().allow("")),

      results: Joi.array().items(CatalogModel.AutocompleteResult()),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),

      words: Joi.array().items(Joi.string().allow("")),

      app_id: Joi.string().allow(""),

      results: Joi.array().items(Joi.any()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number().required(),

      max_quantity: Joi.number().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      meta: Joi.any(),

      created_by: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      meta: Joi.any(),

      created_by: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
    });
  }

  static Size() {
    return Joi.object({
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      is_available: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      identifier: Joi.any(),

      attributes: Joi.any(),

      sizes: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

      country_of_origin: Joi.string().allow(""),

      price: Joi.any(),

      quantity: Joi.number(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      short_description: Joi.string().allow(""),
    });
  }

  static Price() {
    return Joi.object({
      max_effective: Joi.number(),

      currency: Joi.string().allow(""),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      sizes: Joi.array().items(CatalogModel.Size()),

      product_details: CatalogModel.LimitedProductData(),

      min_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      auto_add_to_cart: Joi.boolean(),

      product_uid: Joi.number(),

      price: CatalogModel.Price(),

      max_quantity: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string().allow("")),

      choice: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      company_id: Joi.number(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      slug: Joi.string().allow(""),

      products: Joi.array().items(CatalogModel.GetProducts()),

      is_active: Joi.boolean(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      choice: Joi.string().allow("").required(),

      page_visibility: Joi.array().items(Joi.string().allow("")),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").allow(null),

      company_id: Joi.number(),

      meta: Joi.any(),

      same_store_assignment: Joi.boolean(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),

      is_active: Joi.boolean().required(),
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

      id: Joi.string().allow(""),

      title: Joi.string().allow("").required(),

      active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      subtitle: Joi.string().allow(""),

      company_id: Joi.number(),

      modified_on: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      image: Joi.string().allow(""),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      brand_id: Joi.number(),
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

      id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      active: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      subtitle: Joi.string().allow(""),

      tag: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      brand_id: Joi.number(),
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
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static ApplicationItemSEO() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static ApplicationItemMeta() {
    return Joi.object({
      moq: CatalogModel.ApplicationItemMOQ(),

      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),

      is_cod: Joi.boolean(),

      alt_text: Joi.any(),

      is_gift: Joi.boolean(),

      seo: CatalogModel.ApplicationItemSEO(),

      _custom_json: Joi.any(),
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
      maximum: Joi.number(),

      minimum: Joi.number(),

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

      priority: Joi.number().required(),

      key: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      slug: Joi.string().allow(""),

      unit: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
    });
  }

  static AppConfigurationDetail() {
    return Joi.object({
      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      priority: Joi.number().required(),

      template_slugs: Joi.array().items(Joi.string().allow("")),

      is_default: Joi.boolean().required(),

      slug: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
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

      logo: Joi.string().allow(""),

      key: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      default_key: Joi.string().allow("").required(),

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

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      compare: Joi.any(),

      similar: Joi.any(),

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
      filter_types: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

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

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      listing: CatalogModel.MetaDataListingResponse(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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
      end: Joi.number(),

      display: Joi.string().allow(""),

      start: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      sort: Joi.string().allow(""),

      map_values: Joi.array().items(Joi.any()),

      condition: Joi.string().allow(""),

      map: Joi.any(),

      value: Joi.string().allow(""),

      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      value_config: CatalogModel.ConfigurationListingFilterValue(),

      display_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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

      size: CatalogModel.ProductSize(),

      is_active: Joi.boolean().required(),
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

      priority: Joi.number().required(),

      key: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      size: CatalogModel.ProductSize().required(),

      is_active: Joi.boolean().required(),
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
      config_type: Joi.string().allow("").required(),

      listing: CatalogModel.ConfigurationListing(),

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      id: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      product: CatalogModel.ConfigurationProduct(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),
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

      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),

      config_id: Joi.string().allow(""),

      app_id: Joi.string().allow("").required(),

      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),

      id: Joi.string().allow(""),
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

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string().allow(""),

      operators: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      display: Joi.string().allow("").required(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      value: Joi.any().required(),

      currency_code: Joi.string().allow(""),

      query_format: Joi.string().allow(""),

      is_selected: Joi.boolean().required(),

      selected_max: Joi.number(),

      display_format: Joi.string().allow(""),

      display: Joi.string().allow("").required(),

      min: Joi.number(),

      selected_min: Joi.number(),

      max: Joi.number(),

      count: Joi.number(),
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

  static Media1() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      type: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      action: CatalogModel.Action(),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      cron: Joi.any(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      is_selected: Joi.boolean(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      color: Joi.string().allow(""),

      text: Joi.string().allow(""),
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

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),

      duration: Joi.number().allow(null),
    });
  }

  static CreateCollection() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      banners: CatalogModel.CollectionBanner().required(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      type: Joi.string().allow("").required(),

      modified_by: CatalogModel.UserInfo(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      created_by: CatalogModel.UserInfo(),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      _locale_language: Joi.any(),

      is_visible: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo: CatalogModel.CollectionImage().required(),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.BannerImage(),

      cron: Joi.any(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      banners: CatalogModel.ImageUrls(),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      slug: Joi.string().allow(""),

      badge: Joi.any(),

      app_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      cron: Joi.any(),

      _schedule: Joi.any(),

      tag: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static UpdateCollection() {
    return Joi.object({
      allow_facets: Joi.boolean(),

      banners: CatalogModel.CollectionBanner(),

      description: Joi.string().allow(""),

      seo: CatalogModel.SeoDetail(),

      type: Joi.string().allow(""),

      modified_by: CatalogModel.UserInfo(),

      allow_sort: Joi.boolean(),

      is_active: Joi.boolean(),

      visible_facets_keys: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),

      query: Joi.array().items(CatalogModel.CollectionQuery()),

      sort_on: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      _locale_language: Joi.any(),

      _custom_json: Joi.any(),

      is_visible: Joi.boolean(),

      badge: CatalogModel.CollectionBadge(),

      name: Joi.string().allow(""),

      logo: CatalogModel.CollectionImage(),

      _schedule: CatalogModel.CollectionSchedule(),

      meta: Joi.any(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductBrand() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media1(),

      action: CatalogModel.Action(),
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
      title: Joi.string().allow(""),

      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
    });
  }

  static Price1() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      max: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      promo_meta: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      sellable: Joi.boolean(),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      slug: Joi.string().allow("").required(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      rating: Joi.number(),

      price: CatalogModel.ProductListingPrice(),

      teaser_tag: Joi.any(),

      discount: Joi.string().allow(""),
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
      item_id: Joi.number(),

      action: Joi.string().allow(""),
    });
  }

  static CollectionItemRequest() {
    return Joi.object({
      item: Joi.array().items(CatalogModel.ItemQueryForUserCollection()),

      type: Joi.string().allow(""),

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
      sellable_count: Joi.number(),

      out_of_stock_count: Joi.number(),

      count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string().allow(""),

      article_freshness: Joi.number(),

      total_articles: Joi.number(),

      available_sizes: Joi.number(),
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

      platform: Joi.string().allow(""),

      company_id: Joi.number(),

      brand_ids: Joi.array().items(Joi.number()),

      enabled: Joi.boolean(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()).required(),

      opt_level: Joi.string().allow("").required(),

      platform: Joi.string().allow("").required(),

      modified_on: Joi.number().required(),

      company_id: Joi.number().required(),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      created_on: Joi.number().required(),

      brand_ids: Joi.array().items(Joi.number()).required(),

      enabled: Joi.boolean().required(),
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

      company_type: Joi.string().allow(""),

      business_type: Joi.string().allow(""),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      company_id: Joi.number(),

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
      documents: Joi.array().items(Joi.any()),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.any(),

      company_id: Joi.number(),

      manager: Joi.any(),

      additional_contacts: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),

      timing: Joi.any(),

      display_name: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.StoreDetail()),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
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
      multi: Joi.boolean(),

      type: Joi.string().allow("").required(),

      mandatory: Joi.boolean(),

      format: Joi.string().allow(""),

      allowed_values: Joi.array().items(Joi.string().allow("")),

      range: CatalogModel.AttributeSchemaRange(),
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
      indexing: Joi.boolean().required(),

      depends_on: Joi.array().items(Joi.string().allow("")),

      priority: Joi.number(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      details: CatalogModel.AttributeMasterDetails(),

      schema: CatalogModel.AttributeMaster(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      meta: CatalogModel.AttributeMasterMeta(),

      description: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      filters: CatalogModel.AttributeMasterFilter(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.string().allow("")),

      is_nested: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static CategoriesResponse() {
    return Joi.object({
      slug_key: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      template_slug: Joi.string().allow(""),
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
      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      contact: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static GetDepartment() {
    return Joi.object({
      item_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      modified_by: CatalogModel.UserSerializer(),

      uid: Joi.number(),

      priority_order: Joi.number(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      page_size: Joi.number(),

      created_by: CatalogModel.UserSerializer(),

      page_no: Joi.number(),

      slug: Joi.string().allow(""),

      search: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static DepartmentCreateUpdate() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.any(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      _cls: Joi.string().allow(""),

      is_active: Joi.boolean(),
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

      username: Joi.string().allow("").required(),

      contact: Joi.string().allow(""),

      super_user: Joi.boolean(),
    });
  }

  static DepartmentModel() {
    return Joi.object({
      verified_by: CatalogModel.UserDetail(),

      _custom_json: Joi.any(),

      modified_on: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      uid: Joi.number(),

      created_by: CatalogModel.UserDetail(),

      _id: Joi.any(),

      priority_order: Joi.number().required(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserDetail(),

      slug: Joi.string().allow(""),

      verified_on: Joi.string().allow(""),

      _cls: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_by: Joi.any(),

      modified_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      is_archived: Joi.boolean(),

      attributes: Joi.array().items(Joi.string().allow("")),

      is_expirable: Joi.boolean().required(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      is_physical: Joi.boolean().required(),

      categories: Joi.array().items(Joi.string().allow("")),

      tag: Joi.string().allow(""),

      description: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      departments: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),
    });
  }

  static Properties() {
    return Joi.object({
      custom_order: Joi.any(),

      multi_size: Joi.any(),

      no_of_boxes: Joi.any(),

      description: Joi.any(),

      variants: Joi.any(),

      highlights: Joi.any(),

      size_guide: Joi.any(),

      brand_uid: Joi.any(),

      hsn_code: Joi.any(),

      product_publish: Joi.any(),

      item_code: Joi.any(),

      command: Joi.any(),

      media: Joi.any(),

      short_description: Joi.any(),

      is_active: Joi.any(),

      trader_type: Joi.any(),

      trader: Joi.any(),

      return_config: Joi.any(),

      sizes: Joi.any(),

      product_group_tag: Joi.any(),

      country_of_origin: Joi.any(),

      category_slug: Joi.any(),

      slug: Joi.any(),

      item_type: Joi.any(),

      currency: Joi.any(),

      name: Joi.any(),

      teaser_tag: Joi.any(),

      tags: Joi.any(),

      is_dependent: Joi.any(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      required: Joi.array().items(Joi.string().allow("")),

      properties: CatalogModel.Properties(),

      description: Joi.string().allow(""),

      definitions: Joi.any(),
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
      user_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      email: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static ProductTemplateExportResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserInfo1(),

      task_id: Joi.string().allow("").required(),

      filters: Joi.any(),

      url: Joi.string().allow(""),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }

  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),

      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),

      templates: Joi.array().items(Joi.string().allow("")).required(),

      to_date: Joi.string().allow(""),
    });
  }

  static ProductTemplateDownloadsExport() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.ProductTemplateExportFilterRequest(),
    });
  }

  static ProductPartialExportRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      google: CatalogModel.CategoryMappingValues(),

      facebook: CatalogModel.CategoryMappingValues(),

      ajio: CatalogModel.CategoryMappingValues(),
    });
  }

  static Media2() {
    return Joi.object({
      portrait: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      landscape: Joi.string().allow("").required(),
    });
  }

  static Category() {
    return Joi.object({
      id: Joi.string().allow(""),

      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      created_by: Joi.any(),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      modified_by: Joi.any(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean().required(),
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
      level: Joi.number().required(),

      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),

      marketplaces: CatalogModel.CategoryMapping(),

      name: Joi.string().allow("").required(),

      priority: Joi.number(),

      tryouts: Joi.array().items(Joi.string().allow("")),

      synonyms: Joi.array().items(Joi.string().allow("")),

      media: CatalogModel.Media2(),

      slug: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()).required(),

      is_active: Joi.boolean().required(),
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

  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),
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

      name: Joi.string().allow(""),

      logo: CatalogModel.Logo(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow(""),
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
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Image() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      aspect_ratio_f: Joi.number(),
    });
  }

  static ProductSchemaV2() {
    return Joi.object({
      tax_identifier: Joi.any(),

      moq: Joi.any(),

      attributes: Joi.any(),

      is_set: Joi.boolean(),

      custom_order: Joi.any(),

      multi_size: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      is_physical: Joi.boolean(),

      no_of_boxes: Joi.number(),

      category_uid: Joi.number(),

      brand: CatalogModel.Brand(),

      description: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      variants: Joi.any(),

      stage: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      variant_group: Joi.any(),

      size_guide: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      product_publish: CatalogModel.ProductPublish(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      category: Joi.any(),

      modified_by: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      pending: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      color: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      variant_media: Joi.any(),

      template_tag: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      net_quantity: CatalogModel.NetQuantityResponse(),

      return_config: CatalogModel.ReturnConfigResponse(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      item_type: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      teaser_tag: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),
    });
  }

  static ProductListingResponseV2() {
    return Joi.object({
      page: CatalogModel.Page(),

      items: Joi.array().items(CatalogModel.ProductSchemaV2()),
    });
  }

  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      hsn_code_id: Joi.string().allow(""),

      reporting_hsn: Joi.string().allow(""),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      manufacturing_time_unit: Joi.string().allow(""),

      is_custom_order: Joi.boolean(),
    });
  }

  static ProductPublish1() {
    return Joi.object({
      product_online_date: Joi.string().allow(""),

      is_set: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      returnable: Joi.boolean().required(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string().allow("").allow(null),

      tag: Joi.string().allow("").allow(null),
    });
  }

  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      tax_identifier: CatalogModel.TaxIdentifier().required(),

      attributes: Joi.any(),

      is_set: Joi.boolean(),

      custom_order: CatalogModel.CustomOrder(),

      multi_size: Joi.boolean(),

      requester: Joi.string().allow(""),

      no_of_boxes: Joi.number(),

      description: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      action: Joi.string().allow(""),

      variants: Joi.any(),

      departments: Joi.array().items(Joi.number()).required(),

      highlights: Joi.array().items(Joi.string().allow("").allow(null)),

      variant_group: Joi.any(),

      size_guide: Joi.string().allow(""),

      brand_uid: Joi.number().required(),

      company_id: Joi.number().required(),

      product_publish: CatalogModel.ProductPublish1(),

      item_code: Joi.string().allow("").required(),

      media: Joi.array().items(CatalogModel.Media1()),

      short_description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      trader: Joi.array().items(CatalogModel.Trader()).required(),

      change_request_id: Joi.any(),

      variant_media: Joi.any(),

      template_tag: Joi.string().allow("").required(),

      return_config: CatalogModel.ReturnConfig().required(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      net_quantity: CatalogModel.NetQuantity(),

      sizes: Joi.array().items(Joi.any()).required(),

      category_slug: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      bulk_job_id: Joi.string().allow(""),

      slug: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      item_type: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      uid: Joi.number().allow(null),

      teaser_tag: CatalogModel.TeaserTag(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),
    });
  }

  static ProductVariants() {
    return Joi.object({
      brand_uid: Joi.number(),

      name: Joi.string().allow(""),

      category_uid: Joi.number(),

      item_code: Joi.string().allow(""),

      uid: Joi.number(),

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
      description: Joi.string().allow(""),

      enabled_for_end_consumer: Joi.boolean(),

      synonyms: Joi.any(),

      variant: Joi.boolean(),

      departments: Joi.array().items(Joi.string().allow("")).required(),

      modified_by: Joi.any(),

      details: CatalogModel.AttributeMasterDetails().required(),

      unit: Joi.string().allow(""),

      schema: CatalogModel.AttributeMaster().required(),

      raw_key: Joi.string().allow(""),

      suggestion: Joi.string().allow(""),

      created_by: Joi.any(),

      slug: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      is_nested: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      filters: CatalogModel.AttributeMasterFilter().required(),

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
      data: CatalogModel.ProductSchemaV2(),
    });
  }

  static ValidateIdentifier() {
    return Joi.object({
      primary: Joi.boolean(),

      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),
    });
  }

  static AllSizes() {
    return Joi.object({
      item_weight_unit_of_measure: Joi.string().allow("").required(),

      item_width: Joi.number().required(),

      item_length: Joi.number().required(),

      item_height: Joi.number().required(),

      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),

      size: Joi.string().allow("").required(),

      item_weight: Joi.number().required(),

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

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      tax_identifier: Joi.any(),

      moq: Joi.any(),

      attributes: Joi.any(),

      is_set: Joi.boolean(),

      custom_order: Joi.any(),

      multi_size: Joi.boolean(),

      verified_by: CatalogModel.VerifiedBy(),

      is_physical: Joi.boolean(),

      no_of_boxes: Joi.number(),

      category_uid: Joi.number(),

      brand: CatalogModel.Brand(),

      description: Joi.string().allow(""),

      is_image_less_product: Joi.boolean(),

      all_identifiers: Joi.array().items(Joi.string().allow("")),

      verified_on: Joi.string().allow(""),

      departments: Joi.array().items(Joi.number()),

      variants: Joi.any(),

      stage: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_expirable: Joi.boolean(),

      highlights: Joi.array().items(Joi.string().allow("")),

      variant_group: Joi.any(),

      size_guide: Joi.string().allow(""),

      all_sizes: Joi.array().items(Joi.any()),

      brand_uid: Joi.number(),

      hsn_code: Joi.string().allow(""),

      company_id: Joi.number(),

      product_publish: CatalogModel.ProductPublished(),

      item_code: Joi.string().allow(""),

      media: Joi.array().items(CatalogModel.Media1()),

      category: Joi.any(),

      modified_by: Joi.any(),

      all_company_ids: Joi.array().items(Joi.number()),

      pending: Joi.string().allow(""),

      short_description: Joi.string().allow(""),

      is_active: Joi.boolean(),

      color: Joi.string().allow(""),

      trader: Joi.array().items(CatalogModel.Trader()),

      variant_media: Joi.any(),

      template_tag: Joi.string().allow(""),

      sizes: Joi.array().items(Joi.any()),

      net_quantity: CatalogModel.NetQuantityResponse(),

      return_config: CatalogModel.ReturnConfigResponse(),

      product_group_tag: Joi.array().items(Joi.string().allow("")),

      l3_mapping: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.any(),

      country_of_origin: Joi.string().allow(""),

      category_slug: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      images: Joi.array().items(CatalogModel.Image()),

      item_type: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.number(),

      teaser_tag: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_dependent: Joi.boolean(),
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
      total: Joi.number(),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      failed: Joi.number(),

      created_by: CatalogModel.UserDetail1(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserDetail1(),

      template: CatalogModel.ProductTemplate(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      total: Joi.number(),

      tracking_url: Joi.string().allow(""),

      custom_template_tag: Joi.string().allow(""),

      template_tag: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled: Joi.number(),

      company_id: Joi.number().required(),

      cancelled_records: Joi.array().items(Joi.any()),

      failed_records: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      created_by: CatalogModel.UserInfo1(),

      succeed: Joi.number(),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      created_by: CatalogModel.UserInfo1(),

      modified_by: CatalogModel.UserInfo1(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
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
      total: Joi.number(),

      id: Joi.string().allow(""),

      tracking_url: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.number(),

      cancelled: Joi.number(),

      failed: Joi.number(),

      created_by: CatalogModel.UserCommon(),

      succeed: Joi.number(),

      retry: Joi.number(),

      modified_by: CatalogModel.UserCommon(),

      created_on: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      is_active: Joi.boolean(),
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
      item_id: Joi.number(),

      company_id: Joi.number(),

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
      store: Joi.any(),

      price_transfer: Joi.number(),

      currency: Joi.string().allow(""),

      item_id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      identifiers: Joi.any(),

      sellable_quantity: Joi.number(),

      inventory_updated_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price_effective: Joi.number(),

      size: Joi.string().allow(""),

      price: Joi.number(),

      quantity: Joi.number(),
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

      gtin_type: Joi.string().allow("").required(),

      gtin_value: Joi.string().allow("").required(),
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

      name: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static InvSize() {
    return Joi.object({
      price_transfer: Joi.number().allow(null),

      item_weight_unit_of_measure: Joi.string().allow("").allow(null),

      is_set: Joi.boolean(),

      item_width: Joi.number().allow(null),

      item_length: Joi.number().allow(null),

      item_height: Joi.number().allow(null),

      currency: Joi.string().allow("").required(),

      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),

      expiration_date: Joi.string().allow(""),

      set: CatalogModel.InventorySet(),

      price_effective: Joi.number().required(),

      store_code: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),

      item_weight: Joi.number().allow(null),

      quantity: Joi.number().required(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      item_code: Joi.string().allow(""),

      uid: Joi.number(),

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

  static BrandMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

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
      order_committed: CatalogModel.QuantityBase(),

      not_available: CatalogModel.QuantityBase(),

      damaged: CatalogModel.QuantityBase(),

      sellable: CatalogModel.QuantityBase(),
    });
  }

  static DimensionResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      length: Joi.number().required(),

      height: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      width: Joi.number().required(),
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

  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig1() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static WeightResponse() {
    return Joi.object({
      shipping: Joi.number().required(),

      unit: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),

      marked: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      effective: Joi.number().required(),

      tp_notes: Joi.any(),

      transfer: Joi.number().required(),
    });
  }

  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),
    });
  }

  static InventorySellerResponse() {
    return Joi.object({
      tax_identifier: Joi.any(),

      identifier: Joi.any().required(),

      is_set: Joi.boolean(),

      raw_meta: Joi.any(),

      trace_id: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta().required(),

      expiration_date: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      quantities: CatalogModel.Quantities(),

      track_inventory: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse().required(),

      item_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      fragile: Joi.boolean().required(),

      modified_by: CatalogModel.UserSerializer(),

      is_active: Joi.boolean(),

      store: CatalogModel.StoreMeta().required(),

      company: CatalogModel.CompanyMeta().required(),

      fynd_article_code: Joi.string().allow("").required(),

      trader: Joi.array().items(CatalogModel.Trader1()),

      return_config: CatalogModel.ReturnConfig1(),

      fynd_item_code: Joi.string().allow("").required(),

      created_by: CatalogModel.UserSerializer(),

      country_of_origin: Joi.string().allow("").required(),

      fynd_meta: Joi.any(),

      size: Joi.string().allow("").required(),

      added_on_store: Joi.string().allow(""),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number().required(),

      meta: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      set: CatalogModel.InventorySet(),

      weight: CatalogModel.WeightResponse().required(),

      price: CatalogModel.PriceMeta().required(),

      manufacturer: CatalogModel.ManufacturerResponse().required(),
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

  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static QuantitiesArticle() {
    return Joi.object({
      order_committed: CatalogModel.Quantity(),

      not_available: CatalogModel.Quantity(),

      damaged: CatalogModel.Quantity(),

      sellable: CatalogModel.Quantity(),
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

  static ArticleStoreResponse() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_type: Joi.string().allow(""),
    });
  }

  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ReturnConfig2() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      tp_notes: Joi.any(),

      transfer: Joi.number(),
    });
  }

  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static GetInventories() {
    return Joi.object({
      tax_identifier: Joi.any(),

      identifier: Joi.any(),

      is_set: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      brand: CatalogModel.BrandMeta1(),

      expiration_date: Joi.string().allow(""),

      quantities: CatalogModel.QuantitiesArticle(),

      stage: Joi.string().allow(""),

      id: Joi.string().allow(""),

      track_inventory: Joi.boolean(),

      dimension: CatalogModel.DimensionResponse1(),

      item_id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      inventory_updated_on: Joi.string().allow(""),

      platforms: Joi.any(),

      modified_by: CatalogModel.UserSerializer(),

      store: CatalogModel.ArticleStoreResponse(),

      company: CatalogModel.CompanyMeta1(),

      trader: Joi.array().items(CatalogModel.Trader2()),

      return_config: CatalogModel.ReturnConfig2(),

      created_by: CatalogModel.UserSerializer(),

      country_of_origin: Joi.string().allow(""),

      size: Joi.string().allow(""),

      date_meta: CatalogModel.DateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      total_quantity: Joi.number(),

      uid: Joi.string().allow(""),

      weight: CatalogModel.WeightResponse1(),

      price: CatalogModel.PriceArticle(),

      manufacturer: CatalogModel.ManufacturerResponse1(),
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
      total: Joi.number(),

      file_path: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      cancelled_records: Joi.array().items(Joi.string().allow("")),

      cancelled: Joi.number(),

      company_id: Joi.number(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      failed: Joi.number(),

      stage: Joi.string().allow(""),

      created_by: Joi.any(),

      succeed: Joi.number(),

      modified_by: Joi.any(),

      created_on: Joi.string().allow(""),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),
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
      item_weight_unit_of_measure: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      trace_id: Joi.string().allow("").allow(null),

      seller_identifier: Joi.string().allow("").required(),

      total_quantity: Joi.number(),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      store_code: Joi.string().allow("").required(),

      price: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.InventoryJobPayload()).required(),

      company_id: Joi.number().required(),

      batch_id: Joi.string().allow("").required(),

      user: Joi.any(),
    });
  }

  static InventoryExportQuantityFilter() {
    return Joi.object({
      max: Joi.number(),

      operators: Joi.string().allow("").required(),

      min: Joi.number(),
    });
  }

  static InventoryExportAdvanceOption() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow("").allow(null),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow("").allow(null),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      type: Joi.string().allow("").required(),

      completed_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      task_id: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryExportAdvanceOption(),

      url: Joi.string().allow(""),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      type: Joi.string().allow("").allow(null),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: Joi.string().allow(""),

      task_id: Joi.string().allow("").required(),

      filters: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static InventoryJobFilters() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      brands: Joi.array().items(Joi.string().allow("")),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      stores: Joi.array().items(Joi.string().allow("")),

      to_date: Joi.string().allow(""),
    });
  }

  static InventoryJobDetailResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      type: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      cancelled_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail(),

      task_id: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryJobFilters().required(),

      url: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      id: Joi.string().allow("").required(),
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

      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryCreateRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").allow(null),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      filters: CatalogModel.InventoryExportFilter().required(),
    });
  }

  static InventoryPartialExportRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static InventoryExportCreateFilters() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.number()),

      from_date: Joi.string().allow(""),

      quantity: CatalogModel.InventoryExportQuantityFilter(),

      to_date: Joi.string().allow(""),

      brand_ids: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportCreateResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      seller_id: Joi.number().required(),

      type: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow(""),

      completed_on: Joi.string().allow(""),

      cancelled_on: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      created_by: CatalogModel.UserDetail(),

      task_id: Joi.string().allow("").required(),

      filters: CatalogModel.InventoryExportCreateFilters().required(),

      url: Joi.string().allow("").required(),

      created_on: Joi.string().allow(""),

      cancelled_by: CatalogModel.UserDetail(),

      id: Joi.string().allow("").required(),
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
      trace_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      total_quantity: Joi.number().allow(null),

      price_marked: Joi.number(),

      expiration_date: Joi.string().allow(""),

      price_effective: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),
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
      threshold2: Joi.number(),

      threshold1: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      company_id: Joi.number(),

      tax1: Joi.number(),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow(""),

      tax_on_esp: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      threshold2: Joi.number(),

      threshold1: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      hsn_code: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      uid: Joi.number(),

      tax1: Joi.number().required(),

      tax2: Joi.number(),

      hs2_code: Joi.string().allow("").allow(null).required(),

      tax_on_esp: Joi.boolean(),

      is_active: Joi.boolean(),
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

      size: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.string().allow(""),

      item_total: Joi.number(),
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

      type: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow("").required(),

      created_by: Joi.any(),

      hsn_code_id: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      modified_by: Joi.any(),

      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),

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
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      logo: CatalogModel.Media(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: CatalogModel.Action(),

      departments: Joi.array().items(Joi.string().allow("")),

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
      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ThirdLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(Joi.any()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static SecondLevelChild() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static Child() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.SecondLevelChild()),

      uid: Joi.number(),

      action: CatalogModel.Action(),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CategoryItems() {
    return Joi.object({
      banners: CatalogModel.ImageUrls(),

      name: Joi.string().allow(""),

      childs: Joi.array().items(CatalogModel.Child()),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

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
      operators: Joi.any(),

      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),

      filters: Joi.array().items(CatalogModel.ProductFilters()),

      items: Joi.array().items(CatalogModel.ProductListingDetail()),

      page: CatalogModel.Page().required(),
    });
  }

  static ProductDetail() {
    return Joi.object({
      attributes: Joi.any(),

      has_variant: Joi.boolean(),

      promo_meta: Joi.any(),

      brand: CatalogModel.ProductBrand(),

      product_online_date: Joi.string().allow(""),

      description: Joi.string().allow(""),

      image_nature: Joi.string().allow(""),

      medias: Joi.array().items(CatalogModel.Media1()),

      type: Joi.string().allow(""),

      highlights: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow(""),

      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),

      short_description: Joi.string().allow(""),

      color: Joi.string().allow(""),

      tryouts: Joi.array().items(Joi.string().allow("")),

      rating_count: Joi.number(),

      slug: Joi.string().allow("").required(),

      similars: Joi.array().items(Joi.string().allow("")),

      item_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      rating: Joi.number(),

      teaser_tag: Joi.any(),
    });
  }

  static InventoryPage() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      item_total: Joi.number().required(),
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
      meta: Joi.any(),

      query: CatalogModel.ArticleQuery(),

      quantity: Joi.number(),

      group_id: Joi.string().allow(""),

      article_assignment: CatalogModel.ArticleAssignment(),
    });
  }

  static AssignStore() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      store_ids: Joi.array().items(Joi.number()),

      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),

      company_id: Joi.number(),

      channel_identifier: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

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
      status: Joi.boolean().required(),

      group_id: Joi.string().allow(""),

      item_id: Joi.number().required(),

      store_id: Joi.number(),

      company_id: Joi.number(),

      price_marked: Joi.number(),

      meta: Joi.any(),

      uid: Joi.string().allow(""),

      strategy_wise_listing: Joi.array().items(Joi.any()),

      _id: Joi.string().allow(""),

      price_effective: Joi.number(),

      size: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      store_pincode: Joi.number(),

      article_assignment: CatalogModel.ArticleAssignment1().required(),

      s_city: Joi.string().allow(""),

      index: Joi.number(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().allow("").required(),

      country_code: Joi.number().required(),
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

  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),
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

      username: Joi.string().allow(""),

      contact: Joi.string().allow(""),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      verified_by: CatalogModel.UserSerializer2(),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow(""),

      business_type: Joi.string().allow(""),

      stage: Joi.string().allow(""),

      reject_reason: Joi.string().allow(""),

      uid: Joi.number(),

      created_by: CatalogModel.UserSerializer2(),

      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),

      modified_by: CatalogModel.UserSerializer2(),

      verified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      company_type: Joi.string().allow(""),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile_no: CatalogModel.SellerPhoneNumber().required(),

      name: Joi.string().allow(""),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      store_uid: Joi.number(),

      on_same_store: Joi.boolean(),
    });
  }

  static Document() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      verified: Joi.boolean(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow(""),
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

      closing: CatalogModel.LocationTimingSerializer(),

      weekday: Joi.string().allow("").required(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      verified_by: CatalogModel.UserSerializer1(),

      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),

      verified_on: Joi.string().allow(""),

      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),

      stage: Joi.string().allow(""),

      address: CatalogModel.GetAddressSerializer().required(),

      phone_number: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      modified_by: CatalogModel.UserSerializer1(),

      integration_type: CatalogModel.LocationIntegrationType(),

      company: CatalogModel.GetCompanySerializer(),

      manager: CatalogModel.LocationManagerSerializer(),

      product_return_config: CatalogModel.ProductReturnConfigSerializer(),

      created_by: CatalogModel.UserSerializer1(),

      store_type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      created_on: Joi.string().allow(""),

      documents: Joi.array().items(CatalogModel.Document()),

      modified_on: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      uid: Joi.number(),

      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),

      display_name: Joi.string().allow("").required(),

      warnings: Joi.any(),
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
      app_id: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      uid: Joi.number().required(),

      _custom_json: Joi.any(),

      is_active: Joi.boolean(),
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
