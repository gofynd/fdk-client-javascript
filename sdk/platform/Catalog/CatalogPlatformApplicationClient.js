const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
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
   * @param {CatalogPlatformApplicationValidator.addCollectionItems} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.UpdatedResponse>} - Success response
   * @name addCollectionItems
   * @summary: Add items to a collection
   * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
   */
  async addCollectionItems({ id, body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.UpdatedResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > addCollectionItems \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.createCollection} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.CollectionCreateResponse>} -
   *   Success response
   * @name createCollection
   * @summary: Add a Collection
   * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
   */
  async createCollection({ body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.CollectionCreateResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > createCollection \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.createConfigurationByType} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
   *   Success response
   * @name createConfigurationByType
   * @summary: Add configuration for categories and brands
   * @description: Add configuration for categories & brands.
   */
  async createConfigurationByType({ type, body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAppCatalogConfiguration().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > createConfigurationByType \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.createConfigurationProductListing} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
   *   Success response
   * @name createConfigurationProductListing
   * @summary: Add configuration for products & listings
   * @description: Add configuration for products & listing.
   */
  async createConfigurationProductListing({ body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAppCatalogConfiguration().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > createConfigurationProductListing \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.createCustomAutocompleteRule} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.CreateAutocompleteWordsResponse>}
   *   - Success response
   *
   * @name createCustomAutocompleteRule
   * @summary: Add a Custom Autocomplete Keywords
   * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
   */
  async createCustomAutocompleteRule({ body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.CreateAutocompleteWordsResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > createCustomAutocompleteRule \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.createCustomKeyword} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
   * @name createCustomKeyword
   * @summary: Add a Custom Search Keywords
   * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
   */
  async createCustomKeyword({ body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchWordsData().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > createCustomKeyword \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.createGroupConfiguration} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
   * @name createGroupConfiguration
   * @summary: Create configuration for Group config types.
   * @description: Create configuration for Group config types.
   */
  async createGroupConfiguration({ configType, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.AppConfigurationDetail().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > createGroupConfiguration \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.createListingConfiguration} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.AppConfigurationsSort>} - Success response
   * @name createListingConfiguration
   * @summary: Add configuration for listings
   * @description: Add configuration for listing.
   */
  async createListingConfiguration({ configType, body } = {}) {
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.AppConfigurationsSort().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > createListingConfiguration \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.deleteAutocompleteKeyword} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
   * @name deleteAutocompleteKeyword
   * @summary: Delete a Autocomplete Keywords
   * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
   */
  async deleteAutocompleteKeyword({ id } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.DeleteResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > deleteAutocompleteKeyword \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.deleteCollection} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
   * @name deleteCollection
   * @summary: Delete a Collection
   * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
   */
  async deleteCollection({ id } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.DeleteResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > deleteCollection \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.deleteGroupConfiguration} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
   * @name deleteGroupConfiguration
   * @summary: Delete configuration of the product config type of the application.
   * @description: Delete configuration of the product config type of the application.
   */
  async deleteGroupConfiguration({ configType, groupSlug } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.ConfigSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > deleteGroupConfiguration \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.deleteListingConfiguration} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
   * @name deleteListingConfiguration
   * @summary: Delete configuration for listings
   * @description: Delete configuration for listing.
   */
  async deleteListingConfiguration({ configType, configId } = {}) {
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/item/${configId}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.ConfigSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > deleteListingConfiguration \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.deleteSearchKeywords} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.DeleteResponse>} - Success response
   * @name deleteSearchKeywords
   * @summary: Delete a Search Keywords
   * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
   */
  async deleteSearchKeywords({ id } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.DeleteResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > deleteSearchKeywords \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getAllCollections} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.GetCollectionListingResponse>} -
   *   Success response
   * @name getAllCollections
   * @summary: List all the collections
   * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
   */
  async getAllCollections({
    q,
    scheduleStatus,
    type,
    tags,
    isActive,
    pageNo,
    pageSize,
  } = {}) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAllCollections().validate(
      {
        q,
        scheduleStatus,
        type,
        tags,
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
        tags,
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
    query_params["tags"] = tags;
    query_params["is_active"] = isActive;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetCollectionListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getAllCollections \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getAllSearchKeyword} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.GetSearchWordsResponse>} - Success response
   * @name getAllSearchKeyword
   * @summary: List all Search Custom Keyword Listing
   * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
   */
  async getAllSearchKeyword({} = {}) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAllSearchKeyword().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getAllSearchKeyword().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAllSearchKeyword \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchWordsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getAllSearchKeyword \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getAppInventory} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.InventoryStockResponse>} - Success response
   * @name getAppInventory
   * @summary: Get the stock of a product
   * @description: Retrieve the available Inventory of the products. Use this API to get the Inventory status of products with the filters of timestamp, store_ids, brand_ids, item_id - Items - Pagination
   */
  async getAppInventory({
    itemIds,
    storeIds,
    brandIds,
    sellerIdentifiers,
    timestamp,
    pageSize,
    pageId,
  } = {}) {
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/inventory/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.InventoryStockResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getAppInventory \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getAppLocations} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.LocationListSerializer>} - Success response
   * @name getAppLocations
   * @summary: Get list of locations
   * @description: This API allows to view all the locations asscoiated to a application.
   */
  async getAppLocations({ storeType, uid, q, stage, pageNo, pageSize } = {}) {
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/locations`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.LocationListSerializer().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getAppLocations \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Id of the company whose locations are to fetched
   * @param {string} arg.applicationId - Id of the application whose locations
   *   are to fetched
   * @param {string} [arg.storeType] - Helps to sort the location list on the
   *   basis of location type.
   * @param {number[]} [arg.uid] - Helps to sort the location list on the
   *   basis of uid list.
   * @param {string} [arg.q] - Query that is to be searched.
   * @param {string} [arg.stage] - To filter companies on basis of verified or
   *   unverified companies.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 20.
   * @returns {Paginator<CatalogPlatformModel.LocationListSerializer>}
   * @summary: Get list of locations
   * @description: This API allows to view all the locations asscoiated to a application.
   */
  getAppLocationsPaginator({
    companyId,
    applicationId,
    storeType,
    uid,
    q,
    stage,
    pageSize,
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
   * @param {CatalogPlatformApplicationValidator.getAppProduct} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.OwnerAppItemResponse>} - Success response
   * @name getAppProduct
   * @summary: Get company application product data.
   * @description: Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent.
   */
  async getAppProduct({ itemId } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product/${itemId}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.OwnerAppItemResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getAppProduct \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getAppProducts} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.ProductListingResponse>} - Success response
   * @name getAppProducts
   * @summary: Get applicationwise products
   * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`
   */
  async getAppProducts({
    brandIds,
    categoryIds,
    departmentIds,
    tags,
    itemIds,
    pageNo,
    pageSize,
    q,
  } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/raw-products/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getAppProducts \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getAppicationProducts} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.ApplicationProductListingResponse>}
   *   - Success response
   *
   * @name getAppicationProducts
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
   */
  async getAppicationProducts({
    q,
    f,
    c,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
    itemIds,
  } = {}) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAppicationProducts().validate(
      {
        q,
        f,
        c,
        filters,
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
    } = CatalogPlatformApplicationValidator.getAppicationProducts().validate(
      {
        q,
        f,
        c,
        filters,
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
        message: `Parameter Validation warrnings for platform > Catalog > getAppicationProducts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["f"] = f;
    query_params["c"] = c;
    query_params["filters"] = filters;
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.ApplicationProductListingResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getAppicationProducts \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - A `company_id` is a unique identifier for
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
   *   in **c** parameter in this format.
   *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
   * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
   *   filter details. This flag is used to fetch all filters
   * @param {string} [arg.sortOn] - The order to sort the list of products on.
   *   The supported sort parameters are popularity, price, redemption and
   *   discount in either ascending or descending order. See the supported
   *   values below.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {number[]} [arg.itemIds] - Item Ids of product
   * @returns {Paginator<CatalogPlatformModel.ApplicationProductListingResponse>}
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
   */
  getAppicationProductsPaginator({
    companyId,
    applicationId,
    q,
    f,
    c,
    filters,
    sortOn,
    pageSize,
    itemIds,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getAppicationProducts({
        companyId: companyId,
        applicationId: applicationId,
        q: q,
        f: f,
        c: c,
        filters: filters,
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
   * @param {CatalogPlatformApplicationValidator.getApplicationBrandListing} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
   * @name getApplicationBrandListing
   * @summary: List all the brands for the application
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
   */
  async getApplicationBrandListing({ pageNo, pageSize, q } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.BrandListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getApplicationBrandListing \n ${res_error}`,
      });
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
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search brands by brand name.
   * @returns {Paginator<CatalogPlatformModel.BrandListingResponse>}
   * @summary: List all the brands for the application
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
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
   * @param {CatalogPlatformApplicationValidator.getApplicationBrands} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
   * @name getApplicationBrands
   * @summary: List all the brands
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
   */
  async getApplicationBrands({
    department,
    pageNo,
    pageSize,
    q,
    brandId,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.BrandListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getApplicationBrands \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - A `company_id` is a unique identifier for
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
   * @returns {Paginator<CatalogPlatformModel.BrandListingResponse>}
   * @summary: List all the brands
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
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
   * @param {CatalogPlatformApplicationValidator.getApplicationCategoryListing} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.BrandListingResponse>} - Success response
   * @name getApplicationCategoryListing
   * @summary: List all the brands for the application
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
   */
  async getApplicationCategoryListing({
    departmentId,
    pageNo,
    pageSize,
    q,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.BrandListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getApplicationCategoryListing \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {number} [arg.departmentId] - A `department_id` is a unique
   *   identifier for a particular department.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search brands by brand name.
   * @returns {Paginator<CatalogPlatformModel.BrandListingResponse>}
   * @summary: List all the brands for the application
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
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
   * @param {CatalogPlatformApplicationValidator.getApplicationDepartmentListing} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.ApplicationDepartmentListingResponse>}
   *   - Success response
   *
   * @name getApplicationDepartmentListing
   * @summary: List all the departments for the application
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
   */
  async getApplicationDepartmentListing({ pageNo, pageSize, q } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.ApplicationDepartmentListingResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getApplicationDepartmentListing \n ${res_error}`,
      });
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
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search department by name.
   * @returns {Paginator<CatalogPlatformModel.ApplicationDepartmentListingResponse>}
   * @summary: List all the departments for the application
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
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
   * @param {CatalogPlatformApplicationValidator.getAutocompleteConfig} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
   *   Success response
   * @name getAutocompleteConfig
   * @summary: List all Autocomplete Keyword Listing
   * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
   */
  async getAutocompleteConfig({} = {}) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getAutocompleteConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogPlatformApplicationValidator.getAutocompleteConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getAutocompleteConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAutocompleteWordsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getAutocompleteConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getAutocompleteKeywordDetail} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
   *   Success response
   * @name getAutocompleteKeywordDetail
   * @summary: Get a Autocomplete Keywords Details
   * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
   */
  async getAutocompleteKeywordDetail({ id } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAutocompleteWordsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getAutocompleteKeywordDetail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getCatalogConfiguration} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>}
   *   - Success response
   *
   * @name getCatalogConfiguration
   * @summary: Get configuration meta  details for catalog for admin panel
   * @description: configuration meta  details for catalog.
   */
  async getCatalogConfiguration({} = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/metadata/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetCatalogConfigurationMetaData().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getCatalogConfiguration \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getCatalogInsights} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.CatalogInsightResponse>} - Success response
   * @name getCatalogInsights
   * @summary: Analytics data of catalog and inventory.
   * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
   */
  async getCatalogInsights({ brand } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/analytics/insights/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.CatalogInsightResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getCatalogInsights \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getCategories} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.CategoryListingResponse>} - Success response
   * @name getCategories
   * @summary: List all the categories
   * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
   */
  async getCategories({ department } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.CategoryListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getCategories \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getCollectionDetail} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.CollectionDetailResponse>} -
   *   Success response
   * @name getCollectionDetail
   * @summary: Get a particular collection
   * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
   */
  async getCollectionDetail({ slug } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${slug}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.CollectionDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getCollectionDetail \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getCollectionItems} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.GetCollectionItemsResponse>} -
   *   Success response
   * @name getCollectionItems
   * @summary: Get the items for a collection
   * @description: Get items from a collection specified by its `id`.
   */
  async getCollectionItems({ id, sortOn, pageId, pageSize } = {}) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getCollectionItems().validate(
      {
        id,
        sortOn,
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
    } = CatalogPlatformApplicationValidator.getCollectionItems().validate(
      {
        id,
        sortOn,
        pageId,
        pageSize,
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
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetCollectionItemsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getCollectionItems \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getConfigurationByType} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>}
   *   - Success response
   *
   * @name getConfigurationByType
   * @summary: Get configured details for catalog
   * @description: configured details for catalog.
   */
  async getConfigurationByType({ type } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAppCatalogEntityConfiguration().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getConfigurationByType \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getConfigurationMetadata} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.GetConfigMetadataResponse>} -
   *   Success response
   * @name getConfigurationMetadata
   * @summary: Get configuration metadata details for catalog for admin panel
   * @description: Get the configuraion metadata details for catalog.
   */
  async getConfigurationMetadata({ configType, templateSlug } = {}) {
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/metadata/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetConfigMetadataResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getConfigurationMetadata \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getConfigurations} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
   *   Success response
   * @name getConfigurations
   * @summary: Get configured details for catalog
   * @description: configured details for catalog.
   */
  async getConfigurations({} = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAppCatalogConfiguration().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getConfigurations \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getDepartments} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.DepartmentResponse>} - Success response
   * @name getDepartments
   * @summary: List all the departments
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
   */
  async getDepartments({} = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.DepartmentResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getDepartments \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getDiscountedInventoryBySizeIdentifier} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.InventorySellerIdentifierResponsePaginated>}
   *   - Success response
   *
   * @name getDiscountedInventoryBySizeIdentifier
   * @summary: Get Inventory for company
   * @description: This API allows get Inventory data for particular company grouped by size and store.
   */
  async getDiscountedInventoryBySizeIdentifier({
    itemId,
    sizeIdentifier,
    pageNo,
    pageSize,
    q,
    locationIds,
  } = {}) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getDiscountedInventoryBySizeIdentifier().validate(
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
    } = CatalogPlatformApplicationValidator.getDiscountedInventoryBySizeIdentifier().validate(
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
        message: `Parameter Validation warrnings for platform > Catalog > getDiscountedInventoryBySizeIdentifier \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["location_ids"] = locationIds;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products/${itemId}/inventory/${sizeIdentifier}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.InventorySellerIdentifierResponsePaginated().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getDiscountedInventoryBySizeIdentifier \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getGroupConfigurations} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.GetConfigResponse>} - Success response
   * @name getGroupConfigurations
   * @summary: Get the details of the application configured configurations of group config types.
   * @description: Get the details of the application configured configurations of group config types.
   */
  async getGroupConfigurations({
    configType,
    pageNo,
    pageSize,
    search,
    templateSlug,
  } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getGroupConfigurations \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getListingConfigurations} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.GetConfigResponse>} - Success response
   * @name getListingConfigurations
   * @summary: Get the details of the application configured configurations of listing config types.
   * @description: Get the details of the application configured configurations of listing config types.
   */
  async getListingConfigurations({
    configType,
    pageNo,
    pageSize,
    search,
  } = {}) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getListingConfigurations().validate(
      {
        configType,
        pageNo,
        pageSize,
        search,
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getListingConfigurations \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getProductDetailBySlug} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.ProductDetail>} - Success response
   * @name getProductDetailBySlug
   * @summary: Get a product
   * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
   */
  async getProductDetailBySlug({ slug } = {}) {
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
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductDetail().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getProductDetailBySlug \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getProductSizeSellers} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.ProductSizeSellersResponse>} -
   *   Success response
   * @name getProductSizeSellers
   * @summary: Get the sellers of a product size at a PIN Code
   * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
   */
  async getProductSizeSellers({
    itemId,

    size,
    pincode,
    strategy,
    pageNo,
    pageSize,
  } = {}) {
    const {
      error,
    } = CatalogPlatformApplicationValidator.getProductSizeSellers().validate(
      {
        itemId,

        size,
        pincode,
        strategy,
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
    } = CatalogPlatformApplicationValidator.getProductSizeSellers().validate(
      {
        itemId,

        size,
        pincode,
        strategy,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Catalog > getProductSizeSellers \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["pincode"] = pincode;
    query_params["strategy"] = strategy;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products/${itemId}/sizes/${size}/sellers/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.ProductSizeSellersResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getProductSizeSellers \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.itemId - Item code of the product of which size is to be get.
   * @param {number} arg.companyId - Company id of the product size .
   * @param {string} arg.applicationId - Application id of company for which
   *   product size to be fetched.
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes
   * @param {string} [arg.pincode] - The 6-digit PIN Code of the area near
   *   which the selling locations should be searched, e.g. 400059
   * @param {string} [arg.strategy] - Sort stores on the basis of strategy.
   *   eg, fast-delivery, low-price, optimal.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<CatalogPlatformModel.ProductSizeSellersResponse>}
   * @summary: Get the sellers of a product size at a PIN Code
   * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
   */
  getProductSizeSellersPaginator({
    itemId,
    companyId,
    applicationId,
    size,
    pincode,
    strategy,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getProductSizeSellers({
        itemId: itemId,
        companyId: companyId,
        applicationId: applicationId,
        size: size,
        pincode: pincode,
        strategy: strategy,
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
   * @param {CatalogPlatformApplicationValidator.getQueryFilters} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.GetCollectionQueryOptionResponse>}
   *   - Success response
   *
   * @name getQueryFilters
   * @summary: Get query filters to configure a collection
   * @description: Get query filters to configure a collection
   */
  async getQueryFilters({} = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/query-options/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetCollectionQueryOptionResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getQueryFilters \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.getSearchKeywords} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.GetSearchWordsDetailResponse>} -
   *   Success response
   * @name getSearchKeywords
   * @summary: Get a Search Keywords Details
   * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
   */
  async getSearchKeywords({ id } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchWordsDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > getSearchKeywords \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateAllowSingle} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
   * @name updateAllowSingle
   * @summary: Update allow single flag for filters of the application.
   * @description: Update allow single flag for filters of the application.
   */
  async updateAllowSingle({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.ConfigSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateAllowSingle \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateAppBrand} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
   * @name updateAppBrand
   * @summary: Update a single custom json.
   * @description: This API helps to update data associated to a item custom meta.
   */
  async updateAppBrand({ brandUid, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse1().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateAppBrand \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateAppCategory} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
   * @name updateAppCategory
   * @summary: Update a single custom json.
   * @description: This API helps to update data associated to a item custom meta.
   */
  async updateAppCategory({ categoryUid, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse1().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateAppCategory \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateAppDepartment} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
   * @name updateAppDepartment
   * @summary: Update a single custom json.
   * @description: This API helps to update data associated to a item custom meta.
   */
  async updateAppDepartment({ departmentUid, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse1().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateAppDepartment \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateAppLocation} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
   * @name updateAppLocation
   * @summary: Update a single custom json.
   * @description: This API helps to update data associated to a item custom meta.
   */
  async updateAppLocation({ storeUid, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse1().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateAppLocation \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateAppProduct} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.SuccessResponse1>} - Success response
   * @name updateAppProduct
   * @summary: Update a single custom meta.
   * @description: This API helps to update data associated to a item custom meta.
   */
  async updateAppProduct({ itemId, body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product/${itemId}/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.SuccessResponse1().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateAppProduct \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateAutocompleteKeyword} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponse>} -
   *   Success response
   * @name updateAutocompleteKeyword
   * @summary: Create & Update Autocomplete Keyword
   * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
   */
  async updateAutocompleteKeyword({ id, body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetAutocompleteWordsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateAutocompleteKeyword \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateCollection} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.UpdateCollection>} - Success response
   * @name updateCollection
   * @summary: Update a collection
   * @description: Update a collection by it's id. On successful request, returns the updated collection
   */
  async updateCollection({ id, body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.UpdateCollection().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateCollection \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateDefaultSort} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponse>} - Success response
   * @name updateDefaultSort
   * @summary: Update the default sort key configuration for the application.
   * @description: Update the default sort key configuration for the application.
   */
  async updateDefaultSort({ body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.ConfigSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateDefaultSort \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateGroupConfiguration} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
   * @name updateGroupConfiguration
   * @summary: Update the group configurations for the application.
   * @description: Update the group configurations for the application.
   */
  async updateGroupConfiguration({ configType, groupSlug, body } = {}) {
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
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.AppConfigurationDetail().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateGroupConfiguration \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateListingConfiguration} arg
   *   - Arg object
   *
   * @returns {Promise<CatalogPlatformModel.AppConfigurationsSort>} - Success response
   * @name updateListingConfiguration
   * @summary: Update configuration for listings
   * @description: Update configuration for listing.
   */
  async updateListingConfiguration({ configType, configId, body } = {}) {
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
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/item/${configId}/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.AppConfigurationsSort().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateListingConfiguration \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CatalogPlatformApplicationValidator.updateSearchKeywords} arg - Arg object
   * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
   * @name updateSearchKeywords
   * @summary: Update Search Keyword
   * @description: Update Search Keyword by its id. On successful request, returns the updated collection
   */
  async updateSearchKeywords({ id, body } = {}) {
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
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = CatalogPlatformModel.GetSearchWordsData().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Catalog > updateSearchKeywords \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Catalog;
