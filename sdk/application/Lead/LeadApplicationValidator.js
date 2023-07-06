const Joi = require("joi");

const LeadApplicationModel = require("./LeadApplicationModel");

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

class LeadApplicationValidator {
  /** @returns {createHistory} */
  static createHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadApplicationModel.TicketHistoryPayload().required(),
    }).required();
  }

  /** @returns {createTicket} */
  static createTicket() {
    return Joi.object({
      body: LeadApplicationModel.AddTicketPayload().required(),
    }).required();
  }

  /** @returns {getCustomForm} */
  static getCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getParticipantsInsideVideoRoom} */
  static getParticipantsInsideVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getTicket} */
  static getTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getTokenForVideoRoom} */
  static getTokenForVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {submitCustomForm} */
  static submitCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: LeadApplicationModel.CustomFormSubmissionPayload().required(),
    }).required();
  }
}

module.exports = LeadApplicationValidator;
