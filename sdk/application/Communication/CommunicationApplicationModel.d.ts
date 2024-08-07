export = CommunicationApplicationModel;
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
declare class CommunicationApplicationModel {
}
declare namespace CommunicationApplicationModel {
    export { CommunicationConsentReq, CommunicationConsentRes, CommunicationConsentChannelsEmail, CommunicationConsentChannelsSms, CommunicationConsentChannelsWhatsapp, CommunicationConsentChannels, CommunicationConsent, BadRequestSchema, PushtokenReq, PushtokenRes };
}
/** @returns {CommunicationConsentReq} */
declare function CommunicationConsentReq(): CommunicationConsentReq;
type CommunicationConsentReq = {
    /**
     * - Whether the user has responded to the inquiry
     * regarding their preference for opting in or out of receiving communications.
     */
    response?: string;
    /**
     * - The user's choice to opt in or opt out of
     * receiving communications.
     */
    action?: string;
    /**
     * - The channel of communication the user has
     * agreed to receive messages through.
     */
    channel?: string;
};
/** @returns {CommunicationConsentRes} */
declare function CommunicationConsentRes(): CommunicationConsentRes;
type CommunicationConsentRes = {
    /**
     * - The ID of the sales channel where the user has
     * given their consent.
     */
    app_id?: string;
    /**
     * - Identifier which can uniquely identify the user.
     */
    user_id?: string;
    channels?: CommunicationConsentChannels;
};
/** @returns {CommunicationConsentChannelsEmail} */
declare function CommunicationConsentChannelsEmail(): CommunicationConsentChannelsEmail;
type CommunicationConsentChannelsEmail = {
    /**
     * - The user's choice to opt in or opt out of
     * receiving communications.
     */
    response?: string;
    /**
     * - Name of the channel of communication the
     * user has agreed to receive messages through.
     */
    display_name?: string;
};
/** @returns {CommunicationConsentChannelsSms} */
declare function CommunicationConsentChannelsSms(): CommunicationConsentChannelsSms;
type CommunicationConsentChannelsSms = {
    /**
     * - The user's choice to opt in or opt out of
     * receiving communications.
     */
    response?: string;
    /**
     * - Name of the channel of communication the
     * user has agreed to receive messages through.
     */
    display_name?: string;
};
/** @returns {CommunicationConsentChannelsWhatsapp} */
declare function CommunicationConsentChannelsWhatsapp(): CommunicationConsentChannelsWhatsapp;
type CommunicationConsentChannelsWhatsapp = {
    /**
     * - The user's choice to opt in or opt out of
     * receiving communications.
     */
    response?: string;
    /**
     * - Name of the channel of communication the
     * user has agreed to receive messages through.
     */
    display_name?: string;
    /**
     * - Alphanumeric identification code for the
     * users country.
     */
    country_code?: string;
    /**
     * - Phone number of the user that the user
     * has accepted to receive communication through WhatsApp.
     */
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
    /**
     * - The ID of the sales channel where the user has
     * given their consent.
     */
    app_id?: string;
    /**
     * - Identifier which can uniquely identify the user.
     */
    user_id?: string;
    channels?: CommunicationConsentChannels;
};
/** @returns {BadRequestSchema} */
declare function BadRequestSchema(): BadRequestSchema;
type BadRequestSchema = {
    /**
     * - Error code indicating the type of issue.
     */
    status?: string;
    /**
     * - Error message providing details about the error.
     */
    message?: string;
};
/** @returns {PushtokenReq} */
declare function PushtokenReq(): PushtokenReq;
type PushtokenReq = {
    /**
     * - The type of operation to perform with the push
     * token, such as create, update, or reset.
     */
    action?: string;
    /**
     * - Unique identifier used to identify a bundle.
     */
    bundle_identifier?: string;
    /**
     * - A string of codes containing comprehensive
     * data that identifies a identity of requester.
     */
    push_token?: string;
    /**
     * - Unique identifier used to identify a device.
     */
    unique_device_id?: string;
    /**
     * - Source address of the requestee.
     */
    type?: string;
};
/** @returns {PushtokenRes} */
declare function PushtokenRes(): PushtokenRes;
type PushtokenRes = {
    /**
     * - Key used to uniquely identify document that
     * contains push token credentials.
     */
    _id?: string;
    /**
     * - Unique identifier used to identify a bundle.
     */
    bundle_identifier?: string;
    /**
     * - A string of codes containing comprehensive
     * data that identifies a identity of requester.
     */
    push_token?: string;
    /**
     * - Unique identifier used to identify a device.
     */
    unique_device_id?: string;
    /**
     * - Source address of the requester.
     */
    type?: string;
    /**
     * - Source address of the requester.
     */
    platform?: string;
    /**
     * - The ID of the sales channel associated
     * with the push token.
     */
    application_id?: string;
    /**
     * - Identifier which can uniquely identify the user.
     */
    user_id?: string;
    /**
     * - The timestamp indicating when a record was
     * initially created.
     */
    created_at?: string;
    /**
     * - The timestamp indicating when a record was
     * last modified or updated.
     */
    updated_at?: string;
    /**
     * - The timestamp indicating when a record is
     * set to expire or become invalid.
     */
    expired_at?: string;
};
