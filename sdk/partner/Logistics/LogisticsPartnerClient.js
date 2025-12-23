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
   * @description: Sample File Download - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/sampleFileServiceability/).
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
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/localities/bulk-sample`,
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
   * @description: Get Serviceability TAT sample file generator status - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getSampleFileServiceabilityStatus/).
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
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/localities/bulk-sample`,
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
   * @description: Region TAT Import or Export - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/bulkTat/).
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
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/tat`,
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
   * @description: Get region tat bulk history - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getBulkTat/).
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
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/tat`,
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
   * @description: Insert the region based delivery time for a specific region within a courier partner scheme. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/createDeliveryTime/).
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
   * @description: Retrieve a list of delivery time for specific regions within a courier partner scheme. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getDeliveryTimes/).
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
   * @description: Retrieve the delivery time details for a specific region within a courier partner scheme using the unique delivery time record identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getDeliveryTime/).
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
   * @description: Update the delivery time details for a specific region within a courier partner scheme using the unique delivery time record identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/updateDeliveryTime/).
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
   * @description: Delete the delivery time record for a specific region within a courier partner scheme using the unique delivery time record identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/deleteDeliveryTime/).
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
   * @description: Insert the serviceability for a specific region within a courier partner scheme. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/createServiceability/).
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
   * @description: Retrieve a list of serviceability for specific regions within a courier partner scheme. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getServiceabilities/).
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
   * @description: Retrieve serviceability for specific region within a courier partner scheme for a given identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getServiceability/).
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
   * @description: Update the serviceability for a specific region within a courier partner scheme based on unique identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/updateServiceability/).
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
   * @description: Delete the serviceability for a specific region within a courier partner scheme based on a unique identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/deleteServiceability/).
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
   * @description: Serviceability Import or Export - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/bulkServiceability/).
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
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/bulk`,
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
   * @description: Get Region Serviceability Bulk History - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getBulkServiceability/).
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
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/bulk`,
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
   * @returns {Promise<LogisticsPartnerModel.CourierAccountDetailsBody>} -
   *   Success response
   * @name createCourierPartnerAccount
   * @summary: Create courier account
   * @description: Retrieves a list of courier partner accounts. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/createCourierPartnerAccount/).
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
    } = LogisticsPartnerModel.CourierAccountDetailsBody().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: List courier accounts
   * @description: Retrieves a list of courier partner accounts. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getCourierPartnerAccounts/).
   */
  async getCourierPartnerAccounts(
    {
      companyId,
      pageNo,
      pageSize,
      stage,
      paymentMode,
      transportType,
      accountIds,
      selfShip,
      ownAccount,
      q,
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
        accountIds,
        selfShip,
        ownAccount,
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
    } = LogisticsPartnerValidator.getCourierPartnerAccounts().validate(
      {
        companyId,
        pageNo,
        pageSize,
        stage,
        paymentMode,
        transportType,
        accountIds,
        selfShip,
        ownAccount,
        q,
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
    query_params["account_ids"] = accountIds;
    query_params["self_ship"] = selfShip;
    query_params["own_account"] = ownAccount;
    query_params["q"] = q;

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
   * @returns {Promise<LogisticsPartnerModel.CourierAccountDetailsBody>} -
   *   Success response
   * @name updateCourierPartnerAccount
   * @summary: Update courier account
   * @description: Updates an existing courier partner account. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/updateCourierPartnerAccount/).
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
    } = LogisticsPartnerModel.CourierAccountDetailsBody().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @summary: Get courier account
   * @description: Retrieves a single courier partner account. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getCourierPartnerAccount/).
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
   * @param {LogisticsPartnerValidator.GetCountriesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.GetCountries>} - Success response
   * @name getCountries
   * @summary: Get all countries and associated data
   * @description: Retrieve a list of countries for logistical purposes. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getCountries/).
   */
  async getCountries(
    { onboard, pageNo, pageSize, q, hierarchy, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getCountries().validate(
      {
        onboard,
        pageNo,
        pageSize,
        q,
        hierarchy,
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
        onboard,
        pageNo,
        pageSize,
        q,
        hierarchy,
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
    query_params["onboard"] = onboard;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["hierarchy"] = hierarchy;

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

  /**
   * @param {LogisticsPartnerValidator.CreateCourierPartnerSchemeParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierPartnerSchemeModelSchema>}
   *   - Success response
   *
   * @name createCourierPartnerScheme
   * @summary: Create Scheme for courier partner extension
   * @description: Create Scheme for courier partner extension - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/createCourierPartnerScheme/).
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
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/courier-partner/scheme`,
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
    } = LogisticsPartnerModel.CourierPartnerSchemeModelSchema().validate(
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
   * @param {LogisticsPartnerValidator.GetCourierPartnerSchemesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierPartnerSchemeList>} -
   *   Success response
   * @name getCourierPartnerSchemes
   * @summary: Get created Schemes for courier partner
   * @description: Get created Schemes for courier partner - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getCourierPartnerSchemes/).
   */
  async getCourierPartnerSchemes(
    { schemeType, paymentMode, capabilities, schemeIds, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getCourierPartnerSchemes().validate(
      {
        schemeType,
        paymentMode,
        capabilities,
        schemeIds,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getCourierPartnerSchemes().validate(
      {
        schemeType,
        paymentMode,
        capabilities,
        schemeIds,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getCourierPartnerSchemes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["scheme_type"] = schemeType;
    query_params["payment_mode"] = paymentMode;
    query_params["capabilities"] = capabilities;
    query_params["scheme_ids"] = schemeIds;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/courier-partner/scheme`,
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
    } = LogisticsPartnerModel.CourierPartnerSchemeList().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getCourierPartnerSchemes \n ${res_error}`,
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
   * @returns {Promise<LogisticsPartnerModel.CourierPartnerPutSchema>} -
   *   Success response
   * @name updateCourierPartnerScheme
   * @summary: Update Scheme for courier partner extension
   * @description: Update Scheme for courier partner extension - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/updateCourierPartnerScheme/).
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
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/courier-partner/scheme/${schemeId}`,
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
    } = LogisticsPartnerModel.CourierPartnerPutSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

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
   * @param {LogisticsPartnerValidator.GetCourierPartnerSchemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierPartnerSchemeModelSchema>}
   *   - Success response
   *
   * @name getCourierPartnerScheme
   * @summary: Get Scheme for courier partner extension by Id
   * @description: Update Scheme for courier partner extension by Id - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getCourierPartnerScheme/).
   */
  async getCourierPartnerScheme(
    { schemeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getCourierPartnerScheme().validate(
      {
        schemeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getCourierPartnerScheme().validate(
      {
        schemeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getCourierPartnerScheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v2.0/organization/${this.config.organizationId}/courier-partner/scheme/${schemeId}`,
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
    } = LogisticsPartnerModel.CourierPartnerSchemeModelSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getCourierPartnerScheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetSampleFileRateCardParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RateCardSampleFile>} - Success response
   * @name getSampleFileRateCard
   * @summary: Retrieves a sample file that shows the required format for rate card uploads.
   * @description: Retrieves a downloadable sample file template for bulk rate card uploads. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getSampleFileRateCard/).
   */
  async getSampleFileRateCard(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getSampleFileRateCard().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getSampleFileRateCard().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getSampleFileRateCard \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/rate-card/sample-file`,
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
    } = LogisticsPartnerModel.RateCardSampleFile().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getSampleFileRateCard \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.BulkRateCardParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRateCardJob>} - Success response
   * @name bulkRateCard
   * @summary: Rate Card Import or Export
   * @description: Rate Card Import or Export - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/bulkRateCard/).
   */
  async bulkRateCard(
    { extensionId, schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.bulkRateCard().validate(
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
    } = LogisticsPartnerValidator.bulkRateCard().validate(
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
        message: `Parameter Validation warrnings for partner > Logistics > bulkRateCard \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/rate-card/bulk`,
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
    } = LogisticsPartnerModel.BulkRateCardJob().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > bulkRateCard \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetBulkRateCardParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRateCardJob>} - Success response
   * @name getBulkRateCard
   * @summary: Retrieve the history of bulk rate card uploads.
   * @description: Returns the history of all bulk rate card upload operations, including their statuses and details. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getBulkRateCard/).
   */
  async getBulkRateCard(
    {
      extensionId,
      schemeId,
      pageNo,
      pageSize,
      batchId,
      action,
      status,
      startDate,
      endDate,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getBulkRateCard().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
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
    } = LogisticsPartnerValidator.getBulkRateCard().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getBulkRateCard \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["batch_id"] = batchId;
    query_params["action"] = action;
    query_params["status"] = status;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/rate-card/bulk`,
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
    } = LogisticsPartnerModel.BulkRateCardJob().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getBulkRateCard \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetSampleFileRateZoneParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRateCardJob>} - Success response
   * @name getSampleFileRateZone
   * @summary: Get Rate Zone sample file
   * @description: Retrieves a downloadable sample file template for bulk rate zone uploads. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getSampleFileRateZone/).
   */
  async getSampleFileRateZone(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getSampleFileRateZone().validate(
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
    } = LogisticsPartnerValidator.getSampleFileRateZone().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getSampleFileRateZone \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/rate-card/zone/sample-file`,
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
    } = LogisticsPartnerModel.BulkRateCardJob().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getSampleFileRateZone \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.CreateRateZoneBulkJobParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRateCardJob>} - Success response
   * @name createRateZoneBulkJob
   * @summary: Rate Zone Import or Export
   * @description: Performs bulk import or export of rate zone details. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/createRateZoneBulkJob/).
   */
  async createRateZoneBulkJob(
    { extensionId, schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.createRateZoneBulkJob().validate(
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
    } = LogisticsPartnerValidator.createRateZoneBulkJob().validate(
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
        message: `Parameter Validation warrnings for partner > Logistics > createRateZoneBulkJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/rate-card/zone/bulk`,
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
    } = LogisticsPartnerModel.BulkRateCardJob().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > createRateZoneBulkJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetBulkRateZoneJobHistoryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RateZoneBulkJobList>} - Success response
   * @name getBulkRateZoneJobHistory
   * @summary: Get Rate Zone Bulk History
   * @description: Retrieves the bulk job history for rate zone import and export operations. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getBulkRateZoneJobHistory/).
   */
  async getBulkRateZoneJobHistory(
    {
      extensionId,
      schemeId,
      pageNo,
      pageSize,
      batchId,
      action,
      status,
      zoneType,
      startDate,
      endDate,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getBulkRateZoneJobHistory().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        zoneType,
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
    } = LogisticsPartnerValidator.getBulkRateZoneJobHistory().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        zoneType,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getBulkRateZoneJobHistory \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["batch_id"] = batchId;
    query_params["action"] = action;
    query_params["status"] = status;
    query_params["zone_type"] = zoneType;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/rate-card/zone/bulk`,
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
    } = LogisticsPartnerModel.RateZoneBulkJobList().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getBulkRateZoneJobHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetRateZoneConfigParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RateZoneConfigurationDetails>} -
   *   Success response
   * @name getRateZoneConfig
   * @summary: Fetch Rate Zone Configuration
   * @description: Fetch Rate Zone Configuration - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/getRateZoneConfig/).
   */
  async getRateZoneConfig(
    { extensionId, schemeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getRateZoneConfig().validate(
      {
        extensionId,
        schemeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getRateZoneConfig().validate(
      {
        extensionId,
        schemeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getRateZoneConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/rate-card/zone/configuration`,
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
    } = LogisticsPartnerModel.RateZoneConfigurationDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getRateZoneConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.UpdateRateZoneConfigurationParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.RateZoneConfigurationDetails>} -
   *   Success response
   * @name updateRateZoneConfiguration
   * @summary: Update Rate Zone Configuration
   * @description: Updates the rate zone configuration for the specified courier partner scheme. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/logistics/updateRateZoneConfiguration/).
   */
  async updateRateZoneConfiguration(
    { extensionId, schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.updateRateZoneConfiguration().validate(
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
    } = LogisticsPartnerValidator.updateRateZoneConfiguration().validate(
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
        message: `Parameter Validation warrnings for partner > Logistics > updateRateZoneConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/rate-card/zone/configuration`,
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
    } = LogisticsPartnerModel.RateZoneConfigurationDetails().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > updateRateZoneConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = Logistics;
