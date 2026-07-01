export = PartnerPublicModel;
/**
 * @typedef CategoryL1
 * @property {string} [slug] - URL-friendly identifier for the category.
 * @property {string} [_id] - Unique identifier for the level 1 category.
 */
/**
 * @typedef CategoryL2
 * @property {string} [parent] - ID of the parent category (Level 1) to which
 *   this category belongs.
 * @property {string} [slug] - URL-friendly identifier for the category.
 * @property {string} [_id] - Unique identifier for the level 2 category.
 */
/**
 * @typedef CategoryCommon
 * @property {CategoryL1[]} [categories_l1] - Array of level 1 categories
 *   associated with an extension.
 * @property {CategoryL2[]} [categories_l2] - Array of level 2 categories
 *   associated with an extension.
 */
/**
 * @typedef ContactInfo
 * @property {Support} [support]
 */
/**
 * @typedef CommingSoon
 * @property {boolean} [is_coming_soon] - Flag indicating whether the extension
 *   is marked as "coming soon."
 * @property {number} [upvote_count] - Number of upvotes for the "coming soon" extension.
 */
/**
 * @typedef ExtensionUsingSlug
 * @property {CategoryCommon} [category]
 * @property {ContactInfo} [contact_info]
 * @property {string} [created_at] - Timestamp indicating when the extension was created.
 * @property {string} [current_status] - Current status of the extension.
 * @property {Details} [details]
 * @property {string} [extension_id] - Unique identifier for the extension.
 * @property {CommingSoon} [coming_soon]
 * @property {ListingInfo} [listing_info]
 * @property {string} [modified_at] - Timestamp indicating when the extension
 *   was last modified.
 * @property {Organization} [organization]
 * @property {string} [organization_id] - Unique identifier for the organization
 *   where the extension is created.
 * @property {string} [plan_type] - Type of pricing plan for the extension
 *   (e.g., free, one-time, recurring).
 * @property {Plans[]} [plans] - Array of pricing plans associated with the extension.
 * @property {string} [plans_url] - URL to access detailed pricing plan information.
 * @property {string[]} [scope] - Array of permissions or scopes required by the
 *   extension.
 * @property {string} [slug] - URL-friendly identifier for the extension.
 * @property {string} [_id] - Unique identifier for the extension.
 */
/**
 * @typedef Organization
 * @property {string} [name] - Name of the organization.
 * @property {string} [slug] - URL-friendly identifier for the organization.
 */
/**
 * @typedef ListingInfo
 * @property {string} [icon] - URL for the extension's icon.
 * @property {string[]} [keywords] - Array of keywords associated with the extension.
 * @property {string} [name] - Display name of the extension.
 * @property {string} [tagline] - Short tagline summarizing the extension's purpose.
 */
/**
 * @typedef Benefits
 * @property {string} [title] - Title of the benefit offered by the extension.
 * @property {string} [description] - Detailed explanation of the benefit.
 */
/**
 * @typedef Screenshots
 * @property {string[]} [desktop] - Array of URLs for desktop screenshots.
 * @property {string[]} [mobile] - Array of URLs for mobile screenshots.
 */
/**
 * @typedef Details
 * @property {Benefits[]} [benefits] - Array of benefits provided by the extension.
 * @property {string} [demo_url] - URL for a demo or preview of the extension.
 * @property {string} [description] - Detailed description of the extension.
 * @property {string[]} [integration] - Array of integration points supported by
 *   the extension.
 * @property {Object[]} [video_url] - Array of video URLs showcasing the extension.
 * @property {string[]} [youtube] - Array of YouTube video URLs about the extension.
 * @property {Screenshots} [screenshots]
 */
/**
 * @typedef Support
 * @property {string} [email] - Support email address.
 * @property {string} [faq_url] - URL for the FAQ page.
 * @property {string} [phone] - Support phone number.
 * @property {string} [privacy_policy_url] - URL for the privacy policy.
 * @property {string} [website_url] - Official website URL.
 * @property {string} [terms_of_service] - URL for the terms of service.
 * @property {string} [country_code] - The dialing code for the country, used
 *   with mobile numbers.
 */
/**
 * @typedef Price
 * @property {number} [amount] - Amount for the pricing.
 * @property {string} [currency] - Currency in which the price is specified.
 */
/**
 * @typedef Plans
 * @property {string} [additional_charges] - Additional charges applicable to the plan.
 * @property {string} [features] - Features included in the plan.
 * @property {string} [name] - Name of the plan.
 * @property {number} [trial_days] - Number of trial days offered with the plan.
 * @property {string} [type] - Type of plan (e.g., free, recurring, one-time).
 * @property {Price} [price]
 * @property {Recurring} [recurring]
 */
/**
 * @typedef Recurring
 * @property {number} [recurring_time] - Frequency of the recurring charge in days.
 * @property {number} [yearly_amount] - Total yearly amount for the recurring plan.
 * @property {string} [type] - Type of recurring plan (e.g., monthly, yearly).
 */
declare class PartnerPublicModel {
}
declare namespace PartnerPublicModel {
    export { CategoryL1, CategoryL2, CategoryCommon, ContactInfo, CommingSoon, ExtensionUsingSlug, Organization, ListingInfo, Benefits, Screenshots, Details, Support, Price, Plans, Recurring };
}
/** @returns {CategoryL1} */
declare function CategoryL1(): CategoryL1;
type CategoryL1 = {
    /**
     * - URL-friendly identifier for the category.
     */
    slug?: string;
    /**
     * - Unique identifier for the level 1 category.
     */
    _id?: string;
};
/** @returns {CategoryL2} */
declare function CategoryL2(): CategoryL2;
type CategoryL2 = {
    /**
     * - ID of the parent category (Level 1) to which
     * this category belongs.
     */
    parent?: string;
    /**
     * - URL-friendly identifier for the category.
     */
    slug?: string;
    /**
     * - Unique identifier for the level 2 category.
     */
    _id?: string;
};
/** @returns {CategoryCommon} */
declare function CategoryCommon(): CategoryCommon;
type CategoryCommon = {
    /**
     * - Array of level 1 categories
     * associated with an extension.
     */
    categories_l1?: CategoryL1[];
    /**
     * - Array of level 2 categories
     * associated with an extension.
     */
    categories_l2?: CategoryL2[];
};
/** @returns {ContactInfo} */
declare function ContactInfo(): ContactInfo;
type ContactInfo = {
    support?: Support;
};
/** @returns {CommingSoon} */
declare function CommingSoon(): CommingSoon;
type CommingSoon = {
    /**
     * - Flag indicating whether the extension
     * is marked as "coming soon."
     */
    is_coming_soon?: boolean;
    /**
     * - Number of upvotes for the "coming soon" extension.
     */
    upvote_count?: number;
};
/** @returns {ExtensionUsingSlug} */
declare function ExtensionUsingSlug(): ExtensionUsingSlug;
type ExtensionUsingSlug = {
    category?: CategoryCommon;
    contact_info?: ContactInfo;
    /**
     * - Timestamp indicating when the extension was created.
     */
    created_at?: string;
    /**
     * - Current status of the extension.
     */
    current_status?: string;
    details?: Details;
    /**
     * - Unique identifier for the extension.
     */
    extension_id?: string;
    coming_soon?: CommingSoon;
    listing_info?: ListingInfo;
    /**
     * - Timestamp indicating when the extension
     * was last modified.
     */
    modified_at?: string;
    organization?: Organization;
    /**
     * - Unique identifier for the organization
     * where the extension is created.
     */
    organization_id?: string;
    /**
     * - Type of pricing plan for the extension
     * (e.g., free, one-time, recurring).
     */
    plan_type?: string;
    /**
     * - Array of pricing plans associated with the extension.
     */
    plans?: Plans[];
    /**
     * - URL to access detailed pricing plan information.
     */
    plans_url?: string;
    /**
     * - Array of permissions or scopes required by the
     * extension.
     */
    scope?: string[];
    /**
     * - URL-friendly identifier for the extension.
     */
    slug?: string;
    /**
     * - Unique identifier for the extension.
     */
    _id?: string;
};
/** @returns {Organization} */
declare function Organization(): Organization;
type Organization = {
    /**
     * - Name of the organization.
     */
    name?: string;
    /**
     * - URL-friendly identifier for the organization.
     */
    slug?: string;
};
/** @returns {ListingInfo} */
declare function ListingInfo(): ListingInfo;
type ListingInfo = {
    /**
     * - URL for the extension's icon.
     */
    icon?: string;
    /**
     * - Array of keywords associated with the extension.
     */
    keywords?: string[];
    /**
     * - Display name of the extension.
     */
    name?: string;
    /**
     * - Short tagline summarizing the extension's purpose.
     */
    tagline?: string;
};
/** @returns {Benefits} */
declare function Benefits(): Benefits;
type Benefits = {
    /**
     * - Title of the benefit offered by the extension.
     */
    title?: string;
    /**
     * - Detailed explanation of the benefit.
     */
    description?: string;
};
/** @returns {Screenshots} */
declare function Screenshots(): Screenshots;
type Screenshots = {
    /**
     * - Array of URLs for desktop screenshots.
     */
    desktop?: string[];
    /**
     * - Array of URLs for mobile screenshots.
     */
    mobile?: string[];
};
/** @returns {Details} */
declare function Details(): Details;
type Details = {
    /**
     * - Array of benefits provided by the extension.
     */
    benefits?: Benefits[];
    /**
     * - URL for a demo or preview of the extension.
     */
    demo_url?: string;
    /**
     * - Detailed description of the extension.
     */
    description?: string;
    /**
     * - Array of integration points supported by
     * the extension.
     */
    integration?: string[];
    /**
     * - Array of video URLs showcasing the extension.
     */
    video_url?: any[];
    /**
     * - Array of YouTube video URLs about the extension.
     */
    youtube?: string[];
    screenshots?: Screenshots;
};
/** @returns {Support} */
declare function Support(): Support;
type Support = {
    /**
     * - Support email address.
     */
    email?: string;
    /**
     * - URL for the FAQ page.
     */
    faq_url?: string;
    /**
     * - Support phone number.
     */
    phone?: string;
    /**
     * - URL for the privacy policy.
     */
    privacy_policy_url?: string;
    /**
     * - Official website URL.
     */
    website_url?: string;
    /**
     * - URL for the terms of service.
     */
    terms_of_service?: string;
    /**
     * - The dialing code for the country, used
     * with mobile numbers.
     */
    country_code?: string;
};
/** @returns {Price} */
declare function Price(): Price;
type Price = {
    /**
     * - Amount for the pricing.
     */
    amount?: number;
    /**
     * - Currency in which the price is specified.
     */
    currency?: string;
};
/** @returns {Plans} */
declare function Plans(): Plans;
type Plans = {
    /**
     * - Additional charges applicable to the plan.
     */
    additional_charges?: string;
    /**
     * - Features included in the plan.
     */
    features?: string;
    /**
     * - Name of the plan.
     */
    name?: string;
    /**
     * - Number of trial days offered with the plan.
     */
    trial_days?: number;
    /**
     * - Type of plan (e.g., free, recurring, one-time).
     */
    type?: string;
    price?: Price;
    recurring?: Recurring;
};
/** @returns {Recurring} */
declare function Recurring(): Recurring;
type Recurring = {
    /**
     * - Frequency of the recurring charge in days.
     */
    recurring_time?: number;
    /**
     * - Total yearly amount for the recurring plan.
     */
    yearly_amount?: number;
    /**
     * - Type of recurring plan (e.g., monthly, yearly).
     */
    type?: string;
};
