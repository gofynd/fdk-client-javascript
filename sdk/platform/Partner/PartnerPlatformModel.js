const Joi = require("joi");

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

class PartnerPlatformModel {
  /** @returns {AddProxyReq} */
  static AddProxyReq() {
    return Joi.object({
      attached_path: Joi.string().allow(""),
      proxy_url: Joi.string().allow(""),
    });
  }

  /** @returns {AddProxyResponse} */
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

  /** @returns {APIError} */
  static APIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationPermissions} */
  static ApplicationPermissions() {
    return Joi.object({
      permissions: Joi.array().items(Joi.string().allow("")),
      roles: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ApprovedPermissions} */
  static ApprovedPermissions() {
    return Joi.object({
      application_role: Joi.array().items(Joi.string().allow("")),
      company_permissions: Joi.array().items(Joi.string().allow("")),
      company_role: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ApprovedPermissionsInfo} */
  static ApprovedPermissionsInfo() {
    return Joi.object({
      application_permissions: Joi.object().pattern(
        /\S/,
        PartnerPlatformModel.ApplicationPermissions()
      ),
      company_permissions: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Benefits} */
  static Benefits() {
    return Joi.object({
      description: Joi.string().allow(""),
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
      category_l1: Joi.array().items(PartnerPlatformModel.CategoryL1()),
      category_l2: Joi.array().items(PartnerPlatformModel.CategoryL2()),
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

  /** @returns {CommingSoon} */
  static CommingSoon() {
    return Joi.object({
      is_coming_soon: Joi.boolean(),
      upvote_count: Joi.number(),
    });
  }

  /** @returns {ContactInfo} */
  static ContactInfo() {
    return Joi.object({
      support: PartnerPlatformModel.Support(),
    });
  }

  /** @returns {ExtensionCommon} */
  static ExtensionCommon() {
    return Joi.object({
      base_url: Joi.string().allow(""),
      callbacks: PartnerPlatformModel.Callback(),
      contact_email: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      description: Joi.string().allow(""),
      developed_by_name: Joi.string().allow(""),
      ext_version: Joi.string().allow(""),
      extention_type: Joi.string().allow(""),
      is_application_level: Joi.boolean(),
      is_coming_soon: Joi.boolean(),
      is_saleschannel: Joi.boolean(),
      logo: PartnerPlatformModel.Logo(),
      name: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ExtensionDetails} */
  static ExtensionDetails() {
    return Joi.object({
      benefits: Joi.array().items(PartnerPlatformModel.Benefits()),
      demo_url: Joi.string().allow(""),
      description: Joi.string().allow(""),
      integration: Joi.array().items(Joi.string().allow("")),
      screenshots: PartnerPlatformModel.Screenshots(),
      video_url: Joi.array().items(Joi.any()),
      youtube: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ExtensionItems} */
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
      logo: PartnerPlatformModel.Logo(),
      name: Joi.string().allow(""),
      scope: Joi.array().items(PartnerPlatformModel.Scope()),
    });
  }

  /** @returns {ExtensionList} */
  static ExtensionList() {
    return Joi.object({
      items: Joi.array().items(PartnerPlatformModel.ExtensionItems()),
      page: PartnerPlatformModel.Pagination(),
    });
  }

  /** @returns {ExtensionListItems} */
  static ExtensionListItems() {
    return Joi.object({
      _id: Joi.string().allow(""),
      base_url: Joi.string().allow(""),
      callbacks: PartnerPlatformModel.Callback(),
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
      logo: PartnerPlatformModel.Logo(),
      modified_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      whitelisted_urls: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ExtensionResponse} */
  static ExtensionResponse() {
    return Joi.object({
      items: Joi.array().items(PartnerPlatformModel.ExtensionListItems()),
      page: PartnerPlatformModel.Pagination(),
    });
  }

  /** @returns {ExtensionSuggestion} */
  static ExtensionSuggestion() {
    return Joi.object({
      listing_info: PartnerPlatformModel.ListingInfo(),
      organization: PartnerPlatformModel.OrganizationBasicInfo(),
      organization_id: Joi.string().allow(""),
      plans: Joi.array().items(PartnerPlatformModel.Plan()),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionSuggestionList} */
  static ExtensionSuggestionList() {
    return Joi.object({
      items: Joi.array().items(PartnerPlatformModel.ExtensionSuggestion()),
    });
  }

  /** @returns {getProxyPathRes} */
  static getProxyPathRes() {
    return Joi.object({
      items: Joi.array().items(PartnerPlatformModel.AddProxyResponse()),
      page: PartnerPlatformModel.Pagination(),
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

  /** @returns {ModifyPartnerReq} */
  static ModifyPartnerReq() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      approved_permissions: PartnerPlatformModel.ApprovedPermissionsInfo(),
      comment: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      organization_name: Joi.string().allow(""),
      request_status: Joi.string().allow(""),
      requested_permissions: PartnerPlatformModel.RequestedPermissions(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {OrganizationBasicInfo} */
  static OrganizationBasicInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Pagination} */
  static Pagination() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PartnerInviteDetails} */
  static PartnerInviteDetails() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      approved_permissions: PartnerPlatformModel.ApprovedPermissions(),
      comment: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      organization_name: Joi.string().allow(""),
      request_status: Joi.string().allow(""),
      requested_permissions: PartnerPlatformModel.RequestedPermissions(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {PartnerList} */
  static PartnerList() {
    return Joi.object({
      _id: Joi.string().allow(""),
      account_type: Joi.string().allow(""),
      approved_permissions: PartnerPlatformModel.ApprovedPermissionsInfo(),
      approver_id: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      organization_name: Joi.string().allow(""),
      request_status: Joi.string().allow(""),
      requested_permissions: PartnerPlatformModel.RequestedPermissions(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {PartnerRequestList} */
  static PartnerRequestList() {
    return Joi.object({
      items: PartnerPlatformModel.PartnerList(),
      page: PartnerPlatformModel.Pagination(),
    });
  }

  /** @returns {Plan} */
  static Plan() {
    return Joi.object({
      additional_charges: Joi.string().allow(""),
      features: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: PartnerPlatformModel.Price(),
      trial_days: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Plans} */
  static Plans() {
    return Joi.object({
      additional_charges: Joi.string().allow(""),
      features: Joi.string().allow(""),
      name: Joi.string().allow(""),
      price: PartnerPlatformModel.Price(),
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

  /** @returns {PublicExtension} */
  static PublicExtension() {
    return Joi.object({
      _id: Joi.string().allow(""),
      category: PartnerPlatformModel.Category(),
      coming_soon: PartnerPlatformModel.CommingSoon(),
      contact_info: PartnerPlatformModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      current_status: Joi.string().allow(""),
      details: PartnerPlatformModel.ExtensionDetails(),
      extension_id: Joi.string().allow(""),
      is_coming_soon: Joi.boolean(),
      listing_info: PartnerPlatformModel.ListingInfo(),
      modified_at: Joi.string().allow(""),
      organization: PartnerPlatformModel.OrganizationBasicInfo(),
      organization_id: Joi.string().allow(""),
      plan_type: Joi.string().allow(""),
      plans: Joi.array().items(PartnerPlatformModel.Plans()),
      plans_url: Joi.string().allow(""),
      review_instructions: Joi.string().allow(""),
      scope: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {RemoveProxyResponse} */
  static RemoveProxyResponse() {
    return Joi.object({
      data: Joi.any(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {RequestedPermissions} */
  static RequestedPermissions() {
    return Joi.object({
      application_permissions: Joi.array().items(Joi.string().allow("")),
      application_role: Joi.array().items(Joi.string().allow("")),
      company_permissions: Joi.array().items(Joi.string().allow("")),
      company_role: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Scope} */
  static Scope() {
    return Joi.object({
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Screenshots} */
  static Screenshots() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string().allow("")),
      mobile: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {SetupProductRes} */
  static SetupProductRes() {
    return Joi.object({
      cli_wait_time: Joi.number(),
      message: Joi.string().allow(""),
      next_step: Joi.number(),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionRequest} */
  static SubscriptionRequest() {
    return Joi.object({
      approved: Joi.string().allow(""),
      client_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      credit_balance: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {SubscriptionRes} */
  static SubscriptionRes() {
    return Joi.object({
      redirect_url: Joi.string().allow(""),
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

  /** @returns {UninstallExtension} */
  static UninstallExtension() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
}
module.exports = PartnerPlatformModel;
