const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const ServiceabilityValidator = require("../models/ServiceabilityValidator");
class Serviceability {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EntityRegionViewRequest} arg.body
   * @summary: Get country and state list
   * @description: This API returns response for Entity Region View.
   */
  getEntityRegionView({ body } = {}) {
    const { error } = ServiceabilityValidator.getEntityRegionView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/regions`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNumber] - Index of the item to start returning with
   * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
   * @param {string} [arg.name] - Name of particular zone in the seller account
   * @param {boolean} [arg.isActive] - Status of zone whether active or inactive
   * @param {string} [arg.channelIds] - Zones associated with the given channel ids'
   * @param {string} [arg.q] - Search with name as a free text
   * @summary: Zone List of application.
   * @description: This API returns Zone List View of the application.
   */
  getListView({ pageNumber, pageSize, name, isActive, channelIds, q } = {}) {
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

    const query_params = {};
    query_params["page_number"] = pageNumber;
    query_params["page_size"] = pageSize;
    query_params["name"] = name;
    query_params["is_active"] = isActive;
    query_params["channel_ids"] = channelIds;
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/zones`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Company Store View of application.
   * @description: This API returns Company Store View of the application.
   */
  getCompanyStoreView({} = {}) {
    const { error } = ServiceabilityValidator.getCompanyStoreView().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/all-stores`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
   *   particular zone.
   * @param {ZoneUpdateRequest} arg.body
   * @summary: Updation of zone collections in database.
   * @description: This API returns response of updation of zone in mongo database.
   */
  updateZoneControllerView({ zoneId, body } = {}) {
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

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/zone/${zoneId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.zoneId - A `zone_id` is a unique identifier for a
   *   particular zone.
   * @summary: Zone Data View of application.
   * @description: This API returns Zone Data View of the application.
   */
  getZoneDataView({ zoneId } = {}) {
    const { error } = ServiceabilityValidator.getZoneDataView().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/zone/${zoneId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ZoneRequest} arg.body
   * @summary: Insertion of zone in database.
   * @description: This API returns response of insertion of zone in mongo database.<br>Correction- `zone_id` in the path must be removed.<br> path is `/service/platform/logistics-internal/v1.0/company/{company_id}/zone/`
   */
  upsertZoneControllerView({ body } = {}) {
    const {
      error,
    } = ServiceabilityValidator.upsertZoneControllerView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/zone`,
      query_params,
      body
    );
  }
}

module.exports = Serviceability;
