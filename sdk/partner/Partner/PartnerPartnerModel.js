const Joi = require("joi");

class PartnerModel {
  static Benefits() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static Callback() {
    return Joi.object({
      auth: Joi.string().allow(""),
      auto_install: Joi.string().allow(""),
      install: Joi.string().allow(""),
      setup: Joi.string().allow(""),
      uninstall: Joi.string().allow(""),
    });
  }
  static Category() {
    return Joi.object({
      categories_l1: Joi.array().items(PartnerModel.CategoryL1()),
      categories_l2: Joi.array().items(PartnerModel.CategoryL2()),
    });
  }
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
  static ClientData() {
    return Joi.object({
      client_id: Joi.string().allow(""),
      secret: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ContactInfo() {
    return Joi.object({
      review_notification_email: Joi.string().allow(""),
      submission_email: Joi.string().allow(""),
      support: PartnerModel.Support(),
    });
  }
  static CreateExtensionResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      base_url: Joi.string().allow(""),
      callbacks: PartnerModel.Callback(),
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
      logo: PartnerModel.Logo(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      secret: Joi.array().items(Joi.string().allow("")),
      whitelisted_urls: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Extension() {
    return Joi.object({
      _id: Joi.string().allow(""),
      base_url: Joi.string().allow(""),
      callbacks: PartnerModel.Callback(),
      client_data: PartnerModel.ClientData(),
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
      logo: PartnerModel.Logo(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      whitelisted_urls: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ExtensionCommon() {
    return Joi.object({
      base_url: Joi.string().allow(""),
      callbacks: PartnerModel.Callback(),
      contact_email: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      description: Joi.string().allow(""),
      developed_by_name: Joi.string().allow(""),
      ext_version: Joi.string().allow(""),
      extention_type: Joi.string().allow(""),
      is_application_level: Joi.boolean(),
      is_coming_soon: Joi.boolean(),
      is_saleschannel: Joi.boolean(),
      logo: PartnerModel.Logo(),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      whitelisted_urls: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ExtensionDraftRequest() {
    return Joi.object({
      _id: Joi.string().allow(""),
      category: PartnerModel.Category(),
      contact_info: PartnerModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      details: PartnerModel.ExtensionExtraDetails(),
      extension_id: Joi.string().allow(""),
      is_coming_soon: Joi.boolean(),
      listing_info: PartnerModel.ListingInfo(),
      meta: Joi.any(),
      modified_at: Joi.string().allow(""),
      organization: PartnerModel.OrganizationBasicInfo(),
      organization_id: Joi.string().allow(""),
      plan_type: Joi.string().allow(""),
      plans: Joi.array().items(PartnerModel.Plans()),
      plans_url: Joi.string().allow(""),
      review_instructions: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }
  static ExtensionExtraDetails() {
    return Joi.object({
      benefits: Joi.array().items(PartnerModel.Benefits()),
      demo_url: Joi.string().allow(""),
      description: Joi.string().allow(""),
      featured_banner: Joi.string().allow(""),
      integration: Joi.array().items(Joi.string().allow("")),
      integrations: Joi.array().items(Joi.string().allow("")),
      screenshots: PartnerModel.Screenshots(),
      video_url: Joi.array().items(Joi.any()),
      youtube: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ExtensionLatestReview() {
    return Joi.object({
      _id: Joi.string().allow(""),
      category: PartnerModel.Category(),
      contact_info: PartnerModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      details: PartnerModel.ExtensionExtraDetails(),
      extension_id: Joi.string().allow(""),
      is_coming_soon: Joi.boolean(),
      listing_info: PartnerModel.ListingInfo(),
      modified_at: Joi.string().allow(""),
      organization: PartnerModel.OrganizationBasicInfo(),
      organization_id: Joi.string().allow(""),
      plan_type: Joi.string().allow(""),
      plans: Joi.array().items(PartnerModel.Plans()),
      plans_url: Joi.string().allow(""),
      review_instructions: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }
  static ExtensionUnpublishRequest() {
    return Joi.object({
      description: Joi.string().allow(""),
      reason: Joi.string().allow(""),
    });
  }
  static ListingInfo() {
    return Joi.object({
      icon: Joi.string().allow(""),
      keywords: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      tagline: Joi.string().allow(""),
    });
  }
  static Logo() {
    return Joi.object({
      large: Joi.string().allow(""),
      small: Joi.string().allow(""),
    });
  }
  static OrganizationBasicInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }
  static Plans() {
    return Joi.object({
      additional_charges: Joi.string().allow(""),
      custom_meta: Joi.any(),
      features: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: PartnerModel.Price(),
      trial_days: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static Price() {
    return Joi.object({
      amount: Joi.number(),
      currency: Joi.string().allow(""),
    });
  }
  static Screenshots() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string().allow("")),
      mobile: Joi.array().items(Joi.string().allow("")),
    });
  }
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
module.exports = PartnerModel;
