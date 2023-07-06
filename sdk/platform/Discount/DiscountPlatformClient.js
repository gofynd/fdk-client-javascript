const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const DiscountPlatformValidator = require("./DiscountPlatformValidator");
const DiscountPlatformModel = require("./DiscountPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Discount {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {DiscountPlatformValidator.CancelDownloadJobParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
   * @name cancelDownloadJob
   * @summary: Cancel Download Job.
   * @description: Cancel Download Job.
   */
  async cancelDownloadJob({ id } = {}) {
    const { error } = DiscountPlatformValidator.cancelDownloadJob().validate(
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
    } = DiscountPlatformValidator.cancelDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > cancelDownloadJob \n ${warrning}`,
      });
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
    } = DiscountPlatformModel.CancelJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > cancelDownloadJob \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.CancelValidationJobParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
   * @name cancelValidationJob
   * @summary: Cancel Validation Job.
   * @description: Cancel Validation Job.
   */
  async cancelValidationJob({ id } = {}) {
    const { error } = DiscountPlatformValidator.cancelValidationJob().validate(
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
    } = DiscountPlatformValidator.cancelValidationJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > cancelValidationJob \n ${warrning}`,
      });
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
    } = DiscountPlatformModel.CancelJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > cancelValidationJob \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.CreateDiscountParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
   * @name createDiscount
   * @summary: Create Discount.
   * @description: Create Discount.
   */
  async createDiscount({ body } = {}) {
    const { error } = DiscountPlatformValidator.createDiscount().validate(
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
    } = DiscountPlatformValidator.createDiscount().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > createDiscount \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = DiscountPlatformModel.DiscountJob().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > createDiscount \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.DownloadDiscountFileParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
   * @name downloadDiscountFile
   * @summary: Validate File.
   * @description: Validate File.
   */
  async downloadDiscountFile({ type, body } = {}) {
    const { error } = DiscountPlatformValidator.downloadDiscountFile().validate(
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
    } = DiscountPlatformValidator.downloadDiscountFile().validate(
      {
        type,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > downloadDiscountFile \n ${warrning}`,
      });
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
    } = DiscountPlatformModel.FileJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > downloadDiscountFile \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.GetDiscountParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
   * @name getDiscount
   * @summary: Fetch discount.
   * @description: Fetch discount.
   */
  async getDiscount({ id } = {}) {
    const { error } = DiscountPlatformValidator.getDiscount().validate(
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
    } = DiscountPlatformValidator.getDiscount().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > getDiscount \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = DiscountPlatformModel.DiscountJob().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > getDiscount \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.GetDiscountsParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.ListOrCalender>} - Success response
   * @name getDiscounts
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
    const { error } = DiscountPlatformValidator.getDiscounts().validate(
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
    const {
      error: warrning,
    } = DiscountPlatformValidator.getDiscounts().validate(
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
        message: `Parameter Validation warrnings for platform > Discount > getDiscounts \n ${warrning}`,
      });
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
    } = DiscountPlatformModel.ListOrCalender().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > getDiscounts \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.GetDownloadJobParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
   * @name getDownloadJob
   * @summary: Download File Job.
   * @description: Download File Job.
   */
  async getDownloadJob({ id } = {}) {
    const { error } = DiscountPlatformValidator.getDownloadJob().validate(
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
    } = DiscountPlatformValidator.getDownloadJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > getDownloadJob \n ${warrning}`,
      });
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
    } = DiscountPlatformModel.FileJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > getDownloadJob \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.GetValidationJobParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
   * @name getValidationJob
   * @summary: Validate File Job.
   * @description: Validate File Job.
   */
  async getValidationJob({ id } = {}) {
    const { error } = DiscountPlatformValidator.getValidationJob().validate(
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
    } = DiscountPlatformValidator.getValidationJob().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > getValidationJob \n ${warrning}`,
      });
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
    } = DiscountPlatformModel.FileJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > getValidationJob \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.UpdateDiscountParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
   * @name updateDiscount
   * @summary: Create Discount.
   * @description: Create Discount.
   */
  async updateDiscount({ id, body } = {}) {
    const { error } = DiscountPlatformValidator.updateDiscount().validate(
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
    } = DiscountPlatformValidator.updateDiscount().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > updateDiscount \n ${warrning}`,
      });
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

    const {
      error: res_error,
    } = DiscountPlatformModel.DiscountJob().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > updateDiscount \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.UpsertDiscountItemsParam} arg - Arg object
   * @returns {Promise<Object>} - Success response
   * @name upsertDiscountItems
   * @summary: Create custom discount from bulk.
   * @description: Create custom discounts through API.
   */
  async upsertDiscountItems({ id, body } = {}) {
    const { error } = DiscountPlatformValidator.upsertDiscountItems().validate(
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
    } = DiscountPlatformValidator.upsertDiscountItems().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > upsertDiscountItems \n ${warrning}`,
      });
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
        message: `Response Validation Warnnings for platform > Discount > upsertDiscountItems \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.ValidateDiscountFileParam} arg - Arg object
   * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
   * @name validateDiscountFile
   * @summary: Validate File.
   * @description: Validate File.
   */
  async validateDiscountFile({ body, discount } = {}) {
    const { error } = DiscountPlatformValidator.validateDiscountFile().validate(
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
    } = DiscountPlatformValidator.validateDiscountFile().validate(
      {
        body,
        discount,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Discount > validateDiscountFile \n ${warrning}`,
      });
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
    } = DiscountPlatformModel.FileJobResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Discount > validateDiscountFile \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Discount;
