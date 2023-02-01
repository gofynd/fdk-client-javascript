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
 * @property {Object[]} [aggregators]
 * @property {boolean} success
 * @property {boolean} created
 * @property {string[]} display_fields
 * @property {string[]} excluded_fields
 * @property {string} app_id
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type
 * @property {boolean} [is_active]
 * @property {string} secret
 * @property {string} key
 * @property {string} merchant_salt
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {boolean} [is_active]
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
 * @property {PaymentModeLogo} [logos]
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [card_fingerprint]
 * @property {string} aggregator_name
 * @property {string} [nickname]
 * @property {number} [timeout]
 * @property {string} [card_token]
 * @property {string} [card_brand_image]
 * @property {boolean} [expired]
 * @property {string} [code]
 * @property {IntentApp[]} [intent_app]
 * @property {number} [display_priority]
 * @property {string} [card_reference]
 * @property {string} [card_id]
 * @property {string} [card_issuer]
 * @property {string} [fynd_vpa]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [name]
 * @property {string} [card_number]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_type]
 * @property {number} [cod_limit]
 * @property {string} [card_isin]
 * @property {boolean} [intent_flow]
 * @property {number} [remaining_limit]
 * @property {string} [card_brand]
 * @property {number} [exp_month]
 * @property {string} [display_name]
 * @property {number} [exp_year]
 * @property {number} [cod_limit_per_order]
 * @property {string} [card_name]
 * @property {number} [retry_count]
 * @property {string} [merchant_code]
 */

/**
 * @typedef RootPaymentMode
 * @property {string} [aggregator_name]
 * @property {string} display_name
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [save_card]
 * @property {boolean} [is_pay_by_card_pl]
 * @property {string} name
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [anonymous_enable]
 * @property {number} display_priority
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
 * @property {Object} customers
 * @property {boolean} is_active
 * @property {Object} more_attributes
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_default
 * @property {string} transfer_type
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} account_type
 * @property {string} [city]
 * @property {string} [state]
 * @property {number} [pincode]
 * @property {string} [bank_name]
 * @property {string} [country]
 * @property {string} [account_holder]
 * @property {string} [branch_name]
 * @property {string} ifsc_code
 * @property {string} [account_no]
 */

/**
 * @typedef PayoutRequest
 * @property {string} aggregator
 * @property {boolean} is_active
 * @property {PayoutBankDetails} bank_details
 * @property {Object} users
 * @property {string} transfer_type
 * @property {string} unique_external_id
 */

/**
 * @typedef PayoutResponse
 * @property {string} unique_transfer_no
 * @property {string} aggregator
 * @property {boolean} success
 * @property {string} payment_status
 * @property {boolean} is_active
 * @property {boolean} created
 * @property {Object} payouts
 * @property {Object} bank_details
 * @property {Object} users
 * @property {string} transfer_type
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
 * @property {boolean} is_active
 * @property {string} unique_external_id
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
 * @property {string} bank_name
 * @property {string} account_holder
 * @property {string} branch_name
 * @property {string} ifsc_code
 * @property {string} account_no
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name
 * @property {string} bank_name
 * @property {boolean} [success]
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} title
 * @property {string} beneficiary_id
 * @property {string} [mobile]
 * @property {string} address
 * @property {string} [branch_name]
 * @property {string} subtitle
 * @property {string} modified_on
 * @property {number} id
 * @property {string} [comment]
 * @property {string} transfer_mode
 * @property {string} created_on
 * @property {boolean} is_active
 * @property {string} account_holder
 * @property {string} [delights_user_name]
 * @property {string} display_name
 * @property {string} bank_name
 * @property {string} email
 * @property {string} ifsc_code
 * @property {string} account_no
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {string} [payment_id]
 * @property {string} [payment_gateway]
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} mode
 * @property {number} amount
 * @property {string} [name]
 * @property {MultiTenderPaymentMeta} [meta]
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
 * @property {number} usages
 * @property {number} remaining_limit
 * @property {number} limit
 * @property {boolean} is_active
 * @property {string} user_id
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
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef GSTDetailsData
 * @property {number} value_of_good
 * @property {number} gst_fee
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {string} gstin_code
 */

/**
 * @typedef PlatformItem
 * @property {number} [department_id]
 * @property {string[]} [l1_category]
 * @property {string} [color]
 * @property {string} [code]
 * @property {string} [l3_category_name]
 * @property {string[]} [images]
 * @property {string} [size]
 * @property {number} [id]
 * @property {string[]} [image]
 * @property {boolean} [can_return]
 * @property {string} [name]
 * @property {number} [l3_category]
 * @property {boolean} [can_cancel]
 */

/**
 * @typedef Prices
 * @property {number} [price_effective]
 * @property {number} [fynd_credits]
 * @property {number} [refund_amount]
 * @property {number} [promotion_effective_discount]
 * @property {number} [cod_charges]
 * @property {number} [amount_paid]
 * @property {number} [coupon_value]
 * @property {number} [discount]
 * @property {number} [delivery_charge]
 * @property {number} [cashback]
 * @property {number} [value_of_good]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [tax_collected_at_source]
 * @property {number} [price_marked]
 * @property {number} [cashback_applied]
 * @property {number} [refund_credit]
 */

/**
 * @typedef BagUnit
 * @property {number} bag_id
 * @property {GSTDetailsData} [gst]
 * @property {PlatformItem} [item]
 * @property {Object} status
 * @property {number} total_shipment_bags
 * @property {string} ordering_channel
 * @property {number} item_quantity
 * @property {boolean} [can_return]
 * @property {string} shipment_id
 * @property {Prices} [prices]
 * @property {boolean} [can_cancel]
 */

/**
 * @typedef UserDataInfo
 * @property {string} [first_name]
 * @property {string} [avis_user_id]
 * @property {number} [uid]
 * @property {string} [last_name]
 * @property {string} [email]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [gender]
 * @property {string} [mobile]
 * @property {string} [name]
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} type
 * @property {string} logo
 */

/**
 * @typedef ShipmentStatus
 * @property {string} hex_code
 * @property {string} status
 * @property {string} title
 * @property {string} ops_status
 * @property {string} actual_status
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef ShipmentItem
 * @property {number} total_shipments_in_order
 * @property {string} fulfilling_centre
 * @property {number} shipment_created_at
 * @property {Object} [sla]
 * @property {number} total_bags_count
 * @property {BagUnit[]} [bags]
 * @property {string} id
 * @property {Object} [payment_methods]
 * @property {UserDataInfo} [user]
 * @property {Object} [application]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {string} created_at
 * @property {Prices} [prices]
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [channel]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [name]
 * @property {string} text
 * @property {string} [value]
 */

/**
 * @typedef FiltersInfo
 * @property {string} type
 * @property {FilterInfoOption[]} [options]
 * @property {string} text
 * @property {string} value
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {Object} [page]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [applied_filters]
 */

/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} mode
 * @property {string} [logo]
 * @property {string} [source]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} fynd_order_id
 * @property {Object} [tax_details]
 * @property {string} [order_date]
 * @property {string} [cod_charges]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [order_value]
 * @property {string} [source]
 * @property {string} [ordering_channel]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [status]
 * @property {number} [id]
 * @property {string} [shipment_id]
 * @property {number[]} [bag_list]
 * @property {string} [created_at]
 */

/**
 * @typedef UserDetailsData
 * @property {string} city
 * @property {string} address
 * @property {string} country
 * @property {string} pincode
 * @property {string} email
 * @property {string} phone
 * @property {string} name
 * @property {string} state
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_returnable
 * @property {boolean} enable_tracking
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 * @property {boolean} allow_force_return
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
 * @property {string} [type]
 * @property {number} [value]
 */

/**
 * @typedef AppliedPromos
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_name]
 * @property {string} [promo_id]
 * @property {string} [promotion_type]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 * @property {DiscountRules[]} [discount_rules]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} price_effective
 * @property {number} promotion_effective_discount
 * @property {number} discount
 * @property {Object} pm_price_split
 * @property {number} cashback
 * @property {number} [amount_paid_roundoff]
 * @property {string} gst_fee
 * @property {number} [tax_collected_at_source]
 * @property {string} item_name
 * @property {number} cashback_applied
 * @property {number} fynd_credits
 * @property {number} cod_charges
 * @property {number} price_marked
 * @property {boolean} added_to_fynd_cash
 * @property {Identifier} identifiers
 * @property {number} delivery_charge
 * @property {number} refund_credit
 * @property {number} total_units
 * @property {string} gst_tag
 * @property {number} amount_paid
 * @property {number} gst_tax_percentage
 * @property {number} coupon_value
 * @property {string} size
 * @property {string} hsn_code
 * @property {number} value_of_good
 * @property {number} transfer_price
 * @property {number} brand_calculated_amount
 * @property {number} coupon_effective_discount
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {string} [uid]
 * @property {Object} [identifiers]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [city]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [address_category]
 * @property {string} [area]
 * @property {string} [country]
 * @property {number} [latitude]
 * @property {string} [contact_person]
 * @property {string} [pincode]
 * @property {string} [address1]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [landmark]
 * @property {number} [longitude]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {string} [created_at]
 * @property {string} [state]
 */

/**
 * @typedef BagGST
 * @property {string} [gst_tag]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {string} [hsn_code]
 * @property {number} [value_of_good]
 * @property {number} [gst_fee]
 * @property {number} [brand_calculated_amount]
 * @property {string} [gstin_code]
 */

/**
 * @typedef OrderBrandName
 * @property {number} created_on
 * @property {string} brand_name
 * @property {number} id
 * @property {number} [modified_on]
 * @property {string} logo
 * @property {string} company
 */

/**
 * @typedef OrderBags
 * @property {BagConfigs} [bag_configs]
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {Object} [parent_promo_bags]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {string} [current_status]
 * @property {string} [entity_type]
 * @property {number} [line_number]
 * @property {boolean} [can_return]
 * @property {number} bag_id
 * @property {PlatformItem} [item]
 * @property {string} [display_name]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {OrderBagArticle} [article]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Prices} [prices]
 * @property {BagGST} [gst_details]
 * @property {boolean} [can_cancel]
 * @property {string} [seller_identifier]
 * @property {OrderBrandName} [brand]
 */

/**
 * @typedef TrackingList
 * @property {string} status
 * @property {string} text
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [time]
 */

/**
 * @typedef BagStateMapper
 * @property {string} state_type
 * @property {string} [app_state_name]
 * @property {string} journey_type
 * @property {string} display_name
 * @property {boolean} [notify_customer]
 * @property {string} [app_display_name]
 * @property {number} bs_id
 * @property {boolean} [app_facing]
 * @property {boolean} [is_active]
 * @property {string} name
 */

/**
 * @typedef BagStatusHistory
 * @property {string} created_at
 * @property {number} bag_id
 * @property {number} state_id
 * @property {number} store_id
 * @property {Object[]} [reasons]
 * @property {string} status
 * @property {boolean} [forward]
 * @property {number} [delivery_partner_id]
 * @property {string} [state_type]
 * @property {BagStateMapper} bag_state_mapper
 * @property {string} [updated_at]
 * @property {boolean} [display_name]
 * @property {boolean} [app_display_name]
 * @property {string} [delivery_awb_number]
 * @property {string} shipment_id
 * @property {number} bsh_id
 * @property {boolean} [kafka_sync]
 */

/**
 * @typedef FulfillingStore
 * @property {string} city
 * @property {Object} meta
 * @property {string} code
 * @property {string} address
 * @property {string} country
 * @property {string} contact_person
 * @property {string} id
 * @property {string} pincode
 * @property {string} phone
 * @property {string} fulfillment_channel
 * @property {string} store_name
 * @property {string} state
 */

/**
 * @typedef DPDetailsData
 * @property {string} [gst_tag]
 * @property {string} [track_url]
 * @property {string} [eway_bill_id]
 * @property {string} [country]
 * @property {string} [id]
 * @property {string} [pincode]
 * @property {string} [name]
 * @property {string} [awb_no]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {Object} [refund_details]
 * @property {string} order_type
 * @property {string} [priority_text]
 * @property {string} can_break
 * @property {string[]} [child_nodes]
 * @property {string} [secured_delivery_flag]
 * @property {ShipmentPayments} [payments]
 * @property {number} [total_items]
 * @property {string} [journey_type]
 * @property {Object[]} delivery_status
 * @property {OrderDetailsData} [order]
 * @property {string} lock_status
 * @property {boolean} is_invoiced
 * @property {Object} [bank_data]
 * @property {string} affiliate_shipment_id
 * @property {boolean} platform_logo
 * @property {Object} company
 * @property {Object} invoice
 * @property {Object} [escalation]
 * @property {string[]} [shipment_images]
 * @property {boolean} [go_green]
 * @property {Object[]} [forward_shipment_status]
 * @property {string} email_id
 * @property {ShipmentStatusData} [status]
 * @property {Object} current_shipment_status
 * @property {string} [mid]
 * @property {boolean} [can_return]
 * @property {Object} ordering_store
 * @property {string} [due_date]
 * @property {number} [shipment_quantity]
 * @property {boolean} is_fynd_coupon
 * @property {string} [shipment_status]
 * @property {boolean} [beneficiary_details]
 * @property {Object[]} [forward_tracking_list]
 * @property {string} [packaging_type]
 * @property {string} [vertical]
 * @property {number} [total_bags]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} credit_note_id
 * @property {Object} order_status
 * @property {string} [refund_text]
 * @property {OrderBags[]} [bags]
 * @property {string} [enable_dp_tracking]
 * @property {string} [is_pdsr]
 * @property {Object[]} items
 * @property {TrackingList[]} [tracking_list]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {Object} [delivery_slot]
 * @property {string} [operational_status]
 * @property {Prices} [prices]
 * @property {string} [order_created_time]
 * @property {string} tracking_url
 * @property {Object} [user_info]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [is_fynd_store]
 * @property {GSTDetailsData} [gst_details]
 * @property {boolean} is_packaging_order
 * @property {boolean} [can_cancel]
 * @property {DPDetailsData} [dp_details]
 * @property {string} [kirana_store_id]
 * @property {string} [pay_button]
 * @property {Object[]} [forward_order_status]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [picked_date]
 * @property {boolean} [enable_tracking]
 * @property {string} [user_agent]
 * @property {string} [replacement_details]
 * @property {Object} fyndstore_emp
 * @property {string} user_id
 * @property {boolean} is_not_fynd_source
 * @property {number} status_progress
 * @property {Object} [coupon]
 * @property {string} shipment_id
 * @property {string} [payment_mode]
 * @property {Object[]} [custom_meta]
 */

/**
 * @typedef OrderDict
 * @property {string} fynd_order_id
 * @property {number} shipment_count
 * @property {string} order_date
 */

/**
 * @typedef PlatformShipment
 * @property {string} [priority_text]
 * @property {ShipmentPayments} [payments]
 * @property {number} [total_items]
 * @property {string} [journey_type]
 * @property {OrderDetailsData} [order]
 * @property {string} [platform_logo]
 * @property {string[]} [shipment_images]
 * @property {ShipmentStatusData} [status]
 * @property {number} [shipment_quantity]
 * @property {string} [shipment_status]
 * @property {string} [packaging_type]
 * @property {string} [vertical]
 * @property {number} [total_bags]
 * @property {UserDetailsData} [delivery_details]
 * @property {OrderBags[]} [bags]
 * @property {string} [enable_dp_tracking]
 * @property {TrackingList[]} [tracking_list]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {Object} [delivery_slot]
 * @property {string} [operational_status]
 * @property {Prices} [prices]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {GSTDetailsData} [gst_details]
 * @property {DPDetailsData} [dp_details]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [picked_date]
 * @property {string} [user_agent]
 * @property {Object} [coupon]
 * @property {string} shipment_id
 * @property {string} [payment_mode]
 * @property {Object[]} [custom_meta]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {OrderDict} [order]
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 * @property {Object[]} [custom_meta]
 */

/**
 * @typedef SubLane
 * @property {number} [total_items]
 * @property {string} [text]
 * @property {Object[]} [actions]
 * @property {number} [index]
 * @property {string} [value]
 */

/**
 * @typedef SuperLane
 * @property {SubLane[]} [options]
 * @property {number} [total_items]
 * @property {string} text
 * @property {string} value
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
 * @property {Object} [meta]
 * @property {string} [order_id]
 * @property {number} [total_order_value]
 * @property {PlatformShipment[]} [shipments]
 * @property {number} [order_value]
 * @property {UserDataInfo} [user_info]
 * @property {string} [payment_mode]
 * @property {string} [order_created_time]
 * @property {PlatformChannel} [channel]
 * @property {PlatformBreakupValues[]} [breakup_values]
 */

/**
 * @typedef OrderListingResponse
 * @property {string} [message]
 * @property {number} [total_count]
 * @property {string} [lane]
 * @property {PlatformOrderItems[]} [items]
 * @property {Page} [page]
 * @property {boolean} [success]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
 */

/**
 * @typedef MetricsCount
 * @property {Options[]} [options]
 * @property {string} text
 * @property {string} key
 * @property {number} value
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [last_location_recieved_at]
 * @property {Object} [meta]
 * @property {string} [raw_status]
 * @property {string} [account_name]
 * @property {string} [status]
 * @property {string} [awb]
 * @property {string} [reason]
 * @property {string} [updated_at]
 * @property {string} [shipment_type]
 * @property {string} [updated_time]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
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
 * @property {string} [status]
 * @property {string} [report_type]
 * @property {string} [report_id]
 * @property {string} [s3_key]
 * @property {Object} [request_details]
 * @property {string} [report_requested_at]
 * @property {string} [display_name]
 * @property {string} [report_created_at]
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
 * @property {string} [type]
 * @property {string} [message]
 * @property {string} [value]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {string} [trace_id]
 * @property {Object[]} [data]
 * @property {boolean} [success]
 * @property {string} [identifier]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [store_code]
 * @property {string} [store_id]
 * @property {Object} [label]
 * @property {string} [invoice_status]
 * @property {string} [company_id]
 * @property {Object} [data]
 * @property {string} [store_name]
 * @property {boolean} do_invoice_label_generated
 * @property {Object} [invoice]
 * @property {string} batch_id
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
 * @property {string} [file_name]
 * @property {number} [size]
 * @property {string} [namespace]
 * @property {FileUploadResponse} [upload]
 * @property {string} [content_type]
 * @property {string} [file_path]
 * @property {string} [method]
 * @property {URL} [cdn]
 * @property {string} [operation]
 * @property {string[]} [tags]
 */

/**
 * @typedef bulkListingData
 * @property {string} [store_code]
 * @property {Object[]} [failed_shipments]
 * @property {Object[]} [successful_shipments]
 * @property {string} [id]
 * @property {number} [failed]
 * @property {string} [batch_id]
 * @property {number} [total]
 * @property {number} [store_id]
 * @property {string} [status]
 * @property {string} [file_name]
 * @property {string[]} [processing_shipments]
 * @property {number} [successful]
 * @property {string} [user_name]
 * @property {number} [company_id]
 * @property {string} [store_name]
 * @property {number} [processing]
 * @property {string} [excel_url]
 * @property {string} [user_id]
 * @property {string} [uploaded_on]
 */

/**
 * @typedef BulkListingPage
 * @property {string} [type]
 * @property {number} [total]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {number} [size]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef BulkListingResponse
 * @property {bulkListingData[]} [data]
 * @property {boolean} [success]
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 */

/**
 * @typedef DateRange
 * @property {string} [to_date]
 * @property {string} [from_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [sales_channels]
 * @property {string} [dp_name]
 * @property {string} [lane]
 * @property {string} [sales_channel_name]
 * @property {string} [dp_ids]
 * @property {DateRange} [date_range]
 * @property {string} [stores]
 * @property {string} [store_name]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {string} [status]
 * @property {string} [manifest_id]
 * @property {number} [company_id]
 * @property {string} [created_at]
 * @property {boolean} [is_active]
 * @property {ManifestFilter} [filters]
 * @property {string} [created_by]
 */

/**
 * @typedef ManifestPage
 * @property {number} [total]
 * @property {string} [type]
 * @property {boolean} [has_next]
 * @property {string} [current]
 * @property {string} [size]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef GeneratedManifestResponse
 * @property {GeneratedManifestItem[]} [items]
 * @property {ManifestPage} [page]
 */

/**
 * @typedef ManifestDetailItem
 * @property {string} [order_id]
 * @property {string} [awb]
 * @property {string} [invoice_id]
 * @property {number} [item_qty]
 * @property {string} [shipment_id]
 */

/**
 * @typedef ManifestDetailTotalShipmentPricesCount
 * @property {number} [shipment_count]
 * @property {number} [total_price]
 */

/**
 * @typedef ManifestDetailMeta
 * @property {ManifestDetailTotalShipmentPricesCount} [total_shipment_prices_count]
 * @property {ManifestFilter} [filters]
 */

/**
 * @typedef ManifestDetail
 * @property {ManifestDetailMeta} [meta]
 * @property {string} [status]
 * @property {string} [manifest_id]
 * @property {number} [uid]
 * @property {number} [id]
 * @property {number} [company_id]
 * @property {number} [user_id]
 * @property {string} [created_at]
 * @property {boolean} [is_active]
 * @property {ManifestFilter} [filters]
 * @property {string} [created_by]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {ManifestDetailItem[]} [items]
 * @property {ManifestPage} [page]
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
 * @property {string} [display_name]
 * @property {string[]} [qc_type]
 * @property {number} [id]
 * @property {QuestionSet[]} [question_set]
 */

/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {boolean} [success]
 * @property {Reason[]} [reasons]
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
 * @property {number} [processing_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [total_shipments_count]
 * @property {string} [company_id]
 * @property {number} [failed_shipments_count]
 * @property {number} [successful_shipments_count]
 * @property {string} [batch_id]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [message]
 * @property {string[]} [error]
 * @property {boolean} [status]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [user_id]
 * @property {string} [uploaded_by]
 * @property {string} [success]
 * @property {string[]} [failed_records]
 * @property {string} [uploaded_on]
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 */

/**
 * @typedef StoreAddress
 * @property {string} city
 * @property {string} contact_person
 * @property {number} pincode
 * @property {string} phone
 * @property {string} state
 * @property {string} country
 * @property {number} longitude
 * @property {string} updated_at
 * @property {string} country_code
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} [version]
 * @property {string} address_type
 * @property {string} address_category
 * @property {number} latitude
 * @property {string} [area]
 * @property {string} address1
 * @property {string} [email]
 * @property {string} created_at
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [username]
 * @property {string} [user]
 * @property {boolean} enabled
 * @property {string} [password]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef Document
 * @property {boolean} verified
 * @property {string} ds_type
 * @property {string} [url]
 * @property {string} value
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
 * @typedef StoreMeta
 * @property {StoreGstCredentials} gst_credentials
 * @property {string[]} [notification_emails]
 * @property {StoreDocuments} [documents]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {string} stage
 * @property {Object} [ewaybill_portal_details]
 * @property {string} display_name
 * @property {Object[]} [timing]
 * @property {Object} [additional_contact_details]
 * @property {string} [gst_number]
 * @property {Object} [product_return_config]
 */

/**
 * @typedef Store
 * @property {string} city
 * @property {string} [order_integration_id]
 * @property {string} [store_active_from]
 * @property {string} contact_person
 * @property {string} pincode
 * @property {number} phone
 * @property {string} fulfillment_channel
 * @property {string} store_email
 * @property {number} [alohomora_user_id]
 * @property {string} login_username
 * @property {string} location_type
 * @property {boolean} [is_active]
 * @property {string} state
 * @property {StoreAddress} [store_address_json]
 * @property {string[]} [brand_store_tags]
 * @property {string} country
 * @property {number} longitude
 * @property {string} [updated_at]
 * @property {string} [vat_no]
 * @property {string} name
 * @property {string} [address2]
 * @property {string} [code]
 * @property {number} company_id
 * @property {number} [parent_store_id]
 * @property {string} [mall_name]
 * @property {number} [packaging_material_count]
 * @property {string} s_id
 * @property {Object} [brand_id]
 * @property {boolean} [is_enabled_for_recon]
 * @property {StoreMeta} meta
 * @property {boolean} [is_archived]
 * @property {number} latitude
 * @property {string} address1
 * @property {string} created_at
 * @property {string} [mall_area]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [order_item_id]
 * @property {string} [channel_shipment_id]
 * @property {string} [channel_order_id]
 * @property {number} [loyalty_discount]
 * @property {string} [coupon_code]
 * @property {number} [size_level_total_qty]
 * @property {boolean} [is_priority]
 * @property {string} [due_date]
 * @property {string} [box_type]
 * @property {number} [employee_discount]
 * @property {number} [quantity]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {number} [loyalty_discount]
 * @property {string} affiliate_order_id
 * @property {string} affiliate_bag_id
 * @property {number} [employee_discount]
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef PDFLinks
 * @property {string} [invoice_a4]
 * @property {string} [label_a4]
 * @property {string} label_type
 * @property {string} invoice_type
 * @property {string} [invoice_pos]
 * @property {string} [credit_note_url]
 * @property {string} [label]
 * @property {string} [label_a6]
 * @property {string} [label_pos]
 * @property {string} [invoice_a6]
 * @property {string} [po_invoice]
 * @property {string} [b2b]
 * @property {string} [invoice]
 */

/**
 * @typedef BuyerDetails
 * @property {string} city
 * @property {string} address
 * @property {number} pincode
 * @property {string} [ajio_site_id]
 * @property {string} name
 * @property {string} state
 * @property {string} gstin
 */

/**
 * @typedef LockData
 * @property {boolean} [mto]
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef EInvoice
 * @property {string} [signed_qr_code]
 * @property {string} [irn]
 * @property {string} [signed_invoice]
 * @property {string} [error_message]
 * @property {string} [error_code]
 * @property {number} [acknowledge_no]
 * @property {string} [acknowledge_date]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */

/**
 * @typedef ShipmentMeta
 * @property {string} [return_awb_number]
 * @property {string} [store_invoice_updated_date]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [order_type]
 * @property {string} [dp_sort_key]
 * @property {Object} [bag_weight]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [return_affiliate_shipment_id]
 * @property {number} [return_store_node]
 * @property {LockData} [lock_data]
 * @property {number} weight
 * @property {boolean} same_store_available
 * @property {Object} [ewaybill_info]
 * @property {Object} [external]
 * @property {Object} [dp_options]
 * @property {string} [due_date]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [box_type]
 * @property {DebugInfo} [debug_info]
 * @property {string} [awb_number]
 * @property {Object} [return_details]
 * @property {string} [fulfilment_priority_text]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [marketplace_store_id]
 * @property {string} [dp_name]
 * @property {number} [shipment_weight]
 * @property {string} [dp_id]
 * @property {string} [packaging_name]
 * @property {Formatted} [formatted]
 * @property {string} [po_number]
 * @property {Object} [b2c_buyer_details]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [forward_affiliate_shipment_id]
 */

/**
 * @typedef AffiliateDetails
 * @property {PDFLinks} [pdf_links]
 * @property {string} [company_affiliate_tag]
 * @property {string} affiliate_order_id
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [affiliate_id]
 * @property {string} affiliate_store_id
 * @property {string} affiliate_bag_id
 * @property {string} [ad_id]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_shipment_id
 */

/**
 * @typedef Attributes
 * @property {string} [primary_material]
 * @property {string} [brand_name]
 * @property {string} [essential]
 * @property {string} [primary_color_hex]
 * @property {string[]} [gender]
 * @property {string} [marketer_name]
 * @property {string} [primary_color]
 * @property {string} [name]
 * @property {string} [marketer_address]
 */

/**
 * @typedef Item
 * @property {string[]} [l2_category]
 * @property {string} [branch_url]
 * @property {number} [l3_category]
 * @property {number} [department_id]
 * @property {boolean} [can_return]
 * @property {string} slug_key
 * @property {string} name
 * @property {string} [last_updated_at]
 * @property {number} item_id
 * @property {string} [color]
 * @property {string} [l3_category_name]
 * @property {number} [l1_category_id]
 * @property {string} [code]
 * @property {string[]} image
 * @property {string} [gender]
 * @property {number} brand_id
 * @property {boolean} [can_cancel]
 * @property {Object} [meta]
 * @property {string[]} [l1_category]
 * @property {Attributes} attributes
 * @property {string} size
 * @property {string} brand
 * @property {string} [webstore_product_url]
 * @property {number} [l2_category_id]
 */

/**
 * @typedef Dimensions
 * @property {number} [width]
 * @property {string} [unit]
 * @property {number} [length]
 * @property {number} [height]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ReturnConfig
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */

/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {boolean} [is_default]
 * @property {string} [unit]
 */

/**
 * @typedef Article
 * @property {Identifier} identifiers
 * @property {string} [code]
 * @property {Object} [raw_meta]
 * @property {Object} [esp_modified]
 * @property {boolean} [is_set]
 * @property {string} seller_identifier
 * @property {Object} [child_details]
 * @property {string} size
 * @property {Object} [a_set]
 * @property {string} _id
 * @property {Dimensions} [dimensions]
 * @property {ReturnConfig} [return_config]
 * @property {string} uid
 * @property {Weight} [weight]
 */

/**
 * @typedef BagGSTDetails
 * @property {string} cgst_gst_fee
 * @property {string} gst_tag
 * @property {boolean} [is_default_hsn_code]
 * @property {number} gst_tax_percentage
 * @property {string} hsn_code_id
 * @property {number} sgst_tax_percentage
 * @property {number} igst_tax_percentage
 * @property {string} hsn_code
 * @property {number} value_of_good
 * @property {number} gst_fee
 * @property {number} tax_collected_at_source
 * @property {string} igst_gst_fee
 * @property {number} brand_calculated_amount
 * @property {string} sgst_gst_fee
 * @property {number} cgst_tax_percentage
 * @property {string} [gstin_code]
 */

/**
 * @typedef B2BPODetails
 * @property {number} [item_base_price]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_line_amount]
 * @property {string} [docker_number]
 * @property {number} [total_gst_percentage]
 * @property {number} [po_tax_amount]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Brand
 * @property {number} [created_on]
 * @property {number} [credit_note_expiry_days]
 * @property {string} brand_name
 * @property {string} [pickup_location]
 * @property {string} [start_date]
 * @property {string} [invoice_prefix]
 * @property {string} [script_last_ran]
 * @property {number} [modified_on]
 * @property {string} [logo]
 * @property {boolean} [credit_note_allowed]
 * @property {number} brand_id
 * @property {boolean} [is_virtual_invoice]
 * @property {string} company
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {Object} [qc_required]
 * @property {Dates} [dates]
 * @property {ArticleDetails} [article_details]
 * @property {string} journey_type
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {Object} [parent_promo_bags]
 * @property {Object[]} [applied_promos]
 * @property {BagStatusHistory} current_status
 * @property {BagReturnableCancelableStatus} status
 * @property {Object[]} [reasons]
 * @property {string} [entity_type]
 * @property {number} [line_number]
 * @property {Store} [ordering_store]
 * @property {number} [bag_update_time]
 * @property {number} [no_of_bags_order]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {AffiliateDetails} [affiliate_details]
 * @property {Item} item
 * @property {number} b_id
 * @property {boolean} [restore_coupon]
 * @property {string} [display_name]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {Article} article
 * @property {BagStatusHistory} [bag_status_history]
 * @property {string} [operational_status]
 * @property {Prices} prices
 * @property {BagGSTDetails} gst_details
 * @property {BagMeta} [meta]
 * @property {string[]} [tags]
 * @property {Object} [restore_promos]
 * @property {string} [seller_identifier]
 * @property {Brand} brand
 * @property {number[]} [original_bag_list]
 * @property {BagStatusHistory} current_operational_status
 * @property {BagStatusHistory[]} bag_status
 * @property {string} [shipment_id]
 * @property {string} [b_type]
 * @property {string} [order_integration_id]
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */

/**
 * @typedef Page1
 * @property {boolean} has_next
 * @property {number} current
 * @property {number} size
 * @property {number} item_total
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
 * @property {string} [affiliate_bag_id]
 * @property {number[]} [reason_ids]
 * @property {string} [set_id]
 * @property {string} [affiliate_id]
 * @property {number} [bag_id]
 * @property {string} [item_id]
 * @property {string} [fynd_order_id]
 * @property {string} [mongo_article_id]
 * @property {number} store_id
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} reason_text
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_id]
 * @property {string} [id]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action
 * @property {string} entity_type
 * @property {string} action_type
 * @property {Entities[]} entities
 */

/**
 * @typedef Bags
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 * @property {string} [affiliate_bag_id]
 * @property {boolean} [is_locked]
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef CheckResponse
 * @property {boolean} [is_bag_locked]
 * @property {Bags[]} [bags]
 * @property {string} [affiliate_id]
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [lock_status]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success]
 * @property {CheckResponse[]} [check_response]
 * @property {string} [message]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [logo_url]
 * @property {number} [company_id]
 * @property {string} [created_at]
 * @property {string} [platform_id]
 * @property {string} [from_datetime]
 * @property {string} [description]
 * @property {string} [title]
 * @property {string} [platform_name]
 * @property {number} id
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
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */

/**
 * @typedef Products
 * @property {number} [line_number]
 * @property {number} [quantity]
 * @property {string} [identifier]
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
 * @property {string} identifier
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [status]
 * @property {string} [exclude_bags_next_state]
 * @property {ShipmentsRequest[]} [shipments]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [task]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [force_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [stack_trace]
 * @property {string} [exception]
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {string} [identifier]
 * @property {number} [status]
 * @property {string} [message]
 * @property {Object} [final_state]
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
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
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
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryOrderConfig} [order]
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
 * @property {string} secret
 * @property {string} updated_at
 * @property {string} [description]
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} token
 * @property {string} id
 * @property {string} owner
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */

/**
 * @typedef Affiliate
 * @property {string} id
 * @property {string} token
 * @property {AffiliateConfig} [config]
 */

/**
 * @typedef OrderConfig
 * @property {string} [bag_end_state]
 * @property {string} [store_lookup]
 * @property {boolean} [create_user]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [article_lookup]
 * @property {Affiliate} affiliate
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [label]
 * @property {string} [invoice]
 */

/**
 * @typedef AffiliateBag
 * @property {string} fynd_store_id
 * @property {number} transfer_price
 * @property {string} _id
 * @property {Object} identifier
 * @property {number} item_id
 * @property {string} item_size
 * @property {number} quantity
 * @property {number} delivery_charge
 * @property {string} affiliate_store_id
 * @property {string} sku
 * @property {string} modified_on
 * @property {string} seller_identifier
 * @property {number} unit_price
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} price_marked
 * @property {number} amount_paid
 * @property {number} avl_qty
 * @property {number} company_id
 * @property {number} discount
 * @property {number} price_effective
 * @property {number} store_id
 * @property {Object} affiliate_meta
 * @property {string} hsn_code_id
 */

/**
 * @typedef OrderUser
 * @property {string} first_name
 * @property {string} email
 * @property {string} last_name
 * @property {number} mobile
 * @property {string} state
 * @property {string} [address2]
 * @property {string} city
 * @property {string} country
 * @property {number} phone
 * @property {string} [address1]
 * @property {string} pincode
 */

/**
 * @typedef OrderPriority
 * @property {string} [fulfilment_priority_text]
 * @property {number} [fulfilment_priority]
 * @property {string} [affiliate_priority_code]
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef ArticleDetails1
 * @property {Object} category
 * @property {number} brand_id
 * @property {Object} attributes
 * @property {Object} dimension
 * @property {string} _id
 * @property {number} quantity
 * @property {Object} weight
 */

/**
 * @typedef ShipmentDetails
 * @property {ArticleDetails1[]} articles
 * @property {number} [dp_id]
 * @property {number} shipments
 * @property {number} fulfillment_id
 * @property {Object} [meta]
 * @property {string} [box_type]
 * @property {string} affiliate_shipment_id
 */

/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentConfig
 * @property {string} source
 * @property {string} to_pincode
 * @property {string} action
 * @property {ShipmentDetails[]} shipment
 * @property {string} payment_mode
 * @property {string} identifier
 * @property {LocationDetails} [location_details]
 * @property {string} journey
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderInfo
 * @property {number} delivery_charges
 * @property {AffiliateBag[]} bags
 * @property {number} order_value
 * @property {number} discount
 * @property {OrderUser} billing_address
 * @property {OrderUser} shipping_address
 * @property {Object} [payment]
 * @property {OrderPriority} [order_priority]
 * @property {number} cod_charges
 * @property {string} [coupon]
 * @property {UserData} user
 * @property {string} payment_mode
 * @property {Object} items
 * @property {string} [affiliate_order_id]
 * @property {ShipmentData} [shipment]
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
 * @property {number} id
 * @property {string} slug
 * @property {string} description
 * @property {string} display_text
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} type
 * @property {string} [l2_detail]
 * @property {string} [l3_detail]
 * @property {number} [bag_id]
 * @property {string} user
 * @property {string} createdat
 * @property {string} [ticket_url]
 * @property {string} [ticket_id]
 * @property {string} [l1_detail]
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
 * @property {string} customer_name
 * @property {number} phone_number
 * @property {string} country_code
 * @property {string} order_id
 * @property {string} brand_name
 * @property {number} amount_paid
 * @property {string} payment_mode
 * @property {number} shipment_id
 * @property {string} message
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
 */

/**
 * @typedef Meta
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */

/**
 * @typedef ShipmentDetail
 * @property {number[]} [bag_list]
 * @property {string} [remarks]
 * @property {Meta} meta
 * @property {number} id
 * @property {string} [shipment_id]
 * @property {string} [status]
 */

/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */

/**
 * @typedef OrderStatusData
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {string[]} [errors]
 * @property {OrderDetails} order_details
 */

/**
 * @typedef OrderStatusResult
 * @property {string} success
 * @property {OrderStatusData[]} [result]
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {string} qc_required
 * @property {string[]} [shipment_ids]
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
 * @property {Object[]} [breakup]
 * @property {Object} amount
 * @property {string} name
 * @property {number} rate
 */

/**
 * @typedef Charge
 * @property {string} type
 * @property {string} name
 * @property {string} [code]
 * @property {Object} amount
 * @property {Tax} [tax]
 */

/**
 * @typedef PaymentMethod
 * @property {string} name
 * @property {string} collect_by
 * @property {Object} [transaction_data]
 * @property {number} amount
 * @property {string} mode
 * @property {Object} [meta]
 * @property {string} refund_by
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef LineItem
 * @property {Charge[]} charges
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {string} [external_line_id]
 * @property {string} [custom_messasge]
 * @property {string} seller_identifier
 */

/**
 * @typedef ProcessingDates
 * @property {string} [pack_by_date]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [confirm_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_by_date]
 * @property {string} [dispatch_after_date]
 */

/**
 * @typedef Shipment
 * @property {LineItem[]} line_items
 * @property {number} location_id
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {number} [external_shipment_id]
 * @property {ProcessingDates} [processing_dates]
 */

/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [external_customer_code]
 * @property {string} [title]
 * @property {string} [landmark]
 * @property {string} state
 * @property {string} [state_code]
 * @property {string} address1
 * @property {string} [floor_no]
 * @property {string} first_name
 * @property {string} [address_type]
 * @property {string} [shipping_type]
 * @property {string} [middle_name]
 * @property {Object} [geo_location]
 * @property {string} [country_code]
 * @property {string} [gender]
 * @property {string} [address2]
 * @property {string} country
 * @property {Object[]} [slot]
 * @property {string} [house_no]
 * @property {string} [alternate_mobile_number]
 * @property {string} primary_mobile_number
 * @property {string} [alternate_email]
 * @property {string} [last_name]
 * @property {string} primary_email
 * @property {string} city
 * @property {string} [customer_code]
 * @property {string} pincode
 */

/**
 * @typedef BillingInfo
 * @property {string} [external_customer_code]
 * @property {string} [title]
 * @property {string} state
 * @property {string} [state_code]
 * @property {string} address1
 * @property {string} [floor_no]
 * @property {string} first_name
 * @property {string} [middle_name]
 * @property {string} [country_code]
 * @property {string} [gender]
 * @property {string} [address2]
 * @property {string} country
 * @property {string} [house_no]
 * @property {string} [alternate_mobile_number]
 * @property {string} primary_mobile_number
 * @property {string} [alternate_email]
 * @property {string} [last_name]
 * @property {string} primary_email
 * @property {string} city
 * @property {string} [customer_code]
 * @property {string} pincode
 */

/**
 * @typedef CreateOrderAPI
 * @property {string} [external_creation_date]
 * @property {Charge[]} charges
 * @property {string} [external_order_id]
 * @property {PaymentInfo} payment_info
 * @property {Shipment[]} shipments
 * @property {TaxInfo} [tax_info]
 * @property {Object} [meta]
 * @property {ShippingInfo} shipping_info
 * @property {Object} [currency_info]
 * @property {BillingInfo} billing_info
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [stack_trace]
 * @property {string} [exception]
 * @property {string} [code]
 * @property {Object} [info]
 * @property {string} [meta]
 * @property {string} [request_id]
 * @property {number} status
 * @property {string} message
 */

/**
 * @typedef PaymentMethods
 * @property {string} [collect_by]
 * @property {string} [mode]
 * @property {string} [refund_by]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef CreateChannelConfig
 * @property {Object} [logo_url]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {boolean} [location_reassignment]
 * @property {DpConfiguration} [dp_configuration]
 * @property {string[]} [lock_states]
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
 * @property {boolean} [is_inserted]
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_upserted]
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
 * @property {string} start_date
 * @property {string} end_date
 * @property {FyndOrderIdList[]} [order_details]
 * @property {number} mobile
 */

/**
 * @typedef GetSearchWordsData
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {string} [uid]
 * @property {Object} [result]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
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
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {SearchKeywordResult} result
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {string} [uid]
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AutocompletePageAction
 * @property {Object} [query]
 * @property {string} [url]
 * @property {string} [type]
 * @property {Object} [params]
 */

/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */

/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef AutocompleteResult
 * @property {string} [display]
 * @property {Object} [_custom_json]
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {AutocompleteResult[]} [results]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {Object[]} [results]
 */

/**
 * @typedef ProductBundleItem
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} max_quantity
 * @property {boolean} [auto_select]
 * @property {number} product_uid
 * @property {number} min_quantity
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {string} [created_on]
 * @property {string} name
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {string} choice
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [id]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleRequest
 * @property {string} [created_on]
 * @property {string} name
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {string} choice
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {number} [company_id]
 * @property {Object} [created_by]
 */

/**
 * @typedef LimitedProductData
 * @property {Object} [identifier]
 * @property {number} [quantity]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [short_description]
 * @property {string} [item_code]
 * @property {string[]} [sizes]
 * @property {number} [uid]
 * @property {string} [country_of_origin]
 * @property {string} [slug]
 * @property {string[]} [images]
 * @property {Object} [price]
 */

/**
 * @typedef Size
 * @property {string} [display]
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 * @property {string} [value]
 */

/**
 * @typedef Price
 * @property {string} [currency]
 * @property {number} [max_effective]
 * @property {number} [max_marked]
 * @property {number} [min_marked]
 * @property {number} [min_effective]
 */

/**
 * @typedef GetProducts
 * @property {LimitedProductData} [product_details]
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {Size[]} [sizes]
 * @property {number} [max_quantity]
 * @property {boolean} [auto_select]
 * @property {Price} [price]
 * @property {number} [product_uid]
 * @property {number} [min_quantity]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string} [name]
 * @property {string[]} [page_visibility]
 * @property {string} [choice]
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {GetProducts[]} [products]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} name
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {string} choice
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {number} [company_id]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} [image]
 * @property {string} [description]
 * @property {Guide} [guide]
 * @property {string} name
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [tag]
 * @property {number} [brand_id]
 * @property {Object} [modified_by]
 * @property {string} [subtitle]
 * @property {string} title
 * @property {boolean} [active]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [id]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {Object} [guide]
 * @property {Object} [modified_by]
 * @property {number} [brand_id]
 * @property {string} [tag]
 * @property {string} [title]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {boolean} [active]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [id]
 */

/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef MOQData
 * @property {number} [increment_unit]
 * @property {number} [minimum]
 * @property {number} [maximum]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {SEOData} [seo]
 * @property {MOQData} [moq]
 * @property {Object} [alt_text]
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [increment_unit]
 * @property {number} [minimum]
 * @property {number} [maximum]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {ApplicationItemSEO} [seo]
 * @property {MetaFields[]} [_custom_meta]
 * @property {Object} [_custom_json]
 * @property {ApplicationItemMOQ} [moq]
 * @property {Object} [alt_text]
 */

/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} data
 * @property {Object[]} [values]
 */

/**
 * @typedef PageResponseType
 * @property {boolean} has_next
 * @property {number} next
 * @property {number} total_count
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
 * @property {string} [unit]
 * @property {string} name
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {boolean} is_active
 * @property {string} [key]
 * @property {string} display_type
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string} app_id
 * @property {string[]} [template_slugs]
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} [name]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {boolean} is_default
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} app_id
 * @property {string} [name]
 * @property {string} default_key
 * @property {number} priority
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
 * @property {boolean} is_default
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
 * @property {string} [display]
 * @property {string[]} [filter_types]
 * @property {string} [key]
 * @property {Object[]} [units]
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
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {number} priority
 * @property {string} [logo]
 * @property {ProductSize} [size]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {boolean} is_active
 * @property {string} key
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} name
 * @property {number} priority
 * @property {string} [logo]
 * @property {ProductSize} size
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} display_type
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
 * @property {number} [end]
 * @property {number} [start]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [condition]
 * @property {Object[]} [map_values]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [sort]
 * @property {Object} [map]
 * @property {string} [value]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} type
 * @property {string} [name]
 * @property {number} priority
 * @property {string} [logo]
 * @property {string} [display_name]
 * @property {boolean} is_active
 * @property {string} key
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {number} priority
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
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
 * @property {string} app_id
 * @property {string} config_type
 * @property {string} [type]
 * @property {ConfigurationProduct} [product]
 * @property {string} [created_on]
 * @property {ConfigurationListing} [listing]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} [config_id]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef AppConfiguration
 * @property {string} app_id
 * @property {string} config_type
 * @property {string} [type]
 * @property {ConfigurationProduct} [product]
 * @property {string} [created_on]
 * @property {ConfigurationListing} [listing]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} [config_id]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} app_id
 * @property {string} config_type
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} [id]
 * @property {string} [config_id]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} display
 * @property {string} name
 * @property {string} [logo]
 * @property {string[]} [operators]
 * @property {string} [kind]
 */

/**
 * @typedef ProductFiltersValue
 * @property {string} display
 * @property {number} [selected_min]
 * @property {number} [max]
 * @property {string} [display_format]
 * @property {number} [count]
 * @property {string} [query_format]
 * @property {number} [min]
 * @property {string} [currency_symbol]
 * @property {Object} value
 * @property {string} [currency_code]
 * @property {boolean} is_selected
 * @property {number} [selected_max]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */

/**
 * @typedef ProductSortOn
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [value]
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {Object} operators
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef Media1
 * @property {string} url
 * @property {string} [type]
 * @property {Object} [meta]
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {Object[]} value
 * @property {string} op
 */

/**
 * @typedef BannerImage
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {string} [type]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {number} [priority]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {Object} [cron]
 * @property {Media1} [logo]
 * @property {string} [uid]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_schedule]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {string[]} [tag]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 * @property {Action} [action]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {GetCollectionDetailNest[]} [items]
 * @property {CollectionListingFilter} [filters]
 * @property {Page} [page]
 */

/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef UserInfo
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [email]
 * @property {string} [user_id]
 */

/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [end]
 * @property {NextSchedule[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {string} [start]
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */

/**
 * @typedef CreateCollection
 * @property {string} type
 * @property {SeoDetail} [seo]
 * @property {string} name
 * @property {boolean} [allow_sort]
 * @property {UserInfo} [modified_by]
 * @property {boolean} [allow_facets]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {number} [priority]
 * @property {string} app_id
 * @property {Object} [_locale_language]
 * @property {string[]} [tags]
 * @property {UserInfo} [created_by]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} logo
 * @property {string} slug
 * @property {Object} [meta]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionBanner} banners
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string} [sort_on]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionBadge} [badge]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {string} [type]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {number} [priority]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {Object} [cron]
 * @property {BannerImage} [logo]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_schedule]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {string} [sort_on]
 * @property {string[]} [tag]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {string} [app_id]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {number} [priority]
 * @property {Media1} [logo]
 * @property {string[]} [tag]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [cron]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {Object} [badge]
 * @property {boolean} [is_active]
 * @property {Object} [_schedule]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef UpdateCollection
 * @property {string} [type]
 * @property {SeoDetail} [seo]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {UserInfo} [modified_by]
 * @property {boolean} [allow_facets]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {number} [priority]
 * @property {Object} [_locale_language]
 * @property {string[]} [tags]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} [logo]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionBanner} [banners]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string} [sort_on]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionBadge} [badge]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [value]
 * @property {string} [key]
 * @property {string} [type]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */

/**
 * @typedef ProductBrand
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Media1} [logo]
 */

/**
 * @typedef Price1
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */

/**
 * @typedef ProductListingDetail
 * @property {number} [rating_count]
 * @property {string} [image_nature]
 * @property {string} [type]
 * @property {string} [name]
 * @property {Object} [teaser_tag]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Media1[]} [medias]
 * @property {string} [item_code]
 * @property {number} [rating]
 * @property {ProductBrand} [brand]
 * @property {string} [discount]
 * @property {ProductListingPrice} [price]
 * @property {string[]} [tryouts]
 * @property {boolean} [has_variant]
 * @property {string} [item_type]
 * @property {Object} [attributes]
 * @property {string} [product_online_date]
 * @property {number} [uid]
 * @property {string} slug
 * @property {Object} [promo_meta]
 * @property {string} [color]
 * @property {string} [description]
 * @property {string} [short_description]
 * @property {string[]} [highlights]
 * @property {boolean} [sellable]
 * @property {string[]} [similars]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */

/**
 * @typedef CollectionItemRequest
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 */

/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [sellable_count]
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [article_freshness]
 * @property {number} [total_articles]
 * @property {string} [name]
 * @property {number} [available_sizes]
 * @property {number} [available_articles]
 * @property {number} [total_sizes]
 */

/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightItem} [item]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef CrossSellingData
 * @property {number} [articles]
 * @property {number} [products]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
 */

/**
 * @typedef OptInPostRequest
 * @property {number[]} [brand_ids]
 * @property {string} opt_level
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 * @property {boolean} [enabled]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanyOptIn
 * @property {number[]} brand_ids
 * @property {string} opt_level
 * @property {number} created_on
 * @property {string} platform
 * @property {number[]} store_ids
 * @property {Object} [modified_by]
 * @property {boolean} enabled
 * @property {number} modified_on
 * @property {number} company_id
 * @property {Object} [created_by]
 */

/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [company_type]
 * @property {string} [business_type]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {number} [brand_id]
 * @property {number} [company_id]
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
 * @property {string} [company]
 * @property {number} [store]
 * @property {number} [brand]
 */

/**
 * @typedef StoreDetail
 * @property {number} [company_id]
 * @property {Object[]} [additional_contacts]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {string} [store_type]
 * @property {string} [display_name]
 * @property {Object} [address]
 * @property {number} [uid]
 * @property {Object} [manager]
 * @property {string} [modified_on]
 * @property {Object[]} [documents]
 * @property {Object} [timing]
 * @property {string} [store_code]
 */

/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {boolean} indexing
 * @property {string[]} [depends_on]
 * @property {number} [priority]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
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
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef AttributeMaster
 * @property {string[]} [allowed_values]
 * @property {string} type
 * @property {boolean} [mandatory]
 * @property {string} [format]
 * @property {boolean} [multi]
 * @property {AttributeSchemaRange} [range]
 */

/**
 * @typedef GenderDetail
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [description]
 * @property {string} [name]
 * @property {AttributeMasterDetails} [details]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [logo]
 * @property {string[]} [departments]
 * @property {boolean} [is_nested]
 * @property {string} [slug]
 * @property {AttributeMasterMeta} [meta]
 * @property {AttributeMaster} [schema]
 * @property {string} [id]
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
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {Object} [errors]
 */

/**
 * @typedef UserSerializer
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [_id]
 */

/**
 * @typedef GetDepartment
 * @property {UserSerializer} [created_by]
 * @property {string} [item_type]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {number} [page_no]
 * @property {number} [priority_order]
 * @property {string[]} [synonyms]
 * @property {string} [logo]
 * @property {UserSerializer} [modified_by]
 * @property {number} [uid]
 * @property {string} [search]
 * @property {string} [slug]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {number} [page_size]
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
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {Object} [errors]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [_cls]
 * @property {string} name
 * @property {number} priority_order
 * @property {string[]} [synonyms]
 * @property {string} logo
 * @property {Object} [platforms]
 * @property {number} [uid]
 * @property {string[]} [tags]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
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
 * @property {string} [verified_on]
 * @property {Object} [_id]
 * @property {Object} [_cls]
 * @property {string} created_on
 * @property {Object} name
 * @property {number} priority_order
 * @property {Object[]} [synonyms]
 * @property {string} logo
 * @property {UserDetail} [modified_by]
 * @property {number} [uid]
 * @property {UserDetail} [verified_by]
 * @property {Object} [slug]
 * @property {string} modified_on
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {UserDetail} [created_by]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string[]} [attributes]
 * @property {string} [created_on]
 * @property {boolean} is_expirable
 * @property {boolean} [is_archived]
 * @property {string} [logo]
 * @property {string} [tag]
 * @property {Object} [modified_by]
 * @property {string[]} [departments]
 * @property {string} slug
 * @property {string} [modified_on]
 * @property {string[]} [categories]
 * @property {boolean} is_physical
 * @property {Object} [created_by]
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Properties
 * @property {Object} [name]
 * @property {Object} [variants]
 * @property {Object} [country_of_origin]
 * @property {Object} [teaser_tag]
 * @property {Object} [is_active]
 * @property {Object} [multi_size]
 * @property {Object} [trader_type]
 * @property {Object} [item_code]
 * @property {Object} [is_dependent]
 * @property {Object} [command]
 * @property {Object} [product_group_tag]
 * @property {Object} [tags]
 * @property {Object} [trader]
 * @property {Object} [custom_order]
 * @property {Object} [item_type]
 * @property {Object} [media]
 * @property {Object} [sizes]
 * @property {Object} [no_of_boxes]
 * @property {Object} [slug]
 * @property {Object} [hsn_code]
 * @property {Object} [size_guide]
 * @property {Object} [description]
 * @property {Object} [brand_uid]
 * @property {Object} [currency]
 * @property {Object} [short_description]
 * @property {Object} [category_slug]
 * @property {Object} [product_publish]
 * @property {Object} [highlights]
 * @property {Object} [return_config]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [type]
 * @property {string} [description]
 * @property {Properties} [properties]
 * @property {Object} [definitions]
 * @property {string} [title]
 * @property {string[]} [required]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string[]} [attributes]
 * @property {boolean} is_expirable
 * @property {boolean} [is_archived]
 * @property {string} [logo]
 * @property {string} [tag]
 * @property {string[]} [departments]
 * @property {string} slug
 * @property {string[]} [categories]
 * @property {boolean} is_physical
 * @property {string} [id]
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
 * @property {string} [type]
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {string} [url]
 * @property {Object} [template_tags]
 * @property {string} [task_id]
 * @property {string} [completed_on]
 * @property {string} [id]
 * @property {number} [seller_id]
 * @property {string} [status]
 * @property {ProductDownloadItemsData} [data]
 * @property {VerifiedBy} [created_by]
 * @property {string} [trigger_on]
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
 * @typedef Media2
 * @property {string} portrait
 * @property {string} landscape
 * @property {string} logo
 */

/**
 * @typedef CategoryMappingValues
 * @property {string} name
 * @property {number} [catalog_id]
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [google]
 */

/**
 * @typedef Hierarchy
 * @property {number} l1
 * @property {number} l2
 * @property {number} department
 */

/**
 * @typedef Category
 * @property {Object} [created_by]
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {string} name
 * @property {Media2} [media]
 * @property {number} [priority]
 * @property {Object} [modified_by]
 * @property {number} [uid]
 * @property {number[]} departments
 * @property {string} [slug]
 * @property {string} [modified_on]
 * @property {string[]} [synonyms]
 * @property {CategoryMapping} [marketplaces]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} [id]
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CategoryRequestBody
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {boolean} is_active
 * @property {string} name
 * @property {Media2} [media]
 * @property {number} [priority]
 * @property {number[]} departments
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {CategoryMapping} [marketplaces]
 * @property {Hierarchy[]} [hierarchy]
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
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Image
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Logo
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */

/**
 * @typedef Product
 * @property {Object} [variant_group]
 * @property {string} [image_nature]
 * @property {string} [primary_color]
 * @property {string} [name]
 * @property {Object} [variants]
 * @property {string} [country_of_origin]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {boolean} [multi_size]
 * @property {Image[]} [images]
 * @property {Object[]} [all_sizes]
 * @property {string[]} [l3_mapping]
 * @property {string} [item_code]
 * @property {boolean} [is_dependent]
 * @property {Brand} [brand]
 * @property {boolean} [is_physical]
 * @property {string} [id]
 * @property {boolean} [is_set]
 * @property {Object} [custom_order]
 * @property {string} [item_type]
 * @property {Media1[]} [media]
 * @property {number} [category_uid]
 * @property {Object[]} [sizes]
 * @property {boolean} [is_expirable]
 * @property {number} [uid]
 * @property {number[]} [departments]
 * @property {string} [slug]
 * @property {string} [template_tag]
 * @property {Object} [tax_identifier]
 * @property {string} [hsn_code]
 * @property {string} [color]
 * @property {string} [size_guide]
 * @property {string} [description]
 * @property {number} [brand_uid]
 * @property {string} [currency]
 * @property {string} [short_description]
 * @property {string} [category_slug]
 * @property {ProductPublished} [product_publish]
 * @property {string[]} [highlights]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */

/**
 * @typedef Trader
 * @property {Object} name
 * @property {string} [type]
 * @property {string[]} [address]
 */

/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {number} [manufacturing_time]
 * @property {boolean} [is_custom_order]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code]
 */

/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */

/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef ProductCreateUpdate
 * @property {Object} [variants_group]
 * @property {Object} name
 * @property {boolean} [is_image_less_product]
 * @property {Object} [variants]
 * @property {string} country_of_origin
 * @property {Object} [_custom_json]
 * @property {TeaserTag} [teaser_tag]
 * @property {string} [bulk_job_id]
 * @property {string} [requester]
 * @property {boolean} [is_active]
 * @property {boolean} [multi_size]
 * @property {Object} [change_request_id]
 * @property {Object} item_code
 * @property {boolean} [is_dependent]
 * @property {Object} [variant_media]
 * @property {string[]} [product_group_tag]
 * @property {string[]} [tags]
 * @property {Trader[]} trader
 * @property {boolean} [is_set]
 * @property {CustomOrder} [custom_order]
 * @property {string} item_type
 * @property {Media1[]} [media]
 * @property {number} [uid]
 * @property {number} [no_of_boxes]
 * @property {number[]} departments
 * @property {string} slug
 * @property {string} template_tag
 * @property {number} company_id
 * @property {TaxIdentifier} tax_identifier
 * @property {NetQuantity} [net_quantity]
 * @property {string} [size_guide]
 * @property {string} [description]
 * @property {number} brand_uid
 * @property {string} category_slug
 * @property {string} [short_description]
 * @property {string} currency
 * @property {ProductPublish} [product_publish]
 * @property {string[]} [highlights]
 * @property {ReturnConfig} return_config
 * @property {string} [action]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {Object} [modified_by]
 * @property {boolean} [is_nested]
 * @property {AttributeMasterFilter} filters
 * @property {AttributeMasterDetails} details
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string[]} [tags]
 * @property {Object} [created_by]
 * @property {string} [unit]
 * @property {boolean} [variant]
 * @property {string} [logo]
 * @property {string[]} departments
 * @property {string} slug
 * @property {string} [modified_on]
 * @property {Object} [synonyms]
 * @property {AttributeMaster} schema
 * @property {string} [description]
 * @property {string} [raw_key]
 * @property {string} [suggestion]
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
 * @property {string} [username]
 * @property {string} [full_name]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductBulkRequest
 * @property {string} [stage]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {number} [failed]
 * @property {string} [created_on]
 * @property {ProductTemplate} [template]
 * @property {string[]} [cancelled_records]
 * @property {UserDetail1} [modified_by]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {string} [template_tag]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {number} [succeed]
 * @property {UserDetail1} [created_by]
 * @property {number} [cancelled]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */

/**
 * @typedef UserInfo1
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [email]
 * @property {string} [user_id]
 */

/**
 * @typedef BulkJob
 * @property {string} [stage]
 * @property {string} [file_path]
 * @property {number} [failed]
 * @property {string} [custom_template_tag]
 * @property {string} created_on
 * @property {Object[]} [cancelled_records]
 * @property {string} [template_tag]
 * @property {string} [tracking_url]
 * @property {UserInfo1} [modified_by]
 * @property {number} total
 * @property {string} [modified_on]
 * @property {Object[]} [failed_records]
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {number} [succeed]
 * @property {UserInfo1} [created_by]
 * @property {number} [cancelled]
 */

/**
 * @typedef BulkResponse
 * @property {string} batch_id
 * @property {string} created_on
 * @property {UserInfo1} [modified_by]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {UserInfo1} [created_by]
 */

/**
 * @typedef BulkProductRequest
 * @property {string} template_tag
 * @property {number} company_id
 * @property {Object[]} data
 * @property {string} batch_id
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
 * @property {string} [stage]
 * @property {number} [company_id]
 * @property {string} [file_path]
 * @property {number} [failed]
 * @property {string} [created_on]
 * @property {string[]} [cancelled_records]
 * @property {string} [tracking_url]
 * @property {UserCommon} [modified_by]
 * @property {string} [id]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {string[]} [failed_records]
 * @property {boolean} [is_active]
 * @property {number} [retry]
 * @property {number} [succeed]
 * @property {UserCommon} [created_by]
 * @property {number} [cancelled]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBulkAssets
 * @property {number} [company_id]
 * @property {string} url
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
 * @property {string} [inventory_updated_on]
 * @property {number} [quantity]
 * @property {string} [currency]
 * @property {Object} [store]
 * @property {number} [sellable_quantity]
 * @property {string} [uid]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {number} [price_effective]
 * @property {number} [item_id]
 * @property {Object} [identifiers]
 * @property {number} [price]
 * @property {number} [price_transfer]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ItemQuery
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 */

/**
 * @typedef GTIN
 * @property {boolean} [primary]
 * @property {Object} gtin_value
 * @property {string} gtin_type
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
 * @property {boolean} [is_set]
 * @property {number} quantity
 * @property {GTIN[]} identifiers
 * @property {string} currency
 * @property {InventorySet} [set]
 * @property {number} [item_length]
 * @property {string} store_code
 * @property {string} [expiration_date]
 * @property {Object} size
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [item_weight]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} price_effective
 * @property {number} [item_height]
 * @property {number} [price]
 * @property {number} [item_width]
 * @property {number} [price_transfer]
 */

/**
 * @typedef InventoryRequest
 * @property {ItemQuery} item
 * @property {number} company_id
 * @property {InvSize[]} sizes
 */

/**
 * @typedef WeightResponse
 * @property {string} unit
 * @property {number} shipping
 * @property {boolean} is_default
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef PriceMeta
 * @property {number} marked
 * @property {number} effective
 * @property {Object} [tp_notes]
 * @property {string} currency
 * @property {number} transfer
 * @property {string} [updated_at]
 */

/**
 * @typedef Trader1
 * @property {string} name
 * @property {string} type
 * @property {string[]} address
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {string} name
 * @property {boolean} is_default
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef QuantityBase
 * @property {string} [updated_at]
 * @property {number} [count]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [damaged]
 */

/**
 * @typedef DimensionResponse
 * @property {string} unit
 * @property {number} height
 * @property {number} width
 * @property {number} length
 * @property {boolean} is_default
 */

/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef InventorySellerResponse
 * @property {Object} identifier
 * @property {WeightResponse} weight
 * @property {Object} [raw_meta]
 * @property {StoreMeta} store
 * @property {UserSerializer} [modified_by]
 * @property {string} seller_identifier
 * @property {string} country_of_origin
 * @property {string} [trace_id]
 * @property {Object} [_custom_json]
 * @property {number} item_id
 * @property {boolean} [is_active]
 * @property {string} [added_on_store]
 * @property {number} total_quantity
 * @property {InventorySet} [set]
 * @property {BrandMeta} brand
 * @property {boolean} fragile
 * @property {string} [expiration_date]
 * @property {boolean} [track_inventory]
 * @property {string[]} [tags]
 * @property {PriceMeta} price
 * @property {Trader1[]} [trader]
 * @property {ManufacturerResponse} manufacturer
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {boolean} [is_set]
 * @property {string} uid
 * @property {CompanyMeta} company
 * @property {Object} [meta]
 * @property {Quantities} [quantities]
 * @property {Object} [tax_identifier]
 * @property {Object} [fynd_meta]
 * @property {DimensionResponse} dimension
 * @property {string} fynd_item_code
 * @property {string} size
 * @property {ReturnConfig1} [return_config]
 * @property {string} fynd_article_code
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {string} [stage]
 * @property {string} [file_path]
 * @property {number} [failed]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string[]} [cancelled_records]
 * @property {Object} [modified_by]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {string[]} [failed_records]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {number} [succeed]
 * @property {Object} [created_by]
 * @property {string} [id]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {number} [quantity]
 * @property {number} [price_marked]
 * @property {string} [currency]
 * @property {string} [expiration_date]
 * @property {string} seller_identifier
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [trace_id]
 * @property {string[]} [tags]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [price_effective]
 * @property {number} [price]
 * @property {string} store_code
 * @property {number} [total_quantity]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {number} company_id
 * @property {InventoryJobPayload[]} sizes
 * @property {string} batch_id
 * @property {Object} [user]
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [url]
 * @property {string} task_id
 * @property {Object} [request_params]
 * @property {number} seller_id
 * @property {string} [status]
 * @property {string} [completed_on]
 * @property {string} [trigger_on]
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [store]
 * @property {string} [type]
 * @property {number[]} [brand]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} task_id
 * @property {Object} [request_params]
 * @property {number} seller_id
 * @property {string} [status]
 * @property {string} [trigger_on]
 */

/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
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
 * @property {string} seller_identifier
 * @property {string} [trace_id]
 * @property {number} store_id
 * @property {string[]} [tags]
 * @property {number} [price_effective]
 * @property {number} [total_quantity]
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
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [tax2]
 * @property {number} [threshold2]
 * @property {string} [hs2_code]
 * @property {number} [threshold1]
 * @property {number} [tax1]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {boolean} [tax_on_esp]
 * @property {string} [hsn_code]
 * @property {string} [id]
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [current]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef HsnUpsert
 * @property {number} [tax2]
 * @property {number} [threshold2]
 * @property {string} hs2_code
 * @property {number} threshold1
 * @property {number} tax1
 * @property {boolean} tax_on_mrp
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {boolean} [tax_on_esp]
 * @property {string} hsn_code
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
 * @property {number} [cess]
 * @property {number} rate
 * @property {string} effective_date
 * @property {number} threshold
 */

/**
 * @typedef HSNDataInsertV2
 * @property {Object} [created_by]
 * @property {string} type
 * @property {string} description
 * @property {TaxSlab[]} taxes
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} country_code
 * @property {string} [modified_on]
 * @property {string} reporting_hsn
 * @property {string} hsn_code
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef ArticleQuery
 * @property {number} item_id
 * @property {string} size
 * @property {number[]} [ignored_stores]
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef AssignStoreArticle
 * @property {number} [quantity]
 * @property {string} [group_id]
 * @property {Object} [meta]
 * @property {ArticleQuery} [query]
 * @property {ArticleAssignment} [article_assignment]
 */

/**
 * @typedef AssignStore
 * @property {string} app_id
 * @property {string} [channel_identifier]
 * @property {number[]} [store_ids]
 * @property {AssignStoreArticle[]} articles
 * @property {string} pincode
 * @property {number} [company_id]
 * @property {string} [channel_type]
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef StoreAssignResponse
 * @property {number} [company_id]
 * @property {number} quantity
 * @property {number} [price_marked]
 * @property {Object[]} [strategy_wise_listing]
 * @property {number} [index]
 * @property {string} [s_city]
 * @property {string} [uid]
 * @property {string} size
 * @property {number} [store_id]
 * @property {string} [group_id]
 * @property {Object} [meta]
 * @property {boolean} status
 * @property {number} item_id
 * @property {ArticleAssignment1} article_assignment
 * @property {number} [price_effective]
 * @property {string} [_id]
 * @property {number} [store_pincode]
 */

/**
 * @typedef BrandItem
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {string[]} [departments]
 * @property {string} [slug]
 * @property {string} [discount]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef Department
 * @property {string} [name]
 * @property {number} [priority_order]
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {string} [slug]
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
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef SecondLevelChild
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef Child
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef CategoryItems
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Action} [action]
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
 * @property {ProductFilters[]} [filters]
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} [operators]
 * @property {ProductListingDetail[]} [items]
 */

/**
 * @typedef ProductDetail
 * @property {number} [rating_count]
 * @property {string} [image_nature]
 * @property {string} [type]
 * @property {string} [name]
 * @property {Object} [teaser_tag]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Media1[]} [medias]
 * @property {string} [item_code]
 * @property {number} [rating]
 * @property {ProductBrand} [brand]
 * @property {string[]} [tryouts]
 * @property {boolean} [has_variant]
 * @property {string} [item_type]
 * @property {Object} [attributes]
 * @property {string} [product_online_date]
 * @property {number} [uid]
 * @property {string} slug
 * @property {Object} [promo_meta]
 * @property {string} [color]
 * @property {string} [description]
 * @property {string} [short_description]
 * @property {string[]} [highlights]
 * @property {string[]} [similars]
 */

/**
 * @typedef InventoryPage
 * @property {boolean} [has_next]
 * @property {string} [next_id]
 * @property {string} type
 * @property {number} item_total
 * @property {boolean} [has_previous]
 */

/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */

/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [user_id]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [opening]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [state]
 * @property {number} [longitude]
 * @property {string} [address1]
 * @property {string} [address_type]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {string} [country_code]
 * @property {number} [pincode]
 * @property {string} [country]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [user_id]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {UserSerializer2} [modified_by]
 * @property {number} [uid]
 * @property {string} [company_type]
 * @property {string} [reject_reason]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [modified_on]
 * @property {UserSerializer2} [created_by]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {boolean} [enabled]
 * @property {string} [password]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [name]
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 */

/**
 * @typedef GetLocationSerializer
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string} name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationIntegrationType} [integration_type]
 * @property {UserSerializer1} [modified_by]
 * @property {Object} [_custom_json]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} code
 * @property {string} display_name
 * @property {string} phone_number
 * @property {Document[]} [documents]
 * @property {UserSerializer1} [created_by]
 * @property {string} [stage]
 * @property {GetAddressSerializer} address
 * @property {number} [uid]
 * @property {GetCompanySerializer} [company]
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {UserSerializer1} [verified_by]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [store_type]
 * @property {string[]} [notification_emails]
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
 * @property {string} app_id
 * @property {string} [name]
 * @property {string} [logo]
 * @property {number} uid
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
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
 * @property {string} [country]
 * @property {string} [country_code]
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
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [verified_on]
 * @property {string} [stage]
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {string} [name]
 * @property {string} [business_info]
 * @property {Document[]} [documents]
 * @property {Object} [_custom_json]
 * @property {string} business_type
 * @property {UserSerializer} [verified_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {ContactDetails} [contact_details]
 * @property {string} [mode]
 * @property {string[]} [notification_emails]
 * @property {number} uid
 * @property {BusinessDetails} [business_details]
 * @property {boolean} [franchise_enabled]
 * @property {string} [created_on]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {string} company_type
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {number} pincode
 * @property {string} city
 * @property {string} address_type
 * @property {string} country
 * @property {string} address1
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {string} [address2]
 * @property {string} state
 * @property {string} [country_code]
 * @property {number} longitude
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */

/**
 * @typedef UpdateCompany
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {Document[]} [documents]
 * @property {Object} [_custom_json]
 * @property {string} [business_type]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {BusinessDetails} [business_details]
 * @property {boolean} [franchise_enabled]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string} [reject_reason]
 * @property {ContactDetails} [contact_details]
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {string} [business_info]
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
 * @property {number} [uid]
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [store]
 * @property {string} [stage]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [product]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [verified_on]
 * @property {string} [stage]
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [modified_by]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [logo]
 * @property {string} [slug_key]
 * @property {string[]} [synonyms]
 * @property {string} [reject_reason]
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [verified_by]
 * @property {string} [description]
 * @property {string} [mode]
 * @property {number} [uid]
 * @property {Object} [_locale_language]
 * @property {string} [created_on]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {number} [uid]
 * @property {string} logo
 * @property {Object} [_locale_language]
 * @property {Object} [_custom_json]
 * @property {string} [brand_tier]
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [company_id]
 * @property {string[]} [synonyms]
 * @property {string} [description]
 * @property {string} name
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} url
 * @property {string} name
 */

/**
 * @typedef CompanyDetails
 * @property {string} [website_url]
 * @property {CompanySocialAccounts[]} [socials]
 */

/**
 * @typedef CompanySerializer
 * @property {string[]} [notification_emails]
 * @property {number} [uid]
 * @property {CompanyDetails} [details]
 * @property {Object} [_custom_json]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [verified_on]
 * @property {string} business_type
 * @property {UserSerializer} [verified_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [market_channels]
 * @property {string} [stage]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {string} [modified_on]
 * @property {string} company_type
 * @property {UserSerializer} [modified_by]
 * @property {string} [name]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {number} [uid]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {string} [stage]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {UserSerializer} [modified_by]
 * @property {CompanySerializer} [company]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number[]} brands
 * @property {number} [uid]
 * @property {number} company
 */

/**
 * @typedef LocationSerializer
 * @property {LocationManagerSerializer} [manager]
 * @property {number} [uid]
 * @property {string[]} [notification_emails]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {Document[]} [documents]
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer} address
 * @property {string} [store_type]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [stage]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} code
 * @property {string} display_name
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {Object} [warnings]
 * @property {string} name
 * @property {number} company
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
 * @property {number[]} [ignored_stores]
 * @property {number} [item_id]
 * @property {string} [size]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleAssignment} [article_assignment]
 * @property {_ArticleQuery} [query]
 * @property {string} [group_id]
 * @property {Object} [meta]
 * @property {number} [quantity]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [pincode]
 * @property {string} [app_id]
 * @property {number} [company_id]
 * @property {number[]} [store_ids]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_identifier]
 * @property {string} [channel_type]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {_ArticleAssignment} [article_assignment]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {string} [s_city]
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {number} [index]
 * @property {number} [preice_effective]
 * @property {Object} [meta]
 * @property {number} [company_id]
 * @property {number} [price_marked]
 * @property {string} [store_pincode]
 * @property {boolean} [status]
 * @property {number} [quantity]
 * @property {string} [size]
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
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef Validation
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 * @property {string[]} [app_id]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [description]
 * @property {string} [title]
 * @property {DisplayMetaDict} [remove]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [app]
 * @property {number} [total]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
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
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {string[]} [types]
 * @property {string[]} [networks]
 * @property {PaymentAllowValue} [uses]
 */

/**
 * @typedef Restrictions
 * @property {string[]} [platforms]
 * @property {string} [user_type]
 * @property {number[]} [user_groups]
 * @property {UsesRestriction} [uses]
 * @property {PriceRange} [price_range]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [ordering_stores]
 * @property {PostOrder} [post_order]
 * @property {Object} [payments]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [cron]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [start]
 */

/**
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef Rule
 * @property {number} [max]
 * @property {number} [key]
 * @property {number} [discount_qty]
 * @property {number} [min]
 * @property {number} [value]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef RuleDefinition
 * @property {string} calculate_on
 * @property {boolean} [is_exact]
 * @property {string} applicable_on
 * @property {string[]} [scope]
 * @property {string} value_type
 * @property {boolean} [auto_apply]
 * @property {string} type
 * @property {string} [currency_code]
 */

/**
 * @typedef CouponAdd
 * @property {CouponAction} [action]
 * @property {Validation} [validation]
 * @property {DisplayMeta} display_meta
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {Identifier} identifiers
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {State} [state]
 * @property {Validity} validity
 * @property {string[]} [tags]
 * @property {string} code
 * @property {Rule[]} rule
 * @property {Ownership} ownership
 * @property {RuleDefinition} rule_definition
 * @property {string} type_slug
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
 * @property {CouponAction} [action]
 * @property {Validation} [validation]
 * @property {DisplayMeta} display_meta
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {Identifier} identifiers
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {State} [state]
 * @property {Validity} validity
 * @property {string[]} [tags]
 * @property {string} code
 * @property {Rule[]} rule
 * @property {Ownership} ownership
 * @property {RuleDefinition} rule_definition
 * @property {string} type_slug
 */

/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
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
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
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
 * @typedef Restrictions1
 * @property {number} [order_quantity]
 * @property {string[]} [platforms]
 * @property {boolean} [anonymous_users]
 * @property {UsesRestriction1} uses
 * @property {number[]} [user_groups]
 * @property {string[]} [user_id]
 * @property {UserRegistered} [user_registered]
 * @property {PostOrder1} [post_order]
 * @property {PromotionPaymentModes[]} [payments]
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
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
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */

/**
 * @typedef PromotionAction
 * @property {string} action_date
 * @property {string} action_type
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [offer_text]
 * @property {string} [name]
 * @property {string} [description]
 */

/**
 * @typedef CompareObject
 * @property {number} [less_than_equals]
 * @property {number} [greater_than]
 * @property {number} [greater_than_equals]
 * @property {number} [less_than]
 * @property {number} [equals]
 */

/**
 * @typedef ItemCriteria
 * @property {number[]} [item_category]
 * @property {string[]} [available_zones]
 * @property {number[]} [item_exclude_id]
 * @property {boolean} [all_items]
 * @property {string[]} [item_size]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_brand]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_company]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_store]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_exclude_brand]
 * @property {string[]} [item_sku]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_exclude_category]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [discount_price]
 * @property {number} [discount_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_percentage]
 * @property {boolean} [apportion_discount]
 * @property {string} [code]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [max_discount_amount]
 * @property {number} [max_offer_quantity]
 */

/**
 * @typedef DiscountRule
 * @property {DiscountOffer} offer
 * @property {string} buy_condition
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 */

/**
 * @typedef PromotionSchedule
 * @property {string} [cron]
 * @property {string} [end]
 * @property {boolean} published
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} start
 */

/**
 * @typedef PromotionListItem
 * @property {string} [calculate_on]
 * @property {boolean} [apply_all_discount]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {Restrictions1} [restrictions]
 * @property {PromotionDateMeta} [date_meta]
 * @property {boolean} [stackable]
 * @property {string} [currency]
 * @property {string} [apply_exclusive]
 * @property {string} promo_group
 * @property {Ownership1} ownership
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {string} mode
 * @property {Visibility} [visiblility]
 * @property {string} application_id
 * @property {PromotionAction} [post_order_action]
 * @property {DisplayMeta1} display_meta
 * @property {Object} buy_rules
 * @property {DiscountRule[]} discount_rules
 * @property {string} promotion_type
 * @property {PromotionSchedule} [_schedule]
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {string} [calculate_on]
 * @property {boolean} [apply_all_discount]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {Restrictions1} [restrictions]
 * @property {PromotionDateMeta} [date_meta]
 * @property {boolean} [stackable]
 * @property {string} [currency]
 * @property {string} [apply_exclusive]
 * @property {string} promo_group
 * @property {Ownership1} ownership
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {string} mode
 * @property {Visibility} [visiblility]
 * @property {string} application_id
 * @property {PromotionAction} [post_order_action]
 * @property {DisplayMeta1} display_meta
 * @property {Object} buy_rules
 * @property {DiscountRule[]} discount_rules
 * @property {string} promotion_type
 * @property {PromotionSchedule} [_schedule]
 */

/**
 * @typedef PromotionUpdate
 * @property {string} [calculate_on]
 * @property {boolean} [apply_all_discount]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {Restrictions1} [restrictions]
 * @property {PromotionDateMeta} [date_meta]
 * @property {boolean} [stackable]
 * @property {string} [currency]
 * @property {string} [apply_exclusive]
 * @property {string} promo_group
 * @property {Ownership1} ownership
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {string} mode
 * @property {Visibility} [visiblility]
 * @property {string} application_id
 * @property {PromotionAction} [post_order_action]
 * @property {DisplayMeta1} display_meta
 * @property {Object} buy_rules
 * @property {DiscountRule[]} discount_rules
 * @property {string} promotion_type
 * @property {PromotionSchedule} [_schedule]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {string} [title]
 * @property {boolean} [is_hidden]
 * @property {string} [example]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [type]
 * @property {string} [entity_type]
 * @property {string} [entity_slug]
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
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 * @property {number} [total]
 * @property {string} [description]
 */

/**
 * @typedef RawBreakup
 * @property {number} [subtotal]
 * @property {number} [gst_charges]
 * @property {number} [vog]
 * @property {number} [convenience_fee]
 * @property {number} [delivery_charge]
 * @property {number} [cod_charge]
 * @property {number} [you_saved]
 * @property {number} [fynd_cash]
 * @property {number} [total]
 * @property {number} [mrp_total]
 * @property {number} [coupon]
 * @property {number} [discount]
 */

/**
 * @typedef CouponBreakup
 * @property {number} [minimum_cart_value]
 * @property {string} [coupon_type]
 * @property {boolean} [is_applied]
 * @property {string} [uid]
 * @property {number} [max_discount_value]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [sub_title]
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [code]
 * @property {number} [coupon_value]
 * @property {number} [value]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {string[]} [message]
 * @property {number} [value]
 */

/**
 * @typedef CartBreakup
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 */

/**
 * @typedef ProductPrice
 * @property {number} [add_on]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {string} [currency_code]
 * @property {number} [selling]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef FreeGiftItem
 * @property {number} [item_id]
 * @property {Object} [item_price_details]
 * @property {string} [item_name]
 * @property {string[]} [item_images_url]
 * @property {string} [item_slug]
 * @property {string} [item_brand_name]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier]
 * @property {string} [article_id]
 * @property {number} [quantity]
 * @property {FreeGiftItem} [free_gift_item_details]
 */

/**
 * @typedef DiscountRulesApp
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [raw_offer]
 * @property {Object} [offer]
 * @property {Object} [item_criteria]
 */

/**
 * @typedef AppliedPromotion
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [promo_id]
 * @property {number} [article_quantity]
 * @property {BuyRules[]} [buy_rules]
 * @property {boolean} [mrp_promotion]
 * @property {string} [offer_text]
 * @property {string} [promotion_type]
 * @property {string} [promotion_name]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {number} [amount]
 * @property {string} [promotion_group]
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
 * @typedef Tags
 * @property {Object} [tags]
 */

/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [secure_url]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef CartProduct
 * @property {ProductAction} [action]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Tags} [teaser_tag]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {ProductImage[]} [images]
 * @property {string} [type]
 * @property {BaseInfo} [brand]
 * @property {string[]} [tags]
 * @property {CategoryInfo[]} [categories]
 */

/**
 * @typedef CouponDetails
 * @property {string} [code]
 * @property {number} [discount_single_quantity]
 * @property {number} [discount_total_quantity]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef ProductAvailability
 * @property {string[]} [sizes]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_code]
 * @property {number} [marked]
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef ProductArticle
 * @property {string} [uid]
 * @property {boolean} [is_gift_visible]
 * @property {string} [size]
 * @property {Object} [identifier]
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [parent_item_identifiers]
 * @property {BaseInfo} [seller]
 * @property {BaseInfo} [store]
 * @property {Object} [extra_meta]
 * @property {Object} [gift_card]
 * @property {number} [quantity]
 * @property {string[]} [product_group_tags]
 * @property {string} [type]
 * @property {string} [seller_identifier]
 * @property {boolean} [is_gift]
 */

/**
 * @typedef CartProductInfo
 * @property {boolean} [is_set]
 * @property {string} [discount]
 * @property {Object} [bulk_offer]
 * @property {ProductPriceInfo} [price]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [parent_item_identifiers]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {string} [key]
 * @property {CartProduct} [product]
 * @property {number} [quantity]
 * @property {string} [message]
 * @property {string} [coupon_message]
 * @property {CouponDetails} [coupon]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductAvailability} [availability]
 * @property {ProductArticle} [article]
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
 * @property {string} [city]
 * @property {string} [landmark]
 * @property {string} [area_code_slug]
 * @property {string} [name]
 * @property {string} area_code
 * @property {number} [phone]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [address]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {Object} [meta]
 * @property {number} [pincode]
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
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 */

/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */

/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} product_id
 * @property {number} cashback_applied
 * @property {number} [employee_discount]
 * @property {number} delivery_charges
 * @property {number} price_marked
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} coupon_effective_discount
 * @property {Object} [extra_meta]
 * @property {number} cod_charges
 * @property {number} price_effective
 * @property {number} [quantity]
 * @property {string} size
 * @property {number} amount_paid
 * @property {number} [loyalty_discount]
 * @property {CartItemMeta} [meta]
 * @property {number} discount
 * @property {OpenApiFiles[]} [files]
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {Object} [employee_discount]
 * @property {number} cashback_applied
 * @property {string} [comment]
 * @property {string} [gstin]
 * @property {number} delivery_charges
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {OpenApiOrderItem[]} cart_items
 * @property {string} [order_id]
 * @property {number} coupon_value
 * @property {ShippingAddress} billing_address
 * @property {ShippingAddress} [shipping_address]
 * @property {number} cart_value
 * @property {number} cod_charges
 * @property {string} [coupon]
 * @property {string} coupon_code
 * @property {number} [loyalty_discount]
 * @property {string} [payment_mode]
 * @property {string} [currency_code]
 * @property {string} [affiliate_order_id]
 * @property {OpenApiFiles[]} [files]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [order_ref_id]
 * @property {string} order_id
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef AbandonedCart
 * @property {string} _id
 * @property {Object} [promotion]
 * @property {string} [order_id]
 * @property {Object[]} [shipments]
 * @property {boolean} [buy_now]
 * @property {string} last_modified
 * @property {Object} [pick_up_customer_details]
 * @property {Object} [fynd_credits]
 * @property {number} [cart_value]
 * @property {string} expire_at
 * @property {Object[]} articles
 * @property {Object} [meta]
 * @property {string} created_on
 * @property {number} [bulk_coupon_discount]
 * @property {boolean} [is_active]
 * @property {Object} [coupon]
 * @property {string} [payment_mode]
 * @property {Object} cashback
 * @property {number} [discount]
 * @property {string} [app_id]
 * @property {boolean} [is_archive]
 * @property {number} uid
 * @property {string} [comment]
 * @property {Object} [delivery_charges]
 * @property {Object[]} [payment_methods]
 * @property {boolean} is_default
 * @property {Object} [payments]
 * @property {string} [checkout_mode]
 * @property {number[]} [fc_index_map]
 * @property {boolean} [merge_qty]
 * @property {Object} [cod_charges]
 * @property {string} user_id
 * @property {string} [gstin]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {Object} [result]
 * @property {boolean} [success]
 * @property {AbandonedCart[]} [items]
 * @property {Page} [page]
 * @property {string} [message]
 */

/**
 * @typedef AddProductCart
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {string} [gift_message]
 * @property {boolean} [pos]
 * @property {number} [seller_id]
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [article_assignment]
 * @property {string} [display]
 * @property {Object} [extra_meta]
 * @property {number} [quantity]
 * @property {string[]} [product_group_tags]
 * @property {string} [item_size]
 * @property {number} [store_id]
 * @property {boolean} [is_gift]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */

/**
 * @typedef CartDetailResponse
 * @property {CartBreakup} [breakup_values]
 * @property {string} [checkout_mode]
 * @property {boolean} [buy_now]
 * @property {string} [gstin]
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartProductInfo[]} [items]
 * @property {CartCurrency} [currency]
 * @property {string} [message]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [partial]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef UpdateProductCart
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {number} [item_index]
 * @property {string} [gift_message]
 * @property {Object} [parent_item_identifiers]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [extra_meta]
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {boolean} [is_gift]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 * @property {boolean} [success]
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
 * @typedef E
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
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
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef HistoryPretty
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
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
 * @typedef HistoryRes
 * @property {HistoryPretty[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
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
 * @typedef Points
 * @property {number} [available]
 */

/**
 * @typedef Referral
 * @property {string} [code]
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
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */

/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */

/**
 * @typedef Schedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef ShareMessages
 * @property {string} [email]
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
