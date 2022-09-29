const Joi = require("joi");
const Validator = require("../PlatformModels");
class CommunicationValidator {
  static getSystemNotifications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}
module.exports = CommunicationValidator;
