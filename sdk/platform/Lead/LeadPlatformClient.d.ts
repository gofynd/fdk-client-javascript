export = Lead;
declare class Lead {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     * @returns {Promise<TicketHistory>} - Success response
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: {
        id: string;
        body: TicketHistoryPayload;
    }): Promise<TicketHistory>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddTicketPayload} arg.body
     * @returns {Promise<Ticket>} - Success response
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket
     */
    createTicket({ body }?: {
        body: AddTicketPayload;
    }): Promise<Ticket>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     * @returns {Promise<Ticket>} - Success response
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editTicket({ id, body }?: {
        id: string;
        body: EditTicketPayload;
    }): Promise<Ticket>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which feedbacks are to be fetched
     * @returns {Promise<TicketFeedbackList>} - Success response
     * @summary: Gets a list of feedback submitted against that ticket
     * @description: Gets a list of feedback submitted against that ticket
     */
    getFeedbacks({ id }?: {
        id: string;
    }): Promise<TicketFeedbackList>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<CloseVideoRoomResponse>} - Success response
     * @summary: Get general support configuration.
     * @description: Get general support configuration.
     */
    getGeneralConfig({}?: any): Promise<CloseVideoRoomResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Tiket ID of the ticket to be fetched
     * @returns {Promise<Ticket>} - Success response
     * @summary: Retreives ticket details of a company level ticket with ticket ID
     * @description: Retreives ticket details of a company level ticket
     */
    getTicket({ id }?: {
        id: string;
    }): Promise<Ticket>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is to be fetched
     * @returns {Promise<TicketHistoryList>} - Success response
     * @summary: Gets history list for specific company level ticket
     * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getTicketHistory({ id }?: {
        id: string;
    }): Promise<TicketHistoryList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @returns {Promise<TicketList>} - Success response
     * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
     * @description: Gets the list of company level tickets and/or ticket filters
     */
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: PriorityEnum;
        category?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<TicketList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
     * @description: Gets the list of company level tickets and/or ticket filters
     */
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: PriorityEnum;
        category?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of video room
     * @returns {Promise<GetTokenForVideoRoomResponse>} - Success response
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<GetTokenForVideoRoomResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @returns {Promise<GetParticipantsInsideVideoRoomResponse>} - Success response
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): Promise<GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which feedback is to be submitted
     * @param {TicketFeedbackPayload} arg.body
     * @returns {Promise<TicketFeedback>} - Success response
     * @summary: Submit a response for feeback form against that ticket
     * @description: Submit a response for feeback form against that ticket
     */
    submitFeedback({ id, body }?: {
        id: string;
        body: TicketFeedbackPayload;
    }): Promise<TicketFeedback>;
}
import Paginator = require("../../common/Paginator");
