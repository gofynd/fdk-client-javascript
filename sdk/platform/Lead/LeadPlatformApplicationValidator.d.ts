export = LeadPlatformApplicationValidator;
/**
 * @typedef CloseVideoRoomParam
 * @property {string} uniqueName - Unique name of Video Room
 */
/**
 * @typedef CreateCustomFormParam
 * @property {LeadPlatformModel.CreateCustomFormPayload} body
 */
/**
 * @typedef CreateHistoryParam
 * @property {string} id - Ticket ID for which history is created
 * @property {LeadPlatformModel.TicketHistoryPayload} body
 */
/**
 * @typedef EditCustomFormParam
 * @property {string} slug - Slug of form whose response is getting submitted
 * @property {LeadPlatformModel.EditCustomFormPayload} body
 */
/**
 * @typedef EditTicketParam
 * @property {string} id - Ticket ID of ticket to be edited
 * @property {LeadPlatformModel.EditTicketPayload} body
 */
/**
 * @typedef GetCustomFormParam
 * @property {string} slug - Slug of form whose response is getting submitted
 */
/** @typedef GetCustomFormsParam */
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
 * @typedef OpenVideoRoomParam
 * @property {LeadPlatformModel.CreateVideoRoomPayload} body
 */
declare class LeadPlatformApplicationValidator {
    /** @returns {closeVideoRoom} */
    static closeVideoRoom(): closeVideoRoom;
    /** @returns {createCustomForm} */
    static createCustomForm(): createCustomForm;
    /** @returns {createHistory} */
    static createHistory(): createHistory;
    /** @returns {editCustomForm} */
    static editCustomForm(): editCustomForm;
    /** @returns {editTicket} */
    static editTicket(): editTicket;
    /** @returns {getCustomForm} */
    static getCustomForm(): getCustomForm;
    /** @returns {getCustomForms} */
    static getCustomForms(): getCustomForms;
    /** @returns {getTicket} */
    static getTicket(): getTicket;
    /** @returns {getTicketHistory} */
    static getTicketHistory(): getTicketHistory;
    /** @returns {getTickets} */
    static getTickets(): getTickets;
    /** @returns {getTokenForVideoRoom} */
    static getTokenForVideoRoom(): getTokenForVideoRoom;
    /** @returns {getVideoParticipants} */
    static getVideoParticipants(): getVideoParticipants;
    /** @returns {openVideoRoom} */
    static openVideoRoom(): openVideoRoom;
}
declare namespace LeadPlatformApplicationValidator {
    export { CloseVideoRoomParam, CreateCustomFormParam, CreateHistoryParam, EditCustomFormParam, EditTicketParam, GetCustomFormParam, GetCustomFormsParam, GetTicketParam, GetTicketHistoryParam, GetTicketsParam, GetTokenForVideoRoomParam, GetVideoParticipantsParam, OpenVideoRoomParam };
}
type CloseVideoRoomParam = {
    /**
     * - Unique name of Video Room
     */
    uniqueName: string;
};
type CreateCustomFormParam = {
    body: LeadPlatformModel.CreateCustomFormPayload;
};
type CreateHistoryParam = {
    /**
     * - Ticket ID for which history is created
     */
    id: string;
    body: LeadPlatformModel.TicketHistoryPayload;
};
type EditCustomFormParam = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
    body: LeadPlatformModel.EditCustomFormPayload;
};
type EditTicketParam = {
    /**
     * - Ticket ID of ticket to be edited
     */
    id: string;
    body: LeadPlatformModel.EditTicketPayload;
};
type GetCustomFormParam = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
};
type GetCustomFormsParam = any;
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
type OpenVideoRoomParam = {
    body: LeadPlatformModel.CreateVideoRoomPayload;
};
import LeadPlatformModel = require("./LeadPlatformModel");
