export = LeadApplicationValidator;
/**
 * @typedef CreateHistoryParam
 * @property {string} id - Ticket ID for which history is created
 * @property {LeadApplicationModel.TicketHistoryPayload} body
 */
/**
 * @typedef CreateTicketParam
 * @property {LeadApplicationModel.AddTicketPayload} body
 */
/**
 * @typedef GetCustomFormParam
 * @property {string} slug - Slug of form whose response is getting submitted
 */
/**
 * @typedef GetTicketParam
 * @property {string} id - ID of ticket to be retrieved
 */
/**
 * @typedef SubmitCustomFormParam
 * @property {string} slug - Slug of form whose response is getting submitted
 * @property {LeadApplicationModel.CustomFormSubmissionPayload} body
 */
declare class LeadApplicationValidator {
    /** @returns {CreateHistoryParam} */
    static createHistory(): CreateHistoryParam;
    /** @returns {CreateTicketParam} */
    static createTicket(): CreateTicketParam;
    /** @returns {GetCustomFormParam} */
    static getCustomForm(): GetCustomFormParam;
    /** @returns {GetTicketParam} */
    static getTicket(): GetTicketParam;
    /** @returns {SubmitCustomFormParam} */
    static submitCustomForm(): SubmitCustomFormParam;
}
declare namespace LeadApplicationValidator {
    export { CreateHistoryParam, CreateTicketParam, GetCustomFormParam, GetTicketParam, SubmitCustomFormParam };
}
type CreateHistoryParam = {
    /**
     * - Ticket ID for which history is created
     */
    id: string;
    body: LeadApplicationModel.TicketHistoryPayload;
};
type CreateTicketParam = {
    body: LeadApplicationModel.AddTicketPayload;
};
type GetCustomFormParam = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
};
type GetTicketParam = {
    /**
     * - ID of ticket to be retrieved
     */
    id: string;
};
type SubmitCustomFormParam = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
    body: LeadApplicationModel.CustomFormSubmissionPayload;
};
import LeadApplicationModel = require("./LeadApplicationModel");
