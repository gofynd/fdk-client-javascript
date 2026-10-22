const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const AuthorizationPlatformApplicationValidator = require("./AuthorizationPlatformApplicationValidator");
const AuthorizationPlatformModel = require("./AuthorizationPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Authorization {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {AuthorizationPlatformApplicationValidator.GetApplicationStaffListParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<AuthorizationPlatformModel.ApplicationStaffPage>} -
   *   Success response
   * @name getApplicationStaffList
   * @summary: Get a paginated list of application staff
   * @description: Returns a paginated list of staff assigned to a sales channel, including each staff member's name, employee code, incentive eligibility, assigned ordering stores, and title. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/authorization/getApplicationStaffList/).
   */
  async getApplicationStaffList(
    {
      pageNo,
      pageSize,
      orderIncent,
      orderingStore,
      user,
      userName,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = AuthorizationPlatformApplicationValidator.getApplicationStaffList().validate(
      {
        pageNo,
        pageSize,
        orderIncent,
        orderingStore,
        user,
        userName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AuthorizationPlatformApplicationValidator.getApplicationStaffList().validate(
      {
        pageNo,
        pageSize,
        orderIncent,
        orderingStore,
        user,
        userName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Authorization > getApplicationStaffList \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["order_incent"] = orderIncent;
    query_params["ordering_store"] = orderingStore;
    query_params["user"] = user;
    query_params["user_name"] = userName;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/authorization/v1.0/company/${this.config.companyId}/application/${this.applicationId}/staff/list`,
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
    } = AuthorizationPlatformModel.ApplicationStaffPage().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Authorization > getApplicationStaffList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.companyId - The unique identifier for the company.
   * @param {string} arg.applicationId - Unique ID of the application
   * @param {number} [arg.pageSize] - Number of staff members to return per
   *   page. Defaults to 10 and must not exceed 100.
   * @param {boolean} [arg.orderIncent] - Select `true` to retrieve only staff
   *   members eligible for incentives on orders.
   * @param {number} [arg.orderingStore] - Positive integer ID of the ordering
   *   store. Returns staff assigned to that store, plus application staff
   *   with the `admin` role.
   * @param {string} [arg.user] - Unique ID of the user
   * @param {string} [arg.userName] - Filter by the user's first or last name.
   * @returns {Paginator<AuthorizationPlatformModel.ApplicationStaffPage>}
   * @summary: Get a paginated list of application staff
   * @description: Returns a paginated list of staff assigned to a sales channel, including each staff member's name, employee code, incentive eligibility, assigned ordering stores, and title.
   */
  getApplicationStaffListPaginator({
    companyId,
    applicationId,
    pageSize,
    orderIncent,
    orderingStore,
    user,
    userName,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplicationStaffList({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        orderIncent: orderIncent,
        orderingStore: orderingStore,
        user: user,
        userName: userName,
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
}

module.exports = Authorization;
