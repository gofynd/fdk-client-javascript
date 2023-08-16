export = Lead;
declare class Lead {
    constructor(config: any);
    config: any;
    /**
     * @param {LeadPlatformValidator.CreateHistoryParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
     * @name createHistory
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createHistory/).
     */
    createHistory({ id, body }?: LeadPlatformValidator.CreateHistoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformValidator.CreateTicketParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createTicket/).
     */
    createTicket({ body }?: LeadPlatformValidator.CreateTicketParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.EditTicketParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editTicket
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editTicket/).
     */
    editTicket({ id, body }?: LeadPlatformValidator.EditTicketParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.GetFeedbacksParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketFeedbackList>} - Success response
     * @name getFeedbacks
     * @summary: Gets a list of feedback submitted against that ticket
     * @description: Gets a list of feedback submitted against that ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getFeedbacks/).
     */
    getFeedbacks({ id }?: LeadPlatformValidator.GetFeedbacksParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.TicketFeedbackList>;
    /**
     * @param {LeadPlatformValidator.GetGeneralConfigParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CloseVideoRoomResponse>} - Success response
     * @name getGeneralConfig
     * @summary: Get general support configuration.
     * @description: Get general support configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getGeneralConfig/).
     */
    getGeneralConfig({ headers }?: any): Promise<LeadPlatformModel.CloseVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.GetTicketParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Retreives ticket details of a company level ticket with ticket ID
     * @description: Retreives ticket details of a company level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTicket/).
     */
    getTicket({ id }?: LeadPlatformValidator.GetTicketParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.GetTicketHistoryParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getTicketHistory
     * @summary: Gets history list for specific company level ticket
     * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTicketHistory/).
     */
    getTicketHistory({ id }?: LeadPlatformValidator.GetTicketHistoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformValidator.GetTicketsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getTickets
     * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
     * @description: Gets the list of company level tickets and/or ticket filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTickets/).
     */
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize }?: LeadPlatformValidator.GetTicketsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.TicketList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {LeadPlatformModel.PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @returns {Paginator<LeadPlatformModel.TicketList>}
     * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
     * @description: Gets the list of company level tickets and/or ticket filters
     */
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: LeadPlatformModel.PriorityEnum;
        category?: string;
        pageSize?: number;
    }): Paginator<LeadPlatformModel.TicketList>;
    /**
     * @param {LeadPlatformValidator.GetTokenForVideoRoomParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTokenForVideoRoom/).
     */
    getTokenForVideoRoom({ uniqueName }?: LeadPlatformValidator.GetTokenForVideoRoomParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.GetVideoParticipantsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getVideoParticipants
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getVideoParticipants/).
     */
    getVideoParticipants({ uniqueName }?: LeadPlatformValidator.GetVideoParticipantsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.SubmitFeedbackParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketFeedback>} - Success response
     * @name submitFeedback
     * @summary: Submit a response for feeback form against that ticket
     * @description: Submit a response for feeback form against that ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/submitFeedback/).
     */
    submitFeedback({ id, body }?: LeadPlatformValidator.SubmitFeedbackParam, { headers }?: import("../PlatformAPIClient").Options): Promise<LeadPlatformModel.TicketFeedback>;
}
import LeadPlatformValidator = require("./LeadPlatformValidator");
import LeadPlatformModel = require("./LeadPlatformModel");
import Paginator = require("../../common/Paginator");
