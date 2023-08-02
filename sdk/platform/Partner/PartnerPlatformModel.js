const Joi = require("joi");

class PartnerModel {
  static AddProxyReq() {
    return Joi.object({
      attached_path: Joi.string().allow(""),
      proxy_url: Joi.string().allow(""),
    });
  }
  static AddProxyResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      attached_path: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      proxy_url: Joi.string().allow(""),
    });
  }
  static APIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
    });
  }
  static ApplicationPermissions() {
    return Joi.object({
      permissions: Joi.array().items(Joi.string().allow("")),
      roles: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ApprovedPermissions() {
    return Joi.object({
      application_role: Joi.array().items(Joi.string().allow("")),
      company_permissions: Joi.array().items(Joi.string().allow("")),
      company_role: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ApprovedPermissionsInfo() {
    return Joi.object({
      application_permissions: Joi.object().pattern(
        /\S/,
        PartnerModel.ApplicationPermissions()
      ),
      company_permissions: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Benefits() {
    return Joi.object({
      description: Joi.string().allow(""),
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
  static CommingSoon() {
    return Joi.object({
      is_coming_soon: Joi.boolean(),
      upvote_count: Joi.number(),
    });
  }
  static ContactInfo() {
    return Joi.object({
      support: PartnerModel.Support(),
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
      scope: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ExtensionDetails() {
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
  static ExtensionItems() {
    return Joi.object({
      base_url: Joi.string().allow(""),
      company: Joi.string().allow(""),
      description: Joi.string().allow(""),
      developed_by_name: Joi.string().allow(""),
      ext_version: Joi.string().allow(""),
      extension_id: Joi.string().allow(""),
      extention_type: Joi.string().allow(""),
      installed: Joi.boolean(),
      is_saleschannel: Joi.boolean(),
      launch_url: Joi.string().allow(""),
      logo: PartnerModel.Logo(),
      name: Joi.string().allow(""),
      scope: Joi.array().items(PartnerModel.Scope()),
    });
  }
  static ExtensionList() {
    return Joi.object({
      items: Joi.array().items(PartnerModel.ExtensionItems()),
      page: PartnerModel.Pagination(),
    });
  }
  static ExtensionListItems() {
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
      whitelisted_urls: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ExtensionResponse() {
    return Joi.object({
      items: Joi.array().items(PartnerModel.ExtensionListItems()),
      page: PartnerModel.Pagination(),
    });
  }
  static ExtensionSuggestion() {
    return Joi.object({
      listing_info: PartnerModel.ListingInfo(),
      organization: PartnerModel.OrganizationBasicInfo(),
      organization_id: Joi.string().allow(""),
      plans: Joi.array().items(PartnerModel.Plan()),
      slug: Joi.string().allow(""),
    });
  }
  static ExtensionSuggestionList() {
    return Joi.object({
      items: Joi.array().items(PartnerModel.ExtensionSuggestion()),
    });
  }
  static getProxyPathRes() {
    return Joi.object({
      items: Joi.array().items(PartnerModel.AddProxyResponse()),
      page: PartnerModel.Pagination(),
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
  static ModifyPartnerReq() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      approved_permissions: PartnerModel.ApprovedPermissionsInfo(),
      comment: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      organization_name: Joi.string().allow(""),
      request_status: Joi.string().allow(""),
      requested_permissions: PartnerModel.RequestedPermissions(),
      user_id: Joi.string().allow(""),
    });
  }
  static OrganizationBasicInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }
  static Pagination() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static PartnerInviteDetails() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      approved_permissions: PartnerModel.ApprovedPermissions(),
      comment: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      organization_name: Joi.string().allow(""),
      request_status: Joi.string().allow(""),
      requested_permissions: PartnerModel.RequestedPermissions(),
      user_id: Joi.string().allow(""),
    });
  }
  static PartnerList() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      approved_permissions: PartnerModel.ApprovedPermissionsInfo(),
      approver_id: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      organization_name: Joi.string().allow(""),
      request_status: Joi.string().allow(""),
      requested_permissions: PartnerModel.RequestedPermissions(),
      user_id: Joi.string().allow(""),
    });
  }
  static PartnerRequestList() {
    return Joi.object({
      items: PartnerModel.PartnerList(),
      page: PartnerModel.Pagination(),
    });
  }
  static Plan() {
    return Joi.object({
      additional_charges: Joi.string().allow(""),
      features: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: PartnerModel.Price(),
      trial_days: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static Plans() {
    return Joi.object({
      additional_charges: Joi.string().allow(""),
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
  static PublicExtension() {
    return Joi.object({
      _id: Joi.string().allow(""),
      category: PartnerModel.Category(),
      coming_soon: PartnerModel.CommingSoon(),
      contact_info: PartnerModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      details: PartnerModel.ExtensionDetails(),
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
  static RemoveProxyResponse() {
    return Joi.object({
      data: Joi.any(),
      message: Joi.string().allow(""),
    });
  }
  static RequestedPermissions() {
    return Joi.object({
      application_permissions: Joi.array().items(Joi.string().allow("")),
      application_role: Joi.array().items(Joi.string().allow("")),
      company_permissions: Joi.array().items(Joi.string().allow("")),
      company_role: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Scope() {
    return Joi.object({
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static Screenshots() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string().allow("")),
      mobile: Joi.array().items(Joi.string().allow("")),
    });
  }
  static SetupProductRes() {
    return Joi.object({
      cli_wait_time: Joi.number(),
      message: Joi.string().allow(""),
      next_step: Joi.number(),
      request_id: Joi.string().allow(""),
    });
  }
  static SubscriptionRequest() {
    return Joi.object({
      approved: Joi.string().allow(""),
      client_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      credit_balance: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
    });
  }
  static SubscriptionRes() {
    return Joi.object({
      redirect_url: Joi.string().allow(""),
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
  static UninstallExtension() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
}
module.exports = PartnerModel;
