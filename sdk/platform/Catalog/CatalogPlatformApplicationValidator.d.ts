export = CatalogPlatformApplicationValidator;
/**
 * @typedef addCollectionItems
 * @property {string} id - A `id` is a unique identifier of a collection.
 * @property {CatalogPlatformModel.CollectionItemUpdate} body
 */
/**
 * @typedef createCollection
 * @property {CatalogPlatformModel.CreateCollection} body
 */
/**
 * @typedef createConfigurationByType
 * @property {string} type - Type can be brands, categories etc.
 * @property {CatalogPlatformModel.AppConfiguration} body
 */
/**
 * @typedef createConfigurationProductListing
 * @property {CatalogPlatformModel.AppConfiguration} body
 */
/**
 * @typedef createCustomAutocompleteRule
 * @property {CatalogPlatformModel.CreateAutocompleteKeyword} body
 */
/**
 * @typedef createCustomKeyword
 * @property {CatalogPlatformModel.CreateSearchKeyword} body
 */
/**
 * @typedef createGroupConfiguration
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular group configuration type.
 * @property {CatalogPlatformModel.AppConfigurationDetail} body
 */
/**
 * @typedef createListingConfiguration
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular listing configuration type.
 * @property {CatalogPlatformModel.AppConfigurationsSort} body
 */
/**
 * @typedef deleteAutocompleteKeyword
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 */
/**
 * @typedef deleteCollection
 * @property {string} id - A `id` is a unique identifier of a collection.
 */
/**
 * @typedef deleteGroupConfiguration
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular group configuration type.
 * @property {string} groupSlug - A `group_slug` is a unique identifier of a
 *   particular configuration.
 */
/**
 * @typedef deleteListingConfiguration
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular listing configuration type.
 * @property {string} configId - A `config_id` is a unique identifier of a
 *   particular configuration.
 */
/**
 * @typedef deleteSearchKeywords
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 */
/**
 * @typedef getAllCollections
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
/** @typedef getAllSearchKeyword */
/**
 * @typedef getAppInventory
 * @property {number[]} [itemIds] - The Item Id of the product.
 * @property {number[]} [storeIds] - The Store Id of products to fetch inventory.
 * @property {number[]} [brandIds] - The Brand Id of products to fetch inventory.
 * @property {string[]} [sellerIdentifiers] - Unique seller_identifier of the product.
 * @property {string} [timestamp] - Timestamp in UTC format (2020-07-23T10:27:50Z)
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 * @property {string} [pageId] - Page ID to retrieve next set of results.
 */
/**
 * @typedef getAppLocations
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
 * @typedef getAppProduct
 * @property {string} itemId - Product id for a particular product.
 */
/**
 * @typedef getAppProducts
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
/**
 * @typedef getAppicationProducts
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
 * @typedef getApplicationBrandListing
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with brand name.Use this parameter to
 *   search brands by brand name.
 */
/**
 * @typedef getApplicationBrands
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
 * @typedef getApplicationCategoryListing
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
 * @typedef getApplicationDepartmentListing
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search query with brand name.Use this parameter to
 *   search department by name.
 */
/** @typedef getAutocompleteConfig */
/**
 * @typedef getAutocompleteKeywordDetail
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to retrieve.
 */
/** @typedef getCatalogConfiguration */
/**
 * @typedef getCatalogInsights
 * @property {string} [brand] - Brand slug
 */
/**
 * @typedef getCategories
 * @property {string} [department] - The name of the department. Use this
 *   parameter to filter products by a particular department. See below the list
 *   of available departments. You can retrieve available departments from the
 *   **v1.0/departments/** API
 */
/**
 * @typedef getCollectionDetail
 * @property {string} slug - A `slug` is a human readable, URL friendly unique
 *   identifier of an object. Pass the `slug` of the collection which you want
 *   to retrieve.
 */
/**
 * @typedef getCollectionItems
 * @property {string} id - A `id` is a unique identifier of a collection.
 * @property {string} [sortOn] - Each response will contain sort_on param, which
 *   should be sent back to make pagination work.
 * @property {string} [pageId] - Each response will contain next_id param, which
 *   should be sent back to make pagination work.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef getConfigurationByType
 * @property {string} type - Type can be brands, categories etc.
 */
/**
 * @typedef getConfigurationMetadata
 * @property {string} configType - A `config_type` is an identifier that defines
 *   a specific type of configuration.
 * @property {string} [templateSlug] - Get configuration list filtered by
 *   `template_slug` string. This is for the details and comparision groups.
 */
/** @typedef getConfigurations */
/** @typedef getDepartments */
/**
 * @typedef getDiscountedInventoryBySizeIdentifier
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
 * @typedef getGroupConfigurations
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
 * @typedef getListingConfigurations
 * @property {string} configType - A `config_type` is an identifier that defines
 *   a specific type of configuration.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [search] - Get configuration list filtered by `search` string.
 */
/**
 * @typedef getProductDetailBySlug
 * @property {string} slug - The unique identifier of a product. i.e; `slug` of
 *   a product. You can retrieve these from the APIs that list products like
 *   **v1.0/products/**
 */
/**
 * @typedef getProductSizeSellers
 * @property {string} itemId - Item code of the product of which size is to be get.
 * @property {string} size - A string indicating the size of the product, e.g.
 *   S, M, XL. You can get slug value from the endpoint
 *   /service/application/catalog/v1.0/products/sizes
 * @property {string} [pincode] - The 6-digit PIN Code of the area near which
 *   the selling locations should be searched, e.g. 400059
 * @property {string} [strategy] - Sort stores on the basis of strategy. eg,
 *   fast-delivery, low-price, optimal.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef getQueryFilters */
/**
 * @typedef getSearchKeywords
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to retrieve.
 */
/**
 * @typedef updateAllowSingle
 * @property {CatalogPlatformModel.AllowSingleRequest} body
 */
/**
 * @typedef updateAppBrand
 * @property {string} brandUid - Brand id for which the custom_json is associated.
 * @property {CatalogPlatformModel.ApplicationBrandJson} body
 */
/**
 * @typedef updateAppCategory
 * @property {string} categoryUid - Category id for which the custom_json is associated.
 * @property {CatalogPlatformModel.ApplicationCategoryJson} body
 */
/**
 * @typedef updateAppDepartment
 * @property {string} departmentUid - Department id for which the custom_json is
 *   associated.
 * @property {CatalogPlatformModel.ApplicationDepartmentJson} body
 */
/**
 * @typedef updateAppLocation
 * @property {string} storeUid - Store id for which the custom_json is associated.
 * @property {CatalogPlatformModel.ApplicationStoreJson} body
 */
/**
 * @typedef updateAppProduct
 * @property {string} itemId - Product id for which the custom_meta is associated.
 * @property {CatalogPlatformModel.ApplicationItemMeta} body
 */
/**
 * @typedef updateAutocompleteKeyword
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 * @property {CatalogPlatformModel.CreateAutocompleteKeyword} body
 */
/**
 * @typedef updateCollection
 * @property {string} id - A `id` is a unique identifier of a collection.
 * @property {CatalogPlatformModel.UpdateCollection} body
 */
/**
 * @typedef updateDefaultSort
 * @property {CatalogPlatformModel.DefaultKeyRequest} body
 */
/**
 * @typedef updateGroupConfiguration
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular group configuration type.
 * @property {string} groupSlug - A `group_slug` is a unique identifier of a
 *   particular configuration.
 * @property {CatalogPlatformModel.AppConfigurationDetail} body
 */
/**
 * @typedef updateListingConfiguration
 * @property {string} configType - A `config_type` is a unique identifier for a
 *   particular listing configuration type.
 * @property {string} configId - A `config_id` is a unique identifier of a
 *   particular configuration.
 * @property {CatalogPlatformModel.AppConfigurationsSort} body
 */
/**
 * @typedef updateSearchKeywords
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 * @property {CatalogPlatformModel.CreateSearchKeyword} body
 */
declare class CatalogPlatformApplicationValidator {
}
declare namespace CatalogPlatformApplicationValidator {
    export { addCollectionItems, createCollection, createConfigurationByType, createConfigurationProductListing, createCustomAutocompleteRule, createCustomKeyword, createGroupConfiguration, createListingConfiguration, deleteAutocompleteKeyword, deleteCollection, deleteGroupConfiguration, deleteListingConfiguration, deleteSearchKeywords, getAllCollections, getAllSearchKeyword, getAppInventory, getAppLocations, getAppProduct, getAppProducts, getAppicationProducts, getApplicationBrandListing, getApplicationBrands, getApplicationCategoryListing, getApplicationDepartmentListing, getAutocompleteConfig, getAutocompleteKeywordDetail, getCatalogConfiguration, getCatalogInsights, getCategories, getCollectionDetail, getCollectionItems, getConfigurationByType, getConfigurationMetadata, getConfigurations, getDepartments, getDiscountedInventoryBySizeIdentifier, getGroupConfigurations, getListingConfigurations, getProductDetailBySlug, getProductSizeSellers, getQueryFilters, getSearchKeywords, updateAllowSingle, updateAppBrand, updateAppCategory, updateAppDepartment, updateAppLocation, updateAppProduct, updateAutocompleteKeyword, updateCollection, updateDefaultSort, updateGroupConfiguration, updateListingConfiguration, updateSearchKeywords };
}
/** @returns {addCollectionItems} */
declare function addCollectionItems(): addCollectionItems;
type addCollectionItems = {
    /**
     * - A `id` is a unique identifier of a collection.
     */
    id: string;
    body: CatalogPlatformModel.CollectionItemUpdate;
};
/** @returns {createCollection} */
declare function createCollection(): createCollection;
type createCollection = {
    body: CatalogPlatformModel.CreateCollection;
};
/** @returns {createConfigurationByType} */
declare function createConfigurationByType(): createConfigurationByType;
type createConfigurationByType = {
    /**
     * - Type can be brands, categories etc.
     */
    type: string;
    body: CatalogPlatformModel.AppConfiguration;
};
/** @returns {createConfigurationProductListing} */
declare function createConfigurationProductListing(): createConfigurationProductListing;
type createConfigurationProductListing = {
    body: CatalogPlatformModel.AppConfiguration;
};
/** @returns {createCustomAutocompleteRule} */
declare function createCustomAutocompleteRule(): createCustomAutocompleteRule;
type createCustomAutocompleteRule = {
    body: CatalogPlatformModel.CreateAutocompleteKeyword;
};
/** @returns {createCustomKeyword} */
declare function createCustomKeyword(): createCustomKeyword;
type createCustomKeyword = {
    body: CatalogPlatformModel.CreateSearchKeyword;
};
/** @returns {createGroupConfiguration} */
declare function createGroupConfiguration(): createGroupConfiguration;
type createGroupConfiguration = {
    /**
     * - A `config_type` is a unique identifier for a
     * particular group configuration type.
     */
    configType: string;
    body: CatalogPlatformModel.AppConfigurationDetail;
};
/** @returns {createListingConfiguration} */
declare function createListingConfiguration(): createListingConfiguration;
type createListingConfiguration = {
    /**
     * - A `config_type` is a unique identifier for a
     * particular listing configuration type.
     */
    configType: string;
    body: CatalogPlatformModel.AppConfigurationsSort;
};
/** @returns {deleteAutocompleteKeyword} */
declare function deleteAutocompleteKeyword(): deleteAutocompleteKeyword;
type deleteAutocompleteKeyword = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
};
/** @returns {deleteCollection} */
declare function deleteCollection(): deleteCollection;
type deleteCollection = {
    /**
     * - A `id` is a unique identifier of a collection.
     */
    id: string;
};
/** @returns {deleteGroupConfiguration} */
declare function deleteGroupConfiguration(): deleteGroupConfiguration;
type deleteGroupConfiguration = {
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
/** @returns {deleteListingConfiguration} */
declare function deleteListingConfiguration(): deleteListingConfiguration;
type deleteListingConfiguration = {
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
/** @returns {deleteSearchKeywords} */
declare function deleteSearchKeywords(): deleteSearchKeywords;
type deleteSearchKeywords = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
};
/** @returns {getAllCollections} */
declare function getAllCollections(): getAllCollections;
type getAllCollections = {
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
/** @returns {getAllSearchKeyword} */
declare function getAllSearchKeyword(): any;
type getAllSearchKeyword = any;
/** @returns {getAppInventory} */
declare function getAppInventory(): getAppInventory;
type getAppInventory = {
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
/** @returns {getAppLocations} */
declare function getAppLocations(): getAppLocations;
type getAppLocations = {
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
/** @returns {getAppProduct} */
declare function getAppProduct(): getAppProduct;
type getAppProduct = {
    /**
     * - Product id for a particular product.
     */
    itemId: string;
};
/** @returns {getAppProducts} */
declare function getAppProducts(): getAppProducts;
type getAppProducts = {
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
/** @returns {getAppicationProducts} */
declare function getAppicationProducts(): getAppicationProducts;
type getAppicationProducts = {
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
/** @returns {getApplicationBrandListing} */
declare function getApplicationBrandListing(): getApplicationBrandListing;
type getApplicationBrandListing = {
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
/** @returns {getApplicationBrands} */
declare function getApplicationBrands(): getApplicationBrands;
type getApplicationBrands = {
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
/** @returns {getApplicationCategoryListing} */
declare function getApplicationCategoryListing(): getApplicationCategoryListing;
type getApplicationCategoryListing = {
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
/** @returns {getApplicationDepartmentListing} */
declare function getApplicationDepartmentListing(): getApplicationDepartmentListing;
type getApplicationDepartmentListing = {
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
/** @returns {getAutocompleteConfig} */
declare function getAutocompleteConfig(): any;
type getAutocompleteConfig = any;
/** @returns {getAutocompleteKeywordDetail} */
declare function getAutocompleteKeywordDetail(): getAutocompleteKeywordDetail;
type getAutocompleteKeywordDetail = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to retrieve.
     */
    id: string;
};
/** @returns {getCatalogConfiguration} */
declare function getCatalogConfiguration(): any;
type getCatalogConfiguration = any;
/** @returns {getCatalogInsights} */
declare function getCatalogInsights(): getCatalogInsights;
type getCatalogInsights = {
    /**
     * - Brand slug
     */
    brand?: string;
};
/** @returns {getCategories} */
declare function getCategories(): getCategories;
type getCategories = {
    /**
     * - The name of the department. Use this
     * parameter to filter products by a particular department. See below the list
     * of available departments. You can retrieve available departments from the
     * **v1.0/departments/** API
     */
    department?: string;
};
/** @returns {getCollectionDetail} */
declare function getCollectionDetail(): getCollectionDetail;
type getCollectionDetail = {
    /**
     * - A `slug` is a human readable, URL friendly unique
     * identifier of an object. Pass the `slug` of the collection which you want
     * to retrieve.
     */
    slug: string;
};
/** @returns {getCollectionItems} */
declare function getCollectionItems(): getCollectionItems;
type getCollectionItems = {
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
/** @returns {getConfigurationByType} */
declare function getConfigurationByType(): getConfigurationByType;
type getConfigurationByType = {
    /**
     * - Type can be brands, categories etc.
     */
    type: string;
};
/** @returns {getConfigurationMetadata} */
declare function getConfigurationMetadata(): getConfigurationMetadata;
type getConfigurationMetadata = {
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
/** @returns {getConfigurations} */
declare function getConfigurations(): any;
type getConfigurations = any;
/** @returns {getDepartments} */
declare function getDepartments(): any;
type getDepartments = any;
/** @returns {getDiscountedInventoryBySizeIdentifier} */
declare function getDiscountedInventoryBySizeIdentifier(): getDiscountedInventoryBySizeIdentifier;
type getDiscountedInventoryBySizeIdentifier = {
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
/** @returns {getGroupConfigurations} */
declare function getGroupConfigurations(): getGroupConfigurations;
type getGroupConfigurations = {
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
/** @returns {getListingConfigurations} */
declare function getListingConfigurations(): getListingConfigurations;
type getListingConfigurations = {
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
/** @returns {getProductDetailBySlug} */
declare function getProductDetailBySlug(): getProductDetailBySlug;
type getProductDetailBySlug = {
    /**
     * - The unique identifier of a product. i.e; `slug` of
     * a product. You can retrieve these from the APIs that list products like
     * **v1.0/products/**
     */
    slug: string;
};
/** @returns {getProductSizeSellers} */
declare function getProductSizeSellers(): getProductSizeSellers;
type getProductSizeSellers = {
    /**
     * - Item code of the product of which size is to be get.
     */
    itemId: string;
    /**
     * - A string indicating the size of the product, e.g.
     * S, M, XL. You can get slug value from the endpoint
     * /service/application/catalog/v1.0/products/sizes
     */
    size: string;
    /**
     * - The 6-digit PIN Code of the area near which
     * the selling locations should be searched, e.g. 400059
     */
    pincode?: string;
    /**
     * - Sort stores on the basis of strategy. eg,
     * fast-delivery, low-price, optimal.
     */
    strategy?: string;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
};
/** @returns {getQueryFilters} */
declare function getQueryFilters(): any;
type getQueryFilters = any;
/** @returns {getSearchKeywords} */
declare function getSearchKeywords(): getSearchKeywords;
type getSearchKeywords = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to retrieve.
     */
    id: string;
};
/** @returns {updateAllowSingle} */
declare function updateAllowSingle(): updateAllowSingle;
type updateAllowSingle = {
    body: CatalogPlatformModel.AllowSingleRequest;
};
/** @returns {updateAppBrand} */
declare function updateAppBrand(): updateAppBrand;
type updateAppBrand = {
    /**
     * - Brand id for which the custom_json is associated.
     */
    brandUid: string;
    body: CatalogPlatformModel.ApplicationBrandJson;
};
/** @returns {updateAppCategory} */
declare function updateAppCategory(): updateAppCategory;
type updateAppCategory = {
    /**
     * - Category id for which the custom_json is associated.
     */
    categoryUid: string;
    body: CatalogPlatformModel.ApplicationCategoryJson;
};
/** @returns {updateAppDepartment} */
declare function updateAppDepartment(): updateAppDepartment;
type updateAppDepartment = {
    /**
     * - Department id for which the custom_json is
     * associated.
     */
    departmentUid: string;
    body: CatalogPlatformModel.ApplicationDepartmentJson;
};
/** @returns {updateAppLocation} */
declare function updateAppLocation(): updateAppLocation;
type updateAppLocation = {
    /**
     * - Store id for which the custom_json is associated.
     */
    storeUid: string;
    body: CatalogPlatformModel.ApplicationStoreJson;
};
/** @returns {updateAppProduct} */
declare function updateAppProduct(): updateAppProduct;
type updateAppProduct = {
    /**
     * - Product id for which the custom_meta is associated.
     */
    itemId: string;
    body: CatalogPlatformModel.ApplicationItemMeta;
};
/** @returns {updateAutocompleteKeyword} */
declare function updateAutocompleteKeyword(): updateAutocompleteKeyword;
type updateAutocompleteKeyword = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
    body: CatalogPlatformModel.CreateAutocompleteKeyword;
};
/** @returns {updateCollection} */
declare function updateCollection(): updateCollection;
type updateCollection = {
    /**
     * - A `id` is a unique identifier of a collection.
     */
    id: string;
    body: CatalogPlatformModel.UpdateCollection;
};
/** @returns {updateDefaultSort} */
declare function updateDefaultSort(): updateDefaultSort;
type updateDefaultSort = {
    body: CatalogPlatformModel.DefaultKeyRequest;
};
/** @returns {updateGroupConfiguration} */
declare function updateGroupConfiguration(): updateGroupConfiguration;
type updateGroupConfiguration = {
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
/** @returns {updateListingConfiguration} */
declare function updateListingConfiguration(): updateListingConfiguration;
type updateListingConfiguration = {
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
/** @returns {updateSearchKeywords} */
declare function updateSearchKeywords(): updateSearchKeywords;
type updateSearchKeywords = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
    body: CatalogPlatformModel.CreateSearchKeyword;
};
import CatalogPlatformModel = require("./CatalogPlatformModel");
