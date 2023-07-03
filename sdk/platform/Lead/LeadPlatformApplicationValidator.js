const Joi = require("joi");

const LeadModel = require("./LeadPlatformModel");
class LeadValidator {
  static closeVideoRoom() {
    return Joi.object({
      uniqueName: Joi.string().allow("").required(),
    }).required();
  }

  static createCustomForm() {
    return Joi.object({
      body: LeadModel.CreateCustomFormPayload().required(),
    }).required();
  }

  static createHistory() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadModel.TicketHistoryPayload().required(),
    }).required();
  }

  static editCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      body: LeadModel.EditCustomFormPayload().required(),
    }).required();
  }

  static editTicket() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: LeadModel.EditTicketPayload().required(),
    }).required();
  }

  static getCustomForm() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getCustomForms() {
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

  static openVideoRoom() {
    return Joi.object({
      body: LeadModel.CreateVideoRoomPayload().required(),
    }).required();
  }
}

module.exports = LeadValidator;
