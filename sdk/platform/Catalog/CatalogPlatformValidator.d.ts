export = CatalogPlatformValidator;
/**
 * @typedef AllSizesParam
 * @property {number} itemId - Id of the product to be updated.
 */
/**
 * @typedef CreateBulkInventoryParam
 * @property {string} batchId - Batch Id of the bulk create job.
 * @property {CatalogPlatformModel.InventoryBulkRequestSchema} body
 */
/**
 * @typedef CreateBulkInventoryJobParam
 * @property {CatalogPlatformModel.InventoryBulkJob} body
 */
/**
 * @typedef CreateBulkProductUploadJobParam
 * @property {CatalogPlatformModel.BulkProductUploadJob} body
 */
/**
 * @typedef CreateInventoryExportParam
 * @property {CatalogPlatformModel.InventoryCreateRequestSchema} body
 */
/**
 * @typedef CreateInventoryExportJobParam
 * @property {CatalogPlatformModel.InventoryExportRequestSchema} body
 */
/**
 * @typedef CreateMarketplaceOptinParam
 * @property {string} marketplace - Slug of the marketplace .
 * @property {CatalogPlatformModel.CreateMarketplaceOptinRequestSchema} body
 */
/**
 * @typedef CreateProductParam
 * @property {CatalogPlatformModel.ProductCreateUpdateSchemaV2} body
 */
/**
 * @typedef CreateProductAssetsInBulkParam
 * @property {CatalogPlatformModel.ProductBulkAssets} body
 */
/**
 * @typedef CreateProductBundleParam
 * @property {CatalogPlatformModel.ProductBundleRequestSchema} body
 */
/**
 * @typedef CreateProductExportJobParam
 * @property {CatalogPlatformModel.ProductTemplateDownloadsExport} body
 */
/**
 * @typedef CreateProductsInBulkParam
 * @property {string} batchId - Batch Id in which assets to be uploaded.
 * @property {CatalogPlatformModel.BulkProductRequestSchema} body
 */
/**
 * @typedef CreateSizeGuideParam
 * @property {CatalogPlatformModel.ValidateSizeGuide} body
 */
/**
 * @typedef DeleteBulkInventoryJobParam
 * @property {string} batchId - Batch Id of the bulk delete job.
 */
/**
 * @typedef DeleteProductParam
 * @property {number} itemId - Id of the product to be updated.
 */
/**
 * @typedef DeleteProductBulkJobParam
 * @property {string} batchId - Batch Id of the bulk product job to be deleted.
 */
/**
 * @typedef DeleteRealtimeInventoryParam
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} sellerIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 * @property {CatalogPlatformModel.InventoryV2RequestSchema} body
 */
/**
 * @typedef DeleteSizeParam
 * @property {number} itemId - Item Id of the product associated with size to be deleted.
 * @property {string} size - Size to be deleted.
 */
/**
 * @typedef DownloadInventoryTemplateViewParam
 * @property {string} type - Type of file
 */
/**
 * @typedef DownloadProductTemplateViewsParam
 * @property {string} slug - A `slug` is a unique identifier for a particular template.
 * @property {string} [itemType] - An `item_type` defines the type of item. The
 *   default value is standard.
 * @property {string} [type] - Format type of the sample file. The default value is excel.
 */
/**
 * @typedef EditProductParam
 * @property {number} itemId - Id of the product to be updated.
 * @property {CatalogPlatformModel.ProductCreateUpdateSchemaV2} body
 */
/**
 * @typedef ExportInventoryConfigParam
 * @property {string} filter - Filter type from any one of ['brand', 'store', 'type']
 */
/**
 * @typedef GetAllProductHsnCodesParam
 * @property {number} [pageNo] - Page no
 * @property {number} [pageSize] - Page size
 * @property {string} [q] - Search using hsn code, description, reporting_hsn
 * @property {string} [type] - Search using type
 */
/**
 * @typedef GetAttributeParam
 * @property {string} attributeSlug - Slug of the attribute for which you want
 *   to view the details
 */
/**
 * @typedef GetCategoryDataParam
 * @property {string} uid - Category unique id
 */
/**
 * @typedef GetCompanyBrandDetailParam
 * @property {boolean} [isActive] - The is_active status for the optin id.
 * @property {string} [q] - The search value to filter the list.
 * @property {number} [pageNo] - The number of page for the company id.
 * @property {number} [pageSize] - Number of records that can be seen on the
 *   page for the company id.
 * @property {string} [marketplace] - The marketplace platform associated with
 *   the company id.
 */
/**
 * @typedef GetCompanyBrandsDRIParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 */
/** @typedef GetCompanyDetailParam */
/** @typedef GetCompanyMetricsParam */
/**
 * @typedef GetCompanyVerificationParam
 * @property {string} [q] - A `q` parameter is used to search the company by its name.
 * @property {number} [pageNo] - A `page_no` parameter is a number of the page requested.
 * @property {number} [pageSize] - A `page_size` is the no of items per page.
 */
/**
 * @typedef GetDepartmentDataParam
 * @property {string} uid - A `uid` is a unique identifier of a department.
 */
/**
 * @typedef GetInventoriesParam
 * @property {number} [itemId] - Item code of the product of which size is to be get.
 * @property {string} [size] - Size of which inventory is to get.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [pageId] - Alphanumeric Page ID to retrieve next set of results.
 * @property {string} [pageType] - Available pagination types are cursor or number.
 * @property {string} [q] - Search with help of store code.
 * @property {boolean} [sellable] - Filter on whether product is in stock or not.
 * @property {number[]} [storeIds] - The Store Id of products to fetch inventory.
 * @property {number[]} [brandIds] - The Brand Id of products to fetch inventory.
 * @property {string[]} [sellerIdentifiers] - The Seller Identifier or Primary
 *   Identifier of the inventory.
 * @property {number} [minSellable] - Min sellable quantity.
 * @property {number} [maxSellable] - Max sellable quantity.
 * @property {string} [fromDate] - Inventory updated on filter to get
 *   inventories greater then provided date.
 * @property {string} [toDate] - Inventory updated on filter to get inventories
 *   less then provided date.
 * @property {string} [sizeIdentifier] - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 */
/**
 * @typedef GetInventoryBulkUploadHistoryParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef GetInventoryBySizeParam
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} size - Size of which inventory is to get.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search with help of store code.
 * @property {boolean} [sellable] - Filter on whether product is in stock or not.
 */
/**
 * @typedef GetInventoryBySizeIdentifierParam
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
/** @typedef GetInventoryExportParam */
/**
 * @typedef GetInventoryExportDetailParam
 * @property {string} jobId - Company Id in which assets to be uploaded.
 */
/** @typedef GetLocationTagsParam */
/** @typedef GetMarketplacesParam */
/**
 * @typedef GetProductParam
 * @property {number} itemId - Item Id of the product.
 * @property {number} [brandUid] - Brand Id of the product.
 * @property {string} [itemCode] - Item code of the product.
 */
/**
 * @typedef GetProductAssetsInBulkParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef GetProductAttributesParam
 * @property {string} category - It is the name of the l3 cateogry
 * @property {boolean} [filter] - If true, returns filtered values, else returns
 *   all the attributes
 */
/**
 * @typedef GetProductBulkUploadHistoryParam
 * @property {string} [search] - Search string to filter the results by batch id
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef GetProductBundleParam
 * @property {string} [q] - A search string that is searched with product bundle name.
 * @property {string[]} [slug] - Slugs of bundles to be retrieved.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef GetProductBundleDetailParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to retrieve.
 */
/**
 * @typedef GetProductExportDetailParam
 * @property {string} jobId - Company Id in which assets to be uploaded.
 */
/**
 * @typedef GetProductExportJobsParam
 * @property {string} [status] - This is a parameter used to find all the jobs
 *   with the specified status.
 * @property {string} [fromDate] - This is a parameter used to find the job from
 *   the date specified to the current date.
 * @property {string} [toDate] - This is a parameter used to find the job from
 *   the from_date specified to the to_date.
 * @property {string} [q] - It is a query parameter to search the export job
 *   with the task ID.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef GetProductSizeParam
 * @property {string} [itemCode] - Item code of the product size.
 * @property {number} itemId - Item Id of the product size.
 * @property {number} [brandUid] - Brand Id of the product size.
 * @property {number} [uid] - Id of the product size.
 */
/** @typedef GetProductTagsParam */
/**
 * @typedef GetProductTemplateBySlugParam
 * @property {string} slug - Slug of the template.
 */
/**
 * @typedef GetProductValidationParam
 * @property {string} type - Type of identifier to validate the product against.
 * @property {string} slug - Type of identifier to validate the product against.
 */
/**
 * @typedef GetProductVerificationDetailsParam
 * @property {number} itemId - A `item_id` is a unique identifier for a specific product.
 */
/**
 * @typedef GetProductsParam
 * @property {number[]} [brandIds] - Get multiple products filtered by Brand Ids
 * @property {boolean} [multiSize] - Get multiple products filtered by weather
 *   have multiple sizes or not
 * @property {number[]} [categoryIds] - Get multiple products filtered by Category Ids
 * @property {number[]} [itemIds] - Get multiple products filtered by Item Ids
 * @property {number[]} [departmentIds] - Get multiple products filtered by Department Ids
 * @property {string[]} [itemCode] - Get multiple products filtered by Item Code
 * @property {string} [name] - Get multiple products filtered by Name (Pattern Match)
 * @property {string} [slug] - Get multiple products filtered by Slug
 * @property {string[]} [allIdentifiers] - Get multiple products filtered by All
 *   Identifiers
 * @property {string} [q] - Get multiple products filtered by q string
 * @property {string[]} [tags] - Get multiple products filtered by tags
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {string} [pageType] - For pagination type value can be cursor or
 *   number. Default is number.
 * @property {string} [sortOn] - Field which is to be used for sorting, default
 *   is latest. Value can be latest (modified_on) or created (record id)
 * @property {string} [pageId] - If page_type is cursor, each response will
 *   contain **next_id** param (datetime or id depending upon sort_on), which
 *   should be sent back as page_id to make cursor pagination work.
 */
/**
 * @typedef GetSellerInsightsParam
 * @property {string} sellerAppId - Id of the seller application which is
 *   serving the invetory/catalog of the company
 */
/**
 * @typedef GetSingleProductHSNCodeParam
 * @property {string} reportingHsn - Reporting_hsn
 */
/**
 * @typedef GetSizeGuideParam
 * @property {string} id - Id of the size guide to be viewed.
 */
/**
 * @typedef GetSizeGuidesParam
 * @property {boolean} [active] - Filter size guide on basis of active, in-active
 * @property {string} [q] - Query that is to be searched.
 * @property {number} [brandId] - Brand id that is to be searched.
 * @property {string} [tag] - To filter size guide on basis of tag.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 */
/**
 * @typedef GetStoreDetailParam
 * @property {string} [q] - The search related the store for the company id.
 * @property {number} [pageNo] - The number of page for the company id.
 * @property {number} [pageSize] - Number of records that can be seen on the
 *   page for the company id.
 */
/**
 * @typedef GetVariantTypesParam
 * @property {string} templateTag - The page number to navigate through the
 *   given set of results
 */
/**
 * @typedef GetVariantsOfProductsParam
 * @property {number} itemId - Get list of variants of item Id
 * @property {string} variantType - Get multiple products filtered by variant type
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 */
/**
 * @typedef ListCategoriesParam
 * @property {string} [level] - Get category for multiple levels
 * @property {number} [department] - Get category for multiple departments filtered
 * @property {string} [q] - Get multiple categories filtered by search string
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {number[]} [uids] - Get multiple categories filtered by category uids.
 */
/**
 * @typedef ListDepartmentsDataParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {string} [itemType] - A `item_type` is a type of product eg. set,
 *   standard, digital
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {string} [name] - Can search departments by passing name.
 * @property {string} [search] - Can search departments by passing name of the
 *   department in search parameter.
 * @property {boolean} [isActive] - Can query for departments based on whether
 *   they are active or inactive.
 * @property {number[]} [uids] - Filter department by uids.
 */
/** @typedef ListHSNCodesParam */
/**
 * @typedef ListInventoryExportParam
 * @property {string} [status] - Status of the export job.
 * @property {string} [fromDate] - Inventory export history filtered according
 *   to from_date.
 * @property {string} [toDate] - Inventory export history filtered according to from_date.
 * @property {string} [q] - Inventory export history filtered according to task ID.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef ListProductTemplateParam
 * @property {string} department - A `department` is the name of a particular department.
 */
/**
 * @typedef ListProductTemplateCategoriesParam
 * @property {string} departments - A `department` is name of a departments
 *   whose category needs to be listed. Can specify multiple departments.
 * @property {string} itemType - An `item_type` is the type of item, it can be
 *   `set`, `standard`, `digital`, etc.
 * @property {number} [pageSize] - Number of categories needed in one page
 * @property {number} [pageNo] - Page number to fetch, for example if pagesize
 *   is 10 and page number 1,
 * @property {number} [q] - Search string to search categories from
 */
/**
 * @typedef ListTemplateBrandTypeValuesParam
 * @property {string} filter - A `filter` is the unique identifier of the type
 *   of value required.
 * @property {string} [templateTag] - A `template_tag` is the identifier of the
 *   type of template required.
 * @property {string} [itemType] - A `item_type` is the identifier of the type
 *   of template required.
 */
/**
 * @typedef PatchInventoryExportDetailParam
 * @property {string} jobId - Company Id in which assets to be uploaded.
 * @property {CatalogPlatformModel.ExportPatchRequestSchema} body
 */
/**
 * @typedef PatchProductExportDetailParam
 * @property {string} jobId - Company Id in which assets to be uploaded.
 * @property {CatalogPlatformModel.ExportPatchRequestSchema} body
 */
/**
 * @typedef UpdateInventoriesParam
 * @property {CatalogPlatformModel.InventoryV2RequestSchema} body
 */
/**
 * @typedef UpdateMarketplaceOptinParam
 * @property {string} marketplace - Slug of the marketplace .
 * @property {CatalogPlatformModel.UpdateMarketplaceOptinRequestSchema} body
 */
/**
 * @typedef UpdateProductBundleParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 * @property {CatalogPlatformModel.ProductBundleUpdateRequestSchema} body
 */
/**
 * @typedef UpdateRealtimeInventoryParam
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} sellerIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 * @property {CatalogPlatformModel.InventoryV2RequestSchema} body
 */
/**
 * @typedef UpdateSizeGuideParam
 * @property {string} id - Mongo id of the size guide to be edited
 * @property {CatalogPlatformModel.ValidateSizeGuide} body
 */
/**
 * @typedef UploadBulkProductsParam
 * @property {string} department - Department of the product to be uploaded.
 * @property {string} productType - Product type of the product to be uploaded
 *   i.e. set, standard , digital.
 * @property {CatalogPlatformModel.BulkProductJob} body
 */
/**
 * @typedef ValidateProductGlobalTemplateParam
 * @property {string} [itemType] - An `item_type` defines the type of item. The
 *   default value is standard.
 * @property {boolean} [bulk] - This specification determines the schema type to
 *   be retrieved. When set to true, it will return the schema for bulk data;
 *   when set to false, it will provide the schema for a single product. The
 *   default value is false.
 */
/**
 * @typedef ValidateProductTemplateParam
 * @property {string} slug - A `slug` is a unique identifier for a particular template.
 * @property {string} [itemType] - An `item_type` defines the type of item. The
 *   default value is standard.
 * @property {boolean} [bulk] - This specification determines the schema type to
 *   be retrieved. When set to true, it will return the schema for bulk data;
 *   when set to false, it will provide the schema for a single product. The
 *   default value is false.
 */
/**
 * @typedef ValidateProductTemplateSchemaParam
 * @property {string} itemType - An `item_type` defines the type of item. The
 *   default value is standard.
 * @property {boolean} bulk - Type of file template i.e if bulk
 */
declare class CatalogPlatformValidator {
    /** @returns {AllSizesParam} */
    static allSizes(): AllSizesParam;
    /** @returns {CreateBulkInventoryParam} */
    static createBulkInventory(): CreateBulkInventoryParam;
    /** @returns {CreateBulkInventoryJobParam} */
    static createBulkInventoryJob(): CreateBulkInventoryJobParam;
    /** @returns {CreateBulkProductUploadJobParam} */
    static createBulkProductUploadJob(): CreateBulkProductUploadJobParam;
    /** @returns {CreateInventoryExportParam} */
    static createInventoryExport(): CreateInventoryExportParam;
    /** @returns {CreateInventoryExportJobParam} */
    static createInventoryExportJob(): CreateInventoryExportJobParam;
    /** @returns {CreateMarketplaceOptinParam} */
    static createMarketplaceOptin(): CreateMarketplaceOptinParam;
    /** @returns {CreateProductParam} */
    static createProduct(): CreateProductParam;
    /** @returns {CreateProductAssetsInBulkParam} */
    static createProductAssetsInBulk(): CreateProductAssetsInBulkParam;
    /** @returns {CreateProductBundleParam} */
    static createProductBundle(): CreateProductBundleParam;
    /** @returns {CreateProductExportJobParam} */
    static createProductExportJob(): CreateProductExportJobParam;
    /** @returns {CreateProductsInBulkParam} */
    static createProductsInBulk(): CreateProductsInBulkParam;
    /** @returns {CreateSizeGuideParam} */
    static createSizeGuide(): CreateSizeGuideParam;
    /** @returns {DeleteBulkInventoryJobParam} */
    static deleteBulkInventoryJob(): DeleteBulkInventoryJobParam;
    /** @returns {DeleteProductParam} */
    static deleteProduct(): DeleteProductParam;
    /** @returns {DeleteProductBulkJobParam} */
    static deleteProductBulkJob(): DeleteProductBulkJobParam;
    /** @returns {DeleteRealtimeInventoryParam} */
    static deleteRealtimeInventory(): DeleteRealtimeInventoryParam;
    /** @returns {DeleteSizeParam} */
    static deleteSize(): DeleteSizeParam;
    /** @returns {DownloadInventoryTemplateViewParam} */
    static downloadInventoryTemplateView(): DownloadInventoryTemplateViewParam;
    /** @returns {DownloadProductTemplateViewsParam} */
    static downloadProductTemplateViews(): DownloadProductTemplateViewsParam;
    /** @returns {EditProductParam} */
    static editProduct(): EditProductParam;
    /** @returns {ExportInventoryConfigParam} */
    static exportInventoryConfig(): ExportInventoryConfigParam;
    /** @returns {GetAllProductHsnCodesParam} */
    static getAllProductHsnCodes(): GetAllProductHsnCodesParam;
    /** @returns {GetAttributeParam} */
    static getAttribute(): GetAttributeParam;
    /** @returns {GetCategoryDataParam} */
    static getCategoryData(): GetCategoryDataParam;
    /** @returns {GetCompanyBrandDetailParam} */
    static getCompanyBrandDetail(): GetCompanyBrandDetailParam;
    /** @returns {GetCompanyBrandsDRIParam} */
    static getCompanyBrandsDRI(): GetCompanyBrandsDRIParam;
    /** @returns {GetCompanyDetailParam} */
    static getCompanyDetail(): any;
    /** @returns {GetCompanyMetricsParam} */
    static getCompanyMetrics(): any;
    /** @returns {GetCompanyVerificationParam} */
    static getCompanyVerification(): GetCompanyVerificationParam;
    /** @returns {GetDepartmentDataParam} */
    static getDepartmentData(): GetDepartmentDataParam;
    /** @returns {GetInventoriesParam} */
    static getInventories(): GetInventoriesParam;
    /** @returns {GetInventoryBulkUploadHistoryParam} */
    static getInventoryBulkUploadHistory(): GetInventoryBulkUploadHistoryParam;
    /** @returns {GetInventoryBySizeParam} */
    static getInventoryBySize(): GetInventoryBySizeParam;
    /** @returns {GetInventoryBySizeIdentifierParam} */
    static getInventoryBySizeIdentifier(): GetInventoryBySizeIdentifierParam;
    /** @returns {GetInventoryExportParam} */
    static getInventoryExport(): any;
    /** @returns {GetInventoryExportDetailParam} */
    static getInventoryExportDetail(): GetInventoryExportDetailParam;
    /** @returns {GetLocationTagsParam} */
    static getLocationTags(): any;
    /** @returns {GetMarketplacesParam} */
    static getMarketplaces(): any;
    /** @returns {GetProductParam} */
    static getProduct(): GetProductParam;
    /** @returns {GetProductAssetsInBulkParam} */
    static getProductAssetsInBulk(): GetProductAssetsInBulkParam;
    /** @returns {GetProductAttributesParam} */
    static getProductAttributes(): GetProductAttributesParam;
    /** @returns {GetProductBulkUploadHistoryParam} */
    static getProductBulkUploadHistory(): GetProductBulkUploadHistoryParam;
    /** @returns {GetProductBundleParam} */
    static getProductBundle(): GetProductBundleParam;
    /** @returns {GetProductBundleDetailParam} */
    static getProductBundleDetail(): GetProductBundleDetailParam;
    /** @returns {GetProductExportDetailParam} */
    static getProductExportDetail(): GetProductExportDetailParam;
    /** @returns {GetProductExportJobsParam} */
    static getProductExportJobs(): GetProductExportJobsParam;
    /** @returns {GetProductSizeParam} */
    static getProductSize(): GetProductSizeParam;
    /** @returns {GetProductTagsParam} */
    static getProductTags(): any;
    /** @returns {GetProductTemplateBySlugParam} */
    static getProductTemplateBySlug(): GetProductTemplateBySlugParam;
    /** @returns {GetProductValidationParam} */
    static getProductValidation(): GetProductValidationParam;
    /** @returns {GetProductVerificationDetailsParam} */
    static getProductVerificationDetails(): GetProductVerificationDetailsParam;
    /** @returns {GetProductsParam} */
    static getProducts(): GetProductsParam;
    /** @returns {GetSellerInsightsParam} */
    static getSellerInsights(): GetSellerInsightsParam;
    /** @returns {GetSingleProductHSNCodeParam} */
    static getSingleProductHSNCode(): GetSingleProductHSNCodeParam;
    /** @returns {GetSizeGuideParam} */
    static getSizeGuide(): GetSizeGuideParam;
    /** @returns {GetSizeGuidesParam} */
    static getSizeGuides(): GetSizeGuidesParam;
    /** @returns {GetStoreDetailParam} */
    static getStoreDetail(): GetStoreDetailParam;
    /** @returns {GetVariantTypesParam} */
    static getVariantTypes(): GetVariantTypesParam;
    /** @returns {GetVariantsOfProductsParam} */
    static getVariantsOfProducts(): GetVariantsOfProductsParam;
    /** @returns {ListCategoriesParam} */
    static listCategories(): ListCategoriesParam;
    /** @returns {ListDepartmentsDataParam} */
    static listDepartmentsData(): ListDepartmentsDataParam;
    /** @returns {ListHSNCodesParam} */
    static listHSNCodes(): any;
    /** @returns {ListInventoryExportParam} */
    static listInventoryExport(): ListInventoryExportParam;
    /** @returns {ListProductTemplateParam} */
    static listProductTemplate(): ListProductTemplateParam;
    /** @returns {ListProductTemplateCategoriesParam} */
    static listProductTemplateCategories(): ListProductTemplateCategoriesParam;
    /** @returns {ListTemplateBrandTypeValuesParam} */
    static listTemplateBrandTypeValues(): ListTemplateBrandTypeValuesParam;
    /** @returns {PatchInventoryExportDetailParam} */
    static patchInventoryExportDetail(): PatchInventoryExportDetailParam;
    /** @returns {PatchProductExportDetailParam} */
    static patchProductExportDetail(): PatchProductExportDetailParam;
    /** @returns {UpdateInventoriesParam} */
    static updateInventories(): UpdateInventoriesParam;
    /** @returns {UpdateMarketplaceOptinParam} */
    static updateMarketplaceOptin(): UpdateMarketplaceOptinParam;
    /** @returns {UpdateProductBundleParam} */
    static updateProductBundle(): UpdateProductBundleParam;
    /** @returns {UpdateRealtimeInventoryParam} */
    static updateRealtimeInventory(): UpdateRealtimeInventoryParam;
    /** @returns {UpdateSizeGuideParam} */
    static updateSizeGuide(): UpdateSizeGuideParam;
    /** @returns {UploadBulkProductsParam} */
    static uploadBulkProducts(): UploadBulkProductsParam;
    /** @returns {ValidateProductGlobalTemplateParam} */
    static validateProductGlobalTemplate(): ValidateProductGlobalTemplateParam;
    /** @returns {ValidateProductTemplateParam} */
    static validateProductTemplate(): ValidateProductTemplateParam;
    /** @returns {ValidateProductTemplateSchemaParam} */
    static validateProductTemplateSchema(): ValidateProductTemplateSchemaParam;
}
declare namespace CatalogPlatformValidator {
    export { AllSizesParam, CreateBulkInventoryParam, CreateBulkInventoryJobParam, CreateBulkProductUploadJobParam, CreateInventoryExportParam, CreateInventoryExportJobParam, CreateMarketplaceOptinParam, CreateProductParam, CreateProductAssetsInBulkParam, CreateProductBundleParam, CreateProductExportJobParam, CreateProductsInBulkParam, CreateSizeGuideParam, DeleteBulkInventoryJobParam, DeleteProductParam, DeleteProductBulkJobParam, DeleteRealtimeInventoryParam, DeleteSizeParam, DownloadInventoryTemplateViewParam, DownloadProductTemplateViewsParam, EditProductParam, ExportInventoryConfigParam, GetAllProductHsnCodesParam, GetAttributeParam, GetCategoryDataParam, GetCompanyBrandDetailParam, GetCompanyBrandsDRIParam, GetCompanyDetailParam, GetCompanyMetricsParam, GetCompanyVerificationParam, GetDepartmentDataParam, GetInventoriesParam, GetInventoryBulkUploadHistoryParam, GetInventoryBySizeParam, GetInventoryBySizeIdentifierParam, GetInventoryExportParam, GetInventoryExportDetailParam, GetLocationTagsParam, GetMarketplacesParam, GetProductParam, GetProductAssetsInBulkParam, GetProductAttributesParam, GetProductBulkUploadHistoryParam, GetProductBundleParam, GetProductBundleDetailParam, GetProductExportDetailParam, GetProductExportJobsParam, GetProductSizeParam, GetProductTagsParam, GetProductTemplateBySlugParam, GetProductValidationParam, GetProductVerificationDetailsParam, GetProductsParam, GetSellerInsightsParam, GetSingleProductHSNCodeParam, GetSizeGuideParam, GetSizeGuidesParam, GetStoreDetailParam, GetVariantTypesParam, GetVariantsOfProductsParam, ListCategoriesParam, ListDepartmentsDataParam, ListHSNCodesParam, ListInventoryExportParam, ListProductTemplateParam, ListProductTemplateCategoriesParam, ListTemplateBrandTypeValuesParam, PatchInventoryExportDetailParam, PatchProductExportDetailParam, UpdateInventoriesParam, UpdateMarketplaceOptinParam, UpdateProductBundleParam, UpdateRealtimeInventoryParam, UpdateSizeGuideParam, UploadBulkProductsParam, ValidateProductGlobalTemplateParam, ValidateProductTemplateParam, ValidateProductTemplateSchemaParam };
}
type AllSizesParam = {
    /**
     * - Id of the product to be updated.
     */
    itemId: number;
};
type CreateBulkInventoryParam = {
    /**
     * - Batch Id of the bulk create job.
     */
    batchId: string;
    body: CatalogPlatformModel.InventoryBulkRequestSchema;
};
type CreateBulkInventoryJobParam = {
    body: CatalogPlatformModel.InventoryBulkJob;
};
type CreateBulkProductUploadJobParam = {
    body: CatalogPlatformModel.BulkProductUploadJob;
};
type CreateInventoryExportParam = {
    body: CatalogPlatformModel.InventoryCreateRequestSchema;
};
type CreateInventoryExportJobParam = {
    body: CatalogPlatformModel.InventoryExportRequestSchema;
};
type CreateMarketplaceOptinParam = {
    /**
     * - Slug of the marketplace .
     */
    marketplace: string;
    body: CatalogPlatformModel.CreateMarketplaceOptinRequestSchema;
};
type CreateProductParam = {
    body: CatalogPlatformModel.ProductCreateUpdateSchemaV2;
};
type CreateProductAssetsInBulkParam = {
    body: CatalogPlatformModel.ProductBulkAssets;
};
type CreateProductBundleParam = {
    body: CatalogPlatformModel.ProductBundleRequestSchema;
};
type CreateProductExportJobParam = {
    body: CatalogPlatformModel.ProductTemplateDownloadsExport;
};
type CreateProductsInBulkParam = {
    /**
     * - Batch Id in which assets to be uploaded.
     */
    batchId: string;
    body: CatalogPlatformModel.BulkProductRequestSchema;
};
type CreateSizeGuideParam = {
    body: CatalogPlatformModel.ValidateSizeGuide;
};
type DeleteBulkInventoryJobParam = {
    /**
     * - Batch Id of the bulk delete job.
     */
    batchId: string;
};
type DeleteProductParam = {
    /**
     * - Id of the product to be updated.
     */
    itemId: number;
};
type DeleteProductBulkJobParam = {
    /**
     * - Batch Id of the bulk product job to be deleted.
     */
    batchId: string;
};
type DeleteRealtimeInventoryParam = {
    /**
     * - Item code of the product of which size is to be get.
     */
    itemId: number;
    /**
     * - Size Identifier (Seller Identifier or
     * Primary Identifier) of which inventory is to get.
     */
    sellerIdentifier: string;
    body: CatalogPlatformModel.InventoryV2RequestSchema;
};
type DeleteSizeParam = {
    /**
     * - Item Id of the product associated with size to be deleted.
     */
    itemId: number;
    /**
     * - Size to be deleted.
     */
    size: string;
};
type DownloadInventoryTemplateViewParam = {
    /**
     * - Type of file
     */
    type: string;
};
type DownloadProductTemplateViewsParam = {
    /**
     * - A `slug` is a unique identifier for a particular template.
     */
    slug: string;
    /**
     * - An `item_type` defines the type of item. The
     * default value is standard.
     */
    itemType?: string;
    /**
     * - Format type of the sample file. The default value is excel.
     */
    type?: string;
};
type EditProductParam = {
    /**
     * - Id of the product to be updated.
     */
    itemId: number;
    body: CatalogPlatformModel.ProductCreateUpdateSchemaV2;
};
type ExportInventoryConfigParam = {
    /**
     * - Filter type from any one of ['brand', 'store', 'type']
     */
    filter: string;
};
type GetAllProductHsnCodesParam = {
    /**
     * - Page no
     */
    pageNo?: number;
    /**
     * - Page size
     */
    pageSize?: number;
    /**
     * - Search using hsn code, description, reporting_hsn
     */
    q?: string;
    /**
     * - Search using type
     */
    type?: string;
};
type GetAttributeParam = {
    /**
     * - Slug of the attribute for which you want
     * to view the details
     */
    attributeSlug: string;
};
type GetCategoryDataParam = {
    /**
     * - Category unique id
     */
    uid: string;
};
type GetCompanyBrandDetailParam = {
    /**
     * - The is_active status for the optin id.
     */
    isActive?: boolean;
    /**
     * - The search value to filter the list.
     */
    q?: string;
    /**
     * - The number of page for the company id.
     */
    pageNo?: number;
    /**
     * - Number of records that can be seen on the
     * page for the company id.
     */
    pageSize?: number;
    /**
     * - The marketplace platform associated with
     * the company id.
     */
    marketplace?: string;
};
type GetCompanyBrandsDRIParam = {
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
};
type GetCompanyVerificationParam = {
    /**
     * - A `q` parameter is used to search the company by its name.
     */
    q?: string;
    /**
     * - A `page_no` parameter is a number of the page requested.
     */
    pageNo?: number;
    /**
     * - A `page_size` is the no of items per page.
     */
    pageSize?: number;
};
type GetDepartmentDataParam = {
    /**
     * - A `uid` is a unique identifier of a department.
     */
    uid: string;
};
type GetInventoriesParam = {
    /**
     * - Item code of the product of which size is to be get.
     */
    itemId?: number;
    /**
     * - Size of which inventory is to get.
     */
    size?: string;
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
     * - Alphanumeric Page ID to retrieve next set of results.
     */
    pageId?: string;
    /**
     * - Available pagination types are cursor or number.
     */
    pageType?: string;
    /**
     * - Search with help of store code.
     */
    q?: string;
    /**
     * - Filter on whether product is in stock or not.
     */
    sellable?: boolean;
    /**
     * - The Store Id of products to fetch inventory.
     */
    storeIds?: number[];
    /**
     * - The Brand Id of products to fetch inventory.
     */
    brandIds?: number[];
    /**
     * - The Seller Identifier or Primary
     * Identifier of the inventory.
     */
    sellerIdentifiers?: string[];
    /**
     * - Min sellable quantity.
     */
    minSellable?: number;
    /**
     * - Max sellable quantity.
     */
    maxSellable?: number;
    /**
     * - Inventory updated on filter to get
     * inventories greater then provided date.
     */
    fromDate?: string;
    /**
     * - Inventory updated on filter to get inventories
     * less then provided date.
     */
    toDate?: string;
    /**
     * - Size Identifier (Seller Identifier or
     * Primary Identifier) of which inventory is to get.
     */
    sizeIdentifier?: string;
};
type GetInventoryBulkUploadHistoryParam = {
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
};
type GetInventoryBySizeParam = {
    /**
     * - Item code of the product of which size is to be get.
     */
    itemId: number;
    /**
     * - Size of which inventory is to get.
     */
    size: string;
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
     * - Filter on whether product is in stock or not.
     */
    sellable?: boolean;
};
type GetInventoryBySizeIdentifierParam = {
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
type GetInventoryExportDetailParam = {
    /**
     * - Company Id in which assets to be uploaded.
     */
    jobId: string;
};
type GetProductParam = {
    /**
     * - Item Id of the product.
     */
    itemId: number;
    /**
     * - Brand Id of the product.
     */
    brandUid?: number;
    /**
     * - Item code of the product.
     */
    itemCode?: string;
};
type GetProductAssetsInBulkParam = {
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
};
type GetProductAttributesParam = {
    /**
     * - It is the name of the l3 cateogry
     */
    category: string;
    /**
     * - If true, returns filtered values, else returns
     * all the attributes
     */
    filter?: boolean;
};
type GetProductBulkUploadHistoryParam = {
    /**
     * - Search string to filter the results by batch id
     */
    search?: string;
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
};
type GetProductBundleParam = {
    /**
     * - A search string that is searched with product bundle name.
     */
    q?: string;
    /**
     * - Slugs of bundles to be retrieved.
     */
    slug?: string[];
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
};
type GetProductBundleDetailParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to retrieve.
     */
    id: string;
};
type GetProductExportDetailParam = {
    /**
     * - Company Id in which assets to be uploaded.
     */
    jobId: string;
};
type GetProductExportJobsParam = {
    /**
     * - This is a parameter used to find all the jobs
     * with the specified status.
     */
    status?: string;
    /**
     * - This is a parameter used to find the job from
     * the date specified to the current date.
     */
    fromDate?: string;
    /**
     * - This is a parameter used to find the job from
     * the from_date specified to the to_date.
     */
    toDate?: string;
    /**
     * - It is a query parameter to search the export job
     * with the task ID.
     */
    q?: string;
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
};
type GetProductSizeParam = {
    /**
     * - Item code of the product size.
     */
    itemCode?: string;
    /**
     * - Item Id of the product size.
     */
    itemId: number;
    /**
     * - Brand Id of the product size.
     */
    brandUid?: number;
    /**
     * - Id of the product size.
     */
    uid?: number;
};
type GetProductTemplateBySlugParam = {
    /**
     * - Slug of the template.
     */
    slug: string;
};
type GetProductValidationParam = {
    /**
     * - Type of identifier to validate the product against.
     */
    type: string;
    /**
     * - Type of identifier to validate the product against.
     */
    slug: string;
};
type GetProductVerificationDetailsParam = {
    /**
     * - A `item_id` is a unique identifier for a specific product.
     */
    itemId: number;
};
type GetProductsParam = {
    /**
     * - Get multiple products filtered by Brand Ids
     */
    brandIds?: number[];
    /**
     * - Get multiple products filtered by weather
     * have multiple sizes or not
     */
    multiSize?: boolean;
    /**
     * - Get multiple products filtered by Category Ids
     */
    categoryIds?: number[];
    /**
     * - Get multiple products filtered by Item Ids
     */
    itemIds?: number[];
    /**
     * - Get multiple products filtered by Department Ids
     */
    departmentIds?: number[];
    /**
     * - Get multiple products filtered by Item Code
     */
    itemCode?: string[];
    /**
     * - Get multiple products filtered by Name (Pattern Match)
     */
    name?: string;
    /**
     * - Get multiple products filtered by Slug
     */
    slug?: string;
    /**
     * - Get multiple products filtered by All
     * Identifiers
     */
    allIdentifiers?: string[];
    /**
     * - Get multiple products filtered by q string
     */
    q?: string;
    /**
     * - Get multiple products filtered by tags
     */
    tags?: string[];
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
     * - For pagination type value can be cursor or
     * number. Default is number.
     */
    pageType?: string;
    /**
     * - Field which is to be used for sorting, default
     * is latest. Value can be latest (modified_on) or created (record id)
     */
    sortOn?: string;
    /**
     * - If page_type is cursor, each response will
     * contain **next_id** param (datetime or id depending upon sort_on), which
     * should be sent back as page_id to make cursor pagination work.
     */
    pageId?: string;
};
type GetSellerInsightsParam = {
    /**
     * - Id of the seller application which is
     * serving the invetory/catalog of the company
     */
    sellerAppId: string;
};
type GetSingleProductHSNCodeParam = {
    /**
     * - Reporting_hsn
     */
    reportingHsn: string;
};
type GetSizeGuideParam = {
    /**
     * - Id of the size guide to be viewed.
     */
    id: string;
};
type GetSizeGuidesParam = {
    /**
     * - Filter size guide on basis of active, in-active
     */
    active?: boolean;
    /**
     * - Query that is to be searched.
     */
    q?: string;
    /**
     * - Brand id that is to be searched.
     */
    brandId?: number;
    /**
     * - To filter size guide on basis of tag.
     */
    tag?: string;
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
};
type GetStoreDetailParam = {
    /**
     * - The search related the store for the company id.
     */
    q?: string;
    /**
     * - The number of page for the company id.
     */
    pageNo?: number;
    /**
     * - Number of records that can be seen on the
     * page for the company id.
     */
    pageSize?: number;
};
type GetVariantTypesParam = {
    /**
     * - The page number to navigate through the
     * given set of results
     */
    templateTag: string;
};
type GetVariantsOfProductsParam = {
    /**
     * - Get list of variants of item Id
     */
    itemId: number;
    /**
     * - Get multiple products filtered by variant type
     */
    variantType: string;
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
};
type ListCategoriesParam = {
    /**
     * - Get category for multiple levels
     */
    level?: string;
    /**
     * - Get category for multiple departments filtered
     */
    department?: number;
    /**
     * - Get multiple categories filtered by search string
     */
    q?: string;
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
     * - Get multiple categories filtered by category uids.
     */
    uids?: number[];
};
type ListDepartmentsDataParam = {
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - A `item_type` is a type of product eg. set,
     * standard, digital
     */
    itemType?: string;
    /**
     * - Number of items to retrieve in each page.
     * Default is 10.
     */
    pageSize?: number;
    /**
     * - Can search departments by passing name.
     */
    name?: string;
    /**
     * - Can search departments by passing name of the
     * department in search parameter.
     */
    search?: string;
    /**
     * - Can query for departments based on whether
     * they are active or inactive.
     */
    isActive?: boolean;
    /**
     * - Filter department by uids.
     */
    uids?: number[];
};
type ListInventoryExportParam = {
    /**
     * - Status of the export job.
     */
    status?: string;
    /**
     * - Inventory export history filtered according
     * to from_date.
     */
    fromDate?: string;
    /**
     * - Inventory export history filtered according to from_date.
     */
    toDate?: string;
    /**
     * - Inventory export history filtered according to task ID.
     */
    q?: string;
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
};
type ListProductTemplateParam = {
    /**
     * - A `department` is the name of a particular department.
     */
    department: string;
};
type ListProductTemplateCategoriesParam = {
    /**
     * - A `department` is name of a departments
     * whose category needs to be listed. Can specify multiple departments.
     */
    departments: string;
    /**
     * - An `item_type` is the type of item, it can be
     * `set`, `standard`, `digital`, etc.
     */
    itemType: string;
    /**
     * - Number of categories needed in one page
     */
    pageSize?: number;
    /**
     * - Page number to fetch, for example if pagesize
     * is 10 and page number 1,
     */
    pageNo?: number;
    /**
     * - Search string to search categories from
     */
    q?: number;
};
type ListTemplateBrandTypeValuesParam = {
    /**
     * - A `filter` is the unique identifier of the type
     * of value required.
     */
    filter: string;
    /**
     * - A `template_tag` is the identifier of the
     * type of template required.
     */
    templateTag?: string;
    /**
     * - A `item_type` is the identifier of the type
     * of template required.
     */
    itemType?: string;
};
type PatchInventoryExportDetailParam = {
    /**
     * - Company Id in which assets to be uploaded.
     */
    jobId: string;
    body: CatalogPlatformModel.ExportPatchRequestSchema;
};
type PatchProductExportDetailParam = {
    /**
     * - Company Id in which assets to be uploaded.
     */
    jobId: string;
    body: CatalogPlatformModel.ExportPatchRequestSchema;
};
type UpdateInventoriesParam = {
    body: CatalogPlatformModel.InventoryV2RequestSchema;
};
type UpdateMarketplaceOptinParam = {
    /**
     * - Slug of the marketplace .
     */
    marketplace: string;
    body: CatalogPlatformModel.UpdateMarketplaceOptinRequestSchema;
};
type UpdateProductBundleParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
    body: CatalogPlatformModel.ProductBundleUpdateRequestSchema;
};
type UpdateRealtimeInventoryParam = {
    /**
     * - Item code of the product of which size is to be get.
     */
    itemId: number;
    /**
     * - Size Identifier (Seller Identifier or
     * Primary Identifier) of which inventory is to get.
     */
    sellerIdentifier: string;
    body: CatalogPlatformModel.InventoryV2RequestSchema;
};
type UpdateSizeGuideParam = {
    /**
     * - Mongo id of the size guide to be edited
     */
    id: string;
    body: CatalogPlatformModel.ValidateSizeGuide;
};
type UploadBulkProductsParam = {
    /**
     * - Department of the product to be uploaded.
     */
    department: string;
    /**
     * - Product type of the product to be uploaded
     * i.e. set, standard , digital.
     */
    productType: string;
    body: CatalogPlatformModel.BulkProductJob;
};
type ValidateProductGlobalTemplateParam = {
    /**
     * - An `item_type` defines the type of item. The
     * default value is standard.
     */
    itemType?: string;
    /**
     * - This specification determines the schema type to
     * be retrieved. When set to true, it will return the schema for bulk data;
     * when set to false, it will provide the schema for a single product. The
     * default value is false.
     */
    bulk?: boolean;
};
type ValidateProductTemplateParam = {
    /**
     * - A `slug` is a unique identifier for a particular template.
     */
    slug: string;
    /**
     * - An `item_type` defines the type of item. The
     * default value is standard.
     */
    itemType?: string;
    /**
     * - This specification determines the schema type to
     * be retrieved. When set to true, it will return the schema for bulk data;
     * when set to false, it will provide the schema for a single product. The
     * default value is false.
     */
    bulk?: boolean;
};
type ValidateProductTemplateSchemaParam = {
    /**
     * - An `item_type` defines the type of item. The
     * default value is standard.
     */
    itemType: string;
    /**
     * - Type of file template i.e if bulk
     */
    bulk: boolean;
};
type GetCompanyDetailParam = any;
type GetCompanyMetricsParam = any;
type GetInventoryExportParam = any;
type GetLocationTagsParam = any;
type GetMarketplacesParam = any;
type GetProductTagsParam = any;
type ListHSNCodesParam = any;
import CatalogPlatformModel = require("./CatalogPlatformModel");
