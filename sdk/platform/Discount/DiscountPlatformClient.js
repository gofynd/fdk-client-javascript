const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.CancelJobResponseSchema>} -
   *   Success response
   * @name cancelDownloadJob
   * @summary: delete discount download job
   * @description: Cancel a discount download job by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelDownloadJob/).
   */
  async cancelDownloadJob(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.CancelJobResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > cancelDownloadJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.CancelValidationJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.CancelJobResponseSchema>} -
   *   Success response
   * @name cancelValidationJob
   * @summary: deletel validation job discount
   * @description: Cancel validation job of a discount by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelValidationJob/).
   */
  async cancelValidationJob(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.CancelJobResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > cancelValidationJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.CreateDiscountParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
   * @name createDiscount
   * @summary: Create discount
   * @description: Creates a discount. There are additional optional parameters that can be specified in the body of the request when creating a discount - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/createDiscount/).
   */
  async createDiscount(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.DiscountJob().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > createDiscount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.DownloadDiscountFileParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.FileJobResponseSchema>} - Success response
   * @name downloadDiscountFile
   * @summary: Get discount file
   * @description: Retrieve a discount file by its type, it could be product or inventory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/downloadDiscountFile/).
   */
  async downloadDiscountFile(
    { type, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.FileJobResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > downloadDiscountFile \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.GetDiscountParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
   * @name getDiscount
   * @summary: Get discount
   * @description: Retrieve a single discount by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscount/).
   */
  async getDiscount(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.DiscountJob().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > getDiscount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.GetDiscountsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.ListOrCalender>} - Success response
   * @name getDiscounts
   * @summary: List discounts
   * @description: Retrieve a list of discounts. You can also retrieve discounts using filter query parameters. There are additional optional parameters that can be specified in the parameters of the request when retrieving discount - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscounts/).
   */
  async getDiscounts(
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
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.ListOrCalender().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > getDiscounts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.view] - Specifies the format in which the discounts
   *   are displayed. Options are 'listing' for a list view or 'calendar' for
   *   a calendar view. Defaults to 'listing'.
   * @param {string} [arg.q] - The search query. This can be a partial or
   *   complete name of a discount.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {boolean} [arg.archived] - Indicates whether to include expired
   *   discounts in the results. Defaults to false.
   * @param {number} [arg.month] - The month for which discounts is requested.
   *   Defaults to the current month if not specified.
   * @param {number} [arg.year] - The year for which discounts is requested.
   *   Defaults to the current year if not specified.
   * @param {string} [arg.type] - Specifies the type of disocunt to list,
   *   either 'basic' or 'custom'.
   * @param {string[]} [arg.appIds] - A `application_id` is a unique
   *   identifier for a particular sales channel.
   * @returns {Paginator<DiscountPlatformModel.ListOrCalender>}
   * @summary: List discounts
   * @description: Retrieve a list of discounts. You can also retrieve discounts using filter query parameters. There are additional optional parameters that can be specified in the parameters of the request when retrieving discount
   */
  getDiscountsPaginator({
    view,
    q,
    pageSize,
    archived,
    month,
    year,
    type,
    appIds,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getDiscounts({
        view: view,
        q: q,
        pageNo: pageNo,
        pageSize: pageSize,
        archived: archived,
        month: month,
        year: year,
        type: type,
        appIds: appIds,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {DiscountPlatformValidator.GetDownloadJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.FileJobResponseSchema>} - Success response
   * @name getDownloadJob
   * @summary: List discount download job
   * @description: Retrieve a discount download job by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDownloadJob/).
   */
  async getDownloadJob(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.FileJobResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > getDownloadJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.GetValidationJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.FileJobResponseSchema>} - Success response
   * @name getValidationJob
   * @summary: List validation job discount
   * @description: Retrieve a validation job of a discount by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getValidationJob/).
   */
  async getValidationJob(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.FileJobResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > getValidationJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.UpdateDiscountParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
   * @name updateDiscount
   * @summary: Update discount
   * @description: Update an existing discount by its id. Discount can only be updated after 5 min from last updated time stamp (modified_on). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/updateDiscount/).
   */
  async updateDiscount(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.DiscountJob().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > updateDiscount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.UpsertDiscountItemsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name upsertDiscountItems
   * @summary: Upsert discount items
   * @description: Enables users to create custom discounts in bulk by providing the multiple products in requestBody. It allows for the efficient creation of multiple discounts simultaneously, streamlining the discount management process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/upsertDiscountItems/).
   */
  async upsertDiscountItems(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > upsertDiscountItems \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {DiscountPlatformValidator.ValidateDiscountFileParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<DiscountPlatformModel.FileJobResponseSchema>} - Success response
   * @name validateDiscountFile
   * @summary: Validate discount file
   * @description: Validates the discount file for any discrepancies. like item should be valid etc.. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/validateDiscountFile/).
   */
  async validateDiscountFile(
    { body, discount, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = DiscountPlatformModel.FileJobResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Discount > validateDiscountFile \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Discount;
