const Joi = require("joi");

class CatalogModel {
  static Action() {
    return Joi.object({
      page: CatalogModel.ActionPage(),
      popup: CatalogModel.ActionPage(),
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
      type: CatalogModel.PageType().required(),
      url: Joi.string().allow(""),
    });
  }
  static AllowSingleRequest() {
    return Joi.object({
      allow_single: Joi.boolean().required(),
    });
  }
  static AllSizes() {
    return Joi.object({
      identifiers: Joi.array().items(CatalogModel.ValidateIdentifier()),
      item_dimensions_unit_of_measure: Joi.string().allow("").required(),
      item_height: Joi.number().required(),
      item_length: Joi.number().required(),
      item_weight: Joi.number().required(),
      item_weight_unit_of_measure: Joi.any().required(),
      item_width: Joi.number().required(),
      size: Joi.any().required(),
    });
  }
  static AppCatalogConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      config_id: Joi.string().allow(""),
      config_type: Joi.string().allow("").required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      listing: CatalogModel.ConfigurationListing(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      product: CatalogModel.ConfigurationProduct(),
      type: Joi.string().allow(""),
    });
  }
  static AppConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      config_id: Joi.string().allow(""),
      config_type: Joi.string().allow("").required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      listing: CatalogModel.ConfigurationListing(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      product: CatalogModel.ConfigurationProduct(),
      type: Joi.string().allow(""),
    });
  }
  static AppConfigurationDetail() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      attributes: Joi.array().items(CatalogModel.AttributeDetailsGroup()),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
      slug: Joi.string().allow("").required(),
      template_slugs: Joi.array().items(Joi.string().allow("")),
    });
  }
  static AppConfigurationsSort() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      default_key: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
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
      app_id: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.number().required(),
    });
  }
  static ApplicationDepartmentJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }
  static ApplicationDepartmentListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ApplicationDepartment()),
      page: CatalogModel.Page().required(),
    });
  }
  static ApplicationItemMeta() {
    return Joi.object({
      _custom_json: Joi.any(),
      _custom_meta: Joi.array().items(CatalogModel.MetaFields()),
      alt_text: Joi.any(),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      moq: CatalogModel.ApplicationItemMOQ(),
      seo: CatalogModel.ApplicationItemSEO(),
    });
  }
  static ApplicationItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number(),
      maximum: Joi.number(),
      minimum: Joi.number(),
    });
  }
  static ApplicationItemSEO() {
    return Joi.object({
      description: Joi.any(),
      title: Joi.any(),
    });
  }
  static ApplicationProductListingResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),
      items: Joi.array().items(CatalogModel.ProductListingDetail()),
      operators: Joi.any(),
      page: CatalogModel.Page().required(),
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }
  static ApplicationStoreJson() {
    return Joi.object({
      _custom_json: Joi.any().required(),
    });
  }
  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }
  static ArticleAssignment1() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }
  static ArticleQuery() {
    return Joi.object({
      ignored_stores: Joi.array().items(Joi.number()),
      item_id: Joi.number().required(),
      size: Joi.string().allow("").required(),
    });
  }
  static ArticleStoreResponse() {
    return Joi.object({
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static AssignStore() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      articles: Joi.array().items(CatalogModel.AssignStoreArticle()).required(),
      channel_identifier: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      company_id: Joi.number(),
      pincode: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()),
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
  static AttributeDetailsGroup() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      key: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      priority: Joi.number().required(),
      slug: Joi.string().allow(""),
      unit: Joi.string().allow(""),
    });
  }
  static AttributeMaster() {
    return Joi.object({
      allowed_values: Joi.array().items(Joi.string().allow("")),
      format: Joi.string().allow(""),
      mandatory: Joi.boolean(),
      multi: Joi.boolean(),
      range: CatalogModel.AttributeSchemaRange(),
      type: Joi.string().allow("").required(),
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
  static AttributeMasterSerializer() {
    return Joi.object({
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.string().allow("")).required(),
      description: Joi.string().allow(""),
      details: CatalogModel.AttributeMasterDetails().required(),
      enabled_for_end_consumer: Joi.boolean(),
      example: Joi.string().allow(""),
      filters: CatalogModel.AttributeMasterFilter().required(),
      is_nested: Joi.boolean(),
      logo: Joi.string().allow(""),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      raw_key: Joi.string().allow(""),
      schema: CatalogModel.AttributeMaster().required(),
      slug: Joi.string().allow("").required(),
      suggestion: Joi.string().allow(""),
      synonyms: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      unit: Joi.string().allow(""),
      variant: Joi.boolean(),
    });
  }
  static AttributeSchemaRange() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static AutocompleteAction() {
    return Joi.object({
      page: CatalogModel.AutocompletePageAction(),
      type: Joi.string().allow(""),
    });
  }
  static AutoCompleteMedia() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static AutocompletePageAction() {
    return Joi.object({
      params: Joi.any(),
      query: Joi.any(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static AutocompleteResult() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogModel.AutocompleteAction(),
      display: Joi.string().allow(""),
      logo: CatalogModel.AutoCompleteMedia(),
    });
  }
  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static Brand() {
    return Joi.object({
      logo: CatalogModel.Logo(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static BrandItem() {
    return Joi.object({
      action: CatalogModel.Action(),
      banners: CatalogModel.ImageUrls(),
      departments: Joi.array().items(Joi.string().allow("")),
      discount: Joi.string().allow(""),
      logo: CatalogModel.Media2(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static BrandListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.BrandItem()),
      page: CatalogModel.Page().required(),
    });
  }
  static BrandMeta() {
    return Joi.object({
      id: Joi.number().required(),
      name: Joi.string().allow("").required(),
    });
  }
  static BrandMeta1() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }
  static BulkAssetResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Items()),
      page: CatalogModel.Page(),
    });
  }
  static BulkHsnResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static BulkHsnUpsert() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.HsnUpsert()).required(),
    });
  }
  static BulkInventoryGet() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.BulkInventoryGetItems()),
      page: CatalogModel.Page(),
    });
  }
  static BulkInventoryGetItems() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.string().allow("")),
      file_path: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      succeed: Joi.number(),
      total: Joi.number(),
    });
  }
  static BulkJob() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.any()),
      company_id: Joi.number().required(),
      created_by: CatalogModel.UserInfo1(),
      created_on: Joi.string().allow("").required(),
      custom_template_tag: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.any()),
      file_path: Joi.string().allow(""),
      is_active: Joi.boolean(),
      modified_by: CatalogModel.UserInfo1(),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      succeed: Joi.number(),
      template_tag: Joi.string().allow(""),
      total: Joi.number(),
      tracking_url: Joi.string().allow(""),
    });
  }
  static BulkProductRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      data: Joi.array().items(Joi.any()).required(),
      template_tag: Joi.string().allow("").required(),
    });
  }
  static BulkResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      created_by: CatalogModel.UserInfo1(),
      created_on: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      modified_by: CatalogModel.UserInfo1(),
      modified_on: Joi.string().allow(""),
    });
  }
  static CatalogInsightBrand() {
    return Joi.object({
      article_freshness: Joi.number(),
      available_articles: Joi.number(),
      available_sizes: Joi.number(),
      name: Joi.string().allow(""),
      total_articles: Joi.number(),
      total_sizes: Joi.number(),
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
  static CategoriesResponse() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
      template_slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Category() {
    return Joi.object({
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.number()).required(),
      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
      id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      level: Joi.number().required(),
      marketplaces: CatalogModel.CategoryMapping(),
      media: CatalogModel.Media1(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      priority: Joi.number(),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      tryouts: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }
  static CategoryCreateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static CategoryItems() {
    return Joi.object({
      action: CatalogModel.Action(),
      banners: CatalogModel.ImageUrls(),
      childs: Joi.array().items(CatalogModel.Child()),
      name: Joi.string().allow(""),
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
  static CategoryMapping() {
    return Joi.object({
      ajio: CatalogModel.CategoryMappingValues(),
      facebook: CatalogModel.CategoryMappingValues(),
      google: CatalogModel.CategoryMappingValues(),
    });
  }
  static CategoryMappingValues() {
    return Joi.object({
      catalog_id: Joi.number(),
      name: Joi.string().allow("").required(),
    });
  }
  static CategoryRequestBody() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()).required(),
      hierarchy: Joi.array().items(CatalogModel.Hierarchy()),
      is_active: Joi.boolean().required(),
      level: Joi.number().required(),
      marketplaces: CatalogModel.CategoryMapping(),
      media: CatalogModel.Media1(),
      name: Joi.string().allow("").required(),
      priority: Joi.number(),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      tryouts: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Category()),
      page: CatalogModel.Page(),
    });
  }
  static CategoryUpdateResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static Child() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogModel.Action(),
      banners: CatalogModel.ImageUrls(),
      childs: Joi.array().items(CatalogModel.SecondLevelChild()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
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
      landscape: CatalogModel.CollectionImage().required(),
      portrait: CatalogModel.CollectionImage().required(),
    });
  }
  static CollectionCreateResponse() {
    return Joi.object({
      _schedule: Joi.any(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.any(),
      banners: CatalogModel.ImageUrls(),
      cron: Joi.any(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogModel.BannerImage(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CollectionDetailResponse() {
    return Joi.object({
      _schedule: Joi.any(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.any(),
      banners: CatalogModel.ImageUrls(),
      cron: Joi.any(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogModel.Media(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }
  static CollectionItem() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      item_id: Joi.number().required(),
      priority: Joi.number(),
    });
  }
  static CollectionItemUpdate() {
    return Joi.object({
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      items: Joi.array().items(CatalogModel.CollectionItem()),
      query: Joi.array().items(CatalogModel.CollectionQuery()),
      type: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CollectionListingFilter() {
    return Joi.object({
      tags: Joi.array().items(CatalogModel.CollectionListingFilterTag()),
      type: Joi.array().items(CatalogModel.CollectionListingFilterType()),
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
  static CollectionQuery() {
    return Joi.object({
      attribute: Joi.string().allow("").required(),
      op: Joi.string().allow("").required(),
      value: Joi.array().items(Joi.any()).required(),
    });
  }
  static CollectionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),
      duration: Joi.number().allow(null),
      end: Joi.string().allow("").allow(null),
      next_schedule: Joi.array().items(CatalogModel.NextSchedule()),
      start: Joi.string().allow(""),
    });
  }
  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),
      brand_name: Joi.string().allow(""),
      company_id: Joi.number(),
      total_article: Joi.number(),
    });
  }
  static CompanyMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }
  static CompanyMeta1() {
    return Joi.object({
      id: Joi.number(),
    });
  }
  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),
      company_id: Joi.number().required(),
      created_by: Joi.any(),
      created_on: Joi.number().required(),
      enabled: Joi.boolean().required(),
      modified_by: Joi.any(),
      modified_on: Joi.number().required(),
      opt_level: Joi.string().allow("").required(),
      platform: Joi.string().allow("").required(),
      store_ids: Joi.array().items(Joi.number()).required(),
    });
  }
  static ConfigErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }
  static ConfigSuccessResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }
  static ConfigurationBucketPoints() {
    return Joi.object({
      display: Joi.string().allow(""),
      end: Joi.number(),
      start: Joi.number(),
    });
  }
  static ConfigurationListing() {
    return Joi.object({
      filter: CatalogModel.ConfigurationListingFilter().required(),
      sort: CatalogModel.ConfigurationListingSort().required(),
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
  static ConfigurationListingFilterConfig() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
      type: Joi.string().allow("").required(),
      value_config: CatalogModel.ConfigurationListingFilterValue(),
    });
  }
  static ConfigurationListingFilterValue() {
    return Joi.object({
      bucket_points: Joi.array().items(
        CatalogModel.ConfigurationBucketPoints()
      ),
      condition: Joi.string().allow(""),
      map: Joi.any(),
      map_values: Joi.array().items(Joi.any()),
      sort: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static ConfigurationListingSort() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationListingSortConfig()),
      default_key: Joi.string().allow("").required(),
    });
  }
  static ConfigurationListingSortConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      priority: Joi.number().required(),
    });
  }
  static ConfigurationProduct() {
    return Joi.object({
      similar: CatalogModel.ConfigurationProductSimilar().required(),
      variant: CatalogModel.ConfigurationProductVariant().required(),
    });
  }
  static ConfigurationProductConfig() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      priority: Joi.number().required(),
      size: CatalogModel.ProductSize(),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(CatalogModel.ConfigurationProductConfig()),
    });
  }
  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(
        CatalogModel.ConfigurationProductVariantConfig()
      ),
    });
  }
  static ConfigurationProductVariantConfig() {
    return Joi.object({
      display_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      key: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      priority: Joi.number().required(),
      size: CatalogModel.ProductSize().required(),
    });
  }
  static CreateAutocompleteKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      results: Joi.array().items(CatalogModel.AutocompleteResult()),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      results: Joi.array().items(Joi.any()),
      words: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CreateCollection() {
    return Joi.object({
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      _schedule: CatalogModel.CollectionSchedule(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow("").required(),
      badge: CatalogModel.CollectionBadge(),
      banners: CatalogModel.CollectionBanner().required(),
      created_by: CatalogModel.UserInfo(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      logo: CatalogModel.CollectionImage().required(),
      meta: Joi.any(),
      modified_by: CatalogModel.UserInfo(),
      name: Joi.string().allow("").required(),
      priority: Joi.number(),
      published: Joi.boolean(),
      query: Joi.array().items(CatalogModel.CollectionQuery()),
      seo: CatalogModel.SeoDetail(),
      slug: Joi.string().allow("").required(),
      sort_on: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").required(),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CreateSearchKeyword() {
    return Joi.object({
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      result: CatalogModel.SearchKeywordResult().required(),
      words: Joi.array().items(Joi.string().allow("")),
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
  static CustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
    });
  }
  static DateMeta() {
    return Joi.object({
      added_on_store: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      inventory_updated_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }
  static DefaultKeyRequest() {
    return Joi.object({
      default_key: Joi.string().allow("").required(),
    });
  }
  static DeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static Department() {
    return Joi.object({
      logo: CatalogModel.Media2(),
      name: Joi.string().allow(""),
      priority_order: Joi.number(),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static DepartmentCategoryTree() {
    return Joi.object({
      department: Joi.string().allow(""),
      items: Joi.array().items(CatalogModel.CategoryItems()),
    });
  }
  static DepartmentCreateErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }
  static DepartmentCreateResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      uid: Joi.number().required(),
    });
  }
  static DepartmentCreateUpdate() {
    return Joi.object({
      _cls: Joi.string().allow(""),
      _custom_json: Joi.any(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      platforms: Joi.any(),
      priority_order: Joi.number().required(),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }
  static DepartmentErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      errors: Joi.any(),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      status: Joi.number(),
    });
  }
  static DepartmentIdentifier() {
    return Joi.object({
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static DepartmentModel() {
    return Joi.object({
      _cls: Joi.any(),
      _custom_json: Joi.any(),
      _id: Joi.any(),
      created_by: CatalogModel.UserDetail(),
      created_on: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      logo: Joi.any().required(),
      modified_by: CatalogModel.UserDetail(),
      modified_on: Joi.string().allow("").required(),
      name: Joi.any().required(),
      priority_order: Joi.number().required(),
      slug: Joi.any().required(),
      synonyms: Joi.array().items(Joi.any()),
      uid: Joi.number().required(),
      verified_by: CatalogModel.UserDetail(),
      verified_on: Joi.string().allow(""),
    });
  }
  static DepartmentResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Department()),
    });
  }
  static DepartmentsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetDepartment()),
      page: CatalogModel.Page(),
    });
  }
  static DimensionResponse() {
    return Joi.object({
      height: Joi.number().required(),
      is_default: Joi.boolean().required(),
      length: Joi.number().required(),
      unit: Joi.string().allow("").required(),
      width: Joi.number().required(),
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
  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      url: Joi.string().allow(""),
      value: Joi.string().allow("").required(),
      verified: Joi.boolean(),
    });
  }
  static EntityConfiguration() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      config_id: Joi.string().allow(""),
      config_type: Joi.string().allow("").required(),
      id: Joi.string().allow(""),
      listing: CatalogModel.GetCatalogConfigurationDetailsSchemaListing(),
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
    });
  }
  static ErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      error: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      status: Joi.number(),
    });
  }
  static FilerList() {
    return Joi.object({
      display: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static GenderDetail() {
    return Joi.object({
      departments: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      details: CatalogModel.AttributeMasterDetails(),
      enabled_for_end_consumer: Joi.boolean(),
      filters: CatalogModel.AttributeMasterFilter(),
      id: Joi.string().allow(""),
      is_nested: Joi.boolean(),
      logo: Joi.string().allow(""),
      meta: CatalogModel.AttributeMasterMeta(),
      name: Joi.string().allow(""),
      schema: CatalogModel.AttributeMaster(),
      slug: Joi.string().allow(""),
    });
  }
  static GetAddressSerializer() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }
  static GetAllSizes() {
    return Joi.object({
      all_sizes: Joi.array().items(CatalogModel.AllSizes()),
    });
  }
  static GetAppCatalogConfiguration() {
    return Joi.object({
      data: CatalogModel.AppCatalogConfiguration(),
      is_default: Joi.boolean(),
    });
  }
  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      data: CatalogModel.EntityConfiguration(),
      is_default: Joi.boolean(),
    });
  }
  static GetAutocompleteWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
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
  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      compare: Joi.any(),
      detail: Joi.any(),
      similar: Joi.any(),
      variant: Joi.any(),
    });
  }
  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      filter: Joi.any(),
      sort: Joi.any(),
    });
  }
  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: CatalogModel.MetaDataListingResponse(),
      product: CatalogModel.GetCatalogConfigurationDetailsProduct(),
    });
  }
  static GetCollectionDetailNest() {
    return Joi.object({
      _schedule: Joi.any(),
      action: CatalogModel.Action(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      app_id: Joi.string().allow(""),
      badge: Joi.any(),
      banners: CatalogModel.ImageUrls(),
      cron: Joi.any(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      logo: CatalogModel.Media(),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      query: Joi.array().items(CatalogModel.CollectionQuery()),
      slug: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }
  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),
      items: Joi.array().items(CatalogModel.ProductListingDetail()),
      page: CatalogModel.Page(),
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }
  static GetCollectionListingResponse() {
    return Joi.object({
      filters: CatalogModel.CollectionListingFilter(),
      items: Joi.array().items(CatalogModel.GetCollectionDetailNest()),
      page: CatalogModel.Page(),
    });
  }
  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(CatalogModel.ProductFilters()),
      operators: Joi.object().pattern(/\S/, Joi.string().allow("")).required(),
      sort_on: Joi.array().items(CatalogModel.ProductSortOn()),
    });
  }
  static GetCompanySerializer() {
    return Joi.object({
      addresses: Joi.array().items(CatalogModel.GetAddressSerializer()),
      business_type: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
      created_by: CatalogModel.UserSerializer1(),
      created_on: Joi.string().allow(""),
      modified_by: CatalogModel.UserSerializer1(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      reject_reason: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      uid: Joi.number(),
      verified_by: CatalogModel.UserSerializer1(),
      verified_on: Joi.string().allow(""),
    });
  }
  static GetConfigMetadataResponse() {
    return Joi.object({
      condition: Joi.array().items(Joi.any()),
      data: Joi.array().items(Joi.any()).required(),
      values: Joi.array().items(Joi.any()),
    });
  }
  static GetConfigResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),
      page: CatalogModel.PageResponseType().required(),
    });
  }
  static GetDepartment() {
    return Joi.object({
      created_by: CatalogModel.UserSerializer(),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean(),
      item_type: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      modified_by: CatalogModel.UserSerializer(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      page_no: Joi.number(),
      page_size: Joi.number(),
      priority_order: Joi.number(),
      search: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      synonyms: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }
  static GetInventories() {
    return Joi.object({
      brand: CatalogModel.BrandMeta1(),
      company: CatalogModel.CompanyMeta1(),
      country_of_origin: Joi.string().allow(""),
      created_by: CatalogModel.UserSerializer(),
      date_meta: CatalogModel.DateMeta(),
      dimension: CatalogModel.DimensionResponse1(),
      expiration_date: Joi.string().allow(""),
      id: Joi.string().allow(""),
      identifier: Joi.any(),
      inventory_updated_on: Joi.string().allow(""),
      is_set: Joi.boolean(),
      item_id: Joi.number(),
      manufacturer: CatalogModel.ManufacturerResponse1(),
      modified_by: CatalogModel.UserSerializer(),
      platforms: Joi.any(),
      price: CatalogModel.PriceArticle(),
      quantities: CatalogModel.QuantitiesArticle(),
      return_config: CatalogModel.ReturnConfig2(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      store: CatalogModel.ArticleStoreResponse(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      total_quantity: Joi.number(),
      trace_id: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      trader: Joi.array().items(CatalogModel.Trader2()),
      uid: Joi.string().allow(""),
      weight: CatalogModel.WeightResponse1(),
    });
  }
  static GetInventoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetInventories()),
      page: CatalogModel.Page(),
    });
  }
  static GetLocationSerializer() {
    return Joi.object({
      _custom_json: Joi.any(),
      address: CatalogModel.GetAddressSerializer().required(),
      code: Joi.string().allow("").required(),
      company: CatalogModel.GetCompanySerializer(),
      contact_numbers: Joi.array().items(CatalogModel.SellerPhoneNumber()),
      created_by: CatalogModel.UserSerializer2(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow("").required(),
      documents: Joi.array().items(CatalogModel.Document()),
      gst_credentials: CatalogModel.InvoiceDetailsSerializer(),
      integration_type: CatalogModel.LocationIntegrationType(),
      manager: CatalogModel.LocationManagerSerializer(),
      modified_by: CatalogModel.UserSerializer2(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      phone_number: Joi.string().allow("").required(),
      product_return_config: CatalogModel.ProductReturnConfigSerializer(),
      stage: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.array().items(CatalogModel.LocationDayWiseSerializer()),
      uid: Joi.number(),
      verified_by: CatalogModel.UserSerializer2(),
      verified_on: Joi.string().allow(""),
      warnings: Joi.any(),
    });
  }
  static GetOptInPlatform() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CompanyOptIn()).required(),
      page: CatalogModel.Page().required(),
    });
  }
  static GetProductBundleCreateResponse() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.any(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      page_visibility: Joi.array().items(Joi.string().allow("")),
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
      same_store_assignment: Joi.boolean(),
      slug: Joi.string().allow("").required(),
    });
  }
  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetProductBundleCreateResponse()),
      page: CatalogModel.Page(),
    });
  }
  static GetProductBundleResponse() {
    return Joi.object({
      choice: Joi.string().allow(""),
      company_id: Joi.number(),
      is_active: Joi.boolean(),
      logo: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      page_visibility: Joi.array().items(Joi.string().allow("")),
      products: Joi.array().items(CatalogModel.GetProducts()),
      same_store_assignment: Joi.boolean(),
      slug: Joi.string().allow(""),
    });
  }
  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),
      auto_add_to_cart: Joi.boolean(),
      auto_select: Joi.boolean(),
      max_quantity: Joi.number(),
      min_quantity: Joi.number(),
      price: CatalogModel.Price(),
      product_details: CatalogModel.LimitedProductData(),
      product_uid: Joi.number(),
      sizes: Joi.array().items(CatalogModel.Size()),
    });
  }
  static GetSearchWordsData() {
    return Joi.object({
      _custom_json: Joi.any(),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      result: Joi.any(),
      uid: Joi.string().allow(""),
      words: Joi.array().items(Joi.string().allow("")),
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
  static GlobalValidation() {
    return Joi.object({
      definitions: Joi.any(),
      description: Joi.string().allow(""),
      properties: CatalogModel.Properties(),
      required: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),
      gtin_value: Joi.any().required(),
      primary: Joi.boolean(),
    });
  }
  static Guide() {
    return Joi.object({
      meta: CatalogModel.Meta(),
    });
  }
  static Hierarchy() {
    return Joi.object({
      department: Joi.number().required(),
      l1: Joi.number().required(),
      l2: Joi.number().required(),
    });
  }
  static HsnCode() {
    return Joi.object({
      data: CatalogModel.HsnCodesObject(),
    });
  }
  static HsnCodesListingResponseSchemaV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.HSNDataInsertV2()),
      page: CatalogModel.PageResponse(),
    });
  }
  static HsnCodesObject() {
    return Joi.object({
      company_id: Joi.number(),
      hs2_code: Joi.string().allow(""),
      hsn_code: Joi.string().allow(""),
      id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      tax1: Joi.number(),
      tax2: Joi.number(),
      tax_on_esp: Joi.boolean(),
      tax_on_mrp: Joi.boolean(),
      threshold1: Joi.number(),
      threshold2: Joi.number(),
    });
  }
  static HSNCodesResponse() {
    return Joi.object({
      data: CatalogModel.HSNData(),
      message: Joi.string().allow(""),
    });
  }
  static HSNData() {
    return Joi.object({
      country_of_origin: Joi.array().items(Joi.string().allow("")),
      hsn_code: Joi.array().items(Joi.string().allow("")),
    });
  }
  static HSNDataInsertV2() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow("").required(),
      hsn_code: Joi.string().allow("").required(),
      hsn_code_id: Joi.string().allow(""),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      reporting_hsn: Joi.string().allow("").required(),
      taxes: Joi.array().items(CatalogModel.TaxSlab()).required(),
      type: Joi.string().allow("").required(),
    });
  }
  static HsnUpsert() {
    return Joi.object({
      company_id: Joi.number().required(),
      hs2_code: Joi.string().allow("").allow(null).required(),
      hsn_code: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      tax1: Joi.number().required(),
      tax2: Joi.number(),
      tax_on_esp: Joi.boolean(),
      tax_on_mrp: Joi.boolean().required(),
      threshold1: Joi.number().required(),
      threshold2: Joi.number(),
      uid: Joi.number(),
    });
  }
  static Image() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      aspect_ratio_f: Joi.number(),
      secure_url: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static ImageUrls() {
    return Joi.object({
      landscape: CatalogModel.BannerImage(),
      portrait: CatalogModel.BannerImage(),
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
  static InventoryConfig() {
    return Joi.object({
      data: Joi.array().items(CatalogModel.FilerList()),
      multivalues: Joi.boolean(),
    });
  }
  static InventoryCreateRequest() {
    return Joi.object({
      data: Joi.array().items(Joi.string().allow("")),
      filters: CatalogModel.InventoryExportFilter().required(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").allow(null),
    });
  }
  static InventoryExportAdvanceOption() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      from_date: Joi.string().allow("").allow(null),
      quantity: CatalogModel.InventoryExportQuantityFilter(),
      store_ids: Joi.array().items(Joi.number()),
      to_date: Joi.string().allow("").allow(null),
    });
  }
  static InventoryExportFilter() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      from_date: Joi.string().allow(""),
      quantity: CatalogModel.InventoryExportQuantityFilter(),
      store_ids: Joi.array().items(Joi.number()).required(),
      to_date: Joi.string().allow(""),
    });
  }
  static InventoryExportJob() {
    return Joi.object({
      completed_on: Joi.string().allow(""),
      filters: CatalogModel.InventoryExportAdvanceOption(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      url: Joi.string().allow(""),
    });
  }
  static InventoryExportJobListResponse() {
    return Joi.object({
      items: CatalogModel.InventoryJobDetailResponse().required(),
    });
  }
  static InventoryExportQuantityFilter() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
      operators: Joi.string().allow("").required(),
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
      created_by: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      filters: Joi.any(),
      modified_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
    });
  }
  static InventoryFailedReason() {
    return Joi.object({
      errors: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
    });
  }
  static InventoryJobDetailResponse() {
    return Joi.object({
      cancelled_by: CatalogModel.UserDetail(),
      cancelled_on: Joi.string().allow(""),
      completed_on: Joi.string().allow(""),
      created_by: CatalogModel.UserDetail(),
      created_on: Joi.string().allow(""),
      filters: CatalogModel.InventoryJobFilters().required(),
      id: Joi.string().allow("").required(),
      modified_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.any(),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow("").allow(null),
      url: Joi.string().allow("").required(),
    });
  }
  static InventoryJobFilters() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),
      from_date: Joi.string().allow(""),
      quantity: CatalogModel.InventoryExportQuantityFilter(),
      stores: Joi.array().items(Joi.string().allow("")),
      to_date: Joi.string().allow(""),
    });
  }
  static InventoryJobPayload() {
    return Joi.object({
      currency: Joi.string().allow(""),
      expiration_date: Joi.string().allow(""),
      item_dimensions_unit_of_measure: Joi.string().allow(""),
      item_weight_unit_of_measure: Joi.string().allow(""),
      price: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow("").required(),
      store_code: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      total_quantity: Joi.number(),
      trace_id: Joi.string().allow("").allow(null),
    });
  }
  static InventoryPage() {
    return Joi.object({
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number().required(),
      next_id: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").required(),
    });
  }
  static InventoryPayload() {
    return Joi.object({
      expiration_date: Joi.string().allow(""),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      seller_identifier: Joi.string().allow("").required(),
      store_id: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      total_quantity: Joi.number().allow(null),
      trace_id: Joi.string().allow(""),
    });
  }
  static InventoryRequest() {
    return Joi.object({
      company_id: Joi.number().required(),
      item: CatalogModel.ItemQuery().required(),
      sizes: Joi.array().items(CatalogModel.InvSize()).required(),
    });
  }
  static InventoryRequestSchemaV2() {
    return Joi.object({
      company_id: Joi.number().required(),
      meta: Joi.any(),
      payload: Joi.array().items(CatalogModel.InventoryPayload()),
    });
  }
  static InventoryResponse() {
    return Joi.object({
      currency: Joi.string().allow(""),
      identifiers: Joi.any(),
      inventory_updated_on: Joi.string().allow(""),
      item_id: Joi.number(),
      price: Joi.number(),
      price_effective: Joi.number(),
      price_transfer: Joi.number(),
      quantity: Joi.number(),
      sellable_quantity: Joi.number(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      store: Joi.any(),
      uid: Joi.string().allow(""),
    });
  }
  static InventoryResponseItem() {
    return Joi.object({
      data: CatalogModel.InventoryPayload(),
      reason: CatalogModel.InventoryFailedReason(),
    });
  }
  static InventoryResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponse()),
      page: CatalogModel.Page(),
    });
  }
  static InventorySellerIdentifierResponsePaginated() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventorySellerResponse()),
      page: CatalogModel.Page(),
    });
  }
  static InventorySellerResponse() {
    return Joi.object({
      _custom_json: Joi.any(),
      added_on_store: Joi.string().allow(""),
      brand: CatalogModel.BrandMeta().required(),
      company: CatalogModel.CompanyMeta().required(),
      country_of_origin: Joi.string().allow("").required(),
      created_by: CatalogModel.UserSerializer(),
      dimension: CatalogModel.DimensionResponse().required(),
      expiration_date: Joi.string().allow(""),
      fragile: Joi.boolean().required(),
      fynd_article_code: Joi.string().allow("").required(),
      fynd_item_code: Joi.string().allow("").required(),
      fynd_meta: Joi.any(),
      identifier: Joi.any().required(),
      is_active: Joi.boolean(),
      is_set: Joi.boolean(),
      item_id: Joi.number().required(),
      manufacturer: CatalogModel.ManufacturerResponse().required(),
      meta: Joi.any().allow(null),
      modified_by: CatalogModel.UserSerializer(),
      price: CatalogModel.PriceMeta().required(),
      quantities: CatalogModel.Quantities(),
      raw_meta: Joi.any(),
      return_config: CatalogModel.ReturnConfig1(),
      seller_identifier: Joi.string().allow("").required(),
      set: CatalogModel.InventorySet(),
      size: Joi.string().allow("").required(),
      stage: Joi.string().allow(""),
      store: CatalogModel.StoreMeta().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      total_quantity: Joi.number().required(),
      trace_id: Joi.string().allow(""),
      track_inventory: Joi.boolean(),
      trader: Joi.array().items(CatalogModel.Trader1()),
      uid: Joi.string().allow("").required(),
      weight: CatalogModel.WeightResponse().required(),
    });
  }
  static InventorySet() {
    return Joi.object({
      name: Joi.string().allow(""),
      quantity: Joi.number(),
      size_distribution: CatalogModel.SizeDistribution().required(),
    });
  }
  static InventoryStockResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
      page: CatalogModel.InventoryPage().required(),
    });
  }
  static InventoryUpdateResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.InventoryResponseItem()),
      message: Joi.string().allow("").required(),
    });
  }
  static InventoryValidationResponse() {
    return Joi.object({
      data: Joi.any(),
      message: Joi.string().allow(""),
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
  static InvSize() {
    return Joi.object({
      currency: Joi.string().allow("").required(),
      expiration_date: Joi.string().allow(""),
      identifiers: Joi.array().items(CatalogModel.GTIN()).required(),
      is_set: Joi.boolean(),
      item_dimensions_unit_of_measure: Joi.string().allow("").allow(null),
      item_height: Joi.number().allow(null),
      item_length: Joi.number().allow(null),
      item_weight: Joi.number().allow(null),
      item_weight_unit_of_measure: Joi.string().allow("").allow(null),
      item_width: Joi.number().allow(null),
      price: Joi.number(),
      price_effective: Joi.number().required(),
      price_transfer: Joi.number().allow(null),
      quantity: Joi.number().required(),
      set: CatalogModel.InventorySet(),
      size: Joi.any().required(),
      store_code: Joi.string().allow("").required(),
    });
  }
  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),
      item_code: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Items() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      created_by: CatalogModel.UserCommon(),
      created_on: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.string().allow("")),
      file_path: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      modified_by: CatalogModel.UserCommon(),
      modified_on: Joi.string().allow(""),
      retry: Joi.number(),
      stage: Joi.string().allow(""),
      succeed: Joi.number(),
      total: Joi.number(),
      tracking_url: Joi.string().allow(""),
    });
  }
  static LimitedProductData() {
    return Joi.object({
      attributes: Joi.any(),
      country_of_origin: Joi.string().allow(""),
      identifier: Joi.any(),
      images: Joi.array().items(Joi.string().allow("")),
      item_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: Joi.any(),
      quantity: Joi.number(),
      short_description: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static ListSizeGuide() {
    return Joi.object({
      items: Joi.array().items(Joi.any()),
      page: Joi.any(),
    });
  }
  static LocationDayWiseSerializer() {
    return Joi.object({
      closing: CatalogModel.LocationTimingSerializer(),
      open: Joi.boolean().required(),
      opening: CatalogModel.LocationTimingSerializer(),
      weekday: Joi.string().allow("").required(),
    });
  }
  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string().allow(""),
      order: Joi.string().allow(""),
    });
  }
  static LocationListSerializer() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.GetLocationSerializer()),
      page: CatalogModel.Page(),
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
  static Logo() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      aspect_ratio_f: Joi.number(),
      secure_url: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static ManufacturerResponse() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      is_default: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
    });
  }
  static ManufacturerResponse1() {
    return Joi.object({
      address: Joi.string().allow(""),
      is_default: Joi.boolean(),
      name: Joi.string().allow(""),
    });
  }
  static Media() {
    return Joi.object({
      meta: Joi.any(),
      type: Joi.string().allow(""),
      url: Joi.string().allow("").required(),
    });
  }
  static Media1() {
    return Joi.object({
      landscape: Joi.string().allow("").required(),
      logo: Joi.string().allow("").required(),
      portrait: Joi.string().allow("").required(),
    });
  }
  static Media2() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static Meta() {
    return Joi.object({
      headers: Joi.any(),
      unit: Joi.string().allow(""),
      values: Joi.array().items(Joi.any()),
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
      filter: CatalogModel.MetaDataListingFilterResponse().required(),
      sort: CatalogModel.MetaDataListingSortResponse().required(),
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
  static MetaFields() {
    return Joi.object({
      key: Joi.any().required(),
      value: Joi.any().required(),
    });
  }
  static MOQData() {
    return Joi.object({
      increment_unit: Joi.number(),
      maximum: Joi.number(),
      minimum: Joi.number(),
    });
  }
  static NetQuantity() {
    return Joi.object({
      unit: Joi.any(),
      value: Joi.number(),
    });
  }
  static NetQuantityResponse() {
    return Joi.object({
      unit: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),
      start: Joi.string().allow(""),
    });
  }
  static OptinCompanyBrandDetailsView() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CompanyBrandDetail()),
      page: CatalogModel.Page(),
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
  static OptinCompanyMetrics() {
    return Joi.object({
      brand: Joi.number(),
      company: Joi.string().allow(""),
      store: Joi.number(),
    });
  }
  static OptInPostRequest() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),
      company_id: Joi.number(),
      enabled: Joi.boolean(),
      opt_level: Joi.string().allow("").required(),
      platform: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.number()),
    });
  }
  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.StoreDetail()),
      page: CatalogModel.Page(),
    });
  }
  static OwnerAppItemResponse() {
    return Joi.object({
      alt_text: Joi.any(),
      is_cod: Joi.boolean(),
      is_gift: Joi.boolean(),
      moq: CatalogModel.MOQData(),
      seo: CatalogModel.SEOData(),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static PageResponse() {
    return Joi.object({
      current: Joi.string().allow(""),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
    });
  }
  static PageResponseType() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      next: Joi.number().required(),
      total_count: Joi.number().required(),
    });
  }
  static Price() {
    return Joi.object({
      currency: Joi.string().allow(""),
      max_effective: Joi.number(),
      max_marked: Joi.number(),
      min_effective: Joi.number(),
      min_marked: Joi.number(),
    });
  }
  static Price1() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static PriceArticle() {
    return Joi.object({
      currency: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
      tp_notes: Joi.any(),
      transfer: Joi.number(),
    });
  }
  static PriceMeta() {
    return Joi.object({
      currency: Joi.string().allow("").required(),
      effective: Joi.number().required(),
      marked: Joi.number().required(),
      tp_notes: Joi.any(),
      transfer: Joi.number().required(),
      updated_at: Joi.string().allow(""),
    });
  }
  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.CategoriesResponse()),
      page: CatalogModel.Page(),
    });
  }
  static Product() {
    return Joi.object({
      _custom_json: Joi.any(),
      all_company_ids: Joi.array().items(Joi.number()),
      all_identifiers: Joi.array().items(Joi.string().allow("")),
      all_sizes: Joi.array().items(Joi.any()),
      attributes: Joi.any(),
      brand: CatalogModel.Brand(),
      brand_uid: Joi.number(),
      category: Joi.any(),
      category_slug: Joi.string().allow(""),
      category_uid: Joi.number(),
      color: Joi.string().allow(""),
      company_id: Joi.number(),
      country_of_origin: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      custom_order: Joi.any(),
      departments: Joi.array().items(Joi.number()),
      description: Joi.string().allow(""),
      highlights: Joi.array().items(Joi.string().allow("")),
      hsn_code: Joi.string().allow(""),
      id: Joi.string().allow(""),
      image_nature: Joi.string().allow(""),
      images: Joi.array().items(CatalogModel.Image()),
      is_active: Joi.boolean(),
      is_dependent: Joi.boolean(),
      is_expirable: Joi.boolean(),
      is_image_less_product: Joi.boolean(),
      is_physical: Joi.boolean(),
      is_set: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      l3_mapping: Joi.array().items(Joi.string().allow("")),
      media: Joi.array().items(CatalogModel.Media()),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      moq: Joi.any(),
      multi_size: Joi.boolean(),
      name: Joi.string().allow(""),
      net_quantity: CatalogModel.NetQuantityResponse(),
      no_of_boxes: Joi.number(),
      pending: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogModel.ProductPublished(),
      return_config: CatalogModel.ReturnConfigResponse(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.any()),
      slug: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      teaser_tag: Joi.any(),
      template_tag: Joi.string().allow(""),
      trader: Joi.array().items(CatalogModel.Trader()),
      uid: Joi.number(),
      variant_group: Joi.any(),
      variant_media: Joi.any(),
      variants: Joi.any(),
      verified_by: CatalogModel.VerifiedBy(),
      verified_on: Joi.string().allow(""),
    });
  }
  static ProductAttributesResponse() {
    return Joi.object({
      items: Joi.array()
        .items(CatalogModel.AttributeMasterSerializer())
        .required(),
    });
  }
  static ProductBrand() {
    return Joi.object({
      action: CatalogModel.Action(),
      logo: CatalogModel.Media(),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static ProductBulkAssets() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      company_id: Joi.number(),
      url: Joi.string().allow("").required(),
      user: Joi.any().required(),
    });
  }
  static ProductBulkRequest() {
    return Joi.object({
      cancelled: Joi.number(),
      cancelled_records: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      created_by: CatalogModel.UserDetail1(),
      created_on: Joi.string().allow(""),
      failed: Joi.number(),
      failed_records: Joi.array().items(Joi.string().allow("")),
      file_path: Joi.string().allow(""),
      is_active: Joi.boolean(),
      modified_by: CatalogModel.UserDetail1(),
      modified_on: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      succeed: Joi.number(),
      template: CatalogModel.ProductTemplate(),
      template_tag: Joi.string().allow(""),
      total: Joi.number(),
    });
  }
  static ProductBulkRequestList() {
    return Joi.object({
      items: CatalogModel.ProductBulkRequest(),
      page: CatalogModel.Page(),
    });
  }
  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),
      auto_add_to_cart: Joi.boolean(),
      auto_select: Joi.boolean(),
      max_quantity: Joi.number().required(),
      min_quantity: Joi.number().required(),
      product_uid: Joi.number().required(),
    });
  }
  static ProductBundleRequest() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.any(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      page_visibility: Joi.array().items(Joi.string().allow("")),
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
      same_store_assignment: Joi.boolean(),
      slug: Joi.string().allow("").required(),
    });
  }
  static ProductBundleUpdateRequest() {
    return Joi.object({
      choice: Joi.string().allow("").required(),
      company_id: Joi.number(),
      is_active: Joi.boolean().required(),
      logo: Joi.string().allow("").allow(null),
      meta: Joi.any(),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      page_visibility: Joi.array().items(Joi.string().allow("")),
      products: Joi.array().items(CatalogModel.ProductBundleItem()).required(),
      same_store_assignment: Joi.boolean(),
      slug: Joi.string().allow("").required(),
    });
  }
  static ProductConfigurationDownloads() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),
      multivalue: Joi.boolean(),
    });
  }
  static ProductCreateUpdateSchemaV2() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: Joi.string().allow(""),
      attributes: Joi.any(),
      brand_uid: Joi.number().required(),
      bulk_job_id: Joi.string().allow(""),
      category_slug: Joi.string().allow("").required(),
      change_request_id: Joi.any(),
      company_id: Joi.number().required(),
      country_of_origin: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      custom_order: CatalogModel.CustomOrder(),
      departments: Joi.array().items(Joi.number()).required(),
      description: Joi.string().allow(""),
      highlights: Joi.array().items(Joi.string().allow("").allow(null)),
      is_active: Joi.boolean(),
      is_dependent: Joi.boolean(),
      is_image_less_product: Joi.boolean(),
      is_set: Joi.boolean(),
      item_code: Joi.string().allow("").required(),
      item_type: Joi.string().allow("").required(),
      media: Joi.array().items(CatalogModel.Media()),
      multi_size: Joi.boolean(),
      name: Joi.string().allow("").required(),
      net_quantity: CatalogModel.NetQuantity(),
      no_of_boxes: Joi.number(),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogModel.ProductPublish(),
      requester: Joi.string().allow(""),
      return_config: CatalogModel.ReturnConfig().required(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.any()).required(),
      slug: Joi.string().allow("").required(),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: CatalogModel.TaxIdentifier().required(),
      teaser_tag: CatalogModel.TeaserTag(),
      template_tag: Joi.string().allow("").required(),
      trader: Joi.array().items(CatalogModel.Trader()).required(),
      uid: Joi.number().allow(null),
      variant_group: Joi.any(),
      variant_media: Joi.any(),
      variants: Joi.any(),
    });
  }
  static ProductDetail() {
    return Joi.object({
      attributes: Joi.any(),
      brand: CatalogModel.ProductBrand(),
      color: Joi.string().allow(""),
      description: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.string().allow("")),
      image_nature: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      medias: Joi.array().items(CatalogModel.Media()),
      name: Joi.string().allow(""),
      product_online_date: Joi.string().allow(""),
      promo_meta: Joi.any(),
      rating: Joi.number(),
      rating_count: Joi.number(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      teaser_tag: Joi.any(),
      tryouts: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static ProductDetailAttribute() {
    return Joi.object({
      key: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static ProductDetailGroupedAttribute() {
    return Joi.object({
      details: Joi.array().items(CatalogModel.ProductDetailAttribute()),
      title: Joi.string().allow(""),
    });
  }
  static ProductDownloadsResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductTemplateExportResponse()),
    });
  }
  static ProductFilters() {
    return Joi.object({
      key: CatalogModel.ProductFiltersKey().required(),
      values: Joi.array().items(CatalogModel.ProductFiltersValue()).required(),
    });
  }
  static ProductFiltersKey() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      kind: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      operators: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow("").required(),
      display_format: Joi.string().allow(""),
      is_selected: Joi.boolean().required(),
      max: Joi.number(),
      min: Joi.number(),
      query_format: Joi.string().allow(""),
      selected_max: Joi.number(),
      selected_min: Joi.number(),
      value: Joi.any().required(),
    });
  }
  static ProductListingDetail() {
    return Joi.object({
      attributes: Joi.any(),
      brand: CatalogModel.ProductBrand(),
      color: Joi.string().allow(""),
      description: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      grouped_attributes: Joi.array().items(
        CatalogModel.ProductDetailGroupedAttribute()
      ),
      has_variant: Joi.boolean(),
      highlights: Joi.array().items(Joi.string().allow("")),
      image_nature: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      medias: Joi.array().items(CatalogModel.Media()),
      name: Joi.string().allow(""),
      price: CatalogModel.ProductListingPrice(),
      product_online_date: Joi.string().allow(""),
      promo_meta: Joi.any(),
      rating: Joi.number(),
      rating_count: Joi.number(),
      sellable: Joi.boolean(),
      short_description: Joi.string().allow(""),
      similars: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow("").required(),
      teaser_tag: Joi.any(),
      tryouts: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static ProductListingPrice() {
    return Joi.object({
      effective: CatalogModel.Price1(),
      marked: CatalogModel.Price1(),
    });
  }
  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.Product()),
      page: CatalogModel.Page(),
    });
  }
  static ProductListingResponseV2() {
    return Joi.object({
      items: Joi.array().items(CatalogModel.ProductSchemaV2()),
      page: CatalogModel.Page(),
    });
  }
  static ProductPublish() {
    return Joi.object({
      is_set: Joi.boolean(),
      product_online_date: Joi.string().allow(""),
    });
  }
  static ProductPublish1() {
    return Joi.object({
      is_set: Joi.boolean(),
      product_online_date: Joi.string().allow(""),
    });
  }
  static ProductPublished() {
    return Joi.object({
      is_set: Joi.boolean(),
      product_online_date: Joi.number(),
    });
  }
  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),
      store_uid: Joi.number(),
    });
  }
  static ProductSchemaV2() {
    return Joi.object({
      _custom_json: Joi.any(),
      all_company_ids: Joi.array().items(Joi.number()),
      all_identifiers: Joi.array().items(Joi.string().allow("")),
      all_sizes: Joi.array().items(Joi.any()),
      attributes: Joi.any(),
      brand: CatalogModel.Brand(),
      brand_uid: Joi.number(),
      category: Joi.any(),
      category_slug: Joi.string().allow(""),
      category_uid: Joi.number(),
      color: Joi.string().allow(""),
      company_id: Joi.number(),
      country_of_origin: Joi.string().allow(""),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      custom_order: Joi.any(),
      departments: Joi.array().items(Joi.number()),
      description: Joi.string().allow(""),
      highlights: Joi.array().items(Joi.string().allow("")),
      hsn_code: Joi.string().allow(""),
      id: Joi.string().allow(""),
      image_nature: Joi.string().allow(""),
      images: Joi.array().items(CatalogModel.Image()),
      is_active: Joi.boolean(),
      is_dependent: Joi.boolean(),
      is_expirable: Joi.boolean(),
      is_image_less_product: Joi.boolean(),
      is_physical: Joi.boolean(),
      is_set: Joi.boolean(),
      item_code: Joi.string().allow(""),
      item_type: Joi.string().allow(""),
      l3_mapping: Joi.array().items(Joi.string().allow("")),
      media: Joi.array().items(CatalogModel.Media()),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      moq: Joi.any(),
      multi_size: Joi.boolean(),
      name: Joi.string().allow(""),
      net_quantity: CatalogModel.NetQuantityResponse(),
      no_of_boxes: Joi.number(),
      pending: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      product_group_tag: Joi.array().items(Joi.string().allow("")),
      product_publish: CatalogModel.ProductPublish1(),
      return_config: CatalogModel.ReturnConfigResponse(),
      short_description: Joi.string().allow(""),
      size_guide: Joi.string().allow(""),
      sizes: Joi.array().items(Joi.any()),
      slug: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      tax_identifier: Joi.any(),
      teaser_tag: Joi.any(),
      template_tag: Joi.string().allow(""),
      trader: Joi.array().items(CatalogModel.Trader()),
      uid: Joi.number(),
      variant_group: Joi.any(),
      variant_media: Joi.any(),
      variants: Joi.any(),
      verified_by: CatalogModel.VerifiedBy(),
      verified_on: Joi.string().allow(""),
    });
  }
  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),
      min: Joi.number().required(),
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
  static ProductSortOn() {
    return Joi.object({
      is_selected: Joi.boolean(),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static ProductTagsViewResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ProductTemplate() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),
      categories: Joi.array().items(Joi.string().allow("")),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      departments: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_expirable: Joi.boolean().required(),
      is_physical: Joi.boolean().required(),
      logo: Joi.string().allow(""),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow("").required(),
      tag: Joi.string().allow(""),
    });
  }
  static ProductTemplateDownloadsExport() {
    return Joi.object({
      filters: CatalogModel.ProductTemplateExportFilterRequest(),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").allow(null),
    });
  }
  static ProductTemplateExportFilterRequest() {
    return Joi.object({
      brands: Joi.array().items(Joi.string().allow("")),
      catalogue_types: Joi.array().items(Joi.string().allow("")).required(),
      from_date: Joi.string().allow(""),
      templates: Joi.array().items(Joi.string().allow("")).required(),
      to_date: Joi.string().allow(""),
    });
  }
  static ProductTemplateExportResponse() {
    return Joi.object({
      completed_on: Joi.string().allow(""),
      created_by: CatalogModel.UserInfo1(),
      filters: Joi.any(),
      modified_on: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      seller_id: Joi.number().required(),
      status: Joi.string().allow(""),
      task_id: Joi.string().allow("").required(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static ProductVariants() {
    return Joi.object({
      brand_uid: Joi.number(),
      category_uid: Joi.number(),
      item_code: Joi.string().allow(""),
      media: Joi.array().items(CatalogModel.Media()),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static ProductVariantsResponse() {
    return Joi.object({
      page: CatalogModel.Page(),
      variants: Joi.array().items(CatalogModel.ProductVariants()),
    });
  }
  static Properties() {
    return Joi.object({
      brand_uid: Joi.any(),
      category_slug: Joi.any(),
      command: Joi.any(),
      country_of_origin: Joi.any(),
      currency: Joi.any(),
      custom_order: Joi.any(),
      description: Joi.any(),
      highlights: Joi.any(),
      hsn_code: Joi.any(),
      is_active: Joi.any(),
      is_dependent: Joi.any(),
      item_code: Joi.any(),
      item_type: Joi.any(),
      media: Joi.any(),
      multi_size: Joi.any(),
      name: Joi.any(),
      no_of_boxes: Joi.any(),
      product_group_tag: Joi.any(),
      product_publish: Joi.any(),
      return_config: Joi.any(),
      short_description: Joi.any(),
      size_guide: Joi.any(),
      sizes: Joi.any(),
      slug: Joi.any(),
      tags: Joi.any(),
      teaser_tag: Joi.any(),
      trader: Joi.any(),
      trader_type: Joi.any(),
      variants: Joi.any(),
    });
  }
  static PTErrorResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      errors: Joi.any(),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      status: Joi.number(),
    });
  }
  static Quantities() {
    return Joi.object({
      damaged: CatalogModel.QuantityBase(),
      not_available: CatalogModel.QuantityBase(),
      order_committed: CatalogModel.QuantityBase(),
      sellable: CatalogModel.QuantityBase(),
    });
  }
  static QuantitiesArticle() {
    return Joi.object({
      damaged: CatalogModel.Quantity(),
      not_available: CatalogModel.Quantity(),
      order_committed: CatalogModel.Quantity(),
      sellable: CatalogModel.Quantity(),
    });
  }
  static Quantity() {
    return Joi.object({
      count: Joi.number(),
    });
  }
  static QuantityBase() {
    return Joi.object({
      count: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }
  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().required(),
      time: Joi.number().required(),
      unit: Joi.string().allow("").required(),
    });
  }
  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
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
  static ReturnConfigResponse() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }
  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.any().required(),
      sort_on: Joi.string().allow("").required(),
    });
  }
  static SecondLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogModel.Action(),
      banners: CatalogModel.ImageUrls(),
      childs: Joi.array().items(CatalogModel.ThirdLevelChild()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static SellerPhoneNumber() {
    return Joi.object({
      country_code: Joi.number().required(),
      number: Joi.string().allow("").required(),
    });
  }
  static SEOData() {
    return Joi.object({
      description: Joi.any(),
      title: Joi.any(),
    });
  }
  static SeoDetail() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static SetSize() {
    return Joi.object({
      pieces: Joi.number().required(),
      size: Joi.string().allow("").required(),
    });
  }
  static SingleCategoryResponse() {
    return Joi.object({
      data: CatalogModel.Category(),
    });
  }
  static SingleProductResponse() {
    return Joi.object({
      data: CatalogModel.ProductSchemaV2(),
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
  static SizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(CatalogModel.SetSize()).required(),
    });
  }
  static SizeGuideResponse() {
    return Joi.object({
      active: Joi.boolean(),
      brand_id: Joi.number(),
      company_id: Joi.number(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      guide: Joi.any(),
      id: Joi.string().allow(""),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static StoreAssignResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      article_assignment: CatalogModel.ArticleAssignment1().required(),
      company_id: Joi.number(),
      group_id: Joi.string().allow(""),
      index: Joi.number(),
      item_id: Joi.number().required(),
      meta: Joi.any(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      quantity: Joi.number().required(),
      s_city: Joi.string().allow(""),
      size: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
      store_id: Joi.number(),
      store_pincode: Joi.number(),
      strategy_wise_listing: Joi.array().items(Joi.any()),
      uid: Joi.string().allow(""),
    });
  }
  static StoreDetail() {
    return Joi.object({
      additional_contacts: Joi.array().items(Joi.any()),
      address: Joi.any(),
      company_id: Joi.number(),
      created_on: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      documents: Joi.array().items(Joi.any()),
      manager: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      timing: Joi.any(),
      uid: Joi.number(),
    });
  }
  static StoreMeta() {
    return Joi.object({
      id: Joi.number().required(),
    });
  }
  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static SuccessResponse1() {
    return Joi.object({
      success: Joi.boolean(),
      uid: Joi.number(),
    });
  }
  static TaxIdentifier() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),
      hsn_code_id: Joi.string().allow(""),
      reporting_hsn: Joi.string().allow(""),
    });
  }
  static TaxSlab() {
    return Joi.object({
      cess: Joi.number(),
      effective_date: Joi.string().allow("").required(),
      rate: Joi.number().required(),
      threshold: Joi.number().required(),
    });
  }
  static TeaserTag() {
    return Joi.object({
      tag: Joi.string().allow("").allow(null),
      url: Joi.string().allow("").allow(null),
    });
  }
  static TemplateDetails() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string().allow("")),
      categories: Joi.array().items(Joi.string().allow("")),
      departments: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_expirable: Joi.boolean().required(),
      is_physical: Joi.boolean().required(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
      slug: Joi.string().allow("").required(),
      tag: Joi.string().allow(""),
    });
  }
  static TemplatesResponse() {
    return Joi.object({
      items: CatalogModel.ProductTemplate(),
      page: CatalogModel.Page(),
    });
  }
  static TemplatesValidationResponse() {
    return Joi.object({
      data: CatalogModel.TemplateValidationData(),
      template_details: CatalogModel.TemplateDetails(),
    });
  }
  static TemplateValidationData() {
    return Joi.object({
      global_validation: CatalogModel.GlobalValidation(),
      template_validation: Joi.any(),
    });
  }
  static ThirdLevelChild() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CatalogModel.Action(),
      banners: CatalogModel.ImageUrls(),
      childs: Joi.array().items(Joi.any()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Trader() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),
      name: Joi.any().required(),
      type: Joi.string().allow(""),
    });
  }
  static Trader1() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")).required(),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }
  static Trader2() {
    return Joi.object({
      address: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static UpdateCollection() {
    return Joi.object({
      _custom_json: Joi.any(),
      _locale_language: Joi.any(),
      _schedule: CatalogModel.CollectionSchedule(),
      allow_facets: Joi.boolean(),
      allow_sort: Joi.boolean(),
      badge: CatalogModel.CollectionBadge(),
      banners: CatalogModel.CollectionBanner(),
      description: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_visible: Joi.boolean(),
      logo: CatalogModel.CollectionImage(),
      meta: Joi.any(),
      modified_by: CatalogModel.UserInfo(),
      name: Joi.string().allow(""),
      priority: Joi.number(),
      published: Joi.boolean(),
      query: Joi.array().items(CatalogModel.CollectionQuery()),
      seo: CatalogModel.SeoDetail(),
      slug: Joi.string().allow(""),
      sort_on: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      visible_facets_keys: Joi.array().items(Joi.string().allow("")),
    });
  }
  static UpdatedResponse() {
    return Joi.object({
      items_not_updated: Joi.array().items(Joi.number()),
      message: Joi.string().allow(""),
    });
  }
  static UserCommon() {
    return Joi.object({
      company_id: Joi.number(),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
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
  static UserDetail1() {
    return Joi.object({
      full_name: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
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
  static UserInfo1() {
    return Joi.object({
      email: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static UserSerializer() {
    return Joi.object({
      _id: Joi.string().allow(""),
      contact: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static UserSerializer2() {
    return Joi.object({
      contact: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static ValidateIdentifier() {
    return Joi.object({
      gtin_type: Joi.string().allow("").required(),
      gtin_value: Joi.string().allow("").required(),
      primary: Joi.boolean(),
    });
  }
  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }
  static ValidateSizeGuide() {
    return Joi.object({
      active: Joi.boolean(),
      brand_id: Joi.number(),
      company_id: Joi.number(),
      created_by: Joi.any(),
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      guide: CatalogModel.Guide(),
      id: Joi.string().allow(""),
      image: Joi.string().allow(""),
      modified_by: Joi.any(),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      subtitle: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }
  static VerifiedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static WeightResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),
      shipping: Joi.number().required(),
      unit: Joi.string().allow("").required(),
    });
  }
  static WeightResponse1() {
    return Joi.object({
      shipping: Joi.number(),
      unit: Joi.string().allow(""),
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

      "return-policy",

      "order-status"
    );
  }
}
module.exports = CatalogModel;
