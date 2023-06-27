const Joi = require("joi");

const CommunicationApplicationModel = require("./CommunicationApplicationModel");

/** @typedef getCommunicationConsent */

/**
 * @typedef upsertAppPushtoken
 * @property {CommunicationApplicationModel.PushtokenReq} body
 */

/**
 * @typedef upsertCommunicationConsent
 * @property {CommunicationApplicationModel.CommunicationConsentReq} body
 */

class CommunicationApplicationValidator {
  /** @returns {getCommunicationConsent} */
  static getCommunicationConsent() {
    return Joi.object({});
  }

  /** @returns {upsertAppPushtoken} */
  static upsertAppPushtoken() {
    return Joi.object({
      body: CommunicationApplicationModel.PushtokenReq().required(),
    }).required();
  }

  /** @returns {upsertCommunicationConsent} */
  static upsertCommunicationConsent() {
    return Joi.object({
      body: CommunicationApplicationModel.CommunicationConsentReq().required(),
    }).required();
  }
}

module.exports = CommunicationApplicationValidator;
