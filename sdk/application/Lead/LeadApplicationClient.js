const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const LeadApplicationValidator = require("./LeadApplicationValidator");
const LeadApplicationModel = require("./LeadApplicationModel");
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
   * @param {LeadApplicationValidator.CreateHistoryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LeadApplicationModel.TicketHistory>} - Success response
   * @name createHistory
   * @summary: Create history for specific Ticket
   * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createHistory/).
   */
  async createHistory(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadApplicationValidator.createHistory().validate(
      { id, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadApplicationValidator.createHistory().validate(
      { id, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Lead > createHistory \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadApplicationModel.TicketHistory().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Lead > createHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadApplicationValidator.CreateTicketParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
   * @name createTicket
   * @summary: Create Ticket
   * @description: This is used to Create Ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createTicket/).
   */
  async createTicket(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadApplicationValidator.createTicket().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadApplicationValidator.createTicket().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Lead > createTicket \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadApplicationModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Lead > createTicket \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadApplicationValidator.GetCustomFormParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LeadApplicationModel.CustomForm>} - Success response
   * @name getCustomForm
   * @summary: Get specific Custom Form using it's slug
   * @description: Get specific Custom Form using it's slug, this is used to view the form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getCustomForm/).
   */
  async getCustomForm(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadApplicationValidator.getCustomForm().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadApplicationValidator.getCustomForm().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Lead > getCustomForm \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadApplicationModel.CustomForm().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Lead > getCustomForm \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadApplicationValidator.GetParticipantsInsideVideoRoomParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LeadApplicationModel.GetParticipantsInsideVideoRoomResponse>}
   *   - Success response
   *
   * @name getParticipantsInsideVideoRoom
   * @summary: Get participants of a specific Video Room using it's unique name
   * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getParticipantsInsideVideoRoom/).
   */
  async getParticipantsInsideVideoRoom(
    { uniqueName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LeadApplicationValidator.getParticipantsInsideVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadApplicationValidator.getParticipantsInsideVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Lead > getParticipantsInsideVideoRoom \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadApplicationModel.GetParticipantsInsideVideoRoomResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Lead > getParticipantsInsideVideoRoom \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadApplicationValidator.GetTicketParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
   * @name getTicket
   * @summary: Get Ticket with the specific id
   * @description: Get Ticket with the specific id, this is used to view the ticket details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTicket/).
   */
  async getTicket(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadApplicationValidator.getTicket().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LeadApplicationValidator.getTicket().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Lead > getTicket \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadApplicationModel.Ticket().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Lead > getTicket \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadApplicationValidator.GetTokenForVideoRoomParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>} -
   *   Success response
   * @name getTokenForVideoRoom
   * @summary: Get Token to join a specific Video Room using it's unqiue name
   * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTokenForVideoRoom/).
   */
  async getTokenForVideoRoom(
    { uniqueName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadApplicationValidator.getTokenForVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadApplicationValidator.getTokenForVideoRoom().validate(
      { uniqueName },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Lead > getTokenForVideoRoom \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadApplicationModel.GetTokenForVideoRoomResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Lead > getTokenForVideoRoom \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LeadApplicationValidator.SubmitCustomFormParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LeadApplicationModel.SubmitCustomFormResponse>} -
   *   Success response
   * @name submitCustomForm
   * @summary: Submit Response for a specific Custom Form using it's slug
   * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/submitCustomForm/).
   */
  async submitCustomForm(
    { slug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LeadApplicationValidator.submitCustomForm().validate(
      { slug, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LeadApplicationValidator.submitCustomForm().validate(
      { slug, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Lead > submitCustomForm \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LeadApplicationModel.SubmitCustomFormResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Lead > submitCustomForm \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Lead;
