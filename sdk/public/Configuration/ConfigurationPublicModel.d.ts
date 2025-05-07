export = ConfigurationPublicModel;
/**
 * @typedef ApplicationResponseSchema
 * @property {Application} [application]
 */
/**
 * @typedef Domain
 * @property {boolean} [verified] - Indicates domain is verified or not. TXT and
 *   A records should propagate correctly.
 * @property {boolean} [is_primary] - Indicates domain is primary or not.
 *   Primary domain is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {boolean} [is_predefined] - Domain is hosting domain or not
 */
/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled] - Shows whether sales channel website URL is
 *   enabled or not
 * @property {string} [basepath] - Base path for the current sales channel website
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled] - Shows sales channel auth is enabled or not enabled.
 */
/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from] - Old domain URL of the sales channel
 * @property {string} [redirect_to] - New domain URL of the sales channel. Users
 *   will be automatically redirected from old domain to new domain.
 * @property {string} [type] - It shows domain redirection type. Permanent
 *   redirection is for long time period redirection, and temporary redirection
 *   for a short time period.
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name] - Indicates the name of application meta
 * @property {string} [value] - Value related to application meta name
 */
/**
 * @typedef SecureUrl
 * @property {string} [secure_url] - Hosted URL of the image
 */
/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description] - It contains detailed information about the
 *   sales channel.
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store
 * @property {number} [cache_ttl] - An integer value that specifies the number
 *   of seconds until the key expires
 * @property {boolean} [is_internal] - Indicates whether a sales channel is
 *   internal or not
 * @property {boolean} [is_active] - Indicates sales channel is active or not active
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of owner who owns the application
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists
 * @property {string} [token] - Random generated fix length string for sales
 *   channel. It is required and auto-generated.
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation
 * @property {string} [modified_at] - ISO 8601 timestamp of sales channel updation
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type] - It shows application is live or in development mode.
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 * @property {string} [slug]
 * @property {string} [mode]
 * @property {string} [status]
 * @property {TokenSchema[]} [tokens]
 */
/**
 * @typedef TokenSchema
 * @property {string} [token]
 * @property {Object} [created_by]
 * @property {string} [created_at] - ISO 8601 timestamp of when token created
 */
/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */
/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */
/**
 * @typedef LocationCountry
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 * @property {string} [state_code]
 * @property {string} [country_code]
 * @property {string} [latitude]
 * @property {string} [longitude]
 */
/**
 * @typedef Locations
 * @property {LocationCountry[]} [items]
 */
/**
 * @typedef VersionApplication
 * @property {string} [name]
 * @property {string} [version]
 */
/**
 * @typedef VersionDeviceOS
 * @property {string} [name]
 */
/**
 * @typedef VersionDevice
 * @property {VersionDeviceOS} [os]
 */
/**
 * @typedef VersionRequestSchema
 * @property {VersionApplication} application
 * @property {VersionDevice} device
 */
/**
 * @typedef VersionUpdateDialogue
 * @property {string} [type]
 * @property {number} [interval]
 */
/**
 * @typedef VersionResponseSchema
 * @property {string} type
 * @property {string} title
 * @property {string} description
 * @property {VersionUpdateDialogue} update_dialog
 * @property {boolean} is_app_blocked
 */
declare class ConfigurationPublicModel {
}
declare namespace ConfigurationPublicModel {
    export { ApplicationResponseSchema, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, TokenSchema, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, VersionApplication, VersionDeviceOS, VersionDevice, VersionRequestSchema, VersionUpdateDialogue, VersionResponseSchema };
}
/** @returns {ApplicationResponseSchema} */
declare function ApplicationResponseSchema(): ApplicationResponseSchema;
type ApplicationResponseSchema = {
    application?: Application;
};
/** @returns {Domain} */
declare function Domain(): Domain;
type Domain = {
    /**
     * - Indicates domain is verified or not. TXT and
     * A records should propagate correctly.
     */
    verified?: boolean;
    /**
     * - Indicates domain is primary or not.
     * Primary domain is the default/main domain.
     */
    is_primary?: boolean;
    /**
     * - Shortlink is present or not for the domain
     */
    is_shortlink?: boolean;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the domain
     */
    _id?: string;
    name?: string;
    display_name?: string;
    /**
     * - Domain is hosting domain or not
     */
    is_predefined?: boolean;
};
/** @returns {ApplicationWebsite} */
declare function ApplicationWebsite(): ApplicationWebsite;
type ApplicationWebsite = {
    /**
     * - Shows whether sales channel website URL is
     * enabled or not
     */
    enabled?: boolean;
    /**
     * - Base path for the current sales channel website
     */
    basepath?: string;
};
/** @returns {ApplicationCors} */
declare function ApplicationCors(): ApplicationCors;
type ApplicationCors = {
    domains?: string[];
};
/** @returns {ApplicationAuth} */
declare function ApplicationAuth(): ApplicationAuth;
type ApplicationAuth = {
    /**
     * - Shows sales channel auth is enabled or not enabled.
     */
    enabled?: boolean;
};
/** @returns {ApplicationRedirections} */
declare function ApplicationRedirections(): ApplicationRedirections;
type ApplicationRedirections = {
    /**
     * - Old domain URL of the sales channel
     */
    redirect_from?: string;
    /**
     * - New domain URL of the sales channel. Users
     * will be automatically redirected from old domain to new domain.
     */
    redirect_to?: string;
    /**
     * - It shows domain redirection type. Permanent
     * redirection is for long time period redirection, and temporary redirection
     * for a short time period.
     */
    type?: string;
};
/** @returns {ApplicationMeta} */
declare function ApplicationMeta(): ApplicationMeta;
type ApplicationMeta = {
    /**
     * - Indicates the name of application meta
     */
    name?: string;
    /**
     * - Value related to application meta name
     */
    value?: string;
};
/** @returns {SecureUrl} */
declare function SecureUrl(): SecureUrl;
type SecureUrl = {
    /**
     * - Hosted URL of the image
     */
    secure_url?: string;
};
/** @returns {Application} */
declare function Application(): Application;
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    /**
     * - It contains detailed information about the
     * sales channel.
     */
    description?: string;
    /**
     * - It indicates different channel types like
     * store, website-and-mobile-apps. Default value is store
     */
    channel_type?: string;
    /**
     * - An integer value that specifies the number
     * of seconds until the key expires
     */
    cache_ttl?: number;
    /**
     * - Indicates whether a sales channel is
     * internal or not
     */
    is_internal?: boolean;
    /**
     * - Indicates sales channel is active or not active
     */
    is_active?: boolean;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel
     */
    _id?: string;
    /**
     * - Name of the sales channel, e.g. Zenz Fashion
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of owner who owns the application
     */
    owner?: string;
    /**
     * - Numeric ID allotted to a business account
     * where the sales channel exists
     */
    company_id?: number;
    /**
     * - Random generated fix length string for sales
     * channel. It is required and auto-generated.
     */
    token?: string;
    redirections?: ApplicationRedirections[];
    meta?: ApplicationMeta[];
    /**
     * - ISO 8601 timestamp of sales channel creation
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of sales channel updation
     */
    modified_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Domain[];
    /**
     * - It shows application is live or in development mode.
     */
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
    slug?: string;
    mode?: string;
    status?: string;
    tokens?: TokenSchema[];
};
/** @returns {TokenSchema} */
declare function TokenSchema(): TokenSchema;
type TokenSchema = {
    token?: string;
    created_by?: any;
    /**
     * - ISO 8601 timestamp of when token created
     */
    created_at?: string;
};
/** @returns {LocationDefaultLanguage} */
declare function LocationDefaultLanguage(): LocationDefaultLanguage;
type LocationDefaultLanguage = {
    name?: string;
    code?: string;
};
/** @returns {LocationDefaultCurrency} */
declare function LocationDefaultCurrency(): LocationDefaultCurrency;
type LocationDefaultCurrency = {
    name?: string;
    symbol?: string;
    code?: string;
};
/** @returns {LocationCountry} */
declare function LocationCountry(): LocationCountry;
type LocationCountry = {
    capital?: string;
    currency?: string;
    iso2?: string;
    iso3?: string;
    name?: string;
    parent?: string;
    phone_code?: string;
    type?: string;
    uid?: number;
    __v?: number;
    _id?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
    state_code?: string;
    country_code?: string;
    latitude?: string;
    longitude?: string;
};
/** @returns {Locations} */
declare function Locations(): Locations;
type Locations = {
    items?: LocationCountry[];
};
/** @returns {VersionApplication} */
declare function VersionApplication(): VersionApplication;
type VersionApplication = {
    name?: string;
    version?: string;
};
/** @returns {VersionDeviceOS} */
declare function VersionDeviceOS(): VersionDeviceOS;
type VersionDeviceOS = {
    name?: string;
};
/** @returns {VersionDevice} */
declare function VersionDevice(): VersionDevice;
type VersionDevice = {
    os?: VersionDeviceOS;
};
/** @returns {VersionRequestSchema} */
declare function VersionRequestSchema(): VersionRequestSchema;
type VersionRequestSchema = {
    application: VersionApplication;
    device: VersionDevice;
};
/** @returns {VersionUpdateDialogue} */
declare function VersionUpdateDialogue(): VersionUpdateDialogue;
type VersionUpdateDialogue = {
    type?: string;
    interval?: number;
};
/** @returns {VersionResponseSchema} */
declare function VersionResponseSchema(): VersionResponseSchema;
type VersionResponseSchema = {
    type: string;
    title: string;
    description: string;
    update_dialog: VersionUpdateDialogue;
    is_app_blocked: boolean;
};
