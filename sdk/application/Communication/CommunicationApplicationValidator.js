const Joi = require("joi");

const CommunicationApplicationModel = require("./CommunicationApplicationModel");

/** @typedef GetCommunicationConsentParam */

/**
 * @typedef UpsertAppPushtokenParam
 * @property {CommunicationApplicationModel.PushtokenReq} body
 */

/**
 * @typedef UpsertCommunicationConsentParam
 * @property {CommunicationApplicationModel.CommunicationConsentReq} body
 */

class CommunicationApplicationValidator {
  /** @returns {GetCommunicationConsentParam} */
  static getCommunicationConsent() {
    return Joi.object({});
  }

  /** @returns {UpsertAppPushtokenParam} */
  static upsertAppPushtoken() {
    return Joi.object({
      body: CommunicationApplicationModel.PushtokenReq().required(),
    }).required();
  }

  /** @returns {UpsertCommunicationConsentParam} */
  static upsertCommunicationConsent() {
    return Joi.object({
      body: CommunicationApplicationModel.CommunicationConsentReq().required(),
    }).required();
  }
}

module.exports = CommunicationApplicationValidator;
