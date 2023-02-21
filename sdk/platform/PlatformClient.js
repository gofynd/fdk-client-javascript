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
 * @property {Ticket} [ticket]
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
 * @property {TicketCategory} category
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
 * @property {boolean} success
 * @property {string[]} excluded_fields
 * @property {boolean} created
 * @property {string} app_id
 * @property {Object[]} [aggregators]
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type
 * @property {boolean} [is_active]
 * @property {string} merchant_salt
 * @property {string} key
 * @property {string} secret
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {boolean} [is_active]
 * @property {PaymentGatewayConfig} [aggregator_name]
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
 * @typedef IntentApp
 * @property {string} [display_name]
 * @property {string} [package_name]
 * @property {string} [code]
 * @property {PaymentModeLogo} [logos]
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [card_brand_image]
 * @property {number} [retry_count]
 * @property {string} [card_type]
 * @property {string} [card_brand]
 * @property {boolean} [expired]
 * @property {number} [exp_month]
 * @property {string} [display_name]
 * @property {number} [remaining_limit]
 * @property {number} [exp_year]
 * @property {string} [card_id]
 * @property {string} [name]
 * @property {string} [card_number]
 * @property {number} [cod_limit]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {number} [display_priority]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_issuer]
 * @property {string} [card_isin]
 * @property {string} [card_fingerprint]
 * @property {string} [card_reference]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [nickname]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [merchant_code]
 * @property {string} aggregator_name
 * @property {string} [code]
 * @property {number} [cod_limit_per_order]
 * @property {boolean} [intent_flow]
 * @property {number} [timeout]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_name]
 * @property {string} [card_token]
 * @property {string} [fynd_vpa]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [is_pay_by_card_pl]
 * @property {boolean} [anonymous_enable]
 * @property {string} name
 * @property {boolean} [save_card]
 * @property {number} display_priority
 * @property {string} display_name
 * @property {PaymentModeList[]} [list]
 * @property {string} [aggregator_name]
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
 * @property {boolean} is_active
 * @property {string} transfer_type
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_default
 * @property {Object} more_attributes
 * @property {Object} customers
 * @property {Object} unique_transfer_no
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} account_type
 * @property {string} ifsc_code
 * @property {number} [pincode]
 * @property {string} [branch_name]
 * @property {string} [bank_name]
 * @property {string} [account_holder]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [city]
 * @property {string} [account_no]
 */

/**
 * @typedef PayoutRequest
 * @property {boolean} is_active
 * @property {string} transfer_type
 * @property {string} aggregator
 * @property {string} unique_external_id
 * @property {Object} users
 * @property {PayoutBankDetails} bank_details
 */

/**
 * @typedef PayoutResponse
 * @property {boolean} is_active
 * @property {string} aggregator
 * @property {string} transfer_type
 * @property {boolean} success
 * @property {Object} users
 * @property {Object} bank_details
 * @property {boolean} created
 * @property {Object} payouts
 * @property {string} payment_status
 * @property {string} unique_transfer_no
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_active
 * @property {boolean} success
 * @property {boolean} is_default
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_active
 * @property {string} unique_external_id
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
 * @property {Object} config
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
 * @property {boolean} success
 * @property {Object} [data]
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} ifsc_code
 * @property {string} branch_name
 * @property {string} bank_name
 * @property {string} account_holder
 * @property {string} account_no
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name
 * @property {boolean} [success]
 * @property {string} branch_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} transfer_mode
 * @property {string} created_on
 * @property {string} display_name
 * @property {number} id
 * @property {string} modified_on
 * @property {string} beneficiary_id
 * @property {string} ifsc_code
 * @property {string} email
 * @property {string} account_holder
 * @property {string} subtitle
 * @property {string} address
 * @property {string} [mobile]
 * @property {string} [delights_user_name]
 * @property {boolean} is_active
 * @property {string} [comment]
 * @property {string} [branch_name]
 * @property {string} title
 * @property {string} bank_name
 * @property {string} account_no
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta]
 * @property {string} [current_status]
 * @property {string} [order_id]
 * @property {string} [payment_id]
 * @property {string} [payment_gateway]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {number} amount
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 * @property {string} [name]
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} order_id
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef CODdata
 * @property {number} limit
 * @property {boolean} is_active
 * @property {number} usages
 * @property {string} user_id
 * @property {number} remaining_limit
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {CODdata} user_cod_data
 * @property {boolean} success
 */

/**
 * @typedef SetCODForUserRequest
 * @property {string} merchant_user_id
 * @property {boolean} is_active
 * @property {string} mobileno
 */

/**
 * @typedef SetCODOptionResponse
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef Prices
 * @property {number} [fynd_credits]
 * @property {number} [promotion_effective_discount]
 * @property {number} [coupon_value]
 * @property {number} [price_marked]
 * @property {number} [amount_paid]
 * @property {number} [delivery_charge]
 * @property {number} [value_of_good]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [cashback_applied]
 * @property {number} [price_effective]
 * @property {number} [cashback]
 * @property {number} [cod_charges]
 * @property {number} [discount]
 * @property {number} [refund_credit]
 * @property {number} [refund_amount]
 * @property {number} [tax_collected_at_source]
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */

/**
 * @typedef PlatformItem
 * @property {string[]} [image]
 * @property {number} [department_id]
 * @property {string[]} [l1_category]
 * @property {string} [l3_category_name]
 * @property {string} [size]
 * @property {string[]} [images]
 * @property {boolean} [can_cancel]
 * @property {number} [l3_category]
 * @property {string} [name]
 * @property {string} [color]
 * @property {string} [code]
 * @property {number} [id]
 * @property {boolean} [can_return]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} value_of_good
 * @property {string} gstin_code
 * @property {number} brand_calculated_amount
 * @property {number} tax_collected_at_source
 * @property {number} gst_fee
 */

/**
 * @typedef BagUnit
 * @property {PlatformItem} [item]
 * @property {Prices} [prices]
 * @property {number} total_shipment_bags
 * @property {boolean} [can_cancel]
 * @property {number} bag_id
 * @property {number} item_quantity
 * @property {string} ordering_channel
 * @property {string} shipment_id
 * @property {Object} status
 * @property {GSTDetailsData} [gst]
 * @property {boolean} [can_return]
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef UserDataInfo
 * @property {string} [mobile]
 * @property {string} [avis_user_id]
 * @property {boolean} [is_anonymous_user]
 * @property {number} [uid]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [last_name]
 * @property {string} [first_name]
 * @property {string} [gender]
 */

/**
 * @typedef ShipmentStatus
 * @property {string} hex_code
 * @property {string} actual_status
 * @property {string} status
 * @property {string} ops_status
 * @property {string} title
 */

/**
 * @typedef ShipmentItem
 * @property {Object} [channel]
 * @property {Object} [sla]
 * @property {number} total_shipments_in_order
 * @property {number} total_bags_count
 * @property {Prices} [prices]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {BagUnit[]} [bags]
 * @property {Object} [payment_methods]
 * @property {Object} [application]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {string} fulfilling_centre
 * @property {string} created_at
 * @property {number} shipment_created_at
 * @property {string} id
 * @property {UserDataInfo} [user]
 * @property {ShipmentStatus} [shipment_status]
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
 * @property {string} text
 * @property {string} type
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {Object} [applied_filters]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [page]
 */

/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef UserDetailsData
 * @property {string} pincode
 * @property {string} city
 * @property {string} state
 * @property {string} [email]
 * @property {string} name
 * @property {string} address
 * @property {string} country
 * @property {string} phone
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
 * @property {Object} [cart_conditions]
 * @property {ItemCriterias} [item_criteria]
 */

/**
 * @typedef AppliedPromos
 * @property {boolean} [mrp_promotion]
 * @property {number} [amount]
 * @property {string} [promotion_name]
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 * @property {string} [promotion_type]
 * @property {DiscountRules[]} [discount_rules]
 * @property {BuyRules[]} [buy_rules]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [pincode]
 * @property {string} [city]
 * @property {string} [address2]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {string} [email]
 * @property {number} [longitude]
 * @property {string} [address1]
 * @property {string} [version]
 * @property {string} [address_type]
 * @property {string} [created_at]
 * @property {string} [area]
 * @property {string} [country]
 * @property {string} [updated_at]
 * @property {string} [phone]
 */

/**
 * @typedef BagGST
 * @property {number} [gst_tax_percentage]
 * @property {string} [gst_tag]
 * @property {number} [value_of_good]
 * @property {string} [gstin_code]
 * @property {number} [brand_calculated_amount]
 * @property {number} [gst_fee]
 * @property {string} [hsn_code]
 * @property {boolean} [is_default_hsn_code]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} allow_force_return
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} delivery_charge
 * @property {number} [tax_collected_at_source]
 * @property {number} refund_credit
 * @property {number} discount
 * @property {string} item_name
 * @property {number} coupon_effective_discount
 * @property {number} promotion_effective_discount
 * @property {Identifier} identifiers
 * @property {string} size
 * @property {number} amount_paid
 * @property {number} cashback_applied
 * @property {number} price_effective
 * @property {boolean} added_to_fynd_cash
 * @property {number} gst_fee
 * @property {number} fynd_credits
 * @property {number} gst_tax_percentage
 * @property {number} coupon_value
 * @property {string} gst_tag
 * @property {number} cashback
 * @property {number} cod_charges
 * @property {number} brand_calculated_amount
 * @property {string} hsn_code
 * @property {number} total_units
 * @property {number} price_marked
 * @property {number} value_of_good
 * @property {number} transfer_price
 * @property {number} [amount_paid_roundoff]
 */

/**
 * @typedef OrderBrandName
 * @property {string} created_on
 * @property {string} logo
 * @property {string} brand_name
 * @property {string} [company]
 * @property {string} [modified_on]
 * @property {number} id
 */

/**
 * @typedef BagStateMapper
 * @property {string} display_name
 * @property {boolean} [app_facing]
 * @property {number} bs_id
 * @property {string} journey_type
 * @property {boolean} [notify_customer]
 * @property {string} [app_display_name]
 * @property {string} name
 * @property {boolean} [is_active]
 * @property {string} state_type
 * @property {string} [app_state_name]
 */

/**
 * @typedef CurrentStatus
 * @property {boolean} [kafka_sync]
 * @property {number} [delivery_partner_id]
 * @property {string} [delivery_awb_number]
 * @property {number} current_status_id
 * @property {number} [bag_id]
 * @property {string} [status]
 * @property {number} [state_id]
 * @property {string} [shipment_id]
 * @property {number} [store_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [state_type]
 * @property {string} [created_at]
 * @property {number} [updated_at]
 */

/**
 * @typedef OrderBagArticle
 * @property {string} [uid]
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 */

/**
 * @typedef OrderBags
 * @property {AppliedPromos[]} [applied_promos]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {number} [line_number]
 * @property {boolean} [can_return]
 * @property {PlatformItem} [item]
 * @property {string} [display_name]
 * @property {string} [identifier]
 * @property {string} [seller_identifier]
 * @property {BagGST} [gst_details]
 * @property {string} [entity_type]
 * @property {BagConfigs} [bag_configs]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {Object} [parent_promo_bags]
 * @property {Prices} [prices]
 * @property {OrderBrandName} [brand]
 * @property {boolean} [can_cancel]
 * @property {number} [quantity]
 * @property {CurrentStatus} [current_status]
 * @property {number} bag_id
 * @property {OrderBagArticle} [article]
 */

/**
 * @typedef BagStatusHistory
 * @property {boolean} [kafka_sync]
 * @property {number} [delivery_partner_id]
 * @property {number} [bsh_id]
 * @property {string} [delivery_awb_number]
 * @property {string} [display_name]
 * @property {Object[]} [reasons]
 * @property {number} [bag_id]
 * @property {boolean} [forward]
 * @property {string} [app_display_name]
 * @property {string} [shipment_id]
 * @property {string} status
 * @property {number} [state_id]
 * @property {number} [store_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [state_type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [pincode]
 * @property {string} [gst_tag]
 * @property {string} [awb_no]
 * @property {string} [eway_bill_id]
 * @property {string} [name]
 * @property {string} [track_url]
 * @property {number} [id]
 * @property {string} [country]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [source]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {string[]} [bag_list]
 * @property {string} [created_at]
 * @property {number} [id]
 */

/**
 * @typedef FulfillingStore
 * @property {string} pincode
 * @property {string} city
 * @property {Object} meta
 * @property {string} store_name
 * @property {string} state
 * @property {string} country
 * @property {string} address
 * @property {string} code
 * @property {string} fulfillment_channel
 * @property {number} id
 * @property {string} contact_person
 * @property {string} phone
 */

/**
 * @typedef TrackingList
 * @property {string} text
 * @property {string} [time]
 * @property {boolean} [is_current]
 * @property {string} status
 * @property {boolean} [is_passed]
 */

/**
 * @typedef OrderDetailsData
 * @property {Object} [ordering_channel_logo]
 * @property {string} [order_value]
 * @property {string} fynd_order_id
 * @property {string} [affiliate_id]
 * @property {string} [ordering_channel]
 * @property {string} [cod_charges]
 * @property {string} [order_date]
 * @property {Object} [tax_details]
 * @property {string} [source]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [picked_date]
 * @property {boolean} platform_logo
 * @property {string} affiliate_shipment_id
 * @property {string} [replacement_details]
 * @property {number} [total_items]
 * @property {boolean} [go_green]
 * @property {boolean} [enable_dp_tracking]
 * @property {string} [is_fynd_store]
 * @property {string} [due_date]
 * @property {OrderBags[]} [bags]
 * @property {string} lock_status
 * @property {boolean} [beneficiary_details]
 * @property {Object} current_shipment_status
 * @property {string} shipment_id
 * @property {string} [operational_status]
 * @property {Object[]} delivery_status
 * @property {string} [pay_button]
 * @property {string} [priority_text]
 * @property {string} [shipment_status]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {boolean} [can_return]
 * @property {number} [total_bags]
 * @property {string} email_id
 * @property {string[]} [shipment_images]
 * @property {UserDetailsData} [billing_details]
 * @property {Object} [user_info]
 * @property {Object} [coupon]
 * @property {Object[]} [custom_meta]
 * @property {string} [vertical]
 * @property {Object[]} [forward_order_status]
 * @property {DPDetailsData} [dp_details]
 * @property {string} user_id
 * @property {Object} company
 * @property {number} status_progress
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} [escalation]
 * @property {string[]} [child_nodes]
 * @property {boolean} [enable_tracking]
 * @property {string} [secured_delivery_flag]
 * @property {Object} [refund_details]
 * @property {string} [journey_type]
 * @property {string} [user_agent]
 * @property {string} [mid]
 * @property {Prices} [prices]
 * @property {Object} invoice
 * @property {string} can_break
 * @property {boolean} [can_cancel]
 * @property {string} [refund_text]
 * @property {boolean} is_invoiced
 * @property {string} [order_created_time]
 * @property {Object} fyndstore_emp
 * @property {Object[]} [forward_tracking_list]
 * @property {boolean} is_not_fynd_source
 * @property {number} [shipment_quantity]
 * @property {ShipmentPayments} [payments]
 * @property {Object[]} [forward_shipment_status]
 * @property {boolean} is_fynd_coupon
 * @property {Object} order_status
 * @property {string} [kirana_store_id]
 * @property {string} order_type
 * @property {string} credit_note_id
 * @property {boolean} is_packaging_order
 * @property {Object[]} items
 * @property {Object} [delivery_slot]
 * @property {ShipmentStatusData} [status]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object} [bank_data]
 * @property {Object} ordering_store
 * @property {TrackingList[]} [tracking_list]
 * @property {string} tracking_url
 * @property {string} [payment_mode]
 * @property {OrderDetailsData} [order]
 * @property {string} [packaging_type]
 * @property {string} [is_pdsr]
 */

/**
 * @typedef OrderMeta
 * @property {Object[]} [order_tags]
 * @property {string} [comment]
 * @property {string} [payment_type]
 * @property {Object} [extra_meta]
 * @property {string[]} [order_child_entities]
 * @property {string} [currency_symbol]
 * @property {string} [order_type]
 * @property {Object} [staff]
 * @property {number} [employee_id]
 * @property {number} [mongo_cart_id]
 * @property {string} [customer_note]
 * @property {number} [ordering_store]
 * @property {Object[]} [files]
 * @property {number} [cart_id]
 * @property {string} [order_platform]
 */

/**
 * @typedef OrderDict
 * @property {string} fynd_order_id
 * @property {Prices} [prices]
 * @property {string} order_date
 * @property {Object} [payment_methods]
 * @property {OrderMeta} [meta]
 */

/**
 * @typedef PlatformShipment
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [picked_date]
 * @property {string} [platform_logo]
 * @property {number} [total_items]
 * @property {boolean} [enable_dp_tracking]
 * @property {OrderBags[]} [bags]
 * @property {string} shipment_id
 * @property {string} [operational_status]
 * @property {string} [priority_text]
 * @property {string} [shipment_status]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {number} [total_bags]
 * @property {string[]} [shipment_images]
 * @property {UserDetailsData} [billing_details]
 * @property {Object} [coupon]
 * @property {Object[]} [custom_meta]
 * @property {string} [vertical]
 * @property {DPDetailsData} [dp_details]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [journey_type]
 * @property {string} [user_agent]
 * @property {Prices} [prices]
 * @property {number} [shipment_quantity]
 * @property {ShipmentPayments} [payments]
 * @property {Object} [delivery_slot]
 * @property {ShipmentStatusData} [status]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [payment_mode]
 * @property {OrderDetailsData} [order]
 * @property {string} [packaging_type]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {OrderDict} [order]
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 */

/**
 * @typedef SubLane
 * @property {string} [text]
 * @property {Object[]} [actions]
 * @property {string} [value]
 * @property {number} [total_items]
 * @property {number} [index]
 */

/**
 * @typedef SuperLane
 * @property {SubLane[]} [options]
 * @property {string} value
 * @property {number} [total_items]
 * @property {string} text
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [display]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef PlatformOrderItems
 * @property {number} [order_value]
 * @property {PlatformChannel} [channel]
 * @property {UserDataInfo} [user_info]
 * @property {string} [order_id]
 * @property {string} [order_created_time]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {string} [payment_mode]
 * @property {number} [total_order_value]
 * @property {PlatformShipment[]} [shipments]
 * @property {Object} [meta]
 */

/**
 * @typedef OrderListingResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {PlatformOrderItems[]} [items]
 * @property {number} [total_count]
 * @property {string} [lane]
 * @property {Page} [page]
 */

/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */

/**
 * @typedef MetricsCount
 * @property {number} value
 * @property {string} text
 * @property {string} key
 * @property {Options[]} [options]
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [raw_status]
 * @property {string} [updated_time]
 * @property {string} [reason]
 * @property {string} [awb]
 * @property {string} [status]
 * @property {string} [last_location_recieved_at]
 * @property {string} [shipment_type]
 * @property {string} [account_name]
 * @property {string} [updated_at]
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
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OmsReports
 * @property {string} [report_id]
 * @property {string} [display_name]
 * @property {string} [report_type]
 * @property {Object} [request_details]
 * @property {string} [status]
 * @property {string} [s3_key]
 * @property {string} [report_name]
 * @property {string} [report_created_at]
 * @property {string} [report_requested_at]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [article_id]
 * @property {string} [company_id]
 * @property {string} [jio_code]
 * @property {string} [item_id]
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
 * @property {string} [identifier]
 * @property {boolean} [success]
 * @property {Object[]} [data]
 * @property {NestedErrorSchemaDataSet[]} [error]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {Object} [label]
 * @property {string} [company_id]
 * @property {string} [store_name]
 * @property {Object} [invoice]
 * @property {string} batch_id
 * @property {boolean} do_invoice_label_generated
 * @property {string} [store_code]
 * @property {string} [invoice_status]
 * @property {Object} [data]
 * @property {string} [store_id]
 */

/**
 * @typedef FileUploadResponse
 * @property {number} [expiry]
 * @property {string} [url]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileResponse
 * @property {string} [file_path]
 * @property {number} [size]
 * @property {string[]} [tags]
 * @property {FileUploadResponse} [upload]
 * @property {string} [content_type]
 * @property {string} [file_name]
 * @property {string} [method]
 * @property {URL} [cdn]
 * @property {string} [operation]
 * @property {string} [namespace]
 */

/**
 * @typedef BulkListingPage
 * @property {number} [size]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {number} [total]
 * @property {boolean} [has_previous]
 * @property {string} [type]
 */

/**
 * @typedef bulkListingData
 * @property {string} [store_name]
 * @property {string[]} [processing_shipments]
 * @property {number} [failed]
 * @property {number} [successful]
 * @property {Object[]} [successful_shipments]
 * @property {Object[]} [failed_shipments]
 * @property {number} [processing]
 * @property {string} [user_id]
 * @property {string} [id]
 * @property {number} [company_id]
 * @property {string} [batch_id]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {number} [total]
 * @property {string} [uploaded_on]
 * @property {string} [excel_url]
 * @property {string} [user_name]
 * @property {string} [file_name]
 * @property {string} [status]
 */

/**
 * @typedef BulkListingResponse
 * @property {string} [error]
 * @property {BulkListingPage} [page]
 * @property {boolean} [success]
 * @property {bulkListingData[]} [data]
 */

/**
 * @typedef DateRange
 * @property {string} [from_date]
 * @property {string} [to_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [dp_ids]
 * @property {string} [store_name]
 * @property {string} [dp_name]
 * @property {DateRange} [date_range]
 * @property {string} [sales_channel_name]
 * @property {string} [lane]
 * @property {string} [sales_channels]
 * @property {string} [stores]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {ManifestFilter} [filters]
 * @property {number} [company_id]
 * @property {string} [created_by]
 * @property {string} [manifest_id]
 * @property {string} [status]
 * @property {boolean} [is_active]
 * @property {string} [created_at]
 */

/**
 * @typedef ManifestPage
 * @property {string} [size]
 * @property {boolean} [has_next]
 * @property {string} [current]
 * @property {number} [total]
 * @property {boolean} [has_previous]
 * @property {string} [type]
 */

/**
 * @typedef GeneratedManifestResponse
 * @property {GeneratedManifestItem[]} [items]
 * @property {ManifestPage} [page]
 */

/**
 * @typedef ManifestDetailTotalShipmentPricesCount
 * @property {number} [total_price]
 * @property {number} [shipment_count]
 */

/**
 * @typedef ManifestDetailMeta
 * @property {ManifestFilter} [filters]
 * @property {ManifestDetailTotalShipmentPricesCount} [total_shipment_prices_count]
 */

/**
 * @typedef ManifestDetail
 * @property {ManifestFilter} [filters]
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {string} [created_by]
 * @property {string} [manifest_id]
 * @property {string} [status]
 * @property {number} [user_id]
 * @property {boolean} [is_active]
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {ManifestDetailMeta} [meta]
 */

/**
 * @typedef ManifestDetailItem
 * @property {number} [item_qty]
 * @property {string} [invoice_id]
 * @property {string} [order_id]
 * @property {string} [awb]
 * @property {string} [shipment_id]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {ManifestDetail[]} [manifest_details]
 * @property {number} [additional_shipment_count]
 * @property {ManifestDetailItem[]} [items]
 * @property {ManifestPage} [page]
 */

/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef Reason
 * @property {QuestionSet[]} [question_set]
 * @property {string[]} [qc_type]
 * @property {number} [id]
 * @property {string} [display_name]
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
 * @property {number} [failed_shipments_count]
 * @property {number} [successful_shipments_count]
 * @property {string} [company_id]
 * @property {string[]} [successful_shipment_ids]
 * @property {string} [batch_id]
 * @property {number} [total_shipments_count]
 * @property {number} [processing_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [message]
 * @property {string} [success]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {boolean} [status]
 * @property {string[]} [failed_records]
 * @property {string} [user_id]
 * @property {string[]} [error]
 * @property {string} [uploaded_on]
 * @property {string} [uploaded_by]
 */

/**
 * @typedef Attributes
 * @property {string} [marketer_name]
 * @property {string} [primary_color_hex]
 * @property {string} [essential]
 * @property {string} [name]
 * @property {string} [brand_name]
 * @property {string} [marketer_address]
 * @property {string} [primary_color]
 * @property {string} [primary_material]
 * @property {string[]} [gender]
 */

/**
 * @typedef Item
 * @property {string[]} image
 * @property {Attributes} attributes
 * @property {string[]} [l1_category]
 * @property {string} [l3_category_name]
 * @property {number} [l1_category_id]
 * @property {number} [l3_category]
 * @property {string} [code]
 * @property {boolean} [can_return]
 * @property {string} [last_updated_at]
 * @property {number} [department_id]
 * @property {string} size
 * @property {string} slug_key
 * @property {number} brand_id
 * @property {string} [color]
 * @property {Object} [meta]
 * @property {string} brand
 * @property {boolean} [can_cancel]
 * @property {string} name
 * @property {string[]} [l2_category]
 * @property {string} [gender]
 * @property {string} [branch_url]
 * @property {string} [webstore_product_url]
 * @property {number} item_id
 * @property {number} [l2_category_id]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef BagGSTDetails
 * @property {string} cgst_gst_fee
 * @property {number} igst_tax_percentage
 * @property {number} gst_tax_percentage
 * @property {string} gst_tag
 * @property {number} value_of_good
 * @property {string} hsn_code_id
 * @property {string} sgst_gst_fee
 * @property {string} [gstin_code]
 * @property {number} cgst_tax_percentage
 * @property {number} sgst_tax_percentage
 * @property {number} brand_calculated_amount
 * @property {string} igst_gst_fee
 * @property {number} tax_collected_at_source
 * @property {number} gst_fee
 * @property {string} hsn_code
 * @property {boolean} [is_default_hsn_code]
 */

/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [po_tax_amount]
 * @property {number} [po_line_amount]
 * @property {number} [item_base_price]
 * @property {boolean} [partial_can_ret]
 * @property {number} [total_gst_percentage]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Brand
 * @property {number} [created_on]
 * @property {string} [script_last_ran]
 * @property {string} [logo]
 * @property {number} brand_id
 * @property {string} [pickup_location]
 * @property {string} brand_name
 * @property {string} company
 * @property {string} [invoice_prefix]
 * @property {number} [modified_on]
 * @property {number} [credit_note_expiry_days]
 * @property {boolean} [credit_note_allowed]
 * @property {string} [start_date]
 * @property {boolean} [is_virtual_invoice]
 */

/**
 * @typedef AffiliateMeta
 * @property {boolean} [is_priority]
 * @property {string} [coupon_code]
 * @property {string} [channel_shipment_id]
 * @property {number} [employee_discount]
 * @property {string} [due_date]
 * @property {string} [order_item_id]
 * @property {number} [size_level_total_qty]
 * @property {string} [channel_order_id]
 * @property {number} [quantity]
 * @property {string} [box_type]
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef PDFLinks
 * @property {string} [b2b]
 * @property {string} [label]
 * @property {string} invoice_type
 * @property {string} label_type
 * @property {string} [label_a4]
 * @property {string} [invoice]
 * @property {string} [po_invoice]
 * @property {string} [invoice_a4]
 * @property {string} [invoice_pos]
 * @property {string} [label_pos]
 * @property {string} [label_a6]
 * @property {string} [credit_note_url]
 * @property {string} [invoice_a6]
 */

/**
 * @typedef LockData
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 * @property {boolean} [mto]
 */

/**
 * @typedef EInvoice
 * @property {string} [error_message]
 * @property {string} [acknowledge_date]
 * @property {string} [error_code]
 * @property {string} [signed_invoice]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_qr_code]
 * @property {string} [irn]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef BuyerDetails
 * @property {number} pincode
 * @property {string} city
 * @property {string} gstin
 * @property {string} state
 * @property {string} [ajio_site_id]
 * @property {string} name
 * @property {string} address
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_min]
 * @property {string} [t_max]
 */

/**
 * @typedef ShipmentMeta
 * @property {string} [awb_number]
 * @property {LockData} [lock_data]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [due_date]
 * @property {Object} [return_details]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [dp_id]
 * @property {boolean} same_store_available
 * @property {Object} [bag_weight]
 * @property {Object} [b2c_buyer_details]
 * @property {Object} [dp_options]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [packaging_name]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [marketplace_store_id]
 * @property {Object} [external]
 * @property {string} [fulfilment_priority_text]
 * @property {number} [shipment_weight]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {Object} [ewaybill_info]
 * @property {string} [dp_name]
 * @property {DebugInfo} [debug_info]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [forward_affiliate_order_id]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [return_awb_number]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [po_number]
 * @property {string} [order_type]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {Formatted} [formatted]
 * @property {string} [dp_sort_key]
 * @property {number} [return_store_node]
 * @property {number} weight
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [box_type]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_store_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_shipment_id
 * @property {ShipmentMeta} shipment_meta
 * @property {string} affiliate_order_id
 * @property {string} [affiliate_id]
 * @property {string} [company_affiliate_tag]
 * @property {string} affiliate_bag_id
 * @property {string} [ad_id]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {AffiliateMeta} affiliate_meta
 * @property {number} [employee_discount]
 * @property {string} affiliate_order_id
 * @property {string} affiliate_bag_id
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef Dimensions
 * @property {number} [length]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @typedef ReturnConfig
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Article
 * @property {Object} [esp_modified]
 * @property {Object} [a_set]
 * @property {Dimensions} [dimensions]
 * @property {Identifier} identifiers
 * @property {string} seller_identifier
 * @property {string} size
 * @property {string} uid
 * @property {Object} [raw_meta]
 * @property {ReturnConfig} [return_config]
 * @property {boolean} [is_set]
 * @property {string} _id
 * @property {string} [code]
 * @property {Weight} [weight]
 * @property {Object} [child_details]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 */

/**
 * @typedef Document
 * @property {boolean} verified
 * @property {string} value
 * @property {string} ds_type
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
 * @property {string} [password]
 * @property {string} [user]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [user]
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
 * @typedef StoreMeta
 * @property {Object[]} [timing]
 * @property {string} display_name
 * @property {string} stage
 * @property {StoreDocuments} [documents]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {Object} [product_return_config]
 * @property {Object} [ewaybill_portal_details]
 * @property {string} [gst_number]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string[]} [notification_emails]
 * @property {Object} [additional_contact_details]
 */

/**
 * @typedef StoreAddress
 * @property {string} state
 * @property {string} [email]
 * @property {number} longitude
 * @property {string} address_category
 * @property {string} address1
 * @property {string} created_at
 * @property {string} [area]
 * @property {string} city
 * @property {string} country_code
 * @property {string} address_type
 * @property {string} contact_person
 * @property {string} phone
 * @property {string} [version]
 * @property {number} pincode
 * @property {number} latitude
 * @property {string} [address2]
 * @property {string} country
 * @property {string} updated_at
 * @property {string} [landmark]
 */

/**
 * @typedef Store
 * @property {string} state
 * @property {number} longitude
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [code]
 * @property {string} [order_integration_id]
 * @property {string} login_username
 * @property {string} [mall_area]
 * @property {number} [packaging_material_count]
 * @property {number} [alohomora_user_id]
 * @property {Object} [brand_id]
 * @property {string[]} [brand_store_tags]
 * @property {string} address1
 * @property {boolean} [is_active]
 * @property {string} created_at
 * @property {string} fulfillment_channel
 * @property {boolean} [is_archived]
 * @property {StoreMeta} meta
 * @property {string} location_type
 * @property {number} [parent_store_id]
 * @property {string} city
 * @property {string} [vat_no]
 * @property {number} company_id
 * @property {StoreAddress} [store_address_json]
 * @property {string} name
 * @property {string} contact_person
 * @property {string} [store_active_from]
 * @property {string} [mall_name]
 * @property {number} phone
 * @property {string} pincode
 * @property {string} store_email
 * @property {number} latitude
 * @property {string} [address2]
 * @property {string} s_id
 * @property {string} country
 * @property {string} [updated_at]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {Object} [qc_required]
 * @property {Object[]} [applied_promos]
 * @property {string} [b_type]
 * @property {string} [operational_status]
 * @property {string} [shipment_id]
 * @property {number} [line_number]
 * @property {string} [order_integration_id]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {string} [display_name]
 * @property {Item} item
 * @property {string} [identifier]
 * @property {string} [seller_identifier]
 * @property {number} b_id
 * @property {BagStatusHistory} current_operational_status
 * @property {ArticleDetails} [article_details]
 * @property {BagStatusHistory[]} bag_status
 * @property {number} [bag_update_time]
 * @property {BagGSTDetails} gst_details
 * @property {string} [entity_type]
 * @property {BagMeta} [meta]
 * @property {Object} [restore_promos]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {Object} [parent_promo_bags]
 * @property {number} [no_of_bags_order]
 * @property {string} journey_type
 * @property {boolean} [restore_coupon]
 * @property {Prices} prices
 * @property {Brand} brand
 * @property {Object[]} [reasons]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {number[]} [original_bag_list]
 * @property {number} [quantity]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Dates} [dates]
 * @property {string[]} [tags]
 * @property {BagStatusHistory} current_status
 * @property {Article} article
 * @property {BagReturnableCancelableStatus} status
 * @property {Store} [ordering_store]
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */

/**
 * @typedef Page1
 * @property {number} size
 * @property {number} item_total
 * @property {boolean} has_next
 * @property {number} current
 * @property {string} page_type
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {Page1} page
 */

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [message]
 * @property {string} [shipment_id]
 * @property {string} [error]
 * @property {number} [status]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {string} message
 * @property {string} [error_trace]
 * @property {number} status
 */

/**
 * @typedef StoreReassign
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 * @property {string} [affiliate_id]
 * @property {string} [mongo_article_id]
 * @property {string} [affiliate_bag_id]
 * @property {number} store_id
 * @property {string} [fynd_order_id]
 * @property {string} [set_id]
 * @property {number[]} [reason_ids]
 * @property {string} [item_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_order_id]
 * @property {string} [id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} reason_text
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action_type
 * @property {string} action
 * @property {Entities[]} entities
 * @property {string} entity_type
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
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
 * @property {boolean} [is_bag_locked]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 * @property {OriginalFilter} [original_filter]
 * @property {string} [status]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [shipment_id]
 * @property {Bags[]} [bags]
 * @property {boolean} [lock_status]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response]
 * @property {boolean} [success]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [created_at]
 * @property {string} [to_datetime]
 * @property {number} id
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} [logo_url]
 * @property {string} [platform_name]
 * @property {string} [title]
 * @property {string} [platform_id]
 * @property {string} [from_datetime]
 */

/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */

/**
 * @typedef BaseResponse
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef Click2CallResponse
 * @property {string} call_id
 * @property {boolean} status
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */

/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsFilters[]} [filters]
 * @property {ProductsReasonsData} [data]
 */

/**
 * @typedef EntityReasonData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef EntitiesReasons
 * @property {Object[]} [filters]
 * @property {EntityReasonData} [data]
 */

/**
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {ProductsDataUpdatesFilters[]} [filters]
 * @property {Object} [data]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object[]} [filters]
 * @property {Object} [data]
 */

/**
 * @typedef DataUpdates
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 */

/**
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */

/**
 * @typedef ShipmentsRequest
 * @property {string} identifier
 * @property {ReasonsData} [reasons]
 * @property {DataUpdates} [data_updates]
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
 * @property {boolean} [lock_after_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [message]
 * @property {string} [identifier]
 * @property {string} [exception]
 * @property {number} [status]
 * @property {string} [stack_trace]
 * @property {Object} [final_state]
 * @property {Object} [meta]
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
 * @typedef OrderUser
 * @property {string} state
 * @property {string} country
 * @property {string} city
 * @property {string} last_name
 * @property {string} pincode
 * @property {number} mobile
 * @property {string} [address1]
 * @property {number} phone
 * @property {string} first_name
 * @property {string} email
 * @property {string} [address2]
 */

/**
 * @typedef ArticleDetails1
 * @property {Object} attributes
 * @property {Object} dimension
 * @property {number} quantity
 * @property {string} _id
 * @property {Object} weight
 * @property {number} brand_id
 * @property {Object} category
 */

/**
 * @typedef LocationDetails
 * @property {number} fulfillment_id
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentDetails
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 * @property {string} affiliate_shipment_id
 * @property {number} shipments
 * @property {number} [dp_id]
 * @property {string} [box_type]
 * @property {Object} [meta]
 */

/**
 * @typedef ShipmentConfig
 * @property {LocationDetails} [location_details]
 * @property {string} source
 * @property {string} payment_mode
 * @property {string} journey
 * @property {string} identifier
 * @property {ShipmentDetails[]} shipment
 * @property {string} to_pincode
 * @property {string} action
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderPriority
 * @property {string} [affiliate_priority_code]
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {string} sku
 * @property {string} modified_on
 * @property {number} price_effective
 * @property {string} seller_identifier
 * @property {number} transfer_price
 * @property {number} company_id
 * @property {Object} identifier
 * @property {number} quantity
 * @property {string} affiliate_store_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {string} hsn_code_id
 * @property {number} avl_qty
 * @property {number} discount
 * @property {number} delivery_charge
 * @property {string} _id
 * @property {number} store_id
 * @property {string} item_size
 * @property {number} unit_price
 * @property {number} amount_paid
 * @property {number} price_marked
 * @property {number} item_id
 * @property {Object} affiliate_meta
 * @property {string} fynd_store_id
 */

/**
 * @typedef OrderInfo
 * @property {string} payment_mode
 * @property {string} [affiliate_order_id]
 * @property {OrderUser} shipping_address
 * @property {number} discount
 * @property {Object} items
 * @property {number} cod_charges
 * @property {ShipmentData} [shipment]
 * @property {number} order_value
 * @property {OrderPriority} [order_priority]
 * @property {string} [coupon]
 * @property {Object} [payment]
 * @property {number} delivery_charges
 * @property {UserData} user
 * @property {AffiliateBag[]} bags
 * @property {OrderUser} billing_address
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
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
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} name
 * @property {string} created_at
 * @property {string} token
 * @property {string} owner
 * @property {string} id
 * @property {string} [description]
 * @property {string} updated_at
 * @property {string} secret
 * @property {AffiliateAppConfigMeta[]} [meta]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */

/**
 * @typedef Affiliate
 * @property {AffiliateConfig} [config]
 * @property {string} token
 * @property {string} id
 */

/**
 * @typedef OrderConfig
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [bag_end_state]
 * @property {string} [store_lookup]
 * @property {string} [article_lookup]
 * @property {boolean} [create_user]
 * @property {Affiliate} affiliate
 */

/**
 * @typedef CreateOrderPayload
 * @property {OrderInfo} order_info
 * @property {string} affiliate_id
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
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ActionInfo
 * @property {string} display_text
 * @property {string} slug
 * @property {string} description
 * @property {number} id
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} message
 * @property {string} [ticket_id]
 * @property {number} [bag_id]
 * @property {string} [l1_detail]
 * @property {string} [l3_detail]
 * @property {string} [ticket_url]
 * @property {string} type
 * @property {string} [l2_detail]
 * @property {string} createdat
 * @property {string} user
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */

/**
 * @typedef ErrorDetail
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SmsDataPayload
 * @property {string} message
 * @property {string} payment_mode
 * @property {number} amount_paid
 * @property {string} brand_name
 * @property {number} phone_number
 * @property {string} customer_name
 * @property {string} country_code
 * @property {number} shipment_id
 * @property {string} order_id
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
 */

/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 */

/**
 * @typedef Meta
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */

/**
 * @typedef ShipmentDetail
 * @property {number} id
 * @property {number[]} [bag_list]
 * @property {string} [remarks]
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {Meta} meta
 */

/**
 * @typedef OrderStatusData
 * @property {OrderDetails} order_details
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {string[]} [errors]
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
 * @property {string} qc_required
 * @property {number} dp_id
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string[]} [errors]
 * @property {string} success
 */

/**
 * @typedef BillingInfo
 * @property {string} [gender]
 * @property {string} address1
 * @property {string} [title]
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [middle_name]
 * @property {string} city
 * @property {string} primary_mobile_number
 * @property {string} [external_customer_code]
 * @property {string} first_name
 * @property {string} [state_code]
 * @property {string} [floor_no]
 * @property {string} [house_no]
 * @property {string} [alternate_email]
 * @property {string} [alternate_mobile_number]
 * @property {string} [customer_code]
 * @property {string} primary_email
 * @property {string} state
 * @property {string} country
 * @property {string} [last_name]
 * @property {string} pincode
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef Tax
 * @property {string} name
 * @property {Object[]} [breakup]
 * @property {Object} amount
 * @property {number} rate
 */

/**
 * @typedef Charge
 * @property {string} name
 * @property {Object} amount
 * @property {Tax} [tax]
 * @property {string} type
 * @property {string} [code]
 */

/**
 * @typedef LineItem
 * @property {string} [custom_messasge]
 * @property {number} [quantity]
 * @property {Charge[]} [charges]
 * @property {string} [external_line_id]
 * @property {string} seller_identifier
 * @property {Object} [meta]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [dispatch_after_date]
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [pack_by_date]
 * @property {string} [confirm_by_date]
 * @property {string} [dispatch_by_date]
 */

/**
 * @typedef Shipment
 * @property {number} [priority]
 * @property {number} location_id
 * @property {string} [external_shipment_id]
 * @property {LineItem[]} line_items
 * @property {Object} [meta]
 * @property {ProcessingDates} [processing_dates]
 */

/**
 * @typedef PaymentMethod
 * @property {string} name
 * @property {string} refund_by
 * @property {Object} [transaction_data]
 * @property {number} amount
 * @property {string} mode
 * @property {Object} [meta]
 * @property {string} collect_by
 */

/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */

/**
 * @typedef ShippingInfo
 * @property {Object} [geo_location]
 * @property {string} [gender]
 * @property {string} [address_type]
 * @property {string} [shipping_type]
 * @property {string} address1
 * @property {string} [title]
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [middle_name]
 * @property {string} city
 * @property {string} primary_mobile_number
 * @property {string} [external_customer_code]
 * @property {string} first_name
 * @property {string} [state_code]
 * @property {string} [floor_no]
 * @property {string} [house_no]
 * @property {string} [landmark]
 * @property {string} [alternate_email]
 * @property {string} [alternate_mobile_number]
 * @property {string} [customer_code]
 * @property {string} primary_email
 * @property {string} state
 * @property {string} country
 * @property {string} [last_name]
 * @property {string} pincode
 * @property {Object[]} [slot]
 */

/**
 * @typedef CreateOrderAPI
 * @property {BillingInfo} billing_info
 * @property {TaxInfo} [tax_info]
 * @property {Object} [currency_info]
 * @property {string} [external_creation_date]
 * @property {Charge[]} [charges]
 * @property {Shipment[]} shipments
 * @property {string} [external_order_id]
 * @property {PaymentInfo} payment_info
 * @property {ShippingInfo} shipping_info
 * @property {Object} [meta]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} message
 * @property {string} [request_id]
 * @property {string} [exception]
 * @property {Object} [info]
 * @property {number} status
 * @property {string} [stack_trace]
 * @property {string} [meta]
 * @property {string} [code]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [refund_by]
 * @property {string} [mode]
 * @property {string} [collect_by]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 * @property {PaymentMethods[]} [payment_methods]
 */

/**
 * @typedef CreateChannelConfig
 * @property {Object} [logo_url]
 * @property {DpConfiguration} [dp_configuration]
 * @property {string} [shipment_assignment]
 * @property {string[]} [lock_states]
 * @property {boolean} [location_reassignment]
 * @property {CreateChannelPaymentInfo} [payment_info]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [is_upserted]
 * @property {boolean} [is_inserted]
 * @property {boolean} [acknowledged]
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
 * @property {string[]} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef OrderStatus
 * @property {FyndOrderIdList[]} [order_details]
 * @property {number} mobile
 * @property {string} start_date
 * @property {string} end_date
 */

/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {SearchKeywordResult} result
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string} [uid]
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Media
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [type]
 */

/**
 * @typedef AutocompletePageAction
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteResult
 * @property {Media} [logo]
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {boolean} [is_active]
 * @property {AutocompleteResult[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} product_uid
 * @property {boolean} [allow_remove]
 * @property {number} min_quantity
 * @property {boolean} [auto_add_to_cart]
 * @property {number} max_quantity
 * @property {boolean} [auto_select]
 */

/**
 * @typedef ProductBundleRequest
 * @property {string} name
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {string} [logo]
 * @property {number} [company_id]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string[]} [page_visibility]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {string} name
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {string} [logo]
 * @property {number} [company_id]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} [id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string[]} [page_visibility]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} name
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {string} [logo]
 * @property {number} [company_id]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string[]} [page_visibility]
 */

/**
 * @typedef Price
 * @property {number} [min_effective]
 * @property {number} [max_marked]
 * @property {number} [min_marked]
 * @property {number} [max_effective]
 * @property {string} [currency]
 */

/**
 * @typedef LimitedProductData
 * @property {string} [name]
 * @property {Object} [price]
 * @property {string[]} [images]
 * @property {string} [slug]
 * @property {Object} [attributes]
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {number} [quantity]
 * @property {Object} [identifier]
 * @property {string[]} [sizes]
 * @property {string} [country_of_origin]
 * @property {string} [short_description]
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
 * @property {number} [product_uid]
 * @property {boolean} [allow_remove]
 * @property {number} [min_quantity]
 * @property {Price} [price]
 * @property {boolean} [auto_add_to_cart]
 * @property {LimitedProductData} [product_details]
 * @property {number} [max_quantity]
 * @property {Size[]} [sizes]
 * @property {boolean} [auto_select]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string} [name]
 * @property {boolean} [same_store_assignment]
 * @property {string} [choice]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {GetProducts[]} [products]
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} name
 * @property {boolean} [active]
 * @property {number} [brand_id]
 * @property {string} [image]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} title
 * @property {Guide} [guide]
 * @property {string} [tag]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [subtitle]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef SizeGuideResponse
 * @property {boolean} [active]
 * @property {string} [name]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [title]
 * @property {Object} [guide]
 * @property {string} [tag]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [subtitle]
 */

/**
 * @typedef MOQData
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef SEOData
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 * @property {Object} [alt_text]
 * @property {SEOData} [seo]
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {ApplicationItemMOQ} [moq]
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 * @property {Object} [alt_text]
 * @property {ApplicationItemSEO} [seo]
 */

/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [values]
 * @property {Object[]} [condition]
 * @property {Object[]} data
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} name
 * @property {string} [key]
 * @property {string} [logo]
 * @property {string} display_type
 * @property {string} [slug]
 * @property {boolean} is_active
 * @property {string} [unit]
 * @property {number} priority
 */

/**
 * @typedef AppConfigurationDetail
 * @property {boolean} is_default
 * @property {string} [name]
 * @property {string[]} [template_slugs]
 * @property {string} [logo]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} app_id
 * @property {number} priority
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {number} next
 * @property {number} current
 * @property {boolean} has_next
 */

/**
 * @typedef GetConfigResponse
 * @property {PageResponseType} page
 * @property {Object[]} data
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {boolean} is_default
 * @property {string} [name]
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} default_key
 * @property {string} app_id
 * @property {number} priority
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
 * @property {Object} [compare]
 * @property {Object} [similar]
 */

/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {Object[]} [units]
 * @property {string} [display]
 * @property {string[]} [filter_types]
 * @property {string} [key]
 */

/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [display]
 * @property {string} [key]
 */

/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingFilterResponse} filter
 * @property {MetaDataListingSortResponse} sort
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {MetaDataListingResponse} [listing]
 */

/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} name
 * @property {string} key
 * @property {string} [logo]
 * @property {string} display_type
 * @property {ProductSize} size
 * @property {boolean} is_active
 * @property {number} priority
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} key
 * @property {string} [logo]
 * @property {ProductSize} [size]
 * @property {boolean} is_active
 * @property {string} [title]
 * @property {number} priority
 * @property {string} [subtitle]
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
 * @typedef ConfigurationBucketPoints
 * @property {number} [start]
 * @property {string} [display]
 * @property {number} [end]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [value]
 * @property {string} [condition]
 * @property {Object[]} [map_values]
 * @property {Object} [map]
 * @property {string} [sort]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [name]
 * @property {string} type
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {number} priority
 * @property {string} [display_name]
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 */

/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
 */

/**
 * @typedef AppConfiguration
 * @property {ConfigurationProduct} [product]
 * @property {string} [type]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {string} [modified_on]
 * @property {string} app_id
 * @property {ConfigurationListing} [listing]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {ConfigurationProduct} [product]
 * @property {string} [type]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} app_id
 * @property {ConfigurationListing} [listing]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {boolean} [is_default]
 * @property {AppCatalogConfiguration} [data]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} config_type
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
 * @property {string} [name]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef ProductFiltersValue
 * @property {string} display
 * @property {Object} value
 * @property {boolean} is_selected
 * @property {string} [currency_code]
 * @property {number} [selected_max]
 * @property {number} [selected_min]
 * @property {string} [currency_symbol]
 * @property {number} [min]
 * @property {string} [query_format]
 * @property {string} [display_format]
 * @property {number} [max]
 * @property {number} [count]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} name
 * @property {string} display
 * @property {string} [logo]
 * @property {string[]} [operators]
 * @property {string} [kind]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} operators
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {Object[]} value
 * @property {string} op
 */

/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [user_id]
 */

/**
 * @typedef SeoDetail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */

/**
 * @typedef CollectionSchedule
 * @property {number} [duration]
 * @property {string} [start]
 * @property {string} [cron]
 * @property {string} [end]
 * @property {NextSchedule[]} [next_schedule]
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
 * @property {string[]} [visible_facets_keys]
 * @property {string} app_id
 * @property {Object} [meta]
 * @property {Object} [_locale_language]
 * @property {string} [sort_on]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_sort]
 * @property {string[]} [tags]
 * @property {UserInfo} [created_by]
 * @property {boolean} [published]
 * @property {Object} [_custom_json]
 * @property {SeoDetail} [seo]
 * @property {CollectionBadge} [badge]
 * @property {string} slug
 * @property {boolean} [is_active]
 * @property {CollectionSchedule} [_schedule]
 * @property {number} [priority]
 * @property {string} name
 * @property {boolean} [allow_facets]
 * @property {string} type
 * @property {CollectionImage} logo
 * @property {string} [description]
 * @property {boolean} [is_visible]
 * @property {CollectionBanner} banners
 * @property {UserInfo} [modified_by]
 */

/**
 * @typedef BannerImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {string[]} [visible_facets_keys]
 * @property {string} [app_id]
 * @property {Object} [meta]
 * @property {string} [sort_on]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {Object} [badge]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {Object} [_schedule]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 * @property {string} [type]
 * @property {BannerImage} [logo]
 * @property {string} [description]
 * @property {ImageUrls} [banners]
 * @property {string[]} [tag]
 */

/**
 * @typedef Media1
 * @property {Object} [meta]
 * @property {string} url
 * @property {string} [type]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {string[]} [visible_facets_keys]
 * @property {string} [app_id]
 * @property {Object} [meta]
 * @property {Action} [action]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {Object} [badge]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {Object} [_schedule]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 * @property {string} [type]
 * @property {Media1} [logo]
 * @property {string} [description]
 * @property {ImageUrls} [banners]
 * @property {string} [uid]
 * @property {string[]} [tag]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [is_selected]
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
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [badge]
 * @property {string} [type]
 * @property {string[]} [visible_facets_keys]
 * @property {Media1} [logo]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {ImageUrls} [banners]
 * @property {string} [app_id]
 * @property {Object} [cron]
 * @property {Object} [meta]
 * @property {string[]} [tag]
 * @property {Object} [_schedule]
 * @property {number} [priority]
 */

/**
 * @typedef UpdateCollection
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [meta]
 * @property {Object} [_locale_language]
 * @property {string} [sort_on]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_sort]
 * @property {string[]} [tags]
 * @property {boolean} [published]
 * @property {Object} [_custom_json]
 * @property {SeoDetail} [seo]
 * @property {CollectionBadge} [badge]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {CollectionSchedule} [_schedule]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 * @property {string} [type]
 * @property {CollectionImage} [logo]
 * @property {string} [description]
 * @property {boolean} [is_visible]
 * @property {CollectionBanner} [banners]
 * @property {UserInfo} [modified_by]
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
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef Price1
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [min]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [key]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */

/**
 * @typedef ProductBrand
 * @property {string} [name]
 * @property {Action} [action]
 * @property {Media1} [logo]
 * @property {number} [uid]
 */

/**
 * @typedef ProductListingDetail
 * @property {Object} [promo_meta]
 * @property {ProductListingPrice} [price]
 * @property {Object} [teaser_tag]
 * @property {boolean} [has_variant]
 * @property {string} [short_description]
 * @property {string} [color]
 * @property {string} [image_nature]
 * @property {boolean} [sellable]
 * @property {string[]} [highlights]
 * @property {string} [product_online_date]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string[]} [similars]
 * @property {string} slug
 * @property {string} [item_code]
 * @property {Media1[]} [medias]
 * @property {number} [rating]
 * @property {string} [discount]
 * @property {string} [name]
 * @property {number} [rating_count]
 * @property {string} [type]
 * @property {string[]} [tryouts]
 * @property {string} [description]
 * @property {number} [uid]
 * @property {Object} [attributes]
 * @property {string} [item_type]
 * @property {ProductBrand} [brand]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} [page]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {string} [name]
 * @property {number} [available_articles]
 * @property {number} [available_sizes]
 * @property {number} [total_articles]
 * @property {number} [total_sizes]
 * @property {number} [article_freshness]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [out_of_stock_count]
 * @property {number} [count]
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
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
 */

/**
 * @typedef OptInPostRequest
 * @property {string} opt_level
 * @property {boolean} [enabled]
 * @property {number} [company_id]
 * @property {number[]} [brand_ids]
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef CompanyOptIn
 * @property {string} opt_level
 * @property {boolean} enabled
 * @property {number} company_id
 * @property {number} modified_on
 * @property {number[]} brand_ids
 * @property {string} platform
 * @property {number[]} store_ids
 * @property {Object} [created_by]
 * @property {number} created_on
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [name]
 * @property {string} [company_type]
 * @property {string} [business_type]
 * @property {number} [uid]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {number} [total_article]
 * @property {string} [brand_name]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [store]
 * @property {string} [company]
 * @property {number} [brand]
 */

/**
 * @typedef StoreDetail
 * @property {string} [name]
 * @property {Object} [address]
 * @property {string} [store_code]
 * @property {Object} [timing]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {Object[]} [additional_contacts]
 * @property {string} [store_type]
 * @property {Object} [manager]
 * @property {Object[]} [documents]
 * @property {string} [created_on]
 * @property {string} [display_name]
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
 * @property {string} [format]
 * @property {boolean} [multi]
 * @property {boolean} [mandatory]
 * @property {AttributeSchemaRange} [range]
 * @property {string[]} [allowed_values]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {boolean} indexing
 * @property {string[]} [depends_on]
 * @property {number} [priority]
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
 * @typedef GenderDetail
 * @property {string} [name]
 * @property {AttributeMasterDetails} [details]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMaster} [schema]
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string} [slug]
 * @property {AttributeMasterFilter} [filters]
 * @property {string[]} [departments]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [id]
 * @property {boolean} [is_nested]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PTErrorResponse
 * @property {string} [message]
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {Object} [meta]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [_cls]
 * @property {string} name
 * @property {Object} [platforms]
 * @property {string} logo
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {number} priority_order
 * @property {string[]} [synonyms]
 */

/**
 * @typedef DepartmentCreateResponse
 * @property {string} message
 * @property {number} uid
 */

/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UserSerializer
 * @property {string} [contact]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef GetDepartment
 * @property {string} [name]
 * @property {string} [logo]
 * @property {number} [page_no]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {number} [page_size]
 * @property {string} [modified_on]
 * @property {string} [search]
 * @property {string} [item_type]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {number} [priority_order]
 * @property {string[]} [synonyms]
 */

/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {string} [message]
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {Object} [meta]
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
 * @property {Object} [_cls]
 * @property {Object} name
 * @property {UserDetail} [verified_by]
 * @property {string} logo
 * @property {Object} [slug]
 * @property {string} modified_on
 * @property {Object} [_id]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {UserDetail} [created_by]
 * @property {string} created_on
 * @property {UserDetail} [modified_by]
 * @property {number} priority_order
 * @property {Object[]} [synonyms]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [name]
 * @property {boolean} is_expirable
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string} slug
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {string[]} [attributes]
 * @property {string[]} [departments]
 * @property {string[]} [categories]
 * @property {string} [modified_on]
 * @property {boolean} is_physical
 * @property {string} [tag]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [name]
 * @property {boolean} is_expirable
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string} slug
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {string[]} [attributes]
 * @property {string[]} [departments]
 * @property {string[]} [categories]
 * @property {boolean} is_physical
 * @property {string} [id]
 * @property {string} [tag]
 */

/**
 * @typedef Properties
 * @property {Object} [return_config]
 * @property {Object} [teaser_tag]
 * @property {Object} [multi_size]
 * @property {Object} [hsn_code]
 * @property {Object} [is_dependent]
 * @property {Object} [sizes]
 * @property {Object} [country_of_origin]
 * @property {Object} [short_description]
 * @property {Object} [variants]
 * @property {Object} [media]
 * @property {Object} [tags]
 * @property {Object} [command]
 * @property {Object} [highlights]
 * @property {Object} [category_slug]
 * @property {Object} [trader_type]
 * @property {Object} [product_publish]
 * @property {Object} [size_guide]
 * @property {Object} [slug]
 * @property {Object} [trader]
 * @property {Object} [item_code]
 * @property {Object} [custom_order]
 * @property {Object} [is_active]
 * @property {Object} [currency]
 * @property {Object} [name]
 * @property {Object} [description]
 * @property {Object} [product_group_tag]
 * @property {Object} [item_type]
 * @property {Object} [no_of_boxes]
 * @property {Object} [brand_uid]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [type]
 * @property {Object} [definitions]
 * @property {string} [description]
 * @property {Properties} [properties]
 * @property {string} [title]
 * @property {string[]} [required]
 */

/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
 */

/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateDetails} [template_details]
 * @property {TemplateValidationData} [data]
 */

/**
 * @typedef InventoryValidationResponse
 * @property {string} [message]
 * @property {Object} [data]
 */

/**
 * @typedef HSNData
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */

/**
 * @typedef HSNCodesResponse
 * @property {string} [message]
 * @property {HSNData} [data]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [templates]
 * @property {string} [type]
 * @property {string[]} [brand]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {number} [seller_id]
 * @property {string} [completed_on]
 * @property {Object} [template_tags]
 * @property {string} [trigger_on]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [status]
 * @property {string} [task_id]
 * @property {string} [url]
 * @property {string} [id]
 * @property {VerifiedBy} [created_by]
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
 * @typedef Hierarchy
 * @property {number} department
 * @property {number} l2
 * @property {number} l1
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
 * @typedef CategoryRequestBody
 * @property {string} name
 * @property {Hierarchy[]} [hierarchy]
 * @property {Media2} [media]
 * @property {CategoryMapping} [marketplaces]
 * @property {string} [slug]
 * @property {string[]} [tryouts]
 * @property {boolean} is_active
 * @property {number[]} departments
 * @property {number} level
 * @property {number} [priority]
 * @property {string[]} [synonyms]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */

/**
 * @typedef Category
 * @property {string} name
 * @property {Hierarchy[]} [hierarchy]
 * @property {Media2} [media]
 * @property {CategoryMapping} [marketplaces]
 * @property {string} [slug]
 * @property {string[]} [tryouts]
 * @property {number} [uid]
 * @property {boolean} is_active
 * @property {number[]} departments
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {number} level
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {number} [priority]
 * @property {Object} [modified_by]
 * @property {string[]} [synonyms]
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */

/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef Trader
 * @property {Object} name
 * @property {string[]} [address]
 * @property {string} [type]
 */

/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {number} [manufacturing_time]
 * @property {boolean} [is_custom_order]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {NetQuantity} [net_quantity]
 * @property {string} [bulk_job_id]
 * @property {ReturnConfig} return_config
 * @property {TeaserTag} [teaser_tag]
 * @property {boolean} [multi_size]
 * @property {Object} [variant_media]
 * @property {string} [action]
 * @property {boolean} [is_dependent]
 * @property {Object[]} sizes
 * @property {string} country_of_origin
 * @property {string} [short_description]
 * @property {Object} [variants]
 * @property {Object} [change_request_id]
 * @property {number} company_id
 * @property {Media1[]} [media]
 * @property {Object} [variant_group]
 * @property {string} [requester]
 * @property {string[]} [tags]
 * @property {string[]} [highlights]
 * @property {string} category_slug
 * @property {Object} [_custom_json]
 * @property {boolean} [is_set]
 * @property {ProductPublish} [product_publish]
 * @property {string} [size_guide]
 * @property {string} slug
 * @property {Trader[]} trader
 * @property {string} item_code
 * @property {CustomOrder} [custom_order]
 * @property {boolean} [is_active]
 * @property {TaxIdentifier} tax_identifier
 * @property {number[]} departments
 * @property {string} currency
 * @property {string} template_tag
 * @property {string} name
 * @property {string} [description]
 * @property {string[]} [product_group_tag]
 * @property {number} [uid]
 * @property {Object} [attributes]
 * @property {string} item_type
 * @property {number} [no_of_boxes]
 * @property {number} brand_uid
 * @property {boolean} [is_image_less_product]
 */

/**
 * @typedef NetQuantityResponse
 * @property {number} [value]
 * @property {string} [unit]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef Image
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */

/**
 * @typedef Logo
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Product
 * @property {NetQuantityResponse} [net_quantity]
 * @property {VerifiedBy} [verified_by]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string[]} [l3_mapping]
 * @property {Object} [teaser_tag]
 * @property {Object} [moq]
 * @property {boolean} [multi_size]
 * @property {Object} [variant_media]
 * @property {string} [hsn_code]
 * @property {boolean} [is_dependent]
 * @property {Object[]} [sizes]
 * @property {string} [country_of_origin]
 * @property {string} [short_description]
 * @property {Object} [variants]
 * @property {Object} [category]
 * @property {string} [pending]
 * @property {string} [color]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_expirable]
 * @property {string} [image_nature]
 * @property {Image[]} [images]
 * @property {Media1[]} [media]
 * @property {string} [id]
 * @property {Object} [variant_group]
 * @property {string[]} [tags]
 * @property {number} [company_id]
 * @property {string[]} [all_identifiers]
 * @property {string[]} [highlights]
 * @property {Object} [created_by]
 * @property {string} [category_slug]
 * @property {number} [category_uid]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_set]
 * @property {ProductPublished} [product_publish]
 * @property {number[]} [all_company_ids]
 * @property {string} [size_guide]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string} [item_code]
 * @property {Object} [custom_order]
 * @property {number[]} [departments]
 * @property {Object} [tax_identifier]
 * @property {Object[]} [trader]
 * @property {string} [currency]
 * @property {boolean} [is_physical]
 * @property {string} [template_tag]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string[]} [product_group_tag]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [primary_color]
 * @property {number} [no_of_boxes]
 * @property {Object} [attributes]
 * @property {string} [stage]
 * @property {string} [item_type]
 * @property {Object[]} [all_sizes]
 * @property {string} [verified_on]
 * @property {Brand} [brand]
 * @property {number} [brand_uid]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductVariants
 * @property {string} [name]
 * @property {Media1[]} [media]
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {number} [category_uid]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {string} [unit]
 * @property {AttributeMaster} schema
 * @property {string[]} [tags]
 * @property {boolean} [variant]
 * @property {Object} [created_by]
 * @property {boolean} [is_nested]
 * @property {AttributeMasterDetails} details
 * @property {string} [raw_key]
 * @property {string} slug
 * @property {AttributeMasterFilter} filters
 * @property {string[]} departments
 * @property {string} [suggestion]
 * @property {string} [name]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {Object} [synonyms]
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
 * @property {boolean} [primary]
 * @property {string} gtin_value
 * @property {string} gtin_type
 */

/**
 * @typedef AllSizes
 * @property {number} item_width
 * @property {number} item_weight
 * @property {Object} size
 * @property {number} item_length
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {number} item_height
 * @property {string} item_dimensions_unit_of_measure
 * @property {Object} item_weight_unit_of_measure
 */

/**
 * @typedef GetAllSizes
 * @property {AllSizes[]} [all_sizes]
 */

/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */

/**
 * @typedef UserInfo1
 * @property {string} [email]
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [user_id]
 */

/**
 * @typedef BulkJob
 * @property {number} [succeed]
 * @property {number} [failed]
 * @property {string} [tracking_url]
 * @property {number} company_id
 * @property {string} [custom_template_tag]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {Object[]} [cancelled_records]
 * @property {string} [file_path]
 * @property {Object[]} [failed_records]
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
 * @property {number} [cancelled]
 * @property {UserInfo1} [modified_by]
 * @property {string} [template_tag]
 */

/**
 * @typedef BulkResponse
 * @property {string} batch_id
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
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
 * @property {number} [succeed]
 * @property {number} [failed]
 * @property {ProductTemplate} [template]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {UserDetail1} [created_by]
 * @property {string} [file_path]
 * @property {string[]} [failed_records]
 * @property {string[]} [cancelled_records]
 * @property {string} [created_on]
 * @property {number} [cancelled]
 * @property {UserDetail1} [modified_by]
 * @property {string} [template_tag]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkProductRequest
 * @property {number} company_id
 * @property {Object[]} data
 * @property {string} batch_id
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
 * @typedef ProductBulkAssets
 * @property {number} [company_id]
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef Items
 * @property {number} [succeed]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {string[]} [cancelled_records]
 * @property {number} [retry]
 * @property {string} [file_path]
 * @property {string[]} [failed_records]
 * @property {UserCommon} [created_by]
 * @property {string} [created_on]
 * @property {number} [cancelled]
 * @property {UserCommon} [modified_by]
 * @property {string} [tracking_url]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [item_id]
 * @property {string} [size]
 * @property {number} [company_id]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */

/**
 * @typedef SetSize
 * @property {string} size
 * @property {number} pieces
 */

/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */

/**
 * @typedef InventorySet
 * @property {SizeDistribution} size_distribution
 * @property {string} [name]
 * @property {number} [quantity]
 */

/**
 * @typedef GTIN
 * @property {boolean} [primary]
 * @property {Object} gtin_value
 * @property {string} gtin_type
 */

/**
 * @typedef InvSize
 * @property {boolean} [is_set]
 * @property {number} [price]
 * @property {number} [item_width]
 * @property {number} [item_weight]
 * @property {string} store_code
 * @property {Object} size
 * @property {number} [price_transfer]
 * @property {number} [item_length]
 * @property {number} quantity
 * @property {InventorySet} [set]
 * @property {GTIN[]} identifiers
 * @property {number} [item_height]
 * @property {string} currency
 * @property {number} price_effective
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [expiration_date]
 */

/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 * @property {number} [uid]
 */

/**
 * @typedef InventoryRequest
 * @property {InvSize[]} sizes
 * @property {number} company_id
 * @property {ItemQuery} item
 */

/**
 * @typedef InventoryResponse
 * @property {number} [item_id]
 * @property {number} [price]
 * @property {number} [price_effective]
 * @property {Object} [store]
 * @property {number} [price_transfer]
 * @property {string} [size]
 * @property {string} [uid]
 * @property {number} [quantity]
 * @property {Object} [identifiers]
 * @property {string} [seller_identifier]
 * @property {string} [currency]
 * @property {string} [inventory_updated_on]
 * @property {number} [sellable_quantity]
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
 * @typedef PriceMeta
 * @property {number} marked
 * @property {number} transfer
 * @property {string} [updated_at]
 * @property {number} effective
 * @property {string} currency
 * @property {Object} [tp_notes]
 */

/**
 * @typedef ManufacturerResponse
 * @property {boolean} is_default
 * @property {string} address
 * @property {string} name
 */

/**
 * @typedef QuantityBase
 * @property {string} [updated_at]
 * @property {number} [count]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [sellable]
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
 * @typedef Trader1
 * @property {string} name
 * @property {string[]} address
 * @property {string} type
 */

/**
 * @typedef DimensionResponse
 * @property {boolean} is_default
 * @property {number} length
 * @property {string} unit
 * @property {number} height
 * @property {number} width
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef InventorySellerResponse
 * @property {Object} [fynd_meta]
 * @property {ReturnConfig1} [return_config]
 * @property {PriceMeta} price
 * @property {string} [expiration_date]
 * @property {Object} [meta]
 * @property {string} seller_identifier
 * @property {ManufacturerResponse} manufacturer
 * @property {string} country_of_origin
 * @property {string} [trace_id]
 * @property {Quantities} [quantities]
 * @property {WeightResponse} weight
 * @property {string[]} [tags]
 * @property {Object} identifier
 * @property {UserSerializer} [created_by]
 * @property {CompanyMeta} company
 * @property {Object} [_custom_json]
 * @property {number} item_id
 * @property {string} fynd_item_code
 * @property {boolean} [is_set]
 * @property {string} size
 * @property {boolean} [is_active]
 * @property {Trader1[]} [trader]
 * @property {Object} [tax_identifier]
 * @property {string} [added_on_store]
 * @property {DimensionResponse} dimension
 * @property {Object} [raw_meta]
 * @property {StoreMeta} store
 * @property {boolean} [track_inventory]
 * @property {boolean} fragile
 * @property {string} uid
 * @property {string} [stage]
 * @property {InventorySet} [set]
 * @property {BrandMeta} brand
 * @property {string} fynd_article_code
 * @property {UserSerializer} [modified_by]
 * @property {number} total_quantity
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ReturnConfig2
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef PriceArticle
 * @property {number} [marked]
 * @property {number} [transfer]
 * @property {number} [effective]
 * @property {string} [currency]
 * @property {Object} [tp_notes]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {boolean} [is_default]
 * @property {string} [address]
 * @property {string} [name]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [order_committed]
 * @property {Quantity} [damaged]
 * @property {Quantity} [not_available]
 * @property {Quantity} [sellable]
 */

/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef BrandMeta1
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef Trader2
 * @property {string} [name]
 * @property {string[]} [address]
 * @property {string} [type]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [height]
 * @property {number} [length]
 * @property {string} [unit]
 * @property {number} [width]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {number} [uid]
 * @property {string} [store_type]
 */

/**
 * @typedef GetInventories
 * @property {ReturnConfig2} [return_config]
 * @property {PriceArticle} [price]
 * @property {DateMeta} [date_meta]
 * @property {number} [total_quantity]
 * @property {string} [seller_identifier]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {string} [country_of_origin]
 * @property {string} [trace_id]
 * @property {Object} [platforms]
 * @property {QuantitiesArticle} [quantities]
 * @property {WeightResponse1} [weight]
 * @property {string[]} [tags]
 * @property {Object} [identifier]
 * @property {string} [inventory_updated_on]
 * @property {UserSerializer} [created_by]
 * @property {BrandMeta1} [brand]
 * @property {CompanyMeta1} [company]
 * @property {number} [item_id]
 * @property {boolean} [is_set]
 * @property {string} [size]
 * @property {Trader2[]} [trader]
 * @property {Object} [tax_identifier]
 * @property {DimensionResponse1} [dimension]
 * @property {ArticleStoreResponse} [store]
 * @property {boolean} [track_inventory]
 * @property {string} [uid]
 * @property {string} [stage]
 * @property {string} [id]
 * @property {UserSerializer} [modified_by]
 * @property {string} [expiration_date]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {number} [succeed]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [file_path]
 * @property {string[]} [failed_records]
 * @property {string[]} [cancelled_records]
 * @property {string} [created_on]
 * @property {number} [cancelled]
 * @property {Object} [modified_by]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} [trace_id]
 * @property {string} store_code
 * @property {number} [price]
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {number} [quantity]
 * @property {string} seller_identifier
 * @property {string} [currency]
 * @property {number} [price_effective]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [price_marked]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [total_quantity]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {InventoryJobPayload[]} sizes
 * @property {number} company_id
 * @property {Object} [user]
 * @property {string} batch_id
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [store]
 * @property {string} [type]
 * @property {number[]} [brand]
 */

/**
 * @typedef InventoryExportResponse
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {string} [status]
 * @property {string} task_id
 * @property {Object} [request_params]
 */

/**
 * @typedef InventoryExportJob
 * @property {number} seller_id
 * @property {string} [completed_on]
 * @property {string} [trigger_on]
 * @property {string} [status]
 * @property {string} task_id
 * @property {string} [url]
 * @property {Object} [request_params]
 */

/**
 * @typedef FilerList
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef InventoryConfig
 * @property {boolean} [multivalues]
 * @property {FilerList[]} [data]
 */

/**
 * @typedef InventoryPayload
 * @property {string} [trace_id]
 * @property {string[]} [tags]
 * @property {number} [total_quantity]
 * @property {string} seller_identifier
 * @property {number} store_id
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
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
 * @property {InventoryFailedReason} [reason]
 * @property {InventoryPayload} [data]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */

/**
 * @typedef HsnUpsert
 * @property {number} [tax2]
 * @property {number} threshold1
 * @property {number} company_id
 * @property {boolean} tax_on_mrp
 * @property {boolean} [tax_on_esp]
 * @property {boolean} [is_active]
 * @property {string} hs2_code
 * @property {number} [uid]
 * @property {number} [threshold2]
 * @property {string} hsn_code
 * @property {number} tax1
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [tax2]
 * @property {number} [threshold1]
 * @property {number} [company_id]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [id]
 * @property {boolean} [tax_on_esp]
 * @property {string} [modified_on]
 * @property {string} [hs2_code]
 * @property {number} [threshold2]
 * @property {string} [hsn_code]
 * @property {number} [tax1]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef PageResponse
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [current]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
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
 * @property {number} rate
 * @property {string} effective_date
 * @property {number} [cess]
 * @property {number} threshold
 */

/**
 * @typedef HSNDataInsertV2
 * @property {TaxSlab[]} taxes
 * @property {string} type
 * @property {string} reporting_hsn
 * @property {string} description
 * @property {string} [modified_on]
 * @property {string} country_code
 * @property {string} hsn_code
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef BrandItem
 * @property {string} [discount]
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {string[]} [departments]
 * @property {Action} [action]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef Department
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {number} [priority_order]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef ThirdLevelChild
 * @property {string} [name]
 * @property {Object[]} [childs]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef SecondLevelChild
 * @property {string} [name]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef Child
 * @property {string} [name]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CategoryItems
 * @property {string} [name]
 * @property {Child[]} [childs]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Action} [action]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentIdentifier[]} [departments]
 * @property {DepartmentCategoryTree[]} [data]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} page
 * @property {Object} [operators]
 */

/**
 * @typedef ProductDetail
 * @property {Object} [promo_meta]
 * @property {Object} [teaser_tag]
 * @property {boolean} [has_variant]
 * @property {string} [short_description]
 * @property {string} [color]
 * @property {string} [image_nature]
 * @property {string[]} [highlights]
 * @property {string} [product_online_date]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string[]} [similars]
 * @property {string} slug
 * @property {string} [item_code]
 * @property {Media1[]} [medias]
 * @property {number} [rating]
 * @property {string} [name]
 * @property {number} [rating_count]
 * @property {string} [type]
 * @property {string[]} [tryouts]
 * @property {string} [description]
 * @property {number} [uid]
 * @property {Object} [attributes]
 * @property {string} [item_type]
 * @property {ProductBrand} [brand]
 */

/**
 * @typedef InventoryPage
 * @property {number} item_total
 * @property {string} [next_id]
 * @property {string} type
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 */

/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef ArticleQuery
 * @property {number} item_id
 * @property {string} size
 * @property {number[]} [ignored_stores]
 */

/**
 * @typedef AssignStoreArticle
 * @property {ArticleAssignment} [article_assignment]
 * @property {ArticleQuery} [query]
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {string} [group_id]
 */

/**
 * @typedef AssignStore
 * @property {string} [channel_identifier]
 * @property {number} [company_id]
 * @property {string} pincode
 * @property {string} app_id
 * @property {number[]} [store_ids]
 * @property {AssignStoreArticle[]} articles
 * @property {string} [channel_type]
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef StoreAssignResponse
 * @property {number} item_id
 * @property {ArticleAssignment1} article_assignment
 * @property {Object[]} [strategy_wise_listing]
 * @property {string} [s_city]
 * @property {number} [store_pincode]
 * @property {number} [company_id]
 * @property {string} size
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {number} [price_marked]
 * @property {boolean} status
 * @property {number} quantity
 * @property {Object} [meta]
 * @property {number} [store_id]
 * @property {number} [price_effective]
 * @property {string} [group_id]
 * @property {number} [index]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {string} [name]
 * @property {SellerPhoneNumber} mobile_no
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [country]
 * @property {string} [address2]
 * @property {string} [state]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {number} [pincode]
 * @property {string} [country_code]
 * @property {number} [latitude]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {string} [address1]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [name]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [reject_reason]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [company_type]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer2} [created_by]
 * @property {string} [created_on]
 * @property {string} [business_type]
 * @property {UserSerializer2} [modified_by]
 * @property {GetAddressSerializer[]} [addresses]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef GetLocationSerializer
 * @property {UserSerializer1} [verified_by]
 * @property {string} phone_number
 * @property {Object} [warnings]
 * @property {LocationManagerSerializer} [manager]
 * @property {Document[]} [documents]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {UserSerializer1} [created_by]
 * @property {LocationIntegrationType} [integration_type]
 * @property {Object} [_custom_json]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string[]} [notification_emails]
 * @property {string} [store_type]
 * @property {string} display_name
 * @property {string} name
 * @property {GetAddressSerializer} address
 * @property {string} code
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {GetCompanySerializer} [company]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [created_on]
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
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {number} uid
 * @property {string} app_id
 * @property {Object} [_custom_json]
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
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
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
 * @typedef GetCompanyProfileSerializerResponse
 * @property {boolean} [franchise_enabled]
 * @property {string} [created_on]
 * @property {string} business_type
 * @property {string} [mode]
 * @property {string} [name]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {UserSerializer} [verified_by]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {ContactDetails} [contact_details]
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [modified_by]
 * @property {string} [business_info]
 * @property {UserSerializer} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {Object} [warnings]
 * @property {string} company_type
 * @property {string[]} [notification_emails]
 * @property {number} uid
 * @property {string} [modified_on]
 * @property {Document[]} [documents]
 * @property {string} [verified_on]
 * @property {BusinessDetails} [business_details]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} [country_code]
 * @property {string} city
 * @property {number} pincode
 * @property {string} [address2]
 * @property {string} address_type
 * @property {number} longitude
 * @property {string} [landmark]
 * @property {string} state
 * @property {number} latitude
 * @property {string} country
 * @property {string} address1
 */

/**
 * @typedef UpdateCompany
 * @property {string[]} [notification_emails]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {boolean} [franchise_enabled]
 * @property {string} [business_info]
 * @property {string} [business_type]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {Object} [warnings]
 * @property {ContactDetails} [contact_details]
 * @property {string} [company_type]
 * @property {Document[]} [documents]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {BusinessDetails} [business_details]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [company_documents]
 * @property {string} [stage]
 * @property {DocumentsObj} [brand]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [created_on]
 * @property {string} [verified_on]
 * @property {string} name
 * @property {UserSerializer} [verified_by]
 * @property {string} [slug_key]
 * @property {string} [stage]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [modified_by]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [synonyms]
 * @property {Object} [warnings]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string} [mode]
 * @property {Object} [_locale_language]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {string} [brand_tier]
 * @property {string} logo
 * @property {string} [description]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef CompanyDetails
 * @property {string} [website_url]
 * @property {CompanySocialAccounts[]} [socials]
 */

/**
 * @typedef CompanySerializer
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [created_on]
 * @property {string[]} [market_channels]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 * @property {string} business_type
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} company_type
 * @property {string} [stage]
 * @property {string} [name]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {CompanyDetails} [details]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {UserSerializer} [verified_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {Object} [warnings]
 * @property {CompanySerializer} [company]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number[]} brands
 * @property {number} company
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} start_date
 * @property {string} end_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {string} title
 * @property {string} holiday_type
 * @property {HolidayDateSerializer} date
 */

/**
 * @typedef AddressSerializer
 * @property {string} [country_code]
 * @property {string} [city]
 * @property {number} [pincode]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {number} longitude
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {number} latitude
 * @property {string} [country]
 * @property {string} [address1]
 */

/**
 * @typedef LocationSerializer
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string[]} [notification_emails]
 * @property {Document[]} [documents]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} code
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {LocationManagerSerializer} [manager]
 * @property {Object} [warnings]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {number} company
 * @property {string} name
 * @property {string} [store_type]
 * @property {Object} [_custom_json]
 * @property {AddressSerializer} address
 * @property {string} display_name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef _ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef _ArticleQuery
 * @property {number} [item_id]
 * @property {string} [size]
 * @property {number[]} [ignored_stores]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleAssignment} [article_assignment]
 * @property {string} [group_id]
 * @property {number} [quantity]
 * @property {_ArticleQuery} [query]
 * @property {Object} [meta]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {number[]} [store_ids]
 * @property {string} [pincode]
 * @property {number} [company_id]
 * @property {string} [app_id]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_identifier]
 * @property {string} [channel_type]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {_ArticleAssignment} [article_assignment]
 * @property {string} [_id]
 * @property {string} [s_city]
 * @property {boolean} [status]
 * @property {string} [uid]
 * @property {number} [company_id]
 * @property {number} [preice_effective]
 * @property {string} [store_pincode]
 * @property {number} [index]
 * @property {number} [item_id]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {number} [store_id]
 * @property {string} [size]
 * @property {number} [price_marked]
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
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {string} integration
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
 * @property {string} company_name
 * @property {string} integration
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
 * @property {boolean} [is_archived]
 * @property {boolean} [is_public]
 */

/**
 * @typedef Rule
 * @property {number} [min]
 * @property {number} [key]
 * @property {number} [value]
 * @property {number} [discount_qty]
 * @property {number} [max]
 */

/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [app]
 * @property {number} [user]
 * @property {number} [total]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */

/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
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
 * @property {string[]} [types]
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef Restrictions
 * @property {UsesRestriction} [uses]
 * @property {PriceRange} [price_range]
 * @property {PostOrder} [post_order]
 * @property {number[]} [user_groups]
 * @property {Object} [payments]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {number[]} [ordering_stores]
 * @property {boolean} [coupon_allowed]
 * @property {string[]} [platforms]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [end]
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 * @property {number} [duration]
 */

/**
 * @typedef RuleDefinition
 * @property {string} calculate_on
 * @property {string[]} [scope]
 * @property {string} value_type
 * @property {boolean} [auto_apply]
 * @property {string} applicable_on
 * @property {boolean} [is_exact]
 * @property {string} type
 * @property {string} [currency_code]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [title]
 * @property {string} [description]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 */

/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
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
 * @property {Rule[]} rule
 * @property {CouponAction} [action]
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {string} type_slug
 * @property {CouponSchedule} [_schedule]
 * @property {string[]} [tags]
 * @property {string} code
 * @property {RuleDefinition} rule_definition
 * @property {Validity} validity
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
 * @property {Ownership} ownership
 * @property {Validation} [validation]
 * @property {Identifier} identifiers
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
 * @property {Rule[]} rule
 * @property {CouponAction} [action]
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {string} type_slug
 * @property {CouponSchedule} [_schedule]
 * @property {string[]} [tags]
 * @property {string} code
 * @property {RuleDefinition} rule_definition
 * @property {Validity} validity
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
 * @property {Ownership} ownership
 * @property {Validation} [validation]
 * @property {Identifier} identifiers
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [user]
 * @property {number} [total]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [remaining]
 * @property {UsesRemaining1} [maximum]
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
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
 * @property {string[]} [codes]
 */

/**
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef Restrictions1
 * @property {UsesRestriction1} uses
 * @property {number} [order_quantity]
 * @property {boolean} [anonymous_users]
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [user_id]
 * @property {string[]} [platforms]
 */

/**
 * @typedef PromotionAction
 * @property {string} action_date
 * @property {string} action_type
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [offer_text]
 * @property {string} [description]
 * @property {string} [name]
 */

/**
 * @typedef CompareObject
 * @property {number} [less_than_equals]
 * @property {number} [less_than]
 * @property {number} [greater_than_equals]
 * @property {number} [equals]
 * @property {number} [greater_than]
 */

/**
 * @typedef ItemCriteria
 * @property {number[]} [item_id]
 * @property {string[]} [item_sku]
 * @property {boolean} [all_items]
 * @property {number[]} [item_brand]
 * @property {string[]} [item_size]
 * @property {number[]} [item_company]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_category]
 * @property {string[]} [item_exclude_sku]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_exclude_brand]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_store]
 * @property {CompareObject} [cart_total]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [discount_price]
 * @property {number} [discount_percentage]
 * @property {number} [max_offer_quantity]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_amount]
 * @property {string} [code]
 * @property {number} [max_discount_amount]
 */

/**
 * @typedef DiscountRule
 * @property {ItemCriteria} item_criteria
 * @property {DiscountOffer} offer
 * @property {string} buy_condition
 * @property {string} discount_type
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef PromotionSchedule
 * @property {string} [end]
 * @property {string} [cron]
 * @property {boolean} published
 * @property {Object[]} [next_schedule]
 * @property {string} start
 * @property {number} [duration]
 */

/**
 * @typedef PromotionListItem
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [code]
 * @property {DisplayMeta1} display_meta
 * @property {string} [apply_exclusive]
 * @property {Object} [_custom_json]
 * @property {boolean} [apply_all_discount]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {Object} buy_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {boolean} [stackable]
 * @property {string} promotion_type
 * @property {Ownership1} ownership
 * @property {string} mode
 * @property {string} [currency]
 * @property {number} [apply_priority]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 */

/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */

/**
 * @typedef PromotionAdd
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [code]
 * @property {DisplayMeta1} display_meta
 * @property {string} [apply_exclusive]
 * @property {Object} [_custom_json]
 * @property {boolean} [apply_all_discount]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {Object} buy_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {boolean} [stackable]
 * @property {string} promotion_type
 * @property {Ownership1} ownership
 * @property {string} mode
 * @property {string} [currency]
 * @property {number} [apply_priority]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 */

/**
 * @typedef PromotionUpdate
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [code]
 * @property {DisplayMeta1} display_meta
 * @property {string} [apply_exclusive]
 * @property {Object} [_custom_json]
 * @property {boolean} [apply_all_discount]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {Object} buy_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {boolean} [stackable]
 * @property {string} promotion_type
 * @property {Ownership1} ownership
 * @property {string} mode
 * @property {string} [currency]
 * @property {number} [apply_priority]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef CartItem
 * @property {string} product_id
 * @property {number} [quantity]
 * @property {string} size
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [currency_symbol]
 * @property {string} [key]
 * @property {number} [value]
 * @property {string} [display]
 * @property {string[]} [message]
 * @property {string} [currency_code]
 */

/**
 * @typedef RawBreakup
 * @property {number} [gst_charges]
 * @property {number} [subtotal]
 * @property {number} [delivery_charge]
 * @property {number} [vog]
 * @property {number} [mrp_total]
 * @property {number} [coupon]
 * @property {number} [cod_charge]
 * @property {number} [total]
 * @property {number} [discount]
 * @property {number} [fynd_cash]
 * @property {number} [convenience_fee]
 * @property {number} [you_saved]
 */

/**
 * @typedef CouponBreakup
 * @property {boolean} [is_applied]
 * @property {number} [value]
 * @property {string} [message]
 * @property {string} [code]
 * @property {string} [type]
 * @property {string} [uid]
 */

/**
 * @typedef LoyaltyPoints
 * @property {string} [description]
 * @property {number} [applicable]
 * @property {number} [total]
 * @property {boolean} [is_applied]
 */

/**
 * @typedef CartBreakup
 * @property {DisplayBreakup[]} [display]
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 */

/**
 * @typedef ProductPrice
 * @property {number} [add_on]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {number} [selling]
 * @property {number} [marked]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_category]
 * @property {string} [payable_by]
 */

/**
 * @typedef AppliedPromotion
 * @property {string} [offer_text]
 * @property {number} [amount]
 * @property {string} [promo_id]
 * @property {boolean} [mrp_promotion]
 * @property {number} [article_quantity]
 * @property {string} [promotion_type]
 * @property {Ownership2} [ownership]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 * @property {number} [effective]
 * @property {string} [currency_code]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ProductArticle
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [extra_meta]
 * @property {BaseInfo} [seller]
 * @property {number} [quantity]
 * @property {string} [size]
 * @property {string[]} [product_group_tags]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {BaseInfo} [store]
 * @property {Object} [parent_item_identifiers]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {string[]} [sizes]
 * @property {boolean} [deliverable]
 * @property {number} [other_store_quantity]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {string} [url]
 * @property {string} [type]
 * @property {ActionQuery} [query]
 */

/**
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef CartProduct
 * @property {ProductAction} [action]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {ProductImage[]} [images]
 * @property {number} [uid]
 * @property {CategoryInfo[]} [categories]
 * @property {BaseInfo} [brand]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef CartProductInfo
 * @property {string} [coupon_message]
 * @property {string} [key]
 * @property {ProductPriceInfo} [price]
 * @property {Object} [bulk_offer]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {boolean} [is_set]
 * @property {ProductArticle} [article]
 * @property {number} [quantity]
 * @property {ProductAvailability} [availability]
 * @property {string} [discount]
 * @property {string} [message]
 * @property {PromoMeta} [promo_meta]
 * @property {CartProduct} [product]
 * @property {Object} [parent_item_identifiers]
 * @property {CartProductIdentifer} identifiers
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {boolean} [is_valid]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
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
 * @property {string} [area_code_slug]
 * @property {string} [state]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {string} area_code
 * @property {string} [country_code]
 * @property {string} [address_type]
 * @property {number} [pincode]
 * @property {string} [area]
 * @property {Object} [meta]
 * @property {string} [country]
 * @property {number} [phone]
 * @property {string} [city]
 * @property {string} [address]
 * @property {string} [name]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
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
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} product_id
 * @property {number} amount_paid
 * @property {OpenApiFiles[]} [files]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} [employee_discount]
 * @property {string} size
 * @property {number} delivery_charges
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {number} coupon_effective_discount
 * @property {number} [loyalty_discount]
 * @property {number} price_marked
 * @property {number} price_effective
 * @property {number} [quantity]
 * @property {CartItemMeta} [meta]
 * @property {Object} [extra_meta]
 * @property {number} discount
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} [affiliate_order_id]
 * @property {Object} [employee_discount]
 * @property {string} [gstin]
 * @property {string} [order_id]
 * @property {ShippingAddress} billing_address
 * @property {string} [coupon]
 * @property {string} [comment]
 * @property {string} [currency_code]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {OpenApiFiles[]} [files]
 * @property {number} delivery_charges
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {ShippingAddress} [shipping_address]
 * @property {number} [loyalty_discount]
 * @property {number} coupon_value
 * @property {string} [payment_mode]
 * @property {number} cart_value
 * @property {string} coupon_code
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [order_ref_id]
 * @property {string} order_id
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef AbandonedCart
 * @property {Object} [pick_up_customer_details]
 * @property {boolean} [buy_now]
 * @property {boolean} [merge_qty]
 * @property {string} [checkout_mode]
 * @property {number} [discount]
 * @property {string} last_modified
 * @property {Object} [cod_charges]
 * @property {Object} [payments]
 * @property {string} [payment_mode]
 * @property {Object} [meta]
 * @property {boolean} is_default
 * @property {Object[]} [payment_methods]
 * @property {boolean} [is_archive]
 * @property {string} [gstin]
 * @property {boolean} [is_active]
 * @property {string} [order_id]
 * @property {Object} [coupon]
 * @property {string} expire_at
 * @property {string} [comment]
 * @property {number[]} [fc_index_map]
 * @property {string} user_id
 * @property {string} _id
 * @property {number} uid
 * @property {Object} [fynd_credits]
 * @property {number} [bulk_coupon_discount]
 * @property {Object[]} articles
 * @property {Object[]} [shipments]
 * @property {Object} cashback
 * @property {string} [app_id]
 * @property {Object} [delivery_charges]
 * @property {string} created_on
 * @property {Object} [promotion]
 * @property {number} [cart_value]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {boolean} [success]
 * @property {Object} [result]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {AbandonedCart[]} [items]
 */

/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef CartDetailResponse
 * @property {boolean} [is_valid]
 * @property {string} [delivery_charge_info]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [gstin]
 * @property {string} [last_modified]
 * @property {boolean} [buy_now]
 * @property {CartCurrency} [currency]
 * @property {boolean} [restrict_checkout]
 * @property {string} [coupon_text]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [message]
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {string} [id]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef AddProductCart
 * @property {number} [item_id]
 * @property {number} [store_id]
 * @property {string} [item_size]
 * @property {number} [seller_id]
 * @property {string} [display]
 * @property {string} [article_id]
 * @property {boolean} [pos]
 * @property {number} [quantity]
 * @property {string[]} [product_group_tags]
 * @property {Object} [extra_meta]
 * @property {Object} [article_assignment]
 * @property {Object} [parent_item_identifiers]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [partial]
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef UpdateProductCart
 * @property {number} [item_id]
 * @property {string} [item_size]
 * @property {string} [article_id]
 * @property {number} [quantity]
 * @property {number} [item_index]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {CartProductIdentifer} identifiers
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success]
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
