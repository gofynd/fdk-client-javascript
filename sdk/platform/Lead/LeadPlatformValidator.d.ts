export = LeadPlatformValidator;
/**
 * @typedef CreatePlatformTicketHistoryParam
 * @property {string} id - Ticket ID for which history is created
 * @property {LeadPlatformModel.TicketHistoryPayload} body
 */
/**
 * @typedef CreateTicketParam
 * @property {LeadPlatformModel.AddTicketPayload} body
 */
/**
 * @typedef EditPlatformTicketParam
 * @property {string} id - Ticket ID of ticket to be edited
 * @property {LeadPlatformModel.EditTicketPayload} body
 */
/** @typedef GetGeneralConfigParam */
/**
 * @typedef GetPlatformTicketParam
 * @property {string} id - Tiket ID of the ticket to be fetched
 */
/**
 * @typedef GetPlatformTicketHistoryParam
 * @property {string} id - Ticket ID for which history is to be fetched
 */
/**
 * @typedef GetPlatformTicketsParam
 * @property {boolean} [items] - Decides that the reponse will contain the list of tickets
 * @property {boolean} [filters] - Decides that the reponse will contain the
 *   ticket filters
 * @property {string} [q] - Search through ticket titles and description
 * @property {string} [status] - Filter tickets on status
 * @property {string} [priority] - Filter tickets on priority
 * @property {string} [category] - Filter tickets on category
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 */
declare class LeadPlatformValidator {
    /** @returns {CreatePlatformTicketHistoryParam} */
    static createPlatformTicketHistory(): CreatePlatformTicketHistoryParam;
    /** @returns {CreateTicketParam} */
    static createTicket(): CreateTicketParam;
    /** @returns {EditPlatformTicketParam} */
    static editPlatformTicket(): EditPlatformTicketParam;
    /** @returns {GetGeneralConfigParam} */
    static getGeneralConfig(): any;
    /** @returns {GetPlatformTicketParam} */
    static getPlatformTicket(): GetPlatformTicketParam;
    /** @returns {GetPlatformTicketHistoryParam} */
    static getPlatformTicketHistory(): GetPlatformTicketHistoryParam;
    /** @returns {GetPlatformTicketsParam} */
    static getPlatformTickets(): GetPlatformTicketsParam;
}
declare namespace LeadPlatformValidator {
    export { CreatePlatformTicketHistoryParam, CreateTicketParam, EditPlatformTicketParam, GetGeneralConfigParam, GetPlatformTicketParam, GetPlatformTicketHistoryParam, GetPlatformTicketsParam };
}
type CreatePlatformTicketHistoryParam = {
    /**
     * - Ticket ID for which history is created
     */
    id: string;
    body: LeadPlatformModel.TicketHistoryPayload;
};
type CreateTicketParam = {
    body: LeadPlatformModel.AddTicketPayload;
};
type EditPlatformTicketParam = {
    /**
     * - Ticket ID of ticket to be edited
     */
    id: string;
    body: LeadPlatformModel.EditTicketPayload;
};
type GetPlatformTicketParam = {
    /**
     * - Tiket ID of the ticket to be fetched
     */
    id: string;
};
type GetPlatformTicketHistoryParam = {
    /**
     * - Ticket ID for which history is to be fetched
     */
    id: string;
};
type GetPlatformTicketsParam = {
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
    priority?: string;
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
type GetGeneralConfigParam = any;
import LeadPlatformModel = require("./LeadPlatformModel");
