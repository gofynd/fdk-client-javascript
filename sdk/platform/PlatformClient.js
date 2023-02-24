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

const DocumentEngine = require("./client/DocumentEnginePlatformClient");
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
    this.documentEngine = new DocumentEngine(config);
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
 * @property {string} [value]
 */

/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {string} [value]
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
 */

/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
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
 * @property {boolean} success
 * @property {string[]} excluded_fields
 * @property {boolean} created
 * @property {string[]} display_fields
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
 * @property {string} merchant_salt
 * @property {string} key
 * @property {string} config_type
 * @property {string} secret
 * @property {boolean} [is_active]
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {boolean} [is_active]
 * @property {string} app_id
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {boolean} success
 * @property {string[]} aggregator
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
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} small
 * @property {string} large
 */

/**
 * @typedef IntentApp
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name]
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [fynd_vpa]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [display_name]
 * @property {string} [nickname]
 * @property {number} [display_priority]
 * @property {string} [card_name]
 * @property {string} [card_number]
 * @property {string} [name]
 * @property {number} [cod_limit]
 * @property {string} [card_reference]
 * @property {number} [cod_limit_per_order]
 * @property {number} [retry_count]
 * @property {string} [code]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {number} [exp_month]
 * @property {string} [card_type]
 * @property {string} [card_id]
 * @property {string} [card_brand_image]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_isin]
 * @property {string} [card_issuer]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {boolean} [expired]
 * @property {string} aggregator_name
 * @property {string} [card_fingerprint]
 * @property {number} [exp_year]
 * @property {number} [remaining_limit]
 * @property {string} [merchant_code]
 * @property {number} [timeout]
 * @property {string} [card_brand]
 * @property {IntentApp[]} [intent_app]
 * @property {boolean} [intent_flow]
 * @property {string} [card_token]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [anonymous_enable]
 * @property {string} display_name
 * @property {boolean} [is_pay_by_card_pl]
 * @property {number} display_priority
 * @property {string} name
 * @property {PaymentModeList[]} [list]
 * @property {string} [aggregator_name]
 * @property {boolean} [save_card]
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
 * @property {Object[]} payouts_aggregators
 * @property {Object} customers
 * @property {Object} unique_transfer_no
 * @property {string} transfer_type
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {Object} more_attributes
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} account_type
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [account_no]
 * @property {string} [bank_name]
 * @property {string} [city]
 * @property {string} [account_holder]
 * @property {string} ifsc_code
 * @property {string} [branch_name]
 * @property {number} [pincode]
 */

/**
 * @typedef PayoutRequest
 * @property {Object} users
 * @property {string} aggregator
 * @property {string} transfer_type
 * @property {string} unique_external_id
 * @property {PayoutBankDetails} bank_details
 * @property {boolean} is_active
 */

/**
 * @typedef PayoutResponse
 * @property {Object} users
 * @property {boolean} success
 * @property {string} aggregator
 * @property {boolean} created
 * @property {string} payment_status
 * @property {string} unique_transfer_no
 * @property {string} transfer_type
 * @property {Object} payouts
 * @property {Object} bank_details
 * @property {boolean} is_active
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} success
 * @property {boolean} is_active
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
 * @property {boolean} success
 * @property {Object[]} data
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionConfigResponse
 * @property {Object} config
 * @property {boolean} success
 * @property {string} aggregator
 */

/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */

/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {boolean} success
 * @property {Object} data
 */

/**
 * @typedef RefundAccountResponse
 * @property {boolean} success
 * @property {boolean} [is_verified_flag]
 * @property {Object} [data]
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
 * @property {string} account_no
 * @property {string} bank_name
 * @property {string} account_holder
 * @property {string} ifsc_code
 * @property {string} branch_name
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name
 * @property {boolean} [success]
 * @property {string} bank_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} display_name
 * @property {string} email
 * @property {string} beneficiary_id
 * @property {string} title
 * @property {string} [comment]
 * @property {string} modified_on
 * @property {string} bank_name
 * @property {string} created_on
 * @property {string} account_holder
 * @property {string} ifsc_code
 * @property {string} [branch_name]
 * @property {string} account_no
 * @property {number} id
 * @property {string} transfer_mode
 * @property {string} subtitle
 * @property {string} [delights_user_name]
 * @property {string} address
 * @property {string} [mobile]
 * @property {boolean} is_active
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {number} amount
 * @property {string} [name]
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} order_id
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef CODdata
 * @property {number} limit
 * @property {number} usages
 * @property {number} remaining_limit
 * @property {string} user_id
 * @property {boolean} is_active
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {CODdata} user_cod_data
 * @property {boolean} success
 */

/**
 * @typedef SetCODForUserRequest
 * @property {string} merchant_user_id
 * @property {string} mobileno
 * @property {boolean} is_active
 */

/**
 * @typedef SetCODOptionResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [name]
 * @property {string} text
 * @property {string} [value]
 */

/**
 * @typedef FiltersInfo
 * @property {string} text
 * @property {string} value
 * @property {FilterInfoOption[]} [options]
 * @property {string} type
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */

/**
 * @typedef ShipmentStatus
 * @property {string} title
 * @property {string} hex_code
 * @property {string} actual_status
 * @property {string} status
 * @property {string} ops_status
 */

/**
 * @typedef Prices
 * @property {number} [discount]
 * @property {number} [cashback]
 * @property {number} [tax_collected_at_source]
 * @property {number} [fynd_credits]
 * @property {number} [price_marked]
 * @property {number} [delivery_charge]
 * @property {number} [amount_paid]
 * @property {number} [refund_credit]
 * @property {number} [coupon_value]
 * @property {number} [promotion_effective_discount]
 * @property {number} [value_of_good]
 * @property {number} [price_effective]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [cashback_applied]
 * @property {number} [refund_amount]
 * @property {number} [cod_charges]
 */

/**
 * @typedef UserDataInfo
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [mobile]
 * @property {string} [avis_user_id]
 * @property {string} [gender]
 * @property {string} [first_name]
 * @property {number} [uid]
 * @property {string} [last_name]
 * @property {boolean} [is_anonymous_user]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 * @property {number} brand_calculated_amount
 * @property {number} gst_fee
 * @property {string} gstin_code
 */

/**
 * @typedef PlatformItem
 * @property {string} [name]
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {string[]} [image]
 * @property {string[]} [l1_category]
 * @property {string} [size]
 * @property {number} [l3_category]
 * @property {string} [color]
 * @property {number} [id]
 * @property {number} [department_id]
 * @property {string} [l3_category_name]
 * @property {string} [code]
 * @property {string[]} [images]
 */

/**
 * @typedef BagUnit
 * @property {string} shipment_id
 * @property {GSTDetailsData} [gst]
 * @property {number} total_shipment_bags
 * @property {Prices} [prices]
 * @property {Object} status
 * @property {number} item_quantity
 * @property {string} ordering_channel
 * @property {PlatformItem} [item]
 * @property {boolean} [can_cancel]
 * @property {number} bag_id
 * @property {boolean} [can_return]
 */

/**
 * @typedef ShipmentItem
 * @property {string} created_at
 * @property {string} fulfilling_centre
 * @property {number} shipment_created_at
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {Object} [sla]
 * @property {Object} [channel]
 * @property {number} total_shipments_in_order
 * @property {number} total_bags_count
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [payment_methods]
 * @property {Prices} [prices]
 * @property {string} id
 * @property {UserDataInfo} [user]
 * @property {Object} [application]
 * @property {BagUnit[]} [bags]
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {Object} [page]
 * @property {Object} [applied_filters]
 * @property {FiltersInfo[]} [filters]
 * @property {ShipmentItem[]} [items]
 */

/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} mode
 * @property {string} [source]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [cod_charges]
 * @property {string} [order_date]
 * @property {Object} [tax_details]
 * @property {string} [order_value]
 * @property {string} [affiliate_id]
 * @property {string} [ordering_channel]
 * @property {string} fynd_order_id
 * @property {Object} [ordering_channel_logo]
 * @property {string} [source]
 */

/**
 * @typedef UserDetailsData
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} pincode
 * @property {string} city
 * @property {string} country
 * @property {string} state
 * @property {string} address
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [created_at]
 * @property {number[]} [bag_list]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {number} [id]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [phone]
 * @property {string} [address1]
 * @property {string} [contact_person]
 * @property {string} [address_type]
 * @property {string} [version]
 * @property {number} [latitude]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [longitude]
 * @property {string} [area]
 * @property {string} [landmark]
 * @property {string} [updated_at]
 * @property {string} [address_category]
 * @property {string} [state]
 * @property {string} [pincode]
 */

/**
 * @typedef OrderBrandName
 * @property {string} brand_name
 * @property {string} logo
 * @property {number} id
 * @property {number} created_on
 * @property {string} company
 * @property {number} [modified_on]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_active
 * @property {boolean} allow_force_return
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
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef AppliedPromos
 * @property {BuyRules[]} [buy_rules]
 * @property {number} [article_quantity]
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 * @property {number} [amount]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promo_id]
 * @property {DiscountRules[]} [discount_rules]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 * @property {string} [uid]
 */

/**
 * @typedef BagGST
 * @property {number} [gst_fee]
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {number} [brand_calculated_amount]
 * @property {string} [gst_tag]
 * @property {boolean} [is_default_hsn_code]
 * @property {string} [gstin_code]
 * @property {number} [gst_tax_percentage]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} discount
 * @property {boolean} added_to_fynd_cash
 * @property {number} coupon_effective_discount
 * @property {string} hsn_code
 * @property {string} gst_tag
 * @property {number} cashback
 * @property {number} promotion_effective_discount
 * @property {number} delivery_charge
 * @property {number} coupon_value
 * @property {string} size
 * @property {number} brand_calculated_amount
 * @property {number} gst_tax_percentage
 * @property {number} cod_charges
 * @property {number} fynd_credits
 * @property {number} price_marked
 * @property {number} refund_credit
 * @property {number} transfer_price
 * @property {Object} pm_price_split
 * @property {Identifier} identifiers
 * @property {number} price_effective
 * @property {number} [amount_paid_roundoff]
 * @property {number} cashback_applied
 * @property {number} [tax_collected_at_source]
 * @property {number} total_units
 * @property {number} amount_paid
 * @property {number} value_of_good
 * @property {string} item_name
 * @property {string} gst_fee
 */

/**
 * @typedef OrderBags
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {OrderBrandName} [brand]
 * @property {Object} [parent_promo_bags]
 * @property {string} [seller_identifier]
 * @property {PlatformItem} [item]
 * @property {number} [quantity]
 * @property {boolean} [can_return]
 * @property {BagConfigs} [bag_configs]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {string} [display_name]
 * @property {OrderBagArticle} [article]
 * @property {string} [entity_type]
 * @property {string} [identifier]
 * @property {BagGST} [gst_details]
 * @property {boolean} [can_cancel]
 * @property {number} bag_id
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {string} [current_status]
 * @property {Prices} [prices]
 * @property {number} [line_number]
 */

/**
 * @typedef TrackingList
 * @property {string} text
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 * @property {string} status
 * @property {string} [time]
 */

/**
 * @typedef FulfillingStore
 * @property {string} phone
 * @property {string} contact_person
 * @property {string} pincode
 * @property {string} city
 * @property {string} country
 * @property {Object} meta
 * @property {string} store_name
 * @property {string} id
 * @property {string} state
 * @property {string} code
 * @property {string} address
 * @property {string} fulfillment_channel
 */

/**
 * @typedef DPDetailsData
 * @property {string} [name]
 * @property {string} [eway_bill_id]
 * @property {string} [awb_no]
 * @property {string} [country]
 * @property {string} [track_url]
 * @property {string} [id]
 * @property {string} [gst_tag]
 * @property {string} [pincode]
 */

/**
 * @typedef BagStateMapper
 * @property {string} name
 * @property {string} journey_type
 * @property {number} bs_id
 * @property {string} state_type
 * @property {string} [app_state_name]
 * @property {boolean} [is_active]
 * @property {string} display_name
 * @property {boolean} [app_facing]
 * @property {string} [app_display_name]
 * @property {boolean} [notify_customer]
 */

/**
 * @typedef BagStatusHistory
 * @property {string} created_at
 * @property {number} [delivery_partner_id]
 * @property {string} shipment_id
 * @property {boolean} [kafka_sync]
 * @property {string} [state_type]
 * @property {Object[]} [reasons]
 * @property {boolean} [forward]
 * @property {number} state_id
 * @property {boolean} [app_display_name]
 * @property {string} status
 * @property {boolean} [display_name]
 * @property {string} [updated_at]
 * @property {number} bsh_id
 * @property {number} bag_id
 * @property {string} [delivery_awb_number]
 * @property {number} store_id
 * @property {BagStateMapper} bag_state_mapper
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string} [journey_type]
 * @property {boolean} is_invoiced
 * @property {string} [user_agent]
 * @property {string} order_type
 * @property {boolean} [beneficiary_details]
 * @property {string} [operational_status]
 * @property {Object[]} [forward_tracking_list]
 * @property {ShipmentPayments} [payments]
 * @property {boolean} is_not_fynd_source
 * @property {Object[]} [custom_meta]
 * @property {OrderDetailsData} [order]
 * @property {Object} [refund_details]
 * @property {UserDetailsData} [billing_details]
 * @property {string} can_break
 * @property {string} [payment_mode]
 * @property {ShipmentStatusData} [status]
 * @property {boolean} is_packaging_order
 * @property {string} [kirana_store_id]
 * @property {string} [is_pdsr]
 * @property {string} [pay_button]
 * @property {OrderBags[]} [bags]
 * @property {boolean} [can_return]
 * @property {string} shipment_id
 * @property {string} user_id
 * @property {Object[]} delivery_status
 * @property {TrackingList[]} [tracking_list]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} email_id
 * @property {Object[]} items
 * @property {string} [priority_text]
 * @property {Object} current_shipment_status
 * @property {string[]} [shipment_images]
 * @property {number} [total_items]
 * @property {string} [secured_delivery_flag]
 * @property {string} [replacement_details]
 * @property {Object} [coupon]
 * @property {boolean} [go_green]
 * @property {boolean} [enable_tracking]
 * @property {Object} [bank_data]
 * @property {Object[]} [forward_shipment_status]
 * @property {Object} ordering_store
 * @property {string} [vertical]
 * @property {number} status_progress
 * @property {string} [due_date]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} fyndstore_emp
 * @property {Object} [user_info]
 * @property {string} credit_note_id
 * @property {Object} company
 * @property {boolean} [can_cancel]
 * @property {string} [enable_dp_tracking]
 * @property {Object} [delivery_slot]
 * @property {boolean} platform_logo
 * @property {string} [packaging_type]
 * @property {Object} invoice
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} affiliate_shipment_id
 * @property {string} lock_status
 * @property {DPDetailsData} [dp_details]
 * @property {string} tracking_url
 * @property {string} [refund_text]
 * @property {string} [is_fynd_store]
 * @property {string} [order_created_time]
 * @property {string} [picked_date]
 * @property {string} [shipment_status]
 * @property {boolean} is_fynd_coupon
 * @property {Prices} [prices]
 * @property {number} [total_bags]
 * @property {number} [shipment_quantity]
 * @property {Object} order_status
 * @property {Object[]} [forward_order_status]
 * @property {Object} [escalation]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string[]} [child_nodes]
 * @property {string} [mid]
 */

/**
 * @typedef PlatformShipment
 * @property {string} [journey_type]
 * @property {string} [user_agent]
 * @property {string} [operational_status]
 * @property {ShipmentPayments} [payments]
 * @property {Object[]} [custom_meta]
 * @property {OrderDetailsData} [order]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [payment_mode]
 * @property {ShipmentStatusData} [status]
 * @property {OrderBags[]} [bags]
 * @property {string} shipment_id
 * @property {TrackingList[]} [tracking_list]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [priority_text]
 * @property {string[]} [shipment_images]
 * @property {number} [total_items]
 * @property {Object} [coupon]
 * @property {string} [vertical]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [enable_dp_tracking]
 * @property {Object} [delivery_slot]
 * @property {string} [platform_logo]
 * @property {string} [packaging_type]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {DPDetailsData} [dp_details]
 * @property {string} [picked_date]
 * @property {string} [shipment_status]
 * @property {Prices} [prices]
 * @property {number} [total_bags]
 * @property {number} [shipment_quantity]
 * @property {BagStatusHistory[]} [bag_status_history]
 */

/**
 * @typedef OrderDict
 * @property {string} order_date
 * @property {string} fynd_order_id
 * @property {number} shipment_count
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {PlatformShipment[]} [shipments]
 * @property {OrderDict} [order]
 * @property {Object[]} [custom_meta]
 * @property {boolean} success
 */

/**
 * @typedef SubLane
 * @property {string} [text]
 * @property {string} [value]
 * @property {Object[]} [actions]
 * @property {number} [total_items]
 * @property {number} [index]
 */

/**
 * @typedef SuperLane
 * @property {number} [total_items]
 * @property {string} text
 * @property {string} value
 * @property {SubLane[]} [options]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformOrderItems
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {PlatformShipment[]} [shipments]
 * @property {PlatformChannel} [channel]
 * @property {string} [order_created_time]
 * @property {Object} [meta]
 * @property {number} [order_value]
 * @property {string} [payment_mode]
 * @property {number} [total_order_value]
 * @property {UserDataInfo} [user_info]
 * @property {string} [order_id]
 */

/**
 * @typedef OrderListingResponse
 * @property {Page} [page]
 * @property {number} [total_count]
 * @property {PlatformOrderItems[]} [items]
 * @property {string} [message]
 * @property {string} [lane]
 * @property {boolean} [success]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
 */

/**
 * @typedef MetricsCount
 * @property {string} key
 * @property {string} text
 * @property {number} value
 * @property {Options[]} [options]
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [shipment_type]
 * @property {string} [account_name]
 * @property {string} [reason]
 * @property {Object} [meta]
 * @property {string} [updated_time]
 * @property {string} [raw_status]
 * @property {string} [status]
 * @property {string} [last_location_recieved_at]
 * @property {string} [updated_at]
 * @property {string} [awb]
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
 * @property {string} [report_name]
 * @property {string} [report_created_at]
 * @property {string} [s3_key]
 * @property {string} [status]
 * @property {string} [report_requested_at]
 * @property {string} [display_name]
 * @property {string} [report_id]
 * @property {string} [report_type]
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
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {Object[]} [data]
 * @property {string} [identifier]
 * @property {string} [trace_id]
 * @property {boolean} [success]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [company_id]
 * @property {Object} [invoice]
 * @property {boolean} do_invoice_label_generated
 * @property {string} batch_id
 * @property {Object} [data]
 * @property {string} [store_name]
 * @property {string} [store_id]
 * @property {string} [invoice_status]
 * @property {Object} [label]
 * @property {string} [store_code]
 */

/**
 * @typedef FileUploadResponse
 * @property {string} [url]
 * @property {number} [expiry]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileResponse
 * @property {number} [size]
 * @property {string} [operation]
 * @property {string} [content_type]
 * @property {string[]} [tags]
 * @property {string} [file_name]
 * @property {string} [method]
 * @property {FileUploadResponse} [upload]
 * @property {URL} [cdn]
 * @property {string} [file_path]
 * @property {string} [namespace]
 */

/**
 * @typedef BulkListingPage
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {number} [total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 */

/**
 * @typedef bulkListingData
 * @property {number} [successful]
 * @property {string[]} [processing_shipments]
 * @property {Object[]} [successful_shipments]
 * @property {string} [store_name]
 * @property {string} [status]
 * @property {string} [id]
 * @property {string} [excel_url]
 * @property {string} [uploaded_on]
 * @property {string} [user_name]
 * @property {string} [user_id]
 * @property {string} [batch_id]
 * @property {number} [failed]
 * @property {number} [total]
 * @property {string} [file_name]
 * @property {number} [store_id]
 * @property {string} [store_code]
 * @property {number} [company_id]
 * @property {number} [processing]
 * @property {Object[]} [failed_shipments]
 */

/**
 * @typedef BulkListingResponse
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 * @property {bulkListingData[]} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef ManifestPage
 * @property {string} [size]
 * @property {boolean} [has_previous]
 * @property {string} [current]
 * @property {number} [total]
 * @property {string} [type]
 * @property {boolean} [has_next]
 */

/**
 * @typedef DateRange
 * @property {string} [to_date]
 * @property {string} [from_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [dp_ids]
 * @property {DateRange} [date_range]
 * @property {string} [sales_channels]
 * @property {string} [dp_name]
 * @property {string} [sales_channel_name]
 * @property {string} [store_name]
 * @property {string} [stores]
 * @property {string} [lane]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {string} [manifest_id]
 * @property {number} [company_id]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {boolean} [is_active]
 * @property {string} [status]
 * @property {ManifestFilter} [filters]
 */

/**
 * @typedef GeneratedManifestResponse
 * @property {ManifestPage} [page]
 * @property {GeneratedManifestItem[]} [items]
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
 * @property {string} [manifest_id]
 * @property {number} [company_id]
 * @property {string} [created_at]
 * @property {number} [user_id]
 * @property {string} [created_by]
 * @property {boolean} [is_active]
 * @property {ManifestDetailMeta} [meta]
 * @property {string} [status]
 * @property {number} [uid]
 * @property {number} [id]
 * @property {ManifestFilter} [filters]
 */

/**
 * @typedef ManifestDetailItem
 * @property {string} [shipment_id]
 * @property {number} [item_qty]
 * @property {string} [invoice_id]
 * @property {string} [order_id]
 * @property {string} [awb]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {ManifestPage} [page]
 * @property {number} [additional_shipment_count]
 * @property {ManifestDetail[]} [manifest_details]
 * @property {ManifestDetailItem[]} [items]
 */

/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef Reason
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
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
 * @property {string} [message]
 * @property {boolean} [status]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {string} [company_id]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [processing_shipments_count]
 * @property {string} [batch_id]
 * @property {number} [failed_shipments_count]
 * @property {number} [successful_shipments_count]
 * @property {number} [total_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [uploaded_on]
 * @property {string[]} [error]
 * @property {string} [user_id]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {boolean} [status]
 * @property {string} [uploaded_by]
 * @property {string[]} [failed_records]
 * @property {string} [message]
 * @property {string} [success]
 */

/**
 * @typedef Brand
 * @property {string} [pickup_location]
 * @property {boolean} [is_virtual_invoice]
 * @property {number} [credit_note_expiry_days]
 * @property {number} brand_id
 * @property {string} [script_last_ran]
 * @property {string} [start_date]
 * @property {string} brand_name
 * @property {boolean} [credit_note_allowed]
 * @property {string} [invoice_prefix]
 * @property {string} [logo]
 * @property {number} [created_on]
 * @property {string} company
 * @property {number} [modified_on]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_active
 */

/**
 * @typedef Attributes
 * @property {string} [name]
 * @property {string} [marketer_address]
 * @property {string} [primary_color]
 * @property {string} [primary_material]
 * @property {string} [brand_name]
 * @property {string} [essential]
 * @property {string[]} [gender]
 * @property {string} [primary_color_hex]
 * @property {string} [marketer_name]
 */

/**
 * @typedef Item
 * @property {string} brand
 * @property {string} [color]
 * @property {string} [last_updated_at]
 * @property {string} [code]
 * @property {boolean} [can_return]
 * @property {string[]} image
 * @property {number} [l2_category_id]
 * @property {string[]} [l1_category]
 * @property {string} size
 * @property {number} brand_id
 * @property {string} [gender]
 * @property {string} [l3_category_name]
 * @property {number} [l1_category_id]
 * @property {string} name
 * @property {Object} [meta]
 * @property {string} slug_key
 * @property {string} [webstore_product_url]
 * @property {Attributes} attributes
 * @property {string} [branch_url]
 * @property {boolean} [can_cancel]
 * @property {string[]} [l2_category]
 * @property {number} item_id
 * @property {number} [l3_category]
 * @property {number} [department_id]
 */

/**
 * @typedef PDFLinks
 * @property {string} [invoice]
 * @property {string} [invoice_pos]
 * @property {string} [credit_note_url]
 * @property {string} [label_a6]
 * @property {string} [po_invoice]
 * @property {string} [label_pos]
 * @property {string} [b2b]
 * @property {string} [label]
 * @property {string} label_type
 * @property {string} [invoice_a6]
 * @property {string} [invoice_a4]
 * @property {string} invoice_type
 * @property {string} [label_a4]
 */

/**
 * @typedef AffiliateMeta
 * @property {number} [employee_discount]
 * @property {number} [size_level_total_qty]
 * @property {string} [channel_order_id]
 * @property {number} [quantity]
 * @property {string} [order_item_id]
 * @property {string} [due_date]
 * @property {string} [box_type]
 * @property {number} [loyalty_discount]
 * @property {string} [channel_shipment_id]
 * @property {boolean} [is_priority]
 * @property {string} [coupon_code]
 */

/**
 * @typedef BuyerDetails
 * @property {string} name
 * @property {number} pincode
 * @property {string} [ajio_site_id]
 * @property {string} city
 * @property {string} gstin
 * @property {string} state
 * @property {string} address
 */

/**
 * @typedef EInvoice
 * @property {string} [irn]
 * @property {string} [error_message]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_qr_code]
 * @property {string} [acknowledge_date]
 * @property {string} [error_code]
 * @property {string} [signed_invoice]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [invoice]
 * @property {EInvoice} [credit_note]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */

/**
 * @typedef LockData
 * @property {boolean} [mto]
 * @property {string} [lock_message]
 * @property {boolean} [locked]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef ShipmentMeta
 * @property {string} [po_number]
 * @property {string} [order_type]
 * @property {string} [return_affiliate_order_id]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Object} [bag_weight]
 * @property {boolean} same_store_available
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {string} [awb_number]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [store_invoice_updated_date]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [dp_sort_key]
 * @property {string} [box_type]
 * @property {Object} [b2c_buyer_details]
 * @property {string} [marketplace_store_id]
 * @property {string} [packaging_name]
 * @property {number} weight
 * @property {number} [return_store_node]
 * @property {string} [dp_name]
 * @property {string} [fulfilment_priority_text]
 * @property {Object} [return_details]
 * @property {string} [forward_affiliate_order_id]
 * @property {number} [shipment_volumetric_weight]
 * @property {boolean} [assign_dp_from_sb]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {LockData} [lock_data]
 * @property {Object} [external]
 * @property {Object} [ewaybill_info]
 * @property {string} [due_date]
 * @property {string} [return_awb_number]
 * @property {Object} [dp_options]
 * @property {string} [dp_id]
 * @property {DebugInfo} [debug_info]
 * @property {Formatted} [formatted]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {number} [shipment_weight]
 */

/**
 * @typedef AffiliateDetails
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_shipment_id
 * @property {string} [company_affiliate_tag]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_store_id
 * @property {string} [ad_id]
 * @property {string} [affiliate_id]
 * @property {string} affiliate_order_id
 * @property {ShipmentMeta} shipment_meta
 */

/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef Dimensions
 * @property {boolean} [is_default]
 * @property {number} [height]
 * @property {number} [width]
 * @property {string} [unit]
 * @property {number} [length]
 */

/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef Article
 * @property {Object} [child_details]
 * @property {Object} [esp_modified]
 * @property {Object} [raw_meta]
 * @property {ReturnConfig} [return_config]
 * @property {Object} [a_set]
 * @property {string} size
 * @property {Identifier} identifiers
 * @property {string} _id
 * @property {string} seller_identifier
 * @property {Dimensions} [dimensions]
 * @property {string} uid
 * @property {boolean} [is_set]
 * @property {string} [code]
 * @property {Weight} [weight]
 */

/**
 * @typedef StoreAddress
 * @property {string} created_at
 * @property {string} address_category
 * @property {string} updated_at
 * @property {string} address1
 * @property {string} country_code
 * @property {string} [email]
 * @property {string} contact_person
 * @property {string} [address2]
 * @property {string} city
 * @property {string} country
 * @property {number} longitude
 * @property {string} [area]
 * @property {string} state
 * @property {number} pincode
 * @property {string} phone
 * @property {string} address_type
 * @property {string} [version]
 * @property {number} latitude
 * @property {string} [landmark]
 */

/**
 * @typedef Document
 * @property {boolean} verified
 * @property {string} [url]
 * @property {string} value
 * @property {string} ds_type
 * @property {string} legal_name
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
 * @property {string} [user]
 * @property {boolean} enabled
 * @property {string} [username]
 * @property {string} [password]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [user]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef StoreMeta
 * @property {StoreDocuments} [documents]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} [gst_number]
 * @property {Object} [additional_contact_details]
 * @property {string[]} [notification_emails]
 * @property {Object} [ewaybill_portal_details]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {string} stage
 * @property {string} display_name
 * @property {Object[]} [timing]
 * @property {Object} [product_return_config]
 */

/**
 * @typedef Store
 * @property {boolean} [is_archived]
 * @property {string} created_at
 * @property {string} location_type
 * @property {string} [order_integration_id]
 * @property {number} [parent_store_id]
 * @property {number} [alohomora_user_id]
 * @property {string} [updated_at]
 * @property {string} [code]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} address1
 * @property {number} [packaging_material_count]
 * @property {StoreAddress} [store_address_json]
 * @property {Object} [brand_id]
 * @property {string[]} [brand_store_tags]
 * @property {boolean} [is_active]
 * @property {string} [mall_area]
 * @property {string} fulfillment_channel
 * @property {string} name
 * @property {string} [vat_no]
 * @property {string} contact_person
 * @property {string} [store_active_from]
 * @property {string} s_id
 * @property {string} [address2]
 * @property {string} city
 * @property {string} country
 * @property {number} longitude
 * @property {StoreMeta} meta
 * @property {string} store_email
 * @property {string} state
 * @property {string} pincode
 * @property {number} company_id
 * @property {string} [mall_name]
 * @property {number} phone
 * @property {number} latitude
 * @property {string} login_username
 */

/**
 * @typedef B2BPODetails
 * @property {number} [total_gst_percentage]
 * @property {number} [po_line_amount]
 * @property {string} [docker_number]
 * @property {number} [item_base_price]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_tax_amount]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef BagGSTDetails
 * @property {number} gst_fee
 * @property {number} tax_collected_at_source
 * @property {string} hsn_code_id
 * @property {string} cgst_gst_fee
 * @property {number} igst_tax_percentage
 * @property {number} value_of_good
 * @property {string} igst_gst_fee
 * @property {string} hsn_code
 * @property {number} brand_calculated_amount
 * @property {number} cgst_tax_percentage
 * @property {string} sgst_gst_fee
 * @property {string} gst_tag
 * @property {number} sgst_tax_percentage
 * @property {boolean} [is_default_hsn_code]
 * @property {string} [gstin_code]
 * @property {number} gst_tax_percentage
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {number} [employee_discount]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_order_id
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {Brand} brand
 * @property {string} journey_type
 * @property {Object} [parent_promo_bags]
 * @property {number[]} [original_bag_list]
 * @property {string[]} [tags]
 * @property {string} [operational_status]
 * @property {string} [seller_identifier]
 * @property {string} [order_integration_id]
 * @property {BagReturnableCancelableStatus} status
 * @property {Item} item
 * @property {number} [quantity]
 * @property {number} b_id
 * @property {string} [shipment_id]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {Object[]} [applied_promos]
 * @property {number} [bag_update_time]
 * @property {string} [display_name]
 * @property {Object} [restore_promos]
 * @property {Article} article
 * @property {string} [entity_type]
 * @property {Store} [ordering_store]
 * @property {BagMeta} [meta]
 * @property {string} [identifier]
 * @property {BagGSTDetails} gst_details
 * @property {Dates} [dates]
 * @property {BagStatusHistory[]} bag_status
 * @property {BagStatusHistory} current_operational_status
 * @property {string} [b_type]
 * @property {Object} [qc_required]
 * @property {ArticleDetails} [article_details]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {BagStatusHistory} current_status
 * @property {Object[]} [reasons]
 * @property {boolean} [restore_coupon]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Prices} prices
 * @property {number} [line_number]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {number} [no_of_bags_order]
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */

/**
 * @typedef Page1
 * @property {string} page_type
 * @property {number} size
 * @property {number} item_total
 * @property {number} current
 * @property {boolean} has_next
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
 * @property {string} [shipment_id]
 * @property {number} [status]
 * @property {string} [message]
 * @property {string} [error]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {number} status
 * @property {string} [error_trace]
 * @property {string} message
 */

/**
 * @typedef StoreReassign
 * @property {string} [affiliate_order_id]
 * @property {string} [mongo_article_id]
 * @property {number} [bag_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_id]
 * @property {number} store_id
 * @property {number[]} [reason_ids]
 * @property {string} [fynd_order_id]
 * @property {string} [set_id]
 * @property {string} [item_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} reason_text
 * @property {string} [id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action
 * @property {Entities[]} entities
 * @property {string} entity_type
 * @property {string} action_type
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef Bags
 * @property {string} [affiliate_order_id]
 * @property {boolean} [is_locked]
 * @property {number} [bag_id]
 * @property {string} [affiliate_bag_id]
 */

/**
 * @typedef CheckResponse
 * @property {boolean} [lock_status]
 * @property {string} [affiliate_shipment_id]
 * @property {OriginalFilter} [original_filter]
 * @property {Bags[]} [bags]
 * @property {string} [shipment_id]
 * @property {string} [affiliate_id]
 * @property {string} [status]
 * @property {boolean} [is_bag_locked]
 * @property {boolean} [is_shipment_locked]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {CheckResponse[]} [check_response]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [logo_url]
 * @property {number} id
 * @property {string} [title]
 * @property {number} [company_id]
 * @property {string} [platform_id]
 * @property {string} [description]
 * @property {string} [from_datetime]
 * @property {string} [to_datetime]
 * @property {string} [created_at]
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
 * @typedef Products
 * @property {number} [line_number]
 * @property {number} [quantity]
 * @property {string} [identifier]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number]
 * @property {string} [identifier]
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
 * @property {number} [line_number]
 * @property {number} [quantity]
 * @property {string} [identifier]
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
 * @typedef ShipmentsRequest
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 * @property {ReasonsData} [reasons]
 * @property {string} identifier
 */

/**
 * @typedef StatuesRequest
 * @property {string} [status]
 * @property {string} [exclude_bags_next_state]
 * @property {ShipmentsRequest[]} [shipments]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [task]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [force_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [lock_after_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {Object} [meta]
 * @property {string} [identifier]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {Object} [final_state]
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
 * @typedef OrderUser
 * @property {string} last_name
 * @property {string} email
 * @property {string} first_name
 * @property {number} mobile
 * @property {string} country
 * @property {string} [address1]
 * @property {string} pincode
 * @property {number} phone
 * @property {string} state
 * @property {string} [address2]
 * @property {string} city
 */

/**
 * @typedef OrderPriority
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {string} sku
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} quantity
 * @property {string} affiliate_store_id
 * @property {string} fynd_store_id
 * @property {number} item_id
 * @property {string} seller_identifier
 * @property {string} modified_on
 * @property {number} transfer_price
 * @property {string} _id
 * @property {number} store_id
 * @property {string} item_size
 * @property {number} company_id
 * @property {number} delivery_charge
 * @property {number} avl_qty
 * @property {Object} affiliate_meta
 * @property {number} discount
 * @property {number} price_effective
 * @property {number} amount_paid
 * @property {Object} identifier
 * @property {string} hsn_code_id
 * @property {number} unit_price
 * @property {number} price_marked
 */

/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */

/**
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {number} brand_id
 * @property {Object} weight
 * @property {number} quantity
 * @property {Object} dimension
 * @property {Object} category
 * @property {Object} attributes
 */

/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentDetails
 * @property {string} affiliate_shipment_id
 * @property {number} shipments
 * @property {string} [box_type]
 * @property {Object} [meta]
 * @property {number} [dp_id]
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentConfig
 * @property {string} journey
 * @property {string} identifier
 * @property {string} source
 * @property {string} payment_mode
 * @property {LocationDetails} [location_details]
 * @property {string} action
 * @property {ShipmentDetails[]} shipment
 * @property {string} to_pincode
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderInfo
 * @property {string} [affiliate_order_id]
 * @property {number} order_value
 * @property {string} [coupon]
 * @property {OrderUser} shipping_address
 * @property {OrderPriority} [order_priority]
 * @property {AffiliateBag[]} bags
 * @property {string} payment_mode
 * @property {UserData} user
 * @property {Object} [payment]
 * @property {number} cod_charges
 * @property {number} delivery_charges
 * @property {Object} items
 * @property {number} discount
 * @property {ShipmentData} [shipment]
 * @property {OrderUser} billing_address
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} id
 * @property {string} secret
 * @property {string} [description]
 * @property {string} owner
 * @property {string} updated_at
 * @property {string} created_at
 * @property {string} name
 * @property {string} token
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
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
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 */

/**
 * @typedef Affiliate
 * @property {string} token
 * @property {AffiliateConfig} [config]
 * @property {string} id
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */

/**
 * @typedef OrderConfig
 * @property {Affiliate} affiliate
 * @property {string} [store_lookup]
 * @property {boolean} [create_user]
 * @property {string} [article_lookup]
 * @property {string} [bag_end_state]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
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
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ActionInfo
 * @property {string} slug
 * @property {string} display_text
 * @property {string} description
 * @property {number} id
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} createdat
 * @property {string} [l1_detail]
 * @property {number} [bag_id]
 * @property {string} [ticket_id]
 * @property {string} [l2_detail]
 * @property {string} [l3_detail]
 * @property {string} user
 * @property {string} type
 * @property {string} [ticket_url]
 * @property {string} message
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
 * @property {number} amount_paid
 * @property {string} order_id
 * @property {string} payment_mode
 * @property {number} shipment_id
 * @property {string} customer_name
 * @property {string} message
 * @property {number} phone_number
 * @property {string} country_code
 * @property {string} brand_name
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 */

/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 */

/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [remarks]
 * @property {Meta} meta
 * @property {number} id
 * @property {string} [shipment_id]
 * @property {number[]} [bag_list]
 * @property {string} [status]
 */

/**
 * @typedef OrderStatusData
 * @property {OrderDetails} order_details
 * @property {string[]} [errors]
 * @property {ShipmentDetail[]} [shipment_details]
 */

/**
 * @typedef OrderStatusResult
 * @property {string} success
 * @property {OrderStatusData[]} [result]
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {string[]} [shipment_ids]
 * @property {string} qc_required
 * @property {number} dp_id
 * @property {string} order_type
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef Tax
 * @property {Object} amount
 * @property {Object[]} [breakup]
 * @property {number} rate
 * @property {string} name
 */

/**
 * @typedef Charge
 * @property {Tax} [tax]
 * @property {string} type
 * @property {string} [code]
 * @property {Object} amount
 * @property {string} name
 */

/**
 * @typedef LineItem
 * @property {Charge[]} charges
 * @property {Object} [meta]
 * @property {string} [custom_messasge]
 * @property {number} [quantity]
 * @property {string} [external_line_id]
 * @property {string} seller_identifier
 */

/**
 * @typedef ProcessingDates
 * @property {string} [dispatch_by_date]
 * @property {string} [confirm_by_date]
 * @property {string} [dispatch_after_date]
 * @property {Object} [dp_pickup_slot]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [pack_by_date]
 */

/**
 * @typedef Shipment
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {number} [external_shipment_id]
 * @property {LineItem[]} line_items
 * @property {ProcessingDates} [processing_dates]
 * @property {number} location_id
 */

/**
 * @typedef BillingInfo
 * @property {string} [last_name]
 * @property {string} address1
 * @property {string} [alternate_email]
 * @property {string} state
 * @property {string} [alternate_mobile_number]
 * @property {string} country
 * @property {string} [external_customer_code]
 * @property {string} [title]
 * @property {string} [customer_code]
 * @property {string} [house_no]
 * @property {string} [state_code]
 * @property {string} [middle_name]
 * @property {string} [address2]
 * @property {string} primary_email
 * @property {string} [country_code]
 * @property {string} city
 * @property {string} [floor_no]
 * @property {string} first_name
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} [gender]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [last_name]
 * @property {Object} [geo_location]
 * @property {string} address1
 * @property {string} [alternate_email]
 * @property {string} state
 * @property {string} [alternate_mobile_number]
 * @property {string} country
 * @property {string} [address_type]
 * @property {string} [external_customer_code]
 * @property {string} [title]
 * @property {string} [shipping_type]
 * @property {string} [customer_code]
 * @property {string} [house_no]
 * @property {string} [state_code]
 * @property {string} [middle_name]
 * @property {Object[]} [slot]
 * @property {string} [address2]
 * @property {string} primary_email
 * @property {string} [country_code]
 * @property {string} city
 * @property {string} [floor_no]
 * @property {string} first_name
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} [landmark]
 * @property {string} [gender]
 */

/**
 * @typedef PaymentMethod
 * @property {string} collect_by
 * @property {Object} [meta]
 * @property {Object} [transaction_data]
 * @property {string} refund_by
 * @property {number} amount
 * @property {string} mode
 * @property {string} name
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef CreateOrderAPI
 * @property {Object} [currency_info]
 * @property {Charge[]} charges
 * @property {Shipment[]} shipments
 * @property {Object} [meta]
 * @property {BillingInfo} billing_info
 * @property {TaxInfo} [tax_info]
 * @property {string} [external_order_id]
 * @property {ShippingInfo} shipping_info
 * @property {string} [external_creation_date]
 * @property {PaymentInfo} payment_info
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {Object} [info]
 * @property {string} [meta]
 * @property {string} [request_id]
 * @property {string} [exception]
 * @property {number} status
 * @property {string} message
 * @property {string} [code]
 * @property {string} [stack_trace]
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
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef CreateChannelConfig
 * @property {string} [shipment_assignment]
 * @property {Object} [logo_url]
 * @property {string[]} [lock_states]
 * @property {boolean} [location_reassignment]
 * @property {DpConfiguration} [dp_configuration]
 * @property {CreateChannelPaymentInfo} [payment_info]
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
 * @property {boolean} [is_inserted]
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_upserted]
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
 * @property {number} mobile
 * @property {string} start_date
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} end_date
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {SearchKeywordResult} result
 * @property {boolean} [is_active]
 */

/**
 * @typedef GetSearchWordsData
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 * @property {Object} [result]
 * @property {boolean} [is_active]
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
 * @typedef GetSearchWordsResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData[]} [items]
 */

/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [url]
 * @property {Object} [query]
 * @property {string} [type]
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
 * @property {string} [display]
 * @property {Object} [_custom_json]
 * @property {AutocompleteAction} [action]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {AutocompleteResult[]} [results]
 * @property {boolean} [is_active]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {Object[]} [results]
 * @property {string} [uid]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} max_quantity
 * @property {number} min_quantity
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} product_uid
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {string} name
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {string} [id]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {string[]} [page_visibility]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef ProductBundleRequest
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {string} name
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {string[]} [page_visibility]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {string} name
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 */

/**
 * @typedef Price
 * @property {number} [max_effective]
 * @property {string} [currency]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 * @property {number} [max_marked]
 */

/**
 * @typedef LimitedProductData
 * @property {number} [quantity]
 * @property {string[]} [images]
 * @property {Object} [attributes]
 * @property {Object} [price]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [identifier]
 * @property {string} [slug]
 * @property {string[]} [sizes]
 * @property {string} [item_code]
 * @property {string} [country_of_origin]
 * @property {string} [short_description]
 */

/**
 * @typedef Size
 * @property {string} [value]
 * @property {number} [quantity]
 * @property {string} [display]
 * @property {boolean} [is_available]
 */

/**
 * @typedef GetProducts
 * @property {number} [max_quantity]
 * @property {Price} [price]
 * @property {number} [min_quantity]
 * @property {boolean} [allow_remove]
 * @property {LimitedProductData} [product_details]
 * @property {Size[]} [sizes]
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} [product_uid]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {GetProducts[]} [products]
 * @property {string} [name]
 * @property {boolean} [same_store_assignment]
 * @property {string} [choice]
 * @property {Object} [meta]
 * @property {number} [company_id]
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {string[]} [page_visibility]
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
 * @property {string} [modified_on]
 * @property {string} [tag]
 * @property {string} [image]
 * @property {string} name
 * @property {string} [description]
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {string} [subtitle]
 * @property {string} [id]
 * @property {Guide} [guide]
 * @property {string} title
 * @property {boolean} [active]
 * @property {string} [created_on]
 * @property {number} [brand_id]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [modified_on]
 * @property {string} [tag]
 * @property {string} [name]
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {string} [subtitle]
 * @property {string} [id]
 * @property {Object} [guide]
 * @property {string} [title]
 * @property {boolean} [active]
 * @property {string} [created_on]
 * @property {number} [brand_id]
 */

/**
 * @typedef MOQData
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 */

/**
 * @typedef SEOData
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {Object} [alt_text]
 * @property {MOQData} [moq]
 * @property {SEOData} [seo]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 */

/**
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {Object} [alt_text]
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 * @property {ApplicationItemMOQ} [moq]
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 */

/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} data
 * @property {Object[]} [condition]
 * @property {Object[]} [values]
 */

/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {boolean} has_next
 * @property {number} next
 * @property {number} current
 */

/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} [key]
 * @property {string} name
 * @property {string} display_type
 * @property {number} priority
 * @property {string} [unit]
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string[]} [template_slugs]
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} app_id
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {number} priority
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} app_id
 * @property {string} key
 * @property {string} [name]
 * @property {string} default_key
 * @property {boolean} is_default
 * @property {number} priority
 * @property {string} [logo]
 * @property {boolean} is_active
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
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string[]} [filter_types]
 * @property {string} [display]
 * @property {Object[]} [units]
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
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [similar]
 * @property {Object} [variant]
 * @property {Object} [compare]
 * @property {Object} [detail]
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ProductSize
 * @property {number} min
 * @property {number} max
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} key
 * @property {ProductSize} [size]
 * @property {number} priority
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} name
 * @property {string} key
 * @property {ProductSize} size
 * @property {string} display_type
 * @property {number} priority
 * @property {string} [logo]
 * @property {boolean} is_active
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
 * @typedef ConfigurationBucketPoints
 * @property {string} [display]
 * @property {number} [start]
 * @property {number} [end]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [value]
 * @property {Object} [map]
 * @property {string} [condition]
 * @property {string} [sort]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object[]} [map_values]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [name]
 * @property {string} key
 * @property {string} type
 * @property {string} [display_name]
 * @property {number} priority
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {ConfigurationListingFilterValue} [value_config]
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {string} key
 * @property {number} priority
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigurationListingSort
 * @property {string} default_key
 * @property {ConfigurationListingSortConfig[]} [config]
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {string} [modified_on]
 * @property {string} config_type
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {ConfigurationListing} [listing]
 * @property {string} [created_on]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef AppConfiguration
 * @property {string} [modified_on]
 * @property {string} config_type
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {Object} [modified_by]
 * @property {ConfigurationListing} [listing]
 * @property {string} [created_on]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} config_type
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductFiltersValue
 * @property {string} [currency_symbol]
 * @property {Object} value
 * @property {number} [count]
 * @property {string} [currency_code]
 * @property {number} [selected_min]
 * @property {number} [max]
 * @property {boolean} is_selected
 * @property {string} [query_format]
 * @property {number} [selected_max]
 * @property {number} [min]
 * @property {string} display
 * @property {string} [display_format]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} name
 * @property {string} display
 * @property {string[]} [operators]
 * @property {string} [kind]
 * @property {string} [logo]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef ProductSortOn
 * @property {string} [value]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} operators
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
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
 * @typedef CollectionQuery
 * @property {Object[]} value
 * @property {string} attribute
 * @property {string} op
 */

/**
 * @typedef Media1
 * @property {string} url
 * @property {string} [type]
 * @property {Object} [meta]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 * @property {ImageUrls} [banners]
 * @property {boolean} [allow_facets]
 * @property {Object} [cron]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tag]
 * @property {string} [name]
 * @property {Object} [meta]
 * @property {string} [uid]
 * @property {string} [slug]
 * @property {Media1} [logo]
 * @property {Action} [action]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {string} [type]
 * @property {number} [priority]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {Object} [_schedule]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
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
 * @typedef UserInfo
 * @property {string} [username]
 * @property {string} [email]
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
 * @property {string} [start]
 * @property {NextSchedule[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {string} [end]
 */

/**
 * @typedef CreateCollection
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 * @property {CollectionBanner} banners
 * @property {boolean} [allow_facets]
 * @property {CollectionQuery[]} [query]
 * @property {string} name
 * @property {Object} [meta]
 * @property {string} [sort_on]
 * @property {Object} [_locale_language]
 * @property {UserInfo} [created_by]
 * @property {UserInfo} [modified_by]
 * @property {string} slug
 * @property {boolean} [published]
 * @property {SeoDetail} [seo]
 * @property {string[]} [tags]
 * @property {CollectionImage} logo
 * @property {CollectionBadge} [badge]
 * @property {string} app_id
 * @property {Object} [_custom_json]
 * @property {string} type
 * @property {number} [priority]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_visible]
 * @property {boolean} [is_active]
 * @property {CollectionSchedule} [_schedule]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 * @property {ImageUrls} [banners]
 * @property {boolean} [allow_facets]
 * @property {Object} [cron]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tag]
 * @property {string} [name]
 * @property {Object} [meta]
 * @property {string} [sort_on]
 * @property {string} [slug]
 * @property {BannerImage} [logo]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {string} [type]
 * @property {number} [priority]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {Object} [_schedule]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {CollectionQuery[]} [query]
 * @property {Object} [badge]
 * @property {string[]} [visible_facets_keys]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [type]
 * @property {number} [priority]
 * @property {ImageUrls} [banners]
 * @property {Object} [meta]
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {string} [slug]
 * @property {boolean} [allow_facets]
 * @property {Media1} [logo]
 * @property {boolean} [is_active]
 * @property {Object} [_schedule]
 */

/**
 * @typedef UpdateCollection
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 * @property {CollectionBanner} [banners]
 * @property {boolean} [allow_facets]
 * @property {CollectionQuery[]} [query]
 * @property {string} [name]
 * @property {Object} [meta]
 * @property {string} [sort_on]
 * @property {Object} [_locale_language]
 * @property {UserInfo} [modified_by]
 * @property {string} [slug]
 * @property {boolean} [published]
 * @property {SeoDetail} [seo]
 * @property {string[]} [tags]
 * @property {CollectionImage} [logo]
 * @property {CollectionBadge} [badge]
 * @property {Object} [_custom_json]
 * @property {string} [type]
 * @property {number} [priority]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_visible]
 * @property {boolean} [is_active]
 * @property {CollectionSchedule} [_schedule]
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
 * @property {Media1} [logo]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {string} [name]
 */

/**
 * @typedef Price1
 * @property {number} [min]
 * @property {string} [currency_code]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */

/**
 * @typedef ProductListingDetail
 * @property {Object} [promo_meta]
 * @property {string[]} [similars]
 * @property {string} [description]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 * @property {string} [product_online_date]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {number} [rating]
 * @property {string[]} [tryouts]
 * @property {number} [uid]
 * @property {ProductBrand} [brand]
 * @property {string} [color]
 * @property {Media1[]} [medias]
 * @property {string} slug
 * @property {string} [short_description]
 * @property {Object} [teaser_tag]
 * @property {boolean} [sellable]
 * @property {string} [discount]
 * @property {number} [rating_count]
 * @property {ProductListingPrice} [price]
 * @property {string} [image_nature]
 * @property {string} [type]
 * @property {boolean} [has_variant]
 * @property {string} [item_type]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {Page} [page]
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
 */

/**
 * @typedef CollectionItemRequest
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 * @property {ItemQueryForUserCollection[]} [item]
 */

/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [article_freshness]
 * @property {string} [name]
 * @property {number} [available_sizes]
 * @property {number} [available_articles]
 * @property {number} [total_articles]
 * @property {number} [total_sizes]
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
 * @property {string} opt_level
 * @property {boolean} [enabled]
 * @property {string} [platform]
 * @property {number} [company_id]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef CompanyOptIn
 * @property {number} modified_on
 * @property {string} opt_level
 * @property {boolean} enabled
 * @property {string} platform
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {number} company_id
 * @property {number} created_on
 * @property {number[]} brand_ids
 * @property {number[]} store_ids
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
 * @property {number} [company_id]
 * @property {string} [brand_name]
 * @property {number} [total_article]
 * @property {number} [brand_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {Page} [page]
 * @property {CompanyBrandDetail[]} [items]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {string} [company]
 * @property {number} [brand]
 * @property {number} [store]
 */

/**
 * @typedef StoreDetail
 * @property {string} [modified_on]
 * @property {string} [store_code]
 * @property {string} [name]
 * @property {Object[]} [additional_contacts]
 * @property {number} [uid]
 * @property {Object} [manager]
 * @property {string} [display_name]
 * @property {Object[]} [documents]
 * @property {number} [company_id]
 * @property {string} [store_type]
 * @property {Object} [address]
 * @property {string} [created_on]
 * @property {Object} [timing]
 */

/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AttributeMaster
 * @property {string} type
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [mandatory]
 * @property {boolean} [multi]
 * @property {string[]} [allowed_values]
 * @property {string} [format]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
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
 * @property {boolean} [enriched]
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 */

/**
 * @typedef GenderDetail
 * @property {AttributeMaster} [schema]
 * @property {string} [name]
 * @property {string} [description]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterDetails} [details]
 * @property {AttributeMasterFilter} [filters]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [slug]
 * @property {string} [id]
 * @property {string} [logo]
 * @property {string[]} [departments]
 * @property {boolean} [is_nested]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef PTErrorResponse
 * @property {number} [status]
 * @property {Object} [errors]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {string} [code]
 */

/**
 * @typedef UserSerializer
 * @property {string} [contact]
 * @property {string} [_id]
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [user_id]
 */

/**
 * @typedef GetDepartment
 * @property {number} [page_size]
 * @property {string} [modified_on]
 * @property {number} [priority_order]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [modified_by]
 * @property {string} [slug]
 * @property {number} [page_no]
 * @property {string} [item_type]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {string} [search]
 * @property {string[]} [synonyms]
 */

/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {number} [status]
 * @property {Object} [errors]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {string} [code]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [_cls]
 * @property {number} priority_order
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Object} [platforms]
 * @property {string[]} [tags]
 * @property {string} logo
 * @property {boolean} [is_active]
 * @property {string[]} [synonyms]
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
 * @property {string} username
 * @property {boolean} [super_user]
 * @property {string} [contact]
 * @property {string} user_id
 */

/**
 * @typedef DepartmentModel
 * @property {UserDetail} [verified_by]
 * @property {Object} [_id]
 * @property {Object} [_cls]
 * @property {string} modified_on
 * @property {number} priority_order
 * @property {Object} name
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {UserDetail} [created_by]
 * @property {UserDetail} [modified_by]
 * @property {Object} [slug]
 * @property {string} logo
 * @property {string} [verified_on]
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {Object[]} [synonyms]
 */

/**
 * @typedef ProductTemplate
 * @property {string[]} [attributes]
 * @property {string} [tag]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [description]
 * @property {boolean} [is_archived]
 * @property {Object} [created_by]
 * @property {string[]} [categories]
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {boolean} is_expirable
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {boolean} is_physical
 * @property {string[]} [departments]
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef Properties
 * @property {Object} [command]
 * @property {Object} [return_config]
 * @property {Object} [description]
 * @property {Object} [highlights]
 * @property {Object} [size_guide]
 * @property {Object} [sizes]
 * @property {Object} [item_code]
 * @property {Object} [no_of_boxes]
 * @property {Object} [name]
 * @property {Object} [custom_order]
 * @property {Object} [category_slug]
 * @property {Object} [product_publish]
 * @property {Object} [currency]
 * @property {Object} [variants]
 * @property {Object} [trader_type]
 * @property {Object} [hsn_code]
 * @property {Object} [multi_size]
 * @property {Object} [slug]
 * @property {Object} [media]
 * @property {Object} [tags]
 * @property {Object} [is_dependent]
 * @property {Object} [short_description]
 * @property {Object} [teaser_tag]
 * @property {Object} [product_group_tag]
 * @property {Object} [trader]
 * @property {Object} [brand_uid]
 * @property {Object} [country_of_origin]
 * @property {Object} [is_active]
 * @property {Object} [item_type]
 */

/**
 * @typedef GlobalValidation
 * @property {string[]} [required]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object} [definitions]
 * @property {string} [title]
 * @property {Properties} [properties]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string[]} [attributes]
 * @property {string} [tag]
 * @property {string} [name]
 * @property {string} [description]
 * @property {boolean} [is_archived]
 * @property {string[]} [categories]
 * @property {string} slug
 * @property {boolean} is_expirable
 * @property {string} [id]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {boolean} is_physical
 * @property {string[]} [departments]
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
 * @property {string[]} [templates]
 * @property {string} [type]
 * @property {string[]} [brand]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {string} [status]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [url]
 * @property {VerifiedBy} [created_by]
 * @property {string} [task_id]
 * @property {Object} [template_tags]
 * @property {string} [trigger_on]
 * @property {string} [completed_on]
 * @property {string} [id]
 * @property {number} [seller_id]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
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
 * @typedef Hierarchy
 * @property {number} l2
 * @property {number} department
 * @property {number} l1
 */

/**
 * @typedef Media2
 * @property {string} portrait
 * @property {string} logo
 * @property {string} landscape
 */

/**
 * @typedef Category
 * @property {string} [modified_on]
 * @property {string} name
 * @property {number} level
 * @property {number} [uid]
 * @property {Object} [created_by]
 * @property {number} [priority]
 * @property {Object} [modified_by]
 * @property {CategoryMapping} [marketplaces]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} [slug]
 * @property {string[]} [tryouts]
 * @property {Media2} [media]
 * @property {string} [id]
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {number[]} departments
 * @property {string[]} [synonyms]
 */

/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */

/**
 * @typedef CategoryRequestBody
 * @property {string} name
 * @property {number} level
 * @property {number} [priority]
 * @property {CategoryMapping} [marketplaces]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} [slug]
 * @property {string[]} [tryouts]
 * @property {Media2} [media]
 * @property {boolean} is_active
 * @property {number[]} departments
 * @property {string[]} [synonyms]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
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
 * @typedef ReturnConfigResponse
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef Image
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 */

/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef Logo
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 */

/**
 * @typedef NetQuantityResponse
 * @property {number} [value]
 * @property {string} [unit]
 */

/**
 * @typedef Product
 * @property {string} [template_tag]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [modified_on]
 * @property {string} [description]
 * @property {Object[]} [all_sizes]
 * @property {string[]} [highlights]
 * @property {string} [size_guide]
 * @property {boolean} [is_set]
 * @property {Object[]} [sizes]
 * @property {string} [item_code]
 * @property {string} [id]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {number} [no_of_boxes]
 * @property {Image[]} [images]
 * @property {Object} [attributes]
 * @property {Object} [tax_identifier]
 * @property {string} [name]
 * @property {Object} [variant_media]
 * @property {Object} [custom_order]
 * @property {number[]} [all_company_ids]
 * @property {string} [category_slug]
 * @property {string[]} [l3_mapping]
 * @property {string} [primary_color]
 * @property {boolean} [is_image_less_product]
 * @property {number[]} [departments]
 * @property {ProductPublished} [product_publish]
 * @property {number} [category_uid]
 * @property {string} [currency]
 * @property {Object} [variants]
 * @property {number} [uid]
 * @property {Brand} [brand]
 * @property {string} [color]
 * @property {Object} [created_by]
 * @property {string} [hsn_code]
 * @property {boolean} [multi_size]
 * @property {Object} [modified_by]
 * @property {Object} [category]
 * @property {Object} [moq]
 * @property {string} [slug]
 * @property {boolean} [is_expirable]
 * @property {Media1[]} [media]
 * @property {string[]} [tags]
 * @property {string[]} [all_identifiers]
 * @property {boolean} [is_dependent]
 * @property {string} [short_description]
 * @property {boolean} [is_physical]
 * @property {Object} [teaser_tag]
 * @property {string} [pending]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [verified_on]
 * @property {string[]} [product_group_tag]
 * @property {Object} [_custom_json]
 * @property {string} [image_nature]
 * @property {number} [brand_uid]
 * @property {Object[]} [trader]
 * @property {number} [company_id]
 * @property {string} [country_of_origin]
 * @property {Object} [variant_group]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {boolean} [is_active]
 * @property {string} [item_type]
 */

/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 */

/**
 * @typedef CustomOrder
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */

/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {string} [type]
 * @property {Object} name
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {string} template_tag
 * @property {ReturnConfig} return_config
 * @property {string} [description]
 * @property {string[]} [highlights]
 * @property {string} [size_guide]
 * @property {boolean} [is_set]
 * @property {Object[]} sizes
 * @property {string} item_code
 * @property {number} [no_of_boxes]
 * @property {Object} [change_request_id]
 * @property {Object} attributes
 * @property {TaxIdentifier} tax_identifier
 * @property {string} name
 * @property {Object} [variant_media]
 * @property {CustomOrder} [custom_order]
 * @property {string} category_slug
 * @property {boolean} [is_image_less_product]
 * @property {number[]} departments
 * @property {ProductPublish} [product_publish]
 * @property {string} currency
 * @property {Object} [variants]
 * @property {number} [uid]
 * @property {boolean} [multi_size]
 * @property {string} slug
 * @property {string} [requester]
 * @property {Media1[]} [media]
 * @property {string[]} [tags]
 * @property {boolean} [is_dependent]
 * @property {string} [short_description]
 * @property {string} [action]
 * @property {TeaserTag} [teaser_tag]
 * @property {string[]} [product_group_tag]
 * @property {string} [bulk_job_id]
 * @property {Object} [_custom_json]
 * @property {number} brand_uid
 * @property {Trader[]} trader
 * @property {number} company_id
 * @property {string} country_of_origin
 * @property {Object} [variant_group]
 * @property {NetQuantity} [net_quantity]
 * @property {boolean} [is_active]
 * @property {string} item_type
 */

/**
 * @typedef ProductVariants
 * @property {number} [category_uid]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 * @property {Media1[]} [media]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {AttributeMaster} schema
 * @property {string} [modified_on]
 * @property {string} [suggestion]
 * @property {string} [description]
 * @property {AttributeMasterFilter} filters
 * @property {boolean} [variant]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [raw_key]
 * @property {string[]} departments
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {string} [logo]
 * @property {Object} [synonyms]
 * @property {AttributeMasterDetails} details
 * @property {string} [unit]
 * @property {boolean} [is_nested]
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
 * @property {string} gtin_type
 * @property {string} gtin_value
 * @property {boolean} [primary]
 */

/**
 * @typedef AllSizes
 * @property {number} item_height
 * @property {number} item_width
 * @property {number} item_length
 * @property {Object} size
 * @property {string} item_dimensions_unit_of_measure
 * @property {number} item_weight
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {Object} item_weight_unit_of_measure
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
 * @typedef UserDetail1
 * @property {string} [username]
 * @property {string} [full_name]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductBulkRequest
 * @property {string} [template_tag]
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {ProductTemplate} [template]
 * @property {string[]} [cancelled_records]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {UserDetail1} [created_by]
 * @property {string} [file_path]
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {number} [company_id]
 * @property {UserDetail1} [modified_by]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */

/**
 * @typedef UserInfo1
 * @property {string} [username]
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [user_id]
 */

/**
 * @typedef BulkJob
 * @property {string} [template_tag]
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {string} [tracking_url]
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {Object[]} [cancelled_records]
 * @property {UserInfo1} [created_by]
 * @property {number} [failed]
 * @property {UserInfo1} [modified_by]
 * @property {Object[]} [failed_records]
 * @property {number} company_id
 * @property {string} [file_path]
 * @property {string} [custom_template_tag]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {string} created_on
 */

/**
 * @typedef BulkResponse
 * @property {string} [modified_on]
 * @property {UserInfo1} [created_by]
 * @property {UserInfo1} [modified_by]
 * @property {string} batch_id
 * @property {boolean} [is_active]
 * @property {string} created_on
 */

/**
 * @typedef BulkProductRequest
 * @property {number} company_id
 * @property {string} template_tag
 * @property {string} batch_id
 * @property {Object[]} data
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
 * @property {string} [username]
 * @property {number} [company_id]
 * @property {string} [user_id]
 */

/**
 * @typedef Items
 * @property {number} [retry]
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {string} [tracking_url]
 * @property {number} [succeed]
 * @property {string[]} [cancelled_records]
 * @property {number} [failed]
 * @property {UserCommon} [created_by]
 * @property {string} [file_path]
 * @property {UserCommon} [modified_by]
 * @property {string[]} [failed_records]
 * @property {number} [company_id]
 * @property {number} [cancelled]
 * @property {string} [id]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
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
 * @property {number} [company_id]
 * @property {string} [size]
 * @property {number} [item_id]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef InventoryResponse
 * @property {number} [quantity]
 * @property {number} [price]
 * @property {string} [currency]
 * @property {number} [sellable_quantity]
 * @property {string} [inventory_updated_on]
 * @property {string} [seller_identifier]
 * @property {number} [price_effective]
 * @property {string} [size]
 * @property {string} [uid]
 * @property {number} [price_transfer]
 * @property {number} [item_id]
 * @property {Object} [identifiers]
 * @property {Object} [store]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
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
 * @property {number} [quantity]
 * @property {string} [name]
 */

/**
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {Object} gtin_value
 * @property {boolean} [primary]
 */

/**
 * @typedef InvSize
 * @property {number} [item_height]
 * @property {number} [item_width]
 * @property {number} [price]
 * @property {number} quantity
 * @property {string} store_code
 * @property {number} [item_length]
 * @property {string} currency
 * @property {Object} size
 * @property {number} price_effective
 * @property {string} [expiration_date]
 * @property {number} [price_transfer]
 * @property {number} [item_weight]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {boolean} [is_set]
 * @property {InventorySet} [set]
 * @property {GTIN[]} identifiers
 * @property {string} [item_weight_unit_of_measure]
 */

/**
 * @typedef ItemQuery
 * @property {number} [uid]
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 */

/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {InvSize[]} sizes
 * @property {ItemQuery} item
 */

/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {boolean} is_default
 * @property {string} name
 */

/**
 * @typedef DimensionResponse
 * @property {number} width
 * @property {number} length
 * @property {boolean} is_default
 * @property {string} unit
 * @property {number} height
 */

/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef WeightResponse
 * @property {string} unit
 * @property {boolean} is_default
 * @property {number} shipping
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [sellable]
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef PriceMeta
 * @property {string} currency
 * @property {number} transfer
 * @property {Object} [tp_notes]
 * @property {string} [updated_at]
 * @property {number} effective
 * @property {number} marked
 */

/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} type
 * @property {string} name
 */

/**
 * @typedef InventorySellerResponse
 * @property {boolean} [track_inventory]
 * @property {ReturnConfig1} [return_config]
 * @property {Object} [raw_meta]
 * @property {number} item_id
 * @property {string} [added_on_store]
 * @property {Object} identifier
 * @property {ManufacturerResponse} manufacturer
 * @property {boolean} [is_set]
 * @property {string} [stage]
 * @property {boolean} fragile
 * @property {Object} [tax_identifier]
 * @property {Object} [meta]
 * @property {DimensionResponse} dimension
 * @property {string} fynd_item_code
 * @property {string} fynd_article_code
 * @property {string} size
 * @property {string} uid
 * @property {BrandMeta} brand
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [modified_by]
 * @property {WeightResponse} weight
 * @property {number} total_quantity
 * @property {Quantities} [quantities]
 * @property {InventorySet} [set]
 * @property {string[]} [tags]
 * @property {CompanyMeta} company
 * @property {PriceMeta} price
 * @property {string} seller_identifier
 * @property {Object} [_custom_json]
 * @property {string} [expiration_date]
 * @property {Trader1[]} [trader]
 * @property {string} [trace_id]
 * @property {Object} [fynd_meta]
 * @property {string} country_of_origin
 * @property {boolean} [is_active]
 * @property {StoreMeta} store
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef ReturnConfig2
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [width]
 * @property {string} [unit]
 * @property {number} [length]
 * @property {number} [height]
 */

/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef WeightResponse1
 * @property {string} [unit]
 * @property {number} [shipping]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [damaged]
 * @property {Quantity} [order_committed]
 * @property {Quantity} [not_available]
 * @property {Quantity} [sellable]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef PriceArticle
 * @property {string} [currency]
 * @property {number} [transfer]
 * @property {Object} [tp_notes]
 * @property {number} [effective]
 * @property {number} [marked]
 */

/**
 * @typedef Trader2
 * @property {string[]} [address]
 * @property {string} [type]
 * @property {string} [name]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [address]
 * @property {boolean} [is_default]
 * @property {string} [name]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} [store_code]
 * @property {string} [name]
 */

/**
 * @typedef GetInventories
 * @property {boolean} [track_inventory]
 * @property {ReturnConfig2} [return_config]
 * @property {string} [inventory_updated_on]
 * @property {number} [item_id]
 * @property {Object} [identifier]
 * @property {boolean} [is_set]
 * @property {string} [id]
 * @property {string} [stage]
 * @property {Object} [tax_identifier]
 * @property {DateMeta} [date_meta]
 * @property {DimensionResponse1} [dimension]
 * @property {string} [size]
 * @property {string} [uid]
 * @property {BrandMeta1} [brand]
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [modified_by]
 * @property {WeightResponse1} [weight]
 * @property {number} [total_quantity]
 * @property {QuantitiesArticle} [quantities]
 * @property {Object} [platforms]
 * @property {string[]} [tags]
 * @property {CompanyMeta1} [company]
 * @property {PriceArticle} [price]
 * @property {string} [seller_identifier]
 * @property {string} [expiration_date]
 * @property {Trader2[]} [trader]
 * @property {string} [trace_id]
 * @property {string} [country_of_origin]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {ArticleStoreResponse} [store]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {Page} [page]
 * @property {GetInventories[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {string[]} [cancelled_records]
 * @property {number} [cancelled]
 * @property {number} [failed]
 * @property {Object} [created_by]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {number} [succeed]
 * @property {string} [id]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {number} [quantity]
 * @property {number} [price]
 * @property {string} store_code
 * @property {string} [currency]
 * @property {string} seller_identifier
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [total_quantity]
 * @property {string[]} [tags]
 * @property {string} [item_weight_unit_of_measure]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {number} company_id
 * @property {string} batch_id
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [status]
 * @property {string} [url]
 * @property {Object} [request_params]
 * @property {string} task_id
 * @property {string} [trigger_on]
 * @property {string} [completed_on]
 * @property {number} seller_id
 */

/**
 * @typedef InventoryExportRequest
 * @property {string} [type]
 * @property {number[]} [brand]
 * @property {number[]} [store]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} [status]
 * @property {Object} [request_params]
 * @property {string} task_id
 * @property {string} [trigger_on]
 * @property {number} seller_id
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
 * @property {number} store_id
 * @property {string} seller_identifier
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {number} [total_quantity]
 * @property {string[]} [tags]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {InventoryPayload[]} [payload]
 * @property {Object} [meta]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
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
 * @property {string} [current]
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 */

/**
 * @typedef HsnCodesObject
 * @property {string} [modified_on]
 * @property {string} [hs2_code]
 * @property {number} [threshold2]
 * @property {string} [hsn_code]
 * @property {number} [company_id]
 * @property {boolean} [tax_on_esp]
 * @property {number} [tax1]
 * @property {boolean} [tax_on_mrp]
 * @property {number} [threshold1]
 * @property {string} [id]
 * @property {number} [tax2]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
 */

/**
 * @typedef HsnUpsert
 * @property {string} hs2_code
 * @property {number} [uid]
 * @property {number} [threshold2]
 * @property {string} hsn_code
 * @property {number} company_id
 * @property {boolean} [tax_on_esp]
 * @property {number} tax1
 * @property {boolean} tax_on_mrp
 * @property {number} threshold1
 * @property {number} [tax2]
 * @property {boolean} [is_active]
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
 * @property {number} rate
 * @property {string} effective_date
 * @property {number} threshold
 * @property {number} [cess]
 */

/**
 * @typedef HSNDataInsertV2
 * @property {TaxSlab[]} taxes
 * @property {string} [modified_on]
 * @property {string} description
 * @property {string} type
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {string} hsn_code
 * @property {string} country_code
 * @property {string} [created_on]
 * @property {string} reporting_hsn
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {string} size
 * @property {number} item_id
 */

/**
 * @typedef AssignStoreArticle
 * @property {ArticleAssignment} [article_assignment]
 * @property {ArticleQuery} [query]
 * @property {number} [quantity]
 * @property {string} [group_id]
 * @property {Object} [meta]
 */

/**
 * @typedef AssignStore
 * @property {string} [channel_identifier]
 * @property {AssignStoreArticle[]} articles
 * @property {string} app_id
 * @property {number} [company_id]
 * @property {string} [channel_type]
 * @property {string} pincode
 * @property {number[]} [store_ids]
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef StoreAssignResponse
 * @property {ArticleAssignment1} article_assignment
 * @property {string} [_id]
 * @property {number} quantity
 * @property {string} [s_city]
 * @property {boolean} status
 * @property {string} [group_id]
 * @property {number} [store_id]
 * @property {string} size
 * @property {string} [uid]
 * @property {number} [price_effective]
 * @property {number} [index]
 * @property {number} [price_marked]
 * @property {Object} [meta]
 * @property {number} item_id
 * @property {number} [company_id]
 * @property {Object[]} [strategy_wise_listing]
 * @property {number} [store_pincode]
 */

/**
 * @typedef BrandItem
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Media} [logo]
 * @property {Action} [action]
 * @property {string[]} [departments]
 * @property {string} [discount]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {number} [priority_order]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Media} [logo]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef ThirdLevelChild
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Action} [action]
 */

/**
 * @typedef SecondLevelChild
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {ThirdLevelChild[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Action} [action]
 */

/**
 * @typedef Child
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {SecondLevelChild[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Action} [action]
 */

/**
 * @typedef CategoryItems
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Child[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Action} [action]
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
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ProductDetail
 * @property {Object} [promo_meta]
 * @property {string[]} [similars]
 * @property {string} [description]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 * @property {string} [product_online_date]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {number} [rating]
 * @property {string[]} [tryouts]
 * @property {number} [uid]
 * @property {ProductBrand} [brand]
 * @property {string} [color]
 * @property {Media1[]} [medias]
 * @property {string} slug
 * @property {string} [short_description]
 * @property {Object} [teaser_tag]
 * @property {number} [rating_count]
 * @property {string} [image_nature]
 * @property {string} [type]
 * @property {boolean} [has_variant]
 * @property {string} [item_type]
 */

/**
 * @typedef InventoryPage
 * @property {string} type
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} item_total
 * @property {string} [next_id]
 */

/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [enabled]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [user_id]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [user_id]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [country]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {number} [latitude]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {number} [longitude]
 * @property {number} [pincode]
 */

/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer2} [verified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {UserSerializer2} [created_by]
 * @property {string} [reject_reason]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [company_type]
 * @property {string} [stage]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [verified_on]
 * @property {string} [business_type]
 * @property {string} [created_on]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 */

/**
 * @typedef GetLocationSerializer
 * @property {string} [modified_on]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} display_name
 * @property {string} [store_type]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} name
 * @property {Document[]} [documents]
 * @property {Object} [warnings]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string} code
 * @property {number} [uid]
 * @property {LocationManagerSerializer} [manager]
 * @property {UserSerializer1} [created_by]
 * @property {UserSerializer1} [modified_by]
 * @property {string} [verified_on]
 * @property {UserSerializer1} [verified_by]
 * @property {GetCompanySerializer} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string[]} [notification_emails]
 * @property {Object} [_custom_json]
 * @property {string} phone_number
 * @property {GetAddressSerializer} address
 * @property {LocationDayWiseSerializer[]} [timing]
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
 * @typedef ApplicationDepartment
 * @property {string} app_id
 * @property {string} [name]
 * @property {Object} [_custom_json]
 * @property {number} uid
 * @property {string} [logo]
 * @property {boolean} [is_active]
 */

/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {Page} page
 * @property {ApplicationDepartment[]} [items]
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
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {number} [rate]
 * @property {string} [effective_date]
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessDetails} [business_details]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {Object} [_custom_json]
 * @property {number} uid
 * @property {string} business_type
 * @property {boolean} [franchise_enabled]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {string} [name]
 * @property {string} company_type
 * @property {string} [created_on]
 * @property {Document[]} [documents]
 * @property {UserSerializer} [modified_by]
 * @property {ContactDetails} [contact_details]
 * @property {string} [business_info]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {string} [mode]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} [address2]
 * @property {number} longitude
 * @property {string} address1
 * @property {string} state
 * @property {string} address_type
 * @property {string} country
 * @property {number} latitude
 * @property {number} pincode
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} city
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {number} [rate]
 * @property {string} [effective_date]
 */

/**
 * @typedef UpdateCompany
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string} [reject_reason]
 * @property {Document[]} [documents]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string} [business_type]
 * @property {ContactDetails} [contact_details]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {BusinessDetails} [business_details]
 * @property {boolean} [franchise_enabled]
 * @property {Object} [warnings]
 * @property {Object} [_custom_json]
 * @property {string} [company_type]
 * @property {string} [business_info]
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
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [brand]
 * @property {number} [uid]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [product]
 * @property {string} [stage]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string[]} [synonyms]
 * @property {Object} [warnings]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {string} [slug_key]
 * @property {string} name
 * @property {Object} [_locale_language]
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {string} [reject_reason]
 * @property {UserSerializer} [modified_by]
 * @property {string} [description]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {string} [mode]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string} logo
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string} [description]
 * @property {string} [brand_tier]
 * @property {Object} [_custom_json]
 * @property {number} [company_id]
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} [banner]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} url
 * @property {string} name
 */

/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */

/**
 * @typedef CompanySerializer
 * @property {GetAddressSerializer[]} [addresses]
 * @property {Object} [_custom_json]
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {string} business_type
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {CompanyDetails} [details]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string[]} [market_channels]
 * @property {string} company_type
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {string} [verified_on]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {Object} [warnings]
 * @property {CompanySerializer} [company]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} company
 * @property {number} [uid]
 * @property {number[]} brands
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} title
 * @property {string} holiday_type
 */

/**
 * @typedef LocationSerializer
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Document[]} [documents]
 * @property {string} display_name
 * @property {number} [uid]
 * @property {GetAddressSerializer} address
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} name
 * @property {string} [store_type]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} code
 * @property {string[]} [notification_emails]
 * @property {LocationManagerSerializer} [manager]
 * @property {Object} [warnings]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {Object} [_custom_json]
 * @property {number} company
 * @property {string} [stage]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef _ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {number} [item_id]
 * @property {string} [size]
 */

/**
 * @typedef _ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {Object} [meta]
 * @property {_ArticleQuery} [query]
 * @property {number} [quantity]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {string} [group_id]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [app_id]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_type]
 * @property {number[]} [store_ids]
 * @property {number} [company_id]
 * @property {string} [pincode]
 * @property {string} [channel_identifier]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {Object} [meta]
 * @property {number} [store_id]
 * @property {string} [size]
 * @property {number} [index]
 * @property {string} [uid]
 * @property {number} [quantity]
 * @property {string} [store_pincode]
 * @property {string} [_id]
 * @property {boolean} [status]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [price_marked]
 * @property {number} [item_id]
 * @property {number} [preice_effective]
 * @property {string} [s_city]
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
 * @typedef Rule
 * @property {number} [discount_qty]
 * @property {number} [key]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [value]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [description]
 * @property {DisplayMetaDict} [auto]
 * @property {DisplayMetaDict} [apply]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [remove]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {boolean} [anonymous]
 * @property {string} [user_registered_after]
 */

/**
 * @typedef State
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_public]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef CouponSchedule
 * @property {string} [start]
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 * @property {string} [end]
 * @property {number} [duration]
 */

/**
 * @typedef RuleDefinition
 * @property {string[]} [scope]
 * @property {string} value_type
 * @property {string} type
 * @property {string} calculate_on
 * @property {boolean} [is_exact]
 * @property {boolean} [auto_apply]
 * @property {string} applicable_on
 * @property {string} [currency_code]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [types]
 * @property {string[]} [networks]
 */

/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [user]
 * @property {number} [total]
 * @property {number} [app]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef Restrictions
 * @property {Object} [payments]
 * @property {PriceRange} [price_range]
 * @property {boolean} [coupon_allowed]
 * @property {PostOrder} [post_order]
 * @property {number[]} [user_groups]
 * @property {string} [user_type]
 * @property {UsesRestriction} [uses]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {number[]} [ordering_stores]
 * @property {string[]} [platforms]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef CouponAdd
 * @property {Rule[]} rule
 * @property {DisplayMeta} display_meta
 * @property {Validation} [validation]
 * @property {string} type_slug
 * @property {State} [state]
 * @property {CouponAuthor} [author]
 * @property {CouponAction} [action]
 * @property {Ownership} ownership
 * @property {CouponSchedule} [_schedule]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 * @property {Restrictions} [restrictions]
 * @property {Validity} validity
 * @property {CouponDateMeta} [date_meta]
 * @property {string} code
 * @property {Identifier} identifiers
 */

/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SuccessMessage
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OperationErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef CouponUpdate
 * @property {Rule[]} rule
 * @property {DisplayMeta} display_meta
 * @property {Validation} [validation]
 * @property {string} type_slug
 * @property {State} [state]
 * @property {CouponAuthor} [author]
 * @property {CouponAction} [action]
 * @property {Ownership} ownership
 * @property {CouponSchedule} [_schedule]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 * @property {Restrictions} [restrictions]
 * @property {Validity} validity
 * @property {CouponDateMeta} [date_meta]
 * @property {string} code
 * @property {Identifier} identifiers
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [description]
 * @property {string} [offer_text]
 * @property {string} [name]
 */

/**
 * @typedef CompareObject
 * @property {number} [greater_than_equals]
 * @property {number} [equals]
 * @property {number} [less_than]
 * @property {number} [less_than_equals]
 * @property {number} [greater_than]
 */

/**
 * @typedef ItemCriteria
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_id]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_store]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_exclude_brand]
 * @property {string[]} [item_size]
 * @property {string[]} [available_zones]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_category]
 * @property {number[]} [item_exclude_company]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_company]
 * @property {CompareObject} [cart_quantity]
 * @property {boolean} [all_items]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_store]
 */

/**
 * @typedef DiscountOffer
 * @property {boolean} [partial_can_ret]
 * @property {number} [max_offer_quantity]
 * @property {boolean} [apportion_discount]
 * @property {number} [max_discount_amount]
 * @property {number} [discount_amount]
 * @property {string} [code]
 * @property {number} [discount_percentage]
 * @property {number} [discount_price]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [min_offer_quantity]
 */

/**
 * @typedef DiscountRule
 * @property {string} discount_type
 * @property {string} buy_condition
 * @property {ItemCriteria} item_criteria
 * @property {DiscountOffer} offer
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef PromotionSchedule
 * @property {boolean} published
 * @property {string} start
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 * @property {string} [end]
 * @property {number} [duration]
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
 * @property {string[]} [codes]
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
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
 * @typedef Restrictions1
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [user_id]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {PostOrder1} [post_order]
 * @property {boolean} [anonymous_users]
 * @property {number[]} [user_groups]
 * @property {UsesRestriction1} uses
 * @property {string[]} [platforms]
 * @property {number} [order_quantity]
 */

/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */

/**
 * @typedef PromotionListItem
 * @property {DisplayMeta1} display_meta
 * @property {DiscountRule[]} discount_rules
 * @property {string} [apply_exclusive]
 * @property {Object} buy_rules
 * @property {boolean} [apply_all_discount]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [code]
 * @property {string} application_id
 * @property {boolean} [stackable]
 * @property {string} [calculate_on]
 * @property {Ownership1} ownership
 * @property {PromotionSchedule} [_schedule]
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {Visibility} [visiblility]
 * @property {string} [currency]
 * @property {string} promotion_type
 * @property {Object} [_custom_json]
 * @property {string} mode
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {DisplayMeta1} display_meta
 * @property {DiscountRule[]} discount_rules
 * @property {string} [apply_exclusive]
 * @property {Object} buy_rules
 * @property {boolean} [apply_all_discount]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [code]
 * @property {string} application_id
 * @property {boolean} [stackable]
 * @property {string} [calculate_on]
 * @property {Ownership1} ownership
 * @property {PromotionSchedule} [_schedule]
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {Visibility} [visiblility]
 * @property {string} [currency]
 * @property {string} promotion_type
 * @property {Object} [_custom_json]
 * @property {string} mode
 */

/**
 * @typedef PromotionUpdate
 * @property {DisplayMeta1} display_meta
 * @property {DiscountRule[]} discount_rules
 * @property {string} [apply_exclusive]
 * @property {Object} buy_rules
 * @property {boolean} [apply_all_discount]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [code]
 * @property {string} application_id
 * @property {boolean} [stackable]
 * @property {string} [calculate_on]
 * @property {Ownership1} ownership
 * @property {PromotionSchedule} [_schedule]
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {Visibility} [visiblility]
 * @property {string} [currency]
 * @property {string} promotion_type
 * @property {Object} [_custom_json]
 * @property {string} mode
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [description]
 * @property {boolean} [is_hidden]
 * @property {string} [type]
 * @property {string} [example]
 * @property {string} [created_on]
 * @property {string} [entity_type]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {string} [entity_slug]
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
 * @property {number} [gst_charges]
 * @property {number} [you_saved]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {number} [cod_charge]
 * @property {number} [gift_card]
 * @property {number} [fynd_cash]
 * @property {number} [coupon]
 * @property {number} [discount]
 * @property {number} [vog]
 * @property {number} [delivery_charge]
 * @property {number} [mrp_total]
 * @property {number} [convenience_fee]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [currency_symbol]
 * @property {string[]} [message]
 * @property {string} [currency_code]
 * @property {number} [value]
 */

/**
 * @typedef CouponBreakup
 * @property {number} [max_discount_value]
 * @property {string} [uid]
 * @property {string} [description]
 * @property {string} [sub_title]
 * @property {string} [type]
 * @property {boolean} [is_applied]
 * @property {string} [coupon_type]
 * @property {string} [title]
 * @property {string} [message]
 * @property {string} [code]
 * @property {number} [coupon_value]
 * @property {number} [value]
 * @property {number} [minimum_cart_value]
 */

/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 * @property {number} [total]
 * @property {string} [description]
 */

/**
 * @typedef CartBreakup
 * @property {RawBreakup} [raw]
 * @property {DisplayBreakup[]} [display]
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 */

/**
 * @typedef ProductPrice
 * @property {number} [effective]
 * @property {number} [add_on]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [selling]
 * @property {number} [marked]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef FreeGiftItem
 * @property {Object} [item_price_details]
 * @property {string} [item_brand_name]
 * @property {string} [item_slug]
 * @property {number} [item_id]
 * @property {string} [item_name]
 * @property {string[]} [item_images_url]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {string} [article_id]
 * @property {string} [parent_item_identifier]
 * @property {number} [quantity]
 */

/**
 * @typedef DiscountRulesApp
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [raw_offer]
 * @property {Object} [item_criteria]
 * @property {Object} [offer]
 */

/**
 * @typedef AppliedPromotion
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [offer_text]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {number} [article_quantity]
 * @property {string} [promotion_name]
 * @property {boolean} [mrp_promotion]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_type]
 * @property {number} [amount]
 * @property {string} [promo_id]
 * @property {string} [promotion_group]
 */

/**
 * @typedef ProductAvailability
 * @property {number} [other_store_quantity]
 * @property {string[]} [sizes]
 * @property {boolean} [is_valid]
 * @property {boolean} [deliverable]
 * @property {boolean} [out_of_stock]
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
 * @property {ActionQuery} [query]
 * @property {string} [url]
 * @property {string} [type]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef Tags
 * @property {Object} [tags]
 */

/**
 * @typedef ProductImage
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef CartProduct
 * @property {number} [uid]
 * @property {string} [type]
 * @property {BaseInfo} [brand]
 * @property {ProductAction} [action]
 * @property {string[]} [tags]
 * @property {string} [name]
 * @property {CategoryInfo[]} [categories]
 * @property {Object} [_custom_json]
 * @property {Tags} [teaser_tag]
 * @property {ProductImage[]} [images]
 * @property {string} [slug]
 */

/**
 * @typedef CouponDetails
 * @property {number} [discount_single_quantity]
 * @property {string} [code]
 * @property {number} [discount_total_quantity]
 */

/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 * @property {string} [currency_code]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {Object} [identifier]
 * @property {string} [uid]
 * @property {string[]} [product_group_tags]
 * @property {string} [type]
 * @property {number} [quantity]
 * @property {ArticlePriceInfo} [price]
 * @property {BaseInfo} [store]
 * @property {string} [size]
 * @property {BaseInfo} [seller]
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [extra_meta]
 * @property {Object} [gift_card]
 * @property {string} [seller_identifier]
 * @property {boolean} [is_gift_visible]
 * @property {Object} [cart_item_meta]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef CartProductInfo
 * @property {number} [quantity]
 * @property {ProductPriceInfo} [price]
 * @property {string} [coupon_message]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {string} [key]
 * @property {boolean} [is_set]
 * @property {Object} [bulk_offer]
 * @property {ProductAvailability} [availability]
 * @property {CartProduct} [product]
 * @property {CouponDetails} [coupon]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [discount]
 * @property {string} [message]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {ProductArticle} [article]
 * @property {PromoMeta} [promo_meta]
 * @property {CartProductIdentifer} identifiers
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {Object} [errors]
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ShippingAddress
 * @property {number} [pincode]
 * @property {string} [country_code]
 * @property {Object} [meta]
 * @property {number} [phone]
 * @property {string} [address]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [name]
 * @property {string} [area_code_slug]
 * @property {string} [area]
 * @property {string} [country]
 * @property {string} area_code
 * @property {string} [email]
 * @property {string} [landmark]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 */

/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */

/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} cod_charges
 * @property {number} price_effective
 * @property {string} size
 * @property {CartItemMeta} [meta]
 * @property {number} [quantity]
 * @property {OpenApiFiles[]} [files]
 * @property {number} amount_paid
 * @property {number} product_id
 * @property {number} [loyalty_discount]
 * @property {Object} [extra_meta]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} coupon_effective_discount
 * @property {number} delivery_charges
 * @property {number} discount
 * @property {number} [employee_discount]
 * @property {number} cashback_applied
 * @property {number} price_marked
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {number} cod_charges
 * @property {string} [gstin]
 * @property {ShippingAddress} billing_address
 * @property {number} [loyalty_discount]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} coupon_value
 * @property {number} delivery_charges
 * @property {Object} [employee_discount]
 * @property {string} [currency_code]
 * @property {number} cashback_applied
 * @property {string} [payment_mode]
 * @property {string} [comment]
 * @property {string} coupon_code
 * @property {OpenApiFiles[]} [files]
 * @property {string} [order_id]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} [coupon]
 * @property {number} cart_value
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} order_id
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 */

/**
 * @typedef AbandonedCart
 * @property {Object} [cod_charges]
 * @property {Object} [meta]
 * @property {string} created_on
 * @property {number} [bulk_coupon_discount]
 * @property {string} [checkout_mode]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [app_id]
 * @property {Object} [payments]
 * @property {Object[]} [shipments]
 * @property {boolean} [merge_qty]
 * @property {string} last_modified
 * @property {string} expire_at
 * @property {string} [order_id]
 * @property {Object[]} [payment_methods]
 * @property {number} [cart_value]
 * @property {number} [discount]
 * @property {boolean} [is_active]
 * @property {boolean} is_default
 * @property {Object} [fynd_credits]
 * @property {Object} [promotion]
 * @property {string} [gstin]
 * @property {boolean} [is_archive]
 * @property {Object} [delivery_charges]
 * @property {Object} cashback
 * @property {string} [payment_mode]
 * @property {string} [comment]
 * @property {boolean} [buy_now]
 * @property {string} _id
 * @property {number[]} [fc_index_map]
 * @property {number} uid
 * @property {string} user_id
 * @property {Object} [coupon]
 * @property {Object[]} articles
 */

/**
 * @typedef AbandonedCartResponse
 * @property {Object} [result]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {AbandonedCart[]} [items]
 * @property {string} [message]
 */

/**
 * @typedef AddProductCart
 * @property {string} [display]
 * @property {string} [item_size]
 * @property {string[]} [product_group_tags]
 * @property {number} [store_id]
 * @property {number} [quantity]
 * @property {number} [item_id]
 * @property {Object} [article_assignment]
 * @property {number} [seller_id]
 * @property {string} [article_id]
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [extra_meta]
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
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [message]
 * @property {boolean} [restrict_checkout]
 * @property {string} [checkout_mode]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [comment]
 * @property {string} [id]
 * @property {boolean} [buy_now]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [partial]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 */

/**
 * @typedef UpdateProductCart
 * @property {string} [item_size]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [quantity]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [item_index]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
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
 * @typedef ServiceabilityrErrorResponse
 * @property {string} type
 * @property {string} message
 * @property {string} value
 */

/**
 * @typedef ApplicationServiceabilityConfig
 * @property {string} channel_id
 * @property {string} channel_type
 * @property {string} serviceability_type
 */

/**
 * @typedef ApplicationServiceabilityConfigResponse
 * @property {ServiceabilityrErrorResponse} [error]
 * @property {boolean} success
 * @property {ApplicationServiceabilityConfig} [data]
 */

/**
 * @typedef EntityRegionView_Request
 * @property {string[]} [parent_id]
 * @property {string[]} sub_type
 */

/**
 * @typedef EntityRegionView_Error
 * @property {string} [type]
 * @property {string} [message]
 * @property {string} [value]
 */

/**
 * @typedef EntityRegionView_Items
 * @property {string} sub_type
 * @property {string} name
 * @property {string} uid
 */

/**
 * @typedef EntityRegionView_page
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} current
 * @property {string} type
 * @property {number} size
 */

/**
 * @typedef EntityRegionView_Response
 * @property {EntityRegionView_Error} error
 * @property {boolean} success
 * @property {EntityRegionView_Items[]} data
 * @property {EntityRegionView_page} page
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
 * @property {ListViewProduct} product
 * @property {string} slug
 * @property {boolean} is_active
 * @property {number} company_id
 * @property {string} name
 * @property {number} pincodes_count
 * @property {ListViewChannels} channels
 * @property {string} zone_id
 * @property {number} stores_count
 */

/**
 * @typedef ListViewSummary
 * @property {number} total_active_zones
 * @property {number} total_pincodes_served
 * @property {number} total_zones
 */

/**
 * @typedef ZoneDataItem
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {string} type
 * @property {number} current
 * @property {number} size
 */

/**
 * @typedef ListViewResponse
 * @property {ListViewItems[]} items
 * @property {ListViewSummary[]} summary
 * @property {ZoneDataItem[]} page
 */

/**
 * @typedef CompanyStoreView_PageItems
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} current
 * @property {string} type
 * @property {number} size
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
 * @property {string} type
 * @property {string[]} tags
 */

/**
 * @typedef ZoneMappingType
 * @property {string[]} [pincode]
 * @property {string[]} [state]
 * @property {string} country
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
 * @property {number} status_code
 * @property {boolean} success
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
 * @property {number} status_code
 * @property {string} zone_id
 * @property {boolean} success
 */

/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} pincode
 * @property {string} country
 */

/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {string[]} zones
 */

/**
 * @typedef CreatedByResponse
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef DocumentsResponse
 * @property {boolean} [verified]
 * @property {string} [legal_name]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef IntegrationTypeResponse
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef ContactNumberResponse
 * @property {string} [number]
 * @property {number} [country_code]
 */

/**
 * @typedef ProductReturnConfigResponse
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef Dp
 * @property {string} [payment_mode]
 * @property {string} [transport_mode]
 * @property {boolean} [assign_dp_from_sb]
 * @property {number} [lm_priority]
 * @property {number} [rvp_priority]
 * @property {string} [external_account_id]
 * @property {string[]} [operations]
 * @property {number} [area_code]
 * @property {number} [fm_priority]
 * @property {string} [internal_account_id]
 */

/**
 * @typedef LogisticsResponse
 * @property {boolean} [override]
 * @property {Dp} [dp]
 */

/**
 * @typedef ModifiedByResponse
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef EinvoiceResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef EwayBillResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef GstCredentialsResponse
 * @property {EinvoiceResponse} [e_invoice]
 * @property {EwayBillResponse} [e_waybill]
 */

/**
 * @typedef MobileNo
 * @property {string} [number]
 * @property {number} [country_code]
 */

/**
 * @typedef ManagerResponse
 * @property {MobileNo} [mobile_no]
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef WarningsResponse
 * @property {string} [store_address]
 */

/**
 * @typedef OpeningClosing
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef TimmingResponse
 * @property {boolean} [open]
 * @property {string} [weekday]
 * @property {OpeningClosing} [opening]
 * @property {OpeningClosing} [closing]
 */

/**
 * @typedef AddressResponse
 * @property {string} [address2]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {number} [longitude]
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [latitude]
 */

/**
 * @typedef ItemResponse
 * @property {string} [store_type]
 * @property {CreatedByResponse} [created_by]
 * @property {string} [verified_on]
 * @property {DocumentsResponse[]} [documents]
 * @property {IntegrationTypeResponse} [integration_type]
 * @property {ContactNumberResponse[]} [contact_numbers]
 * @property {string} [sub_type]
 * @property {string[]} [notification_emails]
 * @property {ProductReturnConfigResponse} [product_return_config]
 * @property {string} [created_on]
 * @property {LogisticsResponse} [logistics]
 * @property {number} [uid]
 * @property {string} [display_name]
 * @property {ModifiedByResponse} [verified_by]
 * @property {string} [code]
 * @property {string} [modified_on]
 * @property {GstCredentialsResponse} [gst_credentials]
 * @property {ManagerResponse} [manager]
 * @property {WarningsResponse} [warnings]
 * @property {string} [_cls]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {TimmingResponse[]} [timing]
 * @property {AddressResponse} [address]
 * @property {number} [company_id]
 * @property {number} [company]
 * @property {ModifiedByResponse} [modified_by]
 * @property {string} [stage]
 */

/**
 * @typedef GetStoresViewResponse
 * @property {ItemResponse[]} [items]
 * @property {PageResponse} page
 */

/**
 * @typedef GenerateBulkInvoiceLabelShipment
 * @property {number} store_id
 * @property {string} from_date
 * @property {string} to_date
 * @property {string} document_type
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef GenerateBulkInvoiceOrLabelUrl
 * @property {string} uid
 * @property {string} document_type
 * @property {number} batch_id
 */

/**
 * @typedef DocumentType
 * @property {string} invoice
 * @property {string} label
 */

/**
 * @typedef BulkListBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef BulkListFailedResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef SuccessResponseGenerateBulkShipment
 * @property {boolean} success
 * @property {number} job_id
 * @property {string} [trace_id]
 */

/**
 * @typedef SuccessResponseBulkStatus
 * @property {boolean} success
 * @property {string} status
 * @property {string} [trace_id]
 */

/**
 * @typedef GenerateBulkUrlSuccessResponse
 * @property {string} url
 * @property {string} uid
 * @property {number} expires_in
 * @property {string} presigned_type
 */

/**
 * @typedef InternalErrorResponseGenerateBulkShipment
 * @property {boolean} success
 * @property {string} error
 */

/**
 * @typedef BadRequestResponseGenerateBulkUrl
 * @property {boolean} success
 * @property {string} message
 * @property {string} [request_id]
 * @property {string} [exception]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

/**
 * @typedef InternalErrorResponseGenerateBulkUrl
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef GenerateBulkShipment
 * @property {string} uid
 * @property {string} store_code
 * @property {string} batch_id
 * @property {string} document_type
 */

/**
 * @typedef GenerateBulkUrl
 * @property {number} [expires_in]
 * @property {string} document_type
 * @property {string} batch_id
 */

/**
 * @typedef GetBulkStatusRequest
 * @property {string} batch_id
 */

/**
 * @typedef BadRequestResponseGenerateBulkItemParameters
 * @property {string} [missing_property]
 * @property {string} [type]
 */

/**
 * @typedef BadRequestResponseGenerateBulkItem
 * @property {string} [keyword]
 * @property {string} [data_path]
 * @property {string} [schema_path]
 * @property {BadRequestResponseGenerateBulkItemParameters} [parameters]
 * @property {string} [message]
 */

/**
 * @typedef SuccessResponseGenerateBulk
 * @property {boolean} success
 */

/**
 * @typedef BadRequestResponseGenerateBulk
 * @property {boolean} success
 * @property {BadRequestResponseGenerateBulkItem[]} error_message
 */

/**
 * @typedef InternalErrorResponseGenerateBulk
 * @property {boolean} success
 * @property {string} [error_message]
 */

/**
 * @typedef ShippingToAddress
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef SellerAddress
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef BoxDetails
 * @property {string} box_id
 * @property {string} total_quantity
 * @property {string} package_count
 * @property {string} dimension
 * @property {string} weight
 */

/**
 * @typedef GenerateBulkBoxLabel
 * @property {string} stock_transfer_id
 * @property {string} label_type
 * @property {string} uid
 * @property {string} seller_name
 * @property {number} template_id
 * @property {BoxDetails[]} box_details
 */

/**
 * @typedef GenerateBulkShipmentLabel
 * @property {string} label_type
 * @property {string} uid
 * @property {number} template_id
 * @property {ShipmentDetails[]} shipments
 */

/**
 * @typedef GenerateNoc
 * @property {string} uid
 * @property {string} seller_name
 * @property {string} seller_gstin
 * @property {string} fc_gstin
 * @property {number} template_id
 * @property {SellerAddress} fc_address
 * @property {SellerAddress} seller_address
 */

/**
 * @typedef PackageDetails
 * @property {string} package_id
 * @property {string} item_quantity
 * @property {string} package_type
 * @property {string} packaging_type
 * @property {string} dimension
 * @property {string} weight
 */

/**
 * @typedef PackageItemDetails
 * @property {string} jio_code
 * @property {string} item_name
 * @property {string} mrp
 * @property {string} country_of_origin
 * @property {string} best_before_date
 * @property {string} ean
 * @property {PackageDetails[]} package_details
 */

/**
 * @typedef GenerateBulkPackageLabel
 * @property {string} stock_transfer_id
 * @property {string} label_type
 * @property {string} uid
 * @property {string} seller_name
 * @property {number} template_id
 * @property {PackageItemDetails[]} item_details
 */

/**
 * @typedef SignedSuccessResponse
 * @property {string} [uid]
 * @property {string} [url]
 * @property {number} [expires_in]
 */

/**
 * @typedef BulkPresignedSuccessResponse
 * @property {string} success
 * @property {string} [batch_id]
 * @property {string} [presigned_type]
 * @property {string} presigned_url
 * @property {number} [expires_in]
 */

/**
 * @typedef SignedBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef SignedFailedResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef StatusSuccessResponse
 * @property {boolean} [success]
 * @property {string} [status]
 */

/**
 * @typedef StatusBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef StatusFailedResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef GenerateManifest
 * @property {number} store_id
 * @property {string} from_date
 * @property {string} to_date
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef GeneratePresignedManifestUrl
 * @property {string} manifest_id
 * @property {string} uid
 */

/**
 * @typedef ManifestLink
 * @property {string} name
 * @property {string} manifest_id
 */

/**
 * @typedef GenerateManifestUrlSuccessResponse
 * @property {string} url
 * @property {string} uid
 * @property {string} manifest_id
 * @property {number} expires_in
 * @property {string} presigned_type
 */

/**
 * @typedef ManifestListFailedResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef InvoiceLabelPresignedRequestBody
 * @property {string} document_type
 * @property {string} entity_id
 * @property {number} [expires_in]
 */

module.exports = PlatformClient;
