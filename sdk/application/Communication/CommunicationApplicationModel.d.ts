export = CommunicationApplicationModel;
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
 * @typedef EnabledObj
 * @property {boolean} [enabled]
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
 * @typedef GenericDelete
 * @property {boolean} [acknowledged]
 * @property {number} [affected]
 * @property {string} [message]
 * @property {string} [operation]
 */
/**
 * @typedef GenericError
 * @property {Message} [message]
 * @property {string} [sentry]
 */
/**
 * @typedef GenericPage
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
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
 * @typedef Message
 * @property {string} [info]
 * @property {string} [message]
 * @property {string} [operation]
 * @property {boolean} [success]
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
declare class CommunicationApplicationModel {
}
declare namespace CommunicationApplicationModel {
    export { ApikeyValidatorError, ApikeyValidatorErrorMessage, BadRequestSchema, CastToStringFail, CommunicationConsent, CommunicationConsentChannels, CommunicationConsentChannelsEmail, CommunicationConsentChannelsSms, CommunicationConsentChannelsWhatsapp, CommunicationConsentReq, CommunicationConsentRes, EnabledObj, FeedidValidatorError, FeedidValidatorErrorMessage, GenericDelete, GenericError, GenericPage, GenericSuccess, InvalidID, InvalidInputRequiredByteOrHexError, InvalidRangeErrorReqPositive, Message, NameValidatorError, NameValidatorErrorMessage, NotFound, Page, PasswordValidatorError, PasswordValidatorErrorMessage, PushtokenReq, PushtokenRes, UsernameValidatorError, UsernameValidatorErrorMessage, ValidatorErrorBody, ValidatorErrorMessageProperties };
}
/** @returns {ApikeyValidatorError} */
declare function ApikeyValidatorError(): ApikeyValidatorError;
type ApikeyValidatorError = {
    message?: ApikeyValidatorErrorMessage;
    sentry?: string;
};
/** @returns {ApikeyValidatorErrorMessage} */
declare function ApikeyValidatorErrorMessage(): ApikeyValidatorErrorMessage;
type ApikeyValidatorErrorMessage = {
    api_key?: ValidatorErrorBody;
};
/** @returns {BadRequestSchema} */
declare function BadRequestSchema(): BadRequestSchema;
type BadRequestSchema = {
    /**
     * - Failure message.
     */
    message?: string;
    /**
     * - Response status.
     */
    status?: string;
};
/** @returns {CastToStringFail} */
declare function CastToStringFail(): CastToStringFail;
type CastToStringFail = {
    message?: string;
    sentry?: string;
};
/** @returns {CommunicationConsent} */
declare function CommunicationConsent(): CommunicationConsent;
type CommunicationConsent = {
    app_id?: string;
    channels?: CommunicationConsentChannels;
    user_id?: string;
};
/** @returns {CommunicationConsentChannels} */
declare function CommunicationConsentChannels(): CommunicationConsentChannels;
type CommunicationConsentChannels = {
    email?: CommunicationConsentChannelsEmail;
    sms?: CommunicationConsentChannelsSms;
    whatsapp?: CommunicationConsentChannelsWhatsapp;
};
/** @returns {CommunicationConsentChannelsEmail} */
declare function CommunicationConsentChannelsEmail(): CommunicationConsentChannelsEmail;
type CommunicationConsentChannelsEmail = {
    display_name?: string;
    response?: string;
};
/** @returns {CommunicationConsentChannelsSms} */
declare function CommunicationConsentChannelsSms(): CommunicationConsentChannelsSms;
type CommunicationConsentChannelsSms = {
    display_name?: string;
    response?: string;
};
/** @returns {CommunicationConsentChannelsWhatsapp} */
declare function CommunicationConsentChannelsWhatsapp(): CommunicationConsentChannelsWhatsapp;
type CommunicationConsentChannelsWhatsapp = {
    country_code?: string;
    display_name?: string;
    phone_number?: string;
    response?: string;
};
/** @returns {CommunicationConsentReq} */
declare function CommunicationConsentReq(): CommunicationConsentReq;
type CommunicationConsentReq = {
    action?: string;
    channel?: string;
    response?: string;
};
/** @returns {CommunicationConsentRes} */
declare function CommunicationConsentRes(): CommunicationConsentRes;
type CommunicationConsentRes = {
    app_id?: string;
    channels?: CommunicationConsentChannels;
    user_id?: string;
};
/** @returns {EnabledObj} */
declare function EnabledObj(): EnabledObj;
type EnabledObj = {
    enabled?: boolean;
};
/** @returns {FeedidValidatorError} */
declare function FeedidValidatorError(): FeedidValidatorError;
type FeedidValidatorError = {
    message?: FeedidValidatorErrorMessage;
    sentry?: string;
};
/** @returns {FeedidValidatorErrorMessage} */
declare function FeedidValidatorErrorMessage(): FeedidValidatorErrorMessage;
type FeedidValidatorErrorMessage = {
    feedid?: ValidatorErrorBody;
};
/** @returns {GenericDelete} */
declare function GenericDelete(): GenericDelete;
type GenericDelete = {
    acknowledged?: boolean;
    affected?: number;
    message?: string;
    operation?: string;
};
/** @returns {GenericError} */
declare function GenericError(): GenericError;
type GenericError = {
    message?: Message;
    sentry?: string;
};
/** @returns {GenericPage} */
declare function GenericPage(): GenericPage;
type GenericPage = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {GenericSuccess} */
declare function GenericSuccess(): GenericSuccess;
type GenericSuccess = {
    success?: boolean;
};
/** @returns {InvalidID} */
declare function InvalidID(): InvalidID;
type InvalidID = {
    message?: string;
    sentry?: string;
};
/** @returns {InvalidInputRequiredByteOrHexError} */
declare function InvalidInputRequiredByteOrHexError(): InvalidInputRequiredByteOrHexError;
type InvalidInputRequiredByteOrHexError = {
    message?: string;
    sentry?: string;
};
/** @returns {InvalidRangeErrorReqPositive} */
declare function InvalidRangeErrorReqPositive(): InvalidRangeErrorReqPositive;
type InvalidRangeErrorReqPositive = {
    code?: number;
    message?: string;
    sentry?: string;
};
/** @returns {Message} */
declare function Message(): Message;
type Message = {
    info?: string;
    message?: string;
    operation?: string;
    success?: boolean;
};
/** @returns {NameValidatorError} */
declare function NameValidatorError(): NameValidatorError;
type NameValidatorError = {
    message?: NameValidatorErrorMessage;
    sentry?: string;
};
/** @returns {NameValidatorErrorMessage} */
declare function NameValidatorErrorMessage(): NameValidatorErrorMessage;
type NameValidatorErrorMessage = {
    name?: ValidatorErrorBody;
};
/** @returns {NotFound} */
declare function NotFound(): NotFound;
type NotFound = {
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PasswordValidatorError} */
declare function PasswordValidatorError(): PasswordValidatorError;
type PasswordValidatorError = {
    message?: PasswordValidatorErrorMessage;
    sentry?: string;
};
/** @returns {PasswordValidatorErrorMessage} */
declare function PasswordValidatorErrorMessage(): PasswordValidatorErrorMessage;
type PasswordValidatorErrorMessage = {
    password?: ValidatorErrorBody;
};
/** @returns {PushtokenReq} */
declare function PushtokenReq(): PushtokenReq;
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    type?: string;
    unique_device_id?: string;
};
/** @returns {PushtokenRes} */
declare function PushtokenRes(): PushtokenRes;
type PushtokenRes = {
    _id?: string;
    application_id?: string;
    bundle_identifier?: string;
    created_at?: string;
    expired_at?: string;
    platform?: string;
    push_token?: string;
    type?: string;
    unique_device_id?: string;
    updated_at?: string;
    user_id?: string;
};
/** @returns {UsernameValidatorError} */
declare function UsernameValidatorError(): UsernameValidatorError;
type UsernameValidatorError = {
    message?: UsernameValidatorErrorMessage;
    sentry?: string;
};
/** @returns {UsernameValidatorErrorMessage} */
declare function UsernameValidatorErrorMessage(): UsernameValidatorErrorMessage;
type UsernameValidatorErrorMessage = {
    username?: ValidatorErrorBody;
};
/** @returns {ValidatorErrorBody} */
declare function ValidatorErrorBody(): ValidatorErrorBody;
type ValidatorErrorBody = {
    kind?: string;
    message?: string;
    name?: string;
    path?: string;
    properties?: ValidatorErrorMessageProperties;
};
/** @returns {ValidatorErrorMessageProperties} */
declare function ValidatorErrorMessageProperties(): ValidatorErrorMessageProperties;
type ValidatorErrorMessageProperties = {
    message?: string;
    path?: string;
    type?: string;
};
