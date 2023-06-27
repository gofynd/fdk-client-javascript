export = Lead;
declare class Lead {
    constructor(config: any);
    config: any;
    /**
     * @param {LeadPlatformValidator.createHistory} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
     * @name createHistory
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: LeadPlatformValidator.createHistory): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformValidator.createTicket} arg - Arg object
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket
     */
    createTicket({ body }?: LeadPlatformValidator.createTicket): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.editTicket} arg - Arg object
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editTicket
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editTicket({ id, body }?: LeadPlatformValidator.editTicket): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.getFeedbacks} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketFeedbackList>} - Success response
     * @name getFeedbacks
     * @summary: Gets a list of feedback submitted against that ticket
     * @description: Gets a list of feedback submitted against that ticket
     */
    getFeedbacks({ id }?: LeadPlatformValidator.getFeedbacks): Promise<LeadPlatformModel.TicketFeedbackList>;
    /**
     * @param {LeadPlatformValidator.getGeneralConfig} arg - Arg object
     * @returns {Promise<LeadPlatformModel.CloseVideoRoomResponse>} - Success response
     * @name getGeneralConfig
     * @summary: Get general support configuration.
     * @description: Get general support configuration.
     */
    getGeneralConfig({}?: any): Promise<LeadPlatformModel.CloseVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.getTicket} arg - Arg object
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Retreives ticket details of a company level ticket with ticket ID
     * @description: Retreives ticket details of a company level ticket
     */
    getTicket({ id }?: LeadPlatformValidator.getTicket): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformValidator.getTicketHistory} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getTicketHistory
     * @summary: Gets history list for specific company level ticket
     * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getTicketHistory({ id }?: LeadPlatformValidator.getTicketHistory): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformValidator.getTickets} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getTickets
     * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
     * @description: Gets the list of company level tickets and/or ticket filters
     */
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, }?: LeadPlatformValidator.getTickets): Promise<LeadPlatformModel.TicketList>;
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
     * @param {LeadPlatformValidator.getTokenForVideoRoom} arg - Arg object
     * @returns {Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: LeadPlatformValidator.getTokenForVideoRoom): Promise<LeadPlatformModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.getVideoParticipants} arg - Arg object
     * @returns {Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getVideoParticipants
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getVideoParticipants({ uniqueName }?: LeadPlatformValidator.getVideoParticipants): Promise<LeadPlatformModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadPlatformValidator.submitFeedback} arg - Arg object
     * @returns {Promise<LeadPlatformModel.TicketFeedback>} - Success response
     * @name submitFeedback
     * @summary: Submit a response for feeback form against that ticket
     * @description: Submit a response for feeback form against that ticket
     */
    submitFeedback({ id, body }?: LeadPlatformValidator.submitFeedback): Promise<LeadPlatformModel.TicketFeedback>;
}
import LeadPlatformValidator = require("./LeadPlatformValidator");
import LeadPlatformModel = require("./LeadPlatformModel");
import Paginator = require("../../common/Paginator");
