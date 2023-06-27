export = LeadPlatformApplicationValidator;
/**
 * @typedef closeVideoRoom
 * @property {string} uniqueName - Unique name of Video Room
 */
/**
 * @typedef createCustomForm
 * @property {LeadPlatformModel.CreateCustomFormPayload} body
 */
/**
 * @typedef createHistory
 * @property {string} id - Ticket ID for which history is created
 * @property {LeadPlatformModel.TicketHistoryPayload} body
 */
/**
 * @typedef editCustomForm
 * @property {string} slug - Slug of form whose response is getting submitted
 * @property {LeadPlatformModel.EditCustomFormPayload} body
 */
/**
 * @typedef editTicket
 * @property {string} id - Ticket ID of ticket to be edited
 * @property {LeadPlatformModel.EditTicketPayload} body
 */
/**
 * @typedef getCustomForm
 * @property {string} slug - Slug of form whose response is getting submitted
 */
/** @typedef getCustomForms */
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
 * @typedef openVideoRoom
 * @property {LeadPlatformModel.CreateVideoRoomPayload} body
 */
declare class LeadPlatformApplicationValidator {
}
declare namespace LeadPlatformApplicationValidator {
    export { closeVideoRoom, createCustomForm, createHistory, editCustomForm, editTicket, getCustomForm, getCustomForms, getTicket, getTicketHistory, getTickets, getTokenForVideoRoom, getVideoParticipants, openVideoRoom };
}
/** @returns {closeVideoRoom} */
declare function closeVideoRoom(): closeVideoRoom;
type closeVideoRoom = {
    /**
     * - Unique name of Video Room
     */
    uniqueName: string;
};
/** @returns {createCustomForm} */
declare function createCustomForm(): createCustomForm;
type createCustomForm = {
    body: LeadPlatformModel.CreateCustomFormPayload;
};
/** @returns {createHistory} */
declare function createHistory(): createHistory;
type createHistory = {
    /**
     * - Ticket ID for which history is created
     */
    id: string;
    body: LeadPlatformModel.TicketHistoryPayload;
};
/** @returns {editCustomForm} */
declare function editCustomForm(): editCustomForm;
type editCustomForm = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
    body: LeadPlatformModel.EditCustomFormPayload;
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
/** @returns {getCustomForm} */
declare function getCustomForm(): getCustomForm;
type getCustomForm = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
};
/** @returns {getCustomForms} */
declare function getCustomForms(): any;
type getCustomForms = any;
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
/** @returns {openVideoRoom} */
declare function openVideoRoom(): openVideoRoom;
type openVideoRoom = {
    body: LeadPlatformModel.CreateVideoRoomPayload;
};
import LeadPlatformModel = require("./LeadPlatformModel");
