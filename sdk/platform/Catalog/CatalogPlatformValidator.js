const Joi = require("joi");

const CatalogPlatformModel = require("./CatalogPlatformModel");

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
 * @property {CatalogPlatformModel.InventoryBulkJob} body
 */

/**
 * @typedef CreateBulkProductUploadJobParam
 * @property {CatalogPlatformModel.BulkProductUploadJob} body
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
 * @property {string} marketplace - Slug of the marketplace .
 * @property {CatalogPlatformModel.CreateMarketplaceOptinRequest} body
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
 * @property {CatalogPlatformModel.InventoryRequestSchemaV2} body
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
 * @property {number} [itemId] - Item code of the product of which size is to be get.
 * @property {string} [size] - Size of which inventory is to get.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [q] - Search with help of store code.
 * @property {boolean} [sellable] - Filter on whether product is in stock or not.
 * @property {number[]} [storeIds] - The Store Id of products to fetch inventory.
 * @property {number} [sizeIdentifier] - Size Identifier (Seller Identifier or
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

/** @typedef GetMarketplacesParam */

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
 */

/**
 * @typedef GetProductSizeParam
 * @property {number} itemId - Item Id of the product size.
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
 * @typedef PatchInventoryExportDetailParam
 * @property {string} jobId - Company Id in which assets to be uploaded.
 * @property {CatalogPlatformModel.ExportPatchRequest} body
 */

/**
 * @typedef PatchProductExportDetailParam
 * @property {string} jobId - Company Id in which assets to be uploaded.
 * @property {CatalogPlatformModel.ExportPatchRequest} body
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
 * @typedef UpdateMarketplaceOptinParam
 * @property {string} marketplace - Slug of the marketplace .
 * @property {CatalogPlatformModel.UpdateMarketplaceOptinRequest} body
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
 * @property {CatalogPlatformModel.BulkProductJob} body
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

class CatalogPlatformValidator {
  /** @returns {AllSizesParam} */
  static allSizes() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  /** @returns {BulkHsnCodeParam} */
  static bulkHsnCode() {
    return Joi.object({
      body: CatalogPlatformModel.BulkHsnUpsert().required(),
    }).required();
  }

  /** @returns {CreateBulkInventoryParam} */
  static createBulkInventory() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.InventoryBulkRequest().required(),
    }).required();
  }

  /** @returns {CreateBulkInventoryJobParam} */
  static createBulkInventoryJob() {
    return Joi.object({
      body: CatalogPlatformModel.InventoryBulkJob().required(),
    }).required();
  }

  /** @returns {CreateBulkProductUploadJobParam} */
  static createBulkProductUploadJob() {
    return Joi.object({
      body: CatalogPlatformModel.BulkProductUploadJob().required(),
    }).required();
  }

  /** @returns {CreateCategoriesParam} */
  static createCategories() {
    return Joi.object({
      body: CatalogPlatformModel.CategoryRequestBody().required(),
    }).required();
  }

  /** @returns {CreateDepartmentsParam} */
  static createDepartments() {
    return Joi.object({
      body: CatalogPlatformModel.DepartmentCreateUpdate().required(),
    }).required();
  }

  /** @returns {CreateInventoryExportParam} */
  static createInventoryExport() {
    return Joi.object({
      body: CatalogPlatformModel.InventoryCreateRequest().required(),
    }).required();
  }

  /** @returns {CreateInventoryExportJobParam} */
  static createInventoryExportJob() {
    return Joi.object({
      body: CatalogPlatformModel.InventoryExportRequest().required(),
    }).required();
  }

  /** @returns {CreateMarketplaceOptinParam} */
  static createMarketplaceOptin() {
    return Joi.object({
      marketplace: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CreateMarketplaceOptinRequest().required(),
    }).required();
  }

  /** @returns {CreateProductParam} */
  static createProduct() {
    return Joi.object({
      body: CatalogPlatformModel.ProductCreateUpdateSchemaV2().required(),
    }).required();
  }

  /** @returns {CreateProductAssetsInBulkParam} */
  static createProductAssetsInBulk() {
    return Joi.object({
      body: CatalogPlatformModel.ProductBulkAssets().required(),
    }).required();
  }

  /** @returns {CreateProductBundleParam} */
  static createProductBundle() {
    return Joi.object({
      body: CatalogPlatformModel.ProductBundleRequest().required(),
    }).required();
  }

  /** @returns {CreateProductExportJobParam} */
  static createProductExportJob() {
    return Joi.object({
      body: CatalogPlatformModel.ProductTemplateDownloadsExport().required(),
    }).required();
  }

  /** @returns {CreateProductsInBulkParam} */
  static createProductsInBulk() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.BulkProductRequest().required(),
    }).required();
  }

  /** @returns {CreateSizeGuideParam} */
  static createSizeGuide() {
    return Joi.object({
      body: CatalogPlatformModel.ValidateSizeGuide().required(),
    }).required();
  }

  /** @returns {DeleteBulkInventoryJobParam} */
  static deleteBulkInventoryJob() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteProductParam} */
  static deleteProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  /** @returns {DeleteProductBulkJobParam} */
  static deleteProductBulkJob() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteRealtimeInventoryParam} */
  static deleteRealtimeInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      sellerIdentifier: Joi.string().allow("").required(),
      body: CatalogPlatformModel.InventoryRequestSchemaV2().required(),
    }).required();
  }

  /** @returns {DeleteSizeParam} */
  static deleteSize() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DownloadInventoryTemplateViewParam} */
  static downloadInventoryTemplateView() {
    return Joi.object({
      type: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DownloadProductTemplateViewsParam} */
  static downloadProductTemplateViews() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      itemType: Joi.string().allow(""),
      type: Joi.string().allow(""),
    }).required();
  }

  /** @returns {EditProductParam} */
  static editProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
      body: CatalogPlatformModel.ProductCreateUpdateSchemaV2().required(),
    }).required();
  }

  /** @returns {ExportInventoryConfigParam} */
  static exportInventoryConfig() {
    return Joi.object({
      filter: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetAllProductHsnCodesParam} */
  static getAllProductHsnCodes() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      type: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCategoryDataParam} */
  static getCategoryData() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCompanyBrandDetailParam} */
  static getCompanyBrandDetail() {
    return Joi.object({
      isActive: Joi.boolean(),
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      marketplace: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetCompanyDetailParam} */
  static getCompanyDetail() {
    return Joi.object({}).required();
  }

  /** @returns {GetCompanyMetricsParam} */
  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  /** @returns {GetCompanyVerificationParam} */
  static getCompanyVerification() {
    return Joi.object({
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetDepartmentDataParam} */
  static getDepartmentData() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetGenderAttributeParam} */
  static getGenderAttribute() {
    return Joi.object({
      attributeSlug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetHsnCodeParam} */
  static getHsnCode() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetInventoriesParam} */
  static getInventories() {
    return Joi.object({
      itemId: Joi.number(),
      size: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      sellable: Joi.boolean(),
      storeIds: Joi.array().items(Joi.number()),
      sizeIdentifier: Joi.number(),
    }).required();
  }

  /** @returns {GetInventoryBulkUploadHistoryParam} */
  static getInventoryBulkUploadHistory() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetInventoryBySizeParam} */
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

  /** @returns {GetInventoryBySizeIdentifierParam} */
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

  /** @returns {GetInventoryExportParam} */
  static getInventoryExport() {
    return Joi.object({}).required();
  }

  /** @returns {GetInventoryExportDetailParam} */
  static getInventoryExportDetail() {
    return Joi.object({
      jobId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetMarketplacesParam} */
  static getMarketplaces() {
    return Joi.object({}).required();
  }

  /** @returns {GetOptimalLocationsParam} */
  static getOptimalLocations() {
    return Joi.object({
      body: CatalogPlatformModel.AssignStore().required(),
    }).required();
  }

  /** @returns {GetProductParam} */
  static getProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      itemCode: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetProductAssetsInBulkParam} */
  static getProductAssetsInBulk() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetProductAttributesParam} */
  static getProductAttributes() {
    return Joi.object({
      category: Joi.string().allow("").required(),
      filter: Joi.boolean(),
    }).required();
  }

  /** @returns {GetProductBulkUploadHistoryParam} */
  static getProductBulkUploadHistory() {
    return Joi.object({
      search: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetProductBundleParam} */
  static getProductBundle() {
    return Joi.object({
      q: Joi.string().allow(""),
      slug: Joi.array().items(Joi.string().allow("")),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetProductBundleDetailParam} */
  static getProductBundleDetail() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetProductExportDetailParam} */
  static getProductExportDetail() {
    return Joi.object({
      jobId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetProductExportJobsParam} */
  static getProductExportJobs() {
    return Joi.object({
      status: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetProductSizeParam} */
  static getProductSize() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetProductTagsParam} */
  static getProductTags() {
    return Joi.object({}).required();
  }

  /** @returns {GetProductTemplateBySlugParam} */
  static getProductTemplateBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetProductValidationParam} */
  static getProductValidation() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetProductVerificationDetailsParam} */
  static getProductVerificationDetails() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  /** @returns {GetProductsParam} */
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

  /** @returns {GetSellerInsightsParam} */
  static getSellerInsights() {
    return Joi.object({
      sellerAppId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSingleProductHSNCodeParam} */
  static getSingleProductHSNCode() {
    return Joi.object({
      reportingHsn: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSizeGuideParam} */
  static getSizeGuide() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetSizeGuidesParam} */
  static getSizeGuides() {
    return Joi.object({
      active: Joi.boolean(),
      q: Joi.string().allow(""),
      brandId: Joi.number(),
      tag: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetStoreDetailParam} */
  static getStoreDetail() {
    return Joi.object({
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetVariantTypesParam} */
  static getVariantTypes() {
    return Joi.object({
      templateTag: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetVariantsOfProductsParam} */
  static getVariantsOfProducts() {
    return Joi.object({
      itemId: Joi.number().required(),
      variantType: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {ListCategoriesParam} */
  static listCategories() {
    return Joi.object({
      level: Joi.string().allow(""),
      department: Joi.number(),
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      uids: Joi.array().items(Joi.number()),
    }).required();
  }

  /** @returns {ListDepartmentsDataParam} */
  static listDepartmentsData() {
    return Joi.object({
      pageNo: Joi.number(),
      itemType: Joi.string().allow(""),
      pageSize: Joi.number(),
      name: Joi.string().allow(""),
      search: Joi.string().allow(""),
      isActive: Joi.boolean(),
      uids: Joi.array().items(Joi.number()),
    }).required();
  }

  /** @returns {ListHSNCodesParam} */
  static listHSNCodes() {
    return Joi.object({}).required();
  }

  /** @returns {ListInventoryExportParam} */
  static listInventoryExport() {
    return Joi.object({
      status: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {ListProductTemplateParam} */
  static listProductTemplate() {
    return Joi.object({
      department: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ListProductTemplateCategoriesParam} */
  static listProductTemplateCategories() {
    return Joi.object({
      departments: Joi.string().allow("").required(),
      itemType: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {ListProductTemplateExportDetailsParam} */
  static listProductTemplateExportDetails() {
    return Joi.object({}).required();
  }

  /** @returns {ListTemplateBrandTypeValuesParam} */
  static listTemplateBrandTypeValues() {
    return Joi.object({
      filter: Joi.string().allow("").required(),
      templateTag: Joi.string().allow(""),
      itemType: Joi.string().allow(""),
    }).required();
  }

  /** @returns {PatchInventoryExportDetailParam} */
  static patchInventoryExportDetail() {
    return Joi.object({
      jobId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ExportPatchRequest().required(),
    }).required();
  }

  /** @returns {PatchProductExportDetailParam} */
  static patchProductExportDetail() {
    return Joi.object({
      jobId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ExportPatchRequest().required(),
    }).required();
  }

  /** @returns {UpdateCategoryParam} */
  static updateCategory() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CategoryRequestBody().required(),
    }).required();
  }

  /** @returns {UpdateDepartmentParam} */
  static updateDepartment() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      body: CatalogPlatformModel.DepartmentCreateUpdate().required(),
    }).required();
  }

  /** @returns {UpdateHsnCodeParam} */
  static updateHsnCode() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.HsnUpsert().required(),
    }).required();
  }

  /** @returns {UpdateInventoriesParam} */
  static updateInventories() {
    return Joi.object({
      body: CatalogPlatformModel.InventoryRequestSchemaV2().required(),
    }).required();
  }

  /** @returns {UpdateMarketplaceOptinParam} */
  static updateMarketplaceOptin() {
    return Joi.object({
      marketplace: Joi.string().allow("").required(),
      body: CatalogPlatformModel.UpdateMarketplaceOptinRequest().required(),
    }).required();
  }

  /** @returns {UpdateProductBundleParam} */
  static updateProductBundle() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ProductBundleUpdateRequest().required(),
    }).required();
  }

  /** @returns {UpdateRealtimeInventoryParam} */
  static updateRealtimeInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      sellerIdentifier: Joi.string().allow("").required(),
      body: CatalogPlatformModel.InventoryRequestSchemaV2().required(),
    }).required();
  }

  /** @returns {UpdateSizeGuideParam} */
  static updateSizeGuide() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ValidateSizeGuide().required(),
    }).required();
  }

  /** @returns {UploadBulkProductsParam} */
  static uploadBulkProducts() {
    return Joi.object({
      department: Joi.string().allow("").required(),
      productType: Joi.string().allow("").required(),
      body: CatalogPlatformModel.BulkProductJob().required(),
    }).required();
  }

  /** @returns {ValidateProductTemplateParam} */
  static validateProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      itemType: Joi.string().allow(""),
      bulk: Joi.boolean(),
    }).required();
  }

  /** @returns {ValidateProductTemplateSchemaParam} */
  static validateProductTemplateSchema() {
    return Joi.object({
      itemType: Joi.string().allow("").required(),
      bulk: Joi.boolean().required(),
    }).required();
  }
}

module.exports = CatalogPlatformValidator;
