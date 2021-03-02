const APIClient = require("./api_client");
const Configuration = require("./configuration");

const {
  TicketList,
  TicketHistoryList,
  CustomFormList,
  CreateCustomFormPayload,
  EditCustomFormPayload,
  EditTicketPayload,
  AgentChangePayload,
  CreateVideoRoomResponse,
  CloseVideoRoomResponse,
  CreateVideoRoomPayload,
  Filter,
  TicketHistoryPayload,
  CustomFormSubmissionPayload,
  GetTokenForVideoRoomResponse,
  GetParticipantsInsideVideoRoomResponse,
  SubmitCustomFormResponse,
  TicketContext,
  CreatedOn,
  Asset,
  TicketContent,
  APIError,
  AddTicketPayload,
  Priority,
  Status,
  Category,
  SubmitButton,
  PollForAssignment,
  CustomForm,
  TicketHistory,
  Ticket,
} = require("./schema");

class Lead {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * Summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * Description:  Gets the list of company level tickets and/or ticket filters
     * @param { string } companyId - Company ID for which the data will be returned
     * @param { boolean } [items] - Decides that the reponse will contain the list of tickets
     * @param { boolean } [filters] - Decides that the reponse will contain the ticket filters
     
    **/
  getTickets(companyId = required("companyId"), items, filters) {
    const query = {};
    query["items"] = items;
    query["filters"] = filters;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/ticket`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Creates a company level ticket
    * Description:  Creates a company level ticket
     * @param { string } companyId - Company ID for which the data will be returned
     body: AddTicketPayload,
    **/
  createTicket(companyId = required("companyId"), body) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/ticket`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
    * Description:  Gets the list of Application level Tickets and/or ticket filters
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for which the data will be returned
     * @param { boolean } [items] - Decides that the reponse will contain the list of tickets
     * @param { boolean } [filters] - Decides that the reponse will contain the ticket filters
     
    **/
  getTickets(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    items,
    filters
  ) {
    const query = {};
    query["items"] = items;
    query["filters"] = filters;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Retreives ticket details of a company level ticket with ticket ID
    * Description:  Retreives ticket details of a company level ticket
     * @param { string } companyId - Company ID for which the data will be returned
     * @param { string } ticketId - Tiket ID of the ticket to be fetched
     
    **/
  getTicket(
    companyId = required("companyId"),
    ticketId = required("ticketId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Edits ticket details of a company level ticket
    * Description:  Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param { string } companyId - Company ID for ticket
     * @param { string } ticketId - Ticket ID of ticket to be edited
     body: EditTicketPayload,
    **/
  editTicket(
    companyId = required("companyId"),
    ticketId = required("ticketId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Retreives ticket details of a application level ticket
    * Description:  Retreives ticket details of a application level ticket with ticket ID
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for which the data will be returned
     * @param { string } ticketId - Tiket ID of the ticket to be fetched
     
    **/
  getTicket(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    ticketId = required("ticketId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/application/${applicationId}/${ticketId}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Edits ticket details of a application level ticket
    * Description:  Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for ticket
     * @param { string } ticketId - Ticket ID of ticket to be edited
     body: EditTicketPayload,
    **/
  editTicket(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    ticketId = required("ticketId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket/${ticketId}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Create history for specific company level ticket
    * Description:  Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param { string } companyId - Company ID for ticket
     * @param { string } ticketId - Ticket ID for which history is created
     body: TicketHistoryPayload,
    **/
  createHistory(
    companyId = required("companyId"),
    ticketId = required("ticketId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Gets history list for specific company level ticket
    * Description:  Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param { string } companyId - Company ID for ticket
     * @param { string } ticketId - Ticket ID for which history is to be fetched
     
    **/
  getTicketHistory(
    companyId = required("companyId"),
    ticketId = required("ticketId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/ticket/${ticketId}/history`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Create history for specific application level ticket
    * Description:  Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for ticket
     * @param { string } ticketId - Ticket ID for which history is created
     body: TicketHistoryPayload,
    **/
  createHistory(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    ticketId = required("ticketId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket/${ticketId}/history`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Gets history list for specific application level ticket
    * Description:  Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param { string } companyId - Company ID of application
     * @param { string } applicationId - Application ID for ticket
     * @param { string } ticketId - Ticket ID for which history is to be fetched
     
    **/
  getTicketHistory(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    ticketId = required("ticketId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/ticket/${ticketId}/history`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get specific custom form using it's slug
    * Description:  Get specific custom form using it's slug, this is used to view the form.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for the form
     * @param { string } slug - Slug of form whose response is getting submitted
     
    **/
  getCustomForm(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    slug = required("slug")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form/${slug}`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Edit the given custom form
    * Description:  Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for the form
     * @param { string } slug - Slug of form whose response is getting submitted
     body: EditCustomFormPayload,
    **/
  editCustomForm(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    slug = required("slug"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form/${slug}`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get list of custom form
    * Description:  Get list of custom form for given application
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for the form
     
    **/
  getCustomForms(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Creates a new custom form
    * Description:  Creates a new custom form for given application
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for the form
     body: CreateCustomFormPayload,
    **/
  createCustomForm(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/form`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Get Token to join a specific Video Room using it's unqiue name
    * Description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for video room
     * @param { string } uniqueName - Unique name of video room
     
    **/
  getTokenForVideoRoom(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    uniqueName = required("uniqueName")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room/${uniqueName}/token`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Get participants of a specific Video Room using it's unique name
    * Description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for video room
     * @param { string } uniqueName - Unique name of Video Room
     
    **/
  getVideoParticipants(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    uniqueName = required("uniqueName")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room/${uniqueName}/participants`,
      query,
      {}
    );
  }

  /**
    *
    * Summary: Open a video room.
    * Description:  Open a video room.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for video room
     body: CreateVideoRoomPayload,
    **/
  openVideoRoom(
    companyId = required("companyId"),
    applicationId = required("applicationId"),
    body
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room`,
      query,
      body
    );
  }

  /**
    *
    * Summary: Close the video room and force all participants to leave.
    * Description:  Close the video room and force all participants to leave.
     * @param { string } companyId - Company ID of the application
     * @param { string } applicationId - Application ID for video room
     
    **/
  closeVideoRoom(
    companyId = required("companyId"),
    applicationId = required("applicationId")
  ) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/platform/lead/v1.0/company/${companyId}/application/${applicationId}/video/room`,
      query,
      {}
    );
  }
}

exports.Lead = Lead;
