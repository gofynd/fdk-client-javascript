const Joi = require("joi");

/**
 * @typedef CommunicationConsentReq
 * @property {string} [response]
 * @property {string} [action]
 * @property {string} [channel]
 */

/**
 * @typedef CommunicationConsentRes
 * @property {string} [app_id]
 * @property {string} [user_id]
 * @property {CommunicationConsentChannels} [channels]
 */

/**
 * @typedef CommunicationConsentChannelsEmail
 * @property {string} [response]
 * @property {string} [display_name]
 */

/**
 * @typedef CommunicationConsentChannelsSms
 * @property {string} [response]
 * @property {string} [display_name]
 */

/**
 * @typedef CommunicationConsentChannelsWhatsapp
 * @property {string} [response]
 * @property {string} [display_name]
 * @property {string} [country_code]
 * @property {string} [phone_number]
 */

/**
 * @typedef CommunicationConsentChannels
 * @property {CommunicationConsentChannelsEmail} [email]
 * @property {CommunicationConsentChannelsSms} [sms]
 * @property {CommunicationConsentChannelsWhatsapp} [whatsapp]
 */

/**
 * @typedef CommunicationConsent
 * @property {string} [app_id]
 * @property {string} [user_id]
 * @property {CommunicationConsentChannels} [channels]
 */

/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 */

/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */

/**
 * @typedef OtpConfigurationExpiryDuration
 * @property {number} time
 * @property {string} denomination
 */

/**
 * @typedef OtpConfigurationExpiry
 * @property {OtpConfigurationExpiryDuration} duration
 * @property {string} type
 */

/**
 * @typedef OtpConfigurationRateLimit
 * @property {number} [duration]
 * @property {number} [limit]
 */

/**
 * @typedef OtpConfiguration
 * @property {number} otp_length
 * @property {string} type
 * @property {OtpConfigurationExpiry} expiry
 * @property {OtpConfigurationRateLimit} [rate_limit]
 */

class CommunicationApplicationModel {
  /** @returns {CommunicationConsentReq} */
  static CommunicationConsentReq() {
    return Joi.object({
      response: Joi.string().allow(""),
      action: Joi.string().allow(""),
      channel: Joi.string().allow(""),
    });
  }

  /** @returns {CommunicationConsentRes} */
  static CommunicationConsentRes() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      channels: CommunicationApplicationModel.CommunicationConsentChannels(),
    });
  }

  /** @returns {CommunicationConsentChannelsEmail} */
  static CommunicationConsentChannelsEmail() {
    return Joi.object({
      response: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {CommunicationConsentChannelsSms} */
  static CommunicationConsentChannelsSms() {
    return Joi.object({
      response: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {CommunicationConsentChannelsWhatsapp} */
  static CommunicationConsentChannelsWhatsapp() {
    return Joi.object({
      response: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
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

  /** @returns {CommunicationConsent} */
  static CommunicationConsent() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      channels: CommunicationApplicationModel.CommunicationConsentChannels(),
    });
  }

  /** @returns {PushtokenReq} */
  static PushtokenReq() {
    return Joi.object({
      action: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PushtokenRes} */
  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      expired_at: Joi.string().allow(""),
    });
  }

  /** @returns {OtpConfigurationExpiryDuration} */
  static OtpConfigurationExpiryDuration() {
    return Joi.object({
      time: Joi.number().required(),
      denomination: Joi.string().allow("").required(),
    });
  }

  /** @returns {OtpConfigurationExpiry} */
  static OtpConfigurationExpiry() {
    return Joi.object({
      duration: CommunicationApplicationModel.OtpConfigurationExpiryDuration().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {OtpConfigurationRateLimit} */
  static OtpConfigurationRateLimit() {
    return Joi.object({
      duration: Joi.number(),
      limit: Joi.number(),
    });
  }

  /** @returns {OtpConfiguration} */
  static OtpConfiguration() {
    return Joi.object({
      otp_length: Joi.number().required(),
      type: Joi.string().allow("").required(),
      expiry: CommunicationApplicationModel.OtpConfigurationExpiry().required(),
      rate_limit: CommunicationApplicationModel.OtpConfigurationRateLimit(),
    });
  }
}
module.exports = CommunicationApplicationModel;
