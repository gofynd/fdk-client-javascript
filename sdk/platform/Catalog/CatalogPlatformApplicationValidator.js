const Joi = require("joi");

const CatalogPlatformModel = require("./CatalogPlatformModel");

/**
 * @typedef AddCollectionItemsParam
 * @property {string} id - A `id` is a unique identifier of a collection.
 * @property {CatalogPlatformModel.CollectionItemUpdateSchema} body
 */

/**
 * @typedef AddProductsInPriceFactoryByZoneIdParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {CatalogPlatformModel.CreatePriceFactoryProductRequest} body
 */

/**
 * @typedef ClearCollectionItemsPriorityParam
 * @property {string} id - A `id` is a unique identifier of a collection.
 */

/**
 * @typedef CreateAppCategoryReturnConfigurationParam
 * @property {CatalogPlatformModel.BaseAppCategoryReturnConfig} body
 */

/**
 * @typedef CreateAppPriceFactoryParam
 * @property {CatalogPlatformModel.CreateAppPriceFactoryRequestSchema} body
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
 * @property {CatalogPlatformModel.PostMerchandisingRuleBoostAction} body
 */

/**
 * @typedef CreateMerchandisingRuleBuryActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.PostMerchandisingRuleBoostAction} body
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
 * @typedef CreateSynonymsParam
 * @property {CatalogPlatformModel.SynonymCreateRequestSchema} body
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

/**
 * @typedef DeleteMerchandisingRuleParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 */

/**
 * @typedef DeleteMerchandisingRulesPreviewParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
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
 * @typedef DeleteSynonymParam
 * @property {string} id - A `id` is a unique identifier of a synonym that is to
 *   be deleted.
 */

/**
 * @typedef EditAppPriceFactoryParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {CatalogPlatformModel.EditAppPriceFactoryRequestSchema} body
 */

/**
 * @typedef ExportProductsInPriceFactoryParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {CatalogPlatformModel.CreateAppPriceFactoryProductExportJobRequest} body
 */

/** @typedef ExportSynonymsParam */

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

/**
 * @typedef GetAppCategoryReturnConfigParam
 * @property {string} [q] - Get return configurations for categories by matching
 *   the search string with category names.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 */

/**
 * @typedef GetAppInventoryParam
 * @property {number[]} [itemIds] - The Item Id of the product.
 * @property {number[]} [storeIds] - The Store Id of products to fetch inventory.
 * @property {number[]} [brandIds] - The Brand Id of products to fetch inventory.
 * @property {string[]} [sellerIdentifiers] - Unique seller_identifier of the product.
 * @property {string} [timestamp] - Timestamp in UTC format (2020-07-23T10:27:50Z)
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 * @property {number} [qtyGt] - This field allows you to filter for inventories
 *   that have quantity greater than to the specified value based on qty_type filter.
 * @property {number} [qtyLt] - This field allows you to filter for inventories
 *   that have a quantity less than to the specified value based on qty_type filter.
 * @property {string} [qtyType] - This field provides flexibility in selecting
 *   filter for inventory quantity counts and date queries. For example, you
 *   might use this field to specify "total" or "sellable" quantity.
 * @property {string} [fromDate] - Inventory updated on filter to get
 *   inventories greater then or equal to provided date based on qty_type value.
 * @property {string} [toDate] - Inventory updated on filter to get inventories
 *   less then or equal to provided date based on qty_type value.
 */

/**
 * @typedef GetAppLocationsParam
 * @property {string} [storeType] - Helps to sort the location list on the basis
 *   of location type.
 * @property {number[]} [uid] - Helps to sort the location list on the basis of uid list.
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
 * @typedef GetAppPriceByIdParam
 * @property {number} itemId - Unique identifier of the product
 * @property {number[]} [storeIds] - An array of unique identifiers representing
 *   the store locations from which the product pricing should be fetched. If
 *   not provided, pricing for all applicable store locations will be returned.
 * @property {string[]} [factoryTypeIds] - An array of unique factory type
 *   identifiers that specify that pricing from which factory type should be
 *   retrieved. This parameter allows filtering the price based on factory types.
 * @property {number} [sellerId] - The company uid for which we want to fetch
 *   discounted pricing for a product
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
 * @typedef GetAppProductPricesParam
 * @property {number[]} [itemIds] - List of item ids to get product prices
 *   filtered by items.
 * @property {string[]} [factoryTypeIds] - List of factory type ids to get
 *   product prices filtered by factory type id.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
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
 * @typedef GetApplicationBrandListingParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with brand name. Use this parameter to
 *   search brands by brand name.
 */

/**
 * @typedef GetApplicationBrandsParam
 * @property {string} [department] - The name of the department. Use this
 *   parameter to filter products by a particular department. See below the list
 *   of available departments. You can retrieve available departments from the
 *   "v1.0/departments/" API
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with brand name.Use this parameter to
 *   search brands by brand name.
 * @property {number[]} [brandId] - Helps to sort the brands list on the basis
 *   of uid list.
 */

/**
 * @typedef GetApplicationCategoryListingParam
 * @property {number} [departmentId] - A `department_id` is a unique identifier
 *   for a particular department.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - A search query string. Use this parameter to filter
 *   results based on a keyword or specific value.
 */

/**
 * @typedef GetApplicationDepartmentListingParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - A search query string. Use this parameter to filter
 *   results based on a keyword or specific value.
 */

/**
 * @typedef GetApplicationFilterKeysParam
 * @property {string} [c] - The search filter parameters for collection items.
 *   All the parameter filtered from filter parameters will be passed in **c**
 *   parameter in this format.
 *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
 */

/**
 * @typedef GetApplicationFilterValuesParam
 * @property {string} filterKey - A `filter_key` is a filter key for a for which
 *   all the available filter values will returned. channel.
 * @property {string} [c] - The search filter parameters for collection items.
 *   All the parameter filtered from filter parameters will be passed in **c**
 *   parameter in this format.
 *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
 * @property {string} [collectionId] - A `collection_id` is a unique identifier
 *   for a particular collection. channel.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {string} [q] - Get Values filtered by q string
 */

/**
 * @typedef GetApplicationProductsParam
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
 * @property {string} [brand] - Brand slug that is to be searched.
 */

/**
 * @typedef GetCategoriesParam
 * @property {string} [department] - The name of the department. Use this
 *   parameter to filter products by a particular department. See below the list
 *   of available departments. You can retrieve available departments from the
 *   "v1.0/departments/" API
 */

/**
 * @typedef GetCollectionDetailParam
 * @property {string} slug - A `slug` is a human readable, URL friendly unique
 *   identifier of an object. Pass the `slug` of the collection which you want
 *   to retrieve.
 */

/**
 * @typedef GetCollectionItemsParam
 * @property {string} id - A `id` is a unique identifier of a collection.
 * @property {string} [sortOn] - Each response will contain sort_on param, which
 *   should be sent back to make pagination work.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {number} [pageNo] - Identifies the specific page of results being requested.
 * @property {boolean} [isPinned] - Number of items that are pinned and have
 *   priority in each page. Default is 12.
 * @property {string} [q] - Get multiple products filtered by q string
 * @property {boolean} [isExcluded] - Number of items that are excluded from
 *   collections in each page. Default is 12.
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
 *   a product. You can retrieve these from the APIs that list products like
 *   **v1.0/products/**
 */

/**
 * @typedef GetProductsInPriceFactoryByZoneIdParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} zoneId - An `zone_id` is a unique identifier for a
 *   particular price factory zone.
 * @property {number} [itemId] - Gets price factory filtered by item_id.
 * @property {string} [q] - Gets price factory filtered by search query.
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
 * @typedef GetSynonymsParam
 * @property {string} [id] - Mongo id of the particular synonym
 * @property {string} [name] - Synonym name
 * @property {string} [type] - Synonym type - oneway/twoway
 */

/**
 * @typedef PollBulkSynonymsParam
 * @property {string} id - Id of the bulk job that needs to be polled.
 */

/**
 * @typedef PollPriceFactoryJobsParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} [startDate] - Date that filters the jobs created after this date
 * @property {string} [endDate] - Date that filters the jobs created before this date
 * @property {string[]} [stage] - Filter jobs by the stage
 * @property {boolean} [isActive] - Filter active or inactive jobs
 * @property {string} [q] - Pass unique identifier for a particular job to poll
 * @property {string[]} [type] - Pass type for a particular job to poll
 */

/**
 * @typedef PollProductPriceFactoryBulkJobParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} jobId - A `job_id` is a unique identifier for a particular bulk job.
 */

/**
 * @typedef ProcessBulkSynonymsParam
 * @property {CatalogPlatformModel.SynonymBulkProcessRequestSchema} body
 */

/**
 * @typedef ProcessProductPriceFactoryBulkJobParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} jobId - A `job_id` is a unique identifier for a particular bulk job.
 * @property {CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest} body
 */

/**
 * @typedef SampleBulkSynonymsFileParam
 * @property {string} type - Type of the file
 */

/**
 * @typedef SaveMerchandisingRulesParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.MerchandisingRuleSave} body
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
 * @property {number} categoryUid - A `category id` is a unique identifier for a
 *   particular category.
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
 * @property {CatalogPlatformModel.PostMerchandisingRuleBoostAction} body
 */

/**
 * @typedef UpdateMerchandisingRuleBuryActionParam
 * @property {string} merchandisingRuleId - A `merchandising_rule_id` is a
 *   unique identifier for a particular merchandising rule.
 * @property {CatalogPlatformModel.PostMerchandisingRuleBoostAction} body
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
 * @typedef UpdateSynonymsParam
 * @property {string} id - An `id` is a unique identifier for a particular
 *   synonym channel.
 * @property {CatalogPlatformModel.SynonymCreateRequestSchema} body
 */

/**
 * @typedef UploadSynonymsParam
 * @property {CatalogPlatformModel.SynonymUploadRequestSchema} body
 */

/**
 * @typedef ValidateBulkSynonymsParam
 * @property {CatalogPlatformModel.SynonymBulkValidateRequestSchema} body
 */

/**
 * @typedef ValidateProductPriceFactoryBulkJobParam
 * @property {string} id - An `id` is a unique identifier for a particular price factory.
 * @property {string} jobId - A `job_id` is a unique identifier for a particular bulk job.
 * @property {CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest} body
 */

class CatalogPlatformApplicationValidator {
  /** @returns {AddCollectionItemsParam} */
  static addCollectionItems() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CollectionItemUpdateSchema().required(),
    }).required();
  }

  /** @returns {AddProductsInPriceFactoryByZoneIdParam} */
  static addProductsInPriceFactoryByZoneId() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CreatePriceFactoryProductRequest().required(),
    }).required();
  }

  /** @returns {ClearCollectionItemsPriorityParam} */
  static clearCollectionItemsPriority() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {CreateAppCategoryReturnConfigurationParam} */
  static createAppCategoryReturnConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.BaseAppCategoryReturnConfig().required(),
    }).required();
  }

  /** @returns {CreateAppPriceFactoryParam} */
  static createAppPriceFactory() {
    return Joi.object({
      body: CatalogPlatformModel.CreateAppPriceFactoryRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateAppReturnConfigurationParam} */
  static createAppReturnConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.CreateUpdateAppReturnConfig().required(),
    }).required();
  }

  /** @returns {CreateAutocompleteSettingsParam} */
  static createAutocompleteSettings() {
    return Joi.object({
      body: CatalogPlatformModel.AutocompleteRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateCollectionParam} */
  static createCollection() {
    return Joi.object({
      body: CatalogPlatformModel.CreateCollection().required(),
    }).required();
  }

  /** @returns {CreateConfigurationByTypeParam} */
  static createConfigurationByType() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      body: CatalogPlatformModel.AppConfiguration().required(),
    }).required();
  }

  /** @returns {CreateConfigurationProductListingParam} */
  static createConfigurationProductListing() {
    return Joi.object({
      body: CatalogPlatformModel.AppConfiguration().required(),
    }).required();
  }

  /** @returns {CreateCustomAutocompleteRuleParam} */
  static createCustomAutocompleteRule() {
    return Joi.object({
      body: CatalogPlatformModel.CreateAutocompleteKeyword().required(),
    }).required();
  }

  /** @returns {CreateCustomKeywordParam} */
  static createCustomKeyword() {
    return Joi.object({
      body: CatalogPlatformModel.CreateSearchKeyword().required(),
    }).required();
  }

  /** @returns {CreateGroupConfigurationParam} */
  static createGroupConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      body: CatalogPlatformModel.AppConfigurationCreateDetail().required(),
    }).required();
  }

  /** @returns {CreateListingConfigurationParam} */
  static createListingConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      body: CatalogPlatformModel.AppConfigurationsFilter().required(),
    }).required();
  }

  /** @returns {CreateMerchandisingRuleBoostActionParam} */
  static createMerchandisingRuleBoostAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.PostMerchandisingRuleBoostAction().required(),
    }).required();
  }

  /** @returns {CreateMerchandisingRuleBuryActionParam} */
  static createMerchandisingRuleBuryAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.PostMerchandisingRuleBoostAction().required(),
    }).required();
  }

  /** @returns {CreateMerchandisingRuleHideActionParam} */
  static createMerchandisingRuleHideAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.HideRequest().required(),
    }).required();
  }

  /** @returns {CreateMerchandisingRulePinActionParam} */
  static createMerchandisingRulePinAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.PinRequest().required(),
    }).required();
  }

  /** @returns {CreateMerchandisingRuleQueryParam} */
  static createMerchandisingRuleQuery() {
    return Joi.object({
      body: CatalogPlatformModel.MerchandisingRuleQueryPost().required(),
    }).required();
  }

  /** @returns {CreateProductPriceFactoryBulkJobParam} */
  static createProductPriceFactoryBulkJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest().required(),
    }).required();
  }

  /** @returns {CreateSearchConfigurationParam} */
  static createSearchConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.CreateSearchConfigurationRequest().required(),
    }).required();
  }

  /** @returns {CreateSearchRerankParam} */
  static createSearchRerank() {
    return Joi.object({
      body: CatalogPlatformModel.CreateSearchRerankRequest().required(),
    }).required();
  }

  /** @returns {CreateSynonymsParam} */
  static createSynonyms() {
    return Joi.object({
      body: CatalogPlatformModel.SynonymCreateRequestSchema().required(),
    }).required();
  }

  /** @returns {DeleteAppCategoryReturnConfigurationParam} */
  static deleteAppCategoryReturnConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.DeleteAppCategoryReturnConfig().required(),
    }).required();
  }

  /** @returns {DeleteAutocompleteKeywordParam} */
  static deleteAutocompleteKeyword() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteCollectionParam} */
  static deleteCollection() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteGroupConfigurationParam} */
  static deleteGroupConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      groupSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteListingConfigurationParam} */
  static deleteListingConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      configId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteMerchandisingRuleParam} */
  static deleteMerchandisingRule() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteMerchandisingRulesPreviewParam} */
  static deleteMerchandisingRulesPreview() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteSearchConfigurationParam} */
  static deleteSearchConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {DeleteSearchKeywordsParam} */
  static deleteSearchKeywords() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteSearchRerankConfigurationParam} */
  static deleteSearchRerankConfiguration() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteSynonymParam} */
  static deleteSynonym() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {EditAppPriceFactoryParam} */
  static editAppPriceFactory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.EditAppPriceFactoryRequestSchema().required(),
    }).required();
  }

  /** @returns {ExportProductsInPriceFactoryParam} */
  static exportProductsInPriceFactory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CreateAppPriceFactoryProductExportJobRequest().required(),
    }).required();
  }

  /** @returns {ExportSynonymsParam} */
  static exportSynonyms() {
    return Joi.object({}).required();
  }

  /** @returns {GetAllCollectionsParam} */
  static getAllCollections() {
    return Joi.object({
      q: Joi.string().allow(""),
      scheduleStatus: Joi.string().allow(""),
      type: Joi.string().allow(""),
      tag: Joi.array().items(Joi.string().allow("")),
      isActive: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetAllSearchKeywordParam} */
  static getAllSearchKeyword() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      isActive: Joi.boolean(),
    }).required();
  }

  /** @returns {GetAppCategoryReturnConfigParam} */
  static getAppCategoryReturnConfig() {
    return Joi.object({
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetAppInventoryParam} */
  static getAppInventory() {
    return Joi.object({
      itemIds: Joi.array().items(Joi.number()),
      storeIds: Joi.array().items(Joi.number()),
      brandIds: Joi.array().items(Joi.number()),
      sellerIdentifiers: Joi.array().items(Joi.string().allow("")),
      timestamp: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageId: Joi.string().allow(""),
      qtyGt: Joi.number(),
      qtyLt: Joi.number(),
      qtyType: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAppLocationsParam} */
  static getAppLocations() {
    return Joi.object({
      storeType: Joi.string().allow(""),
      uid: Joi.array().items(Joi.number()),
      q: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      storeTypes: Joi.array().items(Joi.string().allow("")),
      companyUids: Joi.array().items(Joi.number()),
    }).required();
  }

  /** @returns {GetAppPriceByIdParam} */
  static getAppPriceById() {
    return Joi.object({
      itemId: Joi.number().required(),
      storeIds: Joi.array().items(Joi.number()),
      factoryTypeIds: Joi.array().items(Joi.string().allow("")),
      sellerId: Joi.number(),
    }).required();
  }

  /** @returns {GetAppPriceFactoriesParam} */
  static getAppPriceFactories() {
    return Joi.object({
      isActive: Joi.boolean(),
      factoryTypeId: Joi.string().allow(""),
      code: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetAppPriceFactoryParam} */
  static getAppPriceFactory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAppProductParam} */
  static getAppProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetAppProductPricesParam} */
  static getAppProductPrices() {
    return Joi.object({
      itemIds: Joi.array().items(Joi.number()),
      factoryTypeIds: Joi.array().items(Joi.string().allow("")),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetAppProductsParam} */
  static getAppProducts() {
    return Joi.object({
      brandIds: Joi.array().items(Joi.number()),
      categoryIds: Joi.array().items(Joi.number()),
      departmentIds: Joi.array().items(Joi.number()),
      tags: Joi.array().items(Joi.string().allow("")),
      itemIds: Joi.array().items(Joi.number()),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAppReturnConfigurationParam} */
  static getAppReturnConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {GetApplicationBrandListingParam} */
  static getApplicationBrandListing() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetApplicationBrandsParam} */
  static getApplicationBrands() {
    return Joi.object({
      department: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      brandId: Joi.array().items(Joi.number()),
    }).required();
  }

  /** @returns {GetApplicationCategoryListingParam} */
  static getApplicationCategoryListing() {
    return Joi.object({
      departmentId: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetApplicationDepartmentListingParam} */
  static getApplicationDepartmentListing() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetApplicationFilterKeysParam} */
  static getApplicationFilterKeys() {
    return Joi.object({
      c: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetApplicationFilterValuesParam} */
  static getApplicationFilterValues() {
    return Joi.object({
      filterKey: Joi.string().allow("").required(),
      c: Joi.string().allow(""),
      collectionId: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetApplicationProductsParam} */
  static getApplicationProducts() {
    return Joi.object({
      q: Joi.string().allow(""),
      f: Joi.string().allow(""),
      c: Joi.string().allow(""),
      filters: Joi.boolean(),
      isDependent: Joi.boolean(),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      pageType: Joi.string().allow(""),
      itemIds: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  /** @returns {GetAutocompleteConfigParam} */
  static getAutocompleteConfig() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      isActive: Joi.boolean(),
    }).required();
  }

  /** @returns {GetAutocompleteKeywordDetailParam} */
  static getAutocompleteKeywordDetail() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAutocompletePreviewParam} */
  static getAutocompletePreview() {
    return Joi.object({
      q: Joi.string().allow(""),
      categorySuggestion: Joi.number(),
      brandSuggestion: Joi.number(),
      collectionSuggestion: Joi.number(),
      productSuggestion: Joi.number(),
      querySuggestion: Joi.number(),
    }).required();
  }

  /** @returns {GetAutocompleteSettingsParam} */
  static getAutocompleteSettings() {
    return Joi.object({}).required();
  }

  /** @returns {GetCatalogConfigurationParam} */
  static getCatalogConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {GetCatalogInsightsParam} */
  static getCatalogInsights() {
    return Joi.object({
      brand: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCategoriesParam} */
  static getCategories() {
    return Joi.object({
      department: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCollectionDetailParam} */
  static getCollectionDetail() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCollectionItemsParam} */
  static getCollectionItems() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      sortOn: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      isPinned: Joi.boolean(),
      q: Joi.string().allow(""),
      isExcluded: Joi.boolean(),
    }).required();
  }

  /** @returns {GetConfigurationByTypeParam} */
  static getConfigurationByType() {
    return Joi.object({
      type: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetConfigurationMetadataParam} */
  static getConfigurationMetadata() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      templateSlug: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetConfigurationsParam} */
  static getConfigurations() {
    return Joi.object({}).required();
  }

  /** @returns {GetConfigurationsFilterMetadataParam} */
  static getConfigurationsFilterMetadata() {
    return Joi.object({
      filter: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetDepartmentsParam} */
  static getDepartments() {
    return Joi.object({}).required();
  }

  /** @returns {GetDiscountedInventoryBySizeIdentifierParam} */
  static getDiscountedInventoryBySizeIdentifier() {
    return Joi.object({
      itemId: Joi.number().required(),
      sizeIdentifier: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      locationIds: Joi.array().items(Joi.number()),
    }).required();
  }

  /** @returns {GetGroupConfigurationsParam} */
  static getGroupConfigurations() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      search: Joi.string().allow(""),
      templateSlug: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetListingConfigurationsParam} */
  static getListingConfigurations() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      search: Joi.string().allow(""),
      uids: Joi.array().items(Joi.number()),
    }).required();
  }

  /** @returns {GetLivePreviewParam} */
  static getLivePreview() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      searchKeyword: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetMerchandisingQueryParam} */
  static getMerchandisingQuery() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMerchandisingRuleBoostActionParam} */
  static getMerchandisingRuleBoostAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMerchandisingRuleBuryActionParam} */
  static getMerchandisingRuleBuryAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMerchandisingRuleHideActionParam} */
  static getMerchandisingRuleHideAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMerchandisingRulePinActionParam} */
  static getMerchandisingRulePinAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMerchandisingRulesParam} */
  static getMerchandisingRules() {
    return Joi.object({
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetProductDetailBySlugParam} */
  static getProductDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetProductsInPriceFactoryByZoneIdParam} */
  static getProductsInPriceFactoryByZoneId() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      zoneId: Joi.string().allow("").required(),
      itemId: Joi.number(),
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetQueryFiltersParam} */
  static getQueryFilters() {
    return Joi.object({}).required();
  }

  /** @returns {GetSearchConfigurationParam} */
  static getSearchConfiguration() {
    return Joi.object({}).required();
  }

  /** @returns {GetSearchKeywordsParam} */
  static getSearchKeywords() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSearchRerankParam} */
  static getSearchRerank() {
    return Joi.object({}).required();
  }

  /** @returns {GetSearchRerankDetailParam} */
  static getSearchRerankDetail() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSynonymsParam} */
  static getSynonyms() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    }).required();
  }

  /** @returns {PollBulkSynonymsParam} */
  static pollBulkSynonyms() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {PollPriceFactoryJobsParam} */
  static pollPriceFactoryJobs() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
      stage: Joi.array().items(Joi.string().allow("")),
      isActive: Joi.boolean(),
      q: Joi.string().allow(""),
      type: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  /** @returns {PollProductPriceFactoryBulkJobParam} */
  static pollProductPriceFactoryBulkJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      jobId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ProcessBulkSynonymsParam} */
  static processBulkSynonyms() {
    return Joi.object({
      body: CatalogPlatformModel.SynonymBulkProcessRequestSchema().required(),
    }).required();
  }

  /** @returns {ProcessProductPriceFactoryBulkJobParam} */
  static processProductPriceFactoryBulkJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      jobId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest().required(),
    }).required();
  }

  /** @returns {SampleBulkSynonymsFileParam} */
  static sampleBulkSynonymsFile() {
    return Joi.object({
      type: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {SaveMerchandisingRulesParam} */
  static saveMerchandisingRules() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.MerchandisingRuleSave().required(),
    }).required();
  }

  /** @returns {UpdateAllowSingleParam} */
  static updateAllowSingle() {
    return Joi.object({
      body: CatalogPlatformModel.AllowSingleRequest().required(),
    }).required();
  }

  /** @returns {UpdateAppBrandParam} */
  static updateAppBrand() {
    return Joi.object({
      brandUid: Joi.number().required(),
      body: CatalogPlatformModel.ApplicationBrandJson().required(),
    }).required();
  }

  /** @returns {UpdateAppCategoryParam} */
  static updateAppCategory() {
    return Joi.object({
      categoryUid: Joi.number().required(),
      body: CatalogPlatformModel.ApplicationCategoryJson().required(),
    }).required();
  }

  /** @returns {UpdateAppCategoryReturnConfigurationParam} */
  static updateAppCategoryReturnConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.BaseAppCategoryReturnConfig().required(),
    }).required();
  }

  /** @returns {UpdateAppDepartmentParam} */
  static updateAppDepartment() {
    return Joi.object({
      departmentUid: Joi.number().required(),
      body: CatalogPlatformModel.ApplicationDepartmentJson().required(),
    }).required();
  }

  /** @returns {UpdateAppLocationParam} */
  static updateAppLocation() {
    return Joi.object({
      storeUid: Joi.number().required(),
      body: CatalogPlatformModel.ApplicationStoreJson().required(),
    }).required();
  }

  /** @returns {UpdateAppProductParam} */
  static updateAppProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
      body: CatalogPlatformModel.ApplicationItemMeta().required(),
    }).required();
  }

  /** @returns {UpdateAppReturnConfigurationParam} */
  static updateAppReturnConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.CreateUpdateAppReturnConfig().required(),
    }).required();
  }

  /** @returns {UpdateAutocompleteKeywordParam} */
  static updateAutocompleteKeyword() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CreateAutocompleteKeyword().required(),
    }).required();
  }

  /** @returns {UpdateAutocompleteSettingsParam} */
  static updateAutocompleteSettings() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.AutocompleteRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateCollectionParam} */
  static updateCollection() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.UpdateCollection().required(),
    }).required();
  }

  /** @returns {UpdateDefaultSortParam} */
  static updateDefaultSort() {
    return Joi.object({
      body: CatalogPlatformModel.DefaultKeyRequest().required(),
    }).required();
  }

  /** @returns {UpdateGroupConfigurationParam} */
  static updateGroupConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      groupSlug: Joi.string().allow("").required(),
      body: CatalogPlatformModel.AppConfigurationDetail().required(),
    }).required();
  }

  /** @returns {UpdateListingConfigurationParam} */
  static updateListingConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      configId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.AppConfigurationsFilterResponse().required(),
    }).required();
  }

  /** @returns {UpdateMerchandisingRuleBoostActionParam} */
  static updateMerchandisingRuleBoostAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.PostMerchandisingRuleBoostAction().required(),
    }).required();
  }

  /** @returns {UpdateMerchandisingRuleBuryActionParam} */
  static updateMerchandisingRuleBuryAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.PostMerchandisingRuleBoostAction().required(),
    }).required();
  }

  /** @returns {UpdateMerchandisingRuleHideActionParam} */
  static updateMerchandisingRuleHideAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.HideRequest().required(),
    }).required();
  }

  /** @returns {UpdateMerchandisingRulePinActionParam} */
  static updateMerchandisingRulePinAction() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.PinRequest().required(),
    }).required();
  }

  /** @returns {UpdateMerchandisingRuleQueryParam} */
  static updateMerchandisingRuleQuery() {
    return Joi.object({
      merchandisingRuleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.MerchandisingRuleQueryPost().required(),
    }).required();
  }

  /** @returns {UpdateSearchConfigurationParam} */
  static updateSearchConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.UpdateSearchConfigurationRequest().required(),
    }).required();
  }

  /** @returns {UpdateSearchKeywordsParam} */
  static updateSearchKeywords() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CreateSearchKeyword().required(),
    }).required();
  }

  /** @returns {UpdateSearchRerankConfigurationParam} */
  static updateSearchRerankConfiguration() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.UpdateSearchRerankRequest().required(),
    }).required();
  }

  /** @returns {UpdateSynonymsParam} */
  static updateSynonyms() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.SynonymCreateRequestSchema().required(),
    }).required();
  }

  /** @returns {UploadSynonymsParam} */
  static uploadSynonyms() {
    return Joi.object({
      body: CatalogPlatformModel.SynonymUploadRequestSchema().required(),
    }).required();
  }

  /** @returns {ValidateBulkSynonymsParam} */
  static validateBulkSynonyms() {
    return Joi.object({
      body: CatalogPlatformModel.SynonymBulkValidateRequestSchema().required(),
    }).required();
  }

  /** @returns {ValidateProductPriceFactoryBulkJobParam} */
  static validateProductPriceFactoryBulkJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      jobId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobRequest().required(),
    }).required();
  }
}

module.exports = CatalogPlatformApplicationValidator;
