const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CatalogPlatformApplicationValidator = require("./CatalogPlatformApplicationValidator");
const CatalogPlatformModel = require("./CatalogPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Catalog {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.AddCollectionItemsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CommonResponseSchemaCollection>}
   *   - Success response
   *
   * @name addCollectionItems
   * @summary: Add items to a collection
   * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/addCollectionItems/).
   */
  async addCollectionItems(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.addCollectionItems().validate(
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
    } = CatalogPlatformApplicationValidator.addCollectionItems().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > addCollectionItems \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CommonResponseSchemaCollection().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > addCollectionItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.AddProductsInPriceFactoryByZoneIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreatePriceFactoryProductResponseSchema>}
   *   - Success response
   *
   * @name addProductsInPriceFactoryByZoneId
   * @summary: Add products to price factory
   * @description: This API allows to add products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/addProductsInPriceFactoryByZoneId/).
   */
  async addProductsInPriceFactoryByZoneId(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.addProductsInPriceFactoryByZoneId().validate(
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
    } = CatalogPlatformApplicationValidator.addProductsInPriceFactoryByZoneId().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > addProductsInPriceFactoryByZoneId \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}/products`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreatePriceFactoryProductResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > addProductsInPriceFactoryByZoneId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.ClearCollectionItemsPriorityParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CommonResponseSchemaCollection>}
   *   - Success response
   *
   * @name clearCollectionItemsPriority
   * @summary: Clear priorities set for collection items.
   * @description: Clear priorities set for collection items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/clearCollectionItemsPriority/).
   */
  async clearCollectionItemsPriority(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.clearCollectionItemsPriority().validate(
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
    } = CatalogPlatformApplicationValidator.clearCollectionItemsPriority().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > clearCollectionItemsPriority \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CommonResponseSchemaCollection().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > clearCollectionItemsPriority \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateAppCategoryReturnConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name createAppCategoryReturnConfiguration
   * @summary: Create Category level Application Return Configuration setttings
   * @description: Create Category level Application Return Configuration setttings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAppCategoryReturnConfiguration/).
   */
  async createAppCategoryReturnConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createAppCategoryReturnConfiguration().validate(
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
    } = CatalogPlatformApplicationValidator.createAppCategoryReturnConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createAppCategoryReturnConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/return-config/categories`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > createAppCategoryReturnConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateAppPriceFactoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryResponseSchema>}
   *   - Success response
   *
   * @name createAppPriceFactory
   * @summary: Create price factory
   * @description: This API allows to create price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAppPriceFactory/).
   */
  async createAppPriceFactory(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createAppPriceFactory().validate(
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
    } = CatalogPlatformApplicationValidator.createAppPriceFactory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createAppPriceFactory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAppPriceFactoryResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createAppPriceFactory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateAppReturnConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name createAppReturnConfiguration
   * @summary: Create Return configuration level set for an application
   * @description: Create Return configuration level set for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAppReturnConfiguration/).
   */
  async createAppReturnConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createAppReturnConfiguration().validate(
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
    } = CatalogPlatformApplicationValidator.createAppReturnConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createAppReturnConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/return-config`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > createAppReturnConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateAutocompleteSettingsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AutocompleteUpsertResponseSchema>}
   *   - Success response
   *
   * @name createAutocompleteSettings
   * @summary: Create autocomplete settings config for an application
   * @description: This API allows to create autocomplete settings for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAutocompleteSettings/).
   */
  async createAutocompleteSettings(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createAutocompleteSettings().validate(
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
    } = CatalogPlatformApplicationValidator.createAutocompleteSettings().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createAutocompleteSettings \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/settings`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AutocompleteUpsertResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createAutocompleteSettings \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateCollectionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CollectionCreateResponseSchema>}
   *   - Success response
   *
   * @name createCollection
   * @summary: Add a Collection
   * @description: Create a collection to the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCollection/).
   */
  async createCollection(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createCollection().validate(
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
    } = CatalogPlatformApplicationValidator.createCollection().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createCollection \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CollectionCreateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createCollection \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateConfigurationByTypeParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
   *   Success response
   * @name createConfigurationByType
   * @summary: Create configuration by type.
   * @description: Add configuration for categories & brands. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createConfigurationByType/).
   */
  async createConfigurationByType(
    { type, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createConfigurationByType().validate(
      {
        type,
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
    } = CatalogPlatformApplicationValidator.createConfigurationByType().validate(
      {
        type,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createConfigurationByType \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAppCatalogConfiguration().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createConfigurationByType \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateConfigurationProductListingParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
   *   Success response
   * @name createConfigurationProductListing
   * @summary: Create configuration for product listing.
   * @description: Add configuration for products & listing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createConfigurationProductListing/).
   */
  async createConfigurationProductListing(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createConfigurationProductListing().validate(
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
    } = CatalogPlatformApplicationValidator.createConfigurationProductListing().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createConfigurationProductListing \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAppCatalogConfiguration().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createConfigurationProductListing \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateCustomAutocompleteRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateAutocompleteWordsResponseSchema>}
   *   - Success response
   *
   * @name createCustomAutocompleteRule
   * @summary: Create custom autocomplete rules.
   * @description: Generate and add custom autocomplete rules to the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCustomAutocompleteRule/).
   */
  async createCustomAutocompleteRule(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createCustomAutocompleteRule().validate(
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
    } = CatalogPlatformApplicationValidator.createCustomAutocompleteRule().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createCustomAutocompleteRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAutocompleteWordsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createCustomAutocompleteRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateCustomKeywordParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
   * @name createCustomKeyword
   * @summary: Create custom search keywords.
   * @description: Create a Custom Search Keywords.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCustomKeyword/).
   */
  async createCustomKeyword(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createCustomKeyword().validate(
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
    } = CatalogPlatformApplicationValidator.createCustomKeyword().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createCustomKeyword \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchWordsData().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createCustomKeyword \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateGroupConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
   * @name createGroupConfiguration
   * @summary: Create group configuration.
   * @description: Create configuration for group configuration types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createGroupConfiguration/).
   */
  async createGroupConfiguration(
    { configType, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createGroupConfiguration().validate(
      {
        configType,
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
    } = CatalogPlatformApplicationValidator.createGroupConfiguration().validate(
      {
        configType,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createGroupConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/groups`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AppConfigurationDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createGroupConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateListingConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AppConfigurationsFilterResponseSchema>}
   *   - Success response
   *
   * @name createListingConfiguration
   * @summary: Create listing configuration.
   * @description: Add configuration for catalog listing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createListingConfiguration/).
   */
  async createListingConfiguration(
    { configType, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createListingConfiguration().validate(
      {
        configType,
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
    } = CatalogPlatformApplicationValidator.createListingConfiguration().validate(
      {
        configType,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createListingConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AppConfigurationsFilterResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createListingConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRuleBoostActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name createMerchandisingRuleBoostAction
   * @summary: Create Merchandising Rule's Boost action details
   * @description: This allows you to create Boost action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRuleBoostAction/).
   */
  async createMerchandisingRuleBoostAction(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createMerchandisingRuleBoostAction().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.createMerchandisingRuleBoostAction().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createMerchandisingRuleBoostAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/boost`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createMerchandisingRuleBoostAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRuleBuryActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name createMerchandisingRuleBuryAction
   * @summary: Get Merchandising Rule's Bury action details
   * @description: This allows you to create Bury action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRuleBuryAction/).
   */
  async createMerchandisingRuleBuryAction(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createMerchandisingRuleBuryAction().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.createMerchandisingRuleBuryAction().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createMerchandisingRuleBuryAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/bury`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createMerchandisingRuleBuryAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRuleHideActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name createMerchandisingRuleHideAction
   * @summary: Create Merchandising Rule's Hide action details
   * @description: This allows you to create hide action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRuleHideAction/).
   */
  async createMerchandisingRuleHideAction(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createMerchandisingRuleHideAction().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.createMerchandisingRuleHideAction().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createMerchandisingRuleHideAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/hide`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createMerchandisingRuleHideAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRulePinActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name createMerchandisingRulePinAction
   * @summary: Create Merchandising Rule's action details
   * @description: This allows you to create pin action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRulePinAction/).
   */
  async createMerchandisingRulePinAction(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createMerchandisingRulePinAction().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.createMerchandisingRulePinAction().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createMerchandisingRulePinAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/pin`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createMerchandisingRulePinAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRuleQueryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.MerchandiseQueryResponseSchema>}
   *   - Success response
   *
   * @name createMerchandisingRuleQuery
   * @summary: Create a Merchandising Rule's query
   * @description: This allows you to Create a merchandising rule's query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRuleQuery/).
   */
  async createMerchandisingRuleQuery(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createMerchandisingRuleQuery().validate(
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
    } = CatalogPlatformApplicationValidator.createMerchandisingRuleQuery().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createMerchandisingRuleQuery \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/query`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.MerchandiseQueryResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createMerchandisingRuleQuery \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateProductPriceFactoryBulkJobParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobResponseSchema>}
   *   - Success response
   *
   * @name createProductPriceFactoryBulkJob
   * @summary: Add products in price factory in bulk
   * @description: This API allows to create bulk job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductPriceFactoryBulkJob/).
   */
  async createProductPriceFactoryBulkJob(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createProductPriceFactoryBulkJob().validate(
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
    } = CatalogPlatformApplicationValidator.createProductPriceFactoryBulkJob().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createProductPriceFactoryBulkJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}/bulk`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createProductPriceFactoryBulkJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateSearchConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateSearchConfigurationResponseSchema>}
   *   - Success response
   *
   * @name createSearchConfiguration
   * @summary: Create search configuration
   * @description: Create search configuration for the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSearchConfiguration/).
   */
  async createSearchConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createSearchConfiguration().validate(
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
    } = CatalogPlatformApplicationValidator.createSearchConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createSearchConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/configuration`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateSearchConfigurationResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createSearchConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateSearchRerankParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateSearchRerankResponseSchema>}
   *   - Success response
   *
   * @name createSearchRerank
   * @summary: Create search rerank for an application
   * @description: This view allows you to create search rerank attributes for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSearchRerank/).
   */
  async createSearchRerank(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createSearchRerank().validate(
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
    } = CatalogPlatformApplicationValidator.createSearchRerank().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createSearchRerank \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/rerank`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateSearchRerankResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createSearchRerank \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.CreateSynonymsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SynonymCreateResponseSchema>} -
   *   Success response
   * @name createSynonyms
   * @summary: create oneway/ twoway search synonyms for an application
   * @description: This view allows you to create search synonyms for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSynonyms/).
   */
  async createSynonyms(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.createSynonyms().validate(
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
    } = CatalogPlatformApplicationValidator.createSynonyms().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > createSynonyms \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/synonyms`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SynonymCreateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > createSynonyms \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteAppCategoryReturnConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name deleteAppCategoryReturnConfiguration
   * @summary: Delete Category level Application Return Configuration setttings
   * @description: Delete Category level Application Return Configuration setttings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteAppCategoryReturnConfiguration/).
   */
  async deleteAppCategoryReturnConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteAppCategoryReturnConfiguration().validate(
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
    } = CatalogPlatformApplicationValidator.deleteAppCategoryReturnConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteAppCategoryReturnConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/return-config/categories`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > deleteAppCategoryReturnConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteAutocompleteKeywordParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DeleteResponseSchema>} - Success response
   * @name deleteAutocompleteKeyword
   * @summary: Delete autocomplete keywords.
   * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteAutocompleteKeyword/).
   */
  async deleteAutocompleteKeyword(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteAutocompleteKeyword().validate(
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
    } = CatalogPlatformApplicationValidator.deleteAutocompleteKeyword().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteAutocompleteKeyword \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.DeleteResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteAutocompleteKeyword \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteCollectionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CommonResponseSchemaCollection>}
   *   - Success response
   *
   * @name deleteCollection
   * @summary: Delete a collection.
   * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteCollection/).
   */
  async deleteCollection(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteCollection().validate(
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
    } = CatalogPlatformApplicationValidator.deleteCollection().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteCollection \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CommonResponseSchemaCollection().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteCollection \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteGroupConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<any>} - Success response
   * @name deleteGroupConfiguration
   * @summary: Delete group configuration.
   * @description: Delete configuration of the product config type of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteGroupConfiguration/).
   */
  async deleteGroupConfiguration(
    { configType, groupSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteGroupConfiguration().validate(
      {
        configType,
        groupSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.deleteGroupConfiguration().validate(
      {
        configType,
        groupSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteGroupConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/groups/${groupSlug}`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > deleteGroupConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteListingConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponseSchema>} -
   *   Success response
   * @name deleteListingConfiguration
   * @summary: Delete listing configuration.
   * @description: Remove a specific listing configuration from the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteListingConfiguration/).
   */
  async deleteListingConfiguration(
    { configType, configId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteListingConfiguration().validate(
      {
        configType,
        configId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.deleteListingConfiguration().validate(
      {
        configType,
        configId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteListingConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/item/${configId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ConfigSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteListingConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteMerchandisingRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name deleteMerchandisingRule
   * @summary: Delete a Merchandising Rule
   * @description: This allows you to Update a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteMerchandisingRule/).
   */
  async deleteMerchandisingRule(
    { merchandisingRuleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteMerchandisingRule().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.deleteMerchandisingRule().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteMerchandisingRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteMerchandisingRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteMerchandisingRulesPreviewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name deleteMerchandisingRulesPreview
   * @summary: Delete a Merchandising Rule's preview
   * @description: This allows you to Update a merchandising rule's preview. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteMerchandisingRulesPreview/).
   */
  async deleteMerchandisingRulesPreview(
    { merchandisingRuleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteMerchandisingRulesPreview().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.deleteMerchandisingRulesPreview().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteMerchandisingRulesPreview \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/preview`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteMerchandisingRulesPreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteSearchConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DeleteSearchConfigurationResponseSchema>}
   *   - Success response
   *
   * @name deleteSearchConfiguration
   * @summary: Delete Search Configuration
   * @description: Delete search configuration in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSearchConfiguration/).
   */
  async deleteSearchConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteSearchConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.deleteSearchConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteSearchConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/configuration`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.DeleteSearchConfigurationResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteSearchConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteSearchKeywordsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DeleteResponseSchema>} - Success response
   * @name deleteSearchKeywords
   * @summary: Delete search keywords.
   * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSearchKeywords/).
   */
  async deleteSearchKeywords(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteSearchKeywords().validate(
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
    } = CatalogPlatformApplicationValidator.deleteSearchKeywords().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteSearchKeywords \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.DeleteResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteSearchKeywords \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteSearchRerankConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DeleteSearchRerankConfigurationResponseSchema>}
   *   - Success response
   *
   * @name deleteSearchRerankConfiguration
   * @summary: Delete search rerank configuration for an application
   * @description: This view allows you to delete search rerank configuration for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSearchRerankConfiguration/).
   */
  async deleteSearchRerankConfiguration(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteSearchRerankConfiguration().validate(
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
    } = CatalogPlatformApplicationValidator.deleteSearchRerankConfiguration().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteSearchRerankConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/rerank/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.DeleteSearchRerankConfigurationResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteSearchRerankConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.DeleteSynonymParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SynonymDeleteResponseSchemaSchema>}
   *   - Success response
   *
   * @name deleteSynonym
   * @summary: Delete synonym for an application.
   * @description: This view allows you to delete synonym for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSynonym/).
   */
  async deleteSynonym(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.deleteSynonym().validate(
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
    } = CatalogPlatformApplicationValidator.deleteSynonym().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > deleteSynonym \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/synonym`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SynonymDeleteResponseSchemaSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > deleteSynonym \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.EditAppPriceFactoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AppPriceFactory>} - Success response
   * @name editAppPriceFactory
   * @summary: Edit a price factory
   * @description: This API allows to update price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/editAppPriceFactory/).
   */
  async editAppPriceFactory(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.editAppPriceFactory().validate(
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
    } = CatalogPlatformApplicationValidator.editAppPriceFactory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > editAppPriceFactory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AppPriceFactory().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > editAppPriceFactory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.ExportProductsInPriceFactoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductExportJobResponseSchema>}
   *   - Success response
   *
   * @name exportProductsInPriceFactory
   * @summary: Export products of price factory.
   * @description: This API allows to export products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/exportProductsInPriceFactory/).
   */
  async exportProductsInPriceFactory(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.exportProductsInPriceFactory().validate(
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
    } = CatalogPlatformApplicationValidator.exportProductsInPriceFactory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > exportProductsInPriceFactory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}/export`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAppPriceFactoryProductExportJobResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > exportProductsInPriceFactory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.ExportSynonymsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SynonymExportResponseSchema>} -
   *   Success response
   * @name exportSynonyms
   * @summary: Export synonym for an application.
   * @description: This API allows you to start a job creates a csv file containing all the synonyms for that application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/exportSynonyms/).
   */
  async exportSynonyms(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.exportSynonyms().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.exportSynonyms().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > exportSynonyms \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/bulk/export`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SynonymExportResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > exportSynonyms \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAllCollectionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetCollectionListingResponseSchema>}
   *   - Success response
   *
   * @name getAllCollections
   * @summary: Retrieve all collections.
   * @description: A Collection allows you to organize your products into hierarchical groups. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllCollections/).
   */
  async getAllCollections(
    {
      q,
      scheduleStatus,
      type,
      tag,
      isActive,
      pageNo,
      pageSize,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAllCollections().validate(
      {
        q,
        scheduleStatus,
        type,
        tag,
        isActive,
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
    } = CatalogPlatformApplicationValidator.getAllCollections().validate(
      {
        q,
        scheduleStatus,
        type,
        tag,
        isActive,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAllCollections \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["schedule_status"] = scheduleStatus;
    query_params["type"] = type;
    query_params["tag"] = tag;
    query_params["is_active"] = isActive;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetCollectionListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAllCollections \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAllSearchKeywordParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetSearchWordsResponseSchema>} -
   *   Success response
   * @name getAllSearchKeyword
   * @summary: Get all search keywords.
   * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllSearchKeyword/).
   */
  async getAllSearchKeyword(
    { pageNo, pageSize, q, isActive, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAllSearchKeyword().validate(
      {
        pageNo,
        pageSize,
        q,
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
    } = CatalogPlatformApplicationValidator.getAllSearchKeyword().validate(
      {
        pageNo,
        pageSize,
        q,
        isActive,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAllSearchKeyword \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["is_active"] = isActive;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchWordsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAllSearchKeyword \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAppCategoryReturnConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.BaseAppCategoryReturnConfigResponseSchema>}
   *   - Success response
   *
   * @name getAppCategoryReturnConfig
   * @summary: Get all category level configuration level set for an application
   * @description: Get all category level configuration level set for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppCategoryReturnConfig/).
   */
  async getAppCategoryReturnConfig(
    { q, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppCategoryReturnConfig().validate(
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
    } = CatalogPlatformApplicationValidator.getAppCategoryReturnConfig().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getAppCategoryReturnConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/return-config/categories`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.BaseAppCategoryReturnConfigResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppCategoryReturnConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAppInventoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.InventoryStockResponseSchema>} -
   *   Success response
   * @name getAppInventory
   * @summary: Get application inventory.
   * @description: Retrieve inventory data related to the sales channel. this can be used  to get the Inventory status of products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppInventory/).
   */
  async getAppInventory(
    {
      itemIds,
      storeIds,
      brandIds,
      sellerIdentifiers,
      timestamp,
      pageSize,
      pageId,
      qtyGt,
      qtyLt,
      qtyType,
      fromDate,
      toDate,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppInventory().validate(
      {
        itemIds,
        storeIds,
        brandIds,
        sellerIdentifiers,
        timestamp,
        pageSize,
        pageId,
        qtyGt,
        qtyLt,
        qtyType,
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getAppInventory().validate(
      {
        itemIds,
        storeIds,
        brandIds,
        sellerIdentifiers,
        timestamp,
        pageSize,
        pageId,
        qtyGt,
        qtyLt,
        qtyType,
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAppInventory \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["item_ids"] = itemIds;
    query_params["store_ids"] = storeIds;
    query_params["brand_ids"] = brandIds;
    query_params["seller_identifiers"] = sellerIdentifiers;
    query_params["timestamp"] = timestamp;
    query_params["page_size"] = pageSize;
    query_params["page_id"] = pageId;
    query_params["qty_gt"] = qtyGt;
    query_params["qty_lt"] = qtyLt;
    query_params["qty_type"] = qtyType;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/inventory`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryStockResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppInventory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAppLocationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.LocationListSchema>} - Success response
   * @name getAppLocations
   * @summary: Get application locations.
   * @description: Retrieve all stores associated with a sales channel, with support for searching by store name and filtering by store type and status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppLocations/).
   */
  async getAppLocations(
    {
      storeType,
      uid,
      q,
      stage,
      pageNo,
      pageSize,
      tags,
      storeTypes,
      companyUids,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppLocations().validate(
      {
        storeType,
        uid,
        q,
        stage,
        pageNo,
        pageSize,
        tags,
        storeTypes,
        companyUids,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getAppLocations().validate(
      {
        storeType,
        uid,
        q,
        stage,
        pageNo,
        pageSize,
        tags,
        storeTypes,
        companyUids,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAppLocations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["store_type"] = storeType;
    query_params["uid"] = uid;
    query_params["q"] = q;
    query_params["stage"] = stage;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["tags"] = tags;
    query_params["store_types"] = storeTypes;
    query_params["company_uids"] = companyUids;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/locations`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.LocationListSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {string} [arg.storeType] - Helps to sort the location list on the
   *   basis of location type.
   * @param {number[]} [arg.uid] - Helps to sort the location list on the
   *   basis of uid list.
   * @param {string} [arg.q] - Query that is to be searched.
   * @param {string} [arg.stage] - To filter companies on basis of verified or
   *   unverified companies.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 20.
   * @param {string[]} [arg.tags] - Get locations filtered by tags.
   * @param {string[]} [arg.storeTypes] - Get locations filtered by store types.
   * @param {number[]} [arg.companyUids] - Filter stores by company IDs
   *   available in the application.
   * @returns {Paginator<CatalogPlatformModel.LocationListSchema>}
   * @summary: Get application locations.
   * @description: Retrieve all stores associated with a sales channel, with support for searching by store name and filtering by store type and status.
   */
  getAppLocationsPaginator({
    companyId,
    applicationId,
    storeType,
    uid,
    q,
    stage,
    pageSize,
    tags,
    storeTypes,
    companyUids,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppLocations({
        companyId: companyId,
        applicationId: applicationId,
        storeType: storeType,
        uid: uid,
        q: q,
        stage: stage,
        pageNo: pageNo,
        pageSize: pageSize,
        tags: tags,
        storeTypes: storeTypes,
        companyUids: companyUids,
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
   * @param {CatalogPlatformApplicationValidator.GetAppPriceByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AppPriceByIdResponseSchema>} -
   *   Success response
   * @name getAppPriceById
   * @summary: Get pricing of a product
   * @description: Retrieve the discounted price of a specific product for a given application. This endpoint allows filtering by stores, factory types, and sellers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppPriceById/).
   */
  async getAppPriceById(
    { itemId, storeIds, factoryTypeIds, sellerId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppPriceById().validate(
      {
        itemId,
        storeIds,
        factoryTypeIds,
        sellerId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getAppPriceById().validate(
      {
        itemId,
        storeIds,
        factoryTypeIds,
        sellerId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAppPriceById \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["store_ids"] = storeIds;
    query_params["factory_type_ids"] = factoryTypeIds;
    query_params["seller_id"] = sellerId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/item/${itemId}/price`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AppPriceByIdResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppPriceById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAppPriceFactoriesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAppPriceFactoryResponseSchema>}
   *   - Success response
   *
   * @name getAppPriceFactories
   * @summary: Get price factory
   * @description: This API allows to get price factories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppPriceFactories/).
   */
  async getAppPriceFactories(
    { isActive, factoryTypeId, code, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppPriceFactories().validate(
      {
        isActive,
        factoryTypeId,
        code,
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
    } = CatalogPlatformApplicationValidator.getAppPriceFactories().validate(
      {
        isActive,
        factoryTypeId,
        code,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAppPriceFactories \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["is_active"] = isActive;
    query_params["factory_type_id"] = factoryTypeId;
    query_params["code"] = code;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAppPriceFactoryResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppPriceFactories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAppPriceFactoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AppPriceFactory>} - Success response
   * @name getAppPriceFactory
   * @summary: Get price factory
   * @description: This API allows to get price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppPriceFactory/).
   */
  async getAppPriceFactory(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppPriceFactory().validate(
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
    } = CatalogPlatformApplicationValidator.getAppPriceFactory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAppPriceFactory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AppPriceFactory().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppPriceFactory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAppProductParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.OwnerAppItemResponseSchema>} -
   *   Success response
   * @name getAppProduct
   * @summary: Retrieve application product data.
   * @description: Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProduct/).
   */
  async getAppProduct(
    { itemId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppProduct().validate(
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
    } = CatalogPlatformApplicationValidator.getAppProduct().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAppProduct \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product/${itemId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.OwnerAppItemResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppProduct \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAppProductPricesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductPrices>} - Success response
   * @name getAppProductPrices
   * @summary: Get product prices
   * @description: This API allows to get product prices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProductPrices/).
   */
  async getAppProductPrices(
    { itemIds, factoryTypeIds, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppProductPrices().validate(
      {
        itemIds,
        factoryTypeIds,
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
    } = CatalogPlatformApplicationValidator.getAppProductPrices().validate(
      {
        itemIds,
        factoryTypeIds,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAppProductPrices \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["item_ids"] = itemIds;
    query_params["factory_type_ids"] = factoryTypeIds;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-prices`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductPrices().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppProductPrices \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAppProductsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.RawProductListingResponseSchema>}
   *   - Success response
   *
   * @name getAppProducts
   * @summary: Get application products.
   * @description: Retrieve products specific to the application. Products are the core resource of an application. Products can be associated by categories, collections, brands and more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProducts/).
   */
  async getAppProducts(
    {
      brandIds,
      categoryIds,
      departmentIds,
      tags,
      itemIds,
      pageNo,
      pageSize,
      q,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppProducts().validate(
      {
        brandIds,
        categoryIds,
        departmentIds,
        tags,
        itemIds,
        pageNo,
        pageSize,
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
    } = CatalogPlatformApplicationValidator.getAppProducts().validate(
      {
        brandIds,
        categoryIds,
        departmentIds,
        tags,
        itemIds,
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAppProducts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["brand_ids"] = brandIds;
    query_params["category_ids"] = categoryIds;
    query_params["department_ids"] = departmentIds;
    query_params["tags"] = tags;
    query_params["item_ids"] = itemIds;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/raw-products`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.RawProductListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppProducts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAppReturnConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AppReturnConfigResponseSchema>} -
   *   Success response
   * @name getAppReturnConfiguration
   * @summary: Get Return configuration level set for an application
   * @description: Get Product Return configuration set at an application level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppReturnConfiguration/).
   */
  async getAppReturnConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppReturnConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getAppReturnConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAppReturnConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/return-config`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AppReturnConfigResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAppReturnConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetApplicationBrandListingParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ApplicationBrandListingSchema>} -
   *   Success response
   * @name getApplicationBrandListing
   * @summary: Get application brand listing.
   * @description: Retrieve brand listings related to the application. A brand is the name under which a product is being sold - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationBrandListing/).
   */
  async getApplicationBrandListing(
    { pageNo, pageSize, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getApplicationBrandListing().validate(
      {
        pageNo,
        pageSize,
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
    } = CatalogPlatformApplicationValidator.getApplicationBrandListing().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getApplicationBrandListing \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/brand`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ApplicationBrandListingSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getApplicationBrandListing \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name. Use this
   *   parameter to search brands by brand name.
   * @returns {Paginator<CatalogPlatformModel.ApplicationBrandListingSchema>}
   * @summary: Get application brand listing.
   * @description: Retrieve brand listings related to the application. A brand is the name under which a product is being sold
   */
  getApplicationBrandListingPaginator({
    companyId,
    applicationId,
    pageSize,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplicationBrandListing({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
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
   * @param {CatalogPlatformApplicationValidator.GetApplicationBrandsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.BrandListingResponseSchema>} -
   *   Success response
   * @name getApplicationBrands
   * @summary: Get application brands.
   * @description: List all the brands. A brand is the name under which a product is being sold. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationBrands/).
   */
  async getApplicationBrands(
    { department, pageNo, pageSize, q, brandId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getApplicationBrands().validate(
      {
        department,
        pageNo,
        pageSize,
        q,
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
    } = CatalogPlatformApplicationValidator.getApplicationBrands().validate(
      {
        department,
        pageNo,
        pageSize,
        q,
        brandId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getApplicationBrands \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["department"] = department;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["brand_id"] = brandId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/brands`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.BrandListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getApplicationBrands \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See below the
   *   list of available departments. You can retrieve available departments
   *   from the **v1.0/departments/** API
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search brands by brand name.
   * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
   *   basis of uid list.
   * @returns {Paginator<CatalogPlatformModel.BrandListingResponseSchema>}
   * @summary: Get application brands.
   * @description: List all the brands. A brand is the name under which a product is being sold.
   */
  getApplicationBrandsPaginator({
    companyId,
    applicationId,
    department,
    pageSize,
    q,
    brandId,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplicationBrands({
        companyId: companyId,
        applicationId: applicationId,
        department: department,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        brandId: brandId,
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
   * @param {CatalogPlatformApplicationValidator.GetApplicationCategoryListingParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ApplicationCategoryListingSchema>}
   *   - Success response
   *
   * @name getApplicationCategoryListing
   * @summary: Get application category listing.
   * @description: Retrieve category listings related to the application. A brand is the name under which a product is being sold. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationCategoryListing/).
   */
  async getApplicationCategoryListing(
    { departmentId, pageNo, pageSize, q, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getApplicationCategoryListing().validate(
      {
        departmentId,
        pageNo,
        pageSize,
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
    } = CatalogPlatformApplicationValidator.getApplicationCategoryListing().validate(
      {
        departmentId,
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getApplicationCategoryListing \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["department_id"] = departmentId;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/category`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ApplicationCategoryListingSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getApplicationCategoryListing \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {number} [arg.departmentId] - A `department_id` is a unique
   *   identifier for a particular department.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name. Use this
   *   parameter to search brands by brand name.
   * @returns {Paginator<CatalogPlatformModel.ApplicationCategoryListingSchema>}
   * @summary: Get application category listing.
   * @description: Retrieve category listings related to the application. A brand is the name under which a product is being sold.
   */
  getApplicationCategoryListingPaginator({
    companyId,
    applicationId,
    departmentId,
    pageSize,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplicationCategoryListing({
        companyId: companyId,
        applicationId: applicationId,
        departmentId: departmentId,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
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
   * @param {CatalogPlatformApplicationValidator.GetApplicationDepartmentListingParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ApplicationDepartmentListingResponseSchema>}
   *   - Success response
   *
   * @name getApplicationDepartmentListing
   * @summary: Get application department listing.
   * @description: Retrieve department listings related to the application. Departments are a way to categorise similar products. A product can lie in multiple departments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationDepartmentListing/).
   */
  async getApplicationDepartmentListing(
    { pageNo, pageSize, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getApplicationDepartmentListing().validate(
      {
        pageNo,
        pageSize,
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
    } = CatalogPlatformApplicationValidator.getApplicationDepartmentListing().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getApplicationDepartmentListing \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/department`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ApplicationDepartmentListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getApplicationDepartmentListing \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search department by name.
   * @returns {Paginator<CatalogPlatformModel.ApplicationDepartmentListingResponseSchema>}
   * @summary: Get application department listing.
   * @description: Retrieve department listings related to the application. Departments are a way to categorise similar products. A product can lie in multiple departments.
   */
  getApplicationDepartmentListingPaginator({
    companyId,
    applicationId,
    pageSize,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplicationDepartmentListing({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
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
   * @param {CatalogPlatformApplicationValidator.GetApplicationFilterKeysParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetQueryFiltersKeysResponseSchema>}
   *   - Success response
   *
   * @name getApplicationFilterKeys
   * @summary: Get filters keys of the filter options.
   * @description: Get query filters keys to configure a collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationFilterKeys/).
   */
  async getApplicationFilterKeys(
    { c, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getApplicationFilterKeys().validate(
      {
        c,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getApplicationFilterKeys().validate(
      {
        c,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getApplicationFilterKeys \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["c"] = c;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/filter-options/keys`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetQueryFiltersKeysResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getApplicationFilterKeys \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetApplicationFilterValuesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetQueryFiltersValuesResponseSchema>}
   *   - Success response
   *
   * @name getApplicationFilterValues
   * @summary: Get values of the selected value for the filter options.
   * @description: Get query filters keys to configure a collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationFilterValues/).
   */
  async getApplicationFilterValues(
    { filterKey, c, collectionId, pageNo, pageSize, q, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getApplicationFilterValues().validate(
      {
        filterKey,
        c,
        collectionId,
        pageNo,
        pageSize,
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
    } = CatalogPlatformApplicationValidator.getApplicationFilterValues().validate(
      {
        filterKey,
        c,
        collectionId,
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getApplicationFilterValues \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["c"] = c;
    query_params["collection_id"] = collectionId;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/filter-options/${filterKey}/values`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetQueryFiltersValuesResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getApplicationFilterValues \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetApplicationProductsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ApplicationProductListingResponseSchema>}
   *   - Success response
   *
   * @name getApplicationProducts
   * @summary: Get application products.
   * @description: Retrieve products associated with the application. List all the products associated with a brand, collection or category in a requested sort order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationProducts/).
   */
  async getApplicationProducts(
    {
      q,
      f,
      c,
      filters,
      isDependent,
      sortOn,
      pageId,
      pageSize,
      pageNo,
      pageType,
      itemIds,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getApplicationProducts().validate(
      {
        q,
        f,
        c,
        filters,
        isDependent,
        sortOn,
        pageId,
        pageSize,
        pageNo,
        pageType,
        itemIds,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getApplicationProducts().validate(
      {
        q,
        f,
        c,
        filters,
        isDependent,
        sortOn,
        pageId,
        pageSize,
        pageNo,
        pageType,
        itemIds,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getApplicationProducts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["f"] = f;
    query_params["c"] = c;
    query_params["filters"] = filters;
    query_params["is_dependent"] = isDependent;
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["page_type"] = pageType;
    query_params["item_ids"] = itemIds;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ApplicationProductListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getApplicationProducts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {string} [arg.q] - The search query. This can be a partial or
   *   complete name of a either a product, brand or category
   * @param {string} [arg.f] - The search filter parameters. All the parameter
   *   filtered from filter parameters will be passed in **f** parameter in
   *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
   * @param {string} [arg.c] - The search filter parameters for collection
   *   items. All the parameter filtered from filter parameters will be passed
   *   in "c" parameter in this format.
   *   "?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts"
   * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
   *   filter details. This flag is used to fetch all filters
   * @param {boolean} [arg.isDependent] - This query parameter is used to get
   *   the dependent products in the listing.
   * @param {string} [arg.sortOn] - The order to sort the list of products on.
   *   The supported sort parameters are popularity, price, redemption and
   *   discount in either ascending or descending order. See the supported
   *   values below.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string[]} [arg.itemIds] - Item Ids of product
   * @returns {Paginator<CatalogPlatformModel.ApplicationProductListingResponseSchema>}
   * @summary: Get application products.
   * @description: Retrieve products associated with the application. List all the products associated with a brand, collection or category in a requested sort order.
   */
  getApplicationProductsPaginator({
    companyId,
    applicationId,
    q,
    f,
    c,
    filters,
    isDependent,
    sortOn,
    pageSize,
    itemIds,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getApplicationProducts({
        companyId: companyId,
        applicationId: applicationId,
        q: q,
        f: f,
        c: c,
        filters: filters,
        isDependent: isDependent,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
        itemIds: itemIds,
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
   * @param {CatalogPlatformApplicationValidator.GetAutocompleteConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponseSchema>}
   *   - Success response
   *
   * @name getAutocompleteConfig
   * @summary: Get autocomplete configuration.
   * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteConfig/).
   */
  async getAutocompleteConfig(
    { pageNo, pageSize, q, isActive, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAutocompleteConfig().validate(
      {
        pageNo,
        pageSize,
        q,
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
    } = CatalogPlatformApplicationValidator.getAutocompleteConfig().validate(
      {
        pageNo,
        pageSize,
        q,
        isActive,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAutocompleteConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["is_active"] = isActive;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAutocompleteWordsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAutocompleteConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAutocompleteKeywordDetailParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsData>} -
   *   Success response
   * @name getAutocompleteKeywordDetail
   * @summary: Get autocomplete keyword details.
   * @description: Retrieve detailed information about a specific autocomplete keyword. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteKeywordDetail/).
   */
  async getAutocompleteKeywordDetail(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAutocompleteKeywordDetail().validate(
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
    } = CatalogPlatformApplicationValidator.getAutocompleteKeywordDetail().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAutocompleteKeywordDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAutocompleteWordsData().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAutocompleteKeywordDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAutocompletePreviewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AutocompletePreviewResponseSchema>}
   *   - Success response
   *
   * @name getAutocompletePreview
   * @summary: Get autocomplete suggestions as per config for an application
   * @description: This API allows to get autocomplete suggestions as per config. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompletePreview/).
   */
  async getAutocompletePreview(
    {
      q,
      categorySuggestion,
      brandSuggestion,
      collectionSuggestion,
      productSuggestion,
      querySuggestion,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAutocompletePreview().validate(
      {
        q,
        categorySuggestion,
        brandSuggestion,
        collectionSuggestion,
        productSuggestion,
        querySuggestion,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getAutocompletePreview().validate(
      {
        q,
        categorySuggestion,
        brandSuggestion,
        collectionSuggestion,
        productSuggestion,
        querySuggestion,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAutocompletePreview \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["category_suggestion"] = categorySuggestion;
    query_params["brand_suggestion"] = brandSuggestion;
    query_params["collection_suggestion"] = collectionSuggestion;
    query_params["product_suggestion"] = productSuggestion;
    query_params["query_suggestion"] = querySuggestion;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/preview`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AutocompletePreviewResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAutocompletePreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetAutocompleteSettingsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AutocompleteResponseSchema>} -
   *   Success response
   * @name getAutocompleteSettings
   * @summary: Get autocomplete settings config for an application
   * @description: This API allows to get autocomplete settings config for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteSettings/).
   */
  async getAutocompleteSettings(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAutocompleteSettings().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getAutocompleteSettings().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAutocompleteSettings \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/settings`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AutocompleteResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getAutocompleteSettings \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetCatalogConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>}
   *   - Success response
   *
   * @name getCatalogConfiguration
   * @summary: Retrieve catalog configuration.
   * @description: Retrieve configuration meta details for the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCatalogConfiguration/).
   */
  async getCatalogConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getCatalogConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getCatalogConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getCatalogConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/metadata`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetCatalogConfigurationMetaData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCatalogConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetCatalogInsightsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CatalogInsightResponseSchema>} -
   *   Success response
   * @name getCatalogInsights
   * @summary: Get catalog insights.
   * @description: Retrieve the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCatalogInsights/).
   */
  async getCatalogInsights(
    { brand, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getCatalogInsights().validate(
      {
        brand,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getCatalogInsights().validate(
      {
        brand,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getCatalogInsights \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["brand"] = brand;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/analytics/insights`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CatalogInsightResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCatalogInsights \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetCategoriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CategoryListingResponseSchema>} -
   *   Success response
   * @name getCategories
   * @summary: Get categories.
   * @description: Retrieve a list of categories. Optionally pass filter the brands by the department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCategories/).
   */
  async getCategories(
    { department, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getCategories().validate(
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
    } = CatalogPlatformApplicationValidator.getCategories().validate(
      {
        department,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getCategories \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["department"] = department;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/categories`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CategoryListingResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCategories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetCollectionDetailParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetCollectionDetailResponseSchema>}
   *   - Success response
   *
   * @name getCollectionDetail
   * @summary: Get collection details.
   * @description: Get the details of a collection by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCollectionDetail/).
   */
  async getCollectionDetail(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getCollectionDetail().validate(
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
    } = CatalogPlatformApplicationValidator.getCollectionDetail().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getCollectionDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${slug}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetCollectionDetailResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCollectionDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetCollectionItemsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetCollectionItemsResponseSchema>}
   *   - Success response
   *
   * @name getCollectionItems
   * @summary: Get the items for a collection
   * @description: Get items from a collection specified by its `id`. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCollectionItems/).
   */
  async getCollectionItems(
    {
      id,
      sortOn,
      pageSize,
      pageNo,
      isPinned,
      q,
      isExcluded,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getCollectionItems().validate(
      {
        id,
        sortOn,
        pageSize,
        pageNo,
        isPinned,
        q,
        isExcluded,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getCollectionItems().validate(
      {
        id,
        sortOn,
        pageSize,
        pageNo,
        isPinned,
        q,
        isExcluded,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getCollectionItems \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["sort_on"] = sortOn;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["is_pinned"] = isPinned;
    query_params["q"] = q;
    query_params["is_excluded"] = isExcluded;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetCollectionItemsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getCollectionItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetConfigurationByTypeParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>}
   *   - Success response
   *
   * @name getConfigurationByType
   * @summary: Retrieve configuration by type.
   * @description: Retrieve configuration details based on a specific type in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationByType/).
   */
  async getConfigurationByType(
    { type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getConfigurationByType().validate(
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
    } = CatalogPlatformApplicationValidator.getConfigurationByType().validate(
      {
        type,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getConfigurationByType \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAppCatalogEntityConfiguration().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getConfigurationByType \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetConfigurationMetadataParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetConfigMetadataResponseSchema>}
   *   - Success response
   *
   * @name getConfigurationMetadata
   * @summary: Retrieve configuration metadata.
   * @description: Retrieve the configuraion metadata details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationMetadata/).
   */
  async getConfigurationMetadata(
    { configType, templateSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getConfigurationMetadata().validate(
      {
        configType,
        templateSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getConfigurationMetadata().validate(
      {
        configType,
        templateSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getConfigurationMetadata \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["template_slug"] = templateSlug;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/metadata`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetConfigMetadataResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getConfigurationMetadata \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetConfigurationsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
   *   Success response
   * @name getConfigurations
   * @summary: Retrieve configurations.
   * @description: Retrieve a configured details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurations/).
   */
  async getConfigurations(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getConfigurations().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getConfigurations().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getConfigurations \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAppCatalogConfiguration().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getConfigurations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetConfigurationsFilterMetadataParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.FilterResponseSchema>} - Success response
   * @name getConfigurationsFilterMetadata
   * @summary: Get filter details for application
   * @description: configured details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationsFilterMetadata/).
   */
  async getConfigurationsFilterMetadata(
    { filter, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getConfigurationsFilterMetadata().validate(
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
    } = CatalogPlatformApplicationValidator.getConfigurationsFilterMetadata().validate(
      {
        filter,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getConfigurationsFilterMetadata \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/metadata/${filter}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.FilterResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getConfigurationsFilterMetadata \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetDepartmentsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.DepartmentResponseSchema>} -
   *   Success response
   * @name getDepartments
   * @summary: Get departments.
   * @description: Retrieve a list of departments. Departments are a way to categorise similar products. A product can lie in multiple departments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDepartments/).
   */
  async getDepartments(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getDepartments().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getDepartments().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getDepartments \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/departments`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.DepartmentResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getDepartments \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetDiscountedInventoryBySizeIdentifierParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ApplicationInventorySellerIdentifierResponsePaginated>}
   *   - Success response
   *
   * @name getDiscountedInventoryBySizeIdentifier
   * @summary: Get discounted inventory by size identifier.
   * @description: Allows to retrieve Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDiscountedInventoryBySizeIdentifier/).
   */
  async getDiscountedInventoryBySizeIdentifier(
    {
      itemId,
      sizeIdentifier,
      pageNo,
      pageSize,
      locationIds,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getDiscountedInventoryBySizeIdentifier().validate(
      {
        itemId,
        sizeIdentifier,
        pageNo,
        pageSize,
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
    } = CatalogPlatformApplicationValidator.getDiscountedInventoryBySizeIdentifier().validate(
      {
        itemId,
        sizeIdentifier,
        pageNo,
        pageSize,
        locationIds,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getDiscountedInventoryBySizeIdentifier \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["location_ids"] = locationIds;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products/${itemId}/inventory/${sizeIdentifier}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ApplicationInventorySellerIdentifierResponsePaginated().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getDiscountedInventoryBySizeIdentifier \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetGroupConfigurationsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetConfigResponseSchema>} - Success response
   * @name getGroupConfigurations
   * @summary: Retrieve group configurations.
   * @description: Retrieve the details of the application configured configurations of group config types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getGroupConfigurations/).
   */
  async getGroupConfigurations(
    { configType, pageNo, pageSize, search, templateSlug, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getGroupConfigurations().validate(
      {
        configType,
        pageNo,
        pageSize,
        search,
        templateSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getGroupConfigurations().validate(
      {
        configType,
        pageNo,
        pageSize,
        search,
        templateSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getGroupConfigurations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["search"] = search;
    query_params["template_slug"] = templateSlug;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/groups`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetConfigResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getGroupConfigurations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetListingConfigurationsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetListingConfigResponseSchema>}
   *   - Success response
   *
   * @name getListingConfigurations
   * @summary: Retrieve listing configurations.
   * @description: Retrieve the details of the application configured configurations of listing config types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getListingConfigurations/).
   */
  async getListingConfigurations(
    { configType, pageNo, pageSize, search, uids, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getListingConfigurations().validate(
      {
        configType,
        pageNo,
        pageSize,
        search,
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
    } = CatalogPlatformApplicationValidator.getListingConfigurations().validate(
      {
        configType,
        pageNo,
        pageSize,
        search,
        uids,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getListingConfigurations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["search"] = search;
    query_params["uids"] = uids;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetListingConfigResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getListingConfigurations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetLivePreviewParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductListingResponseSchema>} -
   *   Success response
   * @name getLivePreview
   * @summary: Get live preview of a Merchandising Rule
   * @description: This allows you to get live preview of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getLivePreview/).
   */
  async getLivePreview(
    { merchandisingRuleId, searchKeyword, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getLivePreview().validate(
      {
        merchandisingRuleId,
        searchKeyword,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getLivePreview().validate(
      {
        merchandisingRuleId,
        searchKeyword,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getLivePreview \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["search_keyword"] = searchKeyword;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/preview`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > getLivePreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetMerchandisingQueryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SearchResponseSchema>} - Success response
   * @name getMerchandisingQuery
   * @summary: Get Merchandising Rule's query details
   * @description: This allows you to get details of a merchandising rule's query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingQuery/).
   */
  async getMerchandisingQuery(
    { merchandisingRuleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getMerchandisingQuery().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getMerchandisingQuery().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getMerchandisingQuery \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/query`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SearchResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getMerchandisingQuery \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetMerchandisingRuleBoostActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetMerchandisingRuleBoostAction>}
   *   - Success response
   *
   * @name getMerchandisingRuleBoostAction
   * @summary: Get Merchandising Rule's Boost action details
   * @description: This allows you to get details of Boost action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRuleBoostAction/).
   */
  async getMerchandisingRuleBoostAction(
    { merchandisingRuleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getMerchandisingRuleBoostAction().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getMerchandisingRuleBoostAction().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getMerchandisingRuleBoostAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/boost`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetMerchandisingRuleBoostAction().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getMerchandisingRuleBoostAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetMerchandisingRuleBuryActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetMerchandisingRuleBuryAction>}
   *   - Success response
   *
   * @name getMerchandisingRuleBuryAction
   * @summary: Get Merchandising Rule's Bury action details
   * @description: This allows you to get details of Bury action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRuleBuryAction/).
   */
  async getMerchandisingRuleBuryAction(
    { merchandisingRuleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getMerchandisingRuleBuryAction().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getMerchandisingRuleBuryAction().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getMerchandisingRuleBuryAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/bury`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetMerchandisingRuleBuryAction().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getMerchandisingRuleBuryAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetMerchandisingRuleHideActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.HideResponseSchema>} - Success response
   * @name getMerchandisingRuleHideAction
   * @summary: Get Merchandising Rule's Hide action details
   * @description: This allows you to get details of hide action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRuleHideAction/).
   */
  async getMerchandisingRuleHideAction(
    { merchandisingRuleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getMerchandisingRuleHideAction().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getMerchandisingRuleHideAction().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getMerchandisingRuleHideAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/hide`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.HideResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getMerchandisingRuleHideAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetMerchandisingRulePinActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.PinResponseSchema>} - Success response
   * @name getMerchandisingRulePinAction
   * @summary: Get Merchandising Rule's action details
   * @description: This allows you to get details of pin action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRulePinAction/).
   */
  async getMerchandisingRulePinAction(
    { merchandisingRuleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getMerchandisingRulePinAction().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getMerchandisingRulePinAction().validate(
      {
        merchandisingRuleId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getMerchandisingRulePinAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/pin`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.PinResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getMerchandisingRulePinAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetMerchandisingRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.MerchandisingRulesList>} - Success response
   * @name getMerchandisingRules
   * @summary: Get list of all Merchandising Rule's details
   * @description: This allows you to get details of all merchandising rule's details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRules/).
   */
  async getMerchandisingRules(
    { pageId, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getMerchandisingRules().validate(
      {
        pageId,
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
    } = CatalogPlatformApplicationValidator.getMerchandisingRules().validate(
      {
        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getMerchandisingRules \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.MerchandisingRulesList().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getMerchandisingRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetProductDetailBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ProductDetail>} - Success response
   * @name getProductDetailBySlug
   * @summary: Get product details by slug.
   * @description: Retrieve detailed product information using a product slug. Products are the core resource of an application. Products can be associated by categories, collections, brands and more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductDetailBySlug/).
   */
  async getProductDetailBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getProductDetailBySlug().validate(
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
    } = CatalogPlatformApplicationValidator.getProductDetailBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductDetailBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products/${slug}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductDetailBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetProductsInPriceFactoryByZoneIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductsResponseSchema>}
   *   - Success response
   *
   * @name getProductsInPriceFactoryByZoneId
   * @summary: Get products listed in price factory
   * @description: This API allows to get products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductsInPriceFactoryByZoneId/).
   */
  async getProductsInPriceFactoryByZoneId(
    { id, zoneId, itemId, q, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getProductsInPriceFactoryByZoneId().validate(
      {
        id,
        zoneId,
        itemId,
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
    } = CatalogPlatformApplicationValidator.getProductsInPriceFactoryByZoneId().validate(
      {
        id,
        zoneId,
        itemId,
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductsInPriceFactoryByZoneId \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["zone_id"] = zoneId;
    query_params["item_id"] = itemId;
    query_params["q"] = q;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}/products`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAppPriceFactoryProductsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getProductsInPriceFactoryByZoneId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetQueryFiltersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetQueryFiltersResponseSchema>} -
   *   Success response
   * @name getQueryFilters
   * @summary: Retrieve query filters.
   * @description: Retrieve query filters to configure a collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getQueryFilters/).
   */
  async getQueryFilters(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getQueryFilters().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getQueryFilters().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getQueryFilters \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/query-options`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetQueryFiltersResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getQueryFilters \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetSearchConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetSearchConfigurationResponseSchema>}
   *   - Success response
   *
   * @name getSearchConfiguration
   * @summary: Get Search Configuration
   * @description: Get search configuration in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchConfiguration/).
   */
  async getSearchConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getSearchConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getSearchConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getSearchConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/configuration`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchConfigurationResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getSearchConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetSearchKeywordsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
   * @name getSearchKeywords
   * @summary: Retrieve search keywords.
   * @description: Retrieve a list of search keywords from the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchKeywords/).
   */
  async getSearchKeywords(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getSearchKeywords().validate(
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
    } = CatalogPlatformApplicationValidator.getSearchKeywords().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getSearchKeywords \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchWordsData().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getSearchKeywords \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetSearchRerankParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetSearchRerankResponseSchema>} -
   *   Success response
   * @name getSearchRerank
   * @summary: Get search rerank for an application
   * @description: This view allows you to create search rerank attributes for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchRerank/).
   */
  async getSearchRerank(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getSearchRerank().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getSearchRerank().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getSearchRerank \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/rerank`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchRerankResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getSearchRerank \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetSearchRerankDetailParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetSearchRerankDetailResponseSchema>}
   *   - Success response
   *
   * @name getSearchRerankDetail
   * @summary: Get search rerank for an application
   * @description: This view allows you to retrieve search rerank attribute detail for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchRerankDetail/).
   */
  async getSearchRerankDetail(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getSearchRerankDetail().validate(
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
    } = CatalogPlatformApplicationValidator.getSearchRerankDetail().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getSearchRerankDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/rerank/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchRerankDetailResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getSearchRerankDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.GetSynonymsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SynonymListResponseSchema>} -
   *   Success response
   * @name getSynonyms
   * @summary: List search synonyms for an application
   * @description: This view allows you to list down the available synonyms for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSynonyms/).
   */
  async getSynonyms(
    { id, name, type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getSynonyms().validate(
      {
        id,
        name,
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
    } = CatalogPlatformApplicationValidator.getSynonyms().validate(
      {
        id,
        name,
        type,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getSynonyms \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["name"] = name;
    query_params["type"] = type;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/synonyms`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SynonymListResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > getSynonyms \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.PollBulkSynonymsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SynonymBulkPollResponseSchema>} -
   *   Success response
   * @name pollBulkSynonyms
   * @summary: poll a particular synonym bulk job for status
   * @description: This view allows you to poll for the status of the respective bulk upload job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/pollBulkSynonyms/).
   */
  async pollBulkSynonyms(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.pollBulkSynonyms().validate(
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
    } = CatalogPlatformApplicationValidator.pollBulkSynonyms().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > pollBulkSynonyms \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/poll/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SynonymBulkPollResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > pollBulkSynonyms \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.PollPriceFactoryJobsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductExportJobPollResponseSchema>}
   *   - Success response
   *
   * @name pollPriceFactoryJobs
   * @summary: poll job for adding products in price factory
   * @description: This API allows to poll job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/pollPriceFactoryJobs/).
   */
  async pollPriceFactoryJobs(
    { id, startDate, endDate, stage, isActive, q, type, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.pollPriceFactoryJobs().validate(
      {
        id,
        startDate,
        endDate,
        stage,
        isActive,
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
    } = CatalogPlatformApplicationValidator.pollPriceFactoryJobs().validate(
      {
        id,
        startDate,
        endDate,
        stage,
        isActive,
        q,
        type,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > pollPriceFactoryJobs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;
    query_params["stage"] = stage;
    query_params["is_active"] = isActive;
    query_params["q"] = q;
    query_params["type"] = type;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}/poll`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAppPriceFactoryProductExportJobPollResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > pollPriceFactoryJobs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.PollProductPriceFactoryBulkJobParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobPollResponseSchema>}
   *   - Success response
   *
   * @name pollProductPriceFactoryBulkJob
   * @summary: Poll bulk job for adding products in price factory.
   * @description: This API allows to poll bulk job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/pollProductPriceFactoryBulkJob/).
   */
  async pollProductPriceFactoryBulkJob(
    { id, jobId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.pollProductPriceFactoryBulkJob().validate(
      {
        id,
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
    } = CatalogPlatformApplicationValidator.pollProductPriceFactoryBulkJob().validate(
      {
        id,
        jobId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > pollProductPriceFactoryBulkJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}/poll/${jobId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobPollResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > pollProductPriceFactoryBulkJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.ProcessBulkSynonymsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SynonymBulkProcessResponseSchema>}
   *   - Success response
   *
   * @name processBulkSynonyms
   * @summary: process csv/xls/xlsx file with synonyms and insert onto db
   * @description: This view allows you to process a list of one-way/two-way synonyms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/processBulkSynonyms/).
   */
  async processBulkSynonyms(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.processBulkSynonyms().validate(
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
    } = CatalogPlatformApplicationValidator.processBulkSynonyms().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > processBulkSynonyms \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/bulk/process`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SynonymBulkProcessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > processBulkSynonyms \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.ProcessProductPriceFactoryBulkJobParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobResponseSchema>}
   *   - Success response
   *
   * @name processProductPriceFactoryBulkJob
   * @summary: Process bulk job for adding products in price factory.
   * @description: This API allows to process bulk job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/processProductPriceFactoryBulkJob/).
   */
  async processProductPriceFactoryBulkJob(
    { id, jobId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.processProductPriceFactoryBulkJob().validate(
      {
        id,
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
    } = CatalogPlatformApplicationValidator.processProductPriceFactoryBulkJob().validate(
      {
        id,
        jobId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > processProductPriceFactoryBulkJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}/bulk/${jobId}/process`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > processProductPriceFactoryBulkJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.SampleBulkSynonymsFileParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<string>} - Success response
   * @name sampleBulkSynonymsFile
   * @summary: Get sample file for bulk synonyms upload
   * @description: This api return you the sample file for bulk synonyms upload - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/sampleBulkSynonymsFile/).
   */
  async sampleBulkSynonymsFile(
    { type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.sampleBulkSynonymsFile().validate(
      { type },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.sampleBulkSynonymsFile().validate(
      { type },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > sampleBulkSynonymsFile \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["type"] = type;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/bulk/sample`,
      query_params,
      undefined,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > sampleBulkSynonymsFile \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.SaveMerchandisingRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name saveMerchandisingRules
   * @summary: Save a Merchandising Rule
   * @description: This allows you to Save a merchandising rule's preview state. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/saveMerchandisingRules/).
   */
  async saveMerchandisingRules(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.saveMerchandisingRules().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.saveMerchandisingRules().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > saveMerchandisingRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > saveMerchandisingRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAllowSingleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponseSchema>} -
   *   Success response
   * @name updateAllowSingle
   * @summary: Update 'Allow Single' setting.
   * @description: Modify allow single flag for filters of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAllowSingle/).
   */
  async updateAllowSingle(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAllowSingle().validate(
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
    } = CatalogPlatformApplicationValidator.updateAllowSingle().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAllowSingle \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/filter/allow_single`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ConfigSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateAllowSingle \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAppBrandParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name updateAppBrand
   * @summary: Update application brand.
   * @description: Modify data associated to the brand for that particular sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppBrand/).
   */
  async updateAppBrand(
    { brandUid, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAppBrand().validate(
      {
        brandUid,
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
    } = CatalogPlatformApplicationValidator.updateAppBrand().validate(
      {
        brandUid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAppBrand \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/brand/${brandUid}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > updateAppBrand \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAppCategoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name updateAppCategory
   * @summary: Update application category.
   * @description: Modify category data related to the application. Helps to update data associated to a item custom meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppCategory/).
   */
  async updateAppCategory(
    { categoryUid, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAppCategory().validate(
      {
        categoryUid,
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
    } = CatalogPlatformApplicationValidator.updateAppCategory().validate(
      {
        categoryUid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAppCategory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/category/${categoryUid}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > updateAppCategory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAppCategoryReturnConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name updateAppCategoryReturnConfiguration
   * @summary: Update Category level Application Return Configuration setttings
   * @description: Update Category level Application Return Configuration setttings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppCategoryReturnConfiguration/).
   */
  async updateAppCategoryReturnConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAppCategoryReturnConfiguration().validate(
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
    } = CatalogPlatformApplicationValidator.updateAppCategoryReturnConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAppCategoryReturnConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/return-config/categories`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > updateAppCategoryReturnConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAppDepartmentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name updateAppDepartment
   * @summary: Update application department.
   * @description: Modify department data related to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppDepartment/).
   */
  async updateAppDepartment(
    { departmentUid, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAppDepartment().validate(
      {
        departmentUid,
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
    } = CatalogPlatformApplicationValidator.updateAppDepartment().validate(
      {
        departmentUid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAppDepartment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/department/${departmentUid}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > updateAppDepartment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAppLocationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name updateAppLocation
   * @summary: Update application location.
   * @description: Modify location data related to the application. Helps to update data associated to a item custom meta - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppLocation/).
   */
  async updateAppLocation(
    { storeUid, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAppLocation().validate(
      {
        storeUid,
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
    } = CatalogPlatformApplicationValidator.updateAppLocation().validate(
      {
        storeUid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAppLocation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store/${storeUid}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > updateAppLocation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAppProductParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name updateAppProduct
   * @summary: Update application product data.
   * @description: Allows to update data associated to a item by its item_id for a sales - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppProduct/).
   */
  async updateAppProduct(
    { itemId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAppProduct().validate(
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
    } = CatalogPlatformApplicationValidator.updateAppProduct().validate(
      {
        itemId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAppProduct \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product/${itemId}`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > updateAppProduct \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAppReturnConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
   * @name updateAppReturnConfiguration
   * @summary: Update Return configuration level set for an application
   * @description: Update Return configuration level set for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppReturnConfiguration/).
   */
  async updateAppReturnConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAppReturnConfiguration().validate(
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
    } = CatalogPlatformApplicationValidator.updateAppReturnConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAppReturnConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/return-config`,
      query_params,
      body,
      requestHeaders,
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
          message: `Response Validation Warnings for platform > Catalog > updateAppReturnConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAutocompleteKeywordParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsData>} -
   *   Success response
   * @name updateAutocompleteKeyword
   * @summary: Update autocomplete keywords.
   * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAutocompleteKeyword/).
   */
  async updateAutocompleteKeyword(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAutocompleteKeyword().validate(
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
    } = CatalogPlatformApplicationValidator.updateAutocompleteKeyword().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAutocompleteKeyword \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAutocompleteWordsData().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateAutocompleteKeyword \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateAutocompleteSettingsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AutocompleteUpsertResponseSchema>}
   *   - Success response
   *
   * @name updateAutocompleteSettings
   * @summary: Update autocomplete settings config for an application
   * @description: This API allows to update autocomplete settings for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAutocompleteSettings/).
   */
  async updateAutocompleteSettings(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateAutocompleteSettings().validate(
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
    } = CatalogPlatformApplicationValidator.updateAutocompleteSettings().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateAutocompleteSettings \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/settings/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AutocompleteUpsertResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateAutocompleteSettings \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateCollectionParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.UpdateCollection>} - Success response
   * @name updateCollection
   * @summary: Update a collection
   * @description: Update a collection by it's id. On successful request, returns the updated collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateCollection/).
   */
  async updateCollection(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateCollection().validate(
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
    } = CatalogPlatformApplicationValidator.updateCollection().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateCollection \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.UpdateCollection().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateCollection \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateDefaultSortParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponseSchema>} -
   *   Success response
   * @name updateDefaultSort
   * @summary: Update default sorting.
   * @description: Modify the default sort key configuration for the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateDefaultSort/).
   */
  async updateDefaultSort(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateDefaultSort().validate(
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
    } = CatalogPlatformApplicationValidator.updateDefaultSort().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateDefaultSort \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/sort/default_key`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.ConfigSuccessResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateDefaultSort \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateGroupConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
   * @name updateGroupConfiguration
   * @summary: Update group configuration.
   * @description: Modify the group configurations for the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateGroupConfiguration/).
   */
  async updateGroupConfiguration(
    { configType, groupSlug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateGroupConfiguration().validate(
      {
        configType,
        groupSlug,
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
    } = CatalogPlatformApplicationValidator.updateGroupConfiguration().validate(
      {
        configType,
        groupSlug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateGroupConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/groups/${groupSlug}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AppConfigurationDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateGroupConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateListingConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.AppConfigurationsFilterResponseSchema>}
   *   - Success response
   *
   * @name updateListingConfiguration
   * @summary: Update listing configuration.
   * @description: Modify the details and settings of an existing listing configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateListingConfiguration/).
   */
  async updateListingConfiguration(
    { configType, configId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateListingConfiguration().validate(
      {
        configType,
        configId,
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
    } = CatalogPlatformApplicationValidator.updateListingConfiguration().validate(
      {
        configType,
        configId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateListingConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/item/${configId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.AppConfigurationsFilterResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateListingConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRuleBoostActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name updateMerchandisingRuleBoostAction
   * @summary: Update Merchandising Rule's Boost action details
   * @description: This allows you to update Boost action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRuleBoostAction/).
   */
  async updateMerchandisingRuleBoostAction(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateMerchandisingRuleBoostAction().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.updateMerchandisingRuleBoostAction().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateMerchandisingRuleBoostAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/boost`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateMerchandisingRuleBoostAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRuleBuryActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name updateMerchandisingRuleBuryAction
   * @summary: Update Merchandising Rule's Bury action details
   * @description: This allows you to update Bury action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRuleBuryAction/).
   */
  async updateMerchandisingRuleBuryAction(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateMerchandisingRuleBuryAction().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.updateMerchandisingRuleBuryAction().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateMerchandisingRuleBuryAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/bury`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateMerchandisingRuleBuryAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRuleHideActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name updateMerchandisingRuleHideAction
   * @summary: Update Merchandising Rule's Hide action details
   * @description: This allows you to update hide action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRuleHideAction/).
   */
  async updateMerchandisingRuleHideAction(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateMerchandisingRuleHideAction().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.updateMerchandisingRuleHideAction().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateMerchandisingRuleHideAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/hide`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateMerchandisingRuleHideAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRulePinActionParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name updateMerchandisingRulePinAction
   * @summary: Update Merchandising Rule's action details
   * @description: This allows you to update pin action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRulePinAction/).
   */
  async updateMerchandisingRulePinAction(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateMerchandisingRulePinAction().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.updateMerchandisingRulePinAction().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateMerchandisingRulePinAction \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/pin`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateMerchandisingRulePinAction \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRuleQueryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
   *   Success response
   * @name updateMerchandisingRuleQuery
   * @summary: Update a Merchandising Rule's query
   * @description: This allows you to Update a merchandising rule's query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRuleQuery/).
   */
  async updateMerchandisingRuleQuery(
    { merchandisingRuleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateMerchandisingRuleQuery().validate(
      {
        merchandisingRuleId,
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
    } = CatalogPlatformApplicationValidator.updateMerchandisingRuleQuery().validate(
      {
        merchandisingRuleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateMerchandisingRuleQuery \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/merchandise/rules/${merchandisingRuleId}/query`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponseMerchandising().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateMerchandisingRuleQuery \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateSearchConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.UpdateSearchConfigurationResponseSchema>}
   *   - Success response
   *
   * @name updateSearchConfiguration
   * @summary: Update search configuration for an application
   * @description: This view allows you to modify searchable attributes for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSearchConfiguration/).
   */
  async updateSearchConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateSearchConfiguration().validate(
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
    } = CatalogPlatformApplicationValidator.updateSearchConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateSearchConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/configuration`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.UpdateSearchConfigurationResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateSearchConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateSearchKeywordsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
   * @name updateSearchKeywords
   * @summary: Update search keywords.
   * @description: Update Search Keyword by its id. On successful request, returns the updated collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSearchKeywords/).
   */
  async updateSearchKeywords(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateSearchKeywords().validate(
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
    } = CatalogPlatformApplicationValidator.updateSearchKeywords().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateSearchKeywords \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchWordsData().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateSearchKeywords \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateSearchRerankConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.UpdateSearchRerankResponseSchema>}
   *   - Success response
   *
   * @name updateSearchRerankConfiguration
   * @summary: Update search rerank for an application
   * @description: This view allows you to update search rerank attribute for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSearchRerankConfiguration/).
   */
  async updateSearchRerankConfiguration(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateSearchRerankConfiguration().validate(
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
    } = CatalogPlatformApplicationValidator.updateSearchRerankConfiguration().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateSearchRerankConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/rerank/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.UpdateSearchRerankResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateSearchRerankConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UpdateSynonymsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SynonymUpdateResponseSchema>} -
   *   Success response
   * @name updateSynonyms
   * @summary: Update synonym attributes for an application
   * @description: This view allows you to modify synonym attributes for a particular application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSynonyms/).
   */
  async updateSynonyms(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.updateSynonyms().validate(
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
    } = CatalogPlatformApplicationValidator.updateSynonyms().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > updateSynonyms \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/synonym/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SynonymUpdateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > updateSynonyms \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.UploadSynonymsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SynonymUploadResponseSchema>} -
   *   Success response
   * @name uploadSynonyms
   * @summary: Upload csv/xls/xlsx file with synonyms
   * @description: This API allows you to upload a list of one-way/two-way synonyms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/uploadSynonyms/).
   */
  async uploadSynonyms(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.uploadSynonyms().validate(
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
    } = CatalogPlatformApplicationValidator.uploadSynonyms().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > uploadSynonyms \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/bulk`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SynonymUploadResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > uploadSynonyms \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.ValidateBulkSynonymsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.SynonymBulkValidateResponseSchema>}
   *   - Success response
   *
   * @name validateBulkSynonyms
   * @summary: Validate csv/xls/xlsx file with synonyms
   * @description: This view allows you to validate the file uploaded for synonyms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateBulkSynonyms/).
   */
  async validateBulkSynonyms(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.validateBulkSynonyms().validate(
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
    } = CatalogPlatformApplicationValidator.validateBulkSynonyms().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > validateBulkSynonyms \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/bulk/validate`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.SynonymBulkValidateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > validateBulkSynonyms \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.ValidateProductPriceFactoryBulkJobParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobValidateResponseSchema>}
   *   - Success response
   *
   * @name validateProductPriceFactoryBulkJob
   * @summary: Validate bulk job for adding products in price factory.
   * @description: This API allows to validate bulk job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductPriceFactoryBulkJob/).
   */
  async validateProductPriceFactoryBulkJob(
    { id, jobId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.validateProductPriceFactoryBulkJob().validate(
      {
        id,
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
    } = CatalogPlatformApplicationValidator.validateProductPriceFactoryBulkJob().validate(
      {
        id,
        jobId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > validateProductPriceFactoryBulkJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/owner-application/${this.applicationId}/price-factory/${id}/bulk/${jobId}/validate`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobValidateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Catalog > validateProductPriceFactoryBulkJob \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Catalog;
