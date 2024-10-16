export = CommonApplicationModel;
/**
 * @typedef ApplicationResponseSchema
 * @property {Application} [application]
 */
/**
 * @typedef Domain
 * @property {boolean} [verified] - Whether domain is verified or not. TXT and A
 *   records should propagate correctly.
 * @property {boolean} [is_primary] - Whether domain is primary or not. Primary
 *   domain is the default/main domain.
 * @property {boolean} [is_shortlink] - Whether shortlink is present or not for
 *   the domain.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain.
 * @property {string} [name] - The name of the domain.
 * @property {boolean} [is_predefined] - Whether domain is hosting domain or not.
 */
/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled] - Whether sales channel website URL is enabled or not.
 * @property {string} [basepath] - Base path for the current sales channel website.
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains] - List of all domains added to the sales channel.
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled] - Whether sales channel auth is enabled or not enabled.
 */
/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from] - Old domain URL of the sales channel.
 * @property {string} [redirect_to] - New domain URL of the sales channel. Users
 *   will be automatically redirected from old domain to new domain.
 * @property {string} [type] - It shows domain redirection type. Permanent
 *   redirection is for long time period redirection, and temporary redirection
 *   for a short time period.
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name] - Indicates the name of application meta.
 * @property {string} [value] - Value related to application meta name.
 */
/**
 * @typedef SecureUrl
 * @property {string} [secure_url] - Hosted URL of the image.
 */
/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description] - Detailed information about the sales channel.
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store.
 * @property {number} [cache_ttl] - Number of seconds until the key expires.
 * @property {boolean} [is_internal] - Whether a sales channel is internal or not.
 * @property {boolean} [is_active] - Whether a sales channel is active or not active.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel.
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion.
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of owner who owns the application.
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists.
 * @property {string} [token] - Randomly generated fixed-length string for sales
 *   channel. It is required and auto-generated.
 * @property {ApplicationRedirections[]} [redirections] - List of redirection
 *   configurations for the sales channel.
 * @property {ApplicationMeta[]} [meta] - List of metadata associated with the
 *   sales channel.
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation.
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel updation.
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains] - List of domains associated with the sales channel.
 * @property {string} [app_type] - It shows whether application is live or in
 *   development mode.
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */
/**
 * @typedef NotFound
 * @property {string} [message] - Response message for not found.
 */
/**
 * @typedef BadRequestSchema
 * @property {string} [message] - Failure message (in a string format).
 */
/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name] - Name of the language.
 * @property {string} [code] - Code of the language.
 */
/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name] - The name of the currency.
 * @property {string} [symbol] - The symbol representing the currency.
 * @property {string} [code] - The ISO 4217 code for the currency.
 */
/**
 * @typedef LocationCountry
 * @property {string} [capital] - The capital of the country.
 * @property {string} [currency] - The currency code used in the country.
 * @property {string} [iso2] - The ISO 3166-1 alpha-2 code for the country.
 * @property {string} [iso3] - The ISO 3166-1 alpha-3 code for the country.
 * @property {string} [name] - The name of the country.
 * @property {string} [parent] - The parent country if this is a subnational
 *   entity (e.g., a territory or region).
 * @property {string} [phone_code] - The international dialing code for the country.
 * @property {string} [type] - The type of location, which is a country in this context.
 * @property {number} [uid] - A unique identifier for the country.
 * @property {number} [__v] - Version key for tracking revisions.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   for the country.
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 * @property {string} [state_code] - The code representing the state or region
 *   within the country, if applicable.
 * @property {string} [country_code] - The country code used for the country.
 * @property {string} [latitude] - The latitude of the store's location.
 * @property {string} [longitude] - The longitude of the store's location.
 */
/**
 * @typedef Locations
 * @property {LocationCountry[]} [items] - A list of country location details.
 */
declare class CommonApplicationModel {
}
declare namespace CommonApplicationModel {
    export { ApplicationResponseSchema, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequestSchema, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations };
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
     * - Whether domain is verified or not. TXT and A
     * records should propagate correctly.
     */
    verified?: boolean;
    /**
     * - Whether domain is primary or not. Primary
     * domain is the default/main domain.
     */
    is_primary?: boolean;
    /**
     * - Whether shortlink is present or not for
     * the domain.
     */
    is_shortlink?: boolean;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the domain.
     */
    _id?: string;
    /**
     * - The name of the domain.
     */
    name?: string;
    /**
     * - Whether domain is hosting domain or not.
     */
    is_predefined?: boolean;
};
/** @returns {ApplicationWebsite} */
declare function ApplicationWebsite(): ApplicationWebsite;
type ApplicationWebsite = {
    /**
     * - Whether sales channel website URL is enabled or not.
     */
    enabled?: boolean;
    /**
     * - Base path for the current sales channel website.
     */
    basepath?: string;
};
/** @returns {ApplicationCors} */
declare function ApplicationCors(): ApplicationCors;
type ApplicationCors = {
    /**
     * - List of all domains added to the sales channel.
     */
    domains?: string[];
};
/** @returns {ApplicationAuth} */
declare function ApplicationAuth(): ApplicationAuth;
type ApplicationAuth = {
    /**
     * - Whether sales channel auth is enabled or not enabled.
     */
    enabled?: boolean;
};
/** @returns {ApplicationRedirections} */
declare function ApplicationRedirections(): ApplicationRedirections;
type ApplicationRedirections = {
    /**
     * - Old domain URL of the sales channel.
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
     * - Indicates the name of application meta.
     */
    name?: string;
    /**
     * - Value related to application meta name.
     */
    value?: string;
};
/** @returns {SecureUrl} */
declare function SecureUrl(): SecureUrl;
type SecureUrl = {
    /**
     * - Hosted URL of the image.
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
     * - Detailed information about the sales channel.
     */
    description?: string;
    /**
     * - It indicates different channel types like
     * store, website-and-mobile-apps. Default value is store.
     */
    channel_type?: string;
    /**
     * - Number of seconds until the key expires.
     */
    cache_ttl?: number;
    /**
     * - Whether a sales channel is internal or not.
     */
    is_internal?: boolean;
    /**
     * - Whether a sales channel is active or not active.
     */
    is_active?: boolean;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel.
     */
    _id?: string;
    /**
     * - Name of the sales channel, e.g. Zenz Fashion.
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of owner who owns the application.
     */
    owner?: string;
    /**
     * - Numeric ID allotted to a business account
     * where the sales channel exists.
     */
    company_id?: number;
    /**
     * - Randomly generated fixed-length string for sales
     * channel. It is required and auto-generated.
     */
    token?: string;
    /**
     * - List of redirection
     * configurations for the sales channel.
     */
    redirections?: ApplicationRedirections[];
    /**
     * - List of metadata associated with the
     * sales channel.
     */
    meta?: ApplicationMeta[];
    /**
     * - ISO 8601 timestamp of sales channel creation.
     */
    created_at?: string;
    /**
     * - ISO 8601 timestamp of sales channel updation.
     */
    updated_at?: string;
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    /**
     * - List of domains associated with the sales channel.
     */
    domains?: Domain[];
    /**
     * - It shows whether application is live or in
     * development mode.
     */
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
};
/** @returns {NotFound} */
declare function NotFound(): NotFound;
type NotFound = {
    /**
     * - Response message for not found.
     */
    message?: string;
};
/** @returns {BadRequestSchema} */
declare function BadRequestSchema(): BadRequestSchema;
type BadRequestSchema = {
    /**
     * - Failure message (in a string format).
     */
    message?: string;
};
/** @returns {LocationDefaultLanguage} */
declare function LocationDefaultLanguage(): LocationDefaultLanguage;
type LocationDefaultLanguage = {
    /**
     * - Name of the language.
     */
    name?: string;
    /**
     * - Code of the language.
     */
    code?: string;
};
/** @returns {LocationDefaultCurrency} */
declare function LocationDefaultCurrency(): LocationDefaultCurrency;
type LocationDefaultCurrency = {
    /**
     * - The name of the currency.
     */
    name?: string;
    /**
     * - The symbol representing the currency.
     */
    symbol?: string;
    /**
     * - The ISO 4217 code for the currency.
     */
    code?: string;
};
/** @returns {LocationCountry} */
declare function LocationCountry(): LocationCountry;
type LocationCountry = {
    /**
     * - The capital of the country.
     */
    capital?: string;
    /**
     * - The currency code used in the country.
     */
    currency?: string;
    /**
     * - The ISO 3166-1 alpha-2 code for the country.
     */
    iso2?: string;
    /**
     * - The ISO 3166-1 alpha-3 code for the country.
     */
    iso3?: string;
    /**
     * - The name of the country.
     */
    name?: string;
    /**
     * - The parent country if this is a subnational
     * entity (e.g., a territory or region).
     */
    parent?: string;
    /**
     * - The international dialing code for the country.
     */
    phone_code?: string;
    /**
     * - The type of location, which is a country in this context.
     */
    type?: string;
    /**
     * - A unique identifier for the country.
     */
    uid?: number;
    /**
     * - Version key for tracking revisions.
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * for the country.
     */
    _id?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
    /**
     * - The code representing the state or region
     * within the country, if applicable.
     */
    state_code?: string;
    /**
     * - The country code used for the country.
     */
    country_code?: string;
    /**
     * - The latitude of the store's location.
     */
    latitude?: string;
    /**
     * - The longitude of the store's location.
     */
    longitude?: string;
};
/** @returns {Locations} */
declare function Locations(): Locations;
type Locations = {
    /**
     * - A list of country location details.
     */
    items?: LocationCountry[];
};
