
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
    Content,
    APIError,
    AddTicketPayload,
    Priority,
    Status,
    Category,
    SubmitButton,
    PollForAssignment,
    CustomForm,
    TicketHistory,
    Ticket
} = require("./schema");

    
class Lead {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Gets the list of company level tickets and/or ticket filters depending on query params
    * Description:  Gets the list of company level tickets and/or ticket filters
    **/
    getTickets(
        companyId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/ticket",
        );
    }
    
    /**
    *
    * Summary: Creates a company level ticket
    * Description:  Creates a company level ticket
    **/
    createTicket(
        companyId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "service/platform/lead/v1.0/company/{company_id}/ticket",
        );
    }
    
    /**
    *
    * Summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
    * Description:  Gets the list of Application level Tickets and/or ticket filters
    **/
    getTickets(
        companyId, opts
        applicationId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/ticket",
        );
    }
    
    /**
    *
    * Summary: Retreives ticket details of a company level ticket with ticket ID
    * Description:  Retreives ticket details of a company level ticket
    **/
    getTicket(
        companyId, opts
        ticketId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/ticket/{ticket_id}",
        );
    }
    
    /**
    *
    * Summary: Edits ticket details of a company level ticket
    * Description:  Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
    **/
    editTicket(
        companyId, opts
        ticketId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "service/platform/lead/v1.0/company/{company_id}/ticket/{ticket_id}",
        );
    }
    
    /**
    *
    * Summary: Retreives ticket details of a application level ticket
    * Description:  Retreives ticket details of a application level ticket with ticket ID
    **/
    getTicket(
        companyId, opts
        applicationId, opts
        ticketId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/ticket/application/{application_id}/{ticket_id}",
        );
    }
    
    /**
    *
    * Summary: Edits ticket details of a application level ticket
    * Description:  Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
    **/
    editTicket(
        companyId, opts
        applicationId, opts
        ticketId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/ticket/{ticket_id}",
        );
    }
    
    /**
    *
    * Summary: Create history for specific company level ticket
    * Description:  Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    **/
    createHistory(
        companyId, opts
        ticketId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "service/platform/lead/v1.0/company/{company_id}/ticket/{ticket_id}/history",
        );
    }
    
    /**
    *
    * Summary: Gets history list for specific company level ticket
    * Description:  Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    **/
    getTicketHistory(
        companyId, opts
        ticketId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/ticket/{ticket_id}/history",
        );
    }
    
    /**
    *
    * Summary: Create history for specific application level ticket
    * Description:  Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    **/
    createHistory(
        companyId, opts
        applicationId, opts
        ticketId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/ticket/{ticket_id}/history",
        );
    }
    
    /**
    *
    * Summary: Gets history list for specific application level ticket
    * Description:  Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    **/
    getTicketHistory(
        companyId, opts
        applicationId, opts
        ticketId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/ticket/{ticket_id}/history",
        );
    }
    
    /**
    *
    * Summary: Get specific custom form using it's slug
    * Description:  Get specific custom form using it's slug, this is used to view the form.
    **/
    getCustomForm(
        companyId, opts
        applicationId, opts
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/form/{slug}",
        );
    }
    
    /**
    *
    * Summary: Edit the given custom form
    * Description:  Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
    **/
    editCustomForm(
        companyId, opts
        applicationId, opts
        slug, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/form/{slug}",
        );
    }
    
    /**
    *
    * Summary: Get list of custom form
    * Description:  Get list of custom form for given application
    **/
    getCustomForms(
        companyId, opts
        applicationId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/form",
        );
    }
    
    /**
    *
    * Summary: Creates a new custom form
    * Description:  Creates a new custom form for given application
    **/
    createCustomForm(
        companyId, opts
        applicationId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/form",
        );
    }
    
    /**
    *
    * Summary: Get Token to join a specific Video Room using it's unqiue name
    * Description:  Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    **/
    getTokenForVideoRoom(
        companyId, opts
        applicationId, opts
        uniqueName, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/video/room/{unique_name}/token",
        );
    }
    
    /**
    *
    * Summary: Get participants of a specific Video Room using it's unique name
    * Description:  Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    **/
    getVideoParticipants(
        companyId, opts
        applicationId, opts
        uniqueName, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/video/room/{unique_name}/participants",
        );
    }
    
    /**
    *
    * Summary: Get video room id
    * Description:  Get video room id.
    **/
    createVideoRoom(
        companyId, opts
        applicationId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "service/platform/lead/v1.0/company/{company_id}/application/{application_id}/video/room",
        );
    }
    
}


exports.Lead = Lead;


