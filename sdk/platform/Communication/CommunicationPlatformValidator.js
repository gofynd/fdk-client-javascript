const Joi = require("joi");

const CommunicationModel = require("./CommunicationPlatformModel");
class CommunicationValidator {
  static getSystemNotifications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}

module.exports = CommunicationValidator;
