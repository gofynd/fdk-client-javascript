const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
class CommunicationValidator {
  static getCommunicationConsent() {
    return Joi.object({});
  }

  static upsertCommunicationConsent() {
    return Joi.object({
      body: Validator.CommunicationConsentReq().required(),
    }).required();
  }

  static upsertAppPushtoken() {
    return Joi.object({
      body: Validator.PushtokenReq().required(),
    }).required();
  }
}
module.exports = CommunicationValidator;
