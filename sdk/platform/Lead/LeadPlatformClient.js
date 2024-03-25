const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const LeadPlatformValidator = require("./LeadPlatformValidator");
const LeadPlatformModel = require("./LeadPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Lead {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {LeadPlatformValidator.CreatePlatformTicketHistoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
   * @name createPlatformTicketHistory
   * @summary: Create platform ticket history.
   * @description: Create futher interactions on a company level ticket such as changing it's status, priority or replying to a ticket via a thread. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createPlatformTicketHistory/).
   */
  async createPlatformTicketHistory(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LeadPlatformValidator.createPlatformTicketHistory().validate(
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
    } = LeadPlatformValidator.createPlatformTicketHistory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > createPlatformTicketHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}/history`,
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
    } = LeadPlatformModel.TicketHistory().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Lead > createPlatformTicketHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.CreateTicketParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
   * @name createTicket
   * @summary: Create ticket.
   * @description: Create a new ticket at application level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createTicket/).
   */
  async createTicket(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPlatformValidator.createTicket().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPlatformValidator.createTicket().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > createTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
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
    } = LeadPlatformModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Lead > createTicket \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.EditPlatformTicketParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
   * @name editPlatformTicket
   * @summary: Edit platform ticket.
   * @description: Modify the content and settings of a specific company level ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editPlatformTicket/).
   */
  async editPlatformTicket(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPlatformValidator.editPlatformTicket().validate(
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
    } = LeadPlatformValidator.editPlatformTicket().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > editPlatformTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}`,
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
    } = LeadPlatformModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Lead > editPlatformTicket \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetGeneralConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.GeneralConfigResponse>} - Success response
   * @name getGeneralConfig
   * @summary: Get general configuration.
   * @description: Retrieve general configuration settings related to support system for company tickets - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getGeneralConfig/).
   */
  async getGeneralConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPlatformValidator.getGeneralConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformValidator.getGeneralConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getGeneralConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/general-config`,
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
    } = LeadPlatformModel.GeneralConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Lead > getGeneralConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetPlatformTicketParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
   * @name getPlatformTicket
   * @summary: Get platform ticket.
   * @description: Retrieve detailed information about a specific ticket which is raised at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTicket/).
   */
  async getPlatformTicket(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPlatformValidator.getPlatformTicket().validate(
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
    } = LeadPlatformValidator.getPlatformTicket().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getPlatformTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}`,
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
    } = LeadPlatformModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Lead > getPlatformTicket \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetPlatformTicketHistoryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
   * @name getPlatformTicketHistory
   * @summary: Get platform ticket history.
   * @description: Retrieve a list of history records for a company level ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTicketHistory/).
   */
  async getPlatformTicketHistory(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPlatformValidator.getPlatformTicketHistory().validate(
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
    } = LeadPlatformValidator.getPlatformTicketHistory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getPlatformTicketHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket/${id}/history`,
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
    } = LeadPlatformModel.TicketHistoryList().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Lead > getPlatformTicketHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetPlatformTicketsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
   * @name getPlatformTickets
   * @summary: Get platform tickets.
   * @description: Retrieve a list of tickets created within the platform at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTickets/).
   */
  async getPlatformTickets(
    {
      items,
      filters,
      q,
      status,
      priority,
      category,
      pageNo,
      pageSize,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPlatformValidator.getPlatformTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
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
    } = LeadPlatformValidator.getPlatformTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getPlatformTickets \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["items"] = items;
    query_params["filters"] = filters;
    query_params["q"] = q;
    query_params["status"] = status;
    query_params["priority"] = priority;
    query_params["category"] = category;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/ticket`,
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
    } = LeadPlatformModel.TicketList().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Lead > getPlatformTickets \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.items] - Decides that the reponse will contain the
   *   list of tickets
   * @param {boolean} [arg.filters] - Decides that the reponse will contain
   *   the ticket filters
   * @param {string} [arg.q] - Search through ticket titles and description
   * @param {string} [arg.status] - Filter tickets on status
   * @param {string} [arg.priority] - Filter tickets on priority
   * @param {string} [arg.category] - Filter tickets on category
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @returns {Paginator<LeadPlatformModel.TicketList>}
   * @summary: Get platform tickets.
   * @description: Retrieve a list of tickets created within the platform at company level
   */
  getPlatformTicketsPaginator({
    items,
    filters,
    q,
    status,
    priority,
    category,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPlatformTickets({
        items: items,
        filters: filters,
        q: q,
        status: status,
        priority: priority,
        category: category,
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
   * @param {LeadPlatformValidator.GetPlatformVideoParticipantsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
   *   - Success response
   *
   * @name getPlatformVideoParticipants
   * @summary: Get platform video participants.
   * @description: Retrieve a list of participants in a platform video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformVideoParticipants/).
   */
  async getPlatformVideoParticipants(
    { uniqueName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LeadPlatformValidator.getPlatformVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformValidator.getPlatformVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getPlatformVideoParticipants \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/video/room/${uniqueName}/participants`,
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
    } = LeadPlatformModel.GetParticipantsInsideVideoRoomResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Lead > getPlatformVideoParticipants \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPlatformValidator.GetTokenForPlatformVideoRoomParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
   *   Success response
   * @name getTokenForPlatformVideoRoom
   * @summary: Get token for platform video room.
   * @description: Retrieve an access token for a platform video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTokenForPlatformVideoRoom/).
   */
  async getTokenForPlatformVideoRoom(
    { uniqueName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LeadPlatformValidator.getTokenForPlatformVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformValidator.getTokenForPlatformVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getTokenForPlatformVideoRoom \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/video/room/${uniqueName}/token`,
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
    } = LeadPlatformModel.GetTokenForVideoRoomResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Lead > getTokenForPlatformVideoRoom \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Lead;
