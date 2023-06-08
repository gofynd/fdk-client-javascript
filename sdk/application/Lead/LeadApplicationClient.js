const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const LeadValidator = require("./LeadApplicationValidator");
const LeadModel = require("./LeadApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Lead {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      createHistory: "/service/application/lead/v1.0/ticket/{id}/history",
      createTicket: "/service/application/lead/v1.0/ticket/",
      getCustomForm: "/service/application/lead/v1.0/form/{slug}",
      getParticipantsInsideVideoRoom:
        "/service/application/lead/v1.0/video/room/{unique_name}/participants",
      getTicket: "/service/application/lead/v1.0/ticket/{id}",
      getTokenForVideoRoom:
        "/service/application/lead/v1.0/video/room/{unique_name}/token",
      submitCustomForm: "/service/application/lead/v1.0/form/{slug}/submit",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   * @returns {Promise<TicketHistory>} - Success response
   * @summary: Create history for specific Ticket
   * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   */
  async createHistory({ id, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(
      { id, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadValidator.createHistory().validate(
      { id, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createHistory",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createHistory"],
        params: { id },
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = LeadModel.TicketHistory().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createHistory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddTicketPayload} arg.body
   * @returns {Promise<Ticket>} - Success response
   * @summary: Create Ticket
   * @description: This is used to Create Ticket.
   */
  async createTicket({ body } = {}) {
    const { error } = LeadValidator.createTicket().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadValidator.createTicket().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createTicket",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createTicket"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const { error: res_error } = LeadModel.Ticket().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createTicket",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @returns {Promise<CustomForm>} - Success response
   * @summary: Get specific Custom Form using it's slug
   * @description: Get specific Custom Form using it's slug, this is used to view the form.
   */
  async getCustomForm({ slug } = {}) {
    const { error } = LeadValidator.getCustomForm().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadValidator.getCustomForm().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCustomForm",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomForm"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = LeadModel.CustomForm().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCustomForm",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uniqueName - Unique name of Video Room
   * @returns {Promise<GetParticipantsInsideVideoRoomResponse>} - Success response
   * @summary: Get participants of a specific Video Room using it's unique name
   * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
   */
  async getParticipantsInsideVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getParticipantsInsideVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadValidator.getParticipantsInsideVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getParticipantsInsideVideoRoom",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getParticipantsInsideVideoRoom"],
        params: { uniqueName },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = LeadModel.GetParticipantsInsideVideoRoomResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getParticipantsInsideVideoRoom",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID of ticket to be retrieved
   * @returns {Promise<Ticket>} - Success response
   * @summary: Get Ticket with the specific id
   * @description: Get Ticket with the specific id, this is used to view the ticket details
   */
  async getTicket({ id } = {}) {
    const { error } = LeadValidator.getTicket().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadValidator.getTicket().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getTicket",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTicket"],
        params: { id },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = LeadModel.Ticket().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getTicket",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uniqueName - Unique name of Video Room
   * @returns {Promise<GetTokenForVideoRoomResponse>} - Success response
   * @summary: Get Token to join a specific Video Room using it's unqiue name
   * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
   */
  async getTokenForVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getTokenForVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadValidator.getTokenForVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getTokenForVideoRoom",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTokenForVideoRoom"],
        params: { uniqueName },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = LeadModel.GetTokenForVideoRoomResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getTokenForVideoRoom",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {CustomFormSubmissionPayload} arg.body
   * @returns {Promise<SubmitCustomFormResponse>} - Success response
   * @summary: Submit Response for a specific Custom Form using it's slug
   * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
   */
  async submitCustomForm({ slug, body } = {}) {
    const { error } = LeadValidator.submitCustomForm().validate(
      { slug, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadValidator.submitCustomForm().validate(
      { slug, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for submitCustomForm",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["submitCustomForm"],
        params: { slug },
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = LeadModel.SubmitCustomFormResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for submitCustomForm",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Lead;
