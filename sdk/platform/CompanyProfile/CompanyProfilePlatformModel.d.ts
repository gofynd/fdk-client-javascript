export = CompanyProfilePlatformModel;
/**
 * @typedef AddressSerializer
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef AverageOrderProcessingTime
 * @property {number} [duration]
 * @property {string} [duration_type]
 */
/**
 * @typedef BrandBannerSerializer
 * @property {string} landscape
 * @property {string} portrait
 */
/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */
/**
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */
/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */
/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number[]} brands
 * @property {number} company
 * @property {number} [uid]
 */
/**
 * @typedef CompanyBrandSerializer
 * @property {GetBrandResponseSerializer} [brand]
 * @property {CompanySerializer} [company]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */
/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */
/**
 * @typedef CompanySerializer
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} business_type
 * @property {string} company_type
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {CompanyDetails} [details]
 * @property {string[]} [market_channels]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 */
/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */
/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */
/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */
/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */
/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} address_type
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} city
 * @property {string} country
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} pincode
 * @property {string} state
 */
/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} banner
 * @property {string} [brand_tier]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 */
/**
 * @typedef Document
 * @property {string} [legal_name]
 * @property {string} type
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} [verified]
 */
/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */
/**
 * @typedef GetAddressSerializer
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef GetBrandResponseSerializer
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string} [reject_reason]
 * @property {string} [slug_key]
 * @property {string} [stage]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */
/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 * @property {string} [business_type]
 * @property {string} company_type
 * @property {ContactDetails} [contact_details]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {string} [mode]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [stage]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {number} uid
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */
/**
 * @typedef GetCompanySerializer
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 */
/**
 * @typedef GetLocationSerializer
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer} address
 * @property {boolean} [auto_invoice]
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {string} code
 * @property {GetCompanySerializer} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {boolean} [credit_note]
 * @property {boolean} [default_order_acceptance_timing]
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {LocationManagerSerializer} [manager]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [notification_emails]
 * @property {LocationDayWiseSerializer[]} [order_acceptance_timing]
 * @property {string} [phone_number]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {string[]} [tags]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */
/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */
/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} holiday_type
 * @property {string} title
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 */
/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */
/**
 * @typedef LocationSerializer
 * @property {Object} [_custom_json]
 * @property {AddressSerializer} address
 * @property {boolean} [auto_invoice]
 * @property {AverageOrderProcessingTime} [avg_order_processing_time]
 * @property {boolean} [bulk_shipment]
 * @property {string} code
 * @property {number} company
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {boolean} [credit_note]
 * @property {boolean} [default_order_acceptance_timing] - Flag to set
 *   order_acceptance_timing as default timing
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} name
 * @property {string[]} [notification_emails]
 * @property {LocationDayWiseSerializer[]} [order_acceptance_timing] - Order
 *   acceptance timing of the store
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {string[]} [tags]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {Object} [warnings]
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */
/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [product]
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [store_documents]
 * @property {number} [uid]
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
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef ProfileSuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {number} [uid]
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef StoreTagsResponseSchema
 * @property {boolean} [success]
 * @property {string[]} [tags]
 */
/**
 * @typedef UpdateCompany
 * @property {Object} [_custom_json]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {ContactDetails} [contact_details]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {Object} [warnings]
 */
/**
 * @typedef UserSerializer
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef Website
 * @property {string} [url]
 */
declare class CompanyProfilePlatformModel {
}
declare namespace CompanyProfilePlatformModel {
    export { AddressSerializer, AverageOrderProcessingTime, BrandBannerSerializer, BulkLocationSerializer, BusinessCountryInfo, BusinessDetails, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, CompanyBrandSerializer, CompanyDetails, CompanySerializer, CompanySocialAccounts, CompanyTaxesSerializer, CompanyTaxesSerializer1, ContactDetails, CreateUpdateAddressSerializer, CreateUpdateBrandRequestSerializer, Document, DocumentsObj, ErrorResponse, GetAddressSerializer, GetBrandResponseSerializer, GetCompanyProfileSerializerResponse, GetCompanySerializer, GetLocationSerializer, HolidayDateSerializer, HolidaySchemaSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationDayWiseSerializer, LocationListSerializer, LocationManagerSerializer, LocationSerializer, LocationTimingSerializer, MetricsSerializer, Page, ProductReturnConfigSerializer, ProfileSuccessResponse, SellerPhoneNumber, StoreTagsResponseSchema, UpdateCompany, UserSerializer, Website };
}
/** @returns {AddressSerializer} */
declare function AddressSerializer(): AddressSerializer;
type AddressSerializer = {
    address_type?: string;
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    country_code?: string;
    landmark?: string;
    latitude: number;
    longitude: number;
    pincode?: number;
    state?: string;
};
/** @returns {AverageOrderProcessingTime} */
declare function AverageOrderProcessingTime(): AverageOrderProcessingTime;
type AverageOrderProcessingTime = {
    duration?: number;
    duration_type?: string;
};
/** @returns {BrandBannerSerializer} */
declare function BrandBannerSerializer(): BrandBannerSerializer;
type BrandBannerSerializer = {
    landscape: string;
    portrait: string;
};
/** @returns {BulkLocationSerializer} */
declare function BulkLocationSerializer(): BulkLocationSerializer;
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
/** @returns {BusinessCountryInfo} */
declare function BusinessCountryInfo(): BusinessCountryInfo;
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
/** @returns {BusinessDetails} */
declare function BusinessDetails(): BusinessDetails;
type BusinessDetails = {
    website?: Website;
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
    brands: number[];
    company: number;
    uid?: number;
};
/** @returns {CompanyBrandSerializer} */
declare function CompanyBrandSerializer(): CompanyBrandSerializer;
type CompanyBrandSerializer = {
    brand?: GetBrandResponseSerializer;
    company?: CompanySerializer;
    created_by?: UserSerializer;
    created_on?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    reject_reason?: string;
    stage?: string;
    uid?: number;
    verified_by?: UserSerializer;
    verified_on?: string;
    warnings?: any;
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
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    company_type: string;
    created_by?: UserSerializer;
    created_on?: string;
    details?: CompanyDetails;
    market_channels?: string[];
    modified_by?: UserSerializer;
    modified_on?: string;
    name?: string;
    notification_emails?: string[];
    reject_reason?: string;
    stage?: string;
    uid?: number;
    verified_by?: UserSerializer;
    verified_on?: string;
};
/** @returns {CompanySocialAccounts} */
declare function CompanySocialAccounts(): CompanySocialAccounts;
type CompanySocialAccounts = {
    name: string;
    url: string;
};
/** @returns {CompanyTaxesSerializer} */
declare function CompanyTaxesSerializer(): CompanyTaxesSerializer;
type CompanyTaxesSerializer = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
/** @returns {CompanyTaxesSerializer1} */
declare function CompanyTaxesSerializer1(): CompanyTaxesSerializer1;
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
/** @returns {ContactDetails} */
declare function ContactDetails(): ContactDetails;
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
/** @returns {CreateUpdateAddressSerializer} */
declare function CreateUpdateAddressSerializer(): CreateUpdateAddressSerializer;
type CreateUpdateAddressSerializer = {
    address_type: string;
    address1: string;
    address2?: string;
    city: string;
    country: string;
    country_code?: string;
    landmark?: string;
    latitude: number;
    longitude: number;
    pincode: number;
    state: string;
};
/** @returns {CreateUpdateBrandRequestSerializer} */
declare function CreateUpdateBrandRequestSerializer(): CreateUpdateBrandRequestSerializer;
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    _locale_language?: any;
    banner: BrandBannerSerializer;
    brand_tier?: string;
    company_id?: number;
    description?: string;
    logo: string;
    name: string;
    synonyms?: string[];
    uid?: number;
};
/** @returns {Document} */
declare function Document(): Document;
type Document = {
    legal_name?: string;
    type: string;
    url?: string;
    value: string;
    verified?: boolean;
};
/** @returns {DocumentsObj} */
declare function DocumentsObj(): DocumentsObj;
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    code?: string;
    message?: string;
    meta?: any;
    status?: number;
};
/** @returns {GetAddressSerializer} */
declare function GetAddressSerializer(): GetAddressSerializer;
type GetAddressSerializer = {
    address_type?: string;
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    country_code?: string;
    landmark?: string;
    latitude: number;
    longitude: number;
    pincode?: number;
    state?: string;
};
/** @returns {GetBrandResponseSerializer} */
declare function GetBrandResponseSerializer(): GetBrandResponseSerializer;
type GetBrandResponseSerializer = {
    _custom_json?: any;
    _locale_language?: any;
    banner?: BrandBannerSerializer;
    created_by?: UserSerializer;
    created_on?: string;
    description?: string;
    logo?: string;
    mode?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    name: string;
    reject_reason?: string;
    slug_key?: string;
    stage?: string;
    synonyms?: string[];
    uid?: number;
    verified_by?: UserSerializer;
    verified_on?: string;
    warnings?: any;
};
/** @returns {GetCompanyProfileSerializerResponse} */
declare function GetCompanyProfileSerializerResponse(): GetCompanyProfileSerializerResponse;
type GetCompanyProfileSerializerResponse = {
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    business_details?: BusinessDetails;
    business_info?: string;
    business_type?: string;
    company_type: string;
    contact_details?: ContactDetails;
    created_by?: UserSerializer;
    created_on?: string;
    documents?: Document[];
    franchise_enabled?: boolean;
    mode?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    name?: string;
    notification_emails?: string[];
    stage?: string;
    taxes?: CompanyTaxesSerializer[];
    uid: number;
    verified_by?: UserSerializer;
    verified_on?: string;
    warnings?: any;
};
/** @returns {GetCompanySerializer} */
declare function GetCompanySerializer(): GetCompanySerializer;
type GetCompanySerializer = {
    addresses?: GetAddressSerializer[];
    business_type?: string;
    company_type?: string;
    created_by?: UserSerializer;
    created_on?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    name?: string;
    reject_reason?: string;
    stage?: string;
    uid?: number;
    verified_by?: UserSerializer;
    verified_on?: string;
};
/** @returns {GetLocationSerializer} */
declare function GetLocationSerializer(): GetLocationSerializer;
type GetLocationSerializer = {
    _custom_json?: any;
    address: GetAddressSerializer;
    auto_invoice?: boolean;
    avg_order_processing_time?: AverageOrderProcessingTime;
    bulk_shipment?: boolean;
    code: string;
    company?: GetCompanySerializer;
    contact_numbers?: SellerPhoneNumber[];
    created_by?: UserSerializer;
    created_on?: string;
    credit_note?: boolean;
    default_order_acceptance_timing?: boolean;
    display_name: string;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    holiday?: HolidaySchemaSerializer[];
    manager?: LocationManagerSerializer;
    modified_by?: UserSerializer;
    modified_on?: string;
    name: string;
    notification_emails?: string[];
    order_acceptance_timing?: LocationDayWiseSerializer[];
    phone_number?: string;
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    store_type?: string;
    tags?: string[];
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    verified_by?: UserSerializer;
    verified_on?: string;
    warnings?: any;
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
    holiday_type: string;
    title: string;
};
/** @returns {InvoiceCredSerializer} */
declare function InvoiceCredSerializer(): InvoiceCredSerializer;
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
/** @returns {InvoiceDetailsSerializer} */
declare function InvoiceDetailsSerializer(): InvoiceDetailsSerializer;
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
/** @returns {LocationDayWiseSerializer} */
declare function LocationDayWiseSerializer(): LocationDayWiseSerializer;
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
    weekday: string;
};
/** @returns {LocationListSerializer} */
declare function LocationListSerializer(): LocationListSerializer;
type LocationListSerializer = {
    items?: GetLocationSerializer[];
    page?: Page;
};
/** @returns {LocationManagerSerializer} */
declare function LocationManagerSerializer(): LocationManagerSerializer;
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
/** @returns {LocationSerializer} */
declare function LocationSerializer(): LocationSerializer;
type LocationSerializer = {
    _custom_json?: any;
    address: AddressSerializer;
    auto_invoice?: boolean;
    avg_order_processing_time?: AverageOrderProcessingTime;
    bulk_shipment?: boolean;
    code: string;
    company: number;
    contact_numbers?: SellerPhoneNumber[];
    credit_note?: boolean;
    /**
     * - Flag to set
     * order_acceptance_timing as default timing
     */
    default_order_acceptance_timing?: boolean;
    display_name: string;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    holiday?: HolidaySchemaSerializer[];
    manager?: LocationManagerSerializer;
    name: string;
    notification_emails?: string[];
    /**
     * - Order
     * acceptance timing of the store
     */
    order_acceptance_timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    store_type?: string;
    tags?: string[];
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    warnings?: any;
};
/** @returns {LocationTimingSerializer} */
declare function LocationTimingSerializer(): LocationTimingSerializer;
type LocationTimingSerializer = {
    hour: number;
    minute: number;
};
/** @returns {MetricsSerializer} */
declare function MetricsSerializer(): MetricsSerializer;
type MetricsSerializer = {
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
    stage?: string;
    store?: DocumentsObj;
    store_documents?: DocumentsObj;
    uid?: number;
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
/** @returns {ProductReturnConfigSerializer} */
declare function ProductReturnConfigSerializer(): ProductReturnConfigSerializer;
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
/** @returns {ProfileSuccessResponse} */
declare function ProfileSuccessResponse(): ProfileSuccessResponse;
type ProfileSuccessResponse = {
    message?: string;
    success?: boolean;
    uid?: number;
};
/** @returns {SellerPhoneNumber} */
declare function SellerPhoneNumber(): SellerPhoneNumber;
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
/** @returns {StoreTagsResponseSchema} */
declare function StoreTagsResponseSchema(): StoreTagsResponseSchema;
type StoreTagsResponseSchema = {
    success?: boolean;
    tags?: string[];
};
/** @returns {UpdateCompany} */
declare function UpdateCompany(): UpdateCompany;
type UpdateCompany = {
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    business_info?: string;
    business_type?: string;
    company_type?: string;
    contact_details?: ContactDetails;
    documents?: Document[];
    franchise_enabled?: boolean;
    name?: string;
    notification_emails?: string[];
    reject_reason?: string;
    taxes?: CompanyTaxesSerializer1[];
    warnings?: any;
};
/** @returns {UserSerializer} */
declare function UserSerializer(): UserSerializer;
type UserSerializer = {
    contact?: string;
    user_id?: string;
    username?: string;
};
/** @returns {Website} */
declare function Website(): Website;
type Website = {
    url?: string;
};
