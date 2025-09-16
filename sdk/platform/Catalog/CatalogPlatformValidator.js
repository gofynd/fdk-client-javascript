const Joi = require("joi");

const CatalogPlatformModel = require("./CatalogPlatformModel");

/**
 * @typedef AddInventoryParam
 * @property {number} itemId - Item id of the product of which size is to be get.
 * @property {string} size - Size in which inventory is to be added.
 * @property {CatalogPlatformModel.InventoryRequestSchema} body
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
 * @property {CatalogPlatformModel.InventoryBulkRequestSchema} body
 */

/**
 * @typedef CreateBulkInventoryJobParam
 * @property {CatalogPlatformModel.BulkInventoryJob} body
 */

/**
 * @typedef CreateBulkProductUploadJobParam
 * @property {CatalogPlatformModel.BulkJob} body
 */

/**
 * @typedef CreateHsCodeParam
 * @property {CatalogPlatformModel.HSCodeItem} body
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
 * @property {string} marketplaceSlug - The marketplace for which the detail
 *   needs to be retrieved.
 * @property {CatalogPlatformModel.OptInPostRequestSchema} body
 */

/**
 * @typedef CreateProductParam
 * @property {CatalogPlatformModel.ProductCreateSchemaV3} body
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
 * @typedef CreateTaxParam
 * @property {CatalogPlatformModel.CreateTaxRequestBody} body
 */

/**
 * @typedef CreateTaxComponentNameParam
 * @property {CatalogPlatformModel.CreateTaxComponentNameRequestSchema} body
 */

/**
 * @typedef CreateTaxVersionParam
 * @property {string} ruleId - The ID of the tax rule.
 * @property {CatalogPlatformModel.CreateTaxVersionRequestBody} body
 */

/**
 * @typedef DeleteBulkInventoryJobParam
 * @property {string} batchId - Batch Id of the bulk delete job.
 */

/**
 * @typedef DeleteProductParam
 * @property {number} itemId - Id of the product to be deleted.
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
 * @property {CatalogPlatformModel.InventoryRequestSchemaV2} body
 */

/**
 * @typedef DeleteSizeParam
 * @property {number} itemId - Item Id of the product associated with size to be deleted.
 * @property {string} size - Size to be deleted.
 */

/**
 * @typedef DeleteTaxRuleParam
 * @property {string} ruleId - The ID of the tax rule to be deleted.
 */

/**
 * @typedef DeleteTaxVersionParam
 * @property {string} ruleId - The ID of the tax rule to be deleted.
 * @property {string} versionId - The ID of the tax version to be deleted.
 */

/**
 * @typedef DownloadInventoryTemplateViewParam
 * @property {string} schemaType - Specifies the type of template to download.
 *   Either quantity or price
 * @property {string} type - File extension type
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
 * @property {CatalogPlatformModel.ProductUpdateSchemaV3} body
 */

/**
 * @typedef ExportInventoryConfigParam
 * @property {string} [filterType] - Filter type from any one of ['brand',
 *   'store', 'type']
 */

/**
 * @typedef GetAllProductHsnCodesParam
 * @property {number} [pageNo] - Indicates current page number
 * @property {number} [pageSize] - Indicates page size
 * @property {string} [q] - Search using hsn code, description, reporting_hsn
 * @property {string} [type] - Search using type
 */

/**
 * @typedef GetAllTaxRulesParam
 * @property {string} [q] - The search query to filter tax rules.
 * @property {string} [statuses] - The status of the tax rules to filter.
 * @property {number} [page] - The page number to retrieve.
 * @property {number} [limit] - The number of items per page.
 * @property {string} [versionStatus] - The status of the tax rule versions to filter.
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

/** @typedef GetCompanyDetailParam */

/** @typedef GetCompanyMetricsParam */

/**
 * @typedef GetDepartmentDataParam
 * @property {string} uid - A `uid` is a unique identifier of a department.
 */

/**
 * @typedef GetHsCodesParam
 * @property {number} [page] - The page number for pagination.
 * @property {number} [limit] - The number of items to return per page.
 * @property {CatalogPlatformModel.HsTypeEnum} [type] - Filter by HS/SAC code type.
 * @property {string} [q] - Search query to filter HS/SAC codes by code or description.
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
 * @property {string} [pageId] - Alphanumeric Page ID to retrieve next set of results.
 * @property {string} [pageType] - Available pagination types are cursor or number.
 * @property {string} [q] - Search with help of store code.
 * @property {boolean} [sellable] - Filter on whether product is in stock or not.
 * @property {number[]} [storeIds] - The Store Id of products to fetch inventory.
 * @property {number[]} [brandIds] - The Brand Id of products to fetch inventory.
 * @property {string[]} [sellerIdentifiers] - The Seller Identifier or Primary
 *   Identifier of the inventory.
 * @property {number} [qtyGt] - This field allows you to filter for inventories
 *   that have quantity greater than to the specified value based on qty_type filter.
 * @property {number} [qtyLt] - This field allows you to filter for inventories
 *   that have a quantity less than to the specified value based on qty_type filter.
 * @property {string} [qtyType] - This field provides flexibility in selecting
 *   filter for inventory quantity counts and date queries. For example, you
 *   might use this field to specify "total" or "sellable" quantity.
 * @property {string} [fromDate] - Inventory updated on filter to get
 *   inventories greater then or equal to provided date based on qty_type value.
 * @property {string} [toDate] - Inventory updated on filter to get inventories
 *   less then or equal to provided date based on qty_type value.
 * @property {string} [sizeIdentifier] - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which inventory is to get.
 */

/**
 * @typedef GetInventoryBulkUploadHistoryParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {string} [search] - Search string to filter the results by batch id
 * @property {string} [startDate] - Filter results by the job's start date.
 * @property {string} [endDate] - Filter results by the job's end date.
 * @property {string} [stage] - Filter results by the current stage of the import job.
 * @property {string} [tags] - Filter results by the tags of the import job.
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

/** @typedef GetProductValidationParam */

/**
 * @typedef GetProductsParam
 * @property {number[]} [brandIds] - Get multiple products filtered by Brand Ids
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
 * @property {string} [tag] - To filter size guide on basis of tag.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {number} [brandId] - Brand id that is to be searched.
 */

/**
 * @typedef GetStoreDetailParam
 * @property {string} [q] - The search related the store for the company id.
 * @property {number} [pageNo] - The number of page for the company id.
 * @property {number} [pageSize] - Number of records that can be seen on the
 *   page for the company id.
 */

/** @typedef GetTaxComponentNamesParam */

/**
 * @typedef GetTaxVersionDetailsParam
 * @property {string} ruleId - The ID of the tax rule.
 * @property {string} [versionStatus] - Filter by tax version status.
 * @property {string} [limit] - The number of items to return per page for
 *   paginated past versions.
 * @property {string} [page] - The page number for paginated past versions.
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
 * @property {string} [slug] - Get category by slug
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
 * @property {string} [slug] - Can filter by slug
 */

/** @typedef ListHSNCodesParam */

/**
 * @typedef ListInventoryExportParam
 * @property {string} [status] - Status of the export job.(Pending, Running, Success)
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
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
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
 * @typedef UpdateHsnCodeParam
 * @property {string} id - Unique id
 * @property {CatalogPlatformModel.HsnUpsert} body
 */

/**
 * @typedef UpdateInventoriesParam
 * @property {CatalogPlatformModel.InventoryRequestSchemaV2} body
 */

/**
 * @typedef UpdateLocationPriceParam
 * @property {number} storeId - The Store Id to update price of size for specific store.
 * @property {string} sellerIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which article price is to update.
 * @property {CatalogPlatformModel.LocationPriceRequestSchema} body
 */

/**
 * @typedef UpdateLocationQuantityParam
 * @property {number} storeId - The Store Id to update quantity of size for
 *   specific store.
 * @property {string} sellerIdentifier - Size Identifier (Seller Identifier or
 *   Primary Identifier) of which article quantity is to update.
 * @property {CatalogPlatformModel.LocationQuantityRequestSchema} body
 */

/**
 * @typedef UpdateMarketplaceOptinParam
 * @property {string} marketplaceSlug - Slug of the marketplace .
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
 * @property {CatalogPlatformModel.InventoryRequestSchemaV2} body
 */

/**
 * @typedef UpdateSizeGuideParam
 * @property {string} id - Identifier of the size guide to be edited
 * @property {CatalogPlatformModel.ValidateSizeGuide} body
 */

/**
 * @typedef UpdateTaxRuleParam
 * @property {string} ruleId - Tax rule id that you want to update.
 * @property {CatalogPlatformModel.UpdateTaxRequestBody} body
 */

/**
 * @typedef UpdateTaxVersionParam
 * @property {string} ruleId - The ID of the tax rule to be updated.
 * @property {string} versionId - The ID of the tax version to be updated.
 * @property {CatalogPlatformModel.UpdateTaxVersionRequestBody} body
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
 * @property {string} [schemaType] - Schema of price or quantity template
 */

class CatalogPlatformValidator {
  /** @returns {AddInventoryParam} */
  static addInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.string().allow("").required(),
      body: CatalogPlatformModel.InventoryRequestSchema().required(),
    }).required();
  }

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
      body: CatalogPlatformModel.InventoryBulkRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateBulkInventoryJobParam} */
  static createBulkInventoryJob() {
    return Joi.object({
      body: CatalogPlatformModel.BulkInventoryJob().required(),
    }).required();
  }

  /** @returns {CreateBulkProductUploadJobParam} */
  static createBulkProductUploadJob() {
    return Joi.object({
      body: CatalogPlatformModel.BulkJob().required(),
    }).required();
  }

  /** @returns {CreateHsCodeParam} */
  static createHsCode() {
    return Joi.object({
      body: CatalogPlatformModel.HSCodeItem().required(),
    }).required();
  }

  /** @returns {CreateInventoryExportParam} */
  static createInventoryExport() {
    return Joi.object({
      body: CatalogPlatformModel.InventoryCreateRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateInventoryExportJobParam} */
  static createInventoryExportJob() {
    return Joi.object({
      body: CatalogPlatformModel.InventoryExportRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateMarketplaceOptinParam} */
  static createMarketplaceOptin() {
    return Joi.object({
      marketplaceSlug: Joi.string().allow("").required(),
      body: CatalogPlatformModel.OptInPostRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateProductParam} */
  static createProduct() {
    return Joi.object({
      body: CatalogPlatformModel.ProductCreateSchemaV3().required(),
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
      body: CatalogPlatformModel.ProductBundleRequestSchema().required(),
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
      body: CatalogPlatformModel.BulkProductRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateSizeGuideParam} */
  static createSizeGuide() {
    return Joi.object({
      body: CatalogPlatformModel.ValidateSizeGuide().required(),
    }).required();
  }

  /** @returns {CreateTaxParam} */
  static createTax() {
    return Joi.object({
      body: CatalogPlatformModel.CreateTaxRequestBody().required(),
    }).required();
  }

  /** @returns {CreateTaxComponentNameParam} */
  static createTaxComponentName() {
    return Joi.object({
      body: CatalogPlatformModel.CreateTaxComponentNameRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateTaxVersionParam} */
  static createTaxVersion() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.CreateTaxVersionRequestBody().required(),
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
      batchId: Joi.number().required(),
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

  /** @returns {DeleteTaxRuleParam} */
  static deleteTaxRule() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteTaxVersionParam} */
  static deleteTaxVersion() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
      versionId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DownloadInventoryTemplateViewParam} */
  static downloadInventoryTemplateView() {
    return Joi.object({
      schemaType: Joi.string().allow("").required(),
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
      body: CatalogPlatformModel.ProductUpdateSchemaV3().required(),
    }).required();
  }

  /** @returns {ExportInventoryConfigParam} */
  static exportInventoryConfig() {
    return Joi.object({
      filterType: Joi.string().allow(""),
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

  /** @returns {GetAllTaxRulesParam} */
  static getAllTaxRules() {
    return Joi.object({
      q: Joi.string().allow(""),
      statuses: Joi.string().allow(""),
      page: Joi.number(),
      limit: Joi.number(),
      versionStatus: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetAttributeParam} */
  static getAttribute() {
    return Joi.object({
      attributeSlug: Joi.string().allow("").required(),
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

  /** @returns {GetDepartmentDataParam} */
  static getDepartmentData() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetHsCodesParam} */
  static getHsCodes() {
    return Joi.object({
      page: Joi.number(),
      limit: Joi.number(),
      type: CatalogPlatformModel.HsTypeEnum(),
      q: Joi.string().allow(""),
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
      itemId: Joi.string().allow(""),
      size: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      pageId: Joi.string().allow(""),
      pageType: Joi.string().allow(""),
      q: Joi.string().allow(""),
      sellable: Joi.boolean(),
      storeIds: Joi.array().items(Joi.number()),
      brandIds: Joi.array().items(Joi.number()),
      sellerIdentifiers: Joi.array().items(Joi.string().allow("")),
      qtyGt: Joi.number(),
      qtyLt: Joi.number(),
      qtyType: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      sizeIdentifier: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetInventoryBulkUploadHistoryParam} */
  static getInventoryBulkUploadHistory() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      search: Joi.string().allow(""),
      startDate: Joi.string().allow(""),
      endDate: Joi.string().allow(""),
      stage: Joi.string().allow(""),
      tags: Joi.string().allow(""),
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

  /** @returns {GetMarketplaceOptinDetailParam} */
  static getMarketplaceOptinDetail() {
    return Joi.object({}).required();
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

  /** @returns {GetProductExportJobsParam} */
  static getProductExportJobs() {
    return Joi.object({
      status: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {GetProductSizeParam} */
  static getProductSize() {
    return Joi.object({
      itemCode: Joi.string().allow(""),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      uid: Joi.number(),
    }).required();
  }

  /** @returns {GetProductTagsParam} */
  static getProductTags() {
    return Joi.object({}).required();
  }

  /** @returns {GetProductValidationParam} */
  static getProductValidation() {
    return Joi.object({}).required();
  }

  /** @returns {GetProductsParam} */
  static getProducts() {
    return Joi.object({
      brandIds: Joi.array().items(Joi.number()),
      categoryIds: Joi.array().items(Joi.number()),
      itemIds: Joi.array().items(Joi.number()),
      departmentIds: Joi.array().items(Joi.number()),
      itemCode: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      allIdentifiers: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      pageType: Joi.string().allow(""),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
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
      tag: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      brandId: Joi.number(),
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

  /** @returns {GetTaxComponentNamesParam} */
  static getTaxComponentNames() {
    return Joi.object({}).required();
  }

  /** @returns {GetTaxVersionDetailsParam} */
  static getTaxVersionDetails() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
      versionStatus: Joi.string().allow(""),
      limit: Joi.string().allow(""),
      page: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),
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
      slug: Joi.string().allow(""),
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
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {ListProductTemplateParam} */
  static listProductTemplate() {
    return Joi.object({
      department: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
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

  /** @returns {UpdateLocationPriceParam} */
  static updateLocationPrice() {
    return Joi.object({
      storeId: Joi.number().required(),
      sellerIdentifier: Joi.string().allow("").required(),
      body: CatalogPlatformModel.LocationPriceRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateLocationQuantityParam} */
  static updateLocationQuantity() {
    return Joi.object({
      storeId: Joi.number().required(),
      sellerIdentifier: Joi.string().allow("").required(),
      body: CatalogPlatformModel.LocationQuantityRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateMarketplaceOptinParam} */
  static updateMarketplaceOptin() {
    return Joi.object({
      marketplaceSlug: Joi.string().allow("").required(),
      body: CatalogPlatformModel.UpdateMarketplaceOptinRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateProductBundleParam} */
  static updateProductBundle() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: CatalogPlatformModel.ProductBundleUpdateRequestSchema().required(),
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

  /** @returns {UpdateTaxRuleParam} */
  static updateTaxRule() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.UpdateTaxRequestBody().required(),
    }).required();
  }

  /** @returns {UpdateTaxVersionParam} */
  static updateTaxVersion() {
    return Joi.object({
      ruleId: Joi.string().allow("").required(),
      versionId: Joi.string().allow("").required(),
      body: CatalogPlatformModel.UpdateTaxVersionRequestBody().required(),
    }).required();
  }

  /** @returns {ValidateProductGlobalTemplateParam} */
  static validateProductGlobalTemplate() {
    return Joi.object({
      itemType: Joi.string().allow(""),
      bulk: Joi.boolean(),
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
      schemaType: Joi.string().allow(""),
    }).required();
  }
}

module.exports = CatalogPlatformValidator;
