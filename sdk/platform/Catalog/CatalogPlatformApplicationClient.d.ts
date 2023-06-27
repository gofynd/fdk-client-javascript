export = Catalog;
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CatalogPlatformApplicationValidator.addCollectionItems} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.UpdatedResponse>} - Success response
     * @name addCollectionItems
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
     */
    addCollectionItems({ id, body }?: CatalogPlatformApplicationValidator.addCollectionItems): Promise<CatalogPlatformModel.UpdatedResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.createCollection} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.CollectionCreateResponse>} -
     *   Success response
     * @name createCollection
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     */
    createCollection({ body }?: CatalogPlatformApplicationValidator.createCollection): Promise<CatalogPlatformModel.CollectionCreateResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.createConfigurationByType} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name createConfigurationByType
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands.
     */
    createConfigurationByType({ type, body }?: CatalogPlatformApplicationValidator.createConfigurationByType): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.createConfigurationProductListing} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name createConfigurationProductListing
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing.
     */
    createConfigurationProductListing({ body }?: CatalogPlatformApplicationValidator.createConfigurationProductListing): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.createCustomAutocompleteRule} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.CreateAutocompleteWordsResponse>}
     *   - Success response
     *
     * @name createCustomAutocompleteRule
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
     */
    createCustomAutocompleteRule({ body }?: CatalogPlatformApplicationValidator.createCustomAutocompleteRule): Promise<CatalogPlatformModel.CreateAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.createCustomKeyword} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
     * @name createCustomKeyword
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
     */
    createCustomKeyword({ body }?: CatalogPlatformApplicationValidator.createCustomKeyword): Promise<CatalogPlatformModel.GetSearchWordsData>;
    /**
     * @param {CatalogPlatformApplicationValidator.createGroupConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
     * @name createGroupConfiguration
     * @summary: Create configuration for Group config types.
     * @description: Create configuration for Group config types.
     */
    createGroupConfiguration({ configType, body }?: CatalogPlatformApplicationValidator.createGroupConfiguration): Promise<CatalogPlatformModel.AppConfigurationDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.createListingConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.AppConfigurationsSort>} - Success response
     * @name createListingConfiguration
     * @summary: Add configuration for listings
     * @description: Add configuration for listing.
     */
    createListingConfiguration({ configType, body }?: CatalogPlatformApplicationValidator.createListingConfiguration): Promise<CatalogPlatformModel.AppConfigurationsSort>;
    /**
     * @param {CatalogPlatformApplicationValidator.deleteAutocompleteKeyword} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
     * @name deleteAutocompleteKeyword
     * @summary: Delete a Autocomplete Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteAutocompleteKeyword({ id }?: CatalogPlatformApplicationValidator.deleteAutocompleteKeyword): Promise<CatalogPlatformModel.DeleteResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.deleteCollection} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
     * @name deleteCollection
     * @summary: Delete a Collection
     * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
     */
    deleteCollection({ id }?: CatalogPlatformApplicationValidator.deleteCollection): Promise<CatalogPlatformModel.DeleteResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.deleteGroupConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name deleteGroupConfiguration
     * @summary: Delete configuration of the product config type of the application.
     * @description: Delete configuration of the product config type of the application.
     */
    deleteGroupConfiguration({ configType, groupSlug }?: CatalogPlatformApplicationValidator.deleteGroupConfiguration): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.deleteListingConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name deleteListingConfiguration
     * @summary: Delete configuration for listings
     * @description: Delete configuration for listing.
     */
    deleteListingConfiguration({ configType, configId }?: CatalogPlatformApplicationValidator.deleteListingConfiguration): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.deleteSearchKeywords} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
     * @name deleteSearchKeywords
     * @summary: Delete a Search Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteSearchKeywords({ id }?: CatalogPlatformApplicationValidator.deleteSearchKeywords): Promise<CatalogPlatformModel.DeleteResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getAllCollections} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetCollectionListingResponse>} -
     *   Success response
     * @name getAllCollections
     * @summary: List all the collections
     * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
     */
    getAllCollections({ q, scheduleStatus, type, tags, isActive, pageNo, pageSize, }?: CatalogPlatformApplicationValidator.getAllCollections): Promise<CatalogPlatformModel.GetCollectionListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getAllSearchKeyword} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsResponse>} - Success response
     * @name getAllSearchKeyword
     * @summary: List all Search Custom Keyword Listing
     * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAllSearchKeyword({}?: any): Promise<CatalogPlatformModel.GetSearchWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getAppInventory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryStockResponse>} - Success response
     * @name getAppInventory
     * @summary: Get the stock of a product
     * @description: Retrieve the available Inventory of the products. Use this API to get the Inventory status of products with the filters of timestamp, store_ids, brand_ids, item_id - Items - Pagination
     */
    getAppInventory({ itemIds, storeIds, brandIds, sellerIdentifiers, timestamp, pageSize, pageId, }?: CatalogPlatformApplicationValidator.getAppInventory): Promise<CatalogPlatformModel.InventoryStockResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getAppLocations} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.LocationListSerializer>} - Success response
     * @name getAppLocations
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocations({ storeType, uid, q, stage, pageNo, pageSize }?: CatalogPlatformApplicationValidator.getAppLocations): Promise<CatalogPlatformModel.LocationListSerializer>;
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
     * @param {CatalogPlatformApplicationValidator.getAppProduct} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.OwnerAppItemResponse>} - Success response
     * @name getAppProduct
     * @summary: Get company application product data.
     * @description: Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent.
     */
    getAppProduct({ itemId }?: CatalogPlatformApplicationValidator.getAppProduct): Promise<CatalogPlatformModel.OwnerAppItemResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getAppProducts} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductListingResponse>} - Success response
     * @name getAppProducts
     * @summary: Get applicationwise products
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`
     */
    getAppProducts({ brandIds, categoryIds, departmentIds, tags, itemIds, pageNo, pageSize, q, }?: CatalogPlatformApplicationValidator.getAppProducts): Promise<CatalogPlatformModel.ProductListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getAppicationProducts} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ApplicationProductListingResponse>}
     *   - Success response
     *
     * @name getAppicationProducts
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProducts({ q, f, c, filters, sortOn, pageId, pageSize, pageNo, pageType, itemIds, }?: CatalogPlatformApplicationValidator.getAppicationProducts): Promise<CatalogPlatformModel.ApplicationProductListingResponse>;
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
    getAppicationProductsPaginator({ companyId, applicationId, q, f, c, filters, sortOn, pageSize, itemIds, }?: {
        companyId: string;
        applicationId: string;
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
        itemIds?: number[];
    }): Paginator<CatalogPlatformModel.ApplicationProductListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getApplicationBrandListing} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
     * @name getApplicationBrandListing
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandListing({ pageNo, pageSize, q }?: CatalogPlatformApplicationValidator.getApplicationBrandListing): Promise<CatalogPlatformModel.BrandListingResponse>;
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
     * @param {CatalogPlatformApplicationValidator.getApplicationBrands} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
     * @name getApplicationBrands
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrands({ department, pageNo, pageSize, q, brandId, }?: CatalogPlatformApplicationValidator.getApplicationBrands): Promise<CatalogPlatformModel.BrandListingResponse>;
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
     * @param {CatalogPlatformApplicationValidator.getApplicationCategoryListing} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
     * @name getApplicationCategoryListing
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationCategoryListing({ departmentId, pageNo, pageSize, q, }?: CatalogPlatformApplicationValidator.getApplicationCategoryListing): Promise<CatalogPlatformModel.BrandListingResponse>;
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
     * @param {CatalogPlatformApplicationValidator.getApplicationDepartmentListing} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.ApplicationDepartmentListingResponse>}
     *   - Success response
     *
     * @name getApplicationDepartmentListing
     * @summary: List all the departments for the application
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
     */
    getApplicationDepartmentListing({ pageNo, pageSize, q }?: CatalogPlatformApplicationValidator.getApplicationDepartmentListing): Promise<CatalogPlatformModel.ApplicationDepartmentListingResponse>;
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
     * @param {CatalogPlatformApplicationValidator.getAutocompleteConfig} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
     *   Success response
     * @name getAutocompleteConfig
     * @summary: List all Autocomplete Keyword Listing
     * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAutocompleteConfig({}?: any): Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getAutocompleteKeywordDetail} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
     *   Success response
     * @name getAutocompleteKeywordDetail
     * @summary: Get a Autocomplete Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
     */
    getAutocompleteKeywordDetail({ id }?: CatalogPlatformApplicationValidator.getAutocompleteKeywordDetail): Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getCatalogConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>}
     *   - Success response
     *
     * @name getCatalogConfiguration
     * @summary: Get configuration meta  details for catalog for admin panel
     * @description: configuration meta  details for catalog.
     */
    getCatalogConfiguration({}?: any): Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>;
    /**
     * @param {CatalogPlatformApplicationValidator.getCatalogInsights} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.CatalogInsightResponse>} - Success response
     * @name getCatalogInsights
     * @summary: Analytics data of catalog and inventory.
     * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
     */
    getCatalogInsights({ brand }?: CatalogPlatformApplicationValidator.getCatalogInsights): Promise<CatalogPlatformModel.CatalogInsightResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getCategories} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.CategoryListingResponse>} - Success response
     * @name getCategories
     * @summary: List all the categories
     * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
     */
    getCategories({ department }?: CatalogPlatformApplicationValidator.getCategories): Promise<CatalogPlatformModel.CategoryListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getCollectionDetail} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.CollectionDetailResponse>} -
     *   Success response
     * @name getCollectionDetail
     * @summary: Get a particular collection
     * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
     */
    getCollectionDetail({ slug }?: CatalogPlatformApplicationValidator.getCollectionDetail): Promise<CatalogPlatformModel.CollectionDetailResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getCollectionItems} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetCollectionItemsResponse>} -
     *   Success response
     * @name getCollectionItems
     * @summary: Get the items for a collection
     * @description: Get items from a collection specified by its `id`.
     */
    getCollectionItems({ id, sortOn, pageId, pageSize }?: CatalogPlatformApplicationValidator.getCollectionItems): Promise<CatalogPlatformModel.GetCollectionItemsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getConfigurationByType} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>}
     *   - Success response
     *
     * @name getConfigurationByType
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurationByType({ type }?: CatalogPlatformApplicationValidator.getConfigurationByType): Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.getConfigurationMetadata} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.GetConfigMetadataResponse>} -
     *   Success response
     * @name getConfigurationMetadata
     * @summary: Get configuration metadata details for catalog for admin panel
     * @description: Get the configuraion metadata details for catalog.
     */
    getConfigurationMetadata({ configType, templateSlug }?: CatalogPlatformApplicationValidator.getConfigurationMetadata): Promise<CatalogPlatformModel.GetConfigMetadataResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getConfigurations} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name getConfigurations
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurations({}?: any): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.getDepartments} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.DepartmentResponse>} - Success response
     * @name getDepartments
     * @summary: List all the departments
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
     */
    getDepartments({}?: any): Promise<CatalogPlatformModel.DepartmentResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getDiscountedInventoryBySizeIdentifier} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
     *   - Success response
     *
     * @name getDiscountedInventoryBySizeIdentifier
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getDiscountedInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, }?: CatalogPlatformApplicationValidator.getDiscountedInventoryBySizeIdentifier): Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>;
    /**
     * @param {CatalogPlatformApplicationValidator.getGroupConfigurations} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.GetConfigResponse>} - Success response
     * @name getGroupConfigurations
     * @summary: Get the details of the application configured configurations of group config types.
     * @description: Get the details of the application configured configurations of group config types.
     */
    getGroupConfigurations({ configType, pageNo, pageSize, search, templateSlug, }?: CatalogPlatformApplicationValidator.getGroupConfigurations): Promise<CatalogPlatformModel.GetConfigResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getListingConfigurations} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.GetConfigResponse>} - Success response
     * @name getListingConfigurations
     * @summary: Get the details of the application configured configurations of listing config types.
     * @description: Get the details of the application configured configurations of listing config types.
     */
    getListingConfigurations({ configType, pageNo, pageSize, search, }?: CatalogPlatformApplicationValidator.getListingConfigurations): Promise<CatalogPlatformModel.GetConfigResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getProductDetailBySlug} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.ProductDetail>} - Success response
     * @name getProductDetailBySlug
     * @summary: Get a product
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
     */
    getProductDetailBySlug({ slug }?: CatalogPlatformApplicationValidator.getProductDetailBySlug): Promise<CatalogPlatformModel.ProductDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.getQueryFilters} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetCollectionQueryOptionResponse>}
     *   - Success response
     *
     * @name getQueryFilters
     * @summary: Get query filters to configure a collection
     * @description: Get query filters to configure a collection
     */
    getQueryFilters({}?: any): Promise<CatalogPlatformModel.GetCollectionQueryOptionResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.getSearchKeywords} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsDetailResponse>} -
     *   Success response
     * @name getSearchKeywords
     * @summary: Get a Search Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
     */
    getSearchKeywords({ id }?: CatalogPlatformApplicationValidator.getSearchKeywords): Promise<CatalogPlatformModel.GetSearchWordsDetailResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateAllowSingle} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name updateAllowSingle
     * @summary: Update allow single flag for filters of the application.
     * @description: Update allow single flag for filters of the application.
     */
    updateAllowSingle({ body }?: CatalogPlatformApplicationValidator.updateAllowSingle): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateAppBrand} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppBrand
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppBrand({ brandUid, body }?: CatalogPlatformApplicationValidator.updateAppBrand): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateAppCategory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppCategory
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppCategory({ categoryUid, body }?: CatalogPlatformApplicationValidator.updateAppCategory): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateAppDepartment} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppDepartment
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppDepartment({ departmentUid, body }?: CatalogPlatformApplicationValidator.updateAppDepartment): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateAppLocation} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppLocation
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppLocation({ storeUid, body }?: CatalogPlatformApplicationValidator.updateAppLocation): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateAppProduct} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppProduct
     * @summary: Update a single custom meta.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppProduct({ itemId, body }?: CatalogPlatformApplicationValidator.updateAppProduct): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateAutocompleteKeyword} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
     *   Success response
     * @name updateAutocompleteKeyword
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
     */
    updateAutocompleteKeyword({ id, body }?: CatalogPlatformApplicationValidator.updateAutocompleteKeyword): Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateCollection} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.UpdateCollection>} - Success response
     * @name updateCollection
     * @summary: Update a collection
     * @description: Update a collection by it's id. On successful request, returns the updated collection
     */
    updateCollection({ id, body }?: CatalogPlatformApplicationValidator.updateCollection): Promise<CatalogPlatformModel.UpdateCollection>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateDefaultSort} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name updateDefaultSort
     * @summary: Update the default sort key configuration for the application.
     * @description: Update the default sort key configuration for the application.
     */
    updateDefaultSort({ body }?: CatalogPlatformApplicationValidator.updateDefaultSort): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateGroupConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
     * @name updateGroupConfiguration
     * @summary: Update the group configurations for the application.
     * @description: Update the group configurations for the application.
     */
    updateGroupConfiguration({ configType, groupSlug, body }?: CatalogPlatformApplicationValidator.updateGroupConfiguration): Promise<CatalogPlatformModel.AppConfigurationDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateListingConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<CatalogPlatformModel.AppConfigurationsSort>} - Success response
     * @name updateListingConfiguration
     * @summary: Update configuration for listings
     * @description: Update configuration for listing.
     */
    updateListingConfiguration({ configType, configId, body }?: CatalogPlatformApplicationValidator.updateListingConfiguration): Promise<CatalogPlatformModel.AppConfigurationsSort>;
    /**
     * @param {CatalogPlatformApplicationValidator.updateSearchKeywords} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
     * @name updateSearchKeywords
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection
     */
    updateSearchKeywords({ id, body }?: CatalogPlatformApplicationValidator.updateSearchKeywords): Promise<CatalogPlatformModel.GetSearchWordsData>;
}
import CatalogPlatformApplicationValidator = require("./CatalogPlatformApplicationValidator");
import CatalogPlatformModel = require("./CatalogPlatformModel");
import Paginator = require("../../common/Paginator");
