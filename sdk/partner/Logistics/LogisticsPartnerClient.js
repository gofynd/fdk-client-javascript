const PartnerAPIClient = require("../PartnerAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const LogisticsPartnerValidator = require("./LogisticsPartnerValidator");
const LogisticsPartnerModel = require("./LogisticsPartnerModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Logistics {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {LogisticsPartnerValidator.SampleFileServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResultItemData>}
   *   - Success response
   *
   * @name sampleFileServiceability
   * @summary: Sample File Download
   * @description: Sample File Download - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/sampleFileServiceability/).
   */
  async sampleFileServiceability(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.sampleFileServiceability().validate(
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
    } = LogisticsPartnerValidator.sampleFileServiceability().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > sampleFileServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/localities/bulk-sample`,
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
    } = LogisticsPartnerModel.BulkRegionServiceabilityTatResultItemData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > sampleFileServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetSampleFileServiceabilityStatusParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResult>}
   *   - Success response
   *
   * @name getSampleFileServiceabilityStatus
   * @summary: Get Serviceability TAT sample files generator status
   * @description: Get Serviceability TAT sample file generator status - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getSampleFileServiceabilityStatus/).
   */
  async getSampleFileServiceabilityStatus(
    { pageNo, pageSize, batchId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getSampleFileServiceabilityStatus().validate(
      {
        pageNo,
        pageSize,
        batchId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getSampleFileServiceabilityStatus().validate(
      {
        pageNo,
        pageSize,
        batchId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getSampleFileServiceabilityStatus \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["batch_id"] = batchId;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/localities/bulk-sample`,
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
    } = LogisticsPartnerModel.BulkRegionServiceabilityTatResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getSampleFileServiceabilityStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.BulkTatParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionResultItemData>} -
   *   Success response
   * @name bulkTat
   * @summary: Region TAT Import or Export
   * @description: Region TAT Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/bulkTat/).
   */
  async bulkTat(
    { extensionId, schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.bulkTat().validate(
      {
        extensionId,
        schemeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticsPartnerValidator.bulkTat().validate(
      {
        extensionId,
        schemeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > bulkTat \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/tat`,
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
    } = LogisticsPartnerModel.BulkRegionResultItemData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > bulkTat \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetBulkTatParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionResult>} - Success response
   * @name getBulkTat
   * @summary: Get region tat bulk history
   * @description: Get region tat bulk history - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getBulkTat/).
   */
  async getBulkTat(
    {
      extensionId,
      schemeId,
      pageNo,
      pageSize,
      batchId,
      action,
      status,
      country,
      region,
      startDate,
      endDate,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getBulkTat().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        country,
        region,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticsPartnerValidator.getBulkTat().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        country,
        region,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getBulkTat \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["batch_id"] = batchId;
    query_params["action"] = action;
    query_params["status"] = status;
    query_params["country"] = country;
    query_params["region"] = region;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/tat`,
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
    } = LogisticsPartnerModel.BulkRegionResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getBulkTat \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.CreateDeliveryTimeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RegionTatResult>} - Success response
   * @name createDeliveryTime
   * @summary: Region based delivery time insert
   * @description: Insert the region based delivery time for a specific region within a courier partner scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createDeliveryTime/).
   */
  async createDeliveryTime(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      body,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.createDeliveryTime().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
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
    } = LogisticsPartnerValidator.createDeliveryTime().validate(
      { partnerOrgId, courierPartnerExtensionId, schemeId, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > createDeliveryTime \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/delivery-time`,
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
    } = LogisticsPartnerModel.RegionTatResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > createDeliveryTime \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetDeliveryTimesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RegionTatItemResult>} - Success response
   * @name getDeliveryTimes
   * @summary: Get region based delivery time list
   * @description: Retrieve a list of delivery time for specific regions within a courier partner scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getDeliveryTimes/).
   */
  async getDeliveryTimes(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      pageNo,
      pageSize,
      fromCountryCode,
      fromStateCode,
      fromCityCode,
      fromSectorCode,
      fromPincode,
      toCountryCode,
      toStateCode,
      toCityCode,
      toSectorCode,
      toPincode,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getDeliveryTimes().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
        pageNo,
        pageSize,
        fromCountryCode,
        fromStateCode,
        fromCityCode,
        fromSectorCode,
        fromPincode,
        toCountryCode,
        toStateCode,
        toCityCode,
        toSectorCode,
        toPincode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getDeliveryTimes().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
        pageNo,
        pageSize,
        fromCountryCode,
        fromStateCode,
        fromCityCode,
        fromSectorCode,
        fromPincode,
        toCountryCode,
        toStateCode,
        toCityCode,
        toSectorCode,
        toPincode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getDeliveryTimes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["from_country_code"] = fromCountryCode;
    query_params["from_state_code"] = fromStateCode;
    query_params["from_city_code"] = fromCityCode;
    query_params["from_sector_code"] = fromSectorCode;
    query_params["from_pincode"] = fromPincode;
    query_params["to_country_code"] = toCountryCode;
    query_params["to_state_code"] = toStateCode;
    query_params["to_city_code"] = toCityCode;
    query_params["to_sector_code"] = toSectorCode;
    query_params["to_pincode"] = toPincode;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/delivery-time`,
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
    } = LogisticsPartnerModel.RegionTatItemResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getDeliveryTimes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetDeliveryTimeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RegionTatResult>} - Success response
   * @name getDeliveryTime
   * @summary: Get region based delivery time for a given identifier
   * @description: Retrieve the delivery time details for a specific region within a courier partner scheme using the unique delivery time record identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getDeliveryTime/).
   */
  async getDeliveryTime(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      id,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getDeliveryTime().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
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
    } = LogisticsPartnerValidator.getDeliveryTime().validate(
      { partnerOrgId, courierPartnerExtensionId, schemeId, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getDeliveryTime \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/delivery-time/${id}`,
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
    } = LogisticsPartnerModel.RegionTatResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getDeliveryTime \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.UpdateDeliveryTimeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RegionTatResult>} - Success response
   * @name updateDeliveryTime
   * @summary: Region based delivery time update
   * @description: Update the delivery time details for a specific region within a courier partner scheme using the unique delivery time record identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateDeliveryTime/).
   */
  async updateDeliveryTime(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      id,
      body,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.updateDeliveryTime().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
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
    } = LogisticsPartnerValidator.updateDeliveryTime().validate(
      { partnerOrgId, courierPartnerExtensionId, schemeId, id, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > updateDeliveryTime \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/delivery-time/${id}`,
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
    } = LogisticsPartnerModel.RegionTatResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > updateDeliveryTime \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.DeleteDeliveryTimeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RegionTatResult>} - Success response
   * @name deleteDeliveryTime
   * @summary: Region based delivery time delete
   * @description: Delete the delivery time record for a specific region within a courier partner scheme using the unique delivery time record identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/deleteDeliveryTime/).
   */
  async deleteDeliveryTime(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      id,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.deleteDeliveryTime().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
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
    } = LogisticsPartnerValidator.deleteDeliveryTime().validate(
      { partnerOrgId, courierPartnerExtensionId, schemeId, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > deleteDeliveryTime \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/delivery-time/${id}`,
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
    } = LogisticsPartnerModel.RegionTatResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > deleteDeliveryTime \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.CreateServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RegionServiceabilityResult>} -
   *   Success response
   * @name createServiceability
   * @summary: Serviceability insert
   * @description: Insert the serviceability for a specific region within a courier partner scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createServiceability/).
   */
  async createServiceability(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      body,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.createServiceability().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
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
    } = LogisticsPartnerValidator.createServiceability().validate(
      { partnerOrgId, courierPartnerExtensionId, schemeId, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > createServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/serviceability`,
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
    } = LogisticsPartnerModel.RegionServiceabilityResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > createServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetServiceabilitiesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RegionServiceabilityItemResult>}
   *   - Success response
   *
   * @name getServiceabilities
   * @summary: Get region serviceability list
   * @description: Retrieve a list of serviceability for specific regions within a courier partner scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getServiceabilities/).
   */
  async getServiceabilities(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      pageNo,
      pageSize,
      countryCode,
      stateCode,
      cityCode,
      sectorCode,
      pincode,
      firstMile,
      lastMile,
      doorstepReturn,
      doorstepQc,
      installation,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getServiceabilities().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
        pageNo,
        pageSize,
        countryCode,
        stateCode,
        cityCode,
        sectorCode,
        pincode,
        firstMile,
        lastMile,
        doorstepReturn,
        doorstepQc,
        installation,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getServiceabilities().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
        pageNo,
        pageSize,
        countryCode,
        stateCode,
        cityCode,
        sectorCode,
        pincode,
        firstMile,
        lastMile,
        doorstepReturn,
        doorstepQc,
        installation,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getServiceabilities \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["country_code"] = countryCode;
    query_params["state_code"] = stateCode;
    query_params["city_code"] = cityCode;
    query_params["sector_code"] = sectorCode;
    query_params["pincode"] = pincode;
    query_params["first_mile"] = firstMile;
    query_params["last_mile"] = lastMile;
    query_params["doorstep_return"] = doorstepReturn;
    query_params["doorstep_qc"] = doorstepQc;
    query_params["installation"] = installation;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/serviceability`,
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
    } = LogisticsPartnerModel.RegionServiceabilityItemResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getServiceabilities \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RegionServiceabilityResult>} -
   *   Success response
   * @name getServiceability
   * @summary: Get region serviceability
   * @description: Retrieve serviceability for specific region within a courier partner scheme for a given identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getServiceability/).
   */
  async getServiceability(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      id,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getServiceability().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
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
    } = LogisticsPartnerValidator.getServiceability().validate(
      { partnerOrgId, courierPartnerExtensionId, schemeId, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/serviceability/${id}`,
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
    } = LogisticsPartnerModel.RegionServiceabilityResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.UpdateServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.ServiceabilityDetailsResult>} -
   *   Success response
   * @name updateServiceability
   * @summary: Serviceability update
   * @description: Update the serviceability for a specific region within a courier partner scheme based on unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateServiceability/).
   */
  async updateServiceability(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      id,
      body,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.updateServiceability().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
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
    } = LogisticsPartnerValidator.updateServiceability().validate(
      { partnerOrgId, courierPartnerExtensionId, schemeId, id, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > updateServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/serviceability/${id}`,
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
    } = LogisticsPartnerModel.ServiceabilityDetailsResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > updateServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.DeleteServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RegionServiceabilityResult>} -
   *   Success response
   * @name deleteServiceability
   * @summary: Serviceability delete
   * @description: Delete the serviceability for a specific region within a courier partner scheme based on a unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/deleteServiceability/).
   */
  async deleteServiceability(
    {
      partnerOrgId,
      courierPartnerExtensionId,
      schemeId,
      id,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.deleteServiceability().validate(
      {
        partnerOrgId,
        courierPartnerExtensionId,
        schemeId,
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
    } = LogisticsPartnerValidator.deleteServiceability().validate(
      { partnerOrgId, courierPartnerExtensionId, schemeId, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > deleteServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/logistics/v2.0/organization/${partnerOrgId}/courier-partner/${courierPartnerExtensionId}/scheme/${schemeId}/serviceability/${id}`,
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
    } = LogisticsPartnerModel.RegionServiceabilityResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > deleteServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.BulkServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionResultItemData>} -
   *   Success response
   * @name bulkServiceability
   * @summary: Serviceability Import or Export
   * @description: Serviceability Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/bulkServiceability/).
   */
  async bulkServiceability(
    { extensionId, schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.bulkServiceability().validate(
      {
        extensionId,
        schemeId,
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
    } = LogisticsPartnerValidator.bulkServiceability().validate(
      {
        extensionId,
        schemeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > bulkServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/bulk`,
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
    } = LogisticsPartnerModel.BulkRegionResultItemData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > bulkServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetBulkServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionResult>} - Success response
   * @name getBulkServiceability
   * @summary: Get Region Serviceability Bulk History
   * @description: Get Region Serviceability Bulk History - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getBulkServiceability/).
   */
  async getBulkServiceability(
    {
      extensionId,
      schemeId,
      pageNo,
      pageSize,
      batchId,
      action,
      status,
      country,
      region,
      startDate,
      endDate,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getBulkServiceability().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        country,
        region,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getBulkServiceability().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        country,
        region,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getBulkServiceability \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["batch_id"] = batchId;
    query_params["action"] = action;
    query_params["status"] = status;
    query_params["country"] = country;
    query_params["region"] = region;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/bulk`,
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
    } = LogisticsPartnerModel.BulkRegionResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getBulkServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.CreateCourierPartnerAccountParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierAccount>} - Success response
   * @name createCourierPartnerAccount
   * @summary: Creation of Courier Account
   * @description: This API Creates a new Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createCourierPartnerAccount/).
   */
  async createCourierPartnerAccount(
    { companyId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.createCourierPartnerAccount().validate(
      {
        companyId,
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
    } = LogisticsPartnerValidator.createCourierPartnerAccount().validate(
      {
        companyId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > createCourierPartnerAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/company/${companyId}/courier-partner/account`,
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
    } = LogisticsPartnerModel.CourierAccount().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > createCourierPartnerAccount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetCourierPartnerAccountsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CompanyCourierPartnerAccountListResult>}
   *   - Success response
   *
   * @name getCourierPartnerAccounts
   * @summary: Getting Courier Account list of a company
   * @description: This API returns Courier Account of a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerAccounts/).
   */
  async getCourierPartnerAccounts(
    {
      companyId,
      pageNo,
      pageSize,
      stage,
      paymentMode,
      transportType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getCourierPartnerAccounts().validate(
      {
        companyId,
        pageNo,
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
    } = LogisticsPartnerValidator.getCourierPartnerAccounts().validate(
      {
        companyId,
        pageNo,
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
        message: `Parameter Validation warrnings for partner > Logistics > getCourierPartnerAccounts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["stage"] = stage;
    query_params["payment_mode"] = paymentMode;
    query_params["transport_type"] = transportType;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/company/${companyId}/courier-partner/account`,
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
    } = LogisticsPartnerModel.CompanyCourierPartnerAccountListResult().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getCourierPartnerAccounts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.UpdateCourierPartnerAccountParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierAccountResult>} - Success response
   * @name updateCourierPartnerAccount
   * @summary: Update Courier Account in database
   * @description: Updates Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateCourierPartnerAccount/).
   */
  async updateCourierPartnerAccount(
    { companyId, accountId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.updateCourierPartnerAccount().validate(
      {
        companyId,
        accountId,
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
    } = LogisticsPartnerValidator.updateCourierPartnerAccount().validate(
      {
        companyId,
        accountId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > updateCourierPartnerAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/company/${companyId}/courier-partner/account/${accountId}`,
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
    } = LogisticsPartnerModel.CourierAccountResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > updateCourierPartnerAccount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetCourierPartnerAccountParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierAccountResult>} - Success response
   * @name getCourierPartnerAccount
   * @summary: Getting Courier Account of a company from database
   * @description: This API returns response DpAccount of a company from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerAccount/).
   */
  async getCourierPartnerAccount(
    { companyId, accountId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getCourierPartnerAccount().validate(
      {
        companyId,
        accountId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getCourierPartnerAccount().validate(
      {
        companyId,
        accountId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getCourierPartnerAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/company/${companyId}/courier-partner/account/${accountId}`,
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
    } = LogisticsPartnerModel.CourierAccountResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getCourierPartnerAccount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.CreateCourierPartnerSchemeParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierPartnerSchemeModel>} -
   *   Success response
   * @name createCourierPartnerScheme
   * @summary: Create Scheme for courier partner extension
   * @description: Create Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createCourierPartnerScheme/).
   */
  async createCourierPartnerScheme(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.createCourierPartnerScheme().validate(
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
    } = LogisticsPartnerValidator.createCourierPartnerScheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > createCourierPartnerScheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/scheme/`,
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
    } = LogisticsPartnerModel.CourierPartnerSchemeModel().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > createCourierPartnerScheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.UpdateCourierPartnerSchemeParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierPartnerSchemeUpdateDetails>}
   *   - Success response
   *
   * @name updateCourierPartnerScheme
   * @summary: Update Scheme for courier partner extension
   * @description: Update Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateCourierPartnerScheme/).
   */
  async updateCourierPartnerScheme(
    { schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.updateCourierPartnerScheme().validate(
      {
        schemeId,
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
    } = LogisticsPartnerValidator.updateCourierPartnerScheme().validate(
      {
        schemeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > updateCourierPartnerScheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/scheme/${schemeId}`,
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
    } = LogisticsPartnerModel.CourierPartnerSchemeUpdateDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > updateCourierPartnerScheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetCountriesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.GetCountries>} - Success response
   * @name getCountries
   * @summary: Get all countries and associated data
   * @description: Retrieve of all countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCountries/).
   */
  async getCountries(
    { onboarding, pageNo, pageSize, q, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getCountries().validate(
      {
        onboarding,
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
    } = LogisticsPartnerValidator.getCountries().validate(
      {
        onboarding,
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getCountries \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["onboarding"] = onboarding;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/countries`,
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
    } = LogisticsPartnerModel.GetCountries().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getCountries \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = Logistics;
