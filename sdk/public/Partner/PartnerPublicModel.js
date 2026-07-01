const Joi = require("joi");

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

class PartnerPublicModel {
  /** @returns {CategoryL1} */
  static CategoryL1() {
    return Joi.object({
      slug: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryL2} */
  static CategoryL2() {
    return Joi.object({
      parent: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryCommon} */
  static CategoryCommon() {
    return Joi.object({
      categories_l1: Joi.array().items(PartnerPublicModel.CategoryL1()),
      categories_l2: Joi.array().items(PartnerPublicModel.CategoryL2()),
    });
  }

  /** @returns {ContactInfo} */
  static ContactInfo() {
    return Joi.object({
      support: PartnerPublicModel.Support(),
    });
  }

  /** @returns {CommingSoon} */
  static CommingSoon() {
    return Joi.object({
      is_coming_soon: Joi.boolean(),
      upvote_count: Joi.number(),
    });
  }

  /** @returns {ExtensionUsingSlug} */
  static ExtensionUsingSlug() {
    return Joi.object({
      category: PartnerPublicModel.CategoryCommon(),
      contact_info: PartnerPublicModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      details: PartnerPublicModel.Details(),
      extension_id: Joi.string().allow(""),
      coming_soon: PartnerPublicModel.CommingSoon(),
      listing_info: PartnerPublicModel.ListingInfo(),
      modified_at: Joi.string().allow(""),
      organization: PartnerPublicModel.Organization(),
      organization_id: Joi.string().allow(""),
      plan_type: Joi.string().allow(""),
      plans: Joi.array().items(PartnerPublicModel.Plans()),
      plans_url: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {Organization} */
  static Organization() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {ListingInfo} */
  static ListingInfo() {
    return Joi.object({
      icon: Joi.string().allow(""),
      keywords: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      tagline: Joi.string().allow(""),
    });
  }

  /** @returns {Benefits} */
  static Benefits() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {Screenshots} */
  static Screenshots() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string().allow("")),
      mobile: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Details} */
  static Details() {
    return Joi.object({
      benefits: Joi.array().items(PartnerPublicModel.Benefits()),
      demo_url: Joi.string().allow(""),
      description: Joi.string().allow(""),
      integration: Joi.array().items(Joi.string().allow("")),
      video_url: Joi.array().items(Joi.any()),
      youtube: Joi.array().items(Joi.string().allow("")),
      screenshots: PartnerPublicModel.Screenshots(),
    });
  }

  /** @returns {Support} */
  static Support() {
    return Joi.object({
      email: Joi.string().allow(""),
      faq_url: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      privacy_policy_url: Joi.string().allow(""),
      website_url: Joi.string().allow(""),
      terms_of_service: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {Price} */
  static Price() {
    return Joi.object({
      amount: Joi.number(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {Plans} */
  static Plans() {
    return Joi.object({
      additional_charges: Joi.string().allow(""),
      features: Joi.string().allow(""),
      name: Joi.string().allow(""),
      trial_days: Joi.number(),
      type: Joi.string().allow(""),
      price: PartnerPublicModel.Price(),
      recurring: PartnerPublicModel.Recurring(),
    });
  }

  /** @returns {Recurring} */
  static Recurring() {
    return Joi.object({
      recurring_time: Joi.number(),
      yearly_amount: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
}
module.exports = PartnerPublicModel;
