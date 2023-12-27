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
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/addInventory/).
     */
    addInventory({ itemId, size, body, requestHeaders }?: CatalogPlatformValidator.AddInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.AllSizesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAllSizes>} - Success response
     * @name allSizes
     * @summary: All Sizes for a given Product
     * @description: This API allows to get  All Sizes for a given Product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/allSizes/).
     */
    allSizes({ itemId, requestHeaders }?: CatalogPlatformValidator.AllSizesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAllSizes>;
    /**
     * @param {CatalogPlatformValidator.BulkHsnCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkHsnResponse>} - Success response
     * @name bulkHsnCode
     * @summary: Bulk Create or Update Hsn Code.
     * @description: Bulk Create or Update Hsn Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/bulkHsnCode/).
     */
    bulkHsnCode({ body, requestHeaders }?: CatalogPlatformValidator.BulkHsnCodeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkHsnResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateBulkInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createBulkInventory
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkInventory/).
     */
    createBulkInventory({ batchId, body, requestHeaders }?: CatalogPlatformValidator.CreateBulkInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateBulkInventoryJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
     * @name createBulkInventoryJob
     * @summary: Create a Bulk Inventory upload Job.
     * @description: This API helps to create a bulk Inventory upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkInventoryJob/).
     */
    createBulkInventoryJob({ body, requestHeaders }?: CatalogPlatformValidator.CreateBulkInventoryJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateBulkProductUploadJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
     * @name createBulkProductUploadJob
     * @summary: Create a Bulk product to upload job.
     * @description: This API helps to create a bulk products upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkProductUploadJob/).
     */
    createBulkProductUploadJob({ body, requestHeaders }?: CatalogPlatformValidator.CreateBulkProductUploadJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateCategoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CategoryCreateResponse>} - Success response
     * @name createCategories
     * @summary: Create product categories
     * @description: This API lets user create product categories - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCategories/).
     */
    createCategories({ body, requestHeaders }?: CatalogPlatformValidator.CreateCategoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CategoryCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateDepartmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentCreateResponse>} -
     *   Success response
     * @name createDepartments
     * @summary: Create the department.
     * @description: Create departments using the API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createDepartments/).
     */
    createDepartments({ body, requestHeaders }?: CatalogPlatformValidator.CreateDepartmentsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateInventoryExportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryExportResponse>} - Success response
     * @name createInventoryExport
     * @summary: Create an inventory export job.
     * @description: This API helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createInventoryExport/).
     */
    createInventoryExport({ body, requestHeaders }?: CatalogPlatformValidator.CreateInventoryExportParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryExportResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateInventoryExportJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryExportResponse>} - Success response
     * @name createInventoryExportJob
     * @summary: Create a Inventory export Job.
     * @description: This API helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createInventoryExportJob/).
     */
    createInventoryExportJob({ body, requestHeaders }?: CatalogPlatformValidator.CreateInventoryExportJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryExportResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateMarketplaceOptinParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.UpdatedResponse>} - Success response
     * @name createMarketplaceOptin
     * @summary: Create/Update opt-in infomation.
     * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMarketplaceOptin/).
     */
    createMarketplaceOptin({ marketplace, body, requestHeaders }?: CatalogPlatformValidator.CreateMarketplaceOptinParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.UpdatedResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
     * @name createProduct
     * @summary: Create a product.
     * @description: This API allows to create product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProduct/).
     */
    createProduct({ body, requestHeaders }?: CatalogPlatformValidator.CreateProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1>;
    /**
     * @param {CatalogPlatformValidator.CreateProductAssetsInBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createProductAssetsInBulk
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductAssetsInBulk/).
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
     * @summary: Create Product Bundle
     * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductBundle/).
     */
    createProductBundle({ body, requestHeaders }?: CatalogPlatformValidator.CreateProductBundleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetProductBundleCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateProductExportJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
     *   Success response
     * @name createProductExportJob
     * @summary: Create a product export job.
     * @description: This API helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductExportJob/).
     */
    createProductExportJob({ body, requestHeaders }?: CatalogPlatformValidator.CreateProductExportJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductDownloadsResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateProductsInBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createProductsInBulk
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductsInBulk/).
     */
    createProductsInBulk({ batchId, body, requestHeaders }?: CatalogPlatformValidator.CreateProductsInBulkParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.CreateSizeGuideParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createSizeGuide
     * @summary: Create a size guide.
     * @description: This API allows to create a size guide associated to a brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSizeGuide/).
     */
    createSizeGuide({ body, requestHeaders }?: CatalogPlatformValidator.CreateSizeGuideParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteBulkInventoryJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteBulkInventoryJob
     * @summary: Delete Bulk Inventory job.
     * @description: This API allows to delete bulk Inventory job associated with company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteBulkInventoryJob/).
     */
    deleteBulkInventoryJob({ batchId, requestHeaders }?: CatalogPlatformValidator.DeleteBulkInventoryJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteInventory
     * @summary: Delete a Inventory.
     * @description: This API allows to delete inventory of a particular product for particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteInventory/).
     */
    deleteInventory({ size, itemId, locationId, requestHeaders }?: CatalogPlatformValidator.DeleteInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteProduct
     * @summary: Delete a product.
     * @description: This API allows to delete product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteProduct/).
     */
    deleteProduct({ itemId, requestHeaders }?: CatalogPlatformValidator.DeleteProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteProductBulkJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteProductBulkJob
     * @summary: Delete Bulk product job.
     * @description: This API allows to delete bulk product job associated with company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteProductBulkJob/).
     */
    deleteProductBulkJob({ batchId, requestHeaders }?: CatalogPlatformValidator.DeleteProductBulkJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteRealtimeInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
     * @name deleteRealtimeInventory
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteRealtimeInventory/).
     */
    deleteRealtimeInventory({ itemId, sellerIdentifier, body, requestHeaders }?: CatalogPlatformValidator.DeleteRealtimeInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.DeleteSizeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductSizeDeleteResponse>} -
     *   Success response
     * @name deleteSize
     * @summary: Delete a Size associated with product.
     * @description: This API allows to delete size associated with product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSize/).
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
     * @summary: Download Product Template View
     * @description: Allows you to download product template data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/downloadInventoryTemplateView/).
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
     * @summary: Download Product Template View
     * @description: Allows you to download product template data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/downloadProductTemplateViews/).
     */
    downloadProductTemplateViews({ slug, itemType, type, requestHeaders }?: CatalogPlatformValidator.DownloadProductTemplateViewsParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {CatalogPlatformValidator.EditProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name editProduct
     * @summary: Edit a product.
     * @description: This API allows to edit product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/editProduct/).
     */
    editProduct({ itemId, body, requestHeaders }?: CatalogPlatformValidator.EditProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.ExportInventoryConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryConfig>} - Success response
     * @name exportInventoryConfig
     * @summary: Get List of different filters for inventory export
     * @description: This API allows get List of different filters like brand, store, and type for inventory export. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/exportInventoryConfig/).
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
     * @summary: Hsn Code List.
     * @description: Hsn Code List. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllProductHsnCodes/).
     */
    getAllProductHsnCodes({ pageNo, pageSize, q, type, requestHeaders }?: CatalogPlatformValidator.GetAllProductHsnCodesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.HsnCodesListingResponseSchemaV2>;
    /**
     * @param {CatalogPlatformValidator.GetCategoryDataParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SingleCategoryResponse>} - Success response
     * @name getCategoryData
     * @summary: Get product category by uid
     * @description: This API gets meta associated to product categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCategoryData/).
     */
    getCategoryData({ uid, requestHeaders }?: CatalogPlatformValidator.GetCategoryDataParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SingleCategoryResponse>;
    /**
     * @param {CatalogPlatformValidator.GetCompanyBrandDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OptinCompanyBrandDetailsView>} -
     *   Success response
     * @name getCompanyBrandDetail
     * @summary: Get the Company Brand details of Optin.
     * @description: Get the details of the Brands associated with the given company_id passed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyBrandDetail/).
     */
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace, requestHeaders }?: CatalogPlatformValidator.GetCompanyBrandDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.OptinCompanyBrandDetailsView>;
    /**
     * @param {CatalogPlatformValidator.GetCompanyDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OptinCompanyDetail>} - Success response
     * @name getCompanyDetail
     * @summary: Get the Company details.
     * @description: Get the details of the company associated with the given company_id passed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyDetail/).
     */
    getCompanyDetail({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.OptinCompanyDetail>;
    /**
     * @param {CatalogPlatformValidator.GetCompanyMetricsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OptinCompanyMetrics>} - Success response
     * @name getCompanyMetrics
     * @summary: Get the Company metrics
     * @description: Get the Company metrics associated with the company ID passed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyMetrics/).
     */
    getCompanyMetrics({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.OptinCompanyMetrics>;
    /**
     * @param {CatalogPlatformValidator.GetDepartmentDataParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentsResponse>} - Success response
     * @name getDepartmentData
     * @summary: Get specific departments details by passing in unique id of the department.
     * @description: Allows you to get department data, by uid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDepartmentData/).
     */
    getDepartmentData({ uid, requestHeaders }?: CatalogPlatformValidator.GetDepartmentDataParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentsResponse>;
    /**
     * @param {CatalogPlatformValidator.GetGenderAttributeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GenderDetail>} - Success response
     * @name getGenderAttribute
     * @summary: Get gender attribute details
     * @description: This API allows to view the gender attribute details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getGenderAttribute/).
     */
    getGenderAttribute({ attributeSlug, requestHeaders }?: CatalogPlatformValidator.GetGenderAttributeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GenderDetail>;
    /**
     * @param {CatalogPlatformValidator.GetHsnCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HsnCode>} - Success response
     * @name getHsnCode
     * @summary: Fetch Hsn Code.
     * @description: Fetch Hsn Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getHsnCode/).
     */
    getHsnCode({ id, requestHeaders }?: CatalogPlatformValidator.GetHsnCodeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.HsnCode>;
    /**
     * @param {CatalogPlatformValidator.GetInventoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetInventoriesResponse>} - Success response
     * @name getInventories
     * @summary: Get Inventory for company
     * @description: This API allows get Inventories data for particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventories/).
     */
    getInventories({ itemId, size, pageNo, pageSize, q, sellable, storeIds, sizeIdentifier, requestHeaders, }?: CatalogPlatformValidator.GetInventoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetInventoriesResponse>;
    /**
     * @param {CatalogPlatformValidator.GetInventoryBulkUploadHistoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkInventoryGet>} - Success response
     * @name getInventoryBulkUploadHistory
     * @summary: Get a list of all bulk Inventory upload jobs.
     * @description: This API helps to get bulk Inventory upload jobs data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBulkUploadHistory/).
     */
    getInventoryBulkUploadHistory({ pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetInventoryBulkUploadHistoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkInventoryGet>;
    /**
     * @param {CatalogPlatformValidator.GetInventoryBySizeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryResponsePaginated>} -
     *   Success response
     * @name getInventoryBySize
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBySize/).
     */
    getInventoryBySize({ itemId, size, pageNo, pageSize, q, sellable, requestHeaders }?: CatalogPlatformValidator.GetInventoryBySizeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryResponsePaginated>;
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
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBySizeIdentifier/).
     */
    getInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, requestHeaders, }?: CatalogPlatformValidator.GetInventoryBySizeIdentifierParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>;
    /**
     * @param {CatalogPlatformValidator.GetInventoryExportParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryExportJob>} - Success response
     * @name getInventoryExport
     * @summary: Get Inventory export history.
     * @description: This API helps to get Inventory export history. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryExport/).
     */
    getInventoryExport({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryExportJob>;
    /**
     * @param {CatalogPlatformValidator.GetMarketplaceOptinDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetOptInPlatform>} - Success response
     * @name getMarketplaceOptinDetail
     * @summary: Get opt-in infomation.
     * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMarketplaceOptinDetail/).
     */
    getMarketplaceOptinDetail({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetOptInPlatform>;
    /**
     * @param {CatalogPlatformValidator.GetMarketplacesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAllMarketplaces>} - Success response
     * @name getMarketplaces
     * @summary: List all marketplaces
     * @description: This API allows to get marketplace information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMarketplaces/).
     */
    getMarketplaces({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAllMarketplaces>;
    /**
     * @param {CatalogPlatformValidator.GetOptimalLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.StoreAssignResponse>} - Success response
     * @name getOptimalLocations
     * @summary: Location Reassignment
     * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getOptimalLocations/).
     */
    getOptimalLocations({ body, requestHeaders }?: CatalogPlatformValidator.GetOptimalLocationsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.StoreAssignResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SingleProductResponse>} - Success response
     * @name getProduct
     * @summary: Get a single product.
     * @description: This API helps to get data associated to a particular product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProduct/).
     */
    getProduct({ itemId, brandUid, itemCode, requestHeaders }?: CatalogPlatformValidator.GetProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SingleProductResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductAssetsInBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkAssetResponse>} - Success response
     * @name getProductAssetsInBulk
     * @summary: Get a list of all bulk asset jobs.
     * @description: This API helps to get bulk asset jobs data associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductAssetsInBulk/).
     */
    getProductAssetsInBulk({ pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetProductAssetsInBulkParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkAssetResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductAttributesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductAttributesResponse>} -
     *   Success response
     * @name getProductAttributes
     * @summary: Get list of all the attributes by their l3_categories
     * @description: This API allows to list all the attributes by their l3_categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductAttributes/).
     */
    getProductAttributes({ category, filter, requestHeaders }?: CatalogPlatformValidator.GetProductAttributesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductAttributesResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductBulkUploadHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductBulkRequestList>} - Success response
     * @name getProductBulkUploadHistory
     * @summary: Get a list of all bulk product upload jobs.
     * @description: This API helps to get bulk product upload jobs data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBulkUploadHistory/).
     */
    getProductBulkUploadHistory({ search, pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetProductBulkUploadHistoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductBulkRequestList>;
    /**
     * @param {CatalogPlatformValidator.GetProductBundleParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetProductBundleListingResponse>}
     *   - Success response
     *
     * @name getProductBundle
     * @summary: List all Product Bundles
     * @description: Get all product bundles for a particular company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBundle/).
     */
    getProductBundle({ q, slug, requestHeaders }?: CatalogPlatformValidator.GetProductBundleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetProductBundleListingResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductBundleDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetProductBundleResponse>} -
     *   Success response
     * @name getProductBundleDetail
     * @summary: Get a particular Product Bundle details
     * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBundleDetail/).
     */
    getProductBundleDetail({ id, requestHeaders }?: CatalogPlatformValidator.GetProductBundleDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetProductBundleResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductExportJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
     *   Success response
     * @name getProductExportJobs
     * @summary: Allows you to list all product templates export list details
     * @description: Can view details including trigger data, task id , etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductExportJobs/).
     */
    getProductExportJobs({ status, fromDate, toDate, q, requestHeaders }?: CatalogPlatformValidator.GetProductExportJobsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductDownloadsResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductSizeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductListingResponse>} - Success response
     * @name getProductSize
     * @summary: Get a single product size.
     * @description: This API helps to get data associated to a particular product size. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductSize/).
     */
    getProductSize({ itemId, itemCode, brandUid, uid, requestHeaders }?: CatalogPlatformValidator.GetProductSizeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductListingResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductTagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductTagsViewResponse>} - Success response
     * @name getProductTags
     * @summary: Get a list of all tags associated with company.
     * @description: This API helps to get tags data associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductTags/).
     */
    getProductTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductTagsViewResponse>;
    /**
     * @param {CatalogPlatformValidator.GetProductValidationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ValidateProduct>} - Success response
     * @name getProductValidation
     * @summary: Validate product/size data
     * @description: This API validates product data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductValidation/).
     */
    getProductValidation({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.ValidateProduct>;
    /**
     * @param {CatalogPlatformValidator.GetProductsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductListingResponseV2>} -
     *   Success response
     * @name getProducts
     * @summary: Get product list
     * @description: This API gets meta associated to products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProducts/).
     */
    getProducts({ brandIds, categoryIds, itemIds, departmentIds, itemCode, q, tags, pageNo, pageSize, requestHeaders, }?: CatalogPlatformValidator.GetProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductListingResponseV2>;
    /**
     * @param {CatalogPlatformValidator.GetSellerInsightsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CrossSellingResponse>} - Success response
     * @name getSellerInsights
     * @summary: Analytics data of catalog and inventory that are being cross-selled.
     * @description: Analytics data of catalog and inventory that are being cross-selled. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSellerInsights/).
     */
    getSellerInsights({ sellerAppId, requestHeaders }?: CatalogPlatformValidator.GetSellerInsightsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CrossSellingResponse>;
    /**
     * @param {CatalogPlatformValidator.GetSingleProductHSNCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HSNDataInsertV2>} - Success response
     * @name getSingleProductHSNCode
     * @summary: Hsn Code List.
     * @description: Hsn Code List. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSingleProductHSNCode/).
     */
    getSingleProductHSNCode({ reportingHsn, requestHeaders }?: CatalogPlatformValidator.GetSingleProductHSNCodeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.HSNDataInsertV2>;
    /**
     * @param {CatalogPlatformValidator.GetSizeGuideParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SizeGuideResponse>} - Success response
     * @name getSizeGuide
     * @summary: Get a single size guide.
     * @description: This API helps to get data associated to a size guide. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSizeGuide/).
     */
    getSizeGuide({ id, requestHeaders }?: CatalogPlatformValidator.GetSizeGuideParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SizeGuideResponse>;
    /**
     * @param {CatalogPlatformValidator.GetSizeGuidesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ListSizeGuide>} - Success response
     * @name getSizeGuides
     * @summary: Get list of size guides
     * @description: This API allows to view all the size guides associated to the seller. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSizeGuides/).
     */
    getSizeGuides({ active, q, tag, pageNo, pageSize, brandId, requestHeaders }?: CatalogPlatformValidator.GetSizeGuidesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ListSizeGuide>;
    /**
     * @param {CatalogPlatformValidator.GetStoreDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OptinStoreDetails>} - Success response
     * @name getStoreDetail
     * @summary: Get the Store details.
     * @description: Get the details of the store associated with the company ID passed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getStoreDetail/).
     */
    getStoreDetail({ q, pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetStoreDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.OptinStoreDetails>;
    /**
     * @param {CatalogPlatformValidator.GetVariantsOfProductsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductVariantsResponse>} - Success response
     * @name getVariantsOfProducts
     * @summary: Get product list
     * @description: This API gets meta associated to products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getVariantsOfProducts/).
     */
    getVariantsOfProducts({ itemId, variantType, pageNo, pageSize, requestHeaders }?: CatalogPlatformValidator.GetVariantsOfProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductVariantsResponse>;
    /**
     * @param {CatalogPlatformValidator.ListCategoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CategoryResponse>} - Success response
     * @name listCategories
     * @summary: Get product categories list
     * @description: This API gets meta associated to product categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listCategories/).
     */
    listCategories({ level, department, q, pageNo, pageSize, uids, requestHeaders }?: CatalogPlatformValidator.ListCategoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CategoryResponse>;
    /**
     * @param {CatalogPlatformValidator.ListDepartmentsDataParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentsResponse>} - Success response
     * @name listDepartmentsData
     * @summary: List all Departments.
     * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listDepartmentsData/).
     */
    listDepartmentsData({ pageNo, itemType, pageSize, name, search, isActive, requestHeaders }?: CatalogPlatformValidator.ListDepartmentsDataParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentsResponse>;
    /**
     * @param {CatalogPlatformValidator.ListHSNCodesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HSNCodesResponse>} - Success response
     * @name listHSNCodes
     * @summary: List HSN Codes
     * @description: Allows you to list all hsn Codes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listHSNCodes/).
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
     * @summary: Get the history of the inventory export.
     * @description: This API helps you the get the history of inventory jobs depending on the filtered criteria. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listInventoryExport/).
     */
    listInventoryExport({ status, fromDate, toDate, q, requestHeaders }?: CatalogPlatformValidator.ListInventoryExportParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryExportJobListResponse>;
    /**
     * @param {CatalogPlatformValidator.ListProductTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.TemplatesResponse>} - Success response
     * @name listProductTemplate
     * @summary: List all Templates
     * @description: Allows you to list all product templates, also can filter by department - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplate/).
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
     * @summary: List Department specifiec product categories
     * @description: Allows you to list all product categories values for the departments specified - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplateCategories/).
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
     * @summary: Allows you to list all product templates export list details
     * @description: Can view details including trigger data, task id , etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplateExportDetails/).
     */
    listProductTemplateExportDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductDownloadsResponse>;
    /**
     * @param {CatalogPlatformValidator.ListTemplateBrandTypeValuesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductConfigurationDownloads>} -
     *   Success response
     * @name listTemplateBrandTypeValues
     * @summary: Allows you to list all values for Templates, Brands or Type
     * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listTemplateBrandTypeValues/).
     */
    listTemplateBrandTypeValues({ filter, templateTag, itemType, requestHeaders }?: CatalogPlatformValidator.ListTemplateBrandTypeValuesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductConfigurationDownloads>;
    /**
     * @param {CatalogPlatformValidator.UpdateCategoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CategoryUpdateResponse>} - Success response
     * @name updateCategory
     * @summary: Update product categories
     * @description: Update a product category using this api - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateCategory/).
     */
    updateCategory({ uid, body, requestHeaders }?: CatalogPlatformValidator.UpdateCategoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CategoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.UpdateDepartmentParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentModel>} - Success response
     * @name updateDepartment
     * @summary: Update the department by their uid.
     * @description: Update the department by their uid using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateDepartment/).
     */
    updateDepartment({ uid, body, requestHeaders }?: CatalogPlatformValidator.UpdateDepartmentParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentModel>;
    /**
     * @param {CatalogPlatformValidator.UpdateHsnCodeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HsnCode>} - Success response
     * @name updateHsnCode
     * @summary: Update Hsn Code.
     * @description: Update Hsn Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateHsnCode/).
     */
    updateHsnCode({ id, body, requestHeaders }?: CatalogPlatformValidator.UpdateHsnCodeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.HsnCode>;
    /**
     * @param {CatalogPlatformValidator.UpdateInventoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
     * @name updateInventories
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateInventories/).
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
     * @description: This API allows to update marketplace optin for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMarketplaceOptin/).
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
     * @summary: Update a Product Bundle
     * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateProductBundle/).
     */
    updateProductBundle({ id, body, requestHeaders }?: CatalogPlatformValidator.UpdateProductBundleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetProductBundleCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.UpdateRealtimeInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
     * @name updateRealtimeInventory
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateRealtimeInventory/).
     */
    updateRealtimeInventory({ itemId, sellerIdentifier, body, requestHeaders }?: CatalogPlatformValidator.UpdateRealtimeInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.UpdateSizeGuideParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name updateSizeGuide
     * @summary: Edit a size guide.
     * @description: This API allows to edit a size guide. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSizeGuide/).
     */
    updateSizeGuide({ id, body, requestHeaders }?: CatalogPlatformValidator.UpdateSizeGuideParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.UploadBulkProductsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
     * @name uploadBulkProducts
     * @summary: Create a Bulk product to upload job.
     * @description: This API helps to create a bulk products upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/uploadBulkProducts/).
     */
    uploadBulkProducts({ department, productType, body, requestHeaders }?: CatalogPlatformValidator.UploadBulkProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BulkResponse>;
    /**
     * @param {CatalogPlatformValidator.ValidateProductTemplateParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.TemplatesValidationResponse>} -
     *   Success response
     * @name validateProductTemplate
     * @summary: Validate Product Template Schema
     * @description: Allows you to list all product templates validation values for all the fields present in the database - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductTemplate/).
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
     * @summary: Validate Product Template Schema
     * @description: Allows you to list all product templates validation values for all the fields present in the database - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductTemplateSchema/).
     */
    validateProductTemplateSchema({ itemType, requestHeaders }?: CatalogPlatformValidator.ValidateProductTemplateSchemaParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryValidationResponse>;
}
import CatalogPlatformValidator = require("./CatalogPlatformValidator");
import CatalogPlatformModel = require("./CatalogPlatformModel");
