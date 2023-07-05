export = Catalog;
declare class Catalog {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.size - Size in which inventory is to be added.
     * @param {InventoryRequest} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    addInventory({ itemId, size, body }?: {
        itemId: number;
        size: string;
        body: InventoryRequest;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @returns {Promise<GetAllSizes>} - Success response
     * @summary: All Sizes for a given Product
     * @description: This API allows to get  All Sizes for a given Product.
     */
    allSizes({ itemId }?: {
        itemId: number;
    }): Promise<GetAllSizes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkHsnUpsert} arg.body
     * @returns {Promise<BulkHsnResponse>} - Success response
     * @summary: Bulk Create or Update Hsn Code.
     * @description: Bulk Create or Update Hsn Code.
     */
    bulkHsnCode({ body }?: {
        body: BulkHsnUpsert;
    }): Promise<BulkHsnResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId - Batch Id of the bulk create job.
     * @param {InventoryBulkRequest} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     */
    createBulkInventory({ batchId, body }?: {
        batchId: string;
        body: InventoryBulkRequest;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkJob} arg.body
     * @returns {Promise<BulkResponse>} - Success response
     * @summary: Create a Bulk Inventory upload Job.
     * @description: This API helps to create a bulk Inventory upload job.
     */
    createBulkInventoryJob({ body }?: {
        body: BulkJob;
    }): Promise<BulkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkJob} arg.body
     * @returns {Promise<BulkResponse>} - Success response
     * @summary: Create a Bulk product to upload job.
     * @description: This API helps to create a bulk products upload job.
     */
    createBulkProductUploadJob({ body }?: {
        body: BulkJob;
    }): Promise<BulkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CategoryRequestBody} arg.body
     * @returns {Promise<CategoryCreateResponse>} - Success response
     * @summary: Create product categories
     * @description: This API lets user create product categories
     */
    createCategories({ body }?: {
        body: CategoryRequestBody;
    }): Promise<CategoryCreateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DepartmentCreateUpdate} arg.body
     * @returns {Promise<DepartmentCreateResponse>} - Success response
     * @summary: Create the department.
     * @description: Create departments using the API.
     */
    createDepartments({ body }?: {
        body: DepartmentCreateUpdate;
    }): Promise<DepartmentCreateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InventoryCreateRequest} arg.body
     * @returns {Promise<InventoryExportResponse>} - Success response
     * @summary: Create an inventory export job.
     * @description: This API helps to create a Inventory export job.
     */
    createInventoryExport({ body }?: {
        body: InventoryCreateRequest;
    }): Promise<InventoryExportResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InventoryExportRequest} arg.body
     * @returns {Promise<InventoryExportResponse>} - Success response
     * @summary: Create a Inventory export Job.
     * @description: This API helps to create a Inventory export job.
     */
    createInventoryExportJob({ body }?: {
        body: InventoryExportRequest;
    }): Promise<InventoryExportResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.marketplace - The marketplace for which the detail
     *   needs to be retrieved.
     * @param {OptInPostRequest} arg.body
     * @returns {Promise<UpdatedResponse>} - Success response
     * @summary: Create/Update opt-in infomation.
     * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
     */
    createMarketplaceOptin({ marketplace, body }?: {
        marketplace: string;
        body: OptInPostRequest;
    }): Promise<UpdatedResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ProductCreateUpdateSchemaV2} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Create a product.
     * @description: This API allows to create product.
     */
    createProduct({ body }?: {
        body: ProductCreateUpdateSchemaV2;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ProductBulkAssets} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     */
    createProductAssetsInBulk({ body }?: {
        body: ProductBulkAssets;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ProductBundleRequest} arg.body
     * @returns {Promise<GetProductBundleCreateResponse>} - Success response
     * @summary: Create Product Bundle
     * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
     */
    createProductBundle({ body }?: {
        body: ProductBundleRequest;
    }): Promise<GetProductBundleCreateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ProductTemplateDownloadsExport} arg.body
     * @returns {Promise<ProductDownloadsResponse>} - Success response
     * @summary: Create a product export job.
     * @description: This API helps to create a Inventory export job.
     */
    createProductExportJob({ body }?: {
        body: ProductTemplateDownloadsExport;
    }): Promise<ProductDownloadsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
     * @param {BulkProductRequest} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     */
    createProductsInBulk({ batchId, body }?: {
        batchId: string;
        body: BulkProductRequest;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ValidateSizeGuide} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Create a size guide.
     * @description: This API allows to create a size guide associated to a brand.
     */
    createSizeGuide({ body }?: {
        body: ValidateSizeGuide;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId - Batch Id of the bulk delete job.
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Delete Bulk Inventory job.
     * @description: This API allows to delete bulk Inventory job associated with company.
     */
    deleteBulkInventoryJob({ batchId }?: {
        batchId: string;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.size - Size that is to be deleted.
     * @param {number} arg.itemId - Id of the product associated with Inventory
     *   to be deleted.
     * @param {number} arg.locationId - Location ID of store of which inventory
     *   is to be deleted.
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Delete a Inventory.
     * @description: This API allows to delete inventory of a particular product for particular company.
     */
    deleteInventory({ size, itemId, locationId }?: {
        size: string;
        itemId: number;
        locationId: number;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Delete a product.
     * @description: This API allows to delete product.
     */
    deleteProduct({ itemId }?: {
        itemId: number;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Delete Bulk product job.
     * @description: This API allows to delete bulk product job associated with company.
     */
    deleteProductBulkJob({ batchId }?: {
        batchId: number;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sellerIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {InventoryRequestSchemaV2} arg.body
     * @returns {Promise<InventoryUpdateResponse>} - Success response
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    deleteRealtimeInventory({ itemId, sellerIdentifier, body }?: {
        itemId: number;
        sellerIdentifier: string;
        body: InventoryRequestSchemaV2;
    }): Promise<InventoryUpdateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item Id of the product associated with size
     *   to be deleted.
     * @param {string} arg.size - Size to be deleted.
     * @returns {Promise<ProductSizeDeleteResponse>} - Success response
     * @summary: Delete a Size associated with product.
     * @description: This API allows to delete size associated with product.
     */
    deleteSize({ itemId, size }?: {
        itemId: number;
        size: string;
    }): Promise<ProductSizeDeleteResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemType - An `item_type` defines the type of item.
     * @returns {Promise<string>} - Success response
     * @summary: Download Product Template View
     * @description: Allows you to download product template data
     */
    downloadInventoryTemplateView({ itemType }?: {
        itemType: string;
    }): Promise<string>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A `slug` is a unique identifier for a
     *   particular template.
     * @returns {Promise<string>} - Success response
     * @summary: Download Product Template View
     * @description: Allows you to download product template data
     */
    downloadProductTemplateViews({ slug }?: {
        slug: string;
    }): Promise<string>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @param {ProductCreateUpdateSchemaV2} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Edit a product.
     * @description: This API allows to edit product.
     */
    editProduct({ itemId, body }?: {
        itemId: number;
        body: ProductCreateUpdateSchemaV2;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.filterType] - Filter type from any one of ['brand',
     *   'store', 'type']
     * @returns {Promise<InventoryConfig>} - Success response
     * @summary: Get List of different filters for inventory export
     * @description: This API allows get List of different filters like brand, store, and type for inventory export.
     */
    exportInventoryConfig({ filterType }?: {
        filterType?: string;
    }): Promise<InventoryConfig>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page no
     * @param {number} [arg.pageSize] - Page size
     * @param {string} [arg.q] - Search using hsn code, description, reporting_hsn
     * @param {string} [arg.type] - Search using type
     * @returns {Promise<HsnCodesListingResponseSchemaV2>} - Success response
     * @summary: Hsn Code List.
     * @description: Hsn Code List.
     */
    getAllProductHsnCodes({ pageNo, pageSize, q, type }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        type?: string;
    }): Promise<HsnCodesListingResponseSchemaV2>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - Category unique id
     * @returns {Promise<SingleCategoryResponse>} - Success response
     * @summary: Get product category by uid
     * @description: This API gets meta associated to product categories.
     */
    getCategoryData({ uid }?: {
        uid: string;
    }): Promise<SingleCategoryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.isActive] - The is_active status for the optin id.
     * @param {string} [arg.q] - The search value to filter the list.
     * @param {number} [arg.pageNo] - The number of page for the company id.
     * @param {number} [arg.pageSize] - Number of records that can be seen on
     *   the page for the company id.
     * @param {string} [arg.marketplace] - The marketplace platform associated
     *   with the company id.
     * @returns {Promise<OptinCompanyBrandDetailsView>} - Success response
     * @summary: Get the Company Brand details of Optin.
     * @description: Get the details of the Brands associated with the given company_id passed.
     */
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace, }?: {
        isActive?: boolean;
        q?: string;
        pageNo?: number;
        pageSize?: number;
        marketplace?: string;
    }): Promise<OptinCompanyBrandDetailsView>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<OptinCompanyDetail>} - Success response
     * @summary: Get the Company details.
     * @description: Get the details of the company associated with the given company_id passed.
     */
    getCompanyDetail({}?: any): Promise<OptinCompanyDetail>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<OptinCompanyMetrics>} - Success response
     * @summary: Get the Company metrics
     * @description: Get the Company metrics associated with the company ID passed.
     */
    getCompanyMetrics({}?: any): Promise<OptinCompanyMetrics>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - A `uid` is a unique identifier of a department.
     * @returns {Promise<DepartmentsResponse>} - Success response
     * @summary: Get specific departments details by passing in unique id of the department.
     * @description: Allows you to get department data, by uid.
     */
    getDepartmentData({ uid }?: {
        uid: string;
    }): Promise<DepartmentsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.attributeSlug - Slug of the attribute for which you
     *   want to view the genders
     * @returns {Promise<GenderDetail>} - Success response
     * @summary: Get gender attribute details
     * @description: This API allows to view the gender attribute details.
     */
    getGenderAttribute({ attributeSlug }?: {
        attributeSlug: string;
    }): Promise<GenderDetail>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Unique id
     * @returns {Promise<HsnCode>} - Success response
     * @summary: Fetch Hsn Code.
     * @description: Fetch Hsn Code.
     */
    getHsnCode({ id }?: {
        id: string;
    }): Promise<HsnCode>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.itemId] - Item code of the product of which size is to be get.
     * @param {string} [arg.size] - Size of which inventory is to get.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {boolean} [arg.sellable] - Filter on whether product is in stock or not.
     * @param {number[]} [arg.storeIds] - The Store Id of products to fetch inventory.
     * @param {string} [arg.sizeIdentifier] - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @returns {Promise<GetInventoriesResponse>} - Success response
     * @summary: Get Inventory for company
     * @description: This API allows get Inventories data for particular company.
     */
    getInventories({ itemId, size, pageNo, pageSize, q, sellable, storeIds, sizeIdentifier, }?: {
        itemId?: string;
        size?: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        sellable?: boolean;
        storeIds?: number[];
        sizeIdentifier?: string;
    }): Promise<GetInventoriesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @returns {Promise<BulkInventoryGet>} - Success response
     * @summary: Get a list of all bulk Inventory upload jobs.
     * @description: This API helps to get bulk Inventory upload jobs data.
     */
    getInventoryBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<BulkInventoryGet>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.size - Size of which inventory is to get.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {boolean} [arg.sellable] - Filter on whether product is in stock or not.
     * @returns {Promise<InventoryResponsePaginated>} - Success response
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getInventoryBySize({ itemId, size, pageNo, pageSize, q, sellable, }?: {
        itemId: number;
        size: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        sellable?: boolean;
    }): Promise<InventoryResponsePaginated>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {number[]} [arg.locationIds] - Search by store ids.
     * @returns {Promise<InventorySellerIdentifierResponsePaginated>} - Success response
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, }?: {
        itemId: number;
        sizeIdentifier: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        locationIds?: number[];
    }): Promise<InventorySellerIdentifierResponsePaginated>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<InventoryExportJob>} - Success response
     * @summary: Get Inventory export history.
     * @description: This API helps to get Inventory export history.
     */
    getInventoryExport({}?: any): Promise<InventoryExportJob>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<GetOptInPlatform>} - Success response
     * @summary: Get opt-in infomation.
     * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
     */
    getMarketplaceOptinDetail({}?: any): Promise<GetOptInPlatform>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AssignStore} arg.body
     * @returns {Promise<StoreAssignResponse>} - Success response
     * @summary: Location Reassignment
     * @description:
     */
    getOptimalLocations({ body }?: {
        body: AssignStore;
    }): Promise<StoreAssignResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item Id of the product.
     * @param {number} [arg.brandUid] - Brand Id of the product.
     * @param {string} [arg.itemCode] - Item code of the product.
     * @returns {Promise<SingleProductResponse>} - Success response
     * @summary: Get a single product.
     * @description: This API helps to get data associated to a particular product.
     */
    getProduct({ itemId, brandUid, itemCode }?: {
        itemId: number;
        brandUid?: number;
        itemCode?: string;
    }): Promise<SingleProductResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @returns {Promise<BulkAssetResponse>} - Success response
     * @summary: Get a list of all bulk asset jobs.
     * @description: This API helps to get bulk asset jobs data associated to a particular company.
     */
    getProductAssetsInBulk({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<BulkAssetResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.category - It is the name of the l3 cateogry
     * @param {boolean} [arg.filter] - If true, returns filtered values, else
     *   returns all the attributes
     * @returns {Promise<ProductAttributesResponse>} - Success response
     * @summary: Get list of all the attributes by their l3_categories
     * @description: This API allows to list all the attributes by their l3_categories.
     */
    getProductAttributes({ category, filter }?: {
        category: string;
        filter?: boolean;
    }): Promise<ProductAttributesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.search] - Search string to filter the results by batch id
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @returns {Promise<ProductBulkRequestList>} - Success response
     * @summary: Get a list of all bulk product upload jobs.
     * @description: This API helps to get bulk product upload jobs data.
     */
    getProductBulkUploadHistory({ search, pageNo, pageSize }?: {
        search?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<ProductBulkRequestList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - A search string that is searched with product
     *   bundle name.
     * @param {string[]} [arg.slug] - Slugs of bundles to be retrieved.
     * @returns {Promise<GetProductBundleListingResponse>} - Success response
     * @summary: List all Product Bundles
     * @description: Get all product bundles for a particular company
     */
    getProductBundle({ q, slug }?: {
        q?: string;
        slug?: string[];
    }): Promise<GetProductBundleListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @returns {Promise<GetProductBundleResponse>} - Success response
     * @summary: Get a particular Product Bundle details
     * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
     */
    getProductBundleDetail({ id }?: {
        id: string;
    }): Promise<GetProductBundleResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.status] - This is a parameter used to find all the
     *   jobs with the specified status.
     * @param {string} [arg.fromDate] - This is a parameter used to find the job
     *   from the date specified to the current date.
     * @param {string} [arg.toDate] - This is a parameter used to find the job
     *   from the from_date specified to the to_date.
     * @param {string} [arg.q] - It is a query parameter to search the export
     *   job with the task ID.
     * @returns {Promise<ProductDownloadsResponse>} - Success response
     * @summary: Allows you to list all product templates export list details
     * @description: Can view details including trigger data, task id , etc.
     */
    getProductExportJobs({ status, fromDate, toDate, q }?: {
        status?: string;
        fromDate?: string;
        toDate?: string;
        q?: string;
    }): Promise<ProductDownloadsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.itemCode] - Item code of the product size.
     * @param {number} arg.itemId - Item Id of the product size.
     * @param {number} [arg.brandUid] - Brand Id of the product size.
     * @param {number} [arg.uid] - Id of the product size.
     * @returns {Promise<ProductListingResponse>} - Success response
     * @summary: Get a single product size.
     * @description: This API helps to get data associated to a particular product size.
     */
    getProductSize({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): Promise<ProductListingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ProductTagsViewResponse>} - Success response
     * @summary: Get a list of all tags associated with company.
     * @description: This API helps to get tags data associated to a particular company.
     */
    getProductTags({}?: any): Promise<ProductTagsViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ValidateProduct>} - Success response
     * @summary: Validate product/size data
     * @description: This API validates product data.
     */
    getProductValidation({}?: any): Promise<ValidateProduct>;
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
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @returns {Promise<ProductListingResponseV2>} - Success response
     * @summary: Get product list
     * @description: This API gets meta associated to products.
     */
    getProducts({ brandIds, categoryIds, itemIds, departmentIds, itemCode, q, tags, pageNo, pageSize, }?: {
        brandIds?: number[];
        categoryIds?: number[];
        itemIds?: number[];
        departmentIds?: number[];
        itemCode?: string[];
        q?: string;
        tags?: string[];
        pageNo?: number;
        pageSize?: number;
    }): Promise<ProductListingResponseV2>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.sellerAppId - Id of the seller application which is
     *   serving the invetory/catalog of the company
     * @returns {Promise<CrossSellingResponse>} - Success response
     * @summary: Analytics data of catalog and inventory that are being cross-selled.
     * @description: Analytics data of catalog and inventory that are being cross-selled.
     */
    getSellerInsights({ sellerAppId }?: {
        sellerAppId: string;
    }): Promise<CrossSellingResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.reportingHsn - Reporting_hsn
     * @returns {Promise<HSNDataInsertV2>} - Success response
     * @summary: Hsn Code List.
     * @description: Hsn Code List.
     */
    getSingleProductHSNCode({ reportingHsn }?: {
        reportingHsn: string;
    }): Promise<HSNDataInsertV2>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id of the size guide to be viewed.
     * @returns {Promise<SizeGuideResponse>} - Success response
     * @summary: Get a single size guide.
     * @description: This API helps to get data associated to a size guide.
     */
    getSizeGuide({ id }?: {
        id: string;
    }): Promise<SizeGuideResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.active] - Filter size guide on basis of active, in-active
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.tag] - To filter size guide on basis of tag.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @returns {Promise<ListSizeGuide>} - Success response
     * @summary: Get list of size guides
     * @description: This API allows to view all the size guides associated to the seller.
     */
    getSizeGuides({ active, q, tag, pageNo, pageSize }?: {
        active?: boolean;
        q?: string;
        tag?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<ListSizeGuide>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search related the store for the company id.
     * @param {number} [arg.pageNo] - The number of page for the company id.
     * @param {number} [arg.pageSize] - Number of records that can be seen on
     *   the page for the company id.
     * @returns {Promise<OptinStoreDetails>} - Success response
     * @summary: Get the Store details.
     * @description: Get the details of the store associated with the company ID passed.
     */
    getStoreDetail({ q, pageNo, pageSize }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<OptinStoreDetails>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Get list of variants of item Id
     * @param {string} arg.variantType - Get multiple products filtered by variant type
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @returns {Promise<ProductVariantsResponse>} - Success response
     * @summary: Get product list
     * @description: This API gets meta associated to products.
     */
    getVariantsOfProducts({ itemId, variantType, pageNo, pageSize }?: {
        itemId: number;
        variantType: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<ProductVariantsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.level] - Get category for multiple levels
     * @param {string} [arg.departments] - Get category for multiple departments filtered
     * @param {string} [arg.q] - Get multiple categories filtered by search string
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @returns {Promise<CategoryResponse>} - Success response
     * @summary: Get product categories list
     * @description: This API gets meta associated to product categories.
     */
    listCategories({ level, departments, q, pageNo, pageSize }?: {
        level?: string;
        departments?: string;
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<CategoryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {string} [arg.itemType] - A `item_type` is a type of product eg.
     *   set, standard, digital
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.name] - Can search departments by passing name.
     * @param {string} [arg.search] - Can search departments by passing name of
     *   the department in search parameter.
     * @param {boolean} [arg.isActive] - Can query for departments based on
     *   whether they are active or inactive.
     * @returns {Promise<DepartmentsResponse>} - Success response
     * @summary: List all Departments.
     * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type.
     */
    listDepartmentsData({ pageNo, itemType, pageSize, name, search, isActive, }?: {
        pageNo?: number;
        itemType?: string;
        pageSize?: number;
        name?: string;
        search?: string;
        isActive?: boolean;
    }): Promise<DepartmentsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<HSNCodesResponse>} - Success response
     * @summary: List HSN Codes
     * @description: Allows you to list all hsn Codes
     */
    listHSNCodes({}?: any): Promise<HSNCodesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.status] - Status of the export job.
     * @param {string} [arg.fromDate] - Inventory export history filtered
     *   according to from_date.
     * @param {string} [arg.toDate] - Inventory export history filtered
     *   according to from_date.
     * @param {string} [arg.q] - Inventory export history filtered according to task ID.
     * @returns {Promise<InventoryExportJobListResponse>} - Success response
     * @summary: Get the history of the inventory export.
     * @description: This API helps you the get the history of inventory jobs depending on the filtered criteria.
     */
    listInventoryExport({ status, fromDate, toDate, q }?: {
        status?: string;
        fromDate?: string;
        toDate?: string;
        q?: string;
    }): Promise<InventoryExportJobListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.department - A `department` is the name of a
     *   particular department.
     * @returns {Promise<TemplatesResponse>} - Success response
     * @summary: List all Templates
     * @description: Allows you to list all product templates, also can filter by department
     */
    listProductTemplate({ department }?: {
        department: string;
    }): Promise<TemplatesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.departments - A `department` is name of a departments
     *   whose category needs to be listed. Can specify multiple departments.
     * @param {string} arg.itemType - An `item_type` is the type of item, it can
     *   be `set`, `standard`, `digital`, etc.
     * @returns {Promise<ProdcutTemplateCategoriesResponse>} - Success response
     * @summary: List Department specifiec product categories
     * @description: Allows you to list all product categories values for the departments specified
     */
    listProductTemplateCategories({ departments, itemType }?: {
        departments: string;
        itemType: string;
    }): Promise<ProdcutTemplateCategoriesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ProductDownloadsResponse>} - Success response
     * @summary: Allows you to list all product templates export list details
     * @description: Can view details including trigger data, task id , etc.
     */
    listProductTemplateExportDetails({}?: any): Promise<ProductDownloadsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.filter - A `filter` is the unique identifier of the
     *   type of value required.
     * @param {string} [arg.templateTag] - A `template_tag` is the identifier of
     *   the type of template required.
     * @param {string} [arg.itemType] - A `item_type` is the identifier of the
     *   type of template required.
     * @returns {Promise<ProductConfigurationDownloads>} - Success response
     * @summary: Allows you to list all values for Templates, Brands or Type
     * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
     */
    listTemplateBrandTypeValues({ filter, templateTag, itemType }?: {
        filter: string;
        templateTag?: string;
        itemType?: string;
    }): Promise<ProductConfigurationDownloads>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - Category unique id
     * @param {CategoryRequestBody} arg.body
     * @returns {Promise<CategoryUpdateResponse>} - Success response
     * @summary: Update product categories
     * @description: Update a product category using this api
     */
    updateCategory({ uid, body }?: {
        uid: string;
        body: CategoryRequestBody;
    }): Promise<CategoryUpdateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - A `uid` is a unique identifier of a department.
     * @param {DepartmentCreateUpdate} arg.body
     * @returns {Promise<DepartmentModel>} - Success response
     * @summary: Update the department by their uid.
     * @description: Update the department by their uid using this API.
     */
    updateDepartment({ uid, body }?: {
        uid: string;
        body: DepartmentCreateUpdate;
    }): Promise<DepartmentModel>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Unique id
     * @param {HsnUpsert} arg.body
     * @returns {Promise<HsnCode>} - Success response
     * @summary: Update Hsn Code.
     * @description: Update Hsn Code.
     */
    updateHsnCode({ id, body }?: {
        id: string;
        body: HsnUpsert;
    }): Promise<HsnCode>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InventoryRequestSchemaV2} arg.body
     * @returns {Promise<InventoryUpdateResponse>} - Success response
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    updateInventories({ body }?: {
        body: InventoryRequestSchemaV2;
    }): Promise<InventoryUpdateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {ProductBundleUpdateRequest} arg.body
     * @returns {Promise<GetProductBundleCreateResponse>} - Success response
     * @summary: Update a Product Bundle
     * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
     */
    updateProductBundle({ id, body }?: {
        id: string;
        body: ProductBundleUpdateRequest;
    }): Promise<GetProductBundleCreateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sellerIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {InventoryRequestSchemaV2} arg.body
     * @returns {Promise<InventoryUpdateResponse>} - Success response
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    updateRealtimeInventory({ itemId, sellerIdentifier, body }?: {
        itemId: number;
        sellerIdentifier: string;
        body: InventoryRequestSchemaV2;
    }): Promise<InventoryUpdateResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Mongo id of the size guide to be edited
     * @param {ValidateSizeGuide} arg.body
     * @returns {Promise<SuccessResponse>} - Success response
     * @summary: Edit a size guide.
     * @description: This API allows to edit a size guide.
     */
    updateSizeGuide({ id, body }?: {
        id: string;
        body: ValidateSizeGuide;
    }): Promise<SuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.department - Department of the product to be uploaded.
     * @param {string} arg.productType - Product type of the product to be
     *   uploaded i.e. set, standard , digital.
     * @param {BulkJob} arg.body
     * @returns {Promise<BulkResponse>} - Success response
     * @summary: Create a Bulk product to upload job.
     * @description: This API helps to create a bulk products upload job.
     */
    uploadBulkProducts({ department, productType, body }?: {
        department: string;
        productType: string;
        body: BulkJob;
    }): Promise<BulkResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A `slug` is a unique identifier for a
     *   particular template.
     * @returns {Promise<TemplatesValidationResponse>} - Success response
     * @summary: Validate Product Template Schema
     * @description: Allows you to list all product templates validation values for all the fields present in the database
     */
    validateProductTemplate({ slug }?: {
        slug: string;
    }): Promise<TemplatesValidationResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemType - An `item_type` defines the type of item.
     *   The default value is standard.
     * @returns {Promise<InventoryValidationResponse>} - Success response
     * @summary: Validate Product Template Schema
     * @description: Allows you to list all product templates validation values for all the fields present in the database
     */
    validateProductTemplateSchema({ itemType }?: {
        itemType: string;
    }): Promise<InventoryValidationResponse>;
}
