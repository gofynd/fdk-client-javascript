export = Catalog;
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CatalogPlatformApplicationValidator.AddCollectionItemsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CommonResponseSchemaCollection>}
     *   - Success response
     *
     * @name addCollectionItems
     * @summary: Create items in a collection
     * @description: Adds items to a collection specified by its id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/addCollectionItems/).
     */
    addCollectionItems({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.AddCollectionItemsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CommonResponseSchemaCollection>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateAppCategoryReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name createAppCategoryReturnConfiguration
     * @summary: Create return configuration
     * @description: Create Category level sales channel Return Configuration setttings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAppCategoryReturnConfiguration/).
     */
    createAppCategoryReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateAppCategoryReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateAppReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name createAppReturnConfiguration
     * @summary: Create product return configuration
     * @description: This allows you to configure all return-related settings, such as is_returnable and return window etc. for sales channel level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAppReturnConfiguration/).
     */
    createAppReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateAppReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateCollectionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CollectionCreateResponse>} -
     *   Success response
     * @name createCollection
     * @summary: Create a collection
     * @description: Create a collection for a sales channel linked to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCollection/).
     */
    createCollection({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateCollectionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CollectionCreateResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateConfigurationByTypeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name createConfigurationByType
     * @summary: Create configuration
     * @description: Add configuration details based on a specific type in the catalog for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createConfigurationByType/).
     */
    createConfigurationByType({ type, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateConfigurationByTypeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateConfigurationProductListingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name createConfigurationProductListing
     * @summary: Create product listing configuration
     * @description: Add configuration for products & listing specific to a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createConfigurationProductListing/).
     */
    createConfigurationProductListing({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateConfigurationProductListingParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateCustomAutocompleteRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAutocompleteWordsResponse>}
     *   - Success response
     *
     * @name createCustomAutocompleteRule
     * @summary: Create autocomplete configurations
     * @description: Create custom autocomplete keyword configurations for a specific sales channel to map any endpoint with these keywords. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCustomAutocompleteRule/).
     */
    createCustomAutocompleteRule({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateCustomAutocompleteRuleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateCustomKeywordParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
     * @name createCustomKeyword
     * @summary: Create search keywords
     * @description: Create a Custom Search Keywords for a specific company and sales channel allows you to map certail conditions with the keywords to give you ultimate results. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCustomKeyword/).
     */
    createCustomKeyword({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateCustomKeywordParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchWordsData>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateGroupConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
     * @name createGroupConfiguration
     * @summary: Create group configuration
     * @description: Create group configuration for a specific config_type for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createGroupConfiguration/).
     */
    createGroupConfiguration({ configType, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateGroupConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppConfigurationDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateListingConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationsSort>} - Success response
     * @name createListingConfiguration
     * @summary: Create listing configuration
     * @description: Add configuration for product catalog listing specific to a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createListingConfiguration/).
     */
    createListingConfiguration({ configType, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateListingConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppConfigurationsSort>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateSearchConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateSearchConfigurationResponse>}
     *   - Success response
     *
     * @name createSearchConfiguration
     * @summary: Create search configuration
     * @description: Create search configuration for the catalog for a specific company and sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSearchConfiguration/).
     */
    createSearchConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateSearchConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateSearchConfigurationResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteAppCategoryReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteAppCategoryReturnConfiguration
     * @summary: Delete product return configuration
     * @description: Delete Category level sales channel Return Configuration setttings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteAppCategoryReturnConfiguration/).
     */
    deleteAppCategoryReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteAppCategoryReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteAutocompleteKeywordParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
     * @name deleteAutocompleteKeyword
     * @summary: Delete autocomplete keyword
     * @description: Delete custom autocomplete keyword configurations for a specific sales channel by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteAutocompleteKeyword/).
     */
    deleteAutocompleteKeyword({ id, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteAutocompleteKeywordParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DeleteResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteCollectionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CommonResponseSchemaCollection>}
     *   - Success response
     *
     * @name deleteCollection
     * @summary: Delete a collection
     * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteCollection/).
     */
    deleteCollection({ id, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteCollectionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CommonResponseSchemaCollection>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteGroupConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name deleteGroupConfiguration
     * @summary: Delete group configuration
     * @description: Delete group configurations by its slug for a specific config_type for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteGroupConfiguration/).
     */
    deleteGroupConfiguration({ configType, groupSlug, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteGroupConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteListingConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name deleteListingConfiguration
     * @summary: Delete listing configuration
     * @description: Remove a specific product listing configuration by its config_id for a specific config_type for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteListingConfiguration/).
     */
    deleteListingConfiguration({ configType, configId, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteListingConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteSearchConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteSearchConfigurationResponse>}
     *   - Success response
     *
     * @name deleteSearchConfiguration
     * @summary: Delete search configuration
     * @description: Delete Search Configuration for a specific sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSearchConfiguration/).
     */
    deleteSearchConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.DeleteSearchConfigurationResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteSearchKeywordsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
     * @name deleteSearchKeywords
     * @summary: Delete search keywords
     * @description: Delete a search keywords by its id for a specific company and sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSearchKeywords/).
     */
    deleteSearchKeywords({ id, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteSearchKeywordsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DeleteResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAllCollectionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCollectionListingResponse>} -
     *   Success response
     * @name getAllCollections
     * @summary: List collections
     * @description: Retrieve all collections based on criteria such as collection name, schedule status, and active status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllCollections/).
     */
    getAllCollections({ q, scheduleStatus, type, tags, isActive, pageNo, pageSize, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAllCollectionsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetCollectionListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.q] - Get collection list filtered by q string,
     * @param {string} [arg.scheduleStatus] - Get collection list filtered by
     *   scheduled status,
     * @param {string} [arg.type] - Type of the collections
     * @param {string[]} [arg.tags] - Each response will contain next_id param,
     *   which should be sent back to make pagination work.
     * @param {boolean} [arg.isActive] - Get collections filtered by active status.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @returns {Paginator<CatalogPlatformModel.GetCollectionListingResponse>}
     * @summary: List collections
     * @description: Retrieve all collections based on criteria such as collection name, schedule status, and active status.
     */
    getAllCollectionsPaginator({ companyId, applicationId, q, scheduleStatus, type, tags, isActive, pageSize, }?: {
        companyId: string;
        applicationId: string;
        q?: string;
        scheduleStatus?: string;
        type?: string;
        tags?: string[];
        isActive?: boolean;
        pageSize?: number;
    }): Paginator<CatalogPlatformModel.GetCollectionListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAllSearchKeywordParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsResponse>} - Success response
     * @name getAllSearchKeyword
     * @summary: List search keywords
     * @description: Get all custom search keywords for a specific company and sales channel allows you to map certain conditions with the keywords to give you ultimate results. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllSearchKeyword/).
     */
    getAllSearchKeyword({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppCategoryReturnConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BaseAppCategoryReturnConfigResponse>}
     *   - Success response
     *
     * @name getAppCategoryReturnConfig
     * @summary: Get category return configuration
     * @description: Get all category level configuration level set for an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppCategoryReturnConfig/).
     */
    getAppCategoryReturnConfig({ q, pageNo, pageSize, requestHeaders }?: CatalogPlatformApplicationValidator.GetAppCategoryReturnConfigParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BaseAppCategoryReturnConfigResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryStockResponse>} - Success response
     * @name getAppInventory
     * @summary: List sales channel inventory
     * @description: Retrieve inventory data related to the sales channel. this can be used  to get the Inventory status of products with the filters of timestamp, store_ids, brand_ids, item_id, Items, Pagination. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppInventory/).
     */
    getAppInventory({ itemIds, storeIds, brandIds, sellerIdentifiers, timestamp, pageSize, pageId, qtyGt, qtyLt, qtyType, fromDate, toDate, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAppInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryStockResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.LocationListSerializer>} - Success response
     * @name getAppLocations
     * @summary: List sales channels
     * @description: Retrieve all stores associated with an sales channel, with support for searching by store name and filtering by store type and status (verified/unverified) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppLocations/).
     */
    getAppLocations({ storeType, uid, q, stage, pageNo, pageSize, tags, storeTypes, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAppLocationsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.LocationListSerializer>;
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
     * @param {string[]} [arg.tags] - Get locations filtered by tags.
     * @param {string[]} [arg.storeTypes] - Get locations filtered by store types.
     * @returns {Paginator<CatalogPlatformModel.LocationListSerializer>}
     * @summary: List sales channels
     * @description: Retrieve all stores associated with an sales channel, with support for searching by store name and filtering by store type and status (verified/unverified)
     */
    getAppLocationsPaginator({ companyId, applicationId, storeType, uid, q, stage, pageSize, tags, storeTypes, }?: {
        companyId: string;
        applicationId: string;
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageSize?: number;
        tags?: string[];
        storeTypes?: string[];
    }): Paginator<CatalogPlatformModel.LocationListSerializer>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OwnerAppItemResponse>} - Success response
     * @name getAppProduct
     * @summary: Get sales channel product
     * @description: Retrieve sales channel product details by its item_id and depending upon filters sent in request. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProduct/).
     */
    getAppProduct({ itemId, requestHeaders }?: CatalogPlatformApplicationValidator.GetAppProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.OwnerAppItemResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppProductsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.RawProductListingResponse>} -
     *   Success response
     * @name getAppProducts
     * @summary: List sales channel products
     * @description: Retrieve products specific to the sales channel, with filtering options available for brand, category, department, tags, item IDs, product name, and pagination support - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProducts/).
     */
    getAppProducts({ brandIds, categoryIds, departmentIds, tags, itemIds, pageNo, pageSize, q, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAppProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.RawProductListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number[]} [arg.brandIds] - Get multiple products filtered by Brand Ids
     * @param {number[]} [arg.categoryIds] - Get multiple products filtered by
     *   Category Ids
     * @param {number[]} [arg.departmentIds] - Get multiple products filtered by
     *   Department Ids
     * @param {string[]} [arg.tags] - Get multiple products filtered by tags
     * @param {number[]} [arg.itemIds] - Get multiple products filtered by Item Ids
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search with Item Code, Name, Slug or Identifier.
     * @returns {Paginator<CatalogPlatformModel.RawProductListingResponse>}
     * @summary: List sales channel products
     * @description: Retrieve products specific to the sales channel, with filtering options available for brand, category, department, tags, item IDs, product name, and pagination support
     */
    getAppProductsPaginator({ companyId, applicationId, brandIds, categoryIds, departmentIds, tags, itemIds, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        brandIds?: number[];
        categoryIds?: number[];
        departmentIds?: number[];
        tags?: string[];
        itemIds?: number[];
        pageSize?: number;
        q?: string;
    }): Paginator<CatalogPlatformModel.RawProductListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppReturnConfigResponse>} - Success response
     * @name getAppReturnConfiguration
     * @summary: get product-return configuration
     * @description: Get Product Return configuration set at an sales channel level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppReturnConfiguration/).
     */
    getAppReturnConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppReturnConfigResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppicationProductsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ApplicationProductListingResponse>}
     *   - Success response
     *
     * @name getAppicationProducts
     * @summary: List sales channel products
     * @description: Retrieve products associated with the sales channel. List all the products associated with a brand, collection or category in a requested sort order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppicationProducts/).
     */
    getAppicationProducts({ q, f, c, filters, isDependent, sortOn, pageId, pageSize, pageNo, pageType, itemIds, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAppicationProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ApplicationProductListingResponse>;
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
     * @summary: List sales channel products
     * @description: Retrieve products associated with the sales channel. List all the products associated with a brand, collection or category in a requested sort order.
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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
     * @name getApplicationBrandListing
     * @summary: List sales channel brands
     * @description: Retrieve brand listings related to the sales channel. A brand is the name under which a product is being sold - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationBrandListing/).
     */
    getApplicationBrandListing({ pageNo, pageSize, q, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationBrandListingParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BrandListingResponse>;
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
     * @summary: List sales channel brands
     * @description: Retrieve brand listings related to the sales channel. A brand is the name under which a product is being sold
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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
     * @name getApplicationBrands
     * @summary: List brands
     * @description: List all the brands, and have search capabilities on brand uid, name etc - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationBrands/).
     */
    getApplicationBrands({ department, pageNo, pageSize, q, brandId, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationBrandsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BrandListingResponse>;
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
     * @summary: List brands
     * @description: List all the brands, and have search capabilities on brand uid, name etc
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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
     * @name getApplicationCategoryListing
     * @summary: List sales channel categories
     * @description: Retrieve category listings related to the sales channel , with the ability to filter results based on department ,category names etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationCategoryListing/).
     */
    getApplicationCategoryListing({ departmentId, pageNo, pageSize, q, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationCategoryListingParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BrandListingResponse>;
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
     * @summary: List sales channel categories
     * @description: Retrieve category listings related to the sales channel , with the ability to filter results based on department ,category names etc.
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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ApplicationDepartmentListingResponse>}
     *   - Success response
     *
     * @name getApplicationDepartmentListing
     * @summary: List sales channel departments
     * @description: Retrieve department listings related to the sales channel. Departments are used to categorize similar products, and you can filter the results based on department names - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationDepartmentListing/).
     */
    getApplicationDepartmentListing({ pageNo, pageSize, q, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationDepartmentListingParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ApplicationDepartmentListingResponse>;
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
     * @summary: List sales channel departments
     * @description: Retrieve department listings related to the sales channel. Departments are used to categorize similar products, and you can filter the results based on department names
     */
    getApplicationDepartmentListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator<CatalogPlatformModel.ApplicationDepartmentListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationFilterKeysParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetQueryFiltersKeysResponse>} -
     *   Success response
     * @name getApplicationFilterKeys
     * @summary: List filter keys
     * @description: Retrieve the details of all applicable product filters, such as Color, Brand, and Category, indicating the criteria keys where filters can be applied. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationFilterKeys/).
     */
    getApplicationFilterKeys({ c, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationFilterKeysParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetQueryFiltersKeysResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationFilterValuesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetQueryFiltersValuesResponse>} -
     *   Success response
     * @name getApplicationFilterValues
     * @summary: List product filters
     * @description: This API is designed to retrieve the filter values for all available options within the selected filter, such as "red" for color.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationFilterValues/).
     */
    getApplicationFilterValues({ filterKey, c, collectionId, pageNo, pageSize, q, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationFilterValuesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetQueryFiltersValuesResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAutocompleteConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
     *   Success response
     * @name getAutocompleteConfig
     * @summary: Get autocomplete configuration
     * @description: Get custom autocomplete keyword configuration for a specific sales channel which allows you to map any endpoint with these keywords to give you the ultimate suggestion results. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteConfig/).
     */
    getAutocompleteConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAutocompleteKeywordDetailParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
     *   Success response
     * @name getAutocompleteKeywordDetail
     * @summary: Get autocomplete keyword
     * @description: Retrieve detailed information about a specific autocomplete keyword for a specific sales channel by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteKeywordDetail/).
     */
    getAutocompleteKeywordDetail({ id, requestHeaders }?: CatalogPlatformApplicationValidator.GetAutocompleteKeywordDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCatalogConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>}
     *   - Success response
     *
     * @name getCatalogConfiguration
     * @summary: Get catalog configuration meta data
     * @description: Retrieve configuration meta data for the catalog specific to a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCatalogConfiguration/).
     */
    getCatalogConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCatalogInsightsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CatalogInsightResponse>} - Success response
     * @name getCatalogInsights
     * @summary: Get catalog counts
     * @description: Retrieve the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCatalogInsights/).
     */
    getCatalogInsights({ brand, requestHeaders }?: CatalogPlatformApplicationValidator.GetCatalogInsightsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CatalogInsightResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCategoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CategoryListingResponse>} - Success response
     * @name getCategories
     * @summary: List categories
     * @description: Retrieve a list of categories associated to company and sales channel. user can filter on departments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCategories/).
     */
    getCategories({ department, requestHeaders }?: CatalogPlatformApplicationValidator.GetCategoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CategoryListingResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCollectionDetailParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCollectionDetailResponse>} -
     *   Success response
     * @name getCollectionDetail
     * @summary: Get a collection
     * @description: Get the details of a collection by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCollectionDetail/).
     */
    getCollectionDetail({ slug, requestHeaders }?: CatalogPlatformApplicationValidator.GetCollectionDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetCollectionDetailResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCollectionItemsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCollectionItemsResponse>} -
     *   Success response
     * @name getCollectionItems
     * @summary: List items of collection
     * @description: Get items from a collection specified by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCollectionItems/).
     */
    getCollectionItems({ id, sortOn, pageId, pageSize, requestHeaders }?: CatalogPlatformApplicationValidator.GetCollectionItemsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetCollectionItemsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetConfigurationByTypeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>}
     *   - Success response
     *
     * @name getConfigurationByType
     * @summary: Get configuration
     * @description: Retrieve configuration details based on a specific type in the catalog for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationByType/).
     */
    getConfigurationByType({ type, requestHeaders }?: CatalogPlatformApplicationValidator.GetConfigurationByTypeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetConfigurationMetadataParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetConfigMetadataResponse>} -
     *   Success response
     * @name getConfigurationMetadata
     * @summary: Get configuration metadata
     * @description: Retrieve the configuraion metadata details for specific config_type for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationMetadata/).
     */
    getConfigurationMetadata({ configType, templateSlug, pageNo, pageSize, q, requestHeaders }?: CatalogPlatformApplicationValidator.GetConfigurationMetadataParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetConfigMetadataResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetConfigurationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name getConfigurations
     * @summary: Get product configurations
     * @description: Retrieve a detailed configurations for product catalog specific to a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurations/).
     */
    getConfigurations({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetDepartmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentResponse>} - Success response
     * @name getDepartments
     * @summary: List departments
     * @description: Retrieve a list of departments associated with a comapny and sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDepartments/).
     */
    getDepartments({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetDiscountedInventoryBySizeIdentifierParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
     *   - Success response
     *
     * @name getDiscountedInventoryBySizeIdentifier
     * @summary: Get discounted inventory
     * @description: Allows to retrieve Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDiscountedInventoryBySizeIdentifier/).
     */
    getDiscountedInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, requestHeaders, }?: CatalogPlatformApplicationValidator.GetDiscountedInventoryBySizeIdentifierParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Id of the company associated to product
     *   that is to be viewed.
     * @param {string} arg.applicationId - Uniquer Application ID.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {number[]} [arg.locationIds] - Search by store ids.
     * @returns {Paginator<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
     * @summary: Get discounted inventory
     * @description: Allows to retrieve Inventory data for particular company grouped by size and store.
     */
    getDiscountedInventoryBySizeIdentifierPaginator({ companyId, applicationId, itemId, sizeIdentifier, pageSize, q, locationIds, }?: {
        companyId: number;
        applicationId: string;
        itemId: number;
        sizeIdentifier: string;
        pageSize?: number;
        q?: string;
        locationIds?: number[];
    }): Paginator<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetGroupConfigurationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetConfigResponse>} - Success response
     * @name getGroupConfigurations
     * @summary: Get group configurations
     * @description: Retrieve the details of product group configurations based on config types for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getGroupConfigurations/).
     */
    getGroupConfigurations({ configType, pageNo, pageSize, search, templateSlug, requestHeaders }?: CatalogPlatformApplicationValidator.GetGroupConfigurationsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetConfigResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetListingConfigurationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetConfigResponse>} - Success response
     * @name getListingConfigurations
     * @summary: Get listing configurations
     * @description: Retrieve product listing configurations based on specific config_type for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getListingConfigurations/).
     */
    getListingConfigurations({ configType, pageNo, pageSize, search, requestHeaders }?: CatalogPlatformApplicationValidator.GetListingConfigurationsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetConfigResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetProductDetailBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductDetail>} - Success response
     * @name getProductDetailBySlug
     * @summary: Get product details
     * @description: Retrieve detailed product information using a product slug.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductDetailBySlug/).
     */
    getProductDetailBySlug({ slug, requestHeaders }?: CatalogPlatformApplicationValidator.GetProductDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetQueryFiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetQueryFiltersResponse>} - Success response
     * @name getQueryFilters
     * @summary: Get collection query filters
     * @description: Retrieve query filters to configure a collection for a company and a sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getQueryFilters/).
     */
    getQueryFilters({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetQueryFiltersResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetSearchConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchConfigurationResponse>}
     *   - Success response
     *
     * @name getSearchConfiguration
     * @summary: Get Search configuration
     * @description: Get search configuration for a specific company and sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchConfiguration/).
     */
    getSearchConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchConfigurationResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetSearchKeywordsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsDetailResponse>} -
     *   Success response
     * @name getSearchKeywords
     * @summary: Get search keywords
     * @description: Retrieve a list of a specific list of keywords by its id for a specific company and sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchKeywords/).
     */
    getSearchKeywords({ id, requestHeaders }?: CatalogPlatformApplicationValidator.GetSearchKeywordsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchWordsDetailResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAllowSingleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name updateAllowSingle
     * @summary: Update 'Allow Single' setting
     * @description: Modify allow single flag for filters of the sales channel for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAllowSingle/).
     */
    updateAllowSingle({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAllowSingleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppBrandParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppBrand
     * @summary: Update sales channel brand
     * @description: Modify data associated to the brand for that particular sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppBrand/).
     */
    updateAppBrand({ brandUid, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppBrandParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppCategoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppCategory
     * @summary: Update sales channel category
     * @description: Modify category data related to the sales channel . - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppCategory/).
     */
    updateAppCategory({ categoryUid, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppCategoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppCategoryReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name updateAppCategoryReturnConfiguration
     * @summary: Update return Configuration
     * @description: Update Category level sales channel Return Configuration setttings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppCategoryReturnConfiguration/).
     */
    updateAppCategoryReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppCategoryReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppDepartmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppDepartment
     * @summary: Update sales channel department
     * @description: Modify department data associated to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppDepartment/).
     */
    updateAppDepartment({ departmentUid, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppDepartmentParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppLocationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppLocation
     * @summary: Update sales channel location
     * @description: Modify location data related to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppLocation/).
     */
    updateAppLocation({ storeUid, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppLocationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppProduct
     * @summary: Update sales channel product
     * @description: Allows to update data associated to a item by its item_id for an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppProduct/).
     */
    updateAppProduct({ itemId, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name updateAppReturnConfiguration
     * @summary: Update product return configuration
     * @description: Update Return configuration level set for an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppReturnConfiguration/).
     */
    updateAppReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAutocompleteKeywordParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
     *   Success response
     * @name updateAutocompleteKeyword
     * @summary: Update autocomplete keyword
     * @description: Update a specific autocomplete keyword configuration by its id for a specific sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAutocompleteKeyword/).
     */
    updateAutocompleteKeyword({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAutocompleteKeywordParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateCollectionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.UpdateCollection>} - Success response
     * @name updateCollection
     * @summary: Update a collection
     * @description: Update a collection by it's id. On successful request, returns the updated collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateCollection/).
     */
    updateCollection({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateCollectionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.UpdateCollection>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateDefaultSortParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
     * @name updateDefaultSort
     * @summary: Update default sorting
     * @description: Modify the default sort key configuration for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateDefaultSort/).
     */
    updateDefaultSort({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateDefaultSortParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ConfigSuccessResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateGroupConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
     * @name updateGroupConfiguration
     * @summary: Update group configuration
     * @description: Modify group configurations by its slug for specific config_type for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateGroupConfiguration/).
     */
    updateGroupConfiguration({ configType, groupSlug, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateGroupConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppConfigurationDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateListingConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationsSort>} - Success response
     * @name updateListingConfiguration
     * @summary: Update listing configuration
     * @description: Modify a specific product listing configuration by its config_id for a specific config_type for a company and an sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateListingConfiguration/).
     */
    updateListingConfiguration({ configType, configId, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateListingConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppConfigurationsSort>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateSearchConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.UpdateSearchConfigurationResponse>}
     *   - Success response
     *
     * @name updateSearchConfiguration
     * @summary: Update search configuration
     * @description: Allows you to modify searchable attributes for an sales channel. searchable attributes are the fields on which the products are searched. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSearchConfiguration/).
     */
    updateSearchConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateSearchConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.UpdateSearchConfigurationResponse>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateSearchKeywordsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
     * @name updateSearchKeywords
     * @summary: Update search keywords
     * @description: Update a specific search keyword by its id for a specific company and sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSearchKeywords/).
     */
    updateSearchKeywords({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateSearchKeywordsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchWordsData>;
}
import CatalogPlatformApplicationValidator = require("./CatalogPlatformApplicationValidator");
import CatalogPlatformModel = require("./CatalogPlatformModel");
import Paginator = require("../../common/Paginator");
