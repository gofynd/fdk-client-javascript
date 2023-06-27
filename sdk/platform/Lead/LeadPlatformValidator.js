const Joi = require("joi");

const LeadPlatformModel = require("./LeadPlatformModel");

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

class LeadPlatformValidator {
  /** @returns {createHistory} */
  static createHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadPlatformModel.TicketHistoryPayload().required(),
    }).required();
  }

  /** @returns {createTicket} */
  static createTicket() {
    return Joi.object({
      body: LeadPlatformModel.AddTicketPayload().required(),
    }).required();
  }

  /** @returns {editTicket} */
  static editTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadPlatformModel.EditTicketPayload().required(),
    }).required();
  }

  /** @returns {getFeedbacks} */
  static getFeedbacks() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getGeneralConfig} */
  static getGeneralConfig() {
    return Joi.object({}).required();
  }

  /** @returns {getTicket} */
  static getTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getTicketHistory} */
  static getTicketHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getTickets} */
  static getTickets() {
    return Joi.object({
      items: Joi.boolean(),
      filters: Joi.boolean(),
      q: Joi.string().allow(""),
      status: Joi.string().allow(""),
      priority: LeadPlatformModel.PriorityEnum(),
      category: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  /** @returns {getTokenForVideoRoom} */
  static getTokenForVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getVideoParticipants} */
  static getVideoParticipants() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {submitFeedback} */
  static submitFeedback() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadPlatformModel.TicketFeedbackPayload().required(),
    }).required();
  }
}

module.exports = LeadPlatformValidator;
