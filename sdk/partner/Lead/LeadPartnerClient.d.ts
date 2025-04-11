export = Lead;
declare class Lead {
    constructor(config: any);
    config: any;
    /**
     * @param {LeadPartnerValidator.GetTicketsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LeadPartnerModel.TicketList>} - Success response
     * @name getTickets
     * @summary: Gets the list of partner level tickets and/or ticket filters depending on query params
     * @description: Gets the list of partner level tickets and/or ticket filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getTickets/).
     */
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, requestHeaders, }?: LeadPartnerValidator.GetTicketsParam, { responseHeaders }?: object): Promise<LeadPartnerModel.TicketList>;
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
     * @returns {Paginator<LeadPartnerModel.TicketList>}
     * @summary: Gets the list of partner level tickets and/or ticket filters depending on query params
     * @description: Gets the list of partner level tickets and/or ticket filters
     */
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageSize?: number;
    }): Paginator<LeadPartnerModel.TicketList>;
    /**
     * @param {LeadPartnerValidator.CreateTicketParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LeadPartnerModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Creates a partner level ticket
     * @description: Creates a partner level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/createTicket/).
     */
    createTicket({ body, requestHeaders }?: LeadPartnerValidator.CreateTicketParam, { responseHeaders }?: object): Promise<LeadPartnerModel.Ticket>;
    /**
     * @param {LeadPartnerValidator.GetTicketParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LeadPartnerModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Retreives ticket details of a partner level ticket with ticket ID
     * @description: Retreives ticket details of a partner level ticket - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getTicket/).
     */
    getTicket({ id, requestHeaders }?: LeadPartnerValidator.GetTicketParam, { responseHeaders }?: object): Promise<LeadPartnerModel.Ticket>;
    /**
     * @param {LeadPartnerValidator.EditTicketParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LeadPartnerModel.Ticket>} - Success response
     * @name editTicket
     * @summary: Edits ticket details of a partner level ticket
     * @description: Edits ticket details of a partner level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/editTicket/).
     */
    editTicket({ id, body, requestHeaders }?: LeadPartnerValidator.EditTicketParam, { responseHeaders }?: object): Promise<LeadPartnerModel.Ticket>;
    /**
     * @param {LeadPartnerValidator.CreateHistoryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LeadPartnerModel.TicketHistory>} - Success response
     * @name createHistory
     * @summary: Create history for specific partner level ticket
     * @description: Create history for specific partner level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/createHistory/).
     */
    createHistory({ id, body, requestHeaders }?: LeadPartnerValidator.CreateHistoryParam, { responseHeaders }?: object): Promise<LeadPartnerModel.TicketHistory>;
    /**
     * @param {LeadPartnerValidator.GetTicketHistoryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LeadPartnerModel.TicketHistoryList>} - Success response
     * @name getTicketHistory
     * @summary: Gets history list for specific partner level ticket
     * @description: Gets history list for specific partner level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getTicketHistory/).
     */
    getTicketHistory({ id, requestHeaders }?: LeadPartnerValidator.GetTicketHistoryParam, { responseHeaders }?: object): Promise<LeadPartnerModel.TicketHistoryList>;
    /**
     * @param {LeadPartnerValidator.GetGeneralConfigParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LeadPartnerModel.GeneralConfigResponseSchema>} - Success response
     * @name getGeneralConfig
     * @summary: Get general support configuration.
     * @description: Get general support configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/lead/getGeneralConfig/).
     */
    getGeneralConfig({ requestHeaders }?: LeadPartnerValidator.GetGeneralConfigParam, { responseHeaders }?: object): Promise<LeadPartnerModel.GeneralConfigResponseSchema>;
}
import LeadPartnerModel = require("./LeadPartnerModel");
import Paginator = require("../../common/Paginator");
