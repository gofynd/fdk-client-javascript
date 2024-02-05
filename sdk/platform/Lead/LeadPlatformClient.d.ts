export = Lead;
declare class Lead {
    constructor(config: any);
    config: any;
    /**
     * @param {LeadPlatformValidator.CreatePlatformTicketHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
     * @name createPlatformTicketHistory
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createPlatformTicketHistory/).
     */
    createPlatformTicketHistory({ id, body, requestHeaders }?: LeadPlatformValidator.CreatePlatformTicketHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformValidator.CreateTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createTicket/).
     */
    createTicket({ body, requestHeaders }?: LeadPlatformValidator.CreateTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.EditPlatformTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editPlatformTicket
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editPlatformTicket/).
     */
    editPlatformTicket({ id, body, requestHeaders }?: LeadPlatformValidator.EditPlatformTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.GetFeedbacksParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketFeedbackList>} - Success response
     * @name getFeedbacks
     * @summary: Gets a list of feedback submitted against that ticket
     * @description: Gets a list of feedback submitted against that ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getFeedbacks/).
     */
    getFeedbacks({ id, requestHeaders }?: LeadPlatformValidator.GetFeedbacksParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketFeedbackList>;
    /**
     * @param {LeadPlatformValidator.GetGeneralConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GeneralConfigResponse>} - Success response
     * @name getGeneralConfig
     * @summary: Get general support configuration.
     * @description: Get general support configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getGeneralConfig/).
     */
    getGeneralConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<LeadPlatformModel.GeneralConfigResponse>;
    /**
     * @param {LeadPlatformValidator.GetPlatformTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getPlatformTicket
     * @summary: Retreives ticket details of a company level ticket with ticket ID
     * @description: Retreives ticket details of a company level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTicket/).
     */
    getPlatformTicket({ id, requestHeaders }?: LeadPlatformValidator.GetPlatformTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.GetPlatformTicketHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getPlatformTicketHistory
     * @summary: Gets history list for specific company level ticket
     * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTicketHistory/).
     */
    getPlatformTicketHistory({ id, requestHeaders }?: LeadPlatformValidator.GetPlatformTicketHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformValidator.GetPlatformTicketsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getPlatformTickets
     * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
     * @description: Gets the list of company level tickets and/or ticket filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTickets/).
     */
    getPlatformTickets({ items, filters, q, status, priority, category, pageNo, pageSize, requestHeaders, }?: LeadPlatformValidator.GetPlatformTicketsParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketList>;
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
    getPlatformTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: LeadPlatformModel.PriorityEnum;
        category?: string;
        pageSize?: number;
    }): Paginator<LeadPlatformModel.TicketList>;
    /**
     * @param {LeadPlatformValidator.GetPlatformVideoParticipantsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getPlatformVideoParticipants
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformVideoParticipants/).
     */
    getPlatformVideoParticipants({ uniqueName, requestHeaders }?: LeadPlatformValidator.GetPlatformVideoParticipantsParam, { responseHeaders }?: object): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.GetTokenForPlatformVideoRoomParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForPlatformVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTokenForPlatformVideoRoom/).
     */
    getTokenForPlatformVideoRoom({ uniqueName, requestHeaders }?: LeadPlatformValidator.GetTokenForPlatformVideoRoomParam, { responseHeaders }?: object): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.SubmitFeedbackParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketFeedback>} - Success response
     * @name submitFeedback
     * @summary: Submit a response for feeback form against that ticket
     * @description: Submit a response for feeback form against that ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/submitFeedback/).
     */
    submitFeedback({ id, body, requestHeaders }?: LeadPlatformValidator.SubmitFeedbackParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketFeedback>;
}
import LeadPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Lead/LeadPlatformValidator");
import LeadPlatformModel = require("sdk/output/javascript/code/sdk/platform/Lead/LeadPlatformModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
