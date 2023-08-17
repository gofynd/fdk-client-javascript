export = CommunicationApplicationModel;
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
declare class CommunicationApplicationModel {
}
declare namespace CommunicationApplicationModel {
    export { BadRequestSchema, CommunicationConsent, CommunicationConsentChannels, CommunicationConsentChannelsEmail, CommunicationConsentChannelsSms, CommunicationConsentChannelsWhatsapp, CommunicationConsentReq, CommunicationConsentRes, NotFound, Page, PushtokenReq, PushtokenRes };
}
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
