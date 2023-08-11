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
     * @description: Close the video room and force all participants to leave. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/closeVideoRoom/).
     */
    closeVideoRoom({ uniqueName }?: LeadPlatformApplicationValidator.CloseVideoRoomParam): Promise<LeadPlatformModel.CloseVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.CreateCustomFormParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name createCustomForm
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createCustomForm/).
     */
    createCustomForm({ body }?: LeadPlatformApplicationValidator.CreateCustomFormParam): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.CreateNewHistoryParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
     * @name createNewHistory
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createNewHistory/).
     */
    createNewHistory({ id, body }?: LeadPlatformApplicationValidator.CreateNewHistoryParam): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformApplicationValidator.EditCustomFormParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name editCustomForm
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editCustomForm/).
     */
    editCustomForm({ slug, body }?: LeadPlatformApplicationValidator.EditCustomFormParam): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.EditNewTicketParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editNewTicket
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editNewTicket/).
     */
    editNewTicket({ id, body }?: LeadPlatformApplicationValidator.EditNewTicketParam): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetCustomFormParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get specific custom form using it's slug
     * @description: Get specific custom form using it's slug, this is used to view the form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getCustomForm/).
     */
    getCustomForm({ slug }?: LeadPlatformApplicationValidator.GetCustomFormParam): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.GetCustomFormsParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CustomFormList>} - Success response
     * @name getCustomForms
     * @summary: Get list of custom form
     * @description: Get list of custom form for given application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getCustomForms/).
     */
    getCustomForms({}?: any): Promise<LeadPlatformModel.CustomFormList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTicketParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getNewTicket
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTicket/).
     */
    getNewTicket({ id }?: LeadPlatformApplicationValidator.GetNewTicketParam): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTicketHistoryParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getNewTicketHistory
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTicketHistory/).
     */
    getNewTicketHistory({ id }?: LeadPlatformApplicationValidator.GetNewTicketHistoryParam): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTicketsParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getNewTickets
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTickets/).
     */
    getNewTickets({ items, filters, q, status, priority, category }?: LeadPlatformApplicationValidator.GetNewTicketsParam): Promise<LeadPlatformModel.TicketList>;
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
    getNewTokenForVideoRoom({ uniqueName }?: LeadPlatformApplicationValidator.GetNewTokenForVideoRoomParam): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
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
    getNewVideoParticipants({ uniqueName }?: LeadPlatformApplicationValidator.GetNewVideoParticipantsParam): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.OpenVideoRoomParam} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CreateVideoRoomResponse>} - Success response
     * @name openVideoRoom
     * @summary: Open a video room.
     * @description: Open a video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/openVideoRoom/).
     */
    openVideoRoom({ body }?: LeadPlatformApplicationValidator.OpenVideoRoomParam): Promise<LeadPlatformModel.CreateVideoRoomResponse>;
}
import LeadPlatformApplicationValidator = require("./LeadPlatformApplicationValidator");
import LeadPlatformModel = require("./LeadPlatformModel");
