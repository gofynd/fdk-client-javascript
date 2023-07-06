export = Lead;
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {LeadPlatformApplicationValidator.CloseVideoRoomParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CloseVideoRoomResponse>} - Success response
     * @name closeVideoRoom
     * @summary: Close the video room and force all participants to leave.
     * @description: Close the video room and force all participants to leave.
     */
    closeVideoRoom({ uniqueName }?: LeadPlatformApplicationValidator.CloseVideoRoomParam): Promise<LeadPlatformModel.CloseVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.CreateCustomFormParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name createCustomForm
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     */
    createCustomForm({ body }?: LeadPlatformApplicationValidator.CreateCustomFormParam): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.CreateHistoryParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
     * @name createHistory
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: LeadPlatformApplicationValidator.CreateHistoryParam): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformApplicationValidator.EditCustomFormParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name editCustomForm
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     */
    editCustomForm({ slug, body }?: LeadPlatformApplicationValidator.EditCustomFormParam): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.EditTicketParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editTicket
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editTicket({ id, body }?: LeadPlatformApplicationValidator.EditTicketParam): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetCustomFormParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get specific custom form using it's slug
     * @description: Get specific custom form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: LeadPlatformApplicationValidator.GetCustomFormParam): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.GetCustomFormsParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomFormList>} - Success response
     * @name getCustomForms
     * @summary: Get list of custom form
     * @description: Get list of custom form for given application
     */
    getCustomForms({}?: any): Promise<LeadPlatformModel.CustomFormList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetTicketParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID
     */
    getTicket({ id }?: LeadPlatformApplicationValidator.GetTicketParam): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetTicketHistoryParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getTicketHistory
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getTicketHistory({ id }?: LeadPlatformApplicationValidator.GetTicketHistoryParam): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetTicketsParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getTickets
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters
     */
    getTickets({ items, filters, q, status, priority, category }?: LeadPlatformApplicationValidator.GetTicketsParam): Promise<LeadPlatformModel.TicketList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetTokenForVideoRoomParam} arg
     *   - Arg object
     *
     * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: LeadPlatformApplicationValidator.GetTokenForVideoRoomParam): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.GetVideoParticipantsParam} arg
     *   - Arg object
     *
     * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getVideoParticipants
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getVideoParticipants({ uniqueName }?: LeadPlatformApplicationValidator.GetVideoParticipantsParam): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.OpenVideoRoomParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CreateVideoRoomResponse>} - Success response
     * @name openVideoRoom
     * @summary: Open a video room.
     * @description: Open a video room.
     */
    openVideoRoom({ body }?: LeadPlatformApplicationValidator.OpenVideoRoomParam): Promise<LeadPlatformModel.CreateVideoRoomResponse>;
}
import LeadPlatformApplicationValidator = require("./LeadPlatformApplicationValidator");
import LeadPlatformModel = require("./LeadPlatformModel");
