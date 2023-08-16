export = Catalog;
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CatalogPlatformApplicationValidator.AddCollectionItemsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.UpdatedResponse>} - Success response
     * @name addCollectionItems
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/addCollectionItems/).
     */
    addCollectionItems({ id, body }?: CatalogPlatformApplicationValidator.AddCollectionItemsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.UpdatedResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateCollectionParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CollectionCreateResponse>} -
     *   Success response
     * @name createCollection
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCollection/).
     */
    createCollection({ body }?: CatalogPlatformApplicationValidator.CreateCollectionParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.CollectionCreateResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateConfigurationByTypeParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name createConfigurationByType
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createConfigurationByType/).
     */
    createConfigurationByType({ type, body }?: CatalogPlatformApplicationValidator.CreateConfigurationByTypeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateConfigurationProductListingParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name createConfigurationProductListing
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createConfigurationProductListing/).
     */
    createConfigurationProductListing({ body }?: CatalogPlatformApplicationValidator.CreateConfigurationProductListingParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateCustomAutocompleteRuleParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAutocompleteWordsResponse>}
     *   - Success response
     *
     * @name createCustomAutocompleteRule
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCustomAutocompleteRule/).
     */
    createCustomAutocompleteRule({ body }?: CatalogPlatformApplicationValidator.CreateCustomAutocompleteRuleParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.CreateAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateCustomKeywordParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
     * @name createCustomKeyword
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCustomKeyword/).
     */
    createCustomKeyword({ body }?: CatalogPlatformApplicationValidator.CreateCustomKeywordParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetSearchWordsData>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateGroupConfigurationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
     * @name createGroupConfiguration
     * @summary: Create configuration for Group config types.
     * @description: Create configuration for Group config types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createGroupConfiguration/).
     */
    createGroupConfiguration({ configType, body }?: CatalogPlatformApplicationValidator.CreateGroupConfigurationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.AppConfigurationDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateListingConfigurationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationsSort>} - Success response
     * @name createListingConfiguration
     * @summary: Add configuration for listings
     * @description: Add configuration for listing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createListingConfiguration/).
     */
    createListingConfiguration({ configType, body }?: CatalogPlatformApplicationValidator.CreateListingConfigurationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.AppConfigurationsSort>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteAutocompleteKeywordParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
     * @name deleteAutocompleteKeyword
     * @summary: Delete a Autocomplete Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteAutocompleteKeyword/).
     */
    deleteAutocompleteKeyword({ id }?: CatalogPlatformApplicationValidator.DeleteAutocompleteKeywordParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.DeleteResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteCollectionParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
     * @name deleteCollection
     * @summary: Delete a Collection
     * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteCollection/).
     */
    deleteCollection({ id }?: CatalogPlatformApplicationValidator.DeleteCollectionParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.DeleteResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteGroupConfigurationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name deleteGroupConfiguration
     * @summary: Delete configuration of the product config type of the application.
     * @description: Delete configuration of the product config type of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteGroupConfiguration/).
     */
    deleteGroupConfiguration({ configType, groupSlug }?: CatalogPlatformApplicationValidator.DeleteGroupConfigurationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteListingConfigurationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name deleteListingConfiguration
     * @summary: Delete configuration for listings
     * @description: Delete configuration for listing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteListingConfiguration/).
     */
    deleteListingConfiguration({ configType, configId }?: CatalogPlatformApplicationValidator.DeleteListingConfigurationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteSearchKeywordsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
     * @name deleteSearchKeywords
     * @summary: Delete a Search Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSearchKeywords/).
     */
    deleteSearchKeywords({ id }?: CatalogPlatformApplicationValidator.DeleteSearchKeywordsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.DeleteResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAllCollectionsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCollectionListingResponse>} -
     *   Success response
     * @name getAllCollections
     * @summary: List all the collections
     * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllCollections/).
     */
    getAllCollections({ q, scheduleStatus, type, tags, isActive, pageNo, pageSize }?: CatalogPlatformApplicationValidator.GetAllCollectionsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetCollectionListingResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsResponse>} - Success response
     * @name getAllSearchKeyword
     * @summary: List all Search Custom Keyword Listing
     * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllSearchKeyword/).
     */
    getAllSearchKeyword({ headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetSearchWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppInventoryParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryStockResponse>} - Success response
     * @name getAppInventory
     * @summary: Get the stock of a product
     * @description: Retrieve the available Inventory of the products. Use this API to get the Inventory status of products with the filters of timestamp, store_ids, brand_ids, item_id - Items - Pagination - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppInventory/).
     */
    getAppInventory({ itemIds, storeIds, brandIds, sellerIdentifiers, timestamp, pageSize, pageId, }?: CatalogPlatformApplicationValidator.GetAppInventoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.InventoryStockResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppLocationsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.LocationListSerializer>} - Success response
     * @name getAppLocations
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppLocations/).
     */
    getAppLocations({ storeType, uid, q, stage, pageNo, pageSize }?: CatalogPlatformApplicationValidator.GetAppLocationsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.LocationListSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Id of the company whose locations are to fetched
     * @param {string} arg.applicationId - Id of the application whose locations
     *   are to fetched
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @returns {Paginator<CatalogPlatformModel.LocationListSerializer>}
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocationsPaginator({ companyId, applicationId, storeType, uid, q, stage, pageSize, }?: {
        companyId: string;
        applicationId: string;
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageSize?: number;
    }): Paginator<CatalogPlatformModel.LocationListSerializer>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppProductParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OwnerAppItemResponse>} - Success response
     * @name getAppProduct
     * @summary: Get company application product data.
     * @description: Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProduct/).
     */
    getAppProduct({ itemId }?: CatalogPlatformApplicationValidator.GetAppProductParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.OwnerAppItemResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppProductsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductListingResponse>} - Success response
     * @name getAppProducts
     * @summary: Get applicationwise products
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProducts/).
     */
    getAppProducts({ brandIds, categoryIds, departmentIds, tags, itemIds, pageNo, pageSize, q, }?: CatalogPlatformApplicationValidator.GetAppProductsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.ProductListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppicationProductsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ApplicationProductListingResponse>}
     *   - Success response
     *
     * @name getAppicationProducts
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppicationProducts/).
     */
    getAppicationProducts({ q, f, c, filters, isDependent, sortOn, pageId, pageSize, pageNo, pageType, itemIds, }?: CatalogPlatformApplicationValidator.GetAppicationProductsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.ApplicationProductListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {string} [arg.c] - The search filter parameters for collection
     *   items. All the parameter filtered from filter parameters will be passed
     *   in **c** parameter in this format.
     *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {boolean} [arg.isDependent] - This query parameter is used to get
     *   the dependent products in the listing.
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {number[]} [arg.itemIds] - Item Ids of product
     * @returns {Paginator<CatalogPlatformModel.ApplicationProductListingResponse>}
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProductsPaginator({ companyId, applicationId, q, f, c, filters, isDependent, sortOn, pageSize, itemIds, }?: {
        companyId: string;
        applicationId: string;
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        isDependent?: boolean;
        sortOn?: string;
        pageSize?: number;
        itemIds?: number[];
    }): Paginator<CatalogPlatformModel.ApplicationProductListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationBrandListingParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
     * @name getApplicationBrandListing
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationBrandListing/).
     */
    getApplicationBrandListing({ pageNo, pageSize, q }?: CatalogPlatformApplicationValidator.GetApplicationBrandListingParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.BrandListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @returns {Paginator<CatalogPlatformModel.BrandListingResponse>}
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator<CatalogPlatformModel.BrandListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationBrandsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
     * @name getApplicationBrands
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationBrands/).
     */
    getApplicationBrands({ department, pageNo, pageSize, q, brandId }?: CatalogPlatformApplicationValidator.GetApplicationBrandsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.BrandListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @returns {Paginator<CatalogPlatformModel.BrandListingResponse>}
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandsPaginator({ companyId, applicationId, department, pageSize, q, brandId, }?: {
        companyId: string;
        applicationId: string;
        department?: string;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): Paginator<CatalogPlatformModel.BrandListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationCategoryListingParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
     * @name getApplicationCategoryListing
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationCategoryListing/).
     */
    getApplicationCategoryListing({ departmentId, pageNo, pageSize, q }?: CatalogPlatformApplicationValidator.GetApplicationCategoryListingParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.BrandListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.departmentId] - A `department_id` is a unique
     *   identifier for a particular department.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @returns {Paginator<CatalogPlatformModel.BrandListingResponse>}
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationCategoryListingPaginator({ companyId, applicationId, departmentId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        departmentId?: number;
        pageSize?: number;
        q?: string;
    }): Paginator<CatalogPlatformModel.BrandListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationDepartmentListingParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ApplicationDepartmentListingResponse>}
     *   - Success response
     *
     * @name getApplicationDepartmentListing
     * @summary: List all the departments for the application
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationDepartmentListing/).
     */
    getApplicationDepartmentListing({ pageNo, pageSize, q }?: CatalogPlatformApplicationValidator.GetApplicationDepartmentListingParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.ApplicationDepartmentListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search department by name.
     * @returns {Paginator<CatalogPlatformModel.ApplicationDepartmentListingResponse>}
     * @summary: List all the departments for the application
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
     */
    getApplicationDepartmentListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator<CatalogPlatformModel.ApplicationDepartmentListingResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
     *   Success response
     * @name getAutocompleteConfig
     * @summary: List all Autocomplete Keyword Listing
     * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteConfig/).
     */
    getAutocompleteConfig({ headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAutocompleteKeywordDetailParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
     *   Success response
     * @name getAutocompleteKeywordDetail
     * @summary: Get a Autocomplete Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteKeywordDetail/).
     */
    getAutocompleteKeywordDetail({ id }?: CatalogPlatformApplicationValidator.GetAutocompleteKeywordDetailParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>}
     *   - Success response
     *
     * @name getCatalogConfiguration
     * @summary: Get configuration meta  details for catalog for admin panel
     * @description: configuration meta  details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCatalogConfiguration/).
     */
    getCatalogConfiguration({ headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCatalogInsightsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CatalogInsightResponse>} - Success response
     * @name getCatalogInsights
     * @summary: Analytics data of catalog and inventory.
     * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCatalogInsights/).
     */
    getCatalogInsights({ brand }?: CatalogPlatformApplicationValidator.GetCatalogInsightsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.CatalogInsightResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCategoriesParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CategoryListingResponse>} - Success response
     * @name getCategories
     * @summary: List all the categories
     * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCategories/).
     */
    getCategories({ department }?: CatalogPlatformApplicationValidator.GetCategoriesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.CategoryListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCollectionDetailParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CollectionDetailResponse>} -
     *   Success response
     * @name getCollectionDetail
     * @summary: Get a particular collection
     * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCollectionDetail/).
     */
    getCollectionDetail({ slug }?: CatalogPlatformApplicationValidator.GetCollectionDetailParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.CollectionDetailResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCollectionItemsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCollectionItemsResponse>} -
     *   Success response
     * @name getCollectionItems
     * @summary: Get the items for a collection
     * @description: Get items from a collection specified by its `id`. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCollectionItems/).
     */
    getCollectionItems({ id, sortOn, pageId, pageSize }?: CatalogPlatformApplicationValidator.GetCollectionItemsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetCollectionItemsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetConfigurationByTypeParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>}
     *   - Success response
     *
     * @name getConfigurationByType
     * @summary: Get configured details for catalog
     * @description: configured details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationByType/).
     */
    getConfigurationByType({ type }?: CatalogPlatformApplicationValidator.GetConfigurationByTypeParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetConfigurationMetadataParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetConfigMetadataResponse>} -
     *   Success response
     * @name getConfigurationMetadata
     * @summary: Get configuration metadata details for catalog for admin panel
     * @description: Get the configuraion metadata details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationMetadata/).
     */
    getConfigurationMetadata({ configType, templateSlug }?: CatalogPlatformApplicationValidator.GetConfigurationMetadataParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetConfigMetadataResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name getConfigurations
     * @summary: Get configured details for catalog
     * @description: configured details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurations/).
     */
    getConfigurations({ headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentResponse>} - Success response
     * @name getDepartments
     * @summary: List all the departments
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDepartments/).
     */
    getDepartments({ headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.DepartmentResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetDiscountedInventoryBySizeIdentifierParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
     *   - Success response
     *
     * @name getDiscountedInventoryBySizeIdentifier
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDiscountedInventoryBySizeIdentifier/).
     */
    getDiscountedInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds }?: CatalogPlatformApplicationValidator.GetDiscountedInventoryBySizeIdentifierParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetGroupConfigurationsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetConfigResponse>} - Success response
     * @name getGroupConfigurations
     * @summary: Get the details of the application configured configurations of group config types.
     * @description: Get the details of the application configured configurations of group config types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getGroupConfigurations/).
     */
    getGroupConfigurations({ configType, pageNo, pageSize, search, templateSlug }?: CatalogPlatformApplicationValidator.GetGroupConfigurationsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetConfigResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetListingConfigurationsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetConfigResponse>} - Success response
     * @name getListingConfigurations
     * @summary: Get the details of the application configured configurations of listing config types.
     * @description: Get the details of the application configured configurations of listing config types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getListingConfigurations/).
     */
    getListingConfigurations({ configType, pageNo, pageSize, search }?: CatalogPlatformApplicationValidator.GetListingConfigurationsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetConfigResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetProductDetailBySlugParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductDetail>} - Success response
     * @name getProductDetailBySlug
     * @summary: Get a product
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductDetailBySlug/).
     */
    getProductDetailBySlug({ slug }?: CatalogPlatformApplicationValidator.GetProductDetailBySlugParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.ProductDetail>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCollectionQueryOptionResponse>}
     *   - Success response
     *
     * @name getQueryFilters
     * @summary: Get query filters to configure a collection
     * @description: Get query filters to configure a collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getQueryFilters/).
     */
    getQueryFilters({ headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetCollectionQueryOptionResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetSearchKeywordsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsDetailResponse>} -
     *   Success response
     * @name getSearchKeywords
     * @summary: Get a Search Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchKeywords/).
     */
    getSearchKeywords({ id }?: CatalogPlatformApplicationValidator.GetSearchKeywordsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetSearchWordsDetailResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAllowSingleParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name updateAllowSingle
     * @summary: Update allow single flag for filters of the application.
     * @description: Update allow single flag for filters of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAllowSingle/).
     */
    updateAllowSingle({ body }?: CatalogPlatformApplicationValidator.UpdateAllowSingleParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppBrandParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppBrand
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppBrand/).
     */
    updateAppBrand({ brandUid, body }?: CatalogPlatformApplicationValidator.UpdateAppBrandParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppCategoryParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppCategory
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppCategory/).
     */
    updateAppCategory({ categoryUid, body }?: CatalogPlatformApplicationValidator.UpdateAppCategoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppDepartmentParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppDepartment
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppDepartment/).
     */
    updateAppDepartment({ departmentUid, body }?: CatalogPlatformApplicationValidator.UpdateAppDepartmentParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppLocationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppLocation
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppLocation/).
     */
    updateAppLocation({ storeUid, body }?: CatalogPlatformApplicationValidator.UpdateAppLocationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppProductParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppProduct
     * @summary: Update a single custom meta.
     * @description: This API helps to update data associated to a item custom meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppProduct/).
     */
    updateAppProduct({ itemId, body }?: CatalogPlatformApplicationValidator.UpdateAppProductParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAutocompleteKeywordParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
     *   Success response
     * @name updateAutocompleteKeyword
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAutocompleteKeyword/).
     */
    updateAutocompleteKeyword({ id, body }?: CatalogPlatformApplicationValidator.UpdateAutocompleteKeywordParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateCollectionParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.UpdateCollection>} - Success response
     * @name updateCollection
     * @summary: Update a collection
     * @description: Update a collection by it's id. On successful request, returns the updated collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateCollection/).
     */
    updateCollection({ id, body }?: CatalogPlatformApplicationValidator.UpdateCollectionParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.UpdateCollection>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateDefaultSortParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name updateDefaultSort
     * @summary: Update the default sort key configuration for the application.
     * @description: Update the default sort key configuration for the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateDefaultSort/).
     */
    updateDefaultSort({ body }?: CatalogPlatformApplicationValidator.UpdateDefaultSortParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateGroupConfigurationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
     * @name updateGroupConfiguration
     * @summary: Update the group configurations for the application.
     * @description: Update the group configurations for the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateGroupConfiguration/).
     */
    updateGroupConfiguration({ configType, groupSlug, body }?: CatalogPlatformApplicationValidator.UpdateGroupConfigurationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.AppConfigurationDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateListingConfigurationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationsSort>} - Success response
     * @name updateListingConfiguration
     * @summary: Update configuration for listings
     * @description: Update configuration for listing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateListingConfiguration/).
     */
    updateListingConfiguration({ configType, configId, body }?: CatalogPlatformApplicationValidator.UpdateListingConfigurationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.AppConfigurationsSort>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateSearchKeywordsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
     * @name updateSearchKeywords
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSearchKeywords/).
     */
    updateSearchKeywords({ id, body }?: CatalogPlatformApplicationValidator.UpdateSearchKeywordsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CatalogPlatformModel.GetSearchWordsData>;
}
import CatalogPlatformApplicationValidator = require("./CatalogPlatformApplicationValidator");
import CatalogPlatformModel = require("./CatalogPlatformModel");
import Paginator = require("../../common/Paginator");
