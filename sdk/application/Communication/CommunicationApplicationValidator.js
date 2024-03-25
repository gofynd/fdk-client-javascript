const Joi = require("joi");

const CommunicationApplicationModel = require("./CommunicationApplicationModel");

/**
 * @typedef CreateAppPushtokenParam
 * @property {CommunicationApplicationModel.PushtokenReq} body
 */

/** @typedef GetCommunicationConsentParam */

/** @typedef GetCurrentCommunicationConsentParam */

/** @typedef GetOtpConfigurationParam */

/**
 * @typedef UpsertAppPushtokenParam
 * @property {CommunicationApplicationModel.PushtokenReq} body
 */

/**
 * @typedef UpsertCommunicationConsentParam
 * @property {CommunicationApplicationModel.CommunicationConsentReq} body
 */

/**
 * @typedef UpsertCurrentCommunicationConsentParam
 * @property {CommunicationApplicationModel.CommunicationConsentReq} body
 */

class CommunicationApplicationValidator {
  /** @returns {CreateAppPushtokenParam} */
  static createAppPushtoken() {
    return Joi.object({
      body: CommunicationApplicationModel.PushtokenReq().required(),
    }).required();
  }

  /** @returns {GetCommunicationConsentParam} */
  static getCommunicationConsent() {
    return Joi.object({});
  }

  /** @returns {GetCurrentCommunicationConsentParam} */
  static getCurrentCommunicationConsent() {
    return Joi.object({});
  }

  /** @returns {GetOtpConfigurationParam} */
  static getOtpConfiguration() {
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

  /** @returns {UpsertCurrentCommunicationConsentParam} */
  static upsertCurrentCommunicationConsent() {
    return Joi.object({
      body: CommunicationApplicationModel.CommunicationConsentReq().required(),
    }).required();
  }
}

module.exports = CommunicationApplicationValidator;
