export = LeadPlatformValidator;
/**
 * @typedef CreateHistoryParam
 * @property {string} id - Ticket ID for which history is created
 * @property {LeadPlatformModel.TicketHistoryPayload} body
 */
/**
 * @typedef CreateTicketParam
 * @property {LeadPlatformModel.AddTicketPayload} body
 */
/**
 * @typedef EditTicketParam
 * @property {string} id - Ticket ID of ticket to be edited
 * @property {LeadPlatformModel.EditTicketPayload} body
 */
/**
 * @typedef GetFeedbacksParam
 * @property {string} id - Ticket ID for which feedbacks are to be fetched
 */
/** @typedef GetGeneralConfigParam */
/**
 * @typedef GetTicketParam
 * @property {string} id - Tiket ID of the ticket to be fetched
 */
/**
 * @typedef GetTicketHistoryParam
 * @property {string} id - Ticket ID for which history is to be fetched
 */
/**
 * @typedef GetTicketsParam
 * @property {boolean} [items] - Decides that the reponse will contain the list of tickets
 * @property {boolean} [filters] - Decides that the reponse will contain the
 *   ticket filters
 * @property {string} [q] - Search through ticket titles and description
 * @property {string} [status] - Filter tickets on status
 * @property {LeadPlatformModel.PriorityEnum} [priority] - Filter tickets on priority
 * @property {string} [category] - Filter tickets on category
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
/**
 * @typedef GetTokenForVideoRoomParam
 * @property {string} uniqueName - Unique name of video room
 */
/**
 * @typedef GetVideoParticipantsParam
 * @property {string} uniqueName - Unique name of Video Room
 */
/**
 * @typedef SubmitFeedbackParam
 * @property {string} id - Ticket ID for which feedback is to be submitted
 * @property {LeadPlatformModel.TicketFeedbackPayload} body
 */
declare class LeadPlatformValidator {
    /** @returns {CreateHistoryParam} */
    static createHistory(): CreateHistoryParam;
    /** @returns {CreateTicketParam} */
    static createTicket(): CreateTicketParam;
    /** @returns {EditTicketParam} */
    static editTicket(): EditTicketParam;
    /** @returns {GetFeedbacksParam} */
    static getFeedbacks(): GetFeedbacksParam;
    /** @returns {GetGeneralConfigParam} */
    static getGeneralConfig(): any;
    /** @returns {GetTicketParam} */
    static getTicket(): GetTicketParam;
    /** @returns {GetTicketHistoryParam} */
    static getTicketHistory(): GetTicketHistoryParam;
    /** @returns {GetTicketsParam} */
    static getTickets(): GetTicketsParam;
    /** @returns {GetTokenForVideoRoomParam} */
    static getTokenForVideoRoom(): GetTokenForVideoRoomParam;
    /** @returns {GetVideoParticipantsParam} */
    static getVideoParticipants(): GetVideoParticipantsParam;
    /** @returns {SubmitFeedbackParam} */
    static submitFeedback(): SubmitFeedbackParam;
}
declare namespace LeadPlatformValidator {
    export { CreateHistoryParam, CreateTicketParam, EditTicketParam, GetFeedbacksParam, GetGeneralConfigParam, GetTicketParam, GetTicketHistoryParam, GetTicketsParam, GetTokenForVideoRoomParam, GetVideoParticipantsParam, SubmitFeedbackParam };
}
type CreateHistoryParam = {
    /**
     * - Ticket ID for which history is created
     */
    id: string;
    body: LeadPlatformModel.TicketHistoryPayload;
};
type CreateTicketParam = {
    body: LeadPlatformModel.AddTicketPayload;
};
type EditTicketParam = {
    /**
     * - Ticket ID of ticket to be edited
     */
    id: string;
    body: LeadPlatformModel.EditTicketPayload;
};
type GetFeedbacksParam = {
    /**
     * - Ticket ID for which feedbacks are to be fetched
     */
    id: string;
};
type GetTicketParam = {
    /**
     * - Tiket ID of the ticket to be fetched
     */
    id: string;
};
type GetTicketHistoryParam = {
    /**
     * - Ticket ID for which history is to be fetched
     */
    id: string;
};
type GetTicketsParam = {
    /**
     * - Decides that the reponse will contain the list of tickets
     */
    items?: boolean;
    /**
     * - Decides that the reponse will contain the
     * ticket filters
     */
    filters?: boolean;
    /**
     * - Search through ticket titles and description
     */
    q?: string;
    /**
     * - Filter tickets on status
     */
    status?: string;
    /**
     * - Filter tickets on priority
     */
    priority?: LeadPlatformModel.PriorityEnum;
    /**
     * - Filter tickets on category
     */
    category?: string;
    /**
     * - The page number to navigate through the given
     * set of results.
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
};
type GetTokenForVideoRoomParam = {
    /**
     * - Unique name of video room
     */
    uniqueName: string;
};
type GetVideoParticipantsParam = {
    /**
     * - Unique name of Video Room
     */
    uniqueName: string;
};
type SubmitFeedbackParam = {
    /**
     * - Ticket ID for which feedback is to be submitted
     */
    id: string;
    body: LeadPlatformModel.TicketFeedbackPayload;
};
type GetGeneralConfigParam = any;
import LeadPlatformModel = require("./LeadPlatformModel");
