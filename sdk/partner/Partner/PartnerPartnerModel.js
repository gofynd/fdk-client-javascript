const Joi = require("joi");

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

class PartnerPartnerModel {
  /** @returns {Benefits} */
  static Benefits() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Callback} */
  static Callback() {
    return Joi.object({
      auth: Joi.string().allow(""),
      auto_install: Joi.string().allow(""),
      install: Joi.string().allow(""),
      setup: Joi.string().allow(""),
      uninstall: Joi.string().allow(""),
    });
  }

  /** @returns {Category} */
  static Category() {
    return Joi.object({
      categories_l1: Joi.array().items(PartnerPartnerModel.CategoryL1()),
      categories_l2: Joi.array().items(PartnerPartnerModel.CategoryL2()),
    });
  }

  /** @returns {CategoryL1} */
  static CategoryL1() {
    return Joi.object({
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      display: Joi.string().allow(""),
      level: Joi.number(),
      logo: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryL2} */
  static CategoryL2() {
    return Joi.object({
      _id: Joi.string().allow(""),
      display: Joi.string().allow(""),
      level: Joi.number(),
      parent: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ClientData} */
  static ClientData() {
    return Joi.object({
      client_id: Joi.string().allow(""),
      secret: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ContactInfo} */
  static ContactInfo() {
    return Joi.object({
      review_notification_email: Joi.string().allow(""),
      submission_email: Joi.string().allow(""),
      support: PartnerPartnerModel.Support(),
    });
  }

  /** @returns {CreateExtensionResponse} */
  static CreateExtensionResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      base_url: Joi.string().allow(""),
      callbacks: PartnerPartnerModel.Callback(),
      contact_email: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      description: Joi.string().allow(""),
      developed_by_name: Joi.string().allow(""),
      ext_version: Joi.string().allow(""),
      extention_type: Joi.string().allow(""),
      is_application_level: Joi.boolean(),
      is_coming_soon: Joi.boolean(),
      is_hidden: Joi.boolean(),
      is_saleschannel: Joi.boolean(),
      logo: PartnerPartnerModel.Logo(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      secret: Joi.array().items(Joi.string().allow("")),
      whitelisted_urls: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Extension} */
  static Extension() {
    return Joi.object({
      _id: Joi.string().allow(""),
      base_url: Joi.string().allow(""),
      callbacks: PartnerPartnerModel.Callback(),
      client_data: PartnerPartnerModel.ClientData(),
      contact_email: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      description: Joi.string().allow(""),
      developed_by_name: Joi.string().allow(""),
      ext_version: Joi.string().allow(""),
      extention_type: Joi.string().allow(""),
      is_application_level: Joi.boolean(),
      is_coming_soon: Joi.boolean(),
      is_hidden: Joi.boolean(),
      is_saleschannel: Joi.boolean(),
      logo: PartnerPartnerModel.Logo(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      whitelisted_urls: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ExtensionCommon} */
  static ExtensionCommon() {
    return Joi.object({
      base_url: Joi.string().allow(""),
      callbacks: PartnerPartnerModel.Callback(),
      contact_email: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      description: Joi.string().allow(""),
      developed_by_name: Joi.string().allow(""),
      ext_version: Joi.string().allow(""),
      extention_type: Joi.string().allow(""),
      is_application_level: Joi.boolean(),
      is_coming_soon: Joi.boolean(),
      is_saleschannel: Joi.boolean(),
      logo: PartnerPartnerModel.Logo(),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      whitelisted_urls: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ExtensionDraftRequest} */
  static ExtensionDraftRequest() {
    return Joi.object({
      _id: Joi.string().allow(""),
      category: PartnerPartnerModel.Category(),
      contact_info: PartnerPartnerModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      details: PartnerPartnerModel.ExtensionExtraDetails(),
      extension_id: Joi.string().allow(""),
      is_coming_soon: Joi.boolean(),
      listing_info: PartnerPartnerModel.ListingInfo(),
      meta: Joi.any(),
      modified_at: Joi.string().allow(""),
      organization: PartnerPartnerModel.OrganizationBasicInfo(),
      organization_id: Joi.string().allow(""),
      plan_type: Joi.string().allow(""),
      plans: Joi.array().items(PartnerPartnerModel.Plans()),
      plans_url: Joi.string().allow(""),
      review_instructions: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionExtraDetails} */
  static ExtensionExtraDetails() {
    return Joi.object({
      benefits: Joi.array().items(PartnerPartnerModel.Benefits()),
      demo_url: Joi.string().allow(""),
      description: Joi.string().allow(""),
      featured_banner: Joi.string().allow(""),
      integration: Joi.array().items(Joi.string().allow("")),
      integrations: Joi.array().items(Joi.string().allow("")),
      screenshots: PartnerPartnerModel.Screenshots(),
      video_url: Joi.array().items(Joi.any()),
      youtube: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ExtensionLatestReview} */
  static ExtensionLatestReview() {
    return Joi.object({
      _id: Joi.string().allow(""),
      category: PartnerPartnerModel.Category(),
      contact_info: PartnerPartnerModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      details: PartnerPartnerModel.ExtensionExtraDetails(),
      extension_id: Joi.string().allow(""),
      is_coming_soon: Joi.boolean(),
      listing_info: PartnerPartnerModel.ListingInfo(),
      modified_at: Joi.string().allow(""),
      organization: PartnerPartnerModel.OrganizationBasicInfo(),
      organization_id: Joi.string().allow(""),
      plan_type: Joi.string().allow(""),
      plans: Joi.array().items(PartnerPartnerModel.Plans()),
      plans_url: Joi.string().allow(""),
      review_instructions: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionUnpublishRequest} */
  static ExtensionUnpublishRequest() {
    return Joi.object({
      description: Joi.string().allow(""),
      reason: Joi.string().allow(""),
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

  /** @returns {Logo} */
  static Logo() {
    return Joi.object({
      large: Joi.string().allow(""),
      small: Joi.string().allow(""),
    });
  }

  /** @returns {OrganizationBasicInfo} */
  static OrganizationBasicInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Plans} */
  static Plans() {
    return Joi.object({
      additional_charges: Joi.string().allow(""),
      custom_meta: Joi.any(),
      features: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: PartnerPartnerModel.Price(),
      trial_days: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Price} */
  static Price() {
    return Joi.object({
      amount: Joi.number(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {Screenshots} */
  static Screenshots() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string().allow("")),
      mobile: Joi.array().items(Joi.string().allow("")),
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
}
module.exports = PartnerPartnerModel;
