const Joi = require("joi");

const LeadPlatformModel = require("./LeadPlatformModel");

/**
 * @typedef closeVideoRoom
 * @property {string} uniqueName - Unique name of Video Room
 */

/**
 * @typedef createCustomForm
 * @property {LeadPlatformModel.CreateCustomFormPayload} body
 */

/**
 * @typedef createHistory
 * @property {string} id - Ticket ID for which history is created
 * @property {LeadPlatformModel.TicketHistoryPayload} body
 */

/**
 * @typedef editCustomForm
 * @property {string} slug - Slug of form whose response is getting submitted
 * @property {LeadPlatformModel.EditCustomFormPayload} body
 */

/**
 * @typedef editTicket
 * @property {string} id - Ticket ID of ticket to be edited
 * @property {LeadPlatformModel.EditTicketPayload} body
 */

/**
 * @typedef getCustomForm
 * @property {string} slug - Slug of form whose response is getting submitted
 */

/** @typedef getCustomForms */

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
 * @typedef openVideoRoom
 * @property {LeadPlatformModel.CreateVideoRoomPayload} body
 */

class LeadPlatformApplicationValidator {
  /** @returns {closeVideoRoom} */
  static closeVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {createCustomForm} */
  static createCustomForm() {
    return Joi.object({
      body: LeadPlatformModel.CreateCustomFormPayload().required(),
    }).required();
  }

  /** @returns {createHistory} */
  static createHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadPlatformModel.TicketHistoryPayload().required(),
    }).required();
  }

  /** @returns {editCustomForm} */
  static editCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: LeadPlatformModel.EditCustomFormPayload().required(),
    }).required();
  }

  /** @returns {editTicket} */
  static editTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadPlatformModel.EditTicketPayload().required(),
    }).required();
  }

  /** @returns {getCustomForm} */
  static getCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCustomForms} */
  static getCustomForms() {
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

  /** @returns {openVideoRoom} */
  static openVideoRoom() {
    return Joi.object({
      body: LeadPlatformModel.CreateVideoRoomPayload().required(),
    }).required();
  }
}

module.exports = LeadPlatformApplicationValidator;
