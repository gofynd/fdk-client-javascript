const Joi = require("joi");

const CatalogPlatformModel = require("./CatalogPlatformModel");

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

class CatalogPlatformValidator {
  /** @returns {addInventory} */
  static addInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.string().allow("").required(),
      body: CatalogPlatformModel.InventoryRequest().required(),
    }).required();
  }

  /** @returns {allSizes} */
  static allSizes() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  /** @returns {bulkHsnCode} */
  static bulkHsnCode() {
    return Joi.object({
      body: CatalogPlatformModel.BulkHsnUpsert().required(),
    }).required();
  }

  /** @returns {createBulkInventory} */
  static createBulkInventory() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.InventoryBulkRequest().required(),
    }).required();
  }

  /** @returns {createBulkInventoryJob} */
  static createBulkInventoryJob() {
    return Joi.object({
      body: CatalogPlatformModel.BulkJob().required(),
    }).required();
  }

  /** @returns {createBulkProductUploadJob} */
  static createBulkProductUploadJob() {
    return Joi.object({
      body: CatalogPlatformModel.BulkJob().required(),
    }).required();
  }

  /** @returns {createCategories} */
  static createCategories() {
    return Joi.object({
      body: CatalogPlatformModel.CategoryRequestBody().required(),
    }).required();
  }

  /** @returns {createDepartments} */
  static createDepartments() {
    return Joi.object({
      body: CatalogPlatformModel.DepartmentCreateUpdate().required(),
    }).required();
  }

  /** @returns {createInventoryExport} */
  static createInventoryExport() {
    return Joi.object({
      body: CatalogPlatformModel.InventoryCreateRequest().required(),
    }).required();
  }

  /** @returns {createInventoryExportJob} */
  static createInventoryExportJob() {
    return Joi.object({
      body: CatalogPlatformModel.InventoryExportRequest().required(),
    }).required();
  }

  /** @returns {createMarketplaceOptin} */
  static createMarketplaceOptin() {
    return Joi.object({
      marketplace: Joi.string().allow("").required(),
      body: CatalogPlatformModel.OptInPostRequest().required(),
    }).required();
  }

  /** @returns {createProduct} */
  static createProduct() {
    return Joi.object({
      body: CatalogPlatformModel.ProductCreateUpdateSchemaV2().required(),
    }).required();
  }

  /** @returns {createProductAssetsInBulk} */
  static createProductAssetsInBulk() {
    return Joi.object({
      body: CatalogPlatformModel.ProductBulkAssets().required(),
    }).required();
  }

  /** @returns {createProductBundle} */
  static createProductBundle() {
    return Joi.object({
      body: CatalogPlatformModel.ProductBundleRequest().required(),
    }).required();
  }

  /** @returns {createProductExportJob} */
  static createProductExportJob() {
    return Joi.object({
      body: CatalogPlatformModel.ProductTemplateDownloadsExport().required(),
    }).required();
  }

  /** @returns {createProductsInBulk} */
  static createProductsInBulk() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.BulkProductRequest().required(),
    }).required();
  }

  /** @returns {createSizeGuide} */
  static createSizeGuide() {
    return Joi.object({
      body: CatalogPlatformModel.ValidateSizeGuide().required(),
    }).required();
  }

  /** @returns {deleteBulkInventoryJob} */
  static deleteBulkInventoryJob() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteInventory} */
  static deleteInventory() {
    return Joi.object({
      size: Joi.string().allow("").required(),
      itemId: Joi.number().required(),
      locationId: Joi.number().required(),
    }).required();
  }

  /** @returns {deleteProduct} */
  static deleteProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  /** @returns {deleteProductBulkJob} */
  static deleteProductBulkJob() {
    return Joi.object({
      batchId: Joi.number().required(),
    }).required();
  }

  /** @returns {deleteRealtimeInventory} */
  static deleteRealtimeInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      sellerIdentifier: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteSize} */
  static deleteSize() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {downloadInventoryTemplateView} */
  static downloadInventoryTemplateView() {
    return Joi.object({
      itemType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {downloadProductTemplateViews} */
  static downloadProductTemplateViews() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {editProduct} */
  static editProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
      body: CatalogPlatformModel.ProductCreateUpdateSchemaV2().required(),
    }).required();
  }

  /** @returns {exportInventoryConfig} */
  static exportInventoryConfig() {
    return Joi.object({
      filterType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getAllProductHsnCodes} */
  static getAllProductHsnCodes() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      type: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getCategoryData} */
  static getCategoryData() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCompanyBrandDetail} */
  static getCompanyBrandDetail() {
    return Joi.object({
      isActive: Joi.boolean(),
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      marketplace: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getCompanyDetail} */
  static getCompanyDetail() {
    return Joi.object({}).required();
  }

  /** @returns {getCompanyMetrics} */
  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  /** @returns {getDepartmentData} */
  static getDepartmentData() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getGenderAttribute} */
  static getGenderAttribute() {
    return Joi.object({
      attributeSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getHsnCode} */
  static getHsnCode() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getInventories} */
  static getInventories() {
    return Joi.object({
      itemId: Joi.string().allow(""),
      size: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      sellable: Joi.boolean(),
      storeIds: Joi.array().items(Joi.number()),
      sizeIdentifier: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getInventoryBulkUploadHistory} */
  static getInventoryBulkUploadHistory() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getInventoryBySize} */
  static getInventoryBySize() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      sellable: Joi.boolean(),
    }).required();
  }

  /** @returns {getInventoryBySizeIdentifier} */
  static getInventoryBySizeIdentifier() {
    return Joi.object({
      itemId: Joi.number().required(),
      sizeIdentifier: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      locationIds: Joi.array().items(Joi.number()),
    }).required();
  }

  /** @returns {getInventoryExport} */
  static getInventoryExport() {
    return Joi.object({}).required();
  }

  /** @returns {getMarketplaceOptinDetail} */
  static getMarketplaceOptinDetail() {
    return Joi.object({}).required();
  }

  /** @returns {getOptimalLocations} */
  static getOptimalLocations() {
    return Joi.object({
      body: CatalogPlatformModel.AssignStore().required(),
    }).required();
  }

  /** @returns {getProduct} */
  static getProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      itemCode: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getProductAssetsInBulk} */
  static getProductAssetsInBulk() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getProductAttributes} */
  static getProductAttributes() {
    return Joi.object({
      category: Joi.string().allow("").required(),
      filter: Joi.boolean(),
    }).required();
  }

  /** @returns {getProductBulkUploadHistory} */
  static getProductBulkUploadHistory() {
    return Joi.object({
      search: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getProductBundle} */
  static getProductBundle() {
    return Joi.object({
      q: Joi.string().allow(""),
      slug: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  /** @returns {getProductBundleDetail} */
  static getProductBundleDetail() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getProductExportJobs} */
  static getProductExportJobs() {
    return Joi.object({
      status: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {getProductSize} */
  static getProductSize() {
    return Joi.object({
      itemCode: Joi.string().allow(""),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      uid: Joi.number(),
    }).required();
  }

  /** @returns {getProductTags} */
  static getProductTags() {
    return Joi.object({}).required();
  }

  /** @returns {getProductValidation} */
  static getProductValidation() {
    return Joi.object({}).required();
  }

  /** @returns {getProducts} */
  static getProducts() {
    return Joi.object({
      brandIds: Joi.array().items(Joi.number()),
      categoryIds: Joi.array().items(Joi.number()),
      itemIds: Joi.array().items(Joi.number()),
      departmentIds: Joi.array().items(Joi.number()),
      itemCode: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getSellerInsights} */
  static getSellerInsights() {
    return Joi.object({
      sellerAppId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getSingleProductHSNCode} */
  static getSingleProductHSNCode() {
    return Joi.object({
      reportingHsn: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getSizeGuide} */
  static getSizeGuide() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getSizeGuides} */
  static getSizeGuides() {
    return Joi.object({
      active: Joi.boolean(),
      q: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getStoreDetail} */
  static getStoreDetail() {
    return Joi.object({
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getVariantsOfProducts} */
  static getVariantsOfProducts() {
    return Joi.object({
      itemId: Joi.number().required(),
      variantType: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {listCategories} */
  static listCategories() {
    return Joi.object({
      level: Joi.string().allow(""),
      departments: Joi.string().allow(""),
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {listDepartmentsData} */
  static listDepartmentsData() {
    return Joi.object({
      pageNo: Joi.number(),
      itemType: Joi.string().allow(""),
      pageSize: Joi.number(),
      name: Joi.string().allow(""),
      search: Joi.string().allow(""),
      isActive: Joi.boolean(),
    }).required();
  }

  /** @returns {listHSNCodes} */
  static listHSNCodes() {
    return Joi.object({}).required();
  }

  /** @returns {listInventoryExport} */
  static listInventoryExport() {
    return Joi.object({
      status: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {listProductTemplate} */
  static listProductTemplate() {
    return Joi.object({
      department: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {listProductTemplateCategories} */
  static listProductTemplateCategories() {
    return Joi.object({
      departments: Joi.string().allow("").required(),
      itemType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {listProductTemplateExportDetails} */
  static listProductTemplateExportDetails() {
    return Joi.object({}).required();
  }

  /** @returns {listTemplateBrandTypeValues} */
  static listTemplateBrandTypeValues() {
    return Joi.object({
      filter: Joi.string().allow("").required(),
      templateTag: Joi.string().allow(""),
      itemType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {updateCategory} */
  static updateCategory() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CategoryRequestBody().required(),
    }).required();
  }

  /** @returns {updateDepartment} */
  static updateDepartment() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      body: CatalogPlatformModel.DepartmentCreateUpdate().required(),
    }).required();
  }

  /** @returns {updateHsnCode} */
  static updateHsnCode() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.HsnUpsert().required(),
    }).required();
  }

  /** @returns {updateInventories} */
  static updateInventories() {
    return Joi.object({
      body: CatalogPlatformModel.InventoryRequestSchemaV2().required(),
    }).required();
  }

  /** @returns {updateProductBundle} */
  static updateProductBundle() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ProductBundleUpdateRequest().required(),
    }).required();
  }

  /** @returns {updateRealtimeInventory} */
  static updateRealtimeInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      sellerIdentifier: Joi.string().allow("").required(),
      body: CatalogPlatformModel.InventoryRequestSchemaV2().required(),
    }).required();
  }

  /** @returns {updateSizeGuide} */
  static updateSizeGuide() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ValidateSizeGuide().required(),
    }).required();
  }

  /** @returns {uploadBulkProducts} */
  static uploadBulkProducts() {
    return Joi.object({
      department: Joi.string().allow("").required(),
      productType: Joi.string().allow("").required(),
      body: CatalogPlatformModel.BulkJob().required(),
    }).required();
  }

  /** @returns {validateProductTemplate} */
  static validateProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {validateProductTemplateSchema} */
  static validateProductTemplateSchema() {
    return Joi.object({
      itemType: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = CatalogPlatformValidator;
