const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const ServiceabilityValidator = require("./ServiceabilityPlatformApplicationValidator");

class Serviceability {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ApplicationServiceabilityConfig} arg.body
   * @summary: Zone configuration of application.
   * @description: This API returns serviceability config of the application.
   */
  postApplicationServiceability({ body } = {}) {
    const {
      error,
    } = ServiceabilityValidator.postApplicationServiceability().validate(
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
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/application/${this.applicationId}/serviceability`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Zone configuration of application.
   * @description: This API returns serviceability config of the application.
   */
  getApplicationServiceability({} = {}) {
    const {
      error,
    } = ServiceabilityValidator.getApplicationServiceability().validate(
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
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/application/${this.applicationId}/serviceability`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetZoneFromPincodeViewRequest} arg.body
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  getZoneFromPincodeView({ body } = {}) {
    const { error } = ServiceabilityValidator.getZoneFromPincodeView().validate(
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
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Index of the item to start returning with
   * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
   * @param {string[]} [arg.zoneId] - List of zones to query for
   * @param {string} [arg.q] - Search with name as a free text
   * @summary: GET zones from the application_id.
   * @description: This API returns zones from the application_id View.
   */
  getZonesFromApplicationIdView({ pageNo, pageSize, zoneId, q } = {}) {
    const {
      error,
    } = ServiceabilityValidator.getZonesFromApplicationIdView().validate(
      {
        pageNo,
        pageSize,
        zoneId,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["zone_id"] = zoneId;
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics-internal/v1.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
      query_params,
      undefined
    );
  }
}
module.exports = Serviceability;
