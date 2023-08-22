export = PartnerPlatformModel;
/**
 * @typedef AddProxyReq
 * @property {string} [attached_path] - Proxy path slug
 * @property {string} [proxy_url] - The external URL for which the proxy URL
 *   will be generated
 */
/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {string} [attached_path]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [extension_id]
 * @property {string} [modified_at]
 * @property {string} [proxy_url]
 */
/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [info] - Error code description link
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 */
/**
 * @typedef ApplicationPermissions
 * @property {string[]} [permissions]
 * @property {string[]} [roles]
 */
/**
 * @typedef ApprovedPermissions
 * @property {string[]} [application_role]
 * @property {string[]} [company_permissions]
 * @property {string[]} [company_role]
 */
/**
 * @typedef ApprovedPermissionsInfo
 * @property {Object} [application_permissions]
 * @property {string[]} [company_permissions]
 */
/**
 * @typedef Benefits
 * @property {string} [description]
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
 * @property {CategoryL1[]} [category_l1]
 * @property {CategoryL2[]} [category_l2]
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
 * @typedef CommingSoon
 * @property {boolean} [is_coming_soon]
 * @property {number} [upvote_count]
 */
/**
 * @typedef ContactInfo
 * @property {Support} [support]
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
 * @property {string[]} [scope]
 */
/**
 * @typedef ExtensionDetails
 * @property {Benefits[]} [benefits]
 * @property {string} [demo_url]
 * @property {string} [description]
 * @property {string[]} [integration]
 * @property {Screenshots} [screenshots]
 * @property {Object[]} [video_url]
 * @property {string[]} [youtube]
 */
/**
 * @typedef ExtensionItems
 * @property {string} [base_url]
 * @property {string} [company]
 * @property {string} [description]
 * @property {string} [developed_by_name]
 * @property {string} [ext_version]
 * @property {string} [extension_id]
 * @property {string} [extention_type]
 * @property {boolean} [installed]
 * @property {boolean} [is_saleschannel]
 * @property {string} [launch_url]
 * @property {Logo} [logo]
 * @property {string} [name]
 * @property {Scope[]} [scope]
 */
/**
 * @typedef ExtensionList
 * @property {ExtensionItems[]} [items]
 * @property {Pagination} [page]
 */
/**
 * @typedef ExtensionListItems
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
 * @property {string[]} [whitelisted_urls]
 */
/**
 * @typedef ExtensionResponse
 * @property {ExtensionListItems[]} [items]
 * @property {Pagination} [page]
 */
/**
 * @typedef ExtensionSuggestion
 * @property {ListingInfo} [listing_info]
 * @property {OrganizationBasicInfo} [organization]
 * @property {string} [organization_id]
 * @property {Plan[]} [plans]
 * @property {string} [slug]
 */
/**
 * @typedef ExtensionSuggestionList
 * @property {ExtensionSuggestion[]} [items]
 */
/**
 * @typedef getProxyPathRes
 * @property {AddProxyResponse[]} [items]
 * @property {Pagination} [page]
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
 * @typedef ModifyPartnerReq
 * @property {string} [_id]
 * @property {string} [account_type]
 * @property {ApprovedPermissionsInfo} [approved_permissions]
 * @property {string} [comment]
 * @property {number} [company_id]
 * @property {string} [company_name]
 * @property {string} [organization_id]
 * @property {string} [organization_name]
 * @property {string} [request_status]
 * @property {RequestedPermissions} [requested_permissions]
 * @property {string} [user_id]
 */
/**
 * @typedef OrganizationBasicInfo
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef Pagination
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef PartnerInviteDetails
 * @property {string} [_id]
 * @property {string} [account_type]
 * @property {ApprovedPermissions} [approved_permissions]
 * @property {string} [comment]
 * @property {number} [company_id]
 * @property {string} [company_name]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [organization_id]
 * @property {string} [organization_name]
 * @property {string} [request_status]
 * @property {RequestedPermissions} [requested_permissions]
 * @property {string} [user_id]
 */
/**
 * @typedef PartnerList
 * @property {string} [_id]
 * @property {string} [account_type]
 * @property {ApprovedPermissionsInfo} [approved_permissions]
 * @property {string} [approver_id]
 * @property {string} [comment]
 * @property {number} [company_id]
 * @property {string} [company_name]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [organization_id]
 * @property {string} [organization_name]
 * @property {string} [request_status]
 * @property {RequestedPermissions} [requested_permissions]
 * @property {string} [user_id]
 */
/**
 * @typedef PartnerRequestList
 * @property {PartnerList} [items]
 * @property {Pagination} [page]
 */
/**
 * @typedef Plan
 * @property {string} [additional_charges]
 * @property {string} [features]
 * @property {string} [name]
 * @property {Price} [price]
 * @property {number} [trial_days]
 * @property {string} [type]
 */
/**
 * @typedef Plans
 * @property {string} [additional_charges]
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
 * @typedef PublicExtension
 * @property {string} [_id]
 * @property {Category} [category]
 * @property {CommingSoon} [coming_soon]
 * @property {ContactInfo} [contact_info]
 * @property {string} [created_at]
 * @property {string} [current_status]
 * @property {ExtensionDetails} [details]
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
 * @typedef RemoveProxyResponse
 * @property {Object} [data]
 * @property {string} [message]
 */
/**
 * @typedef RequestedPermissions
 * @property {string[]} [application_permissions]
 * @property {string[]} [application_role]
 * @property {string[]} [company_permissions]
 * @property {string[]} [company_role]
 */
/**
 * @typedef Scope
 * @property {string} [description]
 * @property {string} [name]
 */
/**
 * @typedef Screenshots
 * @property {string[]} [desktop]
 * @property {string[]} [mobile]
 */
/**
 * @typedef SetupProductRes
 * @property {number} [cli_wait_time]
 * @property {string} [message]
 * @property {number} [next_step]
 * @property {string} [request_id]
 */
/**
 * @typedef SubscriptionRequest
 * @property {string} [approved]
 * @property {string} [client_id]
 * @property {string} [company_id]
 * @property {string} [credit_balance]
 * @property {string} [request_id]
 */
/**
 * @typedef SubscriptionRes
 * @property {string} [redirect_url]
 */
/**
 * @typedef Support
 * @property {string} [email]
 * @property {string} [faq_url]
 * @property {string} [phone]
 * @property {string} [privacy_policy_url]
 * @property {string} [website_url]
 */
/**
 * @typedef UninstallExtension
 * @property {boolean} [success]
 */
declare class PartnerPlatformModel {
}
declare namespace PartnerPlatformModel {
    export { AddProxyReq, AddProxyResponse, APIError, ApplicationPermissions, ApprovedPermissions, ApprovedPermissionsInfo, Benefits, Callback, Category, CategoryL1, CategoryL2, CommingSoon, ContactInfo, ExtensionCommon, ExtensionDetails, ExtensionItems, ExtensionList, ExtensionListItems, ExtensionResponse, ExtensionSuggestion, ExtensionSuggestionList, getProxyPathRes, ListingInfo, Logo, ModifyPartnerReq, OrganizationBasicInfo, Pagination, PartnerInviteDetails, PartnerList, PartnerRequestList, Plan, Plans, Price, PublicExtension, RemoveProxyResponse, RequestedPermissions, Scope, Screenshots, SetupProductRes, SubscriptionRequest, SubscriptionRes, Support, UninstallExtension };
}
/** @returns {AddProxyReq} */
declare function AddProxyReq(): AddProxyReq;
type AddProxyReq = {
    /**
     * - Proxy path slug
     */
    attached_path?: string;
    /**
     * - The external URL for which the proxy URL
     * will be generated
     */
    proxy_url?: string;
};
/** @returns {AddProxyResponse} */
declare function AddProxyResponse(): AddProxyResponse;
type AddProxyResponse = {
    _id?: string;
    application_id?: string;
    attached_path?: string;
    company_id?: string;
    created_at?: string;
    extension_id?: string;
    modified_at?: string;
    proxy_url?: string;
};
/** @returns {APIError} */
declare function APIError(): APIError;
type APIError = {
    code?: string;
    /**
     * - Error code description link
     */
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
};
/** @returns {ApplicationPermissions} */
declare function ApplicationPermissions(): ApplicationPermissions;
type ApplicationPermissions = {
    permissions?: string[];
    roles?: string[];
};
/** @returns {ApprovedPermissions} */
declare function ApprovedPermissions(): ApprovedPermissions;
type ApprovedPermissions = {
    application_role?: string[];
    company_permissions?: string[];
    company_role?: string[];
};
/** @returns {ApprovedPermissionsInfo} */
declare function ApprovedPermissionsInfo(): ApprovedPermissionsInfo;
type ApprovedPermissionsInfo = {
    application_permissions?: any;
    company_permissions?: string[];
};
/** @returns {Benefits} */
declare function Benefits(): Benefits;
type Benefits = {
    description?: string;
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
    category_l1?: CategoryL1[];
    category_l2?: CategoryL2[];
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
/** @returns {CommingSoon} */
declare function CommingSoon(): CommingSoon;
type CommingSoon = {
    is_coming_soon?: boolean;
    upvote_count?: number;
};
/** @returns {ContactInfo} */
declare function ContactInfo(): ContactInfo;
type ContactInfo = {
    support?: Support;
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
    scope?: string[];
};
/** @returns {ExtensionDetails} */
declare function ExtensionDetails(): ExtensionDetails;
type ExtensionDetails = {
    benefits?: Benefits[];
    demo_url?: string;
    description?: string;
    integration?: string[];
    screenshots?: Screenshots;
    video_url?: any[];
    youtube?: string[];
};
/** @returns {ExtensionItems} */
declare function ExtensionItems(): ExtensionItems;
type ExtensionItems = {
    base_url?: string;
    company?: string;
    description?: string;
    developed_by_name?: string;
    ext_version?: string;
    extension_id?: string;
    extention_type?: string;
    installed?: boolean;
    is_saleschannel?: boolean;
    launch_url?: string;
    logo?: Logo;
    name?: string;
    scope?: Scope[];
};
/** @returns {ExtensionList} */
declare function ExtensionList(): ExtensionList;
type ExtensionList = {
    items?: ExtensionItems[];
    page?: Pagination;
};
/** @returns {ExtensionListItems} */
declare function ExtensionListItems(): ExtensionListItems;
type ExtensionListItems = {
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
    whitelisted_urls?: string[];
};
/** @returns {ExtensionResponse} */
declare function ExtensionResponse(): ExtensionResponse;
type ExtensionResponse = {
    items?: ExtensionListItems[];
    page?: Pagination;
};
/** @returns {ExtensionSuggestion} */
declare function ExtensionSuggestion(): ExtensionSuggestion;
type ExtensionSuggestion = {
    listing_info?: ListingInfo;
    organization?: OrganizationBasicInfo;
    organization_id?: string;
    plans?: Plan[];
    slug?: string;
};
/** @returns {ExtensionSuggestionList} */
declare function ExtensionSuggestionList(): ExtensionSuggestionList;
type ExtensionSuggestionList = {
    items?: ExtensionSuggestion[];
};
/** @returns {getProxyPathRes} */
declare function getProxyPathRes(): getProxyPathRes;
type getProxyPathRes = {
    items?: AddProxyResponse[];
    page?: Pagination;
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
/** @returns {ModifyPartnerReq} */
declare function ModifyPartnerReq(): ModifyPartnerReq;
type ModifyPartnerReq = {
    _id?: string;
    account_type?: string;
    approved_permissions?: ApprovedPermissionsInfo;
    comment?: string;
    company_id?: number;
    company_name?: string;
    organization_id?: string;
    organization_name?: string;
    request_status?: string;
    requested_permissions?: RequestedPermissions;
    user_id?: string;
};
/** @returns {OrganizationBasicInfo} */
declare function OrganizationBasicInfo(): OrganizationBasicInfo;
type OrganizationBasicInfo = {
    name?: string;
    slug?: string;
};
/** @returns {Pagination} */
declare function Pagination(): Pagination;
type Pagination = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {PartnerInviteDetails} */
declare function PartnerInviteDetails(): PartnerInviteDetails;
type PartnerInviteDetails = {
    _id?: string;
    account_type?: string;
    approved_permissions?: ApprovedPermissions;
    comment?: string;
    company_id?: number;
    company_name?: string;
    created_at?: string;
    modified_at?: string;
    organization_id?: string;
    organization_name?: string;
    request_status?: string;
    requested_permissions?: RequestedPermissions;
    user_id?: string;
};
/** @returns {PartnerList} */
declare function PartnerList(): PartnerList;
type PartnerList = {
    _id?: string;
    account_type?: string;
    approved_permissions?: ApprovedPermissionsInfo;
    approver_id?: string;
    comment?: string;
    company_id?: number;
    company_name?: string;
    created_at?: string;
    modified_at?: string;
    organization_id?: string;
    organization_name?: string;
    request_status?: string;
    requested_permissions?: RequestedPermissions;
    user_id?: string;
};
/** @returns {PartnerRequestList} */
declare function PartnerRequestList(): PartnerRequestList;
type PartnerRequestList = {
    items?: PartnerList;
    page?: Pagination;
};
/** @returns {Plan} */
declare function Plan(): Plan;
type Plan = {
    additional_charges?: string;
    features?: string;
    name?: string;
    price?: Price;
    trial_days?: number;
    type?: string;
};
/** @returns {Plans} */
declare function Plans(): Plans;
type Plans = {
    additional_charges?: string;
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
/** @returns {PublicExtension} */
declare function PublicExtension(): PublicExtension;
type PublicExtension = {
    _id?: string;
    category?: Category;
    coming_soon?: CommingSoon;
    contact_info?: ContactInfo;
    created_at?: string;
    current_status?: string;
    details?: ExtensionDetails;
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
/** @returns {RemoveProxyResponse} */
declare function RemoveProxyResponse(): RemoveProxyResponse;
type RemoveProxyResponse = {
    data?: any;
    message?: string;
};
/** @returns {RequestedPermissions} */
declare function RequestedPermissions(): RequestedPermissions;
type RequestedPermissions = {
    application_permissions?: string[];
    application_role?: string[];
    company_permissions?: string[];
    company_role?: string[];
};
/** @returns {Scope} */
declare function Scope(): Scope;
type Scope = {
    description?: string;
    name?: string;
};
/** @returns {Screenshots} */
declare function Screenshots(): Screenshots;
type Screenshots = {
    desktop?: string[];
    mobile?: string[];
};
/** @returns {SetupProductRes} */
declare function SetupProductRes(): SetupProductRes;
type SetupProductRes = {
    cli_wait_time?: number;
    message?: string;
    next_step?: number;
    request_id?: string;
};
/** @returns {SubscriptionRequest} */
declare function SubscriptionRequest(): SubscriptionRequest;
type SubscriptionRequest = {
    approved?: string;
    client_id?: string;
    company_id?: string;
    credit_balance?: string;
    request_id?: string;
};
/** @returns {SubscriptionRes} */
declare function SubscriptionRes(): SubscriptionRes;
type SubscriptionRes = {
    redirect_url?: string;
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
/** @returns {UninstallExtension} */
declare function UninstallExtension(): UninstallExtension;
type UninstallExtension = {
    success?: boolean;
};
