const Joi = require("joi");

class PartnerModel {
  static Benefits() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static CategoryCommon() {
    return Joi.object({
      category_l1: Joi.array().items(PartnerModel.CategoryL1()),
      category_l2: Joi.array().items(PartnerModel.CategoryL2()),
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
  static ContactInfo() {
    return Joi.object({
      support: PartnerModel.Support(),
    });
  }
  static Details() {
    return Joi.object({
      benefits: Joi.array().items(PartnerModel.Benefits()),
      demo_url: Joi.string().allow(""),
      description: Joi.string().allow(""),
      integration: Joi.array().items(Joi.string().allow("")),
      screenshots: PartnerModel.Screenshots(),
      video_url: Joi.array().items(Joi.any()),
      youtube: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ExtensionUsingSlug() {
    return Joi.object({
      _id: Joi.string().allow(""),
      category: PartnerModel.CategoryCommon(),
      contact_info: PartnerModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      details: PartnerModel.Details(),
      extension_id: Joi.string().allow(""),
      is_coming_soon: Joi.boolean(),
      listing_info: PartnerModel.ListingInfo(),
      modified_at: Joi.string().allow(""),
      organization: PartnerModel.Organization(),
      organization_id: Joi.string().allow(""),
      plan_type: Joi.string().allow(""),
      plans: Joi.array().items(PartnerModel.Plans()),
      plans_url: Joi.string().allow(""),
      review_instructions: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
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
  static Organization() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }
  static Plans() {
    return Joi.object({
      additional_charges: Joi.string().allow(""),
      features: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: PartnerModel.Price(),
      recurring: PartnerModel.Recurring(),
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
  static Recurring() {
    return Joi.object({
      recurring_time: Joi.number(),
      type: Joi.string().allow(""),
      yearly_amount: Joi.number(),
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
