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
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash]
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
 * @property {string[]} display_fields
 * @property {string} app_id
 * @property {Object[]} [aggregators]
 * @property {boolean} success
 * @property {string[]} excluded_fields
 * @property {boolean} created
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {boolean} [is_active]
 * @property {string} key
 * @property {string} merchant_salt
 * @property {string} config_type
 * @property {string} secret
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {string} app_id
 * @property {boolean} [is_active]
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator
 * @property {boolean} success
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
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
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef IntentApp
 * @property {string} [package_name]
 * @property {string} [display_name]
 * @property {Object} [outage]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [name]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_token]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {string} [card_name]
 * @property {number} [exp_month]
 * @property {string} [card_id]
 * @property {boolean} [intent_flow]
 * @property {string} [card_fingerprint]
 * @property {boolean} [expired]
 * @property {string} [fynd_vpa]
 * @property {number} [timeout]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [card_isin]
 * @property {string} aggregator_name
 * @property {string} [card_issuer]
 * @property {string} [display_name]
 * @property {Object} [outage]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {number} [display_priority]
 * @property {string} [card_number]
 * @property {string} [card_brand_image]
 * @property {number} [exp_year]
 * @property {string} [nickname]
 * @property {string} [code]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_reference]
 * @property {string} [card_type]
 * @property {number} [retry_count]
 * @property {string} [merchant_code]
 * @property {string} [card_brand]
 */

/**
 * @typedef RootPaymentMode
 * @property {string} [logo]
 * @property {string} name
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [aggregator_name]
 * @property {boolean} [save_card]
 * @property {boolean} [is_pay_by_card_pl]
 * @property {string} display_name
 * @property {number} display_priority
 * @property {boolean} [add_card_enabled]
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [anonymous_enable]
 */

/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */

/**
 * @typedef PaymentOptionsResponse
 * @property {PaymentOptions} payment_options
 * @property {boolean} success
 */

/**
 * @typedef PayoutsResponse
 * @property {Object} unique_transfer_no
 * @property {string} transfer_type
 * @property {boolean} is_active
 * @property {Object} customers
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_default
 * @property {Object} more_attributes
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} ifsc_code
 * @property {string} [account_holder]
 * @property {string} [branch_name]
 * @property {string} [bank_name]
 * @property {string} account_type
 * @property {string} [city]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [account_no]
 * @property {string} [state]
 */

/**
 * @typedef PayoutRequest
 * @property {string} transfer_type
 * @property {boolean} is_active
 * @property {Object} users
 * @property {string} unique_external_id
 * @property {string} aggregator
 * @property {PayoutBankDetails} bank_details
 */

/**
 * @typedef PayoutResponse
 * @property {string} unique_transfer_no
 * @property {string} transfer_type
 * @property {boolean} is_active
 * @property {Object} users
 * @property {Object} payouts
 * @property {string} payment_status
 * @property {Object} bank_details
 * @property {boolean} success
 * @property {string} aggregator
 * @property {boolean} created
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {boolean} success
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_default
 * @property {string} unique_external_id
 * @property {boolean} is_active
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
 * @property {Object} config
 * @property {string} aggregator
 * @property {boolean} success
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
 * @property {string} message
 * @property {Object} [data]
 * @property {boolean} success
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} ifsc_code
 * @property {string} account_holder
 * @property {string} bank_name
 * @property {string} branch_name
 * @property {string} account_no
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
 * @property {string} account_holder
 * @property {string} ifsc_code
 * @property {string} created_on
 * @property {string} subtitle
 * @property {string} modified_on
 * @property {string} title
 * @property {number} id
 * @property {string} account_no
 * @property {string} address
 * @property {boolean} is_active
 * @property {string} beneficiary_id
 * @property {string} display_name
 * @property {string} bank_name
 * @property {string} email
 * @property {string} [branch_name]
 * @property {string} transfer_mode
 * @property {string} [comment]
 * @property {string} [mobile]
 * @property {string} [delights_user_name]
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta]
 * @property {string} [payment_gateway]
 * @property {string} [order_id]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount
 * @property {string} [name]
 * @property {string} mode
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} order_id
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} message
 * @property {string} order_id
 * @property {boolean} success
 */

/**
 * @typedef Code
 * @property {string} name
 * @property {string} code
 * @property {string} merchant_code
 */

/**
 * @typedef PaymentCode
 * @property {string} name
 * @property {string} networks
 * @property {Code} codes
 * @property {string} types
 */

/**
 * @typedef GetPaymentCode
 * @property {PaymentCode} method_code
 */

/**
 * @typedef getPaymentCodeResponse
 * @property {GetPaymentCode} data
 * @property {boolean} success
 */

/**
 * @typedef ShipmentStatus
 * @property {string} hex_code
 * @property {string} status
 * @property {string} title
 * @property {string} actual_status
 * @property {string} ops_status
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */

/**
 * @typedef Prices
 * @property {number} [amount_paid]
 * @property {number} [delivery_charge]
 * @property {number} [promotion_effective_discount]
 * @property {number} [value_of_good]
 * @property {number} [tax_collected_at_source]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [coupon_value]
 * @property {number} [cashback_applied]
 * @property {number} [refund_credit]
 * @property {number} [discount]
 * @property {number} [price_marked]
 * @property {number} [cod_charges]
 * @property {number} [cashback]
 * @property {number} [fynd_credits]
 * @property {number} [refund_amount]
 * @property {number} [price_effective]
 */

/**
 * @typedef PlatformItem
 * @property {string} [code]
 * @property {string} [size]
 * @property {string[]} [l1_category]
 * @property {string} [name]
 * @property {string} [color]
 * @property {string[]} [images]
 * @property {number} [l3_category]
 * @property {number} [department_id]
 * @property {string} [l3_category_name]
 * @property {string[]} [image]
 * @property {number} [id]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} value_of_good
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {string} gstin_code
 * @property {number} gst_fee
 */

/**
 * @typedef BagUnit
 * @property {string} ordering_channel
 * @property {number} line_number
 * @property {string} shipment_id
 * @property {number} bag_id
 * @property {Object} status
 * @property {Object} [applied_promos]
 * @property {number} quantity
 * @property {number} total_shipment_bags
 * @property {Prices} [prices]
 * @property {string} [group_id]
 * @property {Object} [parent_promo_bags]
 * @property {PlatformItem} [item]
 * @property {boolean} [can_cancel]
 * @property {GSTDetailsData} [gst]
 * @property {boolean} [can_return]
 * @property {string} identifier
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef UserDataInfo
 * @property {string} [first_name]
 * @property {number} [uid]
 * @property {string} [mobile]
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [avis_user_id]
 * @property {string} [gender]
 * @property {string} [last_name]
 */

/**
 * @typedef ShipmentItem
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [application]
 * @property {number} total_bags_count
 * @property {string} created_at
 * @property {number} total_shipments_in_order
 * @property {number} shipment_created_at
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {string} fulfilling_centre
 * @property {Object} [sla]
 * @property {Prices} [prices]
 * @property {BagUnit[]} [bags]
 * @property {Object} [channel]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {UserDataInfo} [user]
 * @property {string} id
 * @property {Object} [payment_methods]
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} text
 */

/**
 * @typedef FiltersInfo
 * @property {string} value
 * @property {FilterInfoOption[]} [options]
 * @property {string} text
 * @property {string} type
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {Object} [page]
 * @property {ShipmentItem[]} [items]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [applied_filters]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [track_url]
 * @property {string} [country]
 * @property {string} [name]
 * @property {string} [gst_tag]
 * @property {string} [eway_bill_id]
 * @property {string} [id]
 * @property {string} [pincode]
 * @property {string} [awb_no]
 */

/**
 * @typedef TrackingList
 * @property {boolean} [is_current]
 * @property {string} status
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {string} text
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [source]
 * @property {string} mode
 * @property {string} [logo]
 */

/**
 * @typedef UserDetailsData
 * @property {string} state
 * @property {string} phone
 * @property {string} name
 * @property {string} country
 * @property {string} email
 * @property {string} address
 * @property {string} pincode
 * @property {string} city
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [shipment_id]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {number[]} [bag_list]
 * @property {number} [id]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [ordering_channel]
 * @property {string} [source]
 * @property {string} fynd_order_id
 * @property {Object} [tax_details]
 * @property {string} [cod_charges]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [order_date]
 * @property {string} [affiliate_id]
 * @property {string} [order_value]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} transfer_price
 * @property {number} [tax_collected_at_source]
 * @property {number} discount
 * @property {number} price_marked
 * @property {number} total_units
 * @property {Identifier} identifiers
 * @property {string} item_name
 * @property {number} cod_charges
 * @property {number} cashback
 * @property {boolean} added_to_fynd_cash
 * @property {number} cashback_applied
 * @property {Object} pm_price_split
 * @property {number} fynd_credits
 * @property {number} price_effective
 * @property {string} size
 * @property {number} amount_paid
 * @property {number} delivery_charge
 * @property {number} brand_calculated_amount
 * @property {number} coupon_value
 * @property {number} gst_tax_percentage
 * @property {number} [amount_paid_roundoff]
 * @property {number} refund_credit
 * @property {number} promotion_effective_discount
 * @property {number} value_of_good
 * @property {string} gst_tag
 * @property {string} gst_fee
 * @property {number} coupon_effective_discount
 * @property {string} hsn_code
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {number} [longitude]
 * @property {number} [latitude]
 * @property {string} [address_category]
 * @property {string} [address2]
 * @property {string} [created_at]
 * @property {string} [state]
 * @property {string} [phone]
 * @property {string} [country]
 * @property {string} [address1]
 * @property {string} [contact_person]
 * @property {string} [email]
 * @property {string} [updated_at]
 * @property {string} [landmark]
 * @property {string} [pincode]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [area]
 * @property {string} [version]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {string} [uid]
 * @property {Object} [identifiers]
 */

/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {ItemCriterias} [item_criteria]
 */

/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef AppliedPromos
 * @property {string} [promotion_name]
 * @property {boolean} [mrp_promotion]
 * @property {BuyRules[]} [buy_rules]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {string} [promotion_type]
 * @property {string} [promo_id]
 * @property {DiscountRules[]} [discount_rules]
 */

/**
 * @typedef BagGST
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [value_of_good]
 * @property {number} [brand_calculated_amount]
 * @property {number} [gst_tax_percentage]
 * @property {string} [gst_tag]
 * @property {string} [gstin_code]
 * @property {number} [gst_fee]
 * @property {string} [hsn_code]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_returnable
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} allow_force_return
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef OrderBrandName
 * @property {number} created_on
 * @property {string} brand_name
 * @property {number} [modified_on]
 * @property {number} id
 * @property {string} company
 * @property {string} logo
 */

/**
 * @typedef OrderBags
 * @property {number} [line_number]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {OrderBagArticle} [article]
 * @property {string} [current_status]
 * @property {Prices} [prices]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {number} [quantity]
 * @property {BagGST} [gst_details]
 * @property {string} [identifier]
 * @property {number} bag_id
 * @property {string} [seller_identifier]
 * @property {string} [display_name]
 * @property {BagConfigs} [bag_configs]
 * @property {OrderBrandName} [brand]
 * @property {string} [entity_type]
 * @property {PlatformItem} [item]
 * @property {Object} [parent_promo_bags]
 */

/**
 * @typedef BagStateMapper
 * @property {string} [app_display_name]
 * @property {string} state_type
 * @property {boolean} [is_active]
 * @property {number} bs_id
 * @property {string} name
 * @property {boolean} [app_facing]
 * @property {string} journey_type
 * @property {string} display_name
 * @property {string} [app_state_name]
 * @property {boolean} [notify_customer]
 */

/**
 * @typedef BagStatusHistory
 * @property {number} store_id
 * @property {string} [state_type]
 * @property {boolean} [app_display_name]
 * @property {number} state_id
 * @property {string} shipment_id
 * @property {number} bag_id
 * @property {string} [delivery_awb_number]
 * @property {string} created_at
 * @property {number} bsh_id
 * @property {string} status
 * @property {BagStateMapper} bag_state_mapper
 * @property {number} [delivery_partner_id]
 * @property {string} [updated_at]
 * @property {boolean} [kafka_sync]
 * @property {boolean} [display_name]
 * @property {boolean} [forward]
 * @property {Object[]} [reasons]
 */

/**
 * @typedef FulfillingStore
 * @property {string} code
 * @property {string} store_name
 * @property {string} contact_person
 * @property {string} phone
 * @property {string} state
 * @property {string} fulfillment_channel
 * @property {string} country
 * @property {string} address
 * @property {string} pincode
 * @property {string} id
 * @property {string} city
 * @property {Object} meta
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string[]} [shipment_images]
 * @property {DPDetailsData} [dp_details]
 * @property {Object} [coupon]
 * @property {boolean} is_not_fynd_source
 * @property {string} affiliate_shipment_id
 * @property {Object} current_shipment_status
 * @property {string} [replacement_details]
 * @property {string} lock_status
 * @property {boolean} [enable_tracking]
 * @property {Object[]} [forward_tracking_list]
 * @property {Object[]} [custom_meta]
 * @property {string} [secured_delivery_flag]
 * @property {boolean} platform_logo
 * @property {Prices} [prices]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} can_break
 * @property {ShipmentPayments} [payments]
 * @property {UserDetailsData} [delivery_details]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [pay_button]
 * @property {string} [shipment_status]
 * @property {Object} order_status
 * @property {string} shipment_id
 * @property {Object} [bank_data]
 * @property {ShipmentStatusData} [status]
 * @property {string} [priority_text]
 * @property {Object} ordering_store
 * @property {OrderDetailsData} [order]
 * @property {GSTDetailsData} [gst_details]
 * @property {boolean} is_invoiced
 * @property {string} [packaging_type]
 * @property {OrderBags[]} [bags]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [is_fynd_store]
 * @property {number} [total_items]
 * @property {Object} [escalation]
 * @property {string} [is_pdsr]
 * @property {Object} [delivery_slot]
 * @property {number} [total_bags]
 * @property {boolean} is_packaging_order
 * @property {Object[]} items
 * @property {string} [mid]
 * @property {string} user_id
 * @property {string} tracking_url
 * @property {boolean} [beneficiary_details]
 * @property {string} [vertical]
 * @property {Object} invoice
 * @property {string} [order_created_time]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {boolean} [go_green]
 * @property {string} [picked_date]
 * @property {Object} [refund_details]
 * @property {Object[]} [forward_shipment_status]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [refund_text]
 * @property {Object} [user_info]
 * @property {string} [operational_status]
 * @property {string} [payment_mode]
 * @property {string} order_type
 * @property {number} status_progress
 * @property {Object} fyndstore_emp
 * @property {string} [user_agent]
 * @property {string} email_id
 * @property {string[]} [child_nodes]
 * @property {boolean} is_fynd_coupon
 * @property {Object[]} [forward_order_status]
 * @property {string} [journey_type]
 * @property {string} [enable_dp_tracking]
 * @property {string} credit_note_id
 * @property {string} [due_date]
 * @property {string} [kirana_store_id]
 * @property {Object[]} delivery_status
 * @property {number} [shipment_quantity]
 * @property {Object} company
 */

/**
 * @typedef PlatformShipment
 * @property {string[]} [shipment_images]
 * @property {DPDetailsData} [dp_details]
 * @property {Object[]} [custom_meta]
 * @property {string} [platform_logo]
 * @property {Prices} [prices]
 * @property {TrackingList[]} [tracking_list]
 * @property {ShipmentPayments} [payments]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [shipment_status]
 * @property {string} shipment_id
 * @property {ShipmentStatusData} [status]
 * @property {string} [priority_text]
 * @property {OrderDetailsData} [order]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [packaging_type]
 * @property {OrderBags[]} [bags]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {number} [total_items]
 * @property {Object} [delivery_slot]
 * @property {number} [total_bags]
 * @property {string} [vertical]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [picked_date]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [operational_status]
 * @property {string} [payment_mode]
 * @property {string} [user_agent]
 * @property {string} [journey_type]
 * @property {string} [enable_dp_tracking]
 * @property {number} [shipment_quantity]
 */

/**
 * @typedef OrderDict
 * @property {number} shipment_count
 * @property {string} order_date
 * @property {string} fynd_order_id
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {Object[]} [custom_meta]
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 * @property {OrderDict} [order]
 */

/**
 * @typedef SubLane
 * @property {Object[]} [actions]
 * @property {string} [value]
 * @property {number} [index]
 * @property {number} [total_items]
 * @property {string} [text]
 */

/**
 * @typedef SuperLane
 * @property {string} value
 * @property {number} [total_items]
 * @property {string} text
 * @property {SubLane[]} [options]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [display]
 * @property {string} [value]
 * @property {string} [name]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformOrderItems
 * @property {UserDataInfo} [user_info]
 * @property {string} [payment_mode]
 * @property {Object} [meta]
 * @property {PlatformShipment[]} [shipments]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {number} [total_order_value]
 * @property {string} [order_created_time]
 * @property {PlatformChannel} [channel]
 * @property {string} [order_id]
 * @property {number} [order_value]
 */

/**
 * @typedef OrderListingResponse
 * @property {PlatformOrderItems[]} [items]
 * @property {string} [message]
 * @property {number} [total_count]
 * @property {Page} [page]
 * @property {string} [lane]
 * @property {boolean} [success]
 */

/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */

/**
 * @typedef MetricsCount
 * @property {number} value
 * @property {string} key
 * @property {string} text
 * @property {Options[]} [options]
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [updated_time]
 * @property {string} [last_location_recieved_at]
 * @property {string} [shipment_type]
 * @property {string} [reason]
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [raw_status]
 * @property {string} [account_name]
 * @property {string} [awb]
 * @property {Object} [meta]
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
 * @property {string} [report_id]
 * @property {string} [status]
 * @property {string} [report_requested_at]
 * @property {string} [report_name]
 * @property {string} [display_name]
 * @property {string} [report_type]
 * @property {string} [s3_key]
 * @property {string} [report_created_at]
 * @property {Object} [request_details]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [company_id]
 * @property {string} [item_id]
 * @property {string} [article_id]
 * @property {string} [jio_code]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [value]
 * @property {string} [message]
 * @property {string} [type]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {string} [trace_id]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {boolean} [success]
 * @property {Object[]} [data]
 * @property {string} [identifier]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [store_id]
 * @property {string} [company_id]
 * @property {Object} [label]
 * @property {string} [store_name]
 * @property {Object} [data]
 * @property {Object} [invoice]
 * @property {string} [invoice_status]
 * @property {boolean} do_invoice_label_generated
 * @property {string} batch_id
 * @property {string} [store_code]
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
 * @property {number} [size]
 * @property {string} [content_type]
 * @property {string} [method]
 * @property {string[]} [tags]
 * @property {string} [operation]
 * @property {URL} [cdn]
 * @property {FileUploadResponse} [upload]
 * @property {string} [file_path]
 * @property {string} [file_name]
 * @property {string} [namespace]
 */

/**
 * @typedef BulkListingPage
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {string} [type]
 * @property {boolean} [has_next]
 */

/**
 * @typedef bulkListingData
 * @property {Object[]} [failed_shipments]
 * @property {string} [store_name]
 * @property {number} [processing]
 * @property {string} [uploaded_on]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {string} [status]
 * @property {string} [file_name]
 * @property {string} [user_name]
 * @property {string} [user_id]
 * @property {number} [successful]
 * @property {string} [batch_id]
 * @property {number} [company_id]
 * @property {Object[]} [successful_shipments]
 * @property {string[]} [processing_shipments]
 * @property {number} [failed]
 * @property {string} [excel_url]
 * @property {number} [total]
 * @property {string} [id]
 */

/**
 * @typedef BulkListingResponse
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 * @property {boolean} [success]
 * @property {bulkListingData[]} [data]
 */

/**
 * @typedef ManifestPage
 * @property {string} [size]
 * @property {string} [current]
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {string} [type]
 * @property {boolean} [has_next]
 */

/**
 * @typedef DateRange
 * @property {string} [from_date]
 * @property {string} [to_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [store_name]
 * @property {string} [dp_ids]
 * @property {DateRange} [date_range]
 * @property {string} [stores]
 * @property {string} [lane]
 * @property {string} [sales_channel_name]
 * @property {string} [dp_name]
 * @property {string} [sales_channels]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {number} [company_id]
 * @property {string} [created_at]
 * @property {boolean} [is_active]
 * @property {string} [status]
 * @property {string} [manifest_id]
 * @property {ManifestFilter} [filters]
 * @property {string} [created_by]
 */

/**
 * @typedef GeneratedManifestResponse
 * @property {ManifestPage} [page]
 * @property {GeneratedManifestItem[]} [items]
 */

/**
 * @typedef ManifestDetailItem
 * @property {string} [invoice_id]
 * @property {string} [shipment_id]
 * @property {number} [item_qty]
 * @property {string} [order_id]
 * @property {string} [awb]
 */

/**
 * @typedef ManifestDetailTotalShipmentPricesCount
 * @property {number} [shipment_count]
 * @property {number} [total_price]
 */

/**
 * @typedef ManifestDetailMeta
 * @property {ManifestFilter} [filters]
 * @property {ManifestDetailTotalShipmentPricesCount} [total_shipment_prices_count]
 */

/**
 * @typedef ManifestDetail
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {string} [created_at]
 * @property {boolean} [is_active]
 * @property {string} [status]
 * @property {number} [user_id]
 * @property {string} [manifest_id]
 * @property {number} [id]
 * @property {ManifestFilter} [filters]
 * @property {ManifestDetailMeta} [meta]
 * @property {string} [created_by]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {ManifestPage} [page]
 * @property {ManifestDetailItem[]} [items]
 * @property {ManifestDetail[]} [manifest_details]
 * @property {number} [additional_shipment_count]
 */

/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */

/**
 * @typedef Reason
 * @property {string[]} [qc_type]
 * @property {string} [display_name]
 * @property {QuestionSet[]} [question_set]
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
 * @property {string} [company_id]
 * @property {number} [total_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [processing_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {string} [batch_id]
 * @property {number} [successful_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [message]
 * @property {string} [user_id]
 * @property {boolean} [status]
 * @property {string[]} [error]
 * @property {string[]} [failed_records]
 * @property {string} [success]
 * @property {string} [uploaded_by]
 * @property {string} [uploaded_on]
 * @property {BulkActionDetailsDataField[]} [data]
 */

/**
 * @typedef Weight
 * @property {string} [unit]
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 */

/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef Dimensions
 * @property {string} [unit]
 * @property {number} [height]
 * @property {boolean} [is_default]
 * @property {number} [length]
 * @property {number} [width]
 */

/**
 * @typedef Article
 * @property {string} [code]
 * @property {string} size
 * @property {Weight} [weight]
 * @property {string} uid
 * @property {string} _id
 * @property {ReturnConfig} [return_config]
 * @property {Dimensions} [dimensions]
 * @property {string} seller_identifier
 * @property {boolean} [is_set]
 * @property {Object} [child_details]
 * @property {Object} [esp_modified]
 * @property {Identifier} identifiers
 * @property {Object} [raw_meta]
 * @property {Object} [a_set]
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [po_tax_amount]
 * @property {number} [total_gst_percentage]
 * @property {boolean} [partial_can_ret]
 * @property {number} [item_base_price]
 * @property {number} [po_line_amount]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef PDFLinks
 * @property {string} invoice_type
 * @property {string} [label]
 * @property {string} [b2b]
 * @property {string} [po_invoice]
 * @property {string} [label_pos]
 * @property {string} [credit_note_url]
 * @property {string} [label_a6]
 * @property {string} [invoice_a6]
 * @property {string} [invoice]
 * @property {string} [invoice_a4]
 * @property {string} [label_a4]
 * @property {string} [invoice_pos]
 * @property {string} label_type
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [box_type]
 * @property {string} [order_item_id]
 * @property {number} [size_level_total_qty]
 * @property {string} [channel_shipment_id]
 * @property {number} [employee_discount]
 * @property {number} [quantity]
 * @property {string} [channel_order_id]
 * @property {string} [coupon_code]
 * @property {string} [due_date]
 * @property {boolean} [is_priority]
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_min]
 * @property {string} [t_max]
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef BuyerDetails
 * @property {string} state
 * @property {string} name
 * @property {string} [ajio_site_id]
 * @property {string} address
 * @property {number} pincode
 * @property {string} city
 * @property {string} gstin
 */

/**
 * @typedef LockData
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 * @property {boolean} [mto]
 */

/**
 * @typedef EInvoice
 * @property {number} [acknowledge_no]
 * @property {string} [signed_invoice]
 * @property {string} [signed_qr_code]
 * @property {string} [error_message]
 * @property {string} [error_code]
 * @property {string} [irn]
 * @property {string} [acknowledge_date]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [invoice]
 * @property {EInvoice} [credit_note]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef ShipmentMeta
 * @property {number} weight
 * @property {Object} [dp_options]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [dp_id]
 * @property {boolean} same_store_available
 * @property {string} [return_awb_number]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [box_type]
 * @property {Formatted} [formatted]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {LockData} [lock_data]
 * @property {number} [shipment_weight]
 * @property {string} [packaging_name]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {Object} [b2c_buyer_details]
 * @property {DebugInfo} [debug_info]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [dp_sort_key]
 * @property {string} [po_number]
 * @property {number} [return_store_node]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [return_affiliate_shipment_id]
 * @property {Object} [bag_weight]
 * @property {number} [shipment_volumetric_weight]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {string} [return_affiliate_order_id]
 * @property {Object} [ewaybill_info]
 * @property {Object} [return_details]
 * @property {string} [awb_number]
 * @property {string} [order_type]
 * @property {string} [dp_name]
 * @property {Object} [external]
 * @property {string} [due_date]
 * @property {string} [marketplace_store_id]
 * @property {string} [store_invoice_updated_date]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_order_id
 * @property {string} affiliate_bag_id
 * @property {PDFLinks} [pdf_links]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_store_id
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [company_affiliate_tag]
 * @property {string} [affiliate_id]
 * @property {string} [ad_id]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_returnable
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef BagGSTDetails
 * @property {string} sgst_gst_fee
 * @property {boolean} [is_default_hsn_code]
 * @property {string} igst_gst_fee
 * @property {number} value_of_good
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {number} igst_tax_percentage
 * @property {number} gst_tax_percentage
 * @property {string} gst_tag
 * @property {string} hsn_code_id
 * @property {string} [gstin_code]
 * @property {number} sgst_tax_percentage
 * @property {string} cgst_gst_fee
 * @property {number} gst_fee
 * @property {string} hsn_code
 * @property {number} cgst_tax_percentage
 */

/**
 * @typedef StoreAddress
 * @property {string} address_category
 * @property {string} address1
 * @property {string} [area]
 * @property {number} latitude
 * @property {string} [address2]
 * @property {string} country
 * @property {string} state
 * @property {string} phone
 * @property {string} address_type
 * @property {number} pincode
 * @property {string} [version]
 * @property {number} longitude
 * @property {string} created_at
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {string} city
 * @property {string} contact_person
 * @property {string} updated_at
 * @property {string} country_code
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [password]
 * @property {string} [user]
 * @property {string} [username]
 * @property {boolean} enabled
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEinvoice} [e_invoice]
 * @property {StoreEwaybill} [e_waybill]
 */

/**
 * @typedef Document
 * @property {string} ds_type
 * @property {string} value
 * @property {boolean} verified
 * @property {string} [url]
 * @property {string} legal_name
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [username]
 * @property {string} [user]
 * @property {string} [password]
 */

/**
 * @typedef StoreMeta
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} [gst_number]
 * @property {Object} [ewaybill_portal_details]
 * @property {Object[]} [timing]
 * @property {Object} [additional_contact_details]
 * @property {string[]} [notification_emails]
 * @property {StoreDocuments} [documents]
 * @property {string} display_name
 * @property {string} stage
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {Object} [product_return_config]
 */

/**
 * @typedef Store
 * @property {Object} [brand_id]
 * @property {boolean} [is_active]
 * @property {string} address1
 * @property {StoreAddress} [store_address_json]
 * @property {string[]} [brand_store_tags]
 * @property {string} [store_active_from]
 * @property {StoreMeta} meta
 * @property {string} s_id
 * @property {string} [code]
 * @property {string} [mall_name]
 * @property {boolean} [is_archived]
 * @property {number} latitude
 * @property {string} [address2]
 * @property {string} country
 * @property {number} phone
 * @property {string} state
 * @property {string} fulfillment_channel
 * @property {string} [mall_area]
 * @property {string} store_email
 * @property {string} login_username
 * @property {string} pincode
 * @property {number} longitude
 * @property {number} [alohomora_user_id]
 * @property {string} location_type
 * @property {string} [order_integration_id]
 * @property {string} created_at
 * @property {string} name
 * @property {number} [packaging_material_count]
 * @property {string} city
 * @property {number} [parent_store_id]
 * @property {number} company_id
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} contact_person
 * @property {string} [updated_at]
 * @property {string} [vat_no]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_order_id
 * @property {string} affiliate_bag_id
 * @property {number} [employee_discount]
 * @property {AffiliateMeta} affiliate_meta
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef Brand
 * @property {string} [start_date]
 * @property {number} brand_id
 * @property {string} [script_last_ran]
 * @property {number} [created_on]
 * @property {string} [invoice_prefix]
 * @property {boolean} [credit_note_allowed]
 * @property {string} brand_name
 * @property {number} [modified_on]
 * @property {string} [pickup_location]
 * @property {boolean} [is_virtual_invoice]
 * @property {number} [credit_note_expiry_days]
 * @property {string} company
 * @property {string} [logo]
 */

/**
 * @typedef Attributes
 * @property {string} [essential]
 * @property {string} [primary_color_hex]
 * @property {string} [name]
 * @property {string} [primary_material]
 * @property {string} [primary_color]
 * @property {string} [marketer_name]
 * @property {string} [marketer_address]
 * @property {string} [brand_name]
 * @property {string[]} [gender]
 */

/**
 * @typedef Item
 * @property {number} brand_id
 * @property {number} [l2_category_id]
 * @property {string[]} [l1_category]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {boolean} [can_cancel]
 * @property {string} [last_updated_at]
 * @property {boolean} [can_return]
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {string} [webstore_product_url]
 * @property {number} [l3_category]
 * @property {string} [gender]
 * @property {string} slug_key
 * @property {string} size
 * @property {Attributes} attributes
 * @property {number} item_id
 * @property {string} name
 * @property {string[]} image
 * @property {string} [l3_category_name]
 * @property {string[]} [l2_category]
 * @property {string} [branch_url]
 * @property {string} brand
 * @property {number} [l1_category_id]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {number} [line_number]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {string} [b_type]
 * @property {Article} article
 * @property {BagStatusHistory} current_status
 * @property {Prices} prices
 * @property {Object} [restore_promos]
 * @property {Object[]} [reasons]
 * @property {Dates} [dates]
 * @property {number} b_id
 * @property {BagStatusHistory} current_operational_status
 * @property {BagMeta} [meta]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {boolean} [restore_coupon]
 * @property {string} [shipment_id]
 * @property {BagStatusHistory[]} bag_status
 * @property {Object[]} [applied_promos]
 * @property {BagReturnableCancelableStatus} status
 * @property {ArticleDetails} [article_details]
 * @property {BagGSTDetails} gst_details
 * @property {Store} [ordering_store]
 * @property {number} [quantity]
 * @property {string[]} [tags]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {string} [identifier]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {string} [order_integration_id]
 * @property {string} [seller_identifier]
 * @property {string} [display_name]
 * @property {number[]} [original_bag_list]
 * @property {Object} [qc_required]
 * @property {string} [operational_status]
 * @property {Brand} brand
 * @property {number} [bag_update_time]
 * @property {string} [entity_type]
 * @property {string} journey_type
 * @property {Item} item
 * @property {number} [no_of_bags_order]
 * @property {Object} [parent_promo_bags]
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {number} size
 * @property {number} current
 * @property {string} page_type
 * @property {boolean} has_next
 * @property {number} item_total
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {Page1} page
 * @property {BagDetailsPlatformResponse[]} items
 */

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [error]
 * @property {string} [shipment_id]
 * @property {number} [status]
 * @property {string} [message]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {string} [error_trace]
 * @property {number} status
 * @property {string} message
 */

/**
 * @typedef StoreReassign
 * @property {string} [fynd_order_id]
 * @property {string} [set_id]
 * @property {string} [item_id]
 * @property {string} [affiliate_order_id]
 * @property {number} store_id
 * @property {string} [affiliate_id]
 * @property {number} [bag_id]
 * @property {number[]} [reason_ids]
 * @property {string} [affiliate_bag_id]
 * @property {string} [mongo_article_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} [id]
 * @property {string} [affiliate_order_id]
 * @property {string} reason_text
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_bag_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} entity_type
 * @property {string} action_type
 * @property {Entities[]} entities
 * @property {string} action
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef Bags
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef CheckResponse
 * @property {boolean} [lock_status]
 * @property {boolean} [is_bag_locked]
 * @property {string} [status]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [affiliate_id]
 * @property {OriginalFilter} [original_filter]
 * @property {string} [affiliate_shipment_id]
 * @property {Bags[]} [bags]
 * @property {string} [shipment_id]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {CheckResponse[]} [check_response]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [platform_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {number} [company_id]
 * @property {string} [from_datetime]
 * @property {number} id
 * @property {string} [platform_name]
 * @property {string} [logo_url]
 * @property {string} [title]
 * @property {string} [to_datetime]
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
 * @property {boolean} status
 * @property {string} call_id
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
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
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {ProductsDataUpdates[]} [products]
 */

/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */

/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */

/**
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
 */

/**
 * @typedef ShipmentsRequest
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products]
 */

/**
 * @typedef StatuesRequest
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state]
 * @property {string} [status]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [task]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [force_transition]
 * @property {StatuesRequest[]} [statuses]
 */

/**
 * @typedef ShipmentsResponse
 * @property {number} [status]
 * @property {string} [stack_trace]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {Object} [final_state]
 * @property {Object} [meta]
 * @property {string} [identifier]
 * @property {string} [code]
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
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */

/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
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
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} created_at
 * @property {string} owner
 * @property {string} [description]
 * @property {string} token
 * @property {string} id
 * @property {string} updated_at
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} secret
 * @property {string} name
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */

/**
 * @typedef Affiliate
 * @property {string} token
 * @property {AffiliateConfig} [config]
 * @property {string} id
 */

/**
 * @typedef OrderConfig
 * @property {string} [bag_end_state]
 * @property {boolean} [create_user]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [article_lookup]
 * @property {Affiliate} affiliate
 * @property {string} [store_lookup]
 */

/**
 * @typedef OrderUser
 * @property {string} [address1]
 * @property {number} phone
 * @property {string} pincode
 * @property {string} city
 * @property {string} email
 * @property {number} mobile
 * @property {string} [address2]
 * @property {string} country
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} state
 */

/**
 * @typedef ArticleDetails1
 * @property {number} brand_id
 * @property {Object} attributes
 * @property {Object} dimension
 * @property {Object} category
 * @property {string} _id
 * @property {number} quantity
 * @property {Object} weight
 */

/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentDetails
 * @property {number} shipments
 * @property {ArticleDetails1[]} articles
 * @property {string} [box_type]
 * @property {number} [dp_id]
 * @property {string} affiliate_shipment_id
 * @property {Object} [meta]
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentConfig
 * @property {string} source
 * @property {LocationDetails} [location_details]
 * @property {ShipmentDetails[]} shipment
 * @property {string} to_pincode
 * @property {string} journey
 * @property {string} identifier
 * @property {string} action
 * @property {string} payment_mode
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
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
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {number} price_effective
 * @property {number} delivery_charge
 * @property {number} company_id
 * @property {number} unit_price
 * @property {string} modified_on
 * @property {number} discount
 * @property {number} item_id
 * @property {number} transfer_price
 * @property {number} amount_paid
 * @property {string} _id
 * @property {string} item_size
 * @property {string} sku
 * @property {Object} identifier
 * @property {string} seller_identifier
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} store_id
 * @property {number} price_marked
 * @property {string} fynd_store_id
 * @property {number} quantity
 * @property {number} avl_qty
 * @property {Object} affiliate_meta
 * @property {string} affiliate_store_id
 * @property {string} hsn_code_id
 */

/**
 * @typedef OrderInfo
 * @property {number} order_value
 * @property {OrderUser} billing_address
 * @property {number} delivery_charges
 * @property {ShipmentData} [shipment]
 * @property {UserData} user
 * @property {string} [affiliate_order_id]
 * @property {Object} items
 * @property {Object} [payment]
 * @property {OrderUser} shipping_address
 * @property {OrderPriority} [order_priority]
 * @property {AffiliateBag[]} bags
 * @property {string} [coupon]
 * @property {number} cod_charges
 * @property {number} discount
 * @property {string} payment_mode
 */

/**
 * @typedef CreateOrderPayload
 * @property {OrderConfig} order_config
 * @property {string} affiliate_id
 * @property {OrderInfo} order_info
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
 * @property {string} display_text
 * @property {string} slug
 * @property {number} id
 * @property {string} description
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} createdat
 * @property {string} [l3_detail]
 * @property {string} user
 * @property {string} type
 * @property {string} message
 * @property {string} [ticket_id]
 * @property {string} [l1_detail]
 * @property {string} [ticket_url]
 * @property {number} [bag_id]
 * @property {string} [l2_detail]
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */

/**
 * @typedef ErrorDetail
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsDataPayload
 * @property {string} brand_name
 * @property {number} phone_number
 * @property {string} order_id
 * @property {string} message
 * @property {number} amount_paid
 * @property {string} country_code
 * @property {number} shipment_id
 * @property {string} payment_mode
 * @property {string} customer_name
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 */

/**
 * @typedef Meta
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [status]
 * @property {number[]} [bag_list]
 * @property {number} id
 * @property {Meta} meta
 * @property {string} [shipment_id]
 * @property {string} [remarks]
 */

/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */

/**
 * @typedef OrderStatusData
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {OrderDetails} order_details
 * @property {string[]} [errors]
 */

/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {string} qc_required
 * @property {string[]} [shipment_ids]
 * @property {string} order_type
 * @property {number} dp_id
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [dispatch_after_date]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [pack_by_date]
 * @property {string} [confirm_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_by_date]
 */

/**
 * @typedef Tax
 * @property {Object} amount
 * @property {number} rate
 * @property {string} name
 * @property {Object[]} [breakup]
 */

/**
 * @typedef Charge
 * @property {Object} amount
 * @property {string} name
 * @property {string} type
 * @property {string} [code]
 * @property {Tax} [tax]
 */

/**
 * @typedef LineItem
 * @property {string} [external_line_id]
 * @property {Charge[]} charges
 * @property {string} [custom_messasge]
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {string} seller_identifier
 */

/**
 * @typedef Shipment
 * @property {number} [external_shipment_id]
 * @property {ProcessingDates} [processing_dates]
 * @property {number} [priority]
 * @property {number} location_id
 * @property {Object} [meta]
 * @property {LineItem[]} line_items
 */

/**
 * @typedef ShippingInfo
 * @property {string} [state_code]
 * @property {string} address1
 * @property {string} [customer_code]
 * @property {string} [address2]
 * @property {string} [alternate_mobile_number]
 * @property {Object[]} [slot]
 * @property {string} [address_type]
 * @property {string} [house_no]
 * @property {string} pincode
 * @property {string} [alternate_email]
 * @property {string} first_name
 * @property {string} [external_customer_code]
 * @property {string} primary_mobile_number
 * @property {string} [landmark]
 * @property {string} [middle_name]
 * @property {string} [floor_no]
 * @property {string} [shipping_type]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {Object} [geo_location]
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} [title]
 * @property {string} [country_code]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef BillingInfo
 * @property {string} [state_code]
 * @property {string} address1
 * @property {string} [customer_code]
 * @property {string} [address2]
 * @property {string} [alternate_mobile_number]
 * @property {string} [house_no]
 * @property {string} pincode
 * @property {string} [alternate_email]
 * @property {string} first_name
 * @property {string} [external_customer_code]
 * @property {string} primary_mobile_number
 * @property {string} [middle_name]
 * @property {string} [floor_no]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} [title]
 * @property {string} [country_code]
 */

/**
 * @typedef PaymentMethod
 * @property {Object} [meta]
 * @property {number} amount
 * @property {Object} [transaction_data]
 * @property {string} collect_by
 * @property {string} mode
 * @property {string} refund_by
 * @property {string} name
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef CreateOrderAPI
 * @property {string} [external_creation_date]
 * @property {Shipment[]} shipments
 * @property {Object} [currency_info]
 * @property {Charge[]} charges
 * @property {ShippingInfo} shipping_info
 * @property {string} [external_order_id]
 * @property {TaxInfo} [tax_info]
 * @property {Object} [meta]
 * @property {BillingInfo} billing_info
 * @property {PaymentInfo} payment_info
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [meta]
 * @property {number} status
 * @property {string} [stack_trace]
 * @property {string} [exception]
 * @property {string} message
 * @property {Object} [info]
 * @property {string} [code]
 * @property {string} [request_id]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [mode]
 * @property {string} [refund_by]
 * @property {string} [collect_by]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {PaymentMethods[]} [payment_methods]
 */

/**
 * @typedef CreateChannelConfig
 * @property {DpConfiguration} [dp_configuration]
 * @property {boolean} [location_reassignment]
 * @property {string} [shipment_assignment]
 * @property {Object} [logo_url]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string[]} [lock_states]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_inserted]
 * @property {boolean} [is_upserted]
 */

/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UploadConsent
 * @property {string} manifest_id
 * @property {string} consent_url
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
 * @property {number} mobile
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} start_date
 * @property {string} end_date
 */

/**
 * @typedef GetSearchWordsData
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {string} [uid]
 * @property {Object} [result]
 * @property {string} [app_id]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData} [items]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {SearchKeywordResult} result
 * @property {string} [app_id]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData[]} [items]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {string} [uid]
 * @property {Object[]} [results]
 * @property {string} [app_id]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */

/**
 * @typedef Media
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [type]
 * @property {string} [url]
 * @property {Object} [query]
 * @property {Object} [params]
 */

/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */

/**
 * @typedef AutocompleteResult
 * @property {Media} [logo]
 * @property {AutocompleteAction} [action]
 * @property {Object} [_custom_json]
 * @property {string} [display]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {AutocompleteResult[]} [results]
 * @property {string} [app_id]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} product_uid
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {boolean} [allow_remove]
 * @property {number} min_quantity
 * @property {number} max_quantity
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {string} slug
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {string} choice
 * @property {string} name
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [created_by]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef ProductBundleRequest
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {string} slug
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {string} choice
 * @property {string} name
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [created_by]
 */

/**
 * @typedef LimitedProductData
 * @property {Object} [identifier]
 * @property {Object} [attributes]
 * @property {number} [quantity]
 * @property {string} [slug]
 * @property {string} [country_of_origin]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string[]} [sizes]
 * @property {string} [short_description]
 * @property {Object} [price]
 * @property {string} [item_code]
 * @property {string[]} [images]
 */

/**
 * @typedef Size
 * @property {number} [quantity]
 * @property {boolean} [is_available]
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef Price
 * @property {number} [max_effective]
 * @property {number} [min_marked]
 * @property {number} [max_marked]
 * @property {string} [currency]
 * @property {number} [min_effective]
 */

/**
 * @typedef GetProducts
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {boolean} [allow_remove]
 * @property {Size[]} [sizes]
 * @property {Price} [price]
 * @property {number} [min_quantity]
 * @property {number} [max_quantity]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {number} [company_id]
 * @property {GetProducts[]} [products]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {string} [choice]
 * @property {string} [name]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {string} slug
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {string} choice
 * @property {string} name
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {boolean} [active]
 * @property {string} [tag]
 * @property {number} [company_id]
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {Guide} [guide]
 * @property {string} name
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {string} [created_on]
 * @property {string} title
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} [image]
 * @property {number} [brand_id]
 */

/**
 * @typedef SizeGuideResponse
 * @property {boolean} [active]
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {string} [tag]
 * @property {Object} [guide]
 * @property {string} [name]
 * @property {string} [subtitle]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {number} [brand_id]
 * @property {string} [title]
 * @property {Object} [created_by]
 */

/**
 * @typedef MetaFields
 * @property {string} key
 * @property {string} value
 */

/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 */

/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef MOQ
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef ApplicationItemResponse
 * @property {SEO} [seo]
 * @property {Object} [alt_text]
 * @property {MOQ} [moq]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} data
 * @property {Object[]} [values]
 */

/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {number} next
 * @property {boolean} has_next
 * @property {number} current
 */

/**
 * @typedef GetConfigResponse
 * @property {PageResponseType} page
 * @property {Object[]} data
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} display_type
 * @property {string} [key]
 * @property {boolean} is_active
 * @property {string} [unit]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {string} name
 */

/**
 * @typedef AppConfigurationDetail
 * @property {boolean} is_active
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} slug
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {string[]} [template_slugs]
 * @property {string} app_id
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} key
 * @property {boolean} is_active
 * @property {string} default_key
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {string} app_id
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
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [variant]
 * @property {Object} [detail]
 * @property {Object} [similar]
 * @property {Object} [compare]
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
 * @property {Object[]} [units]
 * @property {string} [key]
 * @property {string[]} [filter_types]
 * @property {string} [display]
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
 * @typedef GetCatalogConfigurationMetaData
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {MetaDataListingResponse} [listing]
 */

/**
 * @typedef ProductSize
 * @property {number} min
 * @property {number} max
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} display_type
 * @property {string} key
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} name
 * @property {ProductSize} size
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} key
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {ProductSize} [size]
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductVariant} variant
 * @property {ConfigurationProductSimilar} similar
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} key
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef ConfigurationListingSort
 * @property {string} default_key
 * @property {ConfigurationListingSortConfig[]} [config]
 */

/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [start]
 * @property {number} [end]
 * @property {string} [display]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {Object} [map]
 * @property {string} [value]
 * @property {string} [condition]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object[]} [map_values]
 * @property {string} [sort]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} key
 * @property {boolean} is_active
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [name]
 * @property {string} type
 * @property {string} [display_name]
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
 * @typedef AppCatalogConfiguration
 * @property {Object} [modified_by]
 * @property {string} config_type
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} [config_id]
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} app_id
 * @property {ConfigurationListing} [listing]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {boolean} [is_default]
 * @property {AppCatalogConfiguration} [data]
 */

/**
 * @typedef AppConfiguration
 * @property {Object} [modified_by]
 * @property {string} config_type
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} app_id
 * @property {ConfigurationListing} [listing]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} config_type
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} [config_id]
 * @property {string} [id]
 * @property {string} app_id
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {boolean} [is_default]
 * @property {EntityConfiguration} [data]
 */

/**
 * @typedef ProductSortOn
 * @property {string} [value]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */

/**
 * @typedef ProductFiltersValue
 * @property {string} [display_format]
 * @property {string} [query_format]
 * @property {Object} value
 * @property {number} [selected_min]
 * @property {string} [currency_code]
 * @property {number} [selected_max]
 * @property {boolean} is_selected
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [count]
 * @property {string} [currency_symbol]
 * @property {string} display
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} [logo]
 * @property {string} name
 * @property {string[]} [operators]
 * @property {string} [kind]
 * @property {string} display
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef BannerImage
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {string} op
 * @property {Object[]} value
 */

/**
 * @typedef Media1
 * @property {string} [type]
 * @property {string} url
 * @property {Object} [meta]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {boolean} [allow_facets]
 * @property {Action} [action]
 * @property {string} [name]
 * @property {string} [uid]
 * @property {ImageUrls} [banners]
 * @property {string[]} [tag]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {Object} [_schedule]
 * @property {boolean} [is_active]
 * @property {Object} [cron]
 * @property {string} [type]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {Media1} [logo]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {Object} [badge]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {Page} [page]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {CollectionListingFilter} [filters]
 */

/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef CollectionSchedule
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [start]
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 */

/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [username]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */

/**
 * @typedef CreateCollection
 * @property {boolean} [allow_facets]
 * @property {string} name
 * @property {CollectionBanner} banners
 * @property {string[]} [tags]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {boolean} [published]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} type
 * @property {SeoDetail} [seo]
 * @property {string} [sort_on]
 * @property {boolean} [is_visible]
 * @property {string[]} [visible_facets_keys]
 * @property {UserInfo} [modified_by]
 * @property {CollectionQuery[]} [query]
 * @property {string} slug
 * @property {CollectionImage} logo
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {string} app_id
 * @property {CollectionBadge} [badge]
 * @property {UserInfo} [created_by]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {boolean} [allow_facets]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {string[]} [tag]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {Object} [_schedule]
 * @property {boolean} [is_active]
 * @property {Object} [cron]
 * @property {string} [type]
 * @property {string} [sort_on]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {BannerImage} [logo]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {Object} [badge]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {boolean} [allow_facets]
 * @property {string[]} [tag]
 * @property {Object} [badge]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Object} [cron]
 * @property {Media1} [logo]
 * @property {string} [slug]
 * @property {boolean} [allow_sort]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {Object} [_schedule]
 * @property {ImageUrls} [banners]
 * @property {string} [app_id]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef UpdateCollection
 * @property {boolean} [allow_facets]
 * @property {string} [name]
 * @property {CollectionBanner} [banners]
 * @property {string[]} [tags]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {boolean} [published]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} [type]
 * @property {SeoDetail} [seo]
 * @property {string} [sort_on]
 * @property {boolean} [is_visible]
 * @property {string[]} [visible_facets_keys]
 * @property {UserInfo} [modified_by]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {CollectionImage} [logo]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {CollectionBadge} [badge]
 */

/**
 * @typedef ProductBrand
 * @property {number} [uid]
 * @property {Media1} [logo]
 * @property {Action} [action]
 * @property {string} [name]
 */

/**
 * @typedef Price1
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [type]
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */

/**
 * @typedef ProductListingDetail
 * @property {boolean} [sellable]
 * @property {string} [item_type]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string[]} [highlights]
 * @property {boolean} [has_variant]
 * @property {string[]} [tryouts]
 * @property {Object} [teaser_tag]
 * @property {string} [discount]
 * @property {ProductBrand} [brand]
 * @property {Object} [attributes]
 * @property {string[]} [similars]
 * @property {number} [rating]
 * @property {Object} [promo_meta]
 * @property {Media1[]} [medias]
 * @property {string} [type]
 * @property {string} [short_description]
 * @property {string} [product_online_date]
 * @property {ProductListingPrice} [price]
 * @property {string} [item_code]
 * @property {number} [rating_count]
 * @property {string} slug
 * @property {string} [color]
 * @property {string} [image_nature]
 * @property {string} [description]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {Page} [page]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */

/**
 * @typedef CollectionItemRequest
 * @property {string} [type]
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {CollectionQuery[]} [query]
 */

/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_sizes]
 * @property {number} [available_articles]
 * @property {number} [available_sizes]
 * @property {string} [name]
 * @property {number} [total_articles]
 * @property {number} [article_freshness]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 * @property {number} [sellable_count]
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
 * @property {number} [company_id]
 * @property {string} opt_level
 * @property {number[]} [store_ids]
 * @property {string} [platform]
 * @property {number[]} [brand_ids]
 */

/**
 * @typedef CompanyOptIn
 * @property {boolean} enabled
 * @property {Object} [modified_by]
 * @property {number} company_id
 * @property {string} opt_level
 * @property {number} modified_on
 * @property {number} created_on
 * @property {number[]} store_ids
 * @property {string} platform
 * @property {number[]} brand_ids
 * @property {Object} [created_by]
 */

/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [company_type]
 * @property {number} [uid]
 * @property {string} [business_type]
 * @property {string} [name]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {string} [brand_name]
 * @property {number} [total_article]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {Page} [page]
 * @property {CompanyBrandDetail[]} [items]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [store]
 * @property {string} [company]
 * @property {number} [brand]
 */

/**
 * @typedef StoreDetail
 * @property {Object[]} [documents]
 * @property {Object[]} [additional_contacts]
 * @property {Object} [timing]
 * @property {number} [company_id]
 * @property {Object} [address]
 * @property {string} [store_type]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [display_name]
 * @property {string} [store_code]
 * @property {Object} [manager]
 */

/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
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
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AttributeMaster
 * @property {string} [format]
 * @property {boolean} [multi]
 * @property {string} type
 * @property {string[]} [allowed_values]
 * @property {boolean} [mandatory]
 * @property {AttributeSchemaRange} [range]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {number} [priority]
 * @property {boolean} indexing
 */

/**
 * @typedef GenderDetail
 * @property {string[]} [departments]
 * @property {boolean} [is_nested]
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [name]
 * @property {string} [description]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [id]
 * @property {AttributeMaster} [schema]
 * @property {AttributeMasterFilter} [filters]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef PTErrorResponse
 * @property {number} [status]
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {Object} [errors]
 * @property {string} [message]
 */

/**
 * @typedef UserSerializer
 * @property {string} [user_id]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [contact]
 */

/**
 * @typedef GetDepartment
 * @property {UserSerializer} [modified_by]
 * @property {string} [item_type]
 * @property {boolean} [is_active]
 * @property {number} [page_size]
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {string} [search]
 * @property {number} [uid]
 * @property {number} [page_no]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string[]} [synonyms]
 * @property {number} [priority_order]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {number} [status]
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {Object} [errors]
 * @property {string} [message]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {string} logo
 * @property {Object} [platforms]
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {number} [uid]
 * @property {string} [_cls]
 * @property {string[]} [synonyms]
 * @property {string[]} [tags]
 * @property {number} priority_order
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
 * @typedef UserDetail
 * @property {string} user_id
 * @property {string} [contact]
 * @property {boolean} [super_user]
 * @property {string} username
 */

/**
 * @typedef DepartmentModel
 * @property {UserDetail} [modified_by]
 * @property {boolean} [is_active]
 * @property {Object} [slug]
 * @property {string} logo
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserDetail} [verified_by]
 * @property {Object} [_id]
 * @property {string} created_on
 * @property {string} modified_on
 * @property {number} [uid]
 * @property {Object} name
 * @property {Object[]} [synonyms]
 * @property {Object} [_cls]
 * @property {number} priority_order
 * @property {UserDetail} [created_by]
 */

/**
 * @typedef ProductTemplate
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {string} [tag]
 * @property {Object} [modified_by]
 * @property {boolean} [is_active]
 * @property {string[]} [departments]
 * @property {string[]} [attributes]
 * @property {string} slug
 * @property {string} [logo]
 * @property {string[]} [categories]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {boolean} is_expirable
 * @property {Object} [created_by]
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef Properties
 * @property {Object} [item_type]
 * @property {Object} [product_group_tag]
 * @property {Object} [multi_size]
 * @property {Object} [return_config]
 * @property {Object} [trader_type]
 * @property {Object} [product_publish]
 * @property {Object} [currency]
 * @property {Object} [name]
 * @property {Object} [custom_order]
 * @property {Object} [highlights]
 * @property {Object} [tags]
 * @property {Object} [teaser_tag]
 * @property {Object} [media]
 * @property {Object} [size_guide]
 * @property {Object} [is_active]
 * @property {Object} [category_slug]
 * @property {Object} [hsn_code]
 * @property {Object} [sizes]
 * @property {Object} [short_description]
 * @property {Object} [item_code]
 * @property {Object} [trader]
 * @property {Object} [brand_uid]
 * @property {Object} [is_dependent]
 * @property {Object} [variants]
 * @property {Object} [slug]
 * @property {Object} [country_of_origin]
 * @property {Object} [description]
 * @property {Object} [command]
 * @property {Object} [no_of_boxes]
 */

/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {Properties} [properties]
 * @property {string[]} [required]
 * @property {string} [description]
 * @property {string} [type]
 * @property {string} [title]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {string} [tag]
 * @property {boolean} [is_active]
 * @property {string[]} [departments]
 * @property {string[]} [attributes]
 * @property {string} slug
 * @property {string} [logo]
 * @property {string[]} [categories]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [id]
 * @property {boolean} is_expirable
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
 * @property {string[]} [hsn_code]
 * @property {string[]} [country_of_origin]
 */

/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string} [type]
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {string} [status]
 * @property {string} [task_id]
 * @property {string} [url]
 * @property {string} [id]
 * @property {string} [trigger_on]
 * @property {number} [seller_id]
 * @property {ProductDownloadItemsData} [data]
 * @property {Object} [template_tags]
 * @property {string} [completed_on]
 * @property {VerifiedBy} [created_by]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {Page} [page]
 * @property {ProductDownloadsItems} [items]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
 */

/**
 * @typedef Hierarchy
 * @property {number} department
 * @property {number} l1
 * @property {number} l2
 */

/**
 * @typedef Media2
 * @property {string} logo
 * @property {string} portrait
 * @property {string} landscape
 */

/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 */

/**
 * @typedef Category
 * @property {Hierarchy[]} [hierarchy]
 * @property {Object} [modified_by]
 * @property {boolean} is_active
 * @property {number[]} departments
 * @property {Media2} [media]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {string} name
 * @property {string} [id]
 * @property {number} [uid]
 * @property {CategoryMapping} [marketplaces]
 * @property {string} [created_on]
 * @property {number} level
 * @property {string[]} [synonyms]
 * @property {string} [modified_on]
 * @property {string[]} [tryouts]
 * @property {Object} [created_by]
 */

/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */

/**
 * @typedef CategoryRequestBody
 * @property {Hierarchy[]} [hierarchy]
 * @property {boolean} is_active
 * @property {Media2} [media]
 * @property {number[]} departments
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {string} name
 * @property {CategoryMapping} [marketplaces]
 * @property {number} level
 * @property {string[]} [synonyms]
 * @property {string[]} [tryouts]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef Logo
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Image
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Product
 * @property {boolean} [is_physical]
 * @property {string} [item_type]
 * @property {boolean} [multi_size]
 * @property {Object} [tax_identifier]
 * @property {ProductPublished} [product_publish]
 * @property {string} [currency]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [custom_order]
 * @property {string[]} [highlights]
 * @property {boolean} [is_expirable]
 * @property {Media1[]} [media]
 * @property {Brand} [brand]
 * @property {string} [template_tag]
 * @property {string[]} [l3_mapping]
 * @property {string} [size_guide]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} [category_slug]
 * @property {string} [hsn_code]
 * @property {Object[]} [sizes]
 * @property {string} [short_description]
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {number} [category_uid]
 * @property {boolean} [is_set]
 * @property {number[]} [departments]
 * @property {boolean} [is_dependent]
 * @property {Object} [variants]
 * @property {string} [primary_color]
 * @property {string} [slug]
 * @property {string} [country_of_origin]
 * @property {string} [id]
 * @property {string} [description]
 * @property {string} [image_nature]
 * @property {string} [color]
 * @property {Object[]} [all_sizes]
 * @property {Image[]} [images]
 */

/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 */

/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */

/**
 * @typedef Trader
 * @property {string} [type]
 * @property {string[]} [address]
 * @property {string} [name]
 */

/**
 * @typedef ProductCreateUpdate
 * @property {number} company_id
 * @property {string} item_type
 * @property {boolean} [multi_size]
 * @property {string[]} [product_group_tag]
 * @property {TaxIdentifier} tax_identifier
 * @property {ReturnConfig} return_config
 * @property {string} [action]
 * @property {ProductPublish} [product_publish]
 * @property {string} currency
 * @property {string} name
 * @property {number} [uid]
 * @property {CustomOrder} [custom_order]
 * @property {string[]} [highlights]
 * @property {string[]} [tags]
 * @property {TeaserTag} [teaser_tag]
 * @property {Media1[]} [media]
 * @property {string} [requester]
 * @property {string} template_tag
 * @property {string} [bulk_job_id]
 * @property {boolean} [is_image_less_product]
 * @property {string} [size_guide]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} category_slug
 * @property {string} [short_description]
 * @property {NetQuantity} [net_quantity]
 * @property {Object} item_code
 * @property {Trader[]} trader
 * @property {number} brand_uid
 * @property {boolean} [is_set]
 * @property {boolean} [is_dependent]
 * @property {number[]} departments
 * @property {Object} [variants]
 * @property {Object} [variant_media]
 * @property {string} slug
 * @property {string} country_of_origin
 * @property {string} [description]
 * @property {Object} [change_request_id]
 * @property {number} [no_of_boxes]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {boolean} [variant]
 * @property {string} [suggestion]
 * @property {string} [name]
 * @property {string[]} [tags]
 * @property {string} [raw_key]
 * @property {boolean} [is_nested]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMaster} schema
 * @property {Object} [synonyms]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [unit]
 * @property {string[]} departments
 * @property {string} slug
 * @property {string} [logo]
 * @property {AttributeMasterDetails} details
 * @property {string} [description]
 * @property {string} [modified_on]
 * @property {AttributeMasterFilter} filters
 * @property {Object} [created_by]
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */

/**
 * @typedef UserDetail1
 * @property {string} [user_id]
 * @property {string} [full_name]
 * @property {string} [username]
 */

/**
 * @typedef ProductBulkRequest
 * @property {string} [file_path]
 * @property {number} [company_id]
 * @property {UserDetail1} [modified_by]
 * @property {boolean} [is_active]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {string[]} [cancelled_records]
 * @property {string} [template_tag]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {number} [succeed]
 * @property {ProductTemplate} [template]
 * @property {string[]} [failed_records]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {UserDetail1} [created_by]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */

/**
 * @typedef UserInfo1
 * @property {string} [email]
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [username]
 */

/**
 * @typedef BulkJob
 * @property {UserInfo1} [modified_by]
 * @property {number} company_id
 * @property {string} [file_path]
 * @property {boolean} [is_active]
 * @property {string} [tracking_url]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {Object[]} [cancelled_records]
 * @property {string} [template_tag]
 * @property {string} [custom_template_tag]
 * @property {string} created_on
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {Object[]} [failed_records]
 * @property {number} total
 * @property {number} [cancelled]
 * @property {UserInfo1} [created_by]
 */

/**
 * @typedef BulkResponse
 * @property {UserInfo1} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} batch_id
 * @property {string} created_on
 * @property {string} [modified_on]
 * @property {UserInfo1} [created_by]
 */

/**
 * @typedef BulkProductRequest
 * @property {string} batch_id
 * @property {Object[]} data
 * @property {number} company_id
 * @property {string} template_tag
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
 * @typedef UserCommon
 * @property {string} [user_id]
 * @property {number} [company_id]
 * @property {string} [username]
 */

/**
 * @typedef Items
 * @property {UserCommon} [modified_by]
 * @property {string} [file_path]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [tracking_url]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {string[]} [failed_records]
 * @property {number} [total]
 * @property {number} [retry]
 * @property {number} [cancelled]
 * @property {UserCommon} [created_by]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Page} [page]
 * @property {Items[]} [items]
 */

/**
 * @typedef ProductBulkAssets
 * @property {string} url
 * @property {number} [company_id]
 * @property {Object} user
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [item_id]
 * @property {number} [company_id]
 * @property {string} [size]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef InventoryResponse
 * @property {number} [item_id]
 * @property {Object} [store]
 * @property {number} [sellable_quantity]
 * @property {number} [quantity]
 * @property {number} [price_effective]
 * @property {Object} [identifiers]
 * @property {string} [currency]
 * @property {string} [uid]
 * @property {number} [price_transfer]
 * @property {string} [size]
 * @property {string} [inventory_updated_on]
 * @property {string} [seller_identifier]
 * @property {number} [price]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */

/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {number} [uid]
 * @property {string} [item_code]
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
 * @property {number} [quantity]
 * @property {SizeDistribution} size_distribution
 * @property {string} [name]
 */

/**
 * @typedef GTIN
 * @property {boolean} [primary]
 * @property {string} gtin_value
 * @property {string} gtin_type
 */

/**
 * @typedef InvSize
 * @property {InventorySet} [set]
 * @property {boolean} [is_set]
 * @property {number} [item_length]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [item_height]
 * @property {number} quantity
 * @property {number} price_effective
 * @property {number} [item_weight]
 * @property {GTIN[]} identifiers
 * @property {string} currency
 * @property {number} [item_width]
 * @property {number} [price_transfer]
 * @property {string} size
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} store_code
 * @property {number} [price]
 * @property {string} [expiration_date]
 */

/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {ItemQuery} item
 * @property {InvSize[]} sizes
 */

/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [damaged]
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
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
 * @property {number} transfer
 * @property {number} effective
 * @property {string} currency
 * @property {string} [updated_at]
 * @property {Object} [tp_notes]
 */

/**
 * @typedef Trader1
 * @property {string} type
 * @property {string[]} address
 * @property {string} name
 */

/**
 * @typedef DimensionResponse
 * @property {string} unit
 * @property {number} height
 * @property {number} width
 * @property {boolean} is_default
 * @property {number} length
 */

/**
 * @typedef WeightResponse
 * @property {boolean} is_default
 * @property {string} unit
 * @property {number} shipping
 */

/**
 * @typedef InventorySellerResponse
 * @property {Object} [fynd_meta]
 * @property {Object} [tax_identifier]
 * @property {ReturnConfig1} [return_config]
 * @property {CompanyMeta} company
 * @property {string} [stage]
 * @property {Quantities} [quantities]
 * @property {string} uid
 * @property {number} total_quantity
 * @property {string[]} [tags]
 * @property {StoreMeta} store
 * @property {BrandMeta} brand
 * @property {Object} identifier
 * @property {Object} [meta]
 * @property {boolean} [track_inventory]
 * @property {ManufacturerResponse} manufacturer
 * @property {string} seller_identifier
 * @property {string} fynd_article_code
 * @property {number} item_id
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} fynd_item_code
 * @property {PriceMeta} price
 * @property {boolean} fragile
 * @property {Trader1[]} [trader]
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {InventorySet} [set]
 * @property {UserSerializer} [modified_by]
 * @property {boolean} [is_set]
 * @property {DimensionResponse} dimension
 * @property {string} [added_on_store]
 * @property {string} country_of_origin
 * @property {WeightResponse} weight
 * @property {string} size
 * @property {Object} [raw_meta]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {string} [file_path]
 * @property {number} [company_id]
 * @property {Object} [modified_by]
 * @property {boolean} [is_active]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {string[]} [failed_records]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {Object} [created_by]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [trace_id]
 * @property {number} [quantity]
 * @property {number} [price_effective]
 * @property {string} [currency]
 * @property {number} [total_quantity]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} seller_identifier
 * @property {number} [price]
 * @property {string} [expiration_date]
 * @property {number} [price_marked]
 * @property {string} store_code
 * @property {string[]} [tags]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {Object} [user]
 * @property {number} company_id
 * @property {InventoryJobPayload[]} sizes
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [status]
 * @property {string} task_id
 * @property {string} [url]
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {Object} [request_params]
 * @property {string} [completed_on]
 */

/**
 * @typedef InventoryExportRequest
 * @property {string} [type]
 * @property {number[]} [store]
 * @property {number[]} [brand]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} [status]
 * @property {string} task_id
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {Object} [request_params]
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
 * @property {string} [trace_id]
 * @property {number} [price_effective]
 * @property {number} [total_quantity]
 * @property {number} store_id
 * @property {string} seller_identifier
 * @property {string[]} [tags]
 * @property {string} [expiration_date]
 * @property {number} [price_marked]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {Object} [meta]
 * @property {InventoryPayload[]} [payload]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} message
 * @property {string} [errors]
 */

/**
 * @typedef InventoryResponseItem
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {string} [current]
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [tax2]
 * @property {boolean} [tax_on_mrp]
 * @property {number} [tax1]
 * @property {number} [company_id]
 * @property {boolean} [tax_on_esp]
 * @property {string} [hs2_code]
 * @property {string} [id]
 * @property {string} [hsn_code]
 * @property {string} [modified_on]
 * @property {number} [threshold2]
 * @property {number} [threshold1]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
 */

/**
 * @typedef HsnUpsert
 * @property {number} [tax2]
 * @property {boolean} tax_on_mrp
 * @property {number} tax1
 * @property {number} company_id
 * @property {boolean} [is_active]
 * @property {boolean} [tax_on_esp]
 * @property {string} hs2_code
 * @property {string} hsn_code
 * @property {number} [uid]
 * @property {number} [threshold2]
 * @property {number} threshold1
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
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
 * @property {TaxSlab[]} taxes
 * @property {Object} [modified_by]
 * @property {string} country_code
 * @property {string} description
 * @property {string} hsn_code
 * @property {string} type
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} reporting_hsn
 * @property {Object} [created_by]
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef BrandItem
 * @property {string} [discount]
 * @property {string[]} [departments]
 * @property {string} [slug]
 * @property {Media} [logo]
 * @property {Action} [action]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {string} [slug]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {number} [priority_order]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef ThirdLevelChild
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef SecondLevelChild
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef Child
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef CategoryItems
 * @property {string} [slug]
 * @property {Child[]} [childs]
 * @property {Action} [action]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {Object} [operators]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} page
 */

/**
 * @typedef ProductDetail
 * @property {string} [item_type]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string[]} [highlights]
 * @property {boolean} [has_variant]
 * @property {string[]} [tryouts]
 * @property {Object} [teaser_tag]
 * @property {ProductBrand} [brand]
 * @property {Object} [attributes]
 * @property {string[]} [similars]
 * @property {number} [rating]
 * @property {Object} [promo_meta]
 * @property {Media1[]} [medias]
 * @property {string} [type]
 * @property {string} [short_description]
 * @property {string} [product_online_date]
 * @property {string} [item_code]
 * @property {number} [rating_count]
 * @property {string} slug
 * @property {string} [color]
 * @property {string} [image_nature]
 * @property {string} [description]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 */

/**
 * @typedef InventoryPage
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {string} type
 * @property {number} item_total
 * @property {string} [next_id]
 */

/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
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
 * @typedef GetAddressSerializer
 * @property {number} [pincode]
 * @property {string} [address2]
 * @property {number} [longitude]
 * @property {string} [country]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {string} [country_code]
 * @property {number} [latitude]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [address_type]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer1} [modified_by]
 * @property {string} [reject_reason]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [company_type]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer1} [verified_by]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {string} [business_type]
 * @property {UserSerializer1} [created_by]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */

/**
 * @typedef GetLocationSerializer
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {GetAddressSerializer} address
 * @property {GetCompanySerializer} [company]
 * @property {string} [stage]
 * @property {string[]} [notification_emails]
 * @property {string} name
 * @property {number} [uid]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {Document[]} [documents]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} display_name
 * @property {Object} [warnings]
 * @property {string} code
 * @property {string} [store_type]
 * @property {Object} [_custom_json]
 * @property {string} [created_on]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [verified_on]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [modified_on]
 * @property {LocationIntegrationType} [integration_type]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} phone_number
 * @property {UserSerializer2} [created_by]
 */

/**
 * @typedef LocationListSerializer
 * @property {Page} [page]
 * @property {GetLocationSerializer[]} [items]
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
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {number} [rate]
 * @property {string} [effective_date]
 */

/**
 * @typedef ContactDetails
 * @property {SellerPhoneNumber[]} [phone]
 * @property {string[]} [emails]
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
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {Object} [warnings]
 * @property {number} uid
 * @property {string} [stage]
 * @property {Document[]} [documents]
 * @property {string} [modified_on]
 * @property {string} [business_info]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {string} [name]
 * @property {boolean} [franchise_enabled]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} business_type
 * @property {string[]} [notification_emails]
 * @property {string} [created_on]
 * @property {BusinessDetails} [business_details]
 * @property {UserSerializer} [created_by]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} company_type
 * @property {string} [verified_on]
 * @property {string} [mode]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {number} [rate]
 * @property {string} [effective_date]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} [address2]
 * @property {string} state
 * @property {string} country
 * @property {string} [country_code]
 * @property {number} pincode
 * @property {string} address_type
 * @property {string} [landmark]
 * @property {string} city
 * @property {string} address1
 */

/**
 * @typedef UpdateCompany
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {ContactDetails} [contact_details]
 * @property {string} [name]
 * @property {BusinessDetails} [business_details]
 * @property {string} [reject_reason]
 * @property {boolean} [franchise_enabled]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {Document[]} [documents]
 * @property {string} [business_info]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */

/**
 * @typedef MetricsSerializer
 * @property {number} [uid]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [brand]
 * @property {string} [stage]
 * @property {DocumentsObj} [product]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {Object} [warnings]
 * @property {string} [logo]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string} name
 * @property {string} [reject_reason]
 * @property {string} [slug_key]
 * @property {string[]} [synonyms]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [verified_on]
 * @property {string} [mode]
 * @property {UserSerializer} [verified_by]
 * @property {string} [description]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 * @property {Object} [_locale_language]
 * @property {string} [description]
 * @property {number} [company_id]
 * @property {string} name
 * @property {string} logo
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [brand_tier]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */

/**
 * @typedef CompanySerializer
 * @property {string} [verified_on]
 * @property {CompanyDetails} [details]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {string} [name]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string[]} [market_channels]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {UserSerializer} [created_by]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} business_type
 * @property {string} company_type
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [verified_on]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {Object} [warnings]
 * @property {CompanySerializer} [company]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number[]} brands
 * @property {number} company
 * @property {number} [uid]
 */

/**
 * @typedef LocationSerializer
 * @property {string} code
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {string} name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationManagerSerializer} [manager]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {number} company
 * @property {Document[]} [documents]
 * @property {GetAddressSerializer} address
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} display_name
 * @property {Object} [_custom_json]
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef _ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef _ArticleQuery
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {number[]} [ignored_stores]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {_ArticleQuery} [query]
 * @property {string} [group_id]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [channel_identifier]
 * @property {string} [app_id]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_type]
 * @property {string} [pincode]
 * @property {number[]} [store_ids]
 * @property {number} [company_id]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {string} [store_pincode]
 * @property {string} [_id]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [index]
 * @property {number} [preice_effective]
 * @property {number} [quantity]
 * @property {boolean} [status]
 * @property {number} [item_id]
 * @property {number} [price_marked]
 * @property {number} [store_id]
 * @property {string} [s_city]
 * @property {Object} [meta]
 * @property {string} [uid]
 * @property {string} [size]
 * @property {number} [company_id]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef CDN
 * @property {string} url
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
 * @property {boolean} [empty_cart]
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
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef Rule
 * @property {number} [discount_qty]
 * @property {number} [key]
 * @property {number} [max]
 * @property {number} [value]
 * @property {number} [min]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {string} [description]
 * @property {DisplayMetaDict} [remove]
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [auto]
 */

/**
 * @typedef State
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 * @property {boolean} [is_archived]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {string} [start]
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
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 * @property {string[]} [iins]
 * @property {string[]} [types]
 */

/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef Restrictions
 * @property {UsesRestriction} [uses]
 * @property {string[]} [platforms]
 * @property {number[]} [user_groups]
 * @property {PostOrder} [post_order]
 * @property {number[]} [ordering_stores]
 * @property {boolean} [coupon_allowed]
 * @property {Object} [payments]
 * @property {PriceRange} [price_range]
 * @property {BulkBundleRestriction} [bulk_bundle]
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef RuleDefinition
 * @property {string} type
 * @property {string} [currency_code]
 * @property {string} calculate_on
 * @property {string[]} [scope]
 * @property {string} applicable_on
 * @property {string} value_type
 * @property {boolean} [auto_apply]
 * @property {boolean} [is_exact]
 */

/**
 * @typedef CouponAdd
 * @property {CouponDateMeta} [date_meta]
 * @property {string} type_slug
 * @property {Rule[]} rule
 * @property {Validity} validity
 * @property {string[]} [tags]
 * @property {Ownership} ownership
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {State} [state]
 * @property {Validation} [validation]
 * @property {CouponSchedule} [_schedule]
 * @property {Restrictions} [restrictions]
 * @property {CouponAction} [action]
 * @property {string} code
 * @property {CouponAuthor} [author]
 * @property {RuleDefinition} rule_definition
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
 * @property {CouponDateMeta} [date_meta]
 * @property {string} type_slug
 * @property {Rule[]} rule
 * @property {Validity} validity
 * @property {string[]} [tags]
 * @property {Ownership} ownership
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {State} [state]
 * @property {Validation} [validation]
 * @property {CouponSchedule} [_schedule]
 * @property {Restrictions} [restrictions]
 * @property {CouponAction} [action]
 * @property {string} code
 * @property {CouponAuthor} [author]
 * @property {RuleDefinition} rule_definition
 */

/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef DiscountOffer
 * @property {string} [code]
 * @property {number} [discount_percentage]
 * @property {boolean} [apportion_discount]
 * @property {number} [discount_amount]
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_price]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [min_offer_quantity]
 * @property {number} [max_discount_amount]
 * @property {boolean} [partial_can_ret]
 */

/**
 * @typedef CompareObject
 * @property {number} [greater_than_equals]
 * @property {number} [greater_than]
 * @property {number} [equals]
 * @property {number} [less_than]
 * @property {number} [less_than_equals]
 */

/**
 * @typedef ItemCriteria
 * @property {number[]} [item_category]
 * @property {boolean} [all_items]
 * @property {string[]} [item_sku]
 * @property {string[]} [item_size]
 * @property {number[]} [item_exclude_store]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_brand]
 * @property {string[]} [available_zones]
 * @property {CompareObject} [cart_quantity]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_company]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_store]
 * @property {number[]} [item_exclude_company]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_exclude_id]
 * @property {string[]} [item_exclude_sku]
 */

/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {string} discount_type
 * @property {DiscountOffer} offer
 * @property {ItemCriteria} item_criteria
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [offer_text]
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
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {string} type
 * @property {PaymentAllowValue1} [uses]
 * @property {string[]} [codes]
 */

/**
 * @typedef Restrictions1
 * @property {UsesRestriction1} uses
 * @property {string[]} [platforms]
 * @property {UserRegistered} [user_registered]
 * @property {boolean} [anonymous_users]
 * @property {number[]} [user_groups]
 * @property {string[]} [user_id]
 * @property {PostOrder1} [post_order]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {number} [order_quantity]
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionSchedule
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {boolean} published
 * @property {string} start
 */

/**
 * @typedef PromotionListItem
 * @property {PromotionAction} [post_order_action]
 * @property {boolean} [apply_all_discount]
 * @property {string} [calculate_on]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {DiscountRule[]} discount_rules
 * @property {string} [currency]
 * @property {string} [code]
 * @property {PromotionAuthor} [author]
 * @property {string} mode
 * @property {Ownership1} ownership
 * @property {DisplayMeta1} display_meta
 * @property {Object} [_custom_json]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {Visibility} [visiblility]
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 * @property {Object} buy_rules
 * @property {string} promotion_type
 */

/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */

/**
 * @typedef PromotionAdd
 * @property {PromotionAction} [post_order_action]
 * @property {boolean} [apply_all_discount]
 * @property {string} [calculate_on]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {DiscountRule[]} discount_rules
 * @property {string} [currency]
 * @property {string} [code]
 * @property {PromotionAuthor} [author]
 * @property {string} mode
 * @property {Ownership1} ownership
 * @property {DisplayMeta1} display_meta
 * @property {Object} [_custom_json]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {Visibility} [visiblility]
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 * @property {Object} buy_rules
 * @property {string} promotion_type
 */

/**
 * @typedef PromotionUpdate
 * @property {PromotionAction} [post_order_action]
 * @property {boolean} [apply_all_discount]
 * @property {string} [calculate_on]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {DiscountRule[]} discount_rules
 * @property {string} [currency]
 * @property {string} [code]
 * @property {PromotionAuthor} [author]
 * @property {string} mode
 * @property {Ownership1} ownership
 * @property {DisplayMeta1} display_meta
 * @property {Object} [_custom_json]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {Visibility} [visiblility]
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 * @property {Object} buy_rules
 * @property {string} promotion_type
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [type]
 * @property {string} [subtitle]
 * @property {string} [entity_type]
 * @property {string} [title]
 * @property {boolean} [is_hidden]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [entity_slug]
 * @property {string} [modified_on]
 * @property {string} [example]
 */

/**
 * @typedef CartItem
 * @property {number} [quantity]
 * @property {string} size
 * @property {string} product_id
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [uid]
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [message]
 * @property {string} [description]
 * @property {number} [minimum_cart_value]
 * @property {string} [coupon_type]
 * @property {number} [coupon_value]
 * @property {boolean} [is_applied]
 * @property {string} [sub_title]
 * @property {number} [max_discount_value]
 * @property {number} [value]
 * @property {string} [code]
 */

/**
 * @typedef LoyaltyPoints
 * @property {string} [description]
 * @property {number} [total]
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string[]} [message]
 * @property {string} [key]
 * @property {string} [display]
 * @property {number} [value]
 */

/**
 * @typedef RawBreakup
 * @property {number} [gst_charges]
 * @property {number} [fynd_cash]
 * @property {number} [mrp_total]
 * @property {number} [vog]
 * @property {number} [cod_charge]
 * @property {number} [convenience_fee]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [you_saved]
 * @property {number} [total]
 * @property {number} [coupon]
 * @property {number} [subtotal]
 */

/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {DisplayBreakup[]} [display]
 * @property {RawBreakup} [raw]
 */

/**
 * @typedef ProductPrice
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 * @property {number} [selling]
 * @property {number} [add_on]
 * @property {number} [effective]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [raw_offer]
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [offer]
 * @property {Object} [item_criteria]
 */

/**
 * @typedef FreeGiftItem
 * @property {Object} [item_price_details]
 * @property {number} [item_id]
 * @property {string} [item_name]
 * @property {string} [item_slug]
 * @property {string[]} [item_images_url]
 * @property {string} [item_brand_name]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier]
 * @property {number} [quantity]
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {string} [article_id]
 */

/**
 * @typedef AppliedPromotion
 * @property {string} [promotion_group]
 * @property {number} [amount]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [offer_text]
 * @property {string} [promotion_name]
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [promo_id]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_type]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef BaseInfo
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
 * @property {ActionQuery} [query]
 * @property {string} [url]
 */

/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {string} [url]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef CartProduct
 * @property {number} [uid]
 * @property {string} [type]
 * @property {BaseInfo} [brand]
 * @property {string} [name]
 * @property {ProductAction} [action]
 * @property {ProductImage[]} [images]
 * @property {string} [slug]
 * @property {CategoryInfo[]} [categories]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef ProductArticle
 * @property {string} [uid]
 * @property {string} [type]
 * @property {BaseInfo} [seller]
 * @property {number} [quantity]
 * @property {string} [size]
 * @property {BaseInfo} [store]
 * @property {Object} [extra_meta]
 * @property {ArticlePriceInfo} [price]
 * @property {string[]} [product_group_tags]
 * @property {Object} [parent_item_identifiers]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {number} [other_store_quantity]
 * @property {string[]} [sizes]
 * @property {boolean} [deliverable]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef CartProductInfo
 * @property {Object} [bulk_offer]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {number} [quantity]
 * @property {string} [message]
 * @property {string} [coupon_message]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {string} [key]
 * @property {CartProductIdentifer} identifiers
 * @property {CartProduct} [product]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductArticle} [article]
 * @property {string} [discount]
 * @property {boolean} [is_set]
 * @property {ProductPriceInfo} [price]
 * @property {Object} [parent_item_identifiers]
 * @property {ProductAvailability} [availability]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Object} [errors]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [city]
 * @property {string} area_code
 * @property {number} [phone]
 * @property {string} [name]
 * @property {string} [address]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [state]
 * @property {Object} [meta]
 * @property {string} [country]
 * @property {string} [address_type]
 * @property {string} [area_code_slug]
 * @property {string} [landmark]
 * @property {number} [pincode]
 * @property {string} [area]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} [quantity]
 * @property {number} product_id
 * @property {number} [loyalty_discount]
 * @property {string} size
 * @property {CartItemMeta} [meta]
 * @property {number} price_marked
 * @property {number} [employee_discount]
 * @property {number} amount_paid
 * @property {number} discount
 * @property {number} cashback_applied
 * @property {number} price_effective
 * @property {Object} [extra_meta]
 * @property {OpenApiFiles[]} [files]
 * @property {number} coupon_effective_discount
 * @property {number} cod_charges
 * @property {number} delivery_charges
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {number} [loyalty_discount]
 * @property {string} coupon_code
 * @property {Object} [employee_discount]
 * @property {string} [affiliate_order_id]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {OpenApiFiles[]} [files]
 * @property {ShippingAddress} billing_address
 * @property {number} cod_charges
 * @property {number} delivery_charges
 * @property {string} [currency_code]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {ShippingAddress} [shipping_address]
 * @property {number} cart_value
 * @property {string} [comment]
 * @property {number} coupon_value
 * @property {string} [gstin]
 * @property {string} [payment_mode]
 * @property {number} cashback_applied
 * @property {string} [order_id]
 * @property {string} [coupon]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} order_id
 * @property {string} [order_ref_id]
 */

/**
 * @typedef AbandonedCart
 * @property {string} _id
 * @property {number[]} [fc_index_map]
 * @property {boolean} [buy_now]
 * @property {string} user_id
 * @property {number} [discount]
 * @property {Object[]} articles
 * @property {Object[]} [payment_methods]
 * @property {boolean} is_default
 * @property {Object} [cod_charges]
 * @property {string} expire_at
 * @property {Object} [delivery_charges]
 * @property {number} [bulk_coupon_discount]
 * @property {Object} [payments]
 * @property {string} [comment]
 * @property {Object} [meta]
 * @property {string} [gstin]
 * @property {boolean} [is_archive]
 * @property {string} [checkout_mode]
 * @property {string} [payment_mode]
 * @property {Object} cashback
 * @property {string} [app_id]
 * @property {boolean} [merge_qty]
 * @property {string} [order_id]
 * @property {Object} [pick_up_customer_details]
 * @property {boolean} [is_active]
 * @property {Object} [promotion]
 * @property {number} uid
 * @property {Object} [fynd_credits]
 * @property {string} created_on
 * @property {number} [cart_value]
 * @property {Object[]} [shipments]
 * @property {Object} [coupon]
 * @property {string} last_modified
 */

/**
 * @typedef AbandonedCartResponse
 * @property {AbandonedCart[]} [items]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {Object} [result]
 */

/**
 * @typedef AddProductCart
 * @property {Object} [article_assignment]
 * @property {number} [item_id]
 * @property {number} [quantity]
 * @property {number} [seller_id]
 * @property {string} [item_size]
 * @property {string} [article_id]
 * @property {string} [display]
 * @property {Object} [extra_meta]
 * @property {number} [store_id]
 * @property {string[]} [product_group_tags]
 * @property {Object} [parent_item_identifiers]
 * @property {boolean} [pos]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef CartDetailResponse
 * @property {boolean} [restrict_checkout]
 * @property {CartProductInfo[]} [items]
 * @property {string} [id]
 * @property {string} [message]
 * @property {boolean} [buy_now]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {string} [comment]
 * @property {string} [gstin]
 * @property {string} [checkout_mode]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [coupon_text]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [is_valid]
 * @property {string} [last_modified]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [partial]
 * @property {string} [message]
 */

/**
 * @typedef UpdateProductCart
 * @property {number} [quantity]
 * @property {number} [item_id]
 * @property {number} [item_index]
 * @property {string} [item_size]
 * @property {string} [article_id]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
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

module.exports = PlatformClient;
