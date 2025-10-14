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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name addInventory
   * @summary: Create Inventory
   * @description: Allows add Inventory for particular size and selling location. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/addInventory/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}`,
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @summary: Get product sizes
   * @description: Retrieve all available sizes for a product. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/allSizes/).
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
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.BulkHsnResponseSchema>} - Success response
   * @name bulkHsnCode
   * @summary: Create Bulk update HSN
   * @description: Execute bulk updates for HSN codes across multiple products. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/bulkHsnCode/).
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
    } = CatalogPlatformModel.BulkHsnResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name createBulkInventory
   * @summary: Create bulk inventory
   * @description: Helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createBulkInventory/).
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.BulkResponseSchema>} - Success response
   * @name createBulkInventoryJob
   * @summary: Create bulk inventory upload job
   * @description: Helps to create a bulk Inventory upload job. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createBulkInventoryJob/).
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
    } = CatalogPlatformModel.BulkResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.BulkResponseSchema>} - Success response
   * @name createBulkProductUploadJob
   * @summary: Create products bulk upload
   * @description: This API helps to create a bulk products upload job. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createBulkProductUploadJob/).
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
    } = CatalogPlatformModel.BulkResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.CreateHsCodeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HSCodeItem>} - Success response
   * @name createHsCode
   * @summary: Create HS/SAC code
   * @description: Create HS/SAC code. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createHsCode/).
   */
  async createHsCode(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createHsCode().validate(
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
    } = CatalogPlatformValidator.createHsCode().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createHsCode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/hscodes`,
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
    } = CatalogPlatformModel.HSCodeItem().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createHsCode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateInventoryExportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryExportResponseSchema>} -
   *   Success response
   * @name createInventoryExport
   * @summary: Create inventory export
   * @description: creates export job for inventory data associated with a company - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createInventoryExport/).
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
    } = CatalogPlatformModel.InventoryExportResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.InventoryExportResponseSchema>} -
   *   Success response
   * @name createInventoryExportJob
   * @summary: Create inventory export job
   * @description: Helps to create a Inventory export job. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createInventoryExportJob/).
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
    } = CatalogPlatformModel.InventoryExportResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.CreateMarketplaceOptinResponseSchema>}
   *   - Success response
   *
   * @name createMarketplaceOptin
   * @summary: Create or Update opt-in infomation
   * @description: Allows to create opt-in information for a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createMarketplaceOptin/).
   */
  async createMarketplaceOptin(
    { marketplaceSlug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.createMarketplaceOptin().validate(
      {
        marketplaceSlug,
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
        marketplaceSlug,
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/channel/${marketplaceSlug}/opt-in`,
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
    } = CatalogPlatformModel.CreateMarketplaceOptinResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseObject>} - Success response
   * @name createProduct
   * @summary: Create product
   * @description: Users can create a product using this API, associating it with the provided company ID - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createProduct/).
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
      `/service/platform/catalog/v3.0/company/${this.config.companyId}/products/`,
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
    } = CatalogPlatformModel.SuccessResponseObject().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name createProductAssetsInBulk
   * @summary: Create product assets in bulk
   * @description: Helps to create a bulk asset upload job. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createProductAssetsInBulk/).
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.CreateProductExportJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponseSchema>}
   *   - Success response
   *
   * @name createProductExportJob
   * @summary: Create product export job
   * @description: Allows to create a product export job for a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createProductExportJob/).
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
      `/service/platform/catalog/v3.0/company/${this.config.companyId}/products/downloads/`,
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
    } = CatalogPlatformModel.ProductDownloadsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name createProductsInBulk
   * @summary: Create products in bulk
   * @description: Helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createProductsInBulk/).
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name createSizeGuide
   * @summary: Create size guide
   * @description: Allows to create a size guide associated to a seller - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createSizeGuide/).
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.CreateTaxParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateTax>} - Success response
   * @name createTax
   * @summary: Create Tax Rule
   * @description: Create a tax rule and its version for under a specific company. This also creates a live version of the rule - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createTax/).
   */
  async createTax(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createTax().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogPlatformValidator.createTax().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createTax \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/rules/versions`,
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
    } = CatalogPlatformModel.CreateTax().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createTax \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateTaxComponentNameParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TaxComponentName>} - Success response
   * @name createTaxComponentName
   * @summary: Create tax component name
   * @description: Tax components represent different types of taxes that may be applied to products or transactions,
   * such as sales tax, value-added tax (VAT), goods and services tax, consumption tax,
   * or other region-specific taxation systems. This endpoint allows companies to define and
   * customize the names of tax components according to their local tax regulations and business requirements.
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createTaxComponentName/).
   */
  async createTaxComponentName(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.createTaxComponentName().validate(
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
    } = CatalogPlatformValidator.createTaxComponentName().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createTaxComponentName \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/component-names`,
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
    } = CatalogPlatformModel.TaxComponentName().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createTaxComponentName \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.CreateTaxVersionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TaxVersion>} - Success response
   * @name createTaxVersion
   * @summary: Create a tax version
   * @description: Creates a tax rule using the provided rule_id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/createTaxVersion/).
   */
  async createTaxVersion(
    { ruleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.createTaxVersion().validate(
      {
        ruleId,
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
    } = CatalogPlatformValidator.createTaxVersion().validate(
      {
        ruleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createTaxVersion \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/rules/${ruleId}/versions`,
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
    } = CatalogPlatformModel.TaxVersion().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createTaxVersion \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DeleteBulkInventoryJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name deleteBulkInventoryJob
   * @summary: Delete inventory bulk upload job
   * @description: Allows to delete bulk Inventory job associated with company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/deleteBulkInventoryJob/).
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.DeleteProductParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name deleteProduct
   * @summary: Delete product
   * @description: Users can delete a product by providing the item_id and company_id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/deleteProduct/).
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name deleteProductBulkJob
   * @summary: Delete product bulk-upload job
   * @description: Allows to delete bulk product job associated with company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/deleteProductBulkJob/).
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponseSchema>} -
   *   Success response
   * @name deleteRealtimeInventory
   * @summary: Delete an inventory
   * @description: You can use this API to delete inventory linked to a particular product size. When you make the API call, the inventory associated with that size will be removed as part of api process. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/deleteRealtimeInventory/).
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
    } = CatalogPlatformModel.InventoryUpdateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.ProductSizeDeleteResponseSchema>}
   *   - Success response
   *
   * @name deleteSize
   * @summary: Delete product size
   * @description: Allows to delete size associated with product. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/deleteSize/).
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
    } = CatalogPlatformModel.ProductSizeDeleteResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
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
   * @param {CatalogPlatformValidator.DeleteTaxRuleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name deleteTaxRule
   * @summary: Delete a tax rule
   * @description: Deletes a tax rule along with all its versions using the provided rule_id. You can not delete a rule if 1. it is the default tax rule 2. it is applied to any product. You will need to set any other tax rule as default or will need to attach a different tax rule to the products, then only you can delete the rule.
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/deleteTaxRule/).
   */
  async deleteTaxRule(
    { ruleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.deleteTaxRule().validate(
      { ruleId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.deleteTaxRule().validate(
      { ruleId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteTaxRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/rules/${ruleId}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteTaxRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.DeleteTaxVersionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name deleteTaxVersion
   * @summary: Delete a tax version
   * @description: Deletes a tax rule using the provided rule_id. On future/scheduled version can be deleted. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/deleteTaxVersion/).
   */
  async deleteTaxVersion(
    { ruleId, versionId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.deleteTaxVersion().validate(
      { ruleId, versionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.deleteTaxVersion().validate(
      { ruleId, versionId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteTaxVersion \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/rules/${ruleId}/versions/${versionId}`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteTaxVersion \n ${res_error}`,
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
   * @summary: Download inventory template data
   * @description: Allows you to download inventory product template data for a specific company in formats like csv and excel. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/downloadInventoryTemplateView/).
   */
  async downloadInventoryTemplateView(
    { schemaType, type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.downloadInventoryTemplateView().validate(
      {
        schemaType,
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
    } = CatalogPlatformValidator.downloadInventoryTemplateView().validate(
      {
        schemaType,
        type,
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
    query_params["schema_type"] = schemaType;
    query_params["type"] = type;

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
      .validate(responseData, { abortEarly: false, allowUnknown: true });

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
   * @summary: Download product template view
   * @description: Allows you to download product template data by its slug for a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/downloadProductTemplateViews/).
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
      .validate(responseData, { abortEarly: false, allowUnknown: true });

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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name editProduct
   * @summary: Update a product
   * @description: Modify the details and settings of an existing product in the catalog. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/editProduct/).
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
      `/service/platform/catalog/v3.0/company/${this.config.companyId}/products/${itemId}/`,
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @summary: Get export inventory configuration
   * @description: Retrieve List of different filters like brand, store, and type for inventory export. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/exportInventoryConfig/).
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
      allowUnknown: true,
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
   * @summary: List product HSN codes
   * @description: Retrieve all HSN codes associated with company products and provide search capabilities based on HSN code, reporting HSN, etc - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getAllProductHsnCodes/).
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
      { abortEarly: false, allowUnknown: true }
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
   * @param {CatalogPlatformValidator.GetAllTaxRulesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TaxRules>} - Success response
   * @name getAllTaxRules
   * @summary: Get all tax rules of a company
   * @description: Returns array of all tax rules of a company - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getAllTaxRules/).
   */
  async getAllTaxRules(
    { q, statuses, page, limit, versionStatus, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getAllTaxRules().validate(
      {
        q,
        statuses,
        page,
        limit,
        versionStatus,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getAllTaxRules().validate(
      {
        q,
        statuses,
        page,
        limit,
        versionStatus,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAllTaxRules \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["statuses"] = statuses;
    query_params["page"] = page;
    query_params["limit"] = limit;
    query_params["version_status"] = versionStatus;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/rules`,
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
    } = CatalogPlatformModel.TaxRules().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAllTaxRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetAttributeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AttributeDetail>} - Success response
   * @name getAttribute
   * @summary: Get attribute detail by slug
   * @description: Retrieve the attribute detail for catalog listings by attribute slug passed for a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getAttribute/).
   */
  async getAttribute(
    { attributeSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getAttribute().validate(
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
    } = CatalogPlatformValidator.getAttribute().validate(
      {
        attributeSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAttribute \n ${warrning}`,
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
    } = CatalogPlatformModel.AttributeDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAttribute \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetCategoryDataParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SingleCategoryResponseSchema>} -
   *   Success response
   * @name getCategoryData
   * @summary: Get category by uid
   * @description: Retrieve detailed information about a specific category by its uid for a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getCategoryData/).
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
    } = CatalogPlatformModel.SingleCategoryResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: list Company Brand of Optin
   * @description: Get the details of the Brands associated with the given company_id passed which has opt-in. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getCompanyBrandDetail/).
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
      { abortEarly: false, allowUnknown: true }
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
   * @summary: Get Company
   * @description: Get the details of the company associated with the given company_id passed which has opt-in. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getCompanyDetail/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/marketplaces/company-details/`,
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
      allowUnknown: true,
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
   * @summary: Get company metrics
   * @description: Allows viewing company metrics, including brand and store status, as well as the number of verified and unverified products, company documents, and store documents. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getCompanyMetrics/).
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
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.DepartmentsResponseSchema>} -
   *   Success response
   * @name getDepartmentData
   * @summary: Get department by uid
   * @description: Retrieve detailed information about a specific department for a specific company by uid. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getDepartmentData/).
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
    } = CatalogPlatformModel.DepartmentsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {CatalogPlatformValidator.GetHsCodesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HSCodes>} - Success response
   * @name getHsCodes
   * @summary: Get HS/SAC codes
   * @description: Retrieve a list of HS (Harmonized System) or SAC (Service Accounting Code) codes for a company.
   * HS codes are used for classifying goods in international trade, while SAC codes are used for classifying services for taxation purposes.
   * Supports optional filtering and pagination.
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getHsCodes/).
   */
  async getHsCodes(
    { page, limit, type, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getHsCodes().validate(
      {
        page,
        limit,
        type,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogPlatformValidator.getHsCodes().validate(
      {
        page,
        limit,
        type,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getHsCodes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["limit"] = limit;
    query_params["type"] = type;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/hscodes`,
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
    } = CatalogPlatformModel.HSCodes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getHsCodes \n ${res_error}`,
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
   * @summary: List HSN code
   * @description: Retrieve the HSN code for a product. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getHsnCode/).
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
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.GetInventoriesResponseSchema>} -
   *   Success response
   * @name getInventories
   * @summary: List Inventory
   * @description: Allows to get Inventories data for particular company.  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getInventories/).
   */
  async getInventories(
    {
      itemId,
      size,
      pageNo,
      pageSize,
      pageId,
      pageType,
      q,
      sellable,
      storeIds,
      brandIds,
      sellerIdentifiers,
      qtyGt,
      qtyLt,
      qtyType,
      fromDate,
      toDate,
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
        pageId,
        pageType,
        q,
        sellable,
        storeIds,
        brandIds,
        sellerIdentifiers,
        qtyGt,
        qtyLt,
        qtyType,
        fromDate,
        toDate,
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
        pageId,
        pageType,
        q,
        sellable,
        storeIds,
        brandIds,
        sellerIdentifiers,
        qtyGt,
        qtyLt,
        qtyType,
        fromDate,
        toDate,
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
    query_params["page_id"] = pageId;
    query_params["page_type"] = pageType;
    query_params["q"] = q;
    query_params["sellable"] = sellable;
    query_params["store_ids"] = storeIds;
    query_params["brand_ids"] = brandIds;
    query_params["seller_identifiers"] = sellerIdentifiers;
    query_params["qty_gt"] = qtyGt;
    query_params["qty_lt"] = qtyLt;
    query_params["qty_type"] = qtyType;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
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
    } = CatalogPlatformModel.GetInventoriesResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.itemId] - Item code of the product of which size is to be get.
   * @param {string} [arg.size] - Size of which inventory is to get.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search with help of store code.
   * @param {boolean} [arg.sellable] - Filter on whether product is in stock or not.
   * @param {number[]} [arg.storeIds] - The Store Id of products to fetch inventory.
   * @param {number[]} [arg.brandIds] - The Brand Id of products to fetch inventory.
   * @param {string[]} [arg.sellerIdentifiers] - The Seller Identifier or
   *   Primary Identifier of the inventory.
   * @param {number} [arg.qtyGt] - This field allows you to filter for
   *   inventories that have quantity greater than to the specified value
   *   based on qty_type filter.
   * @param {number} [arg.qtyLt] - This field allows you to filter for
   *   inventories that have a quantity less than to the specified value based
   *   on qty_type filter.
   * @param {string} [arg.qtyType] - This field provides flexibility in
   *   selecting filter for inventory quantity counts and date queries. For
   *   example, you might use this field to specify "total" or "sellable" quantity.
   * @param {string} [arg.fromDate] - Inventory updated on filter to get
   *   inventories greater then or equal to provided date based on qty_type value.
   * @param {string} [arg.toDate] - Inventory updated on filter to get
   *   inventories less then or equal to provided date based on qty_type value.
   * @param {string} [arg.sizeIdentifier] - Size Identifier (Seller Identifier
   *   or Primary Identifier) of which inventory is to get.
   * @returns {Paginator<CatalogPlatformModel.GetInventoriesResponseSchema>}
   * @summary: List Inventory
   * @description: Allows to get Inventories data for particular company.
   */
  getInventoriesPaginator({
    itemId,
    size,
    pageSize,
    q,
    sellable,
    storeIds,
    brandIds,
    sellerIdentifiers,
    qtyGt,
    qtyLt,
    qtyType,
    fromDate,
    toDate,
    sizeIdentifier,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getInventories({
        itemId: itemId,
        size: size,
        pageNo: pageNo,
        pageSize: pageSize,
        pageId: pageId,
        pageType: pageType,
        q: q,
        sellable: sellable,
        storeIds: storeIds,
        brandIds: brandIds,
        sellerIdentifiers: sellerIdentifiers,
        qtyGt: qtyGt,
        qtyLt: qtyLt,
        qtyType: qtyType,
        fromDate: fromDate,
        toDate: toDate,
        sizeIdentifier: sizeIdentifier,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.GetInventoryBulkUploadHistoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.BulkInventoryGet>} - Success response
   * @name getInventoryBulkUploadHistory
   * @summary: List bulk inventory upload history
   * @description: Helps to get bulk Inventory upload jobs status. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getInventoryBulkUploadHistory/).
   */
  async getInventoryBulkUploadHistory(
    {
      pageNo,
      pageSize,
      search,
      startDate,
      endDate,
      stage,
      tags,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getInventoryBulkUploadHistory().validate(
      {
        pageNo,
        pageSize,
        search,
        startDate,
        endDate,
        stage,
        tags,
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
        search,
        startDate,
        endDate,
        stage,
        tags,
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
    query_params["search"] = search;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["stage"] = stage;
    query_params["tags"] = tags;

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
      allowUnknown: true,
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
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.search] - Search string to filter the results by batch id
   * @param {string} [arg.startDate] - Filter results by the job's start date.
   * @param {string} [arg.endDate] - Filter results by the job's end date.
   * @param {string} [arg.stage] - Filter results by the current stage of the
   *   import job.
   * @param {string} [arg.tags] - Filter results by the tags of the import job.
   * @returns {Paginator<CatalogPlatformModel.BulkInventoryGet>}
   * @summary: List bulk inventory upload history
   * @description: Helps to get bulk Inventory upload jobs status.
   */
  getInventoryBulkUploadHistoryPaginator({
    pageSize,
    search,
    startDate,
    endDate,
    stage,
    tags,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getInventoryBulkUploadHistory({
        pageNo: pageNo,
        pageSize: pageSize,
        search: search,
        startDate: startDate,
        endDate: endDate,
        stage: stage,
        tags: tags,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.GetInventoryBySizeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryResponsePaginated>} -
   *   Success response
   * @name getInventoryBySize
   * @summary: List inventory by size
   * @description: Retrieve inventory data for a specific company, item ID, and size. The API supports search capabilities based on selling location (store) code and product availability (in stock or not)." - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getInventoryBySize/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}/sizes/${size}`,
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
      { abortEarly: false, allowUnknown: true }
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
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Item code of the product of which size is to be get.
   * @param {string} arg.size - Size of which inventory is to get.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search with help of store code.
   * @param {boolean} [arg.sellable] - Filter on whether product is in stock or not.
   * @returns {Paginator<CatalogPlatformModel.InventoryResponsePaginated>}
   * @summary: List inventory by size
   * @description: Retrieve inventory data for a specific company, item ID, and size. The API supports search capabilities based on selling location (store) code and product availability (in stock or not)."
   */
  getInventoryBySizePaginator({ itemId, size, pageSize, q, sellable } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getInventoryBySize({
        itemId: itemId,
        size: size,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        sellable: sellable,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
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
   * @summary: List inventory by size
   * @description: Retrieve inventory data for a specific company, item ID, and seller identifier. The API supports search capabilities using store codes and location IDs. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getInventoryBySizeIdentifier/).
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
      { abortEarly: false, allowUnknown: true }
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
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Item code of the product of which size is to be get.
   * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
   *   or Primary Identifier) of which inventory is to get.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search with help of store code.
   * @param {number[]} [arg.locationIds] - Search by store ids.
   * @returns {Paginator<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
   * @summary: List inventory by size
   * @description: Retrieve inventory data for a specific company, item ID, and seller identifier. The API supports search capabilities using store codes and location IDs.
   */
  getInventoryBySizeIdentifierPaginator({
    itemId,
    sizeIdentifier,
    pageSize,
    q,
    locationIds,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getInventoryBySizeIdentifier({
        itemId: itemId,
        sizeIdentifier: sizeIdentifier,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        locationIds: locationIds,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.GetInventoryExportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryExportJob>} - Success response
   * @name getInventoryExport
   * @summary: list product inventory
   * @description: Retrieves inventory for all products for that particular company - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getInventoryExport/).
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
      allowUnknown: true,
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
   * @summary: Get opt-in
   * @description: Allows to fetch opt-in information for a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getMarketplaceOptinDetail/).
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
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.GetMarketplacesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAllMarketplaces>} - Success response
   * @name getMarketplaces
   * @summary: List marketplaces
   * @description: Allows to get all marketplaces information for a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getMarketplaces/).
   */
  async getMarketplaces(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getMarketplaces().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getMarketplaces().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getMarketplaces \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/channel`,
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
    } = CatalogPlatformModel.GetAllMarketplaces().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getMarketplaces \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetOptimalLocationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.StoreAssignResponseSchema>} -
   *   Success response
   * @name getOptimalLocations
   * @summary: Get optimal locations
   * @description: This API returns the optimal locations where inventory is available for the given articles. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getOptimalLocations/).
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
    } = CatalogPlatformModel.StoreAssignResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.SingleProductResponseSchema>} -
   *   Success response
   * @name getProduct
   * @summary: Get a product
   * @description: Retrieve data associated to a particular product. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getProduct/).
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
    } = CatalogPlatformModel.SingleProductResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.BulkAssetResponseSchema>} - Success response
   * @name getProductAssetsInBulk
   * @summary: Get product assets
   * @description: Helps to retrieve bulk asset jobs data associated to a particular company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getProductAssetsInBulk/).
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
    } = CatalogPlatformModel.BulkAssetResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @returns {Paginator<CatalogPlatformModel.BulkAssetResponseSchema>}
   * @summary: Get product assets
   * @description: Helps to retrieve bulk asset jobs data associated to a particular company.
   */
  getProductAssetsInBulkPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getProductAssetsInBulk({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductAttributesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductAttributesResponseSchema>}
   *   - Success response
   *
   * @name getProductAttributes
   * @summary: List product attributes
   * @description: Retrieve attributes attached to products based on their L3 category. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getProductAttributes/).
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
    } = CatalogPlatformModel.ProductAttributesResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
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
   * @summary: List product bulk upload history
   * @description: Helps to get bulk product upload jobs data. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getProductBulkUploadHistory/).
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
      allowUnknown: true,
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.search] - Search string to filter the results by batch id
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @returns {Paginator<CatalogPlatformModel.ProductBulkRequestList>}
   * @summary: List product bulk upload history
   * @description: Helps to get bulk product upload jobs data.
   */
  getProductBulkUploadHistoryPaginator({ search, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getProductBulkUploadHistory({
        search: search,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.GetProductExportJobsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponseSchema>}
   *   - Success response
   *
   * @name getProductExportJobs
   * @summary: Get product export jobs
   * @description: Get product export jobs specific to a company based on queries like query param, date range and status. View details including trigger data, task id , etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getProductExportJobs/).
   */
  async getProductExportJobs(
    { status, fromDate, toDate, q, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductExportJobs().validate(
      {
        status,
        fromDate,
        toDate,
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
    } = CatalogPlatformValidator.getProductExportJobs().validate(
      {
        status,
        fromDate,
        toDate,
        q,
        pageNo,
        pageSize,
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
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

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
    } = CatalogPlatformModel.ProductDownloadsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.ProductListingResponseSchema>} -
   *   Success response
   * @name getProductSize
   * @summary: List product size
   * @description: Retrieve data associated to a particular product size. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getProductSize/).
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
    } = CatalogPlatformModel.ProductListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.ProductTagsViewResponseSchema>} -
   *   Success response
   * @name getProductTags
   * @summary: List product tags
   * @description: Retrieve tags data associated to a particular company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getProductTags/).
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
    } = CatalogPlatformModel.ProductTagsViewResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: Get valid products
   * @description: Retrieve validation data for products at company level. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getProductValidation/).
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
      allowUnknown: true,
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
   * @summary: List products
   * @description: Retrieve a list of available products - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getProducts/).
   */
  async getProducts(
    {
      brandIds,
      categoryIds,
      itemIds,
      departmentIds,
      itemCode,
      name,
      slug,
      allIdentifiers,
      q,
      tags,
      pageNo,
      pageSize,
      pageType,
      sortOn,
      pageId,
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
        name,
        slug,
        allIdentifiers,
        q,
        tags,
        pageNo,
        pageSize,
        pageType,
        sortOn,
        pageId,
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
        name,
        slug,
        allIdentifiers,
        q,
        tags,
        pageNo,
        pageSize,
        pageType,
        sortOn,
        pageId,
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
    query_params["name"] = name;
    query_params["slug"] = slug;
    query_params["all_identifiers"] = allIdentifiers;
    query_params["q"] = q;
    query_params["tags"] = tags;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["page_type"] = pageType;
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;

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
      allowUnknown: true,
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
   * @param {Object} arg - Arg object.
   * @param {number[]} [arg.brandIds] - Get multiple products filtered by Brand Ids
   * @param {number[]} [arg.categoryIds] - Get multiple products filtered by
   *   Category Ids
   * @param {number[]} [arg.itemIds] - Get multiple products filtered by Item Ids
   * @param {number[]} [arg.departmentIds] - Get multiple products filtered by
   *   Department Ids
   * @param {string[]} [arg.itemCode] - Get multiple products filtered by Item Code
   * @param {string} [arg.name] - Get multiple products filtered by Name (Pattern Match)
   * @param {string} [arg.slug] - Get multiple products filtered by Slug
   * @param {string[]} [arg.allIdentifiers] - Get multiple products filtered
   *   by All Identifiers
   * @param {string} [arg.q] - Get multiple products filtered by q string
   * @param {string[]} [arg.tags] - Get multiple products filtered by tags
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {string} [arg.sortOn] - Field which is to be used for sorting,
   *   default is latest. Value can be latest (modified_on) or created (record id)
   * @returns {Paginator<CatalogPlatformModel.ProductListingResponseV2>}
   * @summary: List products
   * @description: Retrieve a list of available products
   */
  getProductsPaginator({
    brandIds,
    categoryIds,
    itemIds,
    departmentIds,
    itemCode,
    name,
    slug,
    allIdentifiers,
    q,
    tags,
    pageSize,
    sortOn,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProducts({
        brandIds: brandIds,
        categoryIds: categoryIds,
        itemIds: itemIds,
        departmentIds: departmentIds,
        itemCode: itemCode,
        name: name,
        slug: slug,
        allIdentifiers: allIdentifiers,
        q: q,
        tags: tags,
        pageNo: pageNo,
        pageSize: pageSize,
        pageType: pageType,
        sortOn: sortOn,
        pageId: pageId,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.GetSellerInsightsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CrossSellingResponseSchema>} -
   *   Success response
   * @name getSellerInsights
   * @summary: Get seller catalog counts
   * @description: Retrieve the count of catalog related data for sellers. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getSellerInsights/).
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
    } = CatalogPlatformModel.CrossSellingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: Get product HSN code
   * @description: Retrieve HSN details associated with company ID and reporting HSN - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getSingleProductHSNCode/).
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
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.SizeGuideResponseSchema>} - Success response
   * @name getSizeGuide
   * @summary: Get size guide
   * @description: Retrieve data associated about a specific size guide. It contains meta deta like header values like for shoulder, head, etc. and measurement unit like cm and values contains sizes for the same. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getSizeGuide/).
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
    } = CatalogPlatformModel.SizeGuideResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @summary: List size guides
   * @description: Allows to view all the size guides associated to the seller. Each size guide contains meta deta like header values like for shoulder, head, etc. and measurement unit like cm and values contains sizes for the same. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getSizeGuides/).
   */
  async getSizeGuides(
    { active, q, tag, pageNo, pageSize, brandId, requestHeaders } = {
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
        brandId,
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
        brandId,
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
    query_params["brand_id"] = brandId;

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
      allowUnknown: true,
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
   * @summary: Get selling location
   * @description: Retrieve the details of the selling location (store) associated with a specific company passed. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getStoreDetail/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/marketplaces/location-details/`,
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
      allowUnknown: true,
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search related the store for the company id.
   * @param {number} [arg.pageSize] - Number of records that can be seen on
   *   the page for the company id.
   * @returns {Paginator<CatalogPlatformModel.OptinStoreDetails>}
   * @summary: Get selling location
   * @description: Retrieve the details of the selling location (store) associated with a specific company passed.
   */
  getStoreDetailPaginator({ q, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStoreDetail({
        q: q,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.GetTaxComponentNamesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetTaxComponents>} - Success response
   * @name getTaxComponentNames
   * @summary: Get component names
   * @description: Get component names for a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getTaxComponentNames/).
   */
  async getTaxComponentNames(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getTaxComponentNames().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getTaxComponentNames().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getTaxComponentNames \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/component-names`,
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
    } = CatalogPlatformModel.GetTaxComponents().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getTaxComponentNames \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetTaxVersionDetailsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TaxRuleVersion>} - Success response
   * @name getTaxVersionDetails
   * @summary: Get tax versions for a tax rule
   * @description: Retrieve versions of a tax rule with support for filtering by query parameters (e.g., live, past, all). - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getTaxVersionDetails/).
   */
  async getTaxVersionDetails(
    { ruleId, versionStatus, limit, page, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getTaxVersionDetails().validate(
      {
        ruleId,
        versionStatus,
        limit,
        page,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getTaxVersionDetails().validate(
      {
        ruleId,
        versionStatus,
        limit,
        page,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getTaxVersionDetails \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["version_status"] = versionStatus;
    query_params["limit"] = limit;
    query_params["page"] = page;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/rules/${ruleId}/versions`,
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
    } = CatalogPlatformModel.TaxRuleVersion().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getTaxVersionDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetVariantsOfProductsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductVariantsResponseSchema>} -
   *   Success response
   * @name getVariantsOfProducts
   * @summary: Get variants
   * @description: Retrieve variants of a specific product. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/getVariantsOfProducts/).
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
    } = CatalogPlatformModel.ProductVariantsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Get list of variants of item Id
   * @param {string} arg.variantType - Get multiple products filtered by variant type
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @returns {Paginator<CatalogPlatformModel.ProductVariantsResponseSchema>}
   * @summary: Get variants
   * @description: Retrieve variants of a specific product.
   */
  getVariantsOfProductsPaginator({ itemId, variantType, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getVariantsOfProducts({
        itemId: itemId,
        variantType: variantType,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.ListCategoriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CategoryResponseSchema>} - Success response
   * @name listCategories
   * @summary: List categories
   * @description: Retrieve a list of categories data associated to a specific company and queries passed in the request. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/listCategories/).
   */
  async listCategories(
    { level, department, q, pageNo, pageSize, uids, slug, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.listCategories().validate(
      {
        level,
        department,
        q,
        pageNo,
        pageSize,
        uids,
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
    } = CatalogPlatformValidator.listCategories().validate(
      {
        level,
        department,
        q,
        pageNo,
        pageSize,
        uids,
        slug,
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
    query_params["department"] = department;
    query_params["q"] = q;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["uids"] = uids;
    query_params["slug"] = slug;

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
    } = CatalogPlatformModel.CategoryResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.level] - Get category for multiple levels
   * @param {number} [arg.department] - Get category for multiple departments filtered
   * @param {string} [arg.q] - Get multiple categories filtered by search string
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {number[]} [arg.uids] - Get multiple categories filtered by category uids.
   * @param {string} [arg.slug] - Get category by slug
   * @returns {Paginator<CatalogPlatformModel.CategoryResponseSchema>}
   * @summary: List categories
   * @description: Retrieve a list of categories data associated to a specific company and queries passed in the request.
   */
  listCategoriesPaginator({ level, department, q, pageSize, uids, slug } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.listCategories({
        level: level,
        department: department,
        q: q,
        pageNo: pageNo,
        pageSize: pageSize,
        uids: uids,
        slug: slug,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.ListDepartmentsDataParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DepartmentsResponseSchema>} -
   *   Success response
   * @name listDepartmentsData
   * @summary: List company department
   * @description: Allows you to list all departments data for a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/listDepartmentsData/).
   */
  async listDepartmentsData(
    {
      pageNo,
      itemType,
      pageSize,
      name,
      search,
      isActive,
      slug,
      requestHeaders,
    } = { requestHeaders: {} },
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
    } = CatalogPlatformValidator.listDepartmentsData().validate(
      {
        pageNo,
        itemType,
        pageSize,
        name,
        search,
        isActive,
        slug,
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
    query_params["slug"] = slug;

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
    } = CatalogPlatformModel.DepartmentsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.itemType] - A `item_type` is a type of product eg.
   *   set, standard, digital
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {string} [arg.name] - Can search departments by passing name.
   * @param {string} [arg.search] - Can search departments by passing name of
   *   the department in search parameter.
   * @param {boolean} [arg.isActive] - Can query for departments based on
   *   whether they are active or inactive.
   * @param {string} [arg.slug] - Can filter by slug
   * @returns {Paginator<CatalogPlatformModel.DepartmentsResponseSchema>}
   * @summary: List company department
   * @description: Allows you to list all departments data for a specific company.
   */
  listDepartmentsDataPaginator({
    itemType,
    pageSize,
    name,
    search,
    isActive,
    slug,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.listDepartmentsData({
        pageNo: pageNo,
        itemType: itemType,
        pageSize: pageSize,
        name: name,
        search: search,
        isActive: isActive,
        slug: slug,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {CatalogPlatformValidator.ListHSNCodesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HSNCodesResponseSchema>} - Success response
   * @name listHSNCodes
   * @summary: List HSN codes
   * @description: Retrieve a list of Harmonized System Nomenclature (HSN) codes for a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/listHSNCodes/).
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
    } = CatalogPlatformModel.HSNCodesResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.InventoryExportJobListResponseSchema>}
   *   - Success response
   *
   * @name listInventoryExport
   * @summary: List inventory export jobs
   * @description: Retrieve the history of inventory export jobs associated with the company - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/listInventoryExport/).
   */
  async listInventoryExport(
    { status, fromDate, toDate, q, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.listInventoryExport().validate(
      {
        status,
        fromDate,
        toDate,
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
    } = CatalogPlatformValidator.listInventoryExport().validate(
      {
        status,
        fromDate,
        toDate,
        q,
        pageNo,
        pageSize,
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
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

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
    } = CatalogPlatformModel.InventoryExportJobListResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
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
   * @returns {Promise<CatalogPlatformModel.TemplatesResponseSchema>} - Success response
   * @name listProductTemplate
   * @summary: List product templates
   * @description: Allows you to list all product templates for a specific company. also can filter by department. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/listProductTemplate/).
   */
  async listProductTemplate(
    { department, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.listProductTemplate().validate(
      {
        department,
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
    } = CatalogPlatformValidator.listProductTemplate().validate(
      {
        department,
        pageNo,
        pageSize,
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
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

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
    } = CatalogPlatformModel.TemplatesResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.ProdcutTemplateCategoriesResponseSchema>}
   *   - Success response
   *
   * @name listProductTemplateCategories
   * @summary: List product template categories
   * @description: Allows you to list all product template categories values for the departments specified for a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/listProductTemplateCategories/).
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
    } = CatalogPlatformModel.ProdcutTemplateCategoriesResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
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
   * @returns {Promise<CatalogPlatformModel.ProductDownloadsResponseSchema>}
   *   - Success response
   *
   * @name listProductTemplateExportDetails
   * @summary: List export product templates
   * @description: Retrieve export details related to product templates for a specific company. Can view details including trigger data, task id , etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/listProductTemplateExportDetails/).
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
    } = CatalogPlatformModel.ProductDownloadsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: List template brand
   * @description: Retrieve values related to template brand types for a specific company. The filter type query parameter defines what type of data to return.  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/listTemplateBrandTypeValues/).
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
      { abortEarly: false, allowUnknown: true }
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
   * @param {CatalogPlatformValidator.PartialUpdateProductParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name partialUpdateProduct
   * @summary: Patch a product
   * @description: Partially update an existing product in the catalog using PATCH method. This operation allows you to modify specific fields of a product without affecting other attributes. Only the fields provided in the request body will be updated, while all other existing product data remains unchanged.
   * For objects (e.g. attributes), merge keys shallowly: any key in the patch overrides the existing value.
   * For arrays of primitives (e.g. tags): replaced wholesale when present.
   * For arrays of objects (e.g. sizes): match on a unique identifier (seller_identifier) and apply the merge-patch per element; unmentioned elements remain unchanged.
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/partialUpdateProduct/).
   */
  async partialUpdateProduct(
    { itemId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.partialUpdateProduct().validate(
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
    const {
      error: warrning,
    } = CatalogPlatformValidator.partialUpdateProduct().validate(
      {
        itemId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > partialUpdateProduct \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v3.0/company/${this.config.companyId}/products/${itemId}/`,
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > partialUpdateProduct \n ${res_error}`,
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
   * @summary: Update HSN code
   * @description: Modify the HSN code associated with a product. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/updateHsnCode/).
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
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponseSchema>} -
   *   Success response
   * @name updateInventories
   * @summary: Update inventories
   * @description: Allows to add Inventory for particular size and selling location. for associated companies - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/updateInventories/).
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
    } = CatalogPlatformModel.InventoryUpdateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {CatalogPlatformValidator.UpdateLocationPriceParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.LocationPriceQuantitySuccessResponseSchema>}
   *   - Success response
   *
   * @name updateLocationPrice
   * @summary: Update an Article Price
   * @description: enables you to update article price for a specific size and selling location (store). The price updates will be reflected instantly after the API call. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/updateLocationPrice/).
   */
  async updateLocationPrice(
    { storeId, sellerIdentifier, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.updateLocationPrice().validate(
      {
        storeId,
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
    } = CatalogPlatformValidator.updateLocationPrice().validate(
      {
        storeId,
        sellerIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateLocationPrice \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/store/${storeId}/identifier/${sellerIdentifier}/price`,
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
    } = CatalogPlatformModel.LocationPriceQuantitySuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateLocationPrice \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateLocationQuantityParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.LocationPriceQuantitySuccessResponseSchema>}
   *   - Success response
   *
   * @name updateLocationQuantity
   * @summary: Update an Article Quantity
   * @description: enables you to update article quantity for a specific size and selling location (store). The quantity updates will be reflected instantly after the API call. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/updateLocationQuantity/).
   */
  async updateLocationQuantity(
    { storeId, sellerIdentifier, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.updateLocationQuantity().validate(
      {
        storeId,
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
    } = CatalogPlatformValidator.updateLocationQuantity().validate(
      {
        storeId,
        sellerIdentifier,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateLocationQuantity \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/store/${storeId}/identifier/${sellerIdentifier}/quantity`,
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
    } = CatalogPlatformModel.LocationPriceQuantitySuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateLocationQuantity \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateMarketplaceOptinParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.UpdateMarketplaceOptinResponseSchema>}
   *   - Success response
   *
   * @name updateMarketplaceOptin
   * @summary: Update marketplace optin
   * @description: Allows to update marketplace optin for a company by marketplace_slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/updateMarketplaceOptin/).
   */
  async updateMarketplaceOptin(
    { marketplaceSlug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.updateMarketplaceOptin().validate(
      {
        marketplaceSlug,
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
    } = CatalogPlatformValidator.updateMarketplaceOptin().validate(
      {
        marketplaceSlug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateMarketplaceOptin \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/channel/${marketplaceSlug}/opt-in`,
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
    } = CatalogPlatformModel.UpdateMarketplaceOptinResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateMarketplaceOptin \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateRealtimeInventoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponseSchema>} -
   *   Success response
   * @name updateRealtimeInventory
   * @summary: Update an inventory
   * @description: enables you to add inventory for a specific size and selling location (store). The inventory updates will be reflected instantly after the API call. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/updateRealtimeInventory/).
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
    } = CatalogPlatformModel.InventoryUpdateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name updateSizeGuide
   * @summary: Update size guide
   * @description: Allows to edit a specific size guide. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/updateSizeGuide/).
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
    } = CatalogPlatformModel.SuccessResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.UpdateTaxRuleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TaxRule>} - Success response
   * @name updateTaxRule
   * @summary: Update Tax Rule
   * @description: Update an existing tax rule under a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/updateTaxRule/).
   */
  async updateTaxRule(
    { ruleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.updateTaxRule().validate(
      {
        ruleId,
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
    } = CatalogPlatformValidator.updateTaxRule().validate(
      {
        ruleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateTaxRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/rules/${ruleId}`,
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
    } = CatalogPlatformModel.TaxRule().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateTaxRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.UpdateTaxVersionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TaxVersion>} - Success response
   * @name updateTaxVersion
   * @summary: Update a tax version
   * @description: Updates a tax rule using the provided rule_id. You can update any part of a scheduled version but only tax name of live version can be updated. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/updateTaxVersion/).
   */
  async updateTaxVersion(
    { ruleId, versionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.updateTaxVersion().validate(
      {
        ruleId,
        versionId,

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
    } = CatalogPlatformValidator.updateTaxVersion().validate(
      {
        ruleId,
        versionId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateTaxVersion \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/taxes/rules/${ruleId}/versions/${versionId}`,
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
    } = CatalogPlatformModel.TaxVersion().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateTaxVersion \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ValidateProductGlobalTemplateParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TemplatesGlobalValidationResponseSchema>}
   *   - Success response
   *
   * @name validateProductGlobalTemplate
   * @summary: Validate product template
   * @description: Allows you to list all product templates global validation values for all the fields present in the database for a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/validateProductGlobalTemplate/).
   */
  async validateProductGlobalTemplate(
    { itemType, bulk, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.validateProductGlobalTemplate().validate(
      {
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
    } = CatalogPlatformValidator.validateProductGlobalTemplate().validate(
      {
        itemType,
        bulk,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > validateProductGlobalTemplate \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["item_type"] = itemType;
    query_params["bulk"] = bulk;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/validation/schema/`,
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
    } = CatalogPlatformModel.TemplatesGlobalValidationResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > validateProductGlobalTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.ValidateProductTemplateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.TemplatesValidationResponseSchema>}
   *   - Success response
   *
   * @name validateProductTemplate
   * @summary: Validate product template
   * @description: Allows you to list all product templates validation values by its slug for all the fields present in the database for a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/validateProductTemplate/).
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
    } = CatalogPlatformModel.TemplatesValidationResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
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
   * @returns {Promise<CatalogPlatformModel.InventoryValidationResponseSchema>}
   *   - Success response
   *
   * @name validateProductTemplateSchema
   * @summary: Validate product template schema
   * @description: Allows you to list all product templates validation values for all the fields present in the database for a specific company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/catalog/validateProductTemplateSchema/).
   */
  async validateProductTemplateSchema(
    { itemType, schemaType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.validateProductTemplateSchema().validate(
      {
        itemType,
        schemaType,
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
        schemaType,
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
    query_params["schema_type"] = schemaType;

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
    } = CatalogPlatformModel.InventoryValidationResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
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
