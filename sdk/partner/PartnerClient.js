const Partner = require("./Partner/PartnerPartnerClient");

const { FDKClientValidationError } = require("../common/FDKError");

class PartnerClient {
  constructor(config) {
    this.config = config;
    this.partner = new Partner(config);
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

/**
 * @typedef Extension
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
 * @property {string} [created_at]
 * @property {boolean} [is_hidden]
 * @property {string} [modified_at]
 * @property {string} [organization_id]
 * @property {string[]} [whitelisted_urls]
 * @property {string} [_id]
 * @property {ClientData} [client_data]
 */

/**
 * @typedef CreateExtensionResponse
 * @property {string} [created_at]
 * @property {boolean} [is_hidden]
 * @property {string} [modified_at]
 * @property {string} [organization_id]
 * @property {string[]} [whitelisted_urls]
 * @property {string} [_id]
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
 * @property {string[]} [secret]
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
 * @typedef Logo
 * @property {string} [large]
 * @property {string} [small]
 */

/**
 * @typedef ClientData
 * @property {string} [client_id]
 * @property {string[]} [secret]
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
 * @property {string[]} [whitelisted_urls]
 * @property {Logo} [logo]
 * @property {string} [name]
 * @property {string[]} [scope]
 * @property {string} [organization_id]
 */

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
 * @typedef Category
 * @property {CategoryL1[]} [categories_l1]
 * @property {CategoryL2[]} [categories_l2]
 */

/**
 * @typedef ContactInfo
 * @property {string} [review_notification_email]
 * @property {string} [submission_email]
 * @property {Support} [support]
 */

/**
 * @typedef Benefits
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */

/**
 * @typedef Screenshots
 * @property {string[]} [desktop]
 * @property {string[]} [mobile]
 */

/**
 * @typedef ExtensionExtraDetails
 * @property {Benefits[]} [benefits]
 * @property {string} [demo_url]
 * @property {string} [description]
 * @property {string[]} [integration]
 * @property {Object[]} [video_url]
 * @property {string[]} [youtube]
 * @property {Screenshots} [screenshots]
 * @property {string[]} [integrations]
 * @property {string} [featured_banner]
 */

/**
 * @typedef ListingInfo
 * @property {string} [icon]
 * @property {string[]} [keywords]
 * @property {string} [name]
 * @property {string} [tagline]
 */

/**
 * @typedef OrganizationBasicInfo
 * @property {string} [name]
 * @property {string} [slug]
 */

/**
 * @typedef Plans
 * @property {string} [additional_charges]
 * @property {string} [features]
 * @property {string} [name]
 * @property {Price} [price]
 * @property {number} [trial_days]
 * @property {string} [type]
 * @property {Object} [custom_meta]
 */

/**
 * @typedef ExtensionLatestReview
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
 * @property {string} [_id]
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
 * @typedef ExtensionDraftRequest
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
 * @property {string} [_id]
 * @property {Object} [meta]
 */

/**
 * @typedef ExtensionUnpublishRequest
 * @property {string} [reason]
 * @property {string} [description]
 */

module.exports = PartnerClient;
