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
 * @typedef CompanyListSchema
 * @property {Page} [page]
 * @property {CompanySchema[]} [items]
 */
/**
 * @typedef CompaniesSchema
 * @property {CompanySchema[]} [items]
 */
/**
 * @typedef ErrorResponseSchema
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
 * @typedef CompanySchema
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {UserSchema} [verified_by]
 * @property {UserSchema} [modified_by]
 * @property {UserSchema} [created_by]
 * @property {string} [name]
 * @property {string} company_type
 * @property {string} business_type
 * @property {CompanyDetails} [details]
 * @property {GetAddressSchema[]} [addresses]
 * @property {string[]} [market_channels]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {BusinessCountryInfo} [business_country_info]
 */
/**
 * @typedef GetAddressSchema
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
 * @typedef UserSchema
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
    export { Page, CompanyListSchema, CompaniesSchema, ErrorResponseSchema, PartnerCompanyDetailsRequestSchema, CompanySchema, GetAddressSchema, BusinessCountryInfo, CountryCurrencyInfo, UserSchema, CompanyDetails, CompanySocialAccounts };
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
/** @returns {CompanyListSchema} */
declare function CompanyListSchema(): CompanyListSchema;
type CompanyListSchema = {
    page?: Page;
    items?: CompanySchema[];
};
/** @returns {CompaniesSchema} */
declare function CompaniesSchema(): CompaniesSchema;
type CompaniesSchema = {
    items?: CompanySchema[];
};
/** @returns {ErrorResponseSchema} */
declare function ErrorResponseSchema(): ErrorResponseSchema;
type ErrorResponseSchema = {
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
/** @returns {CompanySchema} */
declare function CompanySchema(): CompanySchema;
type CompanySchema = {
    uid?: number;
    created_on?: string;
    modified_on?: string;
    verified_on?: string;
    verified_by?: UserSchema;
    modified_by?: UserSchema;
    created_by?: UserSchema;
    name?: string;
    company_type: string;
    business_type: string;
    details?: CompanyDetails;
    addresses?: GetAddressSchema[];
    market_channels?: string[];
    notification_emails?: string[];
    reject_reason?: string;
    stage?: string;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
};
/** @returns {GetAddressSchema} */
declare function GetAddressSchema(): GetAddressSchema;
type GetAddressSchema = {
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
/** @returns {UserSchema} */
declare function UserSchema(): UserSchema;
type UserSchema = {
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
