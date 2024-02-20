export = CatalogPlatformApplicationValidator;
/**
 * @typedef AddCollectionItemsParam
 * @property {string} id - A `id` is a unique identifier of a collection.
 * @property {CatalogPlatformModel.CollectionItemUpdateSchema} body
 */
/**
 * @typedef AddProductsInPriceFactoryByZoneIdParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} zoneId - An `zone_id` is a unique identifier for a
 *   particular price factory zone.
 * @property {CatalogPlatformModel.CreateAppPriceFactoryProductRequest} body
 */
/**
 * @typedef CreateAppCategoryReturnConfigurationParam
 * @property {CatalogPlatformModel.BaseAppCategoryReturnConfig} body
 */
/**
 * @typedef CreateAppPriceFactoryParam
 * @property {CatalogPlatformModel.CreateAppPriceFactoryRequest} body
 */
/**
 * @typedef CreateAppReturnConfigurationParam
 * @property {CatalogPlatformModel.CreateUpdateAppReturnConfig} body
 */
/**
 * @typedef CreateAutocompleteSettingsParam
 * @property {CatalogPlatformModel.AutocompleteRequestSchema} body
 */
/**
 * @typedef CreateCollectionParam
 * @property {CatalogPlatformModel.CreateCollection} body
 */
/**
 * @typedef CreateConfigurationByTypeParam
 * @property {string} type - Type can be brands, categories etc.
 * @property {CatalogPlatformModel.AppConfiguration} body
 */
/**
 * @typedef CreateConfigurationProductListingParam
 * @property {CatalogPlatformModel.AppConfiguration} body
 */
/**
 * @typedef CreateCustomAutocompleteRuleParam
 * @property {CatalogPlatformModel.CreateAutocompleteKeyword} body
 */
/**
 * @typedef CreateCustomKeywordParam
 * @property {CatalogPlatformModel.CreateSearchKeyword} body
 */
/**
 * @typedef CreateGroupConfigurationParam
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular group configuration type.
 * @property {CatalogPlatformModel.AppConfigurationCreateDetail} body
 */
/**
 * @typedef CreateListingConfigurationParam
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular listing configuration type.
 * @property {CatalogPlatformModel.AppConfigurationsFilter} body
 */
/**
 * @typedef CreateMerchandisingRuleBoostActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.GetMerchandisingRuleBoostAction} body
 */
/**
 * @typedef CreateMerchandisingRuleBuryActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.GetMerchandisingRuleBuryAction} body
 */
/**
 * @typedef CreateMerchandisingRuleHideActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.HideRequest} body
 */
/**
 * @typedef CreateMerchandisingRulePinActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.PinRequest} body
 */
/**
 * @typedef CreateMerchandisingRuleQueryParam
 * @property {CatalogPlatformModel.MerchandisingRuleQueryPost} body
 */
/**
 * @typedef CreateProductPriceFactoryBulkJobParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest} body
 */
/**
 * @typedef CreateSearchConfigurationParam
 * @property {CatalogPlatformModel.CreateSearchConfigurationRequest} body
 */
/**
 * @typedef CreateSearchRerankParam
 * @property {CatalogPlatformModel.CreateSearchRerankRequest} body
 */
/**
 * @typedef DeleteAppCategoryReturnConfigurationParam
 * @property {CatalogPlatformModel.DeleteAppCategoryReturnConfig} body
 */
/**
 * @typedef DeleteAutocompleteKeywordParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 */
/**
 * @typedef DeleteCollectionParam
 * @property {string} id - A `id` is a unique identifier of a collection.
 */
/**
 * @typedef DeleteGroupConfigurationParam
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular group configuration type.
 * @property {string} groupSlug - A `group_slug` is a unique identifier of a
 *   particular configuration.
 */
/**
 * @typedef DeleteListingConfigurationParam
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular listing configuration type.
 * @property {string} configId - A `config_id` is a unique identifier of a
 *   particular configuration.
 */
/** @typedef DeleteSearchConfigurationParam */
/**
 * @typedef DeleteSearchKeywordsParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 */
/**
 * @typedef DeleteSearchRerankConfigurationParam
 * @property {string} id - An `id` is the identifier for a particular search
 *   rerank configuration. channel.
 */
/**
 * @typedef EditAppPriceFactoryParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {CatalogPlatformModel.EditAppPriceFactoryRequest} body
 */
/**
 * @typedef GetAllCollectionsParam
 * @property {string} [q] - Get collection list filtered by q string,
 * @property {string} [scheduleStatus] - Get collection list filtered by scheduled status,
 * @property {string} [type] - Type of the collections
 * @property {string[]} [tag] - Each response will contain next_id param, which
 *   should be sent back to make pagination work.
 * @property {boolean} [isActive] - Get collections filtered by active status.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef GetAllSearchKeywordParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with words name.Use this parameter to
 *   search keywords by words.
 * @property {boolean} [isActive] - Can query for keywords based on whether they
 *   are active or inactive.
 */
/** @typedef GetAppCategoryReturnConfigParam */
/**
 * @typedef GetAppInventoryParam
 * @property {number[]} [itemIds] - The Item Id of the product.
 * @property {number[]} [storeIds] - The Store Id of products to fetch inventory.
 * @property {number[]} [brandIds] - The Brand Id of products to fetch inventory.
 * @property {string[]} [sellerIdentifiers] - Unique seller_identifier of the product.
 * @property {string} [timestamp] - Timestamp in UTC format (2020-07-23T10:27:50Z)
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 */
/**
 * @typedef GetAppLocationsParam
 * @property {string} [storeType] - Helps to sort the location list on the basis
 *   of location type.
 * @property {string} [uid] - Helps to sort the location list on the basis of uid list.
 * @property {string} [q] - Query that is to be searched.
 * @property {string} [stage] - To filter companies on basis of verified or
 *   unverified companies.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 20.
 * @property {string[]} [tags] - Get locations filtered by tags.
 * @property {string[]} [storeTypes] - Get locations filtered by store types.
 * @property {number[]} [companyUids] - Filter stores by company IDs available
 *   in the application.
 */
/**
 * @typedef GetAppPriceFactoriesParam
 * @property {boolean} [isActive] - Gets price factory filtered by active status.
 * @property {string} [factoryTypeId] - Gets price factory filtered by factory_type_id.
 * @property {string} [code] - Gets price factory filtered by pricezone code.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef GetAppPriceFactoryParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 */
/**
 * @typedef GetAppProductParam
 * @property {number} itemId - Product id for a particular product.
 */
/**
 * @typedef GetAppProductsParam
 * @property {number[]} [brandIds] - Get multiple products filtered by Brand Ids
 * @property {number[]} [categoryIds] - Get multiple products filtered by Category Ids
 * @property {number[]} [departmentIds] - Get multiple products filtered by Department Ids
 * @property {string[]} [tags] - Get multiple products filtered by tags
 * @property {number[]} [itemIds] - Get multiple products filtered by Item Ids
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {string} [q] - Search with Item Code, Name, Slug or Identifier.
 */
/** @typedef GetAppReturnConfigurationParam */
/**
 * @typedef GetAppicationProductsParam
 * @property {string} [q] - The search query. This can be a partial or complete
 *   name of a either a product, brand or category
 * @property {string} [f] - The search filter parameters. All the parameter
 *   filtered from filter parameters will be passed in **f** parameter in this
 *   format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
 * @property {string} [c] - The search filter parameters for collection items.
 *   All the parameter filtered from filter parameters will be passed in **c**
 *   parameter in this format.
 *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
 * @property {boolean} [filters] - Pass `filters` parameter to fetch the filter
 *   details. This flag is used to fetch all filters
 * @property {boolean} [isDependent] - This query parameter is used to get the
 *   dependent products in the listing.
 * @property {string} [sortOn] - The order to sort the list of products on. The
 *   supported sort parameters are popularity, price, redemption and discount in
 *   either ascending or descending order. See the supported values below.
 * @property {string} [pageId] - Each response will contain **page_id** param,
 *   which should be sent back to make pagination work.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {number} [pageNo] - If page_type is number then pass it to fetch
 *   page items. Default is 1.
 * @property {string} [pageType] - For pagination type should be cursor or
 *   number. Default is cursor.
 * @property {string[]} [itemIds] - Item Ids of product
 */
/**
 * @typedef GetApplicationBrandListingParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with brand name.Use this parameter to
 *   search brands by brand name.
 */
/**
 * @typedef GetApplicationBrandsParam
 * @property {string} [department] - The name of the department. Use this
 *   parameter to filter products by a particular department. See below the list
 *   of available departments. You can retrieve available departments from the
 *   **v1.0/departments/** API
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with brand name.Use this parameter to
 *   search brands by brand name.
 * @property {number} [brandId] - Helps to sort the brands list on the basis of uid list.
 */
/**
 * @typedef GetApplicationCategoryListingParam
 * @property {number} [departmentId] - A `department_id` is a unique identifier
 *   for a particular department.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with brand name.Use this parameter to
 *   search brands by brand name.
 */
/**
 * @typedef GetApplicationDepartmentListingParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with brand name.Use this parameter to
 *   search department by name.
 */
/**
 * @typedef GetAutocompleteConfigParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with words name.Use this parameter to
 *   search keywords by words.
 * @property {boolean} [isActive] - Can query for keywords based on whether they
 *   are active or inactive.
 */
/**
 * @typedef GetAutocompleteKeywordDetailParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to retrieve.
 */
/**
 * @typedef GetAutocompletePreviewParam
 * @property {string} [q] - Get suggestions related to `q` string.
 * @property {number} [categorySuggestion] - For getting related category suggestions.
 * @property {number} [brandSuggestion] - For getting related brand suggestions.
 * @property {number} [collectionSuggestion] - For getting collection suggestions.
 * @property {number} [productSuggestion] - For getting product suggestions.
 * @property {number} [querySuggestion] - For getting query suggestions.
 */
/** @typedef GetAutocompleteSettingsParam */
/** @typedef GetCatalogConfigurationParam */
/**
 * @typedef GetCatalogInsightsParam
 * @property {string} [brand] - Brand slug
 */
/**
 * @typedef GetCategoriesParam
 * @property {string} [department] - The name of the department. Use this
 *   parameter to filter products by a particular department. See below the list
 *   of available departments. You can retrieve available departments from the
 *   **v1.0/departments/** API
 */
/**
 * @typedef GetCollectionDetailParam
 * @property {string} slug - A `slug` is a human readable, URL friendly unique
 *   identifier of an object. Pass the `slug` of the collection which you want
 *   to retrieve.
 */
/**
 * @typedef GetConfigurationByTypeParam
 * @property {string} type - Type can be brands, categories etc.
 */
/**
 * @typedef GetConfigurationMetadataParam
 * @property {string} configType - A `config_type` is an identifier that defines
 *   a specific type of configuration.
 * @property {string} [templateSlug] - Get configuration list filtered by
 *   `template_slug` string. This is for the details and comparision groups.
 */
/** @typedef GetConfigurationsParam */
/**
 * @typedef GetConfigurationsFilterMetadataParam
 * @property {string} filter - Filter whose values needs to be fetched.
 */
/** @typedef GetDepartmentsParam */
/**
 * @typedef GetDiscountedInventoryBySizeIdentifierParam
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {number} sizeIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {number[]} [locationIds] - Search by store ids.
 */
/**
 * @typedef GetGroupConfigurationsParam
 * @property {string} configType - A `config_type` is an identifier that defines
 *   a specific type of configuration.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [search] - Get configuration list filtered by `search` string.
 * @property {string} [templateSlug] - Get configuration list filtered by
 *   `template_slug` string. This is for the details and comparision groups.
 */
/**
 * @typedef GetListingConfigurationsParam
 * @property {string} configType - A `config_type` is an identifier that defines
 *   a specific type of configuration.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [search] - Get configuration list filtered by `search` string.
 * @property {number[]} [uids] - Only for categories config type, Get
 *   configuration list filtered by `uids`.
 */
/**
 * @typedef GetLivePreviewParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {string} [searchKeyword] - A sample query that can be used to get a
 *   live preview of the merchandising rule.
 */
/**
 * @typedef GetMerchandisingQueryParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 */
/**
 * @typedef GetMerchandisingRuleBoostActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 */
/**
 * @typedef GetMerchandisingRuleBuryActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 */
/**
 * @typedef GetMerchandisingRuleHideActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 */
/**
 * @typedef GetMerchandisingRulePinActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 */
/**
 * @typedef GetMerchandisingRulesParam
 * @property {string} [pageId] - Each response will contain next_id param, which
 *   should be sent back to make pagination work.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef GetProductDetailBySlugParam
 * @property {string} slug - The unique identifier of a product. i.e; `slug` of
 *   a product or `uid` of a product. You can retrieve these from the APIs that
 *   list products like **v1.0/products/**
 */
/**
 * @typedef GetProductsInPriceFactoryByZoneIdParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} zoneId - An `zone_id` is a unique identifier for a
 *   particular price factory zone.
 * @property {boolean} [itemId] - Gets price factory filtered by item_id.
 * @property {string} [sellerIdentifier] - Gets price factory filtered by
 *   seller_identifier.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/** @typedef GetQueryFiltersParam */
/** @typedef GetSearchConfigurationParam */
/**
 * @typedef GetSearchKeywordsParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to retrieve.
 */
/** @typedef GetSearchRerankParam */
/**
 * @typedef GetSearchRerankDetailParam
 * @property {string} id - An `id` is the identifier for a particular search
 *   rerank configuration. channel.
 */
/**
 * @typedef PollProductPriceFactoryBulkJobParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} jobId - A `job_id` is a unique identifier for a particular bulk job.
 */
/**
 * @typedef ProcessProductPriceFactoryBulkJobParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} jobId - A `job_id` is a unique identifier for a particular bulk job.
 * @property {CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest} body
 */
/**
 * @typedef UpdateAllowSingleParam
 * @property {CatalogPlatformModel.AllowSingleRequest} body
 */
/**
 * @typedef UpdateAppBrandParam
 * @property {number} brandUid - Brand id for which the custom_json is associated.
 * @property {CatalogPlatformModel.ApplicationBrandJson} body
 */
/**
 * @typedef UpdateAppCategoryParam
 * @property {number} categoryUid - Category id for which the custom_json is associated.
 * @property {CatalogPlatformModel.ApplicationCategoryJson} body
 */
/**
 * @typedef UpdateAppCategoryReturnConfigurationParam
 * @property {CatalogPlatformModel.BaseAppCategoryReturnConfig} body
 */
/**
 * @typedef UpdateAppDepartmentParam
 * @property {number} departmentUid - Department id for which the custom_json is
 *   associated.
 * @property {CatalogPlatformModel.ApplicationDepartmentJson} body
 */
/**
 * @typedef UpdateAppLocationParam
 * @property {number} storeUid - Store id for which the custom_json is associated.
 * @property {CatalogPlatformModel.ApplicationStoreJson} body
 */
/**
 * @typedef UpdateAppProductParam
 * @property {number} itemId - Product id for which the custom_meta is associated.
 * @property {CatalogPlatformModel.ApplicationItemMeta} body
 */
/**
 * @typedef UpdateAppReturnConfigurationParam
 * @property {CatalogPlatformModel.CreateUpdateAppReturnConfig} body
 */
/**
 * @typedef UpdateAutocompleteKeywordParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 * @property {CatalogPlatformModel.CreateAutocompleteKeyword} body
 */
/**
 * @typedef UpdateAutocompleteSettingsParam
 * @property {string} id - An `id` is a unique identifier for a particular
 *   autocomplete settings config.
 * @property {CatalogPlatformModel.AutocompleteRequestSchema} body
 */
/**
 * @typedef UpdateCollectionParam
 * @property {string} id - A `id` is a unique identifier of a collection.
 * @property {CatalogPlatformModel.UpdateCollection} body
 */
/**
 * @typedef UpdateDefaultSortParam
 * @property {CatalogPlatformModel.DefaultKeyRequest} body
 */
/**
 * @typedef UpdateGroupConfigurationParam
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular group configuration type.
 * @property {string} groupSlug - A `group_slug` is a unique identifier of a
 *   particular configuration.
 * @property {CatalogPlatformModel.AppConfigurationDetail} body
 */
/**
 * @typedef UpdateListingConfigurationParam
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular listing configuration type.
 * @property {string} configId - A `config_id` is a unique identifier of a
 *   particular configuration.
 * @property {CatalogPlatformModel.AppConfigurationsFilterResponse} body
 */
/**
 * @typedef UpdateMerchandisingRuleBoostActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.GetMerchandisingRuleBoostAction} body
 */
/**
 * @typedef UpdateMerchandisingRuleBuryActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.GetMerchandisingRuleBuryAction} body
 */
/**
 * @typedef UpdateMerchandisingRuleHideActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.HideRequest} body
 */
/**
 * @typedef UpdateMerchandisingRulePinActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.PinRequest} body
 */
/**
 * @typedef UpdateMerchandisingRuleQueryParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.MerchandisingRuleQueryPost} body
 */
/**
 * @typedef UpdateProductPriceByZoneInPriceFactoryParam
 * @property {string} id - A `id` is a unique identifier for a particular price factory.
 * @property {number} itemId - A `item_id` is a unique identifier for a
 *   particular product.
 * @property {string} zoneId - A `zone_id` is a unique identifier for a particular zone.
 * @property {CatalogPlatformModel.UpdateAppPriceFactoryProductRequest} body
 */
/**
 * @typedef UpdateSearchConfigurationParam
 * @property {CatalogPlatformModel.UpdateSearchConfigurationRequest} body
 */
/**
 * @typedef UpdateSearchKeywordsParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 * @property {CatalogPlatformModel.CreateSearchKeyword} body
 */
/**
 * @typedef UpdateSearchRerankConfigurationParam
 * @property {string} id - An `id` is the identifier for a particular search
 *   rerank configuration. channel.
 * @property {CatalogPlatformModel.UpdateSearchRerankRequest} body
 */
/**
 * @typedef ValidateProductPriceFactoryBulkJobParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} jobId - A `job_id` is a unique identifier for a particular bulk job.
 * @property {CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest} body
 */
declare class CatalogPlatformApplicationValidator {
    /** @returns {AddCollectionItemsParam} */
    static addCollectionItems(): AddCollectionItemsParam;
    /** @returns {AddProductsInPriceFactoryByZoneIdParam} */
    static addProductsInPriceFactoryByZoneId(): AddProductsInPriceFactoryByZoneIdParam;
    /** @returns {CreateAppCategoryReturnConfigurationParam} */
    static createAppCategoryReturnConfiguration(): CreateAppCategoryReturnConfigurationParam;
    /** @returns {CreateAppPriceFactoryParam} */
    static createAppPriceFactory(): CreateAppPriceFactoryParam;
    /** @returns {CreateAppReturnConfigurationParam} */
    static createAppReturnConfiguration(): CreateAppReturnConfigurationParam;
    /** @returns {CreateAutocompleteSettingsParam} */
    static createAutocompleteSettings(): CreateAutocompleteSettingsParam;
    /** @returns {CreateCollectionParam} */
    static createCollection(): CreateCollectionParam;
    /** @returns {CreateConfigurationByTypeParam} */
    static createConfigurationByType(): CreateConfigurationByTypeParam;
    /** @returns {CreateConfigurationProductListingParam} */
    static createConfigurationProductListing(): CreateConfigurationProductListingParam;
    /** @returns {CreateCustomAutocompleteRuleParam} */
    static createCustomAutocompleteRule(): CreateCustomAutocompleteRuleParam;
    /** @returns {CreateCustomKeywordParam} */
    static createCustomKeyword(): CreateCustomKeywordParam;
    /** @returns {CreateGroupConfigurationParam} */
    static createGroupConfiguration(): CreateGroupConfigurationParam;
    /** @returns {CreateListingConfigurationParam} */
    static createListingConfiguration(): CreateListingConfigurationParam;
    /** @returns {CreateMerchandisingRuleBoostActionParam} */
    static createMerchandisingRuleBoostAction(): CreateMerchandisingRuleBoostActionParam;
    /** @returns {CreateMerchandisingRuleBuryActionParam} */
    static createMerchandisingRuleBuryAction(): CreateMerchandisingRuleBuryActionParam;
    /** @returns {CreateMerchandisingRuleHideActionParam} */
    static createMerchandisingRuleHideAction(): CreateMerchandisingRuleHideActionParam;
    /** @returns {CreateMerchandisingRulePinActionParam} */
    static createMerchandisingRulePinAction(): CreateMerchandisingRulePinActionParam;
    /** @returns {CreateMerchandisingRuleQueryParam} */
    static createMerchandisingRuleQuery(): CreateMerchandisingRuleQueryParam;
    /** @returns {CreateProductPriceFactoryBulkJobParam} */
    static createProductPriceFactoryBulkJob(): CreateProductPriceFactoryBulkJobParam;
    /** @returns {CreateSearchConfigurationParam} */
    static createSearchConfiguration(): CreateSearchConfigurationParam;
    /** @returns {CreateSearchRerankParam} */
    static createSearchRerank(): CreateSearchRerankParam;
    /** @returns {DeleteAppCategoryReturnConfigurationParam} */
    static deleteAppCategoryReturnConfiguration(): DeleteAppCategoryReturnConfigurationParam;
    /** @returns {DeleteAutocompleteKeywordParam} */
    static deleteAutocompleteKeyword(): DeleteAutocompleteKeywordParam;
    /** @returns {DeleteCollectionParam} */
    static deleteCollection(): DeleteCollectionParam;
    /** @returns {DeleteGroupConfigurationParam} */
    static deleteGroupConfiguration(): DeleteGroupConfigurationParam;
    /** @returns {DeleteListingConfigurationParam} */
    static deleteListingConfiguration(): DeleteListingConfigurationParam;
    /** @returns {DeleteSearchConfigurationParam} */
    static deleteSearchConfiguration(): any;
    /** @returns {DeleteSearchKeywordsParam} */
    static deleteSearchKeywords(): DeleteSearchKeywordsParam;
    /** @returns {DeleteSearchRerankConfigurationParam} */
    static deleteSearchRerankConfiguration(): DeleteSearchRerankConfigurationParam;
    /** @returns {EditAppPriceFactoryParam} */
    static editAppPriceFactory(): EditAppPriceFactoryParam;
    /** @returns {GetAllCollectionsParam} */
    static getAllCollections(): GetAllCollectionsParam;
    /** @returns {GetAllSearchKeywordParam} */
    static getAllSearchKeyword(): GetAllSearchKeywordParam;
    /** @returns {GetAppCategoryReturnConfigParam} */
    static getAppCategoryReturnConfig(): any;
    /** @returns {GetAppInventoryParam} */
    static getAppInventory(): GetAppInventoryParam;
    /** @returns {GetAppLocationsParam} */
    static getAppLocations(): GetAppLocationsParam;
    /** @returns {GetAppPriceFactoriesParam} */
    static getAppPriceFactories(): GetAppPriceFactoriesParam;
    /** @returns {GetAppPriceFactoryParam} */
    static getAppPriceFactory(): GetAppPriceFactoryParam;
    /** @returns {GetAppProductParam} */
    static getAppProduct(): GetAppProductParam;
    /** @returns {GetAppProductsParam} */
    static getAppProducts(): GetAppProductsParam;
    /** @returns {GetAppReturnConfigurationParam} */
    static getAppReturnConfiguration(): any;
    /** @returns {GetAppicationProductsParam} */
    static getAppicationProducts(): GetAppicationProductsParam;
    /** @returns {GetApplicationBrandListingParam} */
    static getApplicationBrandListing(): GetApplicationBrandListingParam;
    /** @returns {GetApplicationBrandsParam} */
    static getApplicationBrands(): GetApplicationBrandsParam;
    /** @returns {GetApplicationCategoryListingParam} */
    static getApplicationCategoryListing(): GetApplicationCategoryListingParam;
    /** @returns {GetApplicationDepartmentListingParam} */
    static getApplicationDepartmentListing(): GetApplicationDepartmentListingParam;
    /** @returns {GetAutocompleteConfigParam} */
    static getAutocompleteConfig(): GetAutocompleteConfigParam;
    /** @returns {GetAutocompleteKeywordDetailParam} */
    static getAutocompleteKeywordDetail(): GetAutocompleteKeywordDetailParam;
    /** @returns {GetAutocompletePreviewParam} */
    static getAutocompletePreview(): GetAutocompletePreviewParam;
    /** @returns {GetAutocompleteSettingsParam} */
    static getAutocompleteSettings(): any;
    /** @returns {GetCatalogConfigurationParam} */
    static getCatalogConfiguration(): any;
    /** @returns {GetCatalogInsightsParam} */
    static getCatalogInsights(): GetCatalogInsightsParam;
    /** @returns {GetCategoriesParam} */
    static getCategories(): GetCategoriesParam;
    /** @returns {GetCollectionDetailParam} */
    static getCollectionDetail(): GetCollectionDetailParam;
    /** @returns {GetConfigurationByTypeParam} */
    static getConfigurationByType(): GetConfigurationByTypeParam;
    /** @returns {GetConfigurationMetadataParam} */
    static getConfigurationMetadata(): GetConfigurationMetadataParam;
    /** @returns {GetConfigurationsParam} */
    static getConfigurations(): any;
    /** @returns {GetConfigurationsFilterMetadataParam} */
    static getConfigurationsFilterMetadata(): GetConfigurationsFilterMetadataParam;
    /** @returns {GetDepartmentsParam} */
    static getDepartments(): any;
    /** @returns {GetDiscountedInventoryBySizeIdentifierParam} */
    static getDiscountedInventoryBySizeIdentifier(): GetDiscountedInventoryBySizeIdentifierParam;
    /** @returns {GetGroupConfigurationsParam} */
    static getGroupConfigurations(): GetGroupConfigurationsParam;
    /** @returns {GetListingConfigurationsParam} */
    static getListingConfigurations(): GetListingConfigurationsParam;
    /** @returns {GetLivePreviewParam} */
    static getLivePreview(): GetLivePreviewParam;
    /** @returns {GetMerchandisingQueryParam} */
    static getMerchandisingQuery(): GetMerchandisingQueryParam;
    /** @returns {GetMerchandisingRuleBoostActionParam} */
    static getMerchandisingRuleBoostAction(): GetMerchandisingRuleBoostActionParam;
    /** @returns {GetMerchandisingRuleBuryActionParam} */
    static getMerchandisingRuleBuryAction(): GetMerchandisingRuleBuryActionParam;
    /** @returns {GetMerchandisingRuleHideActionParam} */
    static getMerchandisingRuleHideAction(): GetMerchandisingRuleHideActionParam;
    /** @returns {GetMerchandisingRulePinActionParam} */
    static getMerchandisingRulePinAction(): GetMerchandisingRulePinActionParam;
    /** @returns {GetMerchandisingRulesParam} */
    static getMerchandisingRules(): GetMerchandisingRulesParam;
    /** @returns {GetProductDetailBySlugParam} */
    static getProductDetailBySlug(): GetProductDetailBySlugParam;
    /** @returns {GetProductsInPriceFactoryByZoneIdParam} */
    static getProductsInPriceFactoryByZoneId(): GetProductsInPriceFactoryByZoneIdParam;
    /** @returns {GetQueryFiltersParam} */
    static getQueryFilters(): any;
    /** @returns {GetSearchConfigurationParam} */
    static getSearchConfiguration(): any;
    /** @returns {GetSearchKeywordsParam} */
    static getSearchKeywords(): GetSearchKeywordsParam;
    /** @returns {GetSearchRerankParam} */
    static getSearchRerank(): any;
    /** @returns {GetSearchRerankDetailParam} */
    static getSearchRerankDetail(): GetSearchRerankDetailParam;
    /** @returns {PollProductPriceFactoryBulkJobParam} */
    static pollProductPriceFactoryBulkJob(): PollProductPriceFactoryBulkJobParam;
    /** @returns {ProcessProductPriceFactoryBulkJobParam} */
    static processProductPriceFactoryBulkJob(): ProcessProductPriceFactoryBulkJobParam;
    /** @returns {UpdateAllowSingleParam} */
    static updateAllowSingle(): UpdateAllowSingleParam;
    /** @returns {UpdateAppBrandParam} */
    static updateAppBrand(): UpdateAppBrandParam;
    /** @returns {UpdateAppCategoryParam} */
    static updateAppCategory(): UpdateAppCategoryParam;
    /** @returns {UpdateAppCategoryReturnConfigurationParam} */
    static updateAppCategoryReturnConfiguration(): UpdateAppCategoryReturnConfigurationParam;
    /** @returns {UpdateAppDepartmentParam} */
    static updateAppDepartment(): UpdateAppDepartmentParam;
    /** @returns {UpdateAppLocationParam} */
    static updateAppLocation(): UpdateAppLocationParam;
    /** @returns {UpdateAppProductParam} */
    static updateAppProduct(): UpdateAppProductParam;
    /** @returns {UpdateAppReturnConfigurationParam} */
    static updateAppReturnConfiguration(): UpdateAppReturnConfigurationParam;
    /** @returns {UpdateAutocompleteKeywordParam} */
    static updateAutocompleteKeyword(): UpdateAutocompleteKeywordParam;
    /** @returns {UpdateAutocompleteSettingsParam} */
    static updateAutocompleteSettings(): UpdateAutocompleteSettingsParam;
    /** @returns {UpdateCollectionParam} */
    static updateCollection(): UpdateCollectionParam;
    /** @returns {UpdateDefaultSortParam} */
    static updateDefaultSort(): UpdateDefaultSortParam;
    /** @returns {UpdateGroupConfigurationParam} */
    static updateGroupConfiguration(): UpdateGroupConfigurationParam;
    /** @returns {UpdateListingConfigurationParam} */
    static updateListingConfiguration(): UpdateListingConfigurationParam;
    /** @returns {UpdateMerchandisingRuleBoostActionParam} */
    static updateMerchandisingRuleBoostAction(): UpdateMerchandisingRuleBoostActionParam;
    /** @returns {UpdateMerchandisingRuleBuryActionParam} */
    static updateMerchandisingRuleBuryAction(): UpdateMerchandisingRuleBuryActionParam;
    /** @returns {UpdateMerchandisingRuleHideActionParam} */
    static updateMerchandisingRuleHideAction(): UpdateMerchandisingRuleHideActionParam;
    /** @returns {UpdateMerchandisingRulePinActionParam} */
    static updateMerchandisingRulePinAction(): UpdateMerchandisingRulePinActionParam;
    /** @returns {UpdateMerchandisingRuleQueryParam} */
    static updateMerchandisingRuleQuery(): UpdateMerchandisingRuleQueryParam;
    /** @returns {UpdateProductPriceByZoneInPriceFactoryParam} */
    static updateProductPriceByZoneInPriceFactory(): UpdateProductPriceByZoneInPriceFactoryParam;
    /** @returns {UpdateSearchConfigurationParam} */
    static updateSearchConfiguration(): UpdateSearchConfigurationParam;
    /** @returns {UpdateSearchKeywordsParam} */
    static updateSearchKeywords(): UpdateSearchKeywordsParam;
    /** @returns {UpdateSearchRerankConfigurationParam} */
    static updateSearchRerankConfiguration(): UpdateSearchRerankConfigurationParam;
    /** @returns {ValidateProductPriceFactoryBulkJobParam} */
    static validateProductPriceFactoryBulkJob(): ValidateProductPriceFactoryBulkJobParam;
}
declare namespace CatalogPlatformApplicationValidator {
    export { AddCollectionItemsParam, AddProductsInPriceFactoryByZoneIdParam, CreateAppCategoryReturnConfigurationParam, CreateAppPriceFactoryParam, CreateAppReturnConfigurationParam, CreateAutocompleteSettingsParam, CreateCollectionParam, CreateConfigurationByTypeParam, CreateConfigurationProductListingParam, CreateCustomAutocompleteRuleParam, CreateCustomKeywordParam, CreateGroupConfigurationParam, CreateListingConfigurationParam, CreateMerchandisingRuleBoostActionParam, CreateMerchandisingRuleBuryActionParam, CreateMerchandisingRuleHideActionParam, CreateMerchandisingRulePinActionParam, CreateMerchandisingRuleQueryParam, CreateProductPriceFactoryBulkJobParam, CreateSearchConfigurationParam, CreateSearchRerankParam, DeleteAppCategoryReturnConfigurationParam, DeleteAutocompleteKeywordParam, DeleteCollectionParam, DeleteGroupConfigurationParam, DeleteListingConfigurationParam, DeleteSearchConfigurationParam, DeleteSearchKeywordsParam, DeleteSearchRerankConfigurationParam, EditAppPriceFactoryParam, GetAllCollectionsParam, GetAllSearchKeywordParam, GetAppCategoryReturnConfigParam, GetAppInventoryParam, GetAppLocationsParam, GetAppPriceFactoriesParam, GetAppPriceFactoryParam, GetAppProductParam, GetAppProductsParam, GetAppReturnConfigurationParam, GetAppicationProductsParam, GetApplicationBrandListingParam, GetApplicationBrandsParam, GetApplicationCategoryListingParam, GetApplicationDepartmentListingParam, GetAutocompleteConfigParam, GetAutocompleteKeywordDetailParam, GetAutocompletePreviewParam, GetAutocompleteSettingsParam, GetCatalogConfigurationParam, GetCatalogInsightsParam, GetCategoriesParam, GetCollectionDetailParam, GetConfigurationByTypeParam, GetConfigurationMetadataParam, GetConfigurationsParam, GetConfigurationsFilterMetadataParam, GetDepartmentsParam, GetDiscountedInventoryBySizeIdentifierParam, GetGroupConfigurationsParam, GetListingConfigurationsParam, GetLivePreviewParam, GetMerchandisingQueryParam, GetMerchandisingRuleBoostActionParam, GetMerchandisingRuleBuryActionParam, GetMerchandisingRuleHideActionParam, GetMerchandisingRulePinActionParam, GetMerchandisingRulesParam, GetProductDetailBySlugParam, GetProductsInPriceFactoryByZoneIdParam, GetQueryFiltersParam, GetSearchConfigurationParam, GetSearchKeywordsParam, GetSearchRerankParam, GetSearchRerankDetailParam, PollProductPriceFactoryBulkJobParam, ProcessProductPriceFactoryBulkJobParam, UpdateAllowSingleParam, UpdateAppBrandParam, UpdateAppCategoryParam, UpdateAppCategoryReturnConfigurationParam, UpdateAppDepartmentParam, UpdateAppLocationParam, UpdateAppProductParam, UpdateAppReturnConfigurationParam, UpdateAutocompleteKeywordParam, UpdateAutocompleteSettingsParam, UpdateCollectionParam, UpdateDefaultSortParam, UpdateGroupConfigurationParam, UpdateListingConfigurationParam, UpdateMerchandisingRuleBoostActionParam, UpdateMerchandisingRuleBuryActionParam, UpdateMerchandisingRuleHideActionParam, UpdateMerchandisingRulePinActionParam, UpdateMerchandisingRuleQueryParam, UpdateProductPriceByZoneInPriceFactoryParam, UpdateSearchConfigurationParam, UpdateSearchKeywordsParam, UpdateSearchRerankConfigurationParam, ValidateProductPriceFactoryBulkJobParam };
}
type AddCollectionItemsParam = {
    /**
     * - A `id` is a unique identifier of a collection.
     */
    id: string;
    body: CatalogPlatformModel.CollectionItemUpdateSchema;
};
type AddProductsInPriceFactoryByZoneIdParam = {
    /**
     * - An `id` is a unique identifier for a particular price factory.
     */
    id: string;
    /**
     * - An `zone_id` is a unique identifier for a
     * particular price factory zone.
     */
    zoneId: string;
    body: CatalogPlatformModel.CreateAppPriceFactoryProductRequest;
};
type CreateAppCategoryReturnConfigurationParam = {
    body: CatalogPlatformModel.BaseAppCategoryReturnConfig;
};
type CreateAppPriceFactoryParam = {
    body: CatalogPlatformModel.CreateAppPriceFactoryRequest;
};
type CreateAppReturnConfigurationParam = {
    body: CatalogPlatformModel.CreateUpdateAppReturnConfig;
};
type CreateAutocompleteSettingsParam = {
    body: CatalogPlatformModel.AutocompleteRequestSchema;
};
type CreateCollectionParam = {
    body: CatalogPlatformModel.CreateCollection;
};
type CreateConfigurationByTypeParam = {
    /**
     * - Type can be brands, categories etc.
     */
    type: string;
    body: CatalogPlatformModel.AppConfiguration;
};
type CreateConfigurationProductListingParam = {
    body: CatalogPlatformModel.AppConfiguration;
};
type CreateCustomAutocompleteRuleParam = {
    body: CatalogPlatformModel.CreateAutocompleteKeyword;
};
type CreateCustomKeywordParam = {
    body: CatalogPlatformModel.CreateSearchKeyword;
};
type CreateGroupConfigurationParam = {
    /**
     * - A `config_type` is a unique identifier for a
     * particular group configuration type.
     */
    configType: string;
    body: CatalogPlatformModel.AppConfigurationCreateDetail;
};
type CreateListingConfigurationParam = {
    /**
     * - A `config_type` is a unique identifier for a
     * particular listing configuration type.
     */
    configType: string;
    body: CatalogPlatformModel.AppConfigurationsFilter;
};
type CreateMerchandisingRuleBoostActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    body: CatalogPlatformModel.GetMerchandisingRuleBoostAction;
};
type CreateMerchandisingRuleBuryActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    body: CatalogPlatformModel.GetMerchandisingRuleBuryAction;
};
type CreateMerchandisingRuleHideActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    body: CatalogPlatformModel.HideRequest;
};
type CreateMerchandisingRulePinActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    body: CatalogPlatformModel.PinRequest;
};
type CreateMerchandisingRuleQueryParam = {
    body: CatalogPlatformModel.MerchandisingRuleQueryPost;
};
type CreateProductPriceFactoryBulkJobParam = {
    /**
     * - An `id` is a unique identifier for a particular price factory.
     */
    id: string;
    body: CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest;
};
type CreateSearchConfigurationParam = {
    body: CatalogPlatformModel.CreateSearchConfigurationRequest;
};
type CreateSearchRerankParam = {
    body: CatalogPlatformModel.CreateSearchRerankRequest;
};
type DeleteAppCategoryReturnConfigurationParam = {
    body: CatalogPlatformModel.DeleteAppCategoryReturnConfig;
};
type DeleteAutocompleteKeywordParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
};
type DeleteCollectionParam = {
    /**
     * - A `id` is a unique identifier of a collection.
     */
    id: string;
};
type DeleteGroupConfigurationParam = {
    /**
     * - A `config_type` is a unique identifier for a
     * particular group configuration type.
     */
    configType: string;
    /**
     * - A `group_slug` is a unique identifier of a
     * particular configuration.
     */
    groupSlug: string;
};
type DeleteListingConfigurationParam = {
    /**
     * - A `config_type` is a unique identifier for a
     * particular listing configuration type.
     */
    configType: string;
    /**
     * - A `config_id` is a unique identifier of a
     * particular configuration.
     */
    configId: string;
};
type DeleteSearchKeywordsParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
};
type DeleteSearchRerankConfigurationParam = {
    /**
     * - An `id` is the identifier for a particular search
     * rerank configuration. channel.
     */
    id: string;
};
type EditAppPriceFactoryParam = {
    /**
     * - An `id` is a unique identifier for a particular price factory.
     */
    id: string;
    body: CatalogPlatformModel.EditAppPriceFactoryRequest;
};
type GetAllCollectionsParam = {
    /**
     * - Get collection list filtered by q string,
     */
    q?: string;
    /**
     * - Get collection list filtered by scheduled status,
     */
    scheduleStatus?: string;
    /**
     * - Type of the collections
     */
    type?: string;
    /**
     * - Each response will contain next_id param, which
     * should be sent back to make pagination work.
     */
    tag?: string[];
    /**
     * - Get collections filtered by active status.
     */
    isActive?: boolean;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
};
type GetAllSearchKeywordParam = {
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Search query with words name.Use this parameter to
     * search keywords by words.
     */
    q?: string;
    /**
     * - Can query for keywords based on whether they
     * are active or inactive.
     */
    isActive?: boolean;
};
type GetAppInventoryParam = {
    /**
     * - The Item Id of the product.
     */
    itemIds?: number[];
    /**
     * - The Store Id of products to fetch inventory.
     */
    storeIds?: number[];
    /**
     * - The Brand Id of products to fetch inventory.
     */
    brandIds?: number[];
    /**
     * - Unique seller_identifier of the product.
     */
    sellerIdentifiers?: string[];
    /**
     * - Timestamp in UTC format (2020-07-23T10:27:50Z)
     */
    timestamp?: string;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
    /**
     * - Page ID to retrieve next set of results.
     */
    pageId?: string;
};
type GetAppLocationsParam = {
    /**
     * - Helps to sort the location list on the basis
     * of location type.
     */
    storeType?: string;
    /**
     * - Helps to sort the location list on the basis of uid list.
     */
    uid?: string;
    /**
     * - Query that is to be searched.
     */
    q?: string;
    /**
     * - To filter companies on basis of verified or
     * unverified companies.
     */
    stage?: string;
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 20.
     */
    pageSize?: number;
    /**
     * - Get locations filtered by tags.
     */
    tags?: string[];
    /**
     * - Get locations filtered by store types.
     */
    storeTypes?: string[];
    /**
     * - Filter stores by company IDs available
     * in the application.
     */
    companyUids?: number[];
};
type GetAppPriceFactoriesParam = {
    /**
     * - Gets price factory filtered by active status.
     */
    isActive?: boolean;
    /**
     * - Gets price factory filtered by factory_type_id.
     */
    factoryTypeId?: string;
    /**
     * - Gets price factory filtered by pricezone code.
     */
    code?: string;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
};
type GetAppPriceFactoryParam = {
    /**
     * - An `id` is a unique identifier for a particular price factory.
     */
    id: string;
};
type GetAppProductParam = {
    /**
     * - Product id for a particular product.
     */
    itemId: number;
};
type GetAppProductsParam = {
    /**
     * - Get multiple products filtered by Brand Ids
     */
    brandIds?: number[];
    /**
     * - Get multiple products filtered by Category Ids
     */
    categoryIds?: number[];
    /**
     * - Get multiple products filtered by Department Ids
     */
    departmentIds?: number[];
    /**
     * - Get multiple products filtered by tags
     */
    tags?: string[];
    /**
     * - Get multiple products filtered by Item Ids
     */
    itemIds?: number[];
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 10.
     */
    pageSize?: number;
    /**
     * - Search with Item Code, Name, Slug or Identifier.
     */
    q?: string;
};
type GetAppicationProductsParam = {
    /**
     * - The search query. This can be a partial or complete
     * name of a either a product, brand or category
     */
    q?: string;
    /**
     * - The search filter parameters. All the parameter
     * filtered from filter parameters will be passed in **f** parameter in this
     * format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     */
    f?: string;
    /**
     * - The search filter parameters for collection items.
     * All the parameter filtered from filter parameters will be passed in **c**
     * parameter in this format.
     * **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
     */
    c?: string;
    /**
     * - Pass `filters` parameter to fetch the filter
     * details. This flag is used to fetch all filters
     */
    filters?: boolean;
    /**
     * - This query parameter is used to get the
     * dependent products in the listing.
     */
    isDependent?: boolean;
    /**
     * - The order to sort the list of products on. The
     * supported sort parameters are popularity, price, redemption and discount in
     * either ascending or descending order. See the supported values below.
     */
    sortOn?: string;
    /**
     * - Each response will contain **page_id** param,
     * which should be sent back to make pagination work.
     */
    pageId?: string;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - If page_type is number then pass it to fetch
     * page items. Default is 1.
     */
    pageNo?: number;
    /**
     * - For pagination type should be cursor or
     * number. Default is cursor.
     */
    pageType?: string;
    /**
     * - Item Ids of product
     */
    itemIds?: string[];
};
type GetApplicationBrandListingParam = {
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Search query with brand name.Use this parameter to
     * search brands by brand name.
     */
    q?: string;
};
type GetApplicationBrandsParam = {
    /**
     * - The name of the department. Use this
     * parameter to filter products by a particular department. See below the list
     * of available departments. You can retrieve available departments from the
     * **v1.0/departments/** API
     */
    department?: string;
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Search query with brand name.Use this parameter to
     * search brands by brand name.
     */
    q?: string;
    /**
     * - Helps to sort the brands list on the basis of uid list.
     */
    brandId?: number;
};
type GetApplicationCategoryListingParam = {
    /**
     * - A `department_id` is a unique identifier
     * for a particular department.
     */
    departmentId?: number;
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Search query with brand name.Use this parameter to
     * search brands by brand name.
     */
    q?: string;
};
type GetApplicationDepartmentListingParam = {
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Search query with brand name.Use this parameter to
     * search department by name.
     */
    q?: string;
};
type GetAutocompleteConfigParam = {
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Search query with words name.Use this parameter to
     * search keywords by words.
     */
    q?: string;
    /**
     * - Can query for keywords based on whether they
     * are active or inactive.
     */
    isActive?: boolean;
};
type GetAutocompleteKeywordDetailParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to retrieve.
     */
    id: string;
};
type GetAutocompletePreviewParam = {
    /**
     * - Get suggestions related to `q` string.
     */
    q?: string;
    /**
     * - For getting related category suggestions.
     */
    categorySuggestion?: number;
    /**
     * - For getting related brand suggestions.
     */
    brandSuggestion?: number;
    /**
     * - For getting collection suggestions.
     */
    collectionSuggestion?: number;
    /**
     * - For getting product suggestions.
     */
    productSuggestion?: number;
    /**
     * - For getting query suggestions.
     */
    querySuggestion?: number;
};
type GetCatalogInsightsParam = {
    /**
     * - Brand slug
     */
    brand?: string;
};
type GetCategoriesParam = {
    /**
     * - The name of the department. Use this
     * parameter to filter products by a particular department. See below the list
     * of available departments. You can retrieve available departments from the
     * **v1.0/departments/** API
     */
    department?: string;
};
type GetCollectionDetailParam = {
    /**
     * - A `slug` is a human readable, URL friendly unique
     * identifier of an object. Pass the `slug` of the collection which you want
     * to retrieve.
     */
    slug: string;
};
type GetConfigurationByTypeParam = {
    /**
     * - Type can be brands, categories etc.
     */
    type: string;
};
type GetConfigurationMetadataParam = {
    /**
     * - A `config_type` is an identifier that defines
     * a specific type of configuration.
     */
    configType: string;
    /**
     * - Get configuration list filtered by
     * `template_slug` string. This is for the details and comparision groups.
     */
    templateSlug?: string;
};
type GetConfigurationsFilterMetadataParam = {
    /**
     * - Filter whose values needs to be fetched.
     */
    filter: string;
};
type GetDiscountedInventoryBySizeIdentifierParam = {
    /**
     * - Item code of the product of which size is to be get.
     */
    itemId: number;
    /**
     * - Size Identifier (Seller Identifier or
     * Primary Identifier) of which inventory is to get.
     */
    sizeIdentifier: number;
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Search by store ids.
     */
    locationIds?: number[];
};
type GetGroupConfigurationsParam = {
    /**
     * - A `config_type` is an identifier that defines
     * a specific type of configuration.
     */
    configType: string;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Get configuration list filtered by `search` string.
     */
    search?: string;
    /**
     * - Get configuration list filtered by
     * `template_slug` string. This is for the details and comparision groups.
     */
    templateSlug?: string;
};
type GetListingConfigurationsParam = {
    /**
     * - A `config_type` is an identifier that defines
     * a specific type of configuration.
     */
    configType: string;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Get configuration list filtered by `search` string.
     */
    search?: string;
    /**
     * - Only for categories config type, Get
     * configuration list filtered by `uids`.
     */
    uids?: number[];
};
type GetLivePreviewParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    /**
     * - A sample query that can be used to get a
     * live preview of the merchandising rule.
     */
    searchKeyword?: string;
};
type GetMerchandisingQueryParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
};
type GetMerchandisingRuleBoostActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
};
type GetMerchandisingRuleBuryActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
};
type GetMerchandisingRuleHideActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
};
type GetMerchandisingRulePinActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
};
type GetMerchandisingRulesParam = {
    /**
     * - Each response will contain next_id param, which
     * should be sent back to make pagination work.
     */
    pageId?: string;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
};
type GetProductDetailBySlugParam = {
    /**
     * - The unique identifier of a product. i.e; `slug` of
     * a product or `uid` of a product. You can retrieve these from the APIs that
     * list products like **v1.0/products/**
     */
    slug: string;
};
type GetProductsInPriceFactoryByZoneIdParam = {
    /**
     * - An `id` is a unique identifier for a particular price factory.
     */
    id: string;
    /**
     * - An `zone_id` is a unique identifier for a
     * particular price factory zone.
     */
    zoneId: string;
    /**
     * - Gets price factory filtered by item_id.
     */
    itemId?: boolean;
    /**
     * - Gets price factory filtered by
     * seller_identifier.
     */
    sellerIdentifier?: string;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
};
type GetSearchKeywordsParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to retrieve.
     */
    id: string;
};
type GetSearchRerankDetailParam = {
    /**
     * - An `id` is the identifier for a particular search
     * rerank configuration. channel.
     */
    id: string;
};
type PollProductPriceFactoryBulkJobParam = {
    /**
     * - An `id` is a unique identifier for a particular price factory.
     */
    id: string;
    /**
     * - A `job_id` is a unique identifier for a particular bulk job.
     */
    jobId: string;
};
type ProcessProductPriceFactoryBulkJobParam = {
    /**
     * - An `id` is a unique identifier for a particular price factory.
     */
    id: string;
    /**
     * - A `job_id` is a unique identifier for a particular bulk job.
     */
    jobId: string;
    body: CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest;
};
type UpdateAllowSingleParam = {
    body: CatalogPlatformModel.AllowSingleRequest;
};
type UpdateAppBrandParam = {
    /**
     * - Brand id for which the custom_json is associated.
     */
    brandUid: number;
    body: CatalogPlatformModel.ApplicationBrandJson;
};
type UpdateAppCategoryParam = {
    /**
     * - Category id for which the custom_json is associated.
     */
    categoryUid: number;
    body: CatalogPlatformModel.ApplicationCategoryJson;
};
type UpdateAppCategoryReturnConfigurationParam = {
    body: CatalogPlatformModel.BaseAppCategoryReturnConfig;
};
type UpdateAppDepartmentParam = {
    /**
     * - Department id for which the custom_json is
     * associated.
     */
    departmentUid: number;
    body: CatalogPlatformModel.ApplicationDepartmentJson;
};
type UpdateAppLocationParam = {
    /**
     * - Store id for which the custom_json is associated.
     */
    storeUid: number;
    body: CatalogPlatformModel.ApplicationStoreJson;
};
type UpdateAppProductParam = {
    /**
     * - Product id for which the custom_meta is associated.
     */
    itemId: number;
    body: CatalogPlatformModel.ApplicationItemMeta;
};
type UpdateAppReturnConfigurationParam = {
    body: CatalogPlatformModel.CreateUpdateAppReturnConfig;
};
type UpdateAutocompleteKeywordParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
    body: CatalogPlatformModel.CreateAutocompleteKeyword;
};
type UpdateAutocompleteSettingsParam = {
    /**
     * - An `id` is a unique identifier for a particular
     * autocomplete settings config.
     */
    id: string;
    body: CatalogPlatformModel.AutocompleteRequestSchema;
};
type UpdateCollectionParam = {
    /**
     * - A `id` is a unique identifier of a collection.
     */
    id: string;
    body: CatalogPlatformModel.UpdateCollection;
};
type UpdateDefaultSortParam = {
    body: CatalogPlatformModel.DefaultKeyRequest;
};
type UpdateGroupConfigurationParam = {
    /**
     * - A `config_type` is a unique identifier for a
     * particular group configuration type.
     */
    configType: string;
    /**
     * - A `group_slug` is a unique identifier of a
     * particular configuration.
     */
    groupSlug: string;
    body: CatalogPlatformModel.AppConfigurationDetail;
};
type UpdateListingConfigurationParam = {
    /**
     * - A `config_type` is a unique identifier for a
     * particular listing configuration type.
     */
    configType: string;
    /**
     * - A `config_id` is a unique identifier of a
     * particular configuration.
     */
    configId: string;
    body: CatalogPlatformModel.AppConfigurationsFilterResponse;
};
type UpdateMerchandisingRuleBoostActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    body: CatalogPlatformModel.GetMerchandisingRuleBoostAction;
};
type UpdateMerchandisingRuleBuryActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    body: CatalogPlatformModel.GetMerchandisingRuleBuryAction;
};
type UpdateMerchandisingRuleHideActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    body: CatalogPlatformModel.HideRequest;
};
type UpdateMerchandisingRulePinActionParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    body: CatalogPlatformModel.PinRequest;
};
type UpdateMerchandisingRuleQueryParam = {
    /**
     * - A `merchandising_rule_id` is a
     * unique identifier for a particular merchandising rule.
     */
    merchandisingRuleId: string;
    body: CatalogPlatformModel.MerchandisingRuleQueryPost;
};
type UpdateProductPriceByZoneInPriceFactoryParam = {
    /**
     * - A `id` is a unique identifier for a particular price factory.
     */
    id: string;
    /**
     * - A `item_id` is a unique identifier for a
     * particular product.
     */
    itemId: number;
    /**
     * - A `zone_id` is a unique identifier for a particular zone.
     */
    zoneId: string;
    body: CatalogPlatformModel.UpdateAppPriceFactoryProductRequest;
};
type UpdateSearchConfigurationParam = {
    body: CatalogPlatformModel.UpdateSearchConfigurationRequest;
};
type UpdateSearchKeywordsParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
    body: CatalogPlatformModel.CreateSearchKeyword;
};
type UpdateSearchRerankConfigurationParam = {
    /**
     * - An `id` is the identifier for a particular search
     * rerank configuration. channel.
     */
    id: string;
    body: CatalogPlatformModel.UpdateSearchRerankRequest;
};
type ValidateProductPriceFactoryBulkJobParam = {
    /**
     * - An `id` is a unique identifier for a particular price factory.
     */
    id: string;
    /**
     * - A `job_id` is a unique identifier for a particular bulk job.
     */
    jobId: string;
    body: CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest;
};
type DeleteSearchConfigurationParam = any;
type GetAppCategoryReturnConfigParam = any;
type GetAppReturnConfigurationParam = any;
type GetAutocompleteSettingsParam = any;
type GetCatalogConfigurationParam = any;
type GetConfigurationsParam = any;
type GetDepartmentsParam = any;
type GetQueryFiltersParam = any;
type GetSearchConfigurationParam = any;
type GetSearchRerankParam = any;
import CatalogPlatformModel = require("sdk/output/javascript/code/sdk/platform/Catalog/CatalogPlatformModel");
