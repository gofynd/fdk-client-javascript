export = CatalogPlatformValidator;
/**
 * @typedef AddInventoryParam
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} size - Size in which inventory is to be added.
 * @property {CatalogPlatformModel.InventoryRequest} body
 */
/**
 * @typedef AllSizesParam
 * @property {number} itemId - Id of the product to be updated.
 */
/**
 * @typedef BulkHsnCodeParam
 * @property {CatalogPlatformModel.BulkHsnUpsert} body
 */
/**
 * @typedef CreateBulkInventoryParam
 * @property {string} batchId - Batch Id of the bulk create job.
 * @property {CatalogPlatformModel.InventoryBulkRequest} body
 */
/**
 * @typedef CreateBulkInventoryJobParam
 * @property {CatalogPlatformModel.BulkJob} body
 */
/**
 * @typedef CreateBulkProductUploadJobParam
 * @property {CatalogPlatformModel.BulkJob} body
 */
/**
 * @typedef CreateCategoriesParam
 * @property {CatalogPlatformModel.CategoryRequestBody} body
 */
/**
 * @typedef CreateDepartmentsParam
 * @property {CatalogPlatformModel.DepartmentCreateUpdate} body
 */
/**
 * @typedef CreateInventoryExportParam
 * @property {CatalogPlatformModel.InventoryCreateRequest} body
 */
/**
 * @typedef CreateInventoryExportJobParam
 * @property {CatalogPlatformModel.InventoryExportRequest} body
 */
/**
 * @typedef CreateMarketplaceOptinParam
 * @property {string} marketplace - The marketplace for which the detail needs
 *   to be retrieved.
 * @property {CatalogPlatformModel.OptInPostRequest} body
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
 * @property {CatalogPlatformModel.ProductBundleRequest} body
 */
/**
 * @typedef CreateProductExportJobParam
 * @property {CatalogPlatformModel.ProductTemplateDownloadsExport} body
 */
/**
 * @typedef CreateProductsInBulkParam
 * @property {string} batchId - Batch Id in which assets to be uploaded.
 * @property {CatalogPlatformModel.BulkProductRequest} body
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
 * @typedef DeleteInventoryParam
 * @property {string} size - Size that is to be deleted.
 * @property {number} itemId - Id of the product associated with Inventory to be deleted.
 * @property {number} locationId - Location ID of store of which inventory is to
 *   be deleted.
 */
/**
 * @typedef DeleteProductParam
 * @property {number} itemId - Id of the product to be updated.
 */
/**
 * @typedef DeleteProductBulkJobParam
 * @property {number} batchId - Batch Id of the bulk product job to be deleted.
 */
/**
 * @typedef DeleteRealtimeInventoryParam
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} sellerIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 */
/**
 * @typedef DeleteSizeParam
 * @property {number} itemId - Item Id of the product associated with size to be deleted.
 * @property {string} size - Size to be deleted.
 */
/**
 * @typedef DownloadInventoryTemplateViewParam
 * @property {string} itemType - An `item_type` defines the type of item.
 */
/**
 * @typedef DownloadProductTemplateViewsParam
 * @property {string} slug - A `slug` is a unique identifier for a particular template.
 */
/**
 * @typedef EditProductParam
 * @property {number} itemId - Id of the product to be updated.
 * @property {CatalogPlatformModel.ProductCreateUpdateSchemaV2} body
 */
/**
 * @typedef ExportInventoryConfigParam
 * @property {string} [filterType] - Filter type from any one of ['brand',
 *   'store', 'type']
 */
/**
 * @typedef GetAllProductHsnCodesParam
 * @property {number} [pageNo] - Page no
 * @property {number} [pageSize] - Page size
 * @property {string} [q] - Search using hsn code, description, reporting_hsn
 * @property {string} [type] - Search using type
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
/** @typedef GetCompanyDetailParam */
/** @typedef GetCompanyMetricsParam */
/**
 * @typedef GetDepartmentDataParam
 * @property {string} uid - A `uid` is a unique identifier of a department.
 */
/**
 * @typedef GetGenderAttributeParam
 * @property {string} attributeSlug - Slug of the attribute for which you want
 *   to view the genders
 */
/**
 * @typedef GetHsnCodeParam
 * @property {string} id - Unique id
 */
/**
 * @typedef GetInventoriesParam
 * @property {string} [itemId] - Item code of the product of which size is to be get.
 * @property {string} [size] - Size of which inventory is to get.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search with help of store code.
 * @property {boolean} [sellable] - Filter on whether product is in stock or not.
 * @property {number[]} [storeIds] - The Store Id of products to fetch inventory.
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
/** @typedef GetMarketplaceOptinDetailParam */
/**
 * @typedef GetOptimalLocationsParam
 * @property {CatalogPlatformModel.AssignStore} body
 */
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
 */
/**
 * @typedef GetProductBundleDetailParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to retrieve.
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
 */
/**
 * @typedef GetProductSizeParam
 * @property {string} [itemCode] - Item code of the product size.
 * @property {number} itemId - Item Id of the product size.
 * @property {number} [brandUid] - Brand Id of the product size.
 * @property {number} [uid] - Id of the product size.
 */
/** @typedef GetProductTagsParam */
/** @typedef GetProductValidationParam */
/**
 * @typedef GetProductsParam
 * @property {number[]} [brandIds] - Get multiple products filtered by Brand Ids
 * @property {number[]} [categoryIds] - Get multiple products filtered by Category Ids
 * @property {number[]} [itemIds] - Get multiple products filtered by Item Ids
 * @property {number[]} [departmentIds] - Get multiple products filtered by Department Ids
 * @property {string[]} [itemCode] - Get multiple products filtered by Item Code
 * @property {string} [q] - Get multiple products filtered by q string
 * @property {string[]} [tags] - Get multiple products filtered by tags
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
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
 * @property {string} [departments] - Get category for multiple departments filtered
 * @property {string} [q] - Get multiple categories filtered by search string
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
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
 */
/** @typedef ListHSNCodesParam */
/**
 * @typedef ListInventoryExportParam
 * @property {string} [status] - Status of the export job.
 * @property {string} [fromDate] - Inventory export history filtered according
 *   to from_date.
 * @property {string} [toDate] - Inventory export history filtered according to from_date.
 * @property {string} [q] - Inventory export history filtered according to task ID.
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
 */
/** @typedef ListProductTemplateExportDetailsParam */
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
 * @typedef UpdateCategoryParam
 * @property {string} uid - Category unique id
 * @property {CatalogPlatformModel.CategoryRequestBody} body
 */
/**
 * @typedef UpdateDepartmentParam
 * @property {string} uid - A `uid` is a unique identifier of a department.
 * @property {CatalogPlatformModel.DepartmentCreateUpdate} body
 */
/**
 * @typedef UpdateHsnCodeParam
 * @property {string} id - Unique id
 * @property {CatalogPlatformModel.HsnUpsert} body
 */
/**
 * @typedef UpdateInventoriesParam
 * @property {CatalogPlatformModel.InventoryRequestSchemaV2} body
 */
/**
 * @typedef UpdateProductBundleParam
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 * @property {CatalogPlatformModel.ProductBundleUpdateRequest} body
 */
/**
 * @typedef UpdateRealtimeInventoryParam
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} sellerIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 * @property {CatalogPlatformModel.InventoryRequestSchemaV2} body
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
 * @property {CatalogPlatformModel.BulkJob} body
 */
/**
 * @typedef ValidateProductTemplateParam
 * @property {string} slug - A `slug` is a unique identifier for a particular template.
 */
/**
 * @typedef ValidateProductTemplateSchemaParam
 * @property {string} itemType - An `item_type` defines the type of item. The
 *   default value is standard.
 */
declare class CatalogPlatformValidator {
    /** @returns {addInventory} */
    static addInventory(): addInventory;
    /** @returns {allSizes} */
    static allSizes(): allSizes;
    /** @returns {bulkHsnCode} */
    static bulkHsnCode(): bulkHsnCode;
    /** @returns {createBulkInventory} */
    static createBulkInventory(): createBulkInventory;
    /** @returns {createBulkInventoryJob} */
    static createBulkInventoryJob(): createBulkInventoryJob;
    /** @returns {createBulkProductUploadJob} */
    static createBulkProductUploadJob(): createBulkProductUploadJob;
    /** @returns {createCategories} */
    static createCategories(): createCategories;
    /** @returns {createDepartments} */
    static createDepartments(): createDepartments;
    /** @returns {createInventoryExport} */
    static createInventoryExport(): createInventoryExport;
    /** @returns {createInventoryExportJob} */
    static createInventoryExportJob(): createInventoryExportJob;
    /** @returns {createMarketplaceOptin} */
    static createMarketplaceOptin(): createMarketplaceOptin;
    /** @returns {createProduct} */
    static createProduct(): createProduct;
    /** @returns {createProductAssetsInBulk} */
    static createProductAssetsInBulk(): createProductAssetsInBulk;
    /** @returns {createProductBundle} */
    static createProductBundle(): createProductBundle;
    /** @returns {createProductExportJob} */
    static createProductExportJob(): createProductExportJob;
    /** @returns {createProductsInBulk} */
    static createProductsInBulk(): createProductsInBulk;
    /** @returns {createSizeGuide} */
    static createSizeGuide(): createSizeGuide;
    /** @returns {deleteBulkInventoryJob} */
    static deleteBulkInventoryJob(): deleteBulkInventoryJob;
    /** @returns {deleteInventory} */
    static deleteInventory(): deleteInventory;
    /** @returns {deleteProduct} */
    static deleteProduct(): deleteProduct;
    /** @returns {deleteProductBulkJob} */
    static deleteProductBulkJob(): deleteProductBulkJob;
    /** @returns {deleteRealtimeInventory} */
    static deleteRealtimeInventory(): deleteRealtimeInventory;
    /** @returns {deleteSize} */
    static deleteSize(): deleteSize;
    /** @returns {downloadInventoryTemplateView} */
    static downloadInventoryTemplateView(): downloadInventoryTemplateView;
    /** @returns {downloadProductTemplateViews} */
    static downloadProductTemplateViews(): downloadProductTemplateViews;
    /** @returns {editProduct} */
    static editProduct(): editProduct;
    /** @returns {exportInventoryConfig} */
    static exportInventoryConfig(): exportInventoryConfig;
    /** @returns {getAllProductHsnCodes} */
    static getAllProductHsnCodes(): getAllProductHsnCodes;
    /** @returns {getCategoryData} */
    static getCategoryData(): getCategoryData;
    /** @returns {getCompanyBrandDetail} */
    static getCompanyBrandDetail(): getCompanyBrandDetail;
    /** @returns {getCompanyDetail} */
    static getCompanyDetail(): getCompanyDetail;
    /** @returns {getCompanyMetrics} */
    static getCompanyMetrics(): getCompanyMetrics;
    /** @returns {getDepartmentData} */
    static getDepartmentData(): getDepartmentData;
    /** @returns {getGenderAttribute} */
    static getGenderAttribute(): getGenderAttribute;
    /** @returns {getHsnCode} */
    static getHsnCode(): getHsnCode;
    /** @returns {getInventories} */
    static getInventories(): getInventories;
    /** @returns {getInventoryBulkUploadHistory} */
    static getInventoryBulkUploadHistory(): getInventoryBulkUploadHistory;
    /** @returns {getInventoryBySize} */
    static getInventoryBySize(): getInventoryBySize;
    /** @returns {getInventoryBySizeIdentifier} */
    static getInventoryBySizeIdentifier(): getInventoryBySizeIdentifier;
    /** @returns {getInventoryExport} */
    static getInventoryExport(): getInventoryExport;
    /** @returns {getMarketplaceOptinDetail} */
    static getMarketplaceOptinDetail(): getMarketplaceOptinDetail;
    /** @returns {getOptimalLocations} */
    static getOptimalLocations(): getOptimalLocations;
    /** @returns {getProduct} */
    static getProduct(): getProduct;
    /** @returns {getProductAssetsInBulk} */
    static getProductAssetsInBulk(): getProductAssetsInBulk;
    /** @returns {getProductAttributes} */
    static getProductAttributes(): getProductAttributes;
    /** @returns {getProductBulkUploadHistory} */
    static getProductBulkUploadHistory(): getProductBulkUploadHistory;
    /** @returns {getProductBundle} */
    static getProductBundle(): getProductBundle;
    /** @returns {getProductBundleDetail} */
    static getProductBundleDetail(): getProductBundleDetail;
    /** @returns {getProductExportJobs} */
    static getProductExportJobs(): getProductExportJobs;
    /** @returns {getProductSize} */
    static getProductSize(): getProductSize;
    /** @returns {getProductTags} */
    static getProductTags(): getProductTags;
    /** @returns {getProductValidation} */
    static getProductValidation(): getProductValidation;
    /** @returns {getProducts} */
    static getProducts(): getProducts;
    /** @returns {getSellerInsights} */
    static getSellerInsights(): getSellerInsights;
    /** @returns {getSingleProductHSNCode} */
    static getSingleProductHSNCode(): getSingleProductHSNCode;
    /** @returns {getSizeGuide} */
    static getSizeGuide(): getSizeGuide;
    /** @returns {getSizeGuides} */
    static getSizeGuides(): getSizeGuides;
    /** @returns {getStoreDetail} */
    static getStoreDetail(): getStoreDetail;
    /** @returns {getVariantsOfProducts} */
    static getVariantsOfProducts(): getVariantsOfProducts;
    /** @returns {listCategories} */
    static listCategories(): listCategories;
    /** @returns {listDepartmentsData} */
    static listDepartmentsData(): listDepartmentsData;
    /** @returns {listHSNCodes} */
    static listHSNCodes(): listHSNCodes;
    /** @returns {listInventoryExport} */
    static listInventoryExport(): listInventoryExport;
    /** @returns {listProductTemplate} */
    static listProductTemplate(): listProductTemplate;
    /** @returns {listProductTemplateCategories} */
    static listProductTemplateCategories(): listProductTemplateCategories;
    /** @returns {listProductTemplateExportDetails} */
    static listProductTemplateExportDetails(): listProductTemplateExportDetails;
    /** @returns {listTemplateBrandTypeValues} */
    static listTemplateBrandTypeValues(): listTemplateBrandTypeValues;
    /** @returns {updateCategory} */
    static updateCategory(): updateCategory;
    /** @returns {updateDepartment} */
    static updateDepartment(): updateDepartment;
    /** @returns {updateHsnCode} */
    static updateHsnCode(): updateHsnCode;
    /** @returns {updateInventories} */
    static updateInventories(): updateInventories;
    /** @returns {updateProductBundle} */
    static updateProductBundle(): updateProductBundle;
    /** @returns {updateRealtimeInventory} */
    static updateRealtimeInventory(): updateRealtimeInventory;
    /** @returns {updateSizeGuide} */
    static updateSizeGuide(): updateSizeGuide;
    /** @returns {uploadBulkProducts} */
    static uploadBulkProducts(): uploadBulkProducts;
    /** @returns {validateProductTemplate} */
    static validateProductTemplate(): validateProductTemplate;
    /** @returns {validateProductTemplateSchema} */
    static validateProductTemplateSchema(): validateProductTemplateSchema;
}
declare namespace CatalogPlatformValidator {
    export { AddInventoryParam, AllSizesParam, BulkHsnCodeParam, CreateBulkInventoryParam, CreateBulkInventoryJobParam, CreateBulkProductUploadJobParam, CreateCategoriesParam, CreateDepartmentsParam, CreateInventoryExportParam, CreateInventoryExportJobParam, CreateMarketplaceOptinParam, CreateProductParam, CreateProductAssetsInBulkParam, CreateProductBundleParam, CreateProductExportJobParam, CreateProductsInBulkParam, CreateSizeGuideParam, DeleteBulkInventoryJobParam, DeleteInventoryParam, DeleteProductParam, DeleteProductBulkJobParam, DeleteRealtimeInventoryParam, DeleteSizeParam, DownloadInventoryTemplateViewParam, DownloadProductTemplateViewsParam, EditProductParam, ExportInventoryConfigParam, GetAllProductHsnCodesParam, GetCategoryDataParam, GetCompanyBrandDetailParam, GetCompanyDetailParam, GetCompanyMetricsParam, GetDepartmentDataParam, GetGenderAttributeParam, GetHsnCodeParam, GetInventoriesParam, GetInventoryBulkUploadHistoryParam, GetInventoryBySizeParam, GetInventoryBySizeIdentifierParam, GetInventoryExportParam, GetMarketplaceOptinDetailParam, GetOptimalLocationsParam, GetProductParam, GetProductAssetsInBulkParam, GetProductAttributesParam, GetProductBulkUploadHistoryParam, GetProductBundleParam, GetProductBundleDetailParam, GetProductExportJobsParam, GetProductSizeParam, GetProductTagsParam, GetProductValidationParam, GetProductsParam, GetSellerInsightsParam, GetSingleProductHSNCodeParam, GetSizeGuideParam, GetSizeGuidesParam, GetStoreDetailParam, GetVariantsOfProductsParam, ListCategoriesParam, ListDepartmentsDataParam, ListHSNCodesParam, ListInventoryExportParam, ListProductTemplateParam, ListProductTemplateCategoriesParam, ListProductTemplateExportDetailsParam, ListTemplateBrandTypeValuesParam, UpdateCategoryParam, UpdateDepartmentParam, UpdateHsnCodeParam, UpdateInventoriesParam, UpdateProductBundleParam, UpdateRealtimeInventoryParam, UpdateSizeGuideParam, UploadBulkProductsParam, ValidateProductTemplateParam, ValidateProductTemplateSchemaParam };
}
type AddInventoryParam = {
    /**
     * - Item code of the product of which size is to be get.
     */
    itemId: number;
    /**
     * - Size in which inventory is to be added.
     */
    size: string;
    body: CatalogPlatformModel.InventoryRequest;
};
type AllSizesParam = {
    /**
     * - Id of the product to be updated.
     */
    itemId: number;
};
type BulkHsnCodeParam = {
    body: CatalogPlatformModel.BulkHsnUpsert;
};
type CreateBulkInventoryParam = {
    /**
     * - Batch Id of the bulk create job.
     */
    batchId: string;
    body: CatalogPlatformModel.InventoryBulkRequest;
};
type CreateBulkInventoryJobParam = {
    body: CatalogPlatformModel.BulkJob;
};
type CreateBulkProductUploadJobParam = {
    body: CatalogPlatformModel.BulkJob;
};
type CreateCategoriesParam = {
    body: CatalogPlatformModel.CategoryRequestBody;
};
type CreateDepartmentsParam = {
    body: CatalogPlatformModel.DepartmentCreateUpdate;
};
type CreateInventoryExportParam = {
    body: CatalogPlatformModel.InventoryCreateRequest;
};
type CreateInventoryExportJobParam = {
    body: CatalogPlatformModel.InventoryExportRequest;
};
type CreateMarketplaceOptinParam = {
    /**
     * - The marketplace for which the detail needs
     * to be retrieved.
     */
    marketplace: string;
    body: CatalogPlatformModel.OptInPostRequest;
};
type CreateProductParam = {
    body: CatalogPlatformModel.ProductCreateUpdateSchemaV2;
};
type CreateProductAssetsInBulkParam = {
    body: CatalogPlatformModel.ProductBulkAssets;
};
type CreateProductBundleParam = {
    body: CatalogPlatformModel.ProductBundleRequest;
};
type CreateProductExportJobParam = {
    body: CatalogPlatformModel.ProductTemplateDownloadsExport;
};
type CreateProductsInBulkParam = {
    /**
     * - Batch Id in which assets to be uploaded.
     */
    batchId: string;
    body: CatalogPlatformModel.BulkProductRequest;
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
type DeleteInventoryParam = {
    /**
     * - Size that is to be deleted.
     */
    size: string;
    /**
     * - Id of the product associated with Inventory to be deleted.
     */
    itemId: number;
    /**
     * - Location ID of store of which inventory is to
     * be deleted.
     */
    locationId: number;
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
    batchId: number;
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
     * - An `item_type` defines the type of item.
     */
    itemType: string;
};
type DownloadProductTemplateViewsParam = {
    /**
     * - A `slug` is a unique identifier for a particular template.
     */
    slug: string;
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
     * - Filter type from any one of ['brand',
     * 'store', 'type']
     */
    filterType?: string;
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
type GetCompanyDetailParam = any;
type GetCompanyMetricsParam = any;
type GetDepartmentDataParam = {
    /**
     * - A `uid` is a unique identifier of a department.
     */
    uid: string;
};
type GetGenderAttributeParam = {
    /**
     * - Slug of the attribute for which you want
     * to view the genders
     */
    attributeSlug: string;
};
type GetHsnCodeParam = {
    /**
     * - Unique id
     */
    id: string;
};
type GetInventoriesParam = {
    /**
     * - Item code of the product of which size is to be get.
     */
    itemId?: string;
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
type GetInventoryExportParam = any;
type GetMarketplaceOptinDetailParam = any;
type GetOptimalLocationsParam = {
    body: CatalogPlatformModel.AssignStore;
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
};
type GetProductBundleDetailParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to retrieve.
     */
    id: string;
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
type GetProductTagsParam = any;
type GetProductValidationParam = any;
type GetProductsParam = {
    /**
     * - Get multiple products filtered by Brand Ids
     */
    brandIds?: number[];
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
    departments?: string;
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
};
type ListHSNCodesParam = any;
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
};
type ListProductTemplateExportDetailsParam = any;
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
type UpdateCategoryParam = {
    /**
     * - Category unique id
     */
    uid: string;
    body: CatalogPlatformModel.CategoryRequestBody;
};
type UpdateDepartmentParam = {
    /**
     * - A `uid` is a unique identifier of a department.
     */
    uid: string;
    body: CatalogPlatformModel.DepartmentCreateUpdate;
};
type UpdateHsnCodeParam = {
    /**
     * - Unique id
     */
    id: string;
    body: CatalogPlatformModel.HsnUpsert;
};
type UpdateInventoriesParam = {
    body: CatalogPlatformModel.InventoryRequestSchemaV2;
};
type UpdateProductBundleParam = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
    body: CatalogPlatformModel.ProductBundleUpdateRequest;
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
    body: CatalogPlatformModel.InventoryRequestSchemaV2;
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
    body: CatalogPlatformModel.BulkJob;
};
type ValidateProductTemplateParam = {
    /**
     * - A `slug` is a unique identifier for a particular template.
     */
    slug: string;
};
type ValidateProductTemplateSchemaParam = {
    /**
     * - An `item_type` defines the type of item. The
     * default value is standard.
     */
    itemType: string;
};
import CatalogPlatformModel = require("./CatalogPlatformModel");
