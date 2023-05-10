const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const DiscountValidator = require("./DiscountPlatformValidator");
const DiscountModel = require("./DiscountPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Discount {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @returns {Promise<CancelJobResponse>} - Success response
   * @summary: Cancel Download Job.
   * @description: Cancel Download Job.
   */
  async cancelDownloadJob({ id } = {}) {
    const { error } = DiscountValidator.cancelDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.cancelDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for cancelDownloadJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/download/${id}/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = DiscountModel.CancelJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for cancelDownloadJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @returns {Promise<CancelJobResponse>} - Success response
   * @summary: Cancel Validation Job.
   * @description: Cancel Validation Job.
   */
  async cancelValidationJob({ id } = {}) {
    const { error } = DiscountValidator.cancelValidationJob().validate(
      {
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
    } = DiscountValidator.cancelValidationJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for cancelValidationJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/${id}/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = DiscountModel.CancelJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for cancelValidationJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateUpdateDiscount} arg.body
   * @returns {Promise<DiscountJob>} - Success response
   * @summary: Create Discount.
   * @description: Create Discount.
   */
  async createDiscount({ body } = {}) {
    const { error } = DiscountValidator.createDiscount().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.createDiscount().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createDiscount",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/`,
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = DiscountModel.DiscountJob().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createDiscount",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.type - Type
   * @param {DownloadFileJob} arg.body
   * @returns {Promise<FileJobResponse>} - Success response
   * @summary: Validate File.
   * @description: Validate File.
   */
  async downloadDiscountFile({ type, body } = {}) {
    const { error } = DiscountValidator.downloadDiscountFile().validate(
      {
        type,
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
    } = DiscountValidator.downloadDiscountFile().validate(
      {
        type,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for downloadDiscountFile",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/${type}/download/`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = DiscountModel.FileJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for downloadDiscountFile",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Unique id.
   * @returns {Promise<DiscountJob>} - Success response
   * @summary: Fetch discount.
   * @description: Fetch discount.
   */
  async getDiscount({ id } = {}) {
    const { error } = DiscountValidator.getDiscount().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.getDiscount().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDiscount",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = DiscountModel.DiscountJob().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDiscount",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.view] - Listing or calender. Default is listing.
   * @param {string} [arg.q] - The search query. This can be a partial or
   *   complete name of a discount.
   * @param {number} [arg.pageNo] - Page number. Default is 1.
   * @param {number} [arg.pageSize] - Page size. Default is 12.
   * @param {boolean} [arg.archived] - Archived. Default is false.
   * @param {number} [arg.month] - Month. Default is current month.
   * @param {number} [arg.year] - Year. Default is current year.
   * @param {string} [arg.type] - Basic or custom.
   * @param {string[]} [arg.appIds] - Application ids.
   * @returns {Promise<ListOrCalender>} - Success response
   * @summary: Fetch discount list.
   * @description: Fetch discount list.
   */
  async getDiscounts({
    view,
    q,
    pageNo,
    pageSize,
    archived,
    month,
    year,
    type,
    appIds,
  } = {}) {
    const { error } = DiscountValidator.getDiscounts().validate(
      {
        view,
        q,
        pageNo,
        pageSize,
        archived,
        month,
        year,
        type,
        appIds,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.getDiscounts().validate(
      {
        view,
        q,
        pageNo,
        pageSize,
        archived,
        month,
        year,
        type,
        appIds,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDiscounts",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["view"] = view;
    query_params["q"] = q;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["archived"] = archived;
    query_params["month"] = month;
    query_params["year"] = year;
    query_params["type"] = type;
    query_params["app_ids"] = appIds;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = DiscountModel.ListOrCalender().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDiscounts",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @returns {Promise<FileJobResponse>} - Success response
   * @summary: Download File Job.
   * @description: Download File Job.
   */
  async getDownloadJob({ id } = {}) {
    const { error } = DiscountValidator.getDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.getDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDownloadJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/download/${id}/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = DiscountModel.FileJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDownloadJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @returns {Promise<FileJobResponse>} - Success response
   * @summary: Validate File Job.
   * @description: Validate File Job.
   */
  async getValidationJob({ id } = {}) {
    const { error } = DiscountValidator.getValidationJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.getValidationJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getValidationJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/${id}/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = DiscountModel.FileJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getValidationJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Id
   * @param {CreateUpdateDiscount} arg.body
   * @returns {Promise<DiscountJob>} - Success response
   * @summary: Create Discount.
   * @description: Create Discount.
   */
  async updateDiscount({ id, body } = {}) {
    const { error } = DiscountValidator.updateDiscount().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = DiscountValidator.updateDiscount().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateDiscount",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/`,
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = DiscountModel.DiscountJob().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateDiscount",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Job ID of the discount.
   * @param {BulkDiscount} arg.body
   * @returns {Promise<Object>} - Success response
   * @summary: Create custom discount from bulk.
   * @description: Create custom discounts through API.
   */
  async upsertDiscountItems({ id, body } = {}) {
    const { error } = DiscountValidator.upsertDiscountItems().validate(
      {
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
    } = DiscountValidator.upsertDiscountItems().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for upsertDiscountItems",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/job/${id}/items/`,
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = Joi.any().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for upsertDiscountItems",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.discount] - Discount
   * @param {FileJobRequest} arg.body
   * @returns {Promise<FileJobResponse>} - Success response
   * @summary: Validate File.
   * @description: Validate File.
   */
  async validateDiscountFile({ body, discount } = {}) {
    const { error } = DiscountValidator.validateDiscountFile().validate(
      {
        body,
        discount,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = DiscountValidator.validateDiscountFile().validate(
      {
        body,
        discount,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for validateDiscountFile",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["discount"] = discount;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/discount/v1.0/company/${this.config.companyId}/file/validation/`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = DiscountModel.FileJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for validateDiscountFile",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Discount;
