export = LeadApplicationValidator;
/**
 * @typedef createHistory
 * @property {string} id - Ticket ID for which history is created
 * @property {LeadApplicationModel.TicketHistoryPayload} body
 */
/**
 * @typedef createTicket
 * @property {LeadApplicationModel.AddTicketPayload} body
 */
/**
 * @typedef getCustomForm
 * @property {string} slug - Slug of form whose response is getting submitted
 */
/**
 * @typedef getParticipantsInsideVideoRoom
 * @property {string} uniqueName - Unique name of Video Room
 */
/**
 * @typedef getTicket
 * @property {string} id - ID of ticket to be retrieved
 */
/**
 * @typedef getTokenForVideoRoom
 * @property {string} uniqueName - Unique name of Video Room
 */
/**
 * @typedef submitCustomForm
 * @property {string} slug - Slug of form whose response is getting submitted
 * @property {LeadApplicationModel.CustomFormSubmissionPayload} body
 */
declare class LeadApplicationValidator {
}
declare namespace LeadApplicationValidator {
    export { createHistory, createTicket, getCustomForm, getParticipantsInsideVideoRoom, getTicket, getTokenForVideoRoom, submitCustomForm };
}
/** @returns {createHistory} */
declare function createHistory(): createHistory;
type createHistory = {
    /**
     * - Ticket ID for which history is created
     */
    id: string;
    body: LeadApplicationModel.TicketHistoryPayload;
};
/** @returns {createTicket} */
declare function createTicket(): createTicket;
type createTicket = {
    body: LeadApplicationModel.AddTicketPayload;
};
/** @returns {getCustomForm} */
declare function getCustomForm(): getCustomForm;
type getCustomForm = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
};
/** @returns {getParticipantsInsideVideoRoom} */
declare function getParticipantsInsideVideoRoom(): getParticipantsInsideVideoRoom;
type getParticipantsInsideVideoRoom = {
    /**
     * - Unique name of Video Room
     */
    uniqueName: string;
};
/** @returns {getTicket} */
declare function getTicket(): getTicket;
type getTicket = {
    /**
     * - ID of ticket to be retrieved
     */
    id: string;
};
/** @returns {getTokenForVideoRoom} */
declare function getTokenForVideoRoom(): getTokenForVideoRoom;
type getTokenForVideoRoom = {
    /**
     * - Unique name of Video Room
     */
    uniqueName: string;
};
/** @returns {submitCustomForm} */
declare function submitCustomForm(): submitCustomForm;
type submitCustomForm = {
    /**
     * - Slug of form whose response is getting submitted
     */
    slug: string;
    body: LeadApplicationModel.CustomFormSubmissionPayload;
};
import LeadApplicationModel = require("./LeadApplicationModel");
