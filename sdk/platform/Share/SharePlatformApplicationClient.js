const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const SharePlatformApplicationValidator = require("./SharePlatformApplicationValidator");
const SharePlatformModel = require("./SharePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Share {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {SharePlatformApplicationValidator.CreateShortLinkParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
   * @name createShortLink
   * @summary: Create short link
   * @description: Create short link - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/createShortLink/).
   */
  async createShortLink(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = SharePlatformApplicationValidator.createShortLink().validate(
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
    } = SharePlatformApplicationValidator.createShortLink().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Share > createShortLink \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/`,
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
    } = SharePlatformModel.ShortLinkRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Share > createShortLink \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {SharePlatformApplicationValidator.GetShortLinkByHashParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
   * @name getShortLinkByHash
   * @summary: Get short link by hash
   * @description: Get short link by hash - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinkByHash/).
   */
  async getShortLinkByHash(
    { hash, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = SharePlatformApplicationValidator.getShortLinkByHash().validate(
      {
        hash,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = SharePlatformApplicationValidator.getShortLinkByHash().validate(
      {
        hash,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Share > getShortLinkByHash \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${hash}/`,
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
    } = SharePlatformModel.ShortLinkRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Share > getShortLinkByHash \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {SharePlatformApplicationValidator.GetShortLinkClickStatsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SharePlatformModel.ClickStatsResponse>} - Success response
   * @name getShortLinkClickStats
   * @summary: Get click statistics for a short link
   * @description: Retrieve click statistics for a given short link ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinkClickStats/).
   */
  async getShortLinkClickStats(
    { surlId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = SharePlatformApplicationValidator.getShortLinkClickStats().validate(
      { surlId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = SharePlatformApplicationValidator.getShortLinkClickStats().validate(
      { surlId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Share > getShortLinkClickStats \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["surl_id"] = surlId;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/click-stats`,
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
    } = SharePlatformModel.ClickStatsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Share > getShortLinkClickStats \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {SharePlatformApplicationValidator.GetShortLinksParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SharePlatformModel.ShortLinkList>} - Success response
   * @name getShortLinks
   * @summary: Get short links
   * @description: Get short links - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/getShortLinks/).
   */
  async getShortLinks(
    { pageNo, pageSize, createdBy, active, q, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = SharePlatformApplicationValidator.getShortLinks().validate(
      {
        pageNo,
        pageSize,
        createdBy,
        active,
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
    } = SharePlatformApplicationValidator.getShortLinks().validate(
      {
        pageNo,
        pageSize,
        createdBy,
        active,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Share > getShortLinks \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["created_by"] = createdBy;
    query_params["active"] = active;
    query_params["q"] = q;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/`,
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
    } = SharePlatformModel.ShortLinkList().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Share > getShortLinks \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {SharePlatformApplicationValidator.UpdateShortLinkByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<SharePlatformModel.ShortLinkRes>} - Success response
   * @name updateShortLinkById
   * @summary: Update short link by id
   * @description: Update short link by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/share/updateShortLinkById/).
   */
  async updateShortLinkById(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = SharePlatformApplicationValidator.updateShortLinkById().validate(
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
    } = SharePlatformApplicationValidator.updateShortLinkById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Share > updateShortLinkById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${id}/`,
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
    } = SharePlatformModel.ShortLinkRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Share > updateShortLinkById \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Share;
