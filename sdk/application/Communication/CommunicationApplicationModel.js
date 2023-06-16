const Joi = require("joi");

class CommunicationModel {
  static ApikeyValidatorError() {
    return Joi.object({
      message: CommunicationModel.ApikeyValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }
  static ApikeyValidatorErrorMessage() {
    return Joi.object({
      api_key: CommunicationModel.ValidatorErrorBody(),
    });
  }
  static BadRequestSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static CastToStringFail() {
    return Joi.object({
      message: Joi.string().allow(""),
      sentry: Joi.string().allow(""),
    });
  }
  static CommunicationConsent() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      channels: CommunicationModel.CommunicationConsentChannels(),
      user_id: Joi.string().allow(""),
    });
  }
  static CommunicationConsentChannels() {
    return Joi.object({
      email: CommunicationModel.CommunicationConsentChannelsEmail(),
      sms: CommunicationModel.CommunicationConsentChannelsSms(),
      whatsapp: CommunicationModel.CommunicationConsentChannelsWhatsapp(),
    });
  }
  static CommunicationConsentChannelsEmail() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      response: Joi.string().allow(""),
    });
  }
  static CommunicationConsentChannelsSms() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      response: Joi.string().allow(""),
    });
  }
  static CommunicationConsentChannelsWhatsapp() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      phone_number: Joi.string().allow(""),
      response: Joi.string().allow(""),
    });
  }
  static CommunicationConsentReq() {
    return Joi.object({
      action: Joi.string().allow(""),
      channel: Joi.string().allow(""),
      response: Joi.string().allow(""),
    });
  }
  static CommunicationConsentRes() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      channels: CommunicationModel.CommunicationConsentChannels(),
      user_id: Joi.string().allow(""),
    });
  }
  static FeedidValidatorError() {
    return Joi.object({
      message: CommunicationModel.FeedidValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }
  static FeedidValidatorErrorMessage() {
    return Joi.object({
      feedid: CommunicationModel.ValidatorErrorBody(),
    });
  }
  static GenericSuccess() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
  static InvalidID() {
    return Joi.object({
      message: Joi.string().allow(""),
      sentry: Joi.string().allow(""),
    });
  }
  static InvalidInputRequiredByteOrHexError() {
    return Joi.object({
      message: Joi.string().allow(""),
      sentry: Joi.string().allow(""),
    });
  }
  static InvalidRangeErrorReqPositive() {
    return Joi.object({
      code: Joi.number(),
      message: Joi.string().allow(""),
      sentry: Joi.string().allow(""),
    });
  }
  static NameValidatorError() {
    return Joi.object({
      message: CommunicationModel.NameValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }
  static NameValidatorErrorMessage() {
    return Joi.object({
      name: CommunicationModel.ValidatorErrorBody(),
    });
  }
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
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
  static PasswordValidatorError() {
    return Joi.object({
      message: CommunicationModel.PasswordValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }
  static PasswordValidatorErrorMessage() {
    return Joi.object({
      password: CommunicationModel.ValidatorErrorBody(),
    });
  }
  static PushtokenReq() {
    return Joi.object({
      action: Joi.string().allow(""),
      bundle_identifier: Joi.string().allow(""),
      push_token: Joi.string().allow(""),
      type: Joi.string().allow(""),
      unique_device_id: Joi.string().allow(""),
    });
  }
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
  static UsernameValidatorError() {
    return Joi.object({
      message: CommunicationModel.UsernameValidatorErrorMessage(),
      sentry: Joi.string().allow(""),
    });
  }
  static UsernameValidatorErrorMessage() {
    return Joi.object({
      username: CommunicationModel.ValidatorErrorBody(),
    });
  }
  static ValidatorErrorBody() {
    return Joi.object({
      kind: Joi.string().allow(""),
      message: Joi.string().allow(""),
      name: Joi.string().allow(""),
      path: Joi.string().allow(""),
      properties: CommunicationModel.ValidatorErrorMessageProperties(),
    });
  }
  static ValidatorErrorMessageProperties() {
    return Joi.object({
      message: Joi.string().allow(""),
      path: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
}
module.exports = CommunicationModel;
