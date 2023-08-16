const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CatalogValidator = require("./CatalogPlatformValidator");
const CatalogModel = require("./CatalogPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Catalog {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Item code of the product of which size is to be get.
   * @param {string} arg.size - Size in which inventory is to be added.
   * @param {InventoryRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store.
   */
  async addInventory(
    { itemId, size, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.addInventory().validate(
      {
        itemId,
        size,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.addInventory().validate(
      {
        itemId,
        size,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for addInventory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for addInventory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Id of the product to be updated.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetAllSizes>} - Success response
   * @summary: All Sizes for a given Product
   * @description: This API allows to get  All Sizes for a given Product.
   */
  async allSizes({ itemId } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.allSizes().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.allSizes().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for allSizes",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/all_sizes`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.GetAllSizes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for allSizes",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {BulkHsnUpsert} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BulkHsnResponse>} - Success response
   * @summary: Bulk Create or Update Hsn Code.
   * @description: Bulk Create or Update Hsn Code.
   */
  async bulkHsnCode({ body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.bulkHsnCode().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.bulkHsnCode().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for bulkHsnCode",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/bulk/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.BulkHsnResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for bulkHsnCode",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.batchId - Batch Id of the bulk create job.
   * @param {InventoryBulkRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Create products in bulk associated with given batch Id.
   * @description: This API helps to create products in bulk push to kafka for approval/creation.
   */
  async createBulkInventory(
    { batchId, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.createBulkInventory().validate(
      {
        batchId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.createBulkInventory().validate(
      {
        batchId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createBulkInventory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/${batchId}/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createBulkInventory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {BulkJob} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BulkResponse>} - Success response
   * @summary: Create a Bulk Inventory upload Job.
   * @description: This API helps to create a bulk Inventory upload job.
   */
  async createBulkInventoryJob(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.createBulkInventoryJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.createBulkInventoryJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createBulkInventoryJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.BulkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createBulkInventoryJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {BulkJob} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BulkResponse>} - Success response
   * @summary: Create a Bulk product to upload job.
   * @description: This API helps to create a bulk products upload job.
   */
  async createBulkProductUploadJob(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.createBulkProductUploadJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.createBulkProductUploadJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for createBulkProductUploadJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.BulkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createBulkProductUploadJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CategoryRequestBody} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CategoryCreateResponse>} - Success response
   * @summary: Create product categories
   * @description: This API lets user create product categories
   */
  async createCategories({ body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.createCategories().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.createCategories().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createCategories",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.CategoryCreateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createCategories",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DepartmentCreateUpdate} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DepartmentCreateResponse>} - Success response
   * @summary: Create the department.
   * @description: Create departments using the API.
   */
  async createDepartments({ body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.createDepartments().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.createDepartments().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createDepartments",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.DepartmentCreateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createDepartments",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InventoryCreateRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryExportResponse>} - Success response
   * @summary: Create an inventory export job.
   * @description: This API helps to create a Inventory export job.
   */
  async createInventoryExport({ body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.createInventoryExport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.createInventoryExport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createInventoryExport",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory/download/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryExportResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createInventoryExport",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InventoryExportRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryExportResponse>} - Success response
   * @summary: Create a Inventory export Job.
   * @description: This API helps to create a Inventory export job.
   */
  async createInventoryExportJob(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.createInventoryExportJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.createInventoryExportJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createInventoryExportJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryExportResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createInventoryExportJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.marketplace - The marketplace for which the detail
   *   needs to be retrieved.
   * @param {OptInPostRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<UpdatedResponse>} - Success response
   * @summary: Create/Update opt-in infomation.
   * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
   */
  async createMarketplaceOptin(
    { marketplace, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.createMarketplaceOptin().validate(
      {
        marketplace,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.createMarketplaceOptin().validate(
      {
        marketplace,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createMarketplaceOptin",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/${marketplace}/optin/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.UpdatedResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createMarketplaceOptin",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ProductCreateUpdateSchemaV2} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Create a product.
   * @description: This API allows to create product.
   */
  async createProduct({ body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.createProduct().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.createProduct().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createProduct",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createProduct",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ProductBulkAssets} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Create a Bulk asset upload Job.
   * @description: This API helps to create a bulk asset upload job.
   */
  async createProductAssetsInBulk(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.createProductAssetsInBulk().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.createProductAssetsInBulk().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createProductAssetsInBulk",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/assets/bulk/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createProductAssetsInBulk",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ProductBundleRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetProductBundleCreateResponse>} - Success response
   * @summary: Create Product Bundle
   * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
   */
  async createProductBundle({ body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.createProductBundle().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.createProductBundle().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createProductBundle",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.GetProductBundleCreateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createProductBundle",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ProductTemplateDownloadsExport} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductDownloadsResponse>} - Success response
   * @summary: Create a product export job.
   * @description: This API helps to create a Inventory export job.
   */
  async createProductExportJob(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.createProductExportJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.createProductExportJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createProductExportJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/downloads/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductDownloadsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createProductExportJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
   * @param {BulkProductRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Create products in bulk associated with given batch Id.
   * @description: This API helps to create products in bulk push to kafka for approval/creation.
   */
  async createProductsInBulk(
    { batchId, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.createProductsInBulk().validate(
      {
        batchId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.createProductsInBulk().validate(
      {
        batchId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createProductsInBulk",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk/${batchId}`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createProductsInBulk",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ValidateSizeGuide} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Create a size guide.
   * @description: This API allows to create a size guide associated to a brand.
   */
  async createSizeGuide({ body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.createSizeGuide().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.createSizeGuide().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createSizeGuide",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createSizeGuide",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.batchId - Batch Id of the bulk delete job.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Delete Bulk Inventory job.
   * @description: This API allows to delete bulk Inventory job associated with company.
   */
  async deleteBulkInventoryJob(
    { batchId } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.deleteBulkInventoryJob().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.deleteBulkInventoryJob().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteBulkInventoryJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/${batchId}/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteBulkInventoryJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.size - Size that is to be deleted.
   * @param {number} arg.itemId - Id of the product associated with Inventory
   *   to be deleted.
   * @param {number} arg.locationId - Location ID of store of which inventory
   *   is to be deleted.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Delete a Inventory.
   * @description: This API allows to delete inventory of a particular product for particular company.
   */
  async deleteInventory(
    { size, itemId, locationId } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.deleteInventory().validate(
      {
        size,
        itemId,
        locationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.deleteInventory().validate(
      {
        size,
        itemId,
        locationId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteInventory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}/location/${locationId}/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteInventory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Id of the product to be updated.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Delete a product.
   * @description: This API allows to delete product.
   */
  async deleteProduct({ itemId } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.deleteProduct().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.deleteProduct().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteProduct",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteProduct",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Delete Bulk product job.
   * @description: This API allows to delete bulk product job associated with company.
   */
  async deleteProductBulkJob(
    { batchId } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.deleteProductBulkJob().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.deleteProductBulkJob().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteProductBulkJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk/${batchId}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteProductBulkJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Item code of the product of which size is to be get.
   * @param {string} arg.sellerIdentifier - Size Identifier (Seller Identifier
   *   or Primary Identifier) of which inventory is to get.
   * @param {InventoryRequestSchemaV2} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryUpdateResponse>} - Success response
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store.
   */
  async deleteRealtimeInventory(
    { itemId, sellerIdentifier, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.deleteRealtimeInventory().validate(
      {
        itemId,
        sellerIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.deleteRealtimeInventory().validate(
      {
        itemId,
        sellerIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteRealtimeInventory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/inventory/${sellerIdentifier}`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryUpdateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteRealtimeInventory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Item Id of the product associated with size
   *   to be deleted.
   * @param {string} arg.size - Size to be deleted.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductSizeDeleteResponse>} - Success response
   * @summary: Delete a Size associated with product.
   * @description: This API allows to delete size associated with product.
   */
  async deleteSize({ itemId, size } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.deleteSize().validate(
      {
        itemId,
        size,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.deleteSize().validate(
      {
        itemId,
        size,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteSize",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductSizeDeleteResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteSize",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.itemType - An `item_type` defines the type of item.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @summary: Download Product Template View
   * @description: Allows you to download product template data
   */
  async downloadInventoryTemplateView(
    { itemType } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.downloadInventoryTemplateView().validate(
      {
        itemType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.downloadInventoryTemplateView().validate(
      {
        itemType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for downloadInventoryTemplateView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["item_type"] = itemType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/templates/download/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(responseData, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for downloadInventoryTemplateView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A `slug` is a unique identifier for a
   *   particular template.
   * @param {string} [arg.itemType] - An `item_type` defines the type of item.
   *   The default value is standard.
   * @param {string} [arg.type] - Format type of the sample file. The default
   *   value is excel.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @summary: Download Product Template View
   * @description: Allows you to download product template data
   */
  async downloadProductTemplateViews(
    { slug, itemType, type } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.downloadProductTemplateViews().validate(
      {
        slug,
        itemType,
        type,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.downloadProductTemplateViews().validate(
      {
        slug,
        itemType,
        type,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for downloadProductTemplateViews",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["item_type"] = itemType;
    query_params["type"] = type;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/${slug}/download/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(responseData, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for downloadProductTemplateViews",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Id of the product to be updated.
   * @param {ProductCreateUpdateSchemaV2} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Edit a product.
   * @description: This API allows to edit product.
   */
  async editProduct({ itemId, body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.editProduct().validate(
      {
        itemId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.editProduct().validate(
      {
        itemId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for editProduct",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for editProduct",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.filterType] - Filter type from any one of ['brand',
   *   'store', 'type']
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryConfig>} - Success response
   * @summary: Get List of different filters for inventory export
   * @description: This API allows get List of different filters like brand, store, and type for inventory export.
   */
  async exportInventoryConfig(
    { filterType } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.exportInventoryConfig().validate(
      {
        filterType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.exportInventoryConfig().validate(
      {
        filterType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for exportInventoryConfig",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["filter_type"] = filterType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/configuration/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryConfig().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for exportInventoryConfig",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Page no
   * @param {number} [arg.pageSize] - Page size
   * @param {string} [arg.q] - Search using hsn code, description, reporting_hsn
   * @param {string} [arg.type] - Search using type
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<HsnCodesListingResponseSchemaV2>} - Success response
   * @summary: Hsn Code List.
   * @description: Hsn Code List.
   */
  async getAllProductHsnCodes(
    { pageNo, pageSize, q, type } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getAllProductHsnCodes().validate(
      {
        pageNo,
        pageSize,
        q,
        type,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getAllProductHsnCodes().validate(
      {
        pageNo,
        pageSize,
        q,
        type,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAllProductHsnCodes",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["type"] = type;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/hsn/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.HsnCodesListingResponseSchemaV2().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAllProductHsnCodes",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - Category unique id
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SingleCategoryResponse>} - Success response
   * @summary: Get product category by uid
   * @description: This API gets meta associated to product categories.
   */
  async getCategoryData({ uid } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.getCategoryData().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getCategoryData().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCategoryData",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/${uid}/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SingleCategoryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCategoryData",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.isActive] - The is_active status for the optin id.
   * @param {string} [arg.q] - The search value to filter the list.
   * @param {number} [arg.pageNo] - The number of page for the company id.
   * @param {number} [arg.pageSize] - Number of records that can be seen on
   *   the page for the company id.
   * @param {string} [arg.marketplace] - The marketplace platform associated
   *   with the company id.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OptinCompanyBrandDetailsView>} - Success response
   * @summary: Get the Company Brand details of Optin.
   * @description: Get the details of the Brands associated with the given company_id passed.
   */
  async getCompanyBrandDetail(
    { isActive, q, pageNo, pageSize, marketplace } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getCompanyBrandDetail().validate(
      {
        isActive,
        q,
        pageNo,
        pageSize,
        marketplace,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getCompanyBrandDetail().validate(
      {
        isActive,
        q,
        pageNo,
        pageSize,
        marketplace,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCompanyBrandDetail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["is_active"] = isActive;
    query_params["q"] = q;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["marketplace"] = marketplace;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-brand-details/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.OptinCompanyBrandDetailsView().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCompanyBrandDetail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OptinCompanyDetail>} - Success response
   * @summary: Get the Company details.
   * @description: Get the details of the company associated with the given company_id passed.
   */
  async getCompanyDetail({ headers } = { headers: false }) {
    const { error } = CatalogValidator.getCompanyDetail().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getCompanyDetail().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCompanyDetail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-details/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.OptinCompanyDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCompanyDetail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OptinCompanyMetrics>} - Success response
   * @summary: Get the Company metrics
   * @description: Get the Company metrics associated with the company ID passed.
   */
  async getCompanyMetrics({ headers } = { headers: false }) {
    const { error } = CatalogValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCompanyMetrics",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-metrics/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.OptinCompanyMetrics().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCompanyMetrics",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - A `uid` is a unique identifier of a department.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DepartmentsResponse>} - Success response
   * @summary: Get specific departments details by passing in unique id of the department.
   * @description: Allows you to get department data, by uid.
   */
  async getDepartmentData({ uid } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.getDepartmentData().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getDepartmentData().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDepartmentData",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/${uid}/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.DepartmentsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDepartmentData",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.attributeSlug - Slug of the attribute for which you
   *   want to view the genders
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GenderDetail>} - Success response
   * @summary: Get gender attribute details
   * @description: This API allows to view the gender attribute details.
   */
  async getGenderAttribute(
    { attributeSlug } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getGenderAttribute().validate(
      {
        attributeSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getGenderAttribute().validate(
      {
        attributeSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getGenderAttribute",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-attributes/${attributeSlug}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.GenderDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getGenderAttribute",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Unique id
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<HsnCode>} - Success response
   * @summary: Fetch Hsn Code.
   * @description: Fetch Hsn Code.
   */
  async getHsnCode({ id } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.getHsnCode().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getHsnCode().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getHsnCode",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/${id}/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const { error: res_error } = CatalogModel.HsnCode().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getHsnCode",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetInventoriesResponse>} - Success response
   * @summary: Get Inventory for company
   * @description: This API allows get Inventories data for particular company.
   */
  async getInventories(
    {
      itemId,
      size,
      pageNo,
      pageSize,
      q,
      sellable,
      storeIds,
      sizeIdentifier,
    } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getInventories().validate(
      {
        itemId,
        size,
        pageNo,
        pageSize,
        q,
        sellable,
        storeIds,
        sizeIdentifier,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getInventories().validate(
      {
        itemId,
        size,
        pageNo,
        pageSize,
        q,
        sellable,
        storeIds,
        sizeIdentifier,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getInventories",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["item_id"] = itemId;
    query_params["size"] = size;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["sellable"] = sellable;
    query_params["store_ids"] = storeIds;
    query_params["size_identifier"] = sizeIdentifier;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventories`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.GetInventoriesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getInventories",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BulkInventoryGet>} - Success response
   * @summary: Get a list of all bulk Inventory upload jobs.
   * @description: This API helps to get bulk Inventory upload jobs data.
   */
  async getInventoryBulkUploadHistory(
    { pageNo, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getInventoryBulkUploadHistory().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getInventoryBulkUploadHistory().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getInventoryBulkUploadHistory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.BulkInventoryGet().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getInventoryBulkUploadHistory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryResponsePaginated>} - Success response
   * @summary: Get Inventory for company
   * @description: This API allows get Inventory data for particular company grouped by size and store.
   */
  async getInventoryBySize(
    { itemId, size, pageNo, pageSize, q, sellable } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getInventoryBySize().validate(
      {
        itemId,
        size,
        pageNo,
        pageSize,
        q,
        sellable,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getInventoryBySize().validate(
      {
        itemId,
        size,
        pageNo,
        pageSize,
        q,
        sellable,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getInventoryBySize",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["sellable"] = sellable;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryResponsePaginated().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getInventoryBySize",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventorySellerIdentifierResponsePaginated>} - Success response
   * @summary: Get Inventory for company
   * @description: This API allows get Inventory data for particular company grouped by size and store.
   */
  async getInventoryBySizeIdentifier(
    { itemId, sizeIdentifier, pageNo, pageSize, q, locationIds } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getInventoryBySizeIdentifier().validate(
      {
        itemId,
        sizeIdentifier,
        pageNo,
        pageSize,
        q,
        locationIds,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getInventoryBySizeIdentifier().validate(
      {
        itemId,
        sizeIdentifier,
        pageNo,
        pageSize,
        q,
        locationIds,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getInventoryBySizeIdentifier",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["location_ids"] = locationIds;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/inventory/${sizeIdentifier}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventorySellerIdentifierResponsePaginated().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getInventoryBySizeIdentifier",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryExportJob>} - Success response
   * @summary: Get Inventory export history.
   * @description: This API helps to get Inventory export history.
   */
  async getInventoryExport({ headers } = { headers: false }) {
    const { error } = CatalogValidator.getInventoryExport().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getInventoryExport().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getInventoryExport",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryExportJob().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getInventoryExport",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetOptInPlatform>} - Success response
   * @summary: Get opt-in infomation.
   * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
   */
  async getMarketplaceOptinDetail({ headers } = { headers: false }) {
    const { error } = CatalogValidator.getMarketplaceOptinDetail().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getMarketplaceOptinDetail().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getMarketplaceOptinDetail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.GetOptInPlatform().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getMarketplaceOptinDetail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AssignStore} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<StoreAssignResponse>} - Success response
   * @summary: Location Reassignment
   * @description: Location Reassignment
   */
  async getOptimalLocations({ body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.getOptimalLocations().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getOptimalLocations().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOptimalLocations",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/location/reassign/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.StoreAssignResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOptimalLocations",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Item Id of the product.
   * @param {number} [arg.brandUid] - Brand Id of the product.
   * @param {string} [arg.itemCode] - Item code of the product.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SingleProductResponse>} - Success response
   * @summary: Get a single product.
   * @description: This API helps to get data associated to a particular product.
   */
  async getProduct(
    { itemId, brandUid, itemCode } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getProduct().validate(
      {
        itemId,
        brandUid,
        itemCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getProduct().validate(
      {
        itemId,
        brandUid,
        itemCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProduct",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["brand_uid"] = brandUid;
    query_params["item_code"] = itemCode;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SingleProductResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProduct",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BulkAssetResponse>} - Success response
   * @summary: Get a list of all bulk asset jobs.
   * @description: This API helps to get bulk asset jobs data associated to a particular company.
   */
  async getProductAssetsInBulk(
    { pageNo, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getProductAssetsInBulk().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductAssetsInBulk().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductAssetsInBulk",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/assets/bulk/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.BulkAssetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductAssetsInBulk",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.category - It is the name of the l3 cateogry
   * @param {boolean} [arg.filter] - If true, returns filtered values, else
   *   returns all the attributes
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductAttributesResponse>} - Success response
   * @summary: Get list of all the attributes by their l3_categories
   * @description: This API allows to list all the attributes by their l3_categories.
   */
  async getProductAttributes(
    { category, filter } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getProductAttributes().validate(
      {
        category,
        filter,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductAttributes().validate(
      {
        category,
        filter,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductAttributes",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["category"] = category;
    query_params["filter"] = filter;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-attributes/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductAttributesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductAttributes",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.search] - Search string to filter the results by batch id
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductBulkRequestList>} - Success response
   * @summary: Get a list of all bulk product upload jobs.
   * @description: This API helps to get bulk product upload jobs data.
   */
  async getProductBulkUploadHistory(
    { search, pageNo, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getProductBulkUploadHistory().validate(
      {
        search,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductBulkUploadHistory().validate(
      {
        search,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getProductBulkUploadHistory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["search"] = search;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductBulkRequestList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getProductBulkUploadHistory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - A search string that is searched with product
   *   bundle name.
   * @param {string[]} [arg.slug] - Slugs of bundles to be retrieved.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetProductBundleListingResponse>} - Success response
   * @summary: List all Product Bundles
   * @description: Get all product bundles for a particular company
   */
  async getProductBundle({ q, slug } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.getProductBundle().validate(
      {
        q,
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getProductBundle().validate(
      {
        q,
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductBundle",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["slug"] = slug;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.GetProductBundleListingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductBundle",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular
   *   detail. Pass the `id` of the keywords which you want to retrieve.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetProductBundleResponse>} - Success response
   * @summary: Get a particular Product Bundle details
   * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
   */
  async getProductBundleDetail({ id } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.getProductBundleDetail().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductBundleDetail().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductBundleDetail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/${id}/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.GetProductBundleResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductBundleDetail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductDownloadsResponse>} - Success response
   * @summary: Allows you to list all product templates export list details
   * @description: Can view details including trigger data, task id , etc.
   */
  async getProductExportJobs(
    { status, fromDate, toDate, q } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getProductExportJobs().validate(
      {
        status,
        fromDate,
        toDate,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductExportJobs().validate(
      {
        status,
        fromDate,
        toDate,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductExportJobs",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["status"] = status;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/downloads/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductDownloadsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductExportJobs",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.itemCode] - Item code of the product size.
   * @param {number} arg.itemId - Item Id of the product size.
   * @param {number} [arg.brandUid] - Brand Id of the product size.
   * @param {number} [arg.uid] - Id of the product size.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductListingResponse>} - Success response
   * @summary: Get a single product size.
   * @description: This API helps to get data associated to a particular product size.
   */
  async getProductSize(
    { itemId, itemCode, brandUid, uid } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getProductSize().validate(
      {
        itemId,
        itemCode,
        brandUid,
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getProductSize().validate(
      {
        itemId,
        itemCode,
        brandUid,
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductSize",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["item_code"] = itemCode;
    query_params["brand_uid"] = brandUid;
    query_params["uid"] = uid;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductListingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductSize",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductTagsViewResponse>} - Success response
   * @summary: Get a list of all tags associated with company.
   * @description: This API helps to get tags data associated to a particular company.
   */
  async getProductTags({ headers } = { headers: false }) {
    const { error } = CatalogValidator.getProductTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getProductTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductTags",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/tags`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductTagsViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductTags",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ValidateProduct>} - Success response
   * @summary: Validate product/size data
   * @description: This API validates product data.
   */
  async getProductValidation({ headers } = { headers: false }) {
    const { error } = CatalogValidator.getProductValidation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductValidation().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductValidation",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/validation/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ValidateProduct().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductValidation",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductListingResponseV2>} - Success response
   * @summary: Get product list
   * @description: This API gets meta associated to products.
   */
  async getProducts(
    {
      brandIds,
      categoryIds,
      itemIds,
      departmentIds,
      itemCode,
      q,
      tags,
      pageNo,
      pageSize,
    } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getProducts().validate(
      {
        brandIds,
        categoryIds,
        itemIds,
        departmentIds,
        itemCode,
        q,
        tags,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getProducts().validate(
      {
        brandIds,
        categoryIds,
        itemIds,
        departmentIds,
        itemCode,
        q,
        tags,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProducts",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["brand_ids"] = brandIds;
    query_params["category_ids"] = categoryIds;
    query_params["item_ids"] = itemIds;
    query_params["department_ids"] = departmentIds;
    query_params["item_code"] = itemCode;
    query_params["q"] = q;
    query_params["tags"] = tags;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductListingResponseV2().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProducts",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.sellerAppId - Id of the seller application which is
   *   serving the invetory/catalog of the company
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CrossSellingResponse>} - Success response
   * @summary: Analytics data of catalog and inventory that are being cross-selled.
   * @description: Analytics data of catalog and inventory that are being cross-selled.
   */
  async getSellerInsights(
    { sellerAppId } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getSellerInsights().validate(
      {
        sellerAppId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getSellerInsights().validate(
      {
        sellerAppId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getSellerInsights",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/cross-selling/${sellerAppId}/analytics/insights/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.CrossSellingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getSellerInsights",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.reportingHsn - Reporting_hsn
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<HSNDataInsertV2>} - Success response
   * @summary: Hsn Code List.
   * @description: Hsn Code List.
   */
  async getSingleProductHSNCode(
    { reportingHsn } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getSingleProductHSNCode().validate(
      { reportingHsn },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getSingleProductHSNCode().validate(
      { reportingHsn },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getSingleProductHSNCode",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/hsn/${reportingHsn}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.HSNDataInsertV2().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getSingleProductHSNCode",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id of the size guide to be viewed.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SizeGuideResponse>} - Success response
   * @summary: Get a single size guide.
   * @description: This API helps to get data associated to a size guide.
   */
  async getSizeGuide({ id } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.getSizeGuide().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getSizeGuide().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getSizeGuide",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SizeGuideResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getSizeGuide",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.active] - Filter size guide on basis of active, in-active
   * @param {string} [arg.q] - Query that is to be searched.
   * @param {string} [arg.tag] - To filter size guide on basis of tag.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ListSizeGuide>} - Success response
   * @summary: Get list of size guides
   * @description: This API allows to view all the size guides associated to the seller.
   */
  async getSizeGuides(
    { active, q, tag, pageNo, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getSizeGuides().validate(
      {
        active,
        q,
        tag,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getSizeGuides().validate(
      {
        active,
        q,
        tag,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getSizeGuides",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["active"] = active;
    query_params["q"] = q;
    query_params["tag"] = tag;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ListSizeGuide().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getSizeGuides",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search related the store for the company id.
   * @param {number} [arg.pageNo] - The number of page for the company id.
   * @param {number} [arg.pageSize] - Number of records that can be seen on
   *   the page for the company id.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<OptinStoreDetails>} - Success response
   * @summary: Get the Store details.
   * @description: Get the details of the store associated with the company ID passed.
   */
  async getStoreDetail(
    { q, pageNo, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getStoreDetail().validate(
      {
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getStoreDetail().validate(
      {
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getStoreDetail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/location-details/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.OptinStoreDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getStoreDetail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Get list of variants of item Id
   * @param {string} arg.variantType - Get multiple products filtered by variant type
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductVariantsResponse>} - Success response
   * @summary: Get product list
   * @description: This API gets meta associated to products.
   */
  async getVariantsOfProducts(
    { itemId, variantType, pageNo, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.getVariantsOfProducts().validate(
      {
        itemId,
        variantType,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getVariantsOfProducts().validate(
      {
        itemId,
        variantType,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getVariantsOfProducts",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/variants/${variantType}`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductVariantsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getVariantsOfProducts",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.level] - Get category for multiple levels
   * @param {string} [arg.departments] - Get category for multiple departments filtered
   * @param {string} [arg.q] - Get multiple categories filtered by search string
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CategoryResponse>} - Success response
   * @summary: Get product categories list
   * @description: This API gets meta associated to product categories.
   */
  async listCategories(
    { level, departments, q, pageNo, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.listCategories().validate(
      {
        level,
        departments,
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.listCategories().validate(
      {
        level,
        departments,
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for listCategories",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["level"] = level;
    query_params["departments"] = departments;
    query_params["q"] = q;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.CategoryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for listCategories",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

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
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DepartmentsResponse>} - Success response
   * @summary: List all Departments.
   * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type.
   */
  async listDepartmentsData(
    { pageNo, itemType, pageSize, name, search, isActive } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.listDepartmentsData().validate(
      {
        pageNo,
        itemType,
        pageSize,
        name,
        search,
        isActive,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.listDepartmentsData().validate(
      {
        pageNo,
        itemType,
        pageSize,
        name,
        search,
        isActive,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for listDepartmentsData",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["item_type"] = itemType;
    query_params["page_size"] = pageSize;
    query_params["name"] = name;
    query_params["search"] = search;
    query_params["is_active"] = isActive;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.DepartmentsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for listDepartmentsData",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<HSNCodesResponse>} - Success response
   * @summary: List HSN Codes
   * @description: Allows you to list all hsn Codes
   */
  async listHSNCodes({ headers } = { headers: false }) {
    const { error } = CatalogValidator.listHSNCodes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.listHSNCodes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for listHSNCodes",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/hsn/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.HSNCodesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for listHSNCodes",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.status] - Status of the export job.
   * @param {string} [arg.fromDate] - Inventory export history filtered
   *   according to from_date.
   * @param {string} [arg.toDate] - Inventory export history filtered
   *   according to from_date.
   * @param {string} [arg.q] - Inventory export history filtered according to task ID.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryExportJobListResponse>} - Success response
   * @summary: Get the history of the inventory export.
   * @description: This API helps you the get the history of inventory jobs depending on the filtered criteria.
   */
  async listInventoryExport(
    { status, fromDate, toDate, q } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.listInventoryExport().validate(
      {
        status,
        fromDate,
        toDate,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.listInventoryExport().validate(
      {
        status,
        fromDate,
        toDate,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for listInventoryExport",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["status"] = status;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory/download/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryExportJobListResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for listInventoryExport",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.department - A `department` is the name of a
   *   particular department.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<TemplatesResponse>} - Success response
   * @summary: List all Templates
   * @description: Allows you to list all product templates, also can filter by department
   */
  async listProductTemplate(
    { department } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.listProductTemplate().validate(
      {
        department,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.listProductTemplate().validate(
      {
        department,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for listProductTemplate",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["department"] = department;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.TemplatesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for listProductTemplate",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.departments - A `department` is name of a departments
   *   whose category needs to be listed. Can specify multiple departments.
   * @param {string} arg.itemType - An `item_type` is the type of item, it can
   *   be `set`, `standard`, `digital`, etc.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProdcutTemplateCategoriesResponse>} - Success response
   * @summary: List Department specifiec product categories
   * @description: Allows you to list all product categories values for the departments specified
   */
  async listProductTemplateCategories(
    { departments, itemType } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.listProductTemplateCategories().validate(
      {
        departments,
        itemType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.listProductTemplateCategories().validate(
      {
        departments,
        itemType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for listProductTemplateCategories",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["departments"] = departments;
    query_params["item_type"] = itemType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/categories/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProdcutTemplateCategoriesResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for listProductTemplateCategories",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductDownloadsResponse>} - Success response
   * @summary: Allows you to list all product templates export list details
   * @description: Can view details including trigger data, task id , etc.
   */
  async listProductTemplateExportDetails({ headers } = { headers: false }) {
    const {
      error,
    } = CatalogValidator.listProductTemplateExportDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.listProductTemplateExportDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for listProductTemplateExportDetails",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/downloads/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductDownloadsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for listProductTemplateExportDetails",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.filter - A `filter` is the unique identifier of the
   *   type of value required.
   * @param {string} [arg.templateTag] - A `template_tag` is the identifier of
   *   the type of template required.
   * @param {string} [arg.itemType] - A `item_type` is the identifier of the
   *   type of template required.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ProductConfigurationDownloads>} - Success response
   * @summary: Allows you to list all values for Templates, Brands or Type
   * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
   */
  async listTemplateBrandTypeValues(
    { filter, templateTag, itemType } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.listTemplateBrandTypeValues().validate(
      {
        filter,
        templateTag,
        itemType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.listTemplateBrandTypeValues().validate(
      {
        filter,
        templateTag,
        itemType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for listTemplateBrandTypeValues",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["filter"] = filter;
    query_params["template_tag"] = templateTag;
    query_params["item_type"] = itemType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/downloads/configuration/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.ProductConfigurationDownloads().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for listTemplateBrandTypeValues",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - Category unique id
   * @param {CategoryRequestBody} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CategoryUpdateResponse>} - Success response
   * @summary: Update product categories
   * @description: Update a product category using this api
   */
  async updateCategory({ uid, body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.updateCategory().validate(
      {
        uid,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.updateCategory().validate(
      {
        uid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateCategory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/${uid}/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.CategoryUpdateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateCategory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uid - A `uid` is a unique identifier of a department.
   * @param {DepartmentCreateUpdate} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DepartmentModel>} - Success response
   * @summary: Update the department by their uid.
   * @description: Update the department by their uid using this API.
   */
  async updateDepartment({ uid, body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.updateDepartment().validate(
      {
        uid,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.updateDepartment().validate(
      {
        uid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateDepartment",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/${uid}/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.DepartmentModel().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateDepartment",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Unique id
   * @param {HsnUpsert} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<HsnCode>} - Success response
   * @summary: Update Hsn Code.
   * @description: Update Hsn Code.
   */
  async updateHsnCode({ id, body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.updateHsnCode().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.updateHsnCode().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateHsnCode",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/${id}/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const { error: res_error } = CatalogModel.HsnCode().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateHsnCode",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InventoryRequestSchemaV2} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryUpdateResponse>} - Success response
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store.
   */
  async updateInventories({ body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.updateInventories().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.updateInventories().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateInventories",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryUpdateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateInventories",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular
   *   detail. Pass the `id` of the keywords which you want to delete.
   * @param {ProductBundleUpdateRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetProductBundleCreateResponse>} - Success response
   * @summary: Update a Product Bundle
   * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
   */
  async updateProductBundle(
    { id, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.updateProductBundle().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.updateProductBundle().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateProductBundle",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/${id}/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.GetProductBundleCreateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateProductBundle",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Item code of the product of which size is to be get.
   * @param {string} arg.sellerIdentifier - Size Identifier (Seller Identifier
   *   or Primary Identifier) of which inventory is to get.
   * @param {InventoryRequestSchemaV2} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryUpdateResponse>} - Success response
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store.
   */
  async updateRealtimeInventory(
    { itemId, sellerIdentifier, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.updateRealtimeInventory().validate(
      {
        itemId,
        sellerIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.updateRealtimeInventory().validate(
      {
        itemId,
        sellerIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateRealtimeInventory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/inventory/${sellerIdentifier}`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryUpdateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateRealtimeInventory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Mongo id of the size guide to be edited
   * @param {ValidateSizeGuide} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SuccessResponse>} - Success response
   * @summary: Edit a size guide.
   * @description: This API allows to edit a size guide.
   */
  async updateSizeGuide({ id, body } = {}, { headers } = { headers: false }) {
    const { error } = CatalogValidator.updateSizeGuide().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.updateSizeGuide().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateSizeGuide",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}/`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateSizeGuide",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.department - Department of the product to be uploaded.
   * @param {string} arg.productType - Product type of the product to be
   *   uploaded i.e. set, standard , digital.
   * @param {BulkJob} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BulkResponse>} - Success response
   * @summary: Create a Bulk product to upload job.
   * @description: This API helps to create a bulk products upload job.
   */
  async uploadBulkProducts(
    { department, productType, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.uploadBulkProducts().validate(
      {
        department,
        productType,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.uploadBulkProducts().validate(
      {
        department,
        productType,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for uploadBulkProducts",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["department"] = department;
    query_params["product_type"] = productType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/bulk`,
      query_params,
      body,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.BulkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for uploadBulkProducts",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A `slug` is a unique identifier for a
   *   particular template.
   * @param {string} [arg.itemType] - An `item_type` defines the type of item.
   *   The default value is standard.
   * @param {boolean} [arg.bulk] - This specification determines the schema
   *   type to be retrieved. When set to true, it will return the schema for
   *   bulk data; when set to false, it will provide the schema for a single
   *   product. The default value is false.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<TemplatesValidationResponse>} - Success response
   * @summary: Validate Product Template Schema
   * @description: Allows you to list all product templates validation values for all the fields present in the database
   */
  async validateProductTemplate(
    { slug, itemType, bulk } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.validateProductTemplate().validate(
      {
        slug,
        itemType,
        bulk,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.validateProductTemplate().validate(
      {
        slug,
        itemType,
        bulk,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for validateProductTemplate",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["item_type"] = itemType;
    query_params["bulk"] = bulk;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/${slug}/validation/schema/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.TemplatesValidationResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for validateProductTemplate",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.itemType - An `item_type` defines the type of item.
   *   The default value is standard.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryValidationResponse>} - Success response
   * @summary: Validate Product Template Schema
   * @description: Allows you to list all product templates validation values for all the fields present in the database
   */
  async validateProductTemplateSchema(
    { itemType } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CatalogValidator.validateProductTemplateSchema().validate(
      {
        itemType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.validateProductTemplateSchema().validate(
      {
        itemType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for validateProductTemplateSchema",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["item_type"] = itemType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/templates/validation/schema/`,
      query_params,
      undefined,
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogModel.InventoryValidationResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for validateProductTemplateSchema",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Catalog;
