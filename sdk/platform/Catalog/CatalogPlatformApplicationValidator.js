const Joi = require("joi");

const CatalogPlatformModel = require("./CatalogPlatformModel");

/**
 * @typedef AddCollectionItemsParam
 * @property {string} id - A `id` is a unique identifier of a collection.
 * @property {CatalogPlatformModel.CollectionItemUpdate} body
 */

/**
 * @typedef CreateAppCategoryReturnConfigurationParam
 * @property {CatalogPlatformModel.BaseAppCategoryReturnConfig} body
 */

/**
 * @typedef CreateAppReturnConfigurationParam
 * @property {CatalogPlatformModel.CreateUpdateAppReturnConfig} body
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
 * @property {CatalogPlatformModel.AppConfigurationDetail} body
 */

/**
 * @typedef CreateListingConfigurationParam
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular listing configuration type.
 * @property {CatalogPlatformModel.AppConfigurationsSort} body
 */

/**
 * @typedef CreateSearchConfigurationParam
 * @property {CatalogPlatformModel.CreateSearchConfigurationRequest} body
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
 * @typedef GetAllCollectionsParam
 * @property {string} [q] - Get collection list filtered by q string,
 * @property {string} [scheduleStatus] - Get collection list filtered by scheduled status,
 * @property {string} [type] - Type of the collections
 * @property {string[]} [tags] - Each response will contain next_id param, which
 *   should be sent back to make pagination work.
 * @property {boolean} [isActive] - Get collections filtered by active status.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */

/** @typedef GetAllSearchKeywordParam */

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
 * @property {number[]} [uid] - Helps to sort the location list on the basis of uid list.
 * @property {string} [q] - Query that is to be searched.
 * @property {string} [stage] - To filter companies on basis of verified or
 *   unverified companies.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 20.
 */

/**
 * @typedef GetAppProductParam
 * @property {string} itemId - Product id for a particular product.
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
 * @property {number[]} [itemIds] - Item Ids of product
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

/** @typedef GetAutocompleteConfigParam */

/**
 * @typedef GetAutocompleteKeywordDetailParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to retrieve.
 */

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
 * @typedef GetCollectionItemsParam
 * @property {string} id - A `id` is a unique identifier of a collection.
 * @property {string} [sortOn] - Each response will contain sort_on param, which
 *   should be sent back to make pagination work.
 * @property {string} [pageId] - Each response will contain next_id param, which
 *   should be sent back to make pagination work.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
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

/** @typedef GetDepartmentsParam */

/**
 * @typedef GetDiscountedInventoryBySizeIdentifierParam
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} sizeIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search with help of store code.
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
 */

/**
 * @typedef GetProductDetailBySlugParam
 * @property {string} slug - The unique identifier of a product. i.e; `slug` of
 *   a product. You can retrieve these from the APIs that list products like
 *   **v1.0/products/**
 */

/** @typedef GetQueryFiltersParam */

/** @typedef GetSearchConfigurationParam */

/**
 * @typedef GetSearchKeywordsParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to retrieve.
 */

/**
 * @typedef UpdateAllowSingleParam
 * @property {CatalogPlatformModel.AllowSingleRequest} body
 */

/**
 * @typedef UpdateAppBrandParam
 * @property {string} brandUid - Brand id for which the custom_json is associated.
 * @property {CatalogPlatformModel.ApplicationBrandJson} body
 */

/**
 * @typedef UpdateAppCategoryParam
 * @property {string} categoryUid - Category id for which the custom_json is associated.
 * @property {CatalogPlatformModel.ApplicationCategoryJson} body
 */

/**
 * @typedef UpdateAppCategoryReturnConfigurationParam
 * @property {CatalogPlatformModel.BaseAppCategoryReturnConfig} body
 */

/**
 * @typedef UpdateAppDepartmentParam
 * @property {string} departmentUid - Department id for which the custom_json is
 *   associated.
 * @property {CatalogPlatformModel.ApplicationDepartmentJson} body
 */

/**
 * @typedef UpdateAppLocationParam
 * @property {string} storeUid - Store id for which the custom_json is associated.
 * @property {CatalogPlatformModel.ApplicationStoreJson} body
 */

/**
 * @typedef UpdateAppProductParam
 * @property {string} itemId - Product id for which the custom_meta is associated.
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
 * @property {CatalogPlatformModel.AppConfigurationsSort} body
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

class CatalogPlatformApplicationValidator {
  /** @returns {AddCollectionItemsParam} */
  static addCollectionItems() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CollectionItemUpdate().required(),
    }).required();
  }

  /** @returns {CreateAppCategoryReturnConfigurationParam} */
  static createAppCategoryReturnConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.BaseAppCategoryReturnConfig().required(),
    }).required();
  }

  /** @returns {CreateAppReturnConfigurationParam} */
  static createAppReturnConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.CreateUpdateAppReturnConfig().required(),
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
      body: CatalogPlatformModel.AppConfigurationDetail().required(),
    }).required();
  }

  /** @returns {CreateListingConfigurationParam} */
  static createListingConfiguration() {
    return Joi.object({
      configType: Joi.string().allow("").required(),
      body: CatalogPlatformModel.AppConfigurationsSort().required(),
    }).required();
  }

  /** @returns {CreateSearchConfigurationParam} */
  static createSearchConfiguration() {
    return Joi.object({
      body: CatalogPlatformModel.CreateSearchConfigurationRequest().required(),
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

  /** @returns {GetAllCollectionsParam} */
  static getAllCollections() {
    return Joi.object({
      q: Joi.string().allow(""),
      scheduleStatus: Joi.string().allow(""),
      type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      isActive: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetAllSearchKeywordParam} */
  static getAllSearchKeyword() {
    return Joi.object({}).required();
  }

  /** @returns {GetAppCategoryReturnConfigParam} */
  static getAppCategoryReturnConfig() {
    return Joi.object({}).required();
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
    }).required();
  }

  /** @returns {GetAppProductParam} */
  static getAppProduct() {
    return Joi.object({
      itemId: Joi.string().allow("").required(),
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

  /** @returns {GetAppicationProductsParam} */
  static getAppicationProducts() {
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
      itemIds: Joi.array().items(Joi.number()),
    }).required();
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

  /** @returns {GetAutocompleteConfigParam} */
  static getAutocompleteConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetAutocompleteKeywordDetailParam} */
  static getAutocompleteKeywordDetail() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
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
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
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

  /** @returns {GetDepartmentsParam} */
  static getDepartments() {
    return Joi.object({}).required();
  }

  /** @returns {GetDiscountedInventoryBySizeIdentifierParam} */
  static getDiscountedInventoryBySizeIdentifier() {
    return Joi.object({
      itemId: Joi.number().required(),
      sizeIdentifier: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
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
    }).required();
  }

  /** @returns {GetProductDetailBySlugParam} */
  static getProductDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
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

  /** @returns {UpdateAllowSingleParam} */
  static updateAllowSingle() {
    return Joi.object({
      body: CatalogPlatformModel.AllowSingleRequest().required(),
    }).required();
  }

  /** @returns {UpdateAppBrandParam} */
  static updateAppBrand() {
    return Joi.object({
      brandUid: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ApplicationBrandJson().required(),
    }).required();
  }

  /** @returns {UpdateAppCategoryParam} */
  static updateAppCategory() {
    return Joi.object({
      categoryUid: Joi.string().allow("").required(),
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
      departmentUid: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ApplicationDepartmentJson().required(),
    }).required();
  }

  /** @returns {UpdateAppLocationParam} */
  static updateAppLocation() {
    return Joi.object({
      storeUid: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ApplicationStoreJson().required(),
    }).required();
  }

  /** @returns {UpdateAppProductParam} */
  static updateAppProduct() {
    return Joi.object({
      itemId: Joi.string().allow("").required(),
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
      body: CatalogPlatformModel.AppConfigurationsSort().required(),
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
}

module.exports = CatalogPlatformApplicationValidator;
