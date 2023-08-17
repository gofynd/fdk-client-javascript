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
    /** @returns {CloseVideoRoomParam} */
    static closeVideoRoom(): CloseVideoRoomParam;
    /** @returns {CreateCustomFormParam} */
    static createCustomForm(): CreateCustomFormParam;
    /** @returns {CreateHistoryParam} */
    static createHistory(): CreateHistoryParam;
    /** @returns {EditCustomFormParam} */
    static editCustomForm(): EditCustomFormParam;
    /** @returns {EditTicketParam} */
    static editTicket(): EditTicketParam;
    /** @returns {GetCustomFormParam} */
    static getCustomForm(): GetCustomFormParam;
    /** @returns {GetCustomFormsParam} */
    static getCustomForms(): any;
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
    /** @returns {OpenVideoRoomParam} */
    static openVideoRoom(): OpenVideoRoomParam;
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
type GetCustomFormsParam = any;
import LeadPlatformModel = require("./LeadPlatformModel");
