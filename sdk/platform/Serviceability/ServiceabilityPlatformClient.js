const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ServiceabilityPlatformValidator = require("./ServiceabilityPlatformValidator");
const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Serviceability {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {ServiceabilityPlatformValidator.createZone} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.ZoneResponse>} - Success response
   * @name createZone
   * @summary: Creation of a new zone
   * @description: This API allows you to create a new zone with the specified information. A zone enables serviceability based on given pincodes or regions. By creating a zone and including specific pincodes or regions, you can ensure that the stores associated with the zone are serviceable for those added pincodes or regions. This functionality is particularly useful when you need to ensure serviceability for multiple pincodes or regions by grouping them into a single zone.
   */
  async createZone({ body } = {}) {
    const { error } = ServiceabilityPlatformValidator.createZone().validate(
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
    } = ServiceabilityPlatformValidator.createZone().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > createZone \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zone`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.ZoneResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > createZone \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getAllStores} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResponse>} -
   *   Success response
   * @name getAllStores
   * @summary: GET stores data
   * @description: This API returns stores data.
   */
  async getAllStores({} = {}) {
    const { error } = ServiceabilityPlatformValidator.getAllStores().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getAllStores().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getAllStores \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/logistics/stores`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.GetStoresViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getAllStores \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getCompanyStoreView} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.CompanyStoreView_Response>}
   *   - Success response
   *
   * @name getCompanyStoreView
   * @summary: Company Store View of application.
   * @description: This API returns Company Store View of the application.
   */
  async getCompanyStoreView({ pageNumber, pageSize } = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getCompanyStoreView().validate(
      {
        pageNumber,
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
    } = ServiceabilityPlatformValidator.getCompanyStoreView().validate(
      {
        pageNumber,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getCompanyStoreView \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_number"] = pageNumber;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/all-stores`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.CompanyStoreView_Response().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getCompanyStoreView \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getDpAccount} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.CompanyDpAccountListResponse>}
   *   - Success response
   *
   * @name getDpAccount
   * @summary: Getting DpAccount of a company from database.
   * @description: This API returns response DpAccount of a company from mongo database.
   */
  async getDpAccount({
    pageNumber,
    pageSize,
    stage,
    paymentMode,
    transportType,
  } = {}) {
    const { error } = ServiceabilityPlatformValidator.getDpAccount().validate(
      {
        pageNumber,
        pageSize,
        stage,
        paymentMode,
        transportType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getDpAccount().validate(
      {
        pageNumber,
        pageSize,
        stage,
        paymentMode,
        transportType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getDpAccount \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_number"] = pageNumber;
    query_params["page_size"] = pageSize;
    query_params["stage"] = stage;
    query_params["payment_mode"] = paymentMode;
    query_params["transport_type"] = transportType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/account`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.CompanyDpAccountListResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getDpAccount \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getDpCompanyRules} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
   *   Success response
   * @name getDpCompanyRules
   * @summary: Get All DpCompanyRules applied to company from database.
   * @description: This API returns response of all DpCompanyRules from mongo database.
   */
  async getDpCompanyRules({} = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getDpCompanyRules().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getDpCompanyRules().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getDpCompanyRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/priority`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.DPCompanyRuleResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getDpCompanyRules \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getDpRuleInsert} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse>}
   *   - Success response
   *
   * @name getDpRuleInsert
   * @summary: Fetching of DpRules from database.
   * @description: This API returns response of DpRules from mongo database.
   */
  async getDpRuleInsert({ pageNumber, pageSize } = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getDpRuleInsert().validate(
      {
        pageNumber,
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
    } = ServiceabilityPlatformValidator.getDpRuleInsert().validate(
      {
        pageNumber,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getDpRuleInsert \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_number"] = pageNumber;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/rules`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.DpMultipleRuleSuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getDpRuleInsert \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getDpRules} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
   *   Success response
   * @name getDpRules
   * @summary: Fetching of DpRules from database.
   * @description: This API returns response of DpRules from mongo database.
   */
  async getDpRules({ ruleUid } = {}) {
    const { error } = ServiceabilityPlatformValidator.getDpRules().validate(
      {
        ruleUid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getDpRules().validate(
      {
        ruleUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getDpRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/rules/${ruleUid}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.DpRuleSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getDpRules \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getEntityRegionView} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.EntityRegionView_Response>}
   *   - Success response
   *
   * @name getEntityRegionView
   * @summary: Get country and state list
   * @description: This API returns response for Entity Region View.
   */
  async getEntityRegionView({ body } = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getEntityRegionView().validate(
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
    } = ServiceabilityPlatformValidator.getEntityRegionView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getEntityRegionView \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/regions`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.EntityRegionView_Response().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getEntityRegionView \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getListView} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
   * @name getListView
   * @summary: Zone List of application.
   * @description: This API returns Zone List View of the application.
   */
  async getListView({
    pageNumber,
    pageSize,
    name,
    isActive,
    channelIds,
    q,
  } = {}) {
    const { error } = ServiceabilityPlatformValidator.getListView().validate(
      {
        pageNumber,
        pageSize,
        name,
        isActive,
        channelIds,
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
    } = ServiceabilityPlatformValidator.getListView().validate(
      {
        pageNumber,
        pageSize,
        name,
        isActive,
        channelIds,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getListView \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_number"] = pageNumber;
    query_params["page_size"] = pageSize;
    query_params["name"] = name;
    query_params["is_active"] = isActive;
    query_params["channel_ids"] = channelIds;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zones`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.ListViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getListView \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getOptimalLocations} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.ReAssignStoreResponse>} -
   *   Success response
   * @name getOptimalLocations
   * @summary: Get serviceable store of the item
   * @description: This API returns serviceable store of the item.
   */
  async getOptimalLocations({ body } = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getOptimalLocations().validate(
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
    } = ServiceabilityPlatformValidator.getOptimalLocations().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getOptimalLocations \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/reassign`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.ReAssignStoreResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getOptimalLocations \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getStore} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResponse>} -
   *   Success response
   * @name getStore
   * @summary: GET stores data
   * @description: This API returns stores data.
   */
  async getStore({ storeUid } = {}) {
    const { error } = ServiceabilityPlatformValidator.getStore().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getStore().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getStore \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/stores/${storeUid}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.GetStoresViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getStore \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getZoneDataView} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.GetSingleZoneDataViewResponse>}
   *   - Success response
   *
   * @name getZoneDataView
   * @summary: Zone Data View of application.
   * @description: This API returns Zone Data View of the application.
   */
  async getZoneDataView({ zoneId } = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getZoneDataView().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getZoneDataView().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getZoneDataView \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zone/${zoneId}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.GetSingleZoneDataViewResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getZoneDataView \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.getZoneListView} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
   * @name getZoneListView
   * @summary: Zone List of application.
   * @description: This API returns Zone List View of the application.
   */
  async getZoneListView({
    pageNumber,
    pageNo,
    pageSize,
    name,
    isActive,
    channelIds,
    q,
    zoneId,
  } = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getZoneListView().validate(
      {
        pageNumber,
        pageNo,
        pageSize,
        name,
        isActive,
        channelIds,
        q,
        zoneId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getZoneListView().validate(
      {
        pageNumber,
        pageNo,
        pageSize,
        name,
        isActive,
        channelIds,
        q,
        zoneId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getZoneListView \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_number"] = pageNumber;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["name"] = name;
    query_params["is_active"] = isActive;
    query_params["channel_ids"] = channelIds;
    query_params["q"] = q;
    query_params["zone_id"] = zoneId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zones-list`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.ListViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getZoneListView \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.updateDpRule} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.DpRuleUpdateSuccessResponse>}
   *   - Success response
   *
   * @name updateDpRule
   * @summary: Updating of DpRules from database.
   * @description: This API updates and returns response of DpRules from mongo database.
   */
  async updateDpRule({ ruleUid, body } = {}) {
    const { error } = ServiceabilityPlatformValidator.updateDpRule().validate(
      {
        ruleUid,
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
    } = ServiceabilityPlatformValidator.updateDpRule().validate(
      {
        ruleUid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateDpRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/rules/${ruleUid}`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.DpRuleUpdateSuccessResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > updateDpRule \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.updateZoneControllerView} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>} -
   *   Success response
   * @name updateZoneControllerView
   * @summary: Updation of zone collections in database.
   * @description: This API returns response of updation of zone in mongo database.
   */
  async updateZoneControllerView({
    zoneId,

    body,
  } = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.updateZoneControllerView().validate(
      {
        zoneId,

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
    } = ServiceabilityPlatformValidator.updateZoneControllerView().validate(
      {
        zoneId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateZoneControllerView \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zone/${zoneId}`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.ZoneSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > updateZoneControllerView \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.upsertDpAccount} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.CompanyDpAccountResponse>}
   *   - Success response
   *
   * @name upsertDpAccount
   * @summary: Upsertion of DpAccount in database.
   * @description: This API returns response of upsertion of DpAccount in mongo database.
   */
  async upsertDpAccount({ body } = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.upsertDpAccount().validate(
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
    } = ServiceabilityPlatformValidator.upsertDpAccount().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > upsertDpAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/account`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.CompanyDpAccountResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > upsertDpAccount \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.upsertDpCompanyRules} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.DPCompanyRuleResponse>} -
   *   Success response
   * @name upsertDpCompanyRules
   * @summary: Upsert of DpCompanyRules in database.
   * @description: This API returns response of upsert of DpCompanyRules in mongo database.
   */
  async upsertDpCompanyRules({ body } = {}) {
    const {
      error,
    } = ServiceabilityPlatformValidator.upsertDpCompanyRules().validate(
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
    } = ServiceabilityPlatformValidator.upsertDpCompanyRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > upsertDpCompanyRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/priority`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.DPCompanyRuleResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > upsertDpCompanyRules \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.upsertDpRules} arg - Arg object
   * @returns {Promise<ServiceabilityPlatformModel.DpRuleSuccessResponse>} -
   *   Success response
   * @name upsertDpRules
   * @summary: Upsert of DpRules in database.
   * @description: This API returns response of upsert of DpRules in mongo database.
   */
  async upsertDpRules({ body } = {}) {
    const { error } = ServiceabilityPlatformValidator.upsertDpRules().validate(
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
    } = ServiceabilityPlatformValidator.upsertDpRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > upsertDpRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/rules`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.DpRuleSuccessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > upsertDpRules \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Serviceability;
