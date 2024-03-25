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
     * @summary: Create platform ticket history.
     * @description: Create futher interactions on a company level ticket such as changing it's status, priority or replying to a ticket via a thread. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createPlatformTicketHistory/).
     */
    createPlatformTicketHistory({ id, body, requestHeaders }?: LeadPlatformValidator.CreatePlatformTicketHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformValidator.CreateTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Create ticket.
     * @description: Create a new ticket at application level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/createTicket/).
     */
    createTicket({ body, requestHeaders }?: LeadPlatformValidator.CreateTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.EditPlatformTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editPlatformTicket
     * @summary: Edit platform ticket.
     * @description: Modify the content and settings of a specific company level ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/editPlatformTicket/).
     */
    editPlatformTicket({ id, body, requestHeaders }?: LeadPlatformValidator.EditPlatformTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.GetGeneralConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GeneralConfigResponse>} - Success response
     * @name getGeneralConfig
     * @summary: Get general configuration.
     * @description: Retrieve general configuration settings related to support system for company tickets - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getGeneralConfig/).
     */
    getGeneralConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<LeadPlatformModel.GeneralConfigResponse>;
    /**
     * @param {LeadPlatformValidator.GetPlatformTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getPlatformTicket
     * @summary: Get platform ticket.
     * @description: Retrieve detailed information about a specific ticket which is raised at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTicket/).
     */
    getPlatformTicket({ id, requestHeaders }?: LeadPlatformValidator.GetPlatformTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.GetPlatformTicketHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getPlatformTicketHistory
     * @summary: Get platform ticket history.
     * @description: Retrieve a list of history records for a company level ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTicketHistory/).
     */
    getPlatformTicketHistory({ id, requestHeaders }?: LeadPlatformValidator.GetPlatformTicketHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformValidator.GetPlatformTicketsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getPlatformTickets
     * @summary: Get platform tickets.
     * @description: Retrieve a list of tickets created within the platform at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformTickets/).
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
     * @param {string} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @returns {Paginator<LeadPlatformModel.TicketList>}
     * @summary: Get platform tickets.
     * @description: Retrieve a list of tickets created within the platform at company level
     */
    getPlatformTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
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
     * @summary: Get platform video participants.
     * @description: Retrieve a list of participants in a platform video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getPlatformVideoParticipants/).
     */
    getPlatformVideoParticipants({ uniqueName, requestHeaders }?: LeadPlatformValidator.GetPlatformVideoParticipantsParam, { responseHeaders }?: object): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.GetTokenForPlatformVideoRoomParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForPlatformVideoRoom
     * @summary: Get token for platform video room.
     * @description: Retrieve an access token for a platform video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/lead/getTokenForPlatformVideoRoom/).
     */
    getTokenForPlatformVideoRoom({ uniqueName, requestHeaders }?: LeadPlatformValidator.GetTokenForPlatformVideoRoomParam, { responseHeaders }?: object): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
}
import LeadPlatformValidator = require("sdk/output/javascript/code/sdk/platform/Lead/LeadPlatformValidator");
import LeadPlatformModel = require("sdk/output/javascript/code/sdk/platform/Lead/LeadPlatformModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
