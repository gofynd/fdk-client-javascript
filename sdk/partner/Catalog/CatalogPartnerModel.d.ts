export = CatalogPartnerModel;
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - Total number of items.
 */
/**
 * @typedef CompanyListSerializer
 * @property {Page} [page]
 * @property {CompanySerializer[]} [items]
 */
/**
 * @typedef CompaniesSerializer
 * @property {CompanySerializer[]} [items]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {Object} [error]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */
/**
 * @typedef PartnerCompanyDetailsRequestSchema
 * @property {number[]} [company_ids]
 */
/**
 * @typedef CompanySerializer
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [created_by]
 * @property {string} [name]
 * @property {string} company_type
 * @property {string} business_type
 * @property {CompanyDetails} [details]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [market_channels]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {BusinessCountryInfo} [business_country_info]
 */
/**
 * @typedef GetAddressSerializer
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef BusinessCountryInfo
 * @property {string} country_code
 * @property {string} [country]
 * @property {CountryCurrencyInfo} currency
 * @property {string} timezone
 */
/**
 * @typedef CountryCurrencyInfo
 * @property {string} code
 * @property {string} symbol
 * @property {string} name
 */
/**
 * @typedef UserSerializer
 * @property {string} [_id]
 * @property {string} [contact]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */
/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */
declare class CatalogPartnerModel {
}
declare namespace CatalogPartnerModel {
    export { Page, CompanyListSerializer, CompaniesSerializer, ErrorResponse, PartnerCompanyDetailsRequestSchema, CompanySerializer, GetAddressSerializer, BusinessCountryInfo, CountryCurrencyInfo, UserSerializer, CompanyDetails, CompanySocialAccounts };
}
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - Total number of items.
     */
    total?: number;
};
/** @returns {CompanyListSerializer} */
declare function CompanyListSerializer(): CompanyListSerializer;
type CompanyListSerializer = {
    page?: Page;
    items?: CompanySerializer[];
};
/** @returns {CompaniesSerializer} */
declare function CompaniesSerializer(): CompaniesSerializer;
type CompaniesSerializer = {
    items?: CompanySerializer[];
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    code?: string;
    error?: any;
    message?: string;
    meta?: any;
    status?: number;
};
/** @returns {PartnerCompanyDetailsRequestSchema} */
declare function PartnerCompanyDetailsRequestSchema(): PartnerCompanyDetailsRequestSchema;
type PartnerCompanyDetailsRequestSchema = {
    company_ids?: number[];
};
/** @returns {CompanySerializer} */
declare function CompanySerializer(): CompanySerializer;
type CompanySerializer = {
    uid?: number;
    created_on?: string;
    modified_on?: string;
    verified_on?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    name?: string;
    company_type: string;
    business_type: string;
    details?: CompanyDetails;
    addresses?: GetAddressSerializer[];
    market_channels?: string[];
    notification_emails?: string[];
    reject_reason?: string;
    stage?: string;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
};
/** @returns {GetAddressSerializer} */
declare function GetAddressSerializer(): GetAddressSerializer;
type GetAddressSerializer = {
    address1?: string;
    address2?: string;
    address_type?: string;
    city?: string;
    country?: string;
    country_code?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    pincode?: string;
    state?: string;
};
/** @returns {BusinessCountryInfo} */
declare function BusinessCountryInfo(): BusinessCountryInfo;
type BusinessCountryInfo = {
    country_code: string;
    country?: string;
    currency: CountryCurrencyInfo;
    timezone: string;
};
/** @returns {CountryCurrencyInfo} */
declare function CountryCurrencyInfo(): CountryCurrencyInfo;
type CountryCurrencyInfo = {
    code: string;
    symbol: string;
    name: string;
};
/** @returns {UserSerializer} */
declare function UserSerializer(): UserSerializer;
type UserSerializer = {
    _id?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
/** @returns {CompanyDetails} */
declare function CompanyDetails(): CompanyDetails;
type CompanyDetails = {
    socials?: CompanySocialAccounts[];
    website_url?: string;
};
/** @returns {CompanySocialAccounts} */
declare function CompanySocialAccounts(): CompanySocialAccounts;
type CompanySocialAccounts = {
    name: string;
    url: string;
};
