const Joi = require("joi");

/**
 * @typedef ApikeyValidatorError
 * @property {ApikeyValidatorErrorMessage} [message]
 * @property {string} [sentry]
 */

/**
 * @typedef ApikeyValidatorErrorMessage
 * @property {ValidatorErrorBody} [api_key]
 */

/**
 * @typedef BadRequestSchema
 * @property {string} [message] - Failure message.
 * @property {string} [status] - Response status.
 */

/**
 * @typedef CastToStringFail
 * @property {string} [message]
 * @property {string} [sentry]
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
 * @typedef FeedidValidatorError
 * @property {FeedidValidatorErrorMessage} [message]
 * @property {string} [sentry]
 */

/**
 * @typedef FeedidValidatorErrorMessage
 * @property {ValidatorErrorBody} [feedid]
 */

/**
 * @typedef GenericSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef InvalidID
 * @property {string} [message]
 * @property {string} [sentry]
 */

/**
 * @typedef InvalidInputRequiredByteOrHexError
 * @property {string} [message]
 * @property {string} [sentry]
 */

/**
 * @typedef InvalidRangeErrorReqPositive
 * @property {number} [code]
 * @property {string} [message]
 * @property {string} [sentry]
 */

/**
 * @typedef NameValidatorError
 * @property {NameValidatorErrorMessage} [message]
 * @property {string} [sentry]
 */

/**
 * @typedef NameValidatorErrorMessage
 * @property {ValidatorErrorBody} [name]
 */

/**
 * @typedef NotFound
 * @property {string} [message] - Failure message.
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PasswordValidatorError
 * @property {PasswordValidatorErrorMessage} [message]
 * @property {string} [sentry]
 */

/**
 * @typedef PasswordValidatorErrorMessage
 * @property {ValidatorErrorBody} [password]
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

/**
 * @typedef UsernameValidatorError
 * @property {UsernameValidatorErrorMessage} [message]
 * @property {string} [sentry]
 */

/**
 * @typedef UsernameValidatorErrorMessage
 * @property {ValidatorErrorBody} [username]
 */

/**
 * @typedef ValidatorErrorBody
 * @property {string} [kind]
 * @property {string} [message]
 * @property {string} [name]
 * @property {string} [path]
 * @property {ValidatorErrorMessageProperties} [properties]
 */

/**
 * @typedef ValidatorErrorMessageProperties
 * @property {string} [message]
 * @property {string} [path]
 * @property {string} [type]
 */

class CommunicationApplicationModel {
  /** @returns {ApikeyValidatorError} */
  static ApikeyValidatorError() {
    return Joi.object({
      message: CommunicationApplicationModel.ApikeyValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }

  /** @returns {ApikeyValidatorErrorMessage} */
  static ApikeyValidatorErrorMessage() {
    return Joi.object({
      api_key: CommunicationApplicationModel.ValidatorErrorBody(),
    });
  }

  /** @returns {BadRequestSchema} */
  static BadRequestSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {CastToStringFail} */
  static CastToStringFail() {
    return Joi.object({
      message: Joi.string().allow(""),
      sentry: Joi.string().allow(""),
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

  /** @returns {FeedidValidatorError} */
  static FeedidValidatorError() {
    return Joi.object({
      message: CommunicationApplicationModel.FeedidValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }

  /** @returns {FeedidValidatorErrorMessage} */
  static FeedidValidatorErrorMessage() {
    return Joi.object({
      feedid: CommunicationApplicationModel.ValidatorErrorBody(),
    });
  }

  /** @returns {GenericSuccess} */
  static GenericSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {InvalidID} */
  static InvalidID() {
    return Joi.object({
      message: Joi.string().allow(""),
      sentry: Joi.string().allow(""),
    });
  }

  /** @returns {InvalidInputRequiredByteOrHexError} */
  static InvalidInputRequiredByteOrHexError() {
    return Joi.object({
      message: Joi.string().allow(""),
      sentry: Joi.string().allow(""),
    });
  }

  /** @returns {InvalidRangeErrorReqPositive} */
  static InvalidRangeErrorReqPositive() {
    return Joi.object({
      code: Joi.number(),
      message: Joi.string().allow(""),
      sentry: Joi.string().allow(""),
    });
  }

  /** @returns {NameValidatorError} */
  static NameValidatorError() {
    return Joi.object({
      message: CommunicationApplicationModel.NameValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }

  /** @returns {NameValidatorErrorMessage} */
  static NameValidatorErrorMessage() {
    return Joi.object({
      name: CommunicationApplicationModel.ValidatorErrorBody(),
    });
  }

  /** @returns {NotFound} */
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PasswordValidatorError} */
  static PasswordValidatorError() {
    return Joi.object({
      message: CommunicationApplicationModel.PasswordValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }

  /** @returns {PasswordValidatorErrorMessage} */
  static PasswordValidatorErrorMessage() {
    return Joi.object({
      password: CommunicationApplicationModel.ValidatorErrorBody(),
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

  /** @returns {UsernameValidatorError} */
  static UsernameValidatorError() {
    return Joi.object({
      message: CommunicationApplicationModel.UsernameValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }

  /** @returns {UsernameValidatorErrorMessage} */
  static UsernameValidatorErrorMessage() {
    return Joi.object({
      username: CommunicationApplicationModel.ValidatorErrorBody(),
    });
  }

  /** @returns {ValidatorErrorBody} */
  static ValidatorErrorBody() {
    return Joi.object({
      kind: Joi.string().allow(""),
      message: Joi.string().allow(""),
      name: Joi.string().allow(""),
      path: Joi.string().allow(""),
      properties: CommunicationApplicationModel.ValidatorErrorMessageProperties(),
    });
  }

  /** @returns {ValidatorErrorMessageProperties} */
  static ValidatorErrorMessageProperties() {
    return Joi.object({
      message: Joi.string().allow(""),
      path: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
}
module.exports = CommunicationApplicationModel;
