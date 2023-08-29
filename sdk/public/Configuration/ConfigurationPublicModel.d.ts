export = ConfigurationPublicModel;
/**
 * @typedef Application
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel
 * @property {string} [app_type] - It shows whether application is live or in
 *   development mode
 * @property {ApplicationAuth} [auth]
 * @property {SecureUrl} [banner]
 * @property {number} [cache_ttl] - An integer value that specifies the number
 *   of seconds until the key expires
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store.
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists
 * @property {ApplicationCors} [cors]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation
 * @property {string} [description] - It contains detailed information about the
 *   sales channel
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {SecureUrl} [favicon]
 * @property {boolean} [is_active] - Indicates whether a sales channel is active
 *   or not active
 * @property {boolean} [is_internal] - Indicates whether a sales channel is
 *   internal or not
 * @property {SecureUrl} [logo]
 * @property {ApplicationMeta[]} [meta]
 * @property {SecureUrl} [mobile_logo]
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of owner who owns the application
 * @property {ApplicationRedirections[]} [redirections]
 * @property {string} [slug]
 * @property {string} [token] - Randomly generated fixed-length string for sales
 *   channel. It is required and auto-generated.
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel updation
 * @property {ApplicationWebsite} [website]
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled] - Shows sales channel auth is enabled or not enabled.
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name] - Indicates the name of application meta
 * @property {string} [value] - Value related to application meta name
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
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */
/**
 * @typedef ApplicationWebsite
 * @property {string} [basepath] - Base path for the current sales channel website
 * @property {boolean} [enabled] - Shows whether sales channel website URL is
 *   enabled or not
 */
/**
 * @typedef BadRequest
 * @property {string} [message] - Failure message (in a string format)
 */
/**
 * @typedef Domain
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain
 * @property {boolean} [is_predefined] - Domain is hosting domain or not
 * @property {boolean} [is_primary] - Indicates domain is primary or not.
 *   Primary domain is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {string} [name]
 * @property {boolean} [verified] - Indicates domain is verified or not. TXT and
 *   A records should propagate correctly.
 */
/**
 * @typedef LocationCountry
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [capital]
 * @property {string} [country_code]
 * @property {string} [currency]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [latitude]
 * @property {string} [longitude]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [state_code]
 * @property {string} [type]
 * @property {number} [uid]
 */
/**
 * @typedef LocationDefaultCurrency
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [symbol]
 */
/**
 * @typedef LocationDefaultLanguage
 * @property {string} [code]
 * @property {string} [name]
 */
/**
 * @typedef Locations
 * @property {LocationCountry[]} [items]
 */
/**
 * @typedef NotFound
 * @property {string} [message] - Response message for not found
 */
/**
 * @typedef SecureUrl
 * @property {string} [secure_url] - Hosted URL of the image
 */
declare class ConfigurationPublicModel {
}
declare namespace ConfigurationPublicModel {
    export { Application, ApplicationAuth, ApplicationCors, ApplicationMeta, ApplicationRedirections, ApplicationResponse, ApplicationWebsite, BadRequest, Domain, LocationCountry, LocationDefaultCurrency, LocationDefaultLanguage, Locations, NotFound, SecureUrl };
}
/** @returns {Application} */
declare function Application(): Application;
type Application = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel
     */
    _id?: string;
    /**
     * - It shows whether application is live or in
     * development mode
     */
    app_type?: string;
    auth?: ApplicationAuth;
    banner?: SecureUrl;
    /**
     * - An integer value that specifies the number
     * of seconds until the key expires
     */
    cache_ttl?: number;
    /**
     * - It indicates different channel types like
     * store, website-and-mobile-apps. Default value is store.
     */
    channel_type?: string;
    /**
     * - Numeric ID allotted to a business account
     * where the sales channel exists
     */
    company_id?: number;
    cors?: ApplicationCors;
    /**
     * - ISO 8601 timestamp of sales channel creation
     */
    created_at?: string;
    /**
     * - It contains detailed information about the
     * sales channel
     */
    description?: string;
    domain?: Domain;
    domains?: Domain[];
    favicon?: SecureUrl;
    /**
     * - Indicates whether a sales channel is active
     * or not active
     */
    is_active?: boolean;
    /**
     * - Indicates whether a sales channel is
     * internal or not
     */
    is_internal?: boolean;
    logo?: SecureUrl;
    meta?: ApplicationMeta[];
    mobile_logo?: SecureUrl;
    /**
     * - Name of the sales channel, e.g. Zenz Fashion
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of owner who owns the application
     */
    owner?: string;
    redirections?: ApplicationRedirections[];
    slug?: string;
    /**
     * - Randomly generated fixed-length string for sales
     * channel. It is required and auto-generated.
     */
    token?: string;
    /**
     * - ISO 8601 timestamp of sales channel updation
     */
    updated_at?: string;
    website?: ApplicationWebsite;
};
/** @returns {ApplicationAuth} */
declare function ApplicationAuth(): ApplicationAuth;
type ApplicationAuth = {
    /**
     * - Shows sales channel auth is enabled or not enabled.
     */
    enabled?: boolean;
};
/** @returns {ApplicationCors} */
declare function ApplicationCors(): ApplicationCors;
type ApplicationCors = {
    domains?: string[];
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
/** @returns {ApplicationResponse} */
declare function ApplicationResponse(): ApplicationResponse;
type ApplicationResponse = {
    application?: Application;
};
/** @returns {ApplicationWebsite} */
declare function ApplicationWebsite(): ApplicationWebsite;
type ApplicationWebsite = {
    /**
     * - Base path for the current sales channel website
     */
    basepath?: string;
    /**
     * - Shows whether sales channel website URL is
     * enabled or not
     */
    enabled?: boolean;
};
/** @returns {BadRequest} */
declare function BadRequest(): BadRequest;
type BadRequest = {
    /**
     * - Failure message (in a string format)
     */
    message?: string;
};
/** @returns {Domain} */
declare function Domain(): Domain;
type Domain = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the domain
     */
    _id?: string;
    /**
     * - Domain is hosting domain or not
     */
    is_predefined?: boolean;
    /**
     * - Indicates domain is primary or not.
     * Primary domain is the default/main domain.
     */
    is_primary?: boolean;
    /**
     * - Shortlink is present or not for the domain
     */
    is_shortlink?: boolean;
    name?: string;
    /**
     * - Indicates domain is verified or not. TXT and
     * A records should propagate correctly.
     */
    verified?: boolean;
};
/** @returns {LocationCountry} */
declare function LocationCountry(): LocationCountry;
type LocationCountry = {
    __v?: number;
    _id?: string;
    capital?: string;
    country_code?: string;
    currency?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
    iso2?: string;
    iso3?: string;
    latitude?: string;
    longitude?: string;
    name?: string;
    parent?: string;
    phone_code?: string;
    state_code?: string;
    type?: string;
    uid?: number;
};
/** @returns {LocationDefaultCurrency} */
declare function LocationDefaultCurrency(): LocationDefaultCurrency;
type LocationDefaultCurrency = {
    code?: string;
    name?: string;
    symbol?: string;
};
/** @returns {LocationDefaultLanguage} */
declare function LocationDefaultLanguage(): LocationDefaultLanguage;
type LocationDefaultLanguage = {
    code?: string;
    name?: string;
};
/** @returns {Locations} */
declare function Locations(): Locations;
type Locations = {
    items?: LocationCountry[];
};
/** @returns {NotFound} */
declare function NotFound(): NotFound;
type NotFound = {
    /**
     * - Response message for not found
     */
    message?: string;
};
/** @returns {SecureUrl} */
declare function SecureUrl(): SecureUrl;
type SecureUrl = {
    /**
     * - Hosted URL of the image
     */
    secure_url?: string;
};
