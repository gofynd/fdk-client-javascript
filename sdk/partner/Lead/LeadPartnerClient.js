const PartnerAPIClient = require("../PartnerAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const LeadPartnerValidator = require("./LeadPartnerValidator");
const LeadPartnerModel = require("./LeadPartnerModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Lead {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {LeadPartnerValidator.GetTicketsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.TicketList>} - Success response
   * @name getTickets
   * @summary: Gets the list of partner level tickets and/or ticket filters depending on query params
   * @description: Gets the list of partner level tickets and/or ticket filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getTickets/).
   */
  async getTickets(
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
    const { error } = LeadPartnerValidator.getTickets().validate(
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
    const { error: warrning } = LeadPartnerValidator.getTickets().validate(
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
        message: `Parameter Validation warrnings for partner > Lead > getTickets \n ${warrning}`,
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

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/ticket`,
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
    } = LeadPartnerModel.TicketList().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > getTickets \n ${res_error}`,
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
   * @returns {Paginator<LeadPartnerModel.TicketList>}
   * @summary: Gets the list of partner level tickets and/or ticket filters depending on query params
   * @description: Gets the list of partner level tickets and/or ticket filters
   */
  getTicketsPaginator({
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
      const data = await this.getTickets({
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
   * @param {LeadPartnerValidator.CreateTicketParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.Ticket>} - Success response
   * @name createTicket
   * @summary: Creates a partner level ticket
   * @description: Creates a partner level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/createTicket/).
   */
  async createTicket(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.createTicket().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPartnerValidator.createTicket().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > createTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/ticket`,
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
    } = LeadPartnerModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > createTicket \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.GetTicketParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.Ticket>} - Success response
   * @name getTicket
   * @summary: Retreives ticket details of a partner level ticket with ticket ID
   * @description: Retreives ticket details of a partner level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getTicket/).
   */
  async getTicket(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.getTicket().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPartnerValidator.getTicket().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > getTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/ticket/${id}`,
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
    } = LeadPartnerModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > getTicket \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.EditTicketParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.Ticket>} - Success response
   * @name editTicket
   * @summary: Edits ticket details of a partner level ticket
   * @description: Edits ticket details of a partner level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/editTicket/).
   */
  async editTicket(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.editTicket().validate(
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
    const { error: warrning } = LeadPartnerValidator.editTicket().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > editTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/ticket/${id}`,
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
    } = LeadPartnerModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > editTicket \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.CreateHistoryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.TicketHistory>} - Success response
   * @name createHistory
   * @summary: Create history for specific partner level ticket
   * @description: Create history for specific partner level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/createHistory/).
   */
  async createHistory(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.createHistory().validate(
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
    const { error: warrning } = LeadPartnerValidator.createHistory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > createHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/ticket/${id}/history`,
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
    } = LeadPartnerModel.TicketHistory().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > createHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.GetTicketHistoryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.TicketHistoryList>} - Success response
   * @name getTicketHistory
   * @summary: Gets history list for specific partner level ticket
   * @description: Gets history list for specific partner level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getTicketHistory/).
   */
  async getTicketHistory(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.getTicketHistory().validate(
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
    } = LeadPartnerValidator.getTicketHistory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > getTicketHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/ticket/${id}/history`,
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
    } = LeadPartnerModel.TicketHistoryList().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > getTicketHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.GetTokenForVideoRoomParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.GetTokenForVideoRoomResponse>} -
   *   Success response
   * @name getTokenForVideoRoom
   * @summary: Get Token to join a specific Video Room using it's unqiue name
   * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getTokenForVideoRoom/).
   */
  async getTokenForVideoRoom(
    { uniqueName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.getTokenForVideoRoom().validate(
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
    } = LeadPartnerValidator.getTokenForVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > getTokenForVideoRoom \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/video/room/${uniqueName}/token`,
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
    } = LeadPartnerModel.GetTokenForVideoRoomResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > getTokenForVideoRoom \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.GetVideoParticipantsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.GetParticipantsInsideVideoRoomResponse>}
   *   - Success response
   *
   * @name getVideoParticipants
   * @summary: Get participants of a specific Video Room using it's unique name
   * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getVideoParticipants/).
   */
  async getVideoParticipants(
    { uniqueName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.getVideoParticipants().validate(
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
    } = LeadPartnerValidator.getVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > getVideoParticipants \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/video/room/${uniqueName}/participants`,
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
    } = LeadPartnerModel.GetParticipantsInsideVideoRoomResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > getVideoParticipants \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.OpenVideoRoomParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.CreateVideoRoomResponse>} - Success response
   * @name openVideoRoom
   * @summary: Open video room.
   * @description: Initiate and open a video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/openVideoRoom/).
   */
  async openVideoRoom(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.openVideoRoom().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPartnerValidator.openVideoRoom().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > openVideoRoom \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/video/room`,
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
    } = LeadPartnerModel.CreateVideoRoomResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > openVideoRoom \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.CloseVideoRoomParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.CloseVideoRoomResponse>} - Success response
   * @name closeVideoRoom
   * @summary: Close video room.
   * @description: Terminate and close an active video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/closeVideoRoom/).
   */
  async closeVideoRoom(
    { uniqueName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.closeVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadPartnerValidator.closeVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > closeVideoRoom \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/video/room/${uniqueName}`,
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
    } = LeadPartnerModel.CloseVideoRoomResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > closeVideoRoom \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.GetGeneralConfigParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.GeneralConfigResponse>} - Success response
   * @name getGeneralConfig
   * @summary: Get general support configuration.
   * @description: Get general support configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getGeneralConfig/).
   */
  async getGeneralConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.getGeneralConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPartnerValidator.getGeneralConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > getGeneralConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/lead/v1.0/organization/${this.config.organizationId}/general-config`,
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
    } = LeadPartnerModel.GeneralConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > getGeneralConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadPartnerValidator.GetPartnerGeneralConfigParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LeadPartnerModel.GeneralConfigResponse>} - Success response
   * @name getPartnerGeneralConfig
   * @summary: Get general support configuration.
   * @description: Get general support configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getPartnerGeneralConfig/).
   */
  async getPartnerGeneralConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadPartnerValidator.getPartnerGeneralConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPartnerValidator.getPartnerGeneralConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Lead > getPartnerGeneralConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/lead/v1.0/general-config`,
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
    } = LeadPartnerModel.GeneralConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Lead > getPartnerGeneralConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = Lead;
