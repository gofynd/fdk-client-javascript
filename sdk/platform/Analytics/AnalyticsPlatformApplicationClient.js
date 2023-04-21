const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const AnalyticsValidator = require("./AnalyticsPlatformApplicationValidator");
const AnalyticsModel = require("./AnalyticsPlatformModel");
const { Logger } = require("./../../common/Logger");

class Analytics {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.cartId - Cart Id
   * @returns {Promise<AbandonCartDetail>} - Success response
   * @summary: Get abandon carts details
   * @description: Get abandon cart details
   */
  async getAbandonCartDetail({ cartId } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartDetail().validate(
      {
        cartId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AnalyticsValidator.getAbandonCartDetail().validate(
      {
        cartId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAbandonCartDetail",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/abandon-cart/${cartId}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = AnalyticsModel.AbandonCartDetail().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAbandonCartDetail",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.fromDate - From date
   * @param {string} arg.toDate - To date
   * @param {number} [arg.pageNo] - Current page number
   * @param {number} [arg.pageSize] - Current page size
   * @returns {Promise<AbandonCartsList>} - Success response
   * @summary: Get abandon carts list
   * @description: Get abandon carts list
   */
  async getAbandonCartList({ fromDate, toDate, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartList().validate(
      {
        fromDate,
        toDate,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AnalyticsValidator.getAbandonCartList().validate(
      {
        fromDate,
        toDate,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAbandonCartList",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/from/${fromDate}/to/${toDate}/abandon-cart/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = AnalyticsModel.AbandonCartsList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAbandonCartList",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company Id
   * @param {string} arg.applicationId - Application Id
   * @param {string} arg.fromDate - From date
   * @param {string} arg.toDate - To date
   * @param {number} [arg.pageSize] - Current page size
   * @summary: Get abandon carts list
   * @description: Get abandon carts list
   */
  getAbandonCartListPaginator({
    companyId,
    applicationId,
    fromDate,
    toDate,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAbandonCartList({
        companyId: companyId,
        applicationId: applicationId,
        fromDate: fromDate,
        toDate: toDate,
        pageNo: pageNo,
        pageSize: pageSize,
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.fromDate - From date
   * @param {string} arg.toDate - To date
   * @returns {Promise<string>} - Success response
   * @summary: Get abandon carts csv
   * @description: Get abandon carts csv
   */
  async getAbandonCartsCSV({ fromDate, toDate } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartsCSV().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AnalyticsValidator.getAbandonCartsCSV().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAbandonCartsCSV",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/${fromDate}/to/${toDate}/abandon-cart.csv`,
      query_params,
      undefined
    );

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAbandonCartsCSV",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.componentName - Component name
   * @returns {Promise<StatsRes>} - Success response
   * @summary: Get component statistics
   * @description: Get component statistics
   */
  async getComponentStats({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStats().validate(
      {
        componentName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = AnalyticsValidator.getComponentStats().validate(
      {
        componentName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getComponentStats",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/${componentName}`,
      query_params,
      undefined
    );

    const { error: res_error } = AnalyticsModel.StatsRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getComponentStats",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.componentName - Component name
   * @returns {Promise<string>} - Success response
   * @summary: Get component statistics csv
   * @description: Get component statistics csv
   */
  async getComponentStatsCSV({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStatsCSV().validate(
      {
        componentName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AnalyticsValidator.getComponentStatsCSV().validate(
      {
        componentName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getComponentStatsCSV",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/{component_name}.csv`,
      query_params,
      undefined
    );

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getComponentStatsCSV",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.componentName - Component name
   * @returns {Promise<string>} - Success response
   * @summary: Get component statistics pdf
   * @description: Get component statistics pdf
   */
  async getComponentStatsPDF({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStatsPDF().validate(
      {
        componentName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AnalyticsValidator.getComponentStatsPDF().validate(
      {
        componentName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getComponentStatsPDF",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/{component_name}.pdf`,
      query_params,
      undefined
    );

    const { error: res_error } = Joi.string()
      .allow("")
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getComponentStatsPDF",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.groupName - Group name
   * @returns {Promise<StatsGroupComponents>} - Success response
   * @summary: Get statistics group components
   * @description: Get statistics group components
   */
  async getStatiscticsGroupComponents({ groupName } = {}) {
    const {
      error,
    } = AnalyticsValidator.getStatiscticsGroupComponents().validate(
      {
        groupName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AnalyticsValidator.getStatiscticsGroupComponents().validate(
      {
        groupName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getStatiscticsGroupComponents",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/group/${groupName}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = AnalyticsModel.StatsGroupComponents().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getStatiscticsGroupComponents",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<StatsGroups>} - Success response
   * @summary: Get statistics groups
   * @description: Get statistics groups
   */
  async getStatiscticsGroups({} = {}) {
    const { error } = AnalyticsValidator.getStatiscticsGroups().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AnalyticsValidator.getStatiscticsGroups().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getStatiscticsGroups",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/group`,
      query_params,
      undefined
    );

    const { error: res_error } = AnalyticsModel.StatsGroups().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getStatiscticsGroups",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Analytics;
