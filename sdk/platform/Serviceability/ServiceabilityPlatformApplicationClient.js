const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ServiceabilityValidator = require("./ServiceabilityPlatformApplicationValidator");
const ServiceabilityModel = require("./ServiceabilityPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Serviceability {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ApplicationCompanyDpViewRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ApplicationCompanyDpViewResponse>} - Success response
   * @summary: Add application dp data
   * @description: This API add application dp data.
   */
  async addAppDp({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.addAppDp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.addAppDp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for addAppDp",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.ApplicationCompanyDpViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for addAppDp",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.courierPartnerId - A `courier_partner_id` is a unique
   *   identifier of a particular delivery partner.
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ApplicationCompanyDpViewResponse>} - Success response
   * @summary: Delete application dp data
   * @description: This API remove application dp data.
   */
  async deleteAppDp(
    { courierPartnerId } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ServiceabilityValidator.deleteAppDp().validate(
      {
        courierPartnerId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.deleteAppDp().validate(
      {
        courierPartnerId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteAppDp",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/courier-partner/${courierPartnerId}`,
      query_params,
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.ApplicationCompanyDpViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteAppDp",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ApplicationServiceabilityConfigResponse>} - Success response
   * @summary: Zone configuration of application.
   * @description: This API returns serviceability config of the application.
   */
  async getApplicationServiceability({ headers } = { headers: false }) {
    const {
      error,
    } = ServiceabilityValidator.getApplicationServiceability().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getApplicationServiceability().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getApplicationServiceability",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/serviceability`,
      query_params,
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.ApplicationServiceabilityConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getApplicationServiceability",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DPApplicationRuleResponse>} - Success response
   * @summary: Get All DpApplicationRules rules added at application level from database.
   * @description: This API returns response of all rules of DpApplicationRules from mongo database.
   */
  async getDpApplicationRules({ headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.getDpApplicationRules().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getDpApplicationRules().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDpApplicationRules",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/courier/priority`,
      query_params,
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.DPApplicationRuleResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDpApplicationRules",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ApplicationSelfShipConfigResponse>} - Success response
   * @summary: Self-ship configuration of application.
   * @description: This API returns Self-ship configuration of the application.
   */
  async getSelfShip({ headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.getSelfShip().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ServiceabilityValidator.getSelfShip().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getSelfShip",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/selfship`,
      query_params,
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.ApplicationSelfShipConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getSelfShip",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetZoneFromPincodeViewRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetZoneFromPincodeViewResponse>} - Success response
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  async getZoneFromPincodeView(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ServiceabilityValidator.getZoneFromPincodeView().validate(
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
    } = ServiceabilityValidator.getZoneFromPincodeView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getZoneFromPincodeView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.GetZoneFromPincodeViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getZoneFromPincodeView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Index of the item to start returning with
   * @param {number} [arg.pageSize] - Determines the items to be displayed in a page
   * @param {string[]} [arg.zoneId] - List of zones to query for
   * @param {string} [arg.q] - Search with name as a free text
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<GetZoneFromApplicationIdViewResponse>} - Success response
   * @summary: GET zones from the application_id.
   * @description: This API returns zones from the application_id View.
   */
  async getZonesFromApplicationIdView(
    { pageNo, pageSize, zoneId, q } = {},
    { headers } = { headers: false }
  ) {
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

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.getZonesFromApplicationIdView().validate(
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
        message:
          "Parameter Validation warrnings for getZonesFromApplicationIdView",
      });
      Logger({ level: "WARN", message: warrning });
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
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.GetZoneFromApplicationIdViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getZonesFromApplicationIdView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ServiceabilityPayloadSchema} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ApplicationServiceabilityConfigResponse>} - Success response
   * @summary: Zone configuration of application.
   * @description: This API updates serviceability config of the application.
   */
  async updateApplicationServiceability(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = ServiceabilityValidator.updateApplicationServiceability().validate(
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
    } = ServiceabilityValidator.updateApplicationServiceability().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for updateApplicationServiceability",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/serviceability`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.ApplicationServiceabilityConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for updateApplicationServiceability",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PincodeMopUpdateAuditHistoryRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PincodeMopUpdateAuditHistoryResponseData>} - Success response
   * @summary: Auditlog configuration of application.
   * @description: This API returns Audit logs of Pincode.
   */
  async updatePincodeAuditHistory(
    { body } = {},
    { headers } = { headers: false }
  ) {
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

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.updatePincodeAuditHistory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updatePincodeAuditHistory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/history`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.PincodeMopUpdateAuditHistoryResponseData().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updatePincodeAuditHistory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PincodeMopBulkData} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PincodeBulkViewResponse>} - Success response
   * @summary: Bulk Update of pincode in the application.
   * @description: This API constructs bulk write operations to update the MOP data for each pincode in the payload.
   */
  async updatePincodeBulkView({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.updatePincodeBulkView().validate(
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
    } = ServiceabilityValidator.updatePincodeBulkView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updatePincodeBulkView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pincode-mop-bulk-update`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.PincodeBulkViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updatePincodeBulkView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PincodeCodStatusListingRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PincodeCodStatusListingResponse>} - Success response
   * @summary: Pincode count view of application.
   * @description: This API returns count of active pincode.
   */
  async updatePincodeCoDListing(
    { body } = {},
    { headers } = { headers: false }
  ) {
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

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityValidator.updatePincodeCoDListing().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updatePincodeCoDListing",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pincode-mop-data`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.PincodeCodStatusListingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updatePincodeCoDListing",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PincodeMopData} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<PincodeMOPresponse>} - Success response
   * @summary: PincodeView update of MOP.
   * @description: This API updates Pincode method of payment.
   */
  async updatePincodeMopView({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.updatePincodeMopView().validate(
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
    } = ServiceabilityValidator.updatePincodeMopView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updatePincodeMopView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pincode-mop-update`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.PincodeMOPresponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updatePincodeMopView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SelfShipResponse} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ApplicationSelfShipConfigResponse>} - Success response
   * @summary: Self-ship configuration of application.
   * @description: This API updates Self-ship configuration of the application.
   */
  async updateSelfShip({ body } = {}, { headers } = { headers: false }) {
    const { error } = ServiceabilityValidator.updateSelfShip().validate(
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
    } = ServiceabilityValidator.updateSelfShip().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateSelfShip",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/selfship`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.ApplicationSelfShipConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateSelfShip",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DPApplicationRuleRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DPApplicationRuleResponse>} - Success response
   * @summary: Upsert of DpApplicationRules in database.
   * @description: This API returns response of upsert of DpApplicationRules in mongo database.
   */
  async upsertDpApplicationRules(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const {
      error,
    } = ServiceabilityValidator.upsertDpApplicationRules().validate(
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
    } = ServiceabilityValidator.upsertDpApplicationRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for upsertDpApplicationRules",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/courier/priority`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ServiceabilityModel.DPApplicationRuleResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertDpApplicationRules",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Serviceability;
