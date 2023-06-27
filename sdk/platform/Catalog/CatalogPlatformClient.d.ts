export = Catalog;
declare class Catalog {
    constructor(config: any);
    config: any;
    /**
     * @param {CatalogPlatformValidator.addInventory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name addInventory
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    addInventory({ itemId, size, body }?: CatalogPlatformValidator.addInventory): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.allSizes} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetAllSizes>} - Success response
     * @name allSizes
     * @summary: All Sizes for a given Product
     * @description: This API allows to get  All Sizes for a given Product.
     */
    allSizes({ itemId }?: CatalogPlatformValidator.allSizes): Promise<CatalogPlatformModel.GetAllSizes>;
    /**
     * @param {CatalogPlatformValidator.bulkHsnCode} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.BulkHsnResponse>} - Success response
     * @name bulkHsnCode
     * @summary: Bulk Create or Update Hsn Code.
     * @description: Bulk Create or Update Hsn Code.
     */
    bulkHsnCode({ body }?: CatalogPlatformValidator.bulkHsnCode): Promise<CatalogPlatformModel.BulkHsnResponse>;
    /**
     * @param {CatalogPlatformValidator.createBulkInventory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createBulkInventory
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     */
    createBulkInventory({ batchId, body }?: CatalogPlatformValidator.createBulkInventory): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.createBulkInventoryJob} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
     * @name createBulkInventoryJob
     * @summary: Create a Bulk Inventory upload Job.
     * @description: This API helps to create a bulk Inventory upload job.
     */
    createBulkInventoryJob({ body }?: CatalogPlatformValidator.createBulkInventoryJob): Promise<CatalogPlatformModel.BulkResponse>;
    /**
     * @param {CatalogPlatformValidator.createBulkProductUploadJob} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
     * @name createBulkProductUploadJob
     * @summary: Create a Bulk product to upload job.
     * @description: This API helps to create a bulk products upload job.
     */
    createBulkProductUploadJob({ body }?: CatalogPlatformValidator.createBulkProductUploadJob): Promise<CatalogPlatformModel.BulkResponse>;
    /**
     * @param {CatalogPlatformValidator.createCategories} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.CategoryCreateResponse>} - Success response
     * @name createCategories
     * @summary: Create product categories
     * @description: This API lets user create product categories
     */
    createCategories({ body }?: CatalogPlatformValidator.createCategories): Promise<CatalogPlatformModel.CategoryCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.createDepartments} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.DepartmentCreateResponse>} -
     *   Success response
     * @name createDepartments
     * @summary: Create the department.
     * @description: Create departments using the API.
     */
    createDepartments({ body }?: CatalogPlatformValidator.createDepartments): Promise<CatalogPlatformModel.DepartmentCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.createInventoryExport} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryExportResponse>} - Success response
     * @name createInventoryExport
     * @summary: Create an inventory export job.
     * @description: This API helps to create a Inventory export job.
     */
    createInventoryExport({ body }?: CatalogPlatformValidator.createInventoryExport): Promise<CatalogPlatformModel.InventoryExportResponse>;
    /**
     * @param {CatalogPlatformValidator.createInventoryExportJob} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryExportResponse>} - Success response
     * @name createInventoryExportJob
     * @summary: Create a Inventory export Job.
     * @description: This API helps to create a Inventory export job.
     */
    createInventoryExportJob({ body }?: CatalogPlatformValidator.createInventoryExportJob): Promise<CatalogPlatformModel.InventoryExportResponse>;
    /**
     * @param {CatalogPlatformValidator.createMarketplaceOptin} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.UpdatedResponse>} - Success response
     * @name createMarketplaceOptin
     * @summary: Create/Update opt-in infomation.
     * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
     */
    createMarketplaceOptin({ marketplace, body }?: CatalogPlatformValidator.createMarketplaceOptin): Promise<CatalogPlatformModel.UpdatedResponse>;
    /**
     * @param {CatalogPlatformValidator.createProduct} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createProduct
     * @summary: Create a product.
     * @description: This API allows to create product.
     */
    createProduct({ body }?: CatalogPlatformValidator.createProduct): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.createProductAssetsInBulk} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createProductAssetsInBulk
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     */
    createProductAssetsInBulk({ body }?: CatalogPlatformValidator.createProductAssetsInBulk): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.createProductBundle} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetProductBundleCreateResponse>}
     *   - Success response
     *
     * @name createProductBundle
     * @summary: Create Product Bundle
     * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
     */
    createProductBundle({ body }?: CatalogPlatformValidator.createProductBundle): Promise<CatalogPlatformModel.GetProductBundleCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.createProductExportJob} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
     *   Success response
     * @name createProductExportJob
     * @summary: Create a product export job.
     * @description: This API helps to create a Inventory export job.
     */
    createProductExportJob({ body }?: CatalogPlatformValidator.createProductExportJob): Promise<CatalogPlatformModel.ProductDownloadsResponse>;
    /**
     * @param {CatalogPlatformValidator.createProductsInBulk} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createProductsInBulk
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     */
    createProductsInBulk({ batchId, body }?: CatalogPlatformValidator.createProductsInBulk): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.createSizeGuide} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name createSizeGuide
     * @summary: Create a size guide.
     * @description: This API allows to create a size guide associated to a brand.
     */
    createSizeGuide({ body }?: CatalogPlatformValidator.createSizeGuide): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.deleteBulkInventoryJob} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteBulkInventoryJob
     * @summary: Delete Bulk Inventory job.
     * @description: This API allows to delete bulk Inventory job associated with company.
     */
    deleteBulkInventoryJob({ batchId }?: CatalogPlatformValidator.deleteBulkInventoryJob): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.deleteInventory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteInventory
     * @summary: Delete a Inventory.
     * @description: This API allows to delete inventory of a particular product for particular company.
     */
    deleteInventory({ size, itemId, locationId }?: CatalogPlatformValidator.deleteInventory): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.deleteProduct} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteProduct
     * @summary: Delete a product.
     * @description: This API allows to delete product.
     */
    deleteProduct({ itemId }?: CatalogPlatformValidator.deleteProduct): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.deleteProductBulkJob} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name deleteProductBulkJob
     * @summary: Delete Bulk product job.
     * @description: This API allows to delete bulk product job associated with company.
     */
    deleteProductBulkJob({ batchId }?: CatalogPlatformValidator.deleteProductBulkJob): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.deleteRealtimeInventory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
     * @name deleteRealtimeInventory
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    deleteRealtimeInventory({ itemId, sellerIdentifier }?: CatalogPlatformValidator.deleteRealtimeInventory): Promise<CatalogPlatformModel.InventoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.deleteSize} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductSizeDeleteResponse>} -
     *   Success response
     * @name deleteSize
     * @summary: Delete a Size associated with product.
     * @description: This API allows to delete size associated with product.
     */
    deleteSize({ itemId, size }?: CatalogPlatformValidator.deleteSize): Promise<CatalogPlatformModel.ProductSizeDeleteResponse>;
    /**
     * @param {CatalogPlatformValidator.downloadInventoryTemplateView} arg - Arg object
     * @returns {Promise<string>} - Success response
     * @name downloadInventoryTemplateView
     * @summary: Download Product Template View
     * @description: Allows you to download product template data
     */
    downloadInventoryTemplateView({ itemType }?: CatalogPlatformValidator.downloadInventoryTemplateView): Promise<string>;
    /**
     * @param {CatalogPlatformValidator.downloadProductTemplateViews} arg - Arg object
     * @returns {Promise<string>} - Success response
     * @name downloadProductTemplateViews
     * @summary: Download Product Template View
     * @description: Allows you to download product template data
     */
    downloadProductTemplateViews({ slug }?: CatalogPlatformValidator.downloadProductTemplateViews): Promise<string>;
    /**
     * @param {CatalogPlatformValidator.editProduct} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name editProduct
     * @summary: Edit a product.
     * @description: This API allows to edit product.
     */
    editProduct({ itemId, body }?: CatalogPlatformValidator.editProduct): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.exportInventoryConfig} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryConfig>} - Success response
     * @name exportInventoryConfig
     * @summary: Get List of different filters for inventory export
     * @description: This API allows get List of different filters like brand, store, and type for inventory export.
     */
    exportInventoryConfig({ filterType }?: CatalogPlatformValidator.exportInventoryConfig): Promise<CatalogPlatformModel.InventoryConfig>;
    /**
     * @param {CatalogPlatformValidator.getAllProductHsnCodes} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.HsnCodesListingResponseSchemaV2>}
     *   - Success response
     *
     * @name getAllProductHsnCodes
     * @summary: Hsn Code List.
     * @description: Hsn Code List.
     */
    getAllProductHsnCodes({ pageNo, pageSize, q, type }?: CatalogPlatformValidator.getAllProductHsnCodes): Promise<CatalogPlatformModel.HsnCodesListingResponseSchemaV2>;
    /**
     * @param {CatalogPlatformValidator.getCategoryData} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SingleCategoryResponse>} - Success response
     * @name getCategoryData
     * @summary: Get product category by uid
     * @description: This API gets meta associated to product categories.
     */
    getCategoryData({ uid }?: CatalogPlatformValidator.getCategoryData): Promise<CatalogPlatformModel.SingleCategoryResponse>;
    /**
     * @param {CatalogPlatformValidator.getCompanyBrandDetail} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.OptinCompanyBrandDetailsView>} -
     *   Success response
     * @name getCompanyBrandDetail
     * @summary: Get the Company Brand details of Optin.
     * @description: Get the details of the Brands associated with the given company_id passed.
     */
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace, }?: CatalogPlatformValidator.getCompanyBrandDetail): Promise<CatalogPlatformModel.OptinCompanyBrandDetailsView>;
    /**
     * @param {CatalogPlatformValidator.getCompanyDetail} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.OptinCompanyDetail>} - Success response
     * @name getCompanyDetail
     * @summary: Get the Company details.
     * @description: Get the details of the company associated with the given company_id passed.
     */
    getCompanyDetail({}?: any): Promise<CatalogPlatformModel.OptinCompanyDetail>;
    /**
     * @param {CatalogPlatformValidator.getCompanyMetrics} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.OptinCompanyMetrics>} - Success response
     * @name getCompanyMetrics
     * @summary: Get the Company metrics
     * @description: Get the Company metrics associated with the company ID passed.
     */
    getCompanyMetrics({}?: any): Promise<CatalogPlatformModel.OptinCompanyMetrics>;
    /**
     * @param {CatalogPlatformValidator.getDepartmentData} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.DepartmentsResponse>} - Success response
     * @name getDepartmentData
     * @summary: Get specific departments details by passing in unique id of the department.
     * @description: Allows you to get department data, by uid.
     */
    getDepartmentData({ uid }?: CatalogPlatformValidator.getDepartmentData): Promise<CatalogPlatformModel.DepartmentsResponse>;
    /**
     * @param {CatalogPlatformValidator.getGenderAttribute} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GenderDetail>} - Success response
     * @name getGenderAttribute
     * @summary: Get gender attribute details
     * @description: This API allows to view the gender attribute details.
     */
    getGenderAttribute({ attributeSlug }?: CatalogPlatformValidator.getGenderAttribute): Promise<CatalogPlatformModel.GenderDetail>;
    /**
     * @param {CatalogPlatformValidator.getHsnCode} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.HsnCode>} - Success response
     * @name getHsnCode
     * @summary: Fetch Hsn Code.
     * @description: Fetch Hsn Code.
     */
    getHsnCode({ id }?: CatalogPlatformValidator.getHsnCode): Promise<CatalogPlatformModel.HsnCode>;
    /**
     * @param {CatalogPlatformValidator.getInventories} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetInventoriesResponse>} - Success response
     * @name getInventories
     * @summary: Get Inventory for company
     * @description: This API allows get Inventories data for particular company.
     */
    getInventories({ itemId, size, pageNo, pageSize, q, sellable, storeIds, sizeIdentifier, }?: CatalogPlatformValidator.getInventories): Promise<CatalogPlatformModel.GetInventoriesResponse>;
    /**
     * @param {CatalogPlatformValidator.getInventoryBulkUploadHistory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.BulkInventoryGet>} - Success response
     * @name getInventoryBulkUploadHistory
     * @summary: Get a list of all bulk Inventory upload jobs.
     * @description: This API helps to get bulk Inventory upload jobs data.
     */
    getInventoryBulkUploadHistory({ pageNo, pageSize }?: CatalogPlatformValidator.getInventoryBulkUploadHistory): Promise<CatalogPlatformModel.BulkInventoryGet>;
    /**
     * @param {CatalogPlatformValidator.getInventoryBySize} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryResponsePaginated>} -
     *   Success response
     * @name getInventoryBySize
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getInventoryBySize({ itemId, size, pageNo, pageSize, q, sellable, }?: CatalogPlatformValidator.getInventoryBySize): Promise<CatalogPlatformModel.InventoryResponsePaginated>;
    /**
     * @param {CatalogPlatformValidator.getInventoryBySizeIdentifier} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
     *   - Success response
     *
     * @name getInventoryBySizeIdentifier
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, }?: CatalogPlatformValidator.getInventoryBySizeIdentifier): Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>;
    /**
     * @param {CatalogPlatformValidator.getInventoryExport} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryExportJob>} - Success response
     * @name getInventoryExport
     * @summary: Get Inventory export history.
     * @description: This API helps to get Inventory export history.
     */
    getInventoryExport({}?: any): Promise<CatalogPlatformModel.InventoryExportJob>;
    /**
     * @param {CatalogPlatformValidator.getMarketplaceOptinDetail} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetOptInPlatform>} - Success response
     * @name getMarketplaceOptinDetail
     * @summary: Get opt-in infomation.
     * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
     */
    getMarketplaceOptinDetail({}?: any): Promise<CatalogPlatformModel.GetOptInPlatform>;
    /**
     * @param {CatalogPlatformValidator.getOptimalLocations} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.StoreAssignResponse>} - Success response
     * @name getOptimalLocations
     * @summary: Location Reassignment
     * @description:
     */
    getOptimalLocations({ body }?: CatalogPlatformValidator.getOptimalLocations): Promise<CatalogPlatformModel.StoreAssignResponse>;
    /**
     * @param {CatalogPlatformValidator.getProduct} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SingleProductResponse>} - Success response
     * @name getProduct
     * @summary: Get a single product.
     * @description: This API helps to get data associated to a particular product.
     */
    getProduct({ itemId, brandUid, itemCode }?: CatalogPlatformValidator.getProduct): Promise<CatalogPlatformModel.SingleProductResponse>;
    /**
     * @param {CatalogPlatformValidator.getProductAssetsInBulk} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.BulkAssetResponse>} - Success response
     * @name getProductAssetsInBulk
     * @summary: Get a list of all bulk asset jobs.
     * @description: This API helps to get bulk asset jobs data associated to a particular company.
     */
    getProductAssetsInBulk({ pageNo, pageSize }?: CatalogPlatformValidator.getProductAssetsInBulk): Promise<CatalogPlatformModel.BulkAssetResponse>;
    /**
     * @param {CatalogPlatformValidator.getProductAttributes} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductAttributesResponse>} -
     *   Success response
     * @name getProductAttributes
     * @summary: Get list of all the attributes by their l3_categories
     * @description: This API allows to list all the attributes by their l3_categories.
     */
    getProductAttributes({ category, filter }?: CatalogPlatformValidator.getProductAttributes): Promise<CatalogPlatformModel.ProductAttributesResponse>;
    /**
     * @param {CatalogPlatformValidator.getProductBulkUploadHistory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductBulkRequestList>} - Success response
     * @name getProductBulkUploadHistory
     * @summary: Get a list of all bulk product upload jobs.
     * @description: This API helps to get bulk product upload jobs data.
     */
    getProductBulkUploadHistory({ search, pageNo, pageSize }?: CatalogPlatformValidator.getProductBulkUploadHistory): Promise<CatalogPlatformModel.ProductBulkRequestList>;
    /**
     * @param {CatalogPlatformValidator.getProductBundle} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetProductBundleListingResponse>}
     *   - Success response
     *
     * @name getProductBundle
     * @summary: List all Product Bundles
     * @description: Get all product bundles for a particular company
     */
    getProductBundle({ q, slug }?: CatalogPlatformValidator.getProductBundle): Promise<CatalogPlatformModel.GetProductBundleListingResponse>;
    /**
     * @param {CatalogPlatformValidator.getProductBundleDetail} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetProductBundleResponse>} -
     *   Success response
     * @name getProductBundleDetail
     * @summary: Get a particular Product Bundle details
     * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
     */
    getProductBundleDetail({ id }?: CatalogPlatformValidator.getProductBundleDetail): Promise<CatalogPlatformModel.GetProductBundleResponse>;
    /**
     * @param {CatalogPlatformValidator.getProductExportJobs} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
     *   Success response
     * @name getProductExportJobs
     * @summary: Allows you to list all product templates export list details
     * @description: Can view details including trigger data, task id , etc.
     */
    getProductExportJobs({ status, fromDate, toDate, q }?: CatalogPlatformValidator.getProductExportJobs): Promise<CatalogPlatformModel.ProductDownloadsResponse>;
    /**
     * @param {CatalogPlatformValidator.getProductSize} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductListingResponse>} - Success response
     * @name getProductSize
     * @summary: Get a single product size.
     * @description: This API helps to get data associated to a particular product size.
     */
    getProductSize({ itemId, itemCode, brandUid, uid }?: CatalogPlatformValidator.getProductSize): Promise<CatalogPlatformModel.ProductListingResponse>;
    /**
     * @param {CatalogPlatformValidator.getProductTags} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductTagsViewResponse>} - Success response
     * @name getProductTags
     * @summary: Get a list of all tags associated with company.
     * @description: This API helps to get tags data associated to a particular company.
     */
    getProductTags({}?: any): Promise<CatalogPlatformModel.ProductTagsViewResponse>;
    /**
     * @param {CatalogPlatformValidator.getProductValidation} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ValidateProduct>} - Success response
     * @name getProductValidation
     * @summary: Validate product/size data
     * @description: This API validates product data.
     */
    getProductValidation({}?: any): Promise<CatalogPlatformModel.ValidateProduct>;
    /**
     * @param {CatalogPlatformValidator.getProducts} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductListingResponseV2>} -
     *   Success response
     * @name getProducts
     * @summary: Get product list
     * @description: This API gets meta associated to products.
     */
    getProducts({ brandIds, categoryIds, itemIds, departmentIds, itemCode, q, tags, pageNo, pageSize, }?: CatalogPlatformValidator.getProducts): Promise<CatalogPlatformModel.ProductListingResponseV2>;
    /**
     * @param {CatalogPlatformValidator.getSellerInsights} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.CrossSellingResponse>} - Success response
     * @name getSellerInsights
     * @summary: Analytics data of catalog and inventory that are being cross-selled.
     * @description: Analytics data of catalog and inventory that are being cross-selled.
     */
    getSellerInsights({ sellerAppId }?: CatalogPlatformValidator.getSellerInsights): Promise<CatalogPlatformModel.CrossSellingResponse>;
    /**
     * @param {CatalogPlatformValidator.getSingleProductHSNCode} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.HSNDataInsertV2>} - Success response
     * @name getSingleProductHSNCode
     * @summary: Hsn Code List.
     * @description: Hsn Code List.
     */
    getSingleProductHSNCode({ reportingHsn }?: CatalogPlatformValidator.getSingleProductHSNCode): Promise<CatalogPlatformModel.HSNDataInsertV2>;
    /**
     * @param {CatalogPlatformValidator.getSizeGuide} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SizeGuideResponse>} - Success response
     * @name getSizeGuide
     * @summary: Get a single size guide.
     * @description: This API helps to get data associated to a size guide.
     */
    getSizeGuide({ id }?: CatalogPlatformValidator.getSizeGuide): Promise<CatalogPlatformModel.SizeGuideResponse>;
    /**
     * @param {CatalogPlatformValidator.getSizeGuides} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ListSizeGuide>} - Success response
     * @name getSizeGuides
     * @summary: Get list of size guides
     * @description: This API allows to view all the size guides associated to the seller.
     */
    getSizeGuides({ active, q, tag, pageNo, pageSize }?: CatalogPlatformValidator.getSizeGuides): Promise<CatalogPlatformModel.ListSizeGuide>;
    /**
     * @param {CatalogPlatformValidator.getStoreDetail} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.OptinStoreDetails>} - Success response
     * @name getStoreDetail
     * @summary: Get the Store details.
     * @description: Get the details of the store associated with the company ID passed.
     */
    getStoreDetail({ q, pageNo, pageSize }?: CatalogPlatformValidator.getStoreDetail): Promise<CatalogPlatformModel.OptinStoreDetails>;
    /**
     * @param {CatalogPlatformValidator.getVariantsOfProducts} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductVariantsResponse>} - Success response
     * @name getVariantsOfProducts
     * @summary: Get product list
     * @description: This API gets meta associated to products.
     */
    getVariantsOfProducts({ itemId, variantType, pageNo, pageSize }?: CatalogPlatformValidator.getVariantsOfProducts): Promise<CatalogPlatformModel.ProductVariantsResponse>;
    /**
     * @param {CatalogPlatformValidator.listCategories} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.CategoryResponse>} - Success response
     * @name listCategories
     * @summary: Get product categories list
     * @description: This API gets meta associated to product categories.
     */
    listCategories({ level, departments, q, pageNo, pageSize }?: CatalogPlatformValidator.listCategories): Promise<CatalogPlatformModel.CategoryResponse>;
    /**
     * @param {CatalogPlatformValidator.listDepartmentsData} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.DepartmentsResponse>} - Success response
     * @name listDepartmentsData
     * @summary: List all Departments.
     * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type.
     */
    listDepartmentsData({ pageNo, itemType, pageSize, name, search, isActive, }?: CatalogPlatformValidator.listDepartmentsData): Promise<CatalogPlatformModel.DepartmentsResponse>;
    /**
     * @param {CatalogPlatformValidator.listHSNCodes} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.HSNCodesResponse>} - Success response
     * @name listHSNCodes
     * @summary: List HSN Codes
     * @description: Allows you to list all hsn Codes
     */
    listHSNCodes({}?: any): Promise<CatalogPlatformModel.HSNCodesResponse>;
    /**
     * @param {CatalogPlatformValidator.listInventoryExport} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryExportJobListResponse>}
     *   - Success response
     *
     * @name listInventoryExport
     * @summary: Get the history of the inventory export.
     * @description: This API helps you the get the history of inventory jobs depending on the filtered criteria.
     */
    listInventoryExport({ status, fromDate, toDate, q }?: CatalogPlatformValidator.listInventoryExport): Promise<CatalogPlatformModel.InventoryExportJobListResponse>;
    /**
     * @param {CatalogPlatformValidator.listProductTemplate} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.TemplatesResponse>} - Success response
     * @name listProductTemplate
     * @summary: List all Templates
     * @description: Allows you to list all product templates, also can filter by department
     */
    listProductTemplate({ department }?: CatalogPlatformValidator.listProductTemplate): Promise<CatalogPlatformModel.TemplatesResponse>;
    /**
     * @param {CatalogPlatformValidator.listProductTemplateCategories} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProdcutTemplateCategoriesResponse>}
     *   - Success response
     *
     * @name listProductTemplateCategories
     * @summary: List Department specifiec product categories
     * @description: Allows you to list all product categories values for the departments specified
     */
    listProductTemplateCategories({ departments, itemType }?: CatalogPlatformValidator.listProductTemplateCategories): Promise<CatalogPlatformModel.ProdcutTemplateCategoriesResponse>;
    /**
     * @param {CatalogPlatformValidator.listProductTemplateExportDetails} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
     *   Success response
     * @name listProductTemplateExportDetails
     * @summary: Allows you to list all product templates export list details
     * @description: Can view details including trigger data, task id , etc.
     */
    listProductTemplateExportDetails({}?: any): Promise<CatalogPlatformModel.ProductDownloadsResponse>;
    /**
     * @param {CatalogPlatformValidator.listTemplateBrandTypeValues} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.ProductConfigurationDownloads>} -
     *   Success response
     * @name listTemplateBrandTypeValues
     * @summary: Allows you to list all values for Templates, Brands or Type
     * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
     */
    listTemplateBrandTypeValues({ filter, templateTag, itemType }?: CatalogPlatformValidator.listTemplateBrandTypeValues): Promise<CatalogPlatformModel.ProductConfigurationDownloads>;
    /**
     * @param {CatalogPlatformValidator.updateCategory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.CategoryUpdateResponse>} - Success response
     * @name updateCategory
     * @summary: Update product categories
     * @description: Update a product category using this api
     */
    updateCategory({ uid, body }?: CatalogPlatformValidator.updateCategory): Promise<CatalogPlatformModel.CategoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.updateDepartment} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.DepartmentModel>} - Success response
     * @name updateDepartment
     * @summary: Update the department by their uid.
     * @description: Update the department by their uid using this API.
     */
    updateDepartment({ uid, body }?: CatalogPlatformValidator.updateDepartment): Promise<CatalogPlatformModel.DepartmentModel>;
    /**
     * @param {CatalogPlatformValidator.updateHsnCode} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.HsnCode>} - Success response
     * @name updateHsnCode
     * @summary: Update Hsn Code.
     * @description: Update Hsn Code.
     */
    updateHsnCode({ id, body }?: CatalogPlatformValidator.updateHsnCode): Promise<CatalogPlatformModel.HsnCode>;
    /**
     * @param {CatalogPlatformValidator.updateInventories} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
     * @name updateInventories
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    updateInventories({ body }?: CatalogPlatformValidator.updateInventories): Promise<CatalogPlatformModel.InventoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.updateProductBundle} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.GetProductBundleCreateResponse>}
     *   - Success response
     *
     * @name updateProductBundle
     * @summary: Update a Product Bundle
     * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
     */
    updateProductBundle({ id, body }?: CatalogPlatformValidator.updateProductBundle): Promise<CatalogPlatformModel.GetProductBundleCreateResponse>;
    /**
     * @param {CatalogPlatformValidator.updateRealtimeInventory} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
     * @name updateRealtimeInventory
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    updateRealtimeInventory({ itemId, sellerIdentifier, body }?: CatalogPlatformValidator.updateRealtimeInventory): Promise<CatalogPlatformModel.InventoryUpdateResponse>;
    /**
     * @param {CatalogPlatformValidator.updateSizeGuide} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
     * @name updateSizeGuide
     * @summary: Edit a size guide.
     * @description: This API allows to edit a size guide.
     */
    updateSizeGuide({ id, body }?: CatalogPlatformValidator.updateSizeGuide): Promise<CatalogPlatformModel.SuccessResponse>;
    /**
     * @param {CatalogPlatformValidator.uploadBulkProducts} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
     * @name uploadBulkProducts
     * @summary: Create a Bulk product to upload job.
     * @description: This API helps to create a bulk products upload job.
     */
    uploadBulkProducts({ department, productType, body }?: CatalogPlatformValidator.uploadBulkProducts): Promise<CatalogPlatformModel.BulkResponse>;
    /**
     * @param {CatalogPlatformValidator.validateProductTemplate} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.TemplatesValidationResponse>} -
     *   Success response
     * @name validateProductTemplate
     * @summary: Validate Product Template Schema
     * @description: Allows you to list all product templates validation values for all the fields present in the database
     */
    validateProductTemplate({ slug }?: CatalogPlatformValidator.validateProductTemplate): Promise<CatalogPlatformModel.TemplatesValidationResponse>;
    /**
     * @param {CatalogPlatformValidator.validateProductTemplateSchema} arg - Arg object
     * @returns {Promise<CatalogPlatformModel.InventoryValidationResponse>} -
     *   Success response
     * @name validateProductTemplateSchema
     * @summary: Validate Product Template Schema
     * @description: Allows you to list all product templates validation values for all the fields present in the database
     */
    validateProductTemplateSchema({ itemType }?: CatalogPlatformValidator.validateProductTemplateSchema): Promise<CatalogPlatformModel.InventoryValidationResponse>;
}
import CatalogPlatformValidator = require("./CatalogPlatformValidator");
import CatalogPlatformModel = require("./CatalogPlatformModel");
