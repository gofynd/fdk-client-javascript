const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @param {ServiceabilityPlatformApplicationValidator.CreateCourierPartnerRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRule>} -
   *   Success response
   * @name createCourierPartnerRule
   * @summary: Create Courier Rules.
   * @description: Creates Courier Rules with rule configuration and dp priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerRule/).
   */
  async createCourierPartnerRule(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.createCourierPartnerRule().validate(
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
    } = ServiceabilityPlatformApplicationValidator.createCourierPartnerRule().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > createCourierPartnerRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/courier-partner/rules`,
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
    } = ServiceabilityPlatformModel.CourierPartnerRule().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > createCourierPartnerRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.CreateGeoAreaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GeoAreaResponseBody>} -
   *   Success response
   * @name createGeoArea
   * @summary: Creation of GeoArea
   * @description: Allows to create and manage GeoAreas, representing groups of geographic regions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createGeoArea/).
   */
  async createGeoArea(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.createGeoArea().validate(
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
    } = ServiceabilityPlatformApplicationValidator.createGeoArea().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > createGeoArea \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/geoareas`,
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
    } = ServiceabilityPlatformModel.GeoAreaResponseBody().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > createGeoArea \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.CreateStoreRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.StoreRuleResponseSchema>}
   *   - Success response
   *
   * @name createStoreRules
   * @summary: Create Store Rule
   * @description: Create Store Rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createStoreRules/).
   */
  async createStoreRules(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.createStoreRules().validate(
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
    } = ServiceabilityPlatformApplicationValidator.createStoreRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > createStoreRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store/rules`,
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
    } = ServiceabilityPlatformModel.StoreRuleResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > createStoreRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.CreateZoneParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ZoneResponseV2>} - Success response
   * @name createZone
   * @summary: Create zones defined at the application level
   * @description: Creates a list of zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createZone/).
   */
  async createZone(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.createZone().validate(
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
    } = ServiceabilityPlatformApplicationValidator.createZone().validate(
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

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
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
    } = ServiceabilityPlatformModel.ZoneResponseV2().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > createZone \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.DeleteZoneParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ZoneDeleteSuccessResponse>}
   *   - Success response
   *
   * @name deleteZone
   * @summary: Delete a Specific Zone.
   * @description: Delete a Zone under that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/deleteZone/).
   */
  async deleteZone(
    { zoneId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.deleteZone().validate(
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
    } = ServiceabilityPlatformApplicationValidator.deleteZone().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > deleteZone \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/application/${this.applicationId}/zones/${zoneId}`,
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
    } = ServiceabilityPlatformModel.ZoneDeleteSuccessResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > deleteZone \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetApplicationConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
   *   Success response
   * @name getApplicationConfig
   * @summary: Get Application Configuration
   * @description: Get Application Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationConfig/).
   */
  async getApplicationConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getApplicationConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getApplicationConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getApplicationConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store/configuration`,
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
    } = ServiceabilityPlatformModel.StoreRuleConfigData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getApplicationConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetApplicationConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfig>} -
   *   Success response
   * @name getApplicationConfiguration
   * @summary: Get All Courier Rules applied to application
   * @description: This API returns all the Courier Rules applied to an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationConfiguration/).
   */
  async getApplicationConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getApplicationConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getApplicationConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getApplicationConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
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
    } = ServiceabilityPlatformModel.ApplicationConfig().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getApplicationConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetApplicationServiceabilitySelfShipmentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
   *   - Success response
   *
   * @name getApplicationServiceabilitySelfShipment
   * @summary: Self-ship configuration of application.
   * @description: This API returns Self-ship configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationServiceabilitySelfShipment/).
   */
  async getApplicationServiceabilitySelfShipment(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getApplicationServiceabilitySelfShipment().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getApplicationServiceabilitySelfShipment().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getApplicationServiceabilitySelfShipment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/selfship`,
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
    } = ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getApplicationServiceabilitySelfShipment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRule>} -
   *   Success response
   * @name getCourierPartnerRule
   * @summary: Fetch of Courier Rule.
   * @description: This API returns Courier Rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRule/).
   */
  async getCourierPartnerRule(
    { ruleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getCourierPartnerRule().validate(
      {
        ruleId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getCourierPartnerRule().validate(
      {
        ruleId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getCourierPartnerRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/courier-partner/rules/${ruleId}`,
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
    } = ServiceabilityPlatformModel.CourierPartnerRule().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getCourierPartnerRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnerRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRulesListResponse>}
   *   - Success response
   *
   * @name getCourierPartnerRules
   * @summary: Fetch Courier Rules List
   * @description: This API returns Courier Rules List - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRules/).
   */
  async getCourierPartnerRules(
    { pageNo, pageSize, status, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getCourierPartnerRules().validate(
      {
        pageNo,
        pageSize,
        status,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getCourierPartnerRules().validate(
      {
        pageNo,
        pageSize,
        status,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getCourierPartnerRules \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["status"] = status;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/courier-partner/rules`,
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
    } = ServiceabilityPlatformModel.CourierPartnerRulesListResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getCourierPartnerRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetGeoAreaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GeoAreaResponse>} - Success response
   * @name getGeoArea
   * @summary: Get details of the specific geoarea
   * @description: This API Returns the data of the specific GeoArea which exists on the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getGeoArea/).
   */
  async getGeoArea(
    { geoareaId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getGeoArea().validate(
      {
        geoareaId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getGeoArea().validate(
      {
        geoareaId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getGeoArea \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/geoareas/${geoareaId}`,
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
    } = ServiceabilityPlatformModel.GeoAreaResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getGeoArea \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetGeoAreasParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GeoAreaGetResponseBody>} -
   *   Success response
   * @name getGeoAreas
   * @summary: Get all geoareas in the current application.
   * @description: Retrieves a listing view of created GeoAreas. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getGeoAreas/).
   */
  async getGeoAreas(
    {
      pageSize,
      isActive,
      q,
      countryIsoCode,
      state,
      city,
      pincode,
      sector,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getGeoAreas().validate(
      {
        pageSize,
        isActive,
        q,
        countryIsoCode,
        state,
        city,
        pincode,
        sector,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getGeoAreas().validate(
      {
        pageSize,
        isActive,
        q,
        countryIsoCode,
        state,
        city,
        pincode,
        sector,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getGeoAreas \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["is_active"] = isActive;
    query_params["q"] = q;
    query_params["country_iso_code"] = countryIsoCode;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["pincode"] = pincode;
    query_params["sector"] = sector;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/geoareas`,
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
    } = ServiceabilityPlatformModel.GeoAreaGetResponseBody().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getGeoAreas \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetStoreRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.StoreRuleDataSchema>} -
   *   Success response
   * @name getStoreRule
   * @summary: Get Single Store Rule
   * @description: Get Single Store Rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRule/).
   */
  async getStoreRule(
    { ruleUid, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getStoreRule().validate(
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
    } = ServiceabilityPlatformApplicationValidator.getStoreRule().validate(
      {
        ruleUid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getStoreRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store/rules/${ruleUid}`,
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
    } = ServiceabilityPlatformModel.StoreRuleDataSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getStoreRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetStoreRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GetStoreRulesApiResponse>}
   *   - Success response
   *
   * @name getStoreRules
   * @summary: Get Multiple Store Rules
   * @description: Get Multiple Store Rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRules/).
   */
  async getStoreRules(
    { pageNo, pageSize, status, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getStoreRules().validate(
      {
        pageNo,
        pageSize,
        status,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getStoreRules().validate(
      {
        pageNo,
        pageSize,
        status,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getStoreRules \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["status"] = status;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store/rules`,
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
    } = ServiceabilityPlatformModel.GetStoreRulesApiResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getStoreRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetZoneParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>} -
   *   Success response
   * @name getZone
   * @summary: Get details of the Zone
   * @description: Retrieves the region, application, store mapping and other details in the Zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZone/).
   */
  async getZone(
    { zoneId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getZone().validate(
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
    } = ServiceabilityPlatformApplicationValidator.getZone().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getZone \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/application/${this.applicationId}/zones/${zoneId}`,
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
    } = ServiceabilityPlatformModel.GetZoneByIdSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getZone \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.GetZonesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ListViewResponseV2>} -
   *   Success response
   * @name getZones
   * @summary: Shows zones defined at the application level
   * @description: Displays the list of zones defined at the application level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZones/).
   */
  async getZones(
    {
      stage,
      pageSize,
      zoneIds,
      isActive,
      q,
      country,
      countryIsoCode,
      pincode,
      state,
      city,
      sector,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.getZones().validate(
      {
        stage,
        pageSize,
        zoneIds,
        isActive,
        q,
        country,
        countryIsoCode,
        pincode,
        state,
        city,
        sector,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformApplicationValidator.getZones().validate(
      {
        stage,
        pageSize,
        zoneIds,
        isActive,
        q,
        country,
        countryIsoCode,
        pincode,
        state,
        city,
        sector,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getZones \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["stage"] = stage;
    query_params["page_size"] = pageSize;
    query_params["zone_ids"] = zoneIds;
    query_params["is_active"] = isActive;
    query_params["q"] = q;
    query_params["country"] = country;
    query_params["country_iso_code"] = countryIsoCode;
    query_params["pincode"] = pincode;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["sector"] = sector;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
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
    } = ServiceabilityPlatformModel.ListViewResponseV2().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getZones \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.InsertApplicationConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
   *   Success response
   * @name insertApplicationConfig
   * @summary: Insert Application Configuration
   * @description: Insert Application Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/insertApplicationConfig/).
   */
  async insertApplicationConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.insertApplicationConfig().validate(
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
    } = ServiceabilityPlatformApplicationValidator.insertApplicationConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > insertApplicationConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store/configuration`,
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
    } = ServiceabilityPlatformModel.StoreRuleConfigData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > insertApplicationConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.PatchApplicationConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfigPatchResponse>}
   *   - Success response
   *
   * @name patchApplicationConfiguration
   * @summary: To patch any config which can be applied to application.
   * @description: Apply configs to application and for reference, refer to examples - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/patchApplicationConfiguration/).
   */
  async patchApplicationConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.patchApplicationConfiguration().validate(
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
    } = ServiceabilityPlatformApplicationValidator.patchApplicationConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > patchApplicationConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
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
    } = ServiceabilityPlatformModel.ApplicationConfigPatchResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > patchApplicationConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.PatchApplicationServiceabilitySelfShipmentParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
   *   - Success response
   *
   * @name patchApplicationServiceabilitySelfShipment
   * @summary: Self-ship configuration of application.
   * @description: This API updates Self-ship configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/patchApplicationServiceabilitySelfShipment/).
   */
  async patchApplicationServiceabilitySelfShipment(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.patchApplicationServiceabilitySelfShipment().validate(
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
    } = ServiceabilityPlatformApplicationValidator.patchApplicationServiceabilitySelfShipment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > patchApplicationServiceabilitySelfShipment \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/selfship`,
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
    } = ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > patchApplicationServiceabilitySelfShipment \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdateApplicationConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfig>} -
   *   Success response
   * @name updateApplicationConfiguration
   * @summary: Apply configuration to an application
   * @description: Apply configuration to application to set DP rules and Zone configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateApplicationConfiguration/).
   */
  async updateApplicationConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updateApplicationConfiguration().validate(
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
    } = ServiceabilityPlatformApplicationValidator.updateApplicationConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateApplicationConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
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
    } = ServiceabilityPlatformModel.ApplicationConfig().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateApplicationConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdateCourierPartnerRulePriorityParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.RulePriorityResponse>} -
   *   Success response
   * @name updateCourierPartnerRulePriority
   * @summary: Updates Courier Partner Rules Priority for a sales channel
   * @description: Updates Courier Partner Rules Priority for a sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerRulePriority/).
   */
  async updateCourierPartnerRulePriority(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updateCourierPartnerRulePriority().validate(
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
    } = ServiceabilityPlatformApplicationValidator.updateCourierPartnerRulePriority().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateCourierPartnerRulePriority \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/courier-partner/rules/priority`,
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
    } = ServiceabilityPlatformModel.RulePriorityResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateCourierPartnerRulePriority \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdateCourierRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRule>} -
   *   Success response
   * @name updateCourierRule
   * @summary: Updating of Courier Rule.
   * @description: This API updates and returns Courier Rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierRule/).
   */
  async updateCourierRule(
    { ruleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updateCourierRule().validate(
      {
        ruleId,
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
    } = ServiceabilityPlatformApplicationValidator.updateCourierRule().validate(
      {
        ruleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateCourierRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/courier-partner/rules/${ruleId}`,
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
    } = ServiceabilityPlatformModel.CourierPartnerRule().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateCourierRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdateGeoAreaParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GeoAreaPutResponseBody>} -
   *   Success response
   * @name updateGeoArea
   * @summary: Update the details of existing GeoArea
   * @description: Updates the GeoArea with a new name, regions, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateGeoArea/).
   */
  async updateGeoArea(
    { geoareaId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updateGeoArea().validate(
      {
        geoareaId,

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
    } = ServiceabilityPlatformApplicationValidator.updateGeoArea().validate(
      {
        geoareaId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateGeoArea \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/geoareas/${geoareaId}`,
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
    } = ServiceabilityPlatformModel.GeoAreaPutResponseBody().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateGeoArea \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>}
   *   - Success response
   *
   * @name updatePincodeAuditHistory
   * @summary: Update pincode audit history.
   * @description: Modify and update audit history records for pincode-related activities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeAuditHistory/).
   */
  async updatePincodeAuditHistory(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
    } = ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updatePincodeAuditHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>}
   *   - Success response
   *
   * @name updatePincodeBulkView
   * @summary: Update pincode bulk view.
   * @description: Modify and update views related to bulk operations on pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeBulkView/).
   */
  async updatePincodeBulkView(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
    } = ServiceabilityPlatformModel.PincodeBulkViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updatePincodeBulkView \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>}
   *   - Success response
   *
   * @name updatePincodeCoDListing
   * @summary: Update pincode CoD (Cash on Delivery) listing.
   * @description: Modify and update listings for CoD based on pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeCoDListing/).
   */
  async updatePincodeCoDListing(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
    } = ServiceabilityPlatformModel.PincodeCodStatusListingResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updatePincodeCoDListing \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PincodeMOPresponse>} -
   *   Success response
   * @name updatePincodeMopView
   * @summary: Update pincode MOP (Mode of Payment) view.
   * @description: Modify and update views related to pincode MOP. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeMopView/).
   */
  async updatePincodeMopView(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
    } = ServiceabilityPlatformModel.PincodeMOPresponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updatePincodeMopView \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdateStoreRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.StoreRuleUpdateResponseSchema>}
   *   - Success response
   *
   * @name updateStoreRules
   * @summary: Update Store Rule
   * @description: Update Store Rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRules/).
   */
  async updateStoreRules(
    { ruleUid, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updateStoreRules().validate(
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
    } = ServiceabilityPlatformApplicationValidator.updateStoreRules().validate(
      {
        ruleUid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateStoreRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store/rules/${ruleUid}`,
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
    } = ServiceabilityPlatformModel.StoreRuleUpdateResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateStoreRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdateStoreRulesConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
   *   Success response
   * @name updateStoreRulesConfig
   * @summary: Update Store Rule Configuration
   * @description: Update Store Rule Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRulesConfig/).
   */
  async updateStoreRulesConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updateStoreRulesConfig().validate(
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
    } = ServiceabilityPlatformApplicationValidator.updateStoreRulesConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateStoreRulesConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store/configuration`,
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
    } = ServiceabilityPlatformModel.StoreRuleConfigData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateStoreRulesConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformApplicationValidator.UpdateZoneParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ZoneUpdateSuccessResponse>}
   *   - Success response
   *
   * @name updateZone
   * @summary: Update details of a Zone to enable or disable.
   * @description: Enable or Disable a Zone under that application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateZone/).
   */
  async updateZone(
    { zoneId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformApplicationValidator.updateZone().validate(
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
    } = ServiceabilityPlatformApplicationValidator.updateZone().validate(
      {
        zoneId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateZone \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/application/${this.applicationId}/zones/${zoneId}`,
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
    } = ServiceabilityPlatformModel.ZoneUpdateSuccessResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateZone \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Serviceability;
