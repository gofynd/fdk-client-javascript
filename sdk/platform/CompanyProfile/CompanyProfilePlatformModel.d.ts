export = CompanyProfilePlatformModel;
/**
 * @typedef CompanyTaxesSchema
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */
/**
 * @typedef UserSchema
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */
/**
 * @typedef Website
 * @property {string} [url]
 */
/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */
/**
 * @typedef CountryCurrencyInfo
 * @property {string} code
 * @property {string} symbol
 * @property {string} name
 */
/**
 * @typedef BusinessCountryInfo
 * @property {string} country_code
 * @property {string} country
 * @property {CountryCurrencyInfo} currency
 * @property {string} timezone
 */
/**
 * @typedef Document
 * @property {string} value
 * @property {string} [legal_name]
 * @property {boolean} [verified]
 * @property {string} type
 * @property {string} [url]
 */
/**
 * @typedef GetAddressSchema
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {number} [pincode]
 * @property {string} [address_type]
 * @property {number} longitude
 * @property {string} [country]
 * @property {string} [address2]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [sector]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {number} latitude
 */
/**
 * @typedef GetCompanyProfileSerializerResponseSchema
 * @property {string} [business_info]
 * @property {CompanyTaxesSchema[]} [taxes]
 * @property {string} [business_type]
 * @property {string} [name]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSchema} [created_by]
 * @property {string} [created_on]
 * @property {Object} [warnings]
 * @property {BusinessDetails} [business_details]
 * @property {string} [mode]
 * @property {ContactDetails} [contact_details]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [modified_on]
 * @property {number} uid
 * @property {boolean} [franchise_enabled]
 * @property {string} [stage]
 * @property {string} company_type
 * @property {Document[]} [documents]
 * @property {GetAddressSchema[]} [addresses]
 * @property {UserSchema} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {UserSchema} [modified_by]
 */
/**
 * @typedef ErrorResponseSchema
 * @property {string} [message]
 * @property {string} [code]
 * @property {number} [status]
 * @property {Object} [meta]
 */
/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */
/**
 * @typedef CreateUpdateAddressSchema
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {number} pincode
 * @property {string} address_type
 * @property {number} longitude
 * @property {string} country
 * @property {string} [address2]
 * @property {string} state
 * @property {string} address1
 * @property {string} city
 * @property {number} latitude
 */
/**
 * @typedef UpdateCompany
 * @property {boolean} [franchise_enabled]
 * @property {string} [business_info]
 * @property {Object} [warnings]
 * @property {string} [company_type]
 * @property {Object} [_custom_json]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {BusinessDetails} [business_details]
 * @property {Document[]} [documents]
 * @property {string} [business_type]
 * @property {CreateUpdateAddressSchema[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {ContactDetails} [contact_details]
 * @property {string} [reject_reason]
 * @property {string} [name]
 */
/**
 * @typedef ProfileSuccessResponseSchema
 * @property {number} [uid]
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */
/**
 * @typedef MetricsSchema
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [brand]
 */
/**
 * @typedef BrandBannerSchema
 * @property {string} portrait
 * @property {string} landscape
 */
/**
 * @typedef GetBrandResponseSchema
 * @property {UserSchema} [modified_by]
 * @property {BrandBannerSchema} [banner]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSchema} [created_by]
 * @property {string} [created_on]
 * @property {Object} [warnings]
 * @property {Object} [_locale_language]
 * @property {string} [mode]
 * @property {string[]} [synonyms]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {UserSchema} [verified_by]
 * @property {string} [slug_key]
 * @property {string} [logo]
 * @property {string} [description]
 */
/**
 * @typedef CreateBrandRequestSchema
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string[]} [synonyms]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} [brand_tier]
 * @property {number} [uid]
 * @property {BrandBannerSchema} banner
 * @property {string} name
 * @property {string} [slug_key]
 */
/**
 * @typedef UpdateBrandRequestSchema
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string[]} [synonyms]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} [brand_tier]
 * @property {number} [uid]
 * @property {BrandBannerSchema} banner
 * @property {string} name
 */
/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */
/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */
/**
 * @typedef CompanySchema
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSchema} [verified_by]
 * @property {string} [created_on]
 * @property {UserSchema} [created_by]
 * @property {string} company_type
 * @property {string} [modified_on]
 * @property {string[]} [market_channels]
 * @property {string} business_type
 * @property {GetAddressSchema[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {CompanyDetails} [details]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {UserSchema} [modified_by]
 */
/**
 * @typedef CompanyBrandSchema
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSchema} [verified_by]
 * @property {string} [created_on]
 * @property {UserSchema} [created_by]
 * @property {CompanySchema} [company]
 * @property {Object} [warnings]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {GetBrandResponseSchema} [brand]
 * @property {UserSchema} [modified_by]
 */
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 */
/**
 * @typedef CompanyBrandListSchema
 * @property {CompanyBrandSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyBrandPostRequestSchema
 * @property {number} [uid]
 * @property {number[]} brands
 * @property {number} company
 */
/**
 * @typedef InvoiceCredSchema
 * @property {string} [username]
 * @property {boolean} [enabled]
 * @property {string} [password]
 */
/**
 * @typedef InvoiceDetailsSchema
 * @property {InvoiceCredSchema} [e_invoice]
 * @property {InvoiceCredSchema} [e_waybill]
 */
/**
 * @typedef GetCompanySchema
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSchema} [verified_by]
 * @property {string} [created_on]
 * @property {UserSchema} [created_by]
 * @property {string} [company_type]
 * @property {string} [modified_on]
 * @property {string} [business_type]
 * @property {GetAddressSchema[]} [addresses]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {UserSchema} [modified_by]
 */
/**
 * @typedef LocationManagerSchema
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */
/**
 * @typedef LocationTimingSchema
 * @property {number} hour
 * @property {number} minute
 */
/**
 * @typedef LocationDayWiseSchema
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSchema} [opening]
 * @property {LocationTimingSchema} [closing]
 */
/**
 * @typedef HolidayDateSchema
 * @property {string} end_date
 * @property {string} start_date
 */
/**
 * @typedef HolidaySchemaSchema
 * @property {HolidayDateSchema} date
 * @property {string} title
 * @property {string} holiday_type
 */
/**
 * @typedef ProductReturnConfigSchema
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef GetLocationSchema
 * @property {string} code
 * @property {string} [phone_number]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {InvoiceDetailsSchema} [gst_credentials]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSchema} [created_by]
 * @property {string} [created_on]
 * @property {GetCompanySchema} [company]
 * @property {GetAddressSchema} address
 * @property {Object} [warnings]
 * @property {string} [store_type]
 * @property {LocationManagerSchema} [manager]
 * @property {boolean} [auto_invoice]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {LocationDayWiseSchema[]} [timing]
 * @property {string} [stage]
 * @property {Document[]} [documents]
 * @property {boolean} [credit_note]
 * @property {HolidaySchemaSchema[]} [holiday]
 * @property {string} display_name
 * @property {ProductReturnConfigSchema} [product_return_config]
 * @property {UserSchema} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {UserSchema} [modified_by]
 * @property {string[]} [tags]
 * @property {boolean} [default_order_acceptance_timing]
 * @property {LocationDayWiseSchema[]} [order_acceptance_timing]
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {boolean} [auto_assign_courier_partner]
 */
/**
 * @typedef LocationListSchema
 * @property {GetLocationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AddressSchema
 * @property {string} [landmark]
 * @property {string} country_code
 * @property {number} [pincode]
 * @property {string} [address_type]
 * @property {number} longitude
 * @property {string} [country]
 * @property {string} [address2]
 * @property {string} [state]
 * @property {string} [sector]
 * @property {string} [state_code]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {number} latitude
 */
/**
 * @typedef LocationSchema
 * @property {string} code
 * @property {InvoiceDetailsSchema} [gst_credentials]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {Object} [warnings]
 * @property {AddressSchema} address
 * @property {number} company
 * @property {string} [store_type]
 * @property {LocationManagerSchema} [manager]
 * @property {boolean} [auto_invoice]
 * @property {number} [uid]
 * @property {LocationDayWiseSchema[]} [timing]
 * @property {string} [stage]
 * @property {Document[]} documents
 * @property {boolean} [credit_note]
 * @property {HolidaySchemaSchema[]} [holiday]
 * @property {ProductReturnConfigSchema} [product_return_config]
 * @property {string} display_name
 * @property {string[]} [notification_emails]
 * @property {string[]} [tags]
 * @property {boolean} [default_order_acceptance_timing] - Flag to set
 *   order_acceptance_timing as default timing
 * @property {LocationDayWiseSchema[]} [order_acceptance_timing] - Order
 *   acceptance timing of the store
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {boolean} [auto_assign_courier_partner]
 */
/**
 * @typedef BulkLocationSchema
 * @property {LocationSchema[]} [data]
 */
/**
 * @typedef AverageOrderProcessingTime
 * @property {number} [duration]
 * @property {string} [duration_type]
 */
/**
 * @typedef StoreTagsResponseSchema
 * @property {string[]} [tags]
 * @property {boolean} [success]
 */
declare class CompanyProfilePlatformModel {
}
declare namespace CompanyProfilePlatformModel {
    export { CompanyTaxesSchema, UserSchema, Website, BusinessDetails, SellerPhoneNumber, ContactDetails, CountryCurrencyInfo, BusinessCountryInfo, Document, GetAddressSchema, GetCompanyProfileSerializerResponseSchema, ErrorResponseSchema, CompanyTaxesSerializer1, CreateUpdateAddressSchema, UpdateCompany, ProfileSuccessResponseSchema, DocumentsObj, MetricsSchema, BrandBannerSchema, GetBrandResponseSchema, CreateBrandRequestSchema, UpdateBrandRequestSchema, CompanySocialAccounts, CompanyDetails, CompanySchema, CompanyBrandSchema, Page, CompanyBrandListSchema, CompanyBrandPostRequestSchema, InvoiceCredSchema, InvoiceDetailsSchema, GetCompanySchema, LocationManagerSchema, LocationTimingSchema, LocationDayWiseSchema, HolidayDateSchema, HolidaySchemaSchema, ProductReturnConfigSchema, GetLocationSchema, LocationListSchema, AddressSchema, LocationSchema, BulkLocationSchema, AverageOrderProcessingTime, StoreTagsResponseSchema };
}
/** @returns {CompanyTaxesSchema} */
declare function CompanyTaxesSchema(): CompanyTaxesSchema;
type CompanyTaxesSchema = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
/** @returns {UserSchema} */
declare function UserSchema(): UserSchema;
type UserSchema = {
    user_id?: string;
    contact?: string;
    username?: string;
};
/** @returns {Website} */
declare function Website(): Website;
type Website = {
    url?: string;
};
/** @returns {BusinessDetails} */
declare function BusinessDetails(): BusinessDetails;
type BusinessDetails = {
    website?: Website;
};
/** @returns {SellerPhoneNumber} */
declare function SellerPhoneNumber(): SellerPhoneNumber;
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
/** @returns {ContactDetails} */
declare function ContactDetails(): ContactDetails;
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
/** @returns {CountryCurrencyInfo} */
declare function CountryCurrencyInfo(): CountryCurrencyInfo;
type CountryCurrencyInfo = {
    code: string;
    symbol: string;
    name: string;
};
/** @returns {BusinessCountryInfo} */
declare function BusinessCountryInfo(): BusinessCountryInfo;
type BusinessCountryInfo = {
    country_code: string;
    country: string;
    currency: CountryCurrencyInfo;
    timezone: string;
};
/** @returns {Document} */
declare function Document(): Document;
type Document = {
    value: string;
    legal_name?: string;
    verified?: boolean;
    type: string;
    url?: string;
};
/** @returns {GetAddressSchema} */
declare function GetAddressSchema(): GetAddressSchema;
type GetAddressSchema = {
    landmark?: string;
    country_code?: string;
    pincode?: number;
    address_type?: string;
    longitude: number;
    country?: string;
    address2?: string;
    state?: string;
    state_code?: string;
    sector?: string;
    address1?: string;
    city?: string;
    latitude: number;
};
/** @returns {GetCompanyProfileSerializerResponseSchema} */
declare function GetCompanyProfileSerializerResponseSchema(): GetCompanyProfileSerializerResponseSchema;
type GetCompanyProfileSerializerResponseSchema = {
    business_info?: string;
    taxes?: CompanyTaxesSchema[];
    business_type?: string;
    name?: string;
    _custom_json?: any;
    verified_on?: string;
    created_by?: UserSchema;
    created_on?: string;
    warnings?: any;
    business_details?: BusinessDetails;
    mode?: string;
    contact_details?: ContactDetails;
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    uid: number;
    franchise_enabled?: boolean;
    stage?: string;
    company_type: string;
    documents?: Document[];
    addresses?: GetAddressSchema[];
    verified_by?: UserSchema;
    notification_emails?: string[];
    modified_by?: UserSchema;
};
/** @returns {ErrorResponseSchema} */
declare function ErrorResponseSchema(): ErrorResponseSchema;
type ErrorResponseSchema = {
    message?: string;
    code?: string;
    status?: number;
    meta?: any;
};
/** @returns {CompanyTaxesSerializer1} */
declare function CompanyTaxesSerializer1(): CompanyTaxesSerializer1;
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
/** @returns {CreateUpdateAddressSchema} */
declare function CreateUpdateAddressSchema(): CreateUpdateAddressSchema;
type CreateUpdateAddressSchema = {
    landmark?: string;
    country_code?: string;
    pincode: number;
    address_type: string;
    longitude: number;
    country: string;
    address2?: string;
    state: string;
    address1: string;
    city: string;
    latitude: number;
};
/** @returns {UpdateCompany} */
declare function UpdateCompany(): UpdateCompany;
type UpdateCompany = {
    franchise_enabled?: boolean;
    business_info?: string;
    warnings?: any;
    company_type?: string;
    _custom_json?: any;
    taxes?: CompanyTaxesSerializer1[];
    business_details?: BusinessDetails;
    documents?: Document[];
    business_type?: string;
    addresses?: CreateUpdateAddressSchema[];
    notification_emails?: string[];
    contact_details?: ContactDetails;
    reject_reason?: string;
    name?: string;
};
/** @returns {ProfileSuccessResponseSchema} */
declare function ProfileSuccessResponseSchema(): ProfileSuccessResponseSchema;
type ProfileSuccessResponseSchema = {
    uid?: number;
    message?: string;
    success?: boolean;
};
/** @returns {DocumentsObj} */
declare function DocumentsObj(): DocumentsObj;
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
/** @returns {MetricsSchema} */
declare function MetricsSchema(): MetricsSchema;
type MetricsSchema = {
    stage?: string;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
    brand?: DocumentsObj;
};
/** @returns {BrandBannerSchema} */
declare function BrandBannerSchema(): BrandBannerSchema;
type BrandBannerSchema = {
    portrait: string;
    landscape: string;
};
/** @returns {GetBrandResponseSchema} */
declare function GetBrandResponseSchema(): GetBrandResponseSchema;
type GetBrandResponseSchema = {
    modified_by?: UserSchema;
    banner?: BrandBannerSchema;
    name: string;
    _custom_json?: any;
    verified_on?: string;
    created_by?: UserSchema;
    created_on?: string;
    warnings?: any;
    _locale_language?: any;
    mode?: string;
    synonyms?: string[];
    modified_on?: string;
    uid?: number;
    reject_reason?: string;
    stage?: string;
    verified_by?: UserSchema;
    slug_key?: string;
    logo?: string;
    description?: string;
};
/** @returns {CreateBrandRequestSchema} */
declare function CreateBrandRequestSchema(): CreateBrandRequestSchema;
type CreateBrandRequestSchema = {
    _custom_json?: any;
    _locale_language?: any;
    synonyms?: string[];
    company_id?: number;
    description?: string;
    logo: string;
    brand_tier?: string;
    uid?: number;
    banner: BrandBannerSchema;
    name: string;
    slug_key?: string;
};
/** @returns {UpdateBrandRequestSchema} */
declare function UpdateBrandRequestSchema(): UpdateBrandRequestSchema;
type UpdateBrandRequestSchema = {
    _custom_json?: any;
    _locale_language?: any;
    synonyms?: string[];
    company_id?: number;
    description?: string;
    logo: string;
    brand_tier?: string;
    uid?: number;
    banner: BrandBannerSchema;
    name: string;
};
/** @returns {CompanySocialAccounts} */
declare function CompanySocialAccounts(): CompanySocialAccounts;
type CompanySocialAccounts = {
    name: string;
    url: string;
};
/** @returns {CompanyDetails} */
declare function CompanyDetails(): CompanyDetails;
type CompanyDetails = {
    socials?: CompanySocialAccounts[];
    website_url?: string;
};
/** @returns {CompanySchema} */
declare function CompanySchema(): CompanySchema;
type CompanySchema = {
    stage?: string;
    _custom_json?: any;
    verified_on?: string;
    verified_by?: UserSchema;
    created_on?: string;
    created_by?: UserSchema;
    company_type: string;
    modified_on?: string;
    market_channels?: string[];
    business_type: string;
    addresses?: GetAddressSchema[];
    notification_emails?: string[];
    details?: CompanyDetails;
    business_country_info?: BusinessCountryInfo;
    uid?: number;
    reject_reason?: string;
    name?: string;
    modified_by?: UserSchema;
};
/** @returns {CompanyBrandSchema} */
declare function CompanyBrandSchema(): CompanyBrandSchema;
type CompanyBrandSchema = {
    stage?: string;
    verified_on?: string;
    verified_by?: UserSchema;
    created_on?: string;
    created_by?: UserSchema;
    company?: CompanySchema;
    warnings?: any;
    modified_on?: string;
    uid?: number;
    reject_reason?: string;
    brand?: GetBrandResponseSchema;
    modified_by?: UserSchema;
};
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
};
/** @returns {CompanyBrandListSchema} */
declare function CompanyBrandListSchema(): CompanyBrandListSchema;
type CompanyBrandListSchema = {
    items?: CompanyBrandSchema[];
    page?: Page;
};
/** @returns {CompanyBrandPostRequestSchema} */
declare function CompanyBrandPostRequestSchema(): CompanyBrandPostRequestSchema;
type CompanyBrandPostRequestSchema = {
    uid?: number;
    brands: number[];
    company: number;
};
/** @returns {InvoiceCredSchema} */
declare function InvoiceCredSchema(): InvoiceCredSchema;
type InvoiceCredSchema = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
/** @returns {InvoiceDetailsSchema} */
declare function InvoiceDetailsSchema(): InvoiceDetailsSchema;
type InvoiceDetailsSchema = {
    e_invoice?: InvoiceCredSchema;
    e_waybill?: InvoiceCredSchema;
};
/** @returns {GetCompanySchema} */
declare function GetCompanySchema(): GetCompanySchema;
type GetCompanySchema = {
    stage?: string;
    verified_on?: string;
    verified_by?: UserSchema;
    created_on?: string;
    created_by?: UserSchema;
    company_type?: string;
    modified_on?: string;
    business_type?: string;
    addresses?: GetAddressSchema[];
    uid?: number;
    reject_reason?: string;
    name?: string;
    modified_by?: UserSchema;
};
/** @returns {LocationManagerSchema} */
declare function LocationManagerSchema(): LocationManagerSchema;
type LocationManagerSchema = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
/** @returns {LocationTimingSchema} */
declare function LocationTimingSchema(): LocationTimingSchema;
type LocationTimingSchema = {
    hour: number;
    minute: number;
};
/** @returns {LocationDayWiseSchema} */
declare function LocationDayWiseSchema(): LocationDayWiseSchema;
type LocationDayWiseSchema = {
    open: boolean;
    weekday: string;
    opening?: LocationTimingSchema;
    closing?: LocationTimingSchema;
};
/** @returns {HolidayDateSchema} */
declare function HolidayDateSchema(): HolidayDateSchema;
type HolidayDateSchema = {
    end_date: string;
    start_date: string;
};
/** @returns {HolidaySchemaSchema} */
declare function HolidaySchemaSchema(): HolidaySchemaSchema;
type HolidaySchemaSchema = {
    date: HolidayDateSchema;
    title: string;
    holiday_type: string;
};
/** @returns {ProductReturnConfigSchema} */
declare function ProductReturnConfigSchema(): ProductReturnConfigSchema;
type ProductReturnConfigSchema = {
    on_same_store?: boolean;
    store_uid?: number;
};
/** @returns {GetLocationSchema} */
declare function GetLocationSchema(): GetLocationSchema;
type GetLocationSchema = {
    code: string;
    phone_number?: string;
    contact_numbers?: SellerPhoneNumber[];
    gst_credentials?: InvoiceDetailsSchema;
    name: string;
    _custom_json?: any;
    verified_on?: string;
    created_by?: UserSchema;
    created_on?: string;
    company?: GetCompanySchema;
    address: GetAddressSchema;
    warnings?: any;
    store_type?: string;
    manager?: LocationManagerSchema;
    auto_invoice?: boolean;
    modified_on?: string;
    uid?: number;
    timing?: LocationDayWiseSchema[];
    stage?: string;
    documents?: Document[];
    credit_note?: boolean;
    holiday?: HolidaySchemaSchema[];
    display_name: string;
    product_return_config?: ProductReturnConfigSchema;
    verified_by?: UserSchema;
    notification_emails?: string[];
    modified_by?: UserSchema;
    tags?: string[];
    default_order_acceptance_timing?: boolean;
    order_acceptance_timing?: LocationDayWiseSchema[];
    avg_order_processing_time?: AverageOrderProcessingTime;
    bulk_shipment?: boolean;
    auto_assign_courier_partner?: boolean;
};
/** @returns {LocationListSchema} */
declare function LocationListSchema(): LocationListSchema;
type LocationListSchema = {
    items?: GetLocationSchema[];
    page?: Page;
};
/** @returns {AddressSchema} */
declare function AddressSchema(): AddressSchema;
type AddressSchema = {
    landmark?: string;
    country_code: string;
    pincode?: number;
    address_type?: string;
    longitude: number;
    country?: string;
    address2?: string;
    state?: string;
    sector?: string;
    state_code?: string;
    address1?: string;
    city?: string;
    latitude: number;
};
/** @returns {LocationSchema} */
declare function LocationSchema(): LocationSchema;
type LocationSchema = {
    code: string;
    gst_credentials?: InvoiceDetailsSchema;
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    _custom_json?: any;
    warnings?: any;
    address: AddressSchema;
    company: number;
    store_type?: string;
    manager?: LocationManagerSchema;
    auto_invoice?: boolean;
    uid?: number;
    timing?: LocationDayWiseSchema[];
    stage?: string;
    documents: Document[];
    credit_note?: boolean;
    holiday?: HolidaySchemaSchema[];
    product_return_config?: ProductReturnConfigSchema;
    display_name: string;
    notification_emails?: string[];
    tags?: string[];
    /**
     * - Flag to set
     * order_acceptance_timing as default timing
     */
    default_order_acceptance_timing?: boolean;
    /**
     * - Order
     * acceptance timing of the store
     */
    order_acceptance_timing?: LocationDayWiseSchema[];
    avg_order_processing_time?: AverageOrderProcessingTime;
    bulk_shipment?: boolean;
    auto_assign_courier_partner?: boolean;
};
/** @returns {BulkLocationSchema} */
declare function BulkLocationSchema(): BulkLocationSchema;
type BulkLocationSchema = {
    data?: LocationSchema[];
};
/** @returns {AverageOrderProcessingTime} */
declare function AverageOrderProcessingTime(): AverageOrderProcessingTime;
type AverageOrderProcessingTime = {
    duration?: number;
    duration_type?: string;
};
/** @returns {StoreTagsResponseSchema} */
declare function StoreTagsResponseSchema(): StoreTagsResponseSchema;
type StoreTagsResponseSchema = {
    tags?: string[];
    success?: boolean;
};
