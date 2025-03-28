export = LeadPlatformApplicationValidator;
/**
 * @typedef CreateCustomFormParam
 * @property {LeadPlatformModel.CreateCustomFormPayload} body
 */
/**
 * @typedef CreateNewHistoryParam
 * @property {string} id - Ticket ID for which history is created
 * @property {LeadPlatformModel.TicketHistoryPayload} body
 */
/**
 * @typedef DeleteCustomFormParam
 * @property {string} slug - Slug of form whose response is getting submitted
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
 * @property {string} [priority] - Filter tickets on priority
 * @property {string} [category] - Filter tickets on category
 */
declare class LeadPlatformApplicationValidator {
    /** @returns {CreateCustomFormParam} */
    static createCustomForm(): CreateCustomFormParam;
    /** @returns {CreateNewHistoryParam} */
    static createNewHistory(): CreateNewHistoryParam;
    /** @returns {DeleteCustomFormParam} */
    static deleteCustomForm(): DeleteCustomFormParam;
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
}
declare namespace LeadPlatformApplicationValidator {
    export { CreateCustomFormParam, CreateNewHistoryParam, DeleteCustomFormParam, EditCustomFormParam, EditTicketParam, GetCustomFormParam, GetCustomFormsParam, GetTicketParam, GetTicketHistoryParam, GetTicketsParam };
}
type CreateCustomFormParam = {
    body: LeadPlatformModel.CreateCustomFormPayload;
};
type CreateNewHistoryParam = {
    /**
     * - Ticket ID for which history is created
     */
    id: string;
    body: LeadPlatformModel.TicketHistoryPayload;
};
type DeleteCustomFormParam = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
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
    priority?: string;
    /**
     * - Filter tickets on category
     */
    category?: string;
};
type GetCustomFormsParam = any;
import LeadPlatformModel = require("./LeadPlatformModel");
