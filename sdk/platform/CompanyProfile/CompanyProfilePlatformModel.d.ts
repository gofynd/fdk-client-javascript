export = CompanyProfilePlatformModel;
/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */
/**
 * @typedef UserSerializer
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
 * @typedef GetAddressSerializer
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} [pincode]
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
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} [business_info]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {string} [business_type]
 * @property {string} [name]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
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
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer} [modified_by]
 */
/**
 * @typedef ErrorResponse
 * @property {number} [code]
 * @property {string} [error]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */
/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */
/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} [pincode]
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
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {ContactDetails} [contact_details]
 * @property {string} [reject_reason]
 * @property {string} [name]
 */
/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {Object[]} [data]
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */
/**
 * @typedef MetricsSerializer
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [brand]
 */
/**
 * @typedef BrandBannerSerializer
 * @property {string} portrait
 * @property {string} landscape
 */
/**
 * @typedef GetBrandResponseSerializer
 * @property {UserSerializer} [modified_by]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {Object} [warnings]
 * @property {Object} [_locale_language]
 * @property {string} [mode]
 * @property {string[]} [synonyms]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {string} [slug_key]
 * @property {string} [logo]
 * @property {string} [description]
 */
/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string[]} [synonyms]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} [brand_tier]
 * @property {number} [uid]
 * @property {BrandBannerSerializer} banner
 * @property {string} name
 * @property {string} [slug_key]
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
 * @typedef CompanySerializer
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} company_type
 * @property {string} [modified_on]
 * @property {string[]} [market_channels]
 * @property {string} [business_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {CompanyDetails} [details]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {UserSerializer} [modified_by]
 */
/**
 * @typedef CompanyBrandSerializer
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {CompanySerializer} [company]
 * @property {Object} [warnings]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {UserSerializer} [modified_by]
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
 * @property {number} [total] - Total number of items.
 */
/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number[]} brands
 * @property {number} company
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {boolean} [enabled]
 * @property {string} [password]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */
/**
 * @typedef GetCompanySerializer
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [company_type]
 * @property {string} [modified_on]
 * @property {string} [business_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {UserSerializer} [modified_by]
 */
/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
 */
/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */
/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} title
 * @property {string} holiday_type
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef GetLocationSerializer
 * @property {string} code
 * @property {string} [phone_number]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {GetCompanySerializer} [company]
 * @property {GetAddressSerializer} address
 * @property {Object} [warnings]
 * @property {string} [store_type]
 * @property {LocationManagerSerializer} [manager]
 * @property {boolean} [auto_invoice]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [stage]
 * @property {Document[]} [documents]
 * @property {boolean} [credit_note]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} display_name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer} [modified_by]
 * @property {string[]} [tags]
 * @property {boolean} [default_order_acceptance_timing]
 * @property {LocationDayWiseSerializer[]} [order_acceptance_timing]
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {boolean} [auto_assign_courier_partner]
 * @property {boolean} [is_hyperlocal_active]
 */
/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AddressSerializer
 * @property {string} [landmark]
 * @property {string} country_code
 * @property {string} [pincode]
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
 * @typedef LocationSerializer
 * @property {string} code
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {Object} [warnings]
 * @property {AddressSerializer} address
 * @property {number} company
 * @property {string} [store_type]
 * @property {LocationManagerSerializer} [manager]
 * @property {boolean} [auto_invoice]
 * @property {number} [uid]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [stage]
 * @property {Document[]} documents
 * @property {boolean} [credit_note]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} display_name
 * @property {string[]} [notification_emails]
 * @property {string[]} [tags]
 * @property {boolean} [default_order_acceptance_timing] - Flag to set
 *   order_acceptance_timing as default timing
 * @property {LocationDayWiseSerializer[]} [order_acceptance_timing] - Order
 *   acceptance timing of the store
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {boolean} [auto_assign_courier_partner]
 * @property {boolean} [is_hyperlocal_active] - Indicates if the store has opted
 *   for hyperlocal delivery
 */
/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
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
    export { CompanyTaxesSerializer, UserSerializer, Website, BusinessDetails, SellerPhoneNumber, ContactDetails, CountryCurrencyInfo, BusinessCountryInfo, Document, GetAddressSerializer, GetCompanyProfileSerializerResponse, ErrorResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, Page, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetCompanySerializer, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, HolidayDateSerializer, HolidaySchemaSerializer, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, AverageOrderProcessingTime, StoreTagsResponseSchema };
}
/** @returns {CompanyTaxesSerializer} */
declare function CompanyTaxesSerializer(): CompanyTaxesSerializer;
type CompanyTaxesSerializer = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
/** @returns {UserSerializer} */
declare function UserSerializer(): UserSerializer;
type UserSerializer = {
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
/** @returns {GetAddressSerializer} */
declare function GetAddressSerializer(): GetAddressSerializer;
type GetAddressSerializer = {
    landmark?: string;
    country_code?: string;
    pincode?: string;
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
/** @returns {GetCompanyProfileSerializerResponse} */
declare function GetCompanyProfileSerializerResponse(): GetCompanyProfileSerializerResponse;
type GetCompanyProfileSerializerResponse = {
    business_info?: string;
    taxes?: CompanyTaxesSerializer[];
    business_type?: string;
    name?: string;
    _custom_json?: any;
    verified_on?: string;
    created_by?: UserSerializer;
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
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    notification_emails?: string[];
    modified_by?: UserSerializer;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    code?: number;
    error?: string;
    message?: string;
    meta?: any;
    status?: number;
};
/** @returns {CompanyTaxesSerializer1} */
declare function CompanyTaxesSerializer1(): CompanyTaxesSerializer1;
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
/** @returns {CreateUpdateAddressSerializer} */
declare function CreateUpdateAddressSerializer(): CreateUpdateAddressSerializer;
type CreateUpdateAddressSerializer = {
    landmark?: string;
    country_code?: string;
    pincode?: string;
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
    addresses?: CreateUpdateAddressSerializer[];
    notification_emails?: string[];
    contact_details?: ContactDetails;
    reject_reason?: string;
    name?: string;
};
/** @returns {ProfileSuccessResponse} */
declare function ProfileSuccessResponse(): ProfileSuccessResponse;
type ProfileSuccessResponse = {
    uid?: number;
    data?: any[];
    message?: string;
    success?: boolean;
};
/** @returns {DocumentsObj} */
declare function DocumentsObj(): DocumentsObj;
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
/** @returns {MetricsSerializer} */
declare function MetricsSerializer(): MetricsSerializer;
type MetricsSerializer = {
    stage?: string;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
    brand?: DocumentsObj;
};
/** @returns {BrandBannerSerializer} */
declare function BrandBannerSerializer(): BrandBannerSerializer;
type BrandBannerSerializer = {
    portrait: string;
    landscape: string;
};
/** @returns {GetBrandResponseSerializer} */
declare function GetBrandResponseSerializer(): GetBrandResponseSerializer;
type GetBrandResponseSerializer = {
    modified_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    name: string;
    _custom_json?: any;
    verified_on?: string;
    created_by?: UserSerializer;
    created_on?: string;
    warnings?: any;
    _locale_language?: any;
    mode?: string;
    synonyms?: string[];
    modified_on?: string;
    uid?: number;
    reject_reason?: string;
    stage?: string;
    verified_by?: UserSerializer;
    slug_key?: string;
    logo?: string;
    description?: string;
};
/** @returns {CreateUpdateBrandRequestSerializer} */
declare function CreateUpdateBrandRequestSerializer(): CreateUpdateBrandRequestSerializer;
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    _locale_language?: any;
    synonyms?: string[];
    company_id?: number;
    description?: string;
    logo: string;
    brand_tier?: string;
    uid?: number;
    banner: BrandBannerSerializer;
    name: string;
    slug_key?: string;
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
/** @returns {CompanySerializer} */
declare function CompanySerializer(): CompanySerializer;
type CompanySerializer = {
    stage?: string;
    _custom_json?: any;
    verified_on?: string;
    verified_by?: UserSerializer;
    created_on?: string;
    created_by?: UserSerializer;
    company_type: string;
    modified_on?: string;
    market_channels?: string[];
    business_type?: string;
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    details?: CompanyDetails;
    business_country_info?: BusinessCountryInfo;
    uid?: number;
    reject_reason?: string;
    name?: string;
    modified_by?: UserSerializer;
};
/** @returns {CompanyBrandSerializer} */
declare function CompanyBrandSerializer(): CompanyBrandSerializer;
type CompanyBrandSerializer = {
    stage?: string;
    verified_on?: string;
    verified_by?: UserSerializer;
    created_on?: string;
    created_by?: UserSerializer;
    company?: CompanySerializer;
    warnings?: any;
    modified_on?: string;
    uid?: number;
    reject_reason?: string;
    brand?: GetBrandResponseSerializer;
    modified_by?: UserSerializer;
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
    /**
     * - Total number of items.
     */
    total?: number;
};
/** @returns {CompanyBrandListSerializer} */
declare function CompanyBrandListSerializer(): CompanyBrandListSerializer;
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
/** @returns {CompanyBrandPostRequestSerializer} */
declare function CompanyBrandPostRequestSerializer(): CompanyBrandPostRequestSerializer;
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    brands: number[];
    company: number;
};
/** @returns {InvoiceCredSerializer} */
declare function InvoiceCredSerializer(): InvoiceCredSerializer;
type InvoiceCredSerializer = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
/** @returns {InvoiceDetailsSerializer} */
declare function InvoiceDetailsSerializer(): InvoiceDetailsSerializer;
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
/** @returns {GetCompanySerializer} */
declare function GetCompanySerializer(): GetCompanySerializer;
type GetCompanySerializer = {
    stage?: string;
    verified_on?: string;
    verified_by?: UserSerializer;
    created_on?: string;
    created_by?: UserSerializer;
    company_type?: string;
    modified_on?: string;
    business_type?: string;
    addresses?: GetAddressSerializer[];
    uid?: number;
    reject_reason?: string;
    name?: string;
    modified_by?: UserSerializer;
};
/** @returns {LocationManagerSerializer} */
declare function LocationManagerSerializer(): LocationManagerSerializer;
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
/** @returns {LocationTimingSerializer} */
declare function LocationTimingSerializer(): LocationTimingSerializer;
type LocationTimingSerializer = {
    hour: number;
    minute: number;
};
/** @returns {LocationDayWiseSerializer} */
declare function LocationDayWiseSerializer(): LocationDayWiseSerializer;
type LocationDayWiseSerializer = {
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
};
/** @returns {HolidayDateSerializer} */
declare function HolidayDateSerializer(): HolidayDateSerializer;
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
/** @returns {HolidaySchemaSerializer} */
declare function HolidaySchemaSerializer(): HolidaySchemaSerializer;
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    title: string;
    holiday_type: string;
};
/** @returns {ProductReturnConfigSerializer} */
declare function ProductReturnConfigSerializer(): ProductReturnConfigSerializer;
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
/** @returns {GetLocationSerializer} */
declare function GetLocationSerializer(): GetLocationSerializer;
type GetLocationSerializer = {
    code: string;
    phone_number?: string;
    contact_numbers?: SellerPhoneNumber[];
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    _custom_json?: any;
    verified_on?: string;
    created_by?: UserSerializer;
    created_on?: string;
    company?: GetCompanySerializer;
    address: GetAddressSerializer;
    warnings?: any;
    store_type?: string;
    manager?: LocationManagerSerializer;
    auto_invoice?: boolean;
    modified_on?: string;
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    stage?: string;
    documents?: Document[];
    credit_note?: boolean;
    holiday?: HolidaySchemaSerializer[];
    display_name: string;
    product_return_config?: ProductReturnConfigSerializer;
    verified_by?: UserSerializer;
    notification_emails?: string[];
    modified_by?: UserSerializer;
    tags?: string[];
    default_order_acceptance_timing?: boolean;
    order_acceptance_timing?: LocationDayWiseSerializer[];
    avg_order_processing_time?: AverageOrderProcessingTime;
    bulk_shipment?: boolean;
    auto_assign_courier_partner?: boolean;
    is_hyperlocal_active?: boolean;
};
/** @returns {LocationListSerializer} */
declare function LocationListSerializer(): LocationListSerializer;
type LocationListSerializer = {
    items?: GetLocationSerializer[];
    page?: Page;
};
/** @returns {AddressSerializer} */
declare function AddressSerializer(): AddressSerializer;
type AddressSerializer = {
    landmark?: string;
    country_code: string;
    pincode?: string;
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
/** @returns {LocationSerializer} */
declare function LocationSerializer(): LocationSerializer;
type LocationSerializer = {
    code: string;
    gst_credentials?: InvoiceDetailsSerializer;
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    _custom_json?: any;
    warnings?: any;
    address: AddressSerializer;
    company: number;
    store_type?: string;
    manager?: LocationManagerSerializer;
    auto_invoice?: boolean;
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    stage?: string;
    documents: Document[];
    credit_note?: boolean;
    holiday?: HolidaySchemaSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
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
    order_acceptance_timing?: LocationDayWiseSerializer[];
    avg_order_processing_time?: AverageOrderProcessingTime;
    bulk_shipment?: boolean;
    auto_assign_courier_partner?: boolean;
    /**
     * - Indicates if the store has opted
     * for hyperlocal delivery
     */
    is_hyperlocal_active?: boolean;
};
/** @returns {BulkLocationSerializer} */
declare function BulkLocationSerializer(): BulkLocationSerializer;
type BulkLocationSerializer = {
    data?: LocationSerializer[];
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
