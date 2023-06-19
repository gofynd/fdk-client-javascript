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
   * @returns {Promise<ZoneResponse>} - Success response
   * @summary: Creation of a new zone
   * @description: This API allows you to create a new zone with the specified information. A zone enables serviceability based on given pincodes or regions. By creating a zone and including specific pincodes or regions, you can ensure that the stores associated with the zone are serviceable for those added pincodes or regions. This functionality is particularly useful when you need to ensure serviceability for multiple pincodes or regions by grouping them into a single zone.
   */
  async createZone({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.ZoneResponse().validate(response, {
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
   * @returns {Promise<GetStoresViewResponse>} - Success response
   * @summary: GET stores data
   * @description: This API returns stores data.
   */
  async getAllStores({} = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.GetStoresViewResponse().validate(response, {
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
   * @returns {Promise<CompanyStoreView_Response>} - Success response
   * @summary: Company Store View of application.
   * @description: This API returns Company Store View of the application.
   */
  async getCompanyStoreView({ pageNumber, pageSize } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.CompanyStoreView_Response().validate(response, {
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
   * @param {EntityRegionView_Request} arg.body
   * @returns {Promise<EntityRegionView_Response>} - Success response
   * @summary: Get country and state list
   * @description: This API returns response for Entity Region View.
   */
  async getEntityRegionView({ body } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.EntityRegionView_Response().validate(response, {
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
   * @returns {Promise<ListViewResponse>} - Success response
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
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.ListViewResponse().validate(response, {
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
   * @param {number} arg.storeUid - A `store_uid` contains a specific ID of a store.
   * @returns {Promise<GetStoresViewResponse>} - Success response
   * @summary: GET stores data
   * @description: This API returns stores data.
   */
  async getStore({ storeUid } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.GetStoresViewResponse().validate(response, {
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
   * @returns {Promise<GetSingleZoneDataViewResponse>} - Success response
   * @summary: Zone Data View of application.
   * @description: This API returns Zone Data View of the application.
   */
  async getZoneDataView({ zoneId } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.GetSingleZoneDataViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

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
   * @returns {Promise<ListViewResponse>} - Success response
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
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.ListViewResponse().validate(response, {
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
   * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
   *   particular zone.
   * @param {ZoneUpdateRequest} arg.body
   * @returns {Promise<ZoneSuccessResponse>} - Success response
   * @summary: Updation of zone collections in database.
   * @description: This API returns response of updation of zone in mongo database.
   */
  async updateZoneControllerView({
    zoneId,

    body,
  } = {}) {
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
      xHeaders
    );

    const {
      error: res_error,
    } = ServiceabilityModel.ZoneSuccessResponse().validate(response, {
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
}

module.exports = Serviceability;
