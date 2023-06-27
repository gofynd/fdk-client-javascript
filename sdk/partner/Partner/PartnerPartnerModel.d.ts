export = PartnerPartnerModel;
/**
 * @typedef Benefits
 * @property {string} [description]
 * @property {string} [image]
 * @property {string} [title]
 */
/**
 * @typedef Callback
 * @property {string} [auth]
 * @property {string} [auto_install]
 * @property {string} [install]
 * @property {string} [setup]
 * @property {string} [uninstall]
 */
/**
 * @typedef Category
 * @property {CategoryL1[]} [categories_l1]
 * @property {CategoryL2[]} [categories_l2]
 */
/**
 * @typedef CategoryL1
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [display]
 * @property {number} [level]
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {string} [value]
 */
/**
 * @typedef CategoryL2
 * @property {string} [_id]
 * @property {string} [display]
 * @property {number} [level]
 * @property {string} [parent]
 * @property {string} [slug]
 * @property {string} [value]
 */
/**
 * @typedef ClientData
 * @property {string} [client_id]
 * @property {string[]} [secret]
 */
/**
 * @typedef ContactInfo
 * @property {string} [review_notification_email]
 * @property {string} [submission_email]
 * @property {Support} [support]
 */
/**
 * @typedef CreateExtensionResponse
 * @property {string} [_id]
 * @property {string} [base_url]
 * @property {Callback} [callbacks]
 * @property {string} [contact_email]
 * @property {string} [created_at]
 * @property {string} [current_status]
 * @property {string} [description]
 * @property {string} [developed_by_name]
 * @property {string} [ext_version]
 * @property {string} [extention_type]
 * @property {boolean} [is_application_level]
 * @property {boolean} [is_coming_soon]
 * @property {boolean} [is_hidden]
 * @property {boolean} [is_saleschannel]
 * @property {Logo} [logo]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [organization_id]
 * @property {string[]} [scope]
 * @property {string[]} [secret]
 * @property {string[]} [whitelisted_urls]
 */
/**
 * @typedef Extension
 * @property {string} [_id]
 * @property {string} [base_url]
 * @property {Callback} [callbacks]
 * @property {ClientData} [client_data]
 * @property {string} [contact_email]
 * @property {string} [created_at]
 * @property {string} [current_status]
 * @property {string} [description]
 * @property {string} [developed_by_name]
 * @property {string} [ext_version]
 * @property {string} [extention_type]
 * @property {boolean} [is_application_level]
 * @property {boolean} [is_coming_soon]
 * @property {boolean} [is_hidden]
 * @property {boolean} [is_saleschannel]
 * @property {Logo} [logo]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [organization_id]
 * @property {string[]} [scope]
 * @property {string[]} [whitelisted_urls]
 */
/**
 * @typedef ExtensionCommon
 * @property {string} [base_url]
 * @property {Callback} [callbacks]
 * @property {string} [contact_email]
 * @property {string} [current_status]
 * @property {string} [description]
 * @property {string} [developed_by_name]
 * @property {string} [ext_version]
 * @property {string} [extention_type]
 * @property {boolean} [is_application_level]
 * @property {boolean} [is_coming_soon]
 * @property {boolean} [is_saleschannel]
 * @property {Logo} [logo]
 * @property {string} [name]
 * @property {string} [organization_id]
 * @property {string[]} [scope]
 * @property {string[]} [whitelisted_urls]
 */
/**
 * @typedef ExtensionDraftRequest
 * @property {string} [_id]
 * @property {Category} [category]
 * @property {ContactInfo} [contact_info]
 * @property {string} [created_at]
 * @property {string} [current_status]
 * @property {ExtensionExtraDetails} [details]
 * @property {string} [extension_id]
 * @property {boolean} [is_coming_soon]
 * @property {ListingInfo} [listing_info]
 * @property {Object} [meta]
 * @property {string} [modified_at]
 * @property {OrganizationBasicInfo} [organization]
 * @property {string} [organization_id]
 * @property {string} [plan_type]
 * @property {Plans[]} [plans]
 * @property {string} [plans_url]
 * @property {string} [review_instructions]
 * @property {string[]} [scope]
 * @property {string} [slug]
 */
/**
 * @typedef ExtensionExtraDetails
 * @property {Benefits[]} [benefits]
 * @property {string} [demo_url]
 * @property {string} [description]
 * @property {string} [featured_banner]
 * @property {string[]} [integration]
 * @property {string[]} [integrations]
 * @property {Screenshots} [screenshots]
 * @property {Object[]} [video_url]
 * @property {string[]} [youtube]
 */
/**
 * @typedef ExtensionLatestReview
 * @property {string} [_id]
 * @property {Category} [category]
 * @property {ContactInfo} [contact_info]
 * @property {string} [created_at]
 * @property {string} [current_status]
 * @property {ExtensionExtraDetails} [details]
 * @property {string} [extension_id]
 * @property {boolean} [is_coming_soon]
 * @property {ListingInfo} [listing_info]
 * @property {string} [modified_at]
 * @property {OrganizationBasicInfo} [organization]
 * @property {string} [organization_id]
 * @property {string} [plan_type]
 * @property {Plans[]} [plans]
 * @property {string} [plans_url]
 * @property {string} [review_instructions]
 * @property {string[]} [scope]
 * @property {string} [slug]
 */
/**
 * @typedef ExtensionUnpublishRequest
 * @property {string} [description]
 * @property {string} [reason]
 */
/**
 * @typedef ListingInfo
 * @property {string} [icon]
 * @property {string[]} [keywords]
 * @property {string} [name]
 * @property {string} [tagline]
 */
/**
 * @typedef Logo
 * @property {string} [large]
 * @property {string} [small]
 */
/**
 * @typedef OrganizationBasicInfo
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef Plans
 * @property {string} [additional_charges]
 * @property {Object} [custom_meta]
 * @property {string} [features]
 * @property {string} [name]
 * @property {Price} [price]
 * @property {number} [trial_days]
 * @property {string} [type]
 */
/**
 * @typedef Price
 * @property {number} [amount]
 * @property {string} [currency]
 */
/**
 * @typedef Screenshots
 * @property {string[]} [desktop]
 * @property {string[]} [mobile]
 */
/**
 * @typedef Support
 * @property {string} [email]
 * @property {string} [faq_url]
 * @property {string} [phone]
 * @property {string} [privacy_policy_url]
 * @property {string} [website_url]
 */
declare class PartnerPartnerModel {
}
declare namespace PartnerPartnerModel {
    export { Benefits, Callback, Category, CategoryL1, CategoryL2, ClientData, ContactInfo, CreateExtensionResponse, Extension, ExtensionCommon, ExtensionDraftRequest, ExtensionExtraDetails, ExtensionLatestReview, ExtensionUnpublishRequest, ListingInfo, Logo, OrganizationBasicInfo, Plans, Price, Screenshots, Support };
}
/** @returns {Benefits} */
declare function Benefits(): Benefits;
type Benefits = {
    description?: string;
    image?: string;
    title?: string;
};
/** @returns {Callback} */
declare function Callback(): Callback;
type Callback = {
    auth?: string;
    auto_install?: string;
    install?: string;
    setup?: string;
    uninstall?: string;
};
/** @returns {Category} */
declare function Category(): Category;
type Category = {
    categories_l1?: CategoryL1[];
    categories_l2?: CategoryL2[];
};
/** @returns {CategoryL1} */
declare function CategoryL1(): CategoryL1;
type CategoryL1 = {
    _id?: string;
    description?: string;
    display?: string;
    level?: number;
    logo?: string;
    slug?: string;
    value?: string;
};
/** @returns {CategoryL2} */
declare function CategoryL2(): CategoryL2;
type CategoryL2 = {
    _id?: string;
    display?: string;
    level?: number;
    parent?: string;
    slug?: string;
    value?: string;
};
/** @returns {ClientData} */
declare function ClientData(): ClientData;
type ClientData = {
    client_id?: string;
    secret?: string[];
};
/** @returns {ContactInfo} */
declare function ContactInfo(): ContactInfo;
type ContactInfo = {
    review_notification_email?: string;
    submission_email?: string;
    support?: Support;
};
/** @returns {CreateExtensionResponse} */
declare function CreateExtensionResponse(): CreateExtensionResponse;
type CreateExtensionResponse = {
    _id?: string;
    base_url?: string;
    callbacks?: Callback;
    contact_email?: string;
    created_at?: string;
    current_status?: string;
    description?: string;
    developed_by_name?: string;
    ext_version?: string;
    extention_type?: string;
    is_application_level?: boolean;
    is_coming_soon?: boolean;
    is_hidden?: boolean;
    is_saleschannel?: boolean;
    logo?: Logo;
    modified_at?: string;
    name?: string;
    organization_id?: string;
    scope?: string[];
    secret?: string[];
    whitelisted_urls?: string[];
};
/** @returns {Extension} */
declare function Extension(): Extension;
type Extension = {
    _id?: string;
    base_url?: string;
    callbacks?: Callback;
    client_data?: ClientData;
    contact_email?: string;
    created_at?: string;
    current_status?: string;
    description?: string;
    developed_by_name?: string;
    ext_version?: string;
    extention_type?: string;
    is_application_level?: boolean;
    is_coming_soon?: boolean;
    is_hidden?: boolean;
    is_saleschannel?: boolean;
    logo?: Logo;
    modified_at?: string;
    name?: string;
    organization_id?: string;
    scope?: string[];
    whitelisted_urls?: string[];
};
/** @returns {ExtensionCommon} */
declare function ExtensionCommon(): ExtensionCommon;
type ExtensionCommon = {
    base_url?: string;
    callbacks?: Callback;
    contact_email?: string;
    current_status?: string;
    description?: string;
    developed_by_name?: string;
    ext_version?: string;
    extention_type?: string;
    is_application_level?: boolean;
    is_coming_soon?: boolean;
    is_saleschannel?: boolean;
    logo?: Logo;
    name?: string;
    organization_id?: string;
    scope?: string[];
    whitelisted_urls?: string[];
};
/** @returns {ExtensionDraftRequest} */
declare function ExtensionDraftRequest(): ExtensionDraftRequest;
type ExtensionDraftRequest = {
    _id?: string;
    category?: Category;
    contact_info?: ContactInfo;
    created_at?: string;
    current_status?: string;
    details?: ExtensionExtraDetails;
    extension_id?: string;
    is_coming_soon?: boolean;
    listing_info?: ListingInfo;
    meta?: any;
    modified_at?: string;
    organization?: OrganizationBasicInfo;
    organization_id?: string;
    plan_type?: string;
    plans?: Plans[];
    plans_url?: string;
    review_instructions?: string;
    scope?: string[];
    slug?: string;
};
/** @returns {ExtensionExtraDetails} */
declare function ExtensionExtraDetails(): ExtensionExtraDetails;
type ExtensionExtraDetails = {
    benefits?: Benefits[];
    demo_url?: string;
    description?: string;
    featured_banner?: string;
    integration?: string[];
    integrations?: string[];
    screenshots?: Screenshots;
    video_url?: any[];
    youtube?: string[];
};
/** @returns {ExtensionLatestReview} */
declare function ExtensionLatestReview(): ExtensionLatestReview;
type ExtensionLatestReview = {
    _id?: string;
    category?: Category;
    contact_info?: ContactInfo;
    created_at?: string;
    current_status?: string;
    details?: ExtensionExtraDetails;
    extension_id?: string;
    is_coming_soon?: boolean;
    listing_info?: ListingInfo;
    modified_at?: string;
    organization?: OrganizationBasicInfo;
    organization_id?: string;
    plan_type?: string;
    plans?: Plans[];
    plans_url?: string;
    review_instructions?: string;
    scope?: string[];
    slug?: string;
};
/** @returns {ExtensionUnpublishRequest} */
declare function ExtensionUnpublishRequest(): ExtensionUnpublishRequest;
type ExtensionUnpublishRequest = {
    description?: string;
    reason?: string;
};
/** @returns {ListingInfo} */
declare function ListingInfo(): ListingInfo;
type ListingInfo = {
    icon?: string;
    keywords?: string[];
    name?: string;
    tagline?: string;
};
/** @returns {Logo} */
declare function Logo(): Logo;
type Logo = {
    large?: string;
    small?: string;
};
/** @returns {OrganizationBasicInfo} */
declare function OrganizationBasicInfo(): OrganizationBasicInfo;
type OrganizationBasicInfo = {
    name?: string;
    slug?: string;
};
/** @returns {Plans} */
declare function Plans(): Plans;
type Plans = {
    additional_charges?: string;
    custom_meta?: any;
    features?: string;
    name?: string;
    price?: Price;
    trial_days?: number;
    type?: string;
};
/** @returns {Price} */
declare function Price(): Price;
type Price = {
    amount?: number;
    currency?: string;
};
/** @returns {Screenshots} */
declare function Screenshots(): Screenshots;
type Screenshots = {
    desktop?: string[];
    mobile?: string[];
};
/** @returns {Support} */
declare function Support(): Support;
type Support = {
    email?: string;
    faq_url?: string;
    phone?: string;
    privacy_policy_url?: string;
    website_url?: string;
};
