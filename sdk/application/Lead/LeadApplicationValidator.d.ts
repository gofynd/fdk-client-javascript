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
 * @typedef GetParticipantsInsideVideoRoomParam
 * @property {string} uniqueName - Unique name of Video Room
 */
/**
 * @typedef GetTicketParam
 * @property {string} id - ID of ticket to be retrieved
 */
/**
 * @typedef GetTokenForVideoRoomParam
 * @property {string} uniqueName - Unique name of Video Room
 */
/**
 * @typedef SubmitCustomFormParam
 * @property {string} slug - Slug of form whose response is getting submitted
 * @property {LeadApplicationModel.CustomFormSubmissionPayload} body
 */
declare class LeadApplicationValidator {
    /** @returns {createHistory} */
    static createHistory(): createHistory;
    /** @returns {createTicket} */
    static createTicket(): createTicket;
    /** @returns {getCustomForm} */
    static getCustomForm(): getCustomForm;
    /** @returns {getParticipantsInsideVideoRoom} */
    static getParticipantsInsideVideoRoom(): getParticipantsInsideVideoRoom;
    /** @returns {getTicket} */
    static getTicket(): getTicket;
    /** @returns {getTokenForVideoRoom} */
    static getTokenForVideoRoom(): getTokenForVideoRoom;
    /** @returns {submitCustomForm} */
    static submitCustomForm(): submitCustomForm;
}
declare namespace LeadApplicationValidator {
    export { CreateHistoryParam, CreateTicketParam, GetCustomFormParam, GetParticipantsInsideVideoRoomParam, GetTicketParam, GetTokenForVideoRoomParam, SubmitCustomFormParam };
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
type GetParticipantsInsideVideoRoomParam = {
    /**
     * - Unique name of Video Room
     */
    uniqueName: string;
};
type GetTicketParam = {
    /**
     * - ID of ticket to be retrieved
     */
    id: string;
};
type GetTokenForVideoRoomParam = {
    /**
     * - Unique name of Video Room
     */
    uniqueName: string;
};
type SubmitCustomFormParam = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
    body: LeadApplicationModel.CustomFormSubmissionPayload;
};
import LeadApplicationModel = require("./LeadApplicationModel");
