const Common = require("./client/CommonPlatformClient");

const Lead = require("./client/LeadPlatformClient");

const Billing = require("./client/BillingPlatformClient");

const Communication = require("./client/CommunicationPlatformClient");

const Payment = require("./client/PaymentPlatformClient");

const Order = require("./client/OrderPlatformClient");

const Catalog = require("./client/CatalogPlatformClient");

const CompanyProfile = require("./client/CompanyProfilePlatformClient");

const FileStorage = require("./client/FileStoragePlatformClient");

const Inventory = require("./client/InventoryPlatformClient");

const Configuration = require("./client/ConfigurationPlatformClient");

const Analytics = require("./client/AnalyticsPlatformClient");

const Discount = require("./client/DiscountPlatformClient");

const Webhook = require("./client/WebhookPlatformClient");

const AuditTrail = require("./client/AuditTrailPlatformClient");

const Serviceability = require("./client/ServiceabilityPlatformClient");
const PlatformApplicationClient = require("./PlatformApplicationClient");
const { FDKClientValidationError } = require("../common/FDKError");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.common = new Common(config);
    this.lead = new Lead(config);
    this.billing = new Billing(config);
    this.communication = new Communication(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.catalog = new Catalog(config);
    this.companyProfile = new CompanyProfile(config);
    this.fileStorage = new FileStorage(config);
    this.inventory = new Inventory(config);
    this.configuration = new Configuration(config);
    this.analytics = new Analytics(config);
    this.discount = new Discount(config);
    this.webhook = new Webhook(config);
    this.auditTrail = new AuditTrail(config);
    this.serviceability = new Serviceability(config);
  }
  application(applicationId) {
    if (typeof applicationId == "string") {
      return new PlatformApplicationClient(applicationId, this.config);
    }
    throw new Error(
      `Application Id should be of type string, ${typeof applicationId} provided`
    );
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
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */

/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */

/**
 * @typedef Domain
 * @property {boolean} [verified]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {boolean} [is_predefined]
 */

/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled]
 * @property {string} [basepath]
 */

/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */

/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */

/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */

/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */

/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */

/**
 * @typedef NotFound
 * @property {string} [message]
 */

/**
 * @typedef BadRequest
 * @property {string} [message]
 */

/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */

/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef LocationCountry
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 */

/**
 * @typedef Locations
 * @property {Object[]} [items]
 */

/**
 * @typedef TicketList
 * @property {Ticket[]} [items]
 * @property {Filter} [filters]
 * @property {Page} [page]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditCustomFormPayload
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {PriorityEnum} priority
 * @property {string} [header_image]
 * @property {boolean} [should_notify]
 * @property {boolean} [login_required]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category]
 * @property {string} [sub_category]
 * @property {string} [source]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags]
 */

/**
 * @typedef AgentChangePayload
 * @property {string} agent_id
 */

/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name
 */

/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success
 */

/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name
 * @property {NotifyUser[]} [notify]
 */

/**
 * @typedef NotifyUser
 * @property {string} country_code
 * @property {string} phone_number
 */

/**
 * @typedef Filter
 * @property {Priority[]} priorities
 * @property {TicketCategory[]} [categories]
 * @property {Status[]} statuses
 * @property {Object[]} assignees
 */

/**
 * @typedef TicketHistoryPayload
 * @property {Object} value
 * @property {HistoryTypeEnum} type
 */

/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response
 * @property {TicketAsset[]} [attachments]
 */

/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token
 */

/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants
 */

/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity]
 * @property {string} [status]
 */

/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */

/**
 * @typedef Debug
 * @property {string} [source]
 * @property {string} [platform]
 */

/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message
 * @property {Ticket} ticket
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id]
 * @property {string} company_id
 */

/**
 * @typedef CreatedOn
 * @property {string} user_agent
 */

/**
 * @typedef TicketAsset
 * @property {string} [display]
 * @property {string} value
 * @property {TicketAssetTypeEnum} type
 */

/**
 * @typedef TicketContent
 * @property {string} title
 * @property {string} [description]
 * @property {TicketAsset[]} [attachments]
 */

/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {string} category
 * @property {TicketContent} content
 * @property {Object} [_custom_json]
 */

/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display
 * @property {string} color
 */

/**
 * @typedef Status
 * @property {string} key
 * @property {string} display
 * @property {string} color
 */

/**
 * @typedef TicketFeedbackForm
 * @property {string} title
 * @property {Object[]} [display]
 */

/**
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items]
 */

/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response]
 */

/**
 * @typedef SubmitButton
 * @property {string} title
 * @property {string} title_color
 * @property {string} background_color
 */

/**
 * @typedef PollForAssignment
 * @property {number} duration
 * @property {string} message
 * @property {string} success_message
 * @property {string} failure_message
 */

/**
 * @typedef CustomForm
 * @property {string} application_id
 * @property {string} slug
 * @property {string} [header_image]
 * @property {string} title
 * @property {string} [description]
 * @property {Priority} priority
 * @property {boolean} login_required
 * @property {boolean} should_notify
 * @property {string} [success_message]
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id
 */

/**
 * @typedef CommunicationDetails
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SupportGeneralConfig
 * @property {string} [_id]
 * @property {CommunicationDetails} [support_email]
 * @property {CommunicationDetails} [support_phone]
 * @property {CommunicationDetails} [support_faq]
 * @property {boolean} [show_communication_info]
 * @property {CommunicationDetails} [support_communication]
 * @property {boolean} [show_support_dris]
 * @property {Object} [integration]
 */

/**
 * @typedef FeedbackForm
 * @property {Object} [inputs]
 * @property {string} [title]
 * @property {Object} [timestamps]
 */

/**
 * @typedef TicketSubCategory
 * @property {string} key
 * @property {string} display
 * @property {TicketSubCategory} [sub_categories]
 */

/**
 * @typedef TicketCategory
 * @property {string} display
 * @property {string} key
 * @property {TicketCategory} [sub_categories]
 * @property {number} [group_id]
 * @property {FeedbackForm} [feedback_form]
 */

/**
 * @typedef CategoryData
 * @property {TicketCategory} [list]
 */

/**
 * @typedef IntegrationConfig
 * @property {string} [_id]
 * @property {string} integration_type
 * @property {string} [base_url]
 * @property {string} [create_ticket_apikey]
 * @property {string} [update_ticket_apikey]
 * @property {string} [category_sync_apikey]
 * @property {CategoryData} [category_data]
 * @property {string} [webhook_apikey]
 * @property {boolean} [config_completed]
 * @property {boolean} allow_ticket_creation
 * @property {boolean} show_listing
 */

/**
 * @typedef FeedbackResponseItem
 * @property {string} display
 * @property {string} key
 * @property {string} value
 */

/**
 * @typedef TicketFeedback
 * @property {string} _id
 * @property {string} ticket_id
 * @property {string} company_id
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category]
 * @property {Object} [user]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef TicketHistory
 * @property {string} type
 * @property {Object} value
 * @property {string} ticket_id
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id]
 * @property {TicketContent} [content]
 * @property {string} category
 * @property {string} [sub_category]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by]
 * @property {Object} [assigned_to]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_feedback_pending]
 * @property {Object} [integration]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */

/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 */

/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */

/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */

/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */

/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */

/**
 * @typedef UpgradableThemeSchema
 * @property {string} [parent_theme]
 * @property {string} [applied_theme]
 * @property {boolean} [upgrade]
 */

/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */

/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef FontsSchemaItems
 * @property {string} [family]
 * @property {string[]} [variants]
 * @property {string[]} [subsets]
 * @property {string} [version]
 * @property {string} [last_modified]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [category]
 * @property {string} [kind]
 */

/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [regular]
 * @property {string} [italic]
 * @property {string} [bold]
 */

/**
 * @typedef ThemesSchema
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [customized]
 * @property {boolean} [published]
 * @property {boolean} [archived]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {string} [parent_theme_version]
 * @property {string} [parent_theme]
 * @property {Information} [information]
 * @property {string[]} [tags]
 * @property {Src} [src]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Object} [styles]
 * @property {Config} [config]
 * @property {Font} [font]
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {Colors} [colors]
 */

/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [name]
 * @property {string} [label]
 * @property {BlocksProps[]} [props]
 */

/**
 * @typedef Information
 * @property {Images} [images]
 * @property {string[]} [features]
 * @property {string} [name]
 * @property {string} [description]
 */

/**
 * @typedef Images
 * @property {string[]} [desktop]
 * @property {string[]} [android]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */

/**
 * @typedef Src
 * @property {string} [link]
 */

/**
 * @typedef AssetsSchema
 * @property {UmdJs} [umd_js]
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 */

/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef CommonJs
 * @property {string} [link]
 */

/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef Sections
 * @property {string} [attributes]
 */

/**
 * @typedef Config
 * @property {Preset} [preset]
 * @property {GlobalSchema} [global_schema]
 * @property {string} [current]
 * @property {ListSchemaItem[]} [list]
 */

/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */

/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {ConfigPage[]} [page]
 * @property {string} [name]
 */

/**
 * @typedef Colors
 * @property {string} [bg_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 * @property {string} [accent_color]
 * @property {string} [link_color]
 * @property {string} [button_secondary_color]
 */

/**
 * @typedef Custom
 * @property {Object} [props]
 */

/**
 * @typedef ConfigPage
 * @property {Object} [settings]
 * @property {string} [page]
 */

/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */

/**
 * @typedef Variants
 * @property {Medium} [medium]
 * @property {SemiBold} [semi_bold]
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Regular} [regular]
 */

/**
 * @typedef Medium
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef SemiBold
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Bold
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Light
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Regular
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Blocks
 * @property {string} [type]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */

/**
 * @typedef GlobalSchemaProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [category]
 */

/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */

/**
 * @typedef BlockUserRequestSchema
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 * @property {string} [reason]
 */

/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */

/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef UnDeleteUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 */

/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */

/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */

/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef EditProfileRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [profile_pic_url]
 * @property {string} [android_hash]
 * @property {string} [sender]
 * @property {string} [register_token]
 */

/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [country_code]
 */

/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 * @property {string} [captcha_code]
 */

/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password]
 * @property {string} [new_password]
 */

/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */

/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */

/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */

/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */

/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email]
 * @property {string} [captcha_code]
 */

/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {string} [captcha_code]
 */

/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef SendOtpRequestSchema
 * @property {string} [country_code]
 * @property {string} [captcha_code]
 * @property {string} [mobile]
 * @property {string} [android_hash]
 */

/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */

/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier]
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */

/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {UserSchema} [user]
 */

/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token]
 * @property {string} [resend_email_token]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [email]
 * @property {string} [request_id]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 */

/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {string} [register_token]
 */

/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */

/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */

/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */

/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */

/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef UnDeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 */

/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */

/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */

/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef SessionListResponseSchema
 * @property {string[]} [items]
 */

/**
 * @typedef SessionDeleteResponseSchema
 * @property {string[]} [items]
 */

/**
 * @typedef UnauthorizedSchema
 * @property {string} [message]
 */

/**
 * @typedef UnauthenticatedSchema
 * @property {boolean} [authenticated]
 */

/**
 * @typedef NotFoundSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef ProfileEditSuccessSchema
 * @property {string} [email]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [user]
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */

/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */

/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name]
 * @property {string} [image]
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */

/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef AuthSuccessUser
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {AuthSuccessUserDebug} [debug]
 * @property {boolean} [active]
 * @property {AuthSuccessUserEmails} [emails]
 */

/**
 * @typedef AuthSuccessUserDebug
 * @property {string} [platform]
 */

/**
 * @typedef AuthSuccessUserEmails
 * @property {string} [email]
 * @property {boolean} [verified]
 * @property {boolean} [primary]
 * @property {boolean} [active]
 */

/**
 * @typedef CreateUserRequestSchema
 * @property {string} phone_number
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} username
 * @property {Object} [meta]
 */

/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {string} [user_id]
 */

/**
 * @typedef CreateUserSessionResponseSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 * @property {boolean} [http_only]
 * @property {Object} [cookie]
 */

/**
 * @typedef PlatformSchema
 * @property {string} [display]
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at]
 * @property {boolean} [active]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {boolean} [skip_captcha]
 * @property {string} [name]
 * @property {MetaSchema} [meta]
 * @property {string} [_id]
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login]
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at]
 * @property {boolean} [register]
 * @property {string} [mobile_image]
 * @property {string} [desktop_image]
 * @property {number} [delete_account_day]
 * @property {DeleteAccountReasons[]} [delete_account_reasons]
 * @property {Object} [delete_account_consent]
 * @property {Object} [session_config]
 */

/**
 * @typedef LookAndFeel
 * @property {string} [card_position]
 * @property {string} [background_color]
 */

/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 */

/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */

/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 * @property {boolean} [apple]
 */

/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */

/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */

/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef FlashCard
 * @property {string} [text]
 * @property {string} [text_color]
 * @property {string} [background_color]
 */

/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [account_kit]
 * @property {Google} [google]
 */

/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_text]
 * @property {string} [reason_id]
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text]
 */

/**
 * @typedef Facebook
 * @property {string} [app_id]
 */

/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */

/**
 * @typedef Google
 * @property {string} [app_id]
 */

/**
 * @typedef SessionExpiry
 * @property {number} [duration]
 * @property {string} [type]
 * @property {boolean} [is_rolling]
 */

/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [external_id]
 * @property {Object} [meta]
 */

/**
 * @typedef UserSchema
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */

/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {string} [returns]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef PathMappingSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */

/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */

/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */

/**
 * @typedef EditorMeta
 * @property {string} [foreground_color]
 * @property {string} [background_color]
 * @property {string} [content_type]
 * @property {string} [content]
 */

/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {string[]} [platforms]
 * @property {string} [title]
 * @property {string} [announcement]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {EditorMeta} [editor_meta]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {string} [app]
 * @property {string} [modified_at]
 * @property {ScheduleSchema} [_schedule]
 */

/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */

/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */

/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */

/**
 * @typedef SEOImage
 * @property {string} [url]
 */

/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef BlogRequest
 * @property {string} [application]
 * @property {Object} [_custom_json]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 */

/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateAnnouncementSchema
 * @property {string} [message]
 * @property {AdminAnnouncementSchema} [data]
 */

/**
 * @typedef DataLoaderResponseSchema
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */

/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */

/**
 * @typedef Navigation
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [orientation]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {NavigationReference} [navigation]
 */

/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */

/**
 * @typedef Language
 * @property {string} [display]
 */

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */

/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {SubNavigationReference[]} [sub_navigation]
 */

/**
 * @typedef SubNavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */

/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */

/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */

/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate]
 * @property {string[]} [refresh_pages]
 */

/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */

/**
 * @typedef HandpickedTagSchema
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [content]
 */

/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */

/**
 * @typedef CreateTagSchema
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {Object[]} [pages]
 * @property {string} [content]
 */

/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */

/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 */

/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */

/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

/**
 * @typedef CommonError
 * @property {string} [message]
 */

/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */

/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string[]} [tags]
 */

/**
 * @typedef FAQ
 * @property {string} [slug]
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */

/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */

/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */

/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */

/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */

/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */

/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */

/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {string} [platform]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [orientation]
 * @property {string} [application]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {ScheduleSchema} [_schedule]
 */

/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */

/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */

/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */

/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */

/**
 * @typedef PageSpecItem
 * @property {string} [page_type]
 * @property {string} [display_name]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */

/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids]
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */

/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PageRequest
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 */

/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */

/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */

/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */

/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef SlideshowRequest
 * @property {string} [slug]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {boolean} [active]
 */

/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */

/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */

/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */

/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */

/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */

/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */

/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {Object[]} [pages]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */

/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */

/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */

/**
 * @typedef InternalServerError
 * @property {string} [message]
 * @property {string} [code]
 */

/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid]
 * @property {number} [discount_amount]
 */

/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef DetailedPlanComponents
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {boolean} [enabled]
 * @property {string} [display_text]
 */

/**
 * @typedef DetailedPlan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {DetailedPlanComponents[]} [components]
 */

/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef EntityChargePrice
 * @property {number} amount
 * @property {string} currency_code
 */

/**
 * @typedef EntityChargeRecurring
 * @property {string} interval
 */

/**
 * @typedef ChargeLineItem
 * @property {string} name
 * @property {string} term
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test]
 * @property {string} return_url
 */

/**
 * @typedef CurrentPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {CurrentPeriod} [current_period]
 * @property {string} [status]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 * @property {Object} [metadata]
 * @property {SubscriptionCharge[]} [line_items]
 */

/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url]
 */

/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 */

/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [value]
 * @property {string} [timestamp]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [cvc_check]
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
 * @property {boolean} [supported]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [wallet]
 * @property {string} [country]
 * @property {string} [funding]
 * @property {number} [exp_year]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {number} [exp_month]
 * @property {string} [fingerprint]
 * @property {string} [generated_from]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 */

/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {number} [id]
 * @property {string} [type]
 * @property {string} [pg_payment_method_id]
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */

/**
 * @typedef InvoiceDetails
 * @property {InvoiceDetailsPeriod} [period]
 * @property {InvoiceDetailsClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [_id]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicePaymentMethod} [payment_method]
 */

/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {string} [currency]
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [description]
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount]
 * @property {number} [amount]
 * @property {string} [type]
 * @property {string} [invoice_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */

/**
 * @typedef InvoicesDataClient
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string[]} [address_lines]
 */

/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */

/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items]
 */

/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [total]
 */

/**
 * @typedef Phone
 * @property {string} [phone_number]
 * @property {string} [phone_country_code]
 */

/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 */

/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {Object} [data]
 */

/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */

/**
 * @typedef SubscriptionTrial
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation]
 * @property {boolean} [charging]
 */

/**
 * @typedef Subscription
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {Plan} [plan_data]
 * @property {string} [current_status]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [latest_invoice]
 */

/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 */

/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
 */

/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */

/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */

/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitTeam} [team]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 */

/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 */

/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */

/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 */

/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */

/**
 * @typedef StatsImported
 * @property {number} [count]
 */

/**
 * @typedef StatsProcessedEmail
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessedSms
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */

/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */

/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */

/**
 * @typedef CampaignReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */

/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */

/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_name]
 * @property {string} [from_email]
 */

/**
 * @typedef CampaignEmail
 * @property {CampaignEmailTemplate} [template]
 * @property {CampignEmailProvider} [provider]
 */

/**
 * @typedef Campaign
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BadRequestSchema
 * @property {string} [status]
 * @property {string} [message]
 */

/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */

/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */

/**
 * @typedef GetNRecordsCsvReq
 * @property {string} [url]
 * @property {boolean} [header]
 * @property {number} [count]
 */

/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 */

/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */

/**
 * @typedef AudienceReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */

/**
 * @typedef Audience
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailProviderReqFrom
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */

/**
 * @typedef EmailProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 */

/**
 * @typedef EmailProvider
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef EmailTemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */

/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {EmailTemplateKeys} [keys]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */

/**
 * @typedef TemplateAndType
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef EmailTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef EmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SystemEmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */

/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */

/**
 * @typedef PayloadStructure
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 * @property {string} [application]
 */

/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */

/**
 * @typedef EngineRequest
 * @property {PayloadStructure} [payload]
 * @property {MetaStructure} [meta]
 */

/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */

/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 */

/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */

/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */

/**
 * @typedef Job
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef JobLog
 * @property {Object} [imported]
 * @property {Object} [processed]
 * @property {string} [_id]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LogEmail
 * @property {string} [template]
 */

/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */

/**
 * @typedef LogMeta
 * @property {string} [type]
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */

/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogPushnotification} [pushnotification]
 * @property {LogMeta} [meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [status]
 * @property {Object} [data]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 */

/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SendOtpSmsCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpSmsCommsProvider
 * @property {string} [slug]
 * @property {string} [_id]
 */

/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpCommsReqData
 * @property {boolean} [send_same_otp_to_channel]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [to]
 */

/**
 * @typedef SendOtpCommsReqSms
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
 * @property {SendOtpSmsCommsProvider} [provider]
 */

/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpEmailCommsTemplate} [template]
 */

/**
 * @typedef SendOtpCommsResSms
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsResEmail
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [to]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsReq
 * @property {SendOtpCommsReqData} [data]
 * @property {SendOtpCommsReqSms} [sms]
 * @property {SendOtpCommsReqEmail} [email]
 */

/**
 * @typedef SendOtpCommsRes
 * @property {SendOtpCommsResSms} [sms]
 * @property {SendOtpCommsResEmail} [email]
 */

/**
 * @typedef VerifyOtpCommsReq
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpCommsSuccessRes
 * @property {boolean} [success]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [message]
 */

/**
 * @typedef VerifyOtpCommsErrorRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 */

/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */

/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [type]
 * @property {string} [provider]
 */

/**
 * @typedef SmsProvider
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsTemplateMessage
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef SmsTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */

/**
 * @typedef SmsTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string} [priority]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SystemSmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Notification
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [subtitle]
 * @property {string} [icon]
 * @property {string} [deeplink]
 * @property {string} [click_action]
 */

/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef SystemNotificationSettings
 * @property {boolean} [sound]
 * @property {string} [priority]
 * @property {string} [time_to_live]
 */

/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationUser} [settings]
 * @property {string} [_id]
 * @property {string} [group]
 * @property {string} [created_at]
 */

/**
 * @typedef SystemNotificationsPage
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */

/**
 * @typedef PaymentGatewayConfigResponse
 * @property {Object[]} [aggregators]
 * @property {string[]} excluded_fields
 * @property {boolean} success
 * @property {string} app_id
 * @property {string[]} display_fields
 * @property {boolean} created
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} secret
 * @property {string} key
 * @property {string} merchant_salt
 * @property {boolean} [is_active]
 * @property {string} config_type
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {boolean} [is_active]
 * @property {string} app_id
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator
 * @property {boolean} success
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} description
 * @property {string} code
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} small
 * @property {string} large
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef IntentApp
 * @property {string} [package_name]
 * @property {string} [display_name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeList
 * @property {boolean} [expired]
 * @property {boolean} [intent_flow]
 * @property {number} [exp_year]
 * @property {string} [merchant_code]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [card_id]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_name]
 * @property {string} [nickname]
 * @property {string} [card_reference]
 * @property {string} [card_fingerprint]
 * @property {number} [exp_month]
 * @property {string} [card_brand]
 * @property {number} [display_priority]
 * @property {string} [card_issuer]
 * @property {string} aggregator_name
 * @property {number} [remaining_limit]
 * @property {string} [display_name]
 * @property {number} [retry_count]
 * @property {string} [card_number]
 * @property {string} [card_type]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {number} [timeout]
 * @property {string} [card_brand_image]
 * @property {string} [card_token]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [name]
 * @property {string} [fynd_vpa]
 * @property {string} [card_isin]
 * @property {number} [cod_limit]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [code]
 * @property {number} [cod_limit_per_order]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [anonymous_enable]
 * @property {string} name
 * @property {number} display_priority
 * @property {string} [aggregator_name]
 * @property {PaymentModeList[]} [list]
 * @property {string} display_name
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [save_card]
 * @property {boolean} [is_pay_by_card_pl]
 */

/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */

/**
 * @typedef PaymentOptionsResponse
 * @property {boolean} success
 * @property {PaymentOptions} payment_options
 */

/**
 * @typedef PayoutsResponse
 * @property {Object} unique_transfer_no
 * @property {Object[]} payouts_aggregators
 * @property {string} transfer_type
 * @property {Object} more_attributes
 * @property {Object} customers
 * @property {boolean} is_active
 * @property {boolean} is_default
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [branch_name]
 * @property {string} [state]
 * @property {string} [account_no]
 * @property {string} account_type
 * @property {string} ifsc_code
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [bank_name]
 * @property {string} [city]
 * @property {string} [account_holder]
 */

/**
 * @typedef PayoutRequest
 * @property {string} unique_external_id
 * @property {Object} users
 * @property {PayoutBankDetails} bank_details
 * @property {string} transfer_type
 * @property {string} aggregator
 * @property {boolean} is_active
 */

/**
 * @typedef PayoutResponse
 * @property {string} unique_transfer_no
 * @property {boolean} created
 * @property {Object} users
 * @property {Object} bank_details
 * @property {Object} payouts
 * @property {boolean} success
 * @property {string} transfer_type
 * @property {string} aggregator
 * @property {string} payment_status
 * @property {boolean} is_active
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_active
 * @property {boolean} success
 * @property {boolean} is_default
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {string} unique_external_id
 * @property {boolean} is_active
 * @property {boolean} is_default
 */

/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {Object[]} data
 * @property {boolean} success
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionConfigResponse
 * @property {string} aggregator
 * @property {boolean} success
 * @property {Object} config
 */

/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */

/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {Object} data
 * @property {boolean} success
 */

/**
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag]
 * @property {Object} [data]
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} branch_name
 * @property {string} account_no
 * @property {string} ifsc_code
 * @property {string} bank_name
 * @property {string} account_holder
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name
 * @property {string} bank_name
 * @property {boolean} [success]
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} [comment]
 * @property {string} account_holder
 * @property {string} [branch_name]
 * @property {string} beneficiary_id
 * @property {string} account_no
 * @property {string} [mobile]
 * @property {string} display_name
 * @property {string} email
 * @property {string} created_on
 * @property {string} transfer_mode
 * @property {string} modified_on
 * @property {number} id
 * @property {string} subtitle
 * @property {string} ifsc_code
 * @property {string} bank_name
 * @property {string} address
 * @property {string} title
 * @property {string} [delights_user_name]
 * @property {boolean} is_active
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {string} [current_status]
 * @property {string} [payment_gateway]
 * @property {Object} [extra_meta]
 * @property {string} [payment_id]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} mode
 * @property {number} amount
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} [name]
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} order_id
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} order_id
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef CODdata
 * @property {number} usages
 * @property {number} remaining_limit
 * @property {string} user_id
 * @property {boolean} is_active
 * @property {number} limit
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {boolean} success
 * @property {CODdata} user_cod_data
 */

/**
 * @typedef SetCODForUserRequest
 * @property {boolean} is_active
 * @property {string} mobileno
 * @property {string} merchant_user_id
 */

/**
 * @typedef SetCODOptionResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef EdcModelData
 * @property {string} aggregator
 * @property {string[]} models
 * @property {number} aggregator_id
 */

/**
 * @typedef EdcAggregatorAndModelListResponse
 * @property {EdcModelData[]} data
 * @property {boolean} success
 */

/**
 * @typedef StatisticsData
 * @property {number} active_device_count
 * @property {number} inactive_device_count
 */

/**
 * @typedef EdcDeviceStatsResponse
 * @property {StatisticsData} statistics
 * @property {boolean} success
 */

/**
 * @typedef EdcAddRequest
 * @property {number} aggregator_id
 * @property {string} edc_model
 * @property {string} [device_tag]
 * @property {string} terminal_serial_no
 * @property {number} store_id
 * @property {string} edc_device_serial_no
 */

/**
 * @typedef EdcDevice
 * @property {number} aggregator_id
 * @property {string} [edc_model]
 * @property {string} [aggregator_name]
 * @property {string} terminal_unique_identifier
 * @property {string} device_tag
 * @property {string} terminal_serial_no
 * @property {number} store_id
 * @property {string} edc_device_serial_no
 * @property {string} application_id
 * @property {boolean} is_active
 * @property {string} [merchant_store_pos_code]
 */

/**
 * @typedef EdcDeviceAddResponse
 * @property {EdcDevice} data
 * @property {boolean} success
 */

/**
 * @typedef EdcDeviceDetailsResponse
 * @property {EdcDevice} data
 * @property {boolean} success
 */

/**
 * @typedef EdcUpdateRequest
 * @property {number} [aggregator_id]
 * @property {string} [edc_model]
 * @property {string} [device_tag]
 * @property {number} [store_id]
 * @property {string} [edc_device_serial_no]
 * @property {string} [is_active]
 * @property {string} [merchant_store_pos_code]
 */

/**
 * @typedef EdcDeviceUpdateResponse
 * @property {boolean} success
 */

/**
 * @typedef EdcDeviceListResponse
 * @property {EdcDevice[]} items
 * @property {Page} page
 * @property {boolean} success
 */

/**
 * @typedef PaymentInitializationRequest
 * @property {string} contact
 * @property {string} email
 * @property {string} order_id
 * @property {string} [vpa]
 * @property {string} [razorpay_payment_id]
 * @property {string} merchant_order_id
 * @property {string} customer_id
 * @property {string} currency
 * @property {string} [device_id]
 * @property {string} method
 * @property {string} aggregator
 * @property {number} [timeout]
 * @property {number} amount
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} [status]
 * @property {string} polling_url
 * @property {string} [virtual_id]
 * @property {string} [vpa]
 * @property {string} [bqr_image]
 * @property {string} merchant_order_id
 * @property {string} [razorpay_payment_id]
 * @property {boolean} success
 * @property {string} [customer_id]
 * @property {string} [aggregator_order_id]
 * @property {string} [currency]
 * @property {string} [device_id]
 * @property {string} method
 * @property {string} aggregator
 * @property {number} [timeout]
 * @property {number} [amount]
 * @property {string} [upi_poll_url]
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} contact
 * @property {string} status
 * @property {string} order_id
 * @property {string} email
 * @property {string} [vpa]
 * @property {string} merchant_order_id
 * @property {string} customer_id
 * @property {string} currency
 * @property {string} [device_id]
 * @property {string} method
 * @property {string} aggregator
 * @property {number} amount
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} status
 * @property {string} aggregator_name
 * @property {boolean} [success]
 * @property {boolean} retry
 * @property {string} [redirect_url]
 */

/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} request_type
 * @property {string} order_id
 * @property {string} [device_id]
 */

/**
 * @typedef LinkStatus
 * @property {boolean} status
 * @property {string} message
 */

/**
 * @typedef ResendOrCancelPaymentResponse
 * @property {LinkStatus} data
 * @property {boolean} success
 */

/**
 * @typedef PlatformItem
 * @property {string} [color]
 * @property {string} [code]
 * @property {string} [l3_category_name]
 * @property {boolean} [can_return]
 * @property {number} [department_id]
 * @property {string[]} [image]
 * @property {string[]} [images]
 * @property {string} [name]
 * @property {string[]} [l1_category]
 * @property {boolean} [can_cancel]
 * @property {number} [l3_category]
 * @property {string} [size]
 * @property {number} [id]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} brand_calculated_amount
 * @property {number} gst_fee
 * @property {string} gstin_code
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 */

/**
 * @typedef Prices
 * @property {number} [fynd_credits]
 * @property {number} [cod_charges]
 * @property {number} [refund_amount]
 * @property {number} [cashback]
 * @property {number} [discount]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [transfer_price]
 * @property {number} [delivery_charge]
 * @property {number} [price_effective]
 * @property {number} [refund_credit]
 * @property {number} [coupon_value]
 * @property {number} [cashback_applied]
 * @property {number} [tax_collected_at_source]
 * @property {number} [value_of_good]
 * @property {number} [price_marked]
 * @property {number} [amount_paid]
 * @property {number} [promotion_effective_discount]
 */

/**
 * @typedef BagUnit
 * @property {Object} status
 * @property {number} item_quantity
 * @property {number} total_shipment_bags
 * @property {number} bag_id
 * @property {PlatformItem} [item]
 * @property {string} shipment_id
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {GSTDetailsData} [gst]
 * @property {Prices} [prices]
 * @property {string} ordering_channel
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef ShipmentStatus
 * @property {string} status
 * @property {string} hex_code
 * @property {string} title
 * @property {string} actual_status
 * @property {string} ops_status
 */

/**
 * @typedef UserDataInfo
 * @property {number} [uid]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [avis_user_id]
 * @property {string} [mobile]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [gender]
 */

/**
 * @typedef ShipmentItem
 * @property {string} fulfilling_centre
 * @property {BagUnit[]} [bags]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {ShipmentStatus} [shipment_status]
 * @property {string} [shipment_id]
 * @property {number} total_shipments_in_order
 * @property {string} shipment_created_at
 * @property {Object} [channel]
 * @property {Object} [sla]
 * @property {Object} [payment_methods]
 * @property {number} total_bags_count
 * @property {Object} [application]
 * @property {Prices} [prices]
 * @property {string} created_at
 * @property {UserDataInfo} [user]
 * @property {string} id
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} text
 */

/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} value
 * @property {string} type
 * @property {string} text
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {Object} [applied_filters]
 * @property {Object} [page]
 * @property {FiltersInfo[]} [filters]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {string} [uid]
 * @property {Object} [return_config]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [country]
 * @property {string} [updated_at]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [area]
 * @property {string} [version]
 * @property {number} [latitude]
 * @property {string} [landmark]
 * @property {number} [longitude]
 * @property {string} [address2]
 * @property {string} [contact_person]
 * @property {string} [email]
 * @property {string} [pincode]
 * @property {string} [address_category]
 * @property {string} [phone]
 * @property {string} [created_at]
 * @property {string} [address_type]
 * @property {string} [state]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} [amount_paid_roundoff]
 * @property {number} transfer_price
 * @property {number} delivery_charge
 * @property {number} gst_fee
 * @property {number} price_marked
 * @property {number} amount_paid
 * @property {string} size
 * @property {boolean} added_to_fynd_cash
 * @property {number} gst_tax_percentage
 * @property {number} [tax_collected_at_source]
 * @property {Identifier} identifiers
 * @property {string} gst_tag
 * @property {number} cashback
 * @property {number} discount
 * @property {number} price_effective
 * @property {number} refund_credit
 * @property {number} coupon_value
 * @property {number} cashback_applied
 * @property {string} hsn_code
 * @property {number} promotion_effective_discount
 * @property {number} fynd_credits
 * @property {number} cod_charges
 * @property {number} brand_calculated_amount
 * @property {string} item_name
 * @property {number} coupon_effective_discount
 * @property {number} total_units
 * @property {number} value_of_good
 */

/**
 * @typedef BagConfigs
 * @property {boolean} allow_force_return
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_returnable
 * @property {boolean} is_active
 */

/**
 * @typedef OrderBrandName
 * @property {string} [modified_on]
 * @property {string} created_on
 * @property {string} company
 * @property {string} brand_name
 * @property {string} logo
 * @property {number} id
 */

/**
 * @typedef BagStateMapper
 * @property {string} [app_state_name]
 * @property {string} [app_display_name]
 * @property {string} journey_type
 * @property {string} display_name
 * @property {boolean} [is_active]
 * @property {string} state_type
 * @property {boolean} [app_facing]
 * @property {boolean} [notify_customer]
 * @property {string} name
 * @property {number} bs_id
 */

/**
 * @typedef CurrentStatus
 * @property {string} [updated_at]
 * @property {string} [status]
 * @property {number} [delivery_partner_id]
 * @property {number} current_status_id
 * @property {number} [bag_id]
 * @property {string} [shipment_id]
 * @property {boolean} [kafka_sync]
 * @property {string} [delivery_awb_number]
 * @property {string} [state_type]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [store_id]
 * @property {number} [state_id]
 * @property {string} [created_at]
 */

/**
 * @typedef BagGST
 * @property {number} [brand_calculated_amount]
 * @property {number} [gst_tax_percentage]
 * @property {number} [gst_fee]
 * @property {string} [gstin_code]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {string} [gst_tag]
 */

/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */

/**
 * @typedef BuyRules
 * @property {ItemCriterias} [item_criteria]
 * @property {Object} [cart_conditions]
 */

/**
 * @typedef AppliedPromos
 * @property {number} [amount]
 * @property {DiscountRules[]} [discount_rules]
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_type]
 * @property {string} [promo_id]
 * @property {string} [promotion_name]
 */

/**
 * @typedef OrderBags
 * @property {number} [line_number]
 * @property {OrderBagArticle} [article]
 * @property {number} [quantity]
 * @property {string} [seller_identifier]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {PlatformItem} [item]
 * @property {boolean} [can_return]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {boolean} [can_cancel]
 * @property {Object} [parent_promo_bags]
 * @property {BagConfigs} [bag_configs]
 * @property {string} [display_name]
 * @property {OrderBrandName} [brand]
 * @property {CurrentStatus} [current_status]
 * @property {string} [identifier]
 * @property {Prices} [prices]
 * @property {string} [entity_type]
 * @property {BagGST} [gst_details]
 * @property {number} bag_id
 * @property {AppliedPromos[]} [applied_promos]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {string} [created_at]
 * @property {string[]} [bag_list]
 * @property {number} [id]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [order_value]
 * @property {string} [cod_charges]
 * @property {string} [order_date]
 * @property {string} fynd_order_id
 * @property {string} [source]
 * @property {string} [affiliate_id]
 * @property {Object} [tax_details]
 * @property {string} [ordering_channel]
 * @property {Object} [ordering_channel_logo]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [channel_shipment_id]
 * @property {boolean} [is_priority]
 * @property {string} [box_type]
 * @property {number} [quantity]
 * @property {string} [channel_order_id]
 * @property {number} [employee_discount]
 * @property {string} [coupon_code]
 * @property {string} [order_item_id]
 * @property {number} [loyalty_discount]
 * @property {number} [size_level_total_qty]
 * @property {string} [due_date]
 */

/**
 * @typedef BuyerDetails
 * @property {string} city
 * @property {string} address
 * @property {string} [ajio_site_id]
 * @property {string} gstin
 * @property {string} name
 * @property {number} pincode
 * @property {string} state
 */

/**
 * @typedef LockData
 * @property {boolean} [mto]
 * @property {string} [lock_message]
 * @property {boolean} [locked]
 */

/**
 * @typedef EinvoiceInfo
 * @property {Object} [invoice]
 * @property {Object} [credit_note]
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */

/**
 * @typedef ShipmentMeta
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Object} [b2c_buyer_details]
 * @property {string} [packaging_name]
 * @property {string} [box_type]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [dp_sort_key]
 * @property {string} [marketplace_store_id]
 * @property {Object} [dp_options]
 * @property {Object} [return_details]
 * @property {string} [po_number]
 * @property {string} [return_affiliate_shipment_id]
 * @property {number} [return_store_node]
 * @property {string} [order_type]
 * @property {LockData} [lock_data]
 * @property {boolean} same_store_available
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {Formatted} [formatted]
 * @property {string} [return_awb_number]
 * @property {Object} [ewaybill_info]
 * @property {string} [store_invoice_updated_date]
 * @property {number} [shipment_weight]
 * @property {string} [due_date]
 * @property {Object} [bag_weight]
 * @property {Object} [external]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [dp_name]
 * @property {DebugInfo} [debug_info]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [awb_number]
 * @property {number} [shipment_volumetric_weight]
 * @property {boolean} [assign_dp_from_sb]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {number} weight
 * @property {string} [dp_id]
 * @property {string} [forward_affiliate_shipment_id]
 */

/**
 * @typedef PDFLinks
 * @property {string} label_type
 * @property {string} [po_invoice]
 * @property {string} [invoice_pos]
 * @property {string} [invoice]
 * @property {string} [label_a4]
 * @property {string} [invoice_a6]
 * @property {string} [label_a6]
 * @property {string} [label_pos]
 * @property {string} invoice_type
 * @property {string} [delivery_challan_a4]
 * @property {string} [label]
 * @property {string} [invoice_a4]
 * @property {string} [credit_note_url]
 * @property {string} [b2b]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_order_id
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_store_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} [company_affiliate_tag]
 * @property {ShipmentMeta} shipment_meta
 * @property {PDFLinks} [pdf_links]
 * @property {string} [affiliate_id]
 * @property {string} [ad_id]
 */

/**
 * @typedef OrderingStoreDetails
 * @property {string} country
 * @property {string} city
 * @property {string} code
 * @property {Object} meta
 * @property {string} address
 * @property {string} contact_person
 * @property {number} ordering_store_id
 * @property {string} store_name
 * @property {string} phone
 * @property {string} pincode
 * @property {string} state
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {string} [source]
 */

/**
 * @typedef InvoiceInfo
 * @property {string} [label_url]
 * @property {string} [updated_date]
 * @property {string} [credit_note_id]
 * @property {string} [store_invoice_id]
 * @property {string} [invoice_url]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [country]
 * @property {string} [eway_bill_id]
 * @property {string} [awb_no]
 * @property {string} [name]
 * @property {string} [pincode]
 * @property {string} [track_url]
 * @property {string} [gst_tag]
 * @property {number} [id]
 */

/**
 * @typedef UserDetailsData
 * @property {string} country
 * @property {string} [address1]
 * @property {string} city
 * @property {string} [area]
 * @property {string} address
 * @property {string} [landmark]
 * @property {string} name
 * @property {string} [email]
 * @property {string} pincode
 * @property {string} phone
 * @property {string} [address_type]
 * @property {string} state
 */

/**
 * @typedef Dimensions
 * @property {number} [length]
 * @property {number} [width]
 * @property {boolean} [is_default]
 * @property {number} [height]
 * @property {string} [unit]
 */

/**
 * @typedef Meta
 * @property {Dimensions} [dimension]
 */

/**
 * @typedef PhoneDetails
 * @property {number} [country_code]
 * @property {string} [mobile_number]
 */

/**
 * @typedef ContactDetails
 * @property {PhoneDetails[]} [phone]
 * @property {string[]} [emails]
 */

/**
 * @typedef CompanyDetails
 * @property {string} [company_gst]
 * @property {Object} [address]
 * @property {number} [company_id]
 * @property {string} [company_cin]
 * @property {string} [company_name]
 * @property {ContactDetails} [company_contact]
 */

/**
 * @typedef BagStatusHistory
 * @property {number} [bsh_id]
 * @property {string} [updated_at]
 * @property {Object[]} [reasons]
 * @property {string} status
 * @property {string} [app_display_name]
 * @property {string} [display_name]
 * @property {number} [delivery_partner_id]
 * @property {string} [shipment_id]
 * @property {number} [bag_id]
 * @property {boolean} [kafka_sync]
 * @property {string} [delivery_awb_number]
 * @property {string} [state_type]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [store_id]
 * @property {boolean} [forward]
 * @property {number} [state_id]
 * @property {string} [created_at]
 */

/**
 * @typedef FulfillingStore
 * @property {string} country
 * @property {string} city
 * @property {string} fulfillment_channel
 * @property {string} code
 * @property {Object} meta
 * @property {string} address
 * @property {string} contact_person
 * @property {string} store_name
 * @property {string} phone
 * @property {string} pincode
 * @property {string} state
 * @property {number} id
 */

/**
 * @typedef TrackingList
 * @property {string} status
 * @property {string} [time]
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} text
 */

/**
 * @typedef PlatformShipment
 * @property {OrderBags[]} [bags]
 * @property {ShipmentStatusData} [status]
 * @property {OrderDetailsData} [order]
 * @property {string} [journey_type]
 * @property {string} [priority_text]
 * @property {boolean} [lock_status]
 * @property {number} [fulfilment_priority]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [picked_date]
 * @property {Object} [coupon]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {UserDataInfo} [user]
 * @property {ShipmentPayments} [payments]
 * @property {string} [invoice_id]
 * @property {string} [user_agent]
 * @property {Object[]} [custom_meta]
 * @property {InvoiceInfo} [invoice]
 * @property {string} [operational_status]
 * @property {DPDetailsData} [dp_details]
 * @property {number} [total_bags]
 * @property {number} [shipment_quantity]
 * @property {Object} [delivery_slot]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [platform_logo]
 * @property {Meta} [meta]
 * @property {UserDetailsData} [delivery_details]
 * @property {boolean} [enable_dp_tracking]
 * @property {CompanyDetails} [company_details]
 * @property {string} [payment_mode]
 * @property {string} [shipment_status]
 * @property {string} shipment_id
 * @property {string} [packaging_type]
 * @property {Object} [payment_methods]
 * @property {Prices} [prices]
 * @property {GSTDetailsData} [gst_details]
 * @property {string[]} [shipment_images]
 * @property {string} [vertical]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [forward_shipment_id]
 * @property {number} [total_items]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BillingStaffDetails
 * @property {string} [employee_code]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {number} [staff_id]
 * @property {string} [user]
 */

/**
 * @typedef TransactionData
 * @property {string} [entity]
 * @property {string} [payment_id]
 * @property {string} [status]
 * @property {string} [terminal_id]
 * @property {string} [transaction_id]
 * @property {string} [unique_reference_number]
 * @property {string} [amount_paid]
 * @property {string} [currency]
 */

/**
 * @typedef PlatformUserDetails
 * @property {string} [platform_user_employee_code]
 * @property {string} [platform_user_last_name]
 * @property {string} [platform_user_first_name]
 * @property {string} [platform_user_id]
 */

/**
 * @typedef OrderMeta
 * @property {Object} [extra_meta]
 * @property {BillingStaffDetails} [billing_staff_details]
 * @property {Object} [staff]
 * @property {string} [company_logo]
 * @property {number} [ordering_store]
 * @property {string} [comment]
 * @property {string} [order_platform]
 * @property {string[]} [order_child_entities]
 * @property {string} [order_type]
 * @property {Object[]} [files]
 * @property {number} [cart_id]
 * @property {string} [payment_type]
 * @property {TransactionData} [transaction_data]
 * @property {Object[]} [order_tags]
 * @property {number} [mongo_cart_id]
 * @property {string} [currency_symbol]
 * @property {number} [employee_id]
 * @property {string} [customer_note]
 * @property {PlatformUserDetails} [platform_user_details]
 */

/**
 * @typedef TaxDetails
 * @property {string} [gstin]
 * @property {string} [pan_no]
 */

/**
 * @typedef OrderDict
 * @property {string} order_date
 * @property {OrderMeta} [meta]
 * @property {string} fynd_order_id
 * @property {Object} [payment_methods]
 * @property {Prices} [prices]
 * @property {TaxDetails} [tax_details]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 * @property {OrderDict} [order]
 */

/**
 * @typedef SubLane
 * @property {string} [value]
 * @property {string} [text]
 * @property {Object[]} [actions]
 * @property {number} [index]
 * @property {number} [total_items]
 */

/**
 * @typedef SuperLane
 * @property {number} [total_items]
 * @property {SubLane[]} [options]
 * @property {string} value
 * @property {string} text
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [value]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef PlatformOrderItems
 * @property {number} [order_value]
 * @property {string} [order_created_time]
 * @property {PlatformShipment[]} [shipments]
 * @property {number} [total_order_value]
 * @property {string} [payment_mode]
 * @property {string} [order_id]
 * @property {PlatformChannel} [channel]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {Object} [meta]
 * @property {UserDataInfo} [user_info]
 */

/**
 * @typedef OrderListingResponse
 * @property {Page} [page]
 * @property {string} [message]
 * @property {string} [lane]
 * @property {PlatformOrderItems[]} [items]
 * @property {number} [total_count]
 * @property {boolean} [success]
 */

/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */

/**
 * @typedef MetricsCount
 * @property {Options[]} [options]
 * @property {number} value
 * @property {string} key
 * @property {string} text
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [updated_at]
 * @property {string} [reason]
 * @property {string} [status]
 * @property {string} [last_location_recieved_at]
 * @property {string} [awb]
 * @property {string} [updated_time]
 * @property {string} [account_name]
 * @property {Object} [meta]
 * @property {string} [shipment_type]
 * @property {string} [raw_status]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
 */

/**
 * @typedef FiltersResponse
 * @property {Object[]} [advance]
 */

/**
 * @typedef Success
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OmsReports
 * @property {string} [status]
 * @property {string} [report_id]
 * @property {string} [display_name]
 * @property {string} [report_type]
 * @property {string} [report_requested_at]
 * @property {string} [report_created_at]
 * @property {string} [report_name]
 * @property {Object} [request_details]
 * @property {string} [s3_key]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [jio_code]
 * @property {string} [company_id]
 * @property {string} [item_id]
 * @property {string} [article_id]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [message]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {string} [trace_id]
 * @property {Object[]} [data]
 * @property {string} [identifier]
 * @property {boolean} [success]
 * @property {NestedErrorSchemaDataSet[]} [error]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} batch_id
 * @property {boolean} do_invoice_label_generated
 * @property {Object} [invoice]
 * @property {string} [company_id]
 * @property {string} [store_code]
 * @property {Object} [data]
 * @property {string} [store_id]
 * @property {string} [invoice_status]
 * @property {Object} [label]
 * @property {string} [store_name]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileUploadResponse
 * @property {string} [url]
 * @property {number} [expiry]
 */

/**
 * @typedef FileResponse
 * @property {string} [method]
 * @property {string} [file_path]
 * @property {string} [namespace]
 * @property {URL} [cdn]
 * @property {string} [operation]
 * @property {string[]} [tags]
 * @property {number} [size]
 * @property {string} [file_name]
 * @property {FileUploadResponse} [upload]
 * @property {string} [content_type]
 */

/**
 * @typedef bulkListingData
 * @property {string} [status]
 * @property {number} [total]
 * @property {string} [user_name]
 * @property {string[]} [processing_shipments]
 * @property {number} [store_id]
 * @property {string} [file_name]
 * @property {number} [failed]
 * @property {string} [batch_id]
 * @property {string} [store_code]
 * @property {string} [store_name]
 * @property {number} [successful]
 * @property {string} [uploaded_on]
 * @property {Object[]} [successful_shipments]
 * @property {number} [processing]
 * @property {Object[]} [failed_shipments]
 * @property {number} [company_id]
 * @property {string} [user_id]
 * @property {string} [excel_url]
 * @property {string} [id]
 */

/**
 * @typedef BulkListingPage
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {string} [type]
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {number} [current]
 */

/**
 * @typedef BulkListingResponse
 * @property {bulkListingData[]} [data]
 * @property {BulkListingPage} [page]
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */

/**
 * @typedef Reason
 * @property {QuestionSet[]} [question_set]
 * @property {string} [display_name]
 * @property {string[]} [qc_type]
 * @property {number} [id]
 */

/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {Reason[]} [reasons]
 * @property {boolean} [success]
 */

/**
 * @typedef BulkActionPayload
 * @property {string} url
 */

/**
 * @typedef BulkActionResponse
 * @property {boolean} [status]
 * @property {string} [message]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {number} [successful_shipments_count]
 * @property {string} [batch_id]
 * @property {number} [failed_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {string} [company_id]
 * @property {number} [processing_shipments_count]
 * @property {number} [total_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {boolean} [status]
 * @property {string} [uploaded_by]
 * @property {string} [message]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [user_id]
 * @property {string} [uploaded_on]
 * @property {string} [success]
 * @property {string[]} [error]
 * @property {string[]} [failed_records]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 */

/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {string} [unit]
 * @property {number} [shipping]
 */

/**
 * @typedef Article
 * @property {ReturnConfig} [return_config]
 * @property {string} uid
 * @property {boolean} [is_set]
 * @property {string} [code]
 * @property {Object} [esp_modified]
 * @property {Object} [child_details]
 * @property {Object} [raw_meta]
 * @property {string} size
 * @property {Object} [a_set]
 * @property {Dimensions} [dimensions]
 * @property {Weight} [weight]
 * @property {string} _id
 * @property {Identifier} identifiers
 * @property {string} seller_identifier
 */

/**
 * @typedef StoreAddress
 * @property {string} [address2]
 * @property {number} pincode
 * @property {string} created_at
 * @property {string} country
 * @property {string} [area]
 * @property {string} country_code
 * @property {string} [landmark]
 * @property {string} contact_person
 * @property {string} phone
 * @property {string} address_type
 * @property {string} city
 * @property {number} longitude
 * @property {string} [email]
 * @property {string} state
 * @property {string} updated_at
 * @property {string} address1
 * @property {number} latitude
 * @property {string} address_category
 * @property {string} [version]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [password]
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef Document
 * @property {string} [url]
 * @property {string} value
 * @property {string} legal_name
 * @property {string} ds_type
 * @property {boolean} verified
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [password]
 * @property {string} [username]
 * @property {boolean} enabled
 * @property {string} [user]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef StoreMeta
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {Object} [product_return_config]
 * @property {string} display_name
 * @property {string} [gst_number]
 * @property {string} stage
 * @property {Object} [additional_contact_details]
 * @property {Object} [ewaybill_portal_details]
 * @property {string[]} [notification_emails]
 * @property {StoreDocuments} [documents]
 * @property {Object[]} [timing]
 * @property {StoreGstCredentials} gst_credentials
 */

/**
 * @typedef Store
 * @property {number} [packaging_material_count]
 * @property {string} [address2]
 * @property {string} [mall_area]
 * @property {string} name
 * @property {StoreAddress} [store_address_json]
 * @property {string} pincode
 * @property {string} location_type
 * @property {string} created_at
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [store_active_from]
 * @property {string} country
 * @property {number} [parent_store_id]
 * @property {boolean} [is_active]
 * @property {string} contact_person
 * @property {string} [vat_no]
 * @property {string[]} [brand_store_tags]
 * @property {string} login_username
 * @property {StoreMeta} meta
 * @property {number} phone
 * @property {string} s_id
 * @property {number} [alohomora_user_id]
 * @property {string} city
 * @property {string} fulfillment_channel
 * @property {string} [order_integration_id]
 * @property {boolean} [is_archived]
 * @property {string} store_email
 * @property {number} longitude
 * @property {string} state
 * @property {string} [updated_at]
 * @property {string} address1
 * @property {string} [mall_name]
 * @property {Object} [brand_id]
 * @property {string} [code]
 * @property {number} company_id
 * @property {number} latitude
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef Attributes
 * @property {string} [marketer_address]
 * @property {string} [primary_material]
 * @property {string} [marketer_name]
 * @property {string} [name]
 * @property {string} [brand_name]
 * @property {string[]} [gender]
 * @property {string} [primary_color_hex]
 * @property {string} [primary_color]
 * @property {string} [essential]
 */

/**
 * @typedef Item
 * @property {number} item_id
 * @property {string} name
 * @property {number} [l1_category_id]
 * @property {string} size
 * @property {string} [webstore_product_url]
 * @property {number} [l2_category_id]
 * @property {string} [color]
 * @property {boolean} [can_return]
 * @property {number} [department_id]
 * @property {string[]} [l2_category]
 * @property {boolean} [can_cancel]
 * @property {string} [gender]
 * @property {Object} [meta]
 * @property {Attributes} attributes
 * @property {string} [branch_url]
 * @property {string} [l3_category_name]
 * @property {string[]} image
 * @property {string} brand
 * @property {string[]} [l1_category]
 * @property {string} slug_key
 * @property {number} brand_id
 * @property {string} [code]
 * @property {number} [l3_category]
 * @property {string} [last_updated_at]
 */

/**
 * @typedef B2BPODetails
 * @property {boolean} [partial_can_ret]
 * @property {number} [item_base_price]
 * @property {number} [po_line_amount]
 * @property {number} [po_tax_amount]
 * @property {string} [docker_number]
 * @property {number} [total_gst_percentage]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Brand
 * @property {number} [credit_note_expiry_days]
 * @property {boolean} [is_virtual_invoice]
 * @property {number} [created_on]
 * @property {number} [modified_on]
 * @property {string} [start_date]
 * @property {number} brand_id
 * @property {string} company
 * @property {boolean} [credit_note_allowed]
 * @property {string} [pickup_location]
 * @property {string} [script_last_ran]
 * @property {string} brand_name
 * @property {string} [invoice_prefix]
 * @property {string} [logo]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {number} [employee_discount]
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef BagGSTDetails
 * @property {number} brand_calculated_amount
 * @property {number} gst_tax_percentage
 * @property {number} cgst_tax_percentage
 * @property {number} sgst_tax_percentage
 * @property {number} gst_fee
 * @property {string} [gstin_code]
 * @property {number} igst_tax_percentage
 * @property {string} cgst_gst_fee
 * @property {boolean} [is_default_hsn_code]
 * @property {number} tax_collected_at_source
 * @property {string} sgst_gst_fee
 * @property {number} value_of_good
 * @property {string} hsn_code
 * @property {string} igst_gst_fee
 * @property {string} hsn_code_id
 * @property {string} gst_tag
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {BagReturnableCancelableStatus} status
 * @property {string} journey_type
 * @property {number} [line_number]
 * @property {Article} article
 * @property {number} b_id
 * @property {AffiliateDetails} [affiliate_details]
 * @property {number} [quantity]
 * @property {Store} [ordering_store]
 * @property {Object} [restore_promos]
 * @property {string} [seller_identifier]
 * @property {Object[]} [reasons]
 * @property {BagStatusHistory[]} bag_status
 * @property {ArticleDetails} [article_details]
 * @property {Item} item
 * @property {string} [operational_status]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {number} [no_of_bags_order]
 * @property {string} [b_type]
 * @property {number} [bag_update_time]
 * @property {BagMeta} [meta]
 * @property {Object} [parent_promo_bags]
 * @property {number[]} [original_bag_list]
 * @property {string} [display_name]
 * @property {string} [order_integration_id]
 * @property {string} [shipment_id]
 * @property {boolean} [restore_coupon]
 * @property {string[]} [tags]
 * @property {Brand} brand
 * @property {BagStatusHistory} current_status
 * @property {string} [identifier]
 * @property {string} [entity_type]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Prices} prices
 * @property {BagGSTDetails} gst_details
 * @property {BagStatusHistory} current_operational_status
 * @property {BagStatusHistory} [bag_status_history]
 * @property {Object[]} [applied_promos]
 * @property {Dates} [dates]
 * @property {Object} [qc_required]
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */

/**
 * @typedef Page1
 * @property {number} item_total
 * @property {string} page_type
 * @property {boolean} has_next
 * @property {number} size
 * @property {number} current
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {Page1} page
 */

/**
 * @typedef GeneratePosOrderReceiptResponse
 * @property {string} [invoice_receipt]
 * @property {string} [payment_receipt]
 * @property {boolean} [success]
 * @property {string} [order_id]
 */

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [error]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [shipment_id]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {string} [error_trace]
 * @property {string} message
 * @property {number} status
 */

/**
 * @typedef StoreReassign
 * @property {string} [set_id]
 * @property {string} [item_id]
 * @property {number} [bag_id]
 * @property {number} store_id
 * @property {string} [affiliate_id]
 * @property {string} [fynd_order_id]
 * @property {string} [affiliate_bag_id]
 * @property {number[]} [reason_ids]
 * @property {string} [mongo_article_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} [id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {Entities[]} entities
 * @property {string} entity_type
 * @property {string} action_type
 * @property {string} action
 */

/**
 * @typedef Bags
 * @property {number} [bag_id]
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef CheckResponse
 * @property {string} [status]
 * @property {boolean} [lock_status]
 * @property {boolean} [is_shipment_locked]
 * @property {Bags[]} [bags]
 * @property {OriginalFilter} [original_filter]
 * @property {string} [affiliate_id]
 * @property {boolean} [is_bag_locked]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [shipment_id]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [from_datetime]
 * @property {number} id
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} [platform_id]
 * @property {string} [to_datetime]
 * @property {string} [created_at]
 * @property {string} [title]
 * @property {string} [logo_url]
 * @property {string} [platform_name]
 */

/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */

/**
 * @typedef BaseResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef Click2CallResponse
 * @property {string} call_id
 * @property {boolean} status
 */

/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {number} [quantity]
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */

/**
 * @typedef EntityReasonData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */

/**
 * @typedef Products
 * @property {number} [quantity]
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef DataUpdates
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 */

/**
 * @typedef ShipmentsRequest
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 */

/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [status]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [task]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [force_transition]
 * @property {boolean} [lock_after_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [message]
 * @property {Object} [final_state]
 * @property {string} [exception]
 * @property {string} [identifier]
 * @property {string} [stack_trace]
 */

/**
 * @typedef StatuesResponse
 * @property {ShipmentsResponse[]} [shipments]
 */

/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponse[]} [statuses]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {number} quantity
 * @property {string} _id
 * @property {number} transfer_price
 * @property {Object} affiliate_meta
 * @property {number} price_marked
 * @property {number} company_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} item_id
 * @property {number} store_id
 * @property {number} amount_paid
 * @property {number} price_effective
 * @property {string} seller_identifier
 * @property {Object} identifier
 * @property {number} avl_qty
 * @property {string} hsn_code_id
 * @property {string} affiliate_store_id
 * @property {number} discount
 * @property {string} sku
 * @property {number} unit_price
 * @property {number} delivery_charge
 * @property {string} fynd_store_id
 * @property {string} modified_on
 * @property {string} item_size
 */

/**
 * @typedef OrderUser
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} state
 * @property {string} city
 * @property {string} [address2]
 * @property {string} [address1]
 * @property {number} mobile
 * @property {number} phone
 * @property {string} pincode
 * @property {string} country
 * @property {string} email
 */

/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */

/**
 * @typedef OrderPriority
 * @property {string} [fulfilment_priority_text]
 * @property {number} [fulfilment_priority]
 * @property {string} [affiliate_priority_code]
 */

/**
 * @typedef ArticleDetails1
 * @property {number} quantity
 * @property {string} _id
 * @property {Object} attributes
 * @property {number} brand_id
 * @property {Object} dimension
 * @property {Object} category
 * @property {Object} weight
 */

/**
 * @typedef ShipmentDetails
 * @property {Object} [meta]
 * @property {ArticleDetails1[]} articles
 * @property {string} affiliate_shipment_id
 * @property {number} fulfillment_id
 * @property {string} [box_type]
 * @property {number} [dp_id]
 * @property {number} shipments
 */

/**
 * @typedef LocationDetails
 * @property {ArticleDetails1[]} articles
 * @property {string} fulfillment_type
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentConfig
 * @property {string} action
 * @property {string} payment_mode
 * @property {string} source
 * @property {string} journey
 * @property {string} to_pincode
 * @property {ShipmentDetails[]} shipment
 * @property {string} identifier
 * @property {LocationDetails} [location_details]
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderInfo
 * @property {string} [coupon]
 * @property {string} payment_mode
 * @property {Object} [payment]
 * @property {AffiliateBag[]} bags
 * @property {number} cod_charges
 * @property {UserData} user
 * @property {number} delivery_charges
 * @property {OrderUser} shipping_address
 * @property {OrderUser} billing_address
 * @property {OrderPriority} [order_priority]
 * @property {number} order_value
 * @property {number} discount
 * @property {ShipmentData} [shipment]
 * @property {string} [affiliate_order_id]
 * @property {Object} items
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} secret
 * @property {string} name
 * @property {string} token
 * @property {string} updated_at
 * @property {string} id
 * @property {string} [description]
 * @property {string} created_at
 * @property {string} owner
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 */

/**
 * @typedef Affiliate
 * @property {string} id
 * @property {AffiliateConfig} [config]
 * @property {string} token
 */

/**
 * @typedef OrderConfig
 * @property {string} [bag_end_state]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {boolean} [create_user]
 * @property {string} [store_lookup]
 * @property {string} [article_lookup]
 * @property {Affiliate} affiliate
 */

/**
 * @typedef CreateOrderPayload
 * @property {string} affiliate_id
 * @property {OrderInfo} order_info
 * @property {OrderConfig} order_config
 */

/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id
 */

/**
 * @typedef DispatchManifest
 * @property {string} manifest_id
 */

/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ActionInfo
 * @property {number} id
 * @property {string} description
 * @property {string} display_text
 * @property {string} slug
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} [ticket_id]
 * @property {number} [bag_id]
 * @property {string} message
 * @property {string} createdat
 * @property {string} [l3_detail]
 * @property {string} [ticket_url]
 * @property {string} user
 * @property {string} [l2_detail]
 * @property {string} [l1_detail]
 * @property {string} type
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} activity_history
 */

/**
 * @typedef ErrorDetail
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef PostHistoryData
 * @property {string} message
 * @property {string} user_name
 */

/**
 * @typedef PostHistoryFilters
 * @property {string} [line_number]
 * @property {string} [identifier]
 * @property {string} shipment_id
 */

/**
 * @typedef PostActivityHistory
 * @property {PostHistoryData} data
 * @property {PostHistoryFilters[]} filters
 */

/**
 * @typedef PostHistoryDict
 * @property {PostActivityHistory} activity_history
 */

/**
 * @typedef PostShipmentHistory
 * @property {PostHistoryDict[]} [activity_history]
 */

/**
 * @typedef SmsDataPayload
 * @property {string} order_id
 * @property {string} payment_mode
 * @property {string} country_code
 * @property {string} message
 * @property {string} customer_name
 * @property {number} amount_paid
 * @property {string} brand_name
 * @property {number} phone_number
 * @property {number} shipment_id
 */

/**
 * @typedef SendSmsPayload
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
 * @property {string} slug
 */

/**
 * @typedef Meta1
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */

/**
 * @typedef ShipmentDetail
 * @property {Meta1} meta
 * @property {string} [remarks]
 * @property {string} [status]
 * @property {number} id
 * @property {number[]} [bag_list]
 * @property {string} [shipment_id]
 */

/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 */

/**
 * @typedef OrderStatusData
 * @property {string[]} [errors]
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {OrderDetails} order_details
 */

/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {string} order_type
 * @property {string[]} [shipment_ids]
 * @property {number} dp_id
 * @property {string} qc_required
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string[]} [errors]
 * @property {string} success
 */

/**
 * @typedef Tax
 * @property {Object} amount
 * @property {string} name
 * @property {Object[]} [breakup]
 * @property {number} rate
 */

/**
 * @typedef Charge
 * @property {string} [code]
 * @property {Object} amount
 * @property {string} name
 * @property {Tax} [tax]
 * @property {string} type
 */

/**
 * @typedef ShippingInfo
 * @property {string} [alternate_email]
 * @property {string} [country_code]
 * @property {string} [state_code]
 * @property {string} [landmark]
 * @property {string} country
 * @property {string} primary_mobile_number
 * @property {string} [house_no]
 * @property {string} [floor_no]
 * @property {string} city
 * @property {string} [middle_name]
 * @property {Object} [geo_location]
 * @property {string} [title]
 * @property {string} [alternate_mobile_number]
 * @property {string} pincode
 * @property {string} first_name
 * @property {string} [last_name]
 * @property {string} [customer_code]
 * @property {string} [address2]
 * @property {Object[]} [slot]
 * @property {string} [address_type]
 * @property {string} [gender]
 * @property {string} state
 * @property {string} [shipping_type]
 * @property {string} [external_customer_code]
 * @property {string} primary_email
 * @property {string} address1
 */

/**
 * @typedef PaymentMethod
 * @property {Object} [meta]
 * @property {string} collect_by
 * @property {string} name
 * @property {number} amount
 * @property {Object} [transaction_data]
 * @property {string} refund_by
 * @property {string} mode
 */

/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */

/**
 * @typedef BillingInfo
 * @property {string} [alternate_email]
 * @property {string} [country_code]
 * @property {string} [state_code]
 * @property {string} country
 * @property {string} primary_mobile_number
 * @property {string} [house_no]
 * @property {string} [floor_no]
 * @property {string} city
 * @property {string} [middle_name]
 * @property {string} [alternate_mobile_number]
 * @property {string} [title]
 * @property {string} pincode
 * @property {string} first_name
 * @property {string} [last_name]
 * @property {string} [customer_code]
 * @property {string} [address2]
 * @property {string} [gender]
 * @property {string} state
 * @property {string} [external_customer_code]
 * @property {string} primary_email
 * @property {string} address1
 */

/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [dispatch_after_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [confirm_by_date]
 * @property {string} [pack_by_date]
 * @property {string} [dispatch_by_date]
 * @property {Object} [dp_pickup_slot]
 */

/**
 * @typedef LineItem
 * @property {number} [quantity]
 * @property {string} [custom_messasge]
 * @property {Object} [meta]
 * @property {Charge[]} [charges]
 * @property {string} [external_line_id]
 * @property {string} seller_identifier
 */

/**
 * @typedef Shipment
 * @property {Object} [meta]
 * @property {ProcessingDates} [processing_dates]
 * @property {number} [priority]
 * @property {LineItem[]} line_items
 * @property {number} location_id
 * @property {string} [external_shipment_id]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Object} [meta]
 * @property {Charge[]} [charges]
 * @property {string} [external_order_id]
 * @property {string} [external_creation_date]
 * @property {ShippingInfo} shipping_info
 * @property {PaymentInfo} payment_info
 * @property {BillingInfo} billing_info
 * @property {TaxInfo} [tax_info]
 * @property {Object} [currency_info]
 * @property {Shipment[]} shipments
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [meta]
 * @property {number} status
 * @property {string} [code]
 * @property {string} message
 * @property {string} [exception]
 * @property {Object} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [mode]
 * @property {string} [refund_by]
 * @property {string} [collect_by]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 * @property {PaymentMethods[]} [payment_methods]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef CreateChannelConfig
 * @property {string[]} [lock_states]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {boolean} [location_reassignment]
 * @property {DpConfiguration} [dp_configuration]
 * @property {Object} [logo_url]
 * @property {string} [shipment_assignment]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_upserted]
 * @property {boolean} [is_inserted]
 */

/**
 * @typedef UploadConsent
 * @property {string} consent_url
 * @property {string} manifest_id
 */

/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */

/**
 * @typedef ResponseDetail
 * @property {boolean} [success]
 * @property {string[]} [message]
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef OrderStatus
 * @property {string} start_date
 * @property {string} end_date
 * @property {number} mobile
 * @property {FyndOrderIdList[]} [order_details]
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {string[]} [words]
 * @property {SearchKeywordResult} result
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 */

/**
 * @typedef GetSearchWordsData
 * @property {string} [uid]
 * @property {string[]} [words]
 * @property {Object} [result]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AutocompletePageAction
 * @property {Object} [query]
 * @property {Object} [params]
 * @property {string} [url]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */

/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteResult
 * @property {Object} [_custom_json]
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {AutocompleteResult[]} [results]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string} [uid]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object[]} [results]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} max_quantity
 * @property {number} product_uid
 * @property {number} min_quantity
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 */

/**
 * @typedef ProductBundleRequest
 * @property {string} slug
 * @property {ProductBundleItem[]} products
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} choice
 * @property {string[]} [page_visibility]
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [created_by]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {string} slug
 * @property {ProductBundleItem[]} products
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} choice
 * @property {string[]} [page_visibility]
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [created_by]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} slug
 * @property {ProductBundleItem[]} products
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} choice
 * @property {string[]} [page_visibility]
 * @property {string} name
 * @property {boolean} is_active
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef LimitedProductData
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string} [country_of_origin]
 * @property {Object} [identifier]
 * @property {string} [short_description]
 * @property {string} [item_code]
 * @property {Object} [price]
 * @property {string} [name]
 * @property {Object} [attributes]
 * @property {string[]} [sizes]
 * @property {number} [quantity]
 * @property {string[]} [images]
 */

/**
 * @typedef Price
 * @property {number} [max_marked]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 * @property {number} [max_effective]
 * @property {string} [currency]
 */

/**
 * @typedef Size
 * @property {string} [value]
 * @property {string} [display]
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 */

/**
 * @typedef GetProducts
 * @property {number} [max_quantity]
 * @property {number} [product_uid]
 * @property {LimitedProductData} [product_details]
 * @property {Price} [price]
 * @property {Size[]} [sizes]
 * @property {number} [min_quantity]
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string} [slug]
 * @property {GetProducts[]} [products]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [choice]
 * @property {string[]} [page_visibility]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} title
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [description]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {boolean} [active]
 * @property {string} name
 * @property {string} [image]
 * @property {Guide} [guide]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {Object} [modified_by]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [title]
 * @property {number} [company_id]
 * @property {string} [tag]
 * @property {number} [brand_id]
 * @property {string} [name]
 * @property {boolean} [active]
 * @property {Object} [guide]
 * @property {string} [created_on]
 * @property {string} [subtitle]
 * @property {string} [id]
 * @property {Object} [created_by]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json]
 * @property {Object} [alt_text]
 * @property {MetaFields[]} [_custom_meta]
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {ApplicationItemMOQ} [moq]
 */

/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef SEOData
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef MOQData
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {Object} [alt_text]
 * @property {SEOData} [seo]
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 * @property {boolean} [is_cod]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} data
 * @property {Object[]} [values]
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} [slug]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [unit]
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} display_type
 * @property {string} [key]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string} slug
 * @property {number} priority
 * @property {string[]} [template_slugs]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {boolean} is_default
 * @property {string} app_id
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef PageResponseType
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} next
 * @property {number} total_count
 */

/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} default_key
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} app_id
 * @property {string} key
 */

/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */

/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */

/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [key]
 * @property {string} [display]
 */

/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string} [key]
 * @property {string[]} [filter_types]
 * @property {string} [display]
 * @property {Object[]} [units]
 */

/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingSortResponse} sort
 * @property {MetaDataListingFilterResponse} filter
 */

/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [detail]
 * @property {Object} [compare]
 * @property {Object} [similar]
 * @property {Object} [variant]
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} [title]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [subtitle]
 * @property {boolean} is_active
 * @property {string} key
 * @property {ProductSize} [size]
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} display_type
 * @property {string} key
 * @property {ProductSize} size
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductSimilar} similar
 * @property {ConfigurationProductVariant} variant
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {string} key
 */

/**
 * @typedef ConfigurationListingSort
 * @property {string} default_key
 * @property {ConfigurationListingSortConfig[]} [config]
 */

/**
 * @typedef ConfigurationBucketPoints
 * @property {string} [display]
 * @property {number} [start]
 * @property {number} [end]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {Object[]} [map_values]
 * @property {string} [value]
 * @property {string} [sort]
 * @property {Object} [map]
 * @property {string} [condition]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {number} priority
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} type
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {string} key
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingSort} sort
 * @property {ConfigurationListingFilter} filter
 */

/**
 * @typedef AppConfiguration
 * @property {string} [type]
 * @property {ConfigurationProduct} [product]
 * @property {ConfigurationListing} [listing]
 * @property {string} [config_id]
 * @property {string} [created_on]
 * @property {string} app_id
 * @property {Object} [created_by]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} config_type
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {string} [type]
 * @property {ConfigurationProduct} [product]
 * @property {ConfigurationListing} [listing]
 * @property {string} [config_id]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {string} app_id
 * @property {Object} [created_by]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} config_type
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */

/**
 * @typedef EntityConfiguration
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} [config_id]
 * @property {string} [id]
 * @property {string} app_id
 * @property {string} config_type
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductSortOn
 * @property {string} [value]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} [logo]
 * @property {string} name
 * @property {string} display
 * @property {string[]} [operators]
 * @property {string} [kind]
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [max]
 * @property {number} [count]
 * @property {boolean} is_selected
 * @property {string} [currency_code]
 * @property {string} [query_format]
 * @property {number} [min]
 * @property {number} [selected_max]
 * @property {string} [display_format]
 * @property {Object} value
 * @property {number} [selected_min]
 * @property {string} [currency_symbol]
 * @property {string} display
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} operators
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */

/**
 * @typedef UserInfo
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [email]
 */

/**
 * @typedef CollectionQuery
 * @property {Object[]} value
 * @property {string} attribute
 * @property {string} op
 */

/**
 * @typedef SeoDetail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {NextSchedule[]} [next_schedule]
 * @property {number} [duration]
 */

/**
 * @typedef CollectionImage
 * @property {string} aspect_ratio
 * @property {string} url
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef CreateCollection
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {CollectionBadge} [badge]
 * @property {boolean} [is_visible]
 * @property {UserInfo} [created_by]
 * @property {boolean} [allow_sort]
 * @property {CollectionQuery[]} [query]
 * @property {string} app_id
 * @property {boolean} [allow_facets]
 * @property {number} [priority]
 * @property {string} [sort_on]
 * @property {string} [description]
 * @property {Object} [_locale_language]
 * @property {string} slug
 * @property {string} name
 * @property {SeoDetail} [seo]
 * @property {Object} [meta]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionImage} logo
 * @property {boolean} [published]
 * @property {string} type
 * @property {string[]} [tags]
 * @property {CollectionBanner} banners
 * @property {UserInfo} [modified_by]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef BannerImage
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {Object} [cron]
 * @property {boolean} [is_active]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {boolean} [allow_sort]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_facets]
 * @property {number} [priority]
 * @property {string} [description]
 * @property {string} [sort_on]
 * @property {string[]} [tag]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {Object} [meta]
 * @property {Object} [_schedule]
 * @property {BannerImage} [logo]
 * @property {string} [type]
 * @property {ImageUrls} [banners]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef Media1
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {string} url
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {Object} [cron]
 * @property {boolean} [is_active]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {boolean} [allow_sort]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_facets]
 * @property {number} [priority]
 * @property {string} [description]
 * @property {string[]} [tag]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {Object} [meta]
 * @property {Object} [_schedule]
 * @property {string} [uid]
 * @property {Media1} [logo]
 * @property {Action} [action]
 * @property {string} [type]
 * @property {ImageUrls} [banners]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 * @property {CollectionListingFilter} [filters]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {number} [priority]
 * @property {string} [slug]
 * @property {Object} [cron]
 * @property {Media1} [logo]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {Object} [badge]
 * @property {Object} [meta]
 * @property {string} [app_id]
 * @property {boolean} [allow_sort]
 * @property {ImageUrls} [banners]
 * @property {string[]} [tag]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef UpdateCollection
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {CollectionBadge} [badge]
 * @property {boolean} [is_visible]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {string} [description]
 * @property {string} [sort_on]
 * @property {Object} [_locale_language]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SeoDetail} [seo]
 * @property {Object} [meta]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionImage} [logo]
 * @property {boolean} [published]
 * @property {string} [type]
 * @property {string[]} [tags]
 * @property {CollectionBanner} [banners]
 * @property {UserInfo} [modified_by]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */

/**
 * @typedef CollectionItemRequest
 * @property {CollectionQuery[]} [query]
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {string} [type]
 */

/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */

/**
 * @typedef ProductBrand
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Media1} [logo]
 * @property {string} [name]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [key]
 * @property {string} [value]
 * @property {string} [type]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */

/**
 * @typedef Price1
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {number} [min]
 * @property {string} [currency_code]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */

/**
 * @typedef ProductListingDetail
 * @property {Object} [teaser_tag]
 * @property {string} [short_description]
 * @property {string} [item_type]
 * @property {boolean} [has_variant]
 * @property {string} [product_online_date]
 * @property {Object} [attributes]
 * @property {string[]} [similars]
 * @property {string} [discount]
 * @property {ProductBrand} [brand]
 * @property {string} [description]
 * @property {Object} [promo_meta]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} slug
 * @property {boolean} [sellable]
 * @property {number} [rating_count]
 * @property {ProductListingPrice} [price]
 * @property {string} [name]
 * @property {string} [image_nature]
 * @property {number} [rating]
 * @property {number} [uid]
 * @property {string} [type]
 * @property {string} [color]
 * @property {string} [item_code]
 * @property {Media1[]} [medias]
 * @property {string[]} [highlights]
 * @property {string[]} [tryouts]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} [page]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_articles]
 * @property {number} [article_freshness]
 * @property {string} [name]
 * @property {number} [available_articles]
 * @property {number} [total_sizes]
 * @property {number} [available_sizes]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [sellable_count]
 * @property {number} [out_of_stock_count]
 */

/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CatalogInsightItem} [item]
 */

/**
 * @typedef CrossSellingData
 * @property {number} [products]
 * @property {number} [articles]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CrossSellingData} [data]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef OptInPostRequest
 * @property {boolean} [enabled]
 * @property {number[]} [store_ids]
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {string} opt_level
 * @property {string} [platform]
 */

/**
 * @typedef CompanyOptIn
 * @property {boolean} enabled
 * @property {number[]} store_ids
 * @property {number[]} brand_ids
 * @property {number} company_id
 * @property {string} opt_level
 * @property {number} created_on
 * @property {Object} [created_by]
 * @property {number} modified_on
 * @property {string} platform
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */

/**
 * @typedef OptinCompanyDetail
 * @property {number} [uid]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {string} [name]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {number} [brand_id]
 * @property {number} [total_article]
 * @property {string} [brand_name]
 * @property {number} [company_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [brand]
 * @property {string} [company]
 * @property {number} [store]
 */

/**
 * @typedef StoreDetail
 * @property {number} [uid]
 * @property {Object[]} [additional_contacts]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [company_id]
 * @property {string} [store_code]
 * @property {string} [name]
 * @property {string} [created_on]
 * @property {Object} [address]
 * @property {Object} [manager]
 * @property {string} [modified_on]
 * @property {Object} [timing]
 * @property {Object[]} [documents]
 */

/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef AttributeMaster
 * @property {string} type
 * @property {string[]} [allowed_values]
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [multi]
 * @property {boolean} [mandatory]
 * @property {string} [format]
 */

/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */

/**
 * @typedef AttributeMasterMeta
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 * @property {boolean} [enriched]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {number} [priority]
 * @property {boolean} indexing
 * @property {string[]} [depends_on]
 */

/**
 * @typedef GenderDetail
 * @property {string} [slug]
 * @property {AttributeMasterDetails} [details]
 * @property {AttributeMaster} [schema]
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [id]
 * @property {AttributeMasterMeta} [meta]
 * @property {boolean} [is_nested]
 * @property {string[]} [departments]
 * @property {AttributeMasterFilter} [filters]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PTErrorResponse
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {string} [message]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {number} [uid]
 * @property {Object} [platforms]
 * @property {string} [slug]
 * @property {string} logo
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {boolean} [is_active]
 * @property {number} priority_order
 * @property {string[]} [synonyms]
 * @property {string} [_cls]
 * @property {string[]} [tags]
 */

/**
 * @typedef DepartmentCreateResponse
 * @property {number} uid
 * @property {string} message
 */

/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UserSerializer
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [_id]
 * @property {string} [username]
 */

/**
 * @typedef GetDepartment
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {string} [item_type]
 * @property {number} [page_size]
 * @property {string} [search]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {number} [priority_order]
 * @property {string[]} [synonyms]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [modified_on]
 * @property {number} [page_no]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {string} [message]
 */

/**
 * @typedef UserDetail
 * @property {boolean} [super_user]
 * @property {string} [contact]
 * @property {string} user_id
 * @property {string} username
 */

/**
 * @typedef DepartmentModel
 * @property {number} [uid]
 * @property {Object} [slug]
 * @property {UserDetail} [modified_by]
 * @property {string} logo
 * @property {Object} [_custom_json]
 * @property {Object} [_id]
 * @property {Object} name
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {UserDetail} [verified_by]
 * @property {number} priority_order
 * @property {Object[]} [synonyms]
 * @property {UserDetail} [created_by]
 * @property {Object} [_cls]
 * @property {string} modified_on
 * @property {string} [verified_on]
 */

/**
 * @typedef ProductTemplate
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} is_physical
 * @property {string} [description]
 * @property {string} [modified_on]
 * @property {boolean} is_expirable
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {string[]} [attributes]
 * @property {string} [created_on]
 * @property {string[]} [categories]
 * @property {Object} [created_by]
 * @property {string[]} [departments]
 * @property {string} [tag]
 * @property {Object} [modified_by]
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Properties
 * @property {Object} [teaser_tag]
 * @property {Object} [variants]
 * @property {Object} [short_description]
 * @property {Object} [item_type]
 * @property {Object} [command]
 * @property {Object} [is_active]
 * @property {Object} [return_config]
 * @property {Object} [is_dependent]
 * @property {Object} [country_of_origin]
 * @property {Object} [product_group_tag]
 * @property {Object} [description]
 * @property {Object} [sizes]
 * @property {Object} [tags]
 * @property {Object} [slug]
 * @property {Object} [trader]
 * @property {Object} [product_publish]
 * @property {Object} [category_slug]
 * @property {Object} [name]
 * @property {Object} [multi_size]
 * @property {Object} [custom_order]
 * @property {Object} [brand_uid]
 * @property {Object} [no_of_boxes]
 * @property {Object} [trader_type]
 * @property {Object} [currency]
 * @property {Object} [item_code]
 * @property {Object} [hsn_code]
 * @property {Object} [size_guide]
 * @property {Object} [highlights]
 * @property {Object} [media]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [description]
 * @property {Object} [definitions]
 * @property {string[]} [required]
 * @property {Properties} [properties]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} is_physical
 * @property {string} [description]
 * @property {boolean} is_expirable
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {string[]} [attributes]
 * @property {string} [id]
 * @property {string[]} [categories]
 * @property {string[]} [departments]
 * @property {string} [tag]
 */

/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */

/**
 * @typedef InventoryValidationResponse
 * @property {Object} [data]
 * @property {string} [message]
 */

/**
 * @typedef HSNData
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */

/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [brand]
 * @property {string[]} [templates]
 * @property {string} [type]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {Object} [template_tags]
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [task_id]
 * @property {string} [completed_on]
 * @property {string} [id]
 * @property {VerifiedBy} [created_by]
 * @property {string} [url]
 * @property {number} [seller_id]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {boolean} [multivalue]
 * @property {Object[]} [data]
 */

/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [google]
 */

/**
 * @typedef Hierarchy
 * @property {number} l2
 * @property {number} l1
 * @property {number} department
 */

/**
 * @typedef Media2
 * @property {string} portrait
 * @property {string} logo
 * @property {string} landscape
 */

/**
 * @typedef CategoryRequestBody
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {string} name
 * @property {boolean} is_active
 * @property {string[]} [synonyms]
 * @property {CategoryMapping} [marketplaces]
 * @property {number[]} departments
 * @property {Hierarchy[]} [hierarchy]
 * @property {Media2} [media]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
 */

/**
 * @typedef Category
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {string} name
 * @property {boolean} is_active
 * @property {string[]} [synonyms]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {Object} [created_by]
 * @property {CategoryMapping} [marketplaces]
 * @property {number[]} departments
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {Hierarchy[]} [hierarchy]
 * @property {Media2} [media]
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 */

/**
 * @typedef Trader
 * @property {Object} name
 * @property {string[]} [address]
 * @property {string} [type]
 */

/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {number} [manufacturing_time]
 * @property {boolean} [is_custom_order]
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {TeaserTag} [teaser_tag]
 * @property {Object} [variants]
 * @property {string} [short_description]
 * @property {string} item_type
 * @property {Object} [_custom_json]
 * @property {Object} [variant_media]
 * @property {boolean} [is_active]
 * @property {ReturnConfig} return_config
 * @property {boolean} [is_dependent]
 * @property {Object} attributes
 * @property {string} [requester]
 * @property {number[]} departments
 * @property {Object} [variant_group]
 * @property {string} country_of_origin
 * @property {string[]} [product_group_tag]
 * @property {number} company_id
 * @property {string} [description]
 * @property {Object[]} sizes
 * @property {TaxIdentifier} tax_identifier
 * @property {boolean} [is_set]
 * @property {boolean} [is_image_less_product]
 * @property {string[]} [tags]
 * @property {string} slug
 * @property {Trader[]} trader
 * @property {ProductPublish} [product_publish]
 * @property {string} category_slug
 * @property {string} name
 * @property {boolean} [multi_size]
 * @property {CustomOrder} [custom_order]
 * @property {number} brand_uid
 * @property {string} currency
 * @property {string} template_tag
 * @property {number} [uid]
 * @property {number} [no_of_boxes]
 * @property {string} [bulk_job_id]
 * @property {string} [action]
 * @property {string} item_code
 * @property {NetQuantity} [net_quantity]
 * @property {string} [size_guide]
 * @property {Object} [change_request_id]
 * @property {string[]} [highlights]
 * @property {Media1[]} [media]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef Logo
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */

/**
 * @typedef NetQuantityResponse
 * @property {number} [value]
 * @property {string} [unit]
 */

/**
 * @typedef Image
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef Product
 * @property {Object} [teaser_tag]
 * @property {Object} [variants]
 * @property {string} [short_description]
 * @property {string} [item_type]
 * @property {Object} [_custom_json]
 * @property {string} [primary_color]
 * @property {boolean} [is_active]
 * @property {Object} [variant_media]
 * @property {boolean} [is_dependent]
 * @property {ReturnConfigResponse} [return_config]
 * @property {Object} [attributes]
 * @property {Object} [created_by]
 * @property {number[]} [departments]
 * @property {string[]} [l3_mapping]
 * @property {string} [pending]
 * @property {string} [country_of_origin]
 * @property {Brand} [brand]
 * @property {Object} [variant_group]
 * @property {string[]} [product_group_tag]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {Object[]} [sizes]
 * @property {Object[]} [all_sizes]
 * @property {Object} [tax_identifier]
 * @property {string} [id]
 * @property {boolean} [is_set]
 * @property {boolean} [is_image_less_product]
 * @property {string} [verified_on]
 * @property {Object} [moq]
 * @property {string[]} [tags]
 * @property {string} [slug]
 * @property {number} [category_uid]
 * @property {Object[]} [trader]
 * @property {ProductPublished} [product_publish]
 * @property {boolean} [is_physical]
 * @property {string} [category_slug]
 * @property {string} [name]
 * @property {number[]} [all_company_ids]
 * @property {string} [image_nature]
 * @property {boolean} [multi_size]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [stage]
 * @property {Object} [custom_order]
 * @property {number} [brand_uid]
 * @property {string} [modified_on]
 * @property {string} [currency]
 * @property {string} [template_tag]
 * @property {number} [uid]
 * @property {Object} [category]
 * @property {number} [no_of_boxes]
 * @property {string} [color]
 * @property {string[]} [all_identifiers]
 * @property {string} [item_code]
 * @property {boolean} [is_expirable]
 * @property {string} [hsn_code]
 * @property {string} [size_guide]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string} [created_on]
 * @property {string[]} [highlights]
 * @property {Object} [modified_by]
 * @property {Image[]} [images]
 * @property {Media1[]} [media]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductVariants
 * @property {number} [uid]
 * @property {number} [category_uid]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {number} [brand_uid]
 * @property {Media1[]} [media]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariants[]} [variants]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {string} [suggestion]
 * @property {string} [unit]
 * @property {Object} [created_by]
 * @property {string[]} departments
 * @property {AttributeMaster} schema
 * @property {string} [description]
 * @property {boolean} [is_nested]
 * @property {AttributeMasterFilter} filters
 * @property {string} slug
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [name]
 * @property {Object} [synonyms]
 * @property {string} [modified_on]
 * @property {boolean} [variant]
 * @property {AttributeMasterDetails} details
 * @property {string} [logo]
 * @property {string} [raw_key]
 * @property {string} [created_on]
 * @property {string[]} [tags]
 * @property {Object} [modified_by]
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef SingleProductResponse
 * @property {Product} [data]
 */

/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_value
 * @property {string} gtin_type
 * @property {boolean} [primary]
 */

/**
 * @typedef AllSizes
 * @property {number} item_length
 * @property {number} item_weight
 * @property {Object} size
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {number} item_height
 * @property {string} item_dimensions_unit_of_measure
 * @property {Object} item_weight_unit_of_measure
 * @property {number} item_width
 */

/**
 * @typedef ListALLSizes
 * @property {AllSizes[]} [all_sizes]
 */

/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */

/**
 * @typedef UserInfo1
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [email]
 */

/**
 * @typedef BulkJob
 * @property {string} [template_tag]
 * @property {number} [total]
 * @property {number} [failed]
 * @property {number} [succeed]
 * @property {number} company_id
 * @property {string} [file_path]
 * @property {string} [tracking_url]
 * @property {Object[]} [failed_records]
 * @property {string} [custom_template_tag]
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {UserInfo1} [created_by]
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {string} [modified_on]
 * @property {UserInfo1} [modified_by]
 * @property {Object[]} [cancelled_records]
 */

/**
 * @typedef BulkResponse
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {UserInfo1} [created_by]
 * @property {string} [modified_on]
 * @property {string} batch_id
 * @property {UserInfo1} [modified_by]
 */

/**
 * @typedef UserDetail1
 * @property {string} [full_name]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductBulkRequest
 * @property {string} [template_tag]
 * @property {number} [total]
 * @property {string} [file_path]
 * @property {number} [company_id]
 * @property {number} [succeed]
 * @property {string[]} [failed_records]
 * @property {ProductTemplate} [template]
 * @property {string[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {string} [stage]
 * @property {UserDetail1} [created_by]
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {UserDetail1} [modified_by]
 * @property {number} [failed]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkProductRequest
 * @property {string} template_tag
 * @property {Object[]} data
 * @property {string} batch_id
 * @property {number} company_id
 */

/**
 * @typedef NestedTags
 * @property {string[]} [tags]
 */

/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */

/**
 * @typedef ProductBulkAssets
 * @property {Object} user
 * @property {number} [company_id]
 * @property {string} url
 */

/**
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef Items
 * @property {number} [total]
 * @property {number} [failed]
 * @property {string} [file_path]
 * @property {number} [succeed]
 * @property {number} [retry]
 * @property {number} [company_id]
 * @property {string} [tracking_url]
 * @property {string[]} [failed_records]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {UserCommon} [created_by]
 * @property {string} [stage]
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {UserCommon} [modified_by]
 * @property {string[]} [cancelled_records]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [item_id]
 * @property {number} [company_id]
 * @property {string} [size]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */

/**
 * @typedef GTIN
 * @property {Object} gtin_value
 * @property {string} gtin_type
 * @property {boolean} [primary]
 */

/**
 * @typedef SetSize
 * @property {number} pieces
 * @property {string} size
 */

/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */

/**
 * @typedef InventorySet
 * @property {string} [name]
 * @property {SizeDistribution} size_distribution
 * @property {number} [quantity]
 */

/**
 * @typedef InvSize
 * @property {number} [item_length]
 * @property {number} [item_weight]
 * @property {GTIN[]} identifiers
 * @property {number} [item_width]
 * @property {number} [item_height]
 * @property {string} store_code
 * @property {InventorySet} [set]
 * @property {number} [price]
 * @property {number} [price_transfer]
 * @property {string} [expiration_date]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} price_effective
 * @property {number} quantity
 * @property {boolean} [is_set]
 * @property {string} currency
 * @property {Object} size
 */

/**
 * @typedef ItemQuery
 * @property {number} [uid]
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 */

/**
 * @typedef InventoryRequest
 * @property {InvSize[]} sizes
 * @property {ItemQuery} item
 * @property {number} company_id
 */

/**
 * @typedef InventoryResponse
 * @property {string} [uid]
 * @property {string} [size]
 * @property {Object} [identifiers]
 * @property {number} [price]
 * @property {Object} [store]
 * @property {number} [price_transfer]
 * @property {number} [item_id]
 * @property {string} [seller_identifier]
 * @property {number} [price_effective]
 * @property {number} [quantity]
 * @property {string} [inventory_updated_on]
 * @property {number} [sellable_quantity]
 * @property {string} [currency]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef Trader1
 * @property {string} name
 * @property {string[]} address
 * @property {string} type
 */

/**
 * @typedef ManufacturerResponse
 * @property {boolean} is_default
 * @property {string} address
 * @property {string} name
 */

/**
 * @typedef PriceMeta
 * @property {number} marked
 * @property {string} [updated_at]
 * @property {string} currency
 * @property {number} effective
 * @property {number} transfer
 * @property {Object} [tp_notes]
 */

/**
 * @typedef DimensionResponse
 * @property {number} length
 * @property {string} unit
 * @property {number} width
 * @property {boolean} is_default
 * @property {number} height
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [order_committed]
 */

/**
 * @typedef WeightResponse
 * @property {boolean} is_default
 * @property {number} shipping
 * @property {string} unit
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef InventorySellerResponse
 * @property {Object} [fynd_meta]
 * @property {boolean} fragile
 * @property {Object} [_custom_json]
 * @property {StoreMeta} store
 * @property {string} fynd_article_code
 * @property {number} item_id
 * @property {ReturnConfig1} [return_config]
 * @property {Object} [raw_meta]
 * @property {boolean} [is_active]
 * @property {UserSerializer} [created_by]
 * @property {string} country_of_origin
 * @property {BrandMeta} brand
 * @property {InventorySet} [set]
 * @property {string} [added_on_store]
 * @property {Object} [tax_identifier]
 * @property {boolean} [is_set]
 * @property {string} seller_identifier
 * @property {boolean} [track_inventory]
 * @property {Object} identifier
 * @property {Trader1[]} [trader]
 * @property {ManufacturerResponse} manufacturer
 * @property {PriceMeta} price
 * @property {string} fynd_item_code
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {Object} [meta]
 * @property {string} [stage]
 * @property {DimensionResponse} dimension
 * @property {Quantities} [quantities]
 * @property {string} uid
 * @property {WeightResponse} weight
 * @property {CompanyMeta} company
 * @property {number} total_quantity
 * @property {string[]} [tags]
 * @property {UserSerializer} [modified_by]
 * @property {string} size
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {number} [uid]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {string} [name]
 */

/**
 * @typedef ReturnConfig2
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef Trader2
 * @property {string} [name]
 * @property {string[]} [address]
 * @property {string} [type]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {boolean} [is_default]
 * @property {string} [address]
 * @property {string} [name]
 */

/**
 * @typedef PriceArticle
 * @property {number} [marked]
 * @property {string} [currency]
 * @property {number} [effective]
 * @property {number} [transfer]
 * @property {Object} [tp_notes]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [length]
 * @property {string} [unit]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [sellable]
 * @property {Quantity} [damaged]
 * @property {Quantity} [not_available]
 * @property {Quantity} [order_committed]
 */

/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef GetInventories
 * @property {ArticleStoreResponse} [store]
 * @property {number} [item_id]
 * @property {ReturnConfig2} [return_config]
 * @property {UserSerializer} [created_by]
 * @property {string} [country_of_origin]
 * @property {BrandMeta1} [brand]
 * @property {DateMeta} [date_meta]
 * @property {Object} [tax_identifier]
 * @property {string} [id]
 * @property {boolean} [is_set]
 * @property {string} [seller_identifier]
 * @property {string} [inventory_updated_on]
 * @property {boolean} [track_inventory]
 * @property {Object} [identifier]
 * @property {Trader2[]} [trader]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {PriceArticle} [price]
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {string} [stage]
 * @property {DimensionResponse1} [dimension]
 * @property {QuantitiesArticle} [quantities]
 * @property {Object} [platforms]
 * @property {string} [uid]
 * @property {WeightResponse1} [weight]
 * @property {CompanyMeta1} [company]
 * @property {number} [total_quantity]
 * @property {string[]} [tags]
 * @property {UserSerializer} [modified_by]
 * @property {string} [size]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {number} [total]
 * @property {number} [failed]
 * @property {string} [file_path]
 * @property {number} [company_id]
 * @property {number} [succeed]
 * @property {string[]} [failed_records]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {number} [cancelled]
 * @property {Object} [created_by]
 * @property {string} [stage]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string[]} [cancelled_records]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {number} [price_marked]
 * @property {string} store_code
 * @property {string[]} [tags]
 * @property {number} [price]
 * @property {string} [expiration_date]
 * @property {number} [total_quantity]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [trace_id]
 * @property {number} [price_effective]
 * @property {number} [quantity]
 * @property {string} seller_identifier
 * @property {string} [currency]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {InventoryJobPayload[]} sizes
 * @property {string} batch_id
 * @property {number} company_id
 * @property {Object} [user]
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [brand]
 * @property {number[]} [store]
 * @property {string} [type]
 */

/**
 * @typedef InventoryExportResponse
 * @property {Object} [request_params]
 * @property {string} [trigger_on]
 * @property {string} [status]
 * @property {string} task_id
 * @property {number} seller_id
 */

/**
 * @typedef InventoryExportJob
 * @property {Object} [request_params]
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {string} [completed_on]
 * @property {number} seller_id
 * @property {string} [url]
 */

/**
 * @typedef FilerList
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalues]
 */

/**
 * @typedef InventoryPayload
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
 * @property {number} store_id
 * @property {number} [total_quantity]
 * @property {string} [trace_id]
 * @property {number} [price_effective]
 * @property {string[]} [tags]
 * @property {string} seller_identifier
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {InventoryPayload[]} [payload]
 * @property {number} company_id
 * @property {Object} [meta]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
 */

/**
 * @typedef InventoryResponseItem
 * @property {InventoryFailedReason} [reason]
 * @property {InventoryPayload} [data]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {string} message
 * @property {InventoryResponseItem[]} [items]
 */

/**
 * @typedef HsnUpsert
 * @property {number} [uid]
 * @property {boolean} [tax_on_esp]
 * @property {number} company_id
 * @property {string} hs2_code
 * @property {boolean} tax_on_mrp
 * @property {boolean} [is_active]
 * @property {string} hsn_code
 * @property {number} [threshold2]
 * @property {number} tax1
 * @property {number} [tax2]
 * @property {number} threshold1
 */

/**
 * @typedef HsnCodesObject
 * @property {boolean} [tax_on_esp]
 * @property {number} [company_id]
 * @property {string} [hs2_code]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [hsn_code]
 * @property {number} [threshold2]
 * @property {string} [id]
 * @property {number} [tax1]
 * @property {number} [tax2]
 * @property {number} [threshold1]
 * @property {string} [modified_on]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef PageResponse
 * @property {string} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {boolean} [has_previous]
 * @property {number} [size]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */

/**
 * @typedef BulkHsnResponse
 * @property {boolean} [success]
 */

/**
 * @typedef TaxSlab
 * @property {number} threshold
 * @property {number} [cess]
 * @property {string} effective_date
 * @property {number} rate
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} reporting_hsn
 * @property {Object} [modified_by]
 * @property {string} type
 * @property {string} description
 * @property {string} hsn_code
 * @property {TaxSlab[]} taxes
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} [modified_on]
 * @property {string} country_code
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef ArticleQuery
 * @property {number} item_id
 * @property {number[]} [ignored_stores]
 * @property {string} size
 */

/**
 * @typedef AssignStoreArticle
 * @property {ArticleAssignment} [article_assignment]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {ArticleQuery} [query]
 * @property {string} [group_id]
 */

/**
 * @typedef AssignStore
 * @property {number[]} [store_ids]
 * @property {number} [company_id]
 * @property {string} [channel_identifier]
 * @property {string} [channel_type]
 * @property {string} app_id
 * @property {AssignStoreArticle[]} articles
 * @property {string} pincode
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef StoreAssignResponse
 * @property {string} [uid]
 * @property {number} [price_marked]
 * @property {number} [company_id]
 * @property {boolean} status
 * @property {ArticleAssignment1} article_assignment
 * @property {number} quantity
 * @property {string} [_id]
 * @property {number} item_id
 * @property {number} [store_id]
 * @property {string} [s_city]
 * @property {Object} [meta]
 * @property {number} [index]
 * @property {number} [price_effective]
 * @property {Object[]} [strategy_wise_listing]
 * @property {number} [store_pincode]
 * @property {string} [group_id]
 * @property {string} size
 */

/**
 * @typedef BrandItem
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {string[]} [departments]
 * @property {ImageUrls} [banners]
 * @property {string} [discount]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef Department
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {number} [priority_order]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
 */

/**
 * @typedef ThirdLevelChild
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Object[]} [childs]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef SecondLevelChild
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {ThirdLevelChild[]} [childs]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef Child
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {SecondLevelChild[]} [childs]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef CategoryItems
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Child[]} [childs]
 * @property {Action} [action]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} [department]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentIdentifier[]} [departments]
 * @property {DepartmentCategoryTree[]} [data]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} page
 * @property {ProductFilters[]} [filters]
 * @property {Object} [operators]
 */

/**
 * @typedef ProductDetail
 * @property {Object} [teaser_tag]
 * @property {string} [short_description]
 * @property {string} [item_type]
 * @property {boolean} [has_variant]
 * @property {string} [product_online_date]
 * @property {Object} [attributes]
 * @property {string[]} [similars]
 * @property {ProductBrand} [brand]
 * @property {string} [description]
 * @property {Object} [promo_meta]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} slug
 * @property {number} [rating_count]
 * @property {string} [name]
 * @property {string} [image_nature]
 * @property {number} [rating]
 * @property {number} [uid]
 * @property {string} [type]
 * @property {string} [color]
 * @property {string} [item_code]
 * @property {Media1[]} [medias]
 * @property {string[]} [highlights]
 * @property {string[]} [tryouts]
 */

/**
 * @typedef InventoryPage
 * @property {string} type
 * @property {boolean} [has_next]
 * @property {string} [next_id]
 * @property {number} item_total
 * @property {boolean} [has_previous]
 */

/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [closing]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [country]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {number} [latitude]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {number} [pincode]
 * @property {number} [longitude]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef GetCompanySerializer
 * @property {number} [uid]
 * @property {string} [business_type]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {string} [created_on]
 * @property {UserSerializer2} [verified_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer2} [created_by]
 * @property {string} [stage]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {string} [company_type]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [email]
 * @property {string} [name]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef GetLocationSerializer
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [store_type]
 * @property {Object} [_custom_json]
 * @property {Object} [warnings]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer1} [created_by]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Document[]} [documents]
 * @property {string} display_name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} phone_number
 * @property {string} [verified_on]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} name
 * @property {UserSerializer1} [verified_by]
 * @property {GetAddressSerializer} address
 * @property {string} [stage]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} code
 * @property {GetCompanySerializer} [company]
 * @property {string} [created_on]
 * @property {LocationManagerSerializer} [manager]
 * @property {LocationIntegrationType} [integration_type]
 * @property {UserSerializer1} [modified_by]
 */

/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ApplicationBrandJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationCategoryJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationDepartment
 * @property {number} uid
 * @property {string} [logo]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {string} app_id
 */

/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {ApplicationDepartment[]} [items]
 * @property {Page} page
 */

/**
 * @typedef ApplicationDepartmentJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */

/**
 * @typedef Website
 * @property {string} [url]
 */

/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {number} [rate]
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} [name]
 * @property {Object} [warnings]
 * @property {UserSerializer} [verified_by]
 * @property {Document[]} [documents]
 * @property {BusinessDetails} [business_details]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {UserSerializer} [created_by]
 * @property {string} company_type
 * @property {string} [modified_on]
 * @property {string[]} [notification_emails]
 * @property {string} [created_on]
 * @property {number} uid
 * @property {string} [mode]
 * @property {boolean} [franchise_enabled]
 * @property {string} [verified_on]
 * @property {string} business_type
 * @property {string} [stage]
 * @property {string} [business_info]
 * @property {ContactDetails} [contact_details]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {UserSerializer} [modified_by]
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {number} [rate]
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} country
 * @property {number} pincode
 * @property {string} [landmark]
 * @property {string} city
 * @property {string} [address2]
 * @property {string} address_type
 * @property {string} address1
 * @property {string} [country_code]
 * @property {number} latitude
 * @property {string} state
 * @property {number} longitude
 */

/**
 * @typedef UpdateCompany
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {boolean} [franchise_enabled]
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {string} [business_info]
 * @property {string} [company_type]
 * @property {Object} [warnings]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {Document[]} [documents]
 * @property {string[]} [notification_emails]
 * @property {BusinessDetails} [business_details]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string} [reject_reason]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [product]
 * @property {string} [stage]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [store]
 * @property {number} [uid]
 * @property {DocumentsObj} [brand]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string} name
 * @property {Object} [warnings]
 * @property {Object} [_locale_language]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [synonyms]
 * @property {string} [reject_reason]
 * @property {UserSerializer} [created_by]
 * @property {string} [slug_key]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {string} [mode]
 * @property {string} [verified_on]
 * @property {string} [stage]
 * @property {string} [logo]
 * @property {UserSerializer} [modified_by]
 * @property {Object} [_custom_json]
 * @property {string} [description]
 * @property {BrandBannerSerializer} [banner]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string[]} [synonyms]
 * @property {string} [brand_tier]
 * @property {string} name
 * @property {Object} [_locale_language]
 * @property {string} logo
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [description]
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef CompanySerializer
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {CompanyDetails} [details]
 * @property {string} [name]
 * @property {string} business_type
 * @property {string} company_type
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {string} [modified_on]
 * @property {string[]} [market_channels]
 * @property {UserSerializer} [modified_by]
 * @property {string[]} [notification_emails]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [reject_reason]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {Object} [warnings]
 * @property {CompanySerializer} [company]
 * @property {UserSerializer} [verified_by]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {GetBrandResponseSerializer} [brand]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {Page} [page]
 * @property {CompanyBrandSerializer[]} [items]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number} company
 * @property {number[]} brands
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} start_date
 * @property {string} end_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {string} title
 * @property {HolidayDateSerializer} date
 * @property {string} holiday_type
 */

/**
 * @typedef AddressSerializer
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {string} [country_code]
 * @property {number} latitude
 * @property {string} [address_type]
 * @property {number} longitude
 */

/**
 * @typedef LocationSerializer
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} name
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} display_name
 * @property {number} company
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} [stage]
 * @property {string} code
 * @property {Document[]} [documents]
 * @property {Object} [warnings]
 * @property {string[]} [notification_emails]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {AddressSerializer} address
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [store_type]
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef CDN
 * @property {string} url
 * @property {string} [absolute_url]
 * @property {string} [relative_url]
 */

/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */

/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */

/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */

/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 */

/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [timestamp]
 * @property {number} [delay]
 */

/**
 * @typedef CopyFileTask
 * @property {string} id
 * @property {string} name
 * @property {BulkRequest} data
 * @property {Opts} opts
 * @property {number} progress
 * @property {number} delay
 * @property {number} timestamp
 * @property {number} attempts_made
 * @property {string[]} [stacktrace]
 * @property {number} finished_on
 * @property {number} processed_on
 */

/**
 * @typedef BulkUploadResponse
 * @property {string} tracking_url
 * @property {CopyFileTask} task
 */

/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */

/**
 * @typedef Destination
 * @property {string} namespace
 * @property {string} rewrite
 * @property {string} [basepath]
 */

/**
 * @typedef BulkRequest
 * @property {string[]} urls
 * @property {Destination} destination
 * @property {ReqConfiguration} [configuration]
 */

/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */

/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */

/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */

/**
 * @typedef DbRecord
 * @property {boolean} success
 * @property {string[]} tags
 * @property {string} _id
 * @property {string} file_name
 * @property {string} [operation]
 * @property {string} namespace
 * @property {string} content_type
 * @property {string} file_path
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string} created_on
 * @property {string} modified_on
 */

/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */

/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */

/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */

/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */

/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */

/**
 * @typedef ShortLinkReq
 * @property {string} title
 * @property {string} url
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [short]
 * @property {string} [hash]
 */

/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ErrorRes
 * @property {string} [message]
 */

/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [name]
 * @property {GStore[]} [stores]
 * @property {GStore[]} [gstores]
 */

/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [code]
 * @property {string} [name]
 * @property {StoreData} [data]
 */

/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef ResponseEnvelopeListSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail[]} [items]
 * @property {SlingshotConfigurationDetail[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SlingshotConfigurationDetail
 * @property {SlingshotIntegration} [integration]
 * @property {GCompany[]} [companies]
 */

/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Metum[]} [meta]
 */

/**
 * @typedef StoreData
 * @property {string} [location_id]
 */

/**
 * @typedef KafkaMetaModel
 * @property {string} [job_type]
 * @property {number} [batch_id]
 * @property {string} [action]
 * @property {string[]} [trace]
 * @property {string} [created_on]
 * @property {number} [created_timestamp]
 */

/**
 * @typedef SuppressStoreModel
 * @property {number[]} [stores]
 */

/**
 * @typedef SuppressStorePayload
 * @property {SuppressStoreModel[]} [payload]
 * @property {KafkaMetaModel} [meta]
 */

/**
 * @typedef KafkaResponse
 * @property {number} [offset]
 * @property {number} [partition]
 */

/**
 * @typedef ResponseEnvelopeKafkaResponse
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {KafkaResponse} [items]
 * @property {KafkaResponse} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */

/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */

/**
 * @typedef JobConfigDTO
 * @property {string} integration
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */

/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */

/**
 * @typedef ResponseEnvelopeString
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef AWSS3config
 * @property {string} [bucket]
 * @property {string} [region]
 * @property {string} [dir]
 * @property {string} [access_key]
 * @property {string} [secret_key]
 * @property {string} [local_file_path]
 * @property {string} [archive_path]
 * @property {boolean} [archive]
 * @property {boolean} [delete]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 * @property {string} [file_regex]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef ArchiveConfig
 * @property {boolean} [delete]
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 */

/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */

/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 * @property {number} [delete_quantity_threshold]
 */

/**
 * @typedef DBConfig
 * @property {string} [vendor]
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [dbname]
 * @property {string} [query]
 * @property {boolean} [procedure]
 * @property {string} [driver_class]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
 */

/**
 * @typedef DBConnectionProfile
 * @property {string} [inventory]
 */

/**
 * @typedef DBParamConfig
 * @property {Object} [params]
 */

/**
 * @typedef DefaultHeadersDTO
 * @property {PropBeanDTO} [store]
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 */

/**
 * @typedef DocMappingConfig
 * @property {Object} [properties]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {string} [unwind_field]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef EmailConfig
 * @property {string} [recepient]
 * @property {string} [host]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {boolean} [read_from_content]
 * @property {boolean} [filter_based_on_recepients]
 * @property {string} [pcol]
 * @property {string} [subject_line_regex]
 * @property {string} [sender_address]
 * @property {string} [local_dir]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {boolean} [password_protected]
 * @property {string} [zip_format]
 * @property {boolean} [attachment_mandate]
 * @property {boolean} [filter_files_after_extraction]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_unread_mails]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {Object} [properties]
 */

/**
 * @typedef FTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {string} [zip_file_regex]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef FileConfig
 * @property {string} [delimiter]
 * @property {string} [charset]
 * @property {Object} [properties]
 * @property {boolean} [file_has_header]
 * @property {number} [header_index]
 * @property {string[]} [header_array]
 * @property {number} [data_start_index]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {number} [junk_data_threshold_count]
 * @property {string} [file_type]
 * @property {boolean} [line_validity_check]
 * @property {string[]} [sheet_names]
 * @property {boolean} [read_all_sheets]
 * @property {string} [quote_char]
 * @property {string} [escape_char]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef GoogleSpreadSheetConfig
 * @property {string} [range]
 * @property {string} [sheet_id]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef HttpConfig
 * @property {string} [hosturl]
 * @property {string} [username]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [http_method]
 * @property {string} [request_payload]
 * @property {string} [local_path]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string} [job_code]
 * @property {string} [task_type]
 * @property {number} [sync_delay]
 * @property {string} [cron_expression]
 * @property {StoreFilter} [store_filter]
 * @property {ProcessConfig} [process_config]
 * @property {StoreConfig[]} [store_config]
 * @property {Object} [properties]
 * @property {boolean} [immediate_first_run]
 * @property {boolean} [disable]
 * @property {string[]} [dependent_job_codes]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string[]} [tax_identifiers]
 * @property {string} [priority]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {Object} [params]
 * @property {Object} [open_tags]
 * @property {number} [delete_quantity_threshold]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {string[]} [aggregator_types]
 * @property {string} [integration_type]
 * @property {number} [min_price]
 * @property {Audit} [audit]
 * @property {number} [version]
 * @property {string} [alias]
 */

/**
 * @typedef JobConfigRawDTO
 * @property {string} integration
 * @property {string} company_name
 * @property {number} company_id
 * @property {JobConfig} [data]
 */

/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */

/**
 * @typedef LocalFileConfig
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [working_dir]
 * @property {boolean} [unzip]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef MongoDocConfig
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object[]} [aggregate_pipeline]
 * @property {boolean} [skip_save]
 */

/**
 * @typedef OAuthConfig
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [interval]
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [token]
 * @property {string} [token_secret]
 * @property {string} [rest_url]
 * @property {string} [rest_base_url]
 * @property {string} [function_name]
 */

/**
 * @typedef ProcessConfig
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {AWSS3config} [aws_s3_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {FTPConfig} [ftp_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {TaskStepConfig} [task_step_config]
 * @property {HttpConfig} [http_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 */

/**
 * @typedef PropBeanConfig
 * @property {boolean} [required]
 * @property {Object} [mapping]
 * @property {boolean} [optional]
 * @property {Send} [send]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef PropBeanDTO
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SFTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [private_key_path]
 * @property {boolean} [strict_host_key_checking]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {boolean} [password_protected]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef Send
 * @property {boolean} [raw]
 * @property {boolean} [processed]
 */

/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {string} [storeid]
 * @property {string} [store_alias]
 * @property {string} [store_file_regex]
 * @property {string} [store_file_name]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 */

/**
 * @typedef StoreFilter
 * @property {string[]} [include_tags]
 * @property {string[]} [exclude_tags]
 * @property {Object} [query]
 */

/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */

/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */

/**
 * @typedef TaskStepConfig
 * @property {TaskConfig[]} [task_configs]
 * @property {number[]} [task_config_ids]
 * @property {number[]} [task_config_group_ids]
 */

/**
 * @typedef JobStepsDTO
 * @property {string} [step_name]
 * @property {string} [type]
 * @property {number} [step_execution_time]
 * @property {number} [start_count]
 * @property {number} [end_count]
 * @property {number} [deleted_count]
 * @property {string} [processed_start_time]
 * @property {string} [processed_at]
 */

/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {JobStepsDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobHistoryDto
 * @property {number} [total_added_count]
 * @property {number} [total_updated_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_initial_count]
 * @property {number} [job_id]
 * @property {string} [status]
 * @property {string} [job_code]
 * @property {string} [processed_on]
 * @property {string[]} [filename]
 * @property {string} [error_type]
 * @property {string} [message]
 */

/**
 * @typedef JobMetricsDto
 * @property {string} [job_code]
 * @property {string} [is_run_more_than_usual]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_success_count]
 * @property {number} [total_failure_count]
 * @property {number} [total_warning_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_job_runs]
 */

/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {JobMetricsDto} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobConfigListDTO
 * @property {string} [code]
 * @property {string} [alias]
 * @property {string} [modified_by]
 * @property {string} [created_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [type]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {JobConfigListDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ApplicationInventory
 * @property {AppInventoryConfig} [inventory]
 * @property {AuthenticationConfig} [authentication]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {AppOrderConfig} [order]
 * @property {AppLogisticsConfig} [logistics]
 * @property {string} [business]
 * @property {boolean} [comms_enabled]
 * @property {string[]} [platforms]
 * @property {string} [_id]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [modified_by]
 */

/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryStore} [store]
 * @property {InventoryCategory} [category]
 * @property {InventoryPrice} [price]
 * @property {InventoryDiscount} [discount]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [franchise_enabled]
 * @property {Object[]} [exclude_category]
 * @property {string[]} [image]
 * @property {Object[]} [company_store]
 */

/**
 * @typedef InventoryBrand
 * @property {string} [criteria]
 * @property {Object[]} [brands]
 */

/**
 * @typedef InventoryStore
 * @property {string} [criteria]
 * @property {Object[]} [stores]
 * @property {AppStoreRules} [rules]
 */

/**
 * @typedef AppStoreRules
 * @property {number[]} [companies]
 * @property {Object[]} [brands]
 */

/**
 * @typedef InventoryCategory
 * @property {string} [criteria]
 * @property {Object[]} [categories]
 */

/**
 * @typedef InventoryPrice
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef InventoryDiscount
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AuthenticationConfig
 * @property {boolean} [required]
 * @property {string} [provider]
 */

/**
 * @typedef ArticleAssignmentConfig
 * @property {ArticleAssignmentRules} [rules]
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */

/**
 * @typedef StorePriority
 * @property {boolean} [enabled]
 * @property {Object[]} [storetype_order]
 */

/**
 * @typedef AppCartConfig
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {boolean} [revenue_engine_coupon]
 */

/**
 * @typedef DeliveryCharges
 * @property {boolean} [enabled]
 * @property {Charges} [charges]
 */

/**
 * @typedef Charges
 * @property {number} [threshold]
 * @property {number} [charges]
 */

/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {Methods} [methods]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {boolean} [enabled]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 */

/**
 * @typedef CallbackUrl
 * @property {string} [app]
 * @property {string} [web]
 */

/**
 * @typedef Methods
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [wl]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 */

/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled]
 */

/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled]
 * @property {boolean} [force_reassignment]
 * @property {string} [message]
 */

/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [serviceability_check]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 */

/**
 * @typedef AppInventoryPartialUpdate
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {boolean} [comms_enabled]
 */

/**
 * @typedef BrandCompanyInfo
 * @property {string} [company_name]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanyByBrandsRequest
 * @property {number} brands
 * @property {string} [search_text]
 */

/**
 * @typedef CompanyByBrandsResponse
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef StoreByBrandsRequest
 * @property {number} [company_id]
 * @property {number} brands
 * @property {string} [search_text]
 */

/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BrandStoreInfo
 * @property {string} [store_name]
 * @property {number} [store_id]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {OptedStoreAddress} [store_address]
 * @property {OptedCompany} [company]
 */

/**
 * @typedef CompanyBrandInfo
 * @property {string} [name]
 * @property {number} [value]
 * @property {string} [brand_logo_url]
 * @property {string} [brand_banner_url]
 * @property {string} [brand_banner_portrait_url]
 */

/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */

/**
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {AppInventory} [configuration]
 * @property {AppDomain} [domain]
 */

/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */

/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [package_name]
 */

/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {boolean} [is_active]
 */

/**
 * @typedef BuildVersionHistory
 * @property {BuildVersion} [versions]
 * @property {string} [latest_available_version_name]
 */

/**
 * @typedef BuildVersion
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [build_status]
 * @property {string} [version_name]
 * @property {number} [version_code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id]
 * @property {string[]} [supported_currency]
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef DefaultCurrency
 * @property {string} [ref]
 * @property {string} [code]
 */

/**
 * @typedef CurrencyConfig
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */

/**
 * @typedef DomainAdd
 * @property {string} [name]
 */

/**
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */

/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */

/**
 * @typedef UpdateDomain
 * @property {string} [_id]
 */

/**
 * @typedef UpdateDomainTypeRequest
 * @property {UpdateDomain} [domain]
 * @property {string} [action]
 */

/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url]
 */

/**
 * @typedef DomainStatus
 * @property {string} [display]
 * @property {boolean} [status]
 */

/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected]
 * @property {DomainStatus[]} [status]
 */

/**
 * @typedef DomainSuggestionsRequest
 * @property {string} [domain_url]
 * @property {boolean} [custom]
 */

/**
 * @typedef DomainSuggestion
 * @property {string} name
 * @property {boolean} [unsupported]
 * @property {boolean} is_available
 * @property {number} [price]
 * @property {string} [currency]
 */

/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains]
 */

/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef IntegrationOptIn
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */

/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {StoreValidator} [store]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 */

/**
 * @typedef CompanyValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef JsonSchema
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [tooltip]
 */

/**
 * @typedef StoreValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef InventoryValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef OrderValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef IntegrationMeta
 * @property {boolean} [is_public]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef Integration
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {Object} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */

/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */

/**
 * @typedef IntegrationLevel
 * @property {boolean} [opted]
 * @property {Object[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {Object} [data]
 */

/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */

/**
 * @typedef OptedStoreIntegration
 * @property {boolean} [other_opted]
 * @property {IntegrationOptIn} [other_integration]
 * @property {OtherEntity} [other_entity]
 */

/**
 * @typedef OtherEntity
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {OtherEntityData} [data]
 * @property {Object[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value]
 */

/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */

/**
 * @typedef App
 * @property {string} [company_id]
 * @property {string} [channel_type]
 * @property {ApplicationAuth} [auth]
 * @property {string} [name]
 * @property {string} [desc]
 */

/**
 * @typedef AppInventory
 * @property {InventoryBrandRule} [brand]
 * @property {InventoryStoreRule} [store]
 * @property {string[]} [image]
 * @property {boolean} [franchise_enabled]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryArticleAssignment} [article_assignment]
 */

/**
 * @typedef AppDomain
 * @property {string} [name]
 */

/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryCompanies
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 */

/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryStores
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [company_id]
 */

/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores]
 * @property {number[]} [deployed_stores]
 * @property {string} [q]
 */

/**
 * @typedef DeploymentMeta
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 */

/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */

/**
 * @typedef OtherSellerCompany
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef OtherSellerApplication
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OtherSellerCompany} [company]
 * @property {string} [opt_type]
 */

/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptedApplicationResponse
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OptedCompany} [company]
 * @property {OptedInventory} [opted_inventory]
 * @property {OptOutInventory} [opt_out_inventory]
 */

/**
 * @typedef OptedCompany
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef OptedInventory
 * @property {OptType} [opt_type]
 * @property {Object} [items]
 */

/**
 * @typedef OptType
 * @property {string} [key]
 * @property {string} [display]
 */

/**
 * @typedef OptedStore
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {OptedStoreAddress} [address]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [company_id]
 */

/**
 * @typedef OptOutInventory
 * @property {number[]} store
 * @property {number[]} company
 */

/**
 * @typedef TokenResponse
 * @property {Tokens} [tokens]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Moengage} [moengage]
 * @property {Segment} [segment]
 * @property {Gtm} [gtm]
 * @property {Freshchat} [freshchat]
 * @property {Safetynet} [safetynet]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 */

/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef Credentials
 * @property {Ios} [ios]
 * @property {Android} [android]
 * @property {string} [project_id]
 * @property {string} [gcm_sender_id]
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Ios
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Android
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Moengage
 * @property {MoengageCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef MoengageCredentials
 * @property {string} [app_id]
 */

/**
 * @typedef Segment
 * @property {SegmentCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SegmentCredentials
 * @property {string} [write_key]
 */

/**
 * @typedef Gtm
 * @property {GtmCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef GtmCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef Freshchat
 * @property {FreshchatCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef FreshchatCredentials
 * @property {string} [app_id]
 * @property {string} [app_key]
 * @property {string} [web_token]
 */

/**
 * @typedef Safetynet
 * @property {SafetynetCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SafetynetCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */

/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key]
 */

/**
 * @typedef GoogleMap
 * @property {GoogleMapCredentials} [credentials]
 */

/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */

/**
 * @typedef Credit
 * @property {boolean} [enabled]
 */

/**
 * @typedef Debit
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 * @property {string} [strategy_channel]
 */

/**
 * @typedef ProductDetailFeature
 * @property {string[]} [similar]
 * @property {boolean} [seller_selection]
 * @property {boolean} [update_product_meta]
 * @property {boolean} [request_product]
 */

/**
 * @typedef LaunchPage
 * @property {string} [page_type]
 * @property {Object} [params]
 * @property {Object} [query]
 */

/**
 * @typedef LandingPageFeature
 * @property {LaunchPage} [launch_page]
 * @property {boolean} [continue_as_guest]
 * @property {string} [login_btn_text]
 * @property {boolean} [show_domain_textbox]
 * @property {boolean} [show_register_btn]
 */

/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address]
 */

/**
 * @typedef AppFeature
 * @property {ProductDetailFeature} [product_detail]
 * @property {LandingPageFeature} [landing_page]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {HomePageFeature} [home_page]
 * @property {CommonFeature} [common]
 * @property {CartFeature} [cart]
 * @property {QrFeature} [qr]
 * @property {PcrFeature} [pcr]
 * @property {OrderFeature} [order]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing]
 */

/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {ListingPriceFeature} [listing_price]
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 */

/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility]
 */

/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled]
 * @property {string} [type]
 */

/**
 * @typedef ListingPriceFeature
 * @property {string} [value]
 */

/**
 * @typedef CurrencyFeature
 * @property {string[]} [value]
 * @property {string} [type]
 * @property {string} [default_currency]
 */

/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef CartFeature
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {boolean} [google_map]
 * @property {boolean} [revenue_engine_coupon]
 */

/**
 * @typedef QrFeature
 * @property {boolean} [application]
 * @property {boolean} [products]
 * @property {boolean} [collections]
 */

/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection]
 */

/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again]
 */

/**
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */

/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */

/**
 * @typedef UnhandledError
 * @property {string} [message]
 */

/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message]
 */

/**
 * @typedef SuccessMessageResponse
 * @property {string} [message]
 */

/**
 * @typedef InventoryBrandRule
 * @property {string} [criteria]
 * @property {number[]} [brands]
 */

/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [companies]
 * @property {number[]} [brands]
 */

/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria]
 * @property {StoreCriteriaRule[]} [rules]
 * @property {number[]} [stores]
 */

/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */

/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled]
 * @property {string[]} [storetype_order]
 */

/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */

/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRule} [rules]
 */

/**
 * @typedef CompanyAboutAddress
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [address_type]
 */

/**
 * @typedef UserEmail
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 */

/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {number} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links} [links]
 * @property {string} [copyright_text]
 * @property {string} [_id]
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef InformationAddress
 * @property {string} [loc]
 * @property {string[]} [address_line]
 * @property {InformationPhone} [phone]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 */

/**
 * @typedef InformationPhone
 * @property {string} [code]
 * @property {string} [number]
 */

/**
 * @typedef InformationSupport
 * @property {string[]} [phone]
 * @property {string[]} [email]
 * @property {string} [timing]
 */

/**
 * @typedef SocialLinks
 * @property {FacebookLink} [facebook]
 * @property {InstagramLink} [instagram]
 * @property {TwitterLink} [twitter]
 * @property {PinterestLink} [pinterest]
 * @property {GooglePlusLink} [google_plus]
 * @property {YoutubeLink} [youtube]
 * @property {LinkedInLink} [linked_in]
 * @property {VimeoLink} [vimeo]
 * @property {BlogLink} [blog_link]
 */

/**
 * @typedef FacebookLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef InstagramLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef TwitterLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef PinterestLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef GooglePlusLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef YoutubeLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef LinkedInLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef VimeoLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef BlogLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef Links
 * @property {string} [title]
 * @property {string} [link]
 */

/**
 * @typedef BusinessHighlights
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [sub_title]
 */

/**
 * @typedef ApplicationDetail
 * @property {string} name
 * @property {string} description
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {SecureUrl} favicon
 * @property {SecureUrl} banner
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id]
 */

/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */

/**
 * @typedef AppCurrencyResponse
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */

/**
 * @typedef StoreLatLong
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */

/**
 * @typedef OptedStoreAddress
 * @property {string} [state]
 * @property {string} [address1]
 * @property {StoreLatLong} [lat_long]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [city]
 */

/**
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [pincode]
 * @property {string} [code]
 */

/**
 * @typedef OrderingStores
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {number} [__v]
 */

/**
 * @typedef OrderingStoresResponse
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */

/**
 * @typedef State
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 * @property {boolean} [is_archived]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef Rule
 * @property {number} [value]
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [key]
 * @property {number} [discount_qty]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef CouponSchedule
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [start]
 * @property {string} [cron]
 * @property {string} [end]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [auto]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [remove]
 * @property {DisplayMetaDict} [apply]
 */

/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [types]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [codes]
 * @property {string[]} [networks]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [app]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef Restrictions
 * @property {PriceRange} [price_range]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {string[]} [platforms]
 * @property {Object} [payments]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [ordering_stores]
 * @property {number[]} [user_groups]
 * @property {string} [user_type]
 * @property {UsesRestriction} [uses]
 * @property {PostOrder} [post_order]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef RuleDefinition
 * @property {string} type
 * @property {boolean} [auto_apply]
 * @property {boolean} [is_exact]
 * @property {string} applicable_on
 * @property {string} value_type
 * @property {string} [currency_code]
 * @property {string[]} [scope]
 * @property {string} calculate_on
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {boolean} [anonymous]
 * @property {string} [user_registered_after]
 */

/**
 * @typedef CouponAdd
 * @property {State} [state]
 * @property {CouponAuthor} [author]
 * @property {Ownership} ownership
 * @property {Rule[]} rule
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {DisplayMeta} display_meta
 * @property {Restrictions} [restrictions]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {string} code
 * @property {CouponAction} [action]
 * @property {RuleDefinition} rule_definition
 * @property {Validation} [validation]
 * @property {string[]} [tags]
 */

/**
 * @typedef CouponsResponse
 * @property {Page} [page]
 * @property {CouponAdd} [items]
 */

/**
 * @typedef SuccessMessage
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CouponUpdate
 * @property {State} [state]
 * @property {CouponAuthor} [author]
 * @property {Ownership} ownership
 * @property {Rule[]} rule
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {DisplayMeta} display_meta
 * @property {Restrictions} [restrictions]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {string} code
 * @property {CouponAction} [action]
 * @property {RuleDefinition} rule_definition
 * @property {Validation} [validation]
 * @property {string[]} [tags]
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef PromotionSchedule
 * @property {Object[]} [next_schedule]
 * @property {boolean} published
 * @property {number} [duration]
 * @property {string} start
 * @property {string} [cron]
 * @property {string} [end]
 */

/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
 * @property {string[]} [codes]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef Restrictions1
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [user_id]
 * @property {boolean} [anonymous_users]
 * @property {string[]} [platforms]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {number[]} [user_groups]
 * @property {UsesRestriction1} uses
 * @property {PostOrder1} [post_order]
 * @property {number} [order_quantity]
 */

/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */

/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef CompareObject
 * @property {number} [equals]
 * @property {number} [greater_than]
 * @property {number} [less_than]
 * @property {number} [less_than_equals]
 * @property {number} [greater_than_equals]
 */

/**
 * @typedef ItemCriteria
 * @property {number[]} [item_exclude_store]
 * @property {string[]} [available_zones]
 * @property {number[]} [item_store]
 * @property {number[]} [item_category]
 * @property {string[]} [item_size]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_exclude_brand]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_company]
 * @property {string[]} [item_sku]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {boolean} [all_items]
 * @property {string[]} [item_exclude_sku]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_exclude_company]
 * @property {string[]} [buy_rules]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_discount_amount]
 * @property {number} [min_offer_quantity]
 * @property {boolean} [apportion_discount]
 * @property {number} [discount_price]
 * @property {string} [code]
 * @property {number} [discount_amount]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [discount_percentage]
 * @property {boolean} [partial_can_ret]
 * @property {number} [max_offer_quantity]
 */

/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {ItemCriteria} item_criteria
 * @property {string} discount_type
 * @property {DiscountOffer} offer
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [offer_text]
 * @property {string} [description]
 */

/**
 * @typedef PromotionListItem
 * @property {Object} [_custom_json]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 * @property {string} [apply_exclusive]
 * @property {Restrictions1} [restrictions]
 * @property {Visibility} [visiblility]
 * @property {string} mode
 * @property {string} promotion_type
 * @property {string} promo_group
 * @property {Ownership1} ownership
 * @property {number} [apply_priority]
 * @property {string} [code]
 * @property {string} [currency]
 * @property {boolean} [apply_all_discount]
 * @property {string} [calculate_on]
 * @property {PromotionAuthor} [author]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DisplayMeta1} display_meta
 * @property {boolean} [stackable]
 * @property {Object} buy_rules
 */

/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */

/**
 * @typedef PromotionAdd
 * @property {Object} [_custom_json]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 * @property {string} [apply_exclusive]
 * @property {Restrictions1} [restrictions]
 * @property {Visibility} [visiblility]
 * @property {string} mode
 * @property {string} promotion_type
 * @property {string} promo_group
 * @property {Ownership1} ownership
 * @property {number} [apply_priority]
 * @property {string} [code]
 * @property {string} [currency]
 * @property {boolean} [apply_all_discount]
 * @property {string} [calculate_on]
 * @property {PromotionAuthor} [author]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DisplayMeta1} display_meta
 * @property {boolean} [stackable]
 * @property {Object} buy_rules
 */

/**
 * @typedef PromotionUpdate
 * @property {Object} [_custom_json]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 * @property {string} [apply_exclusive]
 * @property {Restrictions1} [restrictions]
 * @property {Visibility} [visiblility]
 * @property {string} mode
 * @property {string} promotion_type
 * @property {string} promo_group
 * @property {Ownership1} ownership
 * @property {number} [apply_priority]
 * @property {string} [code]
 * @property {string} [currency]
 * @property {boolean} [apply_all_discount]
 * @property {string} [calculate_on]
 * @property {PromotionAuthor} [author]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DisplayMeta1} display_meta
 * @property {boolean} [stackable]
 * @property {Object} buy_rules
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [entity_slug]
 * @property {string} [entity_type]
 * @property {string} [type]
 * @property {string} [example]
 * @property {string} [created_on]
 * @property {string} [title]
 * @property {string} [modified_on]
 * @property {boolean} [is_hidden]
 * @property {string} [description]
 * @property {string} [subtitle]
 */

/**
 * @typedef CartItem
 * @property {string} size
 * @property {string} product_id
 * @property {number} [quantity]
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef RawBreakup
 * @property {number} [coupon]
 * @property {number} [you_saved]
 * @property {number} [discount]
 * @property {number} [vog]
 * @property {number} [subtotal]
 * @property {number} [gift_card]
 * @property {number} [gst_charges]
 * @property {number} [fynd_cash]
 * @property {number} [total]
 * @property {number} [convenience_fee]
 * @property {number} [cod_charge]
 * @property {number} [mrp_total]
 * @property {number} [delivery_charge]
 */

/**
 * @typedef CouponBreakup
 * @property {number} [value]
 * @property {string} [type]
 * @property {number} [max_discount_value]
 * @property {number} [coupon_value]
 * @property {number} [minimum_cart_value]
 * @property {string} [coupon_type]
 * @property {string} [uid]
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [title]
 * @property {string} [sub_title]
 * @property {string} [description]
 * @property {boolean} [is_applied]
 */

/**
 * @typedef DisplayBreakup
 * @property {number} [value]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {string} [key]
 * @property {string[]} [message]
 * @property {string} [display]
 */

/**
 * @typedef LoyaltyPoints
 * @property {number} [applicable]
 * @property {boolean} [is_applied]
 * @property {number} [total]
 * @property {string} [description]
 */

/**
 * @typedef CartBreakup
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 * @property {LoyaltyPoints} [loyalty_points]
 */

/**
 * @typedef CouponDetails
 * @property {string} [code]
 * @property {number} [discount_total_quantity]
 * @property {number} [discount_single_quantity]
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [offer]
 * @property {Object} [item_criteria]
 * @property {Object} [raw_offer]
 * @property {string[]} [matched_buy_rules]
 */

/**
 * @typedef FreeGiftItem
 * @property {string} [item_name]
 * @property {string} [item_slug]
 * @property {string[]} [item_images_url]
 * @property {string} [item_brand_name]
 * @property {Object} [item_price_details]
 * @property {number} [item_id]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {string} [parent_item_identifier]
 * @property {string} [article_id]
 * @property {number} [quantity]
 */

/**
 * @typedef AppliedPromotion
 * @property {number} [amount]
 * @property {string} [promotion_name]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_group]
 * @property {string} [promo_id]
 * @property {string} [promotion_type]
 * @property {string} [offer_text]
 * @property {BuyRules[]} [buy_rules]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {number} [article_quantity]
 */

/**
 * @typedef ProductPrice
 * @property {number} [add_on]
 * @property {number} [marked]
 * @property {number} [selling]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [effective]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef ProductAvailability
 * @property {string[]} [sizes]
 * @property {boolean} [deliverable]
 * @property {number} [other_store_quantity]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {string} [type]
 * @property {string} [url]
 * @property {ActionQuery} [query]
 */

/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Tags
 * @property {Object} [tags]
 */

/**
 * @typedef CartProduct
 * @property {string} [type]
 * @property {Object} [_custom_json]
 * @property {CategoryInfo[]} [categories]
 * @property {ProductAction} [action]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {BaseInfo} [brand]
 * @property {ProductImage[]} [images]
 * @property {string[]} [tags]
 * @property {string} [item_code]
 * @property {string} [slug]
 * @property {Tags} [teaser_tag]
 */

/**
 * @typedef BasePrice
 * @property {number} [marked]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {string} [currency_code]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {boolean} [is_gift_visible]
 * @property {string} [size]
 * @property {string} [type]
 * @property {Object} [cart_item_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {BaseInfo} [store]
 * @property {ArticlePriceInfo} [price]
 * @property {string} [uid]
 * @property {Object} [extra_meta]
 * @property {string[]} [product_group_tags]
 * @property {Object} [identifier]
 * @property {Object} [gift_card]
 * @property {string} [seller_identifier]
 * @property {number} [quantity]
 * @property {BaseInfo} [seller]
 */

/**
 * @typedef CartProductInfo
 * @property {string} [coupon_message]
 * @property {CouponDetails} [coupon]
 * @property {Object} [parent_item_identifiers]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {string} [discount]
 * @property {Object} [bulk_offer]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {string} [key]
 * @property {CartProductIdentifer} identifiers
 * @property {ProductPriceInfo} [price]
 * @property {string} [message]
 * @property {PromoMeta} [promo_meta]
 * @property {number} [quantity]
 * @property {ProductAvailability} [availability]
 * @property {CartProduct} [product]
 * @property {boolean} [is_set]
 * @property {ProductArticle} [article]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {Object} [errors]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ShippingAddress
 * @property {Object} [meta]
 * @property {number} [pincode]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {string} [area_code_slug]
 * @property {string} [state]
 * @property {string} [country]
 * @property {number} [phone]
 * @property {string} [address]
 * @property {string} [area]
 * @property {string} [name]
 * @property {string} area_code
 * @property {string} [city]
 * @property {string} [country_code]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {CartItemMeta} [meta]
 * @property {number} price_effective
 * @property {number} [employee_discount]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} amount_paid
 * @property {number} discount
 * @property {number} delivery_charges
 * @property {number} price_marked
 * @property {number} cashback_applied
 * @property {number} [loyalty_discount]
 * @property {Object} [extra_meta]
 * @property {OpenApiFiles[]} [files]
 * @property {number} cod_charges
 * @property {number} [quantity]
 * @property {string} size
 * @property {number} product_id
 * @property {number} coupon_effective_discount
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [coupon]
 * @property {string} [payment_mode]
 * @property {Object} [employee_discount]
 * @property {number} delivery_charges
 * @property {string} [order_id]
 * @property {string} [currency_code]
 * @property {number} [loyalty_discount]
 * @property {OpenApiFiles[]} [files]
 * @property {number} cod_charges
 * @property {OpenApiOrderItem[]} cart_items
 * @property {string} coupon_code
 * @property {string} [comment]
 * @property {number} coupon_value
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cart_value
 * @property {number} cashback_applied
 * @property {ShippingAddress} billing_address
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [gstin]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 * @property {string} order_id
 * @property {string} [message]
 */

/**
 * @typedef AbandonedCart
 * @property {Object} [promotion]
 * @property {Object} [coupon]
 * @property {boolean} [merge_qty]
 * @property {number[]} [fc_index_map]
 * @property {Object} [delivery_charges]
 * @property {Object} [pick_up_customer_details]
 * @property {string} _id
 * @property {Object} [fynd_credits]
 * @property {Object} [cod_charges]
 * @property {Object} [meta]
 * @property {string} [comment]
 * @property {Object[]} [payment_methods]
 * @property {string} [checkout_mode]
 * @property {number} [discount]
 * @property {Object[]} articles
 * @property {boolean} [is_active]
 * @property {number} [cart_value]
 * @property {Object} [payments]
 * @property {string} created_on
 * @property {Object} cashback
 * @property {string} [payment_mode]
 * @property {Object[]} [shipments]
 * @property {string} user_id
 * @property {string} [order_id]
 * @property {number} [bulk_coupon_discount]
 * @property {number} uid
 * @property {string} [app_id]
 * @property {string} last_modified
 * @property {boolean} [buy_now]
 * @property {string} expire_at
 * @property {boolean} is_default
 * @property {string} [gstin]
 * @property {boolean} [is_archive]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {boolean} [success]
 * @property {Page} [page]
 * @property {string} [message]
 * @property {AbandonedCart[]} [items]
 * @property {Object} [result]
 */

/**
 * @typedef AddProductCart
 * @property {number} [store_id]
 * @property {number} [quantity]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [seller_id]
 * @property {Object} [article_assignment]
 * @property {Object} [extra_meta]
 * @property {string[]} [product_group_tags]
 * @property {string} [article_id]
 * @property {boolean} [pos]
 * @property {string} [display]
 * @property {string} [item_size]
 * @property {number} [item_id]
 */

/**
 * @typedef AddCartRequest
 * @property {boolean} [new_cart]
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */

/**
 * @typedef CartDetailResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [checkout_mode]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info]
 * @property {string} [id]
 * @property {string} [pan_no]
 * @property {Object} [pan_config]
 * @property {CartCurrency} [currency]
 * @property {boolean} [is_valid]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [buy_now]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {string} [coupon_text]
 * @property {string} [last_modified]
 * @property {string} [gstin]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [partial]
 */

/**
 * @typedef UpdateProductCart
 * @property {Object} [parent_item_identifiers]
 * @property {number} [item_index]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [item_id]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CartDetailResponse} [cart]
 */

/**
 * @typedef GetShareCartLinkRequest
 * @property {Object} [meta]
 * @property {string} [id]
 */

/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [share_url]
 * @property {string} [token]
 */

/**
 * @typedef SharedCartDetails
 * @property {Object} [meta]
 * @property {string} [token]
 * @property {string} [created_on]
 * @property {Object} [user]
 * @property {Object} [source]
 */

/**
 * @typedef SharedCart
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [is_valid]
 * @property {string} [comment]
 * @property {string} [checkout_mode]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {string} [id]
 * @property {string} [uid]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [buy_now]
 * @property {string} [last_modified]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {number} [cart_id]
 */

/**
 * @typedef SharedCartResponse
 * @property {string} [error]
 * @property {SharedCart} [cart]
 */

/**
 * @typedef CartList
 * @property {string} [user_id]
 * @property {Object} [pick_up_customer_details]
 * @property {number} [cart_value]
 * @property {number} [item_counts]
 * @property {string} [created_on]
 * @property {string} [cart_id]
 */

/**
 * @typedef MultiCartResponse
 * @property {CartList[]} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef UpdateUserCartMapping
 * @property {string} user_id
 */

/**
 * @typedef UserCartMappingResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [pan_no]
 * @property {boolean} [is_valid]
 * @property {string} [comment]
 * @property {string} [checkout_mode]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartCurrency} [currency]
 * @property {UserInfo} [user]
 * @property {string} [delivery_charge_info]
 * @property {string} [id]
 * @property {Object} [pan_config]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [buy_now]
 * @property {string} [last_modified]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 */

/**
 * @typedef DeleteCartRequest
 * @property {string[]} [cart_id_list]
 */

/**
 * @typedef DeleteCartDetailResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count]
 */

/**
 * @typedef PageCoupon
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {number} [total_item_count]
 */

/**
 * @typedef Coupon
 * @property {boolean} [is_applicable]
 * @property {string} [coupon_code]
 * @property {number} [max_discount_value]
 * @property {number} [coupon_value]
 * @property {string} [expires_on]
 * @property {number} [minimum_cart_value]
 * @property {string} [coupon_type]
 * @property {string} [title]
 * @property {string} [message]
 * @property {string} [sub_title]
 * @property {string} [description]
 * @property {boolean} [is_applied]
 */

/**
 * @typedef GetCouponResponse
 * @property {PageCoupon} [page]
 * @property {Coupon[]} [available_coupon_list]
 */

/**
 * @typedef ApplyCouponRequest
 * @property {string} coupon_code
 */

/**
 * @typedef GeoLocation
 * @property {number} [longitude]
 * @property {number} [latitude]
 */

/**
 * @typedef PlatformAddress
 * @property {string} [phone]
 * @property {string} [name]
 * @property {string} [state]
 * @property {Object} [meta]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {Object} [google_map_point]
 * @property {string} [checkout_mode]
 * @property {boolean} [is_active]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string[]} [tags]
 * @property {boolean} [is_default_address]
 * @property {string} [email]
 * @property {string} [user_id]
 * @property {string} [country]
 * @property {string} [id]
 * @property {GeoLocation} [geo_location]
 * @property {string} [created_by_user_id]
 * @property {string} [country_code]
 * @property {string} [area_code_slug]
 * @property {string} [area]
 * @property {string} [area_code]
 * @property {string} [cart_id]
 */

/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 */

/**
 * @typedef SaveAddressResponse
 * @property {boolean} [success]
 * @property {string} [id]
 * @property {boolean} [is_default_address]
 */

/**
 * @typedef UpdateAddressResponse
 * @property {boolean} [is_updated]
 * @property {boolean} [is_default_address]
 * @property {string} [id]
 * @property {boolean} [success]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_deleted]
 */

/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [user_id]
 * @property {string} [checkout_mode]
 * @property {string} [id]
 * @property {string} [billing_address_id]
 * @property {string} [cart_id]
 */

/**
 * @typedef ShipmentResponse
 * @property {ShipmentPromise} [promise]
 * @property {number} [shipments]
 * @property {string} [shipment_type]
 * @property {string} [order_type]
 * @property {number} [fulfillment_id]
 * @property {CartProductInfo[]} [items]
 * @property {string} [box_type]
 * @property {string} [fulfillment_type]
 * @property {Object} [dp_options]
 * @property {string} [dp_id]
 */

/**
 * @typedef CartShipmentsResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {ShipmentResponse[]} [shipments]
 * @property {string} [delivery_charge_info]
 * @property {string} [id]
 * @property {string} [uid]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {boolean} [error]
 * @property {string} [comment]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [checkout_mode]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartCurrency} [currency]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [buy_now]
 * @property {string} [last_modified]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {number} [cart_id]
 */

/**
 * @typedef UpdateCartShipmentItem
 * @property {string} shipment_type
 * @property {string} article_uid
 * @property {number} [quantity]
 */

/**
 * @typedef UpdateCartShipmentRequest
 * @property {UpdateCartShipmentItem[]} shipments
 */

/**
 * @typedef PlatformCartMetaRequest
 * @property {string} [comment]
 * @property {string} [checkout_mode]
 * @property {string} [pan_no]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [gstin]
 */

/**
 * @typedef CartMetaResponse
 * @property {string} [message]
 */

/**
 * @typedef CartMetaMissingResponse
 * @property {string[]} [errors]
 */

/**
 * @typedef Files
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef StaffCheckout
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} user
 * @property {string} _id
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {number} [ordering_store]
 * @property {number} [pick_at_store_uid]
 * @property {Object} [meta]
 * @property {string} [checkout_mode]
 * @property {boolean} [payment_auto_confirm]
 * @property {Object} [payment_params]
 * @property {string} [billing_address_id]
 * @property {string} payment_mode
 * @property {string} [device_id]
 * @property {string} user_id
 * @property {string} [address_id]
 * @property {string} id
 * @property {Object} [extra_meta]
 * @property {string} [payment_identifier]
 * @property {Files[]} [files]
 * @property {string} [merchant_code]
 * @property {string} [callback_url]
 * @property {string} [aggregator]
 * @property {string} order_type
 * @property {Object} [billing_address]
 * @property {boolean} [pos]
 * @property {Object} [delivery_address]
 * @property {string} [employee_code]
 * @property {StaffCheckout} [staff]
 */

/**
 * @typedef CheckCart
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [store_code]
 * @property {string} [error_message]
 * @property {number} [delivery_charges]
 * @property {boolean} [is_valid]
 * @property {number} [cod_charges]
 * @property {Object[]} [store_emps]
 * @property {string} [cod_message]
 * @property {string} [comment]
 * @property {string} [checkout_mode]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {number} [delivery_charge_order_value]
 * @property {CartCurrency} [currency]
 * @property {boolean} [cod_available]
 * @property {boolean} [success]
 * @property {string} [delivery_charge_info]
 * @property {string} [id]
 * @property {string} [order_id]
 * @property {string} [uid]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {string} [user_type]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [buy_now]
 * @property {string} [last_modified]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {number} [cart_id]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [payment_confirm_url]
 * @property {string} [order_id]
 * @property {Object} [data]
 * @property {string} [message]
 * @property {CheckCart} [cart]
 * @property {string} [app_intercept_url]
 * @property {string} [callback_url]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {string[]} [available_modes]
 * @property {number[]} [pickup_stores]
 */

/**
 * @typedef PickupStoreDetail
 * @property {string} [area_code_slug]
 * @property {number} [pincode]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [store_code]
 * @property {string} [country]
 * @property {number} [id]
 * @property {string} [phone]
 * @property {string} [address]
 * @property {string} [area]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [area_code]
 * @property {string} [city]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [address_id]
 * @property {string} [id]
 * @property {string} [payment_identifier]
 * @property {string} [payment_mode]
 * @property {string} [merchant_code]
 * @property {string} [aggregator_name]
 */

/**
 * @typedef CouponValidity
 * @property {number} [discount]
 * @property {boolean} [valid]
 * @property {string} [display_message_en]
 * @property {string} [code]
 * @property {string} [title]
 */

/**
 * @typedef PaymentCouponValidate
 * @property {boolean} success
 * @property {string} [message]
 * @property {CouponValidity} [coupon_validity]
 */

/**
 * @typedef E
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 */

/**
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef Schedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {string} [cron]
 */

/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */

/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */

/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */

/**
 * @typedef ShareMessages
 * @property {number} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */

/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */

/**
 * @typedef Points
 * @property {number} [available]
 */

/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */

/**
 * @typedef Referral
 * @property {string} [code]
 */

/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */

/**
 * @typedef GiveawayAudience
 * @property {string} [audience_id]
 * @property {number} [current_count]
 */

/**
 * @typedef HistoryRes
 * @property {PointsHistory[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
 */

/**
 * @typedef PointsHistory
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {Object} [meta]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */

/**
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 */

/**
 * @typedef StatsGroups
 * @property {StatGroup[]} [groups]
 */

/**
 * @typedef StatsGroupComponent
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [filters]
 */

/**
 * @typedef StatsGroupComponents
 * @property {string} [title]
 * @property {StatsGroupComponent[]} [components]
 */

/**
 * @typedef StatsRes
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [data]
 */

/**
 * @typedef ReceivedAt
 * @property {string} [value]
 */

/**
 * @typedef AbandonCartsDetail
 * @property {string} [properties_cart_id]
 * @property {string} [context_traits_first_name]
 * @property {string} [context_traits_last_name]
 * @property {string} [context_traits_phone_number]
 * @property {string} [context_traits_email]
 * @property {string} [context_app_application_id]
 * @property {string} [properties_breakup_values_raw_total]
 * @property {ReceivedAt} [received_at]
 */

/**
 * @typedef AbandonCartsList
 * @property {AbandonCartsDetail[]} [items]
 * @property {string} [cart_total]
 * @property {Page} [page]
 */

/**
 * @typedef AbandonCartDetail
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [cart_value]
 * @property {Object[]} [articles]
 * @property {Object} [breakup]
 * @property {Object} [address]
 */

/**
 * @typedef ExportJobReq
 * @property {string} [marketplace_name]
 * @property {string} [start_time]
 * @property {string} [end_time]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 */

/**
 * @typedef ExportJobRes
 * @property {string} [status]
 * @property {string} [job_id]
 */

/**
 * @typedef ExportJobStatusRes
 * @property {string} [status]
 * @property {string} [job_id]
 * @property {string} [download_url]
 */

/**
 * @typedef GetLogsListReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 */

/**
 * @typedef MkpLogsResp
 * @property {string} [start_time_iso]
 * @property {string} [end_time_iso]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 * @property {string} [count]
 * @property {string} [status]
 */

/**
 * @typedef GetLogsListRes
 * @property {MkpLogsResp[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SearchLogReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [identifier]
 * @property {string} [identifier_value]
 */

/**
 * @typedef LogInfo
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [event_type]
 * @property {string} [marketplace_name]
 * @property {string} [event]
 * @property {string} [trace_id]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {string} [seller_identifier]
 */

/**
 * @typedef SearchLogRes
 * @property {LogInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */

/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} app_ids
 * @property {string[]} extension_ids
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */

/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */

/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */

/**
 * @typedef DiscountItems
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {string} [seller_identifier]
 * @property {string} discount_type
 * @property {number} value
 */

/**
 * @typedef BulkDiscount
 * @property {number} company_id
 * @property {DiscountItems[]} items
 */

/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {Object} [body]
 * @property {string} type
 * @property {string} file_type
 */

/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */

/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */

/**
 * @typedef BadRequestObject
 * @property {string} message
 */

/**
 * @typedef AddProxyReq
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 */

/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {Object} [meta]
 */

/**
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
 */

/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */

/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EventProcessedStatus
 * @property {number} [id]
 * @property {string} [subscriber_id]
 * @property {number} [attempt]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {string} [created_on]
 * @property {string} [processed_on]
 * @property {boolean} [status]
 */

/**
 * @typedef EventPayload
 * @property {number} [id]
 * @property {string} [event_trace_id]
 * @property {string} [message_id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {boolean} [status]
 */

/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */

/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef SubscriberEvent
 * @property {number} [id]
 * @property {number} [subscriber_id]
 * @property {number} [event_id]
 * @property {string} [created_date]
 */

/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */

/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */

/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */

/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */

/**
 * @typedef CreateLogResponse
 * @property {string} [message]
 * @property {string} [internal_message]
 */

/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 */

/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */

/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */

/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */

/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */

/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */

/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */

/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */

/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */

/**
 * @typedef ApplicationServiceabilityConfig
 * @property {string} serviceability_type
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ServiceabilityrErrorResponse
 * @property {string} value
 * @property {string} message
 * @property {string} type
 */

/**
 * @typedef ApplicationServiceabilityConfigResponse
 * @property {boolean} success
 * @property {ApplicationServiceabilityConfig} [data]
 * @property {ServiceabilityrErrorResponse} [error]
 */

/**
 * @typedef EntityRegionView_Request
 * @property {string[]} [parent_id]
 * @property {string[]} sub_type
 */

/**
 * @typedef EntityRegionView_page
 * @property {string} type
 * @property {number} current
 * @property {number} size
 * @property {number} item_total
 * @property {boolean} has_next
 */

/**
 * @typedef EntityRegionView_Items
 * @property {string} sub_type
 * @property {string} uid
 * @property {string} name
 */

/**
 * @typedef EntityRegionView_Error
 * @property {string} [value]
 * @property {string} [message]
 * @property {string} [type]
 */

/**
 * @typedef EntityRegionView_Response
 * @property {boolean} success
 * @property {EntityRegionView_page} page
 * @property {EntityRegionView_Items[]} data
 * @property {EntityRegionView_Error} error
 */

/**
 * @typedef ZoneDataItem
 * @property {number} current
 * @property {number} size
 * @property {string} type
 * @property {number} item_total
 * @property {boolean} has_next
 */

/**
 * @typedef ListViewProduct
 * @property {number} count
 * @property {string} type
 */

/**
 * @typedef ListViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ListViewItems
 * @property {number} pincodes_count
 * @property {string} slug
 * @property {number} company_id
 * @property {string} zone_id
 * @property {string} name
 * @property {number} stores_count
 * @property {ListViewProduct} product
 * @property {ListViewChannels} channels
 * @property {boolean} is_active
 */

/**
 * @typedef ListViewSummary
 * @property {number} total_zones
 * @property {number} total_active_zones
 * @property {number} total_pincodes_served
 */

/**
 * @typedef ListViewResponse
 * @property {ZoneDataItem[]} page
 * @property {ListViewItems[]} items
 * @property {ListViewSummary[]} summary
 */

/**
 * @typedef CompanyStoreView_PageItems
 * @property {string} type
 * @property {number} current
 * @property {number} size
 * @property {number} item_total
 * @property {boolean} has_next
 */

/**
 * @typedef CompanyStoreView_Response
 * @property {Object[]} [items]
 * @property {CompanyStoreView_PageItems[]} page
 */

/**
 * @typedef GetZoneDataViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ZoneProductTypes
 * @property {string[]} tags
 * @property {string} type
 */

/**
 * @typedef ZoneMappingType
 * @property {string[]} [state]
 * @property {string} country
 * @property {string[]} [pincode]
 */

/**
 * @typedef UpdateZoneData
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneUpdateRequest
 * @property {UpdateZoneData} data
 * @property {string} identifier
 */

/**
 * @typedef ZoneSuccessResponse
 * @property {boolean} success
 * @property {number} status_code
 */

/**
 * @typedef GetZoneDataViewItems
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 * @property {number} stores_count
 * @property {number} pincodes_count
 */

/**
 * @typedef GetSingleZoneDataViewResponse
 * @property {GetZoneDataViewItems} data
 */

/**
 * @typedef CreateZoneData
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneRequest
 * @property {CreateZoneData} data
 * @property {string} identifier
 */

/**
 * @typedef ZoneResponse
 * @property {boolean} success
 * @property {number} status_code
 * @property {string} zone_id
 */

/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {string[]} zones
 */

/**
 * @typedef AddressResponse
 * @property {string} [address2]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {number} [latitude]
 * @property {string} [landmark]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [country]
 */

/**
 * @typedef ContactNumberResponse
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef IntegrationTypeResponse
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef CreatedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef MobileNo
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef ManagerResponse
 * @property {MobileNo} [mobile_no]
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef ProductReturnConfigResponse
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef ModifiedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef EwayBillResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef EinvoiceResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef GstCredentialsResponse
 * @property {EwayBillResponse} [e_waybill]
 * @property {EinvoiceResponse} [e_invoice]
 */

/**
 * @typedef DocumentsResponse
 * @property {string} [legal_name]
 * @property {string} [value]
 * @property {boolean} [verified]
 * @property {string} [type]
 */

/**
 * @typedef Dp
 * @property {string} [external_account_id]
 * @property {number} [rvp_priority]
 * @property {number} [area_code]
 * @property {number} [lm_priority]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [transport_mode]
 * @property {number} [fm_priority]
 * @property {string} [payment_mode]
 * @property {string[]} [operations]
 * @property {string} [internal_account_id]
 */

/**
 * @typedef LogisticsResponse
 * @property {Dp} [dp]
 * @property {boolean} [override]
 */

/**
 * @typedef OpeningClosing
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef TimmingResponse
 * @property {OpeningClosing} [opening]
 * @property {OpeningClosing} [closing]
 * @property {boolean} [open]
 * @property {string} [weekday]
 */

/**
 * @typedef WarningsResponse
 * @property {string} [store_address]
 */

/**
 * @typedef ItemResponse
 * @property {AddressResponse} [address]
 * @property {string} [verified_on]
 * @property {number} [company_id]
 * @property {string} [_cls]
 * @property {string} [created_on]
 * @property {ContactNumberResponse[]} [contact_numbers]
 * @property {IntegrationTypeResponse} [integration_type]
 * @property {string[]} [notification_emails]
 * @property {CreatedByResponse} [created_by]
 * @property {string} [stage]
 * @property {ManagerResponse} [manager]
 * @property {string} [modified_on]
 * @property {ProductReturnConfigResponse} [product_return_config]
 * @property {ModifiedByResponse} [verified_by]
 * @property {string} [store_type]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {number} [company]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {GstCredentialsResponse} [gst_credentials]
 * @property {DocumentsResponse[]} [documents]
 * @property {LogisticsResponse} [logistics]
 * @property {number} [uid]
 * @property {TimmingResponse[]} [timing]
 * @property {WarningsResponse} [warnings]
 * @property {ModifiedByResponse} [modified_by]
 * @property {string} [sub_type]
 */

/**
 * @typedef GetStoresViewResponse
 * @property {ItemResponse[]} [items]
 * @property {PageResponse} page
 */

module.exports = PlatformClient;
