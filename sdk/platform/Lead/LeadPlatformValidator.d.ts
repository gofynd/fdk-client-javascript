export = LeadPlatformValidator;
/**
 * @typedef createHistory
 * @property {string} id - Ticket ID for which history is created
 * @property {LeadPlatformModel.TicketHistoryPayload} body
 */
/**
 * @typedef createTicket
 * @property {LeadPlatformModel.AddTicketPayload} body
 */
/**
 * @typedef editTicket
 * @property {string} id - Ticket ID of ticket to be edited
 * @property {LeadPlatformModel.EditTicketPayload} body
 */
/**
 * @typedef getFeedbacks
 * @property {string} id - Ticket ID for which feedbacks are to be fetched
 */
/** @typedef getGeneralConfig */
/**
 * @typedef getTicket
 * @property {string} id - Tiket ID of the ticket to be fetched
 */
/**
 * @typedef getTicketHistory
 * @property {string} id - Ticket ID for which history is to be fetched
 */
/**
 * @typedef getTickets
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
 * @typedef getTokenForVideoRoom
 * @property {string} uniqueName - Unique name of video room
 */
/**
 * @typedef getVideoParticipants
 * @property {string} uniqueName - Unique name of Video Room
 */
/**
 * @typedef submitFeedback
 * @property {string} id - Ticket ID for which feedback is to be submitted
 * @property {LeadPlatformModel.TicketFeedbackPayload} body
 */
declare class LeadPlatformValidator {
}
declare namespace LeadPlatformValidator {
    export { createHistory, createTicket, editTicket, getFeedbacks, getGeneralConfig, getTicket, getTicketHistory, getTickets, getTokenForVideoRoom, getVideoParticipants, submitFeedback };
}
/** @returns {createHistory} */
declare function createHistory(): createHistory;
type createHistory = {
    /**
     * - Ticket ID for which history is created
     */
    id: string;
    body: LeadPlatformModel.TicketHistoryPayload;
};
/** @returns {createTicket} */
declare function createTicket(): createTicket;
type createTicket = {
    body: LeadPlatformModel.AddTicketPayload;
};
/** @returns {editTicket} */
declare function editTicket(): editTicket;
type editTicket = {
    /**
     * - Ticket ID of ticket to be edited
     */
    id: string;
    body: LeadPlatformModel.EditTicketPayload;
};
/** @returns {getFeedbacks} */
declare function getFeedbacks(): getFeedbacks;
type getFeedbacks = {
    /**
     * - Ticket ID for which feedbacks are to be fetched
     */
    id: string;
};
/** @returns {getGeneralConfig} */
declare function getGeneralConfig(): any;
type getGeneralConfig = any;
/** @returns {getTicket} */
declare function getTicket(): getTicket;
type getTicket = {
    /**
     * - Tiket ID of the ticket to be fetched
     */
    id: string;
};
/** @returns {getTicketHistory} */
declare function getTicketHistory(): getTicketHistory;
type getTicketHistory = {
    /**
     * - Ticket ID for which history is to be fetched
     */
    id: string;
};
/** @returns {getTickets} */
declare function getTickets(): getTickets;
type getTickets = {
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
/** @returns {getTokenForVideoRoom} */
declare function getTokenForVideoRoom(): getTokenForVideoRoom;
type getTokenForVideoRoom = {
    /**
     * - Unique name of video room
     */
    uniqueName: string;
};
/** @returns {getVideoParticipants} */
declare function getVideoParticipants(): getVideoParticipants;
type getVideoParticipants = {
    /**
     * - Unique name of Video Room
     */
    uniqueName: string;
};
/** @returns {submitFeedback} */
declare function submitFeedback(): submitFeedback;
type submitFeedback = {
    /**
     * - Ticket ID for which feedback is to be submitted
     */
    id: string;
    body: LeadPlatformModel.TicketFeedbackPayload;
};
import LeadPlatformModel = require("./LeadPlatformModel");
