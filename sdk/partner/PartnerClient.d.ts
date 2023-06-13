export = PartnerClient;
declare class PartnerClient {
    constructor(config: any);
    config: any;
    partner: Partner;
    setExtraHeaders(header: any): void;
}
declare namespace PartnerClient {
    export { Extension, CreateExtensionResponse, Callback, Logo, ClientData, ExtensionCommon, CategoryL1, CategoryL2, Category, ContactInfo, Benefits, Screenshots, ExtensionExtraDetails, ListingInfo, OrganizationBasicInfo, Plans, ExtensionLatestReview, Support, Price, ExtensionDraftRequest, ExtensionUnpublishRequest };
}
import Partner = require("./Partner/PartnerPartnerClient");
type Extension = {
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
    created_at?: string;
    is_hidden?: boolean;
    modified_at?: string;
    organization_id?: string;
    whitelisted_urls?: string[];
    _id?: string;
    client_data?: ClientData;
};
type CreateExtensionResponse = {
    created_at?: string;
    is_hidden?: boolean;
    modified_at?: string;
    organization_id?: string;
    whitelisted_urls?: string[];
    _id?: string;
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
    secret?: string[];
};
type Callback = {
    auth?: string;
    auto_install?: string;
    install?: string;
    setup?: string;
    uninstall?: string;
};
type Logo = {
    large?: string;
    small?: string;
};
type ClientData = {
    client_id?: string;
    secret?: string[];
};
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
    whitelisted_urls?: string[];
    logo?: Logo;
    name?: string;
    scope?: string[];
    organization_id?: string;
};
type CategoryL1 = {
    description?: string;
    display?: string;
    level?: number;
    logo?: string;
    slug?: string;
    value?: string;
    _id?: string;
};
type CategoryL2 = {
    parent?: string;
    display?: string;
    level?: number;
    slug?: string;
    value?: string;
    _id?: string;
};
type Category = {
    category_l1?: CategoryL1[];
    category_l2?: CategoryL2[];
};
type ContactInfo = {
    review_notification_email?: string;
    submission_email?: string;
    support?: Support;
};
type Benefits = {
    title?: string;
    description?: string;
    image?: string;
};
type Screenshots = {
    desktop?: string[];
    mobile?: string[];
};
type ExtensionExtraDetails = {
    benefits?: Benefits[];
    demo_url?: string;
    description?: string;
    integration?: string[];
    video_url?: any[];
    youtube?: string[];
    screenshots?: Screenshots;
    integrations?: string;
    featured_banner?: string;
};
type ListingInfo = {
    icon?: string;
    keywords?: string[];
    name?: string;
    tagline?: string;
};
type OrganizationBasicInfo = {
    name?: string;
    slug?: string;
};
type Plans = {
    additional_charges?: string;
    features?: string;
    name?: string;
    price?: Price;
    trial_days?: number;
    type?: string;
};
type ExtensionLatestReview = {
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
    _id?: string;
};
type Support = {
    email?: string;
    faq_url?: string;
    phone?: string;
    privacy_policy_url?: string;
    website_url?: string;
};
type Price = {
    amount?: number;
    currency?: string;
};
type ExtensionDraftRequest = {
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
    _id?: string;
};
type ExtensionUnpublishRequest = {
    reason?: string;
    description?: string;
};
