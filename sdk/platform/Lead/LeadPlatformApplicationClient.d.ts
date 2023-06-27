export = Lead;
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {LeadPlatformApplicationValidator.closeVideoRoom} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CloseVideoRoomResponse>} - Success response
     * @name closeVideoRoom
     * @summary: Close the video room and force all participants to leave.
     * @description: Close the video room and force all participants to leave.
     */
    closeVideoRoom({ uniqueName }?: LeadPlatformApplicationValidator.closeVideoRoom): Promise<LeadPlatformModel.CloseVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.createCustomForm} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name createCustomForm
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     */
    createCustomForm({ body }?: LeadPlatformApplicationValidator.createCustomForm): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.createHistory} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
     * @name createHistory
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: LeadPlatformApplicationValidator.createHistory): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformApplicationValidator.editCustomForm} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name editCustomForm
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     */
    editCustomForm({ slug, body }?: LeadPlatformApplicationValidator.editCustomForm): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.editTicket} arg - Arg object
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editTicket
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editTicket({ id, body }?: LeadPlatformApplicationValidator.editTicket): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.getCustomForm} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get specific custom form using it's slug
     * @description: Get specific custom form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: LeadPlatformApplicationValidator.getCustomForm): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.getCustomForms} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomFormList>} - Success response
     * @name getCustomForms
     * @summary: Get list of custom form
     * @description: Get list of custom form for given application
     */
    getCustomForms({}?: any): Promise<LeadPlatformModel.CustomFormList>;
    /**
     * @param {LeadPlatformApplicationValidator.getTicket} arg - Arg object
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID
     */
    getTicket({ id }?: LeadPlatformApplicationValidator.getTicket): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.getTicketHistory} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getTicketHistory
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getTicketHistory({ id }?: LeadPlatformApplicationValidator.getTicketHistory): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformApplicationValidator.getTickets} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getTickets
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters
     */
    getTickets({ items, filters, q, status, priority, category }?: LeadPlatformApplicationValidator.getTickets): Promise<LeadPlatformModel.TicketList>;
    /**
     * @param {LeadPlatformApplicationValidator.getTokenForVideoRoom} arg - Arg object
     * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: LeadPlatformApplicationValidator.getTokenForVideoRoom): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.getVideoParticipants} arg - Arg object
     * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getVideoParticipants
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getVideoParticipants({ uniqueName }?: LeadPlatformApplicationValidator.getVideoParticipants): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.openVideoRoom} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CreateVideoRoomResponse>} - Success response
     * @name openVideoRoom
     * @summary: Open a video room.
     * @description: Open a video room.
     */
    openVideoRoom({ body }?: LeadPlatformApplicationValidator.openVideoRoom): Promise<LeadPlatformModel.CreateVideoRoomResponse>;
}
import LeadPlatformApplicationValidator = require("./LeadPlatformApplicationValidator");
import LeadPlatformModel = require("./LeadPlatformModel");
