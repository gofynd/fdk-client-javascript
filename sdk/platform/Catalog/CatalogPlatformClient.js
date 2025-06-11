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
   * @param {CatalogPlatformValidator.AllSizesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAllSizes>} - Success response
   * @name allSizes
   * @summary: Get all product sizes.
   * @description: Retrieve all available sizes for a product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/allSizes/).
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
   * @param {CatalogPlatformValidator.CreateBulkInventoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name createBulkInventory
   * @summary: Create bulk inventory.
   * @description: Helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkInventory/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/${batchId}`,
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
   * @returns {Promise<CatalogPlatformModel.InventoryBulkResponse>} - Success response
   * @name createBulkInventoryJob
   * @summary: Create bulk inventory upload job.
   * @description: Helps to create a bulk Inventory upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createBulkInventoryJob/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk`,
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
    } = CatalogPlatformModel.InventoryBulkResponse().validate(responseData, {
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
   * @returns {Promise<CatalogPlatformModel.ProductBulkResponse>} - Success response
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
    } = CatalogPlatformModel.ProductBulkResponse().validate(responseData, {
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
   * @param {CatalogPlatformValidator.CreateInventoryExportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryExportResponse>} - Success response
   * @name createInventoryExport
   * @summary: Create inventory export.
   * @description: Helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createInventoryExport/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory/download`,
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
      allowUnknown: true,
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
   * @summary: Create inventory export job.
   * @description: Helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createInventoryExportJob/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download`,
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
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.CreateMarketplaceOptinResponse>}
   *   - Success response
   *
   * @name createMarketplaceOptin
   * @summary: Update marketplace optin
   * @description: This API allows to create marketplace optin for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMarketplaceOptin/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/channel/${marketplace}/opt-in`,
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
    } = CatalogPlatformModel.CreateMarketplaceOptinResponse().validate(
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name createProduct
   * @summary: Create a product.
   * @description: Allows to create product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProduct/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products`,
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
   * @summary: Create product assets in bulk.
   * @description: Helps to create a bulk asset upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductAssetsInBulk/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/assets/bulk`,
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
   * @param {CatalogPlatformValidator.CreateProductBundleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetProductBundleCreateResponse>}
   *   - Success response
   *
   * @name createProductBundle
   * @summary: Create a product bundle.
   * @description: Create product bundle in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductBundle/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/product-bundle`,
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
      { abortEarly: false, allowUnknown: true }
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
   * @returns {Promise<CatalogPlatformModel.CreateProductDownloadsResponse>}
   *   - Success response
   *
   * @name createProductExportJob
   * @summary: Create product export job.
   * @description: Helps to create a Inventory export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductExportJob/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/downloads`,
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
    } = CatalogPlatformModel.CreateProductDownloadsResponse().validate(
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name createProductsInBulk
   * @summary: Create products in bulk.
   * @description: Helps to create products in bulk push to kafka for approval/creation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductsInBulk/).
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name createSizeGuide
   * @summary: Create a size guide.
   * @description: Allows to create a size guide associated to a brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSizeGuide/).
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
   * @param {CatalogPlatformValidator.DeleteBulkInventoryJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name deleteBulkInventoryJob
   * @summary: Delete inventory bulk upload job.
   * @description: Allows to delete bulk Inventory job associated with company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteBulkInventoryJob/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk/${batchId}`,
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name deleteProduct
   * @summary: Delete a product.
   * @description: Remove a specific product in the catalog - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteProduct/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}`,
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name deleteProductBulkJob
   * @summary: Delete product bulk upload job.
   * @description: Allows to delete bulk product job associated with company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteProductBulkJob/).
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
   * @returns {Promise<CatalogPlatformModel.InventoryUpdateResponse>} - Success response
   * @name deleteRealtimeInventory
   * @summary: Delete realtime inventory.
   * @description: Remove specific realtime inventory data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteRealtimeInventory/).
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
      allowUnknown: true,
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
   * @summary: Delete product size.
   * @description: Allows to delete size associated with product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSize/).
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
   * @param {CatalogPlatformValidator.DownloadInventoryTemplateViewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @name downloadInventoryTemplateView
   * @summary: Download inventory template view.
   * @description: Allows you to download product template data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/downloadInventoryTemplateView/).
   */
  async downloadInventoryTemplateView(
    { type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.downloadInventoryTemplateView().validate(
      {
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
    query_params["type"] = type;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/templates/download`,
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
   * @summary: Download product template views.
   * @description: Allows you to download product template data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/downloadProductTemplateViews/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/${slug}/download`,
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
   * @returns {Promise<CatalogPlatformModel.SuccessResponse>} - Success response
   * @name editProduct
   * @summary: Edit a product.
   * @description: Modify the details and settings of an existing product in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/editProduct/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}`,
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
   * @summary: Export inventory configuration.
   * @description: Retrieve List of different filters like brand, store, and type for inventory export. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/exportInventoryConfig/).
   */
  async exportInventoryConfig(
    { filter, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.exportInventoryConfig().validate(
      {
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
    } = CatalogPlatformValidator.exportInventoryConfig().validate(
      {
        filter,
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
    query_params["filter"] = filter;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download/configuration`,
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
   * @summary: Get all product HSN codes.
   * @description: Retrieve all HSN codes associated with products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllProductHsnCodes/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/hsn`,
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
   * @param {CatalogPlatformValidator.GetAttributeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AttributeDetail>} - Success response
   * @name getAttribute
   * @summary: Get attribute detail by slug
   * @description: Retrieve the attribute detail for catalog listings by attribute slug passed for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAttribute/).
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
   * @returns {Promise<CatalogPlatformModel.SingleCategoryResponse>} - Success response
   * @name getCategoryData
   * @summary: Get category data.
   * @description: Retrieve detailed information about a specific category with the associated meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCategoryData/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category/${uid}`,
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
      allowUnknown: true,
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-brand-details`,
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
   * @param {CatalogPlatformValidator.GetCompanyBrandsDRIParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CompanyDRIListResponseSchema>} -
   *   Success response
   * @name getCompanyBrandsDRI
   * @summary: Get support representative's associated to a company
   * @description: This API helps to view support representative's associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyBrandsDRI/).
   */
  async getCompanyBrandsDRI(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getCompanyBrandsDRI().validate(
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
    } = CatalogPlatformValidator.getCompanyBrandsDRI().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getCompanyBrandsDRI \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/poc`,
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
    } = CatalogPlatformModel.CompanyDRIListResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCompanyBrandsDRI \n ${res_error}`,
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/marketplaces/company-details`,
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
   * @summary: Get company metrics.
   * @description: Allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyMetrics/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/marketplaces/company-metrics`,
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
   * @param {CatalogPlatformValidator.GetCompanyVerificationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CompanyVerificationResponse>} -
   *   Success response
   * @name getCompanyVerification
   * @summary: Get company verification status
   * @description: This API gets company verification details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCompanyVerification/).
   */
  async getCompanyVerification(
    { q, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getCompanyVerification().validate(
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
    } = CatalogPlatformValidator.getCompanyVerification().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getCompanyVerification \n ${warrning}`,
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/verification`,
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
    } = CatalogPlatformModel.CompanyVerificationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCompanyVerification \n ${res_error}`,
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
   * @summary: Get department data.
   * @description: Retrieve detailed information about a specific department by UID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDepartmentData/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments/${uid}`,
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
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.GetHsnCodeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HsnCode>} - Success response
   * @name getHsnCode
   * @summary: Get HSN code.
   * @description: Retrieve the HSN code for a product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getHsnCode/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/hsn/${id}`,
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
   * @returns {Promise<CatalogPlatformModel.GetInventoriesResponse>} - Success response
   * @name getInventories
   * @summary: Retrieve inventories.
   * @description: Allows to get Inventories data for particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventories/).
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
      minSellable,
      maxSellable,
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
        minSellable,
        maxSellable,
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
        minSellable,
        maxSellable,
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
    query_params["min_sellable"] = minSellable;
    query_params["max_sellable"] = maxSellable;
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
    } = CatalogPlatformModel.GetInventoriesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @summary: Retrieve inventory bulk upload history.
   * @description: Helps to get bulk Inventory upload jobs data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBulkUploadHistory/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/bulk`,
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
   * @param {CatalogPlatformValidator.GetInventoryBySizeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryResponsePaginated>} -
   *   Success response
   * @name getInventoryBySize
   * @summary: Get inventory by size.
   * @description: Allows to retrieve Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBySize/).
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
   * @param {CatalogPlatformValidator.GetInventoryBySizeIdentifierParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
   *   - Success response
   *
   * @name getInventoryBySizeIdentifier
   * @summary: Get inventory by size identifier.
   * @description: Allows to retrieve Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryBySizeIdentifier/).
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
   * @param {CatalogPlatformValidator.GetInventoryExportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryExportJobResponse>} -
   *   Success response
   * @name getInventoryExport
   * @summary: Retrieve inventory export data.
   * @description: Helps to retrieve Inventory export history. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryExport/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/download`,
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
    } = CatalogPlatformModel.InventoryExportJobResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {CatalogPlatformValidator.GetInventoryExportDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.EditInventoryDownloadsResponse>}
   *   - Success response
   *
   * @name getInventoryExportDetail
   * @summary: Get Detail Product export detail.
   * @description: This API helps to get detail of Product export. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getInventoryExportDetail/).
   */
  async getInventoryExportDetail(
    { jobId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getInventoryExportDetail().validate(
      {
        jobId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getInventoryExportDetail().validate(
      {
        jobId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getInventoryExportDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory/download/${jobId}`,
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
    } = CatalogPlatformModel.EditInventoryDownloadsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getInventoryExportDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.GetLocationTagsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.StoreTagsResponseSchema>} - Success response
   * @name getLocationTags
   * @summary: Get tags associated with locations for a company.
   * @description: This API fetches all the tags associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getLocationTags/).
   */
  async getLocationTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getLocationTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getLocationTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getLocationTags \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/location/tags`,
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
    } = CatalogPlatformModel.StoreTagsResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getLocationTags \n ${res_error}`,
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
   * @summary: List all marketplaces
   * @description: This API allows to get marketplace information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMarketplaces/).
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
   * @param {CatalogPlatformValidator.GetProductParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SingleProductResponse>} - Success response
   * @name getProduct
   * @summary: Get product details.
   * @description: Retrieve data associated to a particular product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProduct/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/${itemId}`,
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
      allowUnknown: true,
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
   * @summary: Retrieve product assets in bulk.
   * @description: Helps to retrieve bulk asset jobs data associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductAssetsInBulk/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/assets/bulk`,
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
   * @param {CatalogPlatformValidator.GetProductAttributesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductAttributesResponse>} -
   *   Success response
   * @name getProductAttributes
   * @summary: Get product attributes.
   * @description: List all the attributes by their L3 categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductAttributes/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/product-attributes`,
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
   * @summary: Retrieve product bulk upload history.
   * @description: Helps to get bulk product upload jobs data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBulkUploadHistory/).
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
   * @param {CatalogPlatformValidator.GetProductBundleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetProductBundleListingResponse>}
   *   - Success response
   *
   * @name getProductBundle
   * @summary: Retrieve product bundles.
   * @description: Retrieve a list of product bundles available in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBundle/).
   */
  async getProductBundle(
    { q, slug, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductBundle().validate(
      {
        q,
        slug,
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
    } = CatalogPlatformValidator.getProductBundle().validate(
      {
        q,
        slug,
        pageNo,
        pageSize,
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
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/product-bundle`,
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
      { abortEarly: false, allowUnknown: true }
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
   * @summary: Get product bundle details.
   * @description: Retrieve detailed information about a specific product bundle. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductBundleDetail/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/product-bundle/${id}`,
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
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.GetProductExportDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetProductDownloadsResponse>} -
   *   Success response
   * @name getProductExportDetail
   * @summary: Get Detail Product export detail.
   * @description: This API helps to get detail of Product export. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductExportDetail/).
   */
  async getProductExportDetail(
    { jobId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getProductExportDetail().validate(
      {
        jobId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getProductExportDetail().validate(
      {
        jobId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductExportDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/downloads/${jobId}`,
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
    } = CatalogPlatformModel.GetProductDownloadsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductExportDetail \n ${res_error}`,
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
   * @summary: Retrieve product export jobs.
   * @description: View details including trigger data, task id , etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductExportJobs/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/downloads`,
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
      allowUnknown: true,
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
   * @returns {Promise<CatalogPlatformModel.Product>} - Success response
   * @name getProductSize
   * @summary: Get product size details.
   * @description: Retrieve data associated to a particular product size. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductSize/).
   */
  async getProductSize(
    { itemId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductSize().validate(
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
    } = CatalogPlatformValidator.getProductSize().validate(
      {
        itemId,
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

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/${itemId}/sizes`,
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
    } = CatalogPlatformModel.Product().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @summary: Get product tags.
   * @description: Retrieve tags data associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductTags/).
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
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.GetProductTemplateBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetProductTemplateSlugResponse>}
   *   - Success response
   *
   * @name getProductTemplateBySlug
   * @summary: Update marketplace optin
   * @description: This API retrieves template for a given slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductTemplateBySlug/).
   */
  async getProductTemplateBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getProductTemplateBySlug().validate(
      {
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
    } = CatalogPlatformValidator.getProductTemplateBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductTemplateBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/${slug}`,
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
    } = CatalogPlatformModel.GetProductTemplateSlugResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductTemplateBySlug \n ${res_error}`,
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
   * @summary: Get product validation.
   * @description: Retrieve validation data for a specific product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductValidation/).
   */
  async getProductValidation(
    { type, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getProductValidation().validate(
      {
        type,
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
    } = CatalogPlatformValidator.getProductValidation().validate(
      {
        type,
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductValidation \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["type"] = type;
    query_params["slug"] = slug;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/validation`,
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
   * @param {CatalogPlatformValidator.GetProductVerificationDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductVerificationModel>} -
   *   Success response
   * @name getProductVerificationDetails
   * @summary: Get the verification detail of a product
   * @description: Get the verification detail of a product - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductVerificationDetails/).
   */
  async getProductVerificationDetails(
    { itemId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.getProductVerificationDetails().validate(
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
    } = CatalogPlatformValidator.getProductVerificationDetails().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductVerificationDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/verification/products/${itemId}`,
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
    } = CatalogPlatformModel.ProductVerificationModel().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductVerificationDetails \n ${res_error}`,
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
   * @summary: Retrieve products.
   * @description: Retrieve a list of products available - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProducts/).
   */
  async getProducts(
    {
      brandIds,
      multiSize,
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
        multiSize,
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
        multiSize,
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
    query_params["multi_size"] = multiSize;
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products`,
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
   * @param {CatalogPlatformValidator.GetSellerInsightsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CrossSellingResponse>} - Success response
   * @name getSellerInsights
   * @summary: Get seller insights.
   * @description: Retrieve insights and analytics related to sellers within the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSellerInsights/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/cross-selling/${sellerAppId}/analytics/insights`,
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
      allowUnknown: true,
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
   * @summary: Get single product HSN code.
   * @description: Retrieve the HSN code for a single product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSingleProductHSNCode/).
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
   * @returns {Promise<CatalogPlatformModel.SizeGuideResponse>} - Success response
   * @name getSizeGuide
   * @summary: Get size guide details.
   * @description: Retrieve data associated about a specific size guide. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSizeGuide/).
   */
  async getSizeGuide(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getSizeGuide().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getSizeGuide().validate(
      { id },
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}`,
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
   * @summary: Retrieve size guides.
   * @description: Allows to view all the size guides associated to the seller. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSizeGuides/).
   */
  async getSizeGuides(
    { active, q, brandId, tag, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getSizeGuides().validate(
      {
        active,
        q,
        brandId,
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
        brandId,
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
    query_params["brand_id"] = brandId;
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/marketplaces/location-details`,
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
   * @param {CatalogPlatformValidator.GetVariantTypesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.VariantTypesResponse>} - Success response
   * @name getVariantTypes
   * @summary: Get variant type list
   * @description: This API gets meta associated to products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getVariantTypes/).
   */
  async getVariantTypes(
    { templateTag, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = CatalogPlatformValidator.getVariantTypes().validate(
      {
        templateTag,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformValidator.getVariantTypes().validate(
      {
        templateTag,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getVariantTypes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["template_tag"] = templateTag;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/variant-types`,
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
    } = CatalogPlatformModel.VariantTypesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getVariantTypes \n ${res_error}`,
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
   * @summary: Get variants of products.
   * @description: Retrieve variants of a specific product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getVariantsOfProducts/).
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
      allowUnknown: true,
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
   * @summary: List categories.
   * @description: Retrieve a list of meta associated available product categories in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listCategories/).
   */
  async listCategories(
    { level, department, q, pageNo, pageSize, uids, requestHeaders } = {
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

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/category`,
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
   * @param {CatalogPlatformValidator.ListDepartmentsDataParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DepartmentsResponse>} - Success response
   * @name listDepartmentsData
   * @summary: List department data.
   * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listDepartmentsData/).
   */
  async listDepartmentsData(
    {
      pageNo,
      itemType,
      pageSize,
      name,
      search,
      isActive,
      uids,
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
        uids,
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
        uids,
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
    query_params["uids"] = uids;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/departments`,
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
      allowUnknown: true,
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
   * @summary: List HSN codes.
   * @description: Retrieve a list of Harmonized System Nomenclature (HSN) codes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listHSNCodes/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/hsn`,
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
   * @returns {Promise<CatalogPlatformModel.InventoryExportJobListResponse>}
   *   - Success response
   *
   * @name listInventoryExport
   * @summary: List inventory exports.
   * @description: Helps you the retrieve the history of inventory jobs depending on the filtered criteria. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listInventoryExport/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory/download`,
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
   * @returns {Promise<CatalogPlatformModel.TemplatesResponse>} - Success response
   * @name listProductTemplate
   * @summary: List product templates.
   * @description: Allows you to list all product templates, also can filter by department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplate/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates`,
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
   * @returns {Promise<CatalogPlatformModel.ProdcutTemplateCategoriesResponse>}
   *   - Success response
   *
   * @name listProductTemplateCategories
   * @summary: List product template categories.
   * @description: Allows you to list all product categories values for the departments specified. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listProductTemplateCategories/).
   */
  async listProductTemplateCategories(
    { departments, itemType, pageSize, pageNo, q, slug, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.listProductTemplateCategories().validate(
      {
        departments,
        itemType,
        pageSize,
        pageNo,
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
    } = CatalogPlatformValidator.listProductTemplateCategories().validate(
      {
        departments,
        itemType,
        pageSize,
        pageNo,
        q,
        slug,
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
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["q"] = q;
    query_params["slug"] = slug;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/categories`,
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
   * @param {CatalogPlatformValidator.ListTemplateBrandTypeValuesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductConfigurationDownloads>} -
   *   Success response
   * @name listTemplateBrandTypeValues
   * @summary: List template brand type values.
   * @description: Retrieve values related to template brand types. The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/listTemplateBrandTypeValues/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/downloads/configuration`,
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
   * @param {CatalogPlatformValidator.PatchInventoryExportDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.EditInventoryDownloadsResponse>}
   *   - Success response
   *
   * @name patchInventoryExportDetail
   * @summary: Edit notification_emails and status of export job.
   * @description: This API helps to edit notification_emails and status of export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/patchInventoryExportDetail/).
   */
  async patchInventoryExportDetail(
    { jobId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.patchInventoryExportDetail().validate(
      {
        jobId,
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
    } = CatalogPlatformValidator.patchInventoryExportDetail().validate(
      {
        jobId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > patchInventoryExportDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory/download/${jobId}`,
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
    } = CatalogPlatformModel.EditInventoryDownloadsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > patchInventoryExportDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformValidator.PatchProductExportDetailParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.PatchProductDownloadsResponse>} -
   *   Success response
   * @name patchProductExportDetail
   * @summary: Edit notification_emails and status of export job.
   * @description: This API helps to edit notification_emails and status of export job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/patchProductExportDetail/).
   */
  async patchProductExportDetail(
    { jobId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.patchProductExportDetail().validate(
      {
        jobId,
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
    } = CatalogPlatformValidator.patchProductExportDetail().validate(
      {
        jobId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > patchProductExportDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/products/downloads/${jobId}`,
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
    } = CatalogPlatformModel.PatchProductDownloadsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > patchProductExportDetail \n ${res_error}`,
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
   * @summary: Update inventories.
   * @description: Allows to add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateInventories/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/inventory`,
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
      allowUnknown: true,
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
   * @param {CatalogPlatformValidator.UpdateMarketplaceOptinParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.UpdateMarketplaceOptinResponse>}
   *   - Success response
   *
   * @name updateMarketplaceOptin
   * @summary: Update marketplace optin
   * @description: This API allows to update marketplace optin for a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMarketplaceOptin/).
   */
  async updateMarketplaceOptin(
    { marketplace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.updateMarketplaceOptin().validate(
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
    } = CatalogPlatformValidator.updateMarketplaceOptin().validate(
      {
        marketplace,
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/channel/${marketplace}/opt-in`,
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
    } = CatalogPlatformModel.UpdateMarketplaceOptinResponse().validate(
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
   * @param {CatalogPlatformValidator.UpdateProductBundleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetProductBundleCreateResponse>}
   *   - Success response
   *
   * @name updateProductBundle
   * @summary: Update a product bundle.
   * @description: Modify the details of an existing product bundle. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateProductBundle/).
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/product-bundle/${id}`,
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
      { abortEarly: false, allowUnknown: true }
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
   * @summary: Update realtime inventory.
   * @description: Allows to add Inventory for particular size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateRealtimeInventory/).
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
      allowUnknown: true,
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
   * @summary: Update a size guide.
   * @description: Allows to edit a size guide. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSizeGuide/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/sizeguide/${id}`,
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
   * @param {CatalogPlatformValidator.UploadBulkProductsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductBulkResponse>} - Success response
   * @name uploadBulkProducts
   * @summary: Upload bulk products.
   * @description: Helps to create a bulk products upload job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/uploadBulkProducts/).
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
    } = CatalogPlatformModel.ProductBulkResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
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
   * @summary: Validate product template.
   * @description: Allows you to list all product templates validation values for all the fields present in the database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductTemplate/).
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/products/templates/${slug}/validation/schema`,
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
   * @returns {Promise<CatalogPlatformModel.InventoryValidationResponse>} -
   *   Success response
   * @name validateProductTemplateSchema
   * @summary: Validate product template schema.
   * @description: Allows you to list all product templates validation values for all the fields present in the database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductTemplateSchema/).
   */
  async validateProductTemplateSchema(
    { itemType, bulk, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformValidator.validateProductTemplateSchema().validate(
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
    } = CatalogPlatformValidator.validateProductTemplateSchema().validate(
      {
        itemType,
        bulk,
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
    query_params["bulk"] = bulk;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/inventory/templates/validation/schema`,
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
