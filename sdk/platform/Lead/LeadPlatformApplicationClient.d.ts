export = Lead;
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {LeadPlatformApplicationValidator.CloseVideoRoomParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CloseVideoRoomResponse>} - Success response
     * @name closeVideoRoom
     * @summary: Close the video room and force all participants to leave.
     * @description: Close the video room and force all participants to leave. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/closeVideoRoom/).
     */
    closeVideoRoom({ uniqueName }?: LeadPlatformApplicationValidator.CloseVideoRoomParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.CloseVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.CreateCustomFormParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name createCustomForm
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createCustomForm/).
     */
    createCustomForm({ body }?: LeadPlatformApplicationValidator.CreateCustomFormParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.CreateHistoryParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
     * @name createHistory
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createHistory/).
     */
    createHistory({ id, body }?: LeadPlatformApplicationValidator.CreateHistoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformApplicationValidator.EditCustomFormParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name editCustomForm
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editCustomForm/).
     */
    editCustomForm({ slug, body }?: LeadPlatformApplicationValidator.EditCustomFormParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.EditTicketParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editTicket
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editTicket/).
     */
    editTicket({ id, body }?: LeadPlatformApplicationValidator.EditTicketParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetCustomFormParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get specific custom form using it's slug
     * @description: Get specific custom form using it's slug, this is used to view the form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getCustomForm/).
     */
    getCustomForm({ slug }?: LeadPlatformApplicationValidator.GetCustomFormParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomFormList>} - Success response
     * @name getCustomForms
     * @summary: Get list of custom form
     * @description: Get list of custom form for given application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getCustomForms/).
     */
    getCustomForms({ headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.CustomFormList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetTicketParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTicket/).
     */
    getTicket({ id }?: LeadPlatformApplicationValidator.GetTicketParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetTicketHistoryParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getTicketHistory
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTicketHistory/).
     */
    getTicketHistory({ id }?: LeadPlatformApplicationValidator.GetTicketHistoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetTicketsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getTickets
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTickets/).
     */
    getTickets({ items, filters, q, status, priority, category }?: LeadPlatformApplicationValidator.GetTicketsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.TicketList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetTokenForVideoRoomParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTokenForVideoRoom/).
     */
    getTokenForVideoRoom({ uniqueName }?: LeadPlatformApplicationValidator.GetTokenForVideoRoomParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.GetVideoParticipantsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getVideoParticipants
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getVideoParticipants/).
     */
    getVideoParticipants({ uniqueName }?: LeadPlatformApplicationValidator.GetVideoParticipantsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.OpenVideoRoomParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CreateVideoRoomResponse>} - Success response
     * @name openVideoRoom
     * @summary: Open a video room.
     * @description: Open a video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/openVideoRoom/).
     */
    openVideoRoom({ body }?: LeadPlatformApplicationValidator.OpenVideoRoomParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.CreateVideoRoomResponse>;
}
import LeadPlatformApplicationValidator = require("./LeadPlatformApplicationValidator");
import LeadPlatformModel = require("./LeadPlatformModel");
