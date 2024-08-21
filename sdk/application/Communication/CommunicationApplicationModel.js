const Joi = require("joi");

/**
 * @typedef CommunicationConsentReq
 * @property {string} [response] - Whether the user has responded to the inquiry
 *   regarding their preference for opting in or out of receiving communications.
 * @property {string} [action] - The user's choice to opt in or opt out of
 *   receiving communications.
 * @property {string} [channel] - The channel of communication the user has
 *   agreed to receive messages through.
 */

/**
 * @typedef CommunicationConsentRes
 * @property {string} [app_id] - The ID of the sales channel where the user has
 *   given their consent.
 * @property {string} [user_id] - Identifier which can uniquely identify the user.
 * @property {CommunicationConsentChannels} [channels]
 */

/**
 * @typedef CommunicationConsentChannelsEmail
 * @property {string} [response] - The user's choice to opt in or opt out of
 *   receiving communications.
 * @property {string} [display_name] - Name of the channel of communication the
 *   user has agreed to receive messages through.
 */

/**
 * @typedef CommunicationConsentChannelsSms
 * @property {string} [response] - The user's choice to opt in or opt out of
 *   receiving communications.
 * @property {string} [display_name] - Name of the channel of communication the
 *   user has agreed to receive messages through.
 */

/**
 * @typedef CommunicationConsentChannelsWhatsapp
 * @property {string} [response] - The user's choice to opt in or opt out of
 *   receiving communications.
 * @property {string} [display_name] - Name of the channel of communication the
 *   user has agreed to receive messages through.
 * @property {string} [country_code] - Alphanumeric identification code for the
 *   users country.
 * @property {string} [phone_number] - Phone number of the user that the user
 *   has accepted to receive communication through WhatsApp.
 */

/**
 * @typedef CommunicationConsentChannels
 * @property {CommunicationConsentChannelsEmail} [email]
 * @property {CommunicationConsentChannelsSms} [sms]
 * @property {CommunicationConsentChannelsWhatsapp} [whatsapp]
 */

/**
 * @typedef CommunicationConsent
 * @property {string} [app_id] - The ID of the sales channel where the user has
 *   given their consent.
 * @property {string} [user_id] - Identifier which can uniquely identify the user.
 * @property {CommunicationConsentChannels} [channels]
 */

/**
 * @typedef BadRequestSchema
 * @property {string} [status] - Error code indicating the type of issue.
 * @property {string} [message] - Error message providing details about the error.
 */

/**
 * @typedef PushtokenReq
 * @property {string} [action] - The type of operation to perform with the push
 *   token, such as create, update, or reset.
 * @property {string} [bundle_identifier] - Unique identifier used to identify a bundle.
 * @property {string} [push_token] - A string of codes containing comprehensive
 *   data that identifies a identity of requester.
 * @property {string} [unique_device_id] - Unique identifier used to identify a device.
 * @property {string} [type] - Source address of the requestee.
 */

/**
 * @typedef PushtokenRes
 * @property {string} [_id] - Key used to uniquely identify document that
 *   contains push token credentials.
 * @property {string} [bundle_identifier] - Unique identifier used to identify a bundle.
 * @property {string} [push_token] - A string of codes containing comprehensive
 *   data that identifies a identity of requester.
 * @property {string} [unique_device_id] - Unique identifier used to identify a device.
 * @property {string} [type] - Source address of the requester.
 * @property {string} [platform] - Source address of the requester.
 * @property {string} [application_id] - The ID of the sales channel associated
 *   with the push token.
 * @property {string} [user_id] - Identifier which can uniquely identify the user.
 * @property {string} [created_at] - The timestamp indicating when a record was
 *   initially created.
 * @property {string} [updated_at] - The timestamp indicating when a record was
 *   last modified or updated.
 * @property {string} [expired_at] - The timestamp indicating when a record is
 *   set to expire or become invalid.
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

  /** @returns {BadRequestSchema} */
  static BadRequestSchema() {
    return Joi.object({
      status: Joi.string().allow(""),
      message: Joi.string().allow(""),
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
}
module.exports = CommunicationApplicationModel;
