const Joi = require("joi");
const Validator = require("../PlatformModels");
class CatalogValidator {
  static createProductBundle() {
    return Joi.object({
      body: Validator.ProductBundleRequest().required(),
    }).required();
  }

  static getProductBundle() {
    return Joi.object({
      q: Joi.string().allow(""),
      slug: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  static getProductBundleDetail() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateProductBundle() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.ProductBundleUpdateRequest().required(),
    }).required();
  }

  static createSizeGuide() {
    return Joi.object({
      body: Validator.ValidateSizeGuide().required(),
    }).required();
  }

  static getSizeGuides() {
    return Joi.object({
      active: Joi.boolean(),
      q: Joi.string().allow(""),
      tag: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getSizeGuide() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateSizeGuide() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.ValidateSizeGuide().required(),
    }).required();
  }

  static getSellerInsights() {
    return Joi.object({
      sellerAppId: Joi.string().allow("").required(),
    }).required();
  }

  static createMarketplaceOptin() {
    return Joi.object({
      marketplace: Joi.string().allow("").required(),
      body: Validator.OptInPostRequest().required(),
    }).required();
  }

  static getMarketplaceOptinDetail() {
    return Joi.object({}).required();
  }

  static getCompanyDetail() {
    return Joi.object({}).required();
  }

  static getCompanyBrandDetail() {
    return Joi.object({
      isActive: Joi.boolean(),
      q: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      marketplace: Joi.string().allow(""),
    }).required();
  }

  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  static getStoreDetail() {
    return Joi.object({
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getGenderAttribute() {
    return Joi.object({
      attributeSlug: Joi.string().allow("").required(),
    }).required();
  }

  static listProductTemplateCategories() {
    return Joi.object({
      departments: Joi.string().allow("").required(),
      itemType: Joi.string().allow("").required(),
    }).required();
  }

  static createDepartments() {
    return Joi.object({
      body: Validator.DepartmentCreateUpdate().required(),
    }).required();
  }

  static listDepartmentsData() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      name: Joi.string().allow(""),
      search: Joi.string().allow(""),
      isActive: Joi.boolean(),
    }).required();
  }

  static getDepartmentData() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  static updateDepartment() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      body: Validator.DepartmentCreateUpdate().required(),
    }).required();
  }

  static listProductTemplate() {
    return Joi.object({
      department: Joi.string().allow("").required(),
    }).required();
  }

  static validateProductTemplate() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static downloadProductTemplateViews() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static downloadProductTemplateView() {
    return Joi.object({
      itemType: Joi.string().allow("").required(),
    }).required();
  }

  static validateProductTemplateSchema() {
    return Joi.object({
      itemType: Joi.string().allow("").required(),
    }).required();
  }

  static listHSNCodes() {
    return Joi.object({}).required();
  }

  static listProductTemplateExportDetails() {
    return Joi.object({}).required();
  }

  static listTemplateBrandTypeValues() {
    return Joi.object({
      filter: Joi.string().allow("").required(),
    }).required();
  }

  static createCategories() {
    return Joi.object({
      body: Validator.CategoryRequestBody().required(),
    }).required();
  }

  static listCategories() {
    return Joi.object({
      level: Joi.string().allow(""),
      departments: Joi.string().allow(""),
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getCategoryData() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
    }).required();
  }

  static updateCategory() {
    return Joi.object({
      uid: Joi.string().allow("").required(),
      body: Validator.CategoryRequestBody().required(),
    }).required();
  }

  static createProduct() {
    return Joi.object({
      body: Validator.ProductCreateUpdate().required(),
    }).required();
  }

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

  static getVariantsOfProducts() {
    return Joi.object({
      itemId: Joi.number().required(),
      variantType: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getProductAttributes() {
    return Joi.object({
      category: Joi.string().allow("").required(),
      filter: Joi.boolean(),
    }).required();
  }

  static deleteProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  static getProduct() {
    return Joi.object({
      itemCode: Joi.string().allow(""),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
    }).required();
  }

  static editProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
      body: Validator.ProductCreateUpdate().required(),
    }).required();
  }

  static getProductValidation() {
    return Joi.object({}).required();
  }

  static getProductSize() {
    return Joi.object({
      itemCode: Joi.string().allow(""),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      uid: Joi.number(),
    }).required();
  }

  static createBulkProductUploadJob() {
    return Joi.object({
      body: Validator.BulkJob().required(),
    }).required();
  }

  static getProductBulkUploadHistory() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static uploadBulkProducts() {
    return Joi.object({
      department: Joi.string().allow("").required(),
      productType: Joi.string().allow("").required(),
      body: Validator.BulkJob().required(),
    }).required();
  }

  static deleteProductBulkJob() {
    return Joi.object({
      batchId: Joi.number().required(),
    }).required();
  }

  static createProductsInBulk() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      body: Validator.BulkProductRequest().required(),
    }).required();
  }

  static getProductTags() {
    return Joi.object({}).required();
  }

  static createProductAssetsInBulk() {
    return Joi.object({
      body: Validator.ProductBulkAssets().required(),
    }).required();
  }

  static getProductAssetsInBulk() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static deleteSize() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.number().required(),
    }).required();
  }

  static addInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.string().allow("").required(),
      body: Validator.InventoryRequest().required(),
    }).required();
  }

  static getInventoryBySize() {
    return Joi.object({
      itemId: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      sellable: Joi.boolean(),
    }).required();
  }

  static getInventoryBySizeIdentifier() {
    return Joi.object({
      itemId: Joi.string().allow("").required(),
      sizeIdentifier: Joi.string().allow("").required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      locationIds: Joi.array().items(Joi.number()),
    }).required();
  }

  static deleteInventory() {
    return Joi.object({
      size: Joi.string().allow("").required(),
      itemId: Joi.number().required(),
      locationId: Joi.number().required(),
    }).required();
  }

  static createBulkInventoryJob() {
    return Joi.object({
      body: Validator.BulkJob().required(),
    }).required();
  }

  static getInventoryBulkUploadHistory() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static deleteBulkInventoryJob() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  static createBulkInventory() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      body: Validator.InventoryBulkRequest().required(),
    }).required();
  }

  static createInventoryExportJob() {
    return Joi.object({
      body: Validator.InventoryExportRequest().required(),
    }).required();
  }

  static getInventoryExport() {
    return Joi.object({}).required();
  }

  static exportInventoryConfig() {
    return Joi.object({
      filterType: Joi.string().allow(""),
    }).required();
  }

  static deleteRealtimeInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      sellerIdentifier: Joi.string().allow("").required(),
      body: Validator.InventoryRequestSchemaV2().required(),
    }).required();
  }

  static updateRealtimeInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      sellerIdentifier: Joi.string().allow("").required(),
      body: Validator.InventoryRequestSchemaV2().required(),
    }).required();
  }

  static updateInventories() {
    return Joi.object({
      body: Validator.InventoryRequestSchemaV2().required(),
    }).required();
  }

  static createHsnCode() {
    return Joi.object({
      body: Validator.HsnUpsert().required(),
    }).required();
  }

  static getAllHsnCodes() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
    }).required();
  }

  static getHsnCode() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateHsnCode() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.HsnUpsert().required(),
    }).required();
  }

  static bulkHsnCode() {
    return Joi.object({
      body: Validator.BulkHsnUpsert().required(),
    }).required();
  }

  static getAllProductHsnCodes() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      type: Joi.string().allow(""),
    }).required();
  }

  static getSingleProductHSNCode() {
    return Joi.object({
      reportingHsn: Joi.string().allow("").required(),
    }).required();
  }

  static getOptimalLocations() {
    return Joi.object({
      body: Validator.AssignStore().required(),
    }).required();
  }
}
module.exports = CatalogValidator;
