export = Catalog;
declare class Catalog {
    constructor(config: any);
    config: any;
    /**
     * @param {CatalogPlatformValidator.AddInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name addInventory
     * @summary: Create Inventory
     * @description: Allows add Inventory for particular size and selling location. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/addInventory/).
     */
    addInventory({ itemId, size, body, requestHeaders }?: CatalogPlatformValidator.AddInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.AllSizesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAllSizes>} - Success response
     * @name allSizes
     * @summary: Get product sizes
     * @description: Retrieve all available sizes for a product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/allSizes/).
     */
    allSizes({ itemId, requestHeaders }?: CatalogPlatformValidator.AllSizesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAllSizes>;
    /**
     * @param {CatalogPlatformValidator.BulkHsnCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkHsnResponse>} - Success response
     * @name bulkHsnCode
     * @summary: Create Bulk update HSN
     * @description: Execute bulk updates for HSN codes across multiple products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/bulkHsnCode/).
     */
    bulkHsnCode({ body, requestHeaders }?: CatalogPlatformValidator.BulkHsnCodeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkHsnResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateBulkInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createBulkInventory
     * @summary: Create bulk inventory
     * @description: Helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkInventory/).
     */
    createBulkInventory({ batchId, body, requestHeaders }?: CatalogPlatformValidator.CreateBulkInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateBulkInventoryJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
     * @name createBulkInventoryJob
     * @summary: Create bulk inventory upload job
     * @description: Helps to create a bulk Inventory upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkInventoryJob/).
     */
    createBulkInventoryJob({ body, requestHeaders }?: CatalogPlatformValidator.CreateBulkInventoryJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateBulkProductUploadJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
     * @name createBulkProductUploadJob
     * @summary: Create products bulk upload
     * @description: This API helps to create a bulk products upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkProductUploadJob/).
     */
    createBulkProductUploadJob({ body, requestHeaders }?: CatalogPlatformValidator.CreateBulkProductUploadJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateCategoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CategoryCreateResponse>} - Success response
     * @name createCategories
     * @summary: Create categories
     * @description: Allows to create product categories for specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCategories/).
     */
    createCategories({ body, requestHeaders }?: CatalogPlatformValidator.CreateCategoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CategoryCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateDepartmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentCreateResponse>} -
     *   Success response
     * @name createDepartments
     * @summary: Create departments
     * @description: Create departments for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createDepartments/).
     */
    createDepartments({ body, requestHeaders }?: CatalogPlatformValidator.CreateDepartmentsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateInventoryExportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryExportResponse>} - Success response
     * @name createInventoryExport
     * @summary: Create inventory export
     * @description: creates export job for inventory data associated with a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createInventoryExport/).
     */
    createInventoryExport({ body, requestHeaders }?: CatalogPlatformValidator.CreateInventoryExportParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryExportResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateInventoryExportJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryExportResponse>} - Success response
     * @name createInventoryExportJob
     * @summary: Create inventory export job
     * @description: Helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createInventoryExportJob/).
     */
    createInventoryExportJob({ body, requestHeaders }?: CatalogPlatformValidator.CreateInventoryExportJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryExportResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateMarketplaceOptinParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateMarketplaceOptinResponse>}
     *   - Success response
     *
     * @name createMarketplaceOptin
     * @summary: Create or Update opt-in infomation
     * @description: Allows to create opt-in information for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMarketplaceOptin/).
     */
    createMarketplaceOptin({ marketplaceSlug, body, requestHeaders }?: CatalogPlatformValidator.CreateMarketplaceOptinParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateMarketplaceOptinResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name createProduct
     * @summary: Create product
     * @description: Users can create a product using this API, associating it with the provided company ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProduct/).
     */
    createProduct({ body, requestHeaders }?: CatalogPlatformValidator.CreateProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformValidator.CreateProductAssetsInBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createProductAssetsInBulk
     * @summary: Create product assets in bulk
     * @description: Helps to create a bulk asset upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductAssetsInBulk/).
     */
    createProductAssetsInBulk({ body, requestHeaders }?: CatalogPlatformValidator.CreateProductAssetsInBulkParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateProductBundleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetProductBundleCreateResponse>}
     *   - Success response
     *
     * @name createProductBundle
     * @summary: Create product bundle
     * @description: Create product bundle in the catalog associated to a specific company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductBundle/).
     */
    createProductBundle({ body, requestHeaders }?: CatalogPlatformValidator.CreateProductBundleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetProductBundleCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateProductExportJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
     *   Success response
     * @name createProductExportJob
     * @summary: Create product export job
     * @description: Allows to create a product export job for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductExportJob/).
     */
    createProductExportJob({ body, requestHeaders }?: CatalogPlatformValidator.CreateProductExportJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductDownloadsResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateProductsInBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createProductsInBulk
     * @summary: Create products in bulk
     * @description: Helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductsInBulk/).
     */
    createProductsInBulk({ batchId, body, requestHeaders }?: CatalogPlatformValidator.CreateProductsInBulkParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateSizeGuideParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createSizeGuide
     * @summary: Create size guide
     * @description: Allows to create a size guide associated to a seller - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSizeGuide/).
     */
    createSizeGuide({ body, requestHeaders }?: CatalogPlatformValidator.CreateSizeGuideParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteBulkInventoryJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteBulkInventoryJob
     * @summary: Delete inventory bulk upload job
     * @description: Allows to delete bulk Inventory job associated with company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteBulkInventoryJob/).
     */
    deleteBulkInventoryJob({ batchId, requestHeaders }?: CatalogPlatformValidator.DeleteBulkInventoryJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteProduct
     * @summary: Delete product
     * @description: Users can delete a product using this by providing the itemid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteProduct/).
     */
    deleteProduct({ itemId, requestHeaders }?: CatalogPlatformValidator.DeleteProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteProductBulkJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteProductBulkJob
     * @summary: Delete product bulk-upload job
     * @description: Allows to delete bulk product job associated with company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteProductBulkJob/).
     */
    deleteProductBulkJob({ batchId, requestHeaders }?: CatalogPlatformValidator.DeleteProductBulkJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteRealtimeInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
     * @name deleteRealtimeInventory
     * @summary: Delete an inventory
     * @description: You can use this API to delete inventory linked to a particular product size. When you make the API call, the inventory associated with that size will be removed as part of api process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteRealtimeInventory/).
     */
    deleteRealtimeInventory({ itemId, sellerIdentifier, body, requestHeaders }?: CatalogPlatformValidator.DeleteRealtimeInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteSizeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductSizeDeleteResponse>} -
     *   Success response
     * @name deleteSize
     * @summary: Delete product size
     * @description: Allows to delete size associated with product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSize/).
     */
    deleteSize({ itemId, size, requestHeaders }?: CatalogPlatformValidator.DeleteSizeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductSizeDeleteResponse>;
    /**
     * @param {CatalogPlatformValidator.DownloadInventoryTemplateViewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name downloadInventoryTemplateView
     * @summary: Download inventory template data
     * @description: Allows you to download inventory product template data for a specific company in formats like csv and excel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/downloadInventoryTemplateView/).
     */
    downloadInventoryTemplateView({ itemType, requestHeaders }?: CatalogPlatformValidator.DownloadInventoryTemplateViewParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {CatalogPlatformValidator.DownloadProductTemplateViewsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name downloadProductTemplateViews
     * @summary: Download product template view
     * @description: Allows you to download product template data by its slug for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/downloadProductTemplateViews/).
     */
    downloadProductTemplateViews({ slug, itemType, type, requestHeaders }?: CatalogPlatformValidator.DownloadProductTemplateViewsParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {CatalogPlatformValidator.EditProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name editProduct
     * @summary: Update a product
     * @description: Modify the details and settings of an existing product in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/editProduct/).
     */
    editProduct({ itemId, body, requestHeaders }?: CatalogPlatformValidator.EditProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.ExportInventoryConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryConfig>} - Success response
     * @name exportInventoryConfig
     * @summary: Get export inventory configuration
     * @description: Retrieve List of different filters like brand, store, and type for inventory export. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/exportInventoryConfig/).
     */
    exportInventoryConfig({ filterType, requestHeaders }?: CatalogPlatformValidator.ExportInventoryConfigParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryConfig>;
    /**
     * @param {CatalogPlatformValidator.GetAllProductHsnCodesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HsnCodesListingResponseSchemaV2>}
     *   - Success response
     *
     * @name getAllProductHsnCodes
     * @summary: List product HSN codes
     * @description: Retrieve all HSN codes associated with company products and provide search capabilities based on HSN code, reporting HSN, etc - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllProductHsnCodes/).
     */
    getAllProductHsnCodes({ pageNo, pageSize, q, type, requestHeaders }?: CatalogPlatformValidator.GetAllProductHsnCodesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.HsnCodesListingResponseSchemaV2>;
    /**
     * @param {CatalogPlatformValidator.GetCategoryDataParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SingleCategoryResponse>} - Success response
     * @name getCategoryData
     * @summary: Get category by uid
     * @description: Retrieve detailed information about a specific category by its uid for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCategoryData/).
     */
    getCategoryData({ uid, requestHeaders }?: CatalogPlatformValidator.GetCategoryDataParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SingleCategoryResponse>;
    /**
     * @param {CatalogPlatformValidator.GetCompanyBrandDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OptinCompanyBrandDetailsView>} -
     *   Success response
     * @name getCompanyBrandDetail
     * @summary: list Company Brand of Optin
     * @description: Get the details of the Brands associated with the given company_id passed which has opt-in. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyBrandDetail/).
     */
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace, requestHeaders }?: CatalogPlatformValidator.GetCompanyBrandDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.OptinCompanyBrandDetailsView>;
    /**
     * @param {CatalogPlatformValidator.GetCompanyDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OptinCompanyDetail>} - Success response
     * @name getCompanyDetail
     * @summary: Get Company
     * @description: Get the details of the company associated with the given company_id passed which has opt-in. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyDetail/).
     */
    getCompanyDetail({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.OptinCompanyDetail>;
    /**
     * @param {CatalogPlatformValidator.GetCompanyMetricsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OptinCompanyMetrics>} - Success response
     * @name getCompanyMetrics
     * @summary: Get company metrics
     * @description: Allows viewing company metrics, including brand and store status, as well as the number of verified and unverified products, company documents, and store documents. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyMetrics/).
     */
    getCompanyMetrics({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.OptinCompanyMetrics>;
    /**
     * @param {CatalogPlatformValidator.GetDepartmentDataParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentsResponse>} - Success response
     * @name getDepartmentData
     * @summary: Get department by uid
     * @description: Retrieve detailed information about a specific department for a specific company by uid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDepartmentData/).
     */
    getDepartmentData({ uid, requestHeaders }?: CatalogPlatformValidator.GetDepartmentDataParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentsResponse>;
    /**
     * @param {CatalogPlatformValidator.GetGenderAttributeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GenderDetail>} - Success response
     * @name getGenderAttribute
     * @summary: Get gender attribute by slug
     * @description: Retrieve the gender attribute for catalog listings by attribute slug passed for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getGenderAttribute/).
     */
    getGenderAttribute({ attributeSlug, requestHeaders }?: CatalogPlatformValidator.GetGenderAttributeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GenderDetail>;
    /**
     * @param {CatalogPlatformValidator.GetHsnCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HsnCode>} - Success response
     * @name getHsnCode
     * @summary: List HSN code
     * @description: Retrieve the HSN code for a product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getHsnCode/).
     */
    getHsnCode({ id, requestHeaders }?: CatalogPlatformValidator.GetHsnCodeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.HsnCode>;
    /**
     * @param {CatalogPlatformValidator.GetInventoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetInventoriesResponse>} - Success response
     * @name getInventories
     * @summary: List Inventory
     * @description: Allows to get Inventories data for particular company.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventories/).
     */
    getInventories({ itemId, size, pageNo, pageSize, pageId, pageType, q, sellable, storeIds, brandIds, sellerIdentifiers, qtyGt, qtyLt, qtyType, fromDate, toDate, sizeIdentifier, requestHeaders, }?: CatalogPlatformValidator.GetInventoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetInventoriesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.itemId] - Item code of the product of which size is to be get.
     * @param {string} [arg.size] - Size of which inventory is to get.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {boolean} [arg.sellable] - Filter on whether product is in stock or not.
     * @param {number[]} [arg.storeIds] - The Store Id of products to fetch inventory.
     * @param {number[]} [arg.brandIds] - The Brand Id of products to fetch inventory.
     * @param {string[]} [arg.sellerIdentifiers] - The Seller Identifier or
     *   Primary Identifier of the inventory.
     * @param {number} [arg.qtyGt] - This field allows you to filter for
     *   inventories that have quantity greater than to the specified value
     *   based on qty_type filter.
     * @param {number} [arg.qtyLt] - This field allows you to filter for
     *   inventories that have a quantity less than to the specified value based
     *   on qty_type filter.
     * @param {string} [arg.qtyType] - This field provides flexibility in
     *   selecting filter for inventory quantity counts and date queries. For
     *   example, you might use this field to specify "total" or "sellable" quantity.
     * @param {string} [arg.fromDate] - Inventory updated on filter to get
     *   inventories greater then or equal to provided date based on qty_type value.
     * @param {string} [arg.toDate] - Inventory updated on filter to get
     *   inventories less then or equal to provided date based on qty_type value.
     * @param {string} [arg.sizeIdentifier] - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @returns {Paginator<CatalogPlatformModel.GetInventoriesResponse>}
     * @summary: List Inventory
     * @description: Allows to get Inventories data for particular company.
     */
    getInventoriesPaginator({ itemId, size, pageSize, q, sellable, storeIds, brandIds, sellerIdentifiers, qtyGt, qtyLt, qtyType, fromDate, toDate, sizeIdentifier, }?: {
        itemId?: string;
        size?: string;
        pageSize?: number;
        q?: string;
        sellable?: boolean;
        storeIds?: number[];
        brandIds?: number[];
        sellerIdentifiers?: string[];
        qtyGt?: number;
        qtyLt?: number;
        qtyType?: string;
        fromDate?: string;
        toDate?: string;
        sizeIdentifier?: string;
    }): Paginator<CatalogPlatformModel.GetInventoriesResponse>;
    /**
     * @param {CatalogPlatformValidator.GetInventoryBulkUploadHistoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkInventoryGet>} - Success response
     * @name getInventoryBulkUploadHistory
     * @summary: List bulk inventory upload history
     * @description: Helps to get bulk Inventory upload jobs status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBulkUploadHistory/).
     */
    getInventoryBulkUploadHistory({ pageNo, pageSize, search, requestHeaders }?: CatalogPlatformValidator.GetInventoryBulkUploadHistoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkInventoryGet>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.search] - Search string to filter the results by batch id
     * @returns {Paginator<CatalogPlatformModel.BulkInventoryGet>}
     * @summary: List bulk inventory upload history
     * @description: Helps to get bulk Inventory upload jobs status.
     */
    getInventoryBulkUploadHistoryPaginator({ pageSize, search }?: {
        pageSize?: number;
        search?: string;
    }): Paginator<CatalogPlatformModel.BulkInventoryGet>;
    /**
     * @param {CatalogPlatformValidator.GetInventoryBySizeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryResponsePaginated>} -
     *   Success response
     * @name getInventoryBySize
     * @summary: List inventory by size
     * @description: Retrieve inventory data for a specific company, item ID, and size. The API supports search capabilities based on selling location (store) code and product availability (in stock or not)." - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBySize/).
     */
    getInventoryBySize({ itemId, size, pageNo, pageSize, q, sellable, requestHeaders }?: CatalogPlatformValidator.GetInventoryBySizeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryResponsePaginated>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.size - Size of which inventory is to get.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {boolean} [arg.sellable] - Filter on whether product is in stock or not.
     * @returns {Paginator<CatalogPlatformModel.InventoryResponsePaginated>}
     * @summary: List inventory by size
     * @description: Retrieve inventory data for a specific company, item ID, and size. The API supports search capabilities based on selling location (store) code and product availability (in stock or not)."
     */
    getInventoryBySizePaginator({ itemId, size, pageSize, q, sellable }?: {
        itemId: number;
        size: string;
        pageSize?: number;
        q?: string;
        sellable?: boolean;
    }): Paginator<CatalogPlatformModel.InventoryResponsePaginated>;
    /**
     * @param {CatalogPlatformValidator.GetInventoryBySizeIdentifierParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
     *   - Success response
     *
     * @name getInventoryBySizeIdentifier
     * @summary: List inventory by size
     * @description: Retrieve inventory data for a specific company, item ID, and seller identifier. The API supports search capabilities using store codes and location IDs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBySizeIdentifier/).
     */
    getInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, requestHeaders, }?: CatalogPlatformValidator.GetInventoryBySizeIdentifierParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {number[]} [arg.locationIds] - Search by store ids.
     * @returns {Paginator<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
     * @summary: List inventory by size
     * @description: Retrieve inventory data for a specific company, item ID, and seller identifier. The API supports search capabilities using store codes and location IDs.
     */
    getInventoryBySizeIdentifierPaginator({ itemId, sizeIdentifier, pageSize, q, locationIds, }?: {
        itemId: number;
        sizeIdentifier: string;
        pageSize?: number;
        q?: string;
        locationIds?: number[];
    }): Paginator<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>;
    /**
     * @param {CatalogPlatformValidator.GetInventoryExportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryExportJob>} - Success response
     * @name getInventoryExport
     * @summary: list product inventory
     * @description: Retrieves inventory for all products for that particular company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryExport/).
     */
    getInventoryExport({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryExportJob>;
    /**
     * @param {CatalogPlatformValidator.GetMarketplaceOptinDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetOptInPlatform>} - Success response
     * @name getMarketplaceOptinDetail
     * @summary: Get opt-in
     * @description: Allows to fetch opt-in information for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMarketplaceOptinDetail/).
     */
    getMarketplaceOptinDetail({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetOptInPlatform>;
    /**
     * @param {CatalogPlatformValidator.GetMarketplacesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAllMarketplaces>} - Success response
     * @name getMarketplaces
     * @summary: List marketplaces
     * @description: Allows to get all marketplaces information for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMarketplaces/).
     */
    getMarketplaces({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAllMarketplaces>;
    /**
     * @param {CatalogPlatformValidator.GetOptimalLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.StoreAssignResponse>} - Success response
     * @name getOptimalLocations
     * @summary: Get optimal locations
     * @description: This API returns the optimal locations where inventory is available for the given articles. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getOptimalLocations/).
     */
    getOptimalLocations({ body, requestHeaders }?: CatalogPlatformValidator.GetOptimalLocationsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.StoreAssignResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SingleProductResponse>} - Success response
     * @name getProduct
     * @summary: Get a product
     * @description: Retrieve data associated to a particular product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProduct/).
     */
    getProduct({ itemId, brandUid, itemCode, requestHeaders }?: CatalogPlatformValidator.GetProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SingleProductResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductAssetsInBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkAssetResponse>} - Success response
     * @name getProductAssetsInBulk
     * @summary: Get product assets
     * @description: Helps to retrieve bulk asset jobs data associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductAssetsInBulk/).
     */
    getProductAssetsInBulk({ pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetProductAssetsInBulkParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkAssetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @returns {Paginator<CatalogPlatformModel.BulkAssetResponse>}
     * @summary: Get product assets
     * @description: Helps to retrieve bulk asset jobs data associated to a particular company.
     */
    getProductAssetsInBulkPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<CatalogPlatformModel.BulkAssetResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductAttributesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductAttributesResponse>} -
     *   Success response
     * @name getProductAttributes
     * @summary: List product attributes
     * @description: Retrieve attributes attached to products based on their L3 category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductAttributes/).
     */
    getProductAttributes({ category, filter, requestHeaders }?: CatalogPlatformValidator.GetProductAttributesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductAttributesResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductBulkUploadHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductBulkRequestList>} - Success response
     * @name getProductBulkUploadHistory
     * @summary: List product bulk upload history
     * @description: Helps to get bulk product upload jobs data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBulkUploadHistory/).
     */
    getProductBulkUploadHistory({ search, pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetProductBulkUploadHistoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductBulkRequestList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.search] - Search string to filter the results by batch id
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @returns {Paginator<CatalogPlatformModel.ProductBulkRequestList>}
     * @summary: List product bulk upload history
     * @description: Helps to get bulk product upload jobs data.
     */
    getProductBulkUploadHistoryPaginator({ search, pageSize }?: {
        search?: string;
        pageSize?: number;
    }): Paginator<CatalogPlatformModel.ProductBulkRequestList>;
    /**
     * @param {CatalogPlatformValidator.GetProductBundleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetProductBundleListingResponse>}
     *   - Success response
     *
     * @name getProductBundle
     * @summary: List product bundles
     * @description: Retrieve a list of product bundles available in the catalog associated to a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBundle/).
     */
    getProductBundle({ q, slug, requestHeaders }?: CatalogPlatformValidator.GetProductBundleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetProductBundleListingResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductBundleDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetProductBundleResponse>} -
     *   Success response
     * @name getProductBundleDetail
     * @summary: Get product bundle
     * @description: Retrieve detailed information about a specific product bundle associated to a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBundleDetail/).
     */
    getProductBundleDetail({ id, requestHeaders }?: CatalogPlatformValidator.GetProductBundleDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetProductBundleResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductExportJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
     *   Success response
     * @name getProductExportJobs
     * @summary: Get product export jobs
     * @description: Get product export jobs specific to a company based on queries like query param, date range and status. View details including trigger data, task id , etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductExportJobs/).
     */
    getProductExportJobs({ status, fromDate, toDate, q, pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetProductExportJobsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductDownloadsResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductSizeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductListingResponse>} - Success response
     * @name getProductSize
     * @summary: List product size
     * @description: Retrieve data associated to a particular product size. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductSize/).
     */
    getProductSize({ itemId, itemCode, brandUid, uid, requestHeaders }?: CatalogPlatformValidator.GetProductSizeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductListingResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductTagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductTagsViewResponse>} - Success response
     * @name getProductTags
     * @summary: List product tags
     * @description: Retrieve tags data associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductTags/).
     */
    getProductTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductTagsViewResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductValidationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ValidateProduct>} - Success response
     * @name getProductValidation
     * @summary: Get valid products
     * @description: Retrieve validation data for products at company level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductValidation/).
     */
    getProductValidation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.ValidateProduct>;
    /**
     * @param {CatalogPlatformValidator.GetProductsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductListingResponseV2>} -
     *   Success response
     * @name getProducts
     * @summary: List products
     * @description: Retrieve a list of available products - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProducts/).
     */
    getProducts({ brandIds, categoryIds, itemIds, departmentIds, itemCode, q, tags, pageNo, pageSize, requestHeaders, }?: CatalogPlatformValidator.GetProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductListingResponseV2>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number[]} [arg.brandIds] - Get multiple products filtered by Brand Ids
     * @param {number[]} [arg.categoryIds] - Get multiple products filtered by
     *   Category Ids
     * @param {number[]} [arg.itemIds] - Get multiple products filtered by Item Ids
     * @param {number[]} [arg.departmentIds] - Get multiple products filtered by
     *   Department Ids
     * @param {string[]} [arg.itemCode] - Get multiple products filtered by Item Code
     * @param {string} [arg.q] - Get multiple products filtered by q string
     * @param {string[]} [arg.tags] - Get multiple products filtered by tags
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @returns {Paginator<CatalogPlatformModel.ProductListingResponseV2>}
     * @summary: List products
     * @description: Retrieve a list of available products
     */
    getProductsPaginator({ brandIds, categoryIds, itemIds, departmentIds, itemCode, q, tags, pageSize, }?: {
        brandIds?: number[];
        categoryIds?: number[];
        itemIds?: number[];
        departmentIds?: number[];
        itemCode?: string[];
        q?: string;
        tags?: string[];
        pageSize?: number;
    }): Paginator<CatalogPlatformModel.ProductListingResponseV2>;
    /**
     * @param {CatalogPlatformValidator.GetSellerInsightsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CrossSellingResponse>} - Success response
     * @name getSellerInsights
     * @summary: Get seller catalog counts
     * @description: Retrieve the count of catalog related data for sellers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSellerInsights/).
     */
    getSellerInsights({ sellerAppId, requestHeaders }?: CatalogPlatformValidator.GetSellerInsightsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CrossSellingResponse>;
    /**
     * @param {CatalogPlatformValidator.GetSingleProductHSNCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HSNDataInsertV2>} - Success response
     * @name getSingleProductHSNCode
     * @summary: Get product HSN code
     * @description: Retrieve HSN details associated with company ID and reporting HSN - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSingleProductHSNCode/).
     */
    getSingleProductHSNCode({ reportingHsn, requestHeaders }?: CatalogPlatformValidator.GetSingleProductHSNCodeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.HSNDataInsertV2>;
    /**
     * @param {CatalogPlatformValidator.GetSizeGuideParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SizeGuideResponse>} - Success response
     * @name getSizeGuide
     * @summary: Get size guide
     * @description: Retrieve data associated about a specific size guide. It contains meta deta like header values like for shoulder, head, etc. and measurement unit like cm and values contains sizes for the same. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSizeGuide/).
     */
    getSizeGuide({ id, requestHeaders }?: CatalogPlatformValidator.GetSizeGuideParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SizeGuideResponse>;
    /**
     * @param {CatalogPlatformValidator.GetSizeGuidesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ListSizeGuide>} - Success response
     * @name getSizeGuides
     * @summary: List size guides
     * @description: Allows to view all the size guides associated to the seller. Each size guide contains meta deta like header values like for shoulder, head, etc. and measurement unit like cm and values contains sizes for the same. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSizeGuides/).
     */
    getSizeGuides({ active, q, tag, pageNo, pageSize, brandId, requestHeaders }?: CatalogPlatformValidator.GetSizeGuidesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ListSizeGuide>;
    /**
     * @param {CatalogPlatformValidator.GetStoreDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OptinStoreDetails>} - Success response
     * @name getStoreDetail
     * @summary: Get selling location
     * @description: Retrieve the details of the selling location (store) associated with a specific company passed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getStoreDetail/).
     */
    getStoreDetail({ q, pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetStoreDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.OptinStoreDetails>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search related the store for the company id.
     * @param {number} [arg.pageSize] - Number of records that can be seen on
     *   the page for the company id.
     * @returns {Paginator<CatalogPlatformModel.OptinStoreDetails>}
     * @summary: Get selling location
     * @description: Retrieve the details of the selling location (store) associated with a specific company passed.
     */
    getStoreDetailPaginator({ q, pageSize }?: {
        q?: string;
        pageSize?: number;
    }): Paginator<CatalogPlatformModel.OptinStoreDetails>;
    /**
     * @param {CatalogPlatformValidator.GetVariantsOfProductsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductVariantsResponse>} - Success response
     * @name getVariantsOfProducts
     * @summary: Get variants
     * @description: Retrieve variants of a specific product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getVariantsOfProducts/).
     */
    getVariantsOfProducts({ itemId, variantType, pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetVariantsOfProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductVariantsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Get list of variants of item Id
     * @param {string} arg.variantType - Get multiple products filtered by variant type
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @returns {Paginator<CatalogPlatformModel.ProductVariantsResponse>}
     * @summary: Get variants
     * @description: Retrieve variants of a specific product.
     */
    getVariantsOfProductsPaginator({ itemId, variantType, pageSize }?: {
        itemId: number;
        variantType: string;
        pageSize?: number;
    }): Paginator<CatalogPlatformModel.ProductVariantsResponse>;
    /**
     * @param {CatalogPlatformValidator.ListCategoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CategoryResponse>} - Success response
     * @name listCategories
     * @summary: List categories
     * @description: Retrieve a list of categories data associated to a specific company and queries passed in the request. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listCategories/).
     */
    listCategories({ level, department, q, pageNo, pageSize, uids, slug, requestHeaders }?: CatalogPlatformValidator.ListCategoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CategoryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.level] - Get category for multiple levels
     * @param {number} [arg.department] - Get category for multiple departments filtered
     * @param {string} [arg.q] - Get multiple categories filtered by search string
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {number[]} [arg.uids] - Get multiple categories filtered by category uids.
     * @param {string} [arg.slug] - Get category by slug
     * @returns {Paginator<CatalogPlatformModel.CategoryResponse>}
     * @summary: List categories
     * @description: Retrieve a list of categories data associated to a specific company and queries passed in the request.
     */
    listCategoriesPaginator({ level, department, q, pageSize, uids, slug }?: {
        level?: string;
        department?: number;
        q?: string;
        pageSize?: number;
        uids?: number[];
        slug?: string;
    }): Paginator<CatalogPlatformModel.CategoryResponse>;
    /**
     * @param {CatalogPlatformValidator.ListDepartmentsDataParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentsResponse>} - Success response
     * @name listDepartmentsData
     * @summary: List company department
     * @description: Allows you to list all departments data for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listDepartmentsData/).
     */
    listDepartmentsData({ pageNo, itemType, pageSize, name, search, isActive, slug, requestHeaders, }?: CatalogPlatformValidator.ListDepartmentsDataParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.itemType] - A `item_type` is a type of product eg.
     *   set, standard, digital
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.name] - Can search departments by passing name.
     * @param {string} [arg.search] - Can search departments by passing name of
     *   the department in search parameter.
     * @param {boolean} [arg.isActive] - Can query for departments based on
     *   whether they are active or inactive.
     * @param {string} [arg.slug] - Can filter by slug
     * @returns {Paginator<CatalogPlatformModel.DepartmentsResponse>}
     * @summary: List company department
     * @description: Allows you to list all departments data for a specific company.
     */
    listDepartmentsDataPaginator({ itemType, pageSize, name, search, isActive, slug, }?: {
        itemType?: string;
        pageSize?: number;
        name?: string;
        search?: string;
        isActive?: boolean;
        slug?: string;
    }): Paginator<CatalogPlatformModel.DepartmentsResponse>;
    /**
     * @param {CatalogPlatformValidator.ListHSNCodesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HSNCodesResponse>} - Success response
     * @name listHSNCodes
     * @summary: List HSN codes
     * @description: Retrieve a list of Harmonized System Nomenclature (HSN) codes for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listHSNCodes/).
     */
    listHSNCodes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.HSNCodesResponse>;
    /**
     * @param {CatalogPlatformValidator.ListInventoryExportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryExportJobListResponse>}
     *   - Success response
     *
     * @name listInventoryExport
     * @summary: List inventory export jobs
     * @description: Retrieve the history of inventory export jobs associated with the company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listInventoryExport/).
     */
    listInventoryExport({ status, fromDate, toDate, q, pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.ListInventoryExportParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryExportJobListResponse>;
    /**
     * @param {CatalogPlatformValidator.ListProductTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.TemplatesResponse>} - Success response
     * @name listProductTemplate
     * @summary: List product templates
     * @description: Allows you to list all product templates for a specific company. also can filter by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplate/).
     */
    listProductTemplate({ department, requestHeaders }?: CatalogPlatformValidator.ListProductTemplateParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.TemplatesResponse>;
    /**
     * @param {CatalogPlatformValidator.ListProductTemplateCategoriesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProdcutTemplateCategoriesResponse>}
     *   - Success response
     *
     * @name listProductTemplateCategories
     * @summary: List product template categories
     * @description: Allows you to list all product template categories values for the departments specified for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplateCategories/).
     */
    listProductTemplateCategories({ departments, itemType, requestHeaders }?: CatalogPlatformValidator.ListProductTemplateCategoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProdcutTemplateCategoriesResponse>;
    /**
     * @param {CatalogPlatformValidator.ListProductTemplateExportDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
     *   Success response
     * @name listProductTemplateExportDetails
     * @summary: List export product templates
     * @description: Retrieve export details related to product templates for a specific company. Can view details including trigger data, task id , etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplateExportDetails/).
     */
    listProductTemplateExportDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductDownloadsResponse>;
    /**
     * @param {CatalogPlatformValidator.ListTemplateBrandTypeValuesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductConfigurationDownloads>} -
     *   Success response
     * @name listTemplateBrandTypeValues
     * @summary: List template brand
     * @description: Retrieve values related to template brand types for a specific company. The filter type query parameter defines what type of data to return.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listTemplateBrandTypeValues/).
     */
    listTemplateBrandTypeValues({ filter, templateTag, itemType, requestHeaders }?: CatalogPlatformValidator.ListTemplateBrandTypeValuesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductConfigurationDownloads>;
    /**
     * @param {CatalogPlatformValidator.UpdateCategoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CategoryUpdateResponse>} - Success response
     * @name updateCategory
     * @summary: Update category
     * @description: Modify data for an existing category by its uid for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateCategory/).
     */
    updateCategory({ uid, body, requestHeaders }?: CatalogPlatformValidator.UpdateCategoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CategoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.UpdateDepartmentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentModel>} - Success response
     * @name updateDepartment
     * @summary: Update department
     * @description: Modify the department data by their uid for a specifc company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateDepartment/).
     */
    updateDepartment({ uid, body, requestHeaders }?: CatalogPlatformValidator.UpdateDepartmentParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentModel>;
    /**
     * @param {CatalogPlatformValidator.UpdateHsnCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HsnCode>} - Success response
     * @name updateHsnCode
     * @summary: Update HSN code
     * @description: Modify the HSN code associated with a product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateHsnCode/).
     */
    updateHsnCode({ id, body, requestHeaders }?: CatalogPlatformValidator.UpdateHsnCodeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.HsnCode>;
    /**
     * @param {CatalogPlatformValidator.UpdateInventoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
     * @name updateInventories
     * @summary: Update inventories
     * @description: Allows to add Inventory for particular size and selling location. for associated companies - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateInventories/).
     */
    updateInventories({ body, requestHeaders }?: CatalogPlatformValidator.UpdateInventoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.UpdateMarketplaceOptinParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.UpdateMarketplaceOptinResponse>}
     *   - Success response
     *
     * @name updateMarketplaceOptin
     * @summary: Update marketplace optin
     * @description: Allows to update marketplace optin for a company by marketplace_slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMarketplaceOptin/).
     */
    updateMarketplaceOptin({ marketplaceSlug, body, requestHeaders }?: CatalogPlatformValidator.UpdateMarketplaceOptinParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.UpdateMarketplaceOptinResponse>;
    /**
     * @param {CatalogPlatformValidator.UpdateProductBundleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetProductBundleCreateResponse>}
     *   - Success response
     *
     * @name updateProductBundle
     * @summary: Update product bundle
     * @description: Modify the details of an existing product bundle in the catalog associated to a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateProductBundle/).
     */
    updateProductBundle({ id, body, requestHeaders }?: CatalogPlatformValidator.UpdateProductBundleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetProductBundleCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.UpdateRealtimeInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
     * @name updateRealtimeInventory
     * @summary: Update an inventory
     * @description: enables you to add inventory for a specific size and selling location (store). The inventory updates will be reflected instantly after the API call. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateRealtimeInventory/).
     */
    updateRealtimeInventory({ itemId, sellerIdentifier, body, requestHeaders }?: CatalogPlatformValidator.UpdateRealtimeInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.UpdateSizeGuideParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name updateSizeGuide
     * @summary: Update size guide
     * @description: Allows to edit a specific size guide. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSizeGuide/).
     */
    updateSizeGuide({ id, body, requestHeaders }?: CatalogPlatformValidator.UpdateSizeGuideParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.UploadBulkProductsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
     * @name uploadBulkProducts
     * @summary: Upload bulk products
     * @description: Users can create multiple products by providing the required information needed for product creation in a CSV or Excel file format. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/uploadBulkProducts/).
     */
    uploadBulkProducts({ department, productType, body, requestHeaders }?: CatalogPlatformValidator.UploadBulkProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkResponse>;
    /**
     * @param {CatalogPlatformValidator.ValidateProductTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.TemplatesValidationResponse>} -
     *   Success response
     * @name validateProductTemplate
     * @summary: Validate product template
     * @description: Allows you to list all product templates validation values by its slug for all the fields present in the database for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductTemplate/).
     */
    validateProductTemplate({ slug, itemType, bulk, requestHeaders }?: CatalogPlatformValidator.ValidateProductTemplateParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.TemplatesValidationResponse>;
    /**
     * @param {CatalogPlatformValidator.ValidateProductTemplateSchemaParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryValidationResponse>} -
     *   Success response
     * @name validateProductTemplateSchema
     * @summary: Validate product template schema
     * @description: Allows you to list all product templates validation values for all the fields present in the database for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductTemplateSchema/).
     */
    validateProductTemplateSchema({ itemType, requestHeaders }?: CatalogPlatformValidator.ValidateProductTemplateSchemaParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryValidationResponse>;
}
import CatalogPlatformValidator = require("./CatalogPlatformValidator");
import CatalogPlatformModel = require("./CatalogPlatformModel");
import Paginator = require("../../common/Paginator");
