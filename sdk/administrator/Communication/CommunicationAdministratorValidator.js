const Joi = require("joi");

const CommunicationModel = require("./CommunicationAdministratorModel");
class CommunicationValidator {
  static sendSellerCommunicationAsynchronously() {
    return Joi.object({
      body: CommunicationModel.EngineRequest().required(),
    }).required();
  }

  static sendSellerCommunicationSynchronously() {
    return Joi.object({
      body: CommunicationModel.EngineRequest().required(),
    }).required();
  }
}

module.exports = CommunicationValidator;
