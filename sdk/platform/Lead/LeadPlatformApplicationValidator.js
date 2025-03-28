const Joi = require("joi");

const LeadPlatformModel = require("./LeadPlatformModel");

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

class LeadPlatformApplicationValidator {
  /** @returns {CreateCustomFormParam} */
  static createCustomForm() {
    return Joi.object({
      body: LeadPlatformModel.CreateCustomFormPayload().required(),
    }).required();
  }

  /** @returns {CreateNewHistoryParam} */
  static createNewHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadPlatformModel.TicketHistoryPayload().required(),
    }).required();
  }

  /** @returns {DeleteCustomFormParam} */
  static deleteCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {EditCustomFormParam} */
  static editCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: LeadPlatformModel.EditCustomFormPayload().required(),
    }).required();
  }

  /** @returns {EditTicketParam} */
  static editTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadPlatformModel.EditTicketPayload().required(),
    }).required();
  }

  /** @returns {GetCustomFormParam} */
  static getCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomFormsParam} */
  static getCustomForms() {
    return Joi.object({}).required();
  }

  /** @returns {GetTicketParam} */
  static getTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetTicketHistoryParam} */
  static getTicketHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetTicketsParam} */
  static getTickets() {
    return Joi.object({
      items: Joi.boolean(),
      filters: Joi.boolean(),
      q: Joi.string().allow(""),
      status: Joi.string().allow(""),
      priority: Joi.string().allow(""),
      category: Joi.string().allow(""),
    }).required();
  }
}

module.exports = LeadPlatformApplicationValidator;
