const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ServiceabilityValidator = require("./ServiceabilityPlatformValidator");
const ServiceabilityModel = require("./ServiceabilityPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Serviceability {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ZoneRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ZoneResponse>} - Success response
   * @summary: Creation of a new zone
   * @description: This API allows you to create a new zone with the specified information. A zone enables serviceability based on given pincodes or regions. By creating a zone and including specific pincodes or regions, you can ensure that the stores associated with the zone are serviceable for those added pincodes or regions. This functionality is particularly useful when you need to ensure serviceability for multiple pincodes or regions by grouping them into a single zone.
   */
  async createZone({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.createZone().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.createZone().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createZone",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zone`,
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
    } = ServiceabilityModel.ZoneResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createZone",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetStoresViewResponse>} - Success response
   * @summary: GET stores data
   * @description: This API returns stores data.
   */
  async getAllStores({ headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.getAllStores().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.getAllStores().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAllStores",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/logistics/stores`,
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
    } = ServiceabilityModel.GetStoresViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAllStores",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNumber] - Index of the item to start returning with
   * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyStoreView_Response>} - Success response
   * @summary: Company Store View of application.
   * @description: This API returns Company Store View of the application.
   */
  async getCompanyStoreView(
    { pageNumber, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ServiceabilityValidator.getCompanyStoreView().validate(
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
    } = ServiceabilityValidator.getCompanyStoreView().validate(
      {
        pageNumber,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCompanyStoreView",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.CompanyStoreView_Response().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCompanyStoreView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNumber] - Index of the item to start returning with
   * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
   * @param {string} [arg.stage] - Stage of the account. enabled/disabled
   * @param {string} [arg.paymentMode] - Filters dp accounts based on payment mode
   * @param {string} [arg.transportType] - Filters dp accounts based on transport_type
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyDpAccountListResponse>} - Success response
   * @summary: Getting DpAccount of a company from database.
   * @description: This API returns response DpAccount of a company from mongo database.
   */
  async getDpAccount(
    { pageNumber, pageSize, stage, paymentMode, transportType } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ServiceabilityValidator.getDpAccount().validate(
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
    const { error: warrning } = ServiceabilityValidator.getDpAccount().validate(
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
        message: "Parameter Validation warrnings for getDpAccount",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.CompanyDpAccountListResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDpAccount",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DPCompanyRuleResponse>} - Success response
   * @summary: Get All DpCompanyRules applied to company from database.
   * @description: This API returns response of all DpCompanyRules from mongo database.
   */
  async getDpCompanyRules({ headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.getDpCompanyRules().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getDpCompanyRules().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDpCompanyRules",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/priority`,
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
    } = ServiceabilityModel.DPCompanyRuleResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDpCompanyRules",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNumber] - Index of the item to start returning with
   * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DpMultipleRuleSuccessResponse>} - Success response
   * @summary: Fetching of DpRules from database.
   * @description: This API returns response of DpRules from mongo database.
   */
  async getDpRuleInsert(
    { pageNumber, pageSize } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ServiceabilityValidator.getDpRuleInsert().validate(
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
    } = ServiceabilityValidator.getDpRuleInsert().validate(
      {
        pageNumber,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDpRuleInsert",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.DpMultipleRuleSuccessResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDpRuleInsert",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.ruleUid - A `rule_uid` is a unique identifier for a
   *   particular Dp.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DpRuleSuccessResponse>} - Success response
   * @summary: Fetching of DpRules from database.
   * @description: This API returns response of DpRules from mongo database.
   */
  async getDpRules({ ruleUid } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.getDpRules().validate(
      {
        ruleUid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.getDpRules().validate(
      {
        ruleUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDpRules",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/rules/${ruleUid}`,
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
    } = ServiceabilityModel.DpRuleSuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDpRules",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EntityRegionView_Request} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<EntityRegionView_Response>} - Success response
   * @summary: Get country and state list
   * @description: This API returns response for Entity Region View.
   */
  async getEntityRegionView({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.getEntityRegionView().validate(
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
    } = ServiceabilityValidator.getEntityRegionView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getEntityRegionView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/regions`,
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
    } = ServiceabilityModel.EntityRegionView_Response().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getEntityRegionView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNumber] - Index of the item to start returning with
   * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
   * @param {string} [arg.name] - Name of particular zone in the seller account
   * @param {boolean} [arg.isActive] - Status of zone whether active or inactive
   * @param {string} [arg.channelIds] - Zones associated with the given channel ids'
   * @param {string} [arg.q] - Search with name as a free text
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ListViewResponse>} - Success response
   * @summary: Zone List of application.
   * @description: This API returns Zone List View of the application.
   */
  async getListView(
    { pageNumber, pageSize, name, isActive, channelIds, q } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ServiceabilityValidator.getListView().validate(
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
    const { error: warrning } = ServiceabilityValidator.getListView().validate(
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
        message: "Parameter Validation warrnings for getListView",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.ListViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getListView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ReAssignStoreRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ReAssignStoreResponse>} - Success response
   * @summary: Get serviceable store of the item
   * @description: This API returns serviceable store of the item.
   */
  async getOptimalLocations({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.getOptimalLocations().validate(
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
    } = ServiceabilityValidator.getOptimalLocations().validate(
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/reassign`,
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
    } = ServiceabilityModel.ReAssignStoreResponse().validate(responseData, {
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
   * @param {number} arg.storeUid - A `store_uid` contains a specific ID of a store.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetStoresViewResponse>} - Success response
   * @summary: GET stores data
   * @description: This API returns stores data.
   */
  async getStore({ storeUid } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.getStore().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.getStore().validate(
      {
        storeUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getStore",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/stores/${storeUid}`,
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
    } = ServiceabilityModel.GetStoresViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getStore",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
   *   particular zone.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetSingleZoneDataViewResponse>} - Success response
   * @summary: Zone Data View of application.
   * @description: This API returns Zone Data View of the application.
   */
  async getZoneDataView({ zoneId } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.getZoneDataView().validate(
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
    } = ServiceabilityValidator.getZoneDataView().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getZoneDataView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zone/${zoneId}`,
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
    } = ServiceabilityModel.GetSingleZoneDataViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getZoneDataView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNumber] - Index of the item to start returning with
   * @param {number} [arg.pageNo] - Index of the item to start returning with
   * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
   * @param {string} [arg.name] - Name of particular zone in the seller account
   * @param {boolean} [arg.isActive] - Status of zone whether active or inactive
   * @param {string} [arg.channelIds] - Zones associated with the given channel ids'
   * @param {string} [arg.q] - Search with name as a free text
   * @param {string[]} [arg.zoneId] - List of zones to query for
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ListViewResponse>} - Success response
   * @summary: Zone List of application.
   * @description: This API returns Zone List View of the application.
   */
  async getZoneListView(
    {
      pageNumber,
      pageNo,
      pageSize,
      name,
      isActive,
      channelIds,
      q,
      zoneId,
    } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ServiceabilityValidator.getZoneListView().validate(
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
    } = ServiceabilityValidator.getZoneListView().validate(
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
        message: "Parameter Validation warrnings for getZoneListView",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.ListViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getZoneListView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.ruleUid - A `rule_uid` is a unique identifier for a
   *   particular Dp.
   * @param {DpRulesUpdateRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DpRuleUpdateSuccessResponse>} - Success response
   * @summary: Updating of DpRules from database.
   * @description: This API updates and returns response of DpRules from mongo database.
   */
  async updateDpRule({ ruleUid, body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.updateDpRule().validate(
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
    const { error: warrning } = ServiceabilityValidator.updateDpRule().validate(
      {
        ruleUid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateDpRule",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/rules/${ruleUid}`,
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
    } = ServiceabilityModel.DpRuleUpdateSuccessResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateDpRule",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
   *   particular zone.
   * @param {ZoneUpdateRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ZoneSuccessResponse>} - Success response
   * @summary: Updation of zone collections in database.
   * @description: This API returns response of updation of zone in mongo database.
   */
  async updateZoneControllerView(
    { zoneId, body } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = ServiceabilityValidator.updateZoneControllerView().validate(
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
    } = ServiceabilityValidator.updateZoneControllerView().validate(
      {
        zoneId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateZoneControllerView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/zone/${zoneId}`,
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
    } = ServiceabilityModel.ZoneSuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateZoneControllerView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CompanyDpAccountRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompanyDpAccountResponse>} - Success response
   * @summary: Upsertion of DpAccount in database.
   * @description: This API returns response of upsertion of DpAccount in mongo database.
   */
  async upsertDpAccount({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.upsertDpAccount().validate(
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
    } = ServiceabilityValidator.upsertDpAccount().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for upsertDpAccount",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/account`,
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
    } = ServiceabilityModel.CompanyDpAccountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertDpAccount",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DPCompanyRuleRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DPCompanyRuleResponse>} - Success response
   * @summary: Upsert of DpCompanyRules in database.
   * @description: This API returns response of upsert of DpCompanyRules in mongo database.
   */
  async upsertDpCompanyRules({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.upsertDpCompanyRules().validate(
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
    } = ServiceabilityValidator.upsertDpCompanyRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for upsertDpCompanyRules",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/priority`,
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
    } = ServiceabilityModel.DPCompanyRuleResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertDpCompanyRules",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DpRuleRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DpRuleSuccessResponse>} - Success response
   * @summary: Upsert of DpRules in database.
   * @description: This API returns response of upsert of DpRules in mongo database.
   */
  async upsertDpRules({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.upsertDpRules().validate(
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
    } = ServiceabilityValidator.upsertDpRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for upsertDpRules",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier/rules`,
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
    } = ServiceabilityModel.DpRuleSuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertDpRules",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Serviceability;
