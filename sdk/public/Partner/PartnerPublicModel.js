const Joi = require("joi");

/**
 * @typedef CategoryL1
 * @property {string} [description]
 * @property {string} [display]
 * @property {number} [level]
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {string} [value]
 * @property {string} [_id]
 */

/**
 * @typedef CategoryL2
 * @property {string} [parent]
 * @property {string} [display]
 * @property {number} [level]
 * @property {string} [slug]
 * @property {string} [value]
 * @property {string} [_id]
 */

/**
 * @typedef CategoryCommon
 * @property {CategoryL1[]} [category_l1]
 * @property {CategoryL2[]} [category_l2]
 */

/**
 * @typedef ContactInfo
 * @property {Support} [support]
 */

/**
 * @typedef ExtensionUsingSlug
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
 * @property {string} [_id]
 */

/**
 * @typedef Organization
 * @property {string} [name]
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
 * @typedef Benefits
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef Screenshots
 * @property {string[]} [desktop]
 * @property {string[]} [mobile]
 */

/**
 * @typedef Details
 * @property {Benefits[]} [benefits]
 * @property {string} [demo_url]
 * @property {string} [description]
 * @property {string[]} [integration]
 * @property {Object[]} [video_url]
 * @property {string[]} [youtube]
 * @property {Screenshots} [screenshots]
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
 * @typedef Price
 * @property {number} [amount]
 * @property {string} [currency]
 */

/**
 * @typedef Plans
 * @property {string} [additional_charges]
 * @property {string} [features]
 * @property {string} [name]
 * @property {number} [trial_days]
 * @property {string} [type]
 * @property {Price} [price]
 * @property {Recurring} [recurring]
 */

/**
 * @typedef Recurring
 * @property {number} [recurring_time]
 * @property {number} [yearly_amount]
 * @property {string} [type]
 */

class PartnerPublicModel {
  /** @returns {CategoryL1} */
  static CategoryL1() {
    return Joi.object({
      description: Joi.string().allow(""),
      display: Joi.string().allow(""),
      level: Joi.number(),
      logo: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      value: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryL2} */
  static CategoryL2() {
    return Joi.object({
      parent: Joi.string().allow(""),
      display: Joi.string().allow(""),
      level: Joi.number(),
      slug: Joi.string().allow(""),
      value: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryCommon} */
  static CategoryCommon() {
    return Joi.object({
      category_l1: Joi.array().items(PartnerPublicModel.CategoryL1()),
      category_l2: Joi.array().items(PartnerPublicModel.CategoryL2()),
    });
  }

  /** @returns {ContactInfo} */
  static ContactInfo() {
    return Joi.object({
      support: PartnerPublicModel.Support(),
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
      is_coming_soon: Joi.boolean(),
      listing_info: PartnerPublicModel.ListingInfo(),
      modified_at: Joi.string().allow(""),
      organization: PartnerPublicModel.Organization(),
      organization_id: Joi.string().allow(""),
      plan_type: Joi.string().allow(""),
      plans: Joi.array().items(PartnerPublicModel.Plans()),
      plans_url: Joi.string().allow(""),
      review_instructions: Joi.string().allow(""),
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
