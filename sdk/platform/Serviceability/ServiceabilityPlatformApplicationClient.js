const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ServiceabilityPlatformApplicationValidator = require("./ServiceabilityPlatformApplicationValidator");
const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Serviceability {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.getApplicationServiceability} arg
   *   - Arg object
   *
   * @returns {Promise<ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse>}
   *   - Success response
   *
   * @name getApplicationServiceability
   * @summary: Zone configuration of application.
   * @description: This API returns serviceability config of the application.
   */
  async getApplicationServiceability({} = {}) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getApplicationServiceability().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getApplicationServiceability().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getApplicationServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/serviceability`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.ApplicationServiceabilityConfigResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getApplicationServiceability \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.getZoneFromPincodeView} arg
   *   - Arg object
   *
   * @returns {Promise<ServiceabilityPlatformModel.GetZoneFromPincodeViewResponse>}
   *   - Success response
   *
   * @name getZoneFromPincodeView
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  async getZoneFromPincodeView({ body } = {}) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getZoneFromPincodeView().validate(
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
    } = ServiceabilityPlatformApplicationValidator.getZoneFromPincodeView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getZoneFromPincodeView \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.GetZoneFromPincodeViewResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getZoneFromPincodeView \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.getZonesFromApplicationIdView} arg
   *   - Arg object
   *
   * @returns {Promise<ServiceabilityPlatformModel.GetZoneFromApplicationIdViewResponse>}
   *   - Success response
   *
   * @name getZonesFromApplicationIdView
   * @summary: GET zones from the application_id.
   * @description: This API returns zones from the application_id View.
   */
  async getZonesFromApplicationIdView({ pageNo, pageSize, zoneId, q } = {}) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getZonesFromApplicationIdView().validate(
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

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getZonesFromApplicationIdView().validate(
      {
        pageNo,
        pageSize,
        zoneId,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getZonesFromApplicationIdView \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["zone_id"] = zoneId;
    query_params["q"] = q;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.GetZoneFromApplicationIdViewResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > getZonesFromApplicationIdView \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.updatePincodeAuditHistory} arg
   *   - Arg object
   *
   * @returns {Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>}
   *   - Success response
   *
   * @name updatePincodeAuditHistory
   * @summary: Auditlog configuration of application.
   * @description: This API returns Audit logs of Pincode.
   */
  async updatePincodeAuditHistory({ body } = {}) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updatePincodeAuditHistory().validate(
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
    } = ServiceabilityPlatformApplicationValidator.updatePincodeAuditHistory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updatePincodeAuditHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/history`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > updatePincodeAuditHistory \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.updatePincodeBulkView} arg
   *   - Arg object
   *
   * @returns {Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>}
   *   - Success response
   *
   * @name updatePincodeBulkView
   * @summary: Bulk Update of pincode in the application.
   * @description: This API constructs bulk write operations to update the MOP data for each pincode in the payload.
   */
  async updatePincodeBulkView({ body } = {}) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updatePincodeBulkView().validate(
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
    } = ServiceabilityPlatformApplicationValidator.updatePincodeBulkView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updatePincodeBulkView \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pincode-mop-bulk-update`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.PincodeBulkViewResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > updatePincodeBulkView \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.updatePincodeCoDListing} arg
   *   - Arg object
   *
   * @returns {Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>}
   *   - Success response
   *
   * @name updatePincodeCoDListing
   * @summary: Pincode count view of application.
   * @description: This API returns count of active pincode.
   */
  async updatePincodeCoDListing({ body } = {}) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updatePincodeCoDListing().validate(
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
    } = ServiceabilityPlatformApplicationValidator.updatePincodeCoDListing().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updatePincodeCoDListing \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pincode-mop-data`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.PincodeCodStatusListingResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > updatePincodeCoDListing \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.updatePincodeMopView} arg
   *   - Arg object
   *
   * @returns {Promise<ServiceabilityPlatformModel.PincodeMOPresponse>} -
   *   Success response
   * @name updatePincodeMopView
   * @summary: PincodeView update of MOP.
   * @description: This API updates Pincode method of payment.
   */
  async updatePincodeMopView({ body } = {}) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updatePincodeMopView().validate(
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
    } = ServiceabilityPlatformApplicationValidator.updatePincodeMopView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updatePincodeMopView \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pincode-mop-update`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = ServiceabilityPlatformModel.PincodeMOPresponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Serviceability > updatePincodeMopView \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Serviceability;
