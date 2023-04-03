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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/serviceability`,
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PincodeMopData} arg.body
   * @summary: PincodeView update of MOP.
   * @description: This API updates Pincode method of payment.
   */
  updatePincodeMopView({ body } = {}) {
    const { error } = ServiceabilityValidator.updatePincodeMopView().validate(
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pincode-mop-update`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PincodeMopBulkData} arg.body
   * @summary: Bulk Update of pincode in the application.
   * @description: This API constructs bulk write operations to update the MOP data for each pincode in the payload.
   */
  updatePincodeBulkView({ body } = {}) {
    const { error } = ServiceabilityValidator.updatePincodeBulkView().validate(
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pincode-mop-bulk-update`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PincodeCodStatusListingRequest} arg.body
   * @summary: Pincode count view of application.
   * @description: This API returns count of active pincode.
   */
  updatePincodeCoDListing({ body } = {}) {
    const {
      error,
    } = ServiceabilityValidator.updatePincodeCoDListing().validate(
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pincode-mop-data`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PincodeMopUpdateAuditHistoryRequest} arg.body
   * @summary: Auditlog configuration of application.
   * @description: This API returns Audit logs of Pincode.
   */
  updatePincodeAuditHistory({ body } = {}) {
    const {
      error,
    } = ServiceabilityValidator.updatePincodeAuditHistory().validate(
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/history`,
      query_params,
      body
    );
  }
}
module.exports = Serviceability;
