export = Lead;
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {LeadPlatformApplicationValidator.CloseVideoRoomParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CloseVideoRoomResponse>} - Success response
     * @name closeVideoRoom
     * @summary: Close video room
     * @description: Terminate and close an active video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/closeVideoRoom/).
     */
    closeVideoRoom({ uniqueName, requestHeaders }?: LeadPlatformApplicationValidator.CloseVideoRoomParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CloseVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.CreateCustomFormParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name createCustomForm
     * @summary: Create custom form
     * @description: Create a new custom form for application users to fill - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createCustomForm/).
     */
    createCustomForm({ body, requestHeaders }?: LeadPlatformApplicationValidator.CreateCustomFormParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.CreateNewHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
     * @name createNewHistory
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createNewHistory/).
     */
    createNewHistory({ id, body, requestHeaders }?: LeadPlatformApplicationValidator.CreateNewHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformApplicationValidator.DeleteCustomFormParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name deleteCustomForm
     * @summary: Delete a custom form
     * @description: Delete a custom form using it's slug - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/deleteCustomForm/).
     */
    deleteCustomForm({ slug, requestHeaders }?: LeadPlatformApplicationValidator.DeleteCustomFormParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.EditCustomFormParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name editCustomForm
     * @summary: Edit custom form
     * @description: Modify the content and assosciated settings of a custom form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editCustomForm/).
     */
    editCustomForm({ slug, body, requestHeaders }?: LeadPlatformApplicationValidator.EditCustomFormParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.EditNewTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editNewTicket
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editNewTicket/).
     */
    editNewTicket({ id, body, requestHeaders }?: LeadPlatformApplicationValidator.EditNewTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetCustomFormParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get custom form
     * @description: Retrieve information about a custom form which includes corresponding field details and any validation regex required against that field or not - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getCustomForm/).
     */
    getCustomForm({ slug, requestHeaders }?: LeadPlatformApplicationValidator.GetCustomFormParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.GetCustomFormsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomFormList>} - Success response
     * @name getCustomForms
     * @summary: Get custom forms
     * @description: Retrieve a list of available custom forms. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getCustomForms/).
     */
    getCustomForms({ requestHeaders }?: any, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomFormList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getNewTicket
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTicket/).
     */
    getNewTicket({ id, requestHeaders }?: LeadPlatformApplicationValidator.GetNewTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTicketHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getNewTicketHistory
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTicketHistory/).
     */
    getNewTicketHistory({ id, requestHeaders }?: LeadPlatformApplicationValidator.GetNewTicketHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTicketsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getNewTickets
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTickets/).
     */
    getNewTickets({ items, filters, q, status, priority, category, requestHeaders }?: LeadPlatformApplicationValidator.GetNewTicketsParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTokenForVideoRoomParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getNewTokenForVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewTokenForVideoRoom/).
     */
    getNewTokenForVideoRoom({ uniqueName, requestHeaders }?: LeadPlatformApplicationValidator.GetNewTokenForVideoRoomParam, { responseHeaders }?: object): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewVideoParticipantsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getNewVideoParticipants
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getNewVideoParticipants/).
     */
    getNewVideoParticipants({ uniqueName, requestHeaders }?: LeadPlatformApplicationValidator.GetNewVideoParticipantsParam, { responseHeaders }?: object): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformApplicationValidator.OpenVideoRoomParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CreateVideoRoomResponse>} - Success response
     * @name openVideoRoom
     * @summary: Open video room
     * @description: Initiate and open a video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/openVideoRoom/).
     */
    openVideoRoom({ body, requestHeaders }?: LeadPlatformApplicationValidator.OpenVideoRoomParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CreateVideoRoomResponse>;
}
import LeadPlatformApplicationValidator = require("./LeadPlatformApplicationValidator");
import LeadPlatformModel = require("./LeadPlatformModel");
