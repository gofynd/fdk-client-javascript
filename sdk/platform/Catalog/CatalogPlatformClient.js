const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CatalogPlatformValidator = require("./CatalogPlatformValidator");
const CatalogPlatformModel = require("./CatalogPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Catalog {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {CatalogPlatformValidator.AddInventoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name addInventory
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/addInventory/).
   */
  async addInventory(
    { itemId, size, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.addInventory().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.addInventory().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > addInventory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > addInventory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.AllSizesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAllSizes>} - Success response
   * @name allSizes
   * @summary: All Sizes for a given Product
   * @description: This API allows to get  All Sizes for a given Product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/allSizes/).
   */
  async allSizes(
    { itemId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.allSizes().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogPlatformValidator.allSizes().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > allSizes \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/all_sizes`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAllSizes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > allSizes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.BulkHsnCodeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.BulkHsnResponse>} - Success response
   * @name bulkHsnCode
   * @summary: Bulk Create or Update Hsn Code.
   * @description: Bulk Create or Update Hsn Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/bulkHsnCode/).
   */
  async bulkHsnCode(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.bulkHsnCode().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogPlatformValidator.bulkHsnCode().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > bulkHsnCode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/bulk/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.BulkHsnResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > bulkHsnCode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateBulkInventoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name createBulkInventory
   * @summary: Create products in bulk associated with given batch Id.
   * @description: This API helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkInventory/).
   */
  async createBulkInventory(
    { batchId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createBulkInventory().validate(
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
    } = CatalogPlatformValidator.createBulkInventory().validate(
      {
        batchId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createBulkInventory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/${batchId}/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createBulkInventory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateBulkInventoryJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
   * @name createBulkInventoryJob
   * @summary: Create a Bulk Inventory upload Job.
   * @description: This API helps to create a bulk Inventory upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkInventoryJob/).
   */
  async createBulkInventoryJob(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.createBulkInventoryJob().validate(
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
    } = CatalogPlatformValidator.createBulkInventoryJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createBulkInventoryJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.BulkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createBulkInventoryJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateBulkProductUploadJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
   * @name createBulkProductUploadJob
   * @summary: Create a Bulk product to upload job.
   * @description: This API helps to create a bulk products upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkProductUploadJob/).
   */
  async createBulkProductUploadJob(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.createBulkProductUploadJob().validate(
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
    } = CatalogPlatformValidator.createBulkProductUploadJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createBulkProductUploadJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.BulkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createBulkProductUploadJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateCategoriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CategoryCreateResponse>} - Success response
   * @name createCategories
   * @summary: Create product categories
   * @description: This API lets user create product categories - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCategories/).
   */
  async createCategories(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createCategories().validate(
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
    } = CatalogPlatformValidator.createCategories().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createCategories \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CategoryCreateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createCategories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateDepartmentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DepartmentCreateResponse>} -
   *   Success response
   * @name createDepartments
   * @summary: Create the department.
   * @description: Create departments using the API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createDepartments/).
   */
  async createDepartments(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createDepartments().validate(
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
    } = CatalogPlatformValidator.createDepartments().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createDepartments \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.DepartmentCreateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createDepartments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateInventoryExportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryExportResponse>} - Success response
   * @name createInventoryExport
   * @summary: Create an inventory export job.
   * @description: This API helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createInventoryExport/).
   */
  async createInventoryExport(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createInventoryExport().validate(
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
    } = CatalogPlatformValidator.createInventoryExport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createInventoryExport \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory/download/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryExportResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createInventoryExport \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateInventoryExportJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryExportResponse>} - Success response
   * @name createInventoryExportJob
   * @summary: Create a Inventory export Job.
   * @description: This API helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createInventoryExportJob/).
   */
  async createInventoryExportJob(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.createInventoryExportJob().validate(
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
    } = CatalogPlatformValidator.createInventoryExportJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createInventoryExportJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryExportResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createInventoryExportJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateMarketplaceOptinParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.UpdatedResponse>} - Success response
   * @name createMarketplaceOptin
   * @summary: Create/Update opt-in infomation.
   * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMarketplaceOptin/).
   */
  async createMarketplaceOptin(
    { marketplace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.createMarketplaceOptin().validate(
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
    } = CatalogPlatformValidator.createMarketplaceOptin().validate(
      {
        marketplace,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createMarketplaceOptin \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/${marketplace}/optin/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.UpdatedResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createMarketplaceOptin \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateProductParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name createProduct
   * @summary: Create a product.
   * @description: This API allows to create product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProduct/).
   */
  async createProduct(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createProduct().validate(
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
    } = CatalogPlatformValidator.createProduct().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createProduct \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createProduct \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateProductAssetsInBulkParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name createProductAssetsInBulk
   * @summary: Create a Bulk asset upload Job.
   * @description: This API helps to create a bulk asset upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductAssetsInBulk/).
   */
  async createProductAssetsInBulk(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.createProductAssetsInBulk().validate(
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
    } = CatalogPlatformValidator.createProductAssetsInBulk().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createProductAssetsInBulk \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/assets/bulk/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createProductAssetsInBulk \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateProductBundleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetProductBundleCreateResponse>}
   *   - Success response
   *
   * @name createProductBundle
   * @summary: Create Product Bundle
   * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductBundle/).
   */
  async createProductBundle(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createProductBundle().validate(
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
    } = CatalogPlatformValidator.createProductBundle().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createProductBundle \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetProductBundleCreateResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createProductBundle \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateProductExportJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
   *   Success response
   * @name createProductExportJob
   * @summary: Create a product export job.
   * @description: This API helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductExportJob/).
   */
  async createProductExportJob(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.createProductExportJob().validate(
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
    } = CatalogPlatformValidator.createProductExportJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createProductExportJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/downloads/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductDownloadsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createProductExportJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateProductsInBulkParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name createProductsInBulk
   * @summary: Create products in bulk associated with given batch Id.
   * @description: This API helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductsInBulk/).
   */
  async createProductsInBulk(
    { batchId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createProductsInBulk().validate(
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
    } = CatalogPlatformValidator.createProductsInBulk().validate(
      {
        batchId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createProductsInBulk \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk/${batchId}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createProductsInBulk \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateSizeGuideParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name createSizeGuide
   * @summary: Create a size guide.
   * @description: This API allows to create a size guide associated to a brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSizeGuide/).
   */
  async createSizeGuide(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createSizeGuide().validate(
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
    } = CatalogPlatformValidator.createSizeGuide().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createSizeGuide \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createSizeGuide \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DeleteBulkInventoryJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name deleteBulkInventoryJob
   * @summary: Delete Bulk Inventory job.
   * @description: This API allows to delete bulk Inventory job associated with company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteBulkInventoryJob/).
   */
  async deleteBulkInventoryJob(
    { batchId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.deleteBulkInventoryJob().validate(
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
    } = CatalogPlatformValidator.deleteBulkInventoryJob().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteBulkInventoryJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/${batchId}/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteBulkInventoryJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DeleteInventoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name deleteInventory
   * @summary: Delete a Inventory.
   * @description: This API allows to delete inventory of a particular product for particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteInventory/).
   */
  async deleteInventory(
    { size, itemId, locationId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.deleteInventory().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.deleteInventory().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > deleteInventory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}/location/${locationId}/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteInventory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DeleteProductParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name deleteProduct
   * @summary: Delete a product.
   * @description: This API allows to delete product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteProduct/).
   */
  async deleteProduct(
    { itemId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.deleteProduct().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.deleteProduct().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteProduct \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteProduct \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DeleteProductBulkJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name deleteProductBulkJob
   * @summary: Delete Bulk product job.
   * @description: This API allows to delete bulk product job associated with company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteProductBulkJob/).
   */
  async deleteProductBulkJob(
    { batchId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.deleteProductBulkJob().validate(
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
    } = CatalogPlatformValidator.deleteProductBulkJob().validate(
      {
        batchId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteProductBulkJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/bulk/${batchId}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteProductBulkJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DeleteRealtimeInventoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
   * @name deleteRealtimeInventory
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteRealtimeInventory/).
   */
  async deleteRealtimeInventory(
    { itemId, sellerIdentifier, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.deleteRealtimeInventory().validate(
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
    } = CatalogPlatformValidator.deleteRealtimeInventory().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > deleteRealtimeInventory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/inventory/${sellerIdentifier}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryUpdateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteRealtimeInventory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DeleteSizeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductSizeDeleteResponse>} -
   *   Success response
   * @name deleteSize
   * @summary: Delete a Size associated with product.
   * @description: This API allows to delete size associated with product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSize/).
   */
  async deleteSize(
    { itemId, size, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.deleteSize().validate(
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
    const { error: warrning } = CatalogPlatformValidator.deleteSize().validate(
      {
        itemId,
        size,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteSize \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductSizeDeleteResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteSize \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DownloadInventoryTemplateViewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @name downloadInventoryTemplateView
   * @summary: Download Product Template View
   * @description: Allows you to download product template data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/downloadInventoryTemplateView/).
   */
  async downloadInventoryTemplateView(
    { itemType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.downloadInventoryTemplateView().validate(
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
    } = CatalogPlatformValidator.downloadInventoryTemplateView().validate(
      {
        itemType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > downloadInventoryTemplateView \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(responseData, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > downloadInventoryTemplateView \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DownloadProductTemplateViewsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @name downloadProductTemplateViews
   * @summary: Download Product Template View
   * @description: Allows you to download product template data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/downloadProductTemplateViews/).
   */
  async downloadProductTemplateViews(
    { slug, itemType, type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.downloadProductTemplateViews().validate(
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
    } = CatalogPlatformValidator.downloadProductTemplateViews().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > downloadProductTemplateViews \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(responseData, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > downloadProductTemplateViews \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.EditProductParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name editProduct
   * @summary: Edit a product.
   * @description: This API allows to edit product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/editProduct/).
   */
  async editProduct(
    { itemId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.editProduct().validate(
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
    const { error: warrning } = CatalogPlatformValidator.editProduct().validate(
      {
        itemId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > editProduct \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > editProduct \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ExportInventoryConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryConfig>} - Success response
   * @name exportInventoryConfig
   * @summary: Get List of different filters for inventory export
   * @description: This API allows get List of different filters like brand, store, and type for inventory export. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/exportInventoryConfig/).
   */
  async exportInventoryConfig(
    { filterType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.exportInventoryConfig().validate(
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
    } = CatalogPlatformValidator.exportInventoryConfig().validate(
      {
        filterType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > exportInventoryConfig \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryConfig().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > exportInventoryConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetAllProductHsnCodesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HsnCodesListingResponseSchemaV2>}
   *   - Success response
   *
   * @name getAllProductHsnCodes
   * @summary: Hsn Code List.
   * @description: Hsn Code List. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllProductHsnCodes/).
   */
  async getAllProductHsnCodes(
    { pageNo, pageSize, q, type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getAllProductHsnCodes().validate(
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
    } = CatalogPlatformValidator.getAllProductHsnCodes().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getAllProductHsnCodes \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.HsnCodesListingResponseSchemaV2().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAllProductHsnCodes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetCategoryDataParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SingleCategoryResponse>} - Success response
   * @name getCategoryData
   * @summary: Get product category by uid
   * @description: This API gets meta associated to product categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCategoryData/).
   */
  async getCategoryData(
    { uid, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getCategoryData().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getCategoryData().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getCategoryData \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/${uid}/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SingleCategoryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCategoryData \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetCompanyBrandDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.OptinCompanyBrandDetailsView>} -
   *   Success response
   * @name getCompanyBrandDetail
   * @summary: Get the Company Brand details of Optin.
   * @description: Get the details of the Brands associated with the given company_id passed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyBrandDetail/).
   */
  async getCompanyBrandDetail(
    { isActive, q, pageNo, pageSize, marketplace, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getCompanyBrandDetail().validate(
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
    } = CatalogPlatformValidator.getCompanyBrandDetail().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getCompanyBrandDetail \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.OptinCompanyBrandDetailsView().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCompanyBrandDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetCompanyDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.OptinCompanyDetail>} - Success response
   * @name getCompanyDetail
   * @summary: Get the Company details.
   * @description: Get the details of the company associated with the given company_id passed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyDetail/).
   */
  async getCompanyDetail(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getCompanyDetail().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getCompanyDetail().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getCompanyDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-details/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.OptinCompanyDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCompanyDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetCompanyMetricsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.OptinCompanyMetrics>} - Success response
   * @name getCompanyMetrics
   * @summary: Get the Company metrics
   * @description: Get the Company metrics associated with the company ID passed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyMetrics/).
   */
  async getCompanyMetrics(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getCompanyMetrics().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getCompanyMetrics \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-metrics/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.OptinCompanyMetrics().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCompanyMetrics \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetDepartmentDataParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DepartmentsResponse>} - Success response
   * @name getDepartmentData
   * @summary: Get specific departments details by passing in unique id of the department.
   * @description: Allows you to get department data, by uid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDepartmentData/).
   */
  async getDepartmentData(
    { uid, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getDepartmentData().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getDepartmentData().validate(
      {
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getDepartmentData \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/${uid}/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.DepartmentsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getDepartmentData \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetGenderAttributeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GenderDetail>} - Success response
   * @name getGenderAttribute
   * @summary: Get gender attribute details
   * @description: This API allows to view the gender attribute details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getGenderAttribute/).
   */
  async getGenderAttribute(
    { attributeSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getGenderAttribute().validate(
      {
        attributeSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getGenderAttribute().validate(
      {
        attributeSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getGenderAttribute \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-attributes/${attributeSlug}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GenderDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getGenderAttribute \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetHsnCodeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HsnCode>} - Success response
   * @name getHsnCode
   * @summary: Fetch Hsn Code.
   * @description: Fetch Hsn Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getHsnCode/).
   */
  async getHsnCode(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getHsnCode().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogPlatformValidator.getHsnCode().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getHsnCode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/${id}/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.HsnCode().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getHsnCode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetInventoriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetInventoriesResponse>} - Success response
   * @name getInventories
   * @summary: Get Inventory for company
   * @description: This API allows get Inventories data for particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventories/).
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
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getInventories().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.getInventories().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getInventories \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetInventoriesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getInventories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetInventoryBulkUploadHistoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.BulkInventoryGet>} - Success response
   * @name getInventoryBulkUploadHistory
   * @summary: Get a list of all bulk Inventory upload jobs.
   * @description: This API helps to get bulk Inventory upload jobs data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBulkUploadHistory/).
   */
  async getInventoryBulkUploadHistory(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getInventoryBulkUploadHistory().validate(
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
    } = CatalogPlatformValidator.getInventoryBulkUploadHistory().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getInventoryBulkUploadHistory \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.BulkInventoryGet().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getInventoryBulkUploadHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetInventoryBySizeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryResponsePaginated>} -
   *   Success response
   * @name getInventoryBySize
   * @summary: Get Inventory for company
   * @description: This API allows get Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBySize/).
   */
  async getInventoryBySize(
    { itemId, size, pageNo, pageSize, q, sellable, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getInventoryBySize().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.getInventoryBySize().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getInventoryBySize \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryResponsePaginated().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getInventoryBySize \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetInventoryBySizeIdentifierParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
   *   - Success response
   *
   * @name getInventoryBySizeIdentifier
   * @summary: Get Inventory for company
   * @description: This API allows get Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBySizeIdentifier/).
   */
  async getInventoryBySizeIdentifier(
    {
      itemId,
      sizeIdentifier,
      pageNo,
      pageSize,
      q,
      locationIds,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getInventoryBySizeIdentifier().validate(
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
    } = CatalogPlatformValidator.getInventoryBySizeIdentifier().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getInventoryBySizeIdentifier \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventorySellerIdentifierResponsePaginated().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getInventoryBySizeIdentifier \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetInventoryExportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryExportJob>} - Success response
   * @name getInventoryExport
   * @summary: Get Inventory export history.
   * @description: This API helps to get Inventory export history. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryExport/).
   */
  async getInventoryExport(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getInventoryExport().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getInventoryExport().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getInventoryExport \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryExportJob().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getInventoryExport \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetMarketplaceOptinDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetOptInPlatform>} - Success response
   * @name getMarketplaceOptinDetail
   * @summary: Get opt-in infomation.
   * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMarketplaceOptinDetail/).
   */
  async getMarketplaceOptinDetail(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getMarketplaceOptinDetail().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getMarketplaceOptinDetail().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getMarketplaceOptinDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetOptInPlatform().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getMarketplaceOptinDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetOptimalLocationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.StoreAssignResponse>} - Success response
   * @name getOptimalLocations
   * @summary: Location Reassignment
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getOptimalLocations/).
   */
  async getOptimalLocations(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getOptimalLocations().validate(
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
    } = CatalogPlatformValidator.getOptimalLocations().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getOptimalLocations \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/location/reassign/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.StoreAssignResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getOptimalLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SingleProductResponse>} - Success response
   * @name getProduct
   * @summary: Get a single product.
   * @description: This API helps to get data associated to a particular product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProduct/).
   */
  async getProduct(
    { itemId, brandUid, itemCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProduct().validate(
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
    const { error: warrning } = CatalogPlatformValidator.getProduct().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getProduct \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SingleProductResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProduct \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductAssetsInBulkParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.BulkAssetResponse>} - Success response
   * @name getProductAssetsInBulk
   * @summary: Get a list of all bulk asset jobs.
   * @description: This API helps to get bulk asset jobs data associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductAssetsInBulk/).
   */
  async getProductAssetsInBulk(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getProductAssetsInBulk().validate(
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
    } = CatalogPlatformValidator.getProductAssetsInBulk().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductAssetsInBulk \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.BulkAssetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductAssetsInBulk \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductAttributesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductAttributesResponse>} -
   *   Success response
   * @name getProductAttributes
   * @summary: Get list of all the attributes by their l3_categories
   * @description: This API allows to list all the attributes by their l3_categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductAttributes/).
   */
  async getProductAttributes(
    { category, filter, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductAttributes().validate(
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
    } = CatalogPlatformValidator.getProductAttributes().validate(
      {
        category,
        filter,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductAttributes \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductAttributesResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductAttributes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductBulkUploadHistoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductBulkRequestList>} - Success response
   * @name getProductBulkUploadHistory
   * @summary: Get a list of all bulk product upload jobs.
   * @description: This API helps to get bulk product upload jobs data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBulkUploadHistory/).
   */
  async getProductBulkUploadHistory(
    { search, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getProductBulkUploadHistory().validate(
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
    } = CatalogPlatformValidator.getProductBulkUploadHistory().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getProductBulkUploadHistory \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductBulkRequestList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductBulkUploadHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductBundleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetProductBundleListingResponse>}
   *   - Success response
   *
   * @name getProductBundle
   * @summary: List all Product Bundles
   * @description: Get all product bundles for a particular company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBundle/).
   */
  async getProductBundle(
    { q, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductBundle().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.getProductBundle().validate(
      {
        q,
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductBundle \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetProductBundleListingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductBundle \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductBundleDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetProductBundleResponse>} -
   *   Success response
   * @name getProductBundleDetail
   * @summary: Get a particular Product Bundle details
   * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse` - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBundleDetail/).
   */
  async getProductBundleDetail(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getProductBundleDetail().validate(
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
    } = CatalogPlatformValidator.getProductBundleDetail().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductBundleDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/${id}/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetProductBundleResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductBundleDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductExportJobsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
   *   Success response
   * @name getProductExportJobs
   * @summary: Allows you to list all product templates export list details
   * @description: Can view details including trigger data, task id , etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductExportJobs/).
   */
  async getProductExportJobs(
    { status, fromDate, toDate, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductExportJobs().validate(
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
    } = CatalogPlatformValidator.getProductExportJobs().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getProductExportJobs \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductDownloadsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductExportJobs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductSizeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductListingResponse>} - Success response
   * @name getProductSize
   * @summary: Get a single product size.
   * @description: This API helps to get data associated to a particular product size. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductSize/).
   */
  async getProductSize(
    { itemId, itemCode, brandUid, uid, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductSize().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.getProductSize().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getProductSize \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductListingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductSize \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductTagsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductTagsViewResponse>} - Success response
   * @name getProductTags
   * @summary: Get a list of all tags associated with company.
   * @description: This API helps to get tags data associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductTags/).
   */
  async getProductTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getProductTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductTags \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/tags`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductTagsViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductTags \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductValidationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ValidateProduct>} - Success response
   * @name getProductValidation
   * @summary: Validate product/size data
   * @description: This API validates product data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductValidation/).
   */
  async getProductValidation(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductValidation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getProductValidation().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductValidation \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/validation/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ValidateProduct().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductValidation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductListingResponseV2>} -
   *   Success response
   * @name getProducts
   * @summary: Get product list
   * @description: This API gets meta associated to products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProducts/).
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
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProducts().validate(
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
    const { error: warrning } = CatalogPlatformValidator.getProducts().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getProducts \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductListingResponseV2().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProducts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetSellerInsightsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CrossSellingResponse>} - Success response
   * @name getSellerInsights
   * @summary: Analytics data of catalog and inventory that are being cross-selled.
   * @description: Analytics data of catalog and inventory that are being cross-selled. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSellerInsights/).
   */
  async getSellerInsights(
    { sellerAppId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getSellerInsights().validate(
      {
        sellerAppId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getSellerInsights().validate(
      {
        sellerAppId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getSellerInsights \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/cross-selling/${sellerAppId}/analytics/insights/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CrossSellingResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getSellerInsights \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetSingleProductHSNCodeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HSNDataInsertV2>} - Success response
   * @name getSingleProductHSNCode
   * @summary: Hsn Code List.
   * @description: Hsn Code List. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSingleProductHSNCode/).
   */
  async getSingleProductHSNCode(
    { reportingHsn, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getSingleProductHSNCode().validate(
      { reportingHsn },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getSingleProductHSNCode().validate(
      { reportingHsn },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getSingleProductHSNCode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/hsn/${reportingHsn}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.HSNDataInsertV2().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getSingleProductHSNCode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetSizeGuideParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SizeGuideResponse>} - Success response
   * @name getSizeGuide
   * @summary: Get a single size guide.
   * @description: This API helps to get data associated to a size guide. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSizeGuide/).
   */
  async getSizeGuide(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getSizeGuide().validate(
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
    } = CatalogPlatformValidator.getSizeGuide().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getSizeGuide \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SizeGuideResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getSizeGuide \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetSizeGuidesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ListSizeGuide>} - Success response
   * @name getSizeGuides
   * @summary: Get list of size guides
   * @description: This API allows to view all the size guides associated to the seller. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSizeGuides/).
   */
  async getSizeGuides(
    { active, q, tag, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getSizeGuides().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.getSizeGuides().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getSizeGuides \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ListSizeGuide().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getSizeGuides \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetStoreDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.OptinStoreDetails>} - Success response
   * @name getStoreDetail
   * @summary: Get the Store details.
   * @description: Get the details of the store associated with the company ID passed. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getStoreDetail/).
   */
  async getStoreDetail(
    { q, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getStoreDetail().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.getStoreDetail().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getStoreDetail \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.OptinStoreDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getStoreDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetVariantsOfProductsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductVariantsResponse>} - Success response
   * @name getVariantsOfProducts
   * @summary: Get product list
   * @description: This API gets meta associated to products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getVariantsOfProducts/).
   */
  async getVariantsOfProducts(
    { itemId, variantType, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getVariantsOfProducts().validate(
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
    } = CatalogPlatformValidator.getVariantsOfProducts().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getVariantsOfProducts \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductVariantsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getVariantsOfProducts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ListCategoriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CategoryResponse>} - Success response
   * @name listCategories
   * @summary: Get product categories list
   * @description: This API gets meta associated to product categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listCategories/).
   */
  async listCategories(
    { level, departments, q, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.listCategories().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.listCategories().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > listCategories \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CategoryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > listCategories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ListDepartmentsDataParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DepartmentsResponse>} - Success response
   * @name listDepartmentsData
   * @summary: List all Departments.
   * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listDepartmentsData/).
   */
  async listDepartmentsData(
    { pageNo, itemType, pageSize, name, search, isActive, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.listDepartmentsData().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.listDepartmentsData().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > listDepartmentsData \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.DepartmentsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > listDepartmentsData \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ListHSNCodesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HSNCodesResponse>} - Success response
   * @name listHSNCodes
   * @summary: List HSN Codes
   * @description: Allows you to list all hsn Codes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listHSNCodes/).
   */
  async listHSNCodes(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.listHSNCodes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.listHSNCodes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > listHSNCodes \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/hsn/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.HSNCodesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > listHSNCodes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ListInventoryExportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryExportJobListResponse>}
   *   - Success response
   *
   * @name listInventoryExport
   * @summary: Get the history of the inventory export.
   * @description: This API helps you the get the history of inventory jobs depending on the filtered criteria. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listInventoryExport/).
   */
  async listInventoryExport(
    { status, fromDate, toDate, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.listInventoryExport().validate(
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
    } = CatalogPlatformValidator.listInventoryExport().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > listInventoryExport \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryExportJobListResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > listInventoryExport \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ListProductTemplateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TemplatesResponse>} - Success response
   * @name listProductTemplate
   * @summary: List all Templates
   * @description: Allows you to list all product templates, also can filter by department - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplate/).
   */
  async listProductTemplate(
    { department, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.listProductTemplate().validate(
      {
        department,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.listProductTemplate().validate(
      {
        department,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > listProductTemplate \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.TemplatesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > listProductTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ListProductTemplateCategoriesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProdcutTemplateCategoriesResponse>}
   *   - Success response
   *
   * @name listProductTemplateCategories
   * @summary: List Department specifiec product categories
   * @description: Allows you to list all product categories values for the departments specified - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplateCategories/).
   */
  async listProductTemplateCategories(
    { departments, itemType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.listProductTemplateCategories().validate(
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
    } = CatalogPlatformValidator.listProductTemplateCategories().validate(
      {
        departments,
        itemType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > listProductTemplateCategories \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProdcutTemplateCategoriesResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > listProductTemplateCategories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ListProductTemplateExportDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponse>} -
   *   Success response
   * @name listProductTemplateExportDetails
   * @summary: Allows you to list all product templates export list details
   * @description: Can view details including trigger data, task id , etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplateExportDetails/).
   */
  async listProductTemplateExportDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.listProductTemplateExportDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.listProductTemplateExportDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > listProductTemplateExportDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/downloads/`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductDownloadsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > listProductTemplateExportDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ListTemplateBrandTypeValuesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductConfigurationDownloads>} -
   *   Success response
   * @name listTemplateBrandTypeValues
   * @summary: Allows you to list all values for Templates, Brands or Type
   * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listTemplateBrandTypeValues/).
   */
  async listTemplateBrandTypeValues(
    { filter, templateTag, itemType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.listTemplateBrandTypeValues().validate(
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
    } = CatalogPlatformValidator.listTemplateBrandTypeValues().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > listTemplateBrandTypeValues \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductConfigurationDownloads().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > listTemplateBrandTypeValues \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateCategoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CategoryUpdateResponse>} - Success response
   * @name updateCategory
   * @summary: Update product categories
   * @description: Update a product category using this api - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateCategory/).
   */
  async updateCategory(
    { uid, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.updateCategory().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.updateCategory().validate(
      {
        uid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateCategory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/${uid}/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CategoryUpdateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateCategory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateDepartmentParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DepartmentModel>} - Success response
   * @name updateDepartment
   * @summary: Update the department by their uid.
   * @description: Update the department by their uid using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateDepartment/).
   */
  async updateDepartment(
    { uid, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.updateDepartment().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.updateDepartment().validate(
      {
        uid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateDepartment \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/${uid}/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.DepartmentModel().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateDepartment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateHsnCodeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HsnCode>} - Success response
   * @name updateHsnCode
   * @summary: Update Hsn Code.
   * @description: Update Hsn Code. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateHsnCode/).
   */
  async updateHsnCode(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.updateHsnCode().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.updateHsnCode().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateHsnCode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/${id}/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.HsnCode().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateHsnCode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateInventoriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
   * @name updateInventories
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateInventories/).
   */
  async updateInventories(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.updateInventories().validate(
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
    } = CatalogPlatformValidator.updateInventories().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateInventories \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryUpdateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateInventories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateProductBundleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetProductBundleCreateResponse>}
   *   - Success response
   *
   * @name updateProductBundle
   * @summary: Update a Product Bundle
   * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateProductBundle/).
   */
  async updateProductBundle(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.updateProductBundle().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.updateProductBundle().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateProductBundle \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-bundle/${id}/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetProductBundleCreateResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateProductBundle \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateRealtimeInventoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
   * @name updateRealtimeInventory
   * @summary: Add Inventory for particular size and store.
   * @description: This API allows add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateRealtimeInventory/).
   */
  async updateRealtimeInventory(
    { itemId, sellerIdentifier, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.updateRealtimeInventory().validate(
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
    } = CatalogPlatformValidator.updateRealtimeInventory().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > updateRealtimeInventory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/inventory/${sellerIdentifier}`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryUpdateResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateRealtimeInventory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateSizeGuideParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name updateSizeGuide
   * @summary: Edit a size guide.
   * @description: This API allows to edit a size guide. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSizeGuide/).
   */
  async updateSizeGuide(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.updateSizeGuide().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.updateSizeGuide().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateSizeGuide \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}/`,
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateSizeGuide \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UploadBulkProductsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.BulkResponse>} - Success response
   * @name uploadBulkProducts
   * @summary: Create a Bulk product to upload job.
   * @description: This API helps to create a bulk products upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/uploadBulkProducts/).
   */
  async uploadBulkProducts(
    { department, productType, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.uploadBulkProducts().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.uploadBulkProducts().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > uploadBulkProducts \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.BulkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > uploadBulkProducts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ValidateProductTemplateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TemplatesValidationResponse>} -
   *   Success response
   * @name validateProductTemplate
   * @summary: Validate Product Template Schema
   * @description: Allows you to list all product templates validation values for all the fields present in the database - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductTemplate/).
   */
  async validateProductTemplate(
    { slug, itemType, bulk, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.validateProductTemplate().validate(
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
    } = CatalogPlatformValidator.validateProductTemplate().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > validateProductTemplate \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.TemplatesValidationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > validateProductTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ValidateProductTemplateSchemaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryValidationResponse>} -
   *   Success response
   * @name validateProductTemplateSchema
   * @summary: Validate Product Template Schema
   * @description: Allows you to list all product templates validation values for all the fields present in the database - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductTemplateSchema/).
   */
  async validateProductTemplateSchema(
    { itemType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.validateProductTemplateSchema().validate(
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
    } = CatalogPlatformValidator.validateProductTemplateSchema().validate(
      {
        itemType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > validateProductTemplateSchema \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryValidationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > validateProductTemplateSchema \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Catalog;
