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
     * @summary: Create ticket history
     * @description: Create futher interactions on a company level ticket such as changing it's status, priority or replying to a ticket via a thread. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createPlatformTicketHistory/).
     */
    createPlatformTicketHistory({ id, body, requestHeaders }?: LeadPlatformValidator.CreatePlatformTicketHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformValidator.CreateTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Create ticket
     * @description: Create a new ticket at application level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createTicket/).
     */
    createTicket({ body, requestHeaders }?: LeadPlatformValidator.CreateTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.EditPlatformTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editPlatformTicket
     * @summary: Update a ticket
     * @description: Modify the content and settings of a specific company level ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editPlatformTicket/).
     */
    editPlatformTicket({ id, body, requestHeaders }?: LeadPlatformValidator.EditPlatformTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.GetFeedbacksParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketFeedbackList>} - Success response
     * @name getFeedbacks
     * @summary: Get feedbacks
     * @description: Get feedback information related to a ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getFeedbacks/).
     */
    getFeedbacks({ id, requestHeaders }?: LeadPlatformValidator.GetFeedbacksParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketFeedbackList>;
    /**
     * @param {LeadPlatformValidator.GetGeneralConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CloseVideoRoomResponse>} - Success response
     * @name getGeneralConfig
     * @summary: Get general configuration
     * @description: Get general configuration settings related to support system for company tickets - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getGeneralConfig/).
     */
    getGeneralConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<LeadPlatformModel.CloseVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.GetPlatformTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getPlatformTicket
     * @summary: Get a ticket
     * @description: Get detailed information about a specific ticket which is raised at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTicket/).
     */
    getPlatformTicket({ id, requestHeaders }?: LeadPlatformValidator.GetPlatformTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.GetPlatformTicketHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getPlatformTicketHistory
     * @summary: Get ticket history
     * @description: List history records for a company level ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTicketHistory/).
     */
    getPlatformTicketHistory({ id, requestHeaders }?: LeadPlatformValidator.GetPlatformTicketHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformValidator.GetPlatformTicketsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getPlatformTickets
     * @summary: List tickets
     * @description: List all tickets created within the platform at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTickets/).
     */
    getPlatformTickets({ items, filters, q, status, priority, category, pageNo, pageSize, requestHeaders, }?: LeadPlatformValidator.GetPlatformTicketsParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketList>;
    /**
     * @param {LeadPlatformValidator.GetPlatformVideoParticipantsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getPlatformVideoParticipants
     * @summary: List video Room Participants
     * @description: Get a list of participants in a platform video room - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformVideoParticipants/).
     */
    getPlatformVideoParticipants({ uniqueName, requestHeaders }?: LeadPlatformValidator.GetPlatformVideoParticipantsParam, { responseHeaders }?: object): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.GetTokenForPlatformVideoRoomParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForPlatformVideoRoom
     * @summary: Get video Room Token
     * @description: Get an access token for a platform video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTokenForPlatformVideoRoom/).
     */
    getTokenForPlatformVideoRoom({ uniqueName, requestHeaders }?: LeadPlatformValidator.GetTokenForPlatformVideoRoomParam, { responseHeaders }?: object): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.SubmitFeedbackParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketFeedback>} - Success response
     * @name submitFeedback
     * @summary: Submit feedback
     * @description: Provide feedback on a ticket and it's resolution. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/submitFeedback/).
     */
    submitFeedback({ id, body, requestHeaders }?: LeadPlatformValidator.SubmitFeedbackParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketFeedback>;
}
import LeadPlatformValidator = require("./LeadPlatformValidator");
import LeadPlatformModel = require("./LeadPlatformModel");
