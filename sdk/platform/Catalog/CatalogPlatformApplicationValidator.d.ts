export = CatalogPlatformApplicationValidator;
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
declare class CatalogPlatformApplicationValidator {
    /** @returns {AddCollectionItemsParam} */
    static addCollectionItems(): AddCollectionItemsParam;
    /** @returns {CreateAppCategoryReturnConfigurationParam} */
    static createAppCategoryReturnConfiguration(): CreateAppCategoryReturnConfigurationParam;
    /** @returns {CreateAppReturnConfigurationParam} */
    static createAppReturnConfiguration(): CreateAppReturnConfigurationParam;
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
    /** @returns {CreateSearchConfigurationParam} */
    static createSearchConfiguration(): CreateSearchConfigurationParam;
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
    /** @returns {GetAllCollectionsParam} */
    static getAllCollections(): GetAllCollectionsParam;
    /** @returns {GetAllSearchKeywordParam} */
    static getAllSearchKeyword(): any;
    /** @returns {GetAppCategoryReturnConfigParam} */
    static getAppCategoryReturnConfig(): any;
    /** @returns {GetAppInventoryParam} */
    static getAppInventory(): GetAppInventoryParam;
    /** @returns {GetAppLocationsParam} */
    static getAppLocations(): GetAppLocationsParam;
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
    static getAutocompleteConfig(): any;
    /** @returns {GetAutocompleteKeywordDetailParam} */
    static getAutocompleteKeywordDetail(): GetAutocompleteKeywordDetailParam;
    /** @returns {GetCatalogConfigurationParam} */
    static getCatalogConfiguration(): any;
    /** @returns {GetCatalogInsightsParam} */
    static getCatalogInsights(): GetCatalogInsightsParam;
    /** @returns {GetCategoriesParam} */
    static getCategories(): GetCategoriesParam;
    /** @returns {GetCollectionDetailParam} */
    static getCollectionDetail(): GetCollectionDetailParam;
    /** @returns {GetCollectionItemsParam} */
    static getCollectionItems(): GetCollectionItemsParam;
    /** @returns {GetConfigurationByTypeParam} */
    static getConfigurationByType(): GetConfigurationByTypeParam;
    /** @returns {GetConfigurationMetadataParam} */
    static getConfigurationMetadata(): GetConfigurationMetadataParam;
    /** @returns {GetConfigurationsParam} */
    static getConfigurations(): any;
    /** @returns {GetDepartmentsParam} */
    static getDepartments(): any;
    /** @returns {GetDiscountedInventoryBySizeIdentifierParam} */
    static getDiscountedInventoryBySizeIdentifier(): GetDiscountedInventoryBySizeIdentifierParam;
    /** @returns {GetGroupConfigurationsParam} */
    static getGroupConfigurations(): GetGroupConfigurationsParam;
    /** @returns {GetListingConfigurationsParam} */
    static getListingConfigurations(): GetListingConfigurationsParam;
    /** @returns {GetProductDetailBySlugParam} */
    static getProductDetailBySlug(): GetProductDetailBySlugParam;
    /** @returns {GetQueryFiltersParam} */
    static getQueryFilters(): any;
    /** @returns {GetSearchConfigurationParam} */
    static getSearchConfiguration(): any;
    /** @returns {GetSearchKeywordsParam} */
    static getSearchKeywords(): GetSearchKeywordsParam;
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
    /** @returns {UpdateCollectionParam} */
    static updateCollection(): UpdateCollectionParam;
    /** @returns {UpdateDefaultSortParam} */
    static updateDefaultSort(): UpdateDefaultSortParam;
    /** @returns {UpdateGroupConfigurationParam} */
    static updateGroupConfiguration(): UpdateGroupConfigurationParam;
    /** @returns {UpdateListingConfigurationParam} */
    static updateListingConfiguration(): UpdateListingConfigurationParam;
    /** @returns {UpdateSearchConfigurationParam} */
    static updateSearchConfiguration(): UpdateSearchConfigurationParam;
    /** @returns {UpdateSearchKeywordsParam} */
    static updateSearchKeywords(): UpdateSearchKeywordsParam;
}
declare namespace CatalogPlatformApplicationValidator {
    export { AddCollectionItemsParam, CreateAppCategoryReturnConfigurationParam, CreateAppReturnConfigurationParam, CreateCollectionParam, CreateConfigurationByTypeParam, CreateConfigurationProductListingParam, CreateCustomAutocompleteRuleParam, CreateCustomKeywordParam, CreateGroupConfigurationParam, CreateListingConfigurationParam, CreateSearchConfigurationParam, DeleteAppCategoryReturnConfigurationParam, DeleteAutocompleteKeywordParam, DeleteCollectionParam, DeleteGroupConfigurationParam, DeleteListingConfigurationParam, DeleteSearchConfigurationParam, DeleteSearchKeywordsParam, GetAllCollectionsParam, GetAllSearchKeywordParam, GetAppCategoryReturnConfigParam, GetAppInventoryParam, GetAppLocationsParam, GetAppProductParam, GetAppProductsParam, GetAppReturnConfigurationParam, GetAppicationProductsParam, GetApplicationBrandListingParam, GetApplicationBrandsParam, GetApplicationCategoryListingParam, GetApplicationDepartmentListingParam, GetAutocompleteConfigParam, GetAutocompleteKeywordDetailParam, GetCatalogConfigurationParam, GetCatalogInsightsParam, GetCategoriesParam, GetCollectionDetailParam, GetCollectionItemsParam, GetConfigurationByTypeParam, GetConfigurationMetadataParam, GetConfigurationsParam, GetDepartmentsParam, GetDiscountedInventoryBySizeIdentifierParam, GetGroupConfigurationsParam, GetListingConfigurationsParam, GetProductDetailBySlugParam, GetQueryFiltersParam, GetSearchConfigurationParam, GetSearchKeywordsParam, UpdateAllowSingleParam, UpdateAppBrandParam, UpdateAppCategoryParam, UpdateAppCategoryReturnConfigurationParam, UpdateAppDepartmentParam, UpdateAppLocationParam, UpdateAppProductParam, UpdateAppReturnConfigurationParam, UpdateAutocompleteKeywordParam, UpdateCollectionParam, UpdateDefaultSortParam, UpdateGroupConfigurationParam, UpdateListingConfigurationParam, UpdateSearchConfigurationParam, UpdateSearchKeywordsParam };
}
type AddCollectionItemsParam = {
    /**
     * - A `id` is a unique identifier of a collection.
     */
    id: string;
    body: CatalogPlatformModel.CollectionItemUpdate;
};
type CreateAppCategoryReturnConfigurationParam = {
    body: CatalogPlatformModel.BaseAppCategoryReturnConfig;
};
type CreateAppReturnConfigurationParam = {
    body: CatalogPlatformModel.CreateUpdateAppReturnConfig;
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
    body: CatalogPlatformModel.AppConfigurationDetail;
};
type CreateListingConfigurationParam = {
    /**
     * - A `config_type` is a unique identifier for a
     * particular listing configuration type.
     */
    configType: string;
    body: CatalogPlatformModel.AppConfigurationsSort;
};
type CreateSearchConfigurationParam = {
    body: CatalogPlatformModel.CreateSearchConfigurationRequest;
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
    tags?: string[];
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
    uid?: number[];
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
};
type GetAppProductParam = {
    /**
     * - Product id for a particular product.
     */
    itemId: string;
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
    itemIds?: number[];
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
     * - Helps to sort the brands list on the basis
     * of uid list.
     */
    brandId?: number[];
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
type GetAutocompleteKeywordDetailParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to retrieve.
     */
    id: string;
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
type GetCollectionItemsParam = {
    /**
     * - A `id` is a unique identifier of a collection.
     */
    id: string;
    /**
     * - Each response will contain sort_on param, which
     * should be sent back to make pagination work.
     */
    sortOn?: string;
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
type GetDiscountedInventoryBySizeIdentifierParam = {
    /**
     * - Item code of the product of which size is to be get.
     */
    itemId: number;
    /**
     * - Size Identifier (Seller Identifier or
     * Primary Identifier) of which inventory is to get.
     */
    sizeIdentifier: string;
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
     * - Search with help of store code.
     */
    q?: string;
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
};
type GetProductDetailBySlugParam = {
    /**
     * - The unique identifier of a product. i.e; `slug` of
     * a product. You can retrieve these from the APIs that list products like
     * **v1.0/products/**
     */
    slug: string;
};
type GetSearchKeywordsParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to retrieve.
     */
    id: string;
};
type UpdateAllowSingleParam = {
    body: CatalogPlatformModel.AllowSingleRequest;
};
type UpdateAppBrandParam = {
    /**
     * - Brand id for which the custom_json is associated.
     */
    brandUid: string;
    body: CatalogPlatformModel.ApplicationBrandJson;
};
type UpdateAppCategoryParam = {
    /**
     * - Category id for which the custom_json is associated.
     */
    categoryUid: string;
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
    departmentUid: string;
    body: CatalogPlatformModel.ApplicationDepartmentJson;
};
type UpdateAppLocationParam = {
    /**
     * - Store id for which the custom_json is associated.
     */
    storeUid: string;
    body: CatalogPlatformModel.ApplicationStoreJson;
};
type UpdateAppProductParam = {
    /**
     * - Product id for which the custom_meta is associated.
     */
    itemId: string;
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
    body: CatalogPlatformModel.AppConfigurationsSort;
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
type DeleteSearchConfigurationParam = any;
type GetAllSearchKeywordParam = any;
type GetAppCategoryReturnConfigParam = any;
type GetAppReturnConfigurationParam = any;
type GetAutocompleteConfigParam = any;
type GetCatalogConfigurationParam = any;
type GetConfigurationsParam = any;
type GetDepartmentsParam = any;
type GetQueryFiltersParam = any;
type GetSearchConfigurationParam = any;
import CatalogPlatformModel = require("./CatalogPlatformModel");
