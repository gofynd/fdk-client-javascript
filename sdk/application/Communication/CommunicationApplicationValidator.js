const Joi = require("joi");

const CommunicationModel = require("./CommunicationApplicationModel");
class CommunicationValidator {
  static getCommunicationConsent() {
    return Joi.object({});
  }

  static upsertCommunicationConsent() {
    return Joi.object({
      body: CommunicationModel.CommunicationConsentReq().required(),
    }).required();
  }

  static upsertAppPushtoken() {
    return Joi.object({
      body: CommunicationModel.PushtokenReq().required(),
    }).required();
  }
}

module.exports = CommunicationValidator;
