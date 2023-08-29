export = PartnerPublicModel;
/**
 * @typedef Benefits
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef CategoryCommon
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
 * @typedef ContactInfo
 * @property {Support} [support]
 */
/**
 * @typedef Details
 * @property {Benefits[]} [benefits]
 * @property {string} [demo_url]
 * @property {string} [description]
 * @property {string[]} [integration]
 * @property {Screenshots} [screenshots]
 * @property {Object[]} [video_url]
 * @property {string[]} [youtube]
 */
/**
 * @typedef ExtensionUsingSlug
 * @property {string} [_id]
 * @property {CategoryCommon} [category]
 * @property {ContactInfo} [contact_info]
 * @property {string} [created_at]
 * @property {string} [current_status]
 * @property {Details} [details]
 * @property {string} [extension_id]
 * @property {boolean} [is_coming_soon]
 * @property {ListingInfo} [listing_info]
 * @property {string} [modified_at]
 * @property {Organization} [organization]
 * @property {string} [organization_id]
 * @property {string} [plan_type]
 * @property {Plans[]} [plans]
 * @property {string} [plans_url]
 * @property {string} [review_instructions]
 * @property {string[]} [scope]
 * @property {string} [slug]
 */
/**
 * @typedef ListingInfo
 * @property {string} [icon]
 * @property {string[]} [keywords]
 * @property {string} [name]
 * @property {string} [tagline]
 */
/**
 * @typedef Organization
 * @property {string} [name]
 * @property {string} [slug]
 */
/**
 * @typedef Plans
 * @property {string} [additional_charges]
 * @property {string} [features]
 * @property {string} [name]
 * @property {Price} [price]
 * @property {Recurring} [recurring]
 * @property {number} [trial_days]
 * @property {string} [type]
 */
/**
 * @typedef Price
 * @property {number} [amount]
 * @property {string} [currency]
 */
/**
 * @typedef Recurring
 * @property {number} [recurring_time]
 * @property {string} [type]
 * @property {number} [yearly_amount]
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
declare class PartnerPublicModel {
}
declare namespace PartnerPublicModel {
    export { Benefits, CategoryCommon, CategoryL1, CategoryL2, ContactInfo, Details, ExtensionUsingSlug, ListingInfo, Organization, Plans, Price, Recurring, Screenshots, Support };
}
/** @returns {Benefits} */
declare function Benefits(): Benefits;
type Benefits = {
    description?: string;
    title?: string;
};
/** @returns {CategoryCommon} */
declare function CategoryCommon(): CategoryCommon;
type CategoryCommon = {
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
/** @returns {ContactInfo} */
declare function ContactInfo(): ContactInfo;
type ContactInfo = {
    support?: Support;
};
/** @returns {Details} */
declare function Details(): Details;
type Details = {
    benefits?: Benefits[];
    demo_url?: string;
    description?: string;
    integration?: string[];
    screenshots?: Screenshots;
    video_url?: any[];
    youtube?: string[];
};
/** @returns {ExtensionUsingSlug} */
declare function ExtensionUsingSlug(): ExtensionUsingSlug;
type ExtensionUsingSlug = {
    _id?: string;
    category?: CategoryCommon;
    contact_info?: ContactInfo;
    created_at?: string;
    current_status?: string;
    details?: Details;
    extension_id?: string;
    is_coming_soon?: boolean;
    listing_info?: ListingInfo;
    modified_at?: string;
    organization?: Organization;
    organization_id?: string;
    plan_type?: string;
    plans?: Plans[];
    plans_url?: string;
    review_instructions?: string;
    scope?: string[];
    slug?: string;
};
/** @returns {ListingInfo} */
declare function ListingInfo(): ListingInfo;
type ListingInfo = {
    icon?: string;
    keywords?: string[];
    name?: string;
    tagline?: string;
};
/** @returns {Organization} */
declare function Organization(): Organization;
type Organization = {
    name?: string;
    slug?: string;
};
/** @returns {Plans} */
declare function Plans(): Plans;
type Plans = {
    additional_charges?: string;
    features?: string;
    name?: string;
    price?: Price;
    recurring?: Recurring;
    trial_days?: number;
    type?: string;
};
/** @returns {Price} */
declare function Price(): Price;
type Price = {
    amount?: number;
    currency?: string;
};
/** @returns {Recurring} */
declare function Recurring(): Recurring;
type Recurring = {
    recurring_time?: number;
    type?: string;
    yearly_amount?: number;
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
