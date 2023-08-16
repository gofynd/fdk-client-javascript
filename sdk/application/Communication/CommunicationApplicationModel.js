const Joi = require("joi");

/**
 * @typedef BadRequestSchema
 * @property {string} [message] - Failure message.
 * @property {string} [status] - Response status.
 */

/**
 * @typedef CommunicationConsent
 * @property {string} [app_id]
 * @property {CommunicationConsentChannels} [channels]
 * @property {string} [user_id]
 */

/**
 * @typedef CommunicationConsentChannels
 * @property {CommunicationConsentChannelsEmail} [email]
 * @property {CommunicationConsentChannelsSms} [sms]
 * @property {CommunicationConsentChannelsWhatsapp} [whatsapp]
 */

/**
 * @typedef CommunicationConsentChannelsEmail
 * @property {string} [display_name]
 * @property {string} [response]
 */

/**
 * @typedef CommunicationConsentChannelsSms
 * @property {string} [display_name]
 * @property {string} [response]
 */

/**
 * @typedef CommunicationConsentChannelsWhatsapp
 * @property {string} [country_code]
 * @property {string} [display_name]
 * @property {string} [phone_number]
 * @property {string} [response]
 */

/**
 * @typedef CommunicationConsentReq
 * @property {string} [action]
 * @property {string} [channel]
 * @property {string} [response]
 */

/**
 * @typedef CommunicationConsentRes
 * @property {string} [app_id]
 * @property {CommunicationConsentChannels} [channels]
 * @property {string} [user_id]
 */

/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [type]
 * @property {string} [unique_device_id]
 */

/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {string} [bundle_identifier]
 * @property {string} [created_at]
 * @property {string} [expired_at]
 * @property {string} [platform]
 * @property {string} [push_token]
 * @property {string} [type]
 * @property {string} [unique_device_id]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */

class CommunicationApplicationModel {
  /** @returns {BadRequestSchema} */
  static BadRequestSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {CommunicationConsent} */
  static CommunicationConsent() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      channels: CommunicationApplicationModel.CommunicationConsentChannels(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {CommunicationConsentChannels} */
  static CommunicationConsentChannels() {
    return Joi.object({
      email: CommunicationApplicationModel.CommunicationConsentChannelsEmail(),
      sms: CommunicationApplicationModel.CommunicationConsentChannelsSms(),
      whatsapp: CommunicationApplicationModel.CommunicationConsentChannelsWhatsapp(),
    });
  }

  /** @returns {CommunicationConsentChannelsEmail} */
  static CommunicationConsentChannelsEmail() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      response: Joi.string().allow(""),
    });
  }

  /** @returns {CommunicationConsentChannelsSms} */
  static CommunicationConsentChannelsSms() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      response: Joi.string().allow(""),
    });
  }

  /** @returns {CommunicationConsentChannelsWhatsapp} */
  static CommunicationConsentChannelsWhatsapp() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
      response: Joi.string().allow(""),
    });
  }

  /** @returns {CommunicationConsentReq} */
  static CommunicationConsentReq() {
    return Joi.object({
      action: Joi.string().allow(""),
      channel: Joi.string().allow(""),
      response: Joi.string().allow(""),
    });
  }

  /** @returns {CommunicationConsentRes} */
  static CommunicationConsentRes() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      channels: CommunicationApplicationModel.CommunicationConsentChannels(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {PushtokenReq} */
  static PushtokenReq() {
    return Joi.object({
      action: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
    });
  }

  /** @returns {PushtokenRes} */
  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      expired_at: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }
}
module.exports = CommunicationApplicationModel;
