const Joi = require("joi");

const LeadModel = require("./LeadApplicationModel");
class LeadValidator {
  static createHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadModel.TicketHistoryPayload().required(),
    }).required();
  }

  static createTicket() {
    return Joi.object({
      body: LeadModel.AddTicketPayload().required(),
    }).required();
  }

  static getCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getParticipantsInsideVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  static getTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getTokenForVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  static submitCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: LeadModel.CustomFormSubmissionPayload().required(),
    }).required();
  }
}

module.exports = LeadValidator;
