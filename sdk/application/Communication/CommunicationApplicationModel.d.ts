export = CommunicationApplicationModel;
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
 * @typedef BadRequestSchema
 * @property {string} [status] - Response status.
 * @property {string} [message] - Failure message.
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
declare class CommunicationApplicationModel {
}
declare namespace CommunicationApplicationModel {
    export { CommunicationConsentReq, CommunicationConsentRes, CommunicationConsentChannelsEmail, CommunicationConsentChannelsSms, CommunicationConsentChannelsWhatsapp, CommunicationConsentChannels, CommunicationConsent, BadRequestSchema, PushtokenReq, PushtokenRes };
}
/** @returns {CommunicationConsentReq} */
declare function CommunicationConsentReq(): CommunicationConsentReq;
type CommunicationConsentReq = {
    response?: string;
    action?: string;
    channel?: string;
};
/** @returns {CommunicationConsentRes} */
declare function CommunicationConsentRes(): CommunicationConsentRes;
type CommunicationConsentRes = {
    app_id?: string;
    user_id?: string;
    channels?: CommunicationConsentChannels;
};
/** @returns {CommunicationConsentChannelsEmail} */
declare function CommunicationConsentChannelsEmail(): CommunicationConsentChannelsEmail;
type CommunicationConsentChannelsEmail = {
    response?: string;
    display_name?: string;
};
/** @returns {CommunicationConsentChannelsSms} */
declare function CommunicationConsentChannelsSms(): CommunicationConsentChannelsSms;
type CommunicationConsentChannelsSms = {
    response?: string;
    display_name?: string;
};
/** @returns {CommunicationConsentChannelsWhatsapp} */
declare function CommunicationConsentChannelsWhatsapp(): CommunicationConsentChannelsWhatsapp;
type CommunicationConsentChannelsWhatsapp = {
    response?: string;
    display_name?: string;
    country_code?: string;
    phone_number?: string;
};
/** @returns {CommunicationConsentChannels} */
declare function CommunicationConsentChannels(): CommunicationConsentChannels;
type CommunicationConsentChannels = {
    email?: CommunicationConsentChannelsEmail;
    sms?: CommunicationConsentChannelsSms;
    whatsapp?: CommunicationConsentChannelsWhatsapp;
};
/** @returns {CommunicationConsent} */
declare function CommunicationConsent(): CommunicationConsent;
type CommunicationConsent = {
    app_id?: string;
    user_id?: string;
    channels?: CommunicationConsentChannels;
};
/** @returns {BadRequestSchema} */
declare function BadRequestSchema(): BadRequestSchema;
type BadRequestSchema = {
    /**
     * - Response status.
     */
    status?: string;
    /**
     * - Failure message.
     */
    message?: string;
};
/** @returns {PushtokenReq} */
declare function PushtokenReq(): PushtokenReq;
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
};
/** @returns {PushtokenRes} */
declare function PushtokenRes(): PushtokenRes;
type PushtokenRes = {
    _id?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
    platform?: string;
    application_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    expired_at?: string;
};
