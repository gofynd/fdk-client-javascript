const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const LeadPlatformApplicationValidator = require("./LeadPlatformApplicationValidator");
const LeadPlatformModel = require("./LeadPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Lead {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {LeadPlatformApplicationValidator.CloseVideoRoomParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.CloseVideoRoomResponse>} - Success response
   * @name closeVideoRoom
   * @summary: Close the video room and force all participants to leave.
   * @description: Close the video room and force all participants to leave. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/closeVideoRoom/).
   */
  async closeVideoRoom({ uniqueName } = {}) {
    const {
      error,
    } = LeadPlatformApplicationValidator.closeVideoRoom().validate(
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
    } = LeadPlatformApplicationValidator.closeVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > closeVideoRoom \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = LeadPlatformModel.CloseVideoRoomResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > closeVideoRoom \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.CreateCustomFormParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
   * @name createCustomForm
   * @summary: Creates a new custom form
   * @description: Creates a new custom form for given application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createCustomForm/).
   */
  async createCustomForm({ body } = {}) {
    const {
      error,
    } = LeadPlatformApplicationValidator.createCustomForm().validate(
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
    } = LeadPlatformApplicationValidator.createCustomForm().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > createCustomForm \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = LeadPlatformModel.CustomForm().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > createCustomForm \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.CreateNewHistoryParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
   * @name createNewHistory
   * @summary: Create history for specific application level ticket
   * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createNewHistory/).
   */
  async createNewHistory({ id, body } = {}) {
    const {
      error,
    } = LeadPlatformApplicationValidator.createNewHistory().validate(
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
    } = LeadPlatformApplicationValidator.createNewHistory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > createNewHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${id}/history`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = LeadPlatformModel.TicketHistory().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > createNewHistory \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.EditCustomFormParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
   * @name editCustomForm
   * @summary: Edit the given custom form
   * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editCustomForm/).
   */
  async editCustomForm({ slug, body } = {}) {
    const {
      error,
    } = LeadPlatformApplicationValidator.editCustomForm().validate(
      {
        slug,
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
    } = LeadPlatformApplicationValidator.editCustomForm().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > editCustomForm \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = LeadPlatformModel.CustomForm().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > editCustomForm \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.EditNewTicketParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
   * @name editNewTicket
   * @summary: Edits ticket details of a application level ticket
   * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editNewTicket/).
   */
  async editNewTicket({ id, body } = {}) {
    const { error } = LeadPlatformApplicationValidator.editNewTicket().validate(
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
    } = LeadPlatformApplicationValidator.editNewTicket().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > editNewTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${id}`,
      query_params,
      body
    );

    const { error: res_error } = LeadPlatformModel.Ticket().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > editNewTicket \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.GetCustomFormParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
   * @name getCustomForm
   * @summary: Get specific custom form using it's slug
   * @description: Get specific custom form using it's slug, this is used to view the form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getCustomForm/).
   */
  async getCustomForm({ slug } = {}) {
    const { error } = LeadPlatformApplicationValidator.getCustomForm().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformApplicationValidator.getCustomForm().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getCustomForm \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = LeadPlatformModel.CustomForm().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getCustomForm \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.GetCustomFormsParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.CustomFormList>} - Success response
   * @name getCustomForms
   * @summary: Get list of custom form
   * @description: Get list of custom form for given application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getCustomForms/).
   */
  async getCustomForms({} = {}) {
    const {
      error,
    } = LeadPlatformApplicationValidator.getCustomForms().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformApplicationValidator.getCustomForms().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getCustomForms \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = LeadPlatformModel.CustomFormList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getCustomForms \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.GetNewTicketParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
   * @name getNewTicket
   * @summary: Retreives ticket details of a application level ticket
   * @description: Retreives ticket details of a application level ticket with ticket ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTicket/).
   */
  async getNewTicket({ id } = {}) {
    const { error } = LeadPlatformApplicationValidator.getNewTicket().validate(
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
    } = LeadPlatformApplicationValidator.getNewTicket().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getNewTicket \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${id}`,
      query_params,
      undefined
    );

    const { error: res_error } = LeadPlatformModel.Ticket().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getNewTicket \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.GetNewTicketHistoryParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
   * @name getNewTicketHistory
   * @summary: Gets history list for specific application level ticket
   * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTicketHistory/).
   */
  async getNewTicketHistory({ id } = {}) {
    const {
      error,
    } = LeadPlatformApplicationValidator.getNewTicketHistory().validate(
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
    } = LeadPlatformApplicationValidator.getNewTicketHistory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getNewTicketHistory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${id}/history`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = LeadPlatformModel.TicketHistoryList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getNewTicketHistory \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.GetNewTicketsParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
   * @name getNewTickets
   * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
   * @description: Gets the list of Application level Tickets and/or ticket filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTickets/).
   */
  async getNewTickets({ items, filters, q, status, priority, category } = {}) {
    const { error } = LeadPlatformApplicationValidator.getNewTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadPlatformApplicationValidator.getNewTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getNewTickets \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["items"] = items;
    query_params["filters"] = filters;
    query_params["q"] = q;
    query_params["status"] = status;
    query_params["priority"] = priority;
    query_params["category"] = category;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = LeadPlatformModel.TicketList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getNewTickets \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.GetNewTokenForVideoRoomParam} arg
   *   - Arg object
   *
   * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
   *   Success response
   * @name getNewTokenForVideoRoom
   * @summary: Get Token to join a specific Video Room using it's unqiue name
   * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTokenForVideoRoom/).
   */
  async getNewTokenForVideoRoom({ uniqueName } = {}) {
    const {
      error,
    } = LeadPlatformApplicationValidator.getNewTokenForVideoRoom().validate(
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
    } = LeadPlatformApplicationValidator.getNewTokenForVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getNewTokenForVideoRoom \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/token`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = LeadPlatformModel.GetTokenForVideoRoomResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getNewTokenForVideoRoom \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.GetNewVideoParticipantsParam} arg
   *   - Arg object
   *
   * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
   *   - Success response
   *
   * @name getNewVideoParticipants
   * @summary: Get participants of a specific Video Room using it's unique name
   * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewVideoParticipants/).
   */
  async getNewVideoParticipants({ uniqueName } = {}) {
    const {
      error,
    } = LeadPlatformApplicationValidator.getNewVideoParticipants().validate(
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
    } = LeadPlatformApplicationValidator.getNewVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > getNewVideoParticipants \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/participants`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = LeadPlatformModel.GetParticipantsInsideVideoRoomResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > getNewVideoParticipants \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {LeadPlatformApplicationValidator.OpenVideoRoomParam} arg - Arg object
   * @returns {Promise<LeadPlatformModel.CreateVideoRoomResponse>} - Success response
   * @name openVideoRoom
   * @summary: Open a video room.
   * @description: Open a video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/openVideoRoom/).
   */
  async openVideoRoom({ body } = {}) {
    const { error } = LeadPlatformApplicationValidator.openVideoRoom().validate(
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
    } = LeadPlatformApplicationValidator.openVideoRoom().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Lead > openVideoRoom \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = LeadPlatformModel.CreateVideoRoomResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Lead > openVideoRoom \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Lead;
