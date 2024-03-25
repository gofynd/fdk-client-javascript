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
 * @typedef EditNewTicketParam
 * @property {string} id - Ticket ID of ticket to be edited
 * @property {LeadPlatformModel.EditTicketPayload} body
 */
/**
 * @typedef GetCustomFormParam
 * @property {string} slug - Slug of form whose response is getting submitted
 */
/** @typedef GetCustomFormsParam */
/**
 * @typedef GetNewTicketParam
 * @property {string} id - Tiket ID of the ticket to be fetched
 */
/**
 * @typedef GetNewTicketHistoryParam
 * @property {string} id - Ticket ID for which history is to be fetched
 */
/**
 * @typedef GetNewTicketsParam
 * @property {boolean} [items] - Decides that the reponse will contain the list of tickets
 * @property {boolean} [filters] - Decides that the reponse will contain the
 *   ticket filters
 * @property {string} [q] - Search through ticket titles and description
 * @property {string} [status] - Filter tickets on status
 * @property {string} [priority] - Filter tickets on priority
 * @property {string} [category] - Filter tickets on category
 */
/**
 * @typedef GetNewTokenForVideoRoomParam
 * @property {string} uniqueName - Unique name of video room
 */
/**
 * @typedef GetNewVideoParticipantsParam
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
    /** @returns {CreateNewHistoryParam} */
    static createNewHistory(): CreateNewHistoryParam;
    /** @returns {DeleteCustomFormParam} */
    static deleteCustomForm(): DeleteCustomFormParam;
    /** @returns {EditCustomFormParam} */
    static editCustomForm(): EditCustomFormParam;
    /** @returns {EditNewTicketParam} */
    static editNewTicket(): EditNewTicketParam;
    /** @returns {GetCustomFormParam} */
    static getCustomForm(): GetCustomFormParam;
    /** @returns {GetCustomFormsParam} */
    static getCustomForms(): any;
    /** @returns {GetNewTicketParam} */
    static getNewTicket(): GetNewTicketParam;
    /** @returns {GetNewTicketHistoryParam} */
    static getNewTicketHistory(): GetNewTicketHistoryParam;
    /** @returns {GetNewTicketsParam} */
    static getNewTickets(): GetNewTicketsParam;
    /** @returns {GetNewTokenForVideoRoomParam} */
    static getNewTokenForVideoRoom(): GetNewTokenForVideoRoomParam;
    /** @returns {GetNewVideoParticipantsParam} */
    static getNewVideoParticipants(): GetNewVideoParticipantsParam;
    /** @returns {OpenVideoRoomParam} */
    static openVideoRoom(): OpenVideoRoomParam;
}
declare namespace LeadPlatformApplicationValidator {
    export { CloseVideoRoomParam, CreateCustomFormParam, CreateNewHistoryParam, DeleteCustomFormParam, EditCustomFormParam, EditNewTicketParam, GetCustomFormParam, GetCustomFormsParam, GetNewTicketParam, GetNewTicketHistoryParam, GetNewTicketsParam, GetNewTokenForVideoRoomParam, GetNewVideoParticipantsParam, OpenVideoRoomParam };
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
type EditNewTicketParam = {
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
type GetNewTicketParam = {
    /**
     * - Tiket ID of the ticket to be fetched
     */
    id: string;
};
type GetNewTicketHistoryParam = {
    /**
     * - Ticket ID for which history is to be fetched
     */
    id: string;
};
type GetNewTicketsParam = {
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
type GetNewTokenForVideoRoomParam = {
    /**
     * - Unique name of video room
     */
    uniqueName: string;
};
type GetNewVideoParticipantsParam = {
    /**
     * - Unique name of Video Room
     */
    uniqueName: string;
};
type OpenVideoRoomParam = {
    body: LeadPlatformModel.CreateVideoRoomPayload;
};
type GetCustomFormsParam = any;
import LeadPlatformModel = require("sdk/output/javascript/code/sdk/platform/Lead/LeadPlatformModel");
