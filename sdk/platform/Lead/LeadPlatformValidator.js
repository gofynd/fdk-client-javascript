const Joi = require("joi");

const LeadPlatformModel = require("./LeadPlatformModel");

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

class LeadPlatformValidator {
  /** @returns {CreatePlatformTicketHistoryParam} */
  static createPlatformTicketHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadPlatformModel.TicketHistoryPayload().required(),
    }).required();
  }

  /** @returns {CreateTicketParam} */
  static createTicket() {
    return Joi.object({
      body: LeadPlatformModel.AddTicketPayload().required(),
    }).required();
  }

  /** @returns {EditPlatformTicketParam} */
  static editPlatformTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadPlatformModel.EditTicketPayload().required(),
    }).required();
  }

  /** @returns {GetGeneralConfigParam} */
  static getGeneralConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetPlatformTicketParam} */
  static getPlatformTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPlatformTicketHistoryParam} */
  static getPlatformTicketHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPlatformTicketsParam} */
  static getPlatformTickets() {
    return Joi.object({
      items: Joi.boolean(),
      filters: Joi.boolean(),
      q: Joi.string().allow(""),
      status: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      category: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}

module.exports = LeadPlatformValidator;
