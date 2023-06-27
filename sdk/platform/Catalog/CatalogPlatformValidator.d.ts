export = CatalogPlatformValidator;
/**
 * @typedef addInventory
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} size - Size in which inventory is to be added.
 * @property {CatalogPlatformModel.InventoryRequest} body
 */
/**
 * @typedef allSizes
 * @property {number} itemId - Id of the product to be updated.
 */
/**
 * @typedef bulkHsnCode
 * @property {CatalogPlatformModel.BulkHsnUpsert} body
 */
/**
 * @typedef createBulkInventory
 * @property {string} batchId - Batch Id of the bulk create job.
 * @property {CatalogPlatformModel.InventoryBulkRequest} body
 */
/**
 * @typedef createBulkInventoryJob
 * @property {CatalogPlatformModel.BulkJob} body
 */
/**
 * @typedef createBulkProductUploadJob
 * @property {CatalogPlatformModel.BulkJob} body
 */
/**
 * @typedef createCategories
 * @property {CatalogPlatformModel.CategoryRequestBody} body
 */
/**
 * @typedef createDepartments
 * @property {CatalogPlatformModel.DepartmentCreateUpdate} body
 */
/**
 * @typedef createInventoryExport
 * @property {CatalogPlatformModel.InventoryCreateRequest} body
 */
/**
 * @typedef createInventoryExportJob
 * @property {CatalogPlatformModel.InventoryExportRequest} body
 */
/**
 * @typedef createMarketplaceOptin
 * @property {string} marketplace - The marketplace for which the detail needs
 *   to be retrieved.
 * @property {CatalogPlatformModel.OptInPostRequest} body
 */
/**
 * @typedef createProduct
 * @property {CatalogPlatformModel.ProductCreateUpdateSchemaV2} body
 */
/**
 * @typedef createProductAssetsInBulk
 * @property {CatalogPlatformModel.ProductBulkAssets} body
 */
/**
 * @typedef createProductBundle
 * @property {CatalogPlatformModel.ProductBundleRequest} body
 */
/**
 * @typedef createProductExportJob
 * @property {CatalogPlatformModel.ProductTemplateDownloadsExport} body
 */
/**
 * @typedef createProductsInBulk
 * @property {string} batchId - Batch Id in which assets to be uploaded.
 * @property {CatalogPlatformModel.BulkProductRequest} body
 */
/**
 * @typedef createSizeGuide
 * @property {CatalogPlatformModel.ValidateSizeGuide} body
 */
/**
 * @typedef deleteBulkInventoryJob
 * @property {string} batchId - Batch Id of the bulk delete job.
 */
/**
 * @typedef deleteInventory
 * @property {string} size - Size that is to be deleted.
 * @property {number} itemId - Id of the product associated with Inventory to be deleted.
 * @property {number} locationId - Location ID of store of which inventory is to
 *   be deleted.
 */
/**
 * @typedef deleteProduct
 * @property {number} itemId - Id of the product to be updated.
 */
/**
 * @typedef deleteProductBulkJob
 * @property {number} batchId - Batch Id of the bulk product job to be deleted.
 */
/**
 * @typedef deleteRealtimeInventory
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} sellerIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 */
/**
 * @typedef deleteSize
 * @property {number} itemId - Item Id of the product associated with size to be deleted.
 * @property {string} size - Size to be deleted.
 */
/**
 * @typedef downloadInventoryTemplateView
 * @property {string} itemType - An `item_type` defines the type of item.
 */
/**
 * @typedef downloadProductTemplateViews
 * @property {string} slug - A `slug` is a unique identifier for a particular template.
 */
/**
 * @typedef editProduct
 * @property {number} itemId - Id of the product to be updated.
 * @property {CatalogPlatformModel.ProductCreateUpdateSchemaV2} body
 */
/**
 * @typedef exportInventoryConfig
 * @property {string} [filterType] - Filter type from any one of ['brand',
 *   'store', 'type']
 */
/**
 * @typedef getAllProductHsnCodes
 * @property {number} [pageNo] - Page no
 * @property {number} [pageSize] - Page size
 * @property {string} [q] - Search using hsn code, description, reporting_hsn
 * @property {string} [type] - Search using type
 */
/**
 * @typedef getCategoryData
 * @property {string} uid - Category unique id
 */
/**
 * @typedef getCompanyBrandDetail
 * @property {boolean} [isActive] - The is_active status for the optin id.
 * @property {string} [q] - The search value to filter the list.
 * @property {number} [pageNo] - The number of page for the company id.
 * @property {number} [pageSize] - Number of records that can be seen on the
 *   page for the company id.
 * @property {string} [marketplace] - The marketplace platform associated with
 *   the company id.
 */
/** @typedef getCompanyDetail */
/** @typedef getCompanyMetrics */
/**
 * @typedef getDepartmentData
 * @property {string} uid - A `uid` is a unique identifier of a department.
 */
/**
 * @typedef getGenderAttribute
 * @property {string} attributeSlug - Slug of the attribute for which you want
 *   to view the genders
 */
/**
 * @typedef getHsnCode
 * @property {string} id - Unique id
 */
/**
 * @typedef getInventories
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
 * @typedef getInventoryBulkUploadHistory
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef getInventoryBySize
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
 * @typedef getInventoryBySizeIdentifier
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
/** @typedef getInventoryExport */
/** @typedef getMarketplaceOptinDetail */
/**
 * @typedef getOptimalLocations
 * @property {CatalogPlatformModel.AssignStore} body
 */
/**
 * @typedef getProduct
 * @property {number} itemId - Item Id of the product.
 * @property {number} [brandUid] - Brand Id of the product.
 * @property {string} [itemCode] - Item code of the product.
 */
/**
 * @typedef getProductAssetsInBulk
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef getProductAttributes
 * @property {string} category - It is the name of the l3 cateogry
 * @property {boolean} [filter] - If true, returns filtered values, else returns
 *   all the attributes
 */
/**
 * @typedef getProductBulkUploadHistory
 * @property {string} [search] - Search string to filter the results by batch id
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef getProductBundle
 * @property {string} [q] - A search string that is searched with product bundle name.
 * @property {string[]} [slug] - Slugs of bundles to be retrieved.
 */
/**
 * @typedef getProductBundleDetail
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to retrieve.
 */
/**
 * @typedef getProductExportJobs
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
 * @typedef getProductSize
 * @property {string} [itemCode] - Item code of the product size.
 * @property {number} itemId - Item Id of the product size.
 * @property {number} [brandUid] - Brand Id of the product size.
 * @property {number} [uid] - Id of the product size.
 */
/** @typedef getProductTags */
/** @typedef getProductValidation */
/**
 * @typedef getProducts
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
 * @typedef getSellerInsights
 * @property {string} sellerAppId - Id of the seller application which is
 *   serving the invetory/catalog of the company
 */
/**
 * @typedef getSingleProductHSNCode
 * @property {string} reportingHsn - Reporting_hsn
 */
/**
 * @typedef getSizeGuide
 * @property {string} id - Id of the size guide to be viewed.
 */
/**
 * @typedef getSizeGuides
 * @property {boolean} [active] - Filter size guide on basis of active, in-active
 * @property {string} [q] - Query that is to be searched.
 * @property {string} [tag] - To filter size guide on basis of tag.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 */
/**
 * @typedef getStoreDetail
 * @property {string} [q] - The search related the store for the company id.
 * @property {number} [pageNo] - The number of page for the company id.
 * @property {number} [pageSize] - Number of records that can be seen on the
 *   page for the company id.
 */
/**
 * @typedef getVariantsOfProducts
 * @property {number} itemId - Get list of variants of item Id
 * @property {string} variantType - Get multiple products filtered by variant type
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 */
/**
 * @typedef listCategories
 * @property {string} [level] - Get category for multiple levels
 * @property {string} [departments] - Get category for multiple departments filtered
 * @property {string} [q] - Get multiple categories filtered by search string
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 */
/**
 * @typedef listDepartmentsData
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
/** @typedef listHSNCodes */
/**
 * @typedef listInventoryExport
 * @property {string} [status] - Status of the export job.
 * @property {string} [fromDate] - Inventory export history filtered according
 *   to from_date.
 * @property {string} [toDate] - Inventory export history filtered according to from_date.
 * @property {string} [q] - Inventory export history filtered according to task ID.
 */
/**
 * @typedef listProductTemplate
 * @property {string} department - A `department` is the name of a particular department.
 */
/**
 * @typedef listProductTemplateCategories
 * @property {string} departments - A `department` is name of a departments
 *   whose category needs to be listed. Can specify multiple departments.
 * @property {string} itemType - An `item_type` is the type of item, it can be
 *   `set`, `standard`, `digital`, etc.
 */
/** @typedef listProductTemplateExportDetails */
/**
 * @typedef listTemplateBrandTypeValues
 * @property {string} filter - A `filter` is the unique identifier of the type
 *   of value required.
 * @property {string} [templateTag] - A `template_tag` is the identifier of the
 *   type of template required.
 * @property {string} [itemType] - A `item_type` is the identifier of the type
 *   of template required.
 */
/**
 * @typedef updateCategory
 * @property {string} uid - Category unique id
 * @property {CatalogPlatformModel.CategoryRequestBody} body
 */
/**
 * @typedef updateDepartment
 * @property {string} uid - A `uid` is a unique identifier of a department.
 * @property {CatalogPlatformModel.DepartmentCreateUpdate} body
 */
/**
 * @typedef updateHsnCode
 * @property {string} id - Unique id
 * @property {CatalogPlatformModel.HsnUpsert} body
 */
/**
 * @typedef updateInventories
 * @property {CatalogPlatformModel.InventoryRequestSchemaV2} body
 */
/**
 * @typedef updateProductBundle
 * @property {string} id - A `id` is a unique identifier for a particular
 *   detail. Pass the `id` of the keywords which you want to delete.
 * @property {CatalogPlatformModel.ProductBundleUpdateRequest} body
 */
/**
 * @typedef updateRealtimeInventory
 * @property {number} itemId - Item code of the product of which size is to be get.
 * @property {string} sellerIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 * @property {CatalogPlatformModel.InventoryRequestSchemaV2} body
 */
/**
 * @typedef updateSizeGuide
 * @property {string} id - Mongo id of the size guide to be edited
 * @property {CatalogPlatformModel.ValidateSizeGuide} body
 */
/**
 * @typedef uploadBulkProducts
 * @property {string} department - Department of the product to be uploaded.
 * @property {string} productType - Product type of the product to be uploaded
 *   i.e. set, standard , digital.
 * @property {CatalogPlatformModel.BulkJob} body
 */
/**
 * @typedef validateProductTemplate
 * @property {string} slug - A `slug` is a unique identifier for a particular template.
 */
/**
 * @typedef validateProductTemplateSchema
 * @property {string} itemType - An `item_type` defines the type of item. The
 *   default value is standard.
 */
declare class CatalogPlatformValidator {
}
declare namespace CatalogPlatformValidator {
    export { addInventory, allSizes, bulkHsnCode, createBulkInventory, createBulkInventoryJob, createBulkProductUploadJob, createCategories, createDepartments, createInventoryExport, createInventoryExportJob, createMarketplaceOptin, createProduct, createProductAssetsInBulk, createProductBundle, createProductExportJob, createProductsInBulk, createSizeGuide, deleteBulkInventoryJob, deleteInventory, deleteProduct, deleteProductBulkJob, deleteRealtimeInventory, deleteSize, downloadInventoryTemplateView, downloadProductTemplateViews, editProduct, exportInventoryConfig, getAllProductHsnCodes, getCategoryData, getCompanyBrandDetail, getCompanyDetail, getCompanyMetrics, getDepartmentData, getGenderAttribute, getHsnCode, getInventories, getInventoryBulkUploadHistory, getInventoryBySize, getInventoryBySizeIdentifier, getInventoryExport, getMarketplaceOptinDetail, getOptimalLocations, getProduct, getProductAssetsInBulk, getProductAttributes, getProductBulkUploadHistory, getProductBundle, getProductBundleDetail, getProductExportJobs, getProductSize, getProductTags, getProductValidation, getProducts, getSellerInsights, getSingleProductHSNCode, getSizeGuide, getSizeGuides, getStoreDetail, getVariantsOfProducts, listCategories, listDepartmentsData, listHSNCodes, listInventoryExport, listProductTemplate, listProductTemplateCategories, listProductTemplateExportDetails, listTemplateBrandTypeValues, updateCategory, updateDepartment, updateHsnCode, updateInventories, updateProductBundle, updateRealtimeInventory, updateSizeGuide, uploadBulkProducts, validateProductTemplate, validateProductTemplateSchema };
}
/** @returns {addInventory} */
declare function addInventory(): addInventory;
type addInventory = {
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
/** @returns {allSizes} */
declare function allSizes(): allSizes;
type allSizes = {
    /**
     * - Id of the product to be updated.
     */
    itemId: number;
};
/** @returns {bulkHsnCode} */
declare function bulkHsnCode(): bulkHsnCode;
type bulkHsnCode = {
    body: CatalogPlatformModel.BulkHsnUpsert;
};
/** @returns {createBulkInventory} */
declare function createBulkInventory(): createBulkInventory;
type createBulkInventory = {
    /**
     * - Batch Id of the bulk create job.
     */
    batchId: string;
    body: CatalogPlatformModel.InventoryBulkRequest;
};
/** @returns {createBulkInventoryJob} */
declare function createBulkInventoryJob(): createBulkInventoryJob;
type createBulkInventoryJob = {
    body: CatalogPlatformModel.BulkJob;
};
/** @returns {createBulkProductUploadJob} */
declare function createBulkProductUploadJob(): createBulkProductUploadJob;
type createBulkProductUploadJob = {
    body: CatalogPlatformModel.BulkJob;
};
/** @returns {createCategories} */
declare function createCategories(): createCategories;
type createCategories = {
    body: CatalogPlatformModel.CategoryRequestBody;
};
/** @returns {createDepartments} */
declare function createDepartments(): createDepartments;
type createDepartments = {
    body: CatalogPlatformModel.DepartmentCreateUpdate;
};
/** @returns {createInventoryExport} */
declare function createInventoryExport(): createInventoryExport;
type createInventoryExport = {
    body: CatalogPlatformModel.InventoryCreateRequest;
};
/** @returns {createInventoryExportJob} */
declare function createInventoryExportJob(): createInventoryExportJob;
type createInventoryExportJob = {
    body: CatalogPlatformModel.InventoryExportRequest;
};
/** @returns {createMarketplaceOptin} */
declare function createMarketplaceOptin(): createMarketplaceOptin;
type createMarketplaceOptin = {
    /**
     * - The marketplace for which the detail needs
     * to be retrieved.
     */
    marketplace: string;
    body: CatalogPlatformModel.OptInPostRequest;
};
/** @returns {createProduct} */
declare function createProduct(): createProduct;
type createProduct = {
    body: CatalogPlatformModel.ProductCreateUpdateSchemaV2;
};
/** @returns {createProductAssetsInBulk} */
declare function createProductAssetsInBulk(): createProductAssetsInBulk;
type createProductAssetsInBulk = {
    body: CatalogPlatformModel.ProductBulkAssets;
};
/** @returns {createProductBundle} */
declare function createProductBundle(): createProductBundle;
type createProductBundle = {
    body: CatalogPlatformModel.ProductBundleRequest;
};
/** @returns {createProductExportJob} */
declare function createProductExportJob(): createProductExportJob;
type createProductExportJob = {
    body: CatalogPlatformModel.ProductTemplateDownloadsExport;
};
/** @returns {createProductsInBulk} */
declare function createProductsInBulk(): createProductsInBulk;
type createProductsInBulk = {
    /**
     * - Batch Id in which assets to be uploaded.
     */
    batchId: string;
    body: CatalogPlatformModel.BulkProductRequest;
};
/** @returns {createSizeGuide} */
declare function createSizeGuide(): createSizeGuide;
type createSizeGuide = {
    body: CatalogPlatformModel.ValidateSizeGuide;
};
/** @returns {deleteBulkInventoryJob} */
declare function deleteBulkInventoryJob(): deleteBulkInventoryJob;
type deleteBulkInventoryJob = {
    /**
     * - Batch Id of the bulk delete job.
     */
    batchId: string;
};
/** @returns {deleteInventory} */
declare function deleteInventory(): deleteInventory;
type deleteInventory = {
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
/** @returns {deleteProduct} */
declare function deleteProduct(): deleteProduct;
type deleteProduct = {
    /**
     * - Id of the product to be updated.
     */
    itemId: number;
};
/** @returns {deleteProductBulkJob} */
declare function deleteProductBulkJob(): deleteProductBulkJob;
type deleteProductBulkJob = {
    /**
     * - Batch Id of the bulk product job to be deleted.
     */
    batchId: number;
};
/** @returns {deleteRealtimeInventory} */
declare function deleteRealtimeInventory(): deleteRealtimeInventory;
type deleteRealtimeInventory = {
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
/** @returns {deleteSize} */
declare function deleteSize(): deleteSize;
type deleteSize = {
    /**
     * - Item Id of the product associated with size to be deleted.
     */
    itemId: number;
    /**
     * - Size to be deleted.
     */
    size: string;
};
/** @returns {downloadInventoryTemplateView} */
declare function downloadInventoryTemplateView(): downloadInventoryTemplateView;
type downloadInventoryTemplateView = {
    /**
     * - An `item_type` defines the type of item.
     */
    itemType: string;
};
/** @returns {downloadProductTemplateViews} */
declare function downloadProductTemplateViews(): downloadProductTemplateViews;
type downloadProductTemplateViews = {
    /**
     * - A `slug` is a unique identifier for a particular template.
     */
    slug: string;
};
/** @returns {editProduct} */
declare function editProduct(): editProduct;
type editProduct = {
    /**
     * - Id of the product to be updated.
     */
    itemId: number;
    body: CatalogPlatformModel.ProductCreateUpdateSchemaV2;
};
/** @returns {exportInventoryConfig} */
declare function exportInventoryConfig(): exportInventoryConfig;
type exportInventoryConfig = {
    /**
     * - Filter type from any one of ['brand',
     * 'store', 'type']
     */
    filterType?: string;
};
/** @returns {getAllProductHsnCodes} */
declare function getAllProductHsnCodes(): getAllProductHsnCodes;
type getAllProductHsnCodes = {
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
/** @returns {getCategoryData} */
declare function getCategoryData(): getCategoryData;
type getCategoryData = {
    /**
     * - Category unique id
     */
    uid: string;
};
/** @returns {getCompanyBrandDetail} */
declare function getCompanyBrandDetail(): getCompanyBrandDetail;
type getCompanyBrandDetail = {
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
/** @returns {getCompanyDetail} */
declare function getCompanyDetail(): any;
type getCompanyDetail = any;
/** @returns {getCompanyMetrics} */
declare function getCompanyMetrics(): any;
type getCompanyMetrics = any;
/** @returns {getDepartmentData} */
declare function getDepartmentData(): getDepartmentData;
type getDepartmentData = {
    /**
     * - A `uid` is a unique identifier of a department.
     */
    uid: string;
};
/** @returns {getGenderAttribute} */
declare function getGenderAttribute(): getGenderAttribute;
type getGenderAttribute = {
    /**
     * - Slug of the attribute for which you want
     * to view the genders
     */
    attributeSlug: string;
};
/** @returns {getHsnCode} */
declare function getHsnCode(): getHsnCode;
type getHsnCode = {
    /**
     * - Unique id
     */
    id: string;
};
/** @returns {getInventories} */
declare function getInventories(): getInventories;
type getInventories = {
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
/** @returns {getInventoryBulkUploadHistory} */
declare function getInventoryBulkUploadHistory(): getInventoryBulkUploadHistory;
type getInventoryBulkUploadHistory = {
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
/** @returns {getInventoryBySize} */
declare function getInventoryBySize(): getInventoryBySize;
type getInventoryBySize = {
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
/** @returns {getInventoryBySizeIdentifier} */
declare function getInventoryBySizeIdentifier(): getInventoryBySizeIdentifier;
type getInventoryBySizeIdentifier = {
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
/** @returns {getInventoryExport} */
declare function getInventoryExport(): any;
type getInventoryExport = any;
/** @returns {getMarketplaceOptinDetail} */
declare function getMarketplaceOptinDetail(): any;
type getMarketplaceOptinDetail = any;
/** @returns {getOptimalLocations} */
declare function getOptimalLocations(): getOptimalLocations;
type getOptimalLocations = {
    body: CatalogPlatformModel.AssignStore;
};
/** @returns {getProduct} */
declare function getProduct(): getProduct;
type getProduct = {
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
/** @returns {getProductAssetsInBulk} */
declare function getProductAssetsInBulk(): getProductAssetsInBulk;
type getProductAssetsInBulk = {
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
/** @returns {getProductAttributes} */
declare function getProductAttributes(): getProductAttributes;
type getProductAttributes = {
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
/** @returns {getProductBulkUploadHistory} */
declare function getProductBulkUploadHistory(): getProductBulkUploadHistory;
type getProductBulkUploadHistory = {
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
/** @returns {getProductBundle} */
declare function getProductBundle(): getProductBundle;
type getProductBundle = {
    /**
     * - A search string that is searched with product bundle name.
     */
    q?: string;
    /**
     * - Slugs of bundles to be retrieved.
     */
    slug?: string[];
};
/** @returns {getProductBundleDetail} */
declare function getProductBundleDetail(): getProductBundleDetail;
type getProductBundleDetail = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to retrieve.
     */
    id: string;
};
/** @returns {getProductExportJobs} */
declare function getProductExportJobs(): getProductExportJobs;
type getProductExportJobs = {
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
/** @returns {getProductSize} */
declare function getProductSize(): getProductSize;
type getProductSize = {
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
/** @returns {getProductTags} */
declare function getProductTags(): any;
type getProductTags = any;
/** @returns {getProductValidation} */
declare function getProductValidation(): any;
type getProductValidation = any;
/** @returns {getProducts} */
declare function getProducts(): getProducts;
type getProducts = {
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
/** @returns {getSellerInsights} */
declare function getSellerInsights(): getSellerInsights;
type getSellerInsights = {
    /**
     * - Id of the seller application which is
     * serving the invetory/catalog of the company
     */
    sellerAppId: string;
};
/** @returns {getSingleProductHSNCode} */
declare function getSingleProductHSNCode(): getSingleProductHSNCode;
type getSingleProductHSNCode = {
    /**
     * - Reporting_hsn
     */
    reportingHsn: string;
};
/** @returns {getSizeGuide} */
declare function getSizeGuide(): getSizeGuide;
type getSizeGuide = {
    /**
     * - Id of the size guide to be viewed.
     */
    id: string;
};
/** @returns {getSizeGuides} */
declare function getSizeGuides(): getSizeGuides;
type getSizeGuides = {
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
/** @returns {getStoreDetail} */
declare function getStoreDetail(): getStoreDetail;
type getStoreDetail = {
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
/** @returns {getVariantsOfProducts} */
declare function getVariantsOfProducts(): getVariantsOfProducts;
type getVariantsOfProducts = {
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
/** @returns {listCategories} */
declare function listCategories(): listCategories;
type listCategories = {
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
/** @returns {listDepartmentsData} */
declare function listDepartmentsData(): listDepartmentsData;
type listDepartmentsData = {
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
/** @returns {listHSNCodes} */
declare function listHSNCodes(): any;
type listHSNCodes = any;
/** @returns {listInventoryExport} */
declare function listInventoryExport(): listInventoryExport;
type listInventoryExport = {
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
/** @returns {listProductTemplate} */
declare function listProductTemplate(): listProductTemplate;
type listProductTemplate = {
    /**
     * - A `department` is the name of a particular department.
     */
    department: string;
};
/** @returns {listProductTemplateCategories} */
declare function listProductTemplateCategories(): listProductTemplateCategories;
type listProductTemplateCategories = {
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
/** @returns {listProductTemplateExportDetails} */
declare function listProductTemplateExportDetails(): any;
type listProductTemplateExportDetails = any;
/** @returns {listTemplateBrandTypeValues} */
declare function listTemplateBrandTypeValues(): listTemplateBrandTypeValues;
type listTemplateBrandTypeValues = {
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
/** @returns {updateCategory} */
declare function updateCategory(): updateCategory;
type updateCategory = {
    /**
     * - Category unique id
     */
    uid: string;
    body: CatalogPlatformModel.CategoryRequestBody;
};
/** @returns {updateDepartment} */
declare function updateDepartment(): updateDepartment;
type updateDepartment = {
    /**
     * - A `uid` is a unique identifier of a department.
     */
    uid: string;
    body: CatalogPlatformModel.DepartmentCreateUpdate;
};
/** @returns {updateHsnCode} */
declare function updateHsnCode(): updateHsnCode;
type updateHsnCode = {
    /**
     * - Unique id
     */
    id: string;
    body: CatalogPlatformModel.HsnUpsert;
};
/** @returns {updateInventories} */
declare function updateInventories(): updateInventories;
type updateInventories = {
    body: CatalogPlatformModel.InventoryRequestSchemaV2;
};
/** @returns {updateProductBundle} */
declare function updateProductBundle(): updateProductBundle;
type updateProductBundle = {
    /**
     * - A `id` is a unique identifier for a particular
     * detail. Pass the `id` of the keywords which you want to delete.
     */
    id: string;
    body: CatalogPlatformModel.ProductBundleUpdateRequest;
};
/** @returns {updateRealtimeInventory} */
declare function updateRealtimeInventory(): updateRealtimeInventory;
type updateRealtimeInventory = {
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
/** @returns {updateSizeGuide} */
declare function updateSizeGuide(): updateSizeGuide;
type updateSizeGuide = {
    /**
     * - Mongo id of the size guide to be edited
     */
    id: string;
    body: CatalogPlatformModel.ValidateSizeGuide;
};
/** @returns {uploadBulkProducts} */
declare function uploadBulkProducts(): uploadBulkProducts;
type uploadBulkProducts = {
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
/** @returns {validateProductTemplate} */
declare function validateProductTemplate(): validateProductTemplate;
type validateProductTemplate = {
    /**
     * - A `slug` is a unique identifier for a particular template.
     */
    slug: string;
};
/** @returns {validateProductTemplateSchema} */
declare function validateProductTemplateSchema(): validateProductTemplateSchema;
type validateProductTemplateSchema = {
    /**
     * - An `item_type` defines the type of item. The
     * default value is standard.
     */
    itemType: string;
};
import CatalogPlatformModel = require("./CatalogPlatformModel");
