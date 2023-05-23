const Joi = require("joi");

const LeadModel = require("./LeadPlatformModel");
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

  static editTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadModel.EditTicketPayload().required(),
    }).required();
  }

  static getFeedbacks() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getGeneralConfig() {
    return Joi.object({}).required();
  }

  static getTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getTicketHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getTickets() {
    return Joi.object({
      items: Joi.boolean(),
      filters: Joi.boolean(),
      q: Joi.string().allow(""),
      status: Joi.string().allow(""),
      priority: LeadModel.PriorityEnum(),
      category: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getTokenForVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  static getVideoParticipants() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  static submitFeedback() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadModel.TicketFeedbackPayload().required(),
    }).required();
  }
}

module.exports = LeadValidator;
