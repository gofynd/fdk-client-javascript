const Joi = require("joi");

const CommunicationModel = require("./CommunicationApplicationModel");
class CommunicationValidator {
  static getCommunicationConsent() {
    return Joi.object({});
  }

  static upsertAppPushtoken() {
    return Joi.object({
      body: CommunicationModel.PushtokenReq().required(),
    }).required();
  }

  static upsertCommunicationConsent() {
    return Joi.object({
      body: CommunicationModel.CommunicationConsentReq().required(),
    }).required();
  }
}

module.exports = CommunicationValidator;
